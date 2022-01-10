sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/f/LayoutType"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, LayoutType) {
        "use strict";

        return Controller.extend("com.ah.uimodule1.controller.Main", {
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
            },

            onExit: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.detachBeforeRouteMatched(this._onBeforeRouteMatched, this);
            },

            _onBeforeRouteMatched: function(oEvent){
                var sLayout = oEvent.getParameters().arguments.layout;
                if (!sLayout){
                    sLayout = LayoutType.OneColumn;
                }

                var oModel = this.getOwnerComponent().getModel();
                oModel.setProperty("/layout", sLayout);
            }

        });
    });
