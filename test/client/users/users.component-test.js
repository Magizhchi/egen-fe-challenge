describe('user component tests', function () {
    var sandbox;
    var usersComponent;
    var usersService;
    var observable = { subscribe: function(){} };
    var updateUsersBindStub = function () { };
    var updateErrorBindStub = function () { };
    var updateMessageBindStub = function() {};
    var formatPipe = { transform: function (data) { return data; }};

    beforeEach(function() {
        usersService = {
            getAllUsers: function () { },
            add: function () { },
        };

        usersComponent = new app.UsersComponent(usersService, formatPipe);

        sandbox = sinon.sandbox.create();

        sandbox.stub(usersComponent.successMessage, 'bind')
            .withArgs(usersComponent)
            .returns(updateMessageBindStub);


    });

    afterEach(function () {
        sandbox.restore();
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

    it('updateUsers should update user', function () {
        var userStub = [{sample: 1}];
        usersComponent.updateUsers(userStub);
        expect(usersComponent.usersList).to.be.eql(userStub);
    });

    it('updateError should update message', function() {
        usersComponent.updateError('Not Found');
        expect(usersComponent.errorMessage).to.be.eql('Not Found');
    });
})