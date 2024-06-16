

//                                             <<<-  JAVASCRIPT  ->>>


//  JavaScript was initially created to “make web pages alive”.

// Sandboxing is frequently used to test unverified programs that may contain a virus or other malicious code without allowing the software to harm the host device.[2]

// How do engines work?
// Engines are complicated. But the basics are easy.

// 1. The engine (embedded if it’s a browser) reads (“parses”) the script.
// 2. Then it converts (“compiles”) the script to machine code.
// 3. And then the machine code runs, pretty fast.
// The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.


//                                    <<< What CAN in-browser JavaScript do? >>>


//  It doesn't provide low-level acces to memory or CPU.
//  Javascript greatly depend upon the environment like Node.js, It provide  functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.

// In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.

// For instance, in-browser JavaScript is able to:

// Add new HTML to the page, change the existing content, modify styles.
// React to user actions, run on mouse clicks, pointer movements, key presses.
// Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
// Get and set cookies, ask questions to the visitor, show messages.
// Remember the data on the client-side (“local storage”).


//                                   <<< What CAN’T in-browser JavaScript do? >>>


// JavaScript’s abilities in the browser are limited to protect the user’s safety. The aim is to prevent an evil webpage from accessing private information or harming the user’s data.

// JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS functions.

// Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like “dropping” a file into a browser window or selecting it via an <input> tag.

// Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one.This is called the “Same Origin Policy”. To work around that, both pages must agree for data exchange and must contain special JavaScript code that handles it. This limitation is, again, for the user’s safety.

// JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. Once again, that’s a safety limitation.


//                                      <<<What makes JavaScript unique?>>>


// There are three great things about javascript =>
//     Full integration with HTML/CSS.
//     Simple things are done simply.
//     Supported by all major browsers and enabled by default. 

// JavaScript is the only browser technology that combines these three things.



//                                      <<Languages “over” JavaScript>>

// The syntax of JavaScript does not suit everyone’s needs. Different people want different features.

// Modern tools make the transpilation very fast and transparent, actually allowing developers to code in another language and auto-converting it “under the hood”.

// Examples of such languages:

//     CoffeeScript is “syntactic sugar” for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise      code. Usually, Ruby devs like it.

//      TypeScript is concentrated on adding “strict data typing” to simplify the development and support of complex systems. It is developed by Microsoft.

//      Flow also adds data typing, but in a different way. Developed by Facebook.

//      Dart is a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript. Developed by Google.

//      Brython is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.

//      Kotlin is a modern, concise and safe programming language that can target the browser or Node.
