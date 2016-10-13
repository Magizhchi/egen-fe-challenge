/**
 * Created by Karthikk on 10/13/2016.
 */

(function (app) {
    app.UsersComponent = ng.core
        .Component({
            selector: 'egen',
            template: '<h1>Hello from Component</h1>'
        })
        .Class({
            constructor: function () {}
        });
}) (window.app || (window.app = {}));
