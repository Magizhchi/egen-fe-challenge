describe('user component tests', function () {
    var usersComponent;
    var usersService;
    var formatPipe = { transform: function (data) { return data; }};

    beforeEach(function() {
        usersService = {
            getAllUsers: function () { },
            add: function () { },
        };

        usersComponent = new app.UsersComponent(usersService, formatPipe);
    });

    afterEach(function () {
    });

    it('Canary Test', function () {
    });

    it('component should set the selector Attribute', function () {
       var componentAnnotations = Reflect.getMetadata('annotations', app.UsersComponent)[0];

        expect(componentAnnotations.selector).to.be.eql('egen');
    });

    it('component should set the templateUrl Attribute', function () {
        var componentAnnotations = Reflect.getMetadata('annotations', app.UsersComponent)[0];

        expect(componentAnnotations.templateUrl).to.be.eql('src/users/users.html');
    });

    it('should initialize errorMessage to an empty string', function() {
        expect(usersComponent.errorMessage).to.be.eql('');
    });

    it('should initialize people to an empty array', function() {
        expect(usersComponent.usersList).to.be.eql([]);
    });
})