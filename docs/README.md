Run the app
```
npm start
```

Test the REST API
```
curl -i -H "Accept: application/json" localhost:3000/api/room
```

Populate Room collection
```
curl -i -X POST -H "Content-Type: application/json" -d '{ "room_name":"Javascript" }' localhost:3000/api/room
```
