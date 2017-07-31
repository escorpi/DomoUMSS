//coneccion con el servidor
var sock=io.connect('http://192.168.1.111:4000');

var temperatura=0;var humedad=0; var gas=0;
//el cliente envia un mensaje cada 10s
setInterval(function(){
	sock.emit("send","desde el cliente");
},10000);
//se recive la respuesta al mesaje con el valor  de la temperatura
sock.on('temperatura', function (data) {
			var temperatura2=data.t;
		});
///acciones para la simulacion de presencia
sock.on('simu', function (data) {
      var patio=document.getElementById('sPatio');
      var cocina=document.getElementById('sCocina');
      var sala=document.getElementById('sSala');
      var dormitorio=document.getElementById('sDormitorio');
      var lavado=document.getElementById('sLavado');
      var tv=document.getElementById('sTv');
      var radio=document.getElementById('sRadio');
      var dtv=document.getElementById('sdTv');
      var dradio=document.getElementById('sdRadio');
      if(data.d=='activar'){
        console.log("Simulacion de presencia encendida:"+data.d);
        patio.textContent = 'Patio de 18:00 - 6:00';
        cocina.textContent = 'Cocina de 18:00 - 20:00';
        sala.textContent = 'Sala de 19:00 - 21:00';
        dormitorio.textContent = 'Dormitorio de 20:00 - 23:00';
        lavado.textContent = 'Lavado de 18:00 - 6:00';
        tv.textContent = 'Television encendida de 18:00 - 6:00';
        radio.textContent = 'Radio encendida de 18:00 - 22:00';
        dtv.textContent = 'Television encendida de 12:00 - 14:00';
        dradio.textContent = 'Radio encendida de 7:00 - 12:00, 14:00 - 18:00';
      }
      if(data.d=='reset'){
        console.log("Simulacion de presencia apagada:"+data.d);
        patio.textContent = '';
        cocina.textContent = '';
        sala.textContent = '';
        dormitorio.textContent = '';
        lavado.textContent = '';
        tv.textContent = '';
        radio.textContent = '';
        dtv.textContent = '';
        dradio.textContent = '';
      }

    });
sock.on('toogles', function (data) {
      var swicth1='a'+data.t1;
      var swicth2='b'+data.t2;
      var swicth3='c'+data.t3;
      var swicth4='d'+data.t4;
      console.log("tamaño:"+swicth1);
      iniciar(swicth1);
      iniciar(swicth2);
      iniciar(swicth3);
      iniciar(swicth4);
    });
//comprobar  si esta enlinea con el servidor.
sock.on('disconnect', function ()
   {
        console.log('desconectado!');
        alert("Se perdio conexion con el servidor");
        //open(location, '_self').close();
   });
//=================== aki pruebo con firebase ============================\\\\\\\\\\\\\\\\\\
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8tlVQwnmQfI62NJxIpmGdM5tYsokDUao",
    authDomain: "domotica-umss.firebaseapp.com",
    databaseURL: "https://domotica-umss.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
  console.log("se inicializo firebase!!");
  var bdSensores= firebase.database().ref().child('sensores');
  var bdActuadores= firebase.database().ref().child('actuadores');

// recuperar datos
bdSensores.on('value', function(snapshot){
   var s= snapshot.val();
  console.log("f-gas:"+s.gas);
  console.log("f-temperatura"+s.temperatura);
  console.log("f-humedad:"+s.humedad);
});
// escribir datos
function actualizarFB(a,b,c){

bdSensores.update({
  gas:a,
  humedad:b,
  temperatura:c
});
}
function escribirFB(a){

  bdActuadores.update({
    a:1
});
}
//=====================fin ==========================================\\\\\\\\\\\\\\\\\\\\\

//////////////////////////////////////////////////////////////////////////////
iosocket=sock;
iosocket.on('sensor', function (data) {
		    temperatura=data.st;
		    humedad=data.sh;
		    gas=data.sg;
			//console.log("temp:"+temperatura+"hum:"+humedad);
    		graficarT(temperatura);
    		graficarH(humedad);
        actualizarFB(gas,humedad,temperatura);
		});

    //animacion Temp
function graficarT(datos){
    var maximo=28;var media=18;var minima=-10;
    var v=document.getElementById('valor');
    var div=document.getElementById('temp');
    var baja=document.getElementById('baja');
    var normal=document.getElementById('normal');
    var alta=document.getElementById('alta');
    var valor=datos;
        if(valor>(maximo-1)) {
            alta.style.display='inline';
            baja.style.display='none';
            normal.style.display='none';
        }else{
          if (valor>(media-1)&&valor<(maximo)) {
            normal.style.display='inline';
            alta.style.display='none';
            baja.style.display='none';}
             else{
            baja.style.display='inline';
            alta.style.display='none';
            normal.style.display='none';};
        }
    v.innerHTML=''+valor+'&deg;'+'C';
}
function graficarH(datos){
    var maximo=datos;
    var b=document.getElementById("barraH");
    var v=document.getElementById('valorH');
    v.innerHTML=''+datos+'%';

}

//////nueva ventana para mostar camara
function abrir(ancho,alto,ruta,titulo)
{
var miventana;
var posicion_x;
var posicion_y;
posicion_x=(screen.width/2)-(ancho/2);
posicion_y=(screen.height/2)-(alto/2);
miventana=open("http://192.168.1.101:5000","Camara","width="+ancho+",height="+alto+",menubar=0,toolbar=0,directories=0,scrollbars=0,resizable=0,left="+posicion_x+",top="+posicion_y+"");
}
/////////////cambiar estados de los interuptotes //actualiza en firebase
function onoff(name){
  switch (name) {
  case "on1":
      iosocket.emit('buttonval','a0');
      bdActuadores.update({
          a:0
      });
    break;
  case "off1":
      iosocket.emit('buttonval','a1');
      bdActuadores.update({
          a:1
      });
    break;
  case "on2":
      iosocket.emit('buttonval','b0');
      bdActuadores.update({
          b:0
      });
    break;
  case "off2":
        iosocket.emit('buttonval','b1');
        bdActuadores.update({
          b:1
      });
    break;
  case "on3":
      iosocket.emit('buttonval','c0');
      bdActuadores.update({
          c:0
      });
    break;
  case "off3":
      iosocket.emit('buttonval','c1');
      bdActuadores.update({
          c:1
      });
    break;
  case "on4":
      iosocket.emit('buttonval','d0');//escribirFB('d:0');
      bdActuadores.update({
          d:0
      });
    break;
  case "off4":
        iosocket.emit('buttonval','d1');//escribirFB('d:1');
        bdActuadores.update({
          d:1
      });
    break;

  default:
    alert.log("e494");
  }
}
//=====actualiza los estaos de los demas clientes conectados=======\\\
function iniciar(name){
  name=name+"";
  switch (name) {
  case 'a1':
      //$('#neon1').hide();
      //$('#inset1').show();
      $('#inset1').hide();
      $('#neon1').show();
    break;
  case 'a0':
      //iosocket.emit('buttonval','a1');
      $('#inset1').show();
      $('#neon1').hide(); //oculto mediante id
    break;
  case "b1":
      //$('#neon2').hide();
      //$('#inset2').show();
      //iosocket.emit('buttonval','b1');
      $('#inset2').hide();
      $('#neon2').show();
    break;
  case "b0":
        //$('#inset2').hide();
        //$('#neon2').show();
        //iosocket.emit('buttonval','b0');
      $('#inset2').show();
      $('#neon2').hide(); //oculto mediante id
    break;
    case 'c1':
      //$('#neon1').hide();
      //$('#inset1').show();
      $('#inset3').hide();
      $('#neon3').show();
    break;
  case 'c0':
      //iosocket.emit('buttonval','a1');
      $('#inset3').show();
      $('#neon3').hide(); //oculto mediante id
    break;
  case "d1":
      //$('#neon2').hide();
      //$('#inset2').show();
      //iosocket.emit('buttonval','b1');
      $('#inset4').hide();
      $('#neon4').show();
    break;
  case "d0":
        //$('#inset2').hide();
        //$('#neon2').show();
        //iosocket.emit('buttonval','b0');
      $('#inset4').show();
      $('#neon4').hide(); //oculto mediante id
    break;

  default:
    alert.log("e494");
  }
}
// funcion de simulacion envio de accion al servidor
function activar(){
  iosocket.emit('activar','activar');
}
function reset(){
  iosocket.emit('activar','reset');
}
