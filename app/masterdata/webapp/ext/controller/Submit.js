sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        Submit: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
