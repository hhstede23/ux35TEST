sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"academy/ux35131/test/integration/pages/zux35_131_c_soList.gen",
	"academy/ux35131/test/integration/pages/zux35_131_c_soObjectPage.gen",
	"academy/ux35131/test/integration/pages/zux35_131_c_salesorderitemObjectPage.gen"
], function (JourneyRunner, zux35_131_c_soListGenerated, zux35_131_c_soObjectPageGenerated, zux35_131_c_salesorderitemObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('academy/ux35131') + '/test/flp.html#app-preview',
        pages: {
			onThezux35_131_c_soListGenerated: zux35_131_c_soListGenerated,
			onThezux35_131_c_soObjectPageGenerated: zux35_131_c_soObjectPageGenerated,
			onThezux35_131_c_salesorderitemObjectPageGenerated: zux35_131_c_salesorderitemObjectPageGenerated
        },
        async: true
    });

    return runner;
});

