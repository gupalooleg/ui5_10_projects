sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/f/LayoutType"
], function(
	Controller,
    JSONModel,
	LayoutType
) {
	"use strict";

	return Controller.extend("com.ah.uimodule1.controller.Master", {

        onInit: function() {
           this._onSelectingCountries();        
        },

        onCountryListItemPress: function(oEvent){
            var sCountry = oEvent.getSource().getBindingContext("countries").getObject().country;
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("detail", {
                layout: LayoutType.TwoColumnsMidExpanded,
                country: sCountry
            });
        },

        _onSelectingCountries: function(){
            var oCountriesModel = new JSONModel("https://3247b827-07d6-48c5-8f50-269696f8a266.mock.pstmn.io/countries");
            oCountriesModel.setSizeLimit(1000);
            this.getView().setModel(oCountriesModel, "countries");
        }
	});
});