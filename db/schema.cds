namespace db;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity MasterData {
    key Entity            : String;
    key Country           : String;
        CompanyName       : String;
        ListofDirectors   : String;
        Admin             : String;
        Comments          : String;
        User              : String;
        Statusnew         : String;
        Status_val        : Integer;
        master_compliance : Composition of many Compliance
                                on master_compliance.comp = $self;
        master_Iliability : Composition of many insuranceLiability
                                on master_Iliability.insurLiability = $self;
        master_IEmployee  : Composition of many insuranceEmployee
                                on master_IEmployee.insurEmployee = $self;
        master_IProperty  : Composition of many insuranceProperty
                                on master_IProperty.insurProperty = $self;
}


entity Compliance {
    key year          : String;
        Entity        : String;
        EffectiveDate : String;
        DueDate       : String;
        Status        : String;
        ExtensionDate : String;
        compfile      : Association to many Files
                            on compfile.fileComp = $self;
        comp          : Association to one MasterData
                            on comp.Entity = Entity;

}


entity Files : cuid, managed {
    @Core.MediaType  : mediaType
    content   : LargeBinary;

    @Core.IsMediaType: true
    mediaType : String;
    fileName  : String;
    size      : Integer;
    url       : String;
    fileComp  : Association to one Compliance
                    on fileComp.year = ID;
}

entity NewFiles : cuid, managed {
    file_id   : UUID;
    user      : String;

    @Core.MediaType  : mediaType
    content   : LargeBinary;

    @Core.IsMediaType: true
    mediaType : String;
    fileName  : String;
    // size: Integer;
    Folder    : String;
    url       : String;
}


entity insuranceLiability {
    key id                          : UUID;
        Entity                      : String;
        type_of_insurance           : String default 'Liability';
        name_of_subsidiary          : String;
        select_division             : String;
        select_country              : String;
        select_type_of_insurance    : String;
        others                      : String;
        select_coverage             : String;
        select_currencey            : String;
        enter_sum                   : String;
        convert_Sum                 : String;
        enter_premium               : String;
        convert_premium_in_usd      : String;
        policy_date                 : Date;
        policy_expiry_date          : Date;
        insurance_to_policy_letter1 : Association to many attach_policy_letter
                                          on insurance_to_policy_letter1.ID = id;
        insurLiability              : Association to one MasterData
                                          on insurLiability.Entity = Entity;

}

entity insuranceEmployee {
    key id                          : UUID;
        Entity                      : String;
        type_of_insurance           : String default 'Employee';
        name_of_subsidiary          : String;
        select_division             : String;
        select_country              : String;
        select_type_of_insurance    : String;
        others                      : String;
        select_coverage             : String;
        select_currencey            : String;
        enter_sum                   : String;
        convert_Sum                 : String;
        enter_premium               : String;
        convert_premium_in_usd      : String;
        policy_date                 : Date;
        policy_expiry_date          : Date;
        insurance_to_policy_letter2 : Association to many attach_policy_letter
                                          on insurance_to_policy_letter2.ID = id;
        insurEmployee               : Association to one MasterData
                                          on insurEmployee.Entity = Entity;

}

entity insuranceProperty {
    key id                          : UUID;
        Entity                      : String;
        type_of_insurance           : String default 'Property';
        name_of_subsidiary          : String;
        select_division             : String;
        select_country              : String;
        select_type_of_insurance    : String;
        others                      : String;
        select_coverage             : String;
        select_currencey            : String;
        enter_sum                   : String;
        convert_Sum                 : String;
        enter_premium               : String;
        convert_premium_in_usd      : String;
        policy_date                 : Date;
        policy_expiry_date          : Date;
        insurance_to_policy_letter3 : Association to many attach_policy_letter
                                          on insurance_to_policy_letter3.ID = id;
        insurProperty               : Association to one MasterData
                                          on insurProperty.Entity = Entity;

}

entity attach_policy_letter : cuid, managed {
    @Core.MediaType  : mediaType
    content                     : LargeBinary;

    @Core.IsMediaType: true
    mediaType                   : String;
    fileName                    : String;
    size                        : Integer;
    url                         : String;
    policy_letter_to_insurance1 : Association to one insuranceLiability
                                      on policy_letter_to_insurance1.id = ID;
    policy_letter_to_insurance2 : Association to one insuranceEmployee
                                      on policy_letter_to_insurance2.id = ID;
    policy_letter_to_insurance3 : Association to one insuranceProperty
                                      on policy_letter_to_insurance3.id = ID;

}
entity coverage {
    key coverage:String;

}

entity currencey{
    key currencey:String;
}

entity type_of_insurance{
   key type_of_insurance: String;
}
entity EntityAuditLogs {
    key id: UUID;
    DateTime:String;
    User:String;
    OperationType:String;
    Entity:String;
    Changes:String;
    toChanges: Composition of many Changes on toChanges.toEntityAuditLogs = $self;
}

entity Changes {
    key Field:String;
    key id:UUID;
    OldValue:String;
    NewValue:String;
    toEntityAuditLogs: Association to one EntityAuditLogs on toEntityAuditLogs.id = id;
}