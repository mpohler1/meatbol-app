(this.webpackJsonpmeatbol=this.webpackJsonpmeatbol||[]).push([[0],{14:function(t,e,n){t.exports=n(27)},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(7),o=n.n(i),l=n(1),s=n(2),u=n(4),c=n(5),p=n(3),d=function(t,e,n){return{type:"INPUT_TEXT_CHANGE",payload:{input:t,selectionStart:e,selectionEnd:n}}},h=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"handleInputTextChange",value:function(t){this.props.inputTextChange(t.target.value,t.target.selectionStart,t.target.selectionEnd)}},{key:"handleKeyDown",value:function(t){switch(t.keyCode){case 9:t.preventDefault(),this.props.shiftHeld?this.performShiftTab(t):t.target.selectionEnd-t.target.selectionStart>0?this.performSelectionTab(t):this.performSingleTab(t);break;case 16:this.props.setShiftHeld(!0,t.target.selectionStart,t.target.selectionEnd)}}},{key:"handleKeyUp",value:function(t){16===t.keyCode&&this.props.setShiftHeld(!1,t.target.selectionStart,t.target.selectionEnd)}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"inputBoxTextArea"},"Meatbol Code"),a.a.createElement("textarea",{className:"form-control text-monospace overflow-auto console",id:"inputBoxTextArea",cols:"80",wrap:"off",value:this.props.input,onKeyDown:function(e){return t.handleKeyDown(e)},onKeyUp:function(e){return t.handleKeyUp(e)},onChange:function(e){return t.handleInputTextChange(e)},ref:function(e){return e&&e.setSelectionRange(t.props.selectionStart,t.props.selectionEnd)}}))}},{key:"performSingleTab",value:function(t){var e=t.target.value,n=t.target.selectionStart,r=t.target.selectionEnd;e=e.substring(0,n)+"\t"+e.substring(r,e.length),this.props.inputTextChange(e,n+1,r+1)}},{key:"performSelectionTab",value:function(t){var e=t.target.value,n=t.target.selectionStart,r=t.target.selectionEnd,a=this.alignBlockStartToStartOfLine(e,n),i=this.alignBlockEndToEndOfLine(e,r),o=e.substring(a,i),l=this.addTabsToEveryLineInBlock(o);n=(n+=this.differenceInLengthBetweenFirstLineOfEachBlock(o,l))<0?0:n,r=(r+=l.length-o.length)<0?0:r,e=e.substring(0,a)+l+e.substring(i,e.length),this.props.inputTextChange(e,n,r)}},{key:"performShiftTab",value:function(t){var e=t.target.value,n=t.target.selectionStart,r=t.target.selectionEnd,a=this.alignBlockStartToStartOfLine(e,n),i=this.alignBlockEndToEndOfLine(e,r),o=e.substring(a,i),l=this.removeTabsFromEveryLineInBlock(o);n=(n-=this.differenceInLengthBetweenFirstLineOfEachBlock(o,l))<0?0:n,r=(r+=l.length-o.length)<0?0:r,e=e.substring(0,a)+l+e.substring(i,e.length),this.props.inputTextChange(e,n,r)}},{key:"alignBlockStartToStartOfLine",value:function(t,e){for(;e>0&&"\n"!==t[e-1];)e--;return e}},{key:"alignBlockEndToEndOfLine",value:function(t,e){for(;e<t.length&&"\n"!==t[e];)e++;return e}},{key:"addTabsToEveryLineInBlock",value:function(t){for(var e=t.split("\n"),n=0;n<e.length;n++)e[n]="\t"+e[n];return e.join("\n")}},{key:"removeTabsFromEveryLineInBlock",value:function(t){for(var e=t.split("\n"),n=0;n<e.length;n++)(e[n].startsWith("\t")||e[n].startsWith(" "))&&(e[n]=e[n].substring(1,e[n].length));return e.join("\n")}},{key:"differenceInLengthBetweenFirstLineOfEachBlock",value:function(t,e){var n=t.split("\n")[0],r=e.split("\n")[0];return Math.abs(n.length-r.length)}}]),n}(r.Component),f=Object(p.b)((function(t){return{input:t.inputBox.input,shiftHeld:t.inputBox.shiftHeld,selectionStart:t.inputBox.selectionStart,selectionEnd:t.inputBox.selectionEnd}}),{inputTextChange:d,setShiftHeld:function(t,e,n){return{type:"SET_SHIFT_HELD",payload:{shiftHeld:t,selectionStart:e,selectionEnd:n}}}})(h),m=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"outputBoxTextArea"},"Output"),a.a.createElement("textarea",{className:"form-control text-monospace overflow-auto console",id:"outputBoxTextArea",ref:function(e){return t.props.output&&e&&e.focus()},cols:"80",value:this.props.output,readOnly:!0}))}}]),n}(r.Component),E=Object(p.b)((function(t){return{output:t.interpretButton.output}}))(m),b=(n(25),n(13));var g=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"handleOnClick",value:function(t){var e,n=this;return this.props.interpretRequest(),(e=t,fetch("https://api.masonpohler.com:5000/interpret/text",{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then((function(t){return Promise.all([t,t.json()])}))).then((function(t){var e=Object(b.a)(t,2),r=e[0],a=e[1];200===r.status?n.props.interpretSuccess(a.text):n.props.interpretError()}))}},{key:"render",value:function(){var t=this;return a.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.handleOnClick(t.props.input)}},"Interpret")}}]),n}(r.Component),y=Object(p.b)((function(t){return{input:t.inputBox.input}}),{interpretRequest:function(){return{type:"INTERPRET_REQUEST"}},interpretSuccess:function(t){return{type:"INTERPRET_SUCCESS",payload:{output:t}}},interpretError:function(){return{type:"INTERPRET_ERROR"}}})(g),v=(n(26),function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"handleButtonClick",value:function(){null===this.props.menuVisible?this.props.setMenuVisible(!0):this.props.setMenuVisible(!this.props.menuVisible)}},{key:"handleOnBlur",value:function(t){t&&t.relatedTarget&&t.relatedTarget.click(),this.props.setMenuVisible(!1)}},{key:"handleExample",value:function(t){this.props.inputTextChange(t,0,0)}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"dropup"},a.a.createElement("button",{className:"btn btn-info dropdown-toggle",type:"button",id:"dropdownMenuButton","aria-haspopup":"true","aria-expanded":"false",onClick:function(){return t.handleButtonClick()},onBlur:function(e){return t.handleOnBlur(e)}},"Load An Example!"),this.props.menuVisible&&a.a.createElement("div",{className:"dropdown-menu show","aria-labelledby":"dropdownMenuButton"},a.a.createElement("button",{className:"btn dropdown-item",onClick:function(){return t.handleExample('print("Bubble Sort Example\\n");\n\nInt array[] = 99, 55, 24, 67, 39, 84;\nprint("Unsorted: [", array, "] \\n");\n\nfor i = 0 to ELEM(array)-1:      \n\n\tfor j = 0 to ELEM(array)-i-1:  \n\n\t\tif array[j] > array[j+1]:  \n\t\t\tInt temp = array[j];\n\t\t\tarray[j] = array[j+1];\n\t\t\tarray[j+1] = temp;\n\t\t\tprint("Swapped", array[j+1], "with", array[j], " => [", array, "] ");\n\t\tendif;\n\n\tendfor;\n\nendfor;\n\nprint("\\nSorted: [", array, "] ");')}},"Bubble Sort"),a.a.createElement("div",{className:"dropdown-divider"}),a.a.createElement("button",{className:"btn dropdown-item",onClick:function(){return t.handleExample('print("Binary Search Example\\n");\n\nInt sortedArray[] = 0, 3, 6, 9, 11, 23, 45, 88, 100, 111, 123, 143, 152, 167, 199, 204;\nInt target = 123;\nInt index;\n\nprint("Sorted Array: [", sortedArray, "] ");\nprint("Target:", target):\nprint();\n\nInt low = 0;\nInt high = ELEM(sortedArray)-1;\nwhile low <= high:\n\n\t// For printing chunks, unrelated to binary search\n\tInt elements = high-low+1;\n\tInt chunk[elements];\n\tfor i = 0 to elements:\n\t\tchunk[i] = sortedArray[low+i];\n\tendfor;\n\t// For printing chunks, unrelated to binary search\n\n\t// Binary Search below\n\tInt mid = (low + high) / 2;\n\n\tprint("Searching chunk [", chunk, "] Mid =", sortedArray[mid]);\n\n\tif sortedArray[mid] == target:\n\t\tprint();\n\t\tprint(target "was found in chunk" chunk);\n\t\tindex = mid;\n\t\tbreak;\n\tendif;\n\n\tif target < sortedArray[mid]:\n\t\thigh = mid - 1;\n\telse:\n\t\tlow = mid + 1;\n\tendif;\n\nendwhile;\n\nprint("The index of", target, "was", mid);')}},"Binary Search")))}}]),n}(r.Component)),T=Object(p.b)((function(t){return{menuVisible:t.examplesButton.menuVisible}}),{setMenuVisible:function(t){return{type:"SET_MENU_VISIBLE",payload:{menuVisible:t}}},inputTextChange:d})(v),S=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"container-fluid"},a.a.createElement("div",{className:"row m-1"},a.a.createElement("div",{className:"col-12 m-1"},a.a.createElement("h1",{className:"h1"},"Meatbol Interpreter"))),a.a.createElement("div",{className:"row m-1"},a.a.createElement("div",{className:"col-lg m-1"},a.a.createElement(f,null),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"ml-3"},a.a.createElement(T,null)),a.a.createElement("div",{className:"ml-3"},a.a.createElement(y,null)))),a.a.createElement("div",{className:"col-lg m-1"},a.a.createElement(E,null))))}}]),n}(r.Component),k=n(6);var O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INPUT_TEXT_CHANGE":return Object.assign({},t,{input:e.payload.input,selectionStart:e.payload.selectionStart,selectionEnd:e.payload.selectionEnd});case"SET_SHIFT_HELD":return Object.assign({},t,{shiftHeld:e.payload.shiftHeld,selectionStart:e.payload.selectionStart,selectionEnd:e.payload.selectionEnd});default:return t}};var B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INTERPRET_REQUEST":return t;case"INTERPRET_SUCCESS":return Object.assign({},t,{output:e.payload.output});case"INTERPRET_ERROR":default:return t}};var j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_MENU_VISIBLE":return Object.assign({},t,{menuVisible:e.payload.menuVisible});default:return t}},x=Object(k.b)({inputBox:O,interpretButton:B,examplesButton:j}),w=Object(k.c)(x);o.a.render(a.a.createElement(p.a,{store:w},a.a.createElement(S,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fad28122.chunk.js.map