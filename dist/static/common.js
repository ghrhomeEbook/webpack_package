
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {
	module.exports = __webpack_require__(4);
/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var util2 = __webpack_require__(3)
	setTimeout(function() {console.log(util2.name), 2000})

/***/ }
]);


/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])//非0表示没有加载完成
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;//加载完成
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}//modules中得到的都是函数，in遍历数组的时候key是下标,此处modules存储的是键值是每一个函数
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
                 //首先调用父级jsonpFunction
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
                     //得到callback数组中的函数并调用，每一个回调函数传入一个__webpack_require__就可以了
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
                //加载第一个模块0，这个模块是我们的入口文件的exports对象，相当于执行模块了!其他的模块只是打包进去，这个0表示直接执行了
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
            //如果是正在加载那么这里就是一个数组，而且数组中包含的是回调函数
/******/ 	var installedChunks = {
/******/ 		2:0 //common.js的chunkID是2表示一开始的时候就加载完成，因为他是通用模块必须先加载，然后加载其他的
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
                //判断是否在缓存中存在
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
                //入口执行模块是函数签名是function(module, exports, __webpack_require__) 
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
                //模块加载完成
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"index","1":"index2"}[chunkId]||chunkId) + "." + {"0":"2a3a9ad51d7007de1a89","1":"e7a73c1617697d3e2912"}[chunkId] + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
            //向外导出的modules包含了common.js这个文件，同时也包含我们的moreModules数组中的modules
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
            //webpack缓存模块
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
            //webpack的__webpack_public_path__
/******/ 	__webpack_require__.p = "static/";
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ function(module, exports) {

	module.exports = {"name": "util2.js"}


/***/ }

/******/ });