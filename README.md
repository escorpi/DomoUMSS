# Servidor Node.js para el Sistema de Control Domótico de Vivienda Unifamiliar
![DomoUMSS](https://lh3.googleusercontent.com/yKqMx790gLrBXY4tdYMoVo04o8mCAg-aPhQbgy7nQJnWAmRt0r4arvbzb4r-g302mToyvOy42Q_jwbdNnXUfx2pAgbcWvh3pWGy12HdA31SGl1JWDNDKldYGF_mfev91suTYcbOj0VmcqB6-pSBvdKnQenYVDbQNDQUkcToKWNrSbr49P_5S6rRT_-xGRViv8atRcUhywyaahHP9BnKm1DaiJOFUcXnOdX9vV6XWsfmMH1n5cAxZd0ZXegA2FZfIUWiXcciTJ662oaXRtZUHnUpXJY0uNMpbYA21hB1qzg_Yplt2egMbXiH9DUGZIBlkzMEWR4s6StGYYGo1tTe6csRsrz6fApgdyQ69dftdOWY02a-h7UJ4_PzsEeErpXDvsWgLnXecy5LrdKcC9RZV7EKQQ50ExgX6P0qRy3Z8Rb5KMrnaI475l3rFDH6cYoiHfH_41HjHbjvVvroxNttOQ5OLjfbJ-OyDFSOY2yMT8G__HMyl9Getn9mCwui7B0bKDEYjQYnEPUuhD-Y3HJW0_8n9C0XdEFYl9Q9yu0fyuFjfpF_MQfvlo6kRUYKKwJwPbylH6g2UqFaMxlmzvj6Ril44uZCAfToiKtieHePLjdPSIP8vUH8bMchLyRZOZlQ-PW7e0Tmq7OsgXTFzOxfmuqyf29Zzh2Cyp0SusVNszMqYAjoWDHWmkpTrSUOz=w543-h767-no)
## Estructura del Sistema
Tiene la parte del hardware, compuesto de sensores/actuadores y la placa controladora. La informacion recogida sera enviada al servidor por comunicacion serial.  
El servidor  es una raspberry pi 2 con el SO rasbyan, el cual esta instalado node y sus dependencias, tanto el mudulo para comunicacion serial ***serialport*** y para el tiempo real ***socket.io***.  
Y por ultimo la plataforma web  donde sera accedido por los usuarios finales mediante PC´s, portatiles o desde dispositivos inteligentes atraves de internet o mediante la red local de la vivienda.
![estructura del sistema](https://lh3.googleusercontent.com/ddWmL1vdm3TzFBr-neOcNKhzZSDwFypOrSf0kLuu9-gPsAKMsrsI6jiGMcTonxZnpJWgUErPCP7xjC34m1L_yEUxxLZP7v3wJwitZwwiiX_NxykStSKdiB9xPcYRvUmCJuq5CX0UeAwf-ySpBFZ1Usutwwwy2uPAOV2tp99Q4W-lrefnSKNtjDTVJXsdOLVmmasShA1mvv3t4owPXQhaDWhQMVKFtDZ4Ov1lYa5jw4dXDru71RUe09WNvHL1l3uvvuPpIeJZs38nAddRNXmSMfxF5TswAFXSUOEI7zzrpjc6rhga3vMbN6-22nby5Ynwi2Pw4uPvFazsWJ54I6QgHOk2dBvN8wC31mjxje0OHxR3sgCSQFQoG73Fop0iuqvZAaPNrY_kgMc8BdDAVl5kG5Hfi2j5lNMrFSCkpAJ7VInzAPffymeSmOiMRNkshoSvhezKyX2mmKWqlpZIRNjazTk9pOcouuGNScClSMp9mqPSrOBJ3jGSJPsM5c-HrJv6yQHRJDSjh1yIajoL7IZToM06_G9d4CgAMpob2c_k7BzUtxvGM0asd1r_MxtxYQBV2jt-gnEHbYqg7mwWbyyk_FwiqkBI3mUr9RnskJpdEVbNMF-xe4XpoRhWlwmHpPCbGSD7BQmlMHSaJEyhM46-oqbqIKgvB9qWNfB36otZbXiuzC2TyqUpdS5n3jvF=w1213-h682-no)
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
![diseño del montaje](https://lh3.googleusercontent.com/JH9rFOXnRzC_TehpZklmjy8Qs6IudKsAFdBkboSItOTy9J8k6DL9OnvH-Ye71BGNOzizLQ8T82ppgYQ6ozEupD8LgVPRZJQZoNkeCjOs-0qHL43Dd7DKdP1pYpn2FF_Fj3dv4yR2PDWW5n2muU6UxJhm-fJ4kK5cdFsC4SGjrkTK9wveFcDvaIPBErfk00suHElWexFWoU-Fo5or6ISDrMcobpAfB2egDsulF--W5Vuq5AxJnOeHJpmk-7FfLrwwTEOwbFEv3jOr-DZLu13L0G48-1C6Teotob8By8kNAseoRDyC6xnkcDtIAGVl_2DYU07YNeABt3Iz7kjPoVbPLqauisZukWLTlc9Z1w6aP6mEgpS6sbt0f40KX_GagIaReWNGYu22zVvyPmWOxzVmezeC36ApxQDUxaDb9Bt7W1xiQmfNcs9ZxgHT-NqplHdCQ-N6E8F2n6wHghk5k-3iUra_JO2-Y06fa1uo9UnTvchoYrnKEbANWrLQK5OWvw3QeOtBTkDK3eqCu--eMxt54z5g7P0saa3oFWOQyqyvT3rljtmrML6a3NeZsirxuVR07PuIKxwfv33D2aDTKcHusPjNmeFM99v4VQ7fodLvIucsmF36hWNVNoA-x4oQ8bncvcn0zzwJSzzqY-fXCjwScpre-AFetjdPvOvcNRCy40oVDlfTEaaWKi4h9y-A=w973-h767-no)
- lorem!	....................
- .....................
- ................
- ...........
- .
[Codigo Arduino](https://drive./open?id=0B1G6ktZEPmhpeWpNcnRKcVhsR0E)
