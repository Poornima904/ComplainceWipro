sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/Input",
    "sap/ui/core/Fragment"
], function(MessageToast, Input, Fragment) {
    'use strict';

    return {
        onlinkClick: function(oEvent) {
            debugger
            var oLink = oEvent.getSource();
            var oVBox = oLink.getParent().getItems()[1]; // Assuming the inputContainer is the second item

            // Create a new Input field for Extension Date
            var oInputDate = new Input({
                placeholder: "Enter Extension Date",
                value: "{/ExtensionDate }",
                width: "15%"
            });
            oVBox.addItem(oInputDate);
            oLink.setVisible(false);
      
        }
    };
});
