sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';
	// var flag = false;

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
					// if (flag) {
					// 	return;
					// }


					try {
						var url = window.location.href;
						var match = url.match(/Masterdataid='([^']+)'/);
						var masterdataid = match ? match[1] : null;

						const testdata = JSON.stringify({
							id: masterdataid
						});
						const functionname = 'funcimport';
						const oFunction = this.getView().getModel().bindContext(`/${functionname}(...)`);
						oFunction.setParameter('data', testdata);
						oFunction.setParameter('status', JSON.stringify({ status: 'getmasterstatus' }));
						await oFunction.execute();
						const context = oFunction.getBoundContext().getValue();
						let result = context.value;
						result = JSON.parse(result);
						if (result.length != '0') {
							var status = result[0].Statusnew;
							if (status == "Approved") {
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Complaince1").setVisible(true)
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments").setVisible(true)
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Insurance").setVisible(true)
							}
							else {
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Complaince1").setVisible(false)
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments").setVisible(false)
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Insurance").setVisible(false);
							}
							if (status == "Pending for Approval" || status == "Approved") {
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setEnabled(false);
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setVisible(false);
							}
							var url = window.location.href;
							var match = url.match(/IsActiveEntity=([^)]*)/);
							var isActiveEntity = match ? match[1] : null;

							if (status == "Pending for Approval" || isActiveEntity == "false") {
								//edit buttonn hiding
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::StandardAction::Edit").setEnabled(false);
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::StandardAction::Edit").setVisible(false);

							} else {
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::StandardAction::Edit").setEnabled(true);
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::StandardAction::Edit").setVisible(true);
							}
							if (isActiveEntity == "false") {
								// unhiding upload
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").setUploadButtonInvisible(false);
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").setUploadEnabled(true);
								// unhiding edit and remove for attachments
								var items = sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").getItems();
								for (let i = 0; i < items.length; i++) {
									items[i].setVisibleRemove(true);
									items[i].setVisibleEdit(true);

								}
							}
							else {
								// hiding upload
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").setUploadButtonInvisible(true);
								sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").setUploadEnabled(false);
								// hiding edit and remove for attachments
								var items = sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").getItems();
								for (let i = 0; i < items.length; i++) {
									items[i].setVisibleRemove(false);
									items[i].setVisibleEdit(false);

								}
							}
						}
						else {
							sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Complaince1").setVisible(false)
							sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments").setVisible(false)
							sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FacetSubSection::Insurance").setVisible(false)

							sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setEnabled(false);
							sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setVisible(false);

						}

					}
					catch (error) {

					}


				}
			},
			editFlow:
			{
				onAfterEdit: function (oEvent) {
					debugger

				},
				onBeforeEdit: function (oEvent) {
					debugger
					// flag = true;
					//hiding submit button
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setEnabled(false);
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setVisible(false);
					// unhiding upload
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").setUploadButtonInvisible(false);
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").setUploadEnabled(true);
					// unhiding edit and remove for attachments
					var items = sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").getItems();
					for (let i = 0; i < items.length; i++) {
						items[i].setVisibleRemove(true);
						items[i].setVisibleEdit(true);

					}

				},
				onAfterCreate: function (oEvent) {
					debugger
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setEnabled(false);
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::FooterBar::CustomAction::Submit").setVisible(false);

				},
				onAfterSave: async function (oEvent) {
					debugger
					// hiding upload
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").setUploadButtonInvisible(true);
					sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").setUploadEnabled(false);
					// hiding edit and remove for attachments
					var items = sap.ui.getCore().byId("masterdata1::MasterDataObjectPage--fe::CustomSubSection::Attachaments--uploadSet").getItems();
					for (let i = 0; i < items.length; i++) {
						items[i].setVisibleRemove(false);
						items[i].setVisibleEdit(false);

					}
					let funcname1 = "bpaTrigger";
					let oFunc1 = this.getView().getModel().bindContext(`/${funcname1}(...)`);

					let funcname = "updateStatus";
					let oFunc = this.getView().getModel().bindContext(`/${funcname}(...)`);

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
								var url = window.location.href;
								var match = url.match(/Masterdataid='([^']+)'/);
								var masterdataid = match ? match[1] : null;
								var admin = "avaneesh.u@peolsolutions.com";

								//for updating status
								oFunc.setParameter('Masterdataid', masterdataid)
								await oFunc.execute();

								//for triggering bpa 
								oFunc1.setParameter('Masterdataid', masterdataid)
								oFunc1.setParameter('Admin', admin)
								await oFunc1.execute();

								window.location.reload();
								window.history.back();
								d.close();
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
					// flag = false;
					d.open();
				},
				onAfterDiscard: async function (oEvent) {
					debugger
					// flag = false;
				},
				onBeforeDiscard: function (oEvent) {
					debugger
				}

			}
		}
	});
});
