
	CodeMirror.defineMIME("text/jsx", "jsx")

	LanguageManager.getLanguage("javascript").removeFileExtension("jsx");

	LanguageManager.defineLanguage("jsx", {
		name: "jsx",
		mode: "jsx",
		fileExtensions: ["jsx", "react.js"],
		blockComment: ["/*", "*/"],
		lineComment: ["//"]
	});
});
