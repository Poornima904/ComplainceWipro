sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('masterdata1.ext.controller.Liabilityobj', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf masterdata1.ext.controller.Liabilityobj
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();

				sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_currencey::Field-edit").attachChange(
					function () {
						debugger
						var curr = sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_coverage::Field-edit").getValue();
						if (curr != null) {
							sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_sum::Field-edit").setEditable(true)
							// sap.ui.getCore().byId("insurance::insuranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::select_type_of_insurance::Field-edit").setEditable(false)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_premium::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_premium_in_usd::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_date::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_expiry_date::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_Sum::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::name_of_subsidiary::Field-edit").setEditable(true)


						}
					}
				);
				var insurance = sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_type_of_insurance::Field-edit")
				insurance.attachChange(
					function () {
						var val = insurance.getValue();
						if (val == "others") {
							sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(true)
						}
						else {
							sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(false)
						}
					})
			},
			routing: {
				onBeforeBinding: async function (oEvent) {
					sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::Breadcrumbs").setVisible(false)
					debugger;
					sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(false)

					try {
						var url = window.location.href;
						const match = url.match(/master_Iliability\(idliability='([^']+)'/);
						const liabilityid = match ? match[1] : null;
						const testdata = JSON.stringify({
							id: liabilityid
						});
						const functionname = 'funcimport';
						const oFunction = this.getView().getModel().bindContext(`/${functionname}(...)`);
						oFunction.setParameter('data', testdata);
						oFunction.setParameter('status', JSON.stringify({ status: 'getliability' }));
						await oFunction.execute();
						const context = oFunction.getBoundContext();
						const getdata = context.getValue();
						let result = getdata.value;
						result = JSON.parse(result);
						debugger
						if (result.content1.length > 0) {
							var other = result.content1[0].others;
							var schemacover = result.content1[0].select_coverage;
							var schemacurr = result.content1[0].select_currencey;
							if (schemacover == "" || schemacurr == "") {
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_sum::Field-edit").setEditable(false)
								// sap.ui.getCore().byId("insurance::insuranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::select_type_of_insurance::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_premium::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_premium_in_usd::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_date::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_expiry_date::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_Sum::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::name_of_subsidiary::Field-edit").setEditable(false)

							}
							else {
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_sum::Field-edit").setEditable(true)
								// sap.ui.getCore().byId("insurance::insuranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::select_type_of_insurance::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_premium::Field-edit").setEditable(true)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_premium_in_usd::Field-edit").setEditable(true)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_date::Field-edit").setEditable(true)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_expiry_date::Field-edit").setEditable(true)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_Sum::Field-edit").setEditable(true)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::name_of_subsidiary::Field-edit").setEditable(true)
								// sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(true)
							}
							if (other !== null && other !== undefined && other !== "") {
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(true);
							}

						}
						if (result.content2.length > 0) {
							var other = result.content2[0].others;
							var draftscover = result.content2[0].select_coverage;
							var draftscurr = result.content2[0].select_currencey;
							if ((draftscover == "" || draftscurr == "") || (draftscover == null || draftscurr == null)) {
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_sum::Field-edit").setEditable(false)
								// sap.ui.getCore().byId("insurance::insuranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::select_type_of_insurance::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_premium::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_premium_in_usd::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_date::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_expiry_date::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_Sum::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::name_of_subsidiary::Field-edit").setEditable(false)

							}
							else {
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_sum::Field-edit").setEditable(true)
								// sap.ui.getCore().byId("insurance::insuranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::select_type_of_insurance::Field-edit").setEditable(false)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_premium::Field-edit").setEditable(true)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_premium_in_usd::Field-edit").setEditable(true)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_date::Field-edit").setEditable(true)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_expiry_date::Field-edit").setEditable(true)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_Sum::Field-edit").setEditable(true)
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::name_of_subsidiary::Field-edit").setEditable(true)
								// sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(true)
							}
							if (other !== null && other !== undefined && other !== "") {
								sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(true);
							}
						}






					} catch (error) {
					}
				},
				onAfterBinding: function (oBindingContext) {


					var oUploadSet = sap.ui.getCore().byId("masterdata1::MasterData_master_IliabilityObjectPage--fe::CustomSubSection::Liabilityattachments--uploadSet");
					oUploadSet.bindAggregation("items", {
						path: oBindingContext.getPath() + "/to_LiabilityFiles",
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
