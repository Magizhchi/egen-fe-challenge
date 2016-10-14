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

    it('phone numbers starting with +1 should be formatted to USA', function () {
        expect(formatPipe.transform('+11234567890')).to.be.eql('+1(123) 456-7890');
    });
    it('phone numbers starting with +91 should be formatted to India', function () {
        expect(formatPipe.transform('+911234567890')).to.be.eql('+(91) 12345-67890');
    });
    it('phone numbers starting with +32 should be formatted to Belgium', function () {
        expect(formatPipe.transform('+3212345678')).to.be.eql('+(32) 12 34 56 78');
    });
    it('phone numbers starting with +03 should be formatted to Belgium', function () {
        expect(formatPipe.transform('+03012345678')).to.be.eql('+(03) 01-2345678');
    });

});