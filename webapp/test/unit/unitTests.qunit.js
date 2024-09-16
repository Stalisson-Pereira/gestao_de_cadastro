/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gestao_de_cadastro/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
