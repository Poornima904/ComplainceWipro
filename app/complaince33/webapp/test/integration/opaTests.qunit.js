sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'complaince33/test/integration/FirstJourney',
		'complaince33/test/integration/pages/ComplianceList',
		'complaince33/test/integration/pages/ComplianceObjectPage'
    ],
    function(JourneyRunner, opaJourney, ComplianceList, ComplianceObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('complaince33') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheComplianceList: ComplianceList,
					onTheComplianceObjectPage: ComplianceObjectPage
                }
            },
            opaJourney.run
        );
    }
);