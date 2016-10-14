(function (app) {
    app.TelFormatPipe = ng.core
        .Pipe({
            name: 'telFormat'
        })
        .Class({
            constructor: function() {},
            transform: function (phone) {
                if (phone.startsWith("+1")) // USA
                    return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '$1($2)-$3-$4');
                else if (phone.startsWith("+91")) // India
                    return phone.replace(/(\d{2})(\d{5})(\d{5})/, '($1) $2-$3');
                else
                    return phone ;
            }

        })
}) (window.app || (window.app = {}));