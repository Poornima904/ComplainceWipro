sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';


    return {
        Submit: async function (oEvent) {
            debugger
        
            let funcname = "updateStatus";
            let oFunc = this._view.getModel().bindContext(`/${funcname}(...)`);

            var url = window.location.href;
            var match = url.match(/Masterdataid='([^']+)'/);
            var masterdataid = match ? match[1] : null;
            var admin = "avaneesh.u@peolsolutions.com";
            oFunc.setParameter('Masterdataid', masterdataid)
            await oFunc.execute();

            let funcname1 = "bpaTrigger";
            let oFunc1 = this._view.getModel().bindContext(`/${funcname1}(...)`);
            oFunc1.setParameter('Masterdataid', masterdataid)
            oFunc1.setParameter('Admin', admin)
            await oFunc1.execute();

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

                                window.history.back();
                                d.close();
                               


                                // const url = window.location.href;
                                // function getRegID(url) {
                                //     const match = url.match(/RegID='([^']+)'/);
                                //     return match ? match[1] : null;
                                // }
                                // const id = getRegID(url);


                                // var href_For_Product_display = ( sap.ushell && sap.ushell.Container && await sap.ushell.Container.getServiceAsync("Navigation")) || "";
                                // if(href_For_Product_display != ""){
                                // 	await href_For_Product_display.navigate({
                                // 		target : { semanticObject : "ReportEntity", action : "display" },
                                // 		params : { "RegID" :id }
                                // 	})
                                // }


                            }
                        }),
                });
            //
            d.open();
        }
    };
});
