export const bubbleSortExampleText = (
    "print(\"Bubble Sort Example\\n\");\n" +
    "\n" +
    "Int array[] = 99, 55, 24, 67, 39, 84;\n" +
    "print(\"Unsorted: [\", array, \"] \\n\");\n" +
    "\n" +
    "for i = 0 to ELEM(array)-1:      \n" +
    "\n" +
    "\tfor j = 0 to ELEM(array)-i-1:  \n" +
    "\n" +
    "\t\tif array[j] > array[j+1]:  \n" +
    "\t\t\tInt temp = array[j];\n" +
    "\t\t\tarray[j] = array[j+1];\n" +
    "\t\t\tarray[j+1] = temp;\n" +
    "\t\t\tprint(\"Swapped\", array[j+1], \"with\", array[j], \" => [\", array, \"] \");\n" +
    "\t\tendif;\n" +
    "\n" +
    "\tendfor;\n" +
    "\n" +
    "endfor;\n" +
    "\n" +
    "print(\"\\nSorted: [\", array, \"] \");"
);
