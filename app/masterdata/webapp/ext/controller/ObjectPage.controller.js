sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('masterdata.masterdata.ext.controller.ObjectPage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf masterdata.masterdata.ext.controller.ObjectPage
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				debugger
				var oModel = this.base.getExtensionAPI().getModel();

			},
			routing:
			{
				onBeforeBinding: async function (oEvent) {
					debugger
					// sap.ui.getCore().byId('masterdata.masterdata::MasterDataObjectPage--fe::FooterBar::StandardAction::Save').setVisible(false);
				}
			}
		}
	});
});
