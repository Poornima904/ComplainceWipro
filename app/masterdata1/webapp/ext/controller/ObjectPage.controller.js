sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('masterdata1.ext.controller.ObjectPage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf masterdata1.ext.controller.ObjectPage
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing:
			{
				onBeforeBinding: async function (oEvent) {
					debugger
					// sap.ui.getCore().byId('masterdata1::MasterDataObjectPage--fe::FooterBar::StandardAction::Save').setVisible(false);
					// sap.ui.getCore().byId('masterdata1::MasterDataObjectPage--fe::FooterBar::StandardAction::Save').setEnabled(false);
					// var url = window.location.href;
					// // The given URL

					// // Extract the part of the URL after the #
					// var hashIndex = url.indexOf('#');
					// var hash = url.substring(hashIndex + 1);

					// // Extract the query string part
					// var queryString = hash.match(/\((.*)\)/)[1];

					// // Split the query string into individual parameters
					// var params = queryString.split(',');

					// // Initialize variables to hold the extracted values
					// var entity = null;
					// var country = null;

					// // Loop through each parameter and extract the values for Entity and Country
					// params.forEach(param => {
					// 	var [key, value] = param.split('=');
					// 	value = value.replace(/'/g, ''); // Remove single quotes
					// 	if (key === 'Entity') {
					// 		entity = value;
					// 	} else if (key === 'Country') {
					// 		country = value;
					// 	}
					// });
					// const testdata = JSON.stringify({
					// 	entity: entity,
					// 	country: country
					// });
					// const functionname = 'funcimport';
					// const oFunction = this.getView().getModel().bindContext(`/${functionname}(...)`);
					// oFunction.setParameter('data', testdata);
					// oFunction.setParameter('status', JSON.stringify({ status: 'getmasterstatus' }));
					// await oFunction.execute();
					// const context = oFunction.getBoundContext().getValue();
					// let result = context.value;
					// result = JSON.parse(result);
					// var status = result[0].Statusnew;
					// if (status != "Approved") {
					// 	sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Complaince").setVisible(false)
					// 	sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments").setVisible(false)
					// 	sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Insurance").setVisible(false)
					// }
					// else{
					// 	sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Complaince").setVisible(true)
					// 	sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments").setVisible(true)
					// 	sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Insurance").setVisible(true)
					// }

				}
			},
			editFlow:
			{
				onAfterEdit: function (oEvent) {
					debugger

				},
				onBeforeEdit: function (oEvent) {
					debugger
					//hiding submit button
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setEnabled(false);
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setVisible(false);
				},
				onAfterCreate: function (oEvent) {
					debugger
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setEnabled(false);
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setVisible(false);
					// sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Complaince").setVisible(false)
					// sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments").setVisible(false)
					// sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Insurance").setVisible(false)
				},
				onAfterSave: function (oEvent) {
					debugger
					let d = new sap.m.Dialog({
						title: "Success",
						type: "Message",
						content: new sap.m.Text({
							text: `Are You Sure You Want to Submit for Approval`
						}),
						beginButton: new sap.m.Button({
							type: "Accept",
							text: "Yes",
							press: async function (oEvent, oPath) {
								debugger
								d.close();
								// const url = window.location.href;
								// function getRegID(url) {
								// 	const match = url.match(/RegID='([^']+)'/);
								// 	return match ? match[1] : null;
								// }
								// const id = getRegID(url);

								// var href_For_Product_display = (sap.ushell && sap.ushell.Container && await sap.ushell.Container.getServiceAsync("Navigation")) || "";
								// if (href_For_Product_display != "") {
								// 	await href_For_Product_display.navigate({
								// 		target: { semanticObject: "ReportEntity", action: "display" },
								// 		params: { "RegID": id }
								// 	});
								// }
							}
						}),
						endButton: new sap.m.Button({
							type: "Reject",
							text: "Cancel",
							press: function (oEvent) {
								debugger
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setEnabled(true);
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setVisible(true);

								d.close();
							}
						})
					});
					d.open();
				}

			}
		}
	});
});
