// sap.ui.define([
//     "sap/m/MessageToast",
//     "sap/m/Dialog",
//     "sap/m/Button",
//     "sap/m/library",
//     "sap/m/Table",
//     "sap/m/Column",
//     "sap/m/Text",
//     "sap/m/ColumnListItem"
// ], function(MessageToast,Dialog,Button,Library,Table,Column,Text,ColumnListItem) {
//     'use strict';
//     var ButtonType = Library.ButtonType;

//     return {
//         auditlogs: function(oEvent) {
//             debugger
//             if(!this.oEntityAuditDialog){
//                 this.oEntityAuditDialog = new Dialog({
//                     title:"Entity Audit Logs",
//                     verticalScrolling: true,
//                     contentHeight:"70vh",
//                     contentWidth:"70vw",
//                     beginButton: new Button({
// 						type: ButtonType.Emphasized,
// 						text: "OK",
// 						press: function (oEvent) {
//                             debugger
// 							oEvent.getSource().getParent().close()
// 						}
// 					}),
//                     endButton: new Button({
// 						text: "Close",
// 						press: function (oEvent) {
//                             debugger
// 							oEvent.getSource().getParent().close()
// 						}
// 					})
//                 })

//                 ///////////////////////////// Audit Table //////////////////////////////////

//                 var oTable = new Table({
//                     fixedLayout:true,
//                     // showOverlay:true
//                 })
//                 var oColumn1 = new Column({
//                     header: new Text({
//                         text:"DateTime"
//                     })
//                 })
//                 var oColumn2 = new Column({
//                     header: new Text({
//                         text:"User"
//                     })
//                 })
//                 var oColumn3 = new Column({
//                     header: new Text({
//                         text:"Operation Type"
//                     })
//                 })
//                 var oColumn4 = new Column({
//                     header: new Text({
//                         text:"Entity"
//                     })
//                 })
//                 var oColumn5 = new Column({
//                     header: new Text({
//                         text:"Changes"
//                     })
//                 })

//                 oTable.addColumn(oColumn1);
//                 oTable.addColumn(oColumn2);
//                 oTable.addColumn(oColumn3);
//                 oTable.addColumn(oColumn4);
//                 oTable.addColumn(oColumn5);

//                 let oCells = [];
//                 var oCell1 = new Text({
//                     text:"{DateTime}"
//                 })
//                 var oCell2 = new Text({
//                     text:"{User}"
//                 })
//                 var oCell3 = new Text({
//                     text:"{OperationType}"
//                 })
//                 var oCell4 = new Text({
//                     text:"{Entity}"
//                 })
//                 var oCell5 = new Text({
//                     text:"{Changes}"
//                 })
//                 oCells.push(oCell1)
//                 oCells.push(oCell2)
//                 oCells.push(oCell3)
//                 oCells.push(oCell4)
//                 oCells.push(oCell5)

//                 var oColumnListItem = new ColumnListItem({
//                     cells:oCells
//                 })

//                 oTable.bindItems("/EntityAuditLogs",oColumnListItem);

//                 this.oEntityAuditDialog.addContent(oTable);
//                 this._view.addDependent(this.oEntityAuditDialog);
//             }
//             this.oEntityAuditDialog.open();
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
    "sap/m/ColumnListItem",
    "sap/ui/table/Table",
    "sap/ui/table/Row",
    "sap/m/Label",
    "sap/ui/table/Column"
], function(MessageToast,Dialog,Button,Library,Table,Column,Text,ColumnListItem,uiTable,uiRow,Label,uiColumn) {
    'use strict';
    var ButtonType = Library.ButtonType;
    var oEntityAuditDialog

    return {
        auditlogs: function(oEvent) {
            debugger
            // if(!oEntityAuditDialog){
                oEntityAuditDialog = new Dialog({
                    title:"Entity Audit Logs",
                    verticalScrolling: true,
                    contentHeight:"70vh",
                    contentWidth:"70vw",
                    beginButton: new Button({
						type: ButtonType.Emphasized,
						text: "OK",
						press: function (oEvent) {
                            debugger
							oEvent.getSource().getParent().close();
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
                    fixedLayout:"Strict"
                    // showOverlay:true
                })
                oTable.addStyleClass("overflowClass")
                var oColumn1 = new Column({
                    header: new Text({
                        text:"DateTime",
                        textAlign:"Center"
                    }),
                    width:"20%",
                    hAlign:"Center"
                })
                var oColumn2 = new Column({
                    header: new Text({
                        text:"User",
                        textAlign:"Center"
                    }),
                    width:"15%",
                    hAlign:"Center"
                })
                var oColumn3 = new Column({
                    header: new Text({
                        text:"Operation Type",
                        textAlign:"Center"
                    }),
                    width:"15%",
                    hAlign:"Center"
                })
                var oColumn4 = new Column({
                    header: new Text({
                        text:"Entity",
                        textAlign:"Center"
                    }),
                    width:"20%",
                    hAlign:"Center"
                })
                var oColumn5 = new Column({
                    header: new Text({
                        text:"Changes",
                        textAlign:"Center"
                    }),
                    width:"30%",
                    hAlign:"Center"
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

///////////////////////////////////////////////// m.Table ////////////////////////////
                var oCell5 = new Table({
                    visible:'{= %{OperationType} === \'UPDATE\' }'
                    // fixedLayout:true
                    // width:"500px"
                })

                var oColumn11 = new Column({
                    header: new Text({
                        text:"Field"
                    })
                })
                var oColumn12 = new Column({
                    header: new Text({
                        text:"OldValue"
                    })
                })
                var oColumn13 = new Column({
                    header: new Text({
                        text:"NewValue"
                    })
                })

                oCell5.addColumn(oColumn11);
                oCell5.addColumn(oColumn12);
                oCell5.addColumn(oColumn13);

                let oCellss = [];
                var oCell11 = new Text({
                    text:"{Field}"
                })
                var oCell12 = new Text({
                    text:"{OldValue}"
                })
                var oCell13 = new Text({
                    text:"{NewValue}"
                })

                oCellss.push(oCell11)
                oCellss.push(oCell12)
                oCellss.push(oCell13)


                var oChangesColumnListItem = new ColumnListItem({
                    cells:oCellss
                })

                oCell5.bindAggregation("items","toChanges",oChangesColumnListItem)

                ///////////////////////////////////////////////////////////////////////////////////

                //////////////// ui.table.Table ////////////////////////////////

                // var oCell5 = new uiTable();

                // var uiColumn1 = new uiColumn({
                //     label: new Label({
                //         text:"Field"
                //     }),
                //     template: new Text({
                //         text:"{Field}"
                //     }),
                //     width:"11rem"
                // })
                // var uiColumn2 = new uiColumn({
                //     label: new Label({
                //         text:"Old Value"
                //     }),
                //     width:"11rem",
                //     template: new Text({
                //         text:"{Field}"
                //     })
                // })
                // var uiColumn3 = new uiColumn({
                //     label: new Label({
                //         text:"New Value"
                //     }),
                //     width:"11rem",
                //     template: new Text({
                //         text:"{Field}"
                //     })
                // })

                // oCell5.addColumn(uiColumn1)
                // oCell5.addColumn(uiColumn2)
                // oCell5.addColumn(uiColumn3)

                // let oCellss = [];
                // var oCell11 = new Text({
                //     text:"{Field}"
                // })
                // var oCell12 = new Text({
                //     text:"{OldValue}"
                // })
                // var oCell13 = new Text({
                //     text:"{NewValue}"
                // })

                // oCellss.push(oCell11)
                // oCellss.push(oCell12)
                // oCellss.push(oCell13)

                // var ouiRow = new uiRow({
                //     cells:oCellss
                // })

                // oCell5.bindAggregation("rows","toChanges",ouiRow);

                ///////////////////////////////////////////////////////


                oCells.push(oCell1)
                oCells.push(oCell2)
                oCells.push(oCell3)
                oCells.push(oCell4)
                oCells.push(oCell5)

                var oColumnListItem = new ColumnListItem({
                    cells:oCells
                })

                oTable.bindItems("/EntityAuditLogs",oColumnListItem);

                oEntityAuditDialog.addContent(oTable);
                this._view.addDependent(oEntityAuditDialog);
            // }
            oEntityAuditDialog.open();
        }
    };
});
