#Desafío clase 30

###Lista de comandos Fork /Cluster con Node
```
$ nodemon index --s cluster -p 3000
```
###Lista de comandos de Forever
```
$ forever start index.js -p 3000
$ forever start index.js -p 3000 -s cluster
$ forever stopall
$ forever list
````
###Lista de comandos de PM2
```
$ pm2 start index.js
$ pm2 ls
$ pm2 start index.js --name "server2" --watch -- -p 3000
$ pm2 stop all
$ pm2 delete all
$ pm2 start index.js --name "serverCluster" -i max --watch
$ ./nginx.exe -s reload



