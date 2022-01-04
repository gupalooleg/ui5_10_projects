sap.ui.define([
    "sap/ui/core/mvc/Controller",    
    "sap/viz/ui5/format/ChartFormatter",    
    "sap/viz/ui5/api/env/Format"
], function(
	Controller,
    ChartFormatter,
    Format
) {
	"use strict";

	return Controller.extend("com.ah.uimodule.controller.covid.CovidLatestPieChart", {

        onInit: function() {
            Format.numericFormatter(ChartFormatter.getInstance());

            var oVizFrame = this.getView().byId("idVizFrame");
            oVizFrame.setVizProperties({
                plotArea: {
                    dataLabel: {
                        visible: true
                    }
                },
                title: {
                    visible: true,
                    text: "Covid latest"
                }
            });

            var oCovidLatestModel = this.getOwnerComponent().getModel("covidLatest");
            oVizFrame.setModel(oCovidLatestModel);

            var oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
            oPopOver.setFormatString(ChartFormatter.DefaultPattern.STANDARDFLOAT);
        }
	});
});