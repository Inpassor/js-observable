(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
var Observable = (function () {
    function Observable() {
        this.__callbacks = {};
    }
    Observable.prototype.on = function (events, fn) {
        var _this = this;
        events.replace(/[^\s]+/g, function (name) {
            (_this.__callbacks[name] = _this.__callbacks[name] || []).push(fn);
            return '';
        });
        return this;
    };
    Observable.prototype.one = function (name, fn) {
        fn['one'] = true;
        return this.on(name, fn);
    };
    Observable.prototype.off = function (events, fn) {
        var _this = this;
        if (events === '*') {
            this.__callbacks = {};
        }
        else if (fn) {
            var arr = this.__callbacks[events];
            for (var i = 0, cb = void 0; (cb = arr && arr[i]); ++i) {
                if (cb === fn) {
                    arr.splice(i, 1);
                }
            }
        }
        else {
            events.replace(/[^\s]+/g, function (name) {
                _this.__callbacks[name] = [];
                return '';
            });
        }
        return this;
    };
    Observable.prototype.trigger = function (name, args) {
        var fns = this.__callbacks[name] || [];
        for (var i = 0, fn = void 0; (fn = fns[i]); ++i) {
            if (!fn['busy']) {
                fn['busy'] = true;
                fn.apply(this, args);
                if (fn['one']) {
                    fns.splice(i, 1);
                    i--;
                }
                fn['busy'] = false;
            }
        }
        return this;
    };
    return Observable;
}());



/***/ })
/******/ ]);
});