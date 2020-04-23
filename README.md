# Servidor Node.js para el Sistema de Control Domótico de Vivienda Unifamiliar
![DomoUMSS](https://photos.app.goo.gl/QYUXrGC8s284H7468)
## Estructura del Sistema
Tiene la parte del hardware, compuesto de sensores/actuadores y la placa controladora. La informacion recogida sera enviada al servidor por comunicacion serial.  
El servidor  es una raspberry pi 2 con el SO rasbyan, el cual esta instalado node y sus dependencias, tanto el mudulo para comunicacion serial ***serialport*** y para el tiempo real ***socket.io***.  
Y por ultimo la plataforma web  donde sera accedido por los usuarios finales mediante PC´s, portatiles o desde dispositivos inteligentes atraves de internet o mediante la red local de la vivienda.
![estructura del sistema](https://lh3.googleusercontent.com/nWxHwlar7onLFohEqMsbYM0A8ztazryFIH7RnCogMp761KoZ3zkjRYRntCatjo9X4rt4q3-CVj7L2sFDs5-90_JQ7flvktNyLrjA8IqBehq_OQVyQmhcw1wuKjXQOO4ZZ_T3DHV9rnZ5B81dXzIre1H61Mq0Jih2z189ohKGo_X8JAO071lU-ZlAcXaWsuOppOvc3Y0Q469fmKfSQwgt79hDs-Dfy4ZjXwnpZPTQzc1i92rDUvlu2R09nmM6_tshruBjIM-6LQzr0eCz4xoMvSrC44bHfk6pYtOTx4y1PoQM0xJLHSnFfG_p7-uPK5ZXrEHxdofEBDTf0jX87ZySJ4S5NZofseb-qlKnUH--6TInJsSx5Ypa9geJE2Mtx15V5fs_raag5Gng8QOOBCnNThfPDecJ8H2JNcOmKoKvXgDYM3crG7VKwyKjK21PO5XrJX_TagEtoP94x3hwWMp9NsZt3I9lsIjbu0rnAeElTDw24840rcr_4YBoMn8EfTlcyCVBWcAr3Ed1er-LfLZZPK-_nMz4OmSXPsxT-LJRGg3B9skCYirW11NCw246WaPUuKCufwvfQcaBVy8_W1d2Ta3ifHR_3mxIaTw6ppLv65WKpRMtywR90VVe=w989-h556-no)
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
![diseño del montaje](https://lh3.googleusercontent.com/2ZlDs_WBgAe30J-hWms_6JVGlXA9aTXYyhFaSGNsk1ATDaxBmEPWKDliXrVPkMnuC9pDMPs43MbasAq1PsQJo_vSZ3wTM2ZDdW_BZO36DC8DeNKfdXOeKHU7QBal5nw40BmaadWBLSY7wFBev8nw0ZJhYkRHI1Irrq-qluMFr5zhFqZ2cXhMbYgp4FgOdpnsSlK2mGdrCPi4CXi4Miq-3hr7CFRf_fOatrBDNFy1tgT9LKpvD6qjXauYifFVRZlU12EFHuli8s_askg61wv_Ahq-P-ZLwkJ_yc5ehjoM8kmXIUk1x47DFtAknzAb9kseF1M6Rz8mnZGYc_opsV4JMQ2AWT_MmwXg354bGo1HCEuqE0EAXfUrJlQ4mh_bsAI76v3aUmNDjGL4DUpy5Dt35_kvGSpX6vL7oIoEgK1_9cLSWFciYBSbjUkn9aky8NzZt-ln1EEQvpvSBemmRGo5xnSRPZQP9vpM2r-3cAuglgImv-5J_8FcyoWAOzzYEhMrPYMUcQ-_Hh6UkD16sM38B14kq5aeLrASLOJJYYidOSp1nInxzVLujA1kGWXD6HG8jErVD2eXM9pIZ3bmXcEuJrbtXl7vZ9B77QfpkW_DGClGChFvoNRCSnlP=w705-h556-no)
- lorem!	....................
- .....................
- ................
- ...........
- .
[Codigo Arduino](https://drive./open?id=0B1G6ktZEPmhpeWpNcnRKcVhsR0E)
