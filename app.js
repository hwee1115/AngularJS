 angular.module("app", ["ngRoute","exam03Module","exam04Module"])
    .config(function() {
        console.log("app- config callback")
    })
    .run(function() {
        console.log("app- run callback")
    })