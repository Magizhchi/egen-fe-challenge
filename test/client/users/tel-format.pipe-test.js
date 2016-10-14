describe('tel-format pipe test', function () {
    
    var formatPipe;
    
    beforeEach(function () {
        formatPipe = new app.TelFormatPipe();
    });

    it('should have set the pipe name to telFormat', function () {
        var annotations =
            Reflect.getMetadata('annotations', app.TelFormatPipe)[0];
        expect(annotations.name).to.be.eql('telFormat');
    });
});