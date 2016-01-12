
	CodeMirror.defineMIME ("text/jsx", "jsx")

	var jsLang = LanguageManager.getLanguage ("javascript");
	jsLang.removeFileExtension("jsx");

	LanguageManager.defineLanguage("jsx", {
		name: "JSX",
		mode: "jsx",
		fileExtensions: ["jsx", "react.js"],
		blockComment: ["/*", "*/"],
		lineComment: ["//"]
	});

	jsLang._setLanguageForMode ("jsx", jsLang);

});
