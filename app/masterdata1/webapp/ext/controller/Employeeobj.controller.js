sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('masterdata1.ext.controller.Employeeobj', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf masterdata1.ext.controller.Employeeobj
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_currencey::Field-edit").attachChange(
					function () {
						debugger
						var curr = sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_coverage::Field-edit").getValue();
						if (curr != null) {
							sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_sum::Field-edit").setEditable(true)
							// sap.ui.getCore().byId("insurance::insuranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::select_type_of_insurance::Field-edit").setEditable(false)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_premium::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_premium_in_usd::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_date::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_expiry_date::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_Sum::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::name_of_subsidiary::Field-edit").setEditable(true)


						}
					}
				);
				var insurance = sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_type_of_insurance::Field-edit")
				insurance.attachChange(
					function () {
						var val = insurance.getValue();
						if (val == "others") {
							sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(true)
						}
						else {
							sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(false)
						}
					})
			},
			routing: {
				onAfterBinding: async function (oEvent) {
					debugger;
					// try {
					// 	const path = oEvent.sPath;

					// 	// Regular expression to match the id value
					// 	const idMatch = path.match(/id=([a-f0-9\-]+)/i);
					// 	var idValue = idMatch[1];
					// 	// if (idMatch && idMatch[1]) {
					// 	// 	var idValue = idMatch[1];
					// 	// 	console.log("ID value:", idValue);
					// 	// } else {
					// 	// 	console.log("ID not found");
					// 	// }

					// 	const testdata = JSON.stringify({
					// 		id: idValue
					// 	});
					// 	const functionname = 'funcimport';
					// 	const oFunction = this.getView().getModel().bindContext(`/${functionname}(...)`);
					// 	oFunction.setParameter('data', testdata);
					// 	oFunction.setParameter('status', JSON.stringify({ status: 'getemployee' }));
					// 	await oFunction.execute();
					// 	const context = oFunction.getBoundContext();
					// 	const getdata = context.getValue();
					// 	let result = getdata.value;
					// 	result = JSON.parse(result);

					// } catch (error) {
					// }

					var coverage = sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_coverage::Field-edit").getValue();
					var currency = sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_currencey::Field-edit").getValue();
					if (coverage == null || currency == null) {
						sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_sum::Field-edit").setEditable(false)
						// sap.ui.getCore().byId("insurance::insuranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::select_type_of_insurance::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_premium::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_premium_in_usd::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_date::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_expiry_date::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_Sum::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::name_of_subsidiary::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(false)
					}
				}
			}
			// editFlow:
			// {
			// 	onAfterCreate: function (oEvent) {
			// 		debugger
			// 		sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_sum::Field-edit").setEditable(false)
			// 		// sap.ui.getCore().byId("insurance::insuranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::select_type_of_insurance::Field-edit").setEditable(false)
			// 		sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_premium::Field-edit").setEditable(false)
			// 		sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_premium_in_usd::Field-edit").setEditable(false)
			// 		sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_date::Field-edit").setEditable(false)
			// 		sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_expiry_date::Field-edit").setEditable(false)
			// 		sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_Sum::Field-edit").setEditable(false)
			// 		sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::name_of_subsidiary::Field-edit").setEditable(false)
			// 		sap.ui.getCore().byId("masterdata1::MasterData_master_IEmployeeObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(false)

			// 	},
			// }
		}
	});
});
