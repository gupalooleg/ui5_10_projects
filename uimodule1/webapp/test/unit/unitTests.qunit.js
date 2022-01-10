/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comah./uimodule1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
