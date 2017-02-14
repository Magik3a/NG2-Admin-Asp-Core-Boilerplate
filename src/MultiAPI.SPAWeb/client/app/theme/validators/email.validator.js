"use strict";
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.validate = function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=email.validator.js.map