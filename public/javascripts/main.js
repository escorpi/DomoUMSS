$(document).ready( function() {
/*    var temperatura=0;var humedad=0;
    setInterval(function(){
    var value = Math.round( Math.random() * 100 );
    temperatura=value; console.log(value); 
    humedad=temperatura+10;   
    //console.log("--T--"+temperatura);
    graficarT(temperatura);
    graficarH(humedad);
},5000);
    //animacion Temp
function graficarT(datos){
    var maximo=datos;
    var b=document.getElementById("barra");
    var v=document.getElementById('valor');
    b.value=-10;
    b.max=100;
    var j=1;
    var progreso=setInterval(function aumentar(){
        j=j+1;
        b.value=j;
        v.innerHTML=''+j+'°C';
        //console.log("----"+j);
        if(j>(maximo-1)) {
            clearInterval(progreso);//console.log("entro al if");
        }
    },50);
}*/
//animacion humedad
/*function graficarH(datos){
    var maximo=datos;
    var b=document.getElementById("barraH");
    var v=document.getElementById('valorH');
    b.value=-10;
    b.max=100;
    var j=1;
    var progresoH=setInterval(function aumentar(){
        j=j+1;
        b.value=j;
        v.innerHTML=''+j+'%';
        //console.log("----"+j);
        if(j>(maximo-1)) {
            clearInterval(progresoH);//console.log("entro al if H");
        }
    },50);
}
*/
	// Logo
	var $logo 	= $('#logo');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  $logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
	});	
function animMeter(){
    $(".meter > span").each(function() {//$(this).width()
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 600,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });
    });
//////nueva ventana 
/*function abrir(ancho,alto,ruta,titulo) 
{ 
var miventana; 
var posicion_x; 
var posicion_y; 
posicion_x=(screen.width/2)-(ancho/2); 
posicion_y=(screen.height/2)-(alto/2); 
miventana=open("http://153.156.43.44:8090/","miventana","width="+ancho+",height="+alto+",menubar=0,toolbar=0,directories=0,scrollbars=0,resizable=0,left="+posicion_x+",top="+posicion_y+"");
}*/

