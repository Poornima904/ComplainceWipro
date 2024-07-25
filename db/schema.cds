namespace db;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity MasterData {
    key Masterdataid      : String @readonly;
        Entity            : String;
        Country           : String;
        CompanyName       : String;
        ListofDirectors   : String;
        Admin             : String;
        Comments          : String;
        User              : String;
        Statusnew         : String;
        Status_val        : Integer;
        toCompliance      : Composition of many Compliance
                                on toCompliance.comp = $self;
        master_Iliability : Composition of many insuranceLiability
                                on master_Iliability.insurLiability = $self;
        master_IEmployee  : Composition of many insuranceEmployee
                                on master_IEmployee.insurEmployee = $self;
        master_IProperty  : Composition of many insuranceProperty
                                on master_IProperty.insurProperty = $self;
        master_newfiles   : Composition of many NewFiles
                                on master_newfiles.NewFiles1 = $self;

}


entity Compliance {
    key year          : String;
    key Masterdataid  : String @readonly;
        Entity        : String;
        EffectiveDate : String;
        DueDate       : String;
        Status        : String;
        ExtensionDate : String;
        to_Files      : Composition of many Files on to_Files.to_Compliance = $self;
        comp          : Association to one MasterData
                            on comp.Masterdataid = Masterdataid;

}


entity Files : cuid, managed {
    Masterdataid :String;
    year : String;
    @Core.MediaType  : mediaType
    content   : LargeBinary;

    @Core.IsMediaType: true
    mediaType : String;
    fileName  : String;
    size      : Integer;
    url       : String;
    to_Compliance  : Association to one Compliance
                    on to_Compliance.year = year and to_Compliance.Masterdataid = Masterdataid;                   
}

entity NewFiles : cuid, managed {
    file_id      : UUID;
    user         : String;
    Masterdataid : String;

    @Core.MediaType  : mediaType
    content      : LargeBinary;

    @Core.IsMediaType: true
    mediaType    : String;
    fileName     : String;
    // size: Integer;
    Folder       : String;
    url          : String;
    NewFiles1    : Association to one MasterData
                       on NewFiles1.Masterdataid = Masterdataid;

}


entity insuranceLiability {
    key idliability              : String @readonly;
        Masterdataid             : String;
        Entity                   : String;
        type_of_insurance        : String default 'Liability';
        name_of_subsidiary       : String;
        select_division          : String;
        select_country           : String;
        select_type_of_insurance : String;
        others                   : String;
        select_coverage          : String;
        select_currencey         : String;
        enter_sum                : String;
        convert_Sum              : String;
        enter_premium            : String;
        convert_premium_in_usd   : String;
        policy_date              : Date;
        policy_expiry_date       : Date;
        to_LiabilityFiles        : Composition of many LiabilityFiles
                                       on to_LiabilityFiles.to_insuranceLiability = $self;
        insurLiability           : Association to one MasterData
                                       on insurLiability.Masterdataid = Masterdataid;

}

entity LiabilityFiles : cuid, managed {
    idliability           : String;

    @Core.MediaType  : mediaType
    content               : LargeBinary;

    @Core.IsMediaType: true
    mediaType             : String;
    fileName              : String;
    size                  : Integer;
    url                   : String;
    to_insuranceLiability : Association to one insuranceLiability
                                on to_insuranceLiability.idliability = idliability;


}


entity insuranceEmployee {
    key idemployee               : String @readonly;
        Masterdataid             : String;
        Entity                   : String;
        type_of_insurance        : String default 'Employee';
        name_of_subsidiary       : String;
        select_division          : String;
        select_country           : String;
        select_type_of_insurance : String;
        others                   : String;
        select_coverage          : String;
        select_currencey         : String;
        enter_sum                : String;
        convert_Sum              : String;
        enter_premium            : String;
        convert_premium_in_usd   : String;
        policy_date              : Date;
        policy_expiry_date       : Date;
        to_EmployeeFiles         : Composition of many EmployeeFiles
                                       on to_EmployeeFiles.to_insuranceEmployee = $self;
        insurEmployee            : Association to one MasterData
                                       on insurEmployee.Masterdataid = Masterdataid;

}

entity EmployeeFiles : cuid, managed {
    idemployee           : String;

    @Core.MediaType  : mediaType
    content              : LargeBinary;

    @Core.IsMediaType: true
    mediaType            : String;
    fileName             : String;
    size                 : Integer;
    url                  : String;
    to_insuranceEmployee : Association to one insuranceEmployee
                               on to_insuranceEmployee.idemployee = idemployee;


}

entity insuranceProperty {
    key idproperty               : String @readonly;
        Masterdataid             : String;
        Entity                   : String;
        type_of_insurance        : String default 'Property';
        name_of_subsidiary       : String;
        select_division          : String;
        select_country           : String;
        select_type_of_insurance : String;
        others                   : String;
        select_coverage          : String;
        select_currencey         : String;
        enter_sum                : String;
        convert_Sum              : String;
        enter_premium            : String;
        convert_premium_in_usd   : String;
        policy_date              : Date;
        policy_expiry_date       : Date;
        to_PropertyFiles         : Composition of many PropertyFiles
                                       on to_PropertyFiles.to_insuranceProperty = $self;
        insurProperty            : Association to one MasterData
                                       on insurProperty.Masterdataid = Masterdataid;

}

entity PropertyFiles : cuid, managed {
    idproperty           : String;

    @Core.MediaType  : mediaType
    content              : LargeBinary;

    @Core.IsMediaType: true
    mediaType            : String;
    fileName             : String;
    size                 : Integer;
    url                  : String;
    to_insuranceProperty : Association to one insuranceProperty
                               on to_insuranceProperty.idproperty = idproperty;


}


entity coverage {
    key coverage : String;

}

entity currencey {
    key currencey : String;
}

entity type_of_insurance {
    key type_of_insurance : String;
}

entity EntityAuditLogs {
    key id            : UUID;
        DateTime      : String;
        User          : String;
        OperationType : String;
        Entity        : String;
        Changes       : String;
        toChanges     : Composition of many Changes
                            on toChanges.toEntityAuditLogs = $self;
}

entity Changes {
    key Field             : String;
    key id                : UUID;
        OldValue          : String;
        NewValue          : String;
        toEntityAuditLogs : Association to one EntityAuditLogs
                                on toEntityAuditLogs.id = id;
}
