(function (app) {
    app.TelFormatPipe = ng.core
        .Pipe({
            name: 'telFormat'
        })
        .Class({
            constructor: function() {},
            transform: function (phone) {
                return phone + '###';
            }

        })
}) (window.app || (window.app = {}));