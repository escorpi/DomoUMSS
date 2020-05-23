# Servidor Node.js para el Sistema de Control Domótico de Vivienda Unifamiliar
![DomoUMSS](https://user-images.githubusercontent.com/4119658/82742439-27330b80-9d2c-11ea-931d-3f8948f081b8.png))
## Estructura del Sistema
Tiene la parte del hardware, compuesto de sensores/actuadores y la placa controladora. La informacion recogida sera enviada al servidor por comunicacion serial.  
El servidor  es una raspberry pi 2 con el SO rasbyan, el cual esta instalado node y sus dependencias, tanto el mudulo para comunicacion serial ***serialport*** y para el tiempo real ***socket.io***.  
Y por ultimo la plataforma web  donde sera accedido por los usuarios finales mediante PC´s, portatiles o desde dispositivos inteligentes atraves de internet o mediante la red local de la vivienda.
![estructura del sistema](https://user-images.githubusercontent.com/4119658/82742489-d1129800-9d2c-11ea-9106-d7c09d4ff4cd.png)
## Configuraciones
Una ves clonado el sistema, ubicarse dentro del directorio y ejecutar:  
`npm start`  
Lo recomedable es eliminar el directorio **node_modules** y ejecutar el comando:  
`npm install`  
Si eres usuario linux  verifica tu puerto para la comunicacion serial, esto se modifica en la linea de codico:   
`var portName = '/dev/ttyACM0';//  /dev/ttyAMA0`  
en windowns son los puertos COM:  
`var portName = 'COM1';`  
verifica siempre en que puerto estan conectados, para la comunicacion serial.
## Hardware
![diseño del montaje](https://user-images.githubusercontent.com/4119658/82742495-fef7dc80-9d2c-11ea-865a-91b3e667d659.png)
- lorem!	....................
- .....................
- ................
- ...........
- .
[Codigo Arduino](https://drive./open?id=0B1G6ktZEPmhpeWpNcnRKcVhsR0E)
