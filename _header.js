define(function (require, exports, module) {
	"use strict";

	var LanguageManager = brackets.getModule("language/LanguageManager"),
		CodeMirror      = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror");

	// Deletion of existing modes is potentially dangerous

	delete CodeMirror.modes.javascript;
	delete CodeMirror.modes.xml;
