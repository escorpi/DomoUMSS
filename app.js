var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var socketio = require('socket.io').listen(4000);
var SerialPort = require("serialport").SerialPort;
//var firebase = require("firebase");

///serial
//var serialPort;
//var portName = 'COM41'; //change this to your Arduino port
var sendData = "55";
//=== almacenamiento de datos ====\\\\\\\
var swicth1=0;
var swicth2=0;
var swicth3=0;
var swicth4=0;
function modificarDato(caso){
  switch (caso) {
  case "a1":
        swicth1=1;
    break;
  case "a0":
        swicth1=0;
    break;
  case "b1":
        swicth2=1;
    break;
  case "b0":
        swicth2=0;
    break;
  case "c1":
        swicth3=1;
    break;
  case "c0":
        swicth3=0;
    break;
  case "d1":
        swicth4=1;
    break;
  case "d0":
        swicth4=0;
    break;
  default:
    alert.log("e494");
}

}
// para la simulacion
var alarma="reset";
var intervalo;
//var dia= new Date();
function activado(socket){
   verificar(socket);
   intervalo= setInterval(function(){
    verificar(socket);
},6000);
}
function reset(socket){
    clearInterval(intervalo);
        modificarDato('a0');
        serialPort.write('a0');
        modificarDato('c0');
        serialPort.write('c0');
        socket.broadcast.emit('toogles',{t1:swicth1,t2:swicth2,t3:swicth3,t4:swicth4});
        console.log("simulador apagado");
}
function verificar(socket) {
  var dia= new Date();
  var hora=dia.getHours();
  var ahora={hora:dia.getHours(),
              minuto:dia.getMinutes(),
              segundo:''+dia.getSeconds()};
  if(hora >=15 || hora <=6 ){
      modificarDato('a1');
      serialPort.write('a1');
      socket.broadcast.emit('toogles',{t1:swicth1,t2:swicth2,t3:swicth3,t4:swicth4});
      console.log("entro al de dia");//arreglar esto!!!!!!
  }else {
      console.log("no  entro");
  }
  if( ahora.hora<=20){
      modificarDato('c1');
      serialPort.write('c1');
      socket.broadcast.emit('toogles',{t1:swicth1,t2:swicth2,t3:swicth3,t4:swicth4});
  }else {
    console.log("no entro 2");
  }
  console.log('=======>'+ahora.hora+':'+ahora.minuto+':'+ahora.segundo);
}
/// socket IO
socketio.sockets.on("connection",function(socket){
  socket.broadcast.emit('toogles',{t1:swicth1,t2:swicth2,t3:swicth3,t4:swicth4});
  socket.broadcast.emit('simu', {d:alarma});

    socket.on("send",function(){
        console.log("<---- desde el cliente");
        socket.broadcast.emit('humedad', {h:sendData});
    });
    socket.on('activar', function(data) {
        alarma=data;
        if(alarma=='activar'){
            activado(socket);
        }else{
            reset(socket);
        }
        //socket.broadcast.emit('toogles',{t1:swicth1,t2:swicth2,t3:swicth3,t4:swicth4});
        socket.broadcast.emit('simu', {d:alarma});
    });
    //ver

    //ok
    socket.on('buttonval', function(data) {
        bton1=data;//data + 'E'
        console.log("BT enviando a serial--->"+bton1);
        serialPort.write(bton1);
        modificarDato(bton1);
    //  ======  enviar a todos  BD ===\\\
        socket.broadcast.emit('toogles',{t1:swicth1,t2:swicth2,t3:swicth3,t4:swicth4});
    });
    socket.on('sliderval', function(data) {
        //serialPort.write('r'+data);
    });


});

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
/**
// serve the index.html page when someone visits any of the following endpoints:
//    1. /
//    2. /about
//    3. /contact
app.get(/\/(about|contact)?$/, function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// serve up the dashboard when someone visits /dashboard
app.get('/dashboard', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/dashboard.html'));
});*/
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
//comunicacion Serial ini
var socketServer;
var serialPort;
var portName = '/dev/ttyACM0';///dev/ttyAMA0
function serialListener()
{
    var receivedData = "";
    serialPort = new SerialPort(portName, {
        baudrate: 115200,
        // defaults for Arduino serial communication
         dataBits: 8,
         parity: 'none',
         stopBits: 1,
         flowControl: false
    });

    serialPort.on("open", function () {
      console.log('open serial communication');
            // Listens to incoming data
       //var sendData;
        serialPort.on('data', function(data) {
             receivedData += data.toString();
             //console.log('datos recividos de serialport'+receivedData);
          if (receivedData .indexOf('E') >= 0 && receivedData .indexOf('B') >= 0) {
            sendData = receivedData .substring(receivedData .indexOf('B') + 1, receivedData .indexOf('E'));
               var sensores = sendData;
               var s = sensores.split(" ");
               var st=s[0];
               var sg=s[1];
               var sh=s[2];
               console.log('temperatura:'+st+' Gas:'+sg+' humedad:'+sh);
             sendData=st;
             sendDataH=sh;
             sendDataG=sg;
           receivedData = '';
         }
         // send the incoming data to browser with websockets.
         var date = new Date().getTime();
       socketio.emit('sensor',{st:sendData,sh:sendDataH,sg:sendDataG} );
       sendData=sendData*1.000;
       socketio.emit('temperatureUpdate',date,sendData );
       console.log("a la pagina:-->"+sendData);
      });
    });
}
serialListener();
/*/ //fin de serial
setInterval(function(){
            var sendData =Math.random() * (30 - (-3)) + (-3);
             var sendDataH=Math.random() * (100 - 0) + 0;
             var sendDataG=Math.random() * (50 - 0) + 0;
             var date = new Date().getTime();console.log("nnnn:"+sendData);
  socketio.emit('sensor',{st:sendData,sh:sendDataH,sg:sendDataG} );
  socketio.emit('temperatureUpdate',date,sendData );
},10000);//*/

module.exports = app;
