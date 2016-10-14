/**
 * Created by Karthikk on 10/13/2016.
 */

(function (app) {
    app.UsersComponent = ng.core
        .Component({
            selector: 'egen',
            templateUrl: 'src/users/users.html',
            providers: [ng.http.HTTP_PROVIDERS, app.UsersService]
        })
        .Class({
            constructor: [app.UsersService, function(_service) {
                this.service = _service;
                this.errorMessage = '';
                this.usersList = [];
                this.newUser = {};
            }],
            
            getUsers: function() {
                this.service.getAllUsers()
                    .subscribe(this.updateUsers.bind(this), this.updateError.bind(this));
            },
            
            addUser: function() {
                this.service.add(this.newUser) 
                    .subscribe(this.successMessage.bind(this), this.updateError.bind(this));
            },
            
            successMessage: function() {
                this.errorMessage = "Successfully Added New User!!";
                this.getUsers();
            },

            updateError: function (err) {
                this.errorMessage += err;
            },
            
            updateUsers: function (data) {
                if (Object.keys(data).length === 0)
                    this.errorMessage = "No Users Found Yet";
                console.log(data);
                this.usersList = data;                
            },
            
            ngOnInit: function() {
                this.getUsers();
            }
        });
}) (window.app || (window.app = {}));
