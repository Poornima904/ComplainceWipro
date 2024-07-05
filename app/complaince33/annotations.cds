using MyService as service from '../../srv/service';

annotate service.Compliance with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : year,
            Label : 'year',
        },
        {
            $Type : 'UI.DataField',
            Value : DueDate,
            Label : 'DueDate',
        },
        {
            $Type : 'UI.DataField',
            Value : EffectiveDate,
            Label : 'EffectiveDate',
        },
        {
            $Type : 'UI.DataField',
            Value : Status,
            Label : 'Status',
        },
    ]
);


annotate service.Compliance with @(
    UI.SelectionFields : [
        year,
    ]
);
annotate service.Compliance with {
    year @Common.Label : 'year'
};
annotate service.Compliance with @Common.SemanticKey: [ year ];
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
                Value : year,
                Label : 'Year',
            },{
                $Type : 'UI.DataField',
                Value : DueDate,
                Label : 'DueDate',
            },
            {
                $Type : 'UI.DataField',
                Value : EffectiveDate,
                Label : 'EffectiveDate',
            },{
                $Type : 'UI.DataField',
                Value : Status,
                Label : 'Status',
            },],
    }
);
