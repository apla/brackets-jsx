React (.jsx) language mode for Brackets IDE
=========================================

Actually this is just backported [jsx mode](https://github.com/codemirror/CodeMirror/blob/master/mode/jsx/jsx.js) for CodeMirror.

A word to the [marijnh](https://github.com/marijnh):

> Well, I suppose if three people are working on one, the need for this mode is pressing.
> And it looks like it's going to be less work to write one myself rather than to keep hinting
> and reviewing and pushing people in the right direction. You can find my version in b3f9487.
> Please test it and submit failing test cases. If this helps you in a financial way,
> a donation to cover the morning spent on this is much appreciated.

How it works
------------

This module removes original `xml` and `javascript` modes from brackets and replaces it with latest version from CodeMirror. After, `jsx` file extension is disassociated from `javascript` mode and new `jsx` mode is created.

How to update the extension
---------------------------

I've created [script](build.sh) which fetch `xml`, `javascript` and `jsx` modes from CodeMirror.
Then script concatenate results, wraps result with `_header.js` and `_footer.js` and put result into brackets extension `main.js`.

After everything is done, you'll need to change version in `package.json` and commit changes.

`npm run-script package` will produce archive ready to upload.
