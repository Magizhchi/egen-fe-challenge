/**
 * Created by Karthikk on 10/13/2016.
 */

(function (app) {
    app.UsersComponent = ng.core
        .Component({
            selector: 'egen',
            templateUrl: 'src/users/users.html'
        })
        .Class({
            constructor: function () {}
        });
}) (window.app || (window.app = {}));
