using {db} from '../db/schema';

service MyService {
    @odata.draft.enabled
    entity MasterData as projection on db.MasterData;
    @odata.draft.enabled
    entity Compliance as projection on db.Compliance;
    entity Files as projection on db.Files;


}