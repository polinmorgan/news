(function () {
    "use strict";
    angular.module("common.services")
        .factory("newsListResource", ["$resource", newsListResource]);

    function newsListResource($resource) {
        return $resource(" https://cors-anywhere.herokuapp.com/https://api.showjet.ru/api/v2.1/events/news.json?limit=10&offset=2", null, {
            query: {
                method: "GET",
                headers: {
                    'Content-Type':'application/json', 'X-SJ-DEVICE-TYPE':'partner', 'X-SJ-DEVICE-NAME':'Swagger', 'X-SJ-DEVICE-MODEL':'Swagger', 'X-SJ-OS-NAME':'Desktop', 'X-SJ-OS-VERSION':'1.0', 'X-SJ-APP-VERSION':'2.0', 'X-SJ-TOKEN':'joDKFxdG8DYPADO_p9eiZRnFszMjvprgc2ZRBvUO9mt0'
                }
            }
        })

    }
    
}());