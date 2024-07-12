sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('masterdata1.ext.controller.Propertyobj', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf masterdata1.ext.controller.Propertyobj
             */
			onInit: function () {
				debugger
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_currencey::Field-edit").attachChange(
					function () {
						debugger
						var curr = sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_coverage::Field-edit").getValue();
						if (curr != null) {
							sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_sum::Field-edit").setEditable(true)
							// sap.ui.getCore().byId("insurance::insuranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::select_type_of_insurance::Field-edit").setEditable(false)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_premium::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_premium_in_usd::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_date::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_expiry_date::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_Sum::Field-edit").setEditable(true)
							sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::name_of_subsidiary::Field-edit").setEditable(true)


						}
					}
				);
				var insurance = sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_type_of_insurance::Field-edit")
				insurance.attachChange(
					function () {
						var val = insurance.getValue();
						if (val == "others") {
							sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(true)
						}
						else {
							sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(false)
						}
					})
			},
			routing: {
				onBeforeBinding:  function (oEvent) {
					debugger;
					
					var coverage = sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_coverage::Field-edit").getValue();
					var currency = sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::select_currencey::Field-edit")
					if (coverage == null || coverage == ""){
						sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_sum::Field-edit").setEditable(false)
						// sap.ui.getCore().byId("insurance::insuranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::select_type_of_insurance::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::enter_premium::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_premium_in_usd::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_date::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::policy_expiry_date::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::convert_Sum::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::name_of_subsidiary::Field-edit").setEditable(false)
						sap.ui.getCore().byId("masterdata1::MasterData_master_IPropertyObjectPage--fe::FormContainer::GeneralInformation::FormElement::DataField::others").setVisible(false)
					}
				}
			}
		}
	});
});
