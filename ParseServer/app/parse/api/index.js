
var ParseServer = require('parse-server').ParseServer;
var api = new ParseServer({
  databaseURI: "mongodb://localhost:27017/parse",
  cloud: __dirname + '/cloud/main.js',
  appId: "yourappid",
  masterKey: "yourmasterkey", //Add your master key here. Keep it secret!
  serverURL: "http://localhost:3000/parse",  // Don't forget to change to https if needed
  port: 3000
  // liveQuery: {
  //   classNames: [] // List of classes to support for query subscriptions
  // }
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

module.exports = api