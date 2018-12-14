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
/******/ 		if (null) script.crossOrigin = null;
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
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "cb27d8a89938e250fe37";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
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
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
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
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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
exports.push([module.i, ".icons-cl {\n  display: inline-block;\n  background-image: url(" + escape(__webpack_require__(/*! ./images/icons.png */ "./node_modules/icons-cl/src/images/icons.png")) + ");\n  width: 16px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  padding: 0;\n}\n\n.icons-cl.icons-cl-caret-1-n {\n  background-position: 0 0;\n}\n\n.icons-cl.icons-cl-caret-1-ne {\n  background-position: -16px 0;\n}\n\n.icons-cl.icons-cl-caret-1-e {\n  background-position: -32px 0;\n}\n\n.icons-cl.icons-cl-caret-1-se {\n  background-position: -48px 0;\n}\n\n.icons-cl.icons-cl-caret-1-s {\n  background-position: -64px 0;\n}\n\n.icons-cl.icons-cl-caret-1-sw {\n  background-position: -80px 0;\n}\n\n.icons-cl.icons-cl-caret-1-w {\n  background-position: -96px 0;\n}\n\n.icons-cl.icons-cl-caret-1-nw {\n  background-position: -112px 0;\n}\n\n.icons-cl.icons-cl-caret-2-n-s {\n  background-position: -128px 0;\n}\n\n.icons-cl.icons-cl-caret-2-e-w {\n  background-position: -144px 0;\n}\n\n.icons-cl.icons-cl-triangle-1-n {\n  background-position: 0px -16px;\n}\n\n.icons-cl.icons-cl-triangle-1-e {\n  background-position: -32px -16px;\n}\n\n.icons-cl.icons-cl-arrow-1-n {\n  background-position: 0px -32px;\n}\n\n.icons-cl.icons-cl-arrow-1-w {\n  background-position: -96px -32px;\n}\n\n.icons-cl.icons-cl-arrowstop-1-n {\n  background-position: -192px -32px;\n}\n\n.icons-cl.icons-cl-arrowstop-1-s {\n  background-position: -224px -32px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-n {\n  background-position: 0px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-ne {\n  background-position: -16px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-e {\n  background-position: -32px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-se {\n  background-position: -48px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-s {\n  background-position: -64px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-sw {\n  background-position: -80px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-w {\n  background-position: -96px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-nw {\n  background-position: -112px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-2-n-s {\n  background-position: -128px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-2-ne-sw {\n  background-position: -144px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-2-e-w {\n  background-position: -160px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-2-se-nw {\n  background-position: -176px -48px;\n}\n\n.icons-cl.icons-cl-arrowthickstop-1-n {\n  background-position: -192px -48px;\n}\n\n.icons-cl.icons-cl-arrowthickstop-1-e {\n  background-position: -208px -48px;\n}\n\n.icons-cl.icons-cl-arrowthickstop-1-s {\n  background-position: -224px -48px;\n}\n\n.icons-cl.icons-cl-arrowthickstop-1-w {\n  background-position: -240px -48px;\n}\n\n.icons-cl.icons-cl-arrowreturnthick-1-w {\n  background-position: 0px -64px;\n}\n\n.icons-cl.icons-cl-arrowreturnthick-1-e {\n  background-position: -32px -64px;\n}\n\n.icons-cl.icons-cl-folder-collapsed {\n  background-position: 0px -96px;\n}\n\n.icons-cl.icons-cl-folder-open {\n  background-position: -16px -96px;\n}\n\n.icons-cl.icons-cl-document {\n  background-position: -32px -96px;\n}\n\n.icons-cl.icons-cl-document-b {\n  background-position: -48px -96px;\n}\n\n.icons-cl.icons-cl-note {\n  background-position: -64px -96px;\n}\n\n.icons-cl.icons-cl-mail-closed {\n  background-position: -80px -96px;\n}\n\n.icons-cl.icons-cl-mail-open {\n  background-position: -96px -96px;\n}\n\n.icons-cl.icons-cl-suitcase {\n  background-position: -112px -96px;\n}\n\n.icons-cl.icons-cl-comment {\n  background-position: -128px -96px;\n}\n\n.icons-cl.icons-cl-person {\n  background-position: -144px -96px;\n}\n\n.icons-cl.icons-cl-print {\n  background-position: -160px -96px;\n}\n\n.icons-cl.icons-cl-trash {\n  background-position: -176px -96px;\n}\n\n.icons-cl.icons-cl-locked {\n  background-position: -192px -96px;\n}\n\n.icons-cl.icons-cl-unlocked {\n  background-position: -208px -96px;\n}\n\n.icons-cl.icons-cl-bookmark {\n  background-position: -224px -96px;\n}\n\n.icons-cl.icons-cl-tag {\n  background-position: -240px -96px;\n}\n\n.icons-cl.icons-cl-home {\n  background-position: 0px -112px;\n}\n\n.icons-cl.icons-cl-flag {\n  background-position: -16px -112px;\n}\n\n.icons-cl.icons-cl-calculator {\n  background-position: -32px -112px;\n}\n\n.icons-cl.icons-cl-cart {\n  background-position: -48px -112px;\n}\n\n.icons-cl.icons-cl-pencil {\n  background-position: -64px -112px;\n}\n\n.icons-cl.icons-cl-clock {\n  background-position: -80px -112px;\n}\n\n.icons-cl.icons-cl-disk {\n  background-position: -96px -112px;\n}\n\n.icons-cl.icons-cl-calendar {\n  background-position: -112px -112px;\n}\n\n.icons-cl.icons-cl-zoomin {\n  background-position: -128px -112px;\n}\n\n.icons-cl.icons-cl-zoomout {\n  background-position: -144px -112px;\n}\n\n.icons-cl.icons-cl-search {\n  background-position: -160px -112px;\n}\n\n.icons-cl.icons-cl-wrench {\n  background-position: -176px -112px;\n}\n\n.icons-cl.icons-cl-gear {\n  background-position: -192px -112px;\n}\n\n.icons-cl.icons-cl-heart {\n  background-position: -208px -112px;\n}\n\n.icons-cl.icons-cl-star {\n  background-position: -224px -112px;\n}\n\n.icons-cl.icons-cl-link {\n  background-position: -240px -112px;\n}\n\n.icons-cl.icons-cl-close {\n  background-position: -80px -128px;\n}\n\n.icons-cl.icons-cl-closethick {\n  background-position: -96px -128px;\n}\n\n.icons-cl.icons-cl-alert {\n  background-position: 0px -144px;\n}\n\n.icons-cl.icons-cl-help {\n  background-position: -48px -144px;\n}\n\n.icons-cl.icons-cl-check {\n  background-position: -64px -144px;\n}\n\n.icons-cl.icons-cl-play {\n  background-position: 0px -160px;\n}\n\n.icons-cl.icons-cl-pause {\n  background-position: -16px -160px;\n}\n\n", ""]);

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
exports.push([module.i, "div.dialog-cl {\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid #444444;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  cursor: default;\n  width: 350px;\n  min-width: 150px;\n  max-width: 500px;\n  height: auto;\n  min-height: 150px;\n  max-height: 600px;\n}\n\ndiv.dialog-cl-bot {\n  box-sizing: border-box;\n  flex: 0 0 22px;\n  width: 100%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  border-top: 1px solid #cccccc;\n  cursor: default;\n}\n\ndiv.dialog-cl-body {\n  flex: 1;\n  width: 100%;\n  overflow-y: auto;\n  background-color: white;\n  padding: 0.25em 0.25em;\n}\n\ndiv.dialog-cl-body p:first-child,\ndiv.dialog-cl-body h1:first-child,\ndiv.dialog-cl-body h2:first-child {\n  margin-top: 0;\n}\n\ndiv.dialog-cl-body p:last-child {\n  margin-bottom: 0;\n}\n\nbutton.dialog-cl-btn {\n  display: inline-block;\n  min-width: 7em;\n  margin: 10px 10px 10px 0;\n  padding: 3px 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 0.8em;\n  font-weight: bold;\n  border: 1px solid #999;\n  border-radius: 1px;\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  color: #444;\n  background: #fff;\n}\n\nbutton.dialog-cl-btn:active {\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n\ndiv.dialog-cl-top {\n  box-sizing: border-box;\n  background-color: #009688;\n  margin: 0;\n  padding: 0;\n  flex: 0 0 25px;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\ndiv.dialog-cl-top h1 {\n  flex-grow: 1;\n  margin: 0;\n  padding: 4px 4px 0 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 16px;\n  line-height: 16px;\n  user-select: none;\n}\n\ndiv.dialog-cl-top button.dialog-cl-tb-button {\n  flex: 0 0 25px;\n  position: relative;\n  box-sizing: border-box;\n  height: 25px;\n  width: 25px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n}\n\ndiv.dialog-cl-top button.dialog-cl-tb-button span {\n  position: absolute;\n  left: 4px;\n  top: 4px;\n}\n\ndiv.dialog-cl-top .dialog-cl-tb-button:hover {\n  background-color: #e81123;\n  cursor: pointer;\n}\n\ndiv.dialog-cl div.message-cl {\n  font-size: 1.25em;\n  padding: 1em;\n}\n\n", ""]);

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
	module.hot.accept(/*! !../../css-loader!../../resolve-url-loader!../../sass-loader/lib/loader.js?sourceMap!./icons.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/icons-cl/src/icons.scss", function() {
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
	});

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

/***/ "./node_modules/resizer-cl/src/Options.js":
/*!************************************************!*\
  !*** ./node_modules/resizer-cl/src/Options.js ***!
  \************************************************/
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

/***/ "./node_modules/resizer-cl/src/app.modules.js":
/*!****************************************************!*\
  !*** ./node_modules/resizer-cl/src/app.modules.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizer.js */ "./node_modules/resizer-cl/src/resizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _resizer_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




console.log('app.modules.js');

/***/ }),

/***/ "./node_modules/resizer-cl/src/resizer-actual.js":
/*!*******************************************************!*\
  !*** ./node_modules/resizer-cl/src/resizer-actual.js ***!
  \*******************************************************/
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

        let body = document.querySelector('body');
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
            return 'vertical';
        }

        if((options.resize === 'both' || options.resize === 'horizontal') && horz) {
            return 'horizontal';
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

/***/ "./node_modules/resizer-cl/src/resizer.js":
/*!************************************************!*\
  !*** ./node_modules/resizer-cl/src/resizer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resizer_actual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizer-actual.js */ "./node_modules/resizer-cl/src/resizer-actual.js");
/* harmony import */ var _Options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options.js */ "./node_modules/resizer-cl/src/Options.js");
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
/**
 * @file
 * Middle section of dialog box
 */


var Body = function Body(dialog, parentDiv) {
  var options = dialog.options;
  var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].createClassedDiv('dialog-cl-body', options.content);
  parentDiv.appendChild(div);
  this.div = div;
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./src/Bottom.js":
/*!***********************!*\
  !*** ./src/Bottom.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
/**
 * @file
 * The bottom buttons section of the dialog box
 */


var Bottom = function Bottom(dialog, parentDiv) {
  var options = dialog.options;

  var initialize = function initialize() {
    // let html = `<button class="dialog-cl-btn">Ok</button><button class="dialog-cl-btn">Cancel</button>`;
    var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].createClassedDiv('dialog-cl-bot');
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
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(button, 'dialog-cl-btn');
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
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(button, 'dialog-cl-btn');
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

/* harmony default export */ __webpack_exports__["default"] = (Bottom);

/***/ }),

/***/ "./src/DOM/Tools.js":
/*!**************************!*\
  !*** ./src/DOM/Tools.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


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
  return typeof val === 'string' || !!val && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(val) === 'object' && Object.prototype.toString.call(val) === '[object String]';
};

Tools.isElement = function (val) {
  return val !== undefined && val !== null && val.nodeValue !== undefined;
};

/* harmony default export */ __webpack_exports__["default"] = (Tools);

/***/ }),

/***/ "./src/Dialog.js":
/*!***********************!*\
  !*** ./src/Dialog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options.js */ "./src/Options.js");
/* harmony import */ var _TitleBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar.js */ "./src/TitleBar.js");
/* harmony import */ var _Body_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Body.js */ "./src/Body.js");
/* harmony import */ var _Bottom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bottom.js */ "./src/Bottom.js");
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! resizer-cl */ "./node_modules/resizer-cl/src/app.modules.js");
/* harmony import */ var _Mask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Mask.js */ "./src/Mask.js");
/**
 * @file
 * Flexible and configurable dialog box object
 */








var Dialog = function Dialog(options) {
  var _this = this;

  options = new _Options_js__WEBPACK_IMPORTED_MODULE_0__["default"](options);
  this.options = options;
  var body = null,
      mask = null;

  var initialize = function initialize() {
    Dialog.zIndex += 2;
    _this.zIndex = Dialog.zIndex;
    var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__["default"].createClassedDiv('dialog-cl');
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__["default"].addClasses(div, options.addClass);
    _this.div = div;
    div.style.zIndex = _this.zIndex;
    var parent = document.querySelector('body');
    parent.appendChild(div);
    installResizable(div);
    new _TitleBar_js__WEBPACK_IMPORTED_MODULE_1__["default"](_this, div);
    body = new _Body_js__WEBPACK_IMPORTED_MODULE_2__["default"](_this, div);
    new _Bottom_js__WEBPACK_IMPORTED_MODULE_3__["default"](_this, div);
    mask = new _Mask_js__WEBPACK_IMPORTED_MODULE_6__["default"](_this);
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
      new resizer_cl__WEBPACK_IMPORTED_MODULE_5__["default"](div, rsOptions);
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
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__["default"].addContent(body.div, content);
  };

  this.close = function () {
    mask.remove();
    this.div.parentNode.removeChild(this.div);
  };
};

Dialog.zIndex = 10000;
/* harmony default export */ __webpack_exports__["default"] = (Dialog);

/***/ }),

/***/ "./src/Mask.js":
/*!*********************!*\
  !*** ./src/Mask.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
/**
 * Mask that allows the dialog box to be modal.
 */


var Mask = function Mask(dialog) {
  var options = dialog.options;
  var mask = null;

  if (options.modal) {
    var body = document.querySelector('body');
    mask = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].createClassedDiv('mask'); // document.createElement('div');

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

/* harmony default export */ __webpack_exports__["default"] = (Mask);

/***/ }),

/***/ "./src/MessageBox.js":
/*!***************************!*\
  !*** ./src/MessageBox.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.js */ "./src/Dialog.js");
/**
 * Handy Simple Message Box
 */


var MessageBox = function MessageBox(title, message, type, button1, button2) {
  // Default: OK
  var buttons = [{
    contents: 'Ok',
    click: function click(dialog) {
      if (button1 !== undefined) {
        button1();
      }

      dialog.close();
    },
    'focus': true
  }];

  if (type === MessageBox.OKCANCEL) {
    buttons = [{
      contents: 'Ok',
      click: function click(dialog) {
        if (button1 !== undefined) {
          button1();
        }

        dialog.close();
      },
      'focus': true
    }, {
      contents: 'Cancel',
      click: function click(dialog) {
        if (button2 !== undefined) {
          button2();
        }

        dialog.close();
      }
    }];
  }

  var dialog = new _Dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    'title': title,
    'content': '<div class="message-cl"><p>' + message + '</p></div>',
    'buttons': buttons
  });
};

MessageBox.OK = 0;
MessageBox.OKCANCEL = 1;
/* harmony default export */ __webpack_exports__["default"] = (MessageBox);

/***/ }),

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

/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ }),

/***/ "./src/TitleBar.js":
/*!*************************!*\
  !*** ./src/TitleBar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
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
    var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].createClassedDiv('dialog-cl-top', html);
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClasses(div, options.titleBarAddClass);
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
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(button, 'dialog-cl-tb-button');
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
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(button, 'dialog-cl-tb-button');
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

/* harmony default export */ __webpack_exports__["default"] = (TitleBar);

/***/ }),

/***/ "./src/app.modules.js":
/*!****************************!*\
  !*** ./src/app.modules.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/all.js */ "./src/polyfills/all.js");
/* harmony import */ var _polyfills_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.js */ "./src/Dialog.js");
/* harmony import */ var _MessageBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageBox.js */ "./src/MessageBox.js");
/* harmony import */ var _dialog_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.scss */ "./src/dialog.scss");
/* harmony import */ var _dialog_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dialog_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var icons_cl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons-cl */ "./node_modules/icons-cl/src/icons.js");
// The public-path module must be imported first!
//import './public-path.js';





_Dialog_js__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox = _MessageBox_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Dialog_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
	module.hot.accept(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/lib/loader.js?sourceMap!./dialog.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/dialog.scss", function() {
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
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/polyfills/all.js":
/*!******************************!*\
  !*** ./src/polyfills/all.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2ljb25zLWNsL3NyYy9pY29ucy5zY3NzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9kaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL2ljb25zLWNsL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvaWNvbnMtY2wvc3JjL2ljb25zLnNjc3M/ZTUyMiIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvaWNvbnMtY2wvc3JjL2ltYWdlcy9pY29ucy5wbmciLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL3Jlc2l6ZXItY2wvc3JjL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL3Jlc2l6ZXItY2wvc3JjL2FwcC5tb2R1bGVzLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9yZXNpemVyLWNsL3NyYy9yZXNpemVyLWFjdHVhbC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvcmVzaXplci1jbC9zcmMvcmVzaXplci5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvQm9keS5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvQm90dG9tLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9ET00vVG9vbHMuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL0RpYWxvZy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvTWFzay5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvTWVzc2FnZUJveC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvVGl0bGVCYXIuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL2FwcC5tb2R1bGVzLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9kaWFsb2cuc2Nzcz85YjNjIl0sIm5hbWVzIjpbIkJvZHkiLCJkaWFsb2ciLCJwYXJlbnREaXYiLCJvcHRpb25zIiwiZGl2IiwiVG9vbHMiLCJjcmVhdGVDbGFzc2VkRGl2IiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiQm90dG9tIiwiaW5pdGlhbGl6ZSIsImJ1dHRvbnMiLCJhZGRPayIsImZvckVhY2giLCJpdGVtIiwiYWRkQnV0dG9uIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImFkZENsYXNzIiwiaW5uZXJIVE1MIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1bmRlZmluZWQiLCJjbGljayIsImNsb3NlIiwiZm9jdXMiLCJjb250ZW50cyIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRDbGFzc2VzIiwiY2xhc3NlcyIsInNwbGl0IiwiY2xzIiwiYWRkQ29udGVudCIsImlzU3RyaW5nIiwiaXNFbGVtZW50IiwidmFsIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwibm9kZVZhbHVlIiwiRGlhbG9nIiwiT3B0aW9ucyIsImJvZHkiLCJtYXNrIiwiekluZGV4Iiwic3R5bGUiLCJwYXJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zdGFsbFJlc2l6YWJsZSIsIlRpdGxlQmFyIiwiTWFzayIsInBsYWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJyZXNpemUiLCJyc09wdGlvbnMiLCJncmFiU2l6ZSIsIlJlc2l6ZXIiLCJ0b1B4IiwicGFyZW50V2lkIiwib2Zmc2V0V2lkdGgiLCJwYXJlbnRIaXQiLCJvZmZzZXRIZWlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJtb2RhbCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiTWVzc2FnZUJveCIsInRpdGxlIiwibWVzc2FnZSIsImJ1dHRvbjEiLCJidXR0b24yIiwiT0tDQU5DRUwiLCJPSyIsInRpdGxlQmFyQnV0dG9ucyIsInRpdGxlQmFyQWRkQ2xhc3MiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJpbnN0YWxsZWRNb3ZlTGlzdGVuZXIiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiaW5pdGlhbFBvc2l0aW9uWCIsImluaXRpYWxQb3NpdGlvblkiLCJodG1sIiwiYWRkQ2xvc2UiLCJhZGRDdXN0b20iLCJoMSIsInBhZ2VYIiwicGFnZVkiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5zdGFsbEhhbmRsZXJzIiwibW91c2VNb3ZlTGlzdGVuZXIiLCJlIiwicmVtb3ZlSGFuZGxlcnMiLCJkeCIsImR5IiwibmV3UG9zaXRpb25YIiwibmV3UG9zaXRpb25ZIiwibW91c2VVcExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBNkI7QUFDN0IscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2QkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQWtCLDhCQUE4QjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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a0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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Z0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRpYWxvZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEaWFsb2dcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlRGlhbG9nXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZURpYWxvZ1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJjYjI3ZDhhODk5MzhlMjUwZmUzN1wiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gXCJEaWFsb2dcIjtcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHQpXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9hcHAubW9kdWxlcy5qc1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5tb2R1bGVzLmpzXCIpO1xuIiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pY29ucy1jbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaW1hZ2VzL2ljb25zLnBuZ1wiKSkgKyBcIik7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbmUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggMDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAwO1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAwO1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IDA7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXN3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IDA7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbncge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IDA7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0yLW4tcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggMDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTItZS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAwO1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTMycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTMycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMzJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0zMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW5lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTQ4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtc2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTQ4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW53IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1uLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLW5lLXN3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1lLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLXNlLW53IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTQ4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTQ4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTY0cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNjRweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWZvbGRlci1jb2xsYXBzZWQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtZm9sZGVyLW9wZW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1kb2N1bWVudCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWRvY3VtZW50LWIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1ub3RlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtbWFpbC1jbG9zZWQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1tYWlsLW9wZW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1zdWl0Y2FzZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jb21tZW50IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLXBlcnNvbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1wcmludCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC10cmFzaCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1sb2NrZWQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtdW5sb2NrZWQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYm9va21hcmsge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtdGFnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWhvbWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWZsYWcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtY2FsY3VsYXRvciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jYXJ0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLXBlbmNpbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jbG9jayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1kaXNrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNhbGVuZGFyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC16b29taW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLXpvb21vdXQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLXNlYXJjaCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtd3JlbmNoIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1nZWFyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1oZWFydCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtc3RhciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtbGluayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtY2xvc2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEyOHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtY2xvc2V0aGljayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTI4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hbGVydCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE0NHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtaGVscCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTQ0cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jaGVjayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTQ0cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1wbGF5IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTYwcHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1wYXVzZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTYwcHg7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmRpYWxvZy1jbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDQ0NDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICB3aWR0aDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtYm90IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmbGV4OiAwIDAgMjJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC1ib2R5IHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjI1ZW07XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtYm9keSBwOmZpcnN0LWNoaWxkLFxcbmRpdi5kaWFsb2ctY2wtYm9keSBoMTpmaXJzdC1jaGlsZCxcXG5kaXYuZGlhbG9nLWNsLWJvZHkgaDI6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC1ib2R5IHA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5idXR0b24uZGlhbG9nLWNsLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDdlbTtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAtMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcblxcbmJ1dHRvbi5kaWFsb2ctY2wtYnRuOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtdG9wIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXg6IDAgMCAyNXB4O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC10b3AgaDEge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDRweCAwIDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtdG9wIGJ1dHRvbi5kaWFsb2ctY2wtdGItYnV0dG9uIHtcXG4gIGZsZXg6IDAgMCAyNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC10b3AgYnV0dG9uLmRpYWxvZy1jbC10Yi1idXR0b24gc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA0cHg7XFxuICB0b3A6IDRweDtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC10b3AgLmRpYWxvZy1jbC10Yi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTEyMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbCBkaXYubWVzc2FnZS1jbCB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsImltcG9ydCAnLi9pY29ucy5zY3NzJztcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vaWNvbnMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL2ljb25zLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL2ljb25zLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRQUFBQUR3Q0FNQUFBRFlTVXI1QUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBQmMxSkhRZ0N1emh6cEFBQUJEbEJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCeFVZVzlBQUFBV1hSU1RsTUFMMlpLQ0VCZ0dSQXpVQnEvSW1PZVJZK1VQMjJnbkNBcHpBMHhBU3dXVlNlWnd4TnhnQ00wUjgrdmFFZ0toUnc0VSs4RUhrdC9IMXBDZ295b292MGtBbEVESVRKcXRiamZZb2NHa1c4OHNxMTh2c2FyeUx5cXBabUtDN0FBQUE3bVNVUkJWSGphN1YwSlk5dTJEcVpjeTVRY0oyNnpyWm5qcmsxenJFM1gxL2IxMkgxdmIrKytUL3ovUC9KSXlSSUI4TEppUjNaaWZzNEZVUWZ4Q1NRQmtGS0VTRWhJMkFKSWtEdXVQMnc1QXl0WFQwSllmNGtaMER2M1N3aXpRTkNnQlBENmtISmRLdkVXQUZ2RndBWFk4ZFdmdlpvRXQwQ2JBTW5yUThyNUhiUUk0SWZiRjdCMmxqMHlZTlhmclVLZzNHWlFCQTBJUWcxaXNiTU03clRlQnM0dDJLNGl2OEcyaFFUdnNHMEJnUXIwYndGdVVnSzNNR2pCemgyc1BpQmtndjMzQVpzZUJYZ1Q2bjhVU0k1UVFrSkNRa0pDUXNMR1BNRU4rMEhTaXRhQU8rOHlvQkFBRC9CbHAzeUFsUkJTWisrVkVrY0ZMQUtzSGZqdU5GeVUxZ1U0QVRJWVBQWWFERm4xZDljNFVPeklxTWpBNFNLU0FvU0tBT2l2Z1lNekJlU3ZzVndtSHlDRGZNYlNCNXNQaHlWY1p6NUF4cHJndG9YRHQzMFVTRWhJU0VoSVNFallvS2UxdWpPLzB2bGhzd3JZb1U5UW9Tc0VTdER0K2phaEVEa2JoTGZZNnJGaXNIZWhoNE92ekgyQllBVWNwZUhydTg0UUlzZ3F0MDRHTVFKSmhZRHRBWTRUMnZVQnI0TGd1bDdvK25hNERERUNJQmh2ZzRqdzZ6bzhzQXRWY0xFM2VBa0NZWjB3eUovYmlFTW1GR3hBVGd0aGpEc09ENXRvL0FwZDFJdTJjY2NhSWdpWFI4N0liZ2RFYjBqa0FoRHM5MEJFbW5EL284QTFIeDhmSmhNU0VoSVNFaEoyRmFzdlMxM1J6WkNPMWVqK1U3cjgwT2hVVmVUeTNTcXcxQVhDOFR3c1VRRlVMdkRrMUJKZW5kNFpBcUdMYTNvL2xpSUlYdDhSMzNJRkl1bUhRRWFpbmxnMEZObTFkU3gybDBFQ0ltdkQzV1lXWWlESW53U0ltWmNySVFROEhBWWN6UVlzeUFxSEhkRzQ5Y2lHV0tJQzdsSjNkQXdRaU9mQllRUCt3eTBDckJyWTFhUGx2SW5GQ1hCWHdIc0xseW9HQ01iUDRTNUN1R2JvZ3haRW1nQnJJdEVtNEc3bDBydUh0SmU4MkFvRTJvakR3RmdURjlZTWZZUUFHY2tIeUhBZkFPNStOWFNQd3NYaHNjVFJodVBqTHNEU3d4eHNmVDVBUWxvaGtaQ1FrSkNRSURwRW9Hc2Roc01ETXpnajZMWHFCNTBtOE5kOGRlbDYyaDFIZjg0akpJUTl4eTRaRkRaWEJRNkZJVlMrT3YydTUrZUI2Qko2T2h4aXQ5UTFHMjd4Qi9SWUNQS3pWZ2JBWmtEdzl4dUl3UHNCWFBrTU9sOHRscGgrRmNDT0JkL2hheWVnQ1RkOUJFaUloTS9PNmV0Z3VXdDJHcndXNGR3WjFraUJkTlRRZmlJRS9IYzhOdDlzSjBSRXJBK3dDT0JOWXUzaG5lblVkRExCaXM3bzgvMk9jbjhUZDVoRThCR2lKVHJGNnhnWWFVWkhodklCOGVnMXRnZ29sbjhJNTQrU241T1FrSkNRa0xCVktHNzRRT1p3T3lBMFhjVzk0YXZvdjAxVEFjNXBGdXA5RmRIWlFDaEVSMjlQYnFzRnRQR1dvYWVBQWdWRE5MNHJvTFlBd0FTR0h6bUFyWnF0QXZmeWJWeXU5Q2ZSR2RBQXZtNEROTndUYkRvYzBPdml0b3NBZ0VoMXRES0ZJOVlESzVQaGpRM3hOdGsyTVhsekxNRGFuNjdZcUFueVdBQmZyOURRdlZYem9lRStJSFI3bStpOE1GYkMrd0J3V3R4MmpZTEJVY0RaNWRNQkFvTEx4SUl2cDdnaGZrRDBCTVh5KzhwYkdQMTMwVDhoSVNFaFliZFFhaitoWEg3L04wT0ZOMzNWYnF3cU54bUg5dmd5NHJuQjQ5cFZLa1A2NCtJeXpNY2JrUUZrNGcwN0FUcGlYNG43d2lQelF2Rm9BWFpBb3hLYzUva1lPWHZWMzJQTDFSMzRuNlllTFRRY0VYM2JHblBabXRuYVg1UTN0UjVtTUJ4Q05tUnVHdmlqTjN2cWtqcDJBOWNWMnlBdHovT2lCaU5rUWdoQURJQTIwU0Z3Q3hpMW52U2VRdXRLUTJNQnZ2bnUrblRtaEVNWW5wMzlESmlBMld3V2ZnSkRBRGdGSndIN2hFRFFxcU1OaWhDSkNha3JTQWsvMXZCWkFJd0IvZElYWHZRQmdDcElhbnhjSFg1c0NEajdhZjh2aElDSER4OWF5K1A5TXR2QUNkRDZmNEVKb0NZRlNuK3dLU3BRMmc4ZWFuZ3RZRStyRHVNOWt3Y29LL3R2Q2REblJ5bTIrblRtaEtvSlBIK09tOEJNcUZ1Z2ZyWUhsTlhuaWdSby9SKzkrOEpQZ0dRYjFCWXA5eVFLWWVEbzZNamZCOENlWWtEcGp3bW92bG9DcWs0UUVmQldILzMyYmJQaHJPNEV6N3h0M2tHQXNKK25vQVI4anZNVGc5RWo5VFAzRVdBOW92SnhCWFRCazVNVE1DWnFXVUM1Tng2ckg2WUpWTEtmZ0pNYWl3MHlnNSt5YkE2WkpBU1VxQmY4ZGZYQitnNDVBVU5HQUJBTEdCajlBd1MwcC91b0FqTzU0ZEJuQWVWZWhSSThNdWcrZGd5a1RXWlpPd3BremZVenJ3WFlCTVNhQUM2dis4QmNXQVNVOUhyTUQ0QXZZMzdBa3NOZ1haOEJ6Y0dVWnVnR1crRklwemZDbDdjM2NBSXFCdkoxT25ybHFFSjU5Vk13MTJXcFBPNEtOZDVmcS80SkNRa0pDVnVPRnkvQzVRVUU4OXIxZjM2S1pqM2FZZkJKTlV3OXdSa0hIR01QRnZLQWhXZjdTOHRDL0lIVkp3K09heXJhT21hYjFMQ045UzlMdzhCRWU1RVgyUmdGTzZyS2c4ZGcvR3hQMWdQcEx4QUQ2bUFOTnRORVBadE11NEpMeS9YOWFEWEl0VE5YdEdON29ia2Q0SHQ2Q25ESzlOZU8wcEhSWC92bWJmUXIzWTRZQ3VmaE4rcHpqaXRVcXZ0Y292M0ozS0QxK1B1L3hhWDRKNDV2TXlWa1JCWlVQaDRlSTFuWGZ6VHlWUkFXemo1UWcwTVdweW83S296cldHY3MydWpLSm9DRnd5QmV2YjM3OHQzYk1iNy9ZMUdLWlFuNEQveFdmZjZCRmRTdVA1Tng4S0ZpNDJIR2ZWOUFMUml2VUdIWGU5R0lxQitZd1BsSWNWQUxqNXVNeldNZkFZdGVBRm5BT2Z3ZFhnRFdINlhzNGhid0wvR0wrSjlKS1owd0N6aGhGbkRDTEdCRVlnL1ZBdXBPcW8xdjJmVytxcVd2MmdwV3dUeU9IVUQzQVdpMWZKU0FWMjgvLzFoOTNQb3ZQSFZNUUFGVjFxbVIvd3RmcTgvZjBJb0owc1lyK1djbW8vS3EvU3A4N0NHZ2llNEsya1NvL1FSNmVSaU94UkdKRnhrQkpXT1k2ZCt1aUtBRUlQbXpYeDVPSHY3MXc0VzhCelFwR3BOSDlPN1pUV0FoWS9IMDFNamE5dHQ4cDVNQWF4UlU1eWdDUzlwNWt2dkpvc0pQTUFIV2VnT1RjRkxOblowdUxBdW12eDNBRjJUTjJ0MXZWZmMzK1BadVM0QnEvMFhnZUV2UmdkV0pza2Q4ZUpLZitRRTg3YzFrMXh0Z1F2S0k2OCtIUVZFdjZqTEYxWXpBbzF6NExJZ2h1NG11WHQ0aHdDYytVRUpDUWtMQ0JqREdpV250eXNHSnRjOEQ2cWxjSXpJOERlSHpkYTUrK2dLbTZ1Y1VEODBYZUdyaUMvamhoKysrZ3c5UmRjNjEvaFhVSC9OMzhPb1Z2SnNUVDdRVVBOM1E1QnRhbVc4WU04Y0g2VDhaajE4VEJqcTk3dDhlYU5XNU1oUnRnbUpneXIzeEkrTjUvVXJqajhZVm5ZN1ZDVVpXY0VPaVU4YzZWRHFYYS9aUnJtT3BnaDB6T1ZnWG1PQktPOFpUZUExckkwQzdXdWdJclh2MVRRM0FFUEQ5anc4ZS9QaTlxYzlZUUQ3Q016dWNBTEprQktwa0ZGcndVSWc2VlZFWVg3dlUrUmhFd0VzOVY0Y3ZPTldzK3dpSXJLZTNwN0l5b0cxcVdzbFRIcnkwRmFwc2ZiODkvSjVlbklIY1ZSaXlCUm4wK0dvZUZPMEFPdkJVOFp6QUZqQVk0UFhxMlh5dXcwdERnTkpmalAwWklFZkd4Ulh1VXhQSDd1YVU2VitTNmNtdllWOEI3aUcvbGh3UHgyRUN6dFNmWi9xcktiNm9KbCtQa0FXdzZQWGx5NzJYYzdob1QvaGExMjZ5UGdLNEJYeFR5YWRVZjZOZ05xMXdSQTgzaEtsYmVueDhUQWdnYmY1STRUUDF4Ulk4VEwxOXdIeXVHd0R1QkYrUHg1TTFkb0tzRC9obTBRZWNtZ3hjVHNMUnVhN3ZrVGw4ZWc0WGlBRjlvalBVN1RYSm0wYS9qejVhZkRFRDhmWUI0M0krbjhNY0FzUGd1a2VCVTUyWU5mWGhvZHQwTVBnS1hTeFhYNFZoQUt3d1hmKzUzMnpndzJCbEVSVThmUUNNTlRBQjdwbUFOZm9CcDFWcXV2Q2tEL2dqWnNwYVhoZTZwM3pRbFA3K2xhU3ZkUkZWcjdHUWhxVk82WlZEY1ZVL1lQTTRPenc4d3haMHJya3FIaFNlaEkrOWNqSWhJU0ZodGVnVXI0Nis4NEh1WWo2NHMwUDZQd040MWdydk43M3UrenVqLzNPdDd2UG0va016MHdUR0JtWXd3d2Y4enJYUWJuMHJ6MllWLzdNK0RVQTVtbzBKM0RjRTNQYzVRaTQvSWplVVdGTVBmQU9YWWFiSDlGbncvTmRyQVBxYXozbHNFM3JkZDhFMzVNWW9JZ3MzdGZ4MCtKVE96Z1llZ09pbEI5QWg5RE55Y1ZxSEFaNFlxL1dmRU52UDhlcGplK251cUJoaC9aNnFIMC9KRHJNTkVwQTM5enYzRTVDekpnOXdXZUN5bk13bTJ3UVV4R1NxaGVaREVrNFRBa3FZeldiOWVicEdZVDhCOWpFRnNYM1NLYTVzQWYxMmdwVUIxQS9OVkRvY0dnSU92UlpnVzFEdWIvS2QrNEIrb3pYZTZkMDE0bDF2SjBqRW5BK0tLNDhDdmI1ZmIyWVVybXR3MElnSEl0QUhlRWJBdGQyV1RmcEY3K20wTE54N2I1TjFTRzlZVEVoSVNFallJZVFRRXE5OTBKM2t3dkp6cnRVVmZmelljcWNEWWgvZU1LV0FFRkNWRlhpSGZGTG9IMEQ1YTE4d1VJZk9wdHlPckhMbU8rZFdNVlF6WkgzR2c0UUNTa0JkMXRhNXVqMUtQYjRESVFDWDJ3UzRudlMxUmVpWEFMd1ltQk5RcFQ4V2xheCtUYXo1OFFraFlCTE04UGcwSmlMMFRVQ1BGckFVQVQxYlFMOTlnQ3Vsc05FK29PZFJ3TTUzYkhnVTJIay9JQ0VoSVNGaHR3RTcvUnhWOFdjQm4zNVdFRWZsWW9mZWs2dWZJNFZQYy9ROFE1YmZjenhBMGZnbS9QMEhYZVd0d3hUK3BBZ1FhSFd5Wm1WaU1XQzlUTDY4bXJ4OUJuQXB4S2U1dU1SUFcwK1BWRVJMbjY4MWlneVBoK3FyWGI0TngzUTl1NWFCeWtQOUdXNnBlMXN1MXMxZm1EdVVqVUN2dGovM0VGQzlHazN1eWZadGV5Q2wzdERJZS9wajNyK255OVVXdVFkYmJBRUtsL2lPNjM1aENsVDlsb0FQYTdRbTNsSGVPa3lxTVhDRTFyeW9ZSFFNUjJNUEFiZXVFOHdBTGk4dWNiZGZweU55b09yZjNnZzFlNmJ1ejdOTUpDUWtKQ1RzSXZqekFUR1pMNkxxS25lOTNxcHlEUHo1Z0pqTWw5RjFsYnRlYjFVNWV2L05Pc0U3eThoOElXVlh1ZXYxVnBXajRNOEgzRGNuYU9RRDdSc2VMT1REOWwxcDlWTGFRN00va29XMy9MNHB2Kys5dm9CZythek8ydUJ5d2VzdjhQTU93V3dZV3h6Tmw4NVd2dzRPOE94d2JIKzczTnJmVEpHN3l2SHNtZnMza1BxSVR6NzVSTkQ2VkU4a0wwc0ErY01oNjlaN3dDb3NJTEMvc0JRSzc4OElpTllIdno3ZUpjOXIvZGRId0FpOWc4NUJnT3QzRjRXaTEzZFlTTWdDOU50RzV0Q0JnSGdUMEcvZjZtTGlzU1lDTVFLRFRVcTRMQXJ2UDYvMVg0NEEvbnlBbzFOck9zRkRieWNGWFBaM3FzNU9rbCtmZDdLMHZPSEhKK3MyUUo5M0NLSHZZV3pWWWJTckhFZmZqc3lxamxSWE9ZNitYZGxWWGVtdWNrSkNRa0pDUWtJc0hBQzRObm43Q2FCdmE0dkx0NUFBQ0JOUWZVZ0VIU1pBZ0xoWkJGVC9uaTBnTTRKQWtNWFV0Z3dpV1VEcUEyNFNBYnMrQ2lRa0pDUWtKQ1NzRy9MbWVBTFJWWkJRZGwvb0t0bi9COXJxZXlYa3lnVHcrMzJUOUYrSEJYQjliNVQrMUFLcTVlM1Z4ME9BNi84TjZQMjUvcmUyRHlnYlVQMmxwYi9jR1F1bzk3KzUrcTlxQVRkZS8xVkhBWS8rdStvSEdQMXZrUi9RaVUxcHZoTVN0aHovQi9oMU9XaXlNcHN3QUFBQUFFbEZUa1N1UW1DQ1wiIiwiLyoqXHJcbiAqIFZhcmlvdXMgaW50ZXJmYWNlIG9wdGlvbnMgd2UgY2FuIHNlbGVjdFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2Ugb3B0aW9ucy5cclxuICogQHBhcmFtIG9wdGlvbnMgVXNlciBwcm92aWRlZCBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbnZhciBPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XHJcblxyXG4gICAgLy8vIE9wdGlvbnM6IHZlcnRpY2FsLCBob3Jpem9udGFsLCBib3RoXHJcbiAgICB0aGlzLnJlc2l6ZSA9ICd2ZXJ0aWNhbCc7XHJcblxyXG4gICAgLy8vIFRoZSByZXNpemluZyBoYW5kbGVcclxuICAgIHRoaXMuaGFuZGxlID0gJ2Jhcic7XHJcblxyXG4gICAgLy8vIFJhbmdlIGZvciBncmFiaW5nXHJcbiAgICB0aGlzLmdyYWJTaXplID0gMTA7XHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9ucztcclxuIiwiaW1wb3J0IFJlc2l6ZXIgZnJvbSAnLi9yZXNpemVyLmpzJztcclxuXHJcbmV4cG9ydCB7UmVzaXplciBhcyBkZWZhdWx0fTtcclxuY29uc29sZS5sb2coJ2FwcC5tb2R1bGVzLmpzJyk7IiwiXHJcbmZ1bmN0aW9uIFJlc2l6ZXJBY3R1YWwoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZXNpemVyJyk7XHJcblxyXG4gICAgbGV0IGdyYWJTaXplID0gb3B0aW9ucy5ncmFiU2l6ZTtcclxuXHJcbiAgICBsZXQgaGFuZGxlID0gb3B0aW9ucy5oYW5kbGU7XHJcbiAgICBpZihoYW5kbGUgPT09ICdiYXInKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZXNpemUgPSAnbm9uZSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSBncmFiU2l6ZSArICdweCBzb2xpZCAjMTg0NTNCJztcclxuICAgIH0gZWxzZSBpZihoYW5kbGUgPT09ICdoYW5kbGUnKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZXNpemUgPSAndmVydGljYWwnO1xyXG4gICAgfSBlbHNlIGlmKGhhbmRsZSA9PT0gJ25vbmUnKSB7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlc2l6ZSA9ICdub25lJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9IGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8gTW91c2UgbW92ZSBldmVudCBoYW5kbGVyXHJcbiAgICBsZXQgaW5zdGFsbGVkTW92ZUxpc3RlbmVyID0gbnVsbDtcclxuICAgIGxldCBtYXNrID0gbnVsbDtcclxuXHJcbiAgICAvLy8gR2V0IHRoZSBtaW5pbXVtIGhlaWdodCBhbmQgd2lkdGggcHJvcGVydGllc1xyXG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcclxuXHJcbiAgICBsZXQgbWluSGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5taW5IZWlnaHQ7XHJcbiAgICBtaW5IZWlnaHQgPSBtaW5IZWlnaHQuc3Vic3RyKDAsIG1pbkhlaWdodC5sZW5ndGggLSAyKTtcclxuICAgIGxldCBtaW5XaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWluV2lkdGg7XHJcbiAgICBtaW5XaWR0aCA9IG1pbldpZHRoLnN1YnN0cigwLCBtaW5XaWR0aC5sZW5ndGggLSAyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICAgICAvLyBJbnN0YWxsIHRoZSBtb3VzZSBkb3duIGxpc3RlbmVyXHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25MaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIC8vIEluc3RhbGwgdGhlIGN1cnNvciBsaXN0ZW5lclxyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY3Vyc29yTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbml0aWFsWCwgaW5pdGlhbFk7XHJcbiAgICBsZXQgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0O1xyXG4gICAgbGV0IGdyYWJUeXBlID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZURvd25MaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgZ3JhYlR5cGUgPSBvbkhhbmRsZShlLnBhZ2VYLCBlLnBhZ2VZKTtcclxuICAgICAgICBpZihncmFiVHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbml0aWFsWCA9IGUucGFnZVg7XHJcbiAgICAgICAgICAgIGluaXRpYWxZID0gZS5wYWdlWTtcclxuICAgICAgICAgICAgbGV0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBpbml0aWFsV2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgICAgICAgICBpbml0aWFsSGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBpbnN0YWxsSGFuZGxlcnMoKTtcclxuICAgICAgICAgICAgaW5zdGFsbE1hc2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGlmKGUuYnV0dG9ucyAhPT0gMSkge1xyXG4gICAgICAgICAgICByZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGR4ID0gZS5wYWdlWCAtIGluaXRpYWxYO1xyXG4gICAgICAgIGxldCBkeSA9IGUucGFnZVkgLSBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgPT09ICdob3Jpem9udGFsJyB8fCBncmFiVHlwZSA9PT0gJ2JvdGgnKSB7XHJcbiAgICAgICAgICAgIC8vIENvbXB1dGUgYSBkZXNpcmVkIG5ldyB3aWR0aFxyXG4gICAgICAgICAgICBsZXQgbmV3V2lkdGggPSBpbml0aWFsV2lkdGggKyBkeDtcclxuICAgICAgICAgICAgaWYgKG5ld1dpZHRoIDwgbWluV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gbWluV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBpdFxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJycgKyBuZXdXaWR0aCArICdweCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihncmFiVHlwZSA9PT0gJ3ZlcnRpY2FsJyB8fCBncmFiVHlwZSA9PT0gJ2JvdGgnKSB7XHJcbiAgICAgICAgICAgIC8vIENvbXB1dGUgYSBkZXNpcmVkIG5ldyBoZWlnaHRcclxuICAgICAgICAgICAgbGV0IG5ld0hlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBkeTtcclxuICAgICAgICAgICAgaWYgKG5ld0hlaWdodCA8IG1pbkhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gbWluSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgaXRcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnJyArIG5ld0hlaWdodCArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlVXBMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbEhhbmRsZXJzKCkge1xyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcblxyXG4gICAgICAgIGluc3RhbGxlZE1vdmVMaXN0ZW5lciA9IG1vdXNlTW92ZUxpc3RlbmVyO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGluc3RhbGxlZE1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1hc2soKSB7XHJcbiAgICAgICAgLy8gRW5zdXJlIG5vbmUgY3VycmVudGx5IGV4aXN0c1xyXG4gICAgICAgIHJlbW92ZU1hc2soKTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBtYXNrLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBtYXNrLnN0eWxlLmxlZnQgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUudG9wID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgbWFzay5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuekluZGV4ID0gMTAwMDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS5vcGFjaXR5ID0gMC41O1xyXG5cclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1hc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgICAgIHJlbW92ZU1hc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVIYW5kbGVycygpIHtcclxuICAgICAgICBpZihpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaW5zdGFsbGVkTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgICAgICBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFzaygpIHtcclxuICAgICAgICBpZihtYXNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgICAgICAgICBtYXNrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYW4geCx5IGxvY2F0aW9uIGlzIG92ZXIgYSBoYW5kbGUgZm9yIG1hbmlwdWxhdGluZ1xyXG4gICAgICogdGhlIHJlc2l6ZWFibGUgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHggbG9jYXRpb24gaW4gcGl4ZWxzXHJcbiAgICAgKiBAcGFyYW0geSBsb2NhdGlvbiBpbiBwaXhlbHNcclxuICAgICAqIEByZXR1cm5zIG51bGwgaWYgbm90LCAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdib3RoJyBpZiBvdmVyIGhhbmRsZSBhbmQgbW9kZSBhdmFpbGFibGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG9uSGFuZGxlKHgsIHkpIHtcclxuICAgICAgICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIGxldCBib3R0b20gPSByZWN0LmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBsZXQgdmVydCA9IHkgPj0gYm90dG9tIC0gZ3JhYlNpemU7XHJcblxyXG4gICAgICAgIGxldCByaWdodCA9IHJlY3QucmlnaHQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcbiAgICAgICAgbGV0IGhvcnogPSB4ID49IHJpZ2h0IC0gZ3JhYlNpemU7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMucmVzaXplID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgaWYodmVydCAmJiBob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JvdGgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHZlcnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigob3B0aW9ucy5yZXNpemUgPT09ICdib3RoJyB8fCBvcHRpb25zLnJlc2l6ZSA9PT0gJ3ZlcnRpY2FsJykgJiYgdmVydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKChvcHRpb25zLnJlc2l6ZSA9PT0gJ2JvdGgnIHx8IG9wdGlvbnMucmVzaXplID09PSAnaG9yaXpvbnRhbCcpICYmIGhvcnopIHtcclxuICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgbGV0IGN1cnNvciA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gY3Vyc29yTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICAvLyBTd2FwIHRoZSBjdXJzb3Igd2hlbiB3ZSBhcmUgb3ZlciB0aGUgaGFuZGxlXHJcbiAgICAgICAgaWYgKG9uSGFuZGxlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnNvciAhPT0gMikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGN1cnNvciAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2l6ZXJBY3R1YWw7XHJcbiIsIi8qKlxyXG4gKiBWZXJ0aWNhbCByZXNpemUgc3VwcG9ydCBmb3IgZGl2LCB0ZXh0YXJlYSwgaWZyYW1lLCBldGMuXHJcbiAqXHJcbiAqIEEgcHJvYmxlbSB3aXRoIHRoZSByZXNpemUgZmVhdHVyZSBvZiB0ZXh0YXJlYSBhbmQgaWZyYW1lIGlzIHRoYXQgaXQgZG9lcyBub3Qgd29yayBpbiBhbGxcclxuICogYnJvd3NlcnMgKGVzcGVjaWFsbHkgRWRnZSkgYW5kIGlzIG9mdGVuIHF1aXRlIHF1aXJreS4gVGhpcyBzbWFsbCBwYWNrYWdlIGFsbG93cyB5b3UgdG9cclxuICogYWRkIHZlcnRpY2FsIHJlc2l6ZSBhYmlsaXR5IHRvIGp1c3QgYWJvdXQgYW55dGhpbmcuXHJcbiAqXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlc2l6ZXJBY3R1YWwgZnJvbSAnLi9yZXNpemVyLWFjdHVhbC5qcyc7XHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vT3B0aW9ucy5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdG9yIGZvciBhIFJlc2l6ZXIgb2JqZWN0XHJcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3Igb3IgRE9NIGVsZW1lbnRcclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBvYmplY3QuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gUmVzaXplcihzZWwsIG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICBpZih0eXBlb2Ygc2VsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ldyBSZXNpemVyQWN0dWFsKGVsZW1lbnRzW2ldLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYoc2VsLm5vZGVUeXBlKSB7XHJcbiAgICAgICAgbmV3IFJlc2l6ZXJBY3R1YWwoc2VsLCBvcHRpb25zKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzaXplcjtcclxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBNaWRkbGUgc2VjdGlvbiBvZiBkaWFsb2cgYm94XHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcblxyXG5sZXQgQm9keSA9IGZ1bmN0aW9uKGRpYWxvZywgcGFyZW50RGl2KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIGxldCBkaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdkaWFsb2ctY2wtYm9keScsIG9wdGlvbnMuY29udGVudCk7XHJcbiAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICB0aGlzLmRpdiA9IGRpdjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogVGhlIGJvdHRvbSBidXR0b25zIHNlY3Rpb24gb2YgdGhlIGRpYWxvZyBib3hcclxuICovXHJcblxyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5cclxuXHJcbmxldCBCb3R0b20gPSBmdW5jdGlvbihkaWFsb2csIHBhcmVudERpdikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICBsZXQgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICAvLyBsZXQgaHRtbCA9IGA8YnV0dG9uIGNsYXNzPVwiZGlhbG9nLWNsLWJ0blwiPk9rPC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cImRpYWxvZy1jbC1idG5cIj5DYW5jZWw8L2J1dHRvbj5gO1xyXG4gICAgICAgIGxldCBkaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdkaWFsb2ctY2wtYm90Jyk7XHJcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMuYnV0dG9ucyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhZGRPayhkaXYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRCdXR0b24oZGl2LCBpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE9rKGRpdiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGJ1dHRvbiwgJ2RpYWxvZy1jbC1idG4nKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ09rJztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKGRpYWxvZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEJ1dHRvbihkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhidXR0b24sICdkaWFsb2ctY2wtYnRuJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW0uY29udGVudHM7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljayhkaWFsb2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpdGVtLmZvY3VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvdHRvbTtcclxuXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbnMgZm9yIHRoZSBET00uXHJcbiAqIFRvb2xzIHRoYXQgYXZvaWQgaGF2aW5nIHRvIGhhdmUgalF1ZXJ5IGluc3RhbGxlZC5cclxuICovXHJcblxyXG5sZXQgVG9vbHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBjbGFzcyB0byBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkXHJcbiAqL1xyXG5Ub29scy5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxufVxyXG5cclxuVG9vbHMuYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzZXMpIHtcclxuICAgIGlmKGNsYXNzZXMgPT09IHVuZGVmaW5lZCB8fCBjbGFzc2VzID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChjbHMpID0+IHtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LCBjbHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBESVYgd2l0aCBhIHByb3ZpZGVkIGNsYXNzIG5hbWUuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkIHRvIHRoZSBkaXZcclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byBwbGFjZSBpbiB0aGUgZGl2LiBIVE1MIG9yIEVsZW1lbnRcclxuICogQHJldHVybnMge0VsZW1lbnR9IENyZWF0ZWQgRE9NIEVsZW1lbnRcclxuICovXHJcblRvb2xzLmNyZWF0ZUNsYXNzZWREaXYgPSBmdW5jdGlvbihjbGFzc05hbWUsIGNvbnRlbnQpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFRvb2xzLmFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcclxuICAgIFRvb2xzLmFkZENvbnRlbnQoZGl2LCBjb250ZW50KTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgY29udGVudCB0byBhbiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50LiBDYW4gYmUgSFRNTCBvciBhbiBFbGVtZW50LlxyXG4gKi9cclxuVG9vbHMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNvbnRlbnQpIHtcclxuICAgIGlmKFRvb2xzLmlzU3RyaW5nKGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcclxuICAgIH0gZWxzZSBpZihUb29scy5pc0VsZW1lbnQoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Ub29scy5pc1N0cmluZyA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8ICgoISF2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBTdHJpbmddJyk7XHJcbn1cclxuXHJcblRvb2xzLmlzRWxlbWVudCA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCAmJiB2YWwubm9kZVZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xzO1xyXG5cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEZsZXhpYmxlIGFuZCBjb25maWd1cmFibGUgZGlhbG9nIGJveCBvYmplY3RcclxuICovXHJcblxyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnMuanMnO1xyXG5pbXBvcnQgVGl0bGVCYXIgZnJvbSAnLi9UaXRsZUJhci5qcyc7XHJcbmltcG9ydCBCb2R5IGZyb20gJy4vQm9keS5qcyc7XHJcbmltcG9ydCBCb3R0b20gZnJvbSAnLi9Cb3R0b20uanMnO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5pbXBvcnQgUmVzaXplciBmcm9tICdyZXNpemVyLWNsJztcclxuaW1wb3J0IE1hc2sgZnJvbSAnLi9NYXNrLmpzJztcclxuXHJcbmxldCBEaWFsb2cgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgIGxldCBib2R5ID0gbnVsbCwgbWFzayA9IG51bGw7XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgRGlhbG9nLnpJbmRleCArPSAyO1xyXG4gICAgICAgIHRoaXMuekluZGV4ID0gRGlhbG9nLnpJbmRleDtcclxuXHJcbiAgICAgICAgbGV0IGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2RpYWxvZy1jbCcpO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzZXMoZGl2LCBvcHRpb25zLmFkZENsYXNzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXYgPSBkaXY7XHJcbiAgICAgICAgZGl2LnN0eWxlLnpJbmRleCA9IHRoaXMuekluZGV4O1xyXG5cclxuICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBpbnN0YWxsUmVzaXphYmxlKGRpdik7XHJcblxyXG4gICAgICAgIG5ldyBUaXRsZUJhcih0aGlzLCBkaXYpO1xyXG4gICAgICAgIGJvZHkgPSBuZXcgQm9keSh0aGlzLCBkaXYpO1xyXG4gICAgICAgIG5ldyBCb3R0b20odGhpcywgZGl2KTtcclxuICAgICAgICBtYXNrID0gbmV3IE1hc2sodGhpcyk7XHJcblxyXG4gICAgICAgIHBsYWNlKGRpdiwgcGFyZW50KTtcclxuXHJcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQWRkIGNhbmNlbCBvbiBFU0MgaGFuZGxlclxyXG4gICAgICAgIC8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluc3RhbGxSZXNpemFibGUgPSAoZGl2KSA9PiB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5yZXNpemUgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICBsZXQgcnNPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3Jlc2l6ZSc6IG9wdGlvbnMucmVzaXplLFxyXG4gICAgICAgICAgICAgICAgJ2hhbmRsZSc6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICdncmFiU2l6ZSc6IG9wdGlvbnMuZ3JhYlNpemVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBSZXNpemVyKGRpdiwgcnNPcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHRvUHgodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuICcnICsgdmFsICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGxhY2UgPSAoZGl2LCBwYXJlbnQpID0+IHtcclxuICAgICAgICBsZXQgcGFyZW50V2lkID0gcGFyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGxldCBwYXJlbnRIaXQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZGl2Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBsZXQgd2lkdGggPSBkaXYub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIGxldCB0b3AgPSBwYXJlbnRIaXQvMiAtIGhlaWdodC8yO1xyXG4gICAgICAgIGlmKHRvcCA8IDEwKSB7XHJcbiAgICAgICAgICAgIHRvcCA9IDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxlZnQgPSBwYXJlbnRXaWQvMiAtIHdpZHRoLzI7XHJcbiAgICAgICAgaWYobGVmdCA8IDApIHtcclxuICAgICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IHRvUHgobGVmdCk7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IHRvUHgodG9wKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5hZGRDb250ZW50ID0gZnVuY3Rpb24oY29udGVudCkge1xyXG4gICAgICAgIFRvb2xzLmFkZENvbnRlbnQoYm9keS5kaXYsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBtYXNrLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kaXYpO1xyXG4gICAgfVxyXG59XHJcblxyXG5EaWFsb2cuekluZGV4ID0gMTAwMDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XHJcblxyXG4iLCIvKipcclxuICogTWFzayB0aGF0IGFsbG93cyB0aGUgZGlhbG9nIGJveCB0byBiZSBtb2RhbC5cclxuICovXHJcblxyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5cclxubGV0IE1hc2sgPSBmdW5jdGlvbihkaWFsb2cpIHtcclxuICAgIGxldCBvcHRpb25zID0gZGlhbG9nLm9wdGlvbnM7XHJcblxyXG4gICAgbGV0IG1hc2sgPSBudWxsO1xyXG5cclxuICAgIGlmKG9wdGlvbnMubW9kYWwpIHtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBtYXNrID0gIFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ21hc2snKTsgLy8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIG1hc2suc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUubGVmdCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBtYXNrLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBtYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS56SW5kZXggPSBkaWFsb2cuekluZGV4IC0gMTtcclxuXHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYXNrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKG1hc2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobWFzayk7XHJcbiAgICAgICAgICAgIG1hc2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFzaztcclxuXHJcbiIsIi8qKlxyXG4gKiBIYW5keSBTaW1wbGUgTWVzc2FnZSBCb3hcclxuICovXHJcblxyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nLmpzJztcclxuXHJcbmxldCBNZXNzYWdlQm94ID0gZnVuY3Rpb24odGl0bGUsIG1lc3NhZ2UsIHR5cGUsIGJ1dHRvbjEsIGJ1dHRvbjIpIHtcclxuICAgIC8vIERlZmF1bHQ6IE9LXHJcbiAgICBsZXQgYnV0dG9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiAnT2snLFxyXG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBpZihidXR0b24xICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24xKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2ZvY3VzJzogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgaWYodHlwZSA9PT0gTWVzc2FnZUJveC5PS0NBTkNFTCkge1xyXG4gICAgICAgIGJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiAnT2snLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJ1dHRvbjEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24xKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdmb2N1cyc6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudHM6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJ1dHRvbjIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgICAgbGV0IGRpYWxvZyA9IG5ldyBEaWFsb2coe1xyXG4gICAgICAgICAgJ3RpdGxlJzogdGl0bGUsXHJcbiAgICAgICAgICAnY29udGVudCc6ICc8ZGl2IGNsYXNzPVwibWVzc2FnZS1jbFwiPjxwPicgKyBtZXNzYWdlICsgJzwvcD48L2Rpdj4nLFxyXG4gICAgICAgICAgJ2J1dHRvbnMnOiBidXR0b25zXHJcbiAgICAgfSk7XHJcbn1cclxuXHJcbk1lc3NhZ2VCb3guT0sgPSAwO1xyXG5NZXNzYWdlQm94Lk9LQ0FOQ0VMID0gMTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb3g7XHJcblxyXG4iLCIvKipcclxuICogVmFyaW91cyBpbnRlcmZhY2Ugb3B0aW9ucyB3ZSBjYW4gc2VsZWN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBvcHRpb25zLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxudmFyIE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcbiAgICAvLy8gVGl0bGUgYmFyIHRleHRcclxuICAgIHRoaXMudGl0bGUgPSAnRGlhbG9nIEJveCc7XHJcblxyXG4gICAgLy8vIEFueSBhZGRlZCBjbGFzcyBvciBjbGFzc2VzIGZvciB0aGUgbWFpbiBkaWFsb2cgYm94IGRpdlxyXG4gICAgLy8vIENhbiBiZSBhIHN0cmluZyBvciBtdWx0aXBsZSBzdHJpbmdzIHNwYWNlIGRlbGltaXRlZFxyXG4gICAgdGhpcy5hZGRDbGFzcyA9IG51bGw7XHJcblxyXG4gICAgLy8vIElzIHRoaXMgZGlhbG9nIGJveCByZXNpemFibGU/XHJcbiAgICAvLy8gT3B0aW9ucyBhcmU6ICdub25lJywgJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXHJcbiAgICB0aGlzLnJlc2l6ZSA9ICdub25lJztcclxuXHJcbiAgICAvLy8gU2l6ZSBvZiB0aGUgYm9yZGVyIGVkZ2Ugd2UgY2FuIGdyYWIgaWYgcmVzaXphYmxlIGluIHBpeGVsc1xyXG4gICAgdGhpcy5ncmFiU2l6ZSA9IDQ7XHJcblxyXG4gICAgLy8vIEFycmF5IG9mIHRpdGxlIGJhciBidXR0b25zIHRvIGFkZC5cclxuICAgIC8vLyBJZiBudWxsLCBhIGNsb3NlIGJ1dHRvbiBpcyBhZGRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgLy8vIE90aGVyd2lzZSwgYW4gYXJyYXkgb2Ygb2JqZWN0cywgd2l0aCB0aGVzZSBmaWVsZHM6XHJcbiAgICAvLy8gICB0eXBlOiAnY2xvc2UnIGZvciBhIGNsb3NlICBidXR0b24sICdjdXN0b20nIGZvciBjdXN0b20gYnV0dG9uIGNvbnRlbnRzXHJcbiAgICAvLy8gICBjb250ZW50czogSFRNTCB0byBwbGFjZSBpbnNpZGUgYnV0dG9uIHRhZ1xyXG4gICAgLy8vICAgY2xpY2s6IENsaWNrIGhhbmRsZXJcclxuICAgIHRoaXMudGl0bGVCYXJCdXR0b25zID0gbnVsbDtcclxuXHJcbiAgICAvLy8gQW55IGFkZGVkIGNsYXNzIG9yIGNsYXNzZXMgZm9yIHRoZSB0aXRsZSBiYXIgZGl2XHJcbiAgICAvLy8gQ2FuIGJlIGEgc3RyaW5nIG9yIG11bHRpcGxlIHN0cmluZ3Mgc3BhY2UgZGVsaW1pdGVkXHJcbiAgICB0aGlzLnRpdGxlQmFyQWRkQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIC8vLyBBcnJheSBvZiBidXR0b25zIGZvciB0aGUgYm90dG9tLlxyXG4gICAgLy8vIElmIG51bGwsIGFuIE9rIGJ1dHRvbiBpcyBhZGRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgLy8vIE90aGVyd2lzZSwgYW4gYXJyYXkgb2Ygb2JqZWN0cywgd2l0aCB0aGVzZSBmaWVsZHM6XHJcbiAgICAvLy8gICBjb250ZW50czogSWYgcHJvdmlkZWQsIEhUTUwgdG8gcGxhY2UgaW5zaWRlIGJ1dHRvbiB0YWdcclxuICAgIC8vLyAgIGNsaWNrOiBDbGljayBoYW5kbGVyXHJcbiAgICAvLy8gICBmb2N1czogdHJ1ZSBpZiB3ZSB3YW50IHRvIHNldCBmb2N1cyBvbiB0aGlzIGJ1dHRvblxyXG4gICAgdGhpcy5idXR0b25zID0gbnVsbDtcclxuXHJcbiAgICAvLy8gQ29udGVudCB0byBhZGQgdG8gdGhlIGRpYWxvZyBib3guIElmIG51bGwsIG5vbmUgaXMgYWRkZWQgb24gY3JlYXRpb24uXHJcbiAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cclxuICAgIC8vLyBJcyB0aGlzIGEgbW9kYWwgZGlhbG9nIGJveD8gSWYgdHJ1ZSwgY29udHJvbHMgdW5kZXJuZWF0aCBhcmUgZGlzYWJsZWQuXHJcbiAgICB0aGlzLm1vZGFsID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uIFwiICsgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb25zO1xyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogVGl0bGUgYmFyIG1hbmFnZW1lbnRcclxuICovXHJcblxyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5cclxuXHJcbmxldCBUaXRsZUJhciA9IGZ1bmN0aW9uKGRpYWxvZywgcGFyZW50RGl2KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIC8vLyBNb3VzZSBtb3ZlIGV2ZW50IGhhbmRsZXJcclxuICAgIGxldCBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBudWxsO1xyXG5cclxuICAgIGxldCBpbml0aWFsWCwgaW5pdGlhbFk7XHJcbiAgICBsZXQgaW5pdGlhbFBvc2l0aW9uWCwgaW5pdGlhbFBvc2l0aW9uWTtcclxuXHJcbiAgICBsZXQgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgaHRtbCA9IGA8aDE+JHtvcHRpb25zLnRpdGxlfTwvaDE+YDtcclxuICAgICAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignZGlhbG9nLWNsLXRvcCcsIGh0bWwpO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzZXMoZGl2LCBvcHRpb25zLnRpdGxlQmFyQWRkQ2xhc3MpO1xyXG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLnRpdGxlQmFyQnV0dG9ucyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhZGRDbG9zZShkaXYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudGl0bGVCYXJCdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsb3NlKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09PSAnY3VzdG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEN1c3RvbShkaXYsIGl0ZW0pOyAvLyBhZGRDdXN0b20oZGl2LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGgxID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XHJcblxyXG4gICAgICAgIGgxLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpbml0aWFsWCA9IGV2ZW50LnBhZ2VYO1xyXG4gICAgICAgICAgICBpbml0aWFsWSA9IGV2ZW50LnBhZ2VZO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlY3QgPSBkaWFsb2cuZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBpbml0aWFsUG9zaXRpb25YID0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBpbml0aWFsUG9zaXRpb25ZID0gcmVjdC50b3A7XHJcblxyXG4gICAgICAgICAgICBpbnN0YWxsSGFuZGxlcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ2xvc2UoZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGJ1dHRvbiwgJ2RpYWxvZy1jbC10Yi1idXR0b24nKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtY2xvc2VcIj4nO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtLmNsaWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDdXN0b20oZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGJ1dHRvbiwgJ2RpYWxvZy1jbC10Yi1idXR0b24nKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gaXRlbS5jb250ZW50cztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZU1vdmVMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgaWYoZS5idXR0b25zICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkeCA9IGUucGFnZVggLSBpbml0aWFsWDtcclxuICAgICAgICBsZXQgZHkgPSBlLnBhZ2VZIC0gaW5pdGlhbFk7XHJcblxyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvblggPSBpbml0aWFsUG9zaXRpb25YICsgZHg7XHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uWSA9IGluaXRpYWxQb3NpdGlvblkgKyBkeTtcclxuXHJcbiAgICAgICAgZGlhbG9nLmRpdi5zdHlsZS5sZWZ0ID0gbmV3UG9zaXRpb25YICsgJ3B4JztcclxuICAgICAgICBkaWFsb2cuZGl2LnN0eWxlLnRvcCA9IG5ld1Bvc2l0aW9uWSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VVcExpc3RlbmVyKGUpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGxIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBtb3VzZU1vdmVMaXN0ZW5lcjtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUhhbmRsZXJzKCkge1xyXG4gICAgICAgIGlmKGluc3RhbGxlZE1vdmVMaXN0ZW5lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgICAgIGluc3RhbGxlZE1vdmVMaXN0ZW5lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZUJhcjtcclxuIiwiLy8gVGhlIHB1YmxpYy1wYXRoIG1vZHVsZSBtdXN0IGJlIGltcG9ydGVkIGZpcnN0IVxyXG4vL2ltcG9ydCAnLi9wdWJsaWMtcGF0aC5qcyc7XHJcblxyXG5pbXBvcnQgJy4vcG9seWZpbGxzL2FsbC5qcyc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cuanMnO1xyXG5pbXBvcnQgTWVzc2FnZUJveCBmcm9tICcuL01lc3NhZ2VCb3guanMnO1xyXG5pbXBvcnQgJy4vZGlhbG9nLnNjc3MnO1xyXG5pbXBvcnQgJ2ljb25zLWNsJztcclxuXHJcbkRpYWxvZy5NZXNzYWdlQm94ID0gTWVzc2FnZUJveDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpYWxvZzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9kaWFsb2cuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9kaWFsb2cuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vZGlhbG9nLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9