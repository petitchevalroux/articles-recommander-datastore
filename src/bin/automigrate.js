"use strict";
var process = require("process");
var path = require("path");
var app = require(path.join(__dirname, "..", "server"));
var ds = app.datasources.mysql;
ds.once("connected", function() {
    ds.automigrate(null, function(err) {
        if (err) {
            process.stdout.write(err + "\n");
            return;
        }
        process.stdout.write("automigrate done\n");
        ds.disconnect();
    });
});
