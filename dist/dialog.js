(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Dialog"] = factory();
	else
		root["Dialog"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateDialog"];
/******/ 	window["webpackHotUpdateDialog"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "1e6fbe3798190eb6d803"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "Dialog";
/******/ 			{
/******/ 				// eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/app.modules.js")(__webpack_require__.s = "./src/app.modules.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/core-js/symbol.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/symbol.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/symbol/iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/symbol/iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/icons-cl/src/icons.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/icons-cl/src/icons.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icons-cl {\n  display: inline-block;\n  background-image: url(" + escape(__webpack_require__(/*! ./images/icons.png */ "./node_modules/icons-cl/src/images/icons.png")) + ");\n  width: 16px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  padding: 0;\n}\n\n.icons-cl-caret-1-n {\n  background-position: 0 0;\n}\n\n.icons-cl-caret-1-ne {\n  background-position: -16px 0;\n}\n\n.icons-cl-caret-1-e {\n  background-position: -32px 0;\n}\n\n.icons-cl-triangle-1-n {\n  background-position: 0px -16px;\n}\n\n.icons-cl-triangle-1-e {\n  background-position: -32px -16px;\n}\n\n.icons-cl-arrow-1-n {\n  background-position: 0px -32px;\n}\n\n.icons-cl-arrow-1-w {\n  background-position: -96px -32px;\n}\n\n.icons-cl-arrowstop-1-n {\n  background-position: -192px -32px;\n}\n\n.icons-cl-arrowstop-1-s {\n  background-position: -224px -32px;\n}\n\n.icons-cl-arrowthick-1-n {\n  background-position: 0px -48px;\n}\n\n.icons-cl-arrowthick-1-n {\n  background-position: 0px -48px;\n}\n\n.icons-cl-arrowthick-1-w {\n  background-position: -96px -48px;\n}\n\n.icons-cl-arrowreturnthick-1-w {\n  background-position: 0px -64px;\n}\n\n.icons-cl-arrowreturnthick-1-e {\n  background-position: -32px -64px;\n}\n\n.icons-cl-folder-collapsed {\n  background-position: 0px -96px;\n}\n\n.icons-cl-folder-open {\n  background-position: -16px -96px;\n}\n\n.icons-cl-document {\n  background-position: -32px -96px;\n}\n\n.icons-cl-document-b {\n  background-position: -48px -96px;\n}\n\n.icons-cl-note {\n  background-position: -64px -96px;\n}\n\n.icons-cl-mail-closed {\n  background-position: -80px -96px;\n}\n\n.icons-cl-mail-open {\n  background-position: -96px -96px;\n}\n\n.icons-cl-suitcase {\n  background-position: -112px -96px;\n}\n\n.icons-cl-comment {\n  background-position: -128px -96px;\n}\n\n.icons-cl-person {\n  background-position: -144px -96px;\n}\n\n.icons-cl-print {\n  background-position: -160px -96px;\n}\n\n.icons-cl-trash {\n  background-position: -176px -96px;\n}\n\n.icons-cl-locked {\n  background-position: -192px -96px;\n}\n\n.icons-cl-unlocked {\n  background-position: -208px -96px;\n}\n\n.icons-cl-bookmark {\n  background-position: -224px -96px;\n}\n\n.icons-cl-tag {\n  background-position: -240px -96px;\n}\n\n.icons-cl-home {\n  background-position: 0px -112px;\n}\n\n.icons-cl-flag {\n  background-position: -16px -112px;\n}\n\n.icons-cl-calculator {\n  background-position: -32px -112px;\n}\n\n.icons-cl-cart {\n  background-position: -48px -112px;\n}\n\n.icons-cl-pencil {\n  background-position: -64px -112px;\n}\n\n.icons-cl-clock {\n  background-position: -80px -112px;\n}\n\n.icons-cl-disk {\n  background-position: -96px -112px;\n}\n\n.icons-cl-calendar {\n  background-position: -112px -112px;\n}\n\n.icons-cl-zoomin {\n  background-position: -128px -112px;\n}\n\n.icons-cl-zoomout {\n  background-position: -144px -112px;\n}\n\n.icons-cl-search {\n  background-position: -160px -112px;\n}\n\n.icons-cl-wrench {\n  background-position: -176px -112px;\n}\n\n.icons-cl-gear {\n  background-position: -192px -112px;\n}\n\n.icons-cl-heart {\n  background-position: -208px -112px;\n}\n\n.icons-cl-star {\n  background-position: -224px -112px;\n}\n\n.icons-cl-link {\n  background-position: -240px -112px;\n}\n\n.icons-cl-close {\n  background-position: -80px -128px;\n}\n\n.icons-cl-closethick {\n  background-position: -96px -128px;\n}\n\n.icons-cl-alert {\n  background-position: 0px -144px;\n}\n\n.icons-cl-help {\n  background-position: -48px -144px;\n}\n\n.icons-cl-check {\n  background-position: -64px -144px;\n}\n\n.icons-cl-play {\n  background-position: 0px -160px;\n}\n\n.icons-cl-pause {\n  background-position: -16px -160px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/dialog.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/dialog.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.dialog-cl {\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid #444444;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  cursor: default;\n  width: 350px;\n  min-width: 150px;\n  max-width: 500px;\n  height: auto;\n  min-height: 150px;\n  max-height: 600px;\n}\n\ndiv.dialog-cl-bot {\n  box-sizing: border-box;\n  flex: 0 0 22px;\n  width: 100%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  border-top: 1px solid #cccccc;\n  cursor: default;\n}\n\ndiv.dialog-cl-body {\n  flex: 1;\n  width: 100%;\n  overflow-y: auto;\n  background-color: white;\n  padding: 0.25em 0.25em;\n}\n\ndiv.dialog-cl-body p:first-child,\ndiv.dialog-cl-body h1:first-child,\ndiv.dialog-cl-body h2:first-child {\n  margin-top: 0;\n}\n\ndiv.dialog-cl-body p:last-child {\n  margin-bottom: 0;\n}\n\nbutton.dialog-cl-btn {\n  display: inline-block;\n  min-width: 7em;\n  margin: 10px 10px 10px 0;\n  padding: 3px 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 0.8em;\n  font-weight: bold;\n  border: 1px solid #999;\n  border-radius: 1px;\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  color: #444;\n  background: #fff;\n}\n\nbutton.dialog-cl-btn:active {\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n\ndiv.dialog-cl-top {\n  box-sizing: border-box;\n  background-color: #009688;\n  margin: 0;\n  padding: 0;\n  flex: 0 0 25px;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\ndiv.dialog-cl-top h1 {\n  flex-grow: 1;\n  margin: 0;\n  padding: 4px 4px 0 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 16px;\n  line-height: 16px;\n  user-select: none;\n}\n\ndiv.dialog-cl-top button.dialog-cl-tb-button {\n  flex: 0 0 25px;\n  position: relative;\n  box-sizing: border-box;\n  height: 25px;\n  width: 25px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n}\n\ndiv.dialog-cl-top button.dialog-cl-tb-button span {\n  position: absolute;\n  left: 4px;\n  top: 4px;\n}\n\ndiv.dialog-cl-top .dialog-cl-tb-button:hover {\n  background-color: #e81123;\n  cursor: pointer;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/icons-cl/src/icons.js":
/*!********************************************!*\
  !*** ./node_modules/icons-cl/src/icons.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.scss */ "./node_modules/icons-cl/src/icons.scss");
/* harmony import */ var _icons_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icons_scss__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ "./node_modules/icons-cl/src/icons.scss":
/*!**********************************************!*\
  !*** ./node_modules/icons-cl/src/icons.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader!../../resolve-url-loader!../../sass-loader/lib/loader.js?sourceMap!./icons.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/icons-cl/src/icons.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../css-loader!../../resolve-url-loader!../../sass-loader/lib/loader.js?sourceMap!./icons.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/icons-cl/src/icons.scss", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../css-loader!../../resolve-url-loader!../../sass-loader/lib/loader.js?sourceMap!./icons.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/icons-cl/src/icons.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	})(__WEBPACK_OUTDATED_DEPENDENCIES__); });

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/icons-cl/src/images/icons.png":
/*!****************************************************!*\
  !*** ./node_modules/icons-cl/src/images/icons.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./node_modules/resizer-cl/dist/resizer.js":
/*!*************************************************!*\
  !*** ./node_modules/resizer-cl/dist/resizer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateResizer"];
/******/ 	window["webpackHotUpdateResizer"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "72206156f7855f7ea0d8"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "app";
/******/ 			{
/******/ 				// eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/app.modules.js")(__webpack_require__.s = "./src/app.modules.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Options.js":
/*!************************!*\
  !*** ./src/Options.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Various interface options we can select
 */

/**
 * Interface options.
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function(options) {
    options = options ? options : {};

    /// Options: vertical, horizontal, both
    this.resize = 'vertical';

    /// The resizing handle
    this.handle = 'bar';

    /// Range for grabing
    this.grabSize = 10;

    for(var property in options) {
        if(options.hasOwnProperty(property)) {
            if(!this.hasOwnProperty(property)) {
                throw new Error("Invalid option " + property);
            }
            this[property] = options[property];
        }
    }

}



/* harmony default export */ __webpack_exports__["default"] = (Options);


/***/ }),

/***/ "./src/app.modules.js":
/*!****************************!*\
  !*** ./src/app.modules.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizer.js */ "./src/resizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _resizer_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });






/***/ }),

/***/ "./src/resizer-actual.js":
/*!*******************************!*\
  !*** ./src/resizer-actual.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

function ResizerActual(element, options) {
    element.classList.add('resizer');

    let grabSize = options.grabSize;

    let handle = options.handle;
    if(handle === 'bar') {
        element.style.resize = 'none';
        element.style.borderBottom = grabSize + 'px solid #18453B';
    } else if(handle === 'handle') {
        element.style.resize = 'vertical';
    } else if(handle === 'none') {

    } else {
        element.style.resize = 'none';
        element.style.borderBottom = handle;
    }

    /// Mouse move event handler
    let installedMoveListener = null;
    let mask = null;

    /// Get the minimum height and width properties
    var rect = element.getBoundingClientRect();
    var height = rect.height;
    var width = rect.width;

    let minHeight = getComputedStyle(element).minHeight;
    minHeight = minHeight.substr(0, minHeight.length - 2);
    let minWidth = getComputedStyle(element).minWidth;
    minWidth = minWidth.substr(0, minWidth.length - 2);

    function start() {
        // Install the mouse down listener
        element.addEventListener('mousedown', mouseDownListener);

        // Install the cursor listener
        element.addEventListener('mousemove', cursorListener);
    }

    let initialX, initialY;
    let initialWidth, initialHeight;
    let grabType = null;

    function mouseDownListener(e) {
        grabType = onHandle(e.pageX, e.pageY);
        if(grabType !== null) {
            initialX = e.pageX;
            initialY = e.pageY;
            let rect = element.getBoundingClientRect();
            initialWidth = rect.width;
            initialHeight = rect.height;

            installHandlers();
            installMask();
        }
    }

    function mouseMoveListener(e) {
        if(e.buttons !== 1) {
            removeAll();
            return;
        }

        let dx = e.pageX - initialX;
        let dy = e.pageY - initialY;

        if(grabType === 'horizontal' || grabType === 'both') {
            // Compute a desired new width
            let newWidth = initialWidth + dx;
            if (newWidth < minWidth) {
                newWidth = minWidth;
            }

            // Set it
            element.style.width = '' + newWidth + 'px';
        }

        if(grabType === 'vertical' || grabType === 'both') {
            // Compute a desired new height
            let newHeight = initialHeight + dy;
            if (newHeight < minHeight) {
                newHeight = minHeight;
            }

            // Set it
            element.style.height = '' + newHeight + 'px';
        }
    }

    function mouseUpListener(e) {
        removeAll();
    }

    function installHandlers() {
        removeHandlers();

        installedMoveListener = mouseMoveListener;
        document.addEventListener('mousemove', installedMoveListener);
        document.addEventListener('mouseup', mouseUpListener);
    }

    function installMask() {
        // Ensure none currently exists
        removeMask();

        var body = document.querySelector('body');
        var tag = '<div style="position: ' +
            'absolute; left: 0; right: 0; width: 100%; height: 100%;' +
            'background-color: green;"></div>';
        mask = document.createElement('div');

        mask.style.position = 'fixed';
        mask.style.left = 0;
        mask.style.top = 0;
        mask.style.width = "100%";
        mask.style.height = '100%';
        mask.style.backgroundColor = 'transparent';
        mask.style.zIndex = 10000;
        mask.style.opacity = 0.5;

        body.appendChild(mask);
    }

    function removeAll() {
        removeHandlers();
        removeMask();
    }

    function removeHandlers() {
        if(installedMoveListener === null) {
            return;
        }

        document.removeEventListener('mousemove', installedMoveListener);
        document.removeEventListener('mouseup', mouseUpListener);
        installedMoveListener = null;


    }

    function removeMask() {
        if(mask !== null) {
            var body = document.querySelector('body');
            body.removeChild(mask);
            mask = null;
        }
    }

    /**
     * Determine if an x,y location is over a handle for manipulating
     * the resizeable object.
     * @param x location in pixels
     * @param y location in pixels
     * @returns null if not, 'horizontal', 'vertical', 'both' if over handle and mode available.
     */
    function onHandle(x, y) {
        let rect = element.getBoundingClientRect();

        let bottom = rect.bottom + window.pageYOffset;
        let vert = y >= bottom - grabSize;

        let right = rect.right + window.pageXOffset;
        let horz = x >= right - grabSize;

        if(options.resize === 'both') {
            if(vert && horz) {
                return 'both';
            }
            if(vert) {
                return 'vertical';
            }

            if(horz) {
                return 'horizontal';
            }
        }

        if((options.resize === 'both' || options.resize === 'vertical') && vert) {
            return 'vertical;'
        }

        if((options.resize === 'both' || options.resize === 'horizontal') && horz) {
            return 'horizontal;'
        }

        return null;
    }



    let cursor = 0;

    function cursorListener(event) {
        // Swap the cursor when we are over the handle
        if (onHandle(event.pageX, event.pageY) !== null) {
            if (cursor !== 2) {
                element.style.cursor = 'pointer';
                cursor = 2;
            }
        } else {
            if (cursor !== 1) {
                element.style.cursor = 'text';
                cursor = 1;
            }
        }
    }

    start();
}

/* harmony default export */ __webpack_exports__["default"] = (ResizerActual);


/***/ }),

/***/ "./src/resizer.js":
/*!************************!*\
  !*** ./src/resizer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resizer_actual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizer-actual.js */ "./src/resizer-actual.js");
/* harmony import */ var _Options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options.js */ "./src/Options.js");
/**
 * Vertical resize support for div, textarea, iframe, etc.
 *
 * A problem with the resize feature of textarea and iframe is that it does not work in all
 * browsers (especially Edge) and is often quite quirky. This small package allows you to
 * add vertical resize ability to just about anything.
 *
 */





/**
 * Constructor for a Resizer object
 * @param sel Selector or DOM element
 * @param options Options object.
 * @constructor
 */
function Resizer(sel, options) {
    options = new _Options_js__WEBPACK_IMPORTED_MODULE_1__["default"](options);

    if(typeof sel === "string") {
        var elements = document.querySelectorAll(sel);
        for(var i=0; i<elements.length; i++) {
            new _resizer_actual_js__WEBPACK_IMPORTED_MODULE_0__["default"](elements[i], options);
        }
    } else if(sel.nodeType) {
        new _resizer_actual_js__WEBPACK_IMPORTED_MODULE_0__["default"](sel, options);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Resizer);


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZXNpemVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9SZXNpemVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1Jlc2l6ZXIvLi9zcmMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9SZXNpemVyLy4vc3JjL2FwcC5tb2R1bGVzLmpzIiwid2VicGFjazovL1Jlc2l6ZXIvLi9zcmMvcmVzaXplci1hY3R1YWwuanMiLCJ3ZWJwYWNrOi8vUmVzaXplci8uL3NyYy9yZXNpemVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBLHNEQUE4QztBQUM5QztBQUNBO0FBQ0Esb0NBQTRCO0FBQzVCLHFDQUE2QjtBQUM3Qix5Q0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0Esd0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWUsNEJBQTRCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQWUsNEJBQTRCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsdUNBQXVDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BOQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJyZXNpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVzaXplclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZXNpemVyXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVJlc2l6ZXJcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlUmVzaXplclwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjcyMjA2MTU2Zjc4NTVmN2VhMGQ4XCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IFwiYXBwXCI7XG4gXHRcdFx0e1xuIFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0KVxuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3QgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvYXBwLm1vZHVsZXMuanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAubW9kdWxlcy5qc1wiKTtcbiIsIi8qKlxyXG4gKiBWYXJpb3VzIGludGVyZmFjZSBvcHRpb25zIHdlIGNhbiBzZWxlY3RcclxuICovXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG52YXIgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuICAgIC8vLyBPcHRpb25zOiB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCwgYm90aFxyXG4gICAgdGhpcy5yZXNpemUgPSAndmVydGljYWwnO1xyXG5cclxuICAgIC8vLyBUaGUgcmVzaXppbmcgaGFuZGxlXHJcbiAgICB0aGlzLmhhbmRsZSA9ICdiYXInO1xyXG5cclxuICAgIC8vLyBSYW5nZSBmb3IgZ3JhYmluZ1xyXG4gICAgdGhpcy5ncmFiU2l6ZSA9IDEwO1xyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbnM7XHJcbiIsImltcG9ydCBSZXNpemVyIGZyb20gJy4vcmVzaXplci5qcyc7XHJcblxyXG5leHBvcnQge1Jlc2l6ZXIgYXMgZGVmYXVsdH07XHJcbiIsIlxyXG5mdW5jdGlvbiBSZXNpemVyQWN0dWFsKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmVzaXplcicpO1xyXG5cclxuICAgIGxldCBncmFiU2l6ZSA9IG9wdGlvbnMuZ3JhYlNpemU7XHJcblxyXG4gICAgbGV0IGhhbmRsZSA9IG9wdGlvbnMuaGFuZGxlO1xyXG4gICAgaWYoaGFuZGxlID09PSAnYmFyJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gZ3JhYlNpemUgKyAncHggc29saWQgIzE4NDUzQic7XHJcbiAgICB9IGVsc2UgaWYoaGFuZGxlID09PSAnaGFuZGxlJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ3ZlcnRpY2FsJztcclxuICAgIH0gZWxzZSBpZihoYW5kbGUgPT09ICdub25lJykge1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZXNpemUgPSAnbm9uZSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIE1vdXNlIG1vdmUgZXZlbnQgaGFuZGxlclxyXG4gICAgbGV0IGluc3RhbGxlZE1vdmVMaXN0ZW5lciA9IG51bGw7XHJcbiAgICBsZXQgbWFzayA9IG51bGw7XHJcblxyXG4gICAgLy8vIEdldCB0aGUgbWluaW11bSBoZWlnaHQgYW5kIHdpZHRoIHByb3BlcnRpZXNcclxuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XHJcblxyXG4gICAgbGV0IG1pbkhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWluSGVpZ2h0O1xyXG4gICAgbWluSGVpZ2h0ID0gbWluSGVpZ2h0LnN1YnN0cigwLCBtaW5IZWlnaHQubGVuZ3RoIC0gMik7XHJcbiAgICBsZXQgbWluV2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1pbldpZHRoO1xyXG4gICAgbWluV2lkdGggPSBtaW5XaWR0aC5zdWJzdHIoMCwgbWluV2lkdGgubGVuZ3RoIC0gMik7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gSW5zdGFsbCB0aGUgbW91c2UgZG93biBsaXN0ZW5lclxyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICAvLyBJbnN0YWxsIHRoZSBjdXJzb3IgbGlzdGVuZXJcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGN1cnNvckxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5pdGlhbFgsIGluaXRpYWxZO1xyXG4gICAgbGV0IGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodDtcclxuICAgIGxldCBncmFiVHlwZSA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VEb3duTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGdyYWJUeXBlID0gb25IYW5kbGUoZS5wYWdlWCwgZS5wYWdlWSk7XHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5pdGlhbFggPSBlLnBhZ2VYO1xyXG4gICAgICAgICAgICBpbml0aWFsWSA9IGUucGFnZVk7XHJcbiAgICAgICAgICAgIGxldCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgaW5pdGlhbFdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgICAgICAgICAgaW5pdGlhbEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaW5zdGFsbEhhbmRsZXJzKCk7XHJcbiAgICAgICAgICAgIGluc3RhbGxNYXNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZUxpc3RlbmVyKGUpIHtcclxuICAgICAgICBpZihlLmJ1dHRvbnMgIT09IDEpIHtcclxuICAgICAgICAgICAgcmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkeCA9IGUucGFnZVggLSBpbml0aWFsWDtcclxuICAgICAgICBsZXQgZHkgPSBlLnBhZ2VZIC0gaW5pdGlhbFk7XHJcblxyXG4gICAgICAgIGlmKGdyYWJUeXBlID09PSAnaG9yaXpvbnRhbCcgfHwgZ3JhYlR5cGUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICAvLyBDb21wdXRlIGEgZGVzaXJlZCBuZXcgd2lkdGhcclxuICAgICAgICAgICAgbGV0IG5ld1dpZHRoID0gaW5pdGlhbFdpZHRoICsgZHg7XHJcbiAgICAgICAgICAgIGlmIChuZXdXaWR0aCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IG1pbldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgaXRcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcnICsgbmV3V2lkdGggKyAncHgnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgPT09ICd2ZXJ0aWNhbCcgfHwgZ3JhYlR5cGUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICAvLyBDb21wdXRlIGEgZGVzaXJlZCBuZXcgaGVpZ2h0XHJcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgZHk7XHJcbiAgICAgICAgICAgIGlmIChuZXdIZWlnaHQgPCBtaW5IZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IG1pbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGl0XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJycgKyBuZXdIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZVVwTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIHJlbW92ZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGxIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBtb3VzZU1vdmVMaXN0ZW5lcjtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGxNYXNrKCkge1xyXG4gICAgICAgIC8vIEVuc3VyZSBub25lIGN1cnJlbnRseSBleGlzdHNcclxuICAgICAgICByZW1vdmVNYXNrKCk7XHJcblxyXG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIHZhciB0YWcgPSAnPGRpdiBzdHlsZT1cInBvc2l0aW9uOiAnICtcclxuICAgICAgICAgICAgJ2Fic29sdXRlOyBsZWZ0OiAwOyByaWdodDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsnICtcclxuICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuO1wiPjwvZGl2Pic7XHJcbiAgICAgICAgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBtYXNrLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBtYXNrLnN0eWxlLmxlZnQgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUudG9wID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgbWFzay5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuekluZGV4ID0gMTAwMDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS5vcGFjaXR5ID0gMC41O1xyXG5cclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1hc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgICAgIHJlbW92ZU1hc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVIYW5kbGVycygpIHtcclxuICAgICAgICBpZihpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaW5zdGFsbGVkTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgICAgICBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFzaygpIHtcclxuICAgICAgICBpZihtYXNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgICAgICAgICBtYXNrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYW4geCx5IGxvY2F0aW9uIGlzIG92ZXIgYSBoYW5kbGUgZm9yIG1hbmlwdWxhdGluZ1xyXG4gICAgICogdGhlIHJlc2l6ZWFibGUgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHggbG9jYXRpb24gaW4gcGl4ZWxzXHJcbiAgICAgKiBAcGFyYW0geSBsb2NhdGlvbiBpbiBwaXhlbHNcclxuICAgICAqIEByZXR1cm5zIG51bGwgaWYgbm90LCAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdib3RoJyBpZiBvdmVyIGhhbmRsZSBhbmQgbW9kZSBhdmFpbGFibGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG9uSGFuZGxlKHgsIHkpIHtcclxuICAgICAgICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIGxldCBib3R0b20gPSByZWN0LmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBsZXQgdmVydCA9IHkgPj0gYm90dG9tIC0gZ3JhYlNpemU7XHJcblxyXG4gICAgICAgIGxldCByaWdodCA9IHJlY3QucmlnaHQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcbiAgICAgICAgbGV0IGhvcnogPSB4ID49IHJpZ2h0IC0gZ3JhYlNpemU7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMucmVzaXplID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgaWYodmVydCAmJiBob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JvdGgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHZlcnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigob3B0aW9ucy5yZXNpemUgPT09ICdib3RoJyB8fCBvcHRpb25zLnJlc2l6ZSA9PT0gJ3ZlcnRpY2FsJykgJiYgdmVydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsOydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKChvcHRpb25zLnJlc2l6ZSA9PT0gJ2JvdGgnIHx8IG9wdGlvbnMucmVzaXplID09PSAnaG9yaXpvbnRhbCcpICYmIGhvcnopIHtcclxuICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsOydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgbGV0IGN1cnNvciA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gY3Vyc29yTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICAvLyBTd2FwIHRoZSBjdXJzb3Igd2hlbiB3ZSBhcmUgb3ZlciB0aGUgaGFuZGxlXHJcbiAgICAgICAgaWYgKG9uSGFuZGxlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnNvciAhPT0gMikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGN1cnNvciAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2l6ZXJBY3R1YWw7XHJcbiIsIi8qKlxyXG4gKiBWZXJ0aWNhbCByZXNpemUgc3VwcG9ydCBmb3IgZGl2LCB0ZXh0YXJlYSwgaWZyYW1lLCBldGMuXHJcbiAqXHJcbiAqIEEgcHJvYmxlbSB3aXRoIHRoZSByZXNpemUgZmVhdHVyZSBvZiB0ZXh0YXJlYSBhbmQgaWZyYW1lIGlzIHRoYXQgaXQgZG9lcyBub3Qgd29yayBpbiBhbGxcclxuICogYnJvd3NlcnMgKGVzcGVjaWFsbHkgRWRnZSkgYW5kIGlzIG9mdGVuIHF1aXRlIHF1aXJreS4gVGhpcyBzbWFsbCBwYWNrYWdlIGFsbG93cyB5b3UgdG9cclxuICogYWRkIHZlcnRpY2FsIHJlc2l6ZSBhYmlsaXR5IHRvIGp1c3QgYWJvdXQgYW55dGhpbmcuXHJcbiAqXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlc2l6ZXJBY3R1YWwgZnJvbSAnLi9yZXNpemVyLWFjdHVhbC5qcyc7XHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vT3B0aW9ucy5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdG9yIGZvciBhIFJlc2l6ZXIgb2JqZWN0XHJcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3Igb3IgRE9NIGVsZW1lbnRcclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBvYmplY3QuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gUmVzaXplcihzZWwsIG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICBpZih0eXBlb2Ygc2VsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ldyBSZXNpemVyQWN0dWFsKGVsZW1lbnRzW2ldLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYoc2VsLm5vZGVUeXBlKSB7XHJcbiAgICAgICAgbmV3IFJlc2l6ZXJBY3R1YWwoc2VsLCBvcHRpb25zKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzaXplcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Body.js":
/*!*********************!*\
  !*** ./src/Body.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Tools = _interopRequireDefault(__webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js"));

/**
 * @file
 * Middle section of dialog box
 */
var Body = function Body(dialog, parentDiv) {
  var options = dialog.options;

  var div = _Tools.default.createClassedDiv('dialog-cl-body', options.content);

  parentDiv.appendChild(div);
  this.div = div;
};

var _default = Body;
exports.default = _default;

/***/ }),

/***/ "./src/Bottom.js":
/*!***********************!*\
  !*** ./src/Bottom.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Tools = _interopRequireDefault(__webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js"));

/**
 * @file
 * The bottom buttons section of the dialog box
 */
var Bottom = function Bottom(dialog, parentDiv) {
  var options = dialog.options;

  var initialize = function initialize() {
    // let html = `<button class="dialog-cl-btn">Ok</button><button class="dialog-cl-btn">Cancel</button>`;
    var div = _Tools.default.createClassedDiv('dialog-cl-bot');

    parentDiv.appendChild(div);

    if (options.buttons === null) {
      addOk(div);
    } else {
      options.buttons.forEach(function (item) {
        addButton(div, item);
      });
    }
  };

  function addOk(div, item) {
    var button = document.createElement('button');
    button.type = 'submit';
    div.appendChild(button);

    _Tools.default.addClass(button, 'dialog-cl-btn');

    button.innerHTML = 'Ok';

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click(dialog);
      } else {
        dialog.close();
      }
    };

    button.focus();
  }

  function addButton(div, item) {
    var button = document.createElement('button');
    button.type = 'submit';
    div.appendChild(button);

    _Tools.default.addClass(button, 'dialog-cl-btn');

    button.innerHTML = item.contents;

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click(dialog);
      }
    };

    if (item.focus === true) {
      button.focus();
    }
  }

  initialize();
};

var _default = Bottom;
exports.default = _default;

/***/ }),

/***/ "./src/DOM/Tools.js":
/*!**************************!*\
  !*** ./src/DOM/Tools.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

/**
 * @file
 * Convenience functions for the DOM.
 * Tools that avoid having to have jQuery installed.
 */
var Tools = function Tools() {};
/**
 * Add a class to an element
 * @param element Element to add to
 * @param className Class to add
 */


Tools.addClass = function (element, className) {
  if (element.classList) element.classList.add(className);else element.className += ' ' + className;
};

Tools.addClasses = function (element, classes) {
  if (classes === undefined || classes === null) {
    return;
  }

  classes.split(' ').forEach(function (cls) {
    Tools.addClass(element, cls);
  });
};
/**
 * Create a DIV with a provided class name.
 * @param className Class to add to the div
 * @param content Content to place in the div. HTML or Element
 * @returns {Element} Created DOM Element
 */


Tools.createClassedDiv = function (className, content) {
  var div = document.createElement('div');
  Tools.addClass(div, className);
  Tools.addContent(div, content);
  return div;
};
/**
 * Add content to an element.
 * @param element Element to add to
 * @param content Content. Can be HTML or an Element.
 */


Tools.addContent = function (element, content) {
  if (Tools.isString(content)) {
    element.innerHTML += content;
  } else if (Tools.isElement(content)) {
    element.appendChild(content);
  }
};

Tools.isString = function (val) {
  return typeof val === 'string' || !!val && (0, _typeof2.default)(val) === 'object' && Object.prototype.toString.call(val) === '[object String]';
};

Tools.isElement = function (val) {
  return val !== undefined && val !== null && val.nodeValue !== undefined;
};

var _default = Tools;
exports.default = _default;

/***/ }),

/***/ "./src/Dialog.js":
/*!***********************!*\
  !*** ./src/Dialog.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Options = _interopRequireDefault(__webpack_require__(/*! ./Options.js */ "./src/Options.js"));

var _TitleBar = _interopRequireDefault(__webpack_require__(/*! ./TitleBar.js */ "./src/TitleBar.js"));

var _Body = _interopRequireDefault(__webpack_require__(/*! ./Body.js */ "./src/Body.js"));

var _Bottom = _interopRequireDefault(__webpack_require__(/*! ./Bottom.js */ "./src/Bottom.js"));

var _Tools = _interopRequireDefault(__webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js"));

var _resizerCl = _interopRequireDefault(__webpack_require__(/*! resizer-cl */ "./node_modules/resizer-cl/dist/resizer.js"));

var _Mask = _interopRequireDefault(__webpack_require__(/*! ./Mask.js */ "./src/Mask.js"));

/**
 * @file
 * Flexible and configurable dialog box object
 */
var Dialog = function Dialog(options) {
  var _this = this;

  options = new _Options.default(options);
  this.options = options;
  var body = null,
      mask = null;

  var initialize = function initialize() {
    Dialog.zIndex += 2;
    _this.zIndex = Dialog.zIndex;

    var div = _Tools.default.createClassedDiv('dialog-cl');

    _Tools.default.addClasses(div, options.addClass);

    _this.div = div;
    div.style.zIndex = _this.zIndex;
    var parent = document.querySelector('body');
    parent.appendChild(div);
    installResizable(div);
    new _TitleBar.default(_this, div);
    body = new _Body.default(_this, div);
    new _Bottom.default(_this, div);
    mask = new _Mask.default(_this);
    place(div, parent);
    div.addEventListener('keydown', function (event) {
      if (event.keyCode === 27) {
        event.preventDefault();

        _this.close();
      }
    }); //
    // Add cancel on ESC handler
    // form.addEventListener("keyup", (event) => {
    //     event.preventDefault();
    //
    //     if (event.keyCode === 27) {
    //         this.close();
    //     }
    // });
  };

  var installResizable = function installResizable(div) {
    if (options.resize !== 'none') {
      var rsOptions = {
        'resize': options.resize,
        'handle': 'none',
        'grabSize': options.grabSize
      };
      new _resizerCl.default(div, rsOptions);
    }
  };

  function toPx(val) {
    return '' + val + 'px';
  }

  var place = function place(div, parent) {
    var parentWid = parent.offsetWidth;
    var parentHit = parent.offsetHeight;
    var height = div.offsetHeight;
    var width = div.offsetWidth;
    var top = parentHit / 2 - height / 2;

    if (top < 10) {
      top = 10;
    }

    var left = parentWid / 2 - width / 2;

    if (left < 0) {
      left = 0;
    }

    div.style.left = toPx(left);
    div.style.top = toPx(top);
  };

  initialize();

  this.addContent = function (content) {
    _Tools.default.addContent(body.div, content);
  };

  this.close = function () {
    mask.remove();
    this.div.parentNode.removeChild(this.div);
  };
};

Dialog.zIndex = 10000;
var _default = Dialog;
exports.default = _default;

/***/ }),

/***/ "./src/Mask.js":
/*!*********************!*\
  !*** ./src/Mask.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Tools = _interopRequireDefault(__webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js"));

/**
 * Mask that allows the dialog box to be modal.
 */
var Mask = function Mask(dialog) {
  var options = dialog.options;
  var mask = null;

  if (options.modal) {
    var body = document.querySelector('body');
    mask = _Tools.default.createClassedDiv('mask'); // document.createElement('div');

    mask.style.position = 'fixed';
    mask.style.left = 0;
    mask.style.top = 0;
    mask.style.width = "100%";
    mask.style.height = '100%';
    mask.style.backgroundColor = 'transparent';
    mask.style.zIndex = dialog.zIndex - 1;
    body.appendChild(mask);
  }

  this.remove = function () {
    if (mask !== null) {
      var _body = document.querySelector('body');

      _body.removeChild(mask);

      mask = null;
    }
  };
};

var _default = Mask;
exports.default = _default;

/***/ }),

/***/ "./src/Options.js":
/*!************************!*\
  !*** ./src/Options.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Various interface options we can select
 */

/**
 * Interface options.
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function Options(options) {
  options = options ? options : {}; /// Title bar text

  this.title = 'Dialog Box'; /// Any added class or classes for the main dialog box div
  /// Can be a string or multiple strings space delimited

  this.addClass = null; /// Is this dialog box resizable?
  /// Options are: 'none', 'vertical', 'horizontal'

  this.resize = 'none'; /// Size of the border edge we can grab if resizable in pixels

  this.grabSize = 4; /// Array of title bar buttons to add.
  /// If null, a close button is added automatically.
  /// Otherwise, an array of objects, with these fields:
  ///   type: 'close' for a close  button, 'custom' for custom button contents
  ///   contents: HTML to place inside button tag
  ///   click: Click handler

  this.titleBarButtons = null; /// Any added class or classes for the title bar div
  /// Can be a string or multiple strings space delimited

  this.titleBarAddClass = null; /// Array of buttons for the bottom.
  /// If null, an Ok button is added automatically.
  /// Otherwise, an array of objects, with these fields:
  ///   contents: If provided, HTML to place inside button tag
  ///   click: Click handler
  ///   focus: true if we want to set focus on this button

  this.buttons = null; /// Content to add to the dialog box. If null, none is added on creation.

  this.content = null; /// Is this a modal dialog box? If true, controls underneath are disabled.

  this.modal = true;

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
};

var _default = Options;
exports.default = _default;

/***/ }),

/***/ "./src/TitleBar.js":
/*!*************************!*\
  !*** ./src/TitleBar.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Tools = _interopRequireDefault(__webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js"));

/**
 * @file
 * Title bar management
 */
var TitleBar = function TitleBar(dialog, parentDiv) {
  var options = dialog.options; /// Mouse move event handler

  var installedMoveListener = null;
  var initialX, initialY;
  var initialPositionX, initialPositionY;

  var initialize = function initialize() {
    var html = "<h1>".concat(options.title, "</h1>");

    var div = _Tools.default.createClassedDiv('dialog-cl-top', html);

    _Tools.default.addClasses(div, options.titleBarAddClass);

    parentDiv.appendChild(div);

    if (options.titleBarButtons === null) {
      addClose(div);
    } else {
      options.titleBarButtons.forEach(function (item) {
        if (item.type === 'close') {
          addClose(div, item);
        } else if (item.type === 'custom') {
          addCustom(div, item); // addCustom(div, item);
        }
      });
    }

    var h1 = div.querySelector('h1');
    h1.addEventListener('mousedown', function (event) {
      initialX = event.pageX;
      initialY = event.pageY;
      var rect = dialog.div.getBoundingClientRect();
      initialPositionX = rect.left;
      initialPositionY = rect.top;
      installHandlers();
    });
  };

  function addClose(div, item) {
    var button = document.createElement('button');
    div.appendChild(button);

    _Tools.default.addClass(button, 'dialog-cl-tb-button');

    button.innerHTML = '<span class="icons-cl icons-cl-close">';

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click();
      } else {
        dialog.close();
      }
    };
  }

  function addCustom(div, item) {
    var button = document.createElement('button');
    div.appendChild(button);

    _Tools.default.addClass(button, 'dialog-cl-tb-button');

    button.innerHTML = item.contents;

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click();
      } else {
        dialog.close();
      }
    };
  }

  function mouseMoveListener(e) {
    if (e.buttons !== 1) {
      removeHandlers();
      return;
    }

    var dx = e.pageX - initialX;
    var dy = e.pageY - initialY;
    var newPositionX = initialPositionX + dx;
    var newPositionY = initialPositionY + dy;
    dialog.div.style.left = newPositionX + 'px';
    dialog.div.style.top = newPositionY + 'px';
  }

  function mouseUpListener(e) {
    removeHandlers();
  }

  function installHandlers() {
    removeHandlers();
    installedMoveListener = mouseMoveListener;
    document.addEventListener('mousemove', installedMoveListener);
    document.addEventListener('mouseup', mouseUpListener);
  }

  function removeHandlers() {
    if (installedMoveListener === null) {
      return;
    }

    document.removeEventListener('mousemove', installedMoveListener);
    document.removeEventListener('mouseup', mouseUpListener);
    installedMoveListener = null;
  }

  initialize();
};

var _default = TitleBar;
exports.default = _default;

/***/ }),

/***/ "./src/app.modules.js":
/*!****************************!*\
  !*** ./src/app.modules.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! ./polyfills/all.js */ "./src/polyfills/all.js");

var _Dialog = _interopRequireDefault(__webpack_require__(/*! ./Dialog.js */ "./src/Dialog.js"));

__webpack_require__(/*! ./dialog.scss */ "./src/dialog.scss");

__webpack_require__(/*! icons-cl */ "./node_modules/icons-cl/src/icons.js");

// The public-path module must be imported first!
//import './public-path.js';
var _default = _Dialog.default;
exports.default = _default;

/***/ }),

/***/ "./src/dialog.scss":
/*!*************************!*\
  !*** ./src/dialog.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/lib/loader.js?sourceMap!./dialog.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/dialog.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/lib/loader.js?sourceMap!./dialog.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/dialog.scss", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/lib/loader.js?sourceMap!./dialog.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/dialog.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	})(__WEBPACK_OUTDATED_DEPENDENCIES__); });

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/polyfills/all.js":
/*!******************************!*\
  !*** ./src/polyfills/all.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2ljb25zLWNsL3NyYy9pY29ucy5zY3NzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9kaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2ljb25zLWNsL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvaWNvbnMtY2wvc3JjL2ljb25zLnNjc3M/ZTUyMiIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvaWNvbnMtY2wvc3JjL2ltYWdlcy9pY29ucy5wbmciLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL3Jlc2l6ZXItY2wvZGlzdC9yZXNpemVyLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9Cb2R5LmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9Cb3R0b20uanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL0RPTS9Ub29scy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvRGlhbG9nLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9NYXNrLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9PcHRpb25zLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9UaXRsZUJhci5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvYXBwLm1vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL2RpYWxvZy5zY3NzPzliM2MiXSwibmFtZXMiOlsiQm9keSIsImRpYWxvZyIsInBhcmVudERpdiIsIm9wdGlvbnMiLCJkaXYiLCJUb29scyIsImNyZWF0ZUNsYXNzZWREaXYiLCJjb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJCb3R0b20iLCJpbml0aWFsaXplIiwiYnV0dG9ucyIsImFkZE9rIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRCdXR0b24iLCJidXR0b24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYWRkQ2xhc3MiLCJpbm5lckhUTUwiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsImNsaWNrIiwiY2xvc2UiLCJmb2N1cyIsImNvbnRlbnRzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImFkZENsYXNzZXMiLCJjbGFzc2VzIiwic3BsaXQiLCJjbHMiLCJhZGRDb250ZW50IiwiaXNTdHJpbmciLCJpc0VsZW1lbnQiLCJ2YWwiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJub2RlVmFsdWUiLCJEaWFsb2ciLCJPcHRpb25zIiwiYm9keSIsIm1hc2siLCJ6SW5kZXgiLCJzdHlsZSIsInBhcmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnN0YWxsUmVzaXphYmxlIiwiVGl0bGVCYXIiLCJNYXNrIiwicGxhY2UiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsInJlc2l6ZSIsInJzT3B0aW9ucyIsImdyYWJTaXplIiwiUmVzaXplciIsInRvUHgiLCJwYXJlbnRXaWQiLCJvZmZzZXRXaWR0aCIsInBhcmVudEhpdCIsIm9mZnNldEhlaWdodCIsImhlaWdodCIsIndpZHRoIiwidG9wIiwibGVmdCIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIm1vZGFsIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsInRpdGxlQmFyQnV0dG9ucyIsInRpdGxlQmFyQWRkQ2xhc3MiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJpbnN0YWxsZWRNb3ZlTGlzdGVuZXIiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiaW5pdGlhbFBvc2l0aW9uWCIsImluaXRpYWxQb3NpdGlvblkiLCJodG1sIiwiYWRkQ2xvc2UiLCJhZGRDdXN0b20iLCJoMSIsInBhZ2VYIiwicGFnZVkiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5zdGFsbEhhbmRsZXJzIiwibW91c2VNb3ZlTGlzdGVuZXIiLCJlIiwicmVtb3ZlSGFuZGxlcnMiLCJkeCIsImR5IiwibmV3UG9zaXRpb25YIiwibmV3UG9zaXRpb25ZIiwibW91c2VVcExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhCQUE4QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkJBQTJCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixLQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRyw0REFBNEQsRUFBRTs7Ozs7OztBQU85SixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVMsVUFBVSxhQUFhLGNBQWM7QUFDcEUscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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QUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FB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LEdBQXVCa0MsZUFBZSxJQUF0QztBQUNIOztBQUVELFdBQVNDLGVBQVQsQ0FBeUJOLENBQXpCLEVBQTRCO0FBQ3hCQztBQUNIOztBQUVELFdBQVNILGVBQVQsR0FBMkI7QUFDdkJHO0FBRUFoQiw0QkFBd0JjLGlCQUF4QjtBQUNBbkYsYUFBUzBDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDMkIscUJBQXZDO0FBQ0FyRSxhQUFTMEMsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNnRCxlQUFyQztBQUNIOztBQUVELFdBQVNMLGNBQVQsR0FBMEI7QUFDdEIsUUFBR2hCLDBCQUEwQixJQUE3QixFQUFtQztBQUMvQjtBQUNIOztBQUVEckUsYUFBUzJGLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDdEIscUJBQTFDO0FBQ0FyRSxhQUFTMkYsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0NELGVBQXhDO0FBQ0FyQiw0QkFBd0IsSUFBeEI7QUFDSDs7QUFFRDVFO0FBQ0gsQ0FqSEQ7O2VBbUhlOEMsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFOQTtBQUNBO2VBT2VULGU7Ozs7Ozs7Ozs7Ozs7QUNQZjs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRpYWxvZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEaWFsb2dcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlRGlhbG9nXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZURpYWxvZ1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjFlNmZiZTM3OTgxOTBlYjZkODAzXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IFwiRGlhbG9nXCI7XG4gXHRcdFx0e1xuIFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0KVxuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3QgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvYXBwLm1vZHVsZXMuanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAubW9kdWxlcy5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF9TeW1ib2wkaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfU3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG5mdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBfU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9TeW1ib2wkaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9TeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9TeW1ib2wgJiYgb2JqICE9PSBfU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKF9TeW1ib2wkaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIF9TeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9TeW1ib2wgJiYgb2JqICE9PSBfU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjcnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYgaGFzKGV4cG9ydHMsIGtleSkpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaWNvbnMtY2wge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltYWdlcy9pY29ucy5wbmdcIikpICsgXCIpO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmljb25zLWNsLWNhcmV0LTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxufVxcblxcbi5pY29ucy1jbC1jYXJldC0xLW5lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IDA7XFxufVxcblxcbi5pY29ucy1jbC1jYXJldC0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggMDtcXG59XFxuXFxuLmljb25zLWNsLXRyaWFuZ2xlLTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE2cHg7XFxufVxcblxcbi5pY29ucy1jbC10cmlhbmdsZS0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE2cHg7XFxufVxcblxcbi5pY29ucy1jbC1hcnJvdy0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0zMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtYXJyb3ctMS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0zMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtYXJyb3dzdG9wLTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTMycHg7XFxufVxcblxcbi5pY29ucy1jbC1hcnJvd3N0b3AtMS1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMzJweDtcXG59XFxuXFxuLmljb25zLWNsLWFycm93dGhpY2stMS1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLWFycm93dGhpY2stMS1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLWFycm93dGhpY2stMS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC02NHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTY0cHg7XFxufVxcblxcbi5pY29ucy1jbC1mb2xkZXItY29sbGFwc2VkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLWZvbGRlci1vcGVuIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtZG9jdW1lbnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC1kb2N1bWVudC1iIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtbm90ZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLW1haWwtY2xvc2VkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtbWFpbC1vcGVuIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtc3VpdGNhc2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtY29tbWVudCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC1wZXJzb24ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtcHJpbnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtdHJhc2gge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtbG9ja2VkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLXVubG9ja2VkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLWJvb2ttYXJrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLXRhZyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC1ob21lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC1mbGFnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLWNhbGN1bGF0b3Ige1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtY2FydCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC1wZW5jaWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtY2xvY2sge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtZGlzayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC1jYWxlbmRhciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtem9vbWluIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC16b29tb3V0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC1zZWFyY2gge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLXdyZW5jaCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtZ2VhciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtaGVhcnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLXN0YXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLWxpbmsge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLWNsb3NlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMjhweDtcXG59XFxuXFxuLmljb25zLWNsLWNsb3NldGhpY2sge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTEyOHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtYWxlcnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNDRweDtcXG59XFxuXFxuLmljb25zLWNsLWhlbHAge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE0NHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtY2hlY2sge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE0NHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtcGxheSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE2MHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wtcGF1c2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE2MHB4O1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5kaWFsb2ctY2wge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ0NDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLWJvdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZmxleDogMCAwIDIycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtYm9keSB7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtO1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLWJvZHkgcDpmaXJzdC1jaGlsZCxcXG5kaXYuZGlhbG9nLWNsLWJvZHkgaDE6Zmlyc3QtY2hpbGQsXFxuZGl2LmRpYWxvZy1jbC1ib2R5IGgyOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtYm9keSBwOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuYnV0dG9uLmRpYWxvZy1jbC1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLXdpZHRoOiA3ZW07XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XFxuICBwYWRkaW5nOiAzcHggMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgLTEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6ICM0NDQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5cXG5idXR0b24uZGlhbG9nLWNsLWJ0bjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLXRvcCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmbGV4OiAwIDAgMjVweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtdG9wIGgxIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCA0cHggMCAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLXRvcCBidXR0b24uZGlhbG9nLWNsLXRiLWJ1dHRvbiB7XFxuICBmbGV4OiAwIDAgMjVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtdG9wIGJ1dHRvbi5kaWFsb2ctY2wtdGItYnV0dG9uIHNwYW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNHB4O1xcbiAgdG9wOiA0cHg7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtdG9wIC5kaWFsb2ctY2wtdGItYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlODExMjM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG4iLCJpbXBvcnQgJy4vaWNvbnMuc2Nzcyc7XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL2ljb25zLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9pY29ucy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9pY29ucy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUUFBQUFEd0NBTUFBQURZU1VyNUFBQUJTMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TkRJZ056a3VNVFl3T1RJMExDQXlNREUzTHpBM0x6RXpMVEF4T2pBMk9qTTVJQ0FnSUNBZ0lDQWlQZ29nUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaTgrQ2lBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrbmh4Zzd3QUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUJjMUpIUWdDdXpoenBBQUFCRGxCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQnhVWVc5QUFBQVdYUlNUbE1BTDJaS0NFQmdHUkF6VUJxL0ltT2VSWStVUDIyZ25DQXB6QTB4QVN3V1ZTZVp3eE54Z0NNMFI4K3ZhRWdLaFJ3NFUrOEVIa3QvSDFwQ2dveW9vdjBrQWxFRElUSnF0YmpmWW9jR2tXODhzcTE4dnNhcnlMeXFwWm1LQzdBQUFBN21TVVJCVkhqYTdWMEpZOXUyRHFaY3k1UWNKMjZ6clpuanJrMXpyRTNYMS9iMTJIMXZiKysrVC96L1AvSkl5UklCOExKaVIzWmlmczRGVVFmeENTUUJrRktFU0VoSTJBSklrRHV1UDJ3NUF5dFhUMEpZZjRrWjBEdjNTd2l6UU5DZ0JQRDZrSEpkS3ZFV0FGdkZ3QVhZOGRXZnZab0V0MENiQU1uclE4cjVIYlFJNElmYkY3QjJsajB5WU5YZnJVS2czR1pRQkEwSVFnMWlzYk1NN3JUZUJzNHQySzRpdjhHMmhRVHZzRzBCZ1FyMGJ3RnVVZ0szTUdqQnpoMnNQaUJrZ3YzM0Fac2VCWGdUNm44VVNJNVFRa0pDUWtKQ1FzTEdQTUVOKzBIU2l0YUFPKzh5b0JBQUQvQmxwM3lBbFJCU1orK1ZFa2NGTEFLc0hmanVORnlVMWdVNEFUSVlQUFlhREZuMWQ5YzRVT3pJcU1qQTRTS1NBb1NLQU9pdmdZTXpCZVN2c1Z3bUh5Q0RmTWJTQjVzUGh5VmNaejVBeHByZ3RvWER0MzBVU0VoSVNFaElTRWpZb0tlMXVqTy8wdmxoc3dyWW9VOVFvU3NFU3REdCtqYWhFRGtiaExmWTZyRmlzSGVoaDRPdnpIMkJZQVVjcGVIcnU4NFFJc2dxdDA0R01RSkpoWUR0QVk0VDJ2VUJyNExndWw3bytuYTREREVDSUJodmc0anc2em84c0F0VmNMRTNlQWtDWVowd3lKL2JpRU1tRkd4QVRndGhqRHNPRDV0by9BcGQxSXUyY2NjYUlnaVhSODdJYmdkRWIwamtBaERzOTBCRW1uRC9vOEExSHg4ZkpoTVNFaElTRWhKMkZhc3ZTMTNSelpDTzFlaitVN3I4ME9oVVZlVHkzU3F3MUFYQzhUd3NVUUZVTHZEazFCSmVuZDRaQXFHTGEzby9saUlJWHQ4UjMzSUZJdW1IUUVhaW5sZzBGTm0xZFN4MmwwRUNJbXZEM1dZV1lpRElud1NJbVpjcklRUThIQVljelFZc3lBcUhIZEc0OWNpR1dLSUM3bEozZEF3UWlPZkJZUVArd3kwQ3JCclkxYVBsdkluRkNYQlh3SHNMbHlvR0NNYlA0UzVDdUdib2d4WkVtZ0JySXRFbTRHN2wwcnVIdEplODJBb0Uyb2pEd0ZnVEY5WU1mWVFBR2NrSHlIQWZBTzUrTlhTUHdzWGhzY1RSaHVQakxzRFN3eHhzZlQ1QVFsb2hrWkNRa0pDUUlEcEVvR3NkaHNNRE16Z2o2TFhxQjUwbThOZDhkZWw2MmgxSGY4NGpKSVE5eHk0WkZEWlhCUTZGSVZTK092MnU1K2VCNkJKNk9oeGl0OVExRzI3eEIvUllDUEt6VmdiQVprRHc5eHVJd1BzQlhQa01PbDh0bHBoK0ZjQ09CZC9oYXllZ0NUZDlCRWlJaE0vTzZldGd1V3QyR3J3VzRkd1oxa2lCZE5UUWZpSUUvSGM4TnQ5c0owUkVyQSt3Q09CTll1M2huZW5VZERMQmlzN284LzJPY244VGQ1aEU4QkdpSlRyRjZ4Z1lhVVpIaHZJQjhlZzF0Z2dvbG44STU0K1NuNU9Ra0pDUWtMQlZLRzc0UU9ad095QTBYY1c5NGF2b3YwMVRBYzVwRnVwOUZkSFpRQ2hFUjI5UGJxc0Z0UEdXb2FlQUFnVkROTDRyb0xZQXdBU0dIem1BclpxdEF2ZnliVnl1OUNmUkdkQUF2bTRETk53VGJEb2MwT3ZpdG9zQWdFaDF0REtGSTlZREs1UGhqUTN4TnRrMk1YbHpMTURhbjY3WXFBbnlXQUJmcjlEUXZWWHpvZUUrSUhSN20raThNRmJDK3dCd1d0eDJqWUxCVWNEWjVkTUJBb0xMeElJdnA3Z2hma0QwQk1YeSs4cGJHUDEzMFQ4aElTRWhZYmRRYWoraFhINy9OME9GTjMzVmJxd3FOeG1IOXZneTRybkI0OXBWS2tQNjQrSXl6TWNia1FGazRnMDdBVHBpWDRuN3dpUHpRdkZvQVhaQW94S2M1L2tZT1h2VjMyUEwxUjM0bjZZZUxUUWNFWDNiR25QWm10bmFYNVEzdFI1bU1CeENObVJ1R3Zpak4zdnFranAyQTljVjJ5QXR6L09pQmlOa1FnaEFESUEyMFNGd0N4aTFudlNlUXV0S1EyTUJ2dm51K25UbWhFTVlucDM5REppQTJXd1dmZ0pEQURnRkp3SDdoRURRcXFNTmloQ0pDYWtyU0FrLzF2QlpBSXdCL2RJWFh2UUJnQ3BJYW54Y0hYNXNDRGo3YWY4dmhJQ0hEeDlheStQOU10dkFDZEQ2ZjRFSm9DWUZTbit3S1NwUTJnOGVhbmd0WUUrckR1TTlrd2NvSy90dkNkRG5SeW0yK25UbWhLb0pQSCtPbThCTXFGdWdmcllIbE5YbmlnUm8vUis5KzhKUGdHUWIxQllwOXlRS1llRG82TWpmQjhDZVlrRHBqd21vdmxvQ3FrNFFFZkJXSC8zMmJiUGhyTzRFejd4dDNrR0FzSitub0FSOGp2TVRnOUVqOVRQM0VXQTlvdkp4QlhUQms1TVRNQ1pxV1VDNU54NnJINllKVkxLZmdKTWFpdzB5ZzUreWJBNlpKQVNVcUJmOGRmWEIrZzQ1QVVOR0FCQUxHQmo5QXdTMHAvdW9Bak81NGRCbkFlVmVoUkk4TXVnK2RneWtUV1paT3dwa3pmVXpyd1hZQk1TYUFDNnYrOEJjV0FTVTlIck1ENEF2WTM3QWtzTmdYWjhCemNHVVp1Z0dXK0ZJcHpmQ2w3YzNjQUlxQnZKMU9ucmxxRUo1OVZNdzEyV3BQTzRLTmQ1ZnEvNEpDUWtKQ1Z1T0Z5L0M1UVVFODlyMWYzNktaajNhWWZCSk5Vdzl3UmtISEdNUEZ2S0FoV2Y3Uzh0Qy9JSFZKdytPYXlyYU9tYWIxTENOOVM5THc4QkVlNUVYMlJnRk82cktnOGRnL0d4UDFnUHBMeEFENm1BTk50TkVQWnRNdTRKTHkvWDlhRFhJdFROWHRHTjdvYmtkNEh0NkNuREs5TmVPMHBIUlgvdm1iZlFyM1k0WUN1ZmhOK3B6aml0VXF2dGNvdjNKM0tEMStQdS94YVg0SjQ1dk15VmtSQlpVUGg0ZUkxblhmelR5VlJBV3pqNVFnME1XcHlvN0tvenJXR2NzMnVqS0pvQ0Z3eUJldmIzNzh0M2JNYjcvWTFHS1pRbjREL3hXZmY2QkZkU3VQNU54OEtGaTQySEdmVjlBTFJpdlVHSFhlOUdJcUIrWXdQbEljVkFMajV1TXpXTWZBWXRlQUZuQU9md2RYZ0RXSDZYczRoYndML0dMK0o5SktaMHdDemhoRm5EQ0xHQkVZZy9WQXVwT3FvMXYyZlcrcXFXdjJncFd3VHlPSFVEM0FXaTFmSlNBVjI4Ly8xaDkzUG92UEhWTVFBRlYxcW1SL3d0ZnE4L2YwSW9KMHNZcitXY21vL0txL1NwODdDR2dpZTRLMmtTby9RUjZlUmlPeFJHSkZ4a0JKV09ZNmQrdWlLQUVJUG16WHg1T0h2NzF3NFc4QnpRcEdwTkg5TzdaVFdBaFkvSDAxTWphOXR0OHA1TUFheFJVNXlnQ1M5cDVrdnZKb3NKUE1BSFdlZ09UY0ZMTm5aMHVMQXVtdngzQUYyVE4ydDF2VmZjMytQWnVTNEJxLzBYZ2VFdlJnZFdKc2tkOGVKS2YrUUU4N2MxazF4dGdRdktJNjgrSFFWRXY2akxGMVl6QW8xejRMSWdodTRtdVh0NGh3Q2MrVUVKQ1FrTENCakRHaVdudHlzR0p0YzhENnFsY0l6SThEZUh6ZGE1KytnS202dWNVRDgwWGVHcmlDL2poaCsrK2d3OVJkYzYxL2hYVUgvTjM4T29WdkpzVFQ3UVVQTjNRNUJ0YW1XOFlNOGNINlQ4WmoxOFRCanE5N3Q4ZWFOVzVNaFJ0Z21KZ3lyM3hJK041L1Vyamo4WVZuWTdWQ1VaV2NFT2lVOGM2VkRxWGEvWlJybU9wZ2gwek9WZ1htT0JLTzhaVGVBMXJJMEM3V3VnSXJYdjFUUTNBRVBEOWp3OGUvUGk5cWM5WVFEN0NNenVjQUxKa0JLcGtGRnJ3VUlnNlZWRVlYN3ZVK1JoRXdFczlWNGN2T05Xcyt3aUlyS2UzcDdJeW9HMXFXc2xUSHJ5MEZhcHNmYjg5L0o1ZW5JSGNWUml5QlJuMCtHb2VGTzBBT3ZCVThaekFGakFZNFBYcTJYeXV3MHREZ05KZmpQMFpJRWZHeFJYdVV4UEg3dWFVNlYrUzZjbXZZVjhCN2lHL2xod1B4MkVDenRTZlovcXJLYjZvSmwrUGtBV3c2UFhseTcyWGM3aG9UL2hhMTI2eVBnSzRCWHhUeWFkVWY2TmdOcTF3UkE4M2hLbGJlbng4VEFnZ2JmNUk0VFAxeFJZOFRMMTl3SHl1R3dEdUJGK1B4NU0xZG9Lc0QvaG0wUWVjbWd4Y1RzTFJ1YTd2a1RsOGVnNFhpQUY5b2pQVTdUWEptMGEvano1YWZERUQ4ZllCNDNJK244TWNBc1BndWtlQlU1MllOZlhob2R0ME1QZ0tYU3hYWDRWaEFLd3dYZis1MzJ6Z3cyQmxFUlU4ZlFDTU5UQUI3cG1BTmZvQnAxVnF1dkNrRC9nalpzcGFYaGU2cDN6UWxQNytsYVN2ZFJGVnI3R1FocVZPNlpWRGNWVS9ZUE00T3p3OHd4WjBycmtxSGhTZWhJKzljakloSVNGaHRlZ1VyNDYrODRIdVlqNjRzMFA2UHdONDFncnZONzN1K3p1ai8zT3Q3dlBtL2tNejB3VEdCbVl3d3dmOHpyWFFibjByejJZVi83TStEVUE1bW8wSjNEY0UzUGM1UWk0L0lqZVVXRk1QZkFPWFlhYkg5Rm53L05kckFQcWF6M2xzRTNyZGQ4RTM1TVlvSWdzM3RmeDArSlRPemdZZWdPaWxCOUFoOUROeWNWcUhBWjRZcS9XZkVOdlA4ZXBqZStudXFCaGgvWjZxSDAvSkRyTU5FcEEzOXp2M0U1Q3pKZzl3V2VDeW5Nd20yd1FVeEdTcWhlWkRFazRUQWtxWXpXYjllYnBHWVQ4QjlqRUZzWDNTS2E1c0FmMTJncFVCMUEvTlZEb2NHZ0lPdlJaZ1cxRHViL0tkKzRCK296WGU2ZDAxNGwxdkowakVuQStLSzQ4Q3ZiNWZiMllVcm10dzBJZ0hJdEFIZUViQXRkMldUZnBGNyttMExOeDdiNU4xU0c5WVRFaElTRWpZSWVRUUVxOTkwSjNrd3ZKenJ0VVZmZnpZY3FjRFloL2VNS1dBRUZDVkZYaUhmRkxvSDBENWExOHdVSWZPcHR5T3JITG1PK2RXTVZRelpIM0dnNFFDU2tCZDF0YTV1ajFLUGI0RElRQ1gyd1M0bnZTMVJlaVhBTHdZbUJOUXBUOFdsYXgrVGF6NThRa2hZQkxNOFBnMEppTDBUVUNQRnJBVUFUMWJRTDk5Z0N1bHNORStvT2RSd001M2JIZ1UySGsvSUNFaElTRmh0d0U3L1J4VjhXY0JuMzVXRUVmbFlvZmVrNnVmSTRWUGMvUThRNWJmY3p4QTBmZ20vUDBIWGVXdHd4VCtwQWdRYUhXeVptVmlNV0M5VEw2OG1yeDlCbkFweEtlNXVNUlBXMCtQVkVSTG42ODFpZ3lQaCtxclhiNE54M1E5dTVhQnlrUDlHVzZwZTFzdTFzMWZtRHVValVDdnRqLzNFRkM5R2szdXlmWnRleUNsM3RESWUvcGozcitueTlVV3VRZGJiQUVLbC9pTzYzNWhDbFQ5bG9BUGE3UW0zbEhlT2t5cU1YQ0UxcnlvWUhRTVIyTVBBYmV1RTh3QUxpOHVjYmRmcHlOeW9PcmYzZ2cxZTZidXo3Tk1KQ1FrSkNUc0l2anpBVEdaTDZMcUtuZTkzcXB5RFB6NWdKak1sOUYxbGJ0ZWIxVTVldi9OT3NFN3k4aDhJV1ZYdWV2MVZwV2o0TThIM0RjbmFPUUQ3UnNlTE9URDlsMXA5VkxhUTdNL2tvVzMvTDRwdisrOXZvQmcrYXpPMnVCeXdlc3Y4UE1Pd1d3WVd4ek5sODVXdnc0TzhPeHdiSCs3M05yZlRKRzd5dkhzbWZzM2tQcUlUejc1Uk5ENlZFOGtMMHNBK2NNaDY5Wjd3Q29zSUxDL3NCUUs3ODhJaU5ZSHZ6N2VKYzlyL2RkSHdBaTlnODVCZ090M0Y0V2kxM2RZU01nQzlOdEc1dENCZ0hnVDBHL2Y2bUxpc1NZQ01RS0RUVXE0TEFydlA2LzFYNDRBL255QW8xTnJPc0ZEYnljRlhQWjNxczVPa2wrZmQ3SzB2T0hISitzMlFKOTNDS0h2WVd6VlliU3JIRWZmanN5cWpsUlhPWTYrWGRsVlhlbXVja0pDUWtKQ1FrSXNIQUM0Tm5uN0NhQnZhNHZMdDVBQUNCTlFmVWdFSFNaQWdMaFpCRlQvbmkwZ000SkFrTVhVdGd3aVdVRHFBMjRTQWJzK0NpUWtKQ1FrSkNTc0cvTG1lQUxSVlpCUWRsL29LdG4vQjlycWV5WGt5Z1R3KzMyVDlGK0hCWEI5YjVUKzFBS3E1ZTNWeDBPQTYvOE42UDI1L3JlMkR5Z2JVUDJscGIvY0dRdW85Nys1K3E5cUFUZGUvMVZIQVkvK3Urb0hHUDF2a1IvUWlVMXB2aE1TdGh6L0IvaDFPV2l5TXBzd0FBQUFBRWxGVGtTdVFtQ0NcIiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlc2l6ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVzaXplclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVJlc2l6ZXJcIl07XG4vKioqKioqLyBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVSZXNpemVyXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuLyoqKioqKi8gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbi8qKioqKiovIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbi8qKioqKiovIFx0fSA7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4vKioqKioqLyBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4vKioqKioqLyBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4vKioqKioqLyBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbi8qKioqKiovIFx0XHQ7XG4vKioqKioqLyBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuLyoqKioqKi8gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuLyoqKioqKi8gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbi8qKioqKiovIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbi8qKioqKiovIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4vKioqKioqLyBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbi8qKioqKiovIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4vKioqKioqLyBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbi8qKioqKiovIFx0XHRcdFx0XHRyZWplY3QoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4vKioqKioqLyBcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuLyoqKioqKi8gXHRcdFx0XHRcdHJlc29sdmUoKTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4vKioqKioqLyBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHN1Y2Nlc3Ncbi8qKioqKiovIFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybjtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH0pO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4vKioqKioqLyBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiNzIyMDYxNTZmNzg1NWY3ZWEwZDhcIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbi8qKioqKiovIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4vKioqKioqLyBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuLyoqKioqKi8gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbi8qKioqKiovIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuLyoqKioqKi8gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4vKioqKioqLyBcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbi8qKioqKiovIFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4vKioqKioqLyBcdFx0XHRcdG5hbWUgIT09IFwiZVwiXG4vKioqKioqLyBcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbi8qKioqKiovIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbi8qKioqKiovIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbi8qKioqKiovIFx0XHRcdFx0dGhyb3cgZXJyO1xuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuLyoqKioqKi8gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4vKioqKioqLyBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcdHJldHVybiBmbjtcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdHZhciBob3QgPSB7XG4vKioqKioqLyBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4vKioqKioqLyBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuLyoqKioqKi8gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbi8qKioqKiovIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbi8qKioqKiovIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vIE1vZHVsZSBBUElcbi8qKioqKiovIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuLyoqKioqKi8gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbi8qKioqKiovIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIikgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuLyoqKioqKi8gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuLyoqKioqKi8gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuLyoqKioqKi8gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuLyoqKioqKi8gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbi8qKioqKiovIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4vKioqKioqLyBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4vKioqKioqLyBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbi8qKioqKiovIFx0XHRyZXR1cm4gaG90O1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbi8qKioqKiovIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuLyoqKioqKi8gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbi8qKioqKiovIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuLyoqKioqKi8gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuLyoqKioqKi8gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbi8qKioqKiovIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuLyoqKioqKi8gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4vKioqKioqLyBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuLyoqKioqKi8gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbi8qKioqKiovIFx0dmFyIGhvdERlZmVycmVkO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4vKioqKioqLyBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG4vKioqKioqL1xuLyoqKioqKi8gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4vKioqKioqLyBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4vKioqKioqLyBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4vKioqKioqLyBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbi8qKioqKiovIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4vKioqKioqLyBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4vKioqKioqLyBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbi8qKioqKiovIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4vKioqKioqLyBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbi8qKioqKiovIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4vKioqKioqLyBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4vKioqKioqLyBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3Rcbi8qKioqKiovIFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0aG90VXBkYXRlID0ge307XG4vKioqKioqLyBcdFx0XHR2YXIgY2h1bmtJZCA9IFwiYXBwXCI7XG4vKioqKioqLyBcdFx0XHR7XG4vKioqKioqLyBcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZS1ibG9ja3Ncbi8qKioqKiovIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbi8qKioqKiovIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbi8qKioqKiovIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuLyoqKioqKi8gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbi8qKioqKiovIFx0XHRcdCkge1xuLyoqKioqKi8gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbi8qKioqKiovIFx0XHR9KTtcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4vKioqKioqLyBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm47XG4vKioqKioqLyBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbi8qKioqKiovIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuLyoqKioqKi8gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4vKioqKioqLyBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuLyoqKioqKi8gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4vKioqKioqLyBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbi8qKioqKiovIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbi8qKioqKiovIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbi8qKioqKiovIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4vKioqKioqLyBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuLyoqKioqKi8gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4vKioqKioqLyBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuLyoqKioqKi8gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4vKioqKioqLyBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4vKioqKioqLyBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuLyoqKioqKi8gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4vKioqKioqLyBcdFx0XHRcdH0pXG4vKioqKioqLyBcdFx0XHRcdC50aGVuKFxuLyoqKioqKi8gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbi8qKioqKiovIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4vKioqKioqLyBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuLyoqKioqKi8gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuLyoqKioqKi8gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHR2YXIgY2I7XG4vKioqKioqLyBcdFx0dmFyIGk7XG4vKioqKioqLyBcdFx0dmFyIGo7XG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZTtcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlSWQ7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4vKioqKioqLyBcdFx0XHRcdFx0aWQ6IGlkXG4vKioqKioqLyBcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbi8qKioqKiovIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4vKioqKioqLyBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4vKioqKioqLyBcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbi8qKioqKiovIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4vKioqKioqLyBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4vKioqKioqLyBcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4vKioqKioqLyBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4vKioqKioqLyBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuLyoqKioqKi8gXHRcdFx0fTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbi8qKioqKiovIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4vKioqKioqLyBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuLyoqKioqKi8gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbi8qKioqKiovIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbi8qKioqKiovIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4vKioqKioqLyBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbi8qKioqKiovIFx0XHRcdGNvbnNvbGUud2Fybihcbi8qKioqKiovIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbi8qKioqKiovIFx0XHRcdCk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4vKioqKioqLyBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbi8qKioqKiovIFx0XHRcdFx0dmFyIHJlc3VsdDtcbi8qKioqKiovIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbi8qKioqKiovIFx0XHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4vKioqKioqLyBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4vKioqKioqLyBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4vKioqKioqLyBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0ZGVmYXVsdDpcbi8qKioqKiovIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdClcbi8qKioqKiovIFx0XHRcdFx0XHRcdCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4vKioqKioqLyBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuLyoqKioqKi8gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuLyoqKioqKi8gXHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuLyoqKioqKi8gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuLyoqKioqKi8gXHRcdFx0KVxuLyoqKioqKi8gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4vKioqKioqLyBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4vKioqKioqLyBcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4vKioqKioqLyBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbi8qKioqKiovIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4vKioqKioqLyBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9KTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0dmFyIGlkeDtcbi8qKioqKiovIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbi8qKioqKiovIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuLyoqKioqKi8gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbi8qKioqKiovIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdHZhciBkYXRhID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4vKioqKioqLyBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuLyoqKioqKi8gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuLyoqKioqKi8gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbi8qKioqKiovIFx0XHRcdFx0Y2IoZGF0YSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4vKioqKioqLyBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuLyoqKioqKi8gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbi8qKioqKiovIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbi8qKioqKiovIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbi8qKioqKiovIFx0XHR2YXIgZGVwZW5kZW5jeTtcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4vKioqKioqLyBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuLyoqKioqKi8gXHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuLyoqKioqKi8gXHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxuLyoqKioqKi8gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuLyoqKioqKi8gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4vKioqKioqLyBcdFx0dmFyIGVycm9yID0gbnVsbDtcbi8qKioqKiovIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4vKioqKioqLyBcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4vKioqKioqLyBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4vKioqKioqLyBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuLyoqKioqKi8gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4vKioqKioqLyBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbi8qKioqKiovIFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuLyoqKioqKi8gXHRcdGlmIChlcnJvcikge1xuLyoqKioqKi8gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbi8qKioqKiovIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4vKioqKioqLyBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4vKioqKioqLyBcdFx0fSk7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbi8qKioqKiovIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbi8qKioqKiovIFx0XHRcdGNoaWxkcmVuOiBbXVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL2FwcC5tb2R1bGVzLmpzXCIpKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLm1vZHVsZXMuanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9zcmMvT3B0aW9ucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL09wdGlvbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyoqXHJcbiAqIFZhcmlvdXMgaW50ZXJmYWNlIG9wdGlvbnMgd2UgY2FuIHNlbGVjdFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2Ugb3B0aW9ucy5cclxuICogQHBhcmFtIG9wdGlvbnMgVXNlciBwcm92aWRlZCBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbnZhciBPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XHJcblxyXG4gICAgLy8vIE9wdGlvbnM6IHZlcnRpY2FsLCBob3Jpem9udGFsLCBib3RoXHJcbiAgICB0aGlzLnJlc2l6ZSA9ICd2ZXJ0aWNhbCc7XHJcblxyXG4gICAgLy8vIFRoZSByZXNpemluZyBoYW5kbGVcclxuICAgIHRoaXMuaGFuZGxlID0gJ2Jhcic7XHJcblxyXG4gICAgLy8vIFJhbmdlIGZvciBncmFiaW5nXHJcbiAgICB0aGlzLmdyYWJTaXplID0gMTA7XHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChPcHRpb25zKTtcclxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2FwcC5tb2R1bGVzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2FwcC5tb2R1bGVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3Jlc2l6ZXJfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcmVzaXplci5qcyAqLyBcIi4vc3JjL3Jlc2l6ZXIuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3Jlc2l6ZXJfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl07IH0pO1xuXG5cclxuXHJcblxyXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcmVzaXplci1hY3R1YWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcmVzaXplci1hY3R1YWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxyXG5mdW5jdGlvbiBSZXNpemVyQWN0dWFsKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmVzaXplcicpO1xyXG5cclxuICAgIGxldCBncmFiU2l6ZSA9IG9wdGlvbnMuZ3JhYlNpemU7XHJcblxyXG4gICAgbGV0IGhhbmRsZSA9IG9wdGlvbnMuaGFuZGxlO1xyXG4gICAgaWYoaGFuZGxlID09PSAnYmFyJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gZ3JhYlNpemUgKyAncHggc29saWQgIzE4NDUzQic7XHJcbiAgICB9IGVsc2UgaWYoaGFuZGxlID09PSAnaGFuZGxlJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ3ZlcnRpY2FsJztcclxuICAgIH0gZWxzZSBpZihoYW5kbGUgPT09ICdub25lJykge1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZXNpemUgPSAnbm9uZSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIE1vdXNlIG1vdmUgZXZlbnQgaGFuZGxlclxyXG4gICAgbGV0IGluc3RhbGxlZE1vdmVMaXN0ZW5lciA9IG51bGw7XHJcbiAgICBsZXQgbWFzayA9IG51bGw7XHJcblxyXG4gICAgLy8vIEdldCB0aGUgbWluaW11bSBoZWlnaHQgYW5kIHdpZHRoIHByb3BlcnRpZXNcclxuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XHJcblxyXG4gICAgbGV0IG1pbkhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWluSGVpZ2h0O1xyXG4gICAgbWluSGVpZ2h0ID0gbWluSGVpZ2h0LnN1YnN0cigwLCBtaW5IZWlnaHQubGVuZ3RoIC0gMik7XHJcbiAgICBsZXQgbWluV2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1pbldpZHRoO1xyXG4gICAgbWluV2lkdGggPSBtaW5XaWR0aC5zdWJzdHIoMCwgbWluV2lkdGgubGVuZ3RoIC0gMik7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gSW5zdGFsbCB0aGUgbW91c2UgZG93biBsaXN0ZW5lclxyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICAvLyBJbnN0YWxsIHRoZSBjdXJzb3IgbGlzdGVuZXJcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGN1cnNvckxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5pdGlhbFgsIGluaXRpYWxZO1xyXG4gICAgbGV0IGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodDtcclxuICAgIGxldCBncmFiVHlwZSA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VEb3duTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGdyYWJUeXBlID0gb25IYW5kbGUoZS5wYWdlWCwgZS5wYWdlWSk7XHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5pdGlhbFggPSBlLnBhZ2VYO1xyXG4gICAgICAgICAgICBpbml0aWFsWSA9IGUucGFnZVk7XHJcbiAgICAgICAgICAgIGxldCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgaW5pdGlhbFdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgICAgICAgICAgaW5pdGlhbEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaW5zdGFsbEhhbmRsZXJzKCk7XHJcbiAgICAgICAgICAgIGluc3RhbGxNYXNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZUxpc3RlbmVyKGUpIHtcclxuICAgICAgICBpZihlLmJ1dHRvbnMgIT09IDEpIHtcclxuICAgICAgICAgICAgcmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkeCA9IGUucGFnZVggLSBpbml0aWFsWDtcclxuICAgICAgICBsZXQgZHkgPSBlLnBhZ2VZIC0gaW5pdGlhbFk7XHJcblxyXG4gICAgICAgIGlmKGdyYWJUeXBlID09PSAnaG9yaXpvbnRhbCcgfHwgZ3JhYlR5cGUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICAvLyBDb21wdXRlIGEgZGVzaXJlZCBuZXcgd2lkdGhcclxuICAgICAgICAgICAgbGV0IG5ld1dpZHRoID0gaW5pdGlhbFdpZHRoICsgZHg7XHJcbiAgICAgICAgICAgIGlmIChuZXdXaWR0aCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IG1pbldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgaXRcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcnICsgbmV3V2lkdGggKyAncHgnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgPT09ICd2ZXJ0aWNhbCcgfHwgZ3JhYlR5cGUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICAvLyBDb21wdXRlIGEgZGVzaXJlZCBuZXcgaGVpZ2h0XHJcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgZHk7XHJcbiAgICAgICAgICAgIGlmIChuZXdIZWlnaHQgPCBtaW5IZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IG1pbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGl0XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJycgKyBuZXdIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZVVwTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIHJlbW92ZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGxIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBtb3VzZU1vdmVMaXN0ZW5lcjtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGxNYXNrKCkge1xyXG4gICAgICAgIC8vIEVuc3VyZSBub25lIGN1cnJlbnRseSBleGlzdHNcclxuICAgICAgICByZW1vdmVNYXNrKCk7XHJcblxyXG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIHZhciB0YWcgPSAnPGRpdiBzdHlsZT1cInBvc2l0aW9uOiAnICtcclxuICAgICAgICAgICAgJ2Fic29sdXRlOyBsZWZ0OiAwOyByaWdodDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsnICtcclxuICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuO1wiPjwvZGl2Pic7XHJcbiAgICAgICAgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBtYXNrLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBtYXNrLnN0eWxlLmxlZnQgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUudG9wID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgbWFzay5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuekluZGV4ID0gMTAwMDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS5vcGFjaXR5ID0gMC41O1xyXG5cclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1hc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgICAgIHJlbW92ZU1hc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVIYW5kbGVycygpIHtcclxuICAgICAgICBpZihpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaW5zdGFsbGVkTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgICAgICBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFzaygpIHtcclxuICAgICAgICBpZihtYXNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgICAgICAgICBtYXNrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYW4geCx5IGxvY2F0aW9uIGlzIG92ZXIgYSBoYW5kbGUgZm9yIG1hbmlwdWxhdGluZ1xyXG4gICAgICogdGhlIHJlc2l6ZWFibGUgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHggbG9jYXRpb24gaW4gcGl4ZWxzXHJcbiAgICAgKiBAcGFyYW0geSBsb2NhdGlvbiBpbiBwaXhlbHNcclxuICAgICAqIEByZXR1cm5zIG51bGwgaWYgbm90LCAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdib3RoJyBpZiBvdmVyIGhhbmRsZSBhbmQgbW9kZSBhdmFpbGFibGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG9uSGFuZGxlKHgsIHkpIHtcclxuICAgICAgICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIGxldCBib3R0b20gPSByZWN0LmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBsZXQgdmVydCA9IHkgPj0gYm90dG9tIC0gZ3JhYlNpemU7XHJcblxyXG4gICAgICAgIGxldCByaWdodCA9IHJlY3QucmlnaHQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcbiAgICAgICAgbGV0IGhvcnogPSB4ID49IHJpZ2h0IC0gZ3JhYlNpemU7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMucmVzaXplID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgaWYodmVydCAmJiBob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JvdGgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHZlcnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigob3B0aW9ucy5yZXNpemUgPT09ICdib3RoJyB8fCBvcHRpb25zLnJlc2l6ZSA9PT0gJ3ZlcnRpY2FsJykgJiYgdmVydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsOydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKChvcHRpb25zLnJlc2l6ZSA9PT0gJ2JvdGgnIHx8IG9wdGlvbnMucmVzaXplID09PSAnaG9yaXpvbnRhbCcpICYmIGhvcnopIHtcclxuICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsOydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgbGV0IGN1cnNvciA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gY3Vyc29yTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICAvLyBTd2FwIHRoZSBjdXJzb3Igd2hlbiB3ZSBhcmUgb3ZlciB0aGUgaGFuZGxlXHJcbiAgICAgICAgaWYgKG9uSGFuZGxlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnNvciAhPT0gMikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGN1cnNvciAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCk7XHJcbn1cclxuXHJcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoUmVzaXplckFjdHVhbCk7XHJcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9yZXNpemVyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcmVzaXplci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3Jlc2l6ZXJfYWN0dWFsX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Jlc2l6ZXItYWN0dWFsLmpzICovIFwiLi9zcmMvcmVzaXplci1hY3R1YWwuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX09wdGlvbnNfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vT3B0aW9ucy5qcyAqLyBcIi4vc3JjL09wdGlvbnMuanNcIik7XG4vKipcclxuICogVmVydGljYWwgcmVzaXplIHN1cHBvcnQgZm9yIGRpdiwgdGV4dGFyZWEsIGlmcmFtZSwgZXRjLlxyXG4gKlxyXG4gKiBBIHByb2JsZW0gd2l0aCB0aGUgcmVzaXplIGZlYXR1cmUgb2YgdGV4dGFyZWEgYW5kIGlmcmFtZSBpcyB0aGF0IGl0IGRvZXMgbm90IHdvcmsgaW4gYWxsXHJcbiAqIGJyb3dzZXJzIChlc3BlY2lhbGx5IEVkZ2UpIGFuZCBpcyBvZnRlbiBxdWl0ZSBxdWlya3kuIFRoaXMgc21hbGwgcGFja2FnZSBhbGxvd3MgeW91IHRvXHJcbiAqIGFkZCB2ZXJ0aWNhbCByZXNpemUgYWJpbGl0eSB0byBqdXN0IGFib3V0IGFueXRoaW5nLlxyXG4gKlxyXG4gKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29uc3RydWN0b3IgZm9yIGEgUmVzaXplciBvYmplY3RcclxuICogQHBhcmFtIHNlbCBTZWxlY3RvciBvciBET00gZWxlbWVudFxyXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIG9iamVjdC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBSZXNpemVyKHNlbCwgb3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG5ldyBfT3B0aW9uc19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXShvcHRpb25zKTtcclxuXHJcbiAgICBpZih0eXBlb2Ygc2VsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ldyBfcmVzaXplcl9hY3R1YWxfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0oZWxlbWVudHNbaV0sIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZihzZWwubm9kZVR5cGUpIHtcclxuICAgICAgICBuZXcgX3Jlc2l6ZXJfYWN0dWFsX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKHNlbCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoUmVzaXplcik7XHJcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KVtcImRlZmF1bHRcIl07XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OVNaWE5wZW1WeUwzZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0luZGxZbkJoWTJzNkx5OVNaWE5wZW1WeUwzZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lpd2lkMlZpY0dGamF6b3ZMMUpsYzJsNlpYSXZMaTl6Y21NdlQzQjBhVzl1Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTlTWlhOcGVtVnlMeTR2YzNKakwyRndjQzV0YjJSMWJHVnpMbXB6SWl3aWQyVmljR0ZqYXpvdkwxSmxjMmw2WlhJdkxpOXpjbU12Y21WemFYcGxjaTFoWTNSMVlXd3Vhbk1pTENKM1pXSndZV05yT2k4dlVtVnphWHBsY2k4dUwzTnlZeTl5WlhOcGVtVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRVTA3UVVGRFRqdEJRVU5CTzBGQlEwRXNZMEZCVFR0QlFVTk9PMEZCUTBFN1FVRkRRU3hqUVVGTk8wRkJRMDQ3UVVGRFFUdEJRVU5CTzBGQlEwRXNaVUZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZsQlFVazdRVUZEU2pzN1FVRkZRVHRCUVVOQkxITkVRVUU0UXp0QlFVTTVRenRCUVVOQk8wRkJRMEVzYjBOQlFUUkNPMEZCUXpWQ0xIRkRRVUUyUWp0QlFVTTNRaXg1UTBGQmFVTTdPMEZCUldwRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWTBGQlRUdEJRVU5PTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRVTA3UVVGRFRqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdGQlFVczdPMEZCUlV3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIRkRRVUUyUWp0QlFVTTNRaXh4UTBGQk5rSTdRVUZETjBJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzTmtKQlFYRkNMR2RDUVVGblFqdEJRVU55UXp0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTERaQ1FVRnhRaXhuUWtGQlowSTdRVUZEY2tNN1FVRkRRVHRCUVVOQkxHRkJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNZVUZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRU3hoUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCU3pzN1FVRkZURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxHRkJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRkxPenRCUVVWTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN3d1FrRkJhMElzT0VKQlFUaENPMEZCUTJoRU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGbEJRVWs3UVVGRFNqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVVrN1FVRkRTanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRVTA3UVVGRFRqdEJRVU5CTzBGQlEwRTdRVUZEUVN4bFFVRlBPMEZCUTFBN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFpRVUZKTzBGQlEwbzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFJDUVVGdlFpd3lRa0ZCTWtJN1FVRkRMME03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR1ZCUVU4N1FVRkRVRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNNa0pCUVcxQ0xHTkJRV003UVVGRGFrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIZENRVUZuUWl4TFFVRkxPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFVMDdRVUZEVGp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZDBKQlFXZENMRmxCUVZrN1FVRkROVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3h6UWtGQll5dzBRa0ZCTkVJN1FVRkRNVU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRVTA3UVVGRFRqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFpRVUZKT3p0QlFVVktPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzZFVKQlFXVXNORUpCUVRSQ08wRkJRek5ETzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNkVUpCUVdVc05FSkJRVFJDTzBGQlF6TkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3g1UWtGQmFVSXNkVU5CUVhWRE8wRkJRM2hFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZVVKQlFXbENMSFZEUVVGMVF6dEJRVU40UkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhsQ1FVRnBRaXh6UWtGQmMwSTdRVUZEZGtNN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBKQlFWRTdRVUZEVWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJRa0ZCVlR0QlFVTldPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxITkNRVUZqTEhkRFFVRjNRenRCUVVOMFJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTEdWQlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFVMDdRVUZEVGp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBKQlFWRTdRVUZEVWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVVrN1FVRkRTanM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIVkNRVUZsTzBGQlEyWTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdEVRVUV3UXl4blEwRkJaME03UVVGRE1VVTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SVUZCZDBRc2EwSkJRV3RDTzBGQlF6RkZPMEZCUTBFc2VVUkJRV2xFTEdOQlFXTTdRVUZETDBRN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsRVFVRjVReXhwUTBGQmFVTTdRVUZETVVVc2QwaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8wRkJRM0pKTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFEwRkJjME1zZFVKQlFYVkNPenM3UVVGSE4wUTdRVUZEUVRzN096czdPenM3T3pzN096dEJRemwzUWtFN1FVRkJRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3p0QlFVbEJPenM3T3pzN096czdPenM3T3pzN096dEJRMnhEUVRzN1FVRkZVVHM3T3pzN096czdPenM3T3pzN08wRkRSRkk3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJMRXRCUVVzN08wRkJSVXdzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3h6UWtGQmMwSXNVMEZCVXl4VlFVRlZMR0ZCUVdFc1kwRkJZenRCUVVOd1JTeHhRMEZCY1VNN1FVRkRja003TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERaQ1FVRTJRanRCUVVNM1FqczdRVUZGUVR0QlFVTkJMQ3RDUVVFclFqdEJRVU12UWpzN1FVRkZRVHRCUVVOQk96czdPMEZCU1VFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPenM3T3pzN096czdPenM3T3p0QlEzQk9RVHRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzYjBKQlFXOUNMRzFDUVVGdFFqdEJRVU4yUXp0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUczdRVUZGUVNJc0ltWnBiR1VpT2lKeVpYTnBlbVZ5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9XMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aVVtVnphWHBsY2x3aVhTQTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKU1pYTnBlbVZ5WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1ZlNrb2QybHVaRzkzTENCbWRXNWpkR2x2YmlncElIdGNibkpsZEhWeWJpQWlMQ0lnWEhSbWRXNWpkR2x2YmlCb2IzUkVhWE53YjNObFEyaDFibXNvWTJoMWJtdEpaQ2tnZTF4dUlGeDBYSFJrWld4bGRHVWdhVzV6ZEdGc2JHVmtRMmgxYm10elcyTm9kVzVyU1dSZE8xeHVJRngwZlZ4dUlGeDBkbUZ5SUhCaGNtVnVkRWh2ZEZWd1pHRjBaVU5oYkd4aVlXTnJJRDBnZDJsdVpHOTNXMXdpZDJWaWNHRmphMGh2ZEZWd1pHRjBaVkpsYzJsNlpYSmNJbDA3WEc0Z1hIUjNhVzVrYjNkYlhDSjNaV0p3WVdOclNHOTBWWEJrWVhSbFVtVnphWHBsY2x3aVhTQTlJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J1YnkxMWJuVnpaV1F0ZG1GeWMxeHVJRngwWm5WdVkzUnBiMjRnZDJWaWNHRmphMGh2ZEZWd1pHRjBaVU5oYkd4aVlXTnJLR05vZFc1clNXUXNJRzF2Y21WTmIyUjFiR1Z6S1NCN1hHNGdYSFJjZEdodmRFRmtaRlZ3WkdGMFpVTm9kVzVyS0dOb2RXNXJTV1FzSUcxdmNtVk5iMlIxYkdWektUdGNiaUJjZEZ4MGFXWWdLSEJoY21WdWRFaHZkRlZ3WkdGMFpVTmhiR3hpWVdOcktTQndZWEpsYm5SSWIzUlZjR1JoZEdWRFlXeHNZbUZqYXloamFIVnVhMGxrTENCdGIzSmxUVzlrZFd4bGN5azdYRzRnWEhSOUlEdGNibHh1SUZ4MEx5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElHNXZMWFZ1ZFhObFpDMTJZWEp6WEc0Z1hIUm1kVzVqZEdsdmJpQm9iM1JFYjNkdWJHOWhaRlZ3WkdGMFpVTm9kVzVyS0dOb2RXNXJTV1FwSUh0Y2JpQmNkRngwZG1GeUlHaGxZV1FnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MGMwSjVWR0ZuVG1GdFpTaGNJbWhsWVdSY0lpbGJNRjA3WEc0Z1hIUmNkSFpoY2lCelkzSnBjSFFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLRndpYzJOeWFYQjBYQ0lwTzF4dUlGeDBYSFJ6WTNKcGNIUXVZMmhoY25ObGRDQTlJRndpZFhSbUxUaGNJanRjYmlCY2RGeDBjMk55YVhCMExuTnlZeUE5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQXJJRndpWENJZ0t5QmphSFZ1YTBsa0lDc2dYQ0l1WENJZ0t5Qm9iM1JEZFhKeVpXNTBTR0Z6YUNBcklGd2lMbWh2ZEMxMWNHUmhkR1V1YW5OY0lqdGNiaUJjZEZ4ME8xeHVJRngwWEhSb1pXRmtMbUZ3Y0dWdVpFTm9hV3hrS0hOamNtbHdkQ2s3WEc0Z1hIUjlYRzVjYmlCY2RDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTExYm5WelpXUXRkbUZ5YzF4dUlGeDBablZ1WTNScGIyNGdhRzkwUkc5M2JteHZZV1JOWVc1cFptVnpkQ2h5WlhGMVpYTjBWR2x0Wlc5MWRDa2dlMXh1SUZ4MFhIUnlaWEYxWlhOMFZHbHRaVzkxZENBOUlISmxjWFZsYzNSVWFXMWxiM1YwSUh4OElERXdNREF3TzF4dUlGeDBYSFJ5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvWm5WdVkzUnBiMjRvY21WemIyeDJaU3dnY21WcVpXTjBLU0I3WEc0Z1hIUmNkRngwYVdZZ0tIUjVjR1Z2WmlCWVRVeElkSFJ3VW1WeGRXVnpkQ0E5UFQwZ1hDSjFibVJsWm1sdVpXUmNJaWtnZTF4dUlGeDBYSFJjZEZ4MGNtVjBkWEp1SUhKbGFtVmpkQ2h1WlhjZ1JYSnliM0lvWENKT2J5QmljbTkzYzJWeUlITjFjSEJ2Y25SY0lpa3BPMXh1SUZ4MFhIUmNkSDFjYmlCY2RGeDBYSFIwY25rZ2UxeHVJRngwWEhSY2RGeDBkbUZ5SUhKbGNYVmxjM1FnUFNCdVpYY2dXRTFNU0hSMGNGSmxjWFZsYzNRb0tUdGNiaUJjZEZ4MFhIUmNkSFpoY2lCeVpYRjFaWE4wVUdGMGFDQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBcklGd2lYQ0lnS3lCb2IzUkRkWEp5Wlc1MFNHRnphQ0FySUZ3aUxtaHZkQzExY0dSaGRHVXVhbk52Ymx3aU8xeHVJRngwWEhSY2RGeDBjbVZ4ZFdWemRDNXZjR1Z1S0Z3aVIwVlVYQ0lzSUhKbGNYVmxjM1JRWVhSb0xDQjBjblZsS1R0Y2JpQmNkRngwWEhSY2RISmxjWFZsYzNRdWRHbHRaVzkxZENBOUlISmxjWFZsYzNSVWFXMWxiM1YwTzF4dUlGeDBYSFJjZEZ4MGNtVnhkV1Z6ZEM1elpXNWtLRzUxYkd3cE8xeHVJRngwWEhSY2RIMGdZMkYwWTJnZ0tHVnljaWtnZTF4dUlGeDBYSFJjZEZ4MGNtVjBkWEp1SUhKbGFtVmpkQ2hsY25JcE8xeHVJRngwWEhSY2RIMWNiaUJjZEZ4MFhIUnlaWEYxWlhOMExtOXVjbVZoWkhsemRHRjBaV05vWVc1blpTQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlGeDBYSFJjZEZ4MGFXWWdLSEpsY1hWbGMzUXVjbVZoWkhsVGRHRjBaU0FoUFQwZ05Da2djbVYwZFhKdU8xeHVJRngwWEhSY2RGeDBhV1lnS0hKbGNYVmxjM1F1YzNSaGRIVnpJRDA5UFNBd0tTQjdYRzRnWEhSY2RGeDBYSFJjZEM4dklIUnBiV1Z2ZFhSY2JpQmNkRngwWEhSY2RGeDBjbVZxWldOMEtGeHVJRngwWEhSY2RGeDBYSFJjZEc1bGR5QkZjbkp2Y2loY0lrMWhibWxtWlhOMElISmxjWFZsYzNRZ2RHOGdYQ0lnS3lCeVpYRjFaWE4wVUdGMGFDQXJJRndpSUhScGJXVmtJRzkxZEM1Y0lpbGNiaUJjZEZ4MFhIUmNkRngwS1R0Y2JpQmNkRngwWEhSY2RIMGdaV3h6WlNCcFppQW9jbVZ4ZFdWemRDNXpkR0YwZFhNZ1BUMDlJRFF3TkNrZ2UxeHVJRngwWEhSY2RGeDBYSFF2THlCdWJ5QjFjR1JoZEdVZ1lYWmhhV3hoWW14bFhHNGdYSFJjZEZ4MFhIUmNkSEpsYzI5c2RtVW9LVHRjYmlCY2RGeDBYSFJjZEgwZ1pXeHpaU0JwWmlBb2NtVnhkV1Z6ZEM1emRHRjBkWE1nSVQwOUlESXdNQ0FtSmlCeVpYRjFaWE4wTG5OMFlYUjFjeUFoUFQwZ016QTBLU0I3WEc0Z1hIUmNkRngwWEhSY2RDOHZJRzkwYUdWeUlHWmhhV3gxY21WY2JpQmNkRngwWEhSY2RGeDBjbVZxWldOMEtHNWxkeUJGY25KdmNpaGNJazFoYm1sbVpYTjBJSEpsY1hWbGMzUWdkRzhnWENJZ0t5QnlaWEYxWlhOMFVHRjBhQ0FySUZ3aUlHWmhhV3hsWkM1Y0lpa3BPMXh1SUZ4MFhIUmNkRngwZlNCbGJITmxJSHRjYmlCY2RGeDBYSFJjZEZ4MEx5OGdjM1ZqWTJWemMxeHVJRngwWEhSY2RGeDBYSFIwY25rZ2UxeHVJRngwWEhSY2RGeDBYSFJjZEhaaGNpQjFjR1JoZEdVZ1BTQktVMDlPTG5CaGNuTmxLSEpsY1hWbGMzUXVjbVZ6Y0c5dWMyVlVaWGgwS1R0Y2JpQmNkRngwWEhSY2RGeDBmU0JqWVhSamFDQW9aU2tnZTF4dUlGeDBYSFJjZEZ4MFhIUmNkSEpsYW1WamRDaGxLVHRjYmlCY2RGeDBYSFJjZEZ4MFhIUnlaWFIxY200N1hHNGdYSFJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEZ4MGNtVnpiMngyWlNoMWNHUmhkR1VwTzF4dUlGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RIMDdYRzRnWEhSY2RIMHBPMXh1SUZ4MGZWeHVYRzRnWEhSMllYSWdhRzkwUVhCd2JIbFBibFZ3WkdGMFpTQTlJSFJ5ZFdVN1hHNGdYSFIyWVhJZ2FHOTBRM1Z5Y21WdWRFaGhjMmdnUFNCY0lqY3lNakEyTVRVMlpqYzROVFZtTjJWaE1HUTRYQ0k3SUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFd4cGJtVWdibTh0ZFc1MWMyVmtMWFpoY25OY2JpQmNkSFpoY2lCb2IzUlNaWEYxWlhOMFZHbHRaVzkxZENBOUlERXdNREF3TzF4dUlGeDBkbUZ5SUdodmRFTjFjbkpsYm5STmIyUjFiR1ZFWVhSaElEMGdlMzA3WEc0Z1hIUjJZWElnYUc5MFEzVnljbVZ1ZEVOb2FXeGtUVzlrZFd4bE95QXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXNhVzVsSUc1dkxYVnVkWE5sWkMxMllYSnpYRzRnWEhSMllYSWdhRzkwUTNWeWNtVnVkRkJoY21WdWRITWdQU0JiWFRzZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJHbHVaU0J1YnkxMWJuVnpaV1F0ZG1GeWMxeHVJRngwZG1GeUlHaHZkRU4xY25KbGJuUlFZWEpsYm5SelZHVnRjQ0E5SUZ0ZE95QXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXNhVzVsSUc1dkxYVnVkWE5sWkMxMllYSnpYRzVjYmlCY2RDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTExYm5WelpXUXRkbUZ5YzF4dUlGeDBablZ1WTNScGIyNGdhRzkwUTNKbFlYUmxVbVZ4ZFdseVpTaHRiMlIxYkdWSlpDa2dlMXh1SUZ4MFhIUjJZWElnYldVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hUdGNiaUJjZEZ4MGFXWWdLQ0Z0WlNrZ2NtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4N1hHNGdYSFJjZEhaaGNpQm1iaUE5SUdaMWJtTjBhVzl1S0hKbGNYVmxjM1FwSUh0Y2JpQmNkRngwWEhScFppQW9iV1V1YUc5MExtRmpkR2wyWlNrZ2UxeHVJRngwWEhSY2RGeDBhV1lnS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iY21WeGRXVnpkRjBwSUh0Y2JpQmNkRngwWEhSY2RGeDBhV1lnS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iY21WeGRXVnpkRjB1Y0dGeVpXNTBjeTVwYm1SbGVFOW1LRzF2WkhWc1pVbGtLU0E5UFQwZ0xURXBJSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUnBibk4wWVd4c1pXUk5iMlIxYkdWelczSmxjWFZsYzNSZExuQmhjbVZ1ZEhNdWNIVnphQ2h0YjJSMWJHVkpaQ2s3WEc0Z1hIUmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUmNkSDBnWld4elpTQjdYRzRnWEhSY2RGeDBYSFJjZEdodmRFTjFjbkpsYm5SUVlYSmxiblJ6SUQwZ1cyMXZaSFZzWlVsa1hUdGNiaUJjZEZ4MFhIUmNkRngwYUc5MFEzVnljbVZ1ZEVOb2FXeGtUVzlrZFd4bElEMGdjbVZ4ZFdWemREdGNiaUJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEdsbUlDaHRaUzVqYUdsc1pISmxiaTVwYm1SbGVFOW1LSEpsY1hWbGMzUXBJRDA5UFNBdE1Ta2dlMXh1SUZ4MFhIUmNkRngwWEhSdFpTNWphR2xzWkhKbGJpNXdkWE5vS0hKbGNYVmxjM1FwTzF4dUlGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RIMGdaV3h6WlNCN1hHNGdYSFJjZEZ4MFhIUmpiMjV6YjJ4bExuZGhjbTRvWEc0Z1hIUmNkRngwWEhSY2RGd2lXMGhOVWwwZ2RXNWxlSEJsWTNSbFpDQnlaWEYxYVhKbEtGd2lJQ3RjYmlCY2RGeDBYSFJjZEZ4MFhIUnlaWEYxWlhOMElDdGNiaUJjZEZ4MFhIUmNkRngwWEhSY0lpa2dabkp2YlNCa2FYTndiM05sWkNCdGIyUjFiR1VnWENJZ0sxeHVJRngwWEhSY2RGeDBYSFJjZEcxdlpIVnNaVWxrWEc0Z1hIUmNkRngwWEhRcE8xeHVJRngwWEhSY2RGeDBhRzkwUTNWeWNtVnVkRkJoY21WdWRITWdQU0JiWFR0Y2JpQmNkRngwWEhSOVhHNGdYSFJjZEZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2NtVnhkV1Z6ZENrN1hHNGdYSFJjZEgwN1hHNGdYSFJjZEhaaGNpQlBZbXBsWTNSR1lXTjBiM0o1SUQwZ1puVnVZM1JwYjI0Z1QySnFaV04wUm1GamRHOXllU2h1WVcxbEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlIdGNiaUJjZEZ4MFhIUmNkR052Ym1acFozVnlZV0pzWlRvZ2RISjFaU3hjYmlCY2RGeDBYSFJjZEdWdWRXMWxjbUZpYkdVNklIUnlkV1VzWEc0Z1hIUmNkRngwWEhSblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dUlGeDBYSFJjZEZ4MFhIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlgxdHVZVzFsWFR0Y2JpQmNkRngwWEhSY2RIMHNYRzRnWEhSY2RGeDBYSFJ6WlhRNklHWjFibU4wYVc5dUtIWmhiSFZsS1NCN1hHNGdYSFJjZEZ4MFhIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTliYm1GdFpWMGdQU0IyWVd4MVpUdGNiaUJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFI5TzF4dUlGeDBYSFI5TzF4dUlGeDBYSFJtYjNJZ0tIWmhjaUJ1WVcxbElHbHVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwSUh0Y2JpQmNkRngwWEhScFppQW9YRzRnWEhSY2RGeDBYSFJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHl3Z2JtRnRaU2tnSmlaY2JpQmNkRngwWEhSY2RHNWhiV1VnSVQwOUlGd2laVndpWEc0Z1hIUmNkRngwS1NCN1hHNGdYSFJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWm00c0lHNWhiV1VzSUU5aWFtVmpkRVpoWTNSdmNua29ibUZ0WlNrcE8xeHVJRngwWEhSY2RIMWNiaUJjZEZ4MGZWeHVJRngwWEhSbWJpNWxJRDBnWm5WdVkzUnBiMjRvWTJoMWJtdEpaQ2tnZTF4dUlGeDBYSFJjZEdsbUlDaG9iM1JUZEdGMGRYTWdQVDA5SUZ3aWNtVmhaSGxjSWlrZ2FHOTBVMlYwVTNSaGRIVnpLRndpY0hKbGNHRnlaVndpS1R0Y2JpQmNkRngwWEhSb2IzUkRhSFZ1YTNOTWIyRmthVzVuS3lzN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpTaGphSFZ1YTBsa0tTNTBhR1Z1S0dacGJtbHphRU5vZFc1clRHOWhaR2x1Wnl3Z1puVnVZM1JwYjI0b1pYSnlLU0I3WEc0Z1hIUmNkRngwWEhSbWFXNXBjMmhEYUhWdWEweHZZV1JwYm1jb0tUdGNiaUJjZEZ4MFhIUmNkSFJvY205M0lHVnljanRjYmlCY2RGeDBYSFI5S1R0Y2JseHVJRngwWEhSY2RHWjFibU4wYVc5dUlHWnBibWx6YUVOb2RXNXJURzloWkdsdVp5Z3BJSHRjYmlCY2RGeDBYSFJjZEdodmRFTm9kVzVyYzB4dllXUnBibWN0TFR0Y2JpQmNkRngwWEhSY2RHbG1JQ2hvYjNSVGRHRjBkWE1nUFQwOUlGd2ljSEpsY0dGeVpWd2lLU0I3WEc0Z1hIUmNkRngwWEhSY2RHbG1JQ2doYUc5MFYyRnBkR2x1WjBacGJHVnpUV0Z3VzJOb2RXNXJTV1JkS1NCN1hHNGdYSFJjZEZ4MFhIUmNkRngwYUc5MFJXNXpkWEpsVlhCa1lYUmxRMmgxYm1zb1kyaDFibXRKWkNrN1hHNGdYSFJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEZ4MGFXWWdLR2h2ZEVOb2RXNXJjMHh2WVdScGJtY2dQVDA5SURBZ0ppWWdhRzkwVjJGcGRHbHVaMFpwYkdWeklEMDlQU0F3S1NCN1hHNGdYSFJjZEZ4MFhIUmNkRngwYUc5MFZYQmtZWFJsUkc5M2JteHZZV1JsWkNncE8xeHVJRngwWEhSY2RGeDBYSFI5WEc0Z1hIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MGZWeHVJRngwWEhSOU8xeHVJRngwWEhSeVpYUjFjbTRnWm00N1hHNGdYSFI5WEc1Y2JpQmNkQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J1YnkxMWJuVnpaV1F0ZG1GeWMxeHVJRngwWm5WdVkzUnBiMjRnYUc5MFEzSmxZWFJsVFc5a2RXeGxLRzF2WkhWc1pVbGtLU0I3WEc0Z1hIUmNkSFpoY2lCb2IzUWdQU0I3WEc0Z1hIUmNkRngwTHk4Z2NISnBkbUYwWlNCemRIVm1abHh1SUZ4MFhIUmNkRjloWTJObGNIUmxaRVJsY0dWdVpHVnVZMmxsY3pvZ2UzMHNYRzRnWEhSY2RGeDBYMlJsWTJ4cGJtVmtSR1Z3Wlc1a1pXNWphV1Z6T2lCN2ZTeGNiaUJjZEZ4MFhIUmZjMlZzWmtGalkyVndkR1ZrT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJmYzJWc1prUmxZMnhwYm1Wa09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSZlpHbHpjRzl6WlVoaGJtUnNaWEp6T2lCYlhTeGNiaUJjZEZ4MFhIUmZiV0ZwYmpvZ2FHOTBRM1Z5Y21WdWRFTm9hV3hrVFc5a2RXeGxJQ0U5UFNCdGIyUjFiR1ZKWkN4Y2JseHVJRngwWEhSY2RDOHZJRTF2WkhWc1pTQkJVRWxjYmlCY2RGeDBYSFJoWTNScGRtVTZJSFJ5ZFdVc1hHNGdYSFJjZEZ4MFlXTmpaWEIwT2lCbWRXNWpkR2x2Ymloa1pYQXNJR05oYkd4aVlXTnJLU0I3WEc0Z1hIUmNkRngwWEhScFppQW9kSGx3Wlc5bUlHUmxjQ0E5UFQwZ1hDSjFibVJsWm1sdVpXUmNJaWtnYUc5MExsOXpaV3htUVdOalpYQjBaV1FnUFNCMGNuVmxPMXh1SUZ4MFhIUmNkRngwWld4elpTQnBaaUFvZEhsd1pXOW1JR1JsY0NBOVBUMGdYQ0ptZFc1amRHbHZibHdpS1NCb2IzUXVYM05sYkdaQlkyTmxjSFJsWkNBOUlHUmxjRHRjYmlCY2RGeDBYSFJjZEdWc2MyVWdhV1lnS0hSNWNHVnZaaUJrWlhBZ1BUMDlJRndpYjJKcVpXTjBYQ0lwWEc0Z1hIUmNkRngwWEhSY2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2daR1Z3TG14bGJtZDBhRHNnYVNzcktWeHVJRngwWEhSY2RGeDBYSFJjZEdodmRDNWZZV05qWlhCMFpXUkVaWEJsYm1SbGJtTnBaWE5iWkdWd1cybGRYU0E5SUdOaGJHeGlZV05ySUh4OElHWjFibU4wYVc5dUtDa2dlMzA3WEc0Z1hIUmNkRngwWEhSbGJITmxJR2h2ZEM1ZllXTmpaWEIwWldSRVpYQmxibVJsYm1OcFpYTmJaR1Z3WFNBOUlHTmhiR3hpWVdOcklIeDhJR1oxYm1OMGFXOXVLQ2tnZTMwN1hHNGdYSFJjZEZ4MGZTeGNiaUJjZEZ4MFhIUmtaV05zYVc1bE9pQm1kVzVqZEdsdmJpaGtaWEFwSUh0Y2JpQmNkRngwWEhSY2RHbG1JQ2gwZVhCbGIyWWdaR1Z3SUQwOVBTQmNJblZ1WkdWbWFXNWxaRndpS1NCb2IzUXVYM05sYkdaRVpXTnNhVzVsWkNBOUlIUnlkV1U3WEc0Z1hIUmNkRngwWEhSbGJITmxJR2xtSUNoMGVYQmxiMllnWkdWd0lEMDlQU0JjSW05aWFtVmpkRndpS1Z4dUlGeDBYSFJjZEZ4MFhIUm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR1JsY0M1c1pXNW5kR2c3SUdrckt5bGNiaUJjZEZ4MFhIUmNkRngwWEhSb2IzUXVYMlJsWTJ4cGJtVmtSR1Z3Wlc1a1pXNWphV1Z6VzJSbGNGdHBYVjBnUFNCMGNuVmxPMXh1SUZ4MFhIUmNkRngwWld4elpTQm9iM1F1WDJSbFkyeHBibVZrUkdWd1pXNWtaVzVqYVdWelcyUmxjRjBnUFNCMGNuVmxPMXh1SUZ4MFhIUmNkSDBzWEc0Z1hIUmNkRngwWkdsemNHOXpaVG9nWm5WdVkzUnBiMjRvWTJGc2JHSmhZMnNwSUh0Y2JpQmNkRngwWEhSY2RHaHZkQzVmWkdsemNHOXpaVWhoYm1Sc1pYSnpMbkIxYzJnb1kyRnNiR0poWTJzcE8xeHVJRngwWEhSY2RIMHNYRzRnWEhSY2RGeDBZV1JrUkdsemNHOXpaVWhoYm1Sc1pYSTZJR1oxYm1OMGFXOXVLR05oYkd4aVlXTnJLU0I3WEc0Z1hIUmNkRngwWEhSb2IzUXVYMlJwYzNCdmMyVklZVzVrYkdWeWN5NXdkWE5vS0dOaGJHeGlZV05yS1R0Y2JpQmNkRngwWEhSOUxGeHVJRngwWEhSY2RISmxiVzkyWlVScGMzQnZjMlZJWVc1a2JHVnlPaUJtZFc1amRHbHZiaWhqWVd4c1ltRmpheWtnZTF4dUlGeDBYSFJjZEZ4MGRtRnlJR2xrZUNBOUlHaHZkQzVmWkdsemNHOXpaVWhoYm1Sc1pYSnpMbWx1WkdWNFQyWW9ZMkZzYkdKaFkyc3BPMXh1SUZ4MFhIUmNkRngwYVdZZ0tHbGtlQ0ErUFNBd0tTQm9iM1F1WDJScGMzQnZjMlZJWVc1a2JHVnljeTV6Y0d4cFkyVW9hV1I0TENBeEtUdGNiaUJjZEZ4MFhIUjlMRnh1WEc0Z1hIUmNkRngwTHk4Z1RXRnVZV2RsYldWdWRDQkJVRWxjYmlCY2RGeDBYSFJqYUdWamF6b2dhRzkwUTJobFkyc3NYRzRnWEhSY2RGeDBZWEJ3YkhrNklHaHZkRUZ3Y0d4NUxGeHVJRngwWEhSY2RITjBZWFIxY3pvZ1puVnVZM1JwYjI0b2JDa2dlMXh1SUZ4MFhIUmNkRngwYVdZZ0tDRnNLU0J5WlhSMWNtNGdhRzkwVTNSaGRIVnpPMXh1SUZ4MFhIUmNkRngwYUc5MFUzUmhkSFZ6U0dGdVpHeGxjbk11Y0hWemFDaHNLVHRjYmlCY2RGeDBYSFI5TEZ4dUlGeDBYSFJjZEdGa1pGTjBZWFIxYzBoaGJtUnNaWEk2SUdaMWJtTjBhVzl1S0d3cElIdGNiaUJjZEZ4MFhIUmNkR2h2ZEZOMFlYUjFjMGhoYm1Sc1pYSnpMbkIxYzJnb2JDazdYRzRnWEhSY2RGeDBmU3hjYmlCY2RGeDBYSFJ5WlcxdmRtVlRkR0YwZFhOSVlXNWtiR1Z5T2lCbWRXNWpkR2x2Ymloc0tTQjdYRzRnWEhSY2RGeDBYSFIyWVhJZ2FXUjRJRDBnYUc5MFUzUmhkSFZ6U0dGdVpHeGxjbk11YVc1a1pYaFBaaWhzS1R0Y2JpQmNkRngwWEhSY2RHbG1JQ2hwWkhnZ1BqMGdNQ2tnYUc5MFUzUmhkSFZ6U0dGdVpHeGxjbk11YzNCc2FXTmxLR2xrZUN3Z01TazdYRzRnWEhSY2RGeDBmU3hjYmx4dUlGeDBYSFJjZEM4dmFXNW9aWEpwZENCbWNtOXRJSEJ5WlhacGIzVnpJR1JwYzNCdmMyVWdZMkZzYkZ4dUlGeDBYSFJjZEdSaGRHRTZJR2h2ZEVOMWNuSmxiblJOYjJSMWJHVkVZWFJoVzIxdlpIVnNaVWxrWFZ4dUlGeDBYSFI5TzF4dUlGeDBYSFJvYjNSRGRYSnlaVzUwUTJocGJHUk5iMlIxYkdVZ1BTQjFibVJsWm1sdVpXUTdYRzRnWEhSY2RISmxkSFZ5YmlCb2IzUTdYRzRnWEhSOVhHNWNiaUJjZEhaaGNpQm9iM1JUZEdGMGRYTklZVzVrYkdWeWN5QTlJRnRkTzF4dUlGeDBkbUZ5SUdodmRGTjBZWFIxY3lBOUlGd2lhV1JzWlZ3aU8xeHVYRzRnWEhSbWRXNWpkR2x2YmlCb2IzUlRaWFJUZEdGMGRYTW9ibVYzVTNSaGRIVnpLU0I3WEc0Z1hIUmNkR2h2ZEZOMFlYUjFjeUE5SUc1bGQxTjBZWFIxY3p0Y2JpQmNkRngwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCb2IzUlRkR0YwZFhOSVlXNWtiR1Z5Y3k1c1pXNW5kR2c3SUdrckt5bGNiaUJjZEZ4MFhIUm9iM1JUZEdGMGRYTklZVzVrYkdWeWMxdHBYUzVqWVd4c0tHNTFiR3dzSUc1bGQxTjBZWFIxY3lrN1hHNGdYSFI5WEc1Y2JpQmNkQzh2SUhkb2FXeGxJR1J2ZDI1c2IyRmthVzVuWEc0Z1hIUjJZWElnYUc5MFYyRnBkR2x1WjBacGJHVnpJRDBnTUR0Y2JpQmNkSFpoY2lCb2IzUkRhSFZ1YTNOTWIyRmthVzVuSUQwZ01EdGNiaUJjZEhaaGNpQm9iM1JYWVdsMGFXNW5SbWxzWlhOTllYQWdQU0I3ZlR0Y2JpQmNkSFpoY2lCb2IzUlNaWEYxWlhOMFpXUkdhV3hsYzAxaGNDQTlJSHQ5TzF4dUlGeDBkbUZ5SUdodmRFRjJZV2xzWVdKc1pVWnBiR1Z6VFdGd0lEMGdlMzA3WEc0Z1hIUjJZWElnYUc5MFJHVm1aWEp5WldRN1hHNWNiaUJjZEM4dklGUm9aU0IxY0dSaGRHVWdhVzVtYjF4dUlGeDBkbUZ5SUdodmRGVndaR0YwWlN3Z2FHOTBWWEJrWVhSbFRtVjNTR0Z6YUR0Y2JseHVJRngwWm5WdVkzUnBiMjRnZEc5TmIyUjFiR1ZKWkNocFpDa2dlMXh1SUZ4MFhIUjJZWElnYVhOT2RXMWlaWElnUFNBcmFXUWdLeUJjSWx3aUlEMDlQU0JwWkR0Y2JpQmNkRngwY21WMGRYSnVJR2x6VG5WdFltVnlJRDhnSzJsa0lEb2dhV1E3WEc0Z1hIUjlYRzVjYmlCY2RHWjFibU4wYVc5dUlHaHZkRU5vWldOcktHRndjR3g1S1NCN1hHNGdYSFJjZEdsbUlDaG9iM1JUZEdGMGRYTWdJVDA5SUZ3aWFXUnNaVndpS1NCN1hHNGdYSFJjZEZ4MGRHaHliM2NnYm1WM0lFVnljbTl5S0Z3aVkyaGxZMnNvS1NCcGN5QnZibXg1SUdGc2JHOTNaV1FnYVc0Z2FXUnNaU0J6ZEdGMGRYTmNJaWs3WEc0Z1hIUmNkSDFjYmlCY2RGeDBhRzkwUVhCd2JIbFBibFZ3WkdGMFpTQTlJR0Z3Y0d4NU8xeHVJRngwWEhSb2IzUlRaWFJUZEdGMGRYTW9YQ0pqYUdWamExd2lLVHRjYmlCY2RGeDBjbVYwZFhKdUlHaHZkRVJ2ZDI1c2IyRmtUV0Z1YVdabGMzUW9hRzkwVW1WeGRXVnpkRlJwYldWdmRYUXBMblJvWlc0b1puVnVZM1JwYjI0b2RYQmtZWFJsS1NCN1hHNGdYSFJjZEZ4MGFXWWdLQ0YxY0dSaGRHVXBJSHRjYmlCY2RGeDBYSFJjZEdodmRGTmxkRk4wWVhSMWN5aGNJbWxrYkdWY0lpazdYRzRnWEhSY2RGeDBYSFJ5WlhSMWNtNGdiblZzYkR0Y2JpQmNkRngwWEhSOVhHNGdYSFJjZEZ4MGFHOTBVbVZ4ZFdWemRHVmtSbWxzWlhOTllYQWdQU0I3ZlR0Y2JpQmNkRngwWEhSb2IzUlhZV2wwYVc1blJtbHNaWE5OWVhBZ1BTQjdmVHRjYmlCY2RGeDBYSFJvYjNSQmRtRnBiR0ZpYkdWR2FXeGxjMDFoY0NBOUlIVndaR0YwWlM1ak8xeHVJRngwWEhSY2RHaHZkRlZ3WkdGMFpVNWxkMGhoYzJnZ1BTQjFjR1JoZEdVdWFEdGNibHh1SUZ4MFhIUmNkR2h2ZEZObGRGTjBZWFIxY3loY0luQnlaWEJoY21WY0lpazdYRzRnWEhSY2RGeDBkbUZ5SUhCeWIyMXBjMlVnUFNCdVpYY2dVSEp2YldselpTaG1kVzVqZEdsdmJpaHlaWE52YkhabExDQnlaV3BsWTNRcElIdGNiaUJjZEZ4MFhIUmNkR2h2ZEVSbFptVnljbVZrSUQwZ2UxeHVJRngwWEhSY2RGeDBYSFJ5WlhOdmJIWmxPaUJ5WlhOdmJIWmxMRnh1SUZ4MFhIUmNkRngwWEhSeVpXcGxZM1E2SUhKbGFtVmpkRnh1SUZ4MFhIUmNkRngwZlR0Y2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MFhIUm9iM1JWY0dSaGRHVWdQU0I3ZlR0Y2JpQmNkRngwWEhSMllYSWdZMmgxYm10SlpDQTlJRndpWVhCd1hDSTdYRzRnWEhSY2RGeDBlMXh1SUZ4MFhIUmNkRngwTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTFzYjI1bExXSnNiMk5yYzF4dUlGeDBYSFJjZEZ4MEx5cG5iRzlpWVd4eklHTm9kVzVyU1dRZ0tpOWNiaUJjZEZ4MFhIUmNkR2h2ZEVWdWMzVnlaVlZ3WkdGMFpVTm9kVzVyS0dOb2RXNXJTV1FwTzF4dUlGeDBYSFJjZEgxY2JpQmNkRngwWEhScFppQW9YRzRnWEhSY2RGeDBYSFJvYjNSVGRHRjBkWE1nUFQwOUlGd2ljSEpsY0dGeVpWd2lJQ1ltWEc0Z1hIUmNkRngwWEhSb2IzUkRhSFZ1YTNOTWIyRmthVzVuSUQwOVBTQXdJQ1ltWEc0Z1hIUmNkRngwWEhSb2IzUlhZV2wwYVc1blJtbHNaWE1nUFQwOUlEQmNiaUJjZEZ4MFhIUXBJSHRjYmlCY2RGeDBYSFJjZEdodmRGVndaR0YwWlVSdmQyNXNiMkZrWldRb0tUdGNiaUJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBjbVYwZFhKdUlIQnliMjFwYzJVN1hHNGdYSFJjZEgwcE8xeHVJRngwZlZ4dVhHNGdYSFF2THlCbGMyeHBiblF0WkdsellXSnNaUzF1WlhoMExXeHBibVVnYm04dGRXNTFjMlZrTFhaaGNuTmNiaUJjZEdaMWJtTjBhVzl1SUdodmRFRmtaRlZ3WkdGMFpVTm9kVzVyS0dOb2RXNXJTV1FzSUcxdmNtVk5iMlIxYkdWektTQjdYRzRnWEhSY2RHbG1JQ2doYUc5MFFYWmhhV3hoWW14bFJtbHNaWE5OWVhCYlkyaDFibXRKWkYwZ2ZId2dJV2h2ZEZKbGNYVmxjM1JsWkVacGJHVnpUV0Z3VzJOb2RXNXJTV1JkS1Z4dUlGeDBYSFJjZEhKbGRIVnlianRjYmlCY2RGeDBhRzkwVW1WeGRXVnpkR1ZrUm1sc1pYTk5ZWEJiWTJoMWJtdEpaRjBnUFNCbVlXeHpaVHRjYmlCY2RGeDBabTl5SUNoMllYSWdiVzlrZFd4bFNXUWdhVzRnYlc5eVpVMXZaSFZzWlhNcElIdGNiaUJjZEZ4MFhIUnBaaUFvVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0cxdmNtVk5iMlIxYkdWekxDQnRiMlIxYkdWSlpDa3BJSHRjYmlCY2RGeDBYSFJjZEdodmRGVndaR0YwWlZ0dGIyUjFiR1ZKWkYwZ1BTQnRiM0psVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjA3WEc0Z1hIUmNkRngwZlZ4dUlGeDBYSFI5WEc0Z1hIUmNkR2xtSUNndExXaHZkRmRoYVhScGJtZEdhV3hsY3lBOVBUMGdNQ0FtSmlCb2IzUkRhSFZ1YTNOTWIyRmthVzVuSUQwOVBTQXdLU0I3WEc0Z1hIUmNkRngwYUc5MFZYQmtZWFJsUkc5M2JteHZZV1JsWkNncE8xeHVJRngwWEhSOVhHNGdYSFI5WEc1Y2JpQmNkR1oxYm1OMGFXOXVJR2h2ZEVWdWMzVnlaVlZ3WkdGMFpVTm9kVzVyS0dOb2RXNXJTV1FwSUh0Y2JpQmNkRngwYVdZZ0tDRm9iM1JCZG1GcGJHRmliR1ZHYVd4bGMwMWhjRnRqYUhWdWEwbGtYU2tnZTF4dUlGeDBYSFJjZEdodmRGZGhhWFJwYm1kR2FXeGxjMDFoY0Z0amFIVnVhMGxrWFNBOUlIUnlkV1U3WEc0Z1hIUmNkSDBnWld4elpTQjdYRzRnWEhSY2RGeDBhRzkwVW1WeGRXVnpkR1ZrUm1sc1pYTk5ZWEJiWTJoMWJtdEpaRjBnUFNCMGNuVmxPMXh1SUZ4MFhIUmNkR2h2ZEZkaGFYUnBibWRHYVd4bGN5c3JPMXh1SUZ4MFhIUmNkR2h2ZEVSdmQyNXNiMkZrVlhCa1lYUmxRMmgxYm1zb1kyaDFibXRKWkNrN1hHNGdYSFJjZEgxY2JpQmNkSDFjYmx4dUlGeDBablZ1WTNScGIyNGdhRzkwVlhCa1lYUmxSRzkzYm14dllXUmxaQ2dwSUh0Y2JpQmNkRngwYUc5MFUyVjBVM1JoZEhWektGd2ljbVZoWkhsY0lpazdYRzRnWEhSY2RIWmhjaUJrWldabGNuSmxaQ0E5SUdodmRFUmxabVZ5Y21Wa08xeHVJRngwWEhSb2IzUkVaV1psY25KbFpDQTlJRzUxYkd3N1hHNGdYSFJjZEdsbUlDZ2haR1ZtWlhKeVpXUXBJSEpsZEhWeWJqdGNiaUJjZEZ4MGFXWWdLR2h2ZEVGd2NHeDVUMjVWY0dSaGRHVXBJSHRjYmlCY2RGeDBYSFF2THlCWGNtRndJR1JsWm1WeWNtVmtJRzlpYW1WamRDQnBiaUJRY205dGFYTmxJSFJ2SUcxaGNtc2dhWFFnWVhNZ1lTQjNaV3hzTFdoaGJtUnNaV1FnVUhKdmJXbHpaU0IwYjF4dUlGeDBYSFJjZEM4dklHRjJiMmxrSUhSeWFXZG5aWEpwYm1jZ2RXNWpZWFZuYUhRZ1pYaGpaWEIwYVc5dUlIZGhjbTVwYm1jZ2FXNGdRMmh5YjIxbExseHVJRngwWEhSY2RDOHZJRk5sWlNCb2RIUndjem92TDJKMVozTXVZMmh5YjIxcGRXMHViM0puTDNBdlkyaHliMjFwZFcwdmFYTnpkV1Z6TDJSbGRHRnBiRDlwWkQwME5qVTJOalpjYmlCY2RGeDBYSFJRY205dGFYTmxMbkpsYzI5c2RtVW9LVnh1SUZ4MFhIUmNkRngwTG5Sb1pXNG9ablZ1WTNScGIyNG9LU0I3WEc0Z1hIUmNkRngwWEhSY2RISmxkSFZ5YmlCb2IzUkJjSEJzZVNob2IzUkJjSEJzZVU5dVZYQmtZWFJsS1R0Y2JpQmNkRngwWEhSY2RIMHBYRzRnWEhSY2RGeDBYSFF1ZEdobGJpaGNiaUJjZEZ4MFhIUmNkRngwWm5WdVkzUnBiMjRvY21WemRXeDBLU0I3WEc0Z1hIUmNkRngwWEhSY2RGeDBaR1ZtWlhKeVpXUXVjbVZ6YjJ4MlpTaHlaWE4xYkhRcE8xeHVJRngwWEhSY2RGeDBYSFI5TEZ4dUlGeDBYSFJjZEZ4MFhIUm1kVzVqZEdsdmJpaGxjbklwSUh0Y2JpQmNkRngwWEhSY2RGeDBYSFJrWldabGNuSmxaQzV5WldwbFkzUW9aWEp5S1R0Y2JpQmNkRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwS1R0Y2JpQmNkRngwZlNCbGJITmxJSHRjYmlCY2RGeDBYSFIyWVhJZ2IzVjBaR0YwWldSTmIyUjFiR1Z6SUQwZ1cxMDdYRzRnWEhSY2RGeDBabTl5SUNoMllYSWdhV1FnYVc0Z2FHOTBWWEJrWVhSbEtTQjdYRzRnWEhSY2RGeDBYSFJwWmlBb1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHaHZkRlZ3WkdGMFpTd2dhV1FwS1NCN1hHNGdYSFJjZEZ4MFhIUmNkRzkxZEdSaGRHVmtUVzlrZFd4bGN5NXdkWE5vS0hSdlRXOWtkV3hsU1dRb2FXUXBLVHRjYmlCY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSOVhHNGdYSFJjZEZ4MFpHVm1aWEp5WldRdWNtVnpiMngyWlNodmRYUmtZWFJsWkUxdlpIVnNaWE1wTzF4dUlGeDBYSFI5WEc0Z1hIUjlYRzVjYmlCY2RHWjFibU4wYVc5dUlHaHZkRUZ3Y0d4NUtHOXdkR2x2Ym5NcElIdGNiaUJjZEZ4MGFXWWdLR2h2ZEZOMFlYUjFjeUFoUFQwZ1hDSnlaV0ZrZVZ3aUtWeHVJRngwWEhSY2RIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0ltRndjR3g1S0NrZ2FYTWdiMjVzZVNCaGJHeHZkMlZrSUdsdUlISmxZV1I1SUhOMFlYUjFjMXdpS1R0Y2JpQmNkRngwYjNCMGFXOXVjeUE5SUc5d2RHbHZibk1nZkh3Z2UzMDdYRzVjYmlCY2RGeDBkbUZ5SUdOaU8xeHVJRngwWEhSMllYSWdhVHRjYmlCY2RGeDBkbUZ5SUdvN1hHNGdYSFJjZEhaaGNpQnRiMlIxYkdVN1hHNGdYSFJjZEhaaGNpQnRiMlIxYkdWSlpEdGNibHh1SUZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJCWm1abFkzUmxaRk4wZFdabUtIVndaR0YwWlUxdlpIVnNaVWxrS1NCN1hHNGdYSFJjZEZ4MGRtRnlJRzkxZEdSaGRHVmtUVzlrZFd4bGN5QTlJRnQxY0dSaGRHVk5iMlIxYkdWSlpGMDdYRzRnWEhSY2RGeDBkbUZ5SUc5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWeklEMGdlMzA3WEc1Y2JpQmNkRngwWEhSMllYSWdjWFZsZFdVZ1BTQnZkWFJrWVhSbFpFMXZaSFZzWlhNdWMyeHBZMlVvS1M1dFlYQW9ablZ1WTNScGIyNG9hV1FwSUh0Y2JpQmNkRngwWEhSY2RISmxkSFZ5YmlCN1hHNGdYSFJjZEZ4MFhIUmNkR05vWVdsdU9pQmJhV1JkTEZ4dUlGeDBYSFJjZEZ4MFhIUnBaRG9nYVdSY2JpQmNkRngwWEhSY2RIMDdYRzRnWEhSY2RGeDBmU2s3WEc0Z1hIUmNkRngwZDJocGJHVWdLSEYxWlhWbExteGxibWQwYUNBK0lEQXBJSHRjYmlCY2RGeDBYSFJjZEhaaGNpQnhkV1YxWlVsMFpXMGdQU0J4ZFdWMVpTNXdiM0FvS1R0Y2JpQmNkRngwWEhSY2RIWmhjaUJ0YjJSMWJHVkpaQ0E5SUhGMVpYVmxTWFJsYlM1cFpEdGNiaUJjZEZ4MFhIUmNkSFpoY2lCamFHRnBiaUE5SUhGMVpYVmxTWFJsYlM1amFHRnBianRjYmlCY2RGeDBYSFJjZEcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTzF4dUlGeDBYSFJjZEZ4MGFXWWdLQ0Z0YjJSMWJHVWdmSHdnYlc5a2RXeGxMbWh2ZEM1ZmMyVnNaa0ZqWTJWd2RHVmtLU0JqYjI1MGFXNTFaVHRjYmlCY2RGeDBYSFJjZEdsbUlDaHRiMlIxYkdVdWFHOTBMbDl6Wld4bVJHVmpiR2x1WldRcElIdGNiaUJjZEZ4MFhIUmNkRngwY21WMGRYSnVJSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUjBlWEJsT2lCY0luTmxiR1l0WkdWamJHbHVaV1JjSWl4Y2JpQmNkRngwWEhSY2RGeDBYSFJqYUdGcGJqb2dZMmhoYVc0c1hHNGdYSFJjZEZ4MFhIUmNkRngwYlc5a2RXeGxTV1E2SUcxdlpIVnNaVWxrWEc0Z1hIUmNkRngwWEhSY2RIMDdYRzRnWEhSY2RGeDBYSFI5WEc0Z1hIUmNkRngwWEhScFppQW9iVzlrZFd4bExtaHZkQzVmYldGcGJpa2dlMXh1SUZ4MFhIUmNkRngwWEhSeVpYUjFjbTRnZTF4dUlGeDBYSFJjZEZ4MFhIUmNkSFI1Y0dVNklGd2lkVzVoWTJObGNIUmxaRndpTEZ4dUlGeDBYSFJjZEZ4MFhIUmNkR05vWVdsdU9pQmphR0ZwYml4Y2JpQmNkRngwWEhSY2RGeDBYSFJ0YjJSMWJHVkpaRG9nYlc5a2RXeGxTV1JjYmlCY2RGeDBYSFJjZEZ4MGZUdGNiaUJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2JXOWtkV3hsTG5CaGNtVnVkSE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUJjZEZ4MFhIUmNkRngwZG1GeUlIQmhjbVZ1ZEVsa0lEMGdiVzlrZFd4bExuQmhjbVZ1ZEhOYmFWMDdYRzRnWEhSY2RGeDBYSFJjZEhaaGNpQndZWEpsYm5RZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelczQmhjbVZ1ZEVsa1hUdGNiaUJjZEZ4MFhIUmNkRngwYVdZZ0tDRndZWEpsYm5RcElHTnZiblJwYm5WbE8xeHVJRngwWEhSY2RGeDBYSFJwWmlBb2NHRnlaVzUwTG1odmRDNWZaR1ZqYkdsdVpXUkVaWEJsYm1SbGJtTnBaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MFhIUmNkRngwY21WMGRYSnVJSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkSFI1Y0dVNklGd2laR1ZqYkdsdVpXUmNJaXhjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkR05vWVdsdU9pQmphR0ZwYmk1amIyNWpZWFFvVzNCaGNtVnVkRWxrWFNrc1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhSdGIyUjFiR1ZKWkRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhSd1lYSmxiblJKWkRvZ2NHRnlaVzUwU1dSY2JpQmNkRngwWEhSY2RGeDBYSFI5TzF4dUlGeDBYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBYSFJjZEdsbUlDaHZkWFJrWVhSbFpFMXZaSFZzWlhNdWFXNWtaWGhQWmlod1lYSmxiblJKWkNrZ0lUMDlJQzB4S1NCamIyNTBhVzUxWlR0Y2JpQmNkRngwWEhSY2RGeDBhV1lnS0hCaGNtVnVkQzVvYjNRdVgyRmpZMlZ3ZEdWa1JHVndaVzVrWlc1amFXVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEZ4MFhIUmNkR2xtSUNnaGIzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTmJjR0Z5Wlc1MFNXUmRLVnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBiM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE5iY0dGeVpXNTBTV1JkSUQwZ1cxMDdYRzRnWEhSY2RGeDBYSFJjZEZ4MFlXUmtRV3hzVkc5VFpYUW9iM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE5iY0dGeVpXNTBTV1JkTENCYmJXOWtkV3hsU1dSZEtUdGNiaUJjZEZ4MFhIUmNkRngwWEhSamIyNTBhVzUxWlR0Y2JpQmNkRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwWEhSa1pXeGxkR1VnYjNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhOYmNHRnlaVzUwU1dSZE8xeHVJRngwWEhSY2RGeDBYSFJ2ZFhSa1lYUmxaRTF2WkhWc1pYTXVjSFZ6YUNod1lYSmxiblJKWkNrN1hHNGdYSFJjZEZ4MFhIUmNkSEYxWlhWbExuQjFjMmdvZTF4dUlGeDBYSFJjZEZ4MFhIUmNkR05vWVdsdU9pQmphR0ZwYmk1amIyNWpZWFFvVzNCaGNtVnVkRWxrWFNrc1hHNGdYSFJjZEZ4MFhIUmNkRngwYVdRNklIQmhjbVZ1ZEVsa1hHNGdYSFJjZEZ4MFhIUmNkSDBwTzF4dUlGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RIMWNibHh1SUZ4MFhIUmNkSEpsZEhWeWJpQjdYRzRnWEhSY2RGeDBYSFIwZVhCbE9pQmNJbUZqWTJWd2RHVmtYQ0lzWEc0Z1hIUmNkRngwWEhSdGIyUjFiR1ZKWkRvZ2RYQmtZWFJsVFc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwWEhSdmRYUmtZWFJsWkUxdlpIVnNaWE02SUc5MWRHUmhkR1ZrVFc5a2RXeGxjeXhjYmlCY2RGeDBYSFJjZEc5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWek9pQnZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXh1SUZ4MFhIUmNkSDA3WEc0Z1hIUmNkSDFjYmx4dUlGeDBYSFJtZFc1amRHbHZiaUJoWkdSQmJHeFViMU5sZENoaExDQmlLU0I3WEc0Z1hIUmNkRngwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCaUxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z1hIUmNkRngwWEhSMllYSWdhWFJsYlNBOUlHSmJhVjA3WEc0Z1hIUmNkRngwWEhScFppQW9ZUzVwYm1SbGVFOW1LR2wwWlcwcElEMDlQU0F0TVNrZ1lTNXdkWE5vS0dsMFpXMHBPMXh1SUZ4MFhIUmNkSDFjYmlCY2RGeDBmVnh1WEc0Z1hIUmNkQzh2SUdGMElHSmxaMmx1SUdGc2JDQjFjR1JoZEdWeklHMXZaSFZzWlhNZ1lYSmxJRzkxZEdSaGRHVmtYRzRnWEhSY2RDOHZJSFJvWlNCY0ltOTFkR1JoZEdWa1hDSWdjM1JoZEhWeklHTmhiaUJ3Y205d1lXZGhkR1VnZEc4Z2NHRnlaVzUwY3lCcFppQjBhR1Y1SUdSdmJpZDBJR0ZqWTJWd2RDQjBhR1VnWTJocGJHUnlaVzVjYmlCY2RGeDBkbUZ5SUc5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWeklEMGdlMzA3WEc0Z1hIUmNkSFpoY2lCdmRYUmtZWFJsWkUxdlpIVnNaWE1nUFNCYlhUdGNiaUJjZEZ4MGRtRnlJR0Z3Y0d4cFpXUlZjR1JoZEdVZ1BTQjdmVHRjYmx4dUlGeDBYSFIyWVhJZ2QyRnlibFZ1Wlhod1pXTjBaV1JTWlhGMWFYSmxJRDBnWm5WdVkzUnBiMjRnZDJGeWJsVnVaWGh3WldOMFpXUlNaWEYxYVhKbEtDa2dlMXh1SUZ4MFhIUmNkR052Ym5OdmJHVXVkMkZ5YmloY2JpQmNkRngwWEhSY2RGd2lXMGhOVWwwZ2RXNWxlSEJsWTNSbFpDQnlaWEYxYVhKbEtGd2lJQ3NnY21WemRXeDBMbTF2WkhWc1pVbGtJQ3NnWENJcElIUnZJR1JwYzNCdmMyVmtJRzF2WkhWc1pWd2lYRzRnWEhSY2RGeDBLVHRjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFJtYjNJZ0tIWmhjaUJwWkNCcGJpQm9iM1JWY0dSaGRHVXBJSHRjYmlCY2RGeDBYSFJwWmlBb1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHaHZkRlZ3WkdGMFpTd2dhV1FwS1NCN1hHNGdYSFJjZEZ4MFhIUnRiMlIxYkdWSlpDQTlJSFJ2VFc5a2RXeGxTV1FvYVdRcE8xeHVJRngwWEhSY2RGeDBMeW9xSUVCMGVYQmxJSHRVVDBSUGZTQXFMMXh1SUZ4MFhIUmNkRngwZG1GeUlISmxjM1ZzZER0Y2JpQmNkRngwWEhSY2RHbG1JQ2hvYjNSVmNHUmhkR1ZiYVdSZEtTQjdYRzRnWEhSY2RGeDBYSFJjZEhKbGMzVnNkQ0E5SUdkbGRFRm1abVZqZEdWa1UzUjFabVlvYlc5a2RXeGxTV1FwTzF4dUlGeDBYSFJjZEZ4MGZTQmxiSE5sSUh0Y2JpQmNkRngwWEhSY2RGeDBjbVZ6ZFd4MElEMGdlMXh1SUZ4MFhIUmNkRngwWEhSY2RIUjVjR1U2SUZ3aVpHbHpjRzl6WldSY0lpeGNiaUJjZEZ4MFhIUmNkRngwWEhSdGIyUjFiR1ZKWkRvZ2FXUmNiaUJjZEZ4MFhIUmNkRngwZlR0Y2JpQmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUmNkQzhxS2lCQWRIbHdaU0I3UlhKeWIzSjhabUZzYzJWOUlDb3ZYRzRnWEhSY2RGeDBYSFIyWVhJZ1lXSnZjblJGY25KdmNpQTlJR1poYkhObE8xeHVJRngwWEhSY2RGeDBkbUZ5SUdSdlFYQndiSGtnUFNCbVlXeHpaVHRjYmlCY2RGeDBYSFJjZEhaaGNpQmtiMFJwYzNCdmMyVWdQU0JtWVd4elpUdGNiaUJjZEZ4MFhIUmNkSFpoY2lCamFHRnBia2x1Wm04Z1BTQmNJbHdpTzF4dUlGeDBYSFJjZEZ4MGFXWWdLSEpsYzNWc2RDNWphR0ZwYmlrZ2UxeHVJRngwWEhSY2RGeDBYSFJqYUdGcGJrbHVabThnUFNCY0lseGNibFZ3WkdGMFpTQndjbTl3WVdkaGRHbHZiam9nWENJZ0t5QnlaWE4xYkhRdVkyaGhhVzR1YW05cGJpaGNJaUF0UGlCY0lpazdYRzRnWEhSY2RGeDBYSFI5WEc0Z1hIUmNkRngwWEhSemQybDBZMmdnS0hKbGMzVnNkQzUwZVhCbEtTQjdYRzRnWEhSY2RGeDBYSFJjZEdOaGMyVWdYQ0p6Wld4bUxXUmxZMnhwYm1Wa1hDSTZYRzRnWEhSY2RGeDBYSFJjZEZ4MGFXWWdLRzl3ZEdsdmJuTXViMjVFWldOc2FXNWxaQ2tnYjNCMGFXOXVjeTV2YmtSbFkyeHBibVZrS0hKbGMzVnNkQ2s3WEc0Z1hIUmNkRngwWEhSY2RGeDBhV1lnS0NGdmNIUnBiMjV6TG1sbmJtOXlaVVJsWTJ4cGJtVmtLVnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBZV0p2Y25SRmNuSnZjaUE5SUc1bGR5QkZjbkp2Y2loY2JpQmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhDSkJZbTl5ZEdWa0lHSmxZMkYxYzJVZ2IyWWdjMlZzWmlCa1pXTnNhVzVsT2lCY0lpQXJYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwY21WemRXeDBMbTF2WkhWc1pVbGtJQ3RjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSamFHRnBia2x1Wm05Y2JpQmNkRngwWEhSY2RGeDBYSFJjZENrN1hHNGdYSFJjZEZ4MFhIUmNkRngwWW5KbFlXczdYRzRnWEhSY2RGeDBYSFJjZEdOaGMyVWdYQ0prWldOc2FXNWxaRndpT2x4dUlGeDBYSFJjZEZ4MFhIUmNkR2xtSUNodmNIUnBiMjV6TG05dVJHVmpiR2x1WldRcElHOXdkR2x2Ym5NdWIyNUVaV05zYVc1bFpDaHlaWE4xYkhRcE8xeHVJRngwWEhSY2RGeDBYSFJjZEdsbUlDZ2hiM0IwYVc5dWN5NXBaMjV2Y21WRVpXTnNhVzVsWkNsY2JpQmNkRngwWEhSY2RGeDBYSFJjZEdGaWIzSjBSWEp5YjNJZ1BTQnVaWGNnUlhKeWIzSW9YRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRndpUVdKdmNuUmxaQ0JpWldOaGRYTmxJRzltSUdSbFkyeHBibVZrSUdSbGNHVnVaR1Z1WTNrNklGd2lJQ3RjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSeVpYTjFiSFF1Ylc5a2RXeGxTV1FnSzF4dUlGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGd2lJR2x1SUZ3aUlDdGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJ5WlhOMWJIUXVjR0Z5Wlc1MFNXUWdLMXh1SUZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdOb1lXbHVTVzVtYjF4dUlGeDBYSFJjZEZ4MFhIUmNkRngwS1R0Y2JpQmNkRngwWEhSY2RGeDBYSFJpY21WaGF6dGNiaUJjZEZ4MFhIUmNkRngwWTJGelpTQmNJblZ1WVdOalpYQjBaV1JjSWpwY2JpQmNkRngwWEhSY2RGeDBYSFJwWmlBb2IzQjBhVzl1Y3k1dmJsVnVZV05qWlhCMFpXUXBJRzl3ZEdsdmJuTXViMjVWYm1GalkyVndkR1ZrS0hKbGMzVnNkQ2s3WEc0Z1hIUmNkRngwWEhSY2RGeDBhV1lnS0NGdmNIUnBiMjV6TG1sbmJtOXlaVlZ1WVdOalpYQjBaV1FwWEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJoWW05eWRFVnljbTl5SUQwZ2JtVjNJRVZ5Y205eUtGeHVJRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNJa0ZpYjNKMFpXUWdZbVZqWVhWelpTQmNJaUFySUcxdlpIVnNaVWxrSUNzZ1hDSWdhWE1nYm05MElHRmpZMlZ3ZEdWa1hDSWdLeUJqYUdGcGJrbHVabTljYmlCY2RGeDBYSFJjZEZ4MFhIUmNkQ2s3WEc0Z1hIUmNkRngwWEhSY2RGeDBZbkpsWVdzN1hHNGdYSFJjZEZ4MFhIUmNkR05oYzJVZ1hDSmhZMk5sY0hSbFpGd2lPbHh1SUZ4MFhIUmNkRngwWEhSY2RHbG1JQ2h2Y0hScGIyNXpMbTl1UVdOalpYQjBaV1FwSUc5d2RHbHZibk11YjI1QlkyTmxjSFJsWkNoeVpYTjFiSFFwTzF4dUlGeDBYSFJjZEZ4MFhIUmNkR1J2UVhCd2JIa2dQU0IwY25WbE8xeHVJRngwWEhSY2RGeDBYSFJjZEdKeVpXRnJPMXh1SUZ4MFhIUmNkRngwWEhSallYTmxJRndpWkdsemNHOXpaV1JjSWpwY2JpQmNkRngwWEhSY2RGeDBYSFJwWmlBb2IzQjBhVzl1Y3k1dmJrUnBjM0J2YzJWa0tTQnZjSFJwYjI1ekxtOXVSR2x6Y0c5elpXUW9jbVZ6ZFd4MEtUdGNiaUJjZEZ4MFhIUmNkRngwWEhSa2IwUnBjM0J2YzJVZ1BTQjBjblZsTzF4dUlGeDBYSFJjZEZ4MFhIUmNkR0p5WldGck8xeHVJRngwWEhSY2RGeDBYSFJrWldaaGRXeDBPbHh1SUZ4MFhIUmNkRngwWEhSY2RIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0lsVnVaWGhqWlhCMGFXOXVJSFI1Y0dVZ1hDSWdLeUJ5WlhOMWJIUXVkSGx3WlNrN1hHNGdYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBYSFJwWmlBb1lXSnZjblJGY25KdmNpa2dlMXh1SUZ4MFhIUmNkRngwWEhSb2IzUlRaWFJUZEdGMGRYTW9YQ0poWW05eWRGd2lLVHRjYmlCY2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUZCeWIyMXBjMlV1Y21WcVpXTjBLR0ZpYjNKMFJYSnliM0lwTzF4dUlGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RGeDBhV1lnS0dSdlFYQndiSGtwSUh0Y2JpQmNkRngwWEhSY2RGeDBZWEJ3YkdsbFpGVndaR0YwWlZ0dGIyUjFiR1ZKWkYwZ1BTQm9iM1JWY0dSaGRHVmJiVzlrZFd4bFNXUmRPMXh1SUZ4MFhIUmNkRngwWEhSaFpHUkJiR3hVYjFObGRDaHZkWFJrWVhSbFpFMXZaSFZzWlhNc0lISmxjM1ZzZEM1dmRYUmtZWFJsWkUxdlpIVnNaWE1wTzF4dUlGeDBYSFJjZEZ4MFhIUm1iM0lnS0cxdlpIVnNaVWxrSUdsdUlISmxjM1ZzZEM1dmRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGN5a2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RHbG1JQ2hjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2hjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkRngwY21WemRXeDBMbTkxZEdSaGRHVmtSR1Z3Wlc1a1pXNWphV1Z6TEZ4dUlGeDBYSFJjZEZ4MFhIUmNkRngwWEhSdGIyUjFiR1ZKWkZ4dUlGeDBYSFJjZEZ4MFhIUmNkRngwS1Z4dUlGeDBYSFJjZEZ4MFhIUmNkQ2tnZTF4dUlGeDBYSFJjZEZ4MFhIUmNkRngwYVdZZ0tDRnZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXR0YjJSMWJHVkpaRjBwWEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJjZEc5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWelcyMXZaSFZzWlVsa1hTQTlJRnRkTzF4dUlGeDBYSFJjZEZ4MFhIUmNkRngwWVdSa1FXeHNWRzlUWlhRb1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhSY2RHOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpXMjF2WkhWc1pVbGtYU3hjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkRngwY21WemRXeDBMbTkxZEdSaGRHVmtSR1Z3Wlc1a1pXNWphV1Z6VzIxdlpIVnNaVWxrWFZ4dUlGeDBYSFJjZEZ4MFhIUmNkRngwS1R0Y2JpQmNkRngwWEhSY2RGeDBYSFI5WEc0Z1hIUmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEdsbUlDaGtiMFJwYzNCdmMyVXBJSHRjYmlCY2RGeDBYSFJjZEZ4MFlXUmtRV3hzVkc5VFpYUW9iM1YwWkdGMFpXUk5iMlIxYkdWekxDQmJjbVZ6ZFd4MExtMXZaSFZzWlVsa1hTazdYRzRnWEhSY2RGeDBYSFJjZEdGd2NHeHBaV1JWY0dSaGRHVmJiVzlrZFd4bFNXUmRJRDBnZDJGeWJsVnVaWGh3WldOMFpXUlNaWEYxYVhKbE8xeHVJRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkSDFjYmlCY2RGeDBmVnh1WEc0Z1hIUmNkQzh2SUZOMGIzSmxJSE5sYkdZZ1lXTmpaWEIwWldRZ2IzVjBaR0YwWldRZ2JXOWtkV3hsY3lCMGJ5QnlaWEYxYVhKbElIUm9aVzBnYkdGMFpYSWdZbmtnZEdobElHMXZaSFZzWlNCemVYTjBaVzFjYmlCY2RGeDBkbUZ5SUc5MWRHUmhkR1ZrVTJWc1prRmpZMlZ3ZEdWa1RXOWtkV3hsY3lBOUlGdGRPMXh1SUZ4MFhIUm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2IzVjBaR0YwWldSTmIyUjFiR1Z6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnWEhSY2RGeDBiVzlrZFd4bFNXUWdQU0J2ZFhSa1lYUmxaRTF2WkhWc1pYTmJhVjA3WEc0Z1hIUmNkRngwYVdZZ0tGeHVJRngwWEhSY2RGeDBhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdKaVpjYmlCY2RGeDBYSFJjZEdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1odmRDNWZjMlZzWmtGalkyVndkR1ZrWEc0Z1hIUmNkRngwS1Z4dUlGeDBYSFJjZEZ4MGIzVjBaR0YwWldSVFpXeG1RV05qWlhCMFpXUk5iMlIxYkdWekxuQjFjMmdvZTF4dUlGeDBYSFJjZEZ4MFhIUnRiMlIxYkdVNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RGeDBYSFJsY25KdmNraGhibVJzWlhJNklHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtaHZkQzVmYzJWc1prRmpZMlZ3ZEdWa1hHNGdYSFJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBmVnh1WEc0Z1hIUmNkQzh2SUU1dmR5QnBiaUJjSW1ScGMzQnZjMlZjSWlCd2FHRnpaVnh1SUZ4MFhIUm9iM1JUWlhSVGRHRjBkWE1vWENKa2FYTndiM05sWENJcE8xeHVJRngwWEhSUFltcGxZM1F1YTJWNWN5aG9iM1JCZG1GcGJHRmliR1ZHYVd4bGMwMWhjQ2t1Wm05eVJXRmphQ2htZFc1amRHbHZiaWhqYUhWdWEwbGtLU0I3WEc0Z1hIUmNkRngwYVdZZ0tHaHZkRUYyWVdsc1lXSnNaVVpwYkdWelRXRndXMk5vZFc1clNXUmRJRDA5UFNCbVlXeHpaU2tnZTF4dUlGeDBYSFJjZEZ4MGFHOTBSR2x6Y0c5elpVTm9kVzVyS0dOb2RXNXJTV1FwTzF4dUlGeDBYSFJjZEgxY2JpQmNkRngwZlNrN1hHNWNiaUJjZEZ4MGRtRnlJR2xrZUR0Y2JpQmNkRngwZG1GeUlIRjFaWFZsSUQwZ2IzVjBaR0YwWldSTmIyUjFiR1Z6TG5Oc2FXTmxLQ2s3WEc0Z1hIUmNkSGRvYVd4bElDaHhkV1YxWlM1c1pXNW5kR2dnUGlBd0tTQjdYRzRnWEhSY2RGeDBiVzlrZFd4bFNXUWdQU0J4ZFdWMVpTNXdiM0FvS1R0Y2JpQmNkRngwWEhSdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFR0Y2JpQmNkRngwWEhScFppQW9JVzF2WkhWc1pTa2dZMjl1ZEdsdWRXVTdYRzVjYmlCY2RGeDBYSFIyWVhJZ1pHRjBZU0E5SUh0OU8xeHVYRzRnWEhSY2RGeDBMeThnUTJGc2JDQmthWE53YjNObElHaGhibVJzWlhKelhHNGdYSFJjZEZ4MGRtRnlJR1JwYzNCdmMyVklZVzVrYkdWeWN5QTlJRzF2WkhWc1pTNW9iM1F1WDJScGMzQnZjMlZJWVc1a2JHVnljenRjYmlCY2RGeDBYSFJtYjNJZ0tHb2dQU0F3T3lCcUlEd2daR2x6Y0c5elpVaGhibVJzWlhKekxteGxibWQwYURzZ2Fpc3JLU0I3WEc0Z1hIUmNkRngwWEhSallpQTlJR1JwYzNCdmMyVklZVzVrYkdWeWMxdHFYVHRjYmlCY2RGeDBYSFJjZEdOaUtHUmhkR0VwTzF4dUlGeDBYSFJjZEgxY2JpQmNkRngwWEhSb2IzUkRkWEp5Wlc1MFRXOWtkV3hsUkdGMFlWdHRiMlIxYkdWSlpGMGdQU0JrWVhSaE8xeHVYRzRnWEhSY2RGeDBMeThnWkdsellXSnNaU0J0YjJSMWJHVWdLSFJvYVhNZ1pHbHpZV0pzWlhNZ2NtVnhkV2x5WlhNZ1puSnZiU0IwYUdseklHMXZaSFZzWlNsY2JpQmNkRngwWEhSdGIyUjFiR1V1YUc5MExtRmpkR2wyWlNBOUlHWmhiSE5sTzF4dVhHNGdYSFJjZEZ4MEx5OGdjbVZ0YjNabElHMXZaSFZzWlNCbWNtOXRJR05oWTJobFhHNGdYSFJjZEZ4MFpHVnNaWFJsSUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTzF4dVhHNGdYSFJjZEZ4MEx5OGdkMmhsYmlCa2FYTndiM05wYm1jZ2RHaGxjbVVnYVhNZ2JtOGdibVZsWkNCMGJ5QmpZV3hzSUdScGMzQnZjMlVnYUdGdVpHeGxjbHh1SUZ4MFhIUmNkR1JsYkdWMFpTQnZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXR0YjJSMWJHVkpaRjA3WEc1Y2JpQmNkRngwWEhRdkx5QnlaVzF2ZG1VZ1hDSndZWEpsYm5SelhDSWdjbVZtWlhKbGJtTmxjeUJtY205dElHRnNiQ0JqYUdsc1pISmxibHh1SUZ4MFhIUmNkR1p2Y2lBb2FpQTlJREE3SUdvZ1BDQnRiMlIxYkdVdVkyaHBiR1J5Wlc0dWJHVnVaM1JvT3lCcUt5c3BJSHRjYmlCY2RGeDBYSFJjZEhaaGNpQmphR2xzWkNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsTG1Ob2FXeGtjbVZ1VzJwZFhUdGNiaUJjZEZ4MFhIUmNkR2xtSUNnaFkyaHBiR1FwSUdOdmJuUnBiblZsTzF4dUlGeDBYSFJjZEZ4MGFXUjRJRDBnWTJocGJHUXVjR0Z5Wlc1MGN5NXBibVJsZUU5bUtHMXZaSFZzWlVsa0tUdGNiaUJjZEZ4MFhIUmNkR2xtSUNocFpIZ2dQajBnTUNrZ2UxeHVJRngwWEhSY2RGeDBYSFJqYUdsc1pDNXdZWEpsYm5SekxuTndiR2xqWlNocFpIZ3NJREVwTzF4dUlGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RIMWNiaUJjZEZ4MGZWeHVYRzRnWEhSY2RDOHZJSEpsYlc5MlpTQnZkWFJrWVhSbFpDQmtaWEJsYm1SbGJtTjVJR1p5YjIwZ2JXOWtkV3hsSUdOb2FXeGtjbVZ1WEc0Z1hIUmNkSFpoY2lCa1pYQmxibVJsYm1ONU8xeHVJRngwWEhSMllYSWdiVzlrZFd4bFQzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTTdYRzRnWEhSY2RHWnZjaUFvYlc5a2RXeGxTV1FnYVc0Z2IzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTXBJSHRjYmlCY2RGeDBYSFJwWmlBb1hHNGdYSFJjZEZ4MFhIUlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE1zSUcxdlpIVnNaVWxrS1Z4dUlGeDBYSFJjZENrZ2UxeHVJRngwWEhSY2RGeDBiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMDdYRzRnWEhSY2RGeDBYSFJwWmlBb2JXOWtkV3hsS1NCN1hHNGdYSFJjZEZ4MFhIUmNkRzF2WkhWc1pVOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpJRDBnYjNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhOYmJXOWtkV3hsU1dSZE8xeHVJRngwWEhSY2RGeDBYSFJtYjNJZ0tHb2dQU0F3T3lCcUlEd2diVzlrZFd4bFQzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTXViR1Z1WjNSb095QnFLeXNwSUh0Y2JpQmNkRngwWEhSY2RGeDBYSFJrWlhCbGJtUmxibU41SUQwZ2JXOWtkV3hsVDNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhOYmFsMDdYRzRnWEhSY2RGeDBYSFJjZEZ4MGFXUjRJRDBnYlc5a2RXeGxMbU5vYVd4a2NtVnVMbWx1WkdWNFQyWW9aR1Z3Wlc1a1pXNWplU2s3WEc0Z1hIUmNkRngwWEhSY2RGeDBhV1lnS0dsa2VDQStQU0F3S1NCdGIyUjFiR1V1WTJocGJHUnlaVzR1YzNCc2FXTmxLR2xrZUN3Z01TazdYRzRnWEhSY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUjlYRzRnWEhSY2RIMWNibHh1SUZ4MFhIUXZMeUJPYjNRZ2FXNGdYQ0poY0hCc2VWd2lJSEJvWVhObFhHNGdYSFJjZEdodmRGTmxkRk4wWVhSMWN5aGNJbUZ3Y0d4NVhDSXBPMXh1WEc0Z1hIUmNkR2h2ZEVOMWNuSmxiblJJWVhOb0lEMGdhRzkwVlhCa1lYUmxUbVYzU0dGemFEdGNibHh1SUZ4MFhIUXZMeUJwYm5ObGNuUWdibVYzSUdOdlpHVmNiaUJjZEZ4MFptOXlJQ2h0YjJSMWJHVkpaQ0JwYmlCaGNIQnNhV1ZrVlhCa1lYUmxLU0I3WEc0Z1hIUmNkRngwYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaGhjSEJzYVdWa1ZYQmtZWFJsTENCdGIyUjFiR1ZKWkNrcElIdGNiaUJjZEZ4MFhIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnWVhCd2JHbGxaRlZ3WkdGMFpWdHRiMlIxYkdWSlpGMDdYRzRnWEhSY2RGeDBmVnh1SUZ4MFhIUjlYRzVjYmlCY2RGeDBMeThnWTJGc2JDQmhZMk5sY0hRZ2FHRnVaR3hsY25OY2JpQmNkRngwZG1GeUlHVnljbTl5SUQwZ2JuVnNiRHRjYmlCY2RGeDBabTl5SUNodGIyUjFiR1ZKWkNCcGJpQnZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjeWtnZTF4dUlGeDBYSFJjZEdsbUlDaGNiaUJjZEZ4MFhIUmNkRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsY3l3Z2JXOWtkV3hsU1dRcFhHNGdYSFJjZEZ4MEtTQjdYRzRnWEhSY2RGeDBYSFJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYVHRjYmlCY2RGeDBYSFJjZEdsbUlDaHRiMlIxYkdVcElIdGNiaUJjZEZ4MFhIUmNkRngwYlc5a2RXeGxUM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE1nUFNCdmRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHRiMlIxYkdWSlpGMDdYRzRnWEhSY2RGeDBYSFJjZEhaaGNpQmpZV3hzWW1GamEzTWdQU0JiWFR0Y2JpQmNkRngwWEhSY2RGeDBabTl5SUNocElEMGdNRHNnYVNBOElHMXZaSFZzWlU5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z1hIUmNkRngwWEhSY2RGeDBaR1Z3Wlc1a1pXNWplU0E5SUcxdlpIVnNaVTkxZEdSaGRHVmtSR1Z3Wlc1a1pXNWphV1Z6VzJsZE8xeHVJRngwWEhSY2RGeDBYSFJjZEdOaUlEMGdiVzlrZFd4bExtaHZkQzVmWVdOalpYQjBaV1JFWlhCbGJtUmxibU5wWlhOYlpHVndaVzVrWlc1amVWMDdYRzRnWEhSY2RGeDBYSFJjZEZ4MGFXWWdLR05pS1NCN1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhScFppQW9ZMkZzYkdKaFkydHpMbWx1WkdWNFQyWW9ZMklwSUNFOVBTQXRNU2tnWTI5dWRHbHVkV1U3WEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJqWVd4c1ltRmphM011Y0hWemFDaGpZaWs3WEc0Z1hIUmNkRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUmNkR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQmpZV3hzWW1GamEzTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQmNkRngwWEhSY2RGeDBYSFJqWWlBOUlHTmhiR3hpWVdOcmMxdHBYVHRjYmlCY2RGeDBYSFJjZEZ4MFhIUjBjbmtnZTF4dUlGeDBYSFJjZEZ4MFhIUmNkRngwWTJJb2JXOWtkV3hsVDNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhNcE8xeHVJRngwWEhSY2RGeDBYSFJjZEgwZ1kyRjBZMmdnS0dWeWNpa2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RGeDBhV1lnS0c5d2RHbHZibk11YjI1RmNuSnZjbVZrS1NCN1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhSY2RHOXdkR2x2Ym5NdWIyNUZjbkp2Y21Wa0tIdGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFIwZVhCbE9pQmNJbUZqWTJWd2RDMWxjbkp2Y21Wa1hDSXNYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwYlc5a2RXeGxTV1E2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHUmxjR1Z1WkdWdVkzbEpaRG9nYlc5a2RXeGxUM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE5iYVYwc1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBaWEp5YjNJNklHVnljbHh1SUZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5S1R0Y2JpQmNkRngwWEhSY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSY2RGeDBYSFJjZEdsbUlDZ2hiM0IwYVc5dWN5NXBaMjV2Y21WRmNuSnZjbVZrS1NCN1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhSY2RHbG1JQ2doWlhKeWIzSXBJR1Z5Y205eUlEMGdaWEp5TzF4dUlGeDBYSFJjZEZ4MFhIUmNkRngwZlZ4dUlGeDBYSFJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkSDFjYmlCY2RGeDBmVnh1WEc0Z1hIUmNkQzh2SUV4dllXUWdjMlZzWmlCaFkyTmxjSFJsWkNCdGIyUjFiR1Z6WEc0Z1hIUmNkR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQnZkWFJrWVhSbFpGTmxiR1pCWTJObGNIUmxaRTF2WkhWc1pYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQmNkRngwWEhSMllYSWdhWFJsYlNBOUlHOTFkR1JoZEdWa1UyVnNaa0ZqWTJWd2RHVmtUVzlrZFd4bGMxdHBYVHRjYmlCY2RGeDBYSFJ0YjJSMWJHVkpaQ0E5SUdsMFpXMHViVzlrZFd4bE8xeHVJRngwWEhSY2RHaHZkRU4xY25KbGJuUlFZWEpsYm5SeklEMGdXMjF2WkhWc1pVbGtYVHRjYmlCY2RGeDBYSFIwY25rZ2UxeHVJRngwWEhSY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2s3WEc0Z1hIUmNkRngwZlNCallYUmphQ0FvWlhKeUtTQjdYRzRnWEhSY2RGeDBYSFJwWmlBb2RIbHdaVzltSUdsMFpXMHVaWEp5YjNKSVlXNWtiR1Z5SUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUh0Y2JpQmNkRngwWEhSY2RGeDBkSEo1SUh0Y2JpQmNkRngwWEhSY2RGeDBYSFJwZEdWdExtVnljbTl5U0dGdVpHeGxjaWhsY25JcE8xeHVJRngwWEhSY2RGeDBYSFI5SUdOaGRHTm9JQ2hsY25JeUtTQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MGFXWWdLRzl3ZEdsdmJuTXViMjVGY25KdmNtVmtLU0I3WEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJ2Y0hScGIyNXpMbTl1UlhKeWIzSmxaQ2g3WEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJjZEhSNWNHVTZJRndpYzJWc1ppMWhZMk5sY0hRdFpYSnliM0l0YUdGdVpHeGxjaTFsY25KdmNtVmtYQ0lzWEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJjZEcxdlpIVnNaVWxrT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSY2RGeDBYSFJjZEZ4MFpYSnliM0k2SUdWeWNqSXNYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRzl5YVdkcGJtRnNSWEp5YjNJNklHVnljbHh1SUZ4MFhIUmNkRngwWEhSY2RGeDBmU2s3WEc0Z1hIUmNkRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwWEhSY2RHbG1JQ2doYjNCMGFXOXVjeTVwWjI1dmNtVkZjbkp2Y21Wa0tTQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUnBaaUFvSVdWeWNtOXlLU0JsY25KdmNpQTlJR1Z5Y2pJN1hHNGdYSFJjZEZ4MFhIUmNkRngwZlZ4dUlGeDBYSFJjZEZ4MFhIUmNkR2xtSUNnaFpYSnliM0lwSUdWeWNtOXlJRDBnWlhKeU8xeHVJRngwWEhSY2RGeDBYSFI5WEc0Z1hIUmNkRngwWEhSOUlHVnNjMlVnZTF4dUlGeDBYSFJjZEZ4MFhIUnBaaUFvYjNCMGFXOXVjeTV2YmtWeWNtOXlaV1FwSUh0Y2JpQmNkRngwWEhSY2RGeDBYSFJ2Y0hScGIyNXpMbTl1UlhKeWIzSmxaQ2g3WEc0Z1hIUmNkRngwWEhSY2RGeDBYSFIwZVhCbE9pQmNJbk5sYkdZdFlXTmpaWEIwTFdWeWNtOXlaV1JjSWl4Y2JpQmNkRngwWEhSY2RGeDBYSFJjZEcxdlpIVnNaVWxrT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSY2RGeDBYSFJjZEdWeWNtOXlPaUJsY25KY2JpQmNkRngwWEhSY2RGeDBYSFI5S1R0Y2JpQmNkRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwWEhScFppQW9JVzl3ZEdsdmJuTXVhV2R1YjNKbFJYSnliM0psWkNrZ2UxeHVJRngwWEhSY2RGeDBYSFJjZEdsbUlDZ2haWEp5YjNJcElHVnljbTl5SUQwZ1pYSnlPMXh1SUZ4MFhIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBmVnh1SUZ4MFhIUjlYRzVjYmlCY2RGeDBMeThnYUdGdVpHeGxJR1Z5Y205eWN5QnBiaUJoWTJObGNIUWdhR0Z1Wkd4bGNuTWdZVzVrSUhObGJHWWdZV05qWlhCMFpXUWdiVzlrZFd4bElHeHZZV1JjYmlCY2RGeDBhV1lnS0dWeWNtOXlLU0I3WEc0Z1hIUmNkRngwYUc5MFUyVjBVM1JoZEhWektGd2labUZwYkZ3aUtUdGNiaUJjZEZ4MFhIUnlaWFIxY200Z1VISnZiV2x6WlM1eVpXcGxZM1FvWlhKeWIzSXBPMXh1SUZ4MFhIUjlYRzVjYmlCY2RGeDBhRzkwVTJWMFUzUmhkSFZ6S0Z3aWFXUnNaVndpS1R0Y2JpQmNkRngwY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0daMWJtTjBhVzl1S0hKbGMyOXNkbVVwSUh0Y2JpQmNkRngwWEhSeVpYTnZiSFpsS0c5MWRHUmhkR1ZrVFc5a2RXeGxjeWs3WEc0Z1hIUmNkSDBwTzF4dUlGeDBmVnh1WEc0Z1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlN4Y2JpQmNkRngwWEhSb2IzUTZJR2h2ZEVOeVpXRjBaVTF2WkhWc1pTaHRiMlIxYkdWSlpDa3NYRzRnWEhSY2RGeDBjR0Z5Wlc1MGN6b2dLR2h2ZEVOMWNuSmxiblJRWVhKbGJuUnpWR1Z0Y0NBOUlHaHZkRU4xY25KbGJuUlFZWEpsYm5SekxDQm9iM1JEZFhKeVpXNTBVR0Z5Wlc1MGN5QTlJRnRkTENCb2IzUkRkWEp5Wlc1MFVHRnlaVzUwYzFSbGJYQXBMRnh1SUZ4MFhIUmNkR05vYVd4a2NtVnVPaUJiWFZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCb2IzUkRjbVZoZEdWU1pYRjFhWEpsS0cxdlpIVnNaVWxrS1NrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUdkbGRIUmxjaUJtZFc1amRHbHZiaUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6TENCdVlXMWxMQ0JuWlhSMFpYSXBJSHRjYmlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0J1WVcxbExDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJR2RsZERvZ1oyVjBkR1Z5SUgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWDE5bGMwMXZaSFZzWlNCdmJpQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5JZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SektTQjdYRzRnWEhSY2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjc0lIc2dkbUZzZFdVNklDZE5iMlIxYkdVbklIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCamNtVmhkR1VnWVNCbVlXdGxJRzVoYldWemNHRmpaU0J2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBeE9pQjJZV3gxWlNCcGN5QmhJRzF2WkhWc1pTQnBaQ3dnY21WeGRXbHlaU0JwZEZ4dUlGeDBMeThnYlc5a1pTQW1JREk2SUcxbGNtZGxJR0ZzYkNCd2NtOXdaWEowYVdWeklHOW1JSFpoYkhWbElHbHVkRzhnZEdobElHNXpYRzRnWEhRdkx5QnRiMlJsSUNZZ05Eb2djbVYwZFhKdUlIWmhiSFZsSUhkb1pXNGdZV3h5WldGa2VTQnVjeUJ2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBNGZERTZJR0psYUdGMlpTQnNhV3RsSUhKbGNYVnBjbVZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVkQ0E5SUdaMWJtTjBhVzl1S0haaGJIVmxMQ0J0YjJSbEtTQjdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXhLU0IyWVd4MVpTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvZG1Gc2RXVXBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdPQ2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhScFppZ29iVzlrWlNBbUlEUXBJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RtRnNkV1VnSmlZZ2RtRnNkV1V1WDE5bGMwMXZaSFZzWlNrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUjJZWElnYm5NZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklvYm5NcE8xeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ibk1zSUNka1pXWmhkV3gwSnl3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQjJZV3gxWlRvZ2RtRnNkV1VnZlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeUlDWW1JSFI1Y0dWdlppQjJZV3gxWlNBaFBTQW5jM1J5YVc1bkp5a2dabTl5S0haaGNpQnJaWGtnYVc0Z2RtRnNkV1VwSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaHVjeXdnYTJWNUxDQm1kVzVqZEdsdmJpaHJaWGtwSUhzZ2NtVjBkWEp1SUhaaGJIVmxXMnRsZVYwN0lIMHVZbWx1WkNodWRXeHNMQ0JyWlhrcEtUdGNiaUJjZEZ4MGNtVjBkWEp1SUc1ek8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdYMTkzWldKd1lXTnJYMmhoYzJoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1b0lEMGdablZ1WTNScGIyNG9LU0I3SUhKbGRIVnliaUJvYjNSRGRYSnlaVzUwU0dGemFEc2dmVHRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQm9iM1JEY21WaGRHVlNaWEYxYVhKbEtGd2lMaTl6Y21NdllYQndMbTF2WkhWc1pYTXVhbk5jSWlrb1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnWENJdUwzTnlZeTloY0hBdWJXOWtkV3hsY3k1cWMxd2lLVHRjYmlJc0lpOHFLbHh5WEc0Z0tpQldZWEpwYjNWeklHbHVkR1Z5Wm1GalpTQnZjSFJwYjI1eklIZGxJR05oYmlCelpXeGxZM1JjY2x4dUlDb3ZYSEpjYmx4eVhHNHZLaXBjY2x4dUlDb2dTVzUwWlhKbVlXTmxJRzl3ZEdsdmJuTXVYSEpjYmlBcUlFQndZWEpoYlNCdmNIUnBiMjV6SUZWelpYSWdjSEp2ZG1sa1pXUWdiM0IwYVc5dWN5QjBhR0YwSUc5MlpYSnlhV1JsSUhSb1pTQmtaV1poZFd4MElIWmhiSFZsY3k1Y2NseHVJQ29nUUdOdmJuTjBjblZqZEc5eVhISmNiaUFxTDF4eVhHNTJZWElnVDNCMGFXOXVjeUE5SUdaMWJtTjBhVzl1S0c5d2RHbHZibk1wSUh0Y2NseHVJQ0FnSUc5d2RHbHZibk1nUFNCdmNIUnBiMjV6SUQ4Z2IzQjBhVzl1Y3lBNklIdDlPMXh5WEc1Y2NseHVJQ0FnSUM4dkx5QlBjSFJwYjI1ek9pQjJaWEowYVdOaGJDd2dhRzl5YVhwdmJuUmhiQ3dnWW05MGFGeHlYRzRnSUNBZ2RHaHBjeTV5WlhOcGVtVWdQU0FuZG1WeWRHbGpZV3duTzF4eVhHNWNjbHh1SUNBZ0lDOHZMeUJVYUdVZ2NtVnphWHBwYm1jZ2FHRnVaR3hsWEhKY2JpQWdJQ0IwYUdsekxtaGhibVJzWlNBOUlDZGlZWEluTzF4eVhHNWNjbHh1SUNBZ0lDOHZMeUJTWVc1blpTQm1iM0lnWjNKaFltbHVaMXh5WEc0Z0lDQWdkR2hwY3k1bmNtRmlVMmw2WlNBOUlERXdPMXh5WEc1Y2NseHVJQ0FnSUdadmNpaDJZWElnY0hKdmNHVnlkSGtnYVc0Z2IzQjBhVzl1Y3lrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtS0c5d2RHbHZibk11YUdGelQzZHVVSEp2Y0dWeWRIa29jSEp2Y0dWeWRIa3BLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0NGMGFHbHpMbWhoYzA5M2JsQnliM0JsY25SNUtIQnliM0JsY25SNUtTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLRndpU1c1MllXeHBaQ0J2Y0hScGIyNGdYQ0lnS3lCd2NtOXdaWEowZVNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdHdjbTl3WlhKMGVWMGdQU0J2Y0hScGIyNXpXM0J5YjNCbGNuUjVYVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc1OVhISmNibHh5WEc1Y2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRTl3ZEdsdmJuTTdYSEpjYmlJc0ltbHRjRzl5ZENCU1pYTnBlbVZ5SUdaeWIyMGdKeTR2Y21WemFYcGxjaTVxY3ljN1hISmNibHh5WEc1bGVIQnZjblFnZTFKbGMybDZaWElnWVhNZ1pHVm1ZWFZzZEgwN1hISmNiaUlzSWx4eVhHNW1kVzVqZEdsdmJpQlNaWE5wZW1WeVFXTjBkV0ZzS0dWc1pXMWxiblFzSUc5d2RHbHZibk1wSUh0Y2NseHVJQ0FnSUdWc1pXMWxiblF1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jbVZ6YVhwbGNpY3BPMXh5WEc1Y2NseHVJQ0FnSUd4bGRDQm5jbUZpVTJsNlpTQTlJRzl3ZEdsdmJuTXVaM0poWWxOcGVtVTdYSEpjYmx4eVhHNGdJQ0FnYkdWMElHaGhibVJzWlNBOUlHOXdkR2x2Ym5NdWFHRnVaR3hsTzF4eVhHNGdJQ0FnYVdZb2FHRnVaR3hsSUQwOVBTQW5ZbUZ5SnlrZ2UxeHlYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdWNtVnphWHBsSUQwZ0oyNXZibVVuTzF4eVhHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WW05eVpHVnlRbTkwZEc5dElEMGdaM0poWWxOcGVtVWdLeUFuY0hnZ2MyOXNhV1FnSXpFNE5EVXpRaWM3WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lvYUdGdVpHeGxJRDA5UFNBbmFHRnVaR3hsSnlrZ2UxeHlYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdWNtVnphWHBsSUQwZ0ozWmxjblJwWTJGc0p6dGNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppaG9ZVzVrYkdVZ1BUMDlJQ2R1YjI1bEp5a2dlMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzV5WlhOcGVtVWdQU0FuYm05dVpTYzdYSEpjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNWliM0prWlhKQ2IzUjBiMjBnUFNCb1lXNWtiR1U3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5OHZJRTF2ZFhObElHMXZkbVVnWlhabGJuUWdhR0Z1Wkd4bGNseHlYRzRnSUNBZ2JHVjBJR2x1YzNSaGJHeGxaRTF2ZG1WTWFYTjBaVzVsY2lBOUlHNTFiR3c3WEhKY2JpQWdJQ0JzWlhRZ2JXRnpheUE5SUc1MWJHdzdYSEpjYmx4eVhHNGdJQ0FnTHk4dklFZGxkQ0IwYUdVZ2JXbHVhVzExYlNCb1pXbG5hSFFnWVc1a0lIZHBaSFJvSUhCeWIzQmxjblJwWlhOY2NseHVJQ0FnSUhaaGNpQnlaV04wSUQwZ1pXeGxiV1Z1ZEM1blpYUkNiM1Z1WkdsdVowTnNhV1Z1ZEZKbFkzUW9LVHRjY2x4dUlDQWdJSFpoY2lCb1pXbG5hSFFnUFNCeVpXTjBMbWhsYVdkb2REdGNjbHh1SUNBZ0lIWmhjaUIzYVdSMGFDQTlJSEpsWTNRdWQybGtkR2c3WEhKY2JseHlYRzRnSUNBZ2JHVjBJRzFwYmtobGFXZG9kQ0E5SUdkbGRFTnZiWEIxZEdWa1UzUjViR1VvWld4bGJXVnVkQ2t1YldsdVNHVnBaMmgwTzF4eVhHNGdJQ0FnYldsdVNHVnBaMmgwSUQwZ2JXbHVTR1ZwWjJoMExuTjFZbk4wY2lnd0xDQnRhVzVJWldsbmFIUXViR1Z1WjNSb0lDMGdNaWs3WEhKY2JpQWdJQ0JzWlhRZ2JXbHVWMmxrZEdnZ1BTQm5aWFJEYjIxd2RYUmxaRk4wZVd4bEtHVnNaVzFsYm5RcExtMXBibGRwWkhSb08xeHlYRzRnSUNBZ2JXbHVWMmxrZEdnZ1BTQnRhVzVYYVdSMGFDNXpkV0p6ZEhJb01Dd2diV2x1VjJsa2RHZ3ViR1Z1WjNSb0lDMGdNaWs3WEhKY2JseHlYRzRnSUNBZ1puVnVZM1JwYjI0Z2MzUmhjblFvS1NCN1hISmNiaUFnSUNBZ0lDQWdMeThnU1c1emRHRnNiQ0IwYUdVZ2JXOTFjMlVnWkc5M2JpQnNhWE4wWlc1bGNseHlYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25iVzkxYzJWa2IzZHVKeXdnYlc5MWMyVkViM2R1VEdsemRHVnVaWElwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0F2THlCSmJuTjBZV3hzSUhSb1pTQmpkWEp6YjNJZ2JHbHpkR1Z1WlhKY2NseHVJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyMXZkWE5sYlc5MlpTY3NJR04xY25OdmNreHBjM1JsYm1WeUtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JzWlhRZ2FXNXBkR2xoYkZnc0lHbHVhWFJwWVd4Wk8xeHlYRzRnSUNBZ2JHVjBJR2x1YVhScFlXeFhhV1IwYUN3Z2FXNXBkR2xoYkVobGFXZG9kRHRjY2x4dUlDQWdJR3hsZENCbmNtRmlWSGx3WlNBOUlHNTFiR3c3WEhKY2JseHlYRzRnSUNBZ1puVnVZM1JwYjI0Z2JXOTFjMlZFYjNkdVRHbHpkR1Z1WlhJb1pTa2dlMXh5WEc0Z0lDQWdJQ0FnSUdkeVlXSlVlWEJsSUQwZ2IyNUlZVzVrYkdVb1pTNXdZV2RsV0N3Z1pTNXdZV2RsV1NrN1hISmNiaUFnSUNBZ0lDQWdhV1lvWjNKaFlsUjVjR1VnSVQwOUlHNTFiR3dwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1cGRHbGhiRmdnUFNCbExuQmhaMlZZTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm1sMGFXRnNXU0E5SUdVdWNHRm5aVms3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCeVpXTjBJRDBnWld4bGJXVnVkQzVuWlhSQ2IzVnVaR2x1WjBOc2FXVnVkRkpsWTNRb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXNXBkR2xoYkZkcFpIUm9JRDBnY21WamRDNTNhV1IwYUR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1cGRHbGhiRWhsYVdkb2RDQTlJSEpsWTNRdWFHVnBaMmgwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXNXpkR0ZzYkVoaGJtUnNaWEp6S0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsdWMzUmhiR3hOWVhOcktDazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHWjFibU4wYVc5dUlHMXZkWE5sVFc5MlpVeHBjM1JsYm1WeUtHVXBJSHRjY2x4dUlDQWdJQ0FnSUNCcFppaGxMbUoxZEhSdmJuTWdJVDA5SURFcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnRiM1psUVd4c0tDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0JrZUNBOUlHVXVjR0ZuWlZnZ0xTQnBibWwwYVdGc1dEdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ1pIa2dQU0JsTG5CaFoyVlpJQzBnYVc1cGRHbGhiRms3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtS0dkeVlXSlVlWEJsSUQwOVBTQW5hRzl5YVhwdmJuUmhiQ2NnZkh3Z1ozSmhZbFI1Y0dVZ1BUMDlJQ2RpYjNSb0p5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJEYjIxd2RYUmxJR0VnWkdWemFYSmxaQ0J1WlhjZ2QybGtkR2hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUc1bGQxZHBaSFJvSUQwZ2FXNXBkR2xoYkZkcFpIUm9JQ3NnWkhnN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHVaWGRYYVdSMGFDQThJRzFwYmxkcFpIUm9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFhhV1IwYUNBOUlHMXBibGRwWkhSb08xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJUWlhRZ2FYUmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzUzYVdSMGFDQTlJQ2NuSUNzZ2JtVjNWMmxrZEdnZ0t5QW5jSGduTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWW9aM0poWWxSNWNHVWdQVDA5SUNkMlpYSjBhV05oYkNjZ2ZId2daM0poWWxSNWNHVWdQVDA5SUNkaWIzUm9KeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRGIyMXdkWFJsSUdFZ1pHVnphWEpsWkNCdVpYY2dhR1ZwWjJoMFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnVaWGRJWldsbmFIUWdQU0JwYm1sMGFXRnNTR1ZwWjJoMElDc2daSGs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYZElaV2xuYUhRZ1BDQnRhVzVJWldsbmFIUXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQwaGxhV2RvZENBOUlHMXBia2hsYVdkb2REdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVTJWMElHbDBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1YUdWcFoyaDBJRDBnSnljZ0t5QnVaWGRJWldsbmFIUWdLeUFuY0hnbk8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCbWRXNWpkR2x2YmlCdGIzVnpaVlZ3VEdsemRHVnVaWElvWlNrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsYlc5MlpVRnNiQ2dwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHWjFibU4wYVc5dUlHbHVjM1JoYkd4SVlXNWtiR1Z5Y3lncElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlcxdmRtVklZVzVrYkdWeWN5Z3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBibk4wWVd4c1pXUk5iM1psVEdsemRHVnVaWElnUFNCdGIzVnpaVTF2ZG1WTWFYTjBaVzVsY2p0Y2NseHVJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHRiM1Z6WlcxdmRtVW5MQ0JwYm5OMFlXeHNaV1JOYjNabFRHbHpkR1Z1WlhJcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMjF2ZFhObGRYQW5MQ0J0YjNWelpWVndUR2x6ZEdWdVpYSXBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdaMWJtTjBhVzl1SUdsdWMzUmhiR3hOWVhOcktDa2dlMXh5WEc0Z0lDQWdJQ0FnSUM4dklFVnVjM1Z5WlNCdWIyNWxJR04xY25KbGJuUnNlU0JsZUdsemRITmNjbHh1SUNBZ0lDQWdJQ0J5WlcxdmRtVk5ZWE5yS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhaaGNpQmliMlI1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduWW05a2VTY3BPMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQjBZV2NnUFNBblBHUnBkaUJ6ZEhsc1pUMWNJbkJ2YzJsMGFXOXVPaUFuSUN0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSjJGaWMyOXNkWFJsT3lCc1pXWjBPaUF3T3lCeWFXZG9kRG9nTURzZ2QybGtkR2c2SURFd01DVTdJR2hsYVdkb2REb2dNVEF3SlRzbklDdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0oySmhZMnRuY205MWJtUXRZMjlzYjNJNklHZHlaV1Z1TzF3aVBqd3ZaR2wyUGljN1hISmNiaUFnSUNBZ0lDQWdiV0Z6YXlBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJScGRpY3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnRZWE5yTG5OMGVXeGxMbkJ2YzJsMGFXOXVJRDBnSjJacGVHVmtKenRjY2x4dUlDQWdJQ0FnSUNCdFlYTnJMbk4wZVd4bExteGxablFnUFNBd08xeHlYRzRnSUNBZ0lDQWdJRzFoYzJzdWMzUjViR1V1ZEc5d0lEMGdNRHRjY2x4dUlDQWdJQ0FnSUNCdFlYTnJMbk4wZVd4bExuZHBaSFJvSUQwZ1hDSXhNREFsWENJN1hISmNiaUFnSUNBZ0lDQWdiV0Z6YXk1emRIbHNaUzVvWldsbmFIUWdQU0FuTVRBd0pTYzdYSEpjYmlBZ0lDQWdJQ0FnYldGemF5NXpkSGxzWlM1aVlXTnJaM0p2ZFc1a1EyOXNiM0lnUFNBbmRISmhibk53WVhKbGJuUW5PMXh5WEc0Z0lDQWdJQ0FnSUcxaGMyc3VjM1I1YkdVdWVrbHVaR1Y0SUQwZ01UQXdNREE3WEhKY2JpQWdJQ0FnSUNBZ2JXRnpheTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdNQzQxTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JpYjJSNUxtRndjR1Z1WkVOb2FXeGtLRzFoYzJzcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR1oxYm1OMGFXOXVJSEpsYlc5MlpVRnNiQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaVzF2ZG1WSVlXNWtiR1Z5Y3lncE8xeHlYRzRnSUNBZ0lDQWdJSEpsYlc5MlpVMWhjMnNvS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQm1kVzVqZEdsdmJpQnlaVzF2ZG1WSVlXNWtiR1Z5Y3lncElIdGNjbHh1SUNBZ0lDQWdJQ0JwWmlocGJuTjBZV3hzWldSTmIzWmxUR2x6ZEdWdVpYSWdQVDA5SUc1MWJHd3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzlqZFcxbGJuUXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduYlc5MWMyVnRiM1psSnl3Z2FXNXpkR0ZzYkdWa1RXOTJaVXhwYzNSbGJtVnlLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtDZHRiM1Z6WlhWd0p5d2diVzkxYzJWVmNFeHBjM1JsYm1WeUtUdGNjbHh1SUNBZ0lDQWdJQ0JwYm5OMFlXeHNaV1JOYjNabFRHbHpkR1Z1WlhJZ1BTQnVkV3hzTzF4eVhHNWNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1puVnVZM1JwYjI0Z2NtVnRiM1psVFdGemF5Z3BJSHRjY2x4dUlDQWdJQ0FnSUNCcFppaHRZWE5ySUNFOVBTQnVkV3hzS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQmliMlI1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduWW05a2VTY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmliMlI1TG5KbGJXOTJaVU5vYVd4a0tHMWhjMnNwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhOcklEMGdiblZzYkR0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQkVaWFJsY20xcGJtVWdhV1lnWVc0Z2VDeDVJR3h2WTJGMGFXOXVJR2x6SUc5MlpYSWdZU0JvWVc1a2JHVWdabTl5SUcxaGJtbHdkV3hoZEdsdVoxeHlYRzRnSUNBZ0lDb2dkR2hsSUhKbGMybDZaV0ZpYkdVZ2IySnFaV04wTGx4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhnZ2JHOWpZWFJwYjI0Z2FXNGdjR2w0Wld4elhISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2VTQnNiMk5oZEdsdmJpQnBiaUJ3YVhobGJITmNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJRzUxYkd3Z2FXWWdibTkwTENBbmFHOXlhWHB2Ym5SaGJDY3NJQ2QyWlhKMGFXTmhiQ2NzSUNkaWIzUm9KeUJwWmlCdmRtVnlJR2hoYm1Sc1pTQmhibVFnYlc5a1pTQmhkbUZwYkdGaWJHVXVYSEpjYmlBZ0lDQWdLaTljY2x4dUlDQWdJR1oxYm1OMGFXOXVJRzl1U0dGdVpHeGxLSGdzSUhrcElIdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ2NtVmpkQ0E5SUdWc1pXMWxiblF1WjJWMFFtOTFibVJwYm1kRGJHbGxiblJTWldOMEtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0JpYjNSMGIyMGdQU0J5WldOMExtSnZkSFJ2YlNBcklIZHBibVJ2ZHk1d1lXZGxXVTltWm5ObGREdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ2RtVnlkQ0E5SUhrZ1BqMGdZbTkwZEc5dElDMGdaM0poWWxOcGVtVTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0J5YVdkb2RDQTlJSEpsWTNRdWNtbG5hSFFnS3lCM2FXNWtiM2N1Y0dGblpWaFBabVp6WlhRN1hISmNiaUFnSUNBZ0lDQWdiR1YwSUdodmNub2dQU0I0SUQ0OUlISnBaMmgwSUMwZ1ozSmhZbE5wZW1VN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUtHOXdkR2x2Ym5NdWNtVnphWHBsSUQwOVBTQW5ZbTkwYUNjcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9kbVZ5ZENBbUppQm9iM0o2S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z0oySnZkR2duTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0habGNuUXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUFuZG1WeWRHbGpZV3duTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaG9iM0o2S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z0oyaHZjbWw2YjI1MFlXd25PMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlnb2IzQjBhVzl1Y3k1eVpYTnBlbVVnUFQwOUlDZGliM1JvSnlCOGZDQnZjSFJwYjI1ekxuSmxjMmw2WlNBOVBUMGdKM1psY25ScFkyRnNKeWtnSmlZZ2RtVnlkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdKM1psY25ScFkyRnNPeWRjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUtDaHZjSFJwYjI1ekxuSmxjMmw2WlNBOVBUMGdKMkp2ZEdnbklIeDhJRzl3ZEdsdmJuTXVjbVZ6YVhwbElEMDlQU0FuYUc5eWFYcHZiblJoYkNjcElDWW1JR2h2Y25vcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUNkb2IzSnBlbTl1ZEdGc095ZGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1WEhKY2JseHlYRzRnSUNBZ2JHVjBJR04xY25OdmNpQTlJREE3WEhKY2JseHlYRzRnSUNBZ1puVnVZM1JwYjI0Z1kzVnljMjl5VEdsemRHVnVaWElvWlhabGJuUXBJSHRjY2x4dUlDQWdJQ0FnSUNBdkx5QlRkMkZ3SUhSb1pTQmpkWEp6YjNJZ2QyaGxiaUIzWlNCaGNtVWdiM1psY2lCMGFHVWdhR0Z1Wkd4bFhISmNiaUFnSUNBZ0lDQWdhV1lnS0c5dVNHRnVaR3hsS0dWMlpXNTBMbkJoWjJWWUxDQmxkbVZ1ZEM1d1lXZGxXU2tnSVQwOUlHNTFiR3dwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbk52Y2lBaFBUMGdNaWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzVqZFhKemIzSWdQU0FuY0c5cGJuUmxjaWM3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnpiM0lnUFNBeU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR04xY25OdmNpQWhQVDBnTVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1amRYSnpiM0lnUFNBbmRHVjRkQ2M3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnpiM0lnUFNBeE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhOMFlYSjBLQ2s3WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZKbGMybDZaWEpCWTNSMVlXdzdYSEpjYmlJc0lpOHFLbHh5WEc0Z0tpQldaWEowYVdOaGJDQnlaWE5wZW1VZ2MzVndjRzl5ZENCbWIzSWdaR2wyTENCMFpYaDBZWEpsWVN3Z2FXWnlZVzFsTENCbGRHTXVYSEpjYmlBcVhISmNiaUFxSUVFZ2NISnZZbXhsYlNCM2FYUm9JSFJvWlNCeVpYTnBlbVVnWm1WaGRIVnlaU0J2WmlCMFpYaDBZWEpsWVNCaGJtUWdhV1p5WVcxbElHbHpJSFJvWVhRZ2FYUWdaRzlsY3lCdWIzUWdkMjl5YXlCcGJpQmhiR3hjY2x4dUlDb2dZbkp2ZDNObGNuTWdLR1Z6Y0dWamFXRnNiSGtnUldSblpTa2dZVzVrSUdseklHOW1kR1Z1SUhGMWFYUmxJSEYxYVhKcmVTNGdWR2hwY3lCemJXRnNiQ0J3WVdOcllXZGxJR0ZzYkc5M2N5QjViM1VnZEc5Y2NseHVJQ29nWVdSa0lIWmxjblJwWTJGc0lISmxjMmw2WlNCaFltbHNhWFI1SUhSdklHcDFjM1FnWVdKdmRYUWdZVzU1ZEdocGJtY3VYSEpjYmlBcVhISmNiaUFxTDF4eVhHNWNjbHh1YVcxd2IzSjBJRkpsYzJsNlpYSkJZM1IxWVd3Z1puSnZiU0FuTGk5eVpYTnBlbVZ5TFdGamRIVmhiQzVxY3ljN1hISmNibWx0Y0c5eWRDQlBjSFJwYjI1eklHWnliMjBnSnk0dlQzQjBhVzl1Y3k1cWN5YzdYSEpjYmx4eVhHNWNjbHh1THlvcVhISmNiaUFxSUVOdmJuTjBjblZqZEc5eUlHWnZjaUJoSUZKbGMybDZaWElnYjJKcVpXTjBYSEpjYmlBcUlFQndZWEpoYlNCelpXd2dVMlZzWldOMGIzSWdiM0lnUkU5TklHVnNaVzFsYm5SY2NseHVJQ29nUUhCaGNtRnRJRzl3ZEdsdmJuTWdUM0IwYVc5dWN5QnZZbXBsWTNRdVhISmNiaUFxSUVCamIyNXpkSEoxWTNSdmNseHlYRzRnS2k5Y2NseHVablZ1WTNScGIyNGdVbVZ6YVhwbGNpaHpaV3dzSUc5d2RHbHZibk1wSUh0Y2NseHVJQ0FnSUc5d2RHbHZibk1nUFNCdVpYY2dUM0IwYVc5dWN5aHZjSFJwYjI1ektUdGNjbHh1WEhKY2JpQWdJQ0JwWmloMGVYQmxiMllnYzJWc0lEMDlQU0JjSW5OMGNtbHVaMXdpS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdWc1pXMWxiblJ6SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoelpXd3BPMXh5WEc0Z0lDQWdJQ0FnSUdadmNpaDJZWElnYVQwd095QnBQR1ZzWlcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUc1bGR5QlNaWE5wZW1WeVFXTjBkV0ZzS0dWc1pXMWxiblJ6VzJsZExDQnZjSFJwYjI1ektUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lvYzJWc0xtNXZaR1ZVZVhCbEtTQjdYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGSmxjMmw2WlhKQlkzUjFZV3dvYzJWc0xDQnZjSFJwYjI1ektUdGNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVbVZ6YVhwbGNqdGNjbHh1SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKipcclxuICogQGZpbGVcclxuICogTWlkZGxlIHNlY3Rpb24gb2YgZGlhbG9nIGJveFxyXG4gKi9cclxuXHJcbmltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scy5qcyc7XHJcblxyXG5cclxubGV0IEJvZHkgPSBmdW5jdGlvbihkaWFsb2csIHBhcmVudERpdikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignZGlhbG9nLWNsLWJvZHknLCBvcHRpb25zLmNvbnRlbnQpO1xyXG4gICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgdGhpcy5kaXYgPSBkaXY7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xyXG5cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRoZSBib3R0b20gYnV0dG9ucyBzZWN0aW9uIG9mIHRoZSBkaWFsb2cgYm94XHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcblxyXG5sZXQgQm90dG9tID0gZnVuY3Rpb24oZGlhbG9nLCBwYXJlbnREaXYpIHtcclxuICAgIGxldCBvcHRpb25zID0gZGlhbG9nLm9wdGlvbnM7XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IGh0bWwgPSBgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZy1jbC1idG5cIj5PazwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJkaWFsb2ctY2wtYnRuXCI+Q2FuY2VsPC9idXR0b24+YDtcclxuICAgICAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignZGlhbG9nLWNsLWJvdCcpO1xyXG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLmJ1dHRvbnMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWRkT2soZGl2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLmJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRPayhkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhidXR0b24sICdkaWFsb2ctY2wtYnRuJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdPayc7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljayhkaWFsb2cpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbi5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCdXR0b24oZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoYnV0dG9uLCAnZGlhbG9nLWNsLWJ0bicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpdGVtLmNvbnRlbnRzO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtLmNsaWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soZGlhbG9nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaXRlbS5mb2N1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBidXR0b24uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3R0b207XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogQ29udmVuaWVuY2UgZnVuY3Rpb25zIGZvciB0aGUgRE9NLlxyXG4gKiBUb29scyB0aGF0IGF2b2lkIGhhdmluZyB0byBoYXZlIGpRdWVyeSBpbnN0YWxsZWQuXHJcbiAqL1xyXG5cclxubGV0IFRvb2xzID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQWRkIGEgY2xhc3MgdG8gYW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZFxyXG4gKi9cclxuVG9vbHMuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdClcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGVsc2VcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XHJcbn1cclxuXHJcblRvb2xzLmFkZENsYXNzZXMgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc2VzKSB7XHJcbiAgICBpZihjbGFzc2VzID09PSB1bmRlZmluZWQgfHwgY2xhc3NlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaCgoY2xzKSA9PiB7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudCwgY2xzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgRElWIHdpdGggYSBwcm92aWRlZCBjbGFzcyBuYW1lLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZCB0byB0aGUgZGl2XHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGRpdi4gSFRNTCBvciBFbGVtZW50XHJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBDcmVhdGVkIERPTSBFbGVtZW50XHJcbiAqL1xyXG5Ub29scy5jcmVhdGVDbGFzc2VkRGl2ID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBjb250ZW50KSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBUb29scy5hZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XHJcbiAgICBUb29scy5hZGRDb250ZW50KGRpdiwgY29udGVudCk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGNvbnRlbnQgdG8gYW4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudC4gQ2FuIGJlIEhUTUwgb3IgYW4gRWxlbWVudC5cclxuICovXHJcblRvb2xzLmFkZENvbnRlbnQgPSBmdW5jdGlvbihlbGVtZW50LCBjb250ZW50KSB7XHJcbiAgICBpZihUb29scy5pc1N0cmluZyhjb250ZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XHJcbiAgICB9IGVsc2UgaWYoVG9vbHMuaXNFbGVtZW50KGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuVG9vbHMuaXNTdHJpbmcgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCAoKCEhdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpO1xyXG59XHJcblxyXG5Ub29scy5pc0VsZW1lbnQgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgdmFsLm5vZGVWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29scztcclxuXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBGbGV4aWJsZSBhbmQgY29uZmlndXJhYmxlIGRpYWxvZyBib3ggb2JqZWN0XHJcbiAqL1xyXG5cclxuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zLmpzJztcclxuaW1wb3J0IFRpdGxlQmFyIGZyb20gJy4vVGl0bGVCYXIuanMnO1xyXG5pbXBvcnQgQm9keSBmcm9tICcuL0JvZHkuanMnO1xyXG5pbXBvcnQgQm90dG9tIGZyb20gJy4vQm90dG9tLmpzJztcclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVzaXplci1jbCc7XHJcbmltcG9ydCBNYXNrIGZyb20gJy4vTWFzay5qcyc7XHJcblxyXG5sZXQgRGlhbG9nID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICBsZXQgYm9keSA9IG51bGwsIG1hc2sgPSBudWxsO1xyXG5cclxuICAgIGxldCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIERpYWxvZy56SW5kZXggKz0gMjtcclxuICAgICAgICB0aGlzLnpJbmRleCA9IERpYWxvZy56SW5kZXg7XHJcblxyXG4gICAgICAgIGxldCBkaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdkaWFsb2ctY2wnKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzc2VzKGRpdiwgb3B0aW9ucy5hZGRDbGFzcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGl2ID0gZGl2O1xyXG4gICAgICAgIGRpdi5zdHlsZS56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuXHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgaW5zdGFsbFJlc2l6YWJsZShkaXYpO1xyXG5cclxuICAgICAgICBuZXcgVGl0bGVCYXIodGhpcywgZGl2KTtcclxuICAgICAgICBib2R5ID0gbmV3IEJvZHkodGhpcywgZGl2KTtcclxuICAgICAgICBuZXcgQm90dG9tKHRoaXMsIGRpdik7XHJcbiAgICAgICAgbWFzayA9IG5ldyBNYXNrKHRoaXMpO1xyXG5cclxuICAgICAgICBwbGFjZShkaXYsIHBhcmVudCk7XHJcblxyXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEFkZCBjYW5jZWwgb24gRVNDIGhhbmRsZXJcclxuICAgICAgICAvLyBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbnN0YWxsUmVzaXphYmxlID0gKGRpdikgPT4ge1xyXG4gICAgICAgIGlmKG9wdGlvbnMucmVzaXplICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgbGV0IHJzT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICdyZXNpemUnOiBvcHRpb25zLnJlc2l6ZSxcclxuICAgICAgICAgICAgICAgICdoYW5kbGUnOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAnZ3JhYlNpemUnOiBvcHRpb25zLmdyYWJTaXplXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBuZXcgUmVzaXplcihkaXYsIHJzT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB0b1B4KHZhbCkge1xyXG4gICAgICAgIHJldHVybiAnJyArIHZhbCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBsYWNlID0gKGRpdiwgcGFyZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhcmVudFdpZCA9IHBhcmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBsZXQgcGFyZW50SGl0ID0gcGFyZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGRpdi5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gZGl2Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICBsZXQgdG9wID0gcGFyZW50SGl0LzIgLSBoZWlnaHQvMjtcclxuICAgICAgICBpZih0b3AgPCAxMCkge1xyXG4gICAgICAgICAgICB0b3AgPSAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZWZ0ID0gcGFyZW50V2lkLzIgLSB3aWR0aC8yO1xyXG4gICAgICAgIGlmKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSB0b1B4KGxlZnQpO1xyXG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSB0b1B4KHRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIHRoaXMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICBUb29scy5hZGRDb250ZW50KGJvZHkuZGl2LCBjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbWFzay5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZGl2KTtcclxuICAgIH1cclxufVxyXG5cclxuRGlhbG9nLnpJbmRleCA9IDEwMDAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xyXG5cclxuIiwiLyoqXHJcbiAqIE1hc2sgdGhhdCBhbGxvd3MgdGhlIGRpYWxvZyBib3ggdG8gYmUgbW9kYWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcbmxldCBNYXNrID0gZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIGxldCBtYXNrID0gbnVsbDtcclxuXHJcbiAgICBpZihvcHRpb25zLm1vZGFsKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgbWFzayA9ICBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdtYXNrJyk7IC8vIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBtYXNrLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBtYXNrLnN0eWxlLmxlZnQgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUudG9wID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgbWFzay5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuekluZGV4ID0gZGlhbG9nLnpJbmRleCAtIDE7XHJcblxyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihtYXNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgICAgICAgICBtYXNrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hc2s7XHJcblxyXG4iLCIvKipcclxuICogVmFyaW91cyBpbnRlcmZhY2Ugb3B0aW9ucyB3ZSBjYW4gc2VsZWN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBvcHRpb25zLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxudmFyIE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcbiAgICAvLy8gVGl0bGUgYmFyIHRleHRcclxuICAgIHRoaXMudGl0bGUgPSAnRGlhbG9nIEJveCc7XHJcblxyXG4gICAgLy8vIEFueSBhZGRlZCBjbGFzcyBvciBjbGFzc2VzIGZvciB0aGUgbWFpbiBkaWFsb2cgYm94IGRpdlxyXG4gICAgLy8vIENhbiBiZSBhIHN0cmluZyBvciBtdWx0aXBsZSBzdHJpbmdzIHNwYWNlIGRlbGltaXRlZFxyXG4gICAgdGhpcy5hZGRDbGFzcyA9IG51bGw7XHJcblxyXG4gICAgLy8vIElzIHRoaXMgZGlhbG9nIGJveCByZXNpemFibGU/XHJcbiAgICAvLy8gT3B0aW9ucyBhcmU6ICdub25lJywgJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXHJcbiAgICB0aGlzLnJlc2l6ZSA9ICdub25lJztcclxuXHJcbiAgICAvLy8gU2l6ZSBvZiB0aGUgYm9yZGVyIGVkZ2Ugd2UgY2FuIGdyYWIgaWYgcmVzaXphYmxlIGluIHBpeGVsc1xyXG4gICAgdGhpcy5ncmFiU2l6ZSA9IDQ7XHJcblxyXG4gICAgLy8vIEFycmF5IG9mIHRpdGxlIGJhciBidXR0b25zIHRvIGFkZC5cclxuICAgIC8vLyBJZiBudWxsLCBhIGNsb3NlIGJ1dHRvbiBpcyBhZGRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgLy8vIE90aGVyd2lzZSwgYW4gYXJyYXkgb2Ygb2JqZWN0cywgd2l0aCB0aGVzZSBmaWVsZHM6XHJcbiAgICAvLy8gICB0eXBlOiAnY2xvc2UnIGZvciBhIGNsb3NlICBidXR0b24sICdjdXN0b20nIGZvciBjdXN0b20gYnV0dG9uIGNvbnRlbnRzXHJcbiAgICAvLy8gICBjb250ZW50czogSFRNTCB0byBwbGFjZSBpbnNpZGUgYnV0dG9uIHRhZ1xyXG4gICAgLy8vICAgY2xpY2s6IENsaWNrIGhhbmRsZXJcclxuICAgIHRoaXMudGl0bGVCYXJCdXR0b25zID0gbnVsbDtcclxuXHJcbiAgICAvLy8gQW55IGFkZGVkIGNsYXNzIG9yIGNsYXNzZXMgZm9yIHRoZSB0aXRsZSBiYXIgZGl2XHJcbiAgICAvLy8gQ2FuIGJlIGEgc3RyaW5nIG9yIG11bHRpcGxlIHN0cmluZ3Mgc3BhY2UgZGVsaW1pdGVkXHJcbiAgICB0aGlzLnRpdGxlQmFyQWRkQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIC8vLyBBcnJheSBvZiBidXR0b25zIGZvciB0aGUgYm90dG9tLlxyXG4gICAgLy8vIElmIG51bGwsIGFuIE9rIGJ1dHRvbiBpcyBhZGRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgLy8vIE90aGVyd2lzZSwgYW4gYXJyYXkgb2Ygb2JqZWN0cywgd2l0aCB0aGVzZSBmaWVsZHM6XHJcbiAgICAvLy8gICBjb250ZW50czogSWYgcHJvdmlkZWQsIEhUTUwgdG8gcGxhY2UgaW5zaWRlIGJ1dHRvbiB0YWdcclxuICAgIC8vLyAgIGNsaWNrOiBDbGljayBoYW5kbGVyXHJcbiAgICAvLy8gICBmb2N1czogdHJ1ZSBpZiB3ZSB3YW50IHRvIHNldCBmb2N1cyBvbiB0aGlzIGJ1dHRvblxyXG4gICAgdGhpcy5idXR0b25zID0gbnVsbDtcclxuXHJcbiAgICAvLy8gQ29udGVudCB0byBhZGQgdG8gdGhlIGRpYWxvZyBib3guIElmIG51bGwsIG5vbmUgaXMgYWRkZWQgb24gY3JlYXRpb24uXHJcbiAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cclxuICAgIC8vLyBJcyB0aGlzIGEgbW9kYWwgZGlhbG9nIGJveD8gSWYgdHJ1ZSwgY29udHJvbHMgdW5kZXJuZWF0aCBhcmUgZGlzYWJsZWQuXHJcbiAgICB0aGlzLm1vZGFsID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uIFwiICsgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb25zO1xyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogVGl0bGUgYmFyIG1hbmFnZW1lbnRcclxuICovXHJcblxyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5cclxuXHJcbmxldCBUaXRsZUJhciA9IGZ1bmN0aW9uKGRpYWxvZywgcGFyZW50RGl2KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIC8vLyBNb3VzZSBtb3ZlIGV2ZW50IGhhbmRsZXJcclxuICAgIGxldCBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBudWxsO1xyXG5cclxuICAgIGxldCBpbml0aWFsWCwgaW5pdGlhbFk7XHJcbiAgICBsZXQgaW5pdGlhbFBvc2l0aW9uWCwgaW5pdGlhbFBvc2l0aW9uWTtcclxuXHJcbiAgICBsZXQgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgaHRtbCA9IGA8aDE+JHtvcHRpb25zLnRpdGxlfTwvaDE+YDtcclxuICAgICAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignZGlhbG9nLWNsLXRvcCcsIGh0bWwpO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzZXMoZGl2LCBvcHRpb25zLnRpdGxlQmFyQWRkQ2xhc3MpO1xyXG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLnRpdGxlQmFyQnV0dG9ucyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhZGRDbG9zZShkaXYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudGl0bGVCYXJCdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsb3NlKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09PSAnY3VzdG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEN1c3RvbShkaXYsIGl0ZW0pOyAvLyBhZGRDdXN0b20oZGl2LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGgxID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XHJcblxyXG4gICAgICAgIGgxLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpbml0aWFsWCA9IGV2ZW50LnBhZ2VYO1xyXG4gICAgICAgICAgICBpbml0aWFsWSA9IGV2ZW50LnBhZ2VZO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlY3QgPSBkaWFsb2cuZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBpbml0aWFsUG9zaXRpb25YID0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBpbml0aWFsUG9zaXRpb25ZID0gcmVjdC50b3A7XHJcblxyXG4gICAgICAgICAgICBpbnN0YWxsSGFuZGxlcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ2xvc2UoZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGJ1dHRvbiwgJ2RpYWxvZy1jbC10Yi1idXR0b24nKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtY2xvc2VcIj4nO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtLmNsaWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDdXN0b20oZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGJ1dHRvbiwgJ2RpYWxvZy1jbC10Yi1idXR0b24nKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gaXRlbS5jb250ZW50cztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZU1vdmVMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgaWYoZS5idXR0b25zICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkeCA9IGUucGFnZVggLSBpbml0aWFsWDtcclxuICAgICAgICBsZXQgZHkgPSBlLnBhZ2VZIC0gaW5pdGlhbFk7XHJcblxyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvblggPSBpbml0aWFsUG9zaXRpb25YICsgZHg7XHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uWSA9IGluaXRpYWxQb3NpdGlvblkgKyBkeTtcclxuXHJcbiAgICAgICAgZGlhbG9nLmRpdi5zdHlsZS5sZWZ0ID0gbmV3UG9zaXRpb25YICsgJ3B4JztcclxuICAgICAgICBkaWFsb2cuZGl2LnN0eWxlLnRvcCA9IG5ld1Bvc2l0aW9uWSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VVcExpc3RlbmVyKGUpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGxIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBtb3VzZU1vdmVMaXN0ZW5lcjtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUhhbmRsZXJzKCkge1xyXG4gICAgICAgIGlmKGluc3RhbGxlZE1vdmVMaXN0ZW5lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgICAgIGluc3RhbGxlZE1vdmVMaXN0ZW5lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZUJhcjtcclxuIiwiLy8gVGhlIHB1YmxpYy1wYXRoIG1vZHVsZSBtdXN0IGJlIGltcG9ydGVkIGZpcnN0IVxyXG4vL2ltcG9ydCAnLi9wdWJsaWMtcGF0aC5qcyc7XHJcblxyXG5pbXBvcnQgJy4vcG9seWZpbGxzL2FsbC5qcyc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cuanMnO1xyXG5pbXBvcnQgJy4vZGlhbG9nLnNjc3MnO1xyXG5pbXBvcnQgJ2ljb25zLWNsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpYWxvZzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9kaWFsb2cuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9kaWFsb2cuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vZGlhbG9nLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9