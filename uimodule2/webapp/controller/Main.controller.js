sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/ah/uimodule2/model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models) {
        "use strict";

        return Controller.extend("com.ah.uimodule2.controller.Main", {
            onInit: function () {
                var oPortfolioModel = models.createPortfolioModel();
                this.getView().setModel(oPortfolioModel, "portfolio");
            }
        });
    });
