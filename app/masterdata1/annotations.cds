using MyService as service from '../../srv/service';

annotate service.MasterData with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : Entity,
            Label : 'Entity',
        },
        {
            $Type : 'UI.DataField',
            Value : Country,
            Label : 'Country',
        },
    ]
);
annotate service.MasterData with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'General Information',
            ID : 'GeneralInformation',
            Target : '@UI.FieldGroup#GeneralInformation',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Complaince',
            ID : 'Complaince1',
            Target : 'toCompliance/@UI.LineItem#Complaince1',
        },
        {
            $Type : 'UI.CollectionFacet',
            Label : 'Insurance',
            ID : 'Insurance',
            Facets : [
                {
                    $Type : 'UI.ReferenceFacet',
                    Label : 'Liability',
                    ID : 'Liability',
                    Target : 'master_Iliability/@UI.LineItem#Liability',
                },
                {
                    $Type : 'UI.ReferenceFacet',
                    Label : 'Employee',
                    ID : 'Employee',
                    Target : 'master_IEmployee/@UI.LineItem#Employee',
                },
                {
                    $Type : 'UI.ReferenceFacet',
                    Label : 'Property',
                    ID : 'Property',
                    Target : 'master_IProperty/@UI.LineItem#Property',
                },],
        },
    ],
    UI.FieldGroup #GeneralInformation : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Entity,
                Label : 'Entity',
            },{
                $Type : 'UI.DataField',
                Value : User,
                Label : 'User',
            },{
                $Type : 'UI.DataField',
                Value : ListofDirectors,
                Label : 'ListofDirectors',
            },{
                $Type : 'UI.DataField',
                Value : CompanyName,
                Label : 'CompanyName',
            },{
                $Type : 'UI.DataField',
                Value : Comments,
                Label : 'Comments',
            },{
                $Type : 'UI.DataField',
                Value : Admin,
                Label : 'Admin',
            },
            {
                $Type : 'UI.DataField',
                Value : Statusnew,
                Label : 'Status',
            },],
    }
);

annotate service.insuranceLiability with @(
    UI.LineItem #Liability : [
        {
            $Type : 'UI.DataField',
            Value : name_of_subsidiary,
            Label : 'Name of Subsidiary',
        },{
            $Type : 'UI.DataField',
            Value : Entity,
            Label : 'Entity',
        },]
);
annotate service.insuranceEmployee with @(
    UI.LineItem #Employee : [
        {
            $Type : 'UI.DataField',
            Value : Entity,
            Label : 'Entity',
        },{
            $Type : 'UI.DataField',
            Value : name_of_subsidiary,
            Label : 'Name of Subsidiary',
        },]
);
annotate service.insuranceProperty with @(
    UI.LineItem #Property : [
        {
            $Type : 'UI.DataField',
            Value : Entity,
            Label : 'Entity',
        },{
            $Type : 'UI.DataField',
            Value : name_of_subsidiary,
            Label : 'Name of Subsidiary',
        },]
);
annotate service.Compliance with @(
    UI.LineItem #Complaince : [
        {
            $Type : 'UI.DataField',
            Value : year,
        },{
            $Type : 'UI.DataField',
            Value : Entity,
            Label : 'Entity',
        },{
            $Type : 'UI.DataField',
            Value : ExtensionDate,
            Label : 'ExtensionDate',
        },{
            $Type : 'UI.DataField',
            Value : Status,
            Label : 'Status',
        },{
            $Type : 'UI.DataField',
            Value : EffectiveDate,
            Label : 'EffectiveDate',
        },{
            $Type : 'UI.DataField',
            Value : DueDate,
            Label : 'DueDate',
        },]
);
annotate service.insuranceLiability with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'General Information',
            ID : 'GeneralInformation',
            Target : '@UI.FieldGroup#GeneralInformation',
        },],
    UI.FieldGroup #generalSection : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : idliability,
                Label : 'id',
            },{
                $Type : 'UI.DataField',
                Value : Entity,
                Label : 'Entity',
            },{
                $Type : 'UI.DataField',
                Value : enter_premium,
                Label : 'enter_premium',
            },{
                $Type : 'UI.DataField',
                Value : enter_sum,
                Label : 'enter_sum',
            },{
                $Type : 'UI.DataField',
                Value : convert_Sum,
                Label : 'convert_Sum',
            },{
                $Type : 'UI.DataField',
                Value : convert_premium_in_usd,
                Label : 'convert_premium_in_usd',
            },],
    }
);
annotate service.insuranceEmployee with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'General Information',
            ID : 'GeneralInformation',
            Target : '@UI.FieldGroup#GeneralInformation',
        },],
    UI.FieldGroup #generalSection : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : convert_premium_in_usd,
                Label : 'convert_premium_in_usd',
            },{
                $Type : 'UI.DataField',
                Value : convert_Sum,
                Label : 'convert_Sum',
            },{
                $Type : 'UI.DataField',
                Value : enter_premium,
                Label : 'enter_premium',
            },{
                $Type : 'UI.DataField',
                Value : idemployee,
                Label : 'id',
            },{
                $Type : 'UI.DataField',
                Value : Entity,
                Label : 'Entity',
            },{
                $Type : 'UI.DataField',
                Value : enter_sum,
                Label : 'enter_sum',
            },{
                $Type : 'UI.DataField',
                Value : name_of_subsidiary,
                Label : 'name_of_subsidiary',
            },],
    }
);
annotate service.insuranceProperty with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'General Information',
            ID : 'GeneralInformation',
            Target : '@UI.FieldGroup#GeneralInformation',
        },],
    UI.FieldGroup #generalSection : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : convert_premium_in_usd,
                Label : 'convert_premium_in_usd',
            },{
                $Type : 'UI.DataField',
                Value : convert_Sum,
                Label : 'convert_Sum',
            },{
                $Type : 'UI.DataField',
                Value : enter_premium,
                Label : 'enter_premium',
            },{
                $Type : 'UI.DataField',
                Value : enter_sum,
                Label : 'enter_sum',
            },{
                $Type : 'UI.DataField',
                Value : Entity,
                Label : 'Entity',
            },{
                $Type : 'UI.DataField',
                Value : idproperty,
                Label : 'id',
            },{
                $Type : 'UI.DataField',
                Value : name_of_subsidiary,
                Label : 'name_of_subsidiary',
            },{
                $Type : 'UI.DataField',
                Value : others,
                Label : 'others',
            },],
    }
);
annotate service.insuranceLiability with @(
    UI.FieldGroup #GeneralInformation : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : select_coverage,
                Label : 'Select Coverage',
            },
            {
                $Type : 'UI.DataField',
                Value : enter_sum,
                Label : 'Enter Sum Insured',
            },
            {
                $Type : 'UI.DataField',
                Value : convert_Sum,
                Label : 'Convert Sum Insured in USD and Millions',
            },
            {
                $Type : 'UI.DataField',
                Value : policy_date,
                Label : 'Policy Date',
            },
            {
                $Type : 'UI.DataField',
                Value : select_currencey,
                Label : 'Select Currencey',
            },
            {
                $Type : 'UI.DataField',
                Value : policy_expiry_date,
                Label : 'Policy Expiry Date',
            },
            {
                $Type : 'UI.DataField',
                Value : enter_premium,
                Label : 'Enter Premium',
            },
            {
                $Type : 'UI.DataField',
                Value : convert_premium_in_usd,
                Label : 'Convert Premium in USD and Millions',
            },
            {
                $Type : 'UI.DataField',
                Value : select_type_of_insurance,
                Label : 'Select Type of Insurance',
            },
            {
                $Type : 'UI.DataField',
                Value : others,
                Label : 'Others',
            },{
                $Type : 'UI.DataField',
                Value : name_of_subsidiary,
                Label : 'Name of Subsidiary',
            },{
                $Type : 'UI.DataField',
                Value : select_division,
                Label : 'Select Division',
                ![@UI.Hidden],
            },{
                $Type : 'UI.DataField',
                Value : select_country,
                Label : 'Select Country',
                ![@UI.Hidden],
            },],
    }
);
annotate service.insuranceEmployee with @(
    UI.FieldGroup #GeneralInformation : {
        $Type : 'UI.FieldGroupType',
        Data : [
           {
                $Type : 'UI.DataField',
                Value : select_coverage,
                Label : 'Select Coverage',
            },
            {
                $Type : 'UI.DataField',
                Value : enter_sum,
                Label : 'Enter Sum Insured',
            },
            {
                $Type : 'UI.DataField',
                Value : convert_Sum,
                Label : 'Convert Sum Insured in USD and Millions',
            },
            {
                $Type : 'UI.DataField',
                Value : policy_date,
                Label : 'Policy Date',
            },
            {
                $Type : 'UI.DataField',
                Value : select_currencey,
                Label : 'Select Currencey',
            },
            {
                $Type : 'UI.DataField',
                Value : policy_expiry_date,
                Label : 'Policy Expiry Date',
            },
            {
                $Type : 'UI.DataField',
                Value : enter_premium,
                Label : 'Enter Premium',
            },
            {
                $Type : 'UI.DataField',
                Value : convert_premium_in_usd,
                Label : 'Convert Premium in USD and Millions',
            },
            {
                $Type : 'UI.DataField',
                Value : select_type_of_insurance,
                Label : 'Select Type of Insurance',
            },
            {
                $Type : 'UI.DataField',
                Value : others,
                Label : 'Others',
            },
            {
                $Type : 'UI.DataField',
                Value : name_of_subsidiary,
                Label : 'Name of Subsidiary',
            },{
                $Type : 'UI.DataField',
                Value : select_division,
                Label : 'Select Division',
                ![@UI.Hidden],
            },{
                $Type : 'UI.DataField',
                Value : select_country,
                Label : 'Select Country',
                ![@UI.Hidden],
            },],
    }
);
annotate service.insuranceProperty with @(
    UI.FieldGroup #GeneralInformation : {
        $Type : 'UI.FieldGroupType',
        Data : [
           {
                $Type : 'UI.DataField',
                Value : select_coverage,
                Label : 'Select Coverage',
            },
            {
                $Type : 'UI.DataField',
                Value : enter_sum,
                Label : 'Enter Sum Insured',
            },
            {
                $Type : 'UI.DataField',
                Value : convert_Sum,
                Label : 'Convert Sum Insured in USD and Millions',
            },
            {
                $Type : 'UI.DataField',
                Value : policy_date,
                Label : 'Policy Date',
            },
            {
                $Type : 'UI.DataField',
                Value : select_currencey,
                Label : 'Select Currencey',
            },
            {
                $Type : 'UI.DataField',
                Value : policy_expiry_date,
                Label : 'Policy Expiry Date',
            },
            {
                $Type : 'UI.DataField',
                Value : enter_premium,
                Label : 'Enter Premium',
            },
            {
                $Type : 'UI.DataField',
                Value : convert_premium_in_usd,
                Label : 'Convert Premium in USD and Millions',
            },
            {
                $Type : 'UI.DataField',
                Value : select_type_of_insurance,
                Label : 'Select Type of Insurance',
            },
            {
                $Type : 'UI.DataField',
                Value : others,
                Label : 'Others',
            },
            {
                $Type : 'UI.DataField',
                Value : name_of_subsidiary,
                Label : 'Name of Subsidiary',
            },{
                $Type : 'UI.DataField',
                Value : select_division,
                Label : 'Select Division',
                ![@UI.Hidden],
            },{
                $Type : 'UI.DataField',
                Value : select_country,
                Label : 'Select Country',
                ![@UI.Hidden],
            },],
    }
);
annotate service.Compliance with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'General Information',
            ID : 'GeneralInformation',
            Target : '@UI.FieldGroup#GeneralInformation',
        },
    ],
    UI.FieldGroup #GeneralInformation : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : DueDate,
                Label : 'DueDate',
            },{
                $Type : 'UI.DataField',
                Value : EffectiveDate,
                Label : 'EffectiveDate',
            },{
                $Type : 'UI.DataField',
                Value : Entity,
                Label : 'Entity',
            },{
                $Type : 'UI.DataField',
                Value : ExtensionDate,
                Label : 'ExtensionDate',
            },{
                $Type : 'UI.DataField',
                Value : year,
                Label : 'year',
            },],
    }
);
annotate service.insuranceLiability with {
    select_currencey @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'currencey',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : select_currencey,
                    ValueListProperty : 'currencey',
                },
            ],
            Label : 'select currency',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.insuranceLiability with {
    select_coverage @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'coverage',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : select_coverage,
                    ValueListProperty : 'coverage',
                },
            ],
            Label : 'select coverage',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.insuranceLiability with {
    select_type_of_insurance @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'type_of_insurance',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : select_type_of_insurance,
                    ValueListProperty : 'type_of_insurance',
                },
            ],
            Label : 'insurance type',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.insuranceEmployee with {
    select_coverage @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'coverage',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : select_coverage,
                    ValueListProperty : 'coverage',
                },
            ],
            Label : 'coverage',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.insuranceEmployee with {
    select_type_of_insurance @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'type_of_insurance',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : select_type_of_insurance,
                    ValueListProperty : 'type_of_insurance',
                },
            ],
            Label : 'insurance type',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.insuranceEmployee with {
    select_currencey @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'currencey',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : select_currencey,
                    ValueListProperty : 'currencey',
                },
            ],
            Label : 'currency',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.insuranceProperty with {
    select_coverage @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'coverage',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : select_coverage,
                    ValueListProperty : 'coverage',
                },
            ],
            Label : 'coverage',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.insuranceProperty with {
    select_type_of_insurance @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'type_of_insurance',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : select_type_of_insurance,
                    ValueListProperty : 'type_of_insurance',
                },
            ],
            Label : 'insurance type',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.insuranceProperty with {
    select_currencey @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'currencey',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : select_currencey,
                    ValueListProperty : 'currencey',
                },
            ],
            Label : 'currency',
        },
        Common.ValueListWithFixedValues : true
)};

annotate service.MasterData with @(
    UI.HeaderInfo : {
        TypeName : '',
        TypeNamePlural : '',
    }
);
annotate service.Compliance with @(
    UI.LineItem #Complaince1 : [
        {
            $Type : 'UI.DataField',
            Value : year,
            Label : 'year',
        },{
            $Type : 'UI.DataField',
            Value : Entity,
            Label : 'Entity',
        },]
);
annotate service.insuranceLiability with @(
    UI.HeaderInfo : {
        TypeName : '',
        TypeNamePlural : '',
    }
);
annotate service.insuranceEmployee with @(
    UI.HeaderInfo : {
        TypeName : '',
        TypeNamePlural : '',
    }
);
annotate service.insuranceProperty with @(
    UI.HeaderInfo : {
        TypeName : '',
        TypeNamePlural : '',
    }
);
annotate service.Compliance with @(
    UI.HeaderInfo : {
        TypeName : '',
        TypeNamePlural : '',
    }
);
annotate service.MasterData with {
    Statusnew @Common.FieldControl : #ReadOnly
};
