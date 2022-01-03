sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/ah/uimodule/model/models"
],

    function (Controller, models) {
        "use strict";

        return Controller.extend("com.ah.uimodule.controller.Tiles", {
            onInit: function () {
                let oTilesModel = models.createTilesModel();
                this.getView().setModel(oTilesModel, "tiles");
            },

            onTilePress: function(sRoute){
                this.getOwnerComponent().getRouter().navTo(sRoute);
            }
        });
    });
