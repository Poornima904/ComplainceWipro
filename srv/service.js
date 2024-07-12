const { entity } = require("@sap/cds");
const { Console } = require("console")

module.exports = async function () {
    let { MasterData,insuranceEmployee } = this.entities;
    this.before('CREATE', 'Files', req => {
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `/odata/v4/my/Files(${req.data.ID})/content`
    })

    this.before('READ', 'Files', req => {
        //check content-type
        console.log('content-type: ', req.headers['content-type'])
    })
    this.before('CREATE', 'attach_policy_letter', req => {
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `/odata/v4/my/attach_policy_letter(${req.data.ID})/content`
    })

    this.before('READ', 'attach_policy_letter', req => {
        //check content-type
        console.log('content-type: ', req.headers['content-type'])
    })
    this.before('CREATE', 'NewFiles', req => {
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `/odata/v4/my/NewFiles(${req.data.ID})/content`
    })

    this.before('READ', 'NewFiles', req => {
        //check content-type
        console.log('content-type: ', req.headers['content-type'])
    })

    this.on('UPDATE', 'MasterData', (req, next) => {

        console.log("req.data", req.data)
        //    console.log("req",req)
        //    console.log("status",req.data.Status)
        return next();

    })
    this.on('funcimport', async (req) => {
        debugger
        let result = req.data.data;
        result = JSON.parse(result);
        let call = req.data.status;
        call = JSON.parse(call);
        call = call.status;
        if (call == 'getemployee') {
            var id = result.id;
            try {
                let content1 = await SELECT.from(insuranceEmployee).where({ id : id });
                return JSON.stringify(content1)
            } catch (error) {
                let content2 = await SELECT.from(insuranceEmployee.drafts).where({ id : id });
                return JSON.stringify(content2)
            }
        
            return JSON.stringify(combinedContent);
        }
        if (call == 'getmasterstatus') {
            var entity = result.entity;
            var country = result.country;
            let content1 = await SELECT.from(MasterData).where({ Entity: entity, Country: country })
            return JSON.stringify(content1)

        }
    });


}



