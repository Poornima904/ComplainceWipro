// sap.ui.define([
//     "sap/m/MessageToast"
// ], function(MessageToast) {
//     'use strict';

//     return {
//         auditlogs: function(oEvent) {
//             MessageToast.show("Custom handler invoked.");

//         }
//     };
// });
sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/library",
    "sap/m/Table",
    "sap/m/Column",
    "sap/m/Text",
    "sap/m/ColumnListItem"
], function(MessageToast,Dialog,Button,Library,Table,Column,Text,ColumnListItem) {
    'use strict';
    var ButtonType = Library.ButtonType;

    return {
        auditlogs: function(oEvent) {
            debugger
            if(!this.oEntityAuditDialog){
                this.oEntityAuditDialog = new Dialog({
                    title:"Entity Audit Logs",
                    verticalScrolling: true,
                    contentHeight:"70vh",
                    contentWidth:"70vw",
                    beginButton: new Button({
						type: ButtonType.Emphasized,
						text: "OK",
						press: function (oEvent) {
                            debugger
							oEvent.getSource().getParent().close()
						}
					}),
                    endButton: new Button({
						text: "Close",
						press: function (oEvent) {
                            debugger
							oEvent.getSource().getParent().close()
						}
					})
                })

                ///////////////////////////// Audit Table //////////////////////////////////

                var oTable = new Table({
                    fixedLayout:true,
                    // showOverlay:true
                })
                var oColumn1 = new Column({
                    header: new Text({
                        text:"DateTime"
                    })
                })
                var oColumn2 = new Column({
                    header: new Text({
                        text:"User"
                    })
                })
                var oColumn3 = new Column({
                    header: new Text({
                        text:"Operation Type"
                    })
                })
                var oColumn4 = new Column({
                    header: new Text({
                        text:"Entity"
                    })
                })
                var oColumn5 = new Column({
                    header: new Text({
                        text:"Changes"
                    })
                })

                oTable.addColumn(oColumn1);
                oTable.addColumn(oColumn2);
                oTable.addColumn(oColumn3);
                oTable.addColumn(oColumn4);
                oTable.addColumn(oColumn5);

                let oCells = [];
                var oCell1 = new Text({
                    text:"{DateTime}"
                })
                var oCell2 = new Text({
                    text:"{User}"
                })
                var oCell3 = new Text({
                    text:"{OperationType}"
                })
                var oCell4 = new Text({
                    text:"{Entity}"
                })
                var oCell5 = new Text({
                    text:"{Changes}"
                })
                oCells.push(oCell1)
                oCells.push(oCell2)
                oCells.push(oCell3)
                oCells.push(oCell4)
                oCells.push(oCell5)

                var oColumnListItem = new ColumnListItem({
                    cells:oCells
                })

                oTable.bindItems("/EntityAuditLogs",oColumnListItem);

                this.oEntityAuditDialog.addContent(oTable);
                this._view.addDependent(this.oEntityAuditDialog);
            }
            this.oEntityAuditDialog.open();
        }
    };
});
