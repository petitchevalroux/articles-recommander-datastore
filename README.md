# articles-recommander-datastore
A jsonapi server to articles-recommander data

## Run

### Launch mysql server using docker
```
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=pw -d mysql:5
```

### Build database schema
```
node src/bin/automigrate.js
```

## Start jsonapi server
```
node src/server.js
```

## Configuration
### Mysql
    Mysql datasource is configured in src/datasources.json file
