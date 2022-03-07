# Primera entrega del proyecto final
## "Vivamos Bariloche: tienda online"
Este es un proyecto para el curso "Programación Backend" de Coderhouse.

## Uso e instalación
Para su uso, se debe instalar el paquete de npm:
```
npm install
```
Si desea probar la aplicación, debe ejecutar el comando:
```
$ git clone https://github.com/GerardoCoria/Curso-Backend-desafios/tree/master/Desafio_clase_14
```
Luego ejecute:
```
$ cd Desafio_clase_14
```
Para iniciar la aplicación:
```
$ npm start
```
## Protección de rutas
Las rutas de la aplicación son protegidas por un middleware. Esto está implementado en el archivo "userForbidden.js". En dicho archivo, la constante "user" está seteada en "false", pudiendose cambiarla.

## Prueba de la aplicación
Para probar la aplicación, se debe instalar y ejecutar "Postman", que es una aplicación que sirve para verificar los métodos GET, POST, PUT y DELETE.
Para descargar Postman, vaya a: https://www.postman.com/downloads/