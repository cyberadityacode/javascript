const div = document.querySelector('div')

console.log(div.nodeType); // 1 (Element node)
console.log(div.nodeName); // DIV (Element node)
console.log(div.childNodes); //NodeList with text and span
console.log(div.children); //HTML Collection - span

/* childNodes → all node types (elements, text, comments)

children → only element nodes */


/* conclusion is this : 
=================

 1.) A node is a general term that can refer to any type of object in the DOM, whereas an element specifically refers to HTML elements.

2.) Element is the subset of Nodes.

3)Both nodes and elements share some common properties and methods, but elements have additional properties and methods specifically for dealing with HTML elements (like id, className, innerHTML, etc.).

4.)Elements are used to manipulate HTML content directly, whereas nodes are used when dealing with any object in the DOM hierarchy. */

