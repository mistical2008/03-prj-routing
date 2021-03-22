module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/events/event-item.js":
/*!*****************************************!*\
  !*** ./components/events/event-item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/home/evgeniy/01_Library/02_repos/080-learnNextjsReactAcademind-repo/03-prj-routing/components/events/event-item.js\";\n\nfunction EventItem({\n  event\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: JSON.stringify(event)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzPzljNmYiXSwibmFtZXMiOlsiRXZlbnRJdGVtIiwiZXZlbnQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsU0FBU0EsU0FBVCxDQUFtQjtBQUFDQztBQUFELENBQW5CLEVBQTRCO0FBQzFCLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSxnQkFBS0MsSUFBSSxDQUFDQyxTQUFMLENBQWVGLEtBQWY7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRDs7QUFFY0Qsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gRXZlbnRJdGVtKHtldmVudH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGxpPntKU09OLnN0cmluZ2lmeShldmVudCl9PC9saT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/events/event-item.js\n");

/***/ }),

/***/ "./components/events/events-list.js":
/*!******************************************!*\
  !*** ./components/events/events-list.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-item */ \"./components/events/event-item.js\");\n\nvar _jsxFileName = \"/home/evgeniy/01_Library/02_repos/080-learnNextjsReactAcademind-repo/03-prj-routing/components/events/events-list.js\";\n\n\nfunction EventsList({\n  events\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: events.map(event => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_event_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      event: event\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventsList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudHMtbGlzdC5qcz82MTE2Il0sIm5hbWVzIjpbIkV2ZW50c0xpc3QiLCJldmVudHMiLCJtYXAiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQjtBQUFDQztBQUFELENBQXBCLEVBQThCO0FBQzVCLHNCQUNFO0FBQUEsY0FFSUEsTUFBTSxDQUFDQyxHQUFQLENBQVdDLEtBQUssaUJBQ2QscUVBQUMsbURBQUQ7QUFBVyxXQUFLLEVBQUVBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztBQUNjSCx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50cy1saXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50SXRlbSBmcm9tICcuL2V2ZW50LWl0ZW0nO1xuXG5mdW5jdGlvbiBFdmVudHNMaXN0KHtldmVudHN9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge1xuICAgICAgICBldmVudHMubWFwKGV2ZW50ID0+IChcbiAgICAgICAgICA8RXZlbnRJdGVtIGV2ZW50PXtldmVudH0gLz5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L3VsPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBFdmVudHNMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/events/events-list.js\n");

/***/ }),

/***/ "./dummy-store.js":
/*!************************!*\
  !*** ./dummy-store.js ***!
  \************************/
/*! exports provided: getFeaturedEvents, getAllEvents, getFilteredEvents, getEventById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeaturedEvents\", function() { return getFeaturedEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllEvents\", function() { return getAllEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilteredEvents\", function() { return getFilteredEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventById\", function() { return getEventById; });\nconst DUMMY_EVENTS = [{\n  id: 'e1',\n  title: 'Programming for everyone',\n  description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',\n  location: 'Somestreet 25, 12345 San Somewhereo',\n  date: '2021-05-12',\n  image: 'images/pCyF68-verE.jpg',\n  isFeatured: false\n}, {\n  id: 'e2',\n  title: 'Networking for introverts',\n  description: \"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!\",\n  location: 'New Wall Street 5, 98765 New Work',\n  date: '2021-05-30',\n  image: 'images/8rvNL65ImOQ.jpg',\n  isFeatured: true\n}, {\n  id: 'e3',\n  title: 'Networking for extroverts',\n  description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',\n  location: 'My Street 12, 10115 Broke City',\n  date: '2022-04-10',\n  image: 'images/3D16OnkFv4I.jpg',\n  isFeatured: true\n}];\nfunction getFeaturedEvents() {\n  return DUMMY_EVENTS.filter(event => event.isFeatured);\n}\nfunction getAllEvents() {\n  return DUMMY_EVENTS;\n}\nfunction getFilteredEvents(dateFilter) {\n  const {\n    year,\n    month\n  } = dateFilter;\n  let filteredEvents = DUMMY_EVENTS.filter(event => {\n    const eventDate = new Date(event.date);\n    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;\n  });\n  return filteredEvents;\n}\nfunction getEventById(id) {\n  return DUMMY_EVENTS.find(event => event.id === id);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kdW1teS1zdG9yZS5qcz8xM2VjIl0sIm5hbWVzIjpbIkRVTU1ZX0VWRU5UUyIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwiZGF0ZSIsImltYWdlIiwiaXNGZWF0dXJlZCIsImdldEZlYXR1cmVkRXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJnZXRBbGxFdmVudHMiLCJnZXRGaWx0ZXJlZEV2ZW50cyIsImRhdGVGaWx0ZXIiLCJ5ZWFyIiwibW9udGgiLCJmaWx0ZXJlZEV2ZW50cyIsImV2ZW50RGF0ZSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RXZlbnRCeUlkIiwiZmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1BLFlBQVksR0FBRyxDQUNuQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsMEJBRlQ7QUFHRUMsYUFBVyxFQUNULDRKQUpKO0FBS0VDLFVBQVEsRUFBRSxxQ0FMWjtBQU1FQyxNQUFJLEVBQUUsWUFOUjtBQU9FQyxPQUFLLEVBQUUsd0JBUFQ7QUFRRUMsWUFBVSxFQUFFO0FBUmQsQ0FEbUIsRUFXbkI7QUFDRU4sSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLDJCQUZUO0FBR0VDLGFBQVcsRUFDVCwwSUFKSjtBQUtFQyxVQUFRLEVBQUUsbUNBTFo7QUFNRUMsTUFBSSxFQUFFLFlBTlI7QUFPRUMsT0FBSyxFQUFFLHdCQVBUO0FBUUVDLFlBQVUsRUFBRTtBQVJkLENBWG1CLEVBcUJuQjtBQUNFTixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsMkJBRlQ7QUFHRUMsYUFBVyxFQUNULDZJQUpKO0FBS0VDLFVBQVEsRUFBRSxnQ0FMWjtBQU1FQyxNQUFJLEVBQUUsWUFOUjtBQU9FQyxPQUFLLEVBQUUsd0JBUFQ7QUFRRUMsWUFBVSxFQUFFO0FBUmQsQ0FyQm1CLENBQXJCO0FBaUNPLFNBQVNDLGlCQUFULEdBQTZCO0FBQ2xDLFNBQU9SLFlBQVksQ0FBQ1MsTUFBYixDQUFxQkMsS0FBRCxJQUFXQSxLQUFLLENBQUNILFVBQXJDLENBQVA7QUFDRDtBQUVNLFNBQVNJLFlBQVQsR0FBd0I7QUFDN0IsU0FBT1gsWUFBUDtBQUNEO0FBRU0sU0FBU1ksaUJBQVQsQ0FBMkJDLFVBQTNCLEVBQXVDO0FBQzVDLFFBQU07QUFBQ0MsUUFBRDtBQUFPQztBQUFQLE1BQWdCRixVQUF0QjtBQUVBLE1BQUlHLGNBQWMsR0FBR2hCLFlBQVksQ0FBQ1MsTUFBYixDQUFxQkMsS0FBRCxJQUFXO0FBQ2xELFVBQU1PLFNBQVMsR0FBRyxJQUFJQyxJQUFKLENBQVNSLEtBQUssQ0FBQ0wsSUFBZixDQUFsQjtBQUNBLFdBQU9ZLFNBQVMsQ0FBQ0UsV0FBVixPQUE0QkwsSUFBNUIsSUFBb0NHLFNBQVMsQ0FBQ0csUUFBVixPQUF5QkwsS0FBSyxHQUFHLENBQTVFO0FBQ0QsR0FIb0IsQ0FBckI7QUFLQSxTQUFPQyxjQUFQO0FBQ0Q7QUFFTSxTQUFTSyxZQUFULENBQXNCcEIsRUFBdEIsRUFBMEI7QUFDL0IsU0FBT0QsWUFBWSxDQUFDc0IsSUFBYixDQUFtQlosS0FBRCxJQUFXQSxLQUFLLENBQUNULEVBQU4sS0FBYUEsRUFBMUMsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vZHVtbXktc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEVU1NWV9FVkVOVFMgPSBbXG4gIHtcbiAgICBpZDogJ2UxJyxcbiAgICB0aXRsZTogJ1Byb2dyYW1taW5nIGZvciBldmVyeW9uZScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRXZlcnlvbmUgY2FuIGxlYXJuIHRvIGNvZGUhIFllcywgZXZlcnlvbmUhIEluIHRoaXMgbGl2ZSBldmVudCwgd2UgYXJlIGdvaW5nIHRvIGdvIHRocm91Z2ggYWxsIHRoZSBrZXkgYmFzaWNzIGFuZCBnZXQgeW91IHN0YXJ0ZWQgd2l0aCBwcm9ncmFtbWluZyBhcyB3ZWxsLicsXG4gICAgbG9jYXRpb246ICdTb21lc3RyZWV0IDI1LCAxMjM0NSBTYW4gU29tZXdoZXJlbycsXG4gICAgZGF0ZTogJzIwMjEtMDUtMTInLFxuICAgIGltYWdlOiAnaW1hZ2VzL3BDeUY2OC12ZXJFLmpwZycsXG4gICAgaXNGZWF0dXJlZDogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2UyJyxcbiAgICB0aXRsZTogJ05ldHdvcmtpbmcgZm9yIGludHJvdmVydHMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXZSBrbm93OiBOZXR3b3JraW5nIGlzIG5vIGZ1biBpZiB5b3UgYXJlIGFuIGludHJvdmVydCBwZXJzb24uIFRoYXQncyB3aHkgd2UgY2FtZSB1cCB3aXRoIHRoaXMgZXZlbnQgLSBpdCdsbCBiZSBzbyBtdWNoIGVhc2llci4gUHJvbWlzZWQhXCIsXG4gICAgbG9jYXRpb246ICdOZXcgV2FsbCBTdHJlZXQgNSwgOTg3NjUgTmV3IFdvcmsnLFxuICAgIGRhdGU6ICcyMDIxLTA1LTMwJyxcbiAgICBpbWFnZTogJ2ltYWdlcy84cnZOTDY1SW1PUS5qcGcnLFxuICAgIGlzRmVhdHVyZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2UzJyxcbiAgICB0aXRsZTogJ05ldHdvcmtpbmcgZm9yIGV4dHJvdmVydHMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1lvdSBwcm9iYWJseSBuZWVkIG5vIGhlbHAgd2l0aCBuZXR3b3JraW5nIGluIGdlbmVyYWwuIEJ1dCBmb2N1c2luZyB5b3VyIGVuZXJneSBjb3JyZWN0bHkgLSB0aGF0IGlzIHNvbWV0aGluZyB3aGVyZSBtb3N0IHBlb3BsZSBjYW4gaW1wcm92ZS4nLFxuICAgIGxvY2F0aW9uOiAnTXkgU3RyZWV0IDEyLCAxMDExNSBCcm9rZSBDaXR5JyxcbiAgICBkYXRlOiAnMjAyMi0wNC0xMCcsXG4gICAgaW1hZ2U6ICdpbWFnZXMvM0QxNk9ua0Z2NEkuanBnJyxcbiAgICBpc0ZlYXR1cmVkOiB0cnVlLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZlYXR1cmVkRXZlbnRzKCkge1xuICByZXR1cm4gRFVNTVlfRVZFTlRTLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmlzRmVhdHVyZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsRXZlbnRzKCkge1xuICByZXR1cm4gRFVNTVlfRVZFTlRTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyZWRFdmVudHMoZGF0ZUZpbHRlcikge1xuICBjb25zdCB7eWVhciwgbW9udGh9ID0gZGF0ZUZpbHRlcjtcblxuICBsZXQgZmlsdGVyZWRFdmVudHMgPSBEVU1NWV9FVkVOVFMuZmlsdGVyKChldmVudCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuICAgIHJldHVybiBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJiBldmVudERhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGggLSAxO1xuICB9KTtcblxuICByZXR1cm4gZmlsdGVyZWRFdmVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudEJ5SWQoaWQpIHtcbiAgcmV0dXJuIERVTU1ZX0VWRU5UUy5maW5kKChldmVudCkgPT4gZXZlbnQuaWQgPT09IGlkKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dummy-store.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_events_events_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/events/events-list */ \"./components/events/events-list.js\");\n/* harmony import */ var _dummy_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dummy-store */ \"./dummy-store.js\");\n\n\nvar _jsxFileName = \"/home/evgeniy/01_Library/02_repos/080-learnNextjsReactAcademind-repo/03-prj-routing/pages/index.js\";\n\n\n\nfunction HomePage() {\n  const featuredEvents = Object(_dummy_store__WEBPACK_IMPORTED_MODULE_2__[\"getFeaturedEvents\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_events_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      events: featuredEvents\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiZmVhdHVyZWRFdmVudHMiLCJnZXRGZWF0dXJlZEV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsUUFBTUMsY0FBYyxHQUFHQyxzRUFBaUIsRUFBeEM7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLHNFQUFEO0FBQVksWUFBTSxFQUFFRDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRDs7QUFDY0QsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudHNMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudHMtbGlzdFwiO1xuaW1wb3J0IHtnZXRGZWF0dXJlZEV2ZW50c30gZnJvbSBcIi4uL2R1bW15LXN0b3JlXCJcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGZlYXR1cmVkRXZlbnRzID0gZ2V0RmVhdHVyZWRFdmVudHMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RXZlbnRzTGlzdCBldmVudHM9e2ZlYXR1cmVkRXZlbnRzfSAvPlxuICAgIDwvPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });