sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("masterdata1.ext.controller.ObjectPage",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onBeforeBinding:async function(e){debugger}},editFlow:{onAfterEdit:function(e){debugger},onBeforeEdit:function(e){debugger;sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setEnabled(false);sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setVisible(false)},onAfterCreate:function(e){debugger;sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setEnabled(false);sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setVisible(false)},onAfterSave:function(e){debugger;let t=new sap.m.Dialog({title:"Success",type:"Message",content:new sap.m.Text({text:`Are You Sure You Want to Submit for Approval`}),beginButton:new sap.m.Button({type:"Accept",text:"Yes",press:async function(e,a){debugger;t.close()}}),endButton:new sap.m.Button({type:"Reject",text:"Cancel",press:function(e){debugger;sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setEnabled(true);sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setVisible(true);t.close()}})});t.open()}}}})});
//# sourceMappingURL=ObjectPage.controller.js.map