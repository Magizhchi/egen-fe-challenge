/**
 * Created by Karthikk on 10/13/2016.
 */

(function (app) {
   app.UsersService = ng.core
       .Class({
           constructor: [ng.http.Http, function(_http) {
               this.http = _http;
           }],

           getAllUsers: function () {
               return this.http.get('/users')
                                .map(this.extractData);
           },

           add: function(data) {
               var options = {headers: new ng.http.Headers({'Content-Type': 'application/json'})};
               return this.http.post('/users', JSON.stringify(data), options)
                   .map(this.extractMessage)
           },

           extractMessage: function (response) {
               if (response.status !== 200)
                   throw new Error('Request failed with status: '+ response.status);
               return response.text();
           },

           extractData :function (response) {
               if(response.status !== 200)
                   throw new Error('Request failed with status: '+ response.status);
               return response.json();
           }
       });
}) (window.app || (window.app = {}));