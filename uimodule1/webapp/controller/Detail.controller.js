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

	return Controller.extend("com.ah.uimodule1.controller.Detail", {

        onInit: function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this._onSelectingStates, this);
            oRouter.getRoute("detailDetail").attachPatternMatched(this._onSelectingStates, this);
        
        },

        onStateListItemPress: function(oEvent){
            var sState = oEvent.getSource().getBindingContext("states").getObject().state;
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("detailDetail", {
                layout: LayoutType.ThreeColumnsEndExpanded,
                country: this._sCountry,
                state: sState
            });
        },

        onExit: function(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").detachRouteMatched(this._onSelectingStates, this);
            oRouter.getRoute("detailDetail").detachRouteMatched(this._onSelectingStates, this);
        },

        _onSelectingStates: function(oEvent){
            this._sCountry = oEvent.getParameter("arguments").country;
            var oStatesModel = new JSONModel(`https://3247b827-07d6-48c5-8f50-269696f8a266.mock.pstmn.io/state?country=${this._sCountry}`);
            oStatesModel.setSizeLimit(1000);
            this.getView().setModel(oStatesModel, "states");
        }
	});
});