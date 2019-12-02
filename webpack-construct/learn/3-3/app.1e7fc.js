/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/smithyberry/project/demo/webpack-construct/learn/3-3/app.js: Identifier 'func' has already been declared (14:10)\n\n\u001b[0m \u001b[90m 12 | \u001b[39mconsole\u001b[33m.\u001b[39mlog(\u001b[32m'new Set(arrB)'\u001b[39m\u001b[33m,\u001b[39m\u001b[36mnew\u001b[39m \u001b[33mSet\u001b[39m(arrB))\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m\u001b[36mfunction\u001b[39m\u001b[33m*\u001b[39m func(){\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m}\u001b[0m\n    at Parser.raise (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:6975:17)\n    at ScopeHandler.checkRedeclarationInScope (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:4255:12)\n    at ScopeHandler.declareName (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:4221:12)\n    at Parser.registerFunctionStatementId (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:11394:16)\n    at Parser.parseFunction (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:11369:12)\n    at Parser.parseFunctionStatement (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:11004:17)\n    at Parser.parseStatementContent (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:10694:21)\n    at Parser.parseStatement (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:10656:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:11232:25)\n    at Parser.parseBlockBody (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:11219:10)\n    at Parser.parseTopLevel (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:10587:10)\n    at Parser.parse (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:12097:10)\n    at parse (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/parser/lib/index.js:12148:38)\n    at parser (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\n    at normalizeFile (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\n    at runSync (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/smithyberry/project/demo/webpack-construct/learn/3-3/node_modules/@babel/core/lib/transform.js:34:34)\n    at _combinedTickCallback (internal/process/next_tick.js:132:7)\n    at process._tickCallback (internal/process/next_tick.js:181:9)");

/***/ })
/******/ ]);