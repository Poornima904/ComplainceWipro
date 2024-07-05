using MyService as service from '../../srv/service';

annotate service.MasterData with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : RegID,
            Label : 'RegID',
        },
        {
            $Type : 'UI.DataField',
            Value : Status,
            Label : 'Status',
            Criticality : Status_val,
        },
        {
            $Type : 'UI.DataField',
            Value : User,
            Label : 'User',
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
    ],
    UI.FieldGroup #GeneralInformation : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : RegID,
                Label : 'RegID',
            },{
                $Type : 'UI.DataField',
                Value : Status,
                Label : 'Status',
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
            },],
    }
);

annotate service.MasterData with {
    Status @Common.FieldControl : #ReadOnly
};
