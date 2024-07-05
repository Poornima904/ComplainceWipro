sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        Submit: function (oEvent) {
            debugger
            let d = new sap.m.Dialog
                ({
                    title: "Success",
                    type: "Message",
                    content: new sap.m.Text
                        ({
                            text: `Submitted Succesfully for Approval`
                        }),
                    beginButton: new sap.m.Button
                        ({
                            type: "Accept",
                            text: "OK",
                            press: async function (oEvent, oPath) {
                                //
                                debugger
                                d.close();
                                const url = window.location.href;
                                function getRegID(url) {
                                    const match = url.match(/RegID='([^']+)'/);
                                    return match ? match[1] : null;
                                }
                                const id = getRegID(url);
                                

                                var href_For_Product_display = ( sap.ushell && sap.ushell.Container && await sap.ushell.Container.getServiceAsync("Navigation")) || "";
                                if(href_For_Product_display != ""){
                                	await href_For_Product_display.navigate({
                                		target : { semanticObject : "ReportEntity", action : "display" },
                                		params : { "RegID" :id }
                                	})
                                }


                            }
                        }),
                });
            //
            d.open();
        }
    };
});
