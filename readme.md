Meteor course boilerplate

Default meteor app with signup/login features, complete with scss code.
To start, first:

1. Type in the CLI the following commands:
  1.a.: meteor npm install
  1.b.: meteor add fourseven:scss accounts-password session
  1.c.: meteor remove insecure autopublish (this will allow the app to manage publish and subscribe events correctly when the user is logged in)
2. To add a Mocha test package, add the following: meteor add cultofcoders:mocha.
3. Pray. hard.

Phusion Passenger

In general. all you need is an environement that has a PORT, ROOT_URL, and MONGO_URL environment variable (docs). This will let you work with any VPS service you want.
