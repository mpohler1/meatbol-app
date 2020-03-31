export const binarySearchExampleText = (
    "print(\"Binary Search Example\\n\");\n" +
    "\n" +
    "Int sortedArray[] = 0, 3, 6, 9, 11, 23, 45, 88, 100, 111, 123, 143, 152, 167, 199, 204;\n" +
    "Int target = 123;\n" +
    "Int index;\n" +
    "\n" +
    "print(\"Sorted Array: [\", sortedArray, \"] \");\n" +
    "print(\"Target:\", target):\n" +
    "print();\n" +
    "\n" +
    "Int low = 0;\n" +
    "Int high = ELEM(sortedArray)-1;\n" +
    "while low <= high:\n" +
    "\n" +
    "\t// For printing chunks, unrelated to binary search\n" +
    "\tInt elements = high-low+1;\n" +
    "\tInt chunk[elements];\n" +
    "\tfor i = 0 to elements:\n" +
    "\t\tchunk[i] = sortedArray[low+i];\n" +
    "\tendfor;\n" +
    "\t// For printing chunks, unrelated to binary search\n" +
    "\n" +
    "\t// Binary Search below\n" +
    "\tInt mid = (low + high) / 2;\n" +
    "\n" +
    "\tprint(\"Searching chunk [\", chunk, \"] Mid =\", sortedArray[mid]);\n" +
    "\n" +
    "\tif sortedArray[mid] == target:\n" +
    "\t\tprint();\n" +
    "\t\tprint(target \"was found in chunk\" chunk);\n" +
    "\t\tindex = mid;\n" +
    "\t\tbreak;\n" +
    "\tendif;\n" +
    "\n" +
    "\tif target < sortedArray[mid]:\n" +
    "\t\thigh = mid - 1;\n" +
    "\telse:\n" +
    "\t\tlow = mid + 1;\n" +
    "\tendif;\n" +
    "\n" +
    "endwhile;\n" +
    "\n" +
    "print(\"The index of\", target, \"was\", mid);"
);
