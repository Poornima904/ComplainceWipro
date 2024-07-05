sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'masterdata1/test/integration/FirstJourney',
		'masterdata1/test/integration/pages/MasterDataList',
		'masterdata1/test/integration/pages/MasterDataObjectPage'
    ],
    function(JourneyRunner, opaJourney, MasterDataList, MasterDataObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('masterdata1') + '/index.html'
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