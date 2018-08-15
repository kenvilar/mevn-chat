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

How to delete room
```
curl -i -X DELETE http://localhost:3000/api/room/<id>   
# for example curl -i -X DELETE http://localhost:3000/api/room/5b7442323ce7b450550eff86
```
