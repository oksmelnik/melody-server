# Server for the game project

Build the multiplayer game with SocketIO

## My goals were:

Learning Goals:

* Learn about and work with real-time data for the better players experience
* Try Websockets 
* Connect a frontend (React/Redux) with a backend (NodeJS)
* Get more comfortable with Redux

Link to the frontend:

[Frontend](https://github.com/oksmelnik/melody)


It has these endpoints:

* `POST /users`: sign up as new user
* `POST /logins`: log in and receive a JWT
* `POST /games`: create a new game
* `POST /games/:id/players`: join an existing game
* `PATCH /games/:id`: update an existing game
* `GET /games`: list all games
* `GET /games/:id`: one game
* `GET /users`: list all users

