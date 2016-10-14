describe('user component tests', function () {
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
        expect(use.message).to.be.eql('');
    });

    // it('should initialize people to an empty array', function() {
    //     expect(peopleComponent.people).to.be.eql([]);
    // });
})