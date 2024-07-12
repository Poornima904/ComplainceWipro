using {db} from '../db/schema';

service MyService {
    @odata.draft.enabled
  
    entity MasterData as projection on db.MasterData;
    entity Compliance as projection on db.Compliance;
    entity Files as projection on db.Files;
    entity NewFiles as projection on db.NewFiles;
    entity insuranceLiability as projection on db.insuranceLiability;
    entity insuranceEmployee as projection on db.insuranceEmployee;
    entity insuranceProperty as projection on db.insuranceProperty;
    entity attach_policy_letter as projection on db.attach_policy_letter;
    entity coverage as projection on db.coverage;
    entity  currencey as projection on db.currencey;
    entity type_of_insurance as projection on db.type_of_insurance;
    entity EntityAuditLogs as projection on db.EntityAuditLogs;
    function funcimport(data : String, status : String) returns String;


}