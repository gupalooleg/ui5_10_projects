sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(
	Controller,
    JSONModel
) {
	"use strict";

	return Controller.extend("com.ah.uimodule1.controller.DetailDetail", {

        onInit: function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detailDetail").attachPatternMatched(this._onSelectingDistricts, this);        
        },

        onDistrictListItemPress: function(oEvent){

        },
        
        onExit: function(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detailDetail").detachRouteMatched(this._onSelectingDistricts, this);
        },

        _onSelectingDistricts: function(oEvent){
            var sCountry = oEvent.getParameter("arguments").country;            
            var sState = oEvent.getParameter("arguments").state;            
            var oDistrictsModel = new JSONModel(`https://3247b827-07d6-48c5-8f50-269696f8a266.mock.pstmn.io/district?country=${sCountry}&state=${sState}`);
            oDistrictsModel.setSizeLimit(1000);
            this.getView().setModel(oDistrictsModel, "districts");
        }
	});
});