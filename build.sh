#curl -O -L https://github.com/codemirror/CodeMirror/raw/master/mode/jsx/jsx.js
#curl -O -L https://github.com/codemirror/CodeMirror/raw/master/mode/javascript/javascript.js
#curl -O -L https://github.com/codemirror/CodeMirror/raw/master/mode/xml/xml.js


function processFile {
	curl -O -L https://github.com/codemirror/CodeMirror/raw/master/mode/$1/$1.js
	echo "/////////////////// $1 mode //////////////////" >>$2
	perl -ne 'if (/^\s*CodeMirror\.defineMIME/) {$flag=0;} if ($flag) {print;} if (/^\s*\"use strict/) {$flag=1;} ' <./$1.js >>$2
}

buildFileName=./main.js

cp ./_header.js $buildFileName

processFile 'xml' $buildFileName
processFile 'javascript' $buildFileName
processFile 'jsx' $buildFileName

cat ./_footer.js >>$buildFileName
