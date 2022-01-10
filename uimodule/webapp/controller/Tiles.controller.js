sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "com/ah/uimodule/model/models"
],

    function (Controller,
    library,
	models) {
        "use strict";

        return Controller.extend("com.ah.uimodule.controller.Tiles", {
            onInit: function () {
                let oTilesModel = models.createTilesModel();
                this.getView().setModel(oTilesModel, "tiles");
            },

            onTilePress: function(sRoute){
                var oTiles = this.getView().getModel("tiles").getObject("/");
                var oRouteTile = oTiles.find((oTile) => oTile.route === sRoute);

                if (oRouteTile.url){
                    library.URLHelper.redirect(oRouteTile.url);
                }else{
                    this.getOwnerComponent().getRouter().navTo(sRoute);
                }
            }
        });
    });
