const { Console } = require("console");
const cds = require('@sap/cds');
const { insert } = require('@sap/cds/libx/_runtime/hana/execute');
const axios = require('axios');
const { timeStamp } = require('console');
const { workerData } = require('worker_threads');


module.exports = cds.service.impl(async function () {

   
    var BPA = await cds.connect.to('wiproBPA');

    let { MasterData, insuranceEmployee, insuranceProperty, insuranceLiability,EmployeeFiles, LiabilityFiles, PropertyFiles, EntityAuditLogs, NewFiles, Files } = this.entities;

    this.before('CREATE', LiabilityFiles.drafts, async req => {
        //debugger
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        
        req.data.url = `https://7d2927dbtrial-dev-wiprocompilance-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/LiabilityFiles(ID=${req.data.ID},IsActiveEntity=false)/content`;
        
    })
    this.before('CREATE', EmployeeFiles.drafts, async req => {
        //debugger
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        
        req.data.url = `https://7d2927dbtrial-dev-wiprocompilance-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/EmployeeFiles(ID=${req.data.ID},IsActiveEntity=false)/content`;
        
    })
    this.before('CREATE', PropertyFiles.drafts, async req => {
        //debugger
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        
        req.data.url = `https://7d2927dbtrial-dev-wiprocompilance-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/PropertyFiles(ID=${req.data.ID},IsActiveEntity=false)/content`;
        
    })
    this.before('CREATE', Files.drafts, async req => {
        //debugger
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        
        req.data.url = `https://7d2927dbtrial-dev-wiprocompilance-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/Files(ID=${req.data.ID},IsActiveEntity=false)/content`;
        
    })
    this.before('CREATE', NewFiles.drafts, async req => {
        //debugger
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        // var draftAdmin =  await SELECT.from('DRAFT_DRAFTADMINISTRATIVEDATA')
        // req.data.DraftAdministrativeData_DraftUUID = draftAdmin[draftAdmin.length - 1].DRAFTUUID;
        // req.data.HasActiveEntity = true;
        // req.data.IsActiveEntity = false;
        req.data.url = `https://7d2927dbtrial-dev-wiprocompilance-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/NewFiles(ID=${req.data.ID},IsActiveEntity=false)/content`;
        // req.data.url = `/odata/v4/my/NewFiles(ID=${req.data.ID},IsActiveEntity=false)/content`;
    })

    this.on('bpaTrigger', async req => {
        try {
            //debugger
            console.log("process trigger");

            var bodyy = JSON.parse(JSON.stringify(
                {
                    "definitionId": "us10.7d2927dbtrial.wipro.wiproProcess",
                    "context": {
                        "masterdataid": `${req.data.Masterdataid}`,
                        "admin": `${req.data.Admin}`
                    }
                }
            ));
            // var bodyy = JSON.parse(JSON.stringify({

            //     "definitionId": "us10.f6623a50trial.approval.approval",
            //     "context": {
            //         "masterdataid": `${req.data.Masterdataid}`,
            //         "isactiveentity": true
            //     }
            // }));


            console.log(bodyy);
            var getc = await BPA.get("/workflow/rest/v1/workflow-instances");
            console.log("get", getc);
            let response11
            try {

                response11 = await BPA.post("/workflow/rest/v1/workflow-instances", bodyy);
                console.log("testetst")
            } catch (error) {
                console.log("Dest error", error)
            }

            // var BPA = await cds.connect.to('wiproBPA');
            // let response11
            // try {
            //     var getc=await BPA.get("/workflow/rest/v1/workflow-instances");
            //     console.log("get",getc);
            //     response11 = await BPA.post("/workflow/rest/v1/workflow-instances", bodyy);
            //     console.log("testetst")
            // } catch (error) {
            //     console.log("Dest error", error)
            // }
            console.log("response11", response11)

        } catch (error) {
            //
        }

    });

    this.on('UPDATE', 'MasterData', async (req, next) => {
        debugger
        if (req.data?.master_newfiles) {
            req.data.master_newfiles.forEach(file => {
                var filePosition = file.url.indexOf('false'); 
                if (filePosition > 0) {
                    var firstPart = file.url.substring(0, filePosition);
                    var secondPart = file.url.substring(filePosition);
                    var newurl = firstPart + 'true' + secondPart.substring(5);
                    file.url = newurl;
                }
            })
        }
        if (req.data?.master_Iliability) {
            debugger
            req.data.master_Iliability.forEach(liability => {
                var liabfiles = liability.to_LiabilityFiles;
                
                liabfiles.forEach(file=>{
                    var filePosition = file.url.indexOf('false');
                    if (filePosition > 0) {
                        var firstPart = file.url.substring(0, filePosition);
                        var secondPart = file.url.substring(filePosition);
                        var newurl = firstPart + 'true' + secondPart.substring(5);
                        file.url = newurl;
                    } 
                })
            })
        }
        if (req.data?.master_IEmployee) {
            debugger
            req.data.master_IEmployee.forEach(employee => {
                var employeefiles = employee.to_EmployeeFiles;
                employeefiles.forEach(file=>{
                    var filePosition = file.url.indexOf('false');
                    if (filePosition > 0) {
                        var firstPart = file.url.substring(0, filePosition);
                        var secondPart = file.url.substring(filePosition);
                        var newurl = firstPart + 'true' + secondPart.substring(5);
                        file.url = newurl;
                    } 
                })
            })
        }
        if (req.data?.master_IProperty) {
            debugger
            req.data.master_IProperty.forEach(property => {
                var propertyfiles = property.to_PropertyFiles;
                propertyfiles.forEach(file=>{
                    var filePosition = file.url.indexOf('false');
                    if (filePosition > 0) {
                        var firstPart = file.url.substring(0, filePosition);
                        var secondPart = file.url.substring(filePosition);
                        var newurl = firstPart + 'true' + secondPart.substring(5);
                        file.url = newurl;
                    } 
                })
            })
        }
        if (req.data?.toCompliance) {
            debugger
            req.data.toCompliance.forEach(compliance => {
                var compliancefiles = compliance.to_Files;
                compliancefiles.forEach(file=>{
                    var filePosition = file.url.indexOf('false');
                    if (filePosition > 0) {
                        var firstPart = file.url.substring(0, filePosition);
                        var secondPart = file.url.substring(filePosition);
                        var newurl = firstPart + 'true' + secondPart.substring(5);
                        file.url = newurl;
                    } 
                })
            })
        }


        var diff = await req.diff();
        var date = new Date();
        var DateTime = date.toLocaleString('en-GB', { timeZone: 'UTC' });
        var User = "test@test.com";//req?.headers['x-username']

        /////////////////////// Master Update ///////////////////////////
        if (diff._old) {

            var OperationType = req.event;
            var Changes = [];
            var Entity = "MasterData";
            var keys = Object.keys(diff._old);
            keys.forEach((key) => {
                Changes.push({
                    Field: key,
                    OldValue: diff._old[`${key}`],
                    NewValue: diff[`${key}`]
                })
            })

            var StrChanges = JSON.stringify(Changes);

            var Update = await INSERT.into(EntityAuditLogs).entries([{
                DateTime: DateTime,
                User: User,
                OperationType: OperationType,
                Entity: Entity,
                Changes: StrChanges,
                toChanges: Changes
            }])
        }

        ////////////////////////// Compliance //////////////////////
        if (diff?.toCompliance) {
            diff.toCompliance.forEach(async (compliance) => {
                if (compliance?._op) {
                    var cOperationType = compliance._op;
                    var cEntity = "Compliance (" + compliance.year + ")";

                    ///////////// Compliance UPDATE /////////////////////

                    if (compliance?._old) {
                        var cChanges = [];
                        var ckeys = Object.keys(compliance._old);
                        ckeys.forEach((key) => {
                            cChanges.push({
                                Field: key,
                                OldValue: compliance._old[`${key}`],
                                NewValue: compliance[`${key}`]
                            })
                        })
                    }

                    var cChangeString = JSON.stringify(cChanges);

                    ///////////////////////////////////////////////////////
                    if (cOperationType == 'create' || cOperationType == 'delete') {
                        var cUpdate = await INSERT.into(EntityAuditLogs).entries([{
                            DateTime: DateTime,
                            User: User,
                            OperationType: cOperationType.toUpperCase(),
                            Entity: cEntity
                        }])
                    } else if (cOperationType == 'update') {
                        var cUpdate = await INSERT.into(EntityAuditLogs).entries([{
                            DateTime: DateTime,
                            User: User,
                            OperationType: cOperationType.toUpperCase(),
                            Entity: cEntity,
                            Changes: cChangeString,
                            toChanges: cChanges
                        }])
                    }

                }
            })
        }

        ////////////////////////// liability insurance //////////////////////
        if (diff?.master_Iliability) {
            diff.master_Iliability.forEach(async (liability) => {
                if (liability?._op) {
                    var iOperationType = liability._op;
                    var iEntity = "insuranceLiability ( " + liability.idliability + " )";

                    ///////////// Liability UPDATE /////////////////////
                    if (liability?._old) {
                        var iChanges = [];
                        var ikeys = Object.keys(liability._old);
                        ikeys.forEach((key) => {
                            iChanges.push({
                                Field: key,
                                OldValue: liability._old[`${key}`],
                                NewValue: liability[`${key}`]
                            })
                        })
                    }

                    var iChangeString = JSON.stringify(iChanges);

                    ///////////////////////////////////////////////////////
                    if (iOperationType == 'create' || iOperationType == 'delete') {
                        var iUpdate = await INSERT.into(EntityAuditLogs).entries([{
                            DateTime: DateTime,
                            User: User,
                            OperationType: iOperationType.toUpperCase(),
                            Entity: iEntity
                        }])
                    } else if (iOperationType == 'update') {
                        var iUpdate = await INSERT.into(EntityAuditLogs).entries([{
                            DateTime: DateTime,
                            User: User,
                            OperationType: iOperationType.toUpperCase(),
                            Entity: iEntity,
                            Changes: iChangeString,
                            toChanges: iChanges
                        }])
                    }

                }
            })
        }

        ////////////////////////// Employee insurance //////////////////////
        if (diff?.master_IEmployee) {
            diff.master_IEmployee.forEach(async (employee) => {
                if (employee?._op) {
                    var eOperationType = employee._op;
                    var eEntity = "insuranceEmployee ( " + employee.idemployee + " )";

                    ///////////// Employee UPDATE /////////////////////
                    if (employee?._old) {
                        var eChanges = [];
                        var ekeys = Object.keys(employee._old);
                        ekeys.forEach((key) => {
                            eChanges.push({
                                Field: key,
                                OldValue: employee._old[`${key}`],
                                NewValue: employee[`${key}`]
                            })
                        })
                    }

                    var eChangeString = JSON.stringify(eChanges);

                    ///////////////////////////////////////////////////////
                    if (eOperationType == 'create' || eOperationType == 'delete') {
                        var eUpdate = await INSERT.into(EntityAuditLogs).entries([{
                            DateTime: DateTime,
                            User: User,
                            OperationType: eOperationType.toUpperCase(),
                            Entity: eEntity
                        }])
                    } else if (eOperationType == 'update') {
                        var eUpdate = await INSERT.into(EntityAuditLogs).entries([{
                            DateTime: DateTime,
                            User: User,
                            OperationType: eOperationType.toUpperCase(),
                            Entity: eEntity,
                            Changes: eChangeString,
                            toChanges: eChanges
                        }])
                    }

                }
            })
        }


        ////////////////////////// property insurance //////////////////////
        if (diff?.master_IProperty) {
            diff.master_IProperty.forEach(async (property) => {
                if (property?._op) {
                    var pOperationType = property._op;
                    var pEntity = "insuranceProperty ( " + property.idproperty + " )";

                    ///////////// property UPDATE /////////////////////
                    if (property?._old) {
                        var pChanges = [];
                        var pkeys = Object.keys(property._old);
                        pkeys.forEach((key) => {
                            pChanges.push({
                                Field: key,
                                OldValue: property._old[`${key}`],
                                NewValue: property[`${key}`]
                            })
                        })
                    }

                    var pChangeString = JSON.stringify(pChanges);

                    ///////////////////////////////////////////////////////
                    if (pOperationType == 'create' || pOperationType == 'delete') {
                        var pUpdate = await INSERT.into(EntityAuditLogs).entries([{
                            DateTime: DateTime,
                            User: User,
                            OperationType: pOperationType.toUpperCase(),
                            Entity: pEntity
                        }])
                    } else if (pOperationType == 'update') {
                        var pUpdate = await INSERT.into(EntityAuditLogs).entries([{
                            DateTime: DateTime,
                            User: User,
                            OperationType: pOperationType.toUpperCase(),
                            Entity: pEntity,
                            Changes: pChangeString,
                            toChanges: pChanges
                        }])
                    }

                }
            })
        }
        return next()


    })
    this.on('funcimport', async (req) => {
        // //debugger
        let result = req.data.data;
        result = JSON.parse(result);
        let call = req.data.status;
        call = JSON.parse(call);
        call = call.status;
        if (call == 'getemployee') {
            var id = result.id;

            let content1 = await SELECT.from(insuranceEmployee).where({ idemployee: id });
            let content2 = await SELECT.from(insuranceEmployee.drafts).where({ idemployee: id })
            let combinedContent = {
                content1: content1,
                content2: content2
            };
            return JSON.stringify(combinedContent)
        }
        if (call == 'getliability') {
            var id = result.id;

            let content1 = await SELECT.from(insuranceLiability).where({ idliability: id });
            let content2 = await SELECT.from(insuranceLiability.drafts).where({ idliability: id })
            let combinedContent = {
                content1: content1,
                content2: content2
            };
            return JSON.stringify(combinedContent)
        }
        if (call == 'getproperty') {
            var id = result.id;

            let content1 = await SELECT.from(insuranceProperty).where({ idproperty: id });
            let content2 = await SELECT.from(insuranceProperty.drafts).where({ idproperty: id })
            let combinedContent = {
                content1: content1,
                content2: content2
            };
            return JSON.stringify(combinedContent)
        }

        if (call == 'getmasterstatus') {
            var id = result.id;
            let content1 = await SELECT.from(MasterData).where({ Masterdataid: id })
            return JSON.stringify(content1)

        }
        if (call == 'getattachmentskey') {
            var id = result.id;
            let content1 = await SELECT.from(NewFiles.drafts).where({ Masterdataid: id });
            return JSON.stringify(content1)

        }
    });
    this.on('updateStatus', async (req) => {
        //debugger
        var pending = "Pending for Approval"
        await UPDATE(MasterData).set({ Statusnew: pending, Status_val: 2 }).where({ Masterdataid: req.data.Masterdataid });

    });
    this.before('CREATE', MasterData.drafts, async (req) => {
        //debugger
        var now = new Date();
        var randomNum = '';
        randomNum += Math.round(Math.random() * 9);
        randomNum += Math.round(Math.random() * 9);
        randomNum += now.getTime().toString().slice(-3);
        req.data.Masterdataid = randomNum
        return req;
    })
    this.before('CREATE', insuranceEmployee.drafts, async (req) => {
        //debugger
        var now = new Date();
        var randomNum = '';
        randomNum += Math.round(Math.random() * 9);
        randomNum += Math.round(Math.random() * 9);
        randomNum += now.getTime().toString().slice(-3);
        req.data.idemployee = randomNum
        return req;
    })
    this.before('CREATE', insuranceProperty.drafts, async (req) => {
        //debugger
        var now = new Date();
        var randomNum = '';
        randomNum += Math.round(Math.random() * 9);
        randomNum += Math.round(Math.random() * 9);
        randomNum += now.getTime().toString().slice(-3);
        req.data.idproperty = randomNum
        return req;
    })
    this.before('CREATE', insuranceLiability.drafts, async (req) => {
        //debugger
        var now = new Date();
        var randomNum = '';
        randomNum += Math.round(Math.random() * 9);
        randomNum += Math.round(Math.random() * 9);
        randomNum += now.getTime().toString().slice(-3);
        req.data.idliability = randomNum
        return req;
    })

});




