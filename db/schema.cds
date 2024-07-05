namespace db;

using { cuid,managed } from '@sap/cds/common';

entity MasterData{
    key RegID : String;
    Country : String;
    CompanyName : String;
    ListofDirectors : String;
    Admin : String;
    Comments : String;
    User : String;
    Status : String;
    Status_val : Integer
}


entity Compliance {
    key year   : String;
        EffectiveDate  : String;
        DueDate : String;
        Status         : String;
        ExtensionDate  : String;
        compfile : Association to many Files on compfile.fileComp = $self;

}

entity Files: cuid, managed{
    @Core.MediaType: mediaType
    content: LargeBinary;
    @Core.IsMediaType: true
    mediaType: String;
    fileName: String;
    size: Integer;
    url: String;
    fileComp : Association to one Compliance on fileComp.year = ID;
}