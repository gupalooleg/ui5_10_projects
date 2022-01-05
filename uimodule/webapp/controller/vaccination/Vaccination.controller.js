sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/core/format/DateFormat",
    "com/ah/uimodule/model/models"
], function(
	Controller,
	DateFormat,
	models
) {
	"use strict";

	return Controller.extend("com.ah.uimodule.controller.vaccination.Vaccination", {

        onInit: function() {
            var oViewSettingsModel = models.createVaccinationViewSettingsModel();
            this.getView().setModel(oViewSettingsModel, "settings");
            var oVaccinesModel = models.createVaccinesModel();
            this.getView().setModel(oVaccinesModel, "vaccines");


            var oSinglePlanningCalendar = this.byId("SPC1");
            var oSPCView = oSinglePlanningCalendar.getViewByKey("WeekView");
            oSinglePlanningCalendar.setSelectedView(oSPCView);
        },

        formatDate: function(sDate){
            var oDateFormat = DateFormat.getDateTimeInstance({
                pattern: "MMM dd yyyy"
            });
            return oDateFormat.parse(sDate);
        },

        formatStatus: function(sDate){
            var oDateFormat = DateFormat.getDateTimeInstance({
                pattern: "MMM dd yyyy"
            });
            var oDate = oDateFormat.parse(sDate);
            var oCurrDate = new Date();

            if (oDate < oCurrDate){
                return "Success";
            } else if (oDate > oCurrDate){
                return "Warning";
            } else{
                return "Error";
            }
        }
	});
});