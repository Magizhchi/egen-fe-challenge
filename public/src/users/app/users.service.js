/**
 * Created by Karthikk on 10/13/2016.
 */

(function (app) {
   app.UsersService = ng.core
       .Class({
           constructor: [ng.http.Http, function(_http) {
               this.http = _http;
           }],

           get: function () {
               return this.http.get('/users')
                                .map(this.extractData);
           },

           extractData :function (response) {
               if(response.status !== 200)
                   throw new Error('Request failed with status: '+ response.status);
               return response.json();
           }
       });
}) (window.app || (window.app = {}));