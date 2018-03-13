Meteor course boilerplate

Default meteor app with signup/login features, complete with scss code.
To start, first:

1. Type in the CLI the following commands:
  1.a.: meteor npm install
  1.b.: meteor add fourseven:scss accounts-password session
  1.c.: meteor remove insecure autopublish (this will allow the app to manage publish and subscribe events correctly when the user is logged in)
2. To add a Mocha test package, add the following: meteor add cultofcoders:mocha.
3. Add to git / github
4. Deploy to heroku.
  4.a.: heroku create <app-name>
  4.b.: Add a Meteor BuildPack: heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpacks-horse.git (to add a buildback necessary for heroku to deploy meteor apps)
  4.c.: change the package.json file adding the following code after the dependencies section (with the initial comma):
    "engines": {
      "node": "<result of the command node -v in the terminal>"
    }
  4.d.: Add the mongolab addon: heroku addons:create mongolab:sandbox
  4.e.: Add the ROOT_URL: heroku config:set ROOT_URL="<URL of the heroku app>"
5. Pray. hard.

Phusion Passenger

In general. all you need is an environement that has a PORT, ROOT_URL, and MONGO_URL environment variable (docs). This will let you work with any VPS service you want.
