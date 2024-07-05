sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'masterdata/masterdata/test/integration/FirstJourney',
		'masterdata/masterdata/test/integration/pages/MasterDataList',
		'masterdata/masterdata/test/integration/pages/MasterDataObjectPage'
    ],
    function(JourneyRunner, opaJourney, MasterDataList, MasterDataObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('masterdata/masterdata') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMasterDataList: MasterDataList,
					onTheMasterDataObjectPage: MasterDataObjectPage
                }
            },
            opaJourney.run
        );
    }
);