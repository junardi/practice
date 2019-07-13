

var app = angular.module("my-app", ['ngRoute', 'chat']);  


angular.module('chat').constant('config', {
    rltm: {
        service: "pubnub",
        config: {
            "publishKey": "pub-c-a1aa40e4-cca1-472f-ba7e-b48d6f03cdca",
            "subscribeKey": "sub-c-e8900926-a549-11e9-9950-eaa8f74ddcbd"
        }
    }
});     