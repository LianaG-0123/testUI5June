/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"hr/zlgsampleodata/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});