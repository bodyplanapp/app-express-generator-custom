start postgresSQL server: pg_ctl -D "C:\Program Files\PostgreSQL\10\data" restart

install postgres on sequelize cmd:  npm install --save sequelize pg pg-hstore

init sequelize cmd: sequelize init

start in deevlopment mode: npm start

create a model cmd: sequelize model:create --name Todo --attributes title:string

migrate db cmd: sequelize db:migrate

npm run <custom_script_name>

Existen muchos paquetes de npm que son de mucha utilidad asi como express, entre ellos estan Morgan y Winston, el primero de estos nos ayuda a registrar el acceso a todas las rutas e imprimirlas por pantalla y el segundo nos permite utilizar un log personalizado para imprimir por pantalla e inclusive guardarlos en archivos.

DUDAS

configurar env

ubicacion de bin

ubicacion de logs

ubicacion clave token

index.js y server.js

