sap.ui.define(
  ["sap/ui/core/mvc/Controller", "com/ah/uimodule/model/models"],

  function (Controller, models) {
    "use strict";

    return Controller.extend("com.ah.uimodule.controller.countdown.Countdown", {
      onInit: function () {
        let oTimerModel = models.createTimerModel();
        this.getView().setModel(oTimerModel, "timer");

        setInterval(this._updateTimer.bind(this), 1000);
      },

      _updateTimer: function () {
        const dActionDate = new Date("2022-11-17T12:00:00Z");
        const dCurrDate = new Date();
        const iDiff = dActionDate.getTime() - dCurrDate.getTime();

        const days = Math.floor(iDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((iDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((iDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((iDiff % (1000 * 60)) / 1000);

        this.getView().getModel("timer").setData({ days, hours, minutes, seconds });
      }
    });
  }
);
