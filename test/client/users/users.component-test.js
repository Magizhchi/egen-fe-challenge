describe('user component tests', function () {
    var sandbox;
    var http;
    var observable;
    var userService;

    beforeEach(function() {
        sandbox = sinon.sandbox.create();

        http = {
            get: function () {},
            post: function () {}
        };

        userService = new app.UsersService(http);

        observable = {
            map: function () {},
            catch: function () {}
        };

        sandbox.stub(http, 'get')
            .withArgs('/users')
            .returns(observable);
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('Canary Test', function () {
    });
    it('should inject HTTP into the constructor', function () {
        var injectedServices = Reflect.getMetadata('parameters', app.UsersService);

        expect(injectedServices[0]).to.be.eql([ng.http.Http]);
    });

});