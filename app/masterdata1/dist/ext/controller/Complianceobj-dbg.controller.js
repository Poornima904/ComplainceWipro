sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('masterdata1.ext.controller.Complianceobj', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf masterdata1.ext.controller.Complianceobj
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing: {
				onBeforeBinding:  async function (oEvent) {
					debugger;
					sap.ui.getCore().byId("masterdata1::MasterData_toComplianceObjectPage--fe::Breadcrumbs").setVisible(false)
				},
				onAfterBinding : function(oBindingContext){
					var oUploadSet = sap.ui.getCore().byId("masterdata1::MasterData_toComplianceObjectPage--fe::CustomSubSection::AttachmentsComp--uploadSet");
						oUploadSet.bindAggregation("items", {
							path: oBindingContext.getPath() + "/to_Files",
							template: oUploadSet.getBindingInfo("items").template,
							parameters: {
								$orderby: 'createdAt desc'
							}
						})
						oUploadSet.getBinding("items").refresh();
				}
			}
		}
	});
});
