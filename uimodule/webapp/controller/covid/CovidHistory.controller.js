sap.ui.define(
  ["sap/ui/core/mvc/Controller",
  "sap/viz/ui5/format/ChartFormatter",
  "sap/viz/ui5/api/env/Format"],

  function (Controller, ChartFormatter, Format) {
    "use strict";

    return Controller.extend("com.ah.uimodule.controller.covid.CovidHistory", {
      onInit: function () {
            Format.numericFormatter(ChartFormatter.getInstance());

            var oVizFrame = this.getView().byId("idVizFrame");
            oVizFrame.setVizProperties({
                plotArea: {
                    dataLabel: {
                        formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                        visible: true
                    }
                },
                title: {
                    visible: true,
                    text: "Covid cases history"
                }
            });
            
            var oCovidHistoryModel = this.getOwnerComponent().getModel("covidHistory");
            oVizFrame.setModel(oCovidHistoryModel);

            var oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
            oPopOver.setFormatString(ChartFormatter.DefaultPattern.STANDARDFLOAT);
      },

      onPressList: function(){
        this.getOwnerComponent().getRouter().navTo("CovidLatestList");
      },
      
      onPressGraph: function(){
        this.getOwnerComponent().getRouter().navTo("CovidLatestPieChart");        
      }

    });
  }
);
