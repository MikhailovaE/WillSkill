/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("const burger = document.getElementById(\"sidebarToggle\");\r\nconst sidebar = document.getElementById(\"sidebar\");\r\nconst body = document.body;\r\n\r\nburger.addEventListener(\"click\", (event) => {\r\n  if (body.classList.contains(\"show-sidebar\")) {\r\n    closeSidebar();\r\n  } else {\r\n    showSidebar();\r\n  }\r\n});\r\n\r\nfunction showSidebar() {\r\n  let mask = document.createElement(\"div\");\r\n  mask.addEventListener(\"click\", closeSidebar);\r\n\r\n  body.classList.add(\"show-sidebar\");\r\n\r\n  burger.classList.add('open')\r\n}\r\n\r\nfunction closeSidebar() {\r\n  body.classList.remove(\"show-sidebar\");\r\n  burger.classList.remove('open')\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobileNav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	
/******/ })()
;