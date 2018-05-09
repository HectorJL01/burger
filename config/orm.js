// Import MySQL connection.
var connection = require("../config/connection.js");



var orm = {
  selectall: function() {
    var queryString = "SELECT * FROM  burgers ";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },

  insertOne: function(burger_name) {
  var queryString = "INSERT INTO burgers (burgers_name, devoured) Values (?, false);"
  connection.query(queryString,[burger_name], function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
},
  // update: function(devoured) {
  // var queryString = "UPDATE * FROM burgers (devoured) Values (true);"
  // connection.query(queryString,[burger_name,devoured], function(err, result) {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(result);
  // });

  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};



module.exports = orm;