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
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
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
/******/ 	var hotCurrentHash = "ea8b3df6ec93ad751c18";
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
/******/ 			_selfInvalidated: false,
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
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
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
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
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
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
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
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
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
/******/ 			var queue = outdatedModules.map(function(id) {
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
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
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
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
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
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
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
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
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
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
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

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/_dialog.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/_dialog.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.dialog-cl {\n  box-sizing: border-box;\n  position: fixed;\n  border: 1px solid #444444;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  cursor: default;\n  top: 0;\n  width: 350px;\n  min-width: 150px;\n  max-width: 500px;\n  height: auto;\n  min-height: 150px;\n  max-height: 600px; }\n\ndiv.cl-dialog-bottom {\n  box-sizing: border-box;\n  flex: 0 0 44px;\n  width: 100%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  border-top: 1px solid #cccccc;\n  cursor: default; }\n\ndiv.dialog-cl-body {\n  flex: 0 1 auto;\n  width: 100%;\n  overflow-y: auto;\n  background-color: white;\n  padding: 0; }\n  div.dialog-cl-body p:first-child, div.dialog-cl-body h1:first-child, div.dialog-cl-body h2:first-child {\n    margin-top: 0; }\n  div.dialog-cl-body p:last-child {\n    margin-bottom: 0; }\n\ndiv.cl-dialog-bottom button {\n  display: inline-block;\n  min-width: 7em;\n  margin: 10px 10px 10px 0;\n  padding: 3px 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 0.8em;\n  font-weight: bold;\n  border: 1px solid #999;\n  border-radius: 1px;\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  color: #444;\n  background: #fff; }\n\ndiv.cl-dialog-bottom button:active {\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.1); }\n\ndiv.cl-dialog-bottom button:disabled,\ndiv.cl-dialog-bottom button[disabled] {\n  color: #ccc; }\n\ndiv.dialog-cl-top {\n  box-sizing: border-box;\n  background-color: #009688;\n  margin: 0;\n  padding: 0;\n  flex: 0 0 25px;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap; }\n  div.dialog-cl-top h1 {\n    flex-grow: 1;\n    margin: 0;\n    padding: 4px 4px 0 10px;\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n    font-size: 16px;\n    line-height: 16px;\n    user-select: none; }\n  div.dialog-cl-top button.dialog-cl-tb-button {\n    flex: 0 0 25px;\n    position: relative;\n    box-sizing: border-box;\n    height: 25px;\n    width: 25px;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    outline: none; }\n    div.dialog-cl-top button.dialog-cl-tb-button span {\n      position: absolute;\n      left: 4px;\n      top: 4px; }\n  div.dialog-cl-top .dialog-cl-tb-button:hover {\n    background-color: #e81123;\n    cursor: pointer; }\n\ndiv.dialog-cl div.message-cl {\n  font-size: 1.25em;\n  padding: 1em; }\n\ndiv.dialog-cl-column {\n  text-align: center; }\n  div.dialog-cl-column > div {\n    display: inline-block;\n    padding: 1.5em 0 2.0em 0; }\n  div.dialog-cl-column select {\n    width: 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/icons-cl/dist/icons.js":
/*!*********************************************!*\
  !*** ./node_modules/icons-cl/dist/icons.js ***!
  \*********************************************/
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
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateIcons"];
/******/ 	window["webpackHotUpdateIcons"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) {}
/******/ 		document.head.appendChild(script);
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
/******/ 	var hotCurrentHash = "ce1edc1ba8b276b9acd4";
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
/******/ 			_selfInvalidated: false,
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
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
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
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
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
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
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
/******/ 			var chunkId = "Icons";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
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
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
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
/******/ 			var queue = outdatedModules.map(function(id) {
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
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
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
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
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
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
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
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
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
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
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
/******/ 	return hotCreateRequire("./src/icons.js")(__webpack_require__.s = "./src/icons.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/icons.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/icons.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/icons.png */ "./src/images/icons.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".icons-cl {\n  display: inline-block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 16px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  padding: 0; }\n  .icons-cl.icons-cl-caret-1-n {\n    background-position: 0 0; }\n  .icons-cl.icons-cl-caret-1-ne {\n    background-position: -16px 0; }\n  .icons-cl.icons-cl-caret-1-e {\n    background-position: -32px 0; }\n  .icons-cl.icons-cl-caret-1-se {\n    background-position: -48px 0; }\n  .icons-cl.icons-cl-caret-1-s {\n    background-position: -64px 0; }\n  .icons-cl.icons-cl-caret-1-sw {\n    background-position: -80px 0; }\n  .icons-cl.icons-cl-caret-1-w {\n    background-position: -96px 0; }\n  .icons-cl.icons-cl-caret-1-nw {\n    background-position: -112px 0; }\n  .icons-cl.icons-cl-caret-2-n-s {\n    background-position: -128px 0; }\n  .icons-cl.icons-cl-caret-2-e-w {\n    background-position: -144px 0; }\n  .icons-cl.icons-cl-triangle-1-n {\n    background-position: 0px -16px; }\n  .icons-cl.icons-cl-triangle-1-ne {\n    background-position: -16px -16px; }\n  .icons-cl.icons-cl-triangle-1-e {\n    background-position: -32px -16px; }\n  .icons-cl.icons-cl-triangle-1-se {\n    background-position: -48px -16px; }\n  .icons-cl.icons-cl-triangle-1-s {\n    background-position: -64px -16px; }\n  .icons-cl.icons-cl-triangle-1-sw {\n    background-position: -80px -16px; }\n  .icons-cl.icons-cl-triangle-1-w {\n    background-position: -96px -16px; }\n  .icons-cl.icons-cl-triangle-1-nw {\n    background-position: -112px -16px; }\n  .icons-cl.icons-cl-triangle-2-n-s {\n    background-position: -128px -16px; }\n  .icons-cl.icons-cl-triangle-2-e-w {\n    background-position: -144px -16px; }\n  .icons-cl.icons-cl-arrow-1-n {\n    background-position: 0px -32px; }\n  .icons-cl.icons-cl-arrow-1-ne {\n    background-position: -16px -32px; }\n  .icons-cl.icons-cl-arrow-1-e {\n    background-position: -32px -32px; }\n  .icons-cl.icons-cl-arrow-1-se {\n    background-position: -48px -32px; }\n  .icons-cl.icons-cl-arrow-1-s {\n    background-position: -64px -32px; }\n  .icons-cl.icons-cl-arrow-1-sw {\n    background-position: -80px -32px; }\n  .icons-cl.icons-cl-arrow-1-w {\n    background-position: -96px -32px; }\n  .icons-cl.icons-cl-arrow-1-nw {\n    background-position: -112px -32px; }\n  .icons-cl.icons-cl-arrow-2-n-s {\n    background-position: -128px -32px; }\n  .icons-cl.icons-cl-arrow-2-ne-sw {\n    background-position: -144px -32px; }\n  .icons-cl.icons-cl-arrow-2-e-w {\n    background-position: -160px -32px; }\n  .icons-cl.icons-cl-arrow-2-se-nw {\n    background-position: -176px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-n {\n    background-position: -192px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-e {\n    background-position: -208px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-s {\n    background-position: -224px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-w {\n    background-position: -240px -32px; }\n  .icons-cl.icons-cl-arrowthick-1-n {\n    background-position: 0px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-ne {\n    background-position: -16px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-e {\n    background-position: -32px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-se {\n    background-position: -48px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-s {\n    background-position: -64px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-sw {\n    background-position: -80px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-w {\n    background-position: -96px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-nw {\n    background-position: -112px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-n-s {\n    background-position: -128px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-ne-sw {\n    background-position: -144px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-e-w {\n    background-position: -160px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-se-nw {\n    background-position: -176px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-n {\n    background-position: -192px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-e {\n    background-position: -208px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-s {\n    background-position: -224px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-w {\n    background-position: -240px -48px; }\n  .icons-cl.icons-cl-arrowreturnthick-1-w {\n    background-position: 0px -64px; }\n  .icons-cl.icons-cl-arrowreturnthick-1-e {\n    background-position: -32px -64px; }\n  .icons-cl.icons-cl-folder-collapsed {\n    background-position: 0px -96px; }\n  .icons-cl.icons-cl-folder-open {\n    background-position: -16px -96px; }\n  .icons-cl.icons-cl-document {\n    background-position: -32px -96px; }\n  .icons-cl.icons-cl-document-b {\n    background-position: -48px -96px; }\n  .icons-cl.icons-cl-note {\n    background-position: -64px -96px; }\n  .icons-cl.icons-cl-mail-closed {\n    background-position: -80px -96px; }\n  .icons-cl.icons-cl-mail-open {\n    background-position: -96px -96px; }\n  .icons-cl.icons-cl-suitcase {\n    background-position: -112px -96px; }\n  .icons-cl.icons-cl-comment {\n    background-position: -128px -96px; }\n  .icons-cl.icons-cl-person {\n    background-position: -144px -96px; }\n  .icons-cl.icons-cl-print {\n    background-position: -160px -96px; }\n  .icons-cl.icons-cl-trash {\n    background-position: -176px -96px; }\n  .icons-cl.icons-cl-locked {\n    background-position: -192px -96px; }\n  .icons-cl.icons-cl-unlocked {\n    background-position: -208px -96px; }\n  .icons-cl.icons-cl-bookmark {\n    background-position: -224px -96px; }\n  .icons-cl.icons-cl-tag {\n    background-position: -240px -96px; }\n  .icons-cl.icons-cl-home {\n    background-position: 0px -112px; }\n  .icons-cl.icons-cl-flag {\n    background-position: -16px -112px; }\n  .icons-cl.icons-cl-calculator {\n    background-position: -32px -112px; }\n  .icons-cl.icons-cl-cart {\n    background-position: -48px -112px; }\n  .icons-cl.icons-cl-pencil {\n    background-position: -64px -112px; }\n  .icons-cl.icons-cl-clock {\n    background-position: -80px -112px; }\n  .icons-cl.icons-cl-disk {\n    background-position: -96px -112px; }\n  .icons-cl.icons-cl-calendar {\n    background-position: -112px -112px; }\n  .icons-cl.icons-cl-zoomin {\n    background-position: -128px -112px; }\n  .icons-cl.icons-cl-zoomout {\n    background-position: -144px -112px; }\n  .icons-cl.icons-cl-search {\n    background-position: -160px -112px; }\n  .icons-cl.icons-cl-wrench {\n    background-position: -176px -112px; }\n  .icons-cl.icons-cl-gear {\n    background-position: -192px -112px; }\n  .icons-cl.icons-cl-heart {\n    background-position: -208px -112px; }\n  .icons-cl.icons-cl-star {\n    background-position: -224px -112px; }\n  .icons-cl.icons-cl-link {\n    background-position: -240px -112px; }\n  .icons-cl.icons-cl-cancel {\n    background-position: 0px -128px; }\n  .icons-cl.icons-cl-plus {\n    background-position: -16px -128px; }\n  .icons-cl.icons-cl-plusthick {\n    background-position: -32px -128px; }\n  .icons-cl.icons-cl-minus {\n    background-position: -48px -128px; }\n  .icons-cl.icons-cl-minusthick {\n    background-position: -64px -128px; }\n  .icons-cl.icons-cl-key {\n    background-position: -80px -128px; }\n  .icons-cl.icons-cl-lightbulb {\n    background-position: -96px -128px; }\n  .icons-cl.icons-cl-scissors {\n    background-position: -112px -128px; }\n  .icons-cl.icons-cl-clipboard {\n    background-position: -128px -128px; }\n  .icons-cl.icons-cl-copy {\n    background-position: -144px -128px; }\n  .icons-cl.icons-cl-contact {\n    background-position: -160px -128px; }\n  .icons-cl.icons-cl-image {\n    background-position: -176px -128px; }\n  .icons-cl.icons-cl-video {\n    background-position: -192px -128px; }\n  .icons-cl.icons-cl-script {\n    background-position: -208px -128px; }\n  .icons-cl.icons-cl-close {\n    background-position: -80px -128px; }\n  .icons-cl.icons-cl-closethick {\n    background-position: -96px -128px; }\n  .icons-cl.icons-cl-alert {\n    background-position: 0px -144px; }\n  .icons-cl.icons-cl-info {\n    background-position: -16px -144px; }\n  .icons-cl.icons-cl-notice {\n    background-position: -32px -144px; }\n  .icons-cl.icons-cl-help {\n    background-position: -48px -144px; }\n  .icons-cl.icons-cl-check {\n    background-position: -64px -144px; }\n  .icons-cl.icons-cl-bullet {\n    background-position: -80px -144px; }\n  .icons-cl.icons-cl-radio-off {\n    background-position: -96px -144px; }\n  .icons-cl.icons-cl-radio-on {\n    background-position: -112px -144px; }\n  .icons-cl.icons-cl-pin-w {\n    background-position: -128px -144px; }\n  .icons-cl.icons-cl-pin-s {\n    background-position: -144px -144px; }\n  .icons-cl.icons-cl-play {\n    background-position: 0px -160px; }\n  .icons-cl.icons-cl-pause {\n    background-position: -16px -160px; }\n  .icons-cl.icons-cl-seek-next {\n    background-position: -32px -160px; }\n  .icons-cl.icons-cl-seek-prev {\n    background-position: -48px -160px; }\n  .icons-cl.icons-cl-seek-end {\n    background-position: -64px -160px; }\n  .icons-cl.icons-cl-seek-first {\n    background-position: -80px -160px; }\n  .icons-cl.icons-cl-stop {\n    background-position: -96px -160px; }\n  .icons-cl.icons-cl-eject {\n    background-position: -112px -160px; }\n  .icons-cl.icons-cl-volume-off {\n    background-position: -128px -160px; }\n  .icons-cl.icons-cl-volume-on {\n    background-position: -144px -160px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.scss */ "./src/icons.scss");
/* harmony import */ var _icons_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icons_scss__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ "./src/icons.scss":
/*!************************!*\
  !*** ./src/icons.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js?sourceMap!./icons.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/icons.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js?sourceMap!./icons.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/icons.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js?sourceMap!./icons.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/icons.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/images/icons.png":
/*!******************************!*\
  !*** ./src/images/icons.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JY29ucy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSWNvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSWNvbnMvLi9zcmMvaWNvbnMuc2NzcyIsIndlYnBhY2s6Ly9JY29ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vSWNvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL0ljb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0ljb25zLy4vc3JjL2ljb25zLmpzIiwid2VicGFjazovL0ljb25zLy4vc3JjL2ljb25zLnNjc3M/MDQ2NCIsIndlYnBhY2s6Ly9JY29ucy8uL3NyYy9pbWFnZXMvaWNvbnMucG5nIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEdBQUc7O1FBRUg7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0I7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGtCQUFrQiw4QkFBOEI7UUFDaEQ7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esb0JBQW9CLDJCQUEyQjtRQUMvQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxtQkFBbUIsY0FBYztRQUNqQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLEtBQUs7UUFDckI7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsWUFBWTtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGNBQWMsNEJBQTRCO1FBQzFDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QyxtQ0FBbUMsRUFBRSxrQ0FBa0MsbUNBQW1DLEVBQUUsbUNBQW1DLG1DQUFtQyxFQUFFLGtDQUFrQyxtQ0FBbUMsRUFBRSxtQ0FBbUMsb0NBQW9DLEVBQUUsb0NBQW9DLG9DQUFvQyxFQUFFLG9DQUFvQyxvQ0FBb0MsRUFBRSxxQ0FBcUMscUNBQXFDLEVBQUUsc0NBQXNDLHVDQUF1QyxFQUFFLHFDQUFxQyx1Q0FBdUMsRUFBRSxzQ0FBc0MsdUNBQXVDLEVBQUUscUNBQXFDLHVDQUF1QyxFQUFFLHNDQUFzQyx1Q0FBdUMsRUFBRSxxQ0FBcUMsdUNBQXVDLEVBQUUsc0NBQXNDLHdDQUF3QyxFQUFFLHVDQUF1Qyx3Q0FBd0MsRUFBRSx1Q0FBdUMsd0NBQXdDLEVBQUUsa0NBQWtDLHFDQUFxQyxFQUFFLG1DQUFtQyx1Q0FBdUMsRUFBRSxrQ0FBa0MsdUNBQXVDLEVBQUUsbUNBQW1DLHVDQUF1QyxFQUFFLGtDQUFrQyx1Q0FBdUMsRUFBRSxtQ0FBbUMsdUNBQXVDLEVBQUUsa0NBQWtDLHVDQUF1QyxFQUFFLG1DQUFtQyx3Q0FBd0MsRUFBRSxvQ0FBb0Msd0NBQXdDLEVBQUUsc0NBQXNDLHdDQUF3QyxFQUFFLG9DQUFvQyx3Q0FBd0MsRUFBRSxzQ0FBc0Msd0NBQXdDLEVBQUUsc0NBQXNDLHdDQUF3QyxFQUFFLHNDQUFzQyx3Q0FBd0MsRUFBRSxzQ0FBc0Msd0NBQXdDLEVBQUUsc0NBQXNDLHdDQUF3QyxFQUFFLHVDQUF1QyxxQ0FBcUMsRUFBRSx3Q0FBd0MsdUNBQXVDLEVBQUUsdUNBQXVDLHVDQUF1QyxFQUFFLHdDQUF3Qyx1Q0FBdUMsRUFBRSx1Q0FBdUMsdUNBQXVDLEVBQUUsd0NBQXdDLHVDQUF1QyxFQUFFLHVDQUF1Qyx1Q0FBdUMsRUFBRSx3Q0FBd0Msd0NBQXdDLEVBQUUseUNBQXlDLHdDQUF3QyxFQUFFLDJDQUEyQyx3Q0FBd0MsRUFBRSx5Q0FBeUMsd0NBQXdDLEVBQUUsMkNBQTJDLHdDQUF3QyxFQUFFLDJDQUEyQyx3Q0FBd0MsRUFBRSwyQ0FBMkMsd0NBQXdDLEVBQUUsMkNBQTJDLHdDQUF3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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxxU0FBcUo7QUFDM0o7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxxU0FBcUo7O0FBRS9LOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFlLCtFQUFnQixnaU0iLCJmaWxlIjoiaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJY29uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJY29uc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVJY29uc1wiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVJY29uc1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImNlMWVkYzFiYThiMjc2YjlhY2Q0XCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcbiBcdFx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG4gXHRcdFx0XHRzd2l0Y2ggKGhvdFN0YXR1cykge1xuIFx0XHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG4gXHRcdFx0XHRcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcbiBcdFx0XHRcdFx0XHQoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID1cbiBcdFx0XHRcdFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoLCBob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gXCJJY29uc1wiO1xuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gXHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpIHtcbiBcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHQhbW9kdWxlIHx8XG4gXHRcdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcbiBcdFx0XHRcdClcbiBcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuIFx0XHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcbiBcdFx0XHRcdCFpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRwYXJlbnRzOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5wYXJlbnRzLnNsaWNlKCksXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGlmIChob3RVcGRhdGVOZXdIYXNoICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVuZGVmaW5lZDtcbiBcdFx0fVxuIFx0XHRob3RVcGRhdGUgPSB1bmRlZmluZWQ7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IGl0ZW0ucGFyZW50cztcbiBcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSBtb2R1bGVJZDtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24obGlzdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiBcdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRyZXR1cm4gbGlzdDtcbiBcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoIWhvdFVwZGF0ZSkgaG90VXBkYXRlID0ge307XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZSk7XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuIFx0XHRcdHJldHVybiB0cnVlO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBtb2R1bGVJZCkpXG4gXHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvaWNvbnMuanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pY29ucy5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9pbWFnZXMvaWNvbnMucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaWNvbnMtY2wge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLW5lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0yLW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0yLW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTItZS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMi1uZS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTItZS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMi1zZS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItbmUtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItZS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLXNlLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTY0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC02NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZm9sZGVyLWNvbGxhcHNlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWZvbGRlci1vcGVuIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1kb2N1bWVudCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZG9jdW1lbnQtYiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbm90ZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWFpbC1jbG9zZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1haWwtb3BlbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc3VpdGNhc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jb21tZW50IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGVyc29uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcHJpbnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmFzaCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWxvY2tlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXVubG9ja2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYm9va21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10YWcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ob21lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWZsYWcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYWxjdWxhdG9yIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FydCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBlbmNpbCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsb2NrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZGlzayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhbGVuZGFyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXpvb21pbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC16b29tb3V0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlYXJjaCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC13cmVuY2gge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZ2VhciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1oZWFydCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zdGFyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWxpbmsge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBsdXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wbHVzdGhpY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1taW51cyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1pbnVzdGhpY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1rZXkge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1saWdodGJ1bGIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zY2lzc29ycyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbGlwYm9hcmQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY29weSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jb250YWN0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXZpZGVvIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNjcmlwdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbG9zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsb3NldGhpY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hbGVydCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbm90aWNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaGVscCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNoZWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYnVsbGV0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcmFkaW8tb2ZmIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcmFkaW8tb24ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGluLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGluLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGxheSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wYXVzZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstbmV4dCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstcHJldiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstZW5kIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1maXJzdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXN0b3Age1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1lamVjdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC12b2x1bWUtb2ZmIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXZvbHVtZS1vbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTYwcHg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0ICcuL2ljb25zLnNjc3MnO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL2ljb25zLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL2ljb25zLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL2ljb25zLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFBQUFBRHdDQU1BQUFEWVNVcjVBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQUFSblFVMUJBQUN4and2OFlRVUFBQUFCYzFKSFFnQ3V6aHpwQUFBQkRsQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJ4VVlXOUFBQUFXWFJTVGxNQUwyWktDRUJnR1JBelVCcS9JbU9lUlkrVVAyMmduQ0FwekEweEFTd1dWU2Vad3hOeGdDTTBSOCt2YUVnS2hSdzRVKzhFSGt0L0gxcENnb3lvb3Ywa0FsRURJVEpxdGJqZllvY0drVzg4c3ExOHZzYXJ5THlxcFptS0M3QUFBQTdtU1VSQlZIamE3VjBKWTl1MkRxWmN5NVFjSjI2enJabmpyazF6ckUzWDEvYjEySDF2YisrK1Qvei9QL0pJeVJJQjhMSmlSM1ppZnM0RlVRZnhDU1FCa0ZLRVNFaEkyQUpJa0R1dVAydzVBeXRYVDBKWWY0a1owRHYzU3dpelFOQ2dCUEQ2a0hKZEt2RVdBRnZGd0FYWThkV2Z2Wm9FdDBDYkFNbnJROHI1SGJRSTRJZmJGN0IybGoweVlOWGZyVUtnM0daUUJBMElRZzFpc2JNTTdyVGVCczR0Mks0aXY4RzJoUVR2c0cwQmdRcjBid0Z1VWdLM01HakJ6aDJzUGlCa2d2MzNBWnNlQlhnVDZuOFVTSTVRUWtKQ1FrSkNRc0xHUE1FTiswSFNpdGFBTys4eW9CQUFEL0JscDN5QWxSQlNaKytWRWtjRkxBS3NIZmp1TkZ5VTFnVTRBVElZUFBZYURGbjFkOWM0VU96SXFNakE0U0tTQW9TS0FPaXZnWU16QmVTdnNWd21IeUNEZk1iU0I1c1BoeVZjWno1QXhwcmd0b1hEdDMwVVNFaElTRWhJU0VqWW9LZTF1ak8vMHZsaHN3cllvVTlRb1NzRVN0RHQramFoRURrYmhMZlk2ckZpc0hlaGg0T3Z6SDJCWUFVY3BlSHJ1ODRRSXNncXQwNEdNUUpKaFlEdEFZNFQydlVCcjRMZ3VsN28rbmE0RERFQ0lCaHZnNGp3NnpvOHNBdFZjTEUzZUFrQ1laMHd5Si9iaUVNbUZHeEFUZ3RoakRzT0Q1dG8vQXBkMUl1MmNjY2FJZ2lYUjg3SWJnZEViMGprQWhEczkwQkVtbkQvbzhBMUh4OGZKaE1TRWhJU0VoSjJGYXN2UzEzUnpaQ08xZWorVTdyODBPaFVWZVR5M1NxdzFBWEM4VHdzVVFGVUx2RGsxQkplbmQ0WkFxR0xhM28vbGlJSVh0OFIzM0lGSXVtSFFFYWlubGcwRk5tMWRTeDJsMEVDSW12RDNXWVdZaURJbndTSW1aY3JJUVE4SEFZY3pRWXN5QXFISGRHNDljaUdXS0lDN2xKM2RBd1FpT2ZCWVFQK3d5MENyQnJZMWFQbHZJbkZDWEJYd0hzTGx5b0dDTWJQNFM1Q3VHYm9neFpFbWdCckl0RW00RzdsMHJ1SHRKZTgyQW9FMm9qRHdGZ1RGOVlNZllRQUdja0h5SEFmQU81K05YU1B3c1hoc2NUUmh1UGpMc0RTd3h4c2ZUNUFRbG9oa1pDUWtKQ1FJRHBFb0dzZGhzTURNemdqNkxYcUI1MG04TmQ4ZGVsNjJoMUhmODRqSklROXh5NFpGRFpYQlE2RklWUytPdjJ1NStlQjZCSjZPaHhpdDlRMUcyN3hCL1JZQ1BLelZnYkFaa0R3OXh1SXdQc0JYUGtNT2w4dGxwaCtGY0NPQmQvaGF5ZWdDVGQ5QkVpSWhNL082ZXRndVd0Mkdyd1c0ZHdaMWtpQmROVFFmaUlFL0hjOE50OXNKMFJFckErd0NPQk5ZdTNobmVuVWRETEJpczdvOC8yT2NuOFRkNWhFOEJHaUpUckY2eGdZYVVaSGh2SUI4ZWcxdGdnb2xuOEk1NCtTbjVPUWtKQ1FrTEJWS0c3NFFPWndPeUEwWGNXOTRhdm92MDFUQWM1cEZ1cDlGZEhaUUNoRVIyOVBicXNGdFBHV29hZUFBZ1ZETkw0cm9MWUF3QVNHSHptQXJacXRBdmZ5YlZ5dTlDZlJHZEFBdm00RE5Od1RiRG9jME92aXRvc0FnRWgxdERLRkk5WURLNVBoalEzeE50azJNWGx6TE1EYW42N1lxQW55V0FCZnI5RFF2Vlh6b2VFK0lIUjdtK2k4TUZiQyt3QndXdHgyallMQlVjRFo1ZE1CQW9MTHhJSXZwN2doZmtEMEJNWHkrOHBiR1AxMzBUOGhJU0VoWWJkUWFqK2hYSDcvTjBPRk4zM1ZicXdxTnhtSDl2Z3k0cm5CNDlwVktrUDY0K0l5ek1jYmtRRms0ZzA3QVRwaVg0bjd3aVB6UXZGb0FYWkFveEtjNS9rWU9YdlYzMlBMMVIzNG42WWVMVFFjRVgzYkduUFptdG5hWDVRM3RSNW1NQnhDTm1SdUd2aWpOM3Zxa2pwMkE5Y1YyeUF0ei9PaUJpTmtRZ2hBRElBMjBTRndDeGkxbnZTZVF1dEtRMk1CdnZudStuVG1oRU1ZbnAzOURKaUEyV3dXZmdKREFEZ0ZKd0g3aEVEUXFxTU5paENKQ2FrclNBay8xdkJaQUl3Qi9kSVhYdlFCZ0NwSWFueGNIWDVzQ0RqN2FmOHZoSUNIRHg5YXkrUDlNdHZBQ2RENmY0RUpvQ1lGU24rd0tTcFEyZzhlYW5ndFlFK3JEdU05a3djb0svdHZDZERuUnltMituVG1oS29KUEgrT204Qk1xRnVnZnJZSGxOWG5pZ1JvL1IrOSs4SlBnR1FiMUJZcDl5UUtZZURvNk1qZkI4Q2VZa0Rwandtb3Zsb0NxazRRRWZCV0gvMzJiYlBock80RXo3eHQza0dBc0orbm9BUjhqdk1UZzlFajlUUDNFV0E5b3ZKeEJYVEJrNU1UTUNacVdVQzVOeDZySDZZSlZMS2ZnSk1haXcweWc1K3liQTZaSkFTVXFCZjhkZlhCK2c0NUFVTkdBQkFMR0JqOUF3UzBwL3VvQWpPNTRkQm5BZVZlaFJJOE11ZytkZ3lrVFdaWk93cGt6ZlV6cndYWUJNU2FBQzZ2KzhCY1dBU1U5SHJNRDRBdlkzN0Frc05nWFo4QnpjR1VadWdHVytGSXB6ZkNsN2MzY0FJcUJ2SjFPbnJscUVKNTlWTXcxMldwUE80S05kNWZxLzRKQ1FrSkNWdU9GeS9DNVFVRTg5cjFmMzZLWmozYVlmQkpOVXc5d1JrSEhHTVBGdktBaFdmN1M4dEMvSUhWSncrT2F5cmFPbWFiMUxDTjlTOUx3OEJFZTVFWDJSZ0ZPNnJLZzhkZy9HeFAxZ1BwTHhBRDZtQU5OdE5FUFp0TXU0Skx5L1g5YURYSXRUTlh0R043b2JrZDRIdDZDbkRLOU5lTzBwSFJYL3ZtYmZRcjNZNFlDdWZoTitwemppdFVxdnRjb3YzSjNLRDErUHUveGFYNEo0NXZNeVZrUkJaVVBoNGVJMW5YZnpUeVZSQVd6ajVRZzBNV3B5bzdLb3pyV0djczJ1aktKb0NGd3lCZXZiMzc4dDNiTWI3L1kxR0taUW40RC94V2ZmNkJGZFN1UDVOeDhLRmk0MkhHZlY5QUxSaXZVR0hYZTlHSXFCK1l3UGxJY1ZBTGo1dU16V01mQVl0ZUFGbkFPZndkWGdEV0g2WHM0aGJ3TC9HTCtKOUpLWjB3Q3poaEZuRENMR0JFWWcvVkF1cE9xbzF2MmZXK3FxV3YyZ3BXd1R5T0hVRDNBV2kxZkpTQVYyOC8vMWg5M1BvdlBIVk1RQUZWMXFtUi93dGZxOC9mMElvSjBzWXIrV2Ntby9LcS9TcDg3Q0dnaWU0SzJrU28vUVI2ZVJpT3hSR0pGeGtCSldPWTZkK3VpS0FFSVBtelh4NU9IdjcxdzRXOEJ6UXBHcE5IOU83WlRXQWhZL0gwMU1qYTl0dDhwNU1BYXhSVTV5Z0NTOXA1a3Z2Sm9zSlBNQUhXZWdPVGNGTE5uWjB1TEF1bXZ4M0FGMlROMnQxdlZmYzMrUFp1UzRCcS8wWGdlRXZSZ2RXSnNrZDhlSktmK1FFODdjMWsxeHRnUXZLSTY4K0hRVkV2NmpMRjFZekFvMXo0TElnaHU0bXVYdDRod0NjK1VFSkNRa0xDQmpER2lXbnR5c0dKdGM4RDZxbGNJekk4RGVIemRhNSsrZ0ttNnVjVUQ4MFhlR3JpQy9qaGgrKytndzlSZGM2MS9oWFVIL04zOE9vVnZKc1RUN1FVUE4zUTVCdGFtVzhZTThjSDZUOFpqMThUQmpxOTd0OGVhTlc1TWhSdGdtSmd5cjN4SStONS9VcmpqOFlWblk3VkNVWldjRU9pVThjNlZEcVhhL1pScm1PcGdoMHpPVmdYbU9CS084WlRlQTFySTBDN1d1Z0lyWHYxVFEzQUVQRDlqdzhlL1BpOXFjOVlRRDdDTXp1Y0FMSmtCS3BrRkZyd1VJZzZWVkVZWDd2VStSaEV3RXM5VjRjdk9OV3Mrd2lJcktlM3A3SXlvRzFxV3NsVEhyeTBGYXBzZmI4OS9KNWVuSUhjVlJpeUJSbjArR29lRk8wQU92QlU4WnpBRmpBWTRQWHEyWHl1dzB0RGdOSmZqUDBaSUVmR3hSWHVVeFBIN3VhVTZWK1M2Y212WVY4QjdpRy9saHdQeDJFQ3p0U2ZaL3FyS2I2b0psK1BrQVd3NlBYbHk3MlhjN2hvVC9oYTEyNnlQZ0s0Qlh4VHlhZFVmNk5nTnExd1JBODNoS2xiZW54OFRBZ2diZjVJNFRQMXhSWThUTDE5d0h5dUd3RHVCRitQeDVNMWRvS3NEL2htMFFlY21neGNUc0xSdWE3dmtUbDhlZzRYaUFGOW9qUFU3VFhKbTBhL2p6NWFmREVEOGZZQjQzSStuOE1jQXNQZ3VrZUJVNTJZTmZYaG9kdDBNUGdLWFN4WFg0VmhBS3d3WGYrNTMyemd3MkJsRVJVOGZRQ01OVEFCN3BtQU5mb0JwMVZxdXZDa0QvZ2pac3BhWGhlNnAzelFsUDcrbGFTdmRSRlZyN0dRaHFWTzZaVkRjVlUvWVBNNE96dzh3eFowcnJrcUhoU2VoSSs5Y2pJaElTRmh0ZWdVcjQ2Kzg0SHVZajY0czBQNlB3TjQxZ3J2TjczdSt6dWovM090N3ZQbS9rTXowd1RHQm1Zd3d3Zjh6clhRYm4wcnoyWVYvN00rRFVBNW1vMEozRGNFM1BjNVFpNC9JamVVV0ZNUGZBT1hZYWJIOUZudy9OZHJBUHFhejNsc0UzcmRkOEUzNU1Zb0lnczN0ZngwK0pUT3pnWWVnT2lsQjlBaDlETnljVnFIQVo0WXEvV2ZFTnZQOGVwamUrbnVxQmhoL1o2cUgwL0pEck1ORXBBMzl6djNFNUN6Smc5d1dlQ3luTXdtMndRVXhHU3FoZVpERWs0VEFrcVl6V2I5ZWJwR1lUOEI5akVGc1gzU0thNXNBZjEyZ3BVQjFBL05WRG9jR2dJT3ZSWmdXMUR1Yi9LZCs0QitvelhlNmQwMTRsMXZKMGpFbkErS0s0OEN2YjVmYjJZVXJtdHcwSWdISXRBSGVFYkF0ZDJXVGZwRjcrbTBMTng3YjVOMVNHOVlURWhJU0VqWUllUVFFcTk5MEoza3d2SnpydFVWZmZ6WWNxY0RZaC9lTUtXQUVGQ1ZGWGlIZkZMb0gwRDVhMTh3VUlmT3B0eU9ySExtTytkV01WUXpaSDNHZzRRQ1NrQmQxdGE1dWoxS1BiNERJUUNYMndTNG52UzFSZWlYQUx3WW1CTlFwVDhXbGF4K1RhejU4UWtoWUJMTThQZzBKaUwwVFVDUEZyQVVBVDFiUUw5OWdDdWxzTkUrb09kUndNNTNiSGdVMkhrL0lDRWhJU0ZodHdFNy9SeFY4V2NCbjM1V0VFZmxZb2ZlazZ1Zkk0VlBjL1E4UTViZmN6eEEwZmdtL1AwSFhlV3R3eFQrcEFnUWFIV3labVZpTVdDOVRMNjhtcng5Qm5BcHhLZTV1TVJQVzArUFZFUkxuNjgxaWd5UGgrcXJYYjROeDNROXU1YUJ5a1A5R1c2cGUxc3UxczFmbUR1VWpVQ3Z0ai8zRUZDOUdrM3V5Zlp0ZXlDbDN0REllL3BqM3Irbnk5VVd1UWRiYkFFS2wvaU82MzVoQ2xUOWxvQVBhN1FtM2xIZU9reXFNWENFMXJ5b1lIUU1SMk1QQWJldUU4d0FMaTh1Y2JkZnB5TnlvT3JmM2dnMWU2YnV6N05NSkNRa0pDVHNJdmp6QVRHWkw2THFLbmU5M3FweURQejVnSmpNbDlGMWxidGViMVU1ZXYvTk9zRTd5OGg4SVdWWHVldjFWcFdqNE04SDNEY25hT1FEN1JzZUxPVEQ5bDFwOVZMYVE3TS9rb1czL0w0cHYrKzl2b0JnK2F6TzJ1Qnl3ZXN2OFBNT3dXd1lXeHpObDg1V3Z3NE84T3h3YkgrNzNOcmZUSkc3eXZIc21mczNrUHFJVHo3NVJORDZWRThrTDBzQStjTWg2OVo3d0Nvc0lMQy9zQlFLNzg4SWlOWUh2ejdlSmM5ci9kZEh3QWk5Zzg1QmdPdDNGNFdpMTNkWVNNZ0M5TnRHNXRDQmdIZ1QwRy9mNm1MaXNTWUNNUUtEVFVxNExBcnZQNi8xWDQ0QS9ueUFvMU5yT3NGRGJ5Y0ZYUFozcXM1T2tsK2ZkN0swdk9ISEorczJRSjkzQ0tIdllXelZZYlNySEVmZmpzeXFqbFJYT1k2K1hkbFZYZW11Y2tKQ1FrSkNRa0lzSEFDNE5ubjdDYUJ2YTR2THQ1QUFDQk5RZlVnRUhTWkFnTGhaQkZUL25pMGdNNEpBa01YVXRnd2lXVURxQTI0U0FicytDaVFrSkNRa0pDU3NHL0xtZUFMUlZaQlFkbC9vS3RuL0I5cnFleVhreWdUdyszMlQ5RitIQlhCOWI1VCsxQUtxNWUzVngwT0E2LzhONlAyNS9yZTJEeWdiVVAybHBiL2NHUXVvOTcrNStxOXFBVGRlLzFWSEFZLyt1K29IR1AxdmtSL1FpVTFwdmhNU3Roei9CL2gxT1dpeU1wc3dBQUFBQUVsRlRrU3VRbUNDXCIiXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./node_modules/resizer-cl/src/Options.js":
/*!************************************************!*\
  !*** ./node_modules/resizer-cl/src/Options.js ***!
  \************************************************/
/*! exports provided: Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/**
 * Various interface options we can select
 */

/**
 * Interface options.
 * @param options User provided options that override the default values.
 * @constructor
 */
function Options(options) {
    options = options ? options : {};

    /// Options: vertical, horizontal, both
    this.resize = 'vertical';

    /// The resizing handle
    this.handle = 'bar';

    /// Range for grabbing
    this.grabSize = 10;

    /// Maximum speed we can resize in pixels per second
    this.maxSpeed = 1000;

    /// Use a mask (useful for iframes
    this.useMask = true;

    for(var property in options) {
        if(options.hasOwnProperty(property)) {
            if(!this.hasOwnProperty(property)) {
                throw new Error("Invalid option " + property);
            }
            this[property] = options[property];
        }
    }

}



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






/***/ }),

/***/ "./node_modules/resizer-cl/src/resizer-actual.js":
/*!*******************************************************!*\
  !*** ./node_modules/resizer-cl/src/resizer-actual.js ***!
  \*******************************************************/
/*! exports provided: ResizerActual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizerActual", function() { return ResizerActual; });

function ResizerActual(element, options) {
    element.classList.add('resizer');

    // Timeout period for animated resizing
    const timeoutPeriod = 20;

    //
    // Handle options
    //
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

    /// Are mouse move event handlers installed?
    let installedMouseListeners = false;

    /// Are touch move event handlers installed?
    let installedTouchListeners = false;

    let mask = null;

    /// Get the minimum height and width properties
    const rect = element.getBoundingClientRect();
    let height = rect.height;
    let width = rect.width;

    let minHeight = getComputedStyle(element).minHeight;
    minHeight = minHeight.substr(0, minHeight.length - 2);
    let minWidth = getComputedStyle(element).minWidth;
    minWidth = minWidth.substr(0, minWidth.length - 2);

    let timer = null;

    let targetWidth = null;
    let targetHeight = null;

    function start() {
        // Install the mouse down and touch start listeners
        element.addEventListener('mousedown', mouseDownListener);
        element.addEventListener('touchstart', touchStartListener);

        // Install the cursor listener
        // This swaps the cursor when we hover the mouse over the grab bar
        element.addEventListener('mousemove', cursorListener);
    }

    function setTarget(tw, th) {
        targetWidth = tw;
        targetHeight = th;

        // If a timer is not active, create one.
        if(timer === null) {
            timerMover();
        }
    }

    function timerMover() {
        timer = null;

        const maxPixels = options.maxSpeed * timeoutPeriod / 1000;

        if(targetHeight !== null) {
            const currentHeight = +height;
            let diff = targetHeight - currentHeight;

            if(Math.abs(diff) > maxPixels) {
                diff = diff < 0 ? -maxPixels : maxPixels;
                height = currentHeight + diff;

                element.style.height = '' + height + 'px';
            } else {
                // Not rate limited
                height = targetHeight;
                element.style.height = '' + height + 'px';
                targetHeight = null;
            }
        }

        if(targetWidth !== null) {
            const currentWidth = +width;
            let diff = targetWidth - currentWidth;

            if(Math.abs(diff) > maxPixels) {
                diff = diff < 0 ? -maxPixels : maxPixels;
                width = currentWidth + diff;

                element.style.width = '' + width + 'px';
            } else {
                // Not rate limited
                width = targetWidth;
                element.style.width = '' + width + 'px';
                targetWidth = null;
            }
        }

        if(targetHeight !== null || targetWidth !== null) {
            timer = setTimeout(timerMover, timeoutPeriod);
        }

    }

    let initialX, initialY;
    let initialWidth, initialHeight;
    let grabType = null;

    /**
     * Start the resizing on a mouse down or touch
     * @param x Mouse or touch X in pixels
     * @param y Mouse or touch Y in pixels
     */
    function moveStart(x, y) {
        initialX = x;
        initialY = y;
        let rect = element.getBoundingClientRect();
        width = +element.clientWidth;
        initialWidth = width;
        height = +element.clientHeight;
        initialHeight = height;
        targetWidth = null;
        targetHeight = null;
    }

    /**
     * Handle a mouse or finger move to a new position,
     * resulting in a resize request.
     * @param x Mouse or touch X in pixels
     * @param y Mouse or touch Y in pixels
     */
    function moveTo(x, y) {
        let dx = x - initialX;
        let dy = y - initialY;

        let newWidth = null;
        let newHeight = null;

        if(grabType === 'horizontal' || grabType === 'both') {
            // Compute a desired new width
            newWidth = initialWidth + dx;
            if (newWidth < minWidth) {
                newWidth = minWidth;
            }

        }

        if(grabType === 'vertical' || grabType === 'both') {
            const wasHeight = element.offsetHeight;

            // Compute a desired new height
            newHeight = initialHeight + dy;
            if (newHeight < minHeight) {
                newHeight = minHeight;
            }

        }

        setTarget(newWidth, newHeight);
    }

    //
    // Mouse Handling
    //

    function mouseDownListener(e) {
        const x = e.pageX;
        const y = e.pageY;

        grabType = onHandle(x, y, false);
        if(grabType !== null) {
            e.stopPropagation();
            e.preventDefault();

            moveStart(x, y);

            installMask();
            installMouseHandlers();
        }
    }

    function mouseMoveListener(e) {
        e.stopPropagation();
        e.preventDefault();

        if (e.buttons !== 1) {
            removeAll();
            return;
        }

        moveTo(e.pageX, e.pageY);
    }

    function mouseUpListener(e) {
        removeAll();
    }

    function installMouseHandlers() {
        removeHandlers();

        installedMouseListeners = true;
        document.addEventListener('mousemove', mouseMoveListener, false);
        document.addEventListener('mouseup', mouseUpListener, false);
    }

    //
    // Touch Handling
    //

    function touchStartListener(e) {
        const x = e.touches[0].pageX;
        const y = e.touches[0].pageY;

        grabType = onHandle(x, y, true);
        if(grabType !== null) {
            e.stopPropagation();
            e.preventDefault();

            moveStart(x, y);

            installMask();
            installTouchHandlers();
        }
    }

    function touchMoveListener(e) {
        e.stopPropagation();
        //e.preventDefault();

        const x = e.touches[0].pageX;
        const y = e.touches[0].pageY;

        moveTo(x, y);
    }

    function touchEndListener(e) {
        removeAll();
    }

    function installTouchHandlers() {
        removeHandlers();

        installedTouchListeners = true;
        document.addEventListener('touchmove', touchMoveListener);
        document.addEventListener('touchend', touchEndListener);
        document.addEventListener('touchcancel', touchEndListener);
    }

    //
    // Mask
    //

    function installMask() {
        if(!options.useMask) {
            return;
        }

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
        mask.style.cursor = 'pointer';

        body.appendChild(mask);
    }

    function removeAll() {
        if(timer !== null) {
            clearTimeout(timer);
            timer = null;
        }

        removeHandlers();
        removeMask();
    }

    function removeHandlers() {
        if(installedMouseListeners) {
            document.removeEventListener('mousemove', mouseMoveListener);
            document.removeEventListener('mouseup', mouseUpListener);
            installedMouseListeners = false;
        }

        if(installedTouchListeners) {
            document.removeEventListener('touchmove', touchMoveListener);
            document.removeEventListener('touchend', touchEndListener);
            document.removeEventListener('touchcancel', touchEndListener);
            installedTouchListeners = false;
        }
    }

    function removeMask() {
        if(mask !== null) {
            const body = document.querySelector('body');
            body.removeChild(mask);
            mask = null;
        }
    }

    /**
     * Determine if an x,y location is over a handle for manipulating
     * the resizeable object.
     * @param x location in pixels
     * @param y location in pixels
     * @returns string|null if not, 'horizontal', 'vertical', 'both' if over handle and mode available.
     */
    function onHandle(x, y, touch) {
        let rect = element.getBoundingClientRect();

        const slop = touch ? 10 : 0;

        let bottom = rect.bottom + window.pageYOffset;
        let vert = y >= bottom - grabSize - slop;

        let right = rect.right + window.pageXOffset;
        let horz = x >= right - grabSize - slop;

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
        if (onHandle(event.pageX, event.pageY, false) !== null) {
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


/***/ }),

/***/ "./node_modules/resizer-cl/src/resizer.js":
/*!************************************************!*\
  !*** ./node_modules/resizer-cl/src/resizer.js ***!
  \************************************************/
/*! exports provided: Resizer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resizer", function() { return Resizer; });
/* harmony import */ var _resizer_actual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizer-actual */ "./node_modules/resizer-cl/src/resizer-actual.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "./node_modules/resizer-cl/src/Options.js");
/**
 * Vertical resize support for div, textarea, iframe, etc.
 *
 * A problem with the resize feature of textarea and iframe is that it does not work in all
 * browsers (especially Edge) and is often quite quirky. This small package allows you to
 * add vertical resize ability to just about anything.
 *
 * @version 2.4.0 Added touch support. Limited speed of resizing to avoid issue when scrolling.
 */





/**
 * Constructor for a Resizer object
 * @param sel Selector or DOM element
 * @param options Options object.
 * @constructor
 */
function Resizer(sel, options) {
    options = new _Options__WEBPACK_IMPORTED_MODULE_1__["Options"](options);

    if(typeof sel === "string") {
        var elements = document.querySelectorAll(sel);
        for(var i=0; i<elements.length; i++) {
            new _resizer_actual__WEBPACK_IMPORTED_MODULE_0__["ResizerActual"](elements[i], options);
        }
    } else if(sel.nodeType) {
        new _resizer_actual__WEBPACK_IMPORTED_MODULE_0__["ResizerActual"](sel, options);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Resizer);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
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
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools */ "./src/DOM/Tools.js");

/**
 * The bottom buttons section of the dialog box
 * @constructor
 */

var Bottom = function Bottom(dialog, parentDiv) {
  var options = dialog.options;

  var initialize = function initialize() {
    // let html = `<button class="cl-dialog-btn">Ok</button><button class="cl-dialog-btn">Cancel</button>`;
    var div = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].createClassedDiv('cl-dialog-bottom');
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
    button.innerHTML = item.contents;

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click(dialog);
      }
    };

    if (item["class"] !== undefined) {
      button.classList.add(item["class"]);
    }

    if (item.focus === true) {
      button.focus();
    }
  }

  initialize();

  this["default"] = function () {
    options.buttons.forEach(function (item) {
      if (item["default"] === true && item.click !== undefined) {
        item.click(dialog);
      }
    });
  };
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
/* harmony import */ var _TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar */ "./src/TitleBar.js");
/* harmony import */ var _Body_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Body.js */ "./src/Body.js");
/* harmony import */ var _Bottom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bottom.js */ "./src/Bottom.js");
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
/* harmony import */ var _Mask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Mask.js */ "./src/Mask.js");
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! resizer-cl */ "./node_modules/resizer-cl/src/app.modules.js");







/**
 * Flexible and configurable dialog box object
 * @constructor
 *
 * @version 1.0.4 Touch support for title bar dragging
 */

var Dialog = function Dialog(options) {
  var _this = this;

  options = new _Options_js__WEBPACK_IMPORTED_MODULE_0__["default"](options);
  this.options = options;
  var body = null,
      mask = null,
      bottom = null;

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
    new _TitleBar__WEBPACK_IMPORTED_MODULE_1__["TitleBar"](_this, div);
    body = new _Body_js__WEBPACK_IMPORTED_MODULE_2__["default"](_this, div);

    if (options.buttons !== false) {
      bottom = new _Bottom_js__WEBPACK_IMPORTED_MODULE_3__["default"](_this, div);
    }

    mask = new _Mask_js__WEBPACK_IMPORTED_MODULE_5__["default"](_this);
    place(div, parent);
    div.addEventListener('keydown', function (event) {
      if (event.keyCode === 27) {
        event.preventDefault();

        _this.close();
      }
    });
  };

  var installResizable = function installResizable(div) {
    if (options.resize !== 'none') {
      var rsOptions = {
        'resize': options.resize,
        'handle': 'none',
        'grabSize': options.grabSize
      };
      new resizer_cl__WEBPACK_IMPORTED_MODULE_6__["default"](div, rsOptions);
    }
  };

  function toPx(val) {
    return '' + val + 'px';
  }

  var place = function place(div, parent) {
    //let parentWid = parent.offsetWidth;
    //let parentHit = parent.offsetHeight;
    var parentWid = window.innerWidth;
    var parentHit = window.innerHeight;
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
  /**
      * Calling is equivalent to pressing the first default button
   */


  this["default"] = function () {
    if (bottom !== null) {
      bottom["default"]();
    }
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
  ///   default: true if this is the default button
  ///   class: Class to add to the button

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
/*! exports provided: TitleBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleBar", function() { return TitleBar; });
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
/**
 * @file
 * Title bar management
 */

function TitleBar(dialog, parentDiv) {
  var options = dialog.options; /// Mouse move event handlers installed flag

  var installedMoveHandlers = false; /// Touch move event handlers installed flag

  var installedTouchHandlers = false;
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
    h1.addEventListener('mousedown', mouseDownListener);
    h1.addEventListener('touchstart', touchStartListener);
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

  function moveTo(x, y) {
    var dx = x - initialX;
    var dy = y - initialY;
    var newPositionX = initialPositionX + dx;
    var newPositionY = initialPositionY + dy;
    dialog.div.style.left = newPositionX + 'px';
    dialog.div.style.top = newPositionY + 'px';
  } //
  // Mouse handlers
  //


  function installMouseHandlers() {
    removeHandlers();
    installedMoveHandlers = true;
    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);
  }

  function mouseDownListener(event) {
    initialX = event.pageX;
    initialY = event.pageY;
    var rect = dialog.div.getBoundingClientRect();
    initialPositionX = rect.left;
    initialPositionY = rect.top;
    installMouseHandlers();
  }

  function mouseMoveListener(e) {
    if (e.buttons !== 1) {
      removeHandlers();
      return;
    }

    moveTo(e.pageX, e.pageY);
  }

  function mouseUpListener(e) {
    removeHandlers();
  } //
  // Touch handlers
  //


  function installTouchHandlers() {
    removeHandlers();
    installedTouchHandlers = true;
    document.addEventListener('touchmove', touchMoveListener);
    document.addEventListener('touchend', touchEndListener);
    document.addEventListener('touchcancel', touchEndListener);
  }

  function touchStartListener(event) {
    event.stopPropagation();
    event.preventDefault();
    initialX = event.touches[0].pageX;
    initialY = event.touches[0].pageY;
    var rect = dialog.div.getBoundingClientRect();
    initialPositionX = rect.left;
    initialPositionY = rect.top;
    installTouchHandlers();
  }

  function touchMoveListener(e) {
    e.stopPropagation();
    moveTo(e.touches[0].pageX, e.touches[0].pageY);
  }

  function touchEndListener(e) {
    removeHandlers();
  }
  /**
   * Remove all installed temporary handlers
   */


  function removeHandlers() {
    if (installedMoveHandlers) {
      document.removeEventListener('mousemove', mouseMoveListener);
      document.removeEventListener('mouseup', mouseUpListener);
      installedMoveHandlers = false;
    }

    if (installedTouchHandlers) {
      document.removeEventListener('touchmove', touchMoveListener);
      document.removeEventListener('touchend', touchEndListener);
      document.removeEventListener('touchcancel', touchEndListener);
      installedTouchHandlers = false;
    }
  }

  initialize();
}

/***/ }),

/***/ "./src/_dialog.scss":
/*!**************************!*\
  !*** ./src/_dialog.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js?sourceMap!./_dialog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/_dialog.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js?sourceMap!./_dialog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/_dialog.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js?sourceMap!./_dialog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/_dialog.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/app.modules.js":
/*!****************************!*\
  !*** ./src/app.modules.js ***!
  \****************************/
/*! exports provided: default, Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/all.js */ "./src/polyfills/all.js");
/* harmony import */ var _polyfills_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.js */ "./src/Dialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _Dialog_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MessageBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageBox.js */ "./src/MessageBox.js");
/* harmony import */ var _dialog_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_dialog.scss */ "./src/_dialog.scss");
/* harmony import */ var _dialog_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dialog_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var icons_cl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons-cl */ "./node_modules/icons-cl/dist/icons.js");
/* harmony import */ var icons_cl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_cl__WEBPACK_IMPORTED_MODULE_4__);
// The public-path module must be imported first!
//import './public-path.js';





_Dialog_js__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox = _MessageBox_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Dialog_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL19kaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9pY29ucy1jbC9kaXN0L2ljb25zLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9yZXNpemVyLWNsL3NyYy9PcHRpb25zLmpzIiwid2VicGFjazovL0RpYWxvZy8uL25vZGVfbW9kdWxlcy9yZXNpemVyLWNsL3NyYy9hcHAubW9kdWxlcy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9ub2RlX21vZHVsZXMvcmVzaXplci1jbC9zcmMvcmVzaXplci1hY3R1YWwuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL3Jlc2l6ZXItY2wvc3JjL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9Cb2R5LmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9Cb3R0b20uanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL0RPTS9Ub29scy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvRGlhbG9nLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9NYXNrLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9NZXNzYWdlQm94LmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9PcHRpb25zLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9UaXRsZUJhci5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvX2RpYWxvZy5zY3NzPzgxYTMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL2FwcC5tb2R1bGVzLmpzIl0sIm5hbWVzIjpbIkJvZHkiLCJkaWFsb2ciLCJwYXJlbnREaXYiLCJvcHRpb25zIiwiZGl2IiwiVG9vbHMiLCJjcmVhdGVDbGFzc2VkRGl2IiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiQm90dG9tIiwiaW5pdGlhbGl6ZSIsImJ1dHRvbnMiLCJhZGRPayIsImZvckVhY2giLCJpdGVtIiwiYWRkQnV0dG9uIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidW5kZWZpbmVkIiwiY2xpY2siLCJjbG9zZSIsImZvY3VzIiwiY29udGVudHMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRDbGFzcyIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJhZGRDbGFzc2VzIiwiY2xhc3NlcyIsInNwbGl0IiwiY2xzIiwiYWRkQ29udGVudCIsImlzU3RyaW5nIiwiaXNFbGVtZW50IiwidmFsIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwibm9kZVZhbHVlIiwiRGlhbG9nIiwiT3B0aW9ucyIsImJvZHkiLCJtYXNrIiwiYm90dG9tIiwiekluZGV4Iiwic3R5bGUiLCJwYXJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zdGFsbFJlc2l6YWJsZSIsIlRpdGxlQmFyIiwiTWFzayIsInBsYWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJyZXNpemUiLCJyc09wdGlvbnMiLCJncmFiU2l6ZSIsIlJlc2l6ZXIiLCJ0b1B4IiwicGFyZW50V2lkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInBhcmVudEhpdCIsImlubmVySGVpZ2h0IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInRvcCIsImxlZnQiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJtb2RhbCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiTWVzc2FnZUJveCIsInRpdGxlIiwibWVzc2FnZSIsImJ1dHRvbjEiLCJidXR0b24yIiwiT0tDQU5DRUwiLCJPSyIsInRpdGxlQmFyQnV0dG9ucyIsInRpdGxlQmFyQWRkQ2xhc3MiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJpbnN0YWxsZWRNb3ZlSGFuZGxlcnMiLCJpbnN0YWxsZWRUb3VjaEhhbmRsZXJzIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImluaXRpYWxQb3NpdGlvblgiLCJpbml0aWFsUG9zaXRpb25ZIiwiaHRtbCIsImFkZENsb3NlIiwiYWRkQ3VzdG9tIiwiaDEiLCJtb3VzZURvd25MaXN0ZW5lciIsInRvdWNoU3RhcnRMaXN0ZW5lciIsIm1vdmVUbyIsIngiLCJ5IiwiZHgiLCJkeSIsIm5ld1Bvc2l0aW9uWCIsIm5ld1Bvc2l0aW9uWSIsImluc3RhbGxNb3VzZUhhbmRsZXJzIiwicmVtb3ZlSGFuZGxlcnMiLCJtb3VzZU1vdmVMaXN0ZW5lciIsIm1vdXNlVXBMaXN0ZW5lciIsInBhZ2VYIiwicGFnZVkiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZSIsImluc3RhbGxUb3VjaEhhbmRsZXJzIiwidG91Y2hNb3ZlTGlzdGVuZXIiLCJ0b3VjaEVuZExpc3RlbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwidG91Y2hlcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEdBQUc7O1FBRUg7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0I7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGtCQUFrQiw4QkFBOEI7UUFDaEQ7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esb0JBQW9CLDJCQUEyQjtRQUMvQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxtQkFBbUIsY0FBYztRQUNqQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLEtBQUs7UUFDckI7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsWUFBWTtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdCQUFnQjtBQUM3QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhCQUE4QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsS0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFtQzs7QUFFUDs7Ozs7Ozs7Ozs7Ozs7OztBQ0RyQjtBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1WEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStDO0FBQ2I7OztBQUdsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGtCQUFrQixnREFBTzs7QUFFekI7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkMsZ0JBQWdCLDZEQUFhO0FBQzdCO0FBQ0EsS0FBSztBQUNMLFlBQVksNkRBQWE7QUFDekI7QUFDQTs7QUFFZSxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDakNWOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQUE7QUFBQTs7OztBQUtBOztBQUdBLElBQUlBLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQVNDLE1BQVQsRUFBaUJDLFNBQWpCLEVBQTRCO0FBQ25DLE1BQUlDLE9BQU8sR0FBR0YsTUFBTSxDQUFDRSxPQUFyQjtBQUVBLE1BQUlDLEdBQUcsR0FBR0MscURBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUIsZ0JBQXZCLEVBQXlDSCxPQUFPLENBQUNJLE9BQWpELENBQVY7QUFDQUwsV0FBUyxDQUFDTSxXQUFWLENBQXNCSixHQUF0QjtBQUVBLE9BQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNILENBUEQ7O0FBVWVKLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFFQTs7Ozs7QUFJQSxJQUFJUyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFTUixNQUFULEVBQWlCQyxTQUFqQixFQUE0QjtBQUNyQyxNQUFJQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0UsT0FBckI7O0FBRUEsTUFBSU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNuQjtBQUNBLFFBQUlOLEdBQUcsR0FBR0Msa0RBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUIsa0JBQXZCLENBQVY7QUFDQUosYUFBUyxDQUFDTSxXQUFWLENBQXNCSixHQUF0Qjs7QUFFQSxRQUFHRCxPQUFPLENBQUNRLE9BQVIsS0FBb0IsSUFBdkIsRUFBNkI7QUFDekJDLFdBQUssQ0FBQ1IsR0FBRCxDQUFMO0FBQ0gsS0FGRCxNQUVPO0FBQ0hELGFBQU8sQ0FBQ1EsT0FBUixDQUFnQkUsT0FBaEIsQ0FBd0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCQyxpQkFBUyxDQUFDWCxHQUFELEVBQU1VLElBQU4sQ0FBVDtBQUNILE9BRkQ7QUFHSDtBQUNKLEdBWkQ7O0FBY0EsV0FBU0YsS0FBVCxDQUFlUixHQUFmLEVBQW9CVSxJQUFwQixFQUEwQjtBQUN0QixRQUFJRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0FGLFVBQU0sQ0FBQ0csSUFBUCxHQUFjLFFBQWQ7QUFDQWYsT0FBRyxDQUFDSSxXQUFKLENBQWdCUSxNQUFoQjtBQUNBQSxVQUFNLENBQUNJLFNBQVAsR0FBbUIsSUFBbkI7O0FBQ0FKLFVBQU0sQ0FBQ0ssT0FBUCxHQUFpQixVQUFDQyxLQUFELEVBQVc7QUFDeEJBLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxVQUFHVCxJQUFJLEtBQUtVLFNBQVQsSUFBc0JWLElBQUksQ0FBQ1csS0FBTCxLQUFlRCxTQUF4QyxFQUFtRDtBQUMvQ1YsWUFBSSxDQUFDVyxLQUFMLENBQVd4QixNQUFYO0FBQ0gsT0FGRCxNQUVPO0FBQ0hBLGNBQU0sQ0FBQ3lCLEtBQVA7QUFDSDtBQUNKLEtBUEQ7O0FBU0FWLFVBQU0sQ0FBQ1csS0FBUDtBQUNIOztBQUdELFdBQVNaLFNBQVQsQ0FBbUJYLEdBQW5CLEVBQXdCVSxJQUF4QixFQUE4QjtBQUMxQixRQUFJRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0FGLFVBQU0sQ0FBQ0csSUFBUCxHQUFjLFFBQWQ7QUFDQWYsT0FBRyxDQUFDSSxXQUFKLENBQWdCUSxNQUFoQjtBQUNBQSxVQUFNLENBQUNJLFNBQVAsR0FBbUJOLElBQUksQ0FBQ2MsUUFBeEI7O0FBQ0FaLFVBQU0sQ0FBQ0ssT0FBUCxHQUFpQixVQUFDQyxLQUFELEVBQVc7QUFDeEJBLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxVQUFHVCxJQUFJLEtBQUtVLFNBQVQsSUFBc0JWLElBQUksQ0FBQ1csS0FBTCxLQUFlRCxTQUF4QyxFQUFtRDtBQUMvQ1YsWUFBSSxDQUFDVyxLQUFMLENBQVd4QixNQUFYO0FBQ0g7QUFDSixLQUxEOztBQU9BLFFBQUdhLElBQUksU0FBSixLQUFlVSxTQUFsQixFQUE2QjtBQUN6QlIsWUFBTSxDQUFDYSxTQUFQLENBQWlCQyxHQUFqQixDQUFxQmhCLElBQUksU0FBekI7QUFDSDs7QUFFRCxRQUFHQSxJQUFJLENBQUNhLEtBQUwsS0FBZSxJQUFsQixFQUF3QjtBQUNwQlgsWUFBTSxDQUFDVyxLQUFQO0FBQ0g7QUFDSjs7QUFFRGpCLFlBQVU7O0FBRVYsb0JBQWUsWUFBVztBQUN6QlAsV0FBTyxDQUFDUSxPQUFSLENBQWdCRSxPQUFoQixDQUF3QixVQUFDQyxJQUFELEVBQVU7QUFDakMsVUFBR0EsSUFBSSxXQUFKLEtBQWlCLElBQWpCLElBQXlCQSxJQUFJLENBQUNXLEtBQUwsS0FBZUQsU0FBM0MsRUFBc0Q7QUFDckRWLFlBQUksQ0FBQ1csS0FBTCxDQUFXeEIsTUFBWDtBQUNNO0FBQ1AsS0FKRDtBQUtBLEdBTkQ7QUFPSCxDQWpFRDs7QUFtRWVRLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBOzs7OztBQU1BLElBQUlKLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVcsQ0FFdEIsQ0FGRDtBQUlBOzs7Ozs7O0FBS0FBLEtBQUssQ0FBQzBCLFFBQU4sR0FBaUIsVUFBU0MsT0FBVCxFQUFrQkMsU0FBbEIsRUFBNkI7QUFDMUMsTUFBSUQsT0FBTyxDQUFDSCxTQUFaLEVBQ0lHLE9BQU8sQ0FBQ0gsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JHLFNBQXRCLEVBREosS0FHSUQsT0FBTyxDQUFDQyxTQUFSLElBQXFCLE1BQU1BLFNBQTNCO0FBQ1AsQ0FMRDs7QUFPQTVCLEtBQUssQ0FBQzZCLFVBQU4sR0FBbUIsVUFBU0YsT0FBVCxFQUFrQkcsT0FBbEIsRUFBMkI7QUFDMUMsTUFBR0EsT0FBTyxLQUFLWCxTQUFaLElBQXlCVyxPQUFPLEtBQUssSUFBeEMsRUFBOEM7QUFDMUM7QUFDSDs7QUFFREEsU0FBTyxDQUFDQyxLQUFSLENBQWMsR0FBZCxFQUFtQnZCLE9BQW5CLENBQTJCLFVBQUN3QixHQUFELEVBQVM7QUFDaENoQyxTQUFLLENBQUMwQixRQUFOLENBQWVDLE9BQWYsRUFBd0JLLEdBQXhCO0FBQ0gsR0FGRDtBQUdILENBUkQ7QUFVQTs7Ozs7Ozs7QUFNQWhDLEtBQUssQ0FBQ0MsZ0JBQU4sR0FBeUIsVUFBUzJCLFNBQVQsRUFBb0IxQixPQUFwQixFQUE2QjtBQUNsRCxNQUFJSCxHQUFHLEdBQUdhLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FiLE9BQUssQ0FBQzBCLFFBQU4sQ0FBZTNCLEdBQWYsRUFBb0I2QixTQUFwQjtBQUNBNUIsT0FBSyxDQUFDaUMsVUFBTixDQUFpQmxDLEdBQWpCLEVBQXNCRyxPQUF0QjtBQUNBLFNBQU9ILEdBQVA7QUFDSCxDQUxEO0FBT0E7Ozs7Ozs7QUFLQUMsS0FBSyxDQUFDaUMsVUFBTixHQUFtQixVQUFTTixPQUFULEVBQWtCekIsT0FBbEIsRUFBMkI7QUFDMUMsTUFBR0YsS0FBSyxDQUFDa0MsUUFBTixDQUFlaEMsT0FBZixDQUFILEVBQTRCO0FBQ3hCeUIsV0FBTyxDQUFDWixTQUFSLElBQXFCYixPQUFyQjtBQUNILEdBRkQsTUFFTyxJQUFHRixLQUFLLENBQUNtQyxTQUFOLENBQWdCakMsT0FBaEIsQ0FBSCxFQUE2QjtBQUNoQ3lCLFdBQU8sQ0FBQ3hCLFdBQVIsQ0FBb0JELE9BQXBCO0FBQ0g7QUFDSixDQU5EOztBQVFBRixLQUFLLENBQUNrQyxRQUFOLEdBQWlCLFVBQVNFLEdBQVQsRUFBYztBQUMzQixTQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTZCLENBQUMsQ0FBQ0EsR0FBRixJQUFTLHFFQUFPQSxHQUFQLE1BQWUsUUFBekIsSUFBc0NDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCSixHQUEvQixNQUF3QyxpQkFBakg7QUFDSCxDQUZEOztBQUlBcEMsS0FBSyxDQUFDbUMsU0FBTixHQUFrQixVQUFTQyxHQUFULEVBQWM7QUFDNUIsU0FBT0EsR0FBRyxLQUFLakIsU0FBUixJQUFxQmlCLEdBQUcsS0FBSyxJQUE3QixJQUFxQ0EsR0FBRyxDQUFDSyxTQUFKLEtBQWtCdEIsU0FBOUQ7QUFDSCxDQUZEOztBQUllbkIsb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7O0FBTUEsSUFBSTBDLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVM1QyxPQUFULEVBQWtCO0FBQUE7O0FBQzNCQSxTQUFPLEdBQUcsSUFBSTZDLG1EQUFKLENBQVk3QyxPQUFaLENBQVY7QUFDQSxPQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFFQSxNQUFJOEMsSUFBSSxHQUFHLElBQVg7QUFBQSxNQUFpQkMsSUFBSSxHQUFHLElBQXhCO0FBQUEsTUFBOEJDLE1BQU0sR0FBRyxJQUF2Qzs7QUFFQSxNQUFJekMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNuQnFDLFVBQU0sQ0FBQ0ssTUFBUCxJQUFpQixDQUFqQjtBQUNBLFNBQUksQ0FBQ0EsTUFBTCxHQUFjTCxNQUFNLENBQUNLLE1BQXJCO0FBRUEsUUFBSWhELEdBQUcsR0FBR0MscURBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUIsV0FBdkIsQ0FBVjtBQUNBRCx5REFBSyxDQUFDNkIsVUFBTixDQUFpQjlCLEdBQWpCLEVBQXNCRCxPQUFPLENBQUM0QixRQUE5QjtBQUVBLFNBQUksQ0FBQzNCLEdBQUwsR0FBV0EsR0FBWDtBQUNBQSxPQUFHLENBQUNpRCxLQUFKLENBQVVELE1BQVYsR0FBbUIsS0FBSSxDQUFDQSxNQUF4QjtBQUVBLFFBQUlFLE1BQU0sR0FBR3JDLFFBQVEsQ0FBQ3NDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBRCxVQUFNLENBQUM5QyxXQUFQLENBQW1CSixHQUFuQjtBQUVBb0Qsb0JBQWdCLENBQUNwRCxHQUFELENBQWhCO0FBRUEsUUFBSXFELGtEQUFKLENBQWEsS0FBYixFQUFtQnJELEdBQW5CO0FBQ0E2QyxRQUFJLEdBQUcsSUFBSWpELGdEQUFKLENBQVMsS0FBVCxFQUFlSSxHQUFmLENBQVA7O0FBQ0EsUUFBR0QsT0FBTyxDQUFDUSxPQUFSLEtBQW9CLEtBQXZCLEVBQThCO0FBQzdCd0MsWUFBTSxHQUFHLElBQUkxQyxrREFBSixDQUFXLEtBQVgsRUFBaUJMLEdBQWpCLENBQVQ7QUFDQTs7QUFDRDhDLFFBQUksR0FBRyxJQUFJUSxnREFBSixDQUFTLEtBQVQsQ0FBUDtBQUVBQyxTQUFLLENBQUN2RCxHQUFELEVBQU1rRCxNQUFOLENBQUw7QUFFQWxELE9BQUcsQ0FBQ3dELGdCQUFKLENBQXFCLFNBQXJCLEVBQWdDLFVBQUN0QyxLQUFELEVBQVc7QUFDdkMsVUFBSUEsS0FBSyxDQUFDdUMsT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN0QnZDLGFBQUssQ0FBQ0MsY0FBTjs7QUFDQSxhQUFJLENBQUNHLEtBQUw7QUFDSDtBQUNKLEtBTEQ7QUFNSCxHQTlCRDs7QUFnQ0EsTUFBSThCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ3BELEdBQUQsRUFBUztBQUM1QixRQUFHRCxPQUFPLENBQUMyRCxNQUFSLEtBQW1CLE1BQXRCLEVBQThCO0FBQzFCLFVBQUlDLFNBQVMsR0FBRztBQUNaLGtCQUFVNUQsT0FBTyxDQUFDMkQsTUFETjtBQUVaLGtCQUFVLE1BRkU7QUFHWixvQkFBWTNELE9BQU8sQ0FBQzZEO0FBSFIsT0FBaEI7QUFNQSxVQUFJQyxrREFBSixDQUFZN0QsR0FBWixFQUFpQjJELFNBQWpCO0FBQ0g7QUFDSixHQVZEOztBQWFBLFdBQVNHLElBQVQsQ0FBY3pCLEdBQWQsRUFBbUI7QUFDZixXQUFPLEtBQUtBLEdBQUwsR0FBVyxJQUFsQjtBQUNIOztBQUVELE1BQUlrQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDdkQsR0FBRCxFQUFNa0QsTUFBTixFQUFpQjtBQUN6QjtBQUNBO0FBQ0EsUUFBSWEsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFVBQXZCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHRixNQUFNLENBQUNHLFdBQXZCO0FBRUEsUUFBSUMsTUFBTSxHQUFHcEUsR0FBRyxDQUFDcUUsWUFBakI7QUFDQSxRQUFJQyxLQUFLLEdBQUd0RSxHQUFHLENBQUN1RSxXQUFoQjtBQUVBLFFBQUlDLEdBQUcsR0FBR04sU0FBUyxHQUFDLENBQVYsR0FBY0UsTUFBTSxHQUFDLENBQS9COztBQUNBLFFBQUdJLEdBQUcsR0FBRyxFQUFULEVBQWE7QUFDVEEsU0FBRyxHQUFHLEVBQU47QUFDSDs7QUFFRCxRQUFJQyxJQUFJLEdBQUdWLFNBQVMsR0FBQyxDQUFWLEdBQWNPLEtBQUssR0FBQyxDQUEvQjs7QUFDQSxRQUFHRyxJQUFJLEdBQUcsQ0FBVixFQUFhO0FBQ1RBLFVBQUksR0FBRyxDQUFQO0FBQ0g7O0FBRUR6RSxPQUFHLENBQUNpRCxLQUFKLENBQVV3QixJQUFWLEdBQWlCWCxJQUFJLENBQUNXLElBQUQsQ0FBckI7QUFDQXpFLE9BQUcsQ0FBQ2lELEtBQUosQ0FBVXVCLEdBQVYsR0FBZ0JWLElBQUksQ0FBQ1UsR0FBRCxDQUFwQjtBQUNILEdBckJEOztBQXVCQWxFLFlBQVU7O0FBRVYsT0FBSzRCLFVBQUwsR0FBa0IsVUFBUy9CLE9BQVQsRUFBa0I7QUFDaENGLHlEQUFLLENBQUNpQyxVQUFOLENBQWlCVyxJQUFJLENBQUM3QyxHQUF0QixFQUEyQkcsT0FBM0I7QUFDSCxHQUZEOztBQUlBLE9BQUttQixLQUFMLEdBQWEsWUFBVztBQUNwQndCLFFBQUksQ0FBQzRCLE1BQUw7QUFDQSxTQUFLMUUsR0FBTCxDQUFTMkUsVUFBVCxDQUFvQkMsV0FBcEIsQ0FBZ0MsS0FBSzVFLEdBQXJDO0FBQ0gsR0FIRDtBQUtIOzs7OztBQUdBLG9CQUFlLFlBQVc7QUFDbkIsUUFBRytDLE1BQU0sS0FBSyxJQUFkLEVBQW9CO0FBQ2hCQSxZQUFNLFdBQU47QUFDSDtBQUNKLEdBSko7QUFLQSxDQWpHRDs7QUFtR0FKLE1BQU0sQ0FBQ0ssTUFBUCxHQUFnQixLQUFoQjtBQUVlTCxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUNwSEE7QUFBQTtBQUFBOzs7QUFJQTs7QUFFQSxJQUFJVyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFTekQsTUFBVCxFQUFpQjtBQUN4QixNQUFJRSxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0UsT0FBckI7QUFFQSxNQUFJK0MsSUFBSSxHQUFHLElBQVg7O0FBRUEsTUFBRy9DLE9BQU8sQ0FBQzhFLEtBQVgsRUFBa0I7QUFDZCxRQUFJaEMsSUFBSSxHQUFHaEMsUUFBUSxDQUFDc0MsYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0FMLFFBQUksR0FBSTdDLHFEQUFLLENBQUNDLGdCQUFOLENBQXVCLE1BQXZCLENBQVIsQ0FGYyxDQUUwQjs7QUFFeEM0QyxRQUFJLENBQUNHLEtBQUwsQ0FBVzZCLFFBQVgsR0FBc0IsT0FBdEI7QUFDQWhDLFFBQUksQ0FBQ0csS0FBTCxDQUFXd0IsSUFBWCxHQUFrQixDQUFsQjtBQUNBM0IsUUFBSSxDQUFDRyxLQUFMLENBQVd1QixHQUFYLEdBQWlCLENBQWpCO0FBQ0ExQixRQUFJLENBQUNHLEtBQUwsQ0FBV3FCLEtBQVgsR0FBbUIsTUFBbkI7QUFDQXhCLFFBQUksQ0FBQ0csS0FBTCxDQUFXbUIsTUFBWCxHQUFvQixNQUFwQjtBQUNBdEIsUUFBSSxDQUFDRyxLQUFMLENBQVc4QixlQUFYLEdBQTZCLGFBQTdCO0FBQ0FqQyxRQUFJLENBQUNHLEtBQUwsQ0FBV0QsTUFBWCxHQUFvQm5ELE1BQU0sQ0FBQ21ELE1BQVAsR0FBZ0IsQ0FBcEM7QUFFQUgsUUFBSSxDQUFDekMsV0FBTCxDQUFpQjBDLElBQWpCO0FBQ0g7O0FBRUQsT0FBSzRCLE1BQUwsR0FBYyxZQUFXO0FBQ3JCLFFBQUc1QixJQUFJLEtBQUssSUFBWixFQUFrQjtBQUNkLFVBQUlELEtBQUksR0FBR2hDLFFBQVEsQ0FBQ3NDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDs7QUFDQU4sV0FBSSxDQUFDK0IsV0FBTCxDQUFpQjlCLElBQWpCOztBQUNBQSxVQUFJLEdBQUcsSUFBUDtBQUNIO0FBQ0osR0FORDtBQU9ILENBM0JEOztBQTZCZVEsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTs7O0FBSUE7O0FBRUEsSUFBSTBCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNDLEtBQVQsRUFBZ0JDLE9BQWhCLEVBQXlCbkUsSUFBekIsRUFBK0JvRSxPQUEvQixFQUF3Q0MsT0FBeEMsRUFBaUQ7QUFDOUQ7QUFDQSxNQUFJN0UsT0FBTyxHQUFHLENBQ1Y7QUFDSWlCLFlBQVEsRUFBRSxJQURkO0FBRUlILFNBQUssRUFBRSxlQUFTeEIsTUFBVCxFQUFpQjtBQUNwQixVQUFHc0YsT0FBTyxLQUFLL0QsU0FBZixFQUEwQjtBQUN0QitELGVBQU87QUFDVjs7QUFFRHRGLFlBQU0sQ0FBQ3lCLEtBQVA7QUFDSCxLQVJMO0FBU0ksYUFBUztBQVRiLEdBRFUsQ0FBZDs7QUFjQSxNQUFHUCxJQUFJLEtBQUtpRSxVQUFVLENBQUNLLFFBQXZCLEVBQWlDO0FBQzdCOUUsV0FBTyxHQUFHLENBQ047QUFDSWlCLGNBQVEsRUFBRSxJQURkO0FBRUlILFdBQUssRUFBRSxlQUFTeEIsTUFBVCxFQUFpQjtBQUNwQixZQUFHc0YsT0FBTyxLQUFLL0QsU0FBZixFQUEwQjtBQUN0QitELGlCQUFPO0FBQ1Y7O0FBRUR0RixjQUFNLENBQUN5QixLQUFQO0FBQ0gsT0FSTDtBQVNJLGVBQVM7QUFUYixLQURNLEVBWU47QUFDSUUsY0FBUSxFQUFFLFFBRGQ7QUFFSUgsV0FBSyxFQUFFLGVBQVN4QixNQUFULEVBQWlCO0FBQ3BCLFlBQUd1RixPQUFPLEtBQUtoRSxTQUFmLEVBQTBCO0FBQ3RCZ0UsaUJBQU87QUFDVjs7QUFFRHZGLGNBQU0sQ0FBQ3lCLEtBQVA7QUFDSDtBQVJMLEtBWk0sQ0FBVjtBQXVCSDs7QUFFQyxNQUFJekIsTUFBTSxHQUFHLElBQUk4QyxrREFBSixDQUFXO0FBQ3BCLGFBQVNzQyxLQURXO0FBRXBCLGVBQVcsZ0NBQWdDQyxPQUFoQyxHQUEwQyxZQUZqQztBQUdwQixlQUFXM0U7QUFIUyxHQUFYLENBQWI7QUFLTCxDQS9DRDs7QUFpREF5RSxVQUFVLENBQUNNLEVBQVgsR0FBZ0IsQ0FBaEI7QUFDQU4sVUFBVSxDQUFDSyxRQUFYLEdBQXNCLENBQXRCO0FBRWVMLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBOzs7O0FBSUE7Ozs7O0FBS0EsSUFBSXBDLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVM3QyxPQUFULEVBQWtCO0FBQzVCQSxTQUFPLEdBQUdBLE9BQU8sR0FBR0EsT0FBSCxHQUFhLEVBQTlCLENBRDRCLENBRzVCOztBQUNBLE9BQUtrRixLQUFMLEdBQWEsWUFBYixDQUo0QixDQU01QjtBQUNBOztBQUNBLE9BQUt0RCxRQUFMLEdBQWdCLElBQWhCLENBUjRCLENBVTVCO0FBQ0E7O0FBQ0EsT0FBSytCLE1BQUwsR0FBYyxNQUFkLENBWjRCLENBYzVCOztBQUNBLE9BQUtFLFFBQUwsR0FBZ0IsQ0FBaEIsQ0FmNEIsQ0FpQjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxPQUFLMkIsZUFBTCxHQUF1QixJQUF2QixDQXZCNEIsQ0F5QjVCO0FBQ0E7O0FBQ0EsT0FBS0MsZ0JBQUwsR0FBd0IsSUFBeEIsQ0EzQjRCLENBNkI1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE9BQUtqRixPQUFMLEdBQWUsSUFBZixDQXJDNEIsQ0F1QzVCOztBQUNBLE9BQUtKLE9BQUwsR0FBZSxJQUFmLENBeEM0QixDQTBDNUI7O0FBQ0EsT0FBSzBFLEtBQUwsR0FBYSxJQUFiOztBQUVBLE9BQUksSUFBSVksUUFBUixJQUFvQjFGLE9BQXBCLEVBQTZCO0FBQ3pCLFFBQUdBLE9BQU8sQ0FBQzJGLGNBQVIsQ0FBdUJELFFBQXZCLENBQUgsRUFBcUM7QUFDakMsVUFBRyxDQUFDLEtBQUtDLGNBQUwsQ0FBb0JELFFBQXBCLENBQUosRUFBbUM7QUFDL0IsY0FBTSxJQUFJRSxLQUFKLENBQVUsb0JBQW9CRixRQUE5QixDQUFOO0FBQ0g7O0FBQ0QsV0FBS0EsUUFBTCxJQUFpQjFGLE9BQU8sQ0FBQzBGLFFBQUQsQ0FBeEI7QUFDSDtBQUNKO0FBRUosQ0F0REQ7O0FBMERlN0Msc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7QUFBQTtBQUFBOzs7O0FBS0E7QUFFTyxTQUFTUyxRQUFULENBQWtCeEQsTUFBbEIsRUFBMEJDLFNBQTFCLEVBQXFDO0FBQ3hDLE1BQUlDLE9BQU8sR0FBR0YsTUFBTSxDQUFDRSxPQUFyQixDQUR3QyxDQUd4Qzs7QUFDQSxNQUFJNkYscUJBQXFCLEdBQUcsS0FBNUIsQ0FKd0MsQ0FNeEM7O0FBQ0EsTUFBSUMsc0JBQXNCLEdBQUcsS0FBN0I7QUFFQSxNQUFJQyxRQUFKLEVBQWNDLFFBQWQ7QUFDQSxNQUFJQyxnQkFBSixFQUFzQkMsZ0JBQXRCOztBQUVBLE1BQUkzRixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ25CLFFBQUk0RixJQUFJLGlCQUFVbkcsT0FBTyxDQUFDa0YsS0FBbEIsVUFBUjtBQUNBLFFBQUlqRixHQUFHLEdBQUdDLHFEQUFLLENBQUNDLGdCQUFOLENBQXVCLGVBQXZCLEVBQXdDZ0csSUFBeEMsQ0FBVjtBQUNBakcseURBQUssQ0FBQzZCLFVBQU4sQ0FBaUI5QixHQUFqQixFQUFzQkQsT0FBTyxDQUFDeUYsZ0JBQTlCO0FBQ0ExRixhQUFTLENBQUNNLFdBQVYsQ0FBc0JKLEdBQXRCOztBQUVBLFFBQUdELE9BQU8sQ0FBQ3dGLGVBQVIsS0FBNEIsSUFBL0IsRUFBcUM7QUFDakNZLGNBQVEsQ0FBQ25HLEdBQUQsQ0FBUjtBQUNILEtBRkQsTUFFTztBQUNIRCxhQUFPLENBQUN3RixlQUFSLENBQXdCOUUsT0FBeEIsQ0FBZ0MsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RDLFlBQUdBLElBQUksQ0FBQ0ssSUFBTCxLQUFjLE9BQWpCLEVBQTBCO0FBQ3RCb0Ysa0JBQVEsQ0FBQ25HLEdBQUQsRUFBTVUsSUFBTixDQUFSO0FBQ0gsU0FGRCxNQUVPLElBQUdBLElBQUksQ0FBQ0ssSUFBTCxLQUFjLFFBQWpCLEVBQTJCO0FBQzlCcUYsbUJBQVMsQ0FBQ3BHLEdBQUQsRUFBTVUsSUFBTixDQUFULENBRDhCLENBQ1I7QUFDekI7QUFDSixPQU5EO0FBT0g7O0FBR0QsUUFBSTJGLEVBQUUsR0FBR3JHLEdBQUcsQ0FBQ21ELGFBQUosQ0FBa0IsSUFBbEIsQ0FBVDtBQUVBa0QsTUFBRSxDQUFDN0MsZ0JBQUgsQ0FBb0IsV0FBcEIsRUFBaUM4QyxpQkFBakM7QUFDQUQsTUFBRSxDQUFDN0MsZ0JBQUgsQ0FBb0IsWUFBcEIsRUFBa0MrQyxrQkFBbEM7QUFDSCxHQXZCRDs7QUEyQkEsV0FBU0osUUFBVCxDQUFrQm5HLEdBQWxCLEVBQXVCVSxJQUF2QixFQUE2QjtBQUN6QixRQUFJRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0FkLE9BQUcsQ0FBQ0ksV0FBSixDQUFnQlEsTUFBaEI7QUFDQVgseURBQUssQ0FBQzBCLFFBQU4sQ0FBZWYsTUFBZixFQUF1QixxQkFBdkI7QUFDQUEsVUFBTSxDQUFDSSxTQUFQLEdBQW1CLHdDQUFuQjs7QUFDQUosVUFBTSxDQUFDSyxPQUFQLEdBQWlCLFVBQUNDLEtBQUQsRUFBVztBQUN4QkEsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFVBQUdULElBQUksS0FBS1UsU0FBVCxJQUFzQlYsSUFBSSxDQUFDVyxLQUFMLEtBQWVELFNBQXhDLEVBQW1EO0FBQy9DVixZQUFJLENBQUNXLEtBQUw7QUFDSCxPQUZELE1BRU87QUFDSHhCLGNBQU0sQ0FBQ3lCLEtBQVA7QUFDSDtBQUNKLEtBUEQ7QUFRSDs7QUFHRCxXQUFTOEUsU0FBVCxDQUFtQnBHLEdBQW5CLEVBQXdCVSxJQUF4QixFQUE4QjtBQUMxQixRQUFJRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0FkLE9BQUcsQ0FBQ0ksV0FBSixDQUFnQlEsTUFBaEI7QUFDQVgseURBQUssQ0FBQzBCLFFBQU4sQ0FBZWYsTUFBZixFQUF1QixxQkFBdkI7QUFDQUEsVUFBTSxDQUFDSSxTQUFQLEdBQW1CTixJQUFJLENBQUNjLFFBQXhCOztBQUNBWixVQUFNLENBQUNLLE9BQVAsR0FBaUIsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCQSxXQUFLLENBQUNDLGNBQU47O0FBQ0EsVUFBR1QsSUFBSSxLQUFLVSxTQUFULElBQXNCVixJQUFJLENBQUNXLEtBQUwsS0FBZUQsU0FBeEMsRUFBbUQ7QUFDL0NWLFlBQUksQ0FBQ1csS0FBTDtBQUNILE9BRkQsTUFFTztBQUNIeEIsY0FBTSxDQUFDeUIsS0FBUDtBQUNIO0FBQ0osS0FQRDtBQVFIOztBQUVELFdBQVNrRixNQUFULENBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0I7QUFDbEIsUUFBSUMsRUFBRSxHQUFHRixDQUFDLEdBQUdYLFFBQWI7QUFDQSxRQUFJYyxFQUFFLEdBQUdGLENBQUMsR0FBR1gsUUFBYjtBQUVBLFFBQUljLFlBQVksR0FBR2IsZ0JBQWdCLEdBQUdXLEVBQXRDO0FBQ0EsUUFBSUcsWUFBWSxHQUFHYixnQkFBZ0IsR0FBR1csRUFBdEM7QUFFQS9HLFVBQU0sQ0FBQ0csR0FBUCxDQUFXaUQsS0FBWCxDQUFpQndCLElBQWpCLEdBQXdCb0MsWUFBWSxHQUFHLElBQXZDO0FBQ0FoSCxVQUFNLENBQUNHLEdBQVAsQ0FBV2lELEtBQVgsQ0FBaUJ1QixHQUFqQixHQUF1QnNDLFlBQVksR0FBRyxJQUF0QztBQUNILEdBL0V1QyxDQWlGeEM7QUFDQTtBQUNBOzs7QUFFQSxXQUFTQyxvQkFBVCxHQUFnQztBQUM1QkMsa0JBQWM7QUFFZHBCLHlCQUFxQixHQUFHLElBQXhCO0FBQ0EvRSxZQUFRLENBQUMyQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q3lELGlCQUF2QztBQUNBcEcsWUFBUSxDQUFDMkMsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMwRCxlQUFyQztBQUNIOztBQUdELFdBQVNaLGlCQUFULENBQTJCcEYsS0FBM0IsRUFBa0M7QUFDOUI0RSxZQUFRLEdBQUc1RSxLQUFLLENBQUNpRyxLQUFqQjtBQUNBcEIsWUFBUSxHQUFHN0UsS0FBSyxDQUFDa0csS0FBakI7QUFFQSxRQUFJQyxJQUFJLEdBQUd4SCxNQUFNLENBQUNHLEdBQVAsQ0FBV3NILHFCQUFYLEVBQVg7QUFDQXRCLG9CQUFnQixHQUFHcUIsSUFBSSxDQUFDNUMsSUFBeEI7QUFDQXdCLG9CQUFnQixHQUFHb0IsSUFBSSxDQUFDN0MsR0FBeEI7QUFFQXVDLHdCQUFvQjtBQUN2Qjs7QUFFRCxXQUFTRSxpQkFBVCxDQUEyQk0sQ0FBM0IsRUFBOEI7QUFDMUIsUUFBR0EsQ0FBQyxDQUFDaEgsT0FBRixLQUFjLENBQWpCLEVBQW9CO0FBQ2hCeUcsb0JBQWM7QUFDZDtBQUNIOztBQUVEUixVQUFNLENBQUNlLENBQUMsQ0FBQ0osS0FBSCxFQUFVSSxDQUFDLENBQUNILEtBQVosQ0FBTjtBQUNIOztBQUVELFdBQVNGLGVBQVQsQ0FBeUJLLENBQXpCLEVBQTRCO0FBQ3hCUCxrQkFBYztBQUNqQixHQXBIdUMsQ0FzSHhDO0FBQ0E7QUFDQTs7O0FBRUEsV0FBU1Esb0JBQVQsR0FBZ0M7QUFDNUJSLGtCQUFjO0FBRWRuQiwwQkFBc0IsR0FBRyxJQUF6QjtBQUNBaEYsWUFBUSxDQUFDMkMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNpRSxpQkFBdkM7QUFDQTVHLFlBQVEsQ0FBQzJDLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDa0UsZ0JBQXRDO0FBQ0E3RyxZQUFRLENBQUMyQyxnQkFBVCxDQUEwQixhQUExQixFQUF5Q2tFLGdCQUF6QztBQUNIOztBQUdELFdBQVNuQixrQkFBVCxDQUE0QnJGLEtBQTVCLEVBQW1DO0FBQy9CQSxTQUFLLENBQUN5RyxlQUFOO0FBQ0F6RyxTQUFLLENBQUNDLGNBQU47QUFFQTJFLFlBQVEsR0FBRzVFLEtBQUssQ0FBQzBHLE9BQU4sQ0FBYyxDQUFkLEVBQWlCVCxLQUE1QjtBQUNBcEIsWUFBUSxHQUFHN0UsS0FBSyxDQUFDMEcsT0FBTixDQUFjLENBQWQsRUFBaUJSLEtBQTVCO0FBRUEsUUFBSUMsSUFBSSxHQUFHeEgsTUFBTSxDQUFDRyxHQUFQLENBQVdzSCxxQkFBWCxFQUFYO0FBQ0F0QixvQkFBZ0IsR0FBR3FCLElBQUksQ0FBQzVDLElBQXhCO0FBQ0F3QixvQkFBZ0IsR0FBR29CLElBQUksQ0FBQzdDLEdBQXhCO0FBRUFnRCx3QkFBb0I7QUFDdkI7O0FBR0QsV0FBU0MsaUJBQVQsQ0FBMkJGLENBQTNCLEVBQThCO0FBQzFCQSxLQUFDLENBQUNJLGVBQUY7QUFFQW5CLFVBQU0sQ0FBQ2UsQ0FBQyxDQUFDSyxPQUFGLENBQVUsQ0FBVixFQUFhVCxLQUFkLEVBQXFCSSxDQUFDLENBQUNLLE9BQUYsQ0FBVSxDQUFWLEVBQWFSLEtBQWxDLENBQU47QUFDSDs7QUFFRCxXQUFTTSxnQkFBVCxDQUEwQkgsQ0FBMUIsRUFBNkI7QUFDekJQLGtCQUFjO0FBQ2pCO0FBRUQ7Ozs7O0FBR0EsV0FBU0EsY0FBVCxHQUEwQjtBQUN0QixRQUFHcEIscUJBQUgsRUFBMEI7QUFFdEIvRSxjQUFRLENBQUNnSCxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ1osaUJBQTFDO0FBQ0FwRyxjQUFRLENBQUNnSCxtQkFBVCxDQUE2QixTQUE3QixFQUF3Q1gsZUFBeEM7QUFDQXRCLDJCQUFxQixHQUFHLEtBQXhCO0FBQ0g7O0FBRUQsUUFBR0Msc0JBQUgsRUFBMkI7QUFDdkJoRixjQUFRLENBQUNnSCxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ0osaUJBQTFDO0FBQ0E1RyxjQUFRLENBQUNnSCxtQkFBVCxDQUE2QixVQUE3QixFQUF5Q0gsZ0JBQXpDO0FBQ0E3RyxjQUFRLENBQUNnSCxtQkFBVCxDQUE2QixhQUE3QixFQUE0Q0gsZ0JBQTVDO0FBQ0E3Qiw0QkFBc0IsR0FBRyxLQUF6QjtBQUNIO0FBQ0o7O0FBRUR2RixZQUFVO0FBQ2IsQzs7Ozs7Ozs7Ozs7QUN4TEQsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyx5U0FBdUo7O0FBRXpMOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSx5U0FBdUo7QUFDN0o7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx5U0FBdUo7O0FBRWpMOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQXFDLGtEQUFNLENBQUNxQyxVQUFQLEdBQW9CQSxzREFBcEI7QUFFZXJDLGlIQUFmIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRpYWxvZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEaWFsb2dcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlRGlhbG9nXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZURpYWxvZ1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImVhOGIzZGY2ZWM5M2FkNzUxYzE4XCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcbiBcdFx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG4gXHRcdFx0XHRzd2l0Y2ggKGhvdFN0YXR1cykge1xuIFx0XHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG4gXHRcdFx0XHRcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcbiBcdFx0XHRcdFx0XHQoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID1cbiBcdFx0XHRcdFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoLCBob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gXCJEaWFsb2dcIjtcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuIFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKSB7XG4gXHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0IW1vZHVsZSB8fFxuIFx0XHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG4gXHRcdFx0XHQpXG4gXHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcbiBcdFx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG4gXHRcdFx0XHQhaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmSW52YWxpZGF0ZWRcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0cGFyZW50czogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0ucGFyZW50cy5zbGljZSgpLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRpZiAoaG90VXBkYXRlTmV3SGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1bmRlZmluZWQ7XG4gXHRcdH1cbiBcdFx0aG90VXBkYXRlID0gdW5kZWZpbmVkO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBpdGVtLnBhcmVudHM7XG4gXHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gbW9kdWxlSWQ7XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKGxpc3QpIHtcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG4gXHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKCFob3RVcGRhdGUpIGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUpO1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcbiBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgbW9kdWxlSWQpKVxuIFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL2FwcC5tb2R1bGVzLmpzXCIpKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLm1vZHVsZXMuanNcIik7XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5kaWFsb2ctY2wge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ0NDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gIG1heC1oZWlnaHQ6IDYwMHB4OyB9XFxuXFxuZGl2LmNsLWRpYWxvZy1ib3R0b20ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsZXg6IDAgMCA0NHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuZGl2LmRpYWxvZy1jbC1ib2R5IHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwOyB9XFxuICBkaXYuZGlhbG9nLWNsLWJvZHkgcDpmaXJzdC1jaGlsZCwgZGl2LmRpYWxvZy1jbC1ib2R5IGgxOmZpcnN0LWNoaWxkLCBkaXYuZGlhbG9nLWNsLWJvZHkgaDI6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICBkaXYuZGlhbG9nLWNsLWJvZHkgcDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDdlbTtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAtMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG5cXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSBidXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcblxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbjpkaXNhYmxlZCxcXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSBidXR0b25bZGlzYWJsZWRdIHtcXG4gIGNvbG9yOiAjY2NjOyB9XFxuXFxuZGl2LmRpYWxvZy1jbC10b3Age1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleDogMCAwIDI1cHg7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogbm93cmFwOyB9XFxuICBkaXYuZGlhbG9nLWNsLXRvcCBoMSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA0cHggNHB4IDAgMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICBkaXYuZGlhbG9nLWNsLXRvcCBidXR0b24uZGlhbG9nLWNsLXRiLWJ1dHRvbiB7XFxuICAgIGZsZXg6IDAgMCAyNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICBkaXYuZGlhbG9nLWNsLXRvcCBidXR0b24uZGlhbG9nLWNsLXRiLWJ1dHRvbiBzcGFuIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogNHB4O1xcbiAgICAgIHRvcDogNHB4OyB9XFxuICBkaXYuZGlhbG9nLWNsLXRvcCAuZGlhbG9nLWNsLXRiLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODExMjM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmRpdi5kaWFsb2ctY2wgZGl2Lm1lc3NhZ2UtY2wge1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBwYWRkaW5nOiAxZW07IH1cXG5cXG5kaXYuZGlhbG9nLWNsLWNvbHVtbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIGRpdi5kaWFsb2ctY2wtY29sdW1uID4gZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAxLjVlbSAwIDIuMGVtIDA7IH1cXG4gIGRpdi5kaWFsb2ctY2wtY29sdW1uIHNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkljb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkljb25zXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlSWNvbnNcIl07XG4vKioqKioqLyBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVJY29uc1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4vKioqKioqLyBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4vKioqKioqLyBcdH0gO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuLyoqKioqKi8gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuLyoqKioqKi8gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4vKioqKioqLyBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4vKioqKioqLyBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuLyoqKioqKi8gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuLyoqKioqKi8gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbi8qKioqKiovIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbi8qKioqKiovIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4vKioqKioqLyBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbi8qKioqKiovIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4vKioqKioqLyBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbi8qKioqKiovIFx0XHRcdFx0XHRyZWplY3QoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4vKioqKioqLyBcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuLyoqKioqKi8gXHRcdFx0XHRcdHJlc29sdmUoKTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4vKioqKioqLyBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHN1Y2Nlc3Ncbi8qKioqKiovIFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybjtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH0pO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4vKioqKioqLyBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImNlMWVkYzFiYThiMjc2YjlhY2Q0XCI7XG4vKioqKioqLyBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuLyoqKioqKi8gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbi8qKioqKiovIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbi8qKioqKiovIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4vKioqKioqLyBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHRcdGNvbnNvbGUud2Fybihcbi8qKioqKiovIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuLyoqKioqKi8gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuLyoqKioqKi8gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuLyoqKioqKi8gXHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4vKioqKioqLyBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbi8qKioqKiovIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4vKioqKioqLyBcdFx0XHRcdHRocm93IGVycjtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0cmV0dXJuIGZuO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0dmFyIGhvdCA9IHtcbi8qKioqKiovIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbi8qKioqKiovIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4vKioqKioqLyBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuLyoqKioqKi8gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4vKioqKioqLyBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyBNb2R1bGUgQVBJXG4vKioqKioqLyBcdFx0XHRhY3RpdmU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4vKioqKioqLyBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4vKioqKioqLyBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuLyoqKioqKi8gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuLyoqKioqKi8gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRzd2l0Y2ggKGhvdFN0YXR1cykge1xuLyoqKioqKi8gXHRcdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRob3RVcGRhdGUgPSB7fTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2gobW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0ZGVmYXVsdDpcbi8qKioqKiovIFx0XHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcbi8qKioqKiovIFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4vKioqKioqLyBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4vKioqKioqLyBcdFx0XHRhcHBseTogaG90QXBwbHksXG4vKioqKioqLyBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuLyoqKioqKi8gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbi8qKioqKiovIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuLyoqKioqKi8gXHRcdHJldHVybiBob3Q7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuLyoqKioqKi8gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4vKioqKioqLyBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuLyoqKioqKi8gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4vKioqKioqLyBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4vKioqKioqLyBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuLyoqKioqKi8gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4vKioqKioqLyBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbi8qKioqKiovIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4vKioqKioqLyBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuLyoqKioqKi8gXHR2YXIgaG90RGVmZXJyZWQ7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgdXBkYXRlIGluZm9cbi8qKioqKiovIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaCwgaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuLyoqKioqKi8gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuLyoqKioqKi8gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuLyoqKioqKi8gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4vKioqKioqLyBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuLyoqKioqKi8gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90U2V0U3RhdHVzKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIik7XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiBudWxsO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbi8qKioqKiovIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuLyoqKioqKi8gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbi8qKioqKiovIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuLyoqKioqKi8gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbi8qKioqKiovIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuLyoqKioqKi8gXHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbi8qKioqKiovIFx0XHRcdHZhciBjaHVua0lkID0gXCJJY29uc1wiO1xuLyoqKioqKi8gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4vKioqKioqLyBcdFx0XHR7XG4vKioqKioqLyBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4vKioqKioqLyBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbi8qKioqKiovIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4vKioqKioqLyBcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4vKioqKioqLyBcdFx0fSk7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuLyoqKioqKi8gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuO1xuLyoqKioqKi8gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4vKioqKioqLyBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuLyoqKioqKi8gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbi8qKioqKiovIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4vKioqKioqLyBcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuLyoqKioqKi8gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4vKioqKioqLyBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4vKioqKioqLyBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4vKioqKioqLyBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuLyoqKioqKi8gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbi8qKioqKiovIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbi8qKioqKiovIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuLyoqKioqKi8gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuLyoqKioqKi8gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbi8qKioqKiovIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuLyoqKioqKi8gXHRcdFx0XHR9KVxuLyoqKioqKi8gXHRcdFx0XHQudGhlbihcbi8qKioqKiovIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4vKioqKioqLyBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuLyoqKioqKi8gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbi8qKioqKiovIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbi8qKioqKiovIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbi8qKioqKiovIFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKTtcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKSB7XG4vKioqKioqLyBcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0dmFyIGNiO1xuLyoqKioqKi8gXHRcdHZhciBpO1xuLyoqKioqKi8gXHRcdHZhciBqO1xuLyoqKioqKi8gXHRcdHZhciBtb2R1bGU7XG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZUlkO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbi8qKioqKiovIFx0XHRcdFx0XHRpZDogaWRcbi8qKioqKiovIFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4vKioqKioqLyBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbi8qKioqKiovIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0XHQhbW9kdWxlIHx8XG4vKioqKioqLyBcdFx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuLyoqKioqKi8gXHRcdFx0XHQpXG4vKioqKioqLyBcdFx0XHRcdFx0Y29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbi8qKioqKiovIFx0XHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4vKioqKioqLyBcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4vKioqKioqLyBcdFx0XHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbi8qKioqKiovIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbi8qKioqKiovIFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbi8qKioqKiovIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbi8qKioqKiovIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuLyoqKioqKi8gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4vKioqKioqLyBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuLyoqKioqKi8gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuLyoqKioqKi8gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbi8qKioqKiovIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuLyoqKioqKi8gXHRcdFx0Y29uc29sZS53YXJuKFxuLyoqKioqKi8gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuLyoqKioqKi8gXHRcdFx0KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbi8qKioqKiovIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVzdWx0O1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuLyoqKioqKi8gXHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbi8qKioqKiovIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbi8qKioqKiovIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuLyoqKioqKi8gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRkZWZhdWx0OlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuLyoqKioqKi8gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0KVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4vKioqKioqLyBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbi8qKioqKiovIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4vKioqKioqLyBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4vKioqKioqLyBcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4vKioqKioqLyBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4vKioqKioqLyBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbi8qKioqKiovIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuLyoqKioqKi8gXHRcdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuLyoqKioqKi8gXHRcdFx0XHQhaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmSW52YWxpZGF0ZWRcbi8qKioqKiovIFx0XHRcdCkge1xuLyoqKioqKi8gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4vKioqKioqLyBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRwYXJlbnRzOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5wYXJlbnRzLnNsaWNlKCksXG4vKioqKioqLyBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuLyoqKioqKi8gXHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuLyoqKioqKi8gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4vKioqKioqLyBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuLyoqKioqKi8gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fSk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdHZhciBpZHg7XG4vKioqKioqLyBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4vKioqKioqLyBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbi8qKioqKiovIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4vKioqKioqLyBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuLyoqKioqKi8gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbi8qKioqKiovIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbi8qKioqKiovIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4vKioqKioqLyBcdFx0XHRcdGNiKGRhdGEpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuLyoqKioqKi8gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbi8qKioqKiovIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4vKioqKioqLyBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4vKioqKioqLyBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4vKioqKioqLyBcdFx0dmFyIGRlcGVuZGVuY3k7XG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuLyoqKioqKi8gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbi8qKioqKiovIFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbi8qKioqKiovIFx0XHRcdCkge1xuLyoqKioqKi8gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcbi8qKioqKiovIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0aWYgKGhvdFVwZGF0ZU5ld0hhc2ggIT09IHVuZGVmaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuLyoqKioqKi8gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVuZGVmaW5lZDtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0aG90VXBkYXRlID0gdW5kZWZpbmVkO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbi8qKioqKiovIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuLyoqKioqKi8gXHRcdHZhciBlcnJvciA9IG51bGw7XG4vKioqKioqLyBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuLyoqKioqKi8gXHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuLyoqKioqKi8gXHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChjYikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4vKioqKioqLyBcdFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuLyoqKioqKi8gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuLyoqKioqKi8gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbi8qKioqKiovIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gaXRlbS5wYXJlbnRzO1xuLyoqKioqKi8gXHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gbW9kdWxlSWQ7XG4vKioqKioqLyBcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4vKioqKioqLyBcdFx0aWYgKGVycm9yKSB7XG4vKioqKioqLyBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24obGlzdCkge1xuLyoqKioqKi8gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiBsaXN0O1xuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4vKioqKioqLyBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4vKioqKioqLyBcdFx0fSk7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuLyoqKioqKi8gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRcdGlmICghaG90VXBkYXRlKSBob3RVcGRhdGUgPSB7fTtcbi8qKioqKiovIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUpO1xuLyoqKioqKi8gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHRydWU7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBtb2R1bGVJZCkpXG4vKioqKioqLyBcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbi8qKioqKiovIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbi8qKioqKiovIFx0XHRcdGNoaWxkcmVuOiBbXVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL2ljb25zLmpzXCIpKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaWNvbnMuanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vc3JjL2ljb25zLnNjc3NcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vc3JjL2ljb25zLnNjc3MgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2ltYWdlcy9pY29ucy5wbmcgKi8gXCIuL3NyYy9pbWFnZXMvaWNvbnMucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pLCBcIi5pY29ucy1jbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLW5lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLW5lLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLXNlLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW5lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1uZS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItc2Utbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNjRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTY0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1mb2xkZXItY29sbGFwc2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZm9sZGVyLW9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWRvY3VtZW50IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1kb2N1bWVudC1iIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ub3RlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1tYWlsLWNsb3NlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWFpbC1vcGVuIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zdWl0Y2FzZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNvbW1lbnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wZXJzb24ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wcmludCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyYXNoIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbG9ja2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdW5sb2NrZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ib29rbWFyayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRhZyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWhvbWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZmxhZyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhbGN1bGF0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJ0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGVuY2lsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xvY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1kaXNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FsZW5kYXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtem9vbWluIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXpvb21vdXQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2VhcmNoIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXdyZW5jaCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1nZWFyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWhlYXJ0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXN0YXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbGluayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGx1cyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBsdXN0aGljayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1pbnVzIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWludXN0aGljayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWtleSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWxpZ2h0YnVsYiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNjaXNzb3JzIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsaXBib2FyZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jb3B5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNvbnRhY3Qge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdmlkZW8ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2NyaXB0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsb3NlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xvc2V0aGljayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFsZXJ0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ub3RpY2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1oZWxwIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2hlY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1idWxsZXQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1yYWRpby1vZmYge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1yYWRpby1vbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1waW4tdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1waW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wbGF5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBhdXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1uZXh0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1wcmV2IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1lbmQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLWZpcnN0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc3RvcCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWVqZWN0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXZvbHVtZS1vZmYge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdm9sdW1lLW9uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xNjBweDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSAgdHJ1ZSA/IF9fd2VicGFja19yZXF1aXJlX18ubmMgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2ljb25zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2ljb25zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIGV4cG9ydHMgcHJvdmlkZWQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2ljb25zX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaWNvbnMuc2NzcyAqLyBcIi4vc3JjL2ljb25zLnNjc3NcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2ljb25zX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcblxyXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaWNvbnMuc2Nzc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2ljb25zLnNjc3MgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgYXBpID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzICovIFwiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohICEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9pY29ucy5zY3NzICovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vc3JjL2ljb25zLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAodHJ1ZSkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICAvKiEgIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL2ljb25zLnNjc3MgKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9zcmMvaWNvbnMuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL2ljb25zLnNjc3MgKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9zcmMvaWNvbnMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmksIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbWFnZXMvaWNvbnMucG5nXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW1hZ2VzL2ljb25zLnBuZyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRQUFBQUR3Q0FNQUFBRFlTVXI1QUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBQmMxSkhRZ0N1emh6cEFBQUJEbEJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCeFVZVzlBQUFBV1hSU1RsTUFMMlpLQ0VCZ0dSQXpVQnEvSW1PZVJZK1VQMjJnbkNBcHpBMHhBU3dXVlNlWnd4TnhnQ00wUjgrdmFFZ0toUnc0VSs4RUhrdC9IMXBDZ295b292MGtBbEVESVRKcXRiamZZb2NHa1c4OHNxMTh2c2FyeUx5cXBabUtDN0FBQUE3bVNVUkJWSGphN1YwSlk5dTJEcVpjeTVRY0oyNnpyWm5qcmsxenJFM1gxL2IxMkgxdmIrKytUL3ovUC9KSXlSSUI4TEppUjNaaWZzNEZVUWZ4Q1NRQmtGS0VTRWhJMkFKSWtEdXVQMnc1QXl0WFQwSllmNGtaMER2M1N3aXpRTkNnQlBENmtISmRLdkVXQUZ2RndBWFk4ZFdmdlpvRXQwQ2JBTW5yUThyNUhiUUk0SWZiRjdCMmxqMHlZTlhmclVLZzNHWlFCQTBJUWcxaXNiTU03clRlQnM0dDJLNGl2OEcyaFFUdnNHMEJnUXIwYndGdVVnSzNNR2pCemgyc1BpQmtndjMzQVpzZUJYZ1Q2bjhVU0k1UVFrSkNRa0pDUXNMR1BNRU4rMEhTaXRhQU8rOHlvQkFBRC9CbHAzeUFsUkJTWisrVkVrY0ZMQUtzSGZqdU5GeVUxZ1U0QVRJWVBQWWFERm4xZDljNFVPeklxTWpBNFNLU0FvU0tBT2l2Z1lNekJlU3ZzVndtSHlDRGZNYlNCNXNQaHlWY1p6NUF4cHJndG9YRHQzMFVTRWhJU0VoSVNFallvS2UxdWpPLzB2bGhzd3JZb1U5UW9Tc0VTdER0K2phaEVEa2JoTGZZNnJGaXNIZWhoNE92ekgyQllBVWNwZUhydTg0UUlzZ3F0MDRHTVFKSmhZRHRBWTRUMnZVQnI0TGd1bDdvK25hNERERUNJQmh2ZzRqdzZ6bzhzQXRWY0xFM2VBa0NZWjB3eUovYmlFTW1GR3hBVGd0aGpEc09ENXRvL0FwZDFJdTJjY2NhSWdpWFI4N0liZ2RFYjBqa0FoRHM5MEJFbW5EL284QTFIeDhmSmhNU0VoSVNFaEoyRmFzdlMxM1J6WkNPMWVqK1U3cjgwT2hVVmVUeTNTcXcxQVhDOFR3c1VRRlVMdkRrMUJKZW5kNFpBcUdMYTNvL2xpSUlYdDhSMzNJRkl1bUhRRWFpbmxnMEZObTFkU3gybDBFQ0ltdkQzV1lXWWlESW53U0ltWmNySVFROEhBWWN6UVlzeUFxSEhkRzQ5Y2lHV0tJQzdsSjNkQXdRaU9mQllRUCt3eTBDckJyWTFhUGx2SW5GQ1hCWHdIc0xseW9HQ01iUDRTNUN1R2JvZ3haRW1nQnJJdEVtNEc3bDBydUh0SmU4MkFvRTJvakR3RmdURjlZTWZZUUFHY2tIeUhBZkFPNStOWFNQd3NYaHNjVFJodVBqTHNEU3d4eHNmVDVBUWxvaGtaQ1FrSkNRSURwRW9Hc2Roc01ETXpnajZMWHFCNTBtOE5kOGRlbDYyaDFIZjg0akpJUTl4eTRaRkRaWEJRNkZJVlMrT3YydTUrZUI2Qko2T2h4aXQ5UTFHMjd4Qi9SWUNQS3pWZ2JBWmtEdzl4dUl3UHNCWFBrTU9sOHRscGgrRmNDT0JkL2hheWVnQ1RkOUJFaUloTS9PNmV0Z3VXdDJHcndXNGR3WjFraUJkTlRRZmlJRS9IYzhOdDlzSjBSRXJBK3dDT0JOWXUzaG5lblVkRExCaXM3bzgvMk9jbjhUZDVoRThCR2lKVHJGNnhnWWFVWkhodklCOGVnMXRnZ29sbjhJNTQrU241T1FrSkNRa0xCVktHNzRRT1p3T3lBMFhjVzk0YXZvdjAxVEFjNXBGdXA5RmRIWlFDaEVSMjlQYnFzRnRQR1dvYWVBQWdWRE5MNHJvTFlBd0FTR0h6bUFyWnF0QXZmeWJWeXU5Q2ZSR2RBQXZtNEROTndUYkRvYzBPdml0b3NBZ0VoMXRES0ZJOVlESzVQaGpRM3hOdGsyTVhsekxNRGFuNjdZcUFueVdBQmZyOURRdlZYem9lRStJSFI3bStpOE1GYkMrd0J3V3R4MmpZTEJVY0RaNWRNQkFvTEx4SUl2cDdnaGZrRDBCTVh5KzhwYkdQMTMwVDhoSVNFaFliZFFhaitoWEg3L04wT0ZOMzNWYnF3cU54bUg5dmd5NHJuQjQ5cFZLa1A2NCtJeXpNY2JrUUZrNGcwN0FUcGlYNG43d2lQelF2Rm9BWFpBb3hLYzUva1lPWHZWMzJQTDFSMzRuNlllTFRRY0VYM2JHblBabXRuYVg1UTN0UjVtTUJ4Q05tUnVHdmlqTjN2cWtqcDJBOWNWMnlBdHovT2lCaU5rUWdoQURJQTIwU0Z3Q3hpMW52U2VRdXRLUTJNQnZ2bnUrblRtaEVNWW5wMzlESmlBMld3V2ZnSkRBRGdGSndIN2hFRFFxcU1OaWhDSkNha3JTQWsvMXZCWkFJd0IvZElYWHZRQmdDcElhbnhjSFg1c0NEajdhZjh2aElDSER4OWF5K1A5TXR2QUNkRDZmNEVKb0NZRlNuK3dLU3BRMmc4ZWFuZ3RZRStyRHVNOWt3Y29LL3R2Q2REblJ5bTIrblRtaEtvSlBIK09tOEJNcUZ1Z2ZyWUhsTlhuaWdSby9SKzkrOEpQZ0dRYjFCWXA5eVFLWWVEbzZNamZCOENlWWtEcGp3bW92bG9DcWs0UUVmQldILzMyYmJQaHJPNEV6N3h0M2tHQXNKK25vQVI4anZNVGc5RWo5VFAzRVdBOW92SnhCWFRCazVNVE1DWnFXVUM1Tng2ckg2WUpWTEtmZ0pNYWl3MHlnNSt5YkE2WkpBU1VxQmY4ZGZYQitnNDVBVU5HQUJBTEdCajlBd1MwcC91b0FqTzU0ZEJuQWVWZWhSSThNdWcrZGd5a1RXWlpPd3BremZVenJ3WFlCTVNhQUM2dis4QmNXQVNVOUhyTUQ0QXZZMzdBa3NOZ1haOEJ6Y0dVWnVnR1crRklwemZDbDdjM2NBSXFCdkoxT25ybHFFSjU5Vk13MTJXcFBPNEtOZDVmcS80SkNRa0pDVnVPRnkvQzVRVUU4OXIxZjM2S1pqM2FZZkJKTlV3OXdSa0hIR01QRnZLQWhXZjdTOHRDL0lIVkp3K09heXJhT21hYjFMQ045UzlMdzhCRWU1RVgyUmdGTzZyS2c4ZGcvR3hQMWdQcEx4QUQ2bUFOTnRORVBadE11NEpMeS9YOWFEWEl0VE5YdEdON29ia2Q0SHQ2Q25ESzlOZU8wcEhSWC92bWJmUXIzWTRZQ3VmaE4rcHpqaXRVcXZ0Y292M0ozS0QxK1B1L3hhWDRKNDV2TXlWa1JCWlVQaDRlSTFuWGZ6VHlWUkFXemo1UWcwTVdweW83S296cldHY3MydWpLSm9DRnd5QmV2YjM3OHQzYk1iNy9ZMUdLWlFuNEQveFdmZjZCRmRTdVA1Tng4S0ZpNDJIR2ZWOUFMUml2VUdIWGU5R0lxQitZd1BsSWNWQUxqNXVNeldNZkFZdGVBRm5BT2Z3ZFhnRFdINlhzNGhid0wvR0wrSjlKS1owd0N6aGhGbkRDTEdCRVlnL1ZBdXBPcW8xdjJmVytxcVd2MmdwV3dUeU9IVUQzQVdpMWZKU0FWMjgvLzFoOTNQb3ZQSFZNUUFGVjFxbVIvd3RmcTgvZjBJb0owc1lyK1djbW8vS3EvU3A4N0NHZ2llNEsya1NvL1FSNmVSaU94UkdKRnhrQkpXT1k2ZCt1aUtBRUlQbXpYeDVPSHY3MXc0VzhCelFwR3BOSDlPN1pUV0FoWS9IMDFNamE5dHQ4cDVNQWF4UlU1eWdDUzlwNWt2dkpvc0pQTUFIV2VnT1RjRkxOblowdUxBdW12eDNBRjJUTjJ0MXZWZmMzK1BadVM0QnEvMFhnZUV2UmdkV0pza2Q4ZUpLZitRRTg3YzFrMXh0Z1F2S0k2OCtIUVZFdjZqTEYxWXpBbzF6NExJZ2h1NG11WHQ0aHdDYytVRUpDUWtMQ0JqREdpV250eXNHSnRjOEQ2cWxjSXpJOERlSHpkYTUrK2dLbTZ1Y1VEODBYZUdyaUMvamhoKysrZ3c5UmRjNjEvaFhVSC9OMzhPb1Z2SnNUVDdRVVBOM1E1QnRhbVc4WU04Y0g2VDhaajE4VEJqcTk3dDhlYU5XNU1oUnRnbUpneXIzeEkrTjUvVXJqajhZVm5ZN1ZDVVpXY0VPaVU4YzZWRHFYYS9aUnJtT3BnaDB6T1ZnWG1PQktPOFpUZUExckkwQzdXdWdJclh2MVRRM0FFUEQ5anc4ZS9QaTlxYzlZUUQ3Q016dWNBTEprQktwa0ZGcndVSWc2VlZFWVg3dlUrUmhFd0VzOVY0Y3ZPTldzK3dpSXJLZTNwN0l5b0cxcVdzbFRIcnkwRmFwc2ZiODkvSjVlbklIY1ZSaXlCUm4wK0dvZUZPMEFPdkJVOFp6QUZqQVk0UFhxMlh5dXcwdERnTkpmalAwWklFZkd4Ulh1VXhQSDd1YVU2VitTNmNtdllWOEI3aUcvbGh3UHgyRUN6dFNmWi9xcktiNm9KbCtQa0FXdzZQWGx5NzJYYzdob1QvaGExMjZ5UGdLNEJYeFR5YWRVZjZOZ05xMXdSQTgzaEtsYmVueDhUQWdnYmY1STRUUDF4Ulk4VEwxOXdIeXVHd0R1QkYrUHg1TTFkb0tzRC9obTBRZWNtZ3hjVHNMUnVhN3ZrVGw4ZWc0WGlBRjlvalBVN1RYSm0wYS9qejVhZkRFRDhmWUI0M0krbjhNY0FzUGd1a2VCVTUyWU5mWGhvZHQwTVBnS1hTeFhYNFZoQUt3d1hmKzUzMnpndzJCbEVSVThmUUNNTlRBQjdwbUFOZm9CcDFWcXV2Q2tEL2dqWnNwYVhoZTZwM3pRbFA3K2xhU3ZkUkZWcjdHUWhxVk82WlZEY1ZVL1lQTTRPenc4d3haMHJya3FIaFNlaEkrOWNqSWhJU0ZodGVnVXI0Nis4NEh1WWo2NHMwUDZQd040MWdydk43M3UrenVqLzNPdDd2UG0va016MHdUR0JtWXd3d2Y4enJYUWJuMHJ6MllWLzdNK0RVQTVtbzBKM0RjRTNQYzVRaTQvSWplVVdGTVBmQU9YWWFiSDlGbncvTmRyQVBxYXozbHNFM3JkZDhFMzVNWW9JZ3MzdGZ4MCtKVE96Z1llZ09pbEI5QWg5RE55Y1ZxSEFaNFlxL1dmRU52UDhlcGplK251cUJoaC9aNnFIMC9KRHJNTkVwQTM5enYzRTVDekpnOXdXZUN5bk13bTJ3UVV4R1NxaGVaREVrNFRBa3FZeldiOWVicEdZVDhCOWpFRnNYM1NLYTVzQWYxMmdwVUIxQS9OVkRvY0dnSU92UlpnVzFEdWIvS2QrNEIrb3pYZTZkMDE0bDF2SjBqRW5BK0tLNDhDdmI1ZmIyWVVybXR3MElnSEl0QUhlRWJBdGQyV1RmcEY3K20wTE54N2I1TjFTRzlZVEVoSVNFallJZVFRRXE5OTBKM2t3dkp6cnRVVmZmelljcWNEWWgvZU1LV0FFRkNWRlhpSGZGTG9IMEQ1YTE4d1VJZk9wdHlPckhMbU8rZFdNVlF6WkgzR2c0UUNTa0JkMXRhNXVqMUtQYjRESVFDWDJ3UzRudlMxUmVpWEFMd1ltQk5RcFQ4V2xheCtUYXo1OFFraFlCTE04UGcwSmlMMFRVQ1BGckFVQVQxYlFMOTlnQ3Vsc05FK29PZFJ3TTUzYkhnVTJIay9JQ0VoSVNGaHR3RTcvUnhWOFdjQm4zNVdFRWZsWW9mZWs2dWZJNFZQYy9ROFE1YmZjenhBMGZnbS9QMEhYZVd0d3hUK3BBZ1FhSFd5Wm1WaU1XQzlUTDY4bXJ4OUJuQXB4S2U1dU1SUFcwK1BWRVJMbjY4MWlneVBoK3FyWGI0TngzUTl1NWFCeWtQOUdXNnBlMXN1MXMxZm1EdVVqVUN2dGovM0VGQzlHazN1eWZadGV5Q2wzdERJZS9wajNyK255OVVXdVFkYmJBRUtsL2lPNjM1aENsVDlsb0FQYTdRbTNsSGVPa3lxTVhDRTFyeW9ZSFFNUjJNUEFiZXVFOHdBTGk4dWNiZGZweU55b09yZjNnZzFlNmJ1ejdOTUpDUWtKQ1RzSXZqekFUR1pMNkxxS25lOTNxcHlEUHo1Z0pqTWw5RjFsYnRlYjFVNWV2L05Pc0U3eThoOElXVlh1ZXYxVnBXajRNOEgzRGNuYU9RRDdSc2VMT1REOWwxcDlWTGFRN00va29XMy9MNHB2Kys5dm9CZythek8ydUJ5d2VzdjhQTU93V3dZV3h6Tmw4NVd2dzRPOE94d2JIKzczTnJmVEpHN3l2SHNtZnMza1BxSVR6NzVSTkQ2VkU4a0wwc0ErY01oNjlaN3dDb3NJTEMvc0JRSzc4OElpTllIdno3ZUpjOXIvZGRId0FpOWc4NUJnT3QzRjRXaTEzZFlTTWdDOU50RzV0Q0JnSGdUMEcvZjZtTGlzU1lDTVFLRFRVcTRMQXJ2UDYvMVg0NEEvbnlBbzFOck9zRkRieWNGWFBaM3FzNU9rbCtmZDdLMHZPSEhKK3MyUUo5M0NLSHZZV3pWWWJTckhFZmZqc3lxamxSWE9ZNitYZGxWWGVtdWNrSkNRa0pDUWtJc0hBQzRObm43Q2FCdmE0dkx0NUFBQ0JOUWZVZ0VIU1pBZ0xoWkJGVC9uaTBnTTRKQWtNWFV0Z3dpV1VEcUEyNFNBYnMrQ2lRa0pDUWtKQ1NzRy9MbWVBTFJWWkJRZGwvb0t0bi9COXJxZXlYa3lnVHcrMzJUOUYrSEJYQjliNVQrMUFLcTVlM1Z4ME9BNi84TjZQMjUvcmUyRHlnYlVQMmxwYi9jR1F1bzk3KzUrcTlxQVRkZS8xVkhBWS8rdStvSEdQMXZrUi9RaVUxcHZoTVN0aHovQi9oMU9XaXlNcHN3QUFBQUFFbEZUa1N1UW1DQ1wiKTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSlbXCJkZWZhdWx0XCJdO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlKWTI5dWN5OTNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSjNaV0p3WVdOck9pOHZTV052Ym5NdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZTV052Ym5NdkxpOXpjbU12YVdOdmJuTXVjMk56Y3lJc0luZGxZbkJoWTJzNkx5OUpZMjl1Y3k4dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYzNNdGJHOWhaR1Z5TDJScGMzUXZjblZ1ZEdsdFpTOWhjR2t1YW5NaUxDSjNaV0p3WVdOck9pOHZTV052Ym5NdkxpOXViMlJsWDIxdlpIVnNaWE12WTNOekxXeHZZV1JsY2k5a2FYTjBMM0oxYm5ScGJXVXZaMlYwVlhKc0xtcHpJaXdpZDJWaWNHRmphem92TDBsamIyNXpMeTR2Ym05a1pWOXRiMlIxYkdWekwzTjBlV3hsTFd4dllXUmxjaTlrYVhOMEwzSjFiblJwYldVdmFXNXFaV04wVTNSNWJHVnpTVzUwYjFOMGVXeGxWR0ZuTG1weklpd2lkMlZpY0dGamF6b3ZMMGxqYjI1ekx5NHZjM0pqTDJsamIyNXpMbXB6SWl3aWQyVmljR0ZqYXpvdkwwbGpiMjV6THk0dmMzSmpMMmxqYjI1ekxuTmpjM00vTURRMk5DSXNJbmRsWW5CaFkyczZMeTlKWTI5dWN5OHVMM055WXk5cGJXRm5aWE12YVdOdmJuTXVjRzVuSWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMUZEVmtFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJMRWRCUVVjN08xRkJSVWc3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJMRXRCUVVzN1VVRkRURHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3hOUVVGTk8xRkJRMDQ3VVVGRFFUdFJRVU5CTEUxQlFVMDdVVUZEVGp0UlFVTkJPMUZCUTBFc1RVRkJUVHRSUVVOT08xRkJRMEU3VVVGRFFUdFJRVU5CTEU5QlFVODdVVUZEVUR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeEpRVUZKTzFGQlEwbzdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeE5RVUZOTzFGQlEwNDdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzUzBGQlN6dFJRVU5NTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzVFVGQlRUdFJRVU5PTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4TFFVRkxPenRSUVVWTU8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJMRFpDUVVFMlFqdFJRVU0zUWl3MlFrRkJOa0k3VVVGRE4wSTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3h4UWtGQmNVSXNaMEpCUVdkQ08xRkJRM0pETzFGQlEwRTdVVUZEUVN4TFFVRkxPMUZCUTB3N1VVRkRRVHRSUVVOQk8xRkJRMEVzY1VKQlFYRkNMR2RDUVVGblFqdFJRVU55UXp0UlFVTkJPMUZCUTBFc1MwRkJTenRSUVVOTU8xRkJRMEU3VVVGRFFTeExRVUZMTzFGQlEwdzdVVUZEUVR0UlFVTkJMRXRCUVVzN1VVRkRURHRSUVVOQk8xRkJRMEU3VVVGRFFTeExRVUZMTzFGQlEwdzdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3hMUVVGTE96dFJRVVZNTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxFdEJRVXM3VVVGRFREdFJRVU5CTzFGQlEwRXNTMEZCU3p0UlFVTk1PMUZCUTBFN1VVRkRRVHRSUVVOQkxFdEJRVXM3TzFGQlJVdzdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQkxHdENRVUZyUWl3NFFrRkJPRUk3VVVGRGFFUTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4TFFVRkxPMUZCUTB3N1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEVsQlFVazdVVUZEU2pzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxFbEJRVWs3VVVGRFNqdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEUxQlFVMDdVVUZEVGp0UlFVTkJPMUZCUTBFN1VVRkRRU3hQUVVGUE8xRkJRMUE3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4SlFVRkpPMUZCUTBvN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeExRVUZMTzFGQlEwdzdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzYjBKQlFXOUNMREpDUVVFeVFqdFJRVU12UXp0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzVDBGQlR6dFJRVU5RTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdPMUZCUlVFN1VVRkRRU3h0UWtGQmJVSXNZMEZCWXp0UlFVTnFRenRSUVVOQk8xRkJRMEU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRXNaMEpCUVdkQ0xFdEJRVXM3VVVGRGNrSTdVVUZEUVR0UlFVTkJPMUZCUTBFc1RVRkJUVHRSUVVOT08xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4blFrRkJaMElzV1VGQldUdFJRVU0xUWp0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTEdOQlFXTXNORUpCUVRSQ08xRkJRekZETzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFc1RVRkJUVHRSUVVOT08xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzU1VGQlNUczdVVUZGU2p0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3TzFGQlJVRTdPMUZCUlVFN1VVRkRRVHRSUVVOQkxHVkJRV1VzTkVKQlFUUkNPMUZCUXpORE8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEVzWlVGQlpTdzBRa0ZCTkVJN1VVRkRNME03VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEdsQ1FVRnBRaXgxUTBGQmRVTTdVVUZEZUVRN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxHbENRVUZwUWl4MVEwRkJkVU03VVVGRGVFUTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeHBRa0ZCYVVJc2MwSkJRWE5DTzFGQlEzWkRPMUZCUTBFN1VVRkRRVHRSUVVOQkxGRkJRVkU3VVVGRFVqdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3hWUVVGVk8xRkJRMVk3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96dFJRVVZCTzFGQlEwRXNZMEZCWXl4M1EwRkJkME03VVVGRGRFUTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzUzBGQlN6dFJRVU5NTzFGQlEwRTdVVUZEUVR0UlFVTkJMRTlCUVU4N1VVRkRVRHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4VFFVRlRPMUZCUTFRN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRXNUVUZCVFR0UlFVTk9PMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeFJRVUZSTzFGQlExSTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJMRTFCUVUwN1VVRkRUanRSUVVOQkxFdEJRVXM3VVVGRFREczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3hKUVVGSk8xRkJRMG83TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxHVkJRV1U3VVVGRFpqdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk96czdVVUZIUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc01FTkJRVEJETEdkRFFVRm5RenRSUVVNeFJUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxIZEVRVUYzUkN4clFrRkJhMEk3VVVGRE1VVTdVVUZEUVN4cFJFRkJhVVFzWTBGQll6dFJRVU12UkRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzZVVOQlFYbERMR2xEUVVGcFF6dFJRVU14UlN4blNFRkJaMGdzYlVKQlFXMUNMRVZCUVVVN1VVRkRja2s3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3d5UWtGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3VVVGRGRrUXNhVU5CUVdsRExHVkJRV1U3VVVGRGFFUTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEVzYzBSQlFYTkVMQ3RFUVVFclJEczdVVUZGY2tnN1VVRkRRVHM3VVVGRlFUdFJRVU5CTEhORFFVRnpReXgxUWtGQmRVSTdPenRSUVVjM1JEdFJRVU5CT3pzN096czdPenM3T3pzN1FVTjJNVUpCTzBGQlEwRXNhME5CUVd0RExHMUNRVUZQTEVOQlFVTXNjVWRCUVdkRU8wRkJRekZHTEhORFFVRnpReXh0UWtGQlR5eERRVUZETERKSFFVRnRSRHRCUVVOcVJ5eHZRMEZCYjBNc2JVSkJRVThzUTBGQlF5eHJSRUZCYjBJN1FVRkRhRVU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZMEZCWXl4UlFVRlRMR05CUVdNc01FSkJRVEJDTEhORlFVRnpSU3huUWtGQlowSXNhVUpCUVdsQ0xIRkNRVUZ4UWl4MVFrRkJkVUlzWlVGQlpTeEZRVUZGTEd0RFFVRnJReXdyUWtGQkswSXNSVUZCUlN4dFEwRkJiVU1zYlVOQlFXMURMRVZCUVVVc2EwTkJRV3RETEcxRFFVRnRReXhGUVVGRkxHMURRVUZ0UXl4dFEwRkJiVU1zUlVGQlJTeHJRMEZCYTBNc2JVTkJRVzFETEVWQlFVVXNiVU5CUVcxRExHMURRVUZ0UXl4RlFVRkZMR3REUVVGclF5eHRRMEZCYlVNc1JVRkJSU3h0UTBGQmJVTXNiME5CUVc5RExFVkJRVVVzYjBOQlFXOURMRzlEUVVGdlF5eEZRVUZGTEc5RFFVRnZReXh2UTBGQmIwTXNSVUZCUlN4eFEwRkJjVU1zY1VOQlFYRkRMRVZCUVVVc2MwTkJRWE5ETEhWRFFVRjFReXhGUVVGRkxIRkRRVUZ4UXl4MVEwRkJkVU1zUlVGQlJTeHpRMEZCYzBNc2RVTkJRWFZETEVWQlFVVXNjVU5CUVhGRExIVkRRVUYxUXl4RlFVRkZMSE5EUVVGelF5eDFRMEZCZFVNc1JVRkJSU3h4UTBGQmNVTXNkVU5CUVhWRExFVkJRVVVzYzBOQlFYTkRMSGREUVVGM1F5eEZRVUZGTEhWRFFVRjFReXgzUTBGQmQwTXNSVUZCUlN4MVEwRkJkVU1zZDBOQlFYZERMRVZCUVVVc2EwTkJRV3RETEhGRFFVRnhReXhGUVVGRkxHMURRVUZ0UXl4MVEwRkJkVU1zUlVGQlJTeHJRMEZCYTBNc2RVTkJRWFZETEVWQlFVVXNiVU5CUVcxRExIVkRRVUYxUXl4RlFVRkZMR3REUVVGclF5eDFRMEZCZFVNc1JVRkJSU3h0UTBGQmJVTXNkVU5CUVhWRExFVkJRVVVzYTBOQlFXdERMSFZEUVVGMVF5eEZRVUZGTEcxRFFVRnRReXgzUTBGQmQwTXNSVUZCUlN4dlEwRkJiME1zZDBOQlFYZERMRVZCUVVVc2MwTkJRWE5ETEhkRFFVRjNReXhGUVVGRkxHOURRVUZ2UXl4M1EwRkJkME1zUlVGQlJTeHpRMEZCYzBNc2QwTkJRWGRETEVWQlFVVXNjME5CUVhORExIZERRVUYzUXl4RlFVRkZMSE5EUVVGelF5eDNRMEZCZDBNc1JVRkJSU3h6UTBGQmMwTXNkME5CUVhkRExFVkJRVVVzYzBOQlFYTkRMSGREUVVGM1F5eEZRVUZGTEhWRFFVRjFReXh4UTBGQmNVTXNSVUZCUlN4M1EwRkJkME1zZFVOQlFYVkRMRVZCUVVVc2RVTkJRWFZETEhWRFFVRjFReXhGUVVGRkxIZERRVUYzUXl4MVEwRkJkVU1zUlVGQlJTeDFRMEZCZFVNc2RVTkJRWFZETEVWQlFVVXNkME5CUVhkRExIVkRRVUYxUXl4RlFVRkZMSFZEUVVGMVF5eDFRMEZCZFVNc1JVRkJSU3gzUTBGQmQwTXNkME5CUVhkRExFVkJRVVVzZVVOQlFYbERMSGREUVVGM1F5eEZRVUZGTERKRFFVRXlReXgzUTBGQmQwTXNSVUZCUlN4NVEwRkJlVU1zZDBOQlFYZERMRVZCUVVVc01rTkJRVEpETEhkRFFVRjNReXhGUVVGRkxESkRRVUV5UXl4M1EwRkJkME1zUlVGQlJTd3lRMEZCTWtNc2QwTkJRWGRETEVWQlFVVXNNa05CUVRKRExIZERRVUYzUXl4RlFVRkZMREpEUVVFeVF5eDNRMEZCZDBNc1JVRkJSU3cyUTBGQk5rTXNjVU5CUVhGRExFVkJRVVVzTmtOQlFUWkRMSFZEUVVGMVF5eEZRVUZGTEhsRFFVRjVReXh4UTBGQmNVTXNSVUZCUlN4dlEwRkJiME1zZFVOQlFYVkRMRVZCUVVVc2FVTkJRV2xETEhWRFFVRjFReXhGUVVGRkxHMURRVUZ0UXl4MVEwRkJkVU1zUlVGQlJTdzJRa0ZCTmtJc2RVTkJRWFZETEVWQlFVVXNiME5CUVc5RExIVkRRVUYxUXl4RlFVRkZMR3REUVVGclF5eDFRMEZCZFVNc1JVRkJSU3hwUTBGQmFVTXNkME5CUVhkRExFVkJRVVVzWjBOQlFXZERMSGREUVVGM1F5eEZRVUZGTEN0Q1FVRXJRaXgzUTBGQmQwTXNSVUZCUlN3NFFrRkJPRUlzZDBOQlFYZERMRVZCUVVVc09FSkJRVGhDTEhkRFFVRjNReXhGUVVGRkxDdENRVUVyUWl4M1EwRkJkME1zUlVGQlJTeHBRMEZCYVVNc2QwTkJRWGRETEVWQlFVVXNhVU5CUVdsRExIZERRVUYzUXl4RlFVRkZMRFJDUVVFMFFpeDNRMEZCZDBNc1JVRkJSU3cyUWtGQk5rSXNjME5CUVhORExFVkJRVVVzTmtKQlFUWkNMSGREUVVGM1F5eEZRVUZGTEcxRFFVRnRReXgzUTBGQmQwTXNSVUZCUlN3MlFrRkJOa0lzZDBOQlFYZERMRVZCUVVVc0swSkJRU3RDTEhkRFFVRjNReXhGUVVGRkxEaENRVUU0UWl4M1EwRkJkME1zUlVGQlJTdzJRa0ZCTmtJc2QwTkJRWGRETEVWQlFVVXNhVU5CUVdsRExIbERRVUY1UXl4RlFVRkZMQ3RDUVVFclFpeDVRMEZCZVVNc1JVRkJSU3huUTBGQlowTXNlVU5CUVhsRExFVkJRVVVzSzBKQlFTdENMSGxEUVVGNVF5eEZRVUZGTEN0Q1FVRXJRaXg1UTBGQmVVTXNSVUZCUlN3MlFrRkJOa0lzZVVOQlFYbERMRVZCUVVVc09FSkJRVGhDTEhsRFFVRjVReXhGUVVGRkxEWkNRVUUyUWl4NVEwRkJlVU1zUlVGQlJTdzJRa0ZCTmtJc2VVTkJRWGxETEVWQlFVVXNLMEpCUVN0Q0xITkRRVUZ6UXl4RlFVRkZMRFpDUVVFMlFpeDNRMEZCZDBNc1JVRkJSU3hyUTBGQmEwTXNkME5CUVhkRExFVkJRVVVzT0VKQlFUaENMSGREUVVGM1F5eEZRVUZGTEcxRFFVRnRReXgzUTBGQmQwTXNSVUZCUlN3MFFrRkJORUlzZDBOQlFYZERMRVZCUVVVc2EwTkJRV3RETEhkRFFVRjNReXhGUVVGRkxHbERRVUZwUXl4NVEwRkJlVU1zUlVGQlJTeHJRMEZCYTBNc2VVTkJRWGxETEVWQlFVVXNOa0pCUVRaQ0xIbERRVUY1UXl4RlFVRkZMR2REUVVGblF5eDVRMEZCZVVNc1JVRkJSU3c0UWtGQk9FSXNlVU5CUVhsRExFVkJRVVVzT0VKQlFUaENMSGxEUVVGNVF5eEZRVUZGTEN0Q1FVRXJRaXg1UTBGQmVVTXNSVUZCUlN3NFFrRkJPRUlzZDBOQlFYZERMRVZCUVVVc2JVTkJRVzFETEhkRFFVRjNReXhGUVVGRkxEaENRVUU0UWl4elEwRkJjME1zUlVGQlJTdzJRa0ZCTmtJc2QwTkJRWGRETEVWQlFVVXNLMEpCUVN0Q0xIZERRVUYzUXl4RlFVRkZMRFpDUVVFMlFpeDNRMEZCZDBNc1JVRkJSU3c0UWtGQk9FSXNkME5CUVhkRExFVkJRVVVzSzBKQlFTdENMSGREUVVGM1F5eEZRVUZGTEd0RFFVRnJReXgzUTBGQmQwTXNSVUZCUlN4cFEwRkJhVU1zZVVOQlFYbERMRVZCUVVVc09FSkJRVGhDTEhsRFFVRjVReXhGUVVGRkxEaENRVUU0UWl4NVEwRkJlVU1zUlVGQlJTdzJRa0ZCTmtJc2MwTkJRWE5ETEVWQlFVVXNPRUpCUVRoQ0xIZERRVUYzUXl4RlFVRkZMR3REUVVGclF5eDNRMEZCZDBNc1JVRkJSU3hyUTBGQmEwTXNkME5CUVhkRExFVkJRVVVzYVVOQlFXbERMSGREUVVGM1F5eEZRVUZGTEcxRFFVRnRReXgzUTBGQmQwTXNSVUZCUlN3MlFrRkJOa0lzZDBOQlFYZERMRVZCUVVVc09FSkJRVGhDTEhsRFFVRjVReXhGUVVGRkxHMURRVUZ0UXl4NVEwRkJlVU1zUlVGQlJTeHJRMEZCYTBNc2VVTkJRWGxETEVWQlFVVTdRVUZETjNaVE8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTlVZVHM3UVVGRllqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZENRVUZuUWpzN1FVRkZhRUk3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc05FTkJRVFJETEhGQ1FVRnhRanRCUVVOcVJUczdRVUZGUVR0QlFVTkJMRXRCUVVzN1FVRkRUQ3hKUVVGSk8wRkJRMG83T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRU3h4UWtGQmNVSXNhVUpCUVdsQ08wRkJRM1JETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4dlFrRkJiMElzY1VKQlFYRkNPMEZCUTNwRE96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRRa0ZCT0VJN08wRkJSVGxDT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRXNRMEZCUXpzN08wRkJSMFE3UVVGRFFUdEJRVU5CTzBGQlEwRXNjVVJCUVhGRUxHTkJRV003UVVGRGJrVTdRVUZEUVN4RE96czdPenM3T3pzN096czdRVU0zUm1FN08wRkJSV0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenM3UVVGSFNEczdRVUZGUVR0QlFVTkJPMEZCUTBFc1IwRkJSenM3TzBGQlIwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGT3pzN096czdPenM3T3pzN1FVTnFRMkU3TzBGQlJXSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUTBGQlF6czdRVUZGUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIVkVRVUYxUkRzN1FVRkZka1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeERRVUZET3p0QlFVVkVPenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNhVUpCUVdsQ0xIZENRVUYzUWp0QlFVTjZRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMR2xDUVVGcFFpeHBRa0ZCYVVJN1FVRkRiRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMR2RDUVVGblFpeExRVUYzUXl4SFFVRkhMSE5DUVVGcFFpeEhRVUZITEZOQlFVazdPMEZCUlc1R08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTEhGRlFVRnhSU3h4UWtGQmNVSXNZVUZCWVRzN1FVRkZka2M3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVR0QlFVTkJMSGxFUVVGNVJEdEJRVU42UkN4SFFVRkhPenRCUVVWSU96czdRVUZIUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzTUVKQlFUQkNPMEZCUXpGQ096dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzYlVKQlFXMUNMRFJDUVVFMFFqdEJRVU12UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVN4dlFrRkJiMElzTmtKQlFUWkNPMEZCUTJwRU96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGT3pzN096czdPenM3T3pzN1FVTTFVVUU3UVVGQlFUdEJRVUZCTzBGQlFYTkNPenM3T3pzN096czdPenM3UVVOQmRFSXNWVUZCVlN4dFFrRkJUeXhEUVVGRExHMUtRVUYzUlR0QlFVTXhSaXd3UWtGQk1FSXNiVUpCUVU4c1EwRkJReXh4VTBGQmNVbzdPMEZCUlhaTU96dEJRVVZCTzBGQlEwRXNNRUpCUVRCQ0xGRkJRVk03UVVGRGJrTTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN08wRkJSMEVzU1VGQlNTeEpRVUZWTzBGQlEyUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1RVRkJUU3h4VTBGQmNVbzdRVUZETTBvN1FVRkRRU3hyUWtGQmEwSXNiVUpCUVU4c1EwRkJReXh4VTBGQmNVbzdPMEZCUlM5TE96dEJRVVZCTzBGQlEwRXNORUpCUVRSQ0xGRkJRVk03UVVGRGNrTTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRXNjME03T3pzN096czdPenM3T3p0QlEzWkZRVHRCUVVGbExDdEZRVUZuUWl4bmFVMGlMQ0ptYVd4bElqb2lhV052Ym5NdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSkpZMjl1YzF3aVhTQTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKSlkyOXVjMXdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hkcGJtUnZkeXdnWm5WdVkzUnBiMjRvS1NCN1hHNXlaWFIxY200Z0lpd2lJRngwWm5WdVkzUnBiMjRnYUc5MFJHbHpjRzl6WlVOb2RXNXJLR05vZFc1clNXUXBJSHRjYmlCY2RGeDBaR1ZzWlhSbElHbHVjM1JoYkd4bFpFTm9kVzVyYzF0amFIVnVhMGxrWFR0Y2JpQmNkSDFjYmlCY2RIWmhjaUJ3WVhKbGJuUkliM1JWY0dSaGRHVkRZV3hzWW1GamF5QTlJSGRwYm1SdmQxdGNJbmRsWW5CaFkydEliM1JWY0dSaGRHVkpZMjl1YzF3aVhUdGNiaUJjZEhkcGJtUnZkMXRjSW5kbFluQmhZMnRJYjNSVmNHUmhkR1ZKWTI5dWMxd2lYU0E5SUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFc1bGVIUXRiR2x1WlNCdWJ5MTFiblZ6WldRdGRtRnljMXh1SUZ4MFpuVnVZM1JwYjI0Z2QyVmljR0ZqYTBodmRGVndaR0YwWlVOaGJHeGlZV05yS0dOb2RXNXJTV1FzSUcxdmNtVk5iMlIxYkdWektTQjdYRzRnWEhSY2RHaHZkRUZrWkZWd1pHRjBaVU5vZFc1cktHTm9kVzVyU1dRc0lHMXZjbVZOYjJSMWJHVnpLVHRjYmlCY2RGeDBhV1lnS0hCaGNtVnVkRWh2ZEZWd1pHRjBaVU5oYkd4aVlXTnJLU0J3WVhKbGJuUkliM1JWY0dSaGRHVkRZV3hzWW1GamF5aGphSFZ1YTBsa0xDQnRiM0psVFc5a2RXeGxjeWs3WEc0Z1hIUjlJRHRjYmx4dUlGeDBMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJRzV2TFhWdWRYTmxaQzEyWVhKelhHNGdYSFJtZFc1amRHbHZiaUJvYjNSRWIzZHViRzloWkZWd1pHRjBaVU5vZFc1cktHTm9kVzVyU1dRcElIdGNiaUJjZEZ4MGRtRnlJSE5qY21sd2RDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb1hDSnpZM0pwY0hSY0lpazdYRzRnWEhSY2RITmpjbWx3ZEM1amFHRnljMlYwSUQwZ1hDSjFkR1l0T0Z3aU8xeHVJRngwWEhSelkzSnBjSFF1YzNKaklEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUNzZ1hDSmNJaUFySUdOb2RXNXJTV1FnS3lCY0lpNWNJaUFySUdodmRFTjFjbkpsYm5SSVlYTm9JQ3NnWENJdWFHOTBMWFZ3WkdGMFpTNXFjMXdpTzF4dUlGeDBYSFJwWmlBb2JuVnNiQ2tnYzJOeWFYQjBMbU55YjNOelQzSnBaMmx1SUQwZ2JuVnNiRHRjYmlCY2RGeDBaRzlqZFcxbGJuUXVhR1ZoWkM1aGNIQmxibVJEYUdsc1pDaHpZM0pwY0hRcE8xeHVJRngwZlZ4dVhHNGdYSFF2THlCbGMyeHBiblF0WkdsellXSnNaUzF1WlhoMExXeHBibVVnYm04dGRXNTFjMlZrTFhaaGNuTmNiaUJjZEdaMWJtTjBhVzl1SUdodmRFUnZkMjVzYjJGa1RXRnVhV1psYzNRb2NtVnhkV1Z6ZEZScGJXVnZkWFFwSUh0Y2JpQmNkRngwY21WeGRXVnpkRlJwYldWdmRYUWdQU0J5WlhGMVpYTjBWR2x0Wlc5MWRDQjhmQ0F4TURBd01EdGNiaUJjZEZ4MGNtVjBkWEp1SUc1bGR5QlFjbTl0YVhObEtHWjFibU4wYVc5dUtISmxjMjlzZG1Vc0lISmxhbVZqZENrZ2UxeHVJRngwWEhSY2RHbG1JQ2gwZVhCbGIyWWdXRTFNU0hSMGNGSmxjWFZsYzNRZ1BUMDlJRndpZFc1a1pXWnBibVZrWENJcElIdGNiaUJjZEZ4MFhIUmNkSEpsZEhWeWJpQnlaV3BsWTNRb2JtVjNJRVZ5Y205eUtGd2lUbThnWW5KdmQzTmxjaUJ6ZFhCd2IzSjBYQ0lwS1R0Y2JpQmNkRngwWEhSOVhHNGdYSFJjZEZ4MGRISjVJSHRjYmlCY2RGeDBYSFJjZEhaaGNpQnlaWEYxWlhOMElEMGdibVYzSUZoTlRFaDBkSEJTWlhGMVpYTjBLQ2s3WEc0Z1hIUmNkRngwWEhSMllYSWdjbVZ4ZFdWemRGQmhkR2dnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdLeUJjSWx3aUlDc2dhRzkwUTNWeWNtVnVkRWhoYzJnZ0t5QmNJaTVvYjNRdGRYQmtZWFJsTG1wemIyNWNJanRjYmlCY2RGeDBYSFJjZEhKbGNYVmxjM1F1YjNCbGJpaGNJa2RGVkZ3aUxDQnlaWEYxWlhOMFVHRjBhQ3dnZEhKMVpTazdYRzRnWEhSY2RGeDBYSFJ5WlhGMVpYTjBMblJwYldWdmRYUWdQU0J5WlhGMVpYTjBWR2x0Wlc5MWREdGNiaUJjZEZ4MFhIUmNkSEpsY1hWbGMzUXVjMlZ1WkNodWRXeHNLVHRjYmlCY2RGeDBYSFI5SUdOaGRHTm9JQ2hsY25JcElIdGNiaUJjZEZ4MFhIUmNkSEpsZEhWeWJpQnlaV3BsWTNRb1pYSnlLVHRjYmlCY2RGeDBYSFI5WEc0Z1hIUmNkRngwY21WeGRXVnpkQzV2Ym5KbFlXUjVjM1JoZEdWamFHRnVaMlVnUFNCbWRXNWpkR2x2YmlncElIdGNiaUJjZEZ4MFhIUmNkR2xtSUNoeVpYRjFaWE4wTG5KbFlXUjVVM1JoZEdVZ0lUMDlJRFFwSUhKbGRIVnlianRjYmlCY2RGeDBYSFJjZEdsbUlDaHlaWEYxWlhOMExuTjBZWFIxY3lBOVBUMGdNQ2tnZTF4dUlGeDBYSFJjZEZ4MFhIUXZMeUIwYVcxbGIzVjBYRzRnWEhSY2RGeDBYSFJjZEhKbGFtVmpkQ2hjYmlCY2RGeDBYSFJjZEZ4MFhIUnVaWGNnUlhKeWIzSW9YQ0pOWVc1cFptVnpkQ0J5WlhGMVpYTjBJSFJ2SUZ3aUlDc2djbVZ4ZFdWemRGQmhkR2dnS3lCY0lpQjBhVzFsWkNCdmRYUXVYQ0lwWEc0Z1hIUmNkRngwWEhSY2RDazdYRzRnWEhSY2RGeDBYSFI5SUdWc2MyVWdhV1lnS0hKbGNYVmxjM1F1YzNSaGRIVnpJRDA5UFNBME1EUXBJSHRjYmlCY2RGeDBYSFJjZEZ4MEx5OGdibThnZFhCa1lYUmxJR0YyWVdsc1lXSnNaVnh1SUZ4MFhIUmNkRngwWEhSeVpYTnZiSFpsS0NrN1hHNGdYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2FXWWdLSEpsY1hWbGMzUXVjM1JoZEhWeklDRTlQU0F5TURBZ0ppWWdjbVZ4ZFdWemRDNXpkR0YwZFhNZ0lUMDlJRE13TkNrZ2UxeHVJRngwWEhSY2RGeDBYSFF2THlCdmRHaGxjaUJtWVdsc2RYSmxYRzRnWEhSY2RGeDBYSFJjZEhKbGFtVmpkQ2h1WlhjZ1JYSnliM0lvWENKTllXNXBabVZ6ZENCeVpYRjFaWE4wSUhSdklGd2lJQ3NnY21WeGRXVnpkRkJoZEdnZ0t5QmNJaUJtWVdsc1pXUXVYQ0lwS1R0Y2JpQmNkRngwWEhSY2RIMGdaV3h6WlNCN1hHNGdYSFJjZEZ4MFhIUmNkQzh2SUhOMVkyTmxjM05jYmlCY2RGeDBYSFJjZEZ4MGRISjVJSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUjJZWElnZFhCa1lYUmxJRDBnU2xOUFRpNXdZWEp6WlNoeVpYRjFaWE4wTG5KbGMzQnZibk5sVkdWNGRDazdYRzRnWEhSY2RGeDBYSFJjZEgwZ1kyRjBZMmdnS0dVcElIdGNiaUJjZEZ4MFhIUmNkRngwWEhSeVpXcGxZM1FvWlNrN1hHNGdYSFJjZEZ4MFhIUmNkRngwY21WMGRYSnVPMXh1SUZ4MFhIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUmNkSEpsYzI5c2RtVW9kWEJrWVhSbEtUdGNiaUJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFI5TzF4dUlGeDBYSFI5S1R0Y2JpQmNkSDFjYmx4dUlGeDBkbUZ5SUdodmRFRndjR3g1VDI1VmNHUmhkR1VnUFNCMGNuVmxPMXh1SUZ4MEx5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElHNXZMWFZ1ZFhObFpDMTJZWEp6WEc0Z1hIUjJZWElnYUc5MFEzVnljbVZ1ZEVoaGMyZ2dQU0JjSW1ObE1XVmtZekZpWVRoaU1qYzJZamxoWTJRMFhDSTdYRzRnWEhSMllYSWdhRzkwVW1WeGRXVnpkRlJwYldWdmRYUWdQU0F4TURBd01EdGNiaUJjZEhaaGNpQm9iM1JEZFhKeVpXNTBUVzlrZFd4bFJHRjBZU0E5SUh0OU8xeHVJRngwZG1GeUlHaHZkRU4xY25KbGJuUkRhR2xzWkUxdlpIVnNaVHRjYmlCY2RDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTExYm5WelpXUXRkbUZ5YzF4dUlGeDBkbUZ5SUdodmRFTjFjbkpsYm5SUVlYSmxiblJ6SUQwZ1cxMDdYRzRnWEhRdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRkVzUxYzJWa0xYWmhjbk5jYmlCY2RIWmhjaUJvYjNSRGRYSnlaVzUwVUdGeVpXNTBjMVJsYlhBZ1BTQmJYVHRjYmx4dUlGeDBMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJRzV2TFhWdWRYTmxaQzEyWVhKelhHNGdYSFJtZFc1amRHbHZiaUJvYjNSRGNtVmhkR1ZTWlhGMWFYSmxLRzF2WkhWc1pVbGtLU0I3WEc0Z1hIUmNkSFpoY2lCdFpTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRPMXh1SUZ4MFhIUnBaaUFvSVcxbEtTQnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh6dGNiaUJjZEZ4MGRtRnlJR1p1SUQwZ1puVnVZM1JwYjI0b2NtVnhkV1Z6ZENrZ2UxeHVJRngwWEhSY2RHbG1JQ2h0WlM1b2IzUXVZV04wYVhabEtTQjdYRzRnWEhSY2RGeDBYSFJwWmlBb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0eVpYRjFaWE4wWFNrZ2UxeHVJRngwWEhSY2RGeDBYSFJwWmlBb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0eVpYRjFaWE4wWFM1d1lYSmxiblJ6TG1sdVpHVjRUMllvYlc5a2RXeGxTV1FwSUQwOVBTQXRNU2tnZTF4dUlGeDBYSFJjZEZ4MFhIUmNkR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJjbVZ4ZFdWemRGMHVjR0Z5Wlc1MGN5NXdkWE5vS0cxdlpIVnNaVWxrS1R0Y2JpQmNkRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwZlNCbGJITmxJSHRjYmlCY2RGeDBYSFJjZEZ4MGFHOTBRM1Z5Y21WdWRGQmhjbVZ1ZEhNZ1BTQmJiVzlrZFd4bFNXUmRPMXh1SUZ4MFhIUmNkRngwWEhSb2IzUkRkWEp5Wlc1MFEyaHBiR1JOYjJSMWJHVWdQU0J5WlhGMVpYTjBPMXh1SUZ4MFhIUmNkRngwZlZ4dUlGeDBYSFJjZEZ4MGFXWWdLRzFsTG1Ob2FXeGtjbVZ1TG1sdVpHVjRUMllvY21WeGRXVnpkQ2tnUFQwOUlDMHhLU0I3WEc0Z1hIUmNkRngwWEhSY2RHMWxMbU5vYVd4a2NtVnVMbkIxYzJnb2NtVnhkV1Z6ZENrN1hHNGdYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBmU0JsYkhObElIdGNiaUJjZEZ4MFhIUmNkR052Ym5OdmJHVXVkMkZ5YmloY2JpQmNkRngwWEhSY2RGeDBYQ0piU0UxU1hTQjFibVY0Y0dWamRHVmtJSEpsY1hWcGNtVW9YQ0lnSzF4dUlGeDBYSFJjZEZ4MFhIUmNkSEpsY1hWbGMzUWdLMXh1SUZ4MFhIUmNkRngwWEhSY2RGd2lLU0JtY205dElHUnBjM0J2YzJWa0lHMXZaSFZzWlNCY0lpQXJYRzRnWEhSY2RGeDBYSFJjZEZ4MGJXOWtkV3hsU1dSY2JpQmNkRngwWEhSY2RDazdYRzRnWEhSY2RGeDBYSFJvYjNSRGRYSnlaVzUwVUdGeVpXNTBjeUE5SUZ0ZE8xeHVJRngwWEhSY2RIMWNiaUJjZEZ4MFhIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHlaWEYxWlhOMEtUdGNiaUJjZEZ4MGZUdGNiaUJjZEZ4MGRtRnlJRTlpYW1WamRFWmhZM1J2Y25rZ1BTQm1kVzVqZEdsdmJpQlBZbXBsWTNSR1lXTjBiM0o1S0c1aGJXVXBJSHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdlMXh1SUZ4MFhIUmNkRngwWTI5dVptbG5kWEpoWW14bE9pQjBjblZsTEZ4dUlGeDBYSFJjZEZ4MFpXNTFiV1Z5WVdKc1pUb2dkSEoxWlN4Y2JpQmNkRngwWEhSY2RHZGxkRG9nWm5WdVkzUnBiMjRvS1NCN1hHNGdYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZXMjVoYldWZE8xeHVJRngwWEhSY2RGeDBmU3hjYmlCY2RGeDBYSFJjZEhObGREb2dablZ1WTNScGIyNG9kbUZzZFdVcElIdGNiaUJjZEZ4MFhIUmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWDF0dVlXMWxYU0E5SUhaaGJIVmxPMXh1SUZ4MFhIUmNkRngwZlZ4dUlGeDBYSFJjZEgwN1hHNGdYSFJjZEgwN1hHNGdYSFJjZEdadmNpQW9kbUZ5SUc1aGJXVWdhVzRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrZ2UxeHVJRngwWEhSY2RHbG1JQ2hjYmlCY2RGeDBYSFJjZEU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNoZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxDQnVZVzFsS1NBbUpseHVJRngwWEhSY2RGeDBibUZ0WlNBaFBUMGdYQ0psWENJZ0ppWmNiaUJjZEZ4MFhIUmNkRzVoYldVZ0lUMDlJRndpZEZ3aVhHNGdYSFJjZEZ4MEtTQjdYRzRnWEhSY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1ptNHNJRzVoYldVc0lFOWlhbVZqZEVaaFkzUnZjbmtvYm1GdFpTa3BPMXh1SUZ4MFhIUmNkSDFjYmlCY2RGeDBmVnh1SUZ4MFhIUm1iaTVsSUQwZ1puVnVZM1JwYjI0b1kyaDFibXRKWkNrZ2UxeHVJRngwWEhSY2RHbG1JQ2hvYjNSVGRHRjBkWE1nUFQwOUlGd2ljbVZoWkhsY0lpa2dhRzkwVTJWMFUzUmhkSFZ6S0Z3aWNISmxjR0Z5WlZ3aUtUdGNiaUJjZEZ4MFhIUm9iM1JEYUhWdWEzTk1iMkZrYVc1bkt5czdYRzRnWEhSY2RGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaU2hqYUhWdWEwbGtLUzUwYUdWdUtHWnBibWx6YUVOb2RXNXJURzloWkdsdVp5d2dablZ1WTNScGIyNG9aWEp5S1NCN1hHNGdYSFJjZEZ4MFhIUm1hVzVwYzJoRGFIVnVhMHh2WVdScGJtY29LVHRjYmlCY2RGeDBYSFJjZEhSb2NtOTNJR1Z5Y2p0Y2JpQmNkRngwWEhSOUtUdGNibHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR1pwYm1semFFTm9kVzVyVEc5aFpHbHVaeWdwSUh0Y2JpQmNkRngwWEhSY2RHaHZkRU5vZFc1cmMweHZZV1JwYm1jdExUdGNiaUJjZEZ4MFhIUmNkR2xtSUNob2IzUlRkR0YwZFhNZ1BUMDlJRndpY0hKbGNHRnlaVndpS1NCN1hHNGdYSFJjZEZ4MFhIUmNkR2xtSUNnaGFHOTBWMkZwZEdsdVowWnBiR1Z6VFdGd1cyTm9kVzVyU1dSZEtTQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MGFHOTBSVzV6ZFhKbFZYQmtZWFJsUTJoMWJtc29ZMmgxYm10SlpDazdYRzRnWEhSY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSY2RGeDBhV1lnS0dodmRFTm9kVzVyYzB4dllXUnBibWNnUFQwOUlEQWdKaVlnYUc5MFYyRnBkR2x1WjBacGJHVnpJRDA5UFNBd0tTQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MGFHOTBWWEJrWVhSbFJHOTNibXh2WVdSbFpDZ3BPMXh1SUZ4MFhIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBmVnh1SUZ4MFhIUjlPMXh1SUZ4MFhIUm1iaTUwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUcxdlpHVXBJSHRjYmlCY2RGeDBYSFJwWmlBb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1ptNG9kbUZzZFdVcE8xeHVJRngwWEhSY2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuUW9kbUZzZFdVc0lHMXZaR1VnSmlCK01TazdYRzRnWEhSY2RIMDdYRzRnWEhSY2RISmxkSFZ5YmlCbWJqdGNiaUJjZEgxY2JseHVJRngwTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0Ym1WNGRDMXNhVzVsSUc1dkxYVnVkWE5sWkMxMllYSnpYRzRnWEhSbWRXNWpkR2x2YmlCb2IzUkRjbVZoZEdWTmIyUjFiR1VvYlc5a2RXeGxTV1FwSUh0Y2JpQmNkRngwZG1GeUlHaHZkQ0E5SUh0Y2JpQmNkRngwWEhRdkx5QndjbWwyWVhSbElITjBkV1ptWEc0Z1hIUmNkRngwWDJGalkyVndkR1ZrUkdWd1pXNWtaVzVqYVdWek9pQjdmU3hjYmlCY2RGeDBYSFJmWkdWamJHbHVaV1JFWlhCbGJtUmxibU5wWlhNNklIdDlMRnh1SUZ4MFhIUmNkRjl6Wld4bVFXTmpaWEIwWldRNklHWmhiSE5sTEZ4dUlGeDBYSFJjZEY5elpXeG1SR1ZqYkdsdVpXUTZJR1poYkhObExGeHVJRngwWEhSY2RGOXpaV3htU1c1MllXeHBaR0YwWldRNklHWmhiSE5sTEZ4dUlGeDBYSFJjZEY5a2FYTndiM05sU0dGdVpHeGxjbk02SUZ0ZExGeHVJRngwWEhSY2RGOXRZV2x1T2lCb2IzUkRkWEp5Wlc1MFEyaHBiR1JOYjJSMWJHVWdJVDA5SUcxdlpIVnNaVWxrTEZ4dVhHNGdYSFJjZEZ4MEx5OGdUVzlrZFd4bElFRlFTVnh1SUZ4MFhIUmNkR0ZqZEdsMlpUb2dkSEoxWlN4Y2JpQmNkRngwWEhSaFkyTmxjSFE2SUdaMWJtTjBhVzl1S0dSbGNDd2dZMkZzYkdKaFkyc3BJSHRjYmlCY2RGeDBYSFJjZEdsbUlDaGtaWEFnUFQwOUlIVnVaR1ZtYVc1bFpDa2dhRzkwTGw5elpXeG1RV05qWlhCMFpXUWdQU0IwY25WbE8xeHVJRngwWEhSY2RGeDBaV3h6WlNCcFppQW9kSGx3Wlc5bUlHUmxjQ0E5UFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0JvYjNRdVgzTmxiR1pCWTJObGNIUmxaQ0E5SUdSbGNEdGNiaUJjZEZ4MFhIUmNkR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQmtaWEFnUFQwOUlGd2liMkpxWldOMFhDSXBYRzRnWEhSY2RGeDBYSFJjZEdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1pHVndMbXhsYm1kMGFEc2dhU3NyS1Z4dUlGeDBYSFJjZEZ4MFhIUmNkR2h2ZEM1ZllXTmpaWEIwWldSRVpYQmxibVJsYm1OcFpYTmJaR1Z3VzJsZFhTQTlJR05oYkd4aVlXTnJJSHg4SUdaMWJtTjBhVzl1S0NrZ2UzMDdYRzRnWEhSY2RGeDBYSFJsYkhObElHaHZkQzVmWVdOalpYQjBaV1JFWlhCbGJtUmxibU5wWlhOYlpHVndYU0E5SUdOaGJHeGlZV05ySUh4OElHWjFibU4wYVc5dUtDa2dlMzA3WEc0Z1hIUmNkRngwZlN4Y2JpQmNkRngwWEhSa1pXTnNhVzVsT2lCbWRXNWpkR2x2Ymloa1pYQXBJSHRjYmlCY2RGeDBYSFJjZEdsbUlDaGtaWEFnUFQwOUlIVnVaR1ZtYVc1bFpDa2dhRzkwTGw5elpXeG1SR1ZqYkdsdVpXUWdQU0IwY25WbE8xeHVJRngwWEhSY2RGeDBaV3h6WlNCcFppQW9kSGx3Wlc5bUlHUmxjQ0E5UFQwZ1hDSnZZbXBsWTNSY0lpbGNiaUJjZEZ4MFhIUmNkRngwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCa1pYQXViR1Z1WjNSb095QnBLeXNwWEc0Z1hIUmNkRngwWEhSY2RGeDBhRzkwTGw5a1pXTnNhVzVsWkVSbGNHVnVaR1Z1WTJsbGMxdGtaWEJiYVYxZElEMGdkSEoxWlR0Y2JpQmNkRngwWEhSY2RHVnNjMlVnYUc5MExsOWtaV05zYVc1bFpFUmxjR1Z1WkdWdVkybGxjMXRrWlhCZElEMGdkSEoxWlR0Y2JpQmNkRngwWEhSOUxGeHVJRngwWEhSY2RHUnBjM0J2YzJVNklHWjFibU4wYVc5dUtHTmhiR3hpWVdOcktTQjdYRzRnWEhSY2RGeDBYSFJvYjNRdVgyUnBjM0J2YzJWSVlXNWtiR1Z5Y3k1d2RYTm9LR05oYkd4aVlXTnJLVHRjYmlCY2RGeDBYSFI5TEZ4dUlGeDBYSFJjZEdGa1pFUnBjM0J2YzJWSVlXNWtiR1Z5T2lCbWRXNWpkR2x2YmloallXeHNZbUZqYXlrZ2UxeHVJRngwWEhSY2RGeDBhRzkwTGw5a2FYTndiM05sU0dGdVpHeGxjbk11Y0hWemFDaGpZV3hzWW1GamF5azdYRzRnWEhSY2RGeDBmU3hjYmlCY2RGeDBYSFJ5WlcxdmRtVkVhWE53YjNObFNHRnVaR3hsY2pvZ1puVnVZM1JwYjI0b1kyRnNiR0poWTJzcElIdGNiaUJjZEZ4MFhIUmNkSFpoY2lCcFpIZ2dQU0JvYjNRdVgyUnBjM0J2YzJWSVlXNWtiR1Z5Y3k1cGJtUmxlRTltS0dOaGJHeGlZV05yS1R0Y2JpQmNkRngwWEhSY2RHbG1JQ2hwWkhnZ1BqMGdNQ2tnYUc5MExsOWthWE53YjNObFNHRnVaR3hsY25NdWMzQnNhV05sS0dsa2VDd2dNU2s3WEc0Z1hIUmNkRngwZlN4Y2JpQmNkRngwWEhScGJuWmhiR2xrWVhSbE9pQm1kVzVqZEdsdmJpZ3BJSHRjYmlCY2RGeDBYSFJjZEhSb2FYTXVYM05sYkdaSmJuWmhiR2xrWVhSbFpDQTlJSFJ5ZFdVN1hHNGdYSFJjZEZ4MFhIUnpkMmwwWTJnZ0tHaHZkRk4wWVhSMWN5a2dlMXh1SUZ4MFhIUmNkRngwWEhSallYTmxJRndpYVdSc1pWd2lPbHh1SUZ4MFhIUmNkRngwWEhSY2RHaHZkRlZ3WkdGMFpTQTlJSHQ5TzF4dUlGeDBYSFJjZEZ4MFhIUmNkR2h2ZEZWd1pHRjBaVnR0YjJSMWJHVkpaRjBnUFNCdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFR0Y2JpQmNkRngwWEhSY2RGeDBYSFJvYjNSVFpYUlRkR0YwZFhNb1hDSnlaV0ZrZVZ3aUtUdGNiaUJjZEZ4MFhIUmNkRngwWEhSaWNtVmhhenRjYmlCY2RGeDBYSFJjZEZ4MFkyRnpaU0JjSW5KbFlXUjVYQ0k2WEc0Z1hIUmNkRngwWEhSY2RGeDBhRzkwUVhCd2JIbEpiblpoYkdsa1lYUmxaRTF2WkhWc1pTaHRiMlIxYkdWSlpDazdYRzRnWEhSY2RGeDBYSFJjZEZ4MFluSmxZV3M3WEc0Z1hIUmNkRngwWEhSY2RHTmhjMlVnWENKd2NtVndZWEpsWENJNlhHNGdYSFJjZEZ4MFhIUmNkR05oYzJVZ1hDSmphR1ZqYTF3aU9seHVJRngwWEhSY2RGeDBYSFJqWVhObElGd2laR2x6Y0c5elpWd2lPbHh1SUZ4MFhIUmNkRngwWEhSallYTmxJRndpWVhCd2JIbGNJanBjYmlCY2RGeDBYSFJjZEZ4MFhIUW9hRzkwVVhWbGRXVmtTVzUyWVd4cFpHRjBaV1JOYjJSMWJHVnpJRDFjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkR2h2ZEZGMVpYVmxaRWx1ZG1Gc2FXUmhkR1ZrVFc5a2RXeGxjeUI4ZkNCYlhTa3VjSFZ6YUNodGIyUjFiR1ZKWkNrN1hHNGdYSFJjZEZ4MFhIUmNkRngwWW5KbFlXczdYRzRnWEhSY2RGeDBYSFJjZEdSbFptRjFiSFE2WEc0Z1hIUmNkRngwWEhSY2RGeDBMeThnYVdkdWIzSmxJSEpsY1hWbGMzUnpJR2x1SUdWeWNtOXlJSE4wWVhSbGMxeHVJRngwWEhSY2RGeDBYSFJjZEdKeVpXRnJPMXh1SUZ4MFhIUmNkRngwZlZ4dUlGeDBYSFJjZEgwc1hHNWNiaUJjZEZ4MFhIUXZMeUJOWVc1aFoyVnRaVzUwSUVGUVNWeHVJRngwWEhSY2RHTm9aV05yT2lCb2IzUkRhR1ZqYXl4Y2JpQmNkRngwWEhSaGNIQnNlVG9nYUc5MFFYQndiSGtzWEc0Z1hIUmNkRngwYzNSaGRIVnpPaUJtZFc1amRHbHZiaWhzS1NCN1hHNGdYSFJjZEZ4MFhIUnBaaUFvSVd3cElISmxkSFZ5YmlCb2IzUlRkR0YwZFhNN1hHNGdYSFJjZEZ4MFhIUm9iM1JUZEdGMGRYTklZVzVrYkdWeWN5NXdkWE5vS0d3cE8xeHVJRngwWEhSY2RIMHNYRzRnWEhSY2RGeDBZV1JrVTNSaGRIVnpTR0Z1Wkd4bGNqb2dablZ1WTNScGIyNG9iQ2tnZTF4dUlGeDBYSFJjZEZ4MGFHOTBVM1JoZEhWelNHRnVaR3hsY25NdWNIVnphQ2hzS1R0Y2JpQmNkRngwWEhSOUxGeHVJRngwWEhSY2RISmxiVzkyWlZOMFlYUjFjMGhoYm1Sc1pYSTZJR1oxYm1OMGFXOXVLR3dwSUh0Y2JpQmNkRngwWEhSY2RIWmhjaUJwWkhnZ1BTQm9iM1JUZEdGMGRYTklZVzVrYkdWeWN5NXBibVJsZUU5bUtHd3BPMXh1SUZ4MFhIUmNkRngwYVdZZ0tHbGtlQ0ErUFNBd0tTQm9iM1JUZEdGMGRYTklZVzVrYkdWeWN5NXpjR3hwWTJVb2FXUjRMQ0F4S1R0Y2JpQmNkRngwWEhSOUxGeHVYRzRnWEhSY2RGeDBMeTlwYm1obGNtbDBJR1p5YjIwZ2NISmxkbWx2ZFhNZ1pHbHpjRzl6WlNCallXeHNYRzRnWEhSY2RGeDBaR0YwWVRvZ2FHOTBRM1Z5Y21WdWRFMXZaSFZzWlVSaGRHRmJiVzlrZFd4bFNXUmRYRzRnWEhSY2RIMDdYRzRnWEhSY2RHaHZkRU4xY25KbGJuUkRhR2xzWkUxdlpIVnNaU0E5SUhWdVpHVm1hVzVsWkR0Y2JpQmNkRngwY21WMGRYSnVJR2h2ZER0Y2JpQmNkSDFjYmx4dUlGeDBkbUZ5SUdodmRGTjBZWFIxYzBoaGJtUnNaWEp6SUQwZ1cxMDdYRzRnWEhSMllYSWdhRzkwVTNSaGRIVnpJRDBnWENKcFpHeGxYQ0k3WEc1Y2JpQmNkR1oxYm1OMGFXOXVJR2h2ZEZObGRGTjBZWFIxY3lodVpYZFRkR0YwZFhNcElIdGNiaUJjZEZ4MGFHOTBVM1JoZEhWeklEMGdibVYzVTNSaGRIVnpPMXh1SUZ4MFhIUm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR2h2ZEZOMFlYUjFjMGhoYm1Sc1pYSnpMbXhsYm1kMGFEc2dhU3NyS1Z4dUlGeDBYSFJjZEdodmRGTjBZWFIxYzBoaGJtUnNaWEp6VzJsZExtTmhiR3dvYm5Wc2JDd2dibVYzVTNSaGRIVnpLVHRjYmlCY2RIMWNibHh1SUZ4MEx5OGdkMmhwYkdVZ1pHOTNibXh2WVdScGJtZGNiaUJjZEhaaGNpQm9iM1JYWVdsMGFXNW5SbWxzWlhNZ1BTQXdPMXh1SUZ4MGRtRnlJR2h2ZEVOb2RXNXJjMHh2WVdScGJtY2dQU0F3TzF4dUlGeDBkbUZ5SUdodmRGZGhhWFJwYm1kR2FXeGxjMDFoY0NBOUlIdDlPMXh1SUZ4MGRtRnlJR2h2ZEZKbGNYVmxjM1JsWkVacGJHVnpUV0Z3SUQwZ2UzMDdYRzRnWEhSMllYSWdhRzkwUVhaaGFXeGhZbXhsUm1sc1pYTk5ZWEFnUFNCN2ZUdGNiaUJjZEhaaGNpQm9iM1JFWldabGNuSmxaRHRjYmx4dUlGeDBMeThnVkdobElIVndaR0YwWlNCcGJtWnZYRzRnWEhSMllYSWdhRzkwVlhCa1lYUmxMQ0JvYjNSVmNHUmhkR1ZPWlhkSVlYTm9MQ0JvYjNSUmRXVjFaV1JKYm5aaGJHbGtZWFJsWkUxdlpIVnNaWE03WEc1Y2JpQmNkR1oxYm1OMGFXOXVJSFJ2VFc5a2RXeGxTV1FvYVdRcElIdGNiaUJjZEZ4MGRtRnlJR2x6VG5WdFltVnlJRDBnSzJsa0lDc2dYQ0pjSWlBOVBUMGdhV1E3WEc0Z1hIUmNkSEpsZEhWeWJpQnBjMDUxYldKbGNpQS9JQ3RwWkNBNklHbGtPMXh1SUZ4MGZWeHVYRzRnWEhSbWRXNWpkR2x2YmlCb2IzUkRhR1ZqYXloaGNIQnNlU2tnZTF4dUlGeDBYSFJwWmlBb2FHOTBVM1JoZEhWeklDRTlQU0JjSW1sa2JHVmNJaWtnZTF4dUlGeDBYSFJjZEhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjSW1Ob1pXTnJLQ2tnYVhNZ2IyNXNlU0JoYkd4dmQyVmtJR2x1SUdsa2JHVWdjM1JoZEhWelhDSXBPMXh1SUZ4MFhIUjlYRzRnWEhSY2RHaHZkRUZ3Y0d4NVQyNVZjR1JoZEdVZ1BTQmhjSEJzZVR0Y2JpQmNkRngwYUc5MFUyVjBVM1JoZEhWektGd2lZMmhsWTJ0Y0lpazdYRzRnWEhSY2RISmxkSFZ5YmlCb2IzUkViM2R1Ykc5aFpFMWhibWxtWlhOMEtHaHZkRkpsY1hWbGMzUlVhVzFsYjNWMEtTNTBhR1Z1S0daMWJtTjBhVzl1S0hWd1pHRjBaU2tnZTF4dUlGeDBYSFJjZEdsbUlDZ2hkWEJrWVhSbEtTQjdYRzRnWEhSY2RGeDBYSFJvYjNSVFpYUlRkR0YwZFhNb2FHOTBRWEJ3YkhsSmJuWmhiR2xrWVhSbFpFMXZaSFZzWlhNb0tTQS9JRndpY21WaFpIbGNJaUE2SUZ3aWFXUnNaVndpS1R0Y2JpQmNkRngwWEhSY2RISmxkSFZ5YmlCdWRXeHNPMXh1SUZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJvYjNSU1pYRjFaWE4wWldSR2FXeGxjMDFoY0NBOUlIdDlPMXh1SUZ4MFhIUmNkR2h2ZEZkaGFYUnBibWRHYVd4bGMwMWhjQ0E5SUh0OU8xeHVJRngwWEhSY2RHaHZkRUYyWVdsc1lXSnNaVVpwYkdWelRXRndJRDBnZFhCa1lYUmxMbU03WEc0Z1hIUmNkRngwYUc5MFZYQmtZWFJsVG1WM1NHRnphQ0E5SUhWd1pHRjBaUzVvTzF4dVhHNGdYSFJjZEZ4MGFHOTBVMlYwVTNSaGRIVnpLRndpY0hKbGNHRnlaVndpS1R0Y2JpQmNkRngwWEhSMllYSWdjSEp2YldselpTQTlJRzVsZHlCUWNtOXRhWE5sS0daMWJtTjBhVzl1S0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnZTF4dUlGeDBYSFJjZEZ4MGFHOTBSR1ZtWlhKeVpXUWdQU0I3WEc0Z1hIUmNkRngwWEhSY2RISmxjMjlzZG1VNklISmxjMjlzZG1Vc1hHNGdYSFJjZEZ4MFhIUmNkSEpsYW1WamREb2djbVZxWldOMFhHNGdYSFJjZEZ4MFhIUjlPMXh1SUZ4MFhIUmNkSDBwTzF4dUlGeDBYSFJjZEdodmRGVndaR0YwWlNBOUlIdDlPMXh1SUZ4MFhIUmNkSFpoY2lCamFIVnVhMGxrSUQwZ1hDSkpZMjl1YzF3aU8xeHVJRngwWEhSY2RDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTFzYjI1bExXSnNiMk5yYzF4dUlGeDBYSFJjZEh0Y2JpQmNkRngwWEhSY2RHaHZkRVZ1YzNWeVpWVndaR0YwWlVOb2RXNXJLR05vZFc1clNXUXBPMXh1SUZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJwWmlBb1hHNGdYSFJjZEZ4MFhIUm9iM1JUZEdGMGRYTWdQVDA5SUZ3aWNISmxjR0Z5WlZ3aUlDWW1YRzRnWEhSY2RGeDBYSFJvYjNSRGFIVnVhM05NYjJGa2FXNW5JRDA5UFNBd0lDWW1YRzRnWEhSY2RGeDBYSFJvYjNSWFlXbDBhVzVuUm1sc1pYTWdQVDA5SURCY2JpQmNkRngwWEhRcElIdGNiaUJjZEZ4MFhIUmNkR2h2ZEZWd1pHRjBaVVJ2ZDI1c2IyRmtaV1FvS1R0Y2JpQmNkRngwWEhSOVhHNGdYSFJjZEZ4MGNtVjBkWEp1SUhCeWIyMXBjMlU3WEc0Z1hIUmNkSDBwTzF4dUlGeDBmVnh1WEc0Z1hIUXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVWdibTh0ZFc1MWMyVmtMWFpoY25OY2JpQmNkR1oxYm1OMGFXOXVJR2h2ZEVGa1pGVndaR0YwWlVOb2RXNXJLR05vZFc1clNXUXNJRzF2Y21WTmIyUjFiR1Z6S1NCN1hHNGdYSFJjZEdsbUlDZ2hhRzkwUVhaaGFXeGhZbXhsUm1sc1pYTk5ZWEJiWTJoMWJtdEpaRjBnZkh3Z0lXaHZkRkpsY1hWbGMzUmxaRVpwYkdWelRXRndXMk5vZFc1clNXUmRLVnh1SUZ4MFhIUmNkSEpsZEhWeWJqdGNiaUJjZEZ4MGFHOTBVbVZ4ZFdWemRHVmtSbWxzWlhOTllYQmJZMmgxYm10SlpGMGdQU0JtWVd4elpUdGNiaUJjZEZ4MFptOXlJQ2gyWVhJZ2JXOWtkV3hsU1dRZ2FXNGdiVzl5WlUxdlpIVnNaWE1wSUh0Y2JpQmNkRngwWEhScFppQW9UMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzF2Y21WTmIyUjFiR1Z6TENCdGIyUjFiR1ZKWkNrcElIdGNiaUJjZEZ4MFhIUmNkR2h2ZEZWd1pHRjBaVnR0YjJSMWJHVkpaRjBnUFNCdGIzSmxUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMDdYRzRnWEhSY2RGeDBmVnh1SUZ4MFhIUjlYRzRnWEhSY2RHbG1JQ2d0TFdodmRGZGhhWFJwYm1kR2FXeGxjeUE5UFQwZ01DQW1KaUJvYjNSRGFIVnVhM05NYjJGa2FXNW5JRDA5UFNBd0tTQjdYRzRnWEhSY2RGeDBhRzkwVlhCa1lYUmxSRzkzYm14dllXUmxaQ2dwTzF4dUlGeDBYSFI5WEc0Z1hIUjlYRzVjYmlCY2RHWjFibU4wYVc5dUlHaHZkRVZ1YzNWeVpWVndaR0YwWlVOb2RXNXJLR05vZFc1clNXUXBJSHRjYmlCY2RGeDBhV1lnS0NGb2IzUkJkbUZwYkdGaWJHVkdhV3hsYzAxaGNGdGphSFZ1YTBsa1hTa2dlMXh1SUZ4MFhIUmNkR2h2ZEZkaGFYUnBibWRHYVd4bGMwMWhjRnRqYUhWdWEwbGtYU0E5SUhSeWRXVTdYRzRnWEhSY2RIMGdaV3h6WlNCN1hHNGdYSFJjZEZ4MGFHOTBVbVZ4ZFdWemRHVmtSbWxzWlhOTllYQmJZMmgxYm10SlpGMGdQU0IwY25WbE8xeHVJRngwWEhSY2RHaHZkRmRoYVhScGJtZEdhV3hsY3lzck8xeHVJRngwWEhSY2RHaHZkRVJ2ZDI1c2IyRmtWWEJrWVhSbFEyaDFibXNvWTJoMWJtdEpaQ2s3WEc0Z1hIUmNkSDFjYmlCY2RIMWNibHh1SUZ4MFpuVnVZM1JwYjI0Z2FHOTBWWEJrWVhSbFJHOTNibXh2WVdSbFpDZ3BJSHRjYmlCY2RGeDBhRzkwVTJWMFUzUmhkSFZ6S0Z3aWNtVmhaSGxjSWlrN1hHNGdYSFJjZEhaaGNpQmtaV1psY25KbFpDQTlJR2h2ZEVSbFptVnljbVZrTzF4dUlGeDBYSFJvYjNSRVpXWmxjbkpsWkNBOUlHNTFiR3c3WEc0Z1hIUmNkR2xtSUNnaFpHVm1aWEp5WldRcElISmxkSFZ5Ymp0Y2JpQmNkRngwYVdZZ0tHaHZkRUZ3Y0d4NVQyNVZjR1JoZEdVcElIdGNiaUJjZEZ4MFhIUXZMeUJYY21Gd0lHUmxabVZ5Y21Wa0lHOWlhbVZqZENCcGJpQlFjbTl0YVhObElIUnZJRzFoY21zZ2FYUWdZWE1nWVNCM1pXeHNMV2hoYm1Sc1pXUWdVSEp2YldselpTQjBiMXh1SUZ4MFhIUmNkQzh2SUdGMmIybGtJSFJ5YVdkblpYSnBibWNnZFc1allYVm5hSFFnWlhoalpYQjBhVzl1SUhkaGNtNXBibWNnYVc0Z1EyaHliMjFsTGx4dUlGeDBYSFJjZEM4dklGTmxaU0JvZEhSd2N6b3ZMMkoxWjNNdVkyaHliMjFwZFcwdWIzSm5MM0F2WTJoeWIyMXBkVzB2YVhOemRXVnpMMlJsZEdGcGJEOXBaRDAwTmpVMk5qWmNiaUJjZEZ4MFhIUlFjbTl0YVhObExuSmxjMjlzZG1Vb0tWeHVJRngwWEhSY2RGeDBMblJvWlc0b1puVnVZM1JwYjI0b0tTQjdYRzRnWEhSY2RGeDBYSFJjZEhKbGRIVnliaUJvYjNSQmNIQnNlU2hvYjNSQmNIQnNlVTl1VlhCa1lYUmxLVHRjYmlCY2RGeDBYSFJjZEgwcFhHNGdYSFJjZEZ4MFhIUXVkR2hsYmloY2JpQmNkRngwWEhSY2RGeDBablZ1WTNScGIyNG9jbVZ6ZFd4MEtTQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MFpHVm1aWEp5WldRdWNtVnpiMngyWlNoeVpYTjFiSFFwTzF4dUlGeDBYSFJjZEZ4MFhIUjlMRnh1SUZ4MFhIUmNkRngwWEhSbWRXNWpkR2x2YmlobGNuSXBJSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmtaV1psY25KbFpDNXlaV3BsWTNRb1pYSnlLVHRjYmlCY2RGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RGeDBLVHRjYmlCY2RGeDBmU0JsYkhObElIdGNiaUJjZEZ4MFhIUjJZWElnYjNWMFpHRjBaV1JOYjJSMWJHVnpJRDBnVzEwN1hHNGdYSFJjZEZ4MFptOXlJQ2gyWVhJZ2FXUWdhVzRnYUc5MFZYQmtZWFJsS1NCN1hHNGdYSFJjZEZ4MFhIUnBaaUFvVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0dodmRGVndaR0YwWlN3Z2FXUXBLU0I3WEc0Z1hIUmNkRngwWEhSY2RHOTFkR1JoZEdWa1RXOWtkV3hsY3k1d2RYTm9LSFJ2VFc5a2RXeGxTV1FvYVdRcEtUdGNiaUJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFI5WEc0Z1hIUmNkRngwWkdWbVpYSnlaV1F1Y21WemIyeDJaU2h2ZFhSa1lYUmxaRTF2WkhWc1pYTXBPMXh1SUZ4MFhIUjlYRzRnWEhSOVhHNWNiaUJjZEdaMWJtTjBhVzl1SUdodmRFRndjR3g1S0c5d2RHbHZibk1wSUh0Y2JpQmNkRngwYVdZZ0tHaHZkRk4wWVhSMWN5QWhQVDBnWENKeVpXRmtlVndpS1Z4dUlGeDBYSFJjZEhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjSW1Gd2NHeDVLQ2tnYVhNZ2IyNXNlU0JoYkd4dmQyVmtJR2x1SUhKbFlXUjVJSE4wWVhSMWMxd2lLVHRjYmlCY2RGeDBiM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTWdmSHdnZTMwN1hHNGdYSFJjZEhKbGRIVnliaUJvYjNSQmNIQnNlVWx1ZEdWeWJtRnNLRzl3ZEdsdmJuTXBPMXh1SUZ4MGZWeHVYRzRnWEhSbWRXNWpkR2x2YmlCb2IzUkJjSEJzZVVsdWRHVnlibUZzS0c5d2RHbHZibk1wSUh0Y2JpQmNkRngwYUc5MFFYQndiSGxKYm5aaGJHbGtZWFJsWkUxdlpIVnNaWE1vS1R0Y2JseHVJRngwWEhSMllYSWdZMkk3WEc0Z1hIUmNkSFpoY2lCcE8xeHVJRngwWEhSMllYSWdhanRjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaVHRjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaVWxrTzF4dVhHNGdYSFJjZEdaMWJtTjBhVzl1SUdkbGRFRm1abVZqZEdWa1UzUjFabVlvZFhCa1lYUmxUVzlrZFd4bFNXUXBJSHRjYmlCY2RGeDBYSFIyWVhJZ2IzVjBaR0YwWldSTmIyUjFiR1Z6SUQwZ1czVndaR0YwWlUxdlpIVnNaVWxrWFR0Y2JpQmNkRngwWEhSMllYSWdiM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE1nUFNCN2ZUdGNibHh1SUZ4MFhIUmNkSFpoY2lCeGRXVjFaU0E5SUc5MWRHUmhkR1ZrVFc5a2RXeGxjeTV0WVhBb1puVnVZM1JwYjI0b2FXUXBJSHRjYmlCY2RGeDBYSFJjZEhKbGRIVnliaUI3WEc0Z1hIUmNkRngwWEhSY2RHTm9ZV2x1T2lCYmFXUmRMRnh1SUZ4MFhIUmNkRngwWEhScFpEb2dhV1JjYmlCY2RGeDBYSFJjZEgwN1hHNGdYSFJjZEZ4MGZTazdYRzRnWEhSY2RGeDBkMmhwYkdVZ0tIRjFaWFZsTG14bGJtZDBhQ0ErSURBcElIdGNiaUJjZEZ4MFhIUmNkSFpoY2lCeGRXVjFaVWwwWlcwZ1BTQnhkV1YxWlM1d2IzQW9LVHRjYmlCY2RGeDBYSFJjZEhaaGNpQnRiMlIxYkdWSlpDQTlJSEYxWlhWbFNYUmxiUzVwWkR0Y2JpQmNkRngwWEhSY2RIWmhjaUJqYUdGcGJpQTlJSEYxWlhWbFNYUmxiUzVqYUdGcGJqdGNiaUJjZEZ4MFhIUmNkRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRPMXh1SUZ4MFhIUmNkRngwYVdZZ0tGeHVJRngwWEhSY2RGeDBYSFFoYlc5a2RXeGxJSHg4WEc0Z1hIUmNkRngwWEhSY2RDaHRiMlIxYkdVdWFHOTBMbDl6Wld4bVFXTmpaWEIwWldRZ0ppWWdJVzF2WkhWc1pTNW9iM1F1WDNObGJHWkpiblpoYkdsa1lYUmxaQ2xjYmlCY2RGeDBYSFJjZENsY2JpQmNkRngwWEhSY2RGeDBZMjl1ZEdsdWRXVTdYRzRnWEhSY2RGeDBYSFJwWmlBb2JXOWtkV3hsTG1odmRDNWZjMlZzWmtSbFkyeHBibVZrS1NCN1hHNGdYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MGRIbHdaVG9nWENKelpXeG1MV1JsWTJ4cGJtVmtYQ0lzWEc0Z1hIUmNkRngwWEhSY2RGeDBZMmhoYVc0NklHTm9ZV2x1TEZ4dUlGeDBYSFJjZEZ4MFhIUmNkRzF2WkhWc1pVbGtPaUJ0YjJSMWJHVkpaRnh1SUZ4MFhIUmNkRngwWEhSOU8xeHVJRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwYVdZZ0tHMXZaSFZzWlM1b2IzUXVYMjFoYVc0cElIdGNiaUJjZEZ4MFhIUmNkRngwY21WMGRYSnVJSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUjBlWEJsT2lCY0luVnVZV05qWlhCMFpXUmNJaXhjYmlCY2RGeDBYSFJjZEZ4MFhIUmphR0ZwYmpvZ1kyaGhhVzRzWEc0Z1hIUmNkRngwWEhSY2RGeDBiVzlrZFd4bFNXUTZJRzF2WkhWc1pVbGtYRzRnWEhSY2RGeDBYSFJjZEgwN1hHNGdYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUcxdlpIVnNaUzV3WVhKbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdYSFJjZEZ4MFhIUmNkSFpoY2lCd1lYSmxiblJKWkNBOUlHMXZaSFZzWlM1d1lYSmxiblJ6VzJsZE8xeHVJRngwWEhSY2RGeDBYSFIyWVhJZ2NHRnlaVzUwSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0d1lYSmxiblJKWkYwN1hHNGdYSFJjZEZ4MFhIUmNkR2xtSUNnaGNHRnlaVzUwS1NCamIyNTBhVzUxWlR0Y2JpQmNkRngwWEhSY2RGeDBhV1lnS0hCaGNtVnVkQzVvYjNRdVgyUmxZMnhwYm1Wa1JHVndaVzVrWlc1amFXVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUjBlWEJsT2lCY0ltUmxZMnhwYm1Wa1hDSXNYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmphR0ZwYmpvZ1kyaGhhVzR1WTI5dVkyRjBLRnR3WVhKbGJuUkpaRjBwTEZ4dUlGeDBYSFJjZEZ4MFhIUmNkRngwYlc5a2RXeGxTV1E2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEZ4MFhIUmNkRngwY0dGeVpXNTBTV1E2SUhCaGNtVnVkRWxrWEc0Z1hIUmNkRngwWEhSY2RGeDBmVHRjYmlCY2RGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RGeDBYSFJwWmlBb2IzVjBaR0YwWldSTmIyUjFiR1Z6TG1sdVpHVjRUMllvY0dGeVpXNTBTV1FwSUNFOVBTQXRNU2tnWTI5dWRHbHVkV1U3WEc0Z1hIUmNkRngwWEhSY2RHbG1JQ2h3WVhKbGJuUXVhRzkwTGw5aFkyTmxjSFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHRiMlIxYkdWSlpGMHBJSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUnBaaUFvSVc5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWelczQmhjbVZ1ZEVsa1hTbGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RHOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpXM0JoY21WdWRFbGtYU0E5SUZ0ZE8xeHVJRngwWEhSY2RGeDBYSFJjZEdGa1pFRnNiRlJ2VTJWMEtHOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpXM0JoY21WdWRFbGtYU3dnVzIxdlpIVnNaVWxrWFNrN1hHNGdYSFJjZEZ4MFhIUmNkRngwWTI5dWRHbHVkV1U3WEc0Z1hIUmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUmNkRngwWkdWc1pYUmxJRzkxZEdSaGRHVmtSR1Z3Wlc1a1pXNWphV1Z6VzNCaGNtVnVkRWxrWFR0Y2JpQmNkRngwWEhSY2RGeDBiM1YwWkdGMFpXUk5iMlIxYkdWekxuQjFjMmdvY0dGeVpXNTBTV1FwTzF4dUlGeDBYSFJjZEZ4MFhIUnhkV1YxWlM1d2RYTm9LSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmphR0ZwYmpvZ1kyaGhhVzR1WTI5dVkyRjBLRnR3WVhKbGJuUkpaRjBwTEZ4dUlGeDBYSFJjZEZ4MFhIUmNkR2xrT2lCd1lYSmxiblJKWkZ4dUlGeDBYSFJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSOVhHNWNiaUJjZEZ4MFhIUnlaWFIxY200Z2UxeHVJRngwWEhSY2RGeDBkSGx3WlRvZ1hDSmhZMk5sY0hSbFpGd2lMRnh1SUZ4MFhIUmNkRngwYlc5a2RXeGxTV1E2SUhWd1pHRjBaVTF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkRngwYjNWMFpHRjBaV1JOYjJSMWJHVnpPaUJ2ZFhSa1lYUmxaRTF2WkhWc1pYTXNYRzRnWEhSY2RGeDBYSFJ2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsY3pvZ2IzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTmNiaUJjZEZ4MFhIUjlPMXh1SUZ4MFhIUjlYRzVjYmlCY2RGeDBablZ1WTNScGIyNGdZV1JrUVd4c1ZHOVRaWFFvWVN3Z1lpa2dlMXh1SUZ4MFhIUmNkR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWWk1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUZ4MFhIUmNkRngwZG1GeUlHbDBaVzBnUFNCaVcybGRPMXh1SUZ4MFhIUmNkRngwYVdZZ0tHRXVhVzVrWlhoUFppaHBkR1Z0S1NBOVBUMGdMVEVwSUdFdWNIVnphQ2hwZEdWdEtUdGNiaUJjZEZ4MFhIUjlYRzRnWEhSY2RIMWNibHh1SUZ4MFhIUXZMeUJoZENCaVpXZHBiaUJoYkd3Z2RYQmtZWFJsY3lCdGIyUjFiR1Z6SUdGeVpTQnZkWFJrWVhSbFpGeHVJRngwWEhRdkx5QjBhR1VnWENKdmRYUmtZWFJsWkZ3aUlITjBZWFIxY3lCallXNGdjSEp2Y0dGbllYUmxJSFJ2SUhCaGNtVnVkSE1nYVdZZ2RHaGxlU0JrYjI0bmRDQmhZMk5sY0hRZ2RHaGxJR05vYVd4a2NtVnVYRzRnWEhSY2RIWmhjaUJ2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsY3lBOUlIdDlPMXh1SUZ4MFhIUjJZWElnYjNWMFpHRjBaV1JOYjJSMWJHVnpJRDBnVzEwN1hHNGdYSFJjZEhaaGNpQmhjSEJzYVdWa1ZYQmtZWFJsSUQwZ2UzMDdYRzVjYmlCY2RGeDBkbUZ5SUhkaGNtNVZibVY0Y0dWamRHVmtVbVZ4ZFdseVpTQTlJR1oxYm1OMGFXOXVJSGRoY201VmJtVjRjR1ZqZEdWa1VtVnhkV2x5WlNncElIdGNiaUJjZEZ4MFhIUmpiMjV6YjJ4bExuZGhjbTRvWEc0Z1hIUmNkRngwWEhSY0lsdElUVkpkSUhWdVpYaHdaV04wWldRZ2NtVnhkV2x5WlNoY0lpQXJJSEpsYzNWc2RDNXRiMlIxYkdWSlpDQXJJRndpS1NCMGJ5QmthWE53YjNObFpDQnRiMlIxYkdWY0lseHVJRngwWEhSY2RDazdYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBabTl5SUNoMllYSWdhV1FnYVc0Z2FHOTBWWEJrWVhSbEtTQjdYRzRnWEhSY2RGeDBhV1lnS0U5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNob2IzUlZjR1JoZEdVc0lHbGtLU2tnZTF4dUlGeDBYSFJjZEZ4MGJXOWtkV3hsU1dRZ1BTQjBiMDF2WkhWc1pVbGtLR2xrS1R0Y2JpQmNkRngwWEhSY2RDOHFLaUJBZEhsd1pTQjdWRTlFVDMwZ0tpOWNiaUJjZEZ4MFhIUmNkSFpoY2lCeVpYTjFiSFE3WEc0Z1hIUmNkRngwWEhScFppQW9hRzkwVlhCa1lYUmxXMmxrWFNrZ2UxeHVJRngwWEhSY2RGeDBYSFJ5WlhOMWJIUWdQU0JuWlhSQlptWmxZM1JsWkZOMGRXWm1LRzF2WkhWc1pVbGtLVHRjYmlCY2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEc0Z1hIUmNkRngwWEhSY2RISmxjM1ZzZENBOUlIdGNiaUJjZEZ4MFhIUmNkRngwWEhSMGVYQmxPaUJjSW1ScGMzQnZjMlZrWENJc1hHNGdYSFJjZEZ4MFhIUmNkRngwYlc5a2RXeGxTV1E2SUdsa1hHNGdYSFJjZEZ4MFhIUmNkSDA3WEc0Z1hIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUXZLaW9nUUhSNWNHVWdlMFZ5Y205eWZHWmhiSE5sZlNBcUwxeHVJRngwWEhSY2RGeDBkbUZ5SUdGaWIzSjBSWEp5YjNJZ1BTQm1ZV3h6WlR0Y2JpQmNkRngwWEhSY2RIWmhjaUJrYjBGd2NHeDVJRDBnWm1Gc2MyVTdYRzRnWEhSY2RGeDBYSFIyWVhJZ1pHOUVhWE53YjNObElEMGdabUZzYzJVN1hHNGdYSFJjZEZ4MFhIUjJZWElnWTJoaGFXNUpibVp2SUQwZ1hDSmNJanRjYmlCY2RGeDBYSFJjZEdsbUlDaHlaWE4xYkhRdVkyaGhhVzRwSUh0Y2JpQmNkRngwWEhSY2RGeDBZMmhoYVc1SmJtWnZJRDBnWENKY1hHNVZjR1JoZEdVZ2NISnZjR0ZuWVhScGIyNDZJRndpSUNzZ2NtVnpkV3gwTG1Ob1lXbHVMbXB2YVc0b1hDSWdMVDRnWENJcE8xeHVJRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwYzNkcGRHTm9JQ2h5WlhOMWJIUXVkSGx3WlNrZ2UxeHVJRngwWEhSY2RGeDBYSFJqWVhObElGd2ljMlZzWmkxa1pXTnNhVzVsWkZ3aU9seHVJRngwWEhSY2RGeDBYSFJjZEdsbUlDaHZjSFJwYjI1ekxtOXVSR1ZqYkdsdVpXUXBJRzl3ZEdsdmJuTXViMjVFWldOc2FXNWxaQ2h5WlhOMWJIUXBPMXh1SUZ4MFhIUmNkRngwWEhSY2RHbG1JQ2doYjNCMGFXOXVjeTVwWjI1dmNtVkVaV05zYVc1bFpDbGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RHRmliM0owUlhKeWIzSWdQU0J1WlhjZ1JYSnliM0lvWEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJjZEZ3aVFXSnZjblJsWkNCaVpXTmhkWE5sSUc5bUlITmxiR1lnWkdWamJHbHVaVG9nWENJZ0sxeHVJRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSEpsYzNWc2RDNXRiMlIxYkdWSlpDQXJYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWTJoaGFXNUpibVp2WEc0Z1hIUmNkRngwWEhSY2RGeDBYSFFwTzF4dUlGeDBYSFJjZEZ4MFhIUmNkR0p5WldGck8xeHVJRngwWEhSY2RGeDBYSFJqWVhObElGd2laR1ZqYkdsdVpXUmNJanBjYmlCY2RGeDBYSFJjZEZ4MFhIUnBaaUFvYjNCMGFXOXVjeTV2YmtSbFkyeHBibVZrS1NCdmNIUnBiMjV6TG05dVJHVmpiR2x1WldRb2NtVnpkV3gwS1R0Y2JpQmNkRngwWEhSY2RGeDBYSFJwWmlBb0lXOXdkR2x2Ym5NdWFXZHViM0psUkdWamJHbHVaV1FwWEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJoWW05eWRFVnljbTl5SUQwZ2JtVjNJRVZ5Y205eUtGeHVJRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNJa0ZpYjNKMFpXUWdZbVZqWVhWelpTQnZaaUJrWldOc2FXNWxaQ0JrWlhCbGJtUmxibU41T2lCY0lpQXJYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwY21WemRXeDBMbTF2WkhWc1pVbGtJQ3RjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY0lpQnBiaUJjSWlBclhHNGdYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBjbVZ6ZFd4MExuQmhjbVZ1ZEVsa0lDdGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJqYUdGcGJrbHVabTljYmlCY2RGeDBYSFJjZEZ4MFhIUmNkQ2s3WEc0Z1hIUmNkRngwWEhSY2RGeDBZbkpsWVdzN1hHNGdYSFJjZEZ4MFhIUmNkR05oYzJVZ1hDSjFibUZqWTJWd2RHVmtYQ0k2WEc0Z1hIUmNkRngwWEhSY2RGeDBhV1lnS0c5d2RHbHZibk11YjI1VmJtRmpZMlZ3ZEdWa0tTQnZjSFJwYjI1ekxtOXVWVzVoWTJObGNIUmxaQ2h5WlhOMWJIUXBPMXh1SUZ4MFhIUmNkRngwWEhSY2RHbG1JQ2doYjNCMGFXOXVjeTVwWjI1dmNtVlZibUZqWTJWd2RHVmtLVnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBZV0p2Y25SRmNuSnZjaUE5SUc1bGR5QkZjbkp2Y2loY2JpQmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhDSkJZbTl5ZEdWa0lHSmxZMkYxYzJVZ1hDSWdLeUJ0YjJSMWJHVkpaQ0FySUZ3aUlHbHpJRzV2ZENCaFkyTmxjSFJsWkZ3aUlDc2dZMmhoYVc1SmJtWnZYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUXBPMXh1SUZ4MFhIUmNkRngwWEhSY2RHSnlaV0ZyTzF4dUlGeDBYSFJjZEZ4MFhIUmpZWE5sSUZ3aVlXTmpaWEIwWldSY0lqcGNiaUJjZEZ4MFhIUmNkRngwWEhScFppQW9iM0IwYVc5dWN5NXZia0ZqWTJWd2RHVmtLU0J2Y0hScGIyNXpMbTl1UVdOalpYQjBaV1FvY21WemRXeDBLVHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmtiMEZ3Y0d4NUlEMGdkSEoxWlR0Y2JpQmNkRngwWEhSY2RGeDBYSFJpY21WaGF6dGNiaUJjZEZ4MFhIUmNkRngwWTJGelpTQmNJbVJwYzNCdmMyVmtYQ0k2WEc0Z1hIUmNkRngwWEhSY2RGeDBhV1lnS0c5d2RHbHZibk11YjI1RWFYTndiM05sWkNrZ2IzQjBhVzl1Y3k1dmJrUnBjM0J2YzJWa0tISmxjM1ZzZENrN1hHNGdYSFJjZEZ4MFhIUmNkRngwWkc5RWFYTndiM05sSUQwZ2RISjFaVHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmljbVZoYXp0Y2JpQmNkRngwWEhSY2RGeDBaR1ZtWVhWc2REcGNiaUJjZEZ4MFhIUmNkRngwWEhSMGFISnZkeUJ1WlhjZ1JYSnliM0lvWENKVmJtVjRZMlZ3ZEdsdmJpQjBlWEJsSUZ3aUlDc2djbVZ6ZFd4MExuUjVjR1VwTzF4dUlGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RGeDBhV1lnS0dGaWIzSjBSWEp5YjNJcElIdGNiaUJjZEZ4MFhIUmNkRngwYUc5MFUyVjBVM1JoZEhWektGd2lZV0p2Y25SY0lpazdYRzRnWEhSY2RGeDBYSFJjZEhKbGRIVnliaUJRY205dGFYTmxMbkpsYW1WamRDaGhZbTl5ZEVWeWNtOXlLVHRjYmlCY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSY2RHbG1JQ2hrYjBGd2NHeDVLU0I3WEc0Z1hIUmNkRngwWEhSY2RHRndjR3hwWldSVmNHUmhkR1ZiYlc5a2RXeGxTV1JkSUQwZ2FHOTBWWEJrWVhSbFcyMXZaSFZzWlVsa1hUdGNiaUJjZEZ4MFhIUmNkRngwWVdSa1FXeHNWRzlUWlhRb2IzVjBaR0YwWldSTmIyUjFiR1Z6TENCeVpYTjFiSFF1YjNWMFpHRjBaV1JOYjJSMWJHVnpLVHRjYmlCY2RGeDBYSFJjZEZ4MFptOXlJQ2h0YjJSMWJHVkpaQ0JwYmlCeVpYTjFiSFF1YjNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhNcElIdGNiaUJjZEZ4MFhIUmNkRngwWEhScFppQW9YRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29YRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSEpsYzNWc2RDNXZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjeXhjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkRngwYlc5a2RXeGxTV1JjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkQ2xjYmlCY2RGeDBYSFJjZEZ4MFhIUXBJSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkR2xtSUNnaGIzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTmJiVzlrZFd4bFNXUmRLVnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBYSFJ2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsYzF0dGIyUjFiR1ZKWkYwZ1BTQmJYVHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkR0ZrWkVGc2JGUnZVMlYwS0Z4dUlGeDBYSFJjZEZ4MFhIUmNkRngwWEhSdmRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHRiMlIxYkdWSlpGMHNYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSEpsYzNWc2RDNXZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXR0YjJSMWJHVkpaRjFjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkQ2s3WEc0Z1hIUmNkRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBYSFJwWmlBb1pHOUVhWE53YjNObEtTQjdYRzRnWEhSY2RGeDBYSFJjZEdGa1pFRnNiRlJ2VTJWMEtHOTFkR1JoZEdWa1RXOWtkV3hsY3l3Z1czSmxjM1ZzZEM1dGIyUjFiR1ZKWkYwcE8xeHVJRngwWEhSY2RGeDBYSFJoY0hCc2FXVmtWWEJrWVhSbFcyMXZaSFZzWlVsa1hTQTlJSGRoY201VmJtVjRjR1ZqZEdWa1VtVnhkV2x5WlR0Y2JpQmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUjlYRzRnWEhSY2RIMWNibHh1SUZ4MFhIUXZMeUJUZEc5eVpTQnpaV3htSUdGalkyVndkR1ZrSUc5MWRHUmhkR1ZrSUcxdlpIVnNaWE1nZEc4Z2NtVnhkV2x5WlNCMGFHVnRJR3hoZEdWeUlHSjVJSFJvWlNCdGIyUjFiR1VnYzNsemRHVnRYRzRnWEhSY2RIWmhjaUJ2ZFhSa1lYUmxaRk5sYkdaQlkyTmxjSFJsWkUxdlpIVnNaWE1nUFNCYlhUdGNiaUJjZEZ4MFptOXlJQ2hwSUQwZ01Ec2dhU0E4SUc5MWRHUmhkR1ZrVFc5a2RXeGxjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJRngwWEhSY2RHMXZaSFZzWlVsa0lEMGdiM1YwWkdGMFpXUk5iMlIxYkdWelcybGRPMXh1SUZ4MFhIUmNkR2xtSUNoY2JpQmNkRngwWEhSY2RHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElDWW1YRzRnWEhSY2RGeDBYSFJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVvYjNRdVgzTmxiR1pCWTJObGNIUmxaQ0FtSmx4dUlGeDBYSFJjZEZ4MEx5OGdjbVZ0YjNabFpDQnpaV3htTFdGalkyVndkR1ZrSUcxdlpIVnNaWE1nYzJodmRXeGtJRzV2ZENCaVpTQnlaWEYxYVhKbFpGeHVJRngwWEhSY2RGeDBZWEJ3YkdsbFpGVndaR0YwWlZ0dGIyUjFiR1ZKWkYwZ0lUMDlJSGRoY201VmJtVjRjR1ZqZEdWa1VtVnhkV2x5WlNBbUpseHVJRngwWEhSY2RGeDBMeThnZDJobGJpQmpZV3hzWldRZ2FXNTJZV3hwWkdGMFpTQnpaV3htTFdGalkyVndkR2x1WnlCcGN5QnViM1FnY0c5emMybGliR1ZjYmlCY2RGeDBYSFJjZENGcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1b2IzUXVYM05sYkdaSmJuWmhiR2xrWVhSbFpGeHVJRngwWEhSY2RDa2dlMXh1SUZ4MFhIUmNkRngwYjNWMFpHRjBaV1JUWld4bVFXTmpaWEIwWldSTmIyUjFiR1Z6TG5CMWMyZ29lMXh1SUZ4MFhIUmNkRngwWEhSdGIyUjFiR1U2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEZ4MFhIUndZWEpsYm5Sek9pQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNXdZWEpsYm5SekxuTnNhV05sS0Nrc1hHNGdYSFJjZEZ4MFhIUmNkR1Z5Y205eVNHRnVaR3hsY2pvZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdWFHOTBMbDl6Wld4bVFXTmpaWEIwWldSY2JpQmNkRngwWEhSY2RIMHBPMXh1SUZ4MFhIUmNkSDFjYmlCY2RGeDBmVnh1WEc0Z1hIUmNkQzh2SUU1dmR5QnBiaUJjSW1ScGMzQnZjMlZjSWlCd2FHRnpaVnh1SUZ4MFhIUm9iM1JUWlhSVGRHRjBkWE1vWENKa2FYTndiM05sWENJcE8xeHVJRngwWEhSUFltcGxZM1F1YTJWNWN5aG9iM1JCZG1GcGJHRmliR1ZHYVd4bGMwMWhjQ2t1Wm05eVJXRmphQ2htZFc1amRHbHZiaWhqYUhWdWEwbGtLU0I3WEc0Z1hIUmNkRngwYVdZZ0tHaHZkRUYyWVdsc1lXSnNaVVpwYkdWelRXRndXMk5vZFc1clNXUmRJRDA5UFNCbVlXeHpaU2tnZTF4dUlGeDBYSFJjZEZ4MGFHOTBSR2x6Y0c5elpVTm9kVzVyS0dOb2RXNXJTV1FwTzF4dUlGeDBYSFJjZEgxY2JpQmNkRngwZlNrN1hHNWNiaUJjZEZ4MGRtRnlJR2xrZUR0Y2JpQmNkRngwZG1GeUlIRjFaWFZsSUQwZ2IzVjBaR0YwWldSTmIyUjFiR1Z6TG5Oc2FXTmxLQ2s3WEc0Z1hIUmNkSGRvYVd4bElDaHhkV1YxWlM1c1pXNW5kR2dnUGlBd0tTQjdYRzRnWEhSY2RGeDBiVzlrZFd4bFNXUWdQU0J4ZFdWMVpTNXdiM0FvS1R0Y2JpQmNkRngwWEhSdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFR0Y2JpQmNkRngwWEhScFppQW9JVzF2WkhWc1pTa2dZMjl1ZEdsdWRXVTdYRzVjYmlCY2RGeDBYSFIyWVhJZ1pHRjBZU0E5SUh0OU8xeHVYRzRnWEhSY2RGeDBMeThnUTJGc2JDQmthWE53YjNObElHaGhibVJzWlhKelhHNGdYSFJjZEZ4MGRtRnlJR1JwYzNCdmMyVklZVzVrYkdWeWN5QTlJRzF2WkhWc1pTNW9iM1F1WDJScGMzQnZjMlZJWVc1a2JHVnljenRjYmlCY2RGeDBYSFJtYjNJZ0tHb2dQU0F3T3lCcUlEd2daR2x6Y0c5elpVaGhibVJzWlhKekxteGxibWQwYURzZ2Fpc3JLU0I3WEc0Z1hIUmNkRngwWEhSallpQTlJR1JwYzNCdmMyVklZVzVrYkdWeWMxdHFYVHRjYmlCY2RGeDBYSFJjZEdOaUtHUmhkR0VwTzF4dUlGeDBYSFJjZEgxY2JpQmNkRngwWEhSb2IzUkRkWEp5Wlc1MFRXOWtkV3hsUkdGMFlWdHRiMlIxYkdWSlpGMGdQU0JrWVhSaE8xeHVYRzRnWEhSY2RGeDBMeThnWkdsellXSnNaU0J0YjJSMWJHVWdLSFJvYVhNZ1pHbHpZV0pzWlhNZ2NtVnhkV2x5WlhNZ1puSnZiU0IwYUdseklHMXZaSFZzWlNsY2JpQmNkRngwWEhSdGIyUjFiR1V1YUc5MExtRmpkR2wyWlNBOUlHWmhiSE5sTzF4dVhHNGdYSFJjZEZ4MEx5OGdjbVZ0YjNabElHMXZaSFZzWlNCbWNtOXRJR05oWTJobFhHNGdYSFJjZEZ4MFpHVnNaWFJsSUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTzF4dVhHNGdYSFJjZEZ4MEx5OGdkMmhsYmlCa2FYTndiM05wYm1jZ2RHaGxjbVVnYVhNZ2JtOGdibVZsWkNCMGJ5QmpZV3hzSUdScGMzQnZjMlVnYUdGdVpHeGxjbHh1SUZ4MFhIUmNkR1JsYkdWMFpTQnZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXR0YjJSMWJHVkpaRjA3WEc1Y2JpQmNkRngwWEhRdkx5QnlaVzF2ZG1VZ1hDSndZWEpsYm5SelhDSWdjbVZtWlhKbGJtTmxjeUJtY205dElHRnNiQ0JqYUdsc1pISmxibHh1SUZ4MFhIUmNkR1p2Y2lBb2FpQTlJREE3SUdvZ1BDQnRiMlIxYkdVdVkyaHBiR1J5Wlc0dWJHVnVaM1JvT3lCcUt5c3BJSHRjYmlCY2RGeDBYSFJjZEhaaGNpQmphR2xzWkNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsTG1Ob2FXeGtjbVZ1VzJwZFhUdGNiaUJjZEZ4MFhIUmNkR2xtSUNnaFkyaHBiR1FwSUdOdmJuUnBiblZsTzF4dUlGeDBYSFJjZEZ4MGFXUjRJRDBnWTJocGJHUXVjR0Z5Wlc1MGN5NXBibVJsZUU5bUtHMXZaSFZzWlVsa0tUdGNiaUJjZEZ4MFhIUmNkR2xtSUNocFpIZ2dQajBnTUNrZ2UxeHVJRngwWEhSY2RGeDBYSFJqYUdsc1pDNXdZWEpsYm5SekxuTndiR2xqWlNocFpIZ3NJREVwTzF4dUlGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RIMWNiaUJjZEZ4MGZWeHVYRzRnWEhSY2RDOHZJSEpsYlc5MlpTQnZkWFJrWVhSbFpDQmtaWEJsYm1SbGJtTjVJR1p5YjIwZ2JXOWtkV3hsSUdOb2FXeGtjbVZ1WEc0Z1hIUmNkSFpoY2lCa1pYQmxibVJsYm1ONU8xeHVJRngwWEhSMllYSWdiVzlrZFd4bFQzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTTdYRzRnWEhSY2RHWnZjaUFvYlc5a2RXeGxTV1FnYVc0Z2IzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTXBJSHRjYmlCY2RGeDBYSFJwWmlBb1hHNGdYSFJjZEZ4MFhIUlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE1zSUcxdlpIVnNaVWxrS1Z4dUlGeDBYSFJjZENrZ2UxeHVJRngwWEhSY2RGeDBiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMDdYRzRnWEhSY2RGeDBYSFJwWmlBb2JXOWtkV3hsS1NCN1hHNGdYSFJjZEZ4MFhIUmNkRzF2WkhWc1pVOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpJRDBnYjNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhOYmJXOWtkV3hsU1dSZE8xeHVJRngwWEhSY2RGeDBYSFJtYjNJZ0tHb2dQU0F3T3lCcUlEd2diVzlrZFd4bFQzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTXViR1Z1WjNSb095QnFLeXNwSUh0Y2JpQmNkRngwWEhSY2RGeDBYSFJrWlhCbGJtUmxibU41SUQwZ2JXOWtkV3hsVDNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhOYmFsMDdYRzRnWEhSY2RGeDBYSFJjZEZ4MGFXUjRJRDBnYlc5a2RXeGxMbU5vYVd4a2NtVnVMbWx1WkdWNFQyWW9aR1Z3Wlc1a1pXNWplU2s3WEc0Z1hIUmNkRngwWEhSY2RGeDBhV1lnS0dsa2VDQStQU0F3S1NCdGIyUjFiR1V1WTJocGJHUnlaVzR1YzNCc2FXTmxLR2xrZUN3Z01TazdYRzRnWEhSY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUjlYRzRnWEhSY2RIMWNibHh1SUZ4MFhIUXZMeUJPYjNjZ2FXNGdYQ0poY0hCc2VWd2lJSEJvWVhObFhHNGdYSFJjZEdodmRGTmxkRk4wWVhSMWN5aGNJbUZ3Y0d4NVhDSXBPMXh1WEc0Z1hIUmNkR2xtSUNob2IzUlZjR1JoZEdWT1pYZElZWE5vSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlCY2RGeDBYSFJvYjNSRGRYSnlaVzUwU0dGemFDQTlJR2h2ZEZWd1pHRjBaVTVsZDBoaGMyZzdYRzRnWEhSY2RGeDBhRzkwVlhCa1lYUmxUbVYzU0dGemFDQTlJSFZ1WkdWbWFXNWxaRHRjYmlCY2RGeDBmVnh1SUZ4MFhIUm9iM1JWY0dSaGRHVWdQU0IxYm1SbFptbHVaV1E3WEc1Y2JpQmNkRngwTHk4Z2FXNXpaWEowSUc1bGR5QmpiMlJsWEc0Z1hIUmNkR1p2Y2lBb2JXOWtkV3hsU1dRZ2FXNGdZWEJ3YkdsbFpGVndaR0YwWlNrZ2UxeHVJRngwWEhSY2RHbG1JQ2hQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvWVhCd2JHbGxaRlZ3WkdGMFpTd2diVzlrZFd4bFNXUXBLU0I3WEc0Z1hIUmNkRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlHRndjR3hwWldSVmNHUmhkR1ZiYlc5a2RXeGxTV1JkTzF4dUlGeDBYSFJjZEgxY2JpQmNkRngwZlZ4dVhHNGdYSFJjZEM4dklHTmhiR3dnWVdOalpYQjBJR2hoYm1Sc1pYSnpYRzRnWEhSY2RIWmhjaUJsY25KdmNpQTlJRzUxYkd3N1hHNGdYSFJjZEdadmNpQW9iVzlrZFd4bFNXUWdhVzRnYjNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhNcElIdGNiaUJjZEZ4MFhIUnBaaUFvWEc0Z1hIUmNkRngwWEhSUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTXNJRzF2WkhWc1pVbGtLVnh1SUZ4MFhIUmNkQ2tnZTF4dUlGeDBYSFJjZEZ4MGJXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwN1hHNGdYSFJjZEZ4MFhIUnBaaUFvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkRngwWEhSY2RHMXZaSFZzWlU5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWeklEMGdiM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE5iYlc5a2RXeGxTV1JkTzF4dUlGeDBYSFJjZEZ4MFhIUjJZWElnWTJGc2JHSmhZMnR6SUQwZ1cxMDdYRzRnWEhSY2RGeDBYSFJjZEdadmNpQW9hU0E5SURBN0lHa2dQQ0J0YjJSMWJHVlBkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJRngwWEhSY2RGeDBYSFJjZEdSbGNHVnVaR1Z1WTNrZ1BTQnRiMlIxYkdWUGRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHBYVHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmpZaUE5SUcxdlpIVnNaUzVvYjNRdVgyRmpZMlZ3ZEdWa1JHVndaVzVrWlc1amFXVnpXMlJsY0dWdVpHVnVZM2xkTzF4dUlGeDBYSFJjZEZ4MFhIUmNkR2xtSUNoallpa2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RGeDBhV1lnS0dOaGJHeGlZV05yY3k1cGJtUmxlRTltS0dOaUtTQWhQVDBnTFRFcElHTnZiblJwYm5WbE8xeHVJRngwWEhSY2RGeDBYSFJjZEZ4MFkyRnNiR0poWTJ0ekxuQjFjMmdvWTJJcE8xeHVJRngwWEhSY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwWEhSbWIzSWdLR2tnUFNBd095QnBJRHdnWTJGc2JHSmhZMnR6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MFkySWdQU0JqWVd4c1ltRmphM05iYVYwN1hHNGdYSFJjZEZ4MFhIUmNkRngwZEhKNUlIdGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RHTmlLRzF2WkhWc1pVOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpLVHRjYmlCY2RGeDBYSFJjZEZ4MFhIUjlJR05oZEdOb0lDaGxjbklwSUh0Y2JpQmNkRngwWEhSY2RGeDBYSFJjZEdsbUlDaHZjSFJwYjI1ekxtOXVSWEp5YjNKbFpDa2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RGeDBYSFJ2Y0hScGIyNXpMbTl1UlhKeWIzSmxaQ2g3WEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGRIbHdaVG9nWENKaFkyTmxjSFF0WlhKeWIzSmxaRndpTEZ4dUlGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHMXZaSFZzWlVsa09pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJrWlhCbGJtUmxibU41U1dRNklHMXZaSFZzWlU5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWelcybGRMRnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdWeWNtOXlPaUJsY25KY2JpQmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZTazdYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUnBaaUFvSVc5d2RHbHZibk11YVdkdWIzSmxSWEp5YjNKbFpDa2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RGeDBYSFJwWmlBb0lXVnljbTl5S1NCbGNuSnZjaUE5SUdWeWNqdGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSOVhHNGdYSFJjZEgxY2JseHVJRngwWEhRdkx5Qk1iMkZrSUhObGJHWWdZV05qWlhCMFpXUWdiVzlrZFd4bGMxeHVJRngwWEhSbWIzSWdLR2tnUFNBd095QnBJRHdnYjNWMFpHRjBaV1JUWld4bVFXTmpaWEIwWldSTmIyUjFiR1Z6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnWEhSY2RGeDBkbUZ5SUdsMFpXMGdQU0J2ZFhSa1lYUmxaRk5sYkdaQlkyTmxjSFJsWkUxdlpIVnNaWE5iYVYwN1hHNGdYSFJjZEZ4MGJXOWtkV3hsU1dRZ1BTQnBkR1Z0TG0xdlpIVnNaVHRjYmlCY2RGeDBYSFJvYjNSRGRYSnlaVzUwVUdGeVpXNTBjeUE5SUdsMFpXMHVjR0Z5Wlc1MGN6dGNiaUJjZEZ4MFhIUm9iM1JEZFhKeVpXNTBRMmhwYkdSTmIyUjFiR1VnUFNCdGIyUjFiR1ZKWkR0Y2JpQmNkRngwWEhSMGNua2dlMXh1SUZ4MFhIUmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrN1hHNGdYSFJjZEZ4MGZTQmpZWFJqYUNBb1pYSnlLU0I3WEc0Z1hIUmNkRngwWEhScFppQW9kSGx3Wlc5bUlHbDBaVzB1WlhKeWIzSklZVzVrYkdWeUlEMDlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUJjZEZ4MFhIUmNkRngwZEhKNUlIdGNiaUJjZEZ4MFhIUmNkRngwWEhScGRHVnRMbVZ5Y205eVNHRnVaR3hsY2lobGNuSXBPMXh1SUZ4MFhIUmNkRngwWEhSOUlHTmhkR05vSUNobGNuSXlLU0I3WEc0Z1hIUmNkRngwWEhSY2RGeDBhV1lnS0c5d2RHbHZibk11YjI1RmNuSnZjbVZrS1NCN1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhSdmNIUnBiMjV6TG05dVJYSnliM0psWkNoN1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhSY2RIUjVjR1U2SUZ3aWMyVnNaaTFoWTJObGNIUXRaWEp5YjNJdGFHRnVaR3hsY2kxbGNuSnZjbVZrWENJc1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhSY2RHMXZaSFZzWlVsa09pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RGeDBaWEp5YjNJNklHVnljaklzWEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJjZEc5eWFXZHBibUZzUlhKeWIzSTZJR1Z5Y2x4dUlGeDBYSFJjZEZ4MFhIUmNkRngwZlNrN1hHNGdYSFJjZEZ4MFhIUmNkRngwZlZ4dUlGeDBYSFJjZEZ4MFhIUmNkR2xtSUNnaGIzQjBhVzl1Y3k1cFoyNXZjbVZGY25KdmNtVmtLU0I3WEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJwWmlBb0lXVnljbTl5S1NCbGNuSnZjaUE5SUdWeWNqSTdYRzRnWEhSY2RGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RGeDBYSFJjZEdsbUlDZ2haWEp5YjNJcElHVnljbTl5SUQwZ1pYSnlPMXh1SUZ4MFhIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHVJRngwWEhSY2RGeDBYSFJwWmlBb2IzQjBhVzl1Y3k1dmJrVnljbTl5WldRcElIdGNiaUJjZEZ4MFhIUmNkRngwWEhSdmNIUnBiMjV6TG05dVJYSnliM0psWkNoN1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhSMGVYQmxPaUJjSW5ObGJHWXRZV05qWlhCMExXVnljbTl5WldSY0lpeGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RHMXZaSFZzWlVsa09pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RHVnljbTl5T2lCbGNuSmNiaUJjZEZ4MFhIUmNkRngwWEhSOUtUdGNiaUJjZEZ4MFhIUmNkRngwZlZ4dUlGeDBYSFJjZEZ4MFhIUnBaaUFvSVc5d2RHbHZibk11YVdkdWIzSmxSWEp5YjNKbFpDa2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RHbG1JQ2doWlhKeWIzSXBJR1Z5Y205eUlEMGdaWEp5TzF4dUlGeDBYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBYSFI5WEc0Z1hIUmNkRngwZlZ4dUlGeDBYSFI5WEc1Y2JpQmNkRngwTHk4Z2FHRnVaR3hsSUdWeWNtOXljeUJwYmlCaFkyTmxjSFFnYUdGdVpHeGxjbk1nWVc1a0lITmxiR1lnWVdOalpYQjBaV1FnYlc5a2RXeGxJR3h2WVdSY2JpQmNkRngwYVdZZ0tHVnljbTl5S1NCN1hHNGdYSFJjZEZ4MGFHOTBVMlYwVTNSaGRIVnpLRndpWm1GcGJGd2lLVHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdVSEp2YldselpTNXlaV3BsWTNRb1pYSnliM0lwTzF4dUlGeDBYSFI5WEc1Y2JpQmNkRngwYVdZZ0tHaHZkRkYxWlhWbFpFbHVkbUZzYVdSaGRHVmtUVzlrZFd4bGN5a2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQm9iM1JCY0hCc2VVbHVkR1Z5Ym1Gc0tHOXdkR2x2Ym5NcExuUm9aVzRvWm5WdVkzUnBiMjRvYkdsemRDa2dlMXh1SUZ4MFhIUmNkRngwYjNWMFpHRjBaV1JOYjJSMWJHVnpMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNG9iVzlrZFd4bFNXUXBJSHRjYmlCY2RGeDBYSFJjZEZ4MGFXWWdLR3hwYzNRdWFXNWtaWGhQWmlodGIyUjFiR1ZKWkNrZ1BDQXdLU0JzYVhOMExuQjFjMmdvYlc5a2RXeGxTV1FwTzF4dUlGeDBYSFJjZEZ4MGZTazdYRzRnWEhSY2RGeDBYSFJ5WlhSMWNtNGdiR2x6ZER0Y2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MGZWeHVYRzRnWEhSY2RHaHZkRk5sZEZOMFlYUjFjeWhjSW1sa2JHVmNJaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQnVaWGNnVUhKdmJXbHpaU2htZFc1amRHbHZiaWh5WlhOdmJIWmxLU0I3WEc0Z1hIUmNkRngwY21WemIyeDJaU2h2ZFhSa1lYUmxaRTF2WkhWc1pYTXBPMXh1SUZ4MFhIUjlLVHRjYmlCY2RIMWNibHh1SUZ4MFpuVnVZM1JwYjI0Z2FHOTBRWEJ3YkhsSmJuWmhiR2xrWVhSbFpFMXZaSFZzWlhNb0tTQjdYRzRnWEhSY2RHbG1JQ2hvYjNSUmRXVjFaV1JKYm5aaGJHbGtZWFJsWkUxdlpIVnNaWE1wSUh0Y2JpQmNkRngwWEhScFppQW9JV2h2ZEZWd1pHRjBaU2tnYUc5MFZYQmtZWFJsSUQwZ2UzMDdYRzRnWEhSY2RGeDBhRzkwVVhWbGRXVmtTVzUyWVd4cFpHRjBaV1JOYjJSMWJHVnpMbVp2Y2tWaFkyZ29hRzkwUVhCd2JIbEpiblpoYkdsa1lYUmxaRTF2WkhWc1pTazdYRzRnWEhSY2RGeDBhRzkwVVhWbGRXVmtTVzUyWVd4cFpHRjBaV1JOYjJSMWJHVnpJRDBnZFc1a1pXWnBibVZrTzF4dUlGeDBYSFJjZEhKbGRIVnliaUIwY25WbE8xeHVJRngwWEhSOVhHNGdYSFI5WEc1Y2JpQmNkR1oxYm1OMGFXOXVJR2h2ZEVGd2NHeDVTVzUyWVd4cFpHRjBaV1JOYjJSMWJHVW9iVzlrZFd4bFNXUXBJSHRjYmlCY2RGeDBhV1lnS0NGUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2FHOTBWWEJrWVhSbExDQnRiMlIxYkdWSlpDa3BYRzRnWEhSY2RGeDBhRzkwVlhCa1lYUmxXMjF2WkhWc1pVbGtYU0E5SUcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTzF4dUlGeDBmVnh1WEc0Z1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlN4Y2JpQmNkRngwWEhSb2IzUTZJR2h2ZEVOeVpXRjBaVTF2WkhWc1pTaHRiMlIxYkdWSlpDa3NYRzRnWEhSY2RGeDBjR0Z5Wlc1MGN6b2dLR2h2ZEVOMWNuSmxiblJRWVhKbGJuUnpWR1Z0Y0NBOUlHaHZkRU4xY25KbGJuUlFZWEpsYm5SekxDQm9iM1JEZFhKeVpXNTBVR0Z5Wlc1MGN5QTlJRnRkTENCb2IzUkRkWEp5Wlc1MFVHRnlaVzUwYzFSbGJYQXBMRnh1SUZ4MFhIUmNkR05vYVd4a2NtVnVPaUJiWFZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCb2IzUkRjbVZoZEdWU1pYRjFhWEpsS0cxdlpIVnNaVWxrS1NrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUdkbGRIUmxjaUJtZFc1amRHbHZiaUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6TENCdVlXMWxMQ0JuWlhSMFpYSXBJSHRjYmlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0J1WVcxbExDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJR2RsZERvZ1oyVjBkR1Z5SUgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWDE5bGMwMXZaSFZzWlNCdmJpQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5JZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SektTQjdYRzRnWEhSY2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjc0lIc2dkbUZzZFdVNklDZE5iMlIxYkdVbklIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCamNtVmhkR1VnWVNCbVlXdGxJRzVoYldWemNHRmpaU0J2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBeE9pQjJZV3gxWlNCcGN5QmhJRzF2WkhWc1pTQnBaQ3dnY21WeGRXbHlaU0JwZEZ4dUlGeDBMeThnYlc5a1pTQW1JREk2SUcxbGNtZGxJR0ZzYkNCd2NtOXdaWEowYVdWeklHOW1JSFpoYkhWbElHbHVkRzhnZEdobElHNXpYRzRnWEhRdkx5QnRiMlJsSUNZZ05Eb2djbVYwZFhKdUlIWmhiSFZsSUhkb1pXNGdZV3h5WldGa2VTQnVjeUJ2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBNGZERTZJR0psYUdGMlpTQnNhV3RsSUhKbGNYVnBjbVZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVkQ0E5SUdaMWJtTjBhVzl1S0haaGJIVmxMQ0J0YjJSbEtTQjdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXhLU0IyWVd4MVpTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvZG1Gc2RXVXBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdPQ2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhScFppZ29iVzlrWlNBbUlEUXBJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RtRnNkV1VnSmlZZ2RtRnNkV1V1WDE5bGMwMXZaSFZzWlNrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUjJZWElnYm5NZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklvYm5NcE8xeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ibk1zSUNka1pXWmhkV3gwSnl3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQjJZV3gxWlRvZ2RtRnNkV1VnZlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeUlDWW1JSFI1Y0dWdlppQjJZV3gxWlNBaFBTQW5jM1J5YVc1bkp5a2dabTl5S0haaGNpQnJaWGtnYVc0Z2RtRnNkV1VwSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaHVjeXdnYTJWNUxDQm1kVzVqZEdsdmJpaHJaWGtwSUhzZ2NtVjBkWEp1SUhaaGJIVmxXMnRsZVYwN0lIMHVZbWx1WkNodWRXeHNMQ0JyWlhrcEtUdGNiaUJjZEZ4MGNtVjBkWEp1SUc1ek8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdYMTkzWldKd1lXTnJYMmhoYzJoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1b0lEMGdablZ1WTNScGIyNG9LU0I3SUhKbGRIVnliaUJvYjNSRGRYSnlaVzUwU0dGemFEc2dmVHRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQm9iM1JEY21WaGRHVlNaWEYxYVhKbEtGd2lMaTl6Y21NdmFXTnZibk11YW5OY0lpa29YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ1hDSXVMM055WXk5cFkyOXVjeTVxYzF3aUtUdGNiaUlzSWk4dklFbHRjRzl5ZEhOY2JuWmhjaUJmWDE5RFUxTmZURTlCUkVWU1gwRlFTVjlKVFZCUFVsUmZYMThnUFNCeVpYRjFhWEpsS0Z3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOemN5MXNiMkZrWlhJdlpHbHpkQzl5ZFc1MGFXMWxMMkZ3YVM1cWMxd2lLVHRjYm5aaGNpQmZYMTlEVTFOZlRFOUJSRVZTWDBkRlZGOVZVa3hmU1UxUVQxSlVYMTlmSUQwZ2NtVnhkV2x5WlNoY0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amMzTXRiRzloWkdWeUwyUnBjM1F2Y25WdWRHbHRaUzluWlhSVmNtd3Vhbk5jSWlrN1hHNTJZWElnWDE5ZlExTlRYMHhQUVVSRlVsOVZVa3hmU1UxUVQxSlVYekJmWDE4Z1BTQnlaWEYxYVhKbEtGd2lMaTlwYldGblpYTXZhV052Ym5NdWNHNW5YQ0lwTzF4dVpYaHdiM0owY3lBOUlGOWZYME5UVTE5TVQwRkVSVkpmUVZCSlgwbE5VRTlTVkY5Zlh5aG1ZV3h6WlNrN1hHNTJZWElnWDE5ZlExTlRYMHhQUVVSRlVsOVZVa3hmVWtWUVRFRkRSVTFGVGxSZk1GOWZYeUE5SUY5ZlgwTlRVMTlNVDBGRVJWSmZSMFZVWDFWU1RGOUpUVkJQVWxSZlgxOG9YMTlmUTFOVFgweFBRVVJGVWw5VlVreGZTVTFRVDFKVVh6QmZYMThwTzF4dUx5OGdUVzlrZFd4bFhHNWxlSEJ2Y25SekxuQjFjMmdvVzIxdlpIVnNaUzVwWkN3Z1hDSXVhV052Ym5NdFkyd2dlMXhjYmlBZ1pHbHpjR3hoZVRvZ2FXNXNhVzVsTFdKc2IyTnJPMXhjYmlBZ1ltRmphMmR5YjNWdVpDMXBiV0ZuWlRvZ2RYSnNLRndpSUNzZ1gxOWZRMU5UWDB4UFFVUkZVbDlWVWt4ZlVrVlFURUZEUlUxRlRsUmZNRjlmWHlBcklGd2lLVHRjWEc0Z0lIZHBaSFJvT2lBeE5uQjRPMXhjYmlBZ2FHVnBaMmgwT2lBeE5uQjRPMXhjYmlBZ2IzWmxjbVpzYjNjNklHaHBaR1JsYmp0Y1hHNGdJR052Ykc5eU9pQjBjbUZ1YzNCaGNtVnVkRHRjWEc0Z0lIQmhaR1JwYm1jNklEQTdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWpZWEpsZEMweExXNGdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF3SURBN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxallYSmxkQzB4TFc1bElIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEUyY0hnZ01Ec2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXTmhjbVYwTFRFdFpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB6TW5CNElEQTdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWpZWEpsZEMweExYTmxJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRRNGNIZ2dNRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV05oY21WMExURXRjeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwMk5IQjRJREE3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFqWVhKbGRDMHhMWE4zSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUZ3djSGdnTURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdOaGNtVjBMVEV0ZHlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMDVObkI0SURBN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxallYSmxkQzB4TFc1M0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEV4TW5CNElEQTdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWpZWEpsZEMweUxXNHRjeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE1qaHdlQ0F3T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WTJGeVpYUXRNaTFsTFhjZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVFEwY0hnZ01Ec2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYUnlhV0Z1WjJ4bExURXRiaUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURCd2VDQXRNVFp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhSeWFXRnVaMnhsTFRFdGJtVWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRad2VDQXRNVFp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhSeWFXRnVaMnhsTFRFdFpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB6TW5CNElDMHhObkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0ZEhKcFlXNW5iR1V0TVMxelpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzAwT0hCNElDMHhObkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0ZEhKcFlXNW5iR1V0TVMxeklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVFkwY0hnZ0xURTJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzEwY21saGJtZHNaUzB4TFhOM0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVGd3Y0hnZ0xURTJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzEwY21saGJtZHNaUzB4TFhjZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRPVFp3ZUNBdE1UWndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWFJ5YVdGdVoyeGxMVEV0Ym5jZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVEV5Y0hnZ0xURTJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzEwY21saGJtZHNaUzB5TFc0dGN5QjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TWpod2VDQXRNVFp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhSeWFXRnVaMnhsTFRJdFpTMTNJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFME5IQjRJQzB4Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlYSnliM2N0TVMxdUlIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dNSEI0SUMwek1uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZWEp5YjNjdE1TMXVaU0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE5uQjRJQzB6TW5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlYSnliM2N0TVMxbElIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVE15Y0hnZ0xUTXljSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFoY25KdmR5MHhMWE5sSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUUTRjSGdnTFRNeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWhjbkp2ZHkweExYTWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TmpSd2VDQXRNekp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNMVEV0YzNjZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRPREJ3ZUNBdE16SndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M0xURXRkeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwNU5uQjRJQzB6TW5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlYSnliM2N0TVMxdWR5QjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TVRKd2VDQXRNekp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNMVEl0YmkxeklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEV5T0hCNElDMHpNbkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WVhKeWIzY3RNaTF1WlMxemR5QjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TkRSd2VDQXRNekp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNMVEl0WlMxM0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEUyTUhCNElDMHpNbkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WVhKeWIzY3RNaTF6WlMxdWR5QjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4Tnpad2VDQXRNekp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNjM1J2Y0MweExXNGdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRreWNIZ2dMVE15Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxaGNuSnZkM04wYjNBdE1TMWxJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRJd09IQjRJQzB6TW5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlYSnliM2R6ZEc5d0xURXRjeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweU1qUndlQ0F0TXpKd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzYzNSdmNDMHhMWGNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1qUXdjSGdnTFRNeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWhjbkp2ZDNSb2FXTnJMVEV0YmlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklEQndlQ0F0TkRod2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzZEdocFkyc3RNUzF1WlNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhObkI0SUMwME9IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZWEp5YjNkMGFHbGpheTB4TFdVZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNekp3ZUNBdE5EaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M2RHaHBZMnN0TVMxelpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzAwT0hCNElDMDBPSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WVhKeWIzZDBhR2xqYXkweExYTWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TmpSd2VDQXRORGh3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNkR2hwWTJzdE1TMXpkeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwNE1IQjRJQzAwT0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlYSnliM2QwYUdsamF5MHhMWGNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE9UWndlQ0F0TkRod2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzZEdocFkyc3RNUzF1ZHlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhNVEp3ZUNBdE5EaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M2RHaHBZMnN0TWkxdUxYTWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRJNGNIZ2dMVFE0Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOckxUSXRibVV0YzNjZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVFEwY0hnZ0xUUTRjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFoY25KdmQzUm9hV05yTFRJdFpTMTNJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFMk1IQjRJQzAwT0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlYSnliM2QwYUdsamF5MHlMWE5sTFc1M0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEUzTm5CNElDMDBPSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WVhKeWIzZDBhR2xqYTNOMGIzQXRNUzF1SUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURTVNbkI0SUMwME9IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZWEp5YjNkMGFHbGphM04wYjNBdE1TMWxJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRJd09IQjRJQzAwT0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlYSnliM2QwYUdsamEzTjBiM0F0TVMxeklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEl5TkhCNElDMDBPSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WVhKeWIzZDBhR2xqYTNOMGIzQXRNUzEzSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUSTBNSEI0SUMwME9IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZWEp5YjNkeVpYUjFjbTUwYUdsamF5MHhMWGNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBd2NIZ2dMVFkwY0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxaGNuSnZkM0psZEhWeWJuUm9hV05yTFRFdFpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB6TW5CNElDMDJOSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0Wm05c1pHVnlMV052Ykd4aGNITmxaQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURCd2VDQXRPVFp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdadmJHUmxjaTF2Y0dWdUlIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEUyY0hnZ0xUazJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFrYjJOMWJXVnVkQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwek1uQjRJQzA1Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFpHOWpkVzFsYm5RdFlpQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzAwT0hCNElDMDVObkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0Ym05MFpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzAyTkhCNElDMDVObkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0YldGcGJDMWpiRzl6WldRZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRPREJ3ZUNBdE9UWndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMVzFoYVd3dGIzQmxiaUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwNU5uQjRJQzA1Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGMzVnBkR05oYzJVZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVEV5Y0hnZ0xUazJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFqYjIxdFpXNTBJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFeU9IQjRJQzA1Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGNHVnljMjl1SUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURTBOSEI0SUMwNU5uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RjSEpwYm5RZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVFl3Y0hnZ0xUazJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzEwY21GemFDQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4Tnpad2VDQXRPVFp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFd4dlkydGxaQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE9USndlQ0F0T1Rad2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYVnViRzlqYTJWa0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEl3T0hCNElDMDVObkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WW05dmEyMWhjbXNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1qSTBjSGdnTFRrMmNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMTBZV2NnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1qUXdjSGdnTFRrMmNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMW9iMjFsSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ01IQjRJQzB4TVRKd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXWnNZV2NnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1UWndlQ0F0TVRFeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWpZV3hqZFd4aGRHOXlJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRNeWNIZ2dMVEV4TW5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFkyRnlkQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwME9IQjRJQzB4TVRKd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYQmxibU5wYkNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMDJOSEI0SUMweE1USndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV05zYjJOcklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVGd3Y0hnZ0xURXhNbkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WkdsemF5QjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzA1Tm5CNElDMHhNVEp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdOaGJHVnVaR0Z5SUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURXhNbkI0SUMweE1USndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWHB2YjIxcGJpQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TWpod2VDQXRNVEV5Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxNmIyOXRiM1YwSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURTBOSEI0SUMweE1USndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWE5sWVhKamFDQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TmpCd2VDQXRNVEV5Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxM2NtVnVZMmdnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1UYzJjSGdnTFRFeE1uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RaMlZoY2lCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhPVEp3ZUNBdE1URXljSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFvWldGeWRDQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB5TURod2VDQXRNVEV5Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxemRHRnlJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRJeU5IQjRJQzB4TVRKd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXeHBibXNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1qUXdjSGdnTFRFeE1uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZMkZ1WTJWc0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dNSEI0SUMweE1qaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWEJzZFhNZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVFp3ZUNBdE1USTRjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzF3YkhWemRHaHBZMnNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE16SndlQ0F0TVRJNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXRhVzUxY3lCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMDBPSEI0SUMweE1qaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMVzFwYm5WemRHaHBZMnNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE5qUndlQ0F0TVRJNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXJaWGtnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE9EQndlQ0F0TVRJNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXNhV2RvZEdKMWJHSWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0T1Rad2VDQXRNVEk0Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxelkybHpjMjl5Y3lCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhNVEp3ZUNBdE1USTRjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFqYkdsd1ltOWhjbVFnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1USTRjSGdnTFRFeU9IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZMjl3ZVNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhORFJ3ZUNBdE1USTRjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFqYjI1MFlXTjBJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFMk1IQjRJQzB4TWpod2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXbHRZV2RsSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURTNObkI0SUMweE1qaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWFpwWkdWdklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEU1TW5CNElDMHhNamh3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhOamNtbHdkQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweU1EaHdlQ0F0TVRJNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWpiRzl6WlNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMDRNSEI0SUMweE1qaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV05zYjNObGRHaHBZMnNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE9UWndlQ0F0TVRJNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWhiR1Z5ZENCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklEQndlQ0F0TVRRMGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXBibVp2SUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURTJjSGdnTFRFME5IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RibTkwYVdObElIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVE15Y0hnZ0xURTBOSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0YUdWc2NDQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzAwT0hCNElDMHhORFJ3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdOb1pXTnJJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRZMGNIZ2dMVEUwTkhCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFluVnNiR1YwSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUZ3djSGdnTFRFME5IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RjbUZrYVc4dGIyWm1JSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRrMmNIZ2dMVEUwTkhCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGNtRmthVzh0YjI0Z2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVEV5Y0hnZ0xURTBOSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0Y0dsdUxYY2dlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRJNGNIZ2dMVEUwTkhCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGNHbHVMWE1nZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1UUTBjSGdnTFRFME5IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RjR3hoZVNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklEQndlQ0F0TVRZd2NIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXdZWFZ6WlNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhObkI0SUMweE5qQndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWE5sWldzdGJtVjRkQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwek1uQjRJQzB4TmpCd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYTmxaV3N0Y0hKbGRpQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzAwT0hCNElDMHhOakJ3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhObFpXc3RaVzVrSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUWTBjSGdnTFRFMk1IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RjMlZsYXkxbWFYSnpkQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwNE1IQjRJQzB4TmpCd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYTjBiM0FnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE9UWndlQ0F0TVRZd2NIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWxhbVZqZENCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhNVEp3ZUNBdE1UWXdjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzEyYjJ4MWJXVXRiMlptSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURXlPSEI0SUMweE5qQndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWFp2YkhWdFpTMXZiaUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE5EUndlQ0F0TVRZd2NIZzdJSDFjWEc1Y0lpd2dYQ0pjSWwwcE8xeHVMeThnUlhod2IzSjBjMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JsZUhCdmNuUnpPMXh1SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1Y2JpOHFYRzRnSUUxSlZDQk1hV05sYm5ObElHaDBkSEE2THk5M2QzY3ViM0JsYm5OdmRYSmpaUzV2Y21jdmJHbGpaVzV6WlhNdmJXbDBMV3hwWTJWdWMyVXVjR2h3WEc0Z0lFRjFkR2h2Y2lCVWIySnBZWE1nUzI5d2NHVnljeUJBYzI5cmNtRmNiaW92WEc0dkx5QmpjM01nWW1GelpTQmpiMlJsTENCcGJtcGxZM1JsWkNCaWVTQjBhR1VnWTNOekxXeHZZV1JsY2x4dUx5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElHWjFibU10Ym1GdFpYTmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdLSFZ6WlZOdmRYSmpaVTFoY0NrZ2UxeHVJQ0IyWVhJZ2JHbHpkQ0E5SUZ0ZE95QXZMeUJ5WlhSMWNtNGdkR2hsSUd4cGMzUWdiMllnYlc5a2RXeGxjeUJoY3lCamMzTWdjM1J5YVc1blhHNWNiaUFnYkdsemRDNTBiMU4wY21sdVp5QTlJR1oxYm1OMGFXOXVJSFJ2VTNSeWFXNW5LQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG0xaGNDaG1kVzVqZEdsdmJpQW9hWFJsYlNrZ2UxeHVJQ0FnSUNBZ2RtRnlJR052Ym5SbGJuUWdQU0JqYzNOWGFYUm9UV0Z3Y0dsdVoxUnZVM1J5YVc1bktHbDBaVzBzSUhWelpWTnZkWEpqWlUxaGNDazdYRzVjYmlBZ0lDQWdJR2xtSUNocGRHVnRXekpkS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCY0lrQnRaV1JwWVNCY0lpNWpiMjVqWVhRb2FYUmxiVnN5WFN3Z1hDSWdlMXdpS1M1amIyNWpZWFFvWTI5dWRHVnVkQ3dnWENKOVhDSXBPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZMjl1ZEdWdWREdGNiaUFnSUNCOUtTNXFiMmx1S0NjbktUdGNiaUFnZlRzZ0x5OGdhVzF3YjNKMElHRWdiR2x6ZENCdlppQnRiMlIxYkdWeklHbHVkRzhnZEdobElHeHBjM1JjYmlBZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElHWjFibU10Ym1GdFpYTmNibHh1WEc0Z0lHeHBjM1F1YVNBOUlHWjFibU4wYVc5dUlDaHRiMlIxYkdWekxDQnRaV1JwWVZGMVpYSjVMQ0JrWldSMWNHVXBJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JRzF2WkhWc1pYTWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRjR0Z5WVcwdGNtVmhjM05wWjI1Y2JpQWdJQ0FnSUcxdlpIVnNaWE1nUFNCYlcyNTFiR3dzSUcxdlpIVnNaWE1zSUNjblhWMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RtRnlJR0ZzY21WaFpIbEpiWEJ2Y25SbFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlDQWdJR2xtSUNoa1pXUjFjR1VwSUh0Y2JpQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVWdjSEpsWm1WeUxXUmxjM1J5ZFdOMGRYSnBibWRjYmlBZ0lDQWdJQ0FnZG1GeUlHbGtJRDBnZEdocGMxdHBYVnN3WFR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYVdRZ0lUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR0ZzY21WaFpIbEpiWEJ2Y25SbFpFMXZaSFZzWlhOYmFXUmRJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHWnZjaUFvZG1GeUlGOXBJRDBnTURzZ1gya2dQQ0J0YjJSMWJHVnpMbXhsYm1kMGFEc2dYMmtyS3lrZ2UxeHVJQ0FnSUNBZ2RtRnlJR2wwWlcwZ1BTQmJYUzVqYjI1allYUW9iVzlrZFd4bGMxdGZhVjBwTzF4dVhHNGdJQ0FnSUNCcFppQW9aR1ZrZFhCbElDWW1JR0ZzY21WaFpIbEpiWEJ2Y25SbFpFMXZaSFZzWlhOYmFYUmxiVnN3WFYwcElIdGNiaUFnSUNBZ0lDQWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJRzV2TFdOdmJuUnBiblZsWEc0Z0lDQWdJQ0FnSUdOdmJuUnBiblZsTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcFppQW9iV1ZrYVdGUmRXVnllU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9JV2wwWlcxYk1sMHBJSHRjYmlBZ0lDQWdJQ0FnSUNCcGRHVnRXekpkSUQwZ2JXVmthV0ZSZFdWeWVUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0JwZEdWdFd6SmRJRDBnWENKY0lpNWpiMjVqWVhRb2JXVmthV0ZSZFdWeWVTd2dYQ0lnWVc1a0lGd2lLUzVqYjI1allYUW9hWFJsYlZzeVhTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYkdsemRDNXdkWE5vS0dsMFpXMHBPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0J5WlhSMWNtNGdiR2x6ZER0Y2JuMDdYRzVjYm1aMWJtTjBhVzl1SUdOemMxZHBkR2hOWVhCd2FXNW5WRzlUZEhKcGJtY29hWFJsYlN3Z2RYTmxVMjkxY21ObFRXRndLU0I3WEc0Z0lIWmhjaUJqYjI1MFpXNTBJRDBnYVhSbGJWc3hYU0I4ZkNBbkp6c2dMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJSEJ5WldabGNpMWtaWE4wY25WamRIVnlhVzVuWEc1Y2JpQWdkbUZ5SUdOemMwMWhjSEJwYm1jZ1BTQnBkR1Z0V3pOZE8xeHVYRzRnSUdsbUlDZ2hZM056VFdGd2NHbHVaeWtnZTF4dUlDQWdJSEpsZEhWeWJpQmpiMjUwWlc1ME8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0hWelpWTnZkWEpqWlUxaGNDQW1KaUIwZVhCbGIyWWdZblJ2WVNBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJSFpoY2lCemIzVnlZMlZOWVhCd2FXNW5JRDBnZEc5RGIyMXRaVzUwS0dOemMwMWhjSEJwYm1jcE8xeHVJQ0FnSUhaaGNpQnpiM1Z5WTJWVlVreHpJRDBnWTNOelRXRndjR2x1Wnk1emIzVnlZMlZ6TG0xaGNDaG1kVzVqZEdsdmJpQW9jMjkxY21ObEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1hDSXZLaU1nYzI5MWNtTmxWVkpNUFZ3aUxtTnZibU5oZENoamMzTk5ZWEJ3YVc1bkxuTnZkWEpqWlZKdmIzUWdmSHdnSnljcExtTnZibU5oZENoemIzVnlZMlVzSUZ3aUlDb3ZYQ0lwTzF4dUlDQWdJSDBwTzF4dUlDQWdJSEpsZEhWeWJpQmJZMjl1ZEdWdWRGMHVZMjl1WTJGMEtITnZkWEpqWlZWU1RITXBMbU52Ym1OaGRDaGJjMjkxY21ObFRXRndjR2x1WjEwcExtcHZhVzRvSjF4Y2JpY3BPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJRnRqYjI1MFpXNTBYUzVxYjJsdUtDZGNYRzRuS1R0Y2JuMGdMeThnUVdSaGNIUmxaQ0JtY205dElHTnZiblpsY25RdGMyOTFjbU5sTFcxaGNDQW9UVWxVS1Z4dVhHNWNibVoxYm1OMGFXOXVJSFJ2UTI5dGJXVnVkQ2h6YjNWeVkyVk5ZWEFwSUh0Y2JpQWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJRzV2TFhWdVpHVm1YRzRnSUhaaGNpQmlZWE5sTmpRZ1BTQmlkRzloS0hWdVpYTmpZWEJsS0dWdVkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoS1UwOU9Mbk4wY21sdVoybG1lU2h6YjNWeVkyVk5ZWEFwS1NrcE8xeHVJQ0IyWVhJZ1pHRjBZU0E5SUZ3aWMyOTFjbU5sVFdGd2NHbHVaMVZTVEQxa1lYUmhPbUZ3Y0d4cFkyRjBhVzl1TDJwemIyNDdZMmhoY25ObGREMTFkR1l0T0R0aVlYTmxOalFzWENJdVkyOXVZMkYwS0dKaGMyVTJOQ2s3WEc0Z0lISmxkSFZ5YmlCY0lpOHFJeUJjSWk1amIyNWpZWFFvWkdGMFlTd2dYQ0lnS2k5Y0lpazdYRzU5SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z0tIVnliQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQnBaaUFvSVc5d2RHbHZibk1wSUh0Y2JpQWdJQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzF1WlhoMExXeHBibVVnYm04dGNHRnlZVzB0Y21WaGMzTnBaMjVjYmlBZ0lDQnZjSFJwYjI1eklEMGdlMzA3WEc0Z0lIMGdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJRzV2TFhWdVpHVnljMk52Y21VdFpHRnVaMnhsTENCdWJ5MXdZWEpoYlMxeVpXRnpjMmxuYmx4dVhHNWNiaUFnZFhKc0lEMGdkWEpzSUNZbUlIVnliQzVmWDJWelRXOWtkV3hsSUQ4Z2RYSnNMbVJsWm1GMWJIUWdPaUIxY213N1hHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCMWNtd2dJVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFZ5YkR0Y2JpQWdmU0F2THlCSlppQjFjbXdnYVhNZ1lXeHlaV0ZrZVNCM2NtRndjR1ZrSUdsdUlIRjFiM1JsY3l3Z2NtVnRiM1psSUhSb1pXMWNibHh1WEc0Z0lHbG1JQ2d2WGxzblhDSmRMaXBiSjF3aVhTUXZMblJsYzNRb2RYSnNLU2tnZTF4dUlDQWdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J1Ynkxd1lYSmhiUzF5WldGemMybG5ibHh1SUNBZ0lIVnliQ0E5SUhWeWJDNXpiR2xqWlNneExDQXRNU2s3WEc0Z0lIMWNibHh1SUNCcFppQW9iM0IwYVc5dWN5NW9ZWE5vS1NCN1hHNGdJQ0FnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0Ym1WNGRDMXNhVzVsSUc1dkxYQmhjbUZ0TFhKbFlYTnphV2R1WEc0Z0lDQWdkWEpzSUNzOUlHOXdkR2x2Ym5NdWFHRnphRHRjYmlBZ2ZTQXZMeUJUYUc5MWJHUWdkWEpzSUdKbElIZHlZWEJ3WldRL1hHNGdJQzh2SUZObFpTQm9kSFJ3Y3pvdkwyUnlZV1owY3k1amMzTjNaeTV2Y21jdlkzTnpMWFpoYkhWbGN5MHpMeU4xY214elhHNWNibHh1SUNCcFppQW9MMXRjSWljb0tTQmNYSFJjWEc1ZEx5NTBaWE4wS0hWeWJDa2dmSHdnYjNCMGFXOXVjeTV1WldWa1VYVnZkR1Z6S1NCN1hHNGdJQ0FnY21WMGRYSnVJRndpWEZ4Y0lsd2lMbU52Ym1OaGRDaDFjbXd1Y21Wd2JHRmpaU2d2WENJdlp5d2dKMXhjWEZ4Y0lpY3BMbkpsY0d4aFkyVW9MMXhjYmk5bkxDQW5YRnhjWEc0bktTd2dYQ0pjWEZ3aVhDSXBPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSFZ5YkR0Y2JuMDdJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVjYm5aaGNpQnBjMDlzWkVsRklEMGdablZ1WTNScGIyNGdhWE5QYkdSSlJTZ3BJSHRjYmlBZ2RtRnlJRzFsYlc4N1hHNGdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQnRaVzF2Y21sNlpTZ3BJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JRzFsYlc4Z1BUMDlJQ2QxYm1SbFptbHVaV1FuS1NCN1hHNGdJQ0FnSUNBdkx5QlVaWE4wSUdadmNpQkpSU0E4UFNBNUlHRnpJSEJ5YjNCdmMyVmtJR0o1SUVKeWIzZHpaWEpvWVdOcmMxeHVJQ0FnSUNBZ0x5OGdRSE5sWlNCb2RIUndPaTh2WW5KdmQzTmxjbWhoWTJ0ekxtTnZiUzhqYUdGamF5MWxOekZrT0RZNU1tWTJOVE16TkRFM00yWmxaVGN4TldNeU1qSmpZamd3TlZ4dUlDQWdJQ0FnTHk4Z1ZHVnpkSE1nWm05eUlHVjRhWE4wWlc1alpTQnZaaUJ6ZEdGdVpHRnlaQ0JuYkc5aVlXeHpJR2x6SUhSdklHRnNiRzkzSUhOMGVXeGxMV3h2WVdSbGNseHVJQ0FnSUNBZ0x5OGdkRzhnYjNCbGNtRjBaU0JqYjNKeVpXTjBiSGtnYVc1MGJ5QnViMjR0YzNSaGJtUmhjbVFnWlc1MmFYSnZibTFsYm5SelhHNGdJQ0FnSUNBdkx5QkFjMlZsSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5M1pXSndZV05yTFdOdmJuUnlhV0l2YzNSNWJHVXRiRzloWkdWeUwybHpjM1ZsY3k4eE56ZGNiaUFnSUNBZ0lHMWxiVzhnUFNCQ2IyOXNaV0Z1S0hkcGJtUnZkeUFtSmlCa2IyTjFiV1Z1ZENBbUppQmtiMk4xYldWdWRDNWhiR3dnSmlZZ0lYZHBibVJ2ZHk1aGRHOWlLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2JXVnRienRjYmlBZ2ZUdGNibjBvS1R0Y2JseHVkbUZ5SUdkbGRGUmhjbWRsZENBOUlHWjFibU4wYVc5dUlHZGxkRlJoY21kbGRDZ3BJSHRjYmlBZ2RtRnlJRzFsYlc4Z1BTQjdmVHRjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUcxbGJXOXlhWHBsS0hSaGNtZGxkQ2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnYldWdGIxdDBZWEpuWlhSZElEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUNBZ2RtRnlJSE4wZVd4bFZHRnlaMlYwSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWgwWVhKblpYUXBPeUF2THlCVGNHVmphV0ZzSUdOaGMyVWdkRzhnY21WMGRYSnVJR2hsWVdRZ2IyWWdhV1p5WVcxbElHbHVjM1JsWVdRZ2IyWWdhV1p5WVcxbElHbDBjMlZzWmx4dVhHNGdJQ0FnSUNCcFppQW9kMmx1Wkc5M0xraFVUVXhKUm5KaGJXVkZiR1Z0Wlc1MElDWW1JSE4wZVd4bFZHRnlaMlYwSUdsdWMzUmhibU5sYjJZZ2QybHVaRzkzTGtoVVRVeEpSbkpoYldWRmJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OGdWR2hwY3lCM2FXeHNJSFJvY205M0lHRnVJR1Y0WTJWd2RHbHZiaUJwWmlCaFkyTmxjM01nZEc4Z2FXWnlZVzFsSUdseklHSnNiMk5yWldSY2JpQWdJQ0FnSUNBZ0lDQXZMeUJrZFdVZ2RHOGdZM0p2YzNNdGIzSnBaMmx1SUhKbGMzUnlhV04wYVc5dWMxeHVJQ0FnSUNBZ0lDQWdJSE4wZVd4bFZHRnlaMlYwSUQwZ2MzUjViR1ZVWVhKblpYUXVZMjl1ZEdWdWRFUnZZM1Z0Wlc1MExtaGxZV1E3WEc0Z0lDQWdJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0F2THlCcGMzUmhibUoxYkNCcFoyNXZjbVVnYm1WNGRGeHVJQ0FnSUNBZ0lDQWdJSE4wZVd4bFZHRnlaMlYwSUQwZ2JuVnNiRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCdFpXMXZXM1JoY21kbGRGMGdQU0J6ZEhsc1pWUmhjbWRsZER0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiV1Z0YjF0MFlYSm5aWFJkTzF4dUlDQjlPMXh1ZlNncE8xeHVYRzUyWVhJZ2MzUjViR1Z6U1c1RWIyMGdQU0JiWFR0Y2JseHVablZ1WTNScGIyNGdaMlYwU1c1a1pYaENlVWxrWlc1MGFXWnBaWElvYVdSbGJuUnBabWxsY2lrZ2UxeHVJQ0IyWVhJZ2NtVnpkV3gwSUQwZ0xURTdYRzVjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnpkSGxzWlhOSmJrUnZiUzVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUdsbUlDaHpkSGxzWlhOSmJrUnZiVnRwWFM1cFpHVnVkR2xtYVdWeUlEMDlQU0JwWkdWdWRHbG1hV1Z5S1NCN1hHNGdJQ0FnSUNCeVpYTjFiSFFnUFNCcE8xeHVJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSEpsYzNWc2REdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2JXOWtkV3hsYzFSdlJHOXRLR3hwYzNRc0lHOXdkR2x2Ym5NcElIdGNiaUFnZG1GeUlHbGtRMjkxYm5STllYQWdQU0I3ZlR0Y2JpQWdkbUZ5SUdsa1pXNTBhV1pwWlhKeklEMGdXMTA3WEc1Y2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzYVhOMExteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdkbUZ5SUdsMFpXMGdQU0JzYVhOMFcybGRPMXh1SUNBZ0lIWmhjaUJwWkNBOUlHOXdkR2x2Ym5NdVltRnpaU0EvSUdsMFpXMWJNRjBnS3lCdmNIUnBiMjV6TG1KaGMyVWdPaUJwZEdWdFd6QmRPMXh1SUNBZ0lIWmhjaUJqYjNWdWRDQTlJR2xrUTI5MWJuUk5ZWEJiYVdSZElIeDhJREE3WEc0Z0lDQWdkbUZ5SUdsa1pXNTBhV1pwWlhJZ1BTQmNJbHdpTG1OdmJtTmhkQ2hwWkN3Z1hDSWdYQ0lwTG1OdmJtTmhkQ2hqYjNWdWRDazdYRzRnSUNBZ2FXUkRiM1Z1ZEUxaGNGdHBaRjBnUFNCamIzVnVkQ0FySURFN1hHNGdJQ0FnZG1GeUlHbHVaR1Y0SUQwZ1oyVjBTVzVrWlhoQ2VVbGtaVzUwYVdacFpYSW9hV1JsYm5ScFptbGxjaWs3WEc0Z0lDQWdkbUZ5SUc5aWFpQTlJSHRjYmlBZ0lDQWdJR056Y3pvZ2FYUmxiVnN4WFN4Y2JpQWdJQ0FnSUcxbFpHbGhPaUJwZEdWdFd6SmRMRnh1SUNBZ0lDQWdjMjkxY21ObFRXRndPaUJwZEdWdFd6TmRYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHbG1JQ2hwYm1SbGVDQWhQVDBnTFRFcElIdGNiaUFnSUNBZ0lITjBlV3hsYzBsdVJHOXRXMmx1WkdWNFhTNXlaV1psY21WdVkyVnpLeXM3WEc0Z0lDQWdJQ0J6ZEhsc1pYTkpia1J2YlZ0cGJtUmxlRjB1ZFhCa1lYUmxjaWh2WW1vcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J6ZEhsc1pYTkpia1J2YlM1d2RYTm9LSHRjYmlBZ0lDQWdJQ0FnYVdSbGJuUnBabWxsY2pvZ2FXUmxiblJwWm1sbGNpeGNiaUFnSUNBZ0lDQWdkWEJrWVhSbGNqb2dZV1JrVTNSNWJHVW9iMkpxTENCdmNIUnBiMjV6S1N4Y2JpQWdJQ0FnSUNBZ2NtVm1aWEpsYm1ObGN6b2dNVnh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1JsYm5ScFptbGxjbk11Y0hWemFDaHBaR1Z1ZEdsbWFXVnlLVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJwWkdWdWRHbG1hV1Z5Y3p0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYVc1elpYSjBVM1I1YkdWRmJHVnRaVzUwS0c5d2RHbHZibk1wSUh0Y2JpQWdkbUZ5SUhOMGVXeGxJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25jM1I1YkdVbktUdGNiaUFnZG1GeUlHRjBkSEpwWW5WMFpYTWdQU0J2Y0hScGIyNXpMbUYwZEhKcFluVjBaWE1nZkh3Z2UzMDdYRzVjYmlBZ2FXWWdLSFI1Y0dWdlppQmhkSFJ5YVdKMWRHVnpMbTV2Ym1ObElEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUhaaGNpQnViMjVqWlNBOUlIUjVjR1Z2WmlCZlgzZGxZbkJoWTJ0ZmJtOXVZMlZmWHlBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlCZlgzZGxZbkJoWTJ0ZmJtOXVZMlZmWHlBNklHNTFiR3c3WEc1Y2JpQWdJQ0JwWmlBb2JtOXVZMlVwSUh0Y2JpQWdJQ0FnSUdGMGRISnBZblYwWlhNdWJtOXVZMlVnUFNCdWIyNWpaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JQWW1wbFkzUXVhMlY1Y3loaGRIUnlhV0oxZEdWektTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaHJaWGtwSUh0Y2JpQWdJQ0J6ZEhsc1pTNXpaWFJCZEhSeWFXSjFkR1VvYTJWNUxDQmhkSFJ5YVdKMWRHVnpXMnRsZVYwcE8xeHVJQ0I5S1R0Y2JseHVJQ0JwWmlBb2RIbHdaVzltSUc5d2RHbHZibk11YVc1elpYSjBJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ2IzQjBhVzl1Y3k1cGJuTmxjblFvYzNSNWJHVXBPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSFpoY2lCMFlYSm5aWFFnUFNCblpYUlVZWEpuWlhRb2IzQjBhVzl1Y3k1cGJuTmxjblFnZkh3Z0oyaGxZV1FuS1R0Y2JseHVJQ0FnSUdsbUlDZ2hkR0Z5WjJWMEtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hDSkRiM1ZzWkc0bmRDQm1hVzVrSUdFZ2MzUjViR1VnZEdGeVoyVjBMaUJVYUdseklIQnliMkpoWW14NUlHMWxZVzV6SUhSb1lYUWdkR2hsSUhaaGJIVmxJR1p2Y2lCMGFHVWdKMmx1YzJWeWRDY2djR0Z5WVcxbGRHVnlJR2x6SUdsdWRtRnNhV1F1WENJcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhSaGNtZGxkQzVoY0hCbGJtUkRhR2xzWkNoemRIbHNaU2s3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYzNSNWJHVTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlISmxiVzkyWlZOMGVXeGxSV3hsYldWdWRDaHpkSGxzWlNrZ2UxeHVJQ0F2THlCcGMzUmhibUoxYkNCcFoyNXZjbVVnYVdaY2JpQWdhV1lnS0hOMGVXeGxMbkJoY21WdWRFNXZaR1VnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJSDFjYmx4dUlDQnpkSGxzWlM1d1lYSmxiblJPYjJSbExuSmxiVzkyWlVOb2FXeGtLSE4wZVd4bEtUdGNibjFjYmk4cUlHbHpkR0Z1WW5Wc0lHbG5ibTl5WlNCdVpYaDBJQ0FxTDF4dVhHNWNiblpoY2lCeVpYQnNZV05sVkdWNGRDQTlJR1oxYm1OMGFXOXVJSEpsY0d4aFkyVlVaWGgwS0NrZ2UxeHVJQ0IyWVhJZ2RHVjRkRk4wYjNKbElEMGdXMTA3WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCeVpYQnNZV05sS0dsdVpHVjRMQ0J5WlhCc1lXTmxiV1Z1ZENrZ2UxeHVJQ0FnSUhSbGVIUlRkRzl5WlZ0cGJtUmxlRjBnUFNCeVpYQnNZV05sYldWdWREdGNiaUFnSUNCeVpYUjFjbTRnZEdWNGRGTjBiM0psTG1acGJIUmxjaWhDYjI5c1pXRnVLUzVxYjJsdUtDZGNYRzRuS1R0Y2JpQWdmVHRjYm4wb0tUdGNibHh1Wm5WdVkzUnBiMjRnWVhCd2JIbFViMU5wYm1kc1pYUnZibFJoWnloemRIbHNaU3dnYVc1a1pYZ3NJSEpsYlc5MlpTd2diMkpxS1NCN1hHNGdJSFpoY2lCamMzTWdQU0J5WlcxdmRtVWdQeUFuSnlBNklHOWlhaTV0WldScFlTQS9JRndpUUcxbFpHbGhJRndpTG1OdmJtTmhkQ2h2WW1vdWJXVmthV0VzSUZ3aUlIdGNJaWt1WTI5dVkyRjBLRzlpYWk1amMzTXNJRndpZlZ3aUtTQTZJRzlpYWk1amMzTTdJQzh2SUVadmNpQnZiR1FnU1VWY2JseHVJQ0F2S2lCcGMzUmhibUoxYkNCcFoyNXZjbVVnYVdZZ0lDb3ZYRzVjYmlBZ2FXWWdLSE4wZVd4bExuTjBlV3hsVTJobFpYUXBJSHRjYmlBZ0lDQnpkSGxzWlM1emRIbHNaVk5vWldWMExtTnpjMVJsZUhRZ1BTQnlaWEJzWVdObFZHVjRkQ2hwYm1SbGVDd2dZM056S1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCMllYSWdZM056VG05a1pTQTlJR1J2WTNWdFpXNTBMbU55WldGMFpWUmxlSFJPYjJSbEtHTnpjeWs3WEc0Z0lDQWdkbUZ5SUdOb2FXeGtUbTlrWlhNZ1BTQnpkSGxzWlM1amFHbHNaRTV2WkdWek8xeHVYRzRnSUNBZ2FXWWdLR05vYVd4a1RtOWtaWE5iYVc1a1pYaGRLU0I3WEc0Z0lDQWdJQ0J6ZEhsc1pTNXlaVzF2ZG1WRGFHbHNaQ2hqYUdsc1pFNXZaR1Z6VzJsdVpHVjRYU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0dOb2FXeGtUbTlrWlhNdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNCemRIbHNaUzVwYm5ObGNuUkNaV1p2Y21Vb1kzTnpUbTlrWlN3Z1kyaHBiR1JPYjJSbGMxdHBibVJsZUYwcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J6ZEhsc1pTNWhjSEJsYm1SRGFHbHNaQ2hqYzNOT2IyUmxLVHRjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWVhCd2JIbFViMVJoWnloemRIbHNaU3dnYjNCMGFXOXVjeXdnYjJKcUtTQjdYRzRnSUhaaGNpQmpjM01nUFNCdlltb3VZM056TzF4dUlDQjJZWElnYldWa2FXRWdQU0J2WW1vdWJXVmthV0U3WEc0Z0lIWmhjaUJ6YjNWeVkyVk5ZWEFnUFNCdlltb3VjMjkxY21ObFRXRndPMXh1WEc0Z0lHbG1JQ2h0WldScFlTa2dlMXh1SUNBZ0lITjBlV3hsTG5ObGRFRjBkSEpwWW5WMFpTZ25iV1ZrYVdFbkxDQnRaV1JwWVNrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2MzUjViR1V1Y21WdGIzWmxRWFIwY21saWRYUmxLQ2R0WldScFlTY3BPMXh1SUNCOVhHNWNiaUFnYVdZZ0tITnZkWEpqWlUxaGNDQW1KaUJpZEc5aEtTQjdYRzRnSUNBZ1kzTnpJQ3M5SUZ3aVhGeHVMeW9qSUhOdmRYSmpaVTFoY0hCcGJtZFZVa3c5WkdGMFlUcGhjSEJzYVdOaGRHbHZiaTlxYzI5dU8ySmhjMlUyTkN4Y0lpNWpiMjVqWVhRb1luUnZZU2gxYm1WelkyRndaU2hsYm1OdlpHVlZVa2xEYjIxd2IyNWxiblFvU2xOUFRpNXpkSEpwYm1kcFpua29jMjkxY21ObFRXRndLU2twS1N3Z1hDSWdLaTljSWlrN1hHNGdJSDBnTHk4Z1JtOXlJRzlzWkNCSlJWeHVYRzRnSUM4cUlHbHpkR0Z1WW5Wc0lHbG5ibTl5WlNCcFppQWdLaTljYmx4dVhHNGdJR2xtSUNoemRIbHNaUzV6ZEhsc1pWTm9aV1YwS1NCN1hHNGdJQ0FnYzNSNWJHVXVjM1I1YkdWVGFHVmxkQzVqYzNOVVpYaDBJRDBnWTNOek8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lIZG9hV3hsSUNoemRIbHNaUzVtYVhKemRFTm9hV3hrS1NCN1hHNGdJQ0FnSUNCemRIbHNaUzV5WlcxdmRtVkRhR2xzWkNoemRIbHNaUzVtYVhKemRFTm9hV3hrS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEhsc1pTNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaGpjM01wS1R0Y2JpQWdmVnh1ZlZ4dVhHNTJZWElnYzJsdVoyeGxkRzl1SUQwZ2JuVnNiRHRjYm5aaGNpQnphVzVuYkdWMGIyNURiM1Z1ZEdWeUlEMGdNRHRjYmx4dVpuVnVZM1JwYjI0Z1lXUmtVM1I1YkdVb2IySnFMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lIWmhjaUJ6ZEhsc1pUdGNiaUFnZG1GeUlIVndaR0YwWlR0Y2JpQWdkbUZ5SUhKbGJXOTJaVHRjYmx4dUlDQnBaaUFvYjNCMGFXOXVjeTV6YVc1bmJHVjBiMjRwSUh0Y2JpQWdJQ0IyWVhJZ2MzUjViR1ZKYm1SbGVDQTlJSE5wYm1kc1pYUnZia052ZFc1MFpYSXJLenRjYmlBZ0lDQnpkSGxzWlNBOUlITnBibWRzWlhSdmJpQjhmQ0FvYzJsdVoyeGxkRzl1SUQwZ2FXNXpaWEowVTNSNWJHVkZiR1Z0Wlc1MEtHOXdkR2x2Ym5NcEtUdGNiaUFnSUNCMWNHUmhkR1VnUFNCaGNIQnNlVlJ2VTJsdVoyeGxkRzl1VkdGbkxtSnBibVFvYm5Wc2JDd2djM1I1YkdVc0lITjBlV3hsU1c1a1pYZ3NJR1poYkhObEtUdGNiaUFnSUNCeVpXMXZkbVVnUFNCaGNIQnNlVlJ2VTJsdVoyeGxkRzl1VkdGbkxtSnBibVFvYm5Wc2JDd2djM1I1YkdVc0lITjBlV3hsU1c1a1pYZ3NJSFJ5ZFdVcE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lITjBlV3hsSUQwZ2FXNXpaWEowVTNSNWJHVkZiR1Z0Wlc1MEtHOXdkR2x2Ym5NcE8xeHVJQ0FnSUhWd1pHRjBaU0E5SUdGd2NHeDVWRzlVWVdjdVltbHVaQ2h1ZFd4c0xDQnpkSGxzWlN3Z2IzQjBhVzl1Y3lrN1hHNWNiaUFnSUNCeVpXMXZkbVVnUFNCbWRXNWpkR2x2YmlCeVpXMXZkbVVvS1NCN1hHNGdJQ0FnSUNCeVpXMXZkbVZUZEhsc1pVVnNaVzFsYm5Rb2MzUjViR1VwTzF4dUlDQWdJSDA3WEc0Z0lIMWNibHh1SUNCMWNHUmhkR1VvYjJKcUtUdGNiaUFnY21WMGRYSnVJR1oxYm1OMGFXOXVJSFZ3WkdGMFpWTjBlV3hsS0c1bGQwOWlhaWtnZTF4dUlDQWdJR2xtSUNodVpYZFBZbW9wSUh0Y2JpQWdJQ0FnSUdsbUlDaHVaWGRQWW1vdVkzTnpJRDA5UFNCdlltb3VZM056SUNZbUlHNWxkMDlpYWk1dFpXUnBZU0E5UFQwZ2IySnFMbTFsWkdsaElDWW1JRzVsZDA5aWFpNXpiM1Z5WTJWTllYQWdQVDA5SUc5aWFpNXpiM1Z5WTJWTllYQXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0IxY0dSaGRHVW9iMkpxSUQwZ2JtVjNUMkpxS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjbVZ0YjNabEtDazdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJQ2hzYVhOMExDQnZjSFJwYjI1ektTQjdYRzRnSUc5d2RHbHZibk1nUFNCdmNIUnBiMjV6SUh4OElIdDlPeUF2THlCR2IzSmpaU0J6YVc1bmJHVXRkR0ZuSUhOdmJIVjBhVzl1SUc5dUlFbEZOaTA1TENCM2FHbGphQ0JvWVhNZ1lTQm9ZWEprSUd4cGJXbDBJRzl1SUhSb1pTQWpJRzltSUR4emRIbHNaVDVjYmlBZ0x5OGdkR0ZuY3lCcGRDQjNhV3hzSUdGc2JHOTNJRzl1SUdFZ2NHRm5aVnh1WEc0Z0lHbG1JQ2doYjNCMGFXOXVjeTV6YVc1bmJHVjBiMjRnSmlZZ2RIbHdaVzltSUc5d2RHbHZibk11YzJsdVoyeGxkRzl1SUNFOVBTQW5ZbTl2YkdWaGJpY3BJSHRjYmlBZ0lDQnZjSFJwYjI1ekxuTnBibWRzWlhSdmJpQTlJR2x6VDJ4a1NVVW9LVHRjYmlBZ2ZWeHVYRzRnSUd4cGMzUWdQU0JzYVhOMElIeDhJRnRkTzF4dUlDQjJZWElnYkdGemRFbGtaVzUwYVdacFpYSnpJRDBnYlc5a2RXeGxjMVJ2Ukc5dEtHeHBjM1FzSUc5d2RHbHZibk1wTzF4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0Z2RYQmtZWFJsS0c1bGQweHBjM1FwSUh0Y2JpQWdJQ0J1WlhkTWFYTjBJRDBnYm1WM1RHbHpkQ0I4ZkNCYlhUdGNibHh1SUNBZ0lHbG1JQ2hQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5MbU5oYkd3b2JtVjNUR2x6ZENrZ0lUMDlJQ2RiYjJKcVpXTjBJRUZ5Y21GNVhTY3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNWNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHeGhjM1JKWkdWdWRHbG1hV1Z5Y3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdkbUZ5SUdsa1pXNTBhV1pwWlhJZ1BTQnNZWE4wU1dSbGJuUnBabWxsY25OYmFWMDdYRzRnSUNBZ0lDQjJZWElnYVc1a1pYZ2dQU0JuWlhSSmJtUmxlRUo1U1dSbGJuUnBabWxsY2locFpHVnVkR2xtYVdWeUtUdGNiaUFnSUNBZ0lITjBlV3hsYzBsdVJHOXRXMmx1WkdWNFhTNXlaV1psY21WdVkyVnpMUzA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkbUZ5SUc1bGQweGhjM1JKWkdWdWRHbG1hV1Z5Y3lBOUlHMXZaSFZzWlhOVWIwUnZiU2h1WlhkTWFYTjBMQ0J2Y0hScGIyNXpLVHRjYmx4dUlDQWdJR1p2Y2lBb2RtRnlJRjlwSUQwZ01Ec2dYMmtnUENCc1lYTjBTV1JsYm5ScFptbGxjbk11YkdWdVozUm9PeUJmYVNzcktTQjdYRzRnSUNBZ0lDQjJZWElnWDJsa1pXNTBhV1pwWlhJZ1BTQnNZWE4wU1dSbGJuUnBabWxsY25OYlgybGRPMXh1WEc0Z0lDQWdJQ0IyWVhJZ1gybHVaR1Y0SUQwZ1oyVjBTVzVrWlhoQ2VVbGtaVzUwYVdacFpYSW9YMmxrWlc1MGFXWnBaWElwTzF4dVhHNGdJQ0FnSUNCcFppQW9jM1I1YkdWelNXNUViMjFiWDJsdVpHVjRYUzV5WldabGNtVnVZMlZ6SUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0FnSUhOMGVXeGxjMGx1Ukc5dFcxOXBibVJsZUYwdWRYQmtZWFJsY2lncE8xeHVYRzRnSUNBZ0lDQWdJSE4wZVd4bGMwbHVSRzl0TG5Od2JHbGpaU2hmYVc1a1pYZ3NJREVwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR3hoYzNSSlpHVnVkR2xtYVdWeWN5QTlJRzVsZDB4aGMzUkpaR1Z1ZEdsbWFXVnljenRjYmlBZ2ZUdGNibjA3SWl3aWFXMXdiM0owSUNjdUwybGpiMjV6TG5OamMzTW5PMXh5WEc0aUxDSjJZWElnWVhCcElEMGdjbVZ4ZFdseVpTaGNJaUV1TGk5dWIyUmxYMjF2WkhWc1pYTXZjM1I1YkdVdGJHOWhaR1Z5TDJScGMzUXZjblZ1ZEdsdFpTOXBibXBsWTNSVGRIbHNaWE5KYm5SdlUzUjViR1ZVWVdjdWFuTmNJaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWTI5dWRHVnVkQ0E5SUhKbGNYVnBjbVVvWENJaElTNHVMMjV2WkdWZmJXOWtkV3hsY3k5amMzTXRiRzloWkdWeUwyUnBjM1F2WTJwekxtcHpJUzR1TDI1dlpHVmZiVzlrZFd4bGN5OXlaWE52YkhabExYVnliQzFzYjJGa1pYSXZhVzVrWlhndWFuTWhMaTR2Ym05a1pWOXRiMlIxYkdWekwzTmhjM010Ykc5aFpHVnlMMlJwYzNRdlkycHpMbXB6UDNOdmRYSmpaVTFoY0NFdUwybGpiMjV6TG5OamMzTmNJaWs3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5SbGJuUWdQU0JqYjI1MFpXNTBMbDlmWlhOTmIyUjFiR1VnUHlCamIyNTBaVzUwTG1SbFptRjFiSFFnT2lCamIyNTBaVzUwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdOdmJuUmxiblFnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJsYm5RZ1BTQmJXMjF2WkhWc1pTNXBaQ3dnWTI5dWRHVnVkQ3dnSnlkZFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVkbUZ5SUc5d2RHbHZibk1nUFNCN2ZUdGNibHh1YjNCMGFXOXVjeTVwYm5ObGNuUWdQU0JjSW1obFlXUmNJanRjYm05d2RHbHZibk11YzJsdVoyeGxkRzl1SUQwZ1ptRnNjMlU3WEc1Y2JuWmhjaUIxY0dSaGRHVWdQU0JoY0drb1kyOXVkR1Z1ZEN3Z2IzQjBhVzl1Y3lrN1hHNWNibHh1YVdZZ0tHMXZaSFZzWlM1b2IzUXBJSHRjYmlBZ2FXWWdLQ0ZqYjI1MFpXNTBMbXh2WTJGc2N5QjhmQ0J0YjJSMWJHVXVhRzkwTG1sdWRtRnNhV1JoZEdVcElIdGNiaUFnSUNCMllYSWdhWE5GY1hWaGJFeHZZMkZzY3lBOUlHWjFibU4wYVc5dUlHbHpSWEYxWVd4TWIyTmhiSE1vWVN3Z1lpa2dlMXh1SUNCcFppQW9JV0VnSmlZZ1lpQjhmQ0JoSUNZbUlDRmlLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQjlYRzVjYmlBZ2RtRnlJSEE3WEc1Y2JpQWdabTl5SUNod0lHbHVJR0VwSUh0Y2JpQWdJQ0JwWmlBb1lWdHdYU0FoUFQwZ1lsdHdYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHWnZjaUFvY0NCcGJpQmlLU0I3WEc0Z0lDQWdhV1lnS0NGaFczQmRLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhSeWRXVTdYRzU5TzF4dUlDQWdJSFpoY2lCdmJHUk1iMk5oYkhNZ1BTQmpiMjUwWlc1MExteHZZMkZzY3p0Y2JseHVJQ0FnSUcxdlpIVnNaUzVvYjNRdVlXTmpaWEIwS0Z4dUlDQWdJQ0FnWENJaElTNHVMMjV2WkdWZmJXOWtkV3hsY3k5amMzTXRiRzloWkdWeUwyUnBjM1F2WTJwekxtcHpJUzR1TDI1dlpHVmZiVzlrZFd4bGN5OXlaWE52YkhabExYVnliQzFzYjJGa1pYSXZhVzVrWlhndWFuTWhMaTR2Ym05a1pWOXRiMlIxYkdWekwzTmhjM010Ykc5aFpHVnlMMlJwYzNRdlkycHpMbXB6UDNOdmRYSmpaVTFoY0NFdUwybGpiMjV6TG5OamMzTmNJaXhjYmlBZ0lDQWdJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVkR1Z1ZENBOUlISmxjWFZwY21Vb1hDSWhJUzR1TDI1dlpHVmZiVzlrZFd4bGN5OWpjM010Ykc5aFpHVnlMMlJwYzNRdlkycHpMbXB6SVM0dUwyNXZaR1ZmYlc5a2RXeGxjeTl5WlhOdmJIWmxMWFZ5YkMxc2IyRmtaWEl2YVc1a1pYZ3Vhbk1oTGk0dmJtOWtaVjl0YjJSMWJHVnpMM05oYzNNdGJHOWhaR1Z5TDJScGMzUXZZMnB6TG1welAzTnZkWEpqWlUxaGNDRXVMMmxqYjI1ekxuTmpjM05jSWlrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR1Z1ZENBOUlHTnZiblJsYm5RdVgxOWxjMDF2WkhWc1pTQS9JR052Ym5SbGJuUXVaR1ZtWVhWc2RDQTZJR052Ym5SbGJuUTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJqYjI1MFpXNTBJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJsYm5RZ1BTQmJXMjF2WkhWc1pTNXBaQ3dnWTI5dWRHVnVkQ3dnSnlkZFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doYVhORmNYVmhiRXh2WTJGc2N5aHZiR1JNYjJOaGJITXNJR052Ym5SbGJuUXViRzlqWVd4ektTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzF2WkhWc1pTNW9iM1F1YVc1MllXeHBaR0YwWlNncE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2IyeGtURzlqWVd4eklEMGdZMjl1ZEdWdWRDNXNiMk5oYkhNN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RYQmtZWFJsS0dOdmJuUmxiblFwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ2xjYmlBZ2ZWeHVYRzRnSUcxdlpIVnNaUzVvYjNRdVpHbHpjRzl6WlNobWRXNWpkR2x2YmlncElIdGNiaUFnSUNCMWNHUmhkR1VvS1R0Y2JpQWdmU2s3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdZMjl1ZEdWdWRDNXNiMk5oYkhNZ2ZId2dlMzA3SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnWENKa1lYUmhPbWx0WVdkbEwzQnVaenRpWVhObE5qUXNhVlpDVDFKM01FdEhaMjlCUVVGQlRsTlZhRVZWWjBGQlFWRkJRVUZCUkhkRFFVMUJRVUZFV1ZOVmNqVkJRVUZDVXpKc1ZWZElVbGxVVlhjMldUSTVkRXh0Um10aU1rcHNURzVvZEdOQlFVRkJRVUZCVUVRNU5HTkhSbXBoTWxZd1NVZEtiRm95YkhWUVUweDJkVGM0YVVsSGJHdFFVMHBZVGxVd2QxUllRa1JhVjJod1UwaHdlVnBXVGpaVWJGSnFaVzEwYWs5WFVXbFFlalJMVUVobk5tVkhNWGRpVjFZd1dWTkNOR0pYZUhWamVuQTBVRk5LYUZwSE9XbGFWSEIxWTNwd2RGcFlVbWhNZVVsblpVUndOR0pZUWpCaGVqQnBVVmRTZGxsdFZXZFhSVEZSU1VWT2RtTnRWV2RPVXpReVRGZE5lRTVFU1dkT2VtdDFUVlJaZDA5VVNUQk1RMEY1VFVSRk0weDZRVE5NZWtWNlRGUkJlRTlxUVRKUGFrMDFTVU5CWjBsRFFXZEpRMEZwVUdkdloxQklTbXRhYW5CVFVrVlpaMlZITVhOaWJrMDJZMjFTYlZCVFNtOWtTRkozVDJrNGRtUXpaRE5NYm1ONlRHMDVlVnA1T0hoUFZHczFUSHBCZVV4NlNYbE1XRXByV21reGVtVlhOVEJaV0dkMFltNU5ha2xxTkV0SlEwRTRZMjFTYlU5clVteGpNazU1WVZoQ01HRlhPWFZKU0VwcldtcHdhRmx0T1RGa1JEQnBTV2s0SzBOcFFUaE1NMHByV21wd1UxSkZXU3REYW5kMlpVUndOR0pZUW5SYVdGSm9VR2R2T0ZBemFIZFpWMDV5V2xoUloxcFhOV3RRVTBwNVNXbzRLMjVvZUdjM2QwRkJRVUZTYmxGVk1VSkJRVU40YW5kMk9GbFJWVUZCUVVGQ1l6RktTRkZuUTNWNmFIcHdRVUZCUWtSc1FrMVdSVlZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUo0VlZsWE9VRkJRVUZYV0ZKVFZHeE5RVXd5V2t0RFJVSm5SMUpCZWxWQ2NTOUpiVTlsVWxrclZWQXlNbWR1UTBGd2VrRXdlRUZUZDFkV1UyVmFkM2hPZUdkRFRUQlNPQ3QyWVVWblMyaFNkelJWS3poRlNHdDBMMGd4Y0VObmIzbHZiM1l3YTBGc1JVUkpWRXB4ZEdKcVpsbHZZMGRyVnpnNGMzRXhPSFp6WVhKNVRIbHhjRnB0UzBNM1FVRkJRVGR0VTFWU1FsWklhbUUzVmpCS1dUbDFNa1J4V21ONU5WRmpTakkyZW5KYWJtcHlhekY2Y2tVeldERXZZakV5U0RGMllpc3JLMVF2ZWk5UUwwcEplVkpKUWpoTVNtbFNNMXBwWm5NMFJsVlJabmhEVTFGQ2EwWkxSVk5GYUVreVFVcEphMFIxZFZBeWR6VkJlWFJZVkRCS1dXWTBhMW93UkhZelUzZHBlbEZPUTJkQ1VFUTJhMGhLWkV0MlJWZEJSblpHZDBGWVdUaGtWMloyV205RmREQkRZa0ZOYm5KUk9ISTFTR0pSU1RSSlptSkdOMEl5Ykdvd2VWbE9XR1p5VlV0bk0wZGFVVUpCTUVsUlp6RnBjMkpOVFRkeVZHVkNjelIwTWtzMGFYWTRSekpvVVZSMmMwY3dRbWRSY2pCaWQwWjFWV2RMTTAxSGFrSjZhREp6VUdsQ2EyZDJNek5CV25ObFFsaG5WRFp1T0ZWVFNUVlJVV3RLUTFGclNrTlJjMHhIVUUxRlRpc3dTRk5wZEdGQlR5czRlVzlDUVVGRUwwSnNjRE41UVd4U1FsTmFLeXRXUld0alJreEJTM05JWm1wMVRrWjVWVEZuVlRSQlZFbFpVRkJaWVVSR2JqRmtPV00wVlU5NlNYRk5ha0UwVTB0VFFXOVRTMEZQYVhabldVMTZRbVZUZG5OV2QyMUllVU5FWmsxaVUwSTFjMUJvZVZaaldubzFRWGh3Y21kMGIxaEVkRE13VlZORmFFbFRSV2hKVTBWcVdXOUxaVEYxYWs4dk1IWnNhSE4zY2xsdlZUbFJiMU56UlZOMFJIUXJhbUZvUlVSclltaE1abGsyY2tacGMwaGxhR2cwVDNaNlNESkNXVUZWWTNCbFNISjFPRFJSU1hObmNYUXdORWROVVVwS2FGbEVkRUZaTkZReWRsVkNjalJNWjNWc04yOHJibUUwUkVSRlEwbENhSFpuTkdwM05ucHZPSE5CZEZaalRFVXpaVUZyUTFsYU1IZDVTaTlpYVVWTmJVWkhlRUZVWjNSb2FrUnpUMFExZEc4dlFYQmtNVWwxTW1OalkyRkpaMmxZVWpnM1NXSm5aRVZpTUdwclFXaEVjemt3UWtWdGJrUXZiemhCTVVoNE9HWkthRTFUUldoSlUwVm9TakpHWVhOMlV6RXpVbnBhUTA4eFpXb3JWVGR5T0RCUGFGVldaVlI1TTFOeGR6RkJXRU00VkhkelZWRkdWVXgyUkdzeFFrcGxibVEwV2tGeFIweGhNMjh2YkdsSlNWaDBPRkl6TTBsR1NYVnRTRkZGWVdsdWJHY3dSazV0TVdSVGVESnNNRVZEU1cxMlJETlhXVmRaYVVSSmJuZFRTVzFhWTNKSlVWRTRTRUZaWTNwUldYTjVRWEZJU0dSSE5EbGphVWRYUzBsRE4yeEtNMlJCZDFGcFQyWkNXVkZRSzNkNU1FTnlRbkpaTVdGUWJIWkpia1pEV0VKWWQwaHpUR3g1YjBkRFRXSlFORk0xUTNWSFltOW5lRnBGYldkQ2NrbDBSVzAwUnpkc01ISjFTSFJLWlRneVFXOUZNbTlxUkhkR1oxUkdPVmxOWmxsUlFVZGphMGg1U0VGbVFVODFLMDVZVTFCM2MxaG9jMk5VVW1oMVVHcE1jMFJUZDNoNGMyWlVOVUZSYkc5b2ExcERVV3RLUTFGSlJIQkZiMGR6WkdoelRVUk5lbWRxTmt4WWNVSTFNRzA0VG1RNFpHVnNOakpvTVVobU9EUnFTa2xST1hoNU5GcEdSRnBZUWxFMlJrbFdVeXRQZGpKMU5TdGxRalpDU2paUGFIaHBkRGxSTVVjeU4zaENMMUpaUTFCTGVsWm5Za0ZhYTBSM09YaDFTWGRRYzBKWVVHdE5UMnc0ZEd4d2FDdEdZME5QUW1RdmFHRjVaV2REVkdRNVFrVnBTV2hOTDA4MlpYUm5kVmQwTWtkeWQxYzBaSGRhTVd0cFFtUk9WRkZtYVVsRkwwaGpPRTUwT1hOS01GSkZja0VyZDBOUFFrNVpkVE5vYm1WdVZXUkVURUpwY3pkdk9DOHlUMk51T0ZSa05XaEZPRUpIYVVwVWNrWTJlR2RaWVZWYVNHaDJTVUk0WldjeGRHZG5iMnh1T0VrMU5DdFRialZQVVd0S1ExRnJURUpXUzBjM05GRlBXbmRQZVVFd1dHTlhPVFJoZG05Mk1ERlVRV00xY0VaMWNEbEdaRWhhVVVOb1JWSXlPVkJpY1hOR2RGQkhWMjloWlVGQloxWkVUa3cwY205TVdVRjNRVk5IU0hwdFFYSmFjWFJCZG1aNVlsWjVkVGxEWmxKSFpFRkJkbTAwUkU1T2QxUmlSRzlqTUU5MmFYUnZjMEZuUldneGRFUkxSa2s1V1VSTE5WQm9hbEV6ZUU1MGF6Sk5XR3g2VEUxRVlXNDJOMWx4UVc1NVYwRkNabkk1UkZGMlZsaDZiMlZGSzBsSVVqZHRLMms0VFVaaVF5dDNRbmRYZEhneWFsbE1RbFZqUkZvMVpFMUNRVzlNVEhoSlNYWndOMmRvWm10RU1FSk5XSGtyT0hCaVIxQXhNekJVT0doSlUwVm9XV0prVVdGcUsyaFlTRGN2VGpCUFJrNHpNMVppY1hkeFRuaHRTRGwyWjNrMGNtNUNORGx3Vmt0clVEWTBLMGw1ZWsxalltdFJSbXMwWnpBM1FWUndhVmcwYmpkM2FWQjZVWFpHYjBGWVdrRnZlRXRqTlM5cldVOVlkbFl6TWxCTU1WSXpORzQyV1dWTVZGRmpSVmd6WWtkdVVGcHRkRzVoV0RWUk0zUlNOVzFOUW5oRFRtMVNkVWQyYVdwT00zWnhhMnB3TWtFNVkxWXllVUYwZWk5UGFVSnBUbXRSWjJoQlJFbEJNakJUUm5kRGVHa3hiblpUWlZGMWRFdFJNazFDZG5adWRTdHVWRzFvUlUxWmJuQXpPVVJLYVVFeVYzZFhabWRLUkVGRVowWktkMGczYUVWRVVYRnhUVTVwYUVOS1EyRnJjbE5CYXk4eGRrSmFRVWwzUWk5a1NWaFlkbEZDWjBOd1NXRnVlR05JV0RWelEwUnFOMkZtT0hab1NVTklSSGc1WVhrclVEbE5kSFpCUTJSRU5tWTBSVXB2UTFsR1UyNHJkMHRUY0ZFeVp6aGxZVzVuZEZsRkszSkVkVTA1YTNkamIwc3ZkSFpEWkVSdVVubHRNaXR1Vkcxb1MyOUtVRWdyVDIwNFFrMXhSblZuWm5KWlNHeE9XRzVwWjFKdkwxSXJPU3M0U2xCblIxRmlNVUpaY0RsNVVVdFpaVVJ2TmsxcVprSTRRMlZaYTBSd2FuZHRiM1pzYjBOeGF6UlJSV1pDVjBndk16SmlZbEJvY2s4MFJYbzNlSFF6YTBkQmMwb3JibTlCVWpocWRrMVVaemxGYWpsVVVETkZWMEU1YjNaS2VFSllWRUpyTlUxVVRVTmFjVmRWUXpWT2VEWnlTRFpaU2xaTVMyWm5TazFoYVhjd2VXYzFLM2xpUVRaYVNrRlRWWEZDWmpoa1psaENLMmMwTlVGVlRrZEJRa0ZNUjBKcU9VRjNVekJ3TDNWdlFXcFBOVFJrUW01QlpWWmxhRkpKT0UxMVp5dGtaM2xyVkZkYVdrOTNjR3Q2WmxWNmNuZFlXVUpOVTJGQlF6WjJLemhDWTFkQlUxVTVTSEpOUkRSQmRsa3pOMEZyYzA1bldGbzRRbnBqUjFWYWRXZEhWeXRHU1hCNlprTnNOMk16WTBGSmNVSjJTakZQYm5Kc2NVVktOVGxXVFhjeE1sZHdVRTgwUzA1a05XWnhMelJLUTFGclNrTldkVTlHZVM5RE5WRlZSVGc1Y2pGbU16WkxXbW96WVZsbVFrcE9WWGM1ZDFKclNFaEhUVkJHZGt0QmFGZG1OMU00ZEVNdlNVaFdTbmNyVDJGNWNtRlBiV0ZpTVV4RFRqbFRPVXgzT0VKRlpUVkZXREpTWjBaUE5uSkxaemhrWnk5SGVGQXhaMUJ3VEhoQlJEWnRRVTVPZEU1RlVGcDBUWFUwU2t4NUwxZzVZVVJZU1hSVVRsaDBSMDQzYjJKclpEUklkRFpEYmtSTE9VNWxUekJ3U0ZKWUwzWnRZbVpSY2pOWk5GbERkV1pvVGl0d2VtcHBkRlZ4ZG5SamIzWXpTak5MUkRFclVIVXZlR0ZZTkVvME5YWk5lVlpyVWtKYVZWQm9OR1ZKTVc1WVpucFVlVlpTUVZkNmFqVlJaekJOVjNCNWJ6ZExiM3B5VjBkamN6SjFha3RLYjBOR2QzbENaWFppTXpjNGRETmlUV0kzTDFreFIwdGFVVzQwUkM5NFYyWm1Oa0pHWkZOMVVEVk9lRGhMUm1rME1raEhabFk1UVV4U2FYWlZSMGhZWlRsSFNYRkNLMWwzVUd4SlkxWkJUR28xZFUxNlYwMW1RVmwwWlVGR2JrRlBabmRrV0dkRVYwZzJXSE0wYUdKM1RDOUhUQ3RLT1VwTFdqQjNRM3BvYUVadVJFTk1SMEpGV1djdlZrRjFjRTl4YnpGMk1tWlhLM0Z4VjNZeVozQlhkMVI1VDBoVlJETkJWMmt4WmtwVFFWWXlPQzh2TVdnNU0xQnZkbEJJVmsxUlFVWldNWEZ0VWk5M2RHWnhPQzltTUVsdlNqQnpXWElyVjJOdGJ5OUxjUzlUY0RnM1EwZG5hV1UwU3pKclUyOHZVVkkyWlZKcFQzaFNSMHBHZUd0Q1NsZFBXVFprSzNWcFMwRkZTVkJ0ZWxoNE5VOUlkamN4ZHpSWE9FSjZVWEJIY0U1SU9VODNXbFJYUVdoWkwwZ3dNVTFxWVRsMGREaHdOVTFCWVhoU1ZUVjVaME5UT1hBMWEzWjJTbTl6U2xCTlFVaFhaV2RQVkdOR1RFNXVXakIxVEVGMWJYWjRNMEZHTWxST01uUXhkbFptWXpNclVGcDFVelJDY1M4d1dHZGxSWFpTWjJSWFNuTnJaRGhsU2t0bUsxRkZPRGRqTVdzeGVIUm5VWFpMU1RZNEswaFJWa1YyTm1wTVJqRlpla0Z2TVhvMFRFbG5hSFUwYlhWWWREUm9kME5qSzFWRlNrTlJhMHhEUW1wRVIybFhiblI1YzBkS2RHTTRSRFp4YkdOSmVrazRSR1ZJZW1SaE5Tc3JaMHR0Tm5WalZVUTRNRmhsUjNKcFF5OXFhR2dyS3l0bmR6bFNaR00yTVM5b1dGVklMMDR6T0U5dlZuWktjMVJVTjFGVlVFNHpVVFZDZEdGdFZ6aFpUVGhqU0RaVU9GcHFNVGhVUW1weE9UZDBPR1ZoVGxjMVRXaFNkR2R0U21kNWNqTjRTU3RPTlM5VmNtcHFPRmxXYmxrM1ZrTlZXbGRqUlU5cFZUaGpObFpFY1ZoaEwxcFNjbTFQY0dkb01IcFBWbWRZYlU5Q1MwODRXbFJsUVRGeVNUQkROMWQxWjBseVdIWXhWRkV6UVVWUVJEbHFkemhsTDFCcE9YRmpPVmxSUkRkRFRYcDFZMEZNU210Q1MzQnJSa1p5ZDFWSlp6WldWa1ZaV0RkMlZTdFNhRVYzUlhNNVZqUmpkazlPVjNNcmQybEpja3RsTTNBM1NYbHZSekZ4VjNOc1ZFaHllVEJHWVhCelptSTRPUzlLTldWdVNVaGpWbEpwZVVKU2JqQXJSMjlsUms4d1FVOTJRbFU0V25wQlJtcEJXVFJRV0hFeVdIbDFkekIwUkdkT1NtWnFVREJhU1VWbVIzaFNXSFZWZUZCSU4zVmhWVFpXSzFNMlkyMTJXVlk0UWpkcFJ5OXNhSGRRZURKRlEzcDBVMlphTDNGeVMySTJiMHBzSzFCclFWZDNObEJZYkhrM01saGpOMmh2VkM5b1lURXlObmxRWjBzMFFsaDRWSGxoWkZWbU5rNW5UbkV4ZDFKQk9ETm9TMnhpWlc1NE9GUkJaMmRpWmpWSk5GUlFNWGhTV1RoVVRERTVkMGg1ZFVkM1JIVkNSaXRRZURWTk1XUnZTM05FTDJodE1GRmxZMjFuZUdOVWMweFNkV0UzZG10VWJEaGxaelJZYVVGR09XOXFVRlUzVkZoS2JUQmhMMnA2TldGbVJFVkVPR1paUWpRelNTdHVPRTFqUVhOUVozVnJaVUpWTlRKWlRtWllhRzlrZERCTlVHZExXRk40V0ZnMFZtaEJTM2QzV0dZck5UTXllbWQzTWtKc1JWSlZPR1pSUTAxT1ZFRkNOM0J0UVU1bWIwSndNVlp4ZFhaRGEwUXZaMnBhYzNCaFdHaGxObkF6ZWxGc1VEY3JiR0ZUZG1SU1JsWnlOMGRSYUhGV1R6WmFWa1JqVmxVdldWQk5ORTk2ZHpoM2VGb3djbkpyY1Vob1UyVm9TU3M1WTJwSmFFbFRSbWgwWldkVmNqUTJLemcwU0hWWmFqWTBjekJRTmxCM1RqUXhaM0oyVGpjemRTdDZkV292TTA5ME4zWlFiUzlyVFhvd2QxUkhRbTFaZDNkM1pqaDZjbGhSWW00d2Nub3lXVll2TjAwclJGVkJOVzF2TUVvelJHTkZNMUJqTlZGcE5DOUphbVZWVjBaTlVHWkJUMWhaWVdKSU9VWnVkeTlPWkhKQlVIRmhlak5zYzBVemNtUmtPRVV6TlUxWmIwbG5jek4wWm5nd0swcFVUM3BuV1dWblQybHNRamxCYURsRVRubGpWbkZJUVZvMFdYRXZWMlpGVG5aUU9HVndhbVVyYm5WeFFtaG9MMW8yY1Vnd0wwcEVjazFPUlhCQk16bDZkak5GTlVONlNtYzVkMWRsUTNsdVRYZHRNbmRSVlhoSFUzRm9aVnBFUldzMFZFRnJjVmw2VjJJNVpXSndSMWxVT0VJNWFrVkdjMWd6VTB0aE5YTkJaakV5WjNCVlFqRkJMMDVXUkc5alIyZEpUM1pTV21kWE1VUjFZaTlMWkNzMFFpdHZlbGhsTm1Rd01UUnNNWFpLTUdwRmJrRXJTMHMwT0VOMllqVm1ZakpaVlhKdGRIY3dTV2RJU1hSQlNHVkZZa0YwWkRKWFZHWndSamNyYlRCTVRuZzNZalZPTVZOSE9WbFVSV2hKVTBWcVdVbGxVVkZGY1RrNU1Fb3phM2QyU25weWRGVldabVo2V1dOeFkwUlphQzlsVFV0WFFVVkdRMVpHV0dsSVprWk1iMGd3UkRWaE1UaDNWVWxtVDNCMGVVOXlTRXh0VHl0a1YwMVdVWHBhU0ROSFp6UlJRMU5yUW1ReGRHRTFkV294UzFCaU5FUkpVVU5ZTW5kVE5HNTJVekZTWldsWVFVeDNXVzFDVGxGd1ZEaFhiR0Y0SzFSaGVqVTRVV3RvV1VKTVRUaFFaekJLYVV3d1ZGVkRVRVp5UVZWQlZERmlVVXc1T1dkRGRXeHpUa1VyYjA5a1VuZE5OVE5pU0dkVk1raHJMMGxEUldoSlUwWm9kSGRGTnk5U2VGWTRWMk5DYmpNMVYwVkZabXhaYjJabGF6WjFaa2swVmxCakwxRTRVVFZpWm1ONmVFRXdabWR0TDFBd1NGaGxWM1IzZUZRcmNFRm5VV0ZJVjNsYWJWWnBUVmRET1ZSTU5qaHRjbmc1UW01QmNIaExaVFYxVFZKUVZ6QXJVRlpGVWt4dU5qZ3hhV2Q1VUdncmNYSllZalJPZUROUk9YVTFZVUo1YTFBNVIxYzJjR1V4YzNVeGN6Rm1iVVIxVldwVlEzWjBhaTh6UlVaRE9VZHJNM1Y1WmxwMFpYbERiRE4wUkVsbEwzQnFNM0lyYm5rNVZWZDFVV1JpWWtGRlMyd3ZhVTgyTXpWb1EyeFVPV3h2UVZCaE4xRnRNMnhJWlU5cmVYRk5XRU5GTVhKNWIxbElVVTFTTWsxUVFXSmxkVVU0ZDBGTWFUaDFZMkprWm5CNVRubHZUM0ptTTJkbk1XVTJZblY2TjA1TlNrTlJhMHBEVkhOSmRtcDZRVlJIV2t3MlRIRkxibVU1TTNGd2VVUlFlalZuU21wTmJEbEdNV3hpZEdWaU1WVTFaWFl2VGs5elJUZDVPR2c0U1ZkV1dIVmxkakZXY0ZkcU5FMDRTRE5FWTI1aFQxRkVOMUp6WlV4UFZFUTViREZ3T1ZaTVlWRTNUUzlyYjFjekwwdzBjSFlyS3psMmIwSm5LMkY2VHpKMVFubDNaWE4yT0ZCTlQzZFhkMWxYZUhwT2JEZzFWM1ozTkU4NFQzaDNZa2dyTnpOT2NtWlVTa2MzZVhaSWMyMW1jek5yVUhGSlZIbzNOVkpPUkRaV1JUaHJUREJ6UVN0alRXZzJPVm8zZDBOdmMwbE1ReTl6UWxGTE56ZzRTV2xPV1VoMmVqZGxTbU01Y2k5a1pFaDNRV2s1WnpnMVFtZFBkRE5HTkZkcE1UTmtXVk5OWjBNNVRuUkhOWFJEUW1kSVoxUXdSeTltTm0xTWFYTlRXVU5OVVV0RVZGVnhORXhCY25aUU5pOHhXRFEwUVM5dWVVRnZNVTV5VDNOR1JHSjVZMFpZVUZvemNYTTFUMnRzSzJaa04wc3dkazlJU0VvcmN6SlJTamt6UTB0SWRsbFhlbFpaWWxOeVNFVm1abXB6ZVhGcWJGSllUMWsySzFoa2JGWllaVzExWTJ0S1ExRnJTa05SYTBselNFRkRORTV1YmpkRFlVSjJZVFIyVEhRMVFVRkRRazVSWmxWblJVaFRXa0ZuVEdoYVFrWlVMMjVwTUdkTk5FcEJhMDFZVlhSbmQybFhWVVJ4UVRJMFUwRmljeXREYVZGclNrTlJhMHBEVTNOSEwweHRaVUZNVWxaYVFsRmtiQzl2UzNSdUwwSTVjbkZsZVZocmVXZFVkeXN6TWxRNVJpdElRbGhDT1dJMVZDc3hRVXR4TldVelZuZ3dUMEUyTHpoT05sQXlOUzl5WlRKRWVXZGlWVkF5YkhCaUwyTkhVWFZ2T1Rjck5TdHhPWEZCVkdSbEx6RldTRUZaTHl0MUsyOUlSMUF4ZG10U0wxRnBWVEZ3ZG1oTlUzUm9laTlDTDJneFQxZHBlVTF3YzNkQlFVRkJRVVZzUmxSclUzVlJiVU5EWENJaVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOSIsIi8qKlxyXG4gKiBWYXJpb3VzIGludGVyZmFjZSBvcHRpb25zIHdlIGNhbiBzZWxlY3RcclxuICovXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gT3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcbiAgICAvLy8gT3B0aW9uczogdmVydGljYWwsIGhvcml6b250YWwsIGJvdGhcclxuICAgIHRoaXMucmVzaXplID0gJ3ZlcnRpY2FsJztcclxuXHJcbiAgICAvLy8gVGhlIHJlc2l6aW5nIGhhbmRsZVxyXG4gICAgdGhpcy5oYW5kbGUgPSAnYmFyJztcclxuXHJcbiAgICAvLy8gUmFuZ2UgZm9yIGdyYWJiaW5nXHJcbiAgICB0aGlzLmdyYWJTaXplID0gMTA7XHJcblxyXG4gICAgLy8vIE1heGltdW0gc3BlZWQgd2UgY2FuIHJlc2l6ZSBpbiBwaXhlbHMgcGVyIHNlY29uZFxyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcblxyXG4gICAgLy8vIFVzZSBhIG1hc2sgKHVzZWZ1bCBmb3IgaWZyYW1lc1xyXG4gICAgdGhpcy51c2VNYXNrID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uIFwiICsgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IFJlc2l6ZXIgZnJvbSAnLi9yZXNpemVyLmpzJztcclxuXHJcbmV4cG9ydCB7UmVzaXplciBhcyBkZWZhdWx0fTtcclxuIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXNpemVyQWN0dWFsKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmVzaXplcicpO1xyXG5cclxuICAgIC8vIFRpbWVvdXQgcGVyaW9kIGZvciBhbmltYXRlZCByZXNpemluZ1xyXG4gICAgY29uc3QgdGltZW91dFBlcmlvZCA9IDIwO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBIYW5kbGUgb3B0aW9uc1xyXG4gICAgLy9cclxuICAgIGxldCBncmFiU2l6ZSA9IG9wdGlvbnMuZ3JhYlNpemU7XHJcblxyXG4gICAgbGV0IGhhbmRsZSA9IG9wdGlvbnMuaGFuZGxlO1xyXG4gICAgaWYoaGFuZGxlID09PSAnYmFyJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gZ3JhYlNpemUgKyAncHggc29saWQgIzE4NDUzQic7XHJcbiAgICB9IGVsc2UgaWYoaGFuZGxlID09PSAnaGFuZGxlJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ3ZlcnRpY2FsJztcclxuICAgIH0gZWxzZSBpZihoYW5kbGUgPT09ICdub25lJykge1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZXNpemUgPSAnbm9uZSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIEFyZSBtb3VzZSBtb3ZlIGV2ZW50IGhhbmRsZXJzIGluc3RhbGxlZD9cclxuICAgIGxldCBpbnN0YWxsZWRNb3VzZUxpc3RlbmVycyA9IGZhbHNlO1xyXG5cclxuICAgIC8vLyBBcmUgdG91Y2ggbW92ZSBldmVudCBoYW5kbGVycyBpbnN0YWxsZWQ/XHJcbiAgICBsZXQgaW5zdGFsbGVkVG91Y2hMaXN0ZW5lcnMgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgbWFzayA9IG51bGw7XHJcblxyXG4gICAgLy8vIEdldCB0aGUgbWluaW11bSBoZWlnaHQgYW5kIHdpZHRoIHByb3BlcnRpZXNcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgbGV0IHdpZHRoID0gcmVjdC53aWR0aDtcclxuXHJcbiAgICBsZXQgbWluSGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5taW5IZWlnaHQ7XHJcbiAgICBtaW5IZWlnaHQgPSBtaW5IZWlnaHQuc3Vic3RyKDAsIG1pbkhlaWdodC5sZW5ndGggLSAyKTtcclxuICAgIGxldCBtaW5XaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWluV2lkdGg7XHJcbiAgICBtaW5XaWR0aCA9IG1pbldpZHRoLnN1YnN0cigwLCBtaW5XaWR0aC5sZW5ndGggLSAyKTtcclxuXHJcbiAgICBsZXQgdGltZXIgPSBudWxsO1xyXG5cclxuICAgIGxldCB0YXJnZXRXaWR0aCA9IG51bGw7XHJcbiAgICBsZXQgdGFyZ2V0SGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICAgICAvLyBJbnN0YWxsIHRoZSBtb3VzZSBkb3duIGFuZCB0b3VjaCBzdGFydCBsaXN0ZW5lcnNcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkxpc3RlbmVyKTtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0TGlzdGVuZXIpO1xyXG5cclxuICAgICAgICAvLyBJbnN0YWxsIHRoZSBjdXJzb3IgbGlzdGVuZXJcclxuICAgICAgICAvLyBUaGlzIHN3YXBzIHRoZSBjdXJzb3Igd2hlbiB3ZSBob3ZlciB0aGUgbW91c2Ugb3ZlciB0aGUgZ3JhYiBiYXJcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGN1cnNvckxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUYXJnZXQodHcsIHRoKSB7XHJcbiAgICAgICAgdGFyZ2V0V2lkdGggPSB0dztcclxuICAgICAgICB0YXJnZXRIZWlnaHQgPSB0aDtcclxuXHJcbiAgICAgICAgLy8gSWYgYSB0aW1lciBpcyBub3QgYWN0aXZlLCBjcmVhdGUgb25lLlxyXG4gICAgICAgIGlmKHRpbWVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRpbWVyTW92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGltZXJNb3ZlcigpIHtcclxuICAgICAgICB0aW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heFBpeGVscyA9IG9wdGlvbnMubWF4U3BlZWQgKiB0aW1lb3V0UGVyaW9kIC8gMTAwMDtcclxuXHJcbiAgICAgICAgaWYodGFyZ2V0SGVpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSAraGVpZ2h0O1xyXG4gICAgICAgICAgICBsZXQgZGlmZiA9IHRhcmdldEhlaWdodCAtIGN1cnJlbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhkaWZmKSA+IG1heFBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgZGlmZiA9IGRpZmYgPCAwID8gLW1heFBpeGVscyA6IG1heFBpeGVscztcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IGN1cnJlbnRIZWlnaHQgKyBkaWZmO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJycgKyBoZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90IHJhdGUgbGltaXRlZFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gdGFyZ2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnJyArIGhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRIZWlnaHQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0YXJnZXRXaWR0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSArd2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBkaWZmID0gdGFyZ2V0V2lkdGggLSBjdXJyZW50V2lkdGg7XHJcblxyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhkaWZmKSA+IG1heFBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgZGlmZiA9IGRpZmYgPCAwID8gLW1heFBpeGVscyA6IG1heFBpeGVscztcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gY3VycmVudFdpZHRoICsgZGlmZjtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJycgKyB3aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgcmF0ZSBsaW1pdGVkXHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHRhcmdldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcnICsgd2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0V2lkdGggPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0YXJnZXRIZWlnaHQgIT09IG51bGwgfHwgdGFyZ2V0V2lkdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHRpbWVyTW92ZXIsIHRpbWVvdXRQZXJpb2QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluaXRpYWxYLCBpbml0aWFsWTtcclxuICAgIGxldCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQ7XHJcbiAgICBsZXQgZ3JhYlR5cGUgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdGhlIHJlc2l6aW5nIG9uIGEgbW91c2UgZG93biBvciB0b3VjaFxyXG4gICAgICogQHBhcmFtIHggTW91c2Ugb3IgdG91Y2ggWCBpbiBwaXhlbHNcclxuICAgICAqIEBwYXJhbSB5IE1vdXNlIG9yIHRvdWNoIFkgaW4gcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG1vdmVTdGFydCh4LCB5KSB7XHJcbiAgICAgICAgaW5pdGlhbFggPSB4O1xyXG4gICAgICAgIGluaXRpYWxZID0geTtcclxuICAgICAgICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgd2lkdGggPSArZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICBpbml0aWFsV2lkdGggPSB3aWR0aDtcclxuICAgICAgICBoZWlnaHQgPSArZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgaW5pdGlhbEhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0YXJnZXRXaWR0aCA9IG51bGw7XHJcbiAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBhIG1vdXNlIG9yIGZpbmdlciBtb3ZlIHRvIGEgbmV3IHBvc2l0aW9uLFxyXG4gICAgICogcmVzdWx0aW5nIGluIGEgcmVzaXplIHJlcXVlc3QuXHJcbiAgICAgKiBAcGFyYW0geCBNb3VzZSBvciB0b3VjaCBYIGluIHBpeGVsc1xyXG4gICAgICogQHBhcmFtIHkgTW91c2Ugb3IgdG91Y2ggWSBpbiBwaXhlbHNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gbW92ZVRvKHgsIHkpIHtcclxuICAgICAgICBsZXQgZHggPSB4IC0gaW5pdGlhbFg7XHJcbiAgICAgICAgbGV0IGR5ID0geSAtIGluaXRpYWxZO1xyXG5cclxuICAgICAgICBsZXQgbmV3V2lkdGggPSBudWxsO1xyXG4gICAgICAgIGxldCBuZXdIZWlnaHQgPSBudWxsO1xyXG5cclxuICAgICAgICBpZihncmFiVHlwZSA9PT0gJ2hvcml6b250YWwnIHx8IGdyYWJUeXBlID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgLy8gQ29tcHV0ZSBhIGRlc2lyZWQgbmV3IHdpZHRoXHJcbiAgICAgICAgICAgIG5ld1dpZHRoID0gaW5pdGlhbFdpZHRoICsgZHg7XHJcbiAgICAgICAgICAgIGlmIChuZXdXaWR0aCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IG1pbldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgPT09ICd2ZXJ0aWNhbCcgfHwgZ3JhYlR5cGUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICBjb25zdCB3YXNIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbXB1dGUgYSBkZXNpcmVkIG5ldyBoZWlnaHRcclxuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIGR5O1xyXG4gICAgICAgICAgICBpZiAobmV3SGVpZ2h0IDwgbWluSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBtaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUYXJnZXQobmV3V2lkdGgsIG5ld0hlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE1vdXNlIEhhbmRsaW5nXHJcbiAgICAvL1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlRG93bkxpc3RlbmVyKGUpIHtcclxuICAgICAgICBjb25zdCB4ID0gZS5wYWdlWDtcclxuICAgICAgICBjb25zdCB5ID0gZS5wYWdlWTtcclxuXHJcbiAgICAgICAgZ3JhYlR5cGUgPSBvbkhhbmRsZSh4LCB5LCBmYWxzZSk7XHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgbW92ZVN0YXJ0KHgsIHkpO1xyXG5cclxuICAgICAgICAgICAgaW5zdGFsbE1hc2soKTtcclxuICAgICAgICAgICAgaW5zdGFsbE1vdXNlSGFuZGxlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoZS5idXR0b25zICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb3ZlVG8oZS5wYWdlWCwgZS5wYWdlWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VVcExpc3RlbmVyKGUpIHtcclxuICAgICAgICByZW1vdmVBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsTW91c2VIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRNb3VzZUxpc3RlbmVycyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlTGlzdGVuZXIsIGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFRvdWNoIEhhbmRsaW5nXHJcbiAgICAvL1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoU3RhcnRMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGUudG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICBjb25zdCB5ID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuICAgICAgICBncmFiVHlwZSA9IG9uSGFuZGxlKHgsIHksIHRydWUpO1xyXG4gICAgICAgIGlmKGdyYWJUeXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIG1vdmVTdGFydCh4LCB5KTtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbGxNYXNrKCk7XHJcbiAgICAgICAgICAgIGluc3RhbGxUb3VjaEhhbmRsZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoTW92ZUxpc3RlbmVyKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgICAgIGNvbnN0IHkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XHJcblxyXG4gICAgICAgIG1vdmVUbyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaEVuZExpc3RlbmVyKGUpIHtcclxuICAgICAgICByZW1vdmVBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsVG91Y2hIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRUb3VjaExpc3RlbmVycyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gTWFza1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsTWFzaygpIHtcclxuICAgICAgICBpZighb3B0aW9ucy51c2VNYXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVuc3VyZSBub25lIGN1cnJlbnRseSBleGlzdHNcclxuICAgICAgICByZW1vdmVNYXNrKCk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgbWFzay5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5sZWZ0ID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIG1hc2suc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBtYXNrLnN0eWxlLnpJbmRleCA9IDEwMDAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUub3BhY2l0eSA9IDAuNTtcclxuICAgICAgICBtYXNrLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuXHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XHJcbiAgICAgICAgaWYodGltZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgdGltZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuICAgICAgICByZW1vdmVNYXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgaWYoaW5zdGFsbGVkTW91c2VMaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgICAgICAgICAgaW5zdGFsbGVkTW91c2VMaXN0ZW5lcnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGluc3RhbGxlZFRvdWNoTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuICAgICAgICAgICAgaW5zdGFsbGVkVG91Y2hMaXN0ZW5lcnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFzaygpIHtcclxuICAgICAgICBpZihtYXNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobWFzayk7XHJcbiAgICAgICAgICAgIG1hc2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiBhbiB4LHkgbG9jYXRpb24gaXMgb3ZlciBhIGhhbmRsZSBmb3IgbWFuaXB1bGF0aW5nXHJcbiAgICAgKiB0aGUgcmVzaXplYWJsZSBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0geCBsb2NhdGlvbiBpbiBwaXhlbHNcclxuICAgICAqIEBwYXJhbSB5IGxvY2F0aW9uIGluIHBpeGVsc1xyXG4gICAgICogQHJldHVybnMgc3RyaW5nfG51bGwgaWYgbm90LCAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdib3RoJyBpZiBvdmVyIGhhbmRsZSBhbmQgbW9kZSBhdmFpbGFibGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG9uSGFuZGxlKHgsIHksIHRvdWNoKSB7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBzbG9wID0gdG91Y2ggPyAxMCA6IDA7XHJcblxyXG4gICAgICAgIGxldCBib3R0b20gPSByZWN0LmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBsZXQgdmVydCA9IHkgPj0gYm90dG9tIC0gZ3JhYlNpemUgLSBzbG9wO1xyXG5cclxuICAgICAgICBsZXQgcmlnaHQgPSByZWN0LnJpZ2h0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG4gICAgICAgIGxldCBob3J6ID0geCA+PSByaWdodCAtIGdyYWJTaXplIC0gc2xvcDtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5yZXNpemUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICBpZih2ZXJ0ICYmIGhvcnopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnYm90aCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodmVydCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGhvcnopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKChvcHRpb25zLnJlc2l6ZSA9PT0gJ2JvdGgnIHx8IG9wdGlvbnMucmVzaXplID09PSAndmVydGljYWwnKSAmJiB2ZXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoKG9wdGlvbnMucmVzaXplID09PSAnYm90aCcgfHwgb3B0aW9ucy5yZXNpemUgPT09ICdob3Jpem9udGFsJykgJiYgaG9yeikge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBsZXQgY3Vyc29yID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBjdXJzb3JMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIC8vIFN3YXAgdGhlIGN1cnNvciB3aGVuIHdlIGFyZSBvdmVyIHRoZSBoYW5kbGVcclxuICAgICAgICBpZiAob25IYW5kbGUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCBmYWxzZSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnNvciAhPT0gMikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGN1cnNvciAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFZlcnRpY2FsIHJlc2l6ZSBzdXBwb3J0IGZvciBkaXYsIHRleHRhcmVhLCBpZnJhbWUsIGV0Yy5cclxuICpcclxuICogQSBwcm9ibGVtIHdpdGggdGhlIHJlc2l6ZSBmZWF0dXJlIG9mIHRleHRhcmVhIGFuZCBpZnJhbWUgaXMgdGhhdCBpdCBkb2VzIG5vdCB3b3JrIGluIGFsbFxyXG4gKiBicm93c2VycyAoZXNwZWNpYWxseSBFZGdlKSBhbmQgaXMgb2Z0ZW4gcXVpdGUgcXVpcmt5LiBUaGlzIHNtYWxsIHBhY2thZ2UgYWxsb3dzIHlvdSB0b1xyXG4gKiBhZGQgdmVydGljYWwgcmVzaXplIGFiaWxpdHkgdG8ganVzdCBhYm91dCBhbnl0aGluZy5cclxuICpcclxuICogQHZlcnNpb24gMi40LjAgQWRkZWQgdG91Y2ggc3VwcG9ydC4gTGltaXRlZCBzcGVlZCBvZiByZXNpemluZyB0byBhdm9pZCBpc3N1ZSB3aGVuIHNjcm9sbGluZy5cclxuICovXHJcblxyXG5pbXBvcnQge1Jlc2l6ZXJBY3R1YWx9IGZyb20gJy4vcmVzaXplci1hY3R1YWwnO1xyXG5pbXBvcnQge09wdGlvbnN9IGZyb20gJy4vT3B0aW9ucyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdG9yIGZvciBhIFJlc2l6ZXIgb2JqZWN0XHJcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3Igb3IgRE9NIGVsZW1lbnRcclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBvYmplY3QuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFJlc2l6ZXIoc2VsLCBvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgaWYodHlwZW9mIHNlbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXcgUmVzaXplckFjdHVhbChlbGVtZW50c1tpXSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKHNlbC5ub2RlVHlwZSkge1xyXG4gICAgICAgIG5ldyBSZXNpemVyQWN0dWFsKHNlbCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2l6ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBNaWRkbGUgc2VjdGlvbiBvZiBkaWFsb2cgYm94XHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcblxyXG5sZXQgQm9keSA9IGZ1bmN0aW9uKGRpYWxvZywgcGFyZW50RGl2KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIGxldCBkaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdkaWFsb2ctY2wtYm9keScsIG9wdGlvbnMuY29udGVudCk7XHJcbiAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICB0aGlzLmRpdiA9IGRpdjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7XHJcblxyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBib3R0b20gYnV0dG9ucyBzZWN0aW9uIG9mIHRoZSBkaWFsb2cgYm94XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxubGV0IEJvdHRvbSA9IGZ1bmN0aW9uKGRpYWxvZywgcGFyZW50RGl2KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIGxldCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGxldCBodG1sID0gYDxidXR0b24gY2xhc3M9XCJjbC1kaWFsb2ctYnRuXCI+T2s8L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwiY2wtZGlhbG9nLWJ0blwiPkNhbmNlbDwvYnV0dG9uPmA7XHJcbiAgICAgICAgbGV0IGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLWRpYWxvZy1ib3R0b20nKTtcclxuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5idXR0b25zID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFkZE9rKGRpdik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5idXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZEJ1dHRvbihkaXYsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkT2soZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdPayc7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljayhkaWFsb2cpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbi5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCdXR0b24oZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW0uY29udGVudHM7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljayhkaWFsb2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpdGVtLmNsYXNzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpdGVtLmZvY3VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5kZWZhdWx0ID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIG9wdGlvbnMuYnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHQgICAgaWYoaXRlbS5kZWZhdWx0ID09PSB0cnVlICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHQgICAgaXRlbS5jbGljayhkaWFsb2cpO1xyXG4gICAgICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3R0b207XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogQ29udmVuaWVuY2UgZnVuY3Rpb25zIGZvciB0aGUgRE9NLlxyXG4gKiBUb29scyB0aGF0IGF2b2lkIGhhdmluZyB0byBoYXZlIGpRdWVyeSBpbnN0YWxsZWQuXHJcbiAqL1xyXG5cclxubGV0IFRvb2xzID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQWRkIGEgY2xhc3MgdG8gYW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZFxyXG4gKi9cclxuVG9vbHMuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdClcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGVsc2VcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XHJcbn1cclxuXHJcblRvb2xzLmFkZENsYXNzZXMgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc2VzKSB7XHJcbiAgICBpZihjbGFzc2VzID09PSB1bmRlZmluZWQgfHwgY2xhc3NlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaCgoY2xzKSA9PiB7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudCwgY2xzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgRElWIHdpdGggYSBwcm92aWRlZCBjbGFzcyBuYW1lLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZCB0byB0aGUgZGl2XHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGRpdi4gSFRNTCBvciBFbGVtZW50XHJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBDcmVhdGVkIERPTSBFbGVtZW50XHJcbiAqL1xyXG5Ub29scy5jcmVhdGVDbGFzc2VkRGl2ID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBjb250ZW50KSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBUb29scy5hZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XHJcbiAgICBUb29scy5hZGRDb250ZW50KGRpdiwgY29udGVudCk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGNvbnRlbnQgdG8gYW4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudC4gQ2FuIGJlIEhUTUwgb3IgYW4gRWxlbWVudC5cclxuICovXHJcblRvb2xzLmFkZENvbnRlbnQgPSBmdW5jdGlvbihlbGVtZW50LCBjb250ZW50KSB7XHJcbiAgICBpZihUb29scy5pc1N0cmluZyhjb250ZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XHJcbiAgICB9IGVsc2UgaWYoVG9vbHMuaXNFbGVtZW50KGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuVG9vbHMuaXNTdHJpbmcgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCAoKCEhdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpO1xyXG59XHJcblxyXG5Ub29scy5pc0VsZW1lbnQgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgdmFsLm5vZGVWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29scztcclxuXHJcbiIsImltcG9ydCBPcHRpb25zIGZyb20gJy4vT3B0aW9ucy5qcyc7XHJcbmltcG9ydCB7VGl0bGVCYXJ9IGZyb20gJy4vVGl0bGVCYXInO1xyXG5pbXBvcnQgQm9keSBmcm9tICcuL0JvZHkuanMnO1xyXG5pbXBvcnQgQm90dG9tIGZyb20gJy4vQm90dG9tLmpzJztcclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuaW1wb3J0IE1hc2sgZnJvbSAnLi9NYXNrLmpzJztcclxuXHJcbmltcG9ydCBSZXNpemVyIGZyb20gJ3Jlc2l6ZXItY2wnO1xyXG5cclxuLyoqXHJcbiAqIEZsZXhpYmxlIGFuZCBjb25maWd1cmFibGUgZGlhbG9nIGJveCBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqXHJcbiAqIEB2ZXJzaW9uIDEuMC40IFRvdWNoIHN1cHBvcnQgZm9yIHRpdGxlIGJhciBkcmFnZ2luZ1xyXG4gKi9cclxubGV0IERpYWxvZyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgbGV0IGJvZHkgPSBudWxsLCBtYXNrID0gbnVsbCwgYm90dG9tID0gbnVsbDtcclxuXHJcbiAgICBsZXQgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICBEaWFsb2cuekluZGV4ICs9IDI7XHJcbiAgICAgICAgdGhpcy56SW5kZXggPSBEaWFsb2cuekluZGV4O1xyXG5cclxuICAgICAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignZGlhbG9nLWNsJyk7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3NlcyhkaXYsIG9wdGlvbnMuYWRkQ2xhc3MpO1xyXG5cclxuICAgICAgICB0aGlzLmRpdiA9IGRpdjtcclxuICAgICAgICBkaXYuc3R5bGUuekluZGV4ID0gdGhpcy56SW5kZXg7XHJcblxyXG4gICAgICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIGluc3RhbGxSZXNpemFibGUoZGl2KTtcclxuXHJcbiAgICAgICAgbmV3IFRpdGxlQmFyKHRoaXMsIGRpdik7XHJcbiAgICAgICAgYm9keSA9IG5ldyBCb2R5KHRoaXMsIGRpdik7XHJcbiAgICAgICAgaWYob3B0aW9ucy5idXR0b25zICE9PSBmYWxzZSkge1xyXG5cdCAgICAgICAgYm90dG9tID0gbmV3IEJvdHRvbSh0aGlzLCBkaXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXNrID0gbmV3IE1hc2sodGhpcyk7XHJcblxyXG4gICAgICAgIHBsYWNlKGRpdiwgcGFyZW50KTtcclxuXHJcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluc3RhbGxSZXNpemFibGUgPSAoZGl2KSA9PiB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5yZXNpemUgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICBsZXQgcnNPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3Jlc2l6ZSc6IG9wdGlvbnMucmVzaXplLFxyXG4gICAgICAgICAgICAgICAgJ2hhbmRsZSc6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICdncmFiU2l6ZSc6IG9wdGlvbnMuZ3JhYlNpemVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBSZXNpemVyKGRpdiwgcnNPcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHRvUHgodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuICcnICsgdmFsICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGxhY2UgPSAoZGl2LCBwYXJlbnQpID0+IHtcclxuICAgICAgICAvL2xldCBwYXJlbnRXaWQgPSBwYXJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgLy9sZXQgcGFyZW50SGl0ID0gcGFyZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBsZXQgcGFyZW50V2lkID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgbGV0IHBhcmVudEhpdCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGRpdi5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gZGl2Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICBsZXQgdG9wID0gcGFyZW50SGl0LzIgLSBoZWlnaHQvMjtcclxuICAgICAgICBpZih0b3AgPCAxMCkge1xyXG4gICAgICAgICAgICB0b3AgPSAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZWZ0ID0gcGFyZW50V2lkLzIgLSB3aWR0aC8yO1xyXG4gICAgICAgIGlmKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSB0b1B4KGxlZnQpO1xyXG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSB0b1B4KHRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIHRoaXMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICBUb29scy5hZGRDb250ZW50KGJvZHkuZGl2LCBjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbWFzay5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZGl2KTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBDYWxsaW5nIGlzIGVxdWl2YWxlbnQgdG8gcHJlc3NpbmcgdGhlIGZpcnN0IGRlZmF1bHQgYnV0dG9uXHJcblx0ICovXHJcblx0dGhpcy5kZWZhdWx0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoYm90dG9tICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJvdHRvbS5kZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5EaWFsb2cuekluZGV4ID0gMTAwMDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XHJcblxyXG4iLCIvKipcclxuICogTWFzayB0aGF0IGFsbG93cyB0aGUgZGlhbG9nIGJveCB0byBiZSBtb2RhbC5cclxuICovXHJcblxyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5cclxubGV0IE1hc2sgPSBmdW5jdGlvbihkaWFsb2cpIHtcclxuICAgIGxldCBvcHRpb25zID0gZGlhbG9nLm9wdGlvbnM7XHJcblxyXG4gICAgbGV0IG1hc2sgPSBudWxsO1xyXG5cclxuICAgIGlmKG9wdGlvbnMubW9kYWwpIHtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBtYXNrID0gIFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ21hc2snKTsgLy8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIG1hc2suc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUubGVmdCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBtYXNrLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBtYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS56SW5kZXggPSBkaWFsb2cuekluZGV4IC0gMTtcclxuXHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYXNrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKG1hc2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobWFzayk7XHJcbiAgICAgICAgICAgIG1hc2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFzaztcclxuXHJcbiIsIi8qKlxyXG4gKiBIYW5keSBTaW1wbGUgTWVzc2FnZSBCb3hcclxuICovXHJcblxyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nLmpzJztcclxuXHJcbmxldCBNZXNzYWdlQm94ID0gZnVuY3Rpb24odGl0bGUsIG1lc3NhZ2UsIHR5cGUsIGJ1dHRvbjEsIGJ1dHRvbjIpIHtcclxuICAgIC8vIERlZmF1bHQ6IE9LXHJcbiAgICBsZXQgYnV0dG9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiAnT2snLFxyXG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBpZihidXR0b24xICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24xKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2ZvY3VzJzogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgaWYodHlwZSA9PT0gTWVzc2FnZUJveC5PS0NBTkNFTCkge1xyXG4gICAgICAgIGJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiAnT2snLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJ1dHRvbjEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24xKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdmb2N1cyc6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudHM6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJ1dHRvbjIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgICAgbGV0IGRpYWxvZyA9IG5ldyBEaWFsb2coe1xyXG4gICAgICAgICAgJ3RpdGxlJzogdGl0bGUsXHJcbiAgICAgICAgICAnY29udGVudCc6ICc8ZGl2IGNsYXNzPVwibWVzc2FnZS1jbFwiPjxwPicgKyBtZXNzYWdlICsgJzwvcD48L2Rpdj4nLFxyXG4gICAgICAgICAgJ2J1dHRvbnMnOiBidXR0b25zXHJcbiAgICAgfSk7XHJcbn1cclxuXHJcbk1lc3NhZ2VCb3guT0sgPSAwO1xyXG5NZXNzYWdlQm94Lk9LQ0FOQ0VMID0gMTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb3g7XHJcblxyXG4iLCIvKipcclxuICogVmFyaW91cyBpbnRlcmZhY2Ugb3B0aW9ucyB3ZSBjYW4gc2VsZWN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBvcHRpb25zLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxudmFyIE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcbiAgICAvLy8gVGl0bGUgYmFyIHRleHRcclxuICAgIHRoaXMudGl0bGUgPSAnRGlhbG9nIEJveCc7XHJcblxyXG4gICAgLy8vIEFueSBhZGRlZCBjbGFzcyBvciBjbGFzc2VzIGZvciB0aGUgbWFpbiBkaWFsb2cgYm94IGRpdlxyXG4gICAgLy8vIENhbiBiZSBhIHN0cmluZyBvciBtdWx0aXBsZSBzdHJpbmdzIHNwYWNlIGRlbGltaXRlZFxyXG4gICAgdGhpcy5hZGRDbGFzcyA9IG51bGw7XHJcblxyXG4gICAgLy8vIElzIHRoaXMgZGlhbG9nIGJveCByZXNpemFibGU/XHJcbiAgICAvLy8gT3B0aW9ucyBhcmU6ICdub25lJywgJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXHJcbiAgICB0aGlzLnJlc2l6ZSA9ICdub25lJztcclxuXHJcbiAgICAvLy8gU2l6ZSBvZiB0aGUgYm9yZGVyIGVkZ2Ugd2UgY2FuIGdyYWIgaWYgcmVzaXphYmxlIGluIHBpeGVsc1xyXG4gICAgdGhpcy5ncmFiU2l6ZSA9IDQ7XHJcblxyXG4gICAgLy8vIEFycmF5IG9mIHRpdGxlIGJhciBidXR0b25zIHRvIGFkZC5cclxuICAgIC8vLyBJZiBudWxsLCBhIGNsb3NlIGJ1dHRvbiBpcyBhZGRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgLy8vIE90aGVyd2lzZSwgYW4gYXJyYXkgb2Ygb2JqZWN0cywgd2l0aCB0aGVzZSBmaWVsZHM6XHJcbiAgICAvLy8gICB0eXBlOiAnY2xvc2UnIGZvciBhIGNsb3NlICBidXR0b24sICdjdXN0b20nIGZvciBjdXN0b20gYnV0dG9uIGNvbnRlbnRzXHJcbiAgICAvLy8gICBjb250ZW50czogSFRNTCB0byBwbGFjZSBpbnNpZGUgYnV0dG9uIHRhZ1xyXG4gICAgLy8vICAgY2xpY2s6IENsaWNrIGhhbmRsZXJcclxuICAgIHRoaXMudGl0bGVCYXJCdXR0b25zID0gbnVsbDtcclxuXHJcbiAgICAvLy8gQW55IGFkZGVkIGNsYXNzIG9yIGNsYXNzZXMgZm9yIHRoZSB0aXRsZSBiYXIgZGl2XHJcbiAgICAvLy8gQ2FuIGJlIGEgc3RyaW5nIG9yIG11bHRpcGxlIHN0cmluZ3Mgc3BhY2UgZGVsaW1pdGVkXHJcbiAgICB0aGlzLnRpdGxlQmFyQWRkQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIC8vLyBBcnJheSBvZiBidXR0b25zIGZvciB0aGUgYm90dG9tLlxyXG4gICAgLy8vIElmIG51bGwsIGFuIE9rIGJ1dHRvbiBpcyBhZGRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgLy8vIE90aGVyd2lzZSwgYW4gYXJyYXkgb2Ygb2JqZWN0cywgd2l0aCB0aGVzZSBmaWVsZHM6XHJcbiAgICAvLy8gICBjb250ZW50czogSWYgcHJvdmlkZWQsIEhUTUwgdG8gcGxhY2UgaW5zaWRlIGJ1dHRvbiB0YWdcclxuICAgIC8vLyAgIGNsaWNrOiBDbGljayBoYW5kbGVyXHJcbiAgICAvLy8gICBmb2N1czogdHJ1ZSBpZiB3ZSB3YW50IHRvIHNldCBmb2N1cyBvbiB0aGlzIGJ1dHRvblxyXG4gICAgLy8vICAgZGVmYXVsdDogdHJ1ZSBpZiB0aGlzIGlzIHRoZSBkZWZhdWx0IGJ1dHRvblxyXG4gICAgLy8vICAgY2xhc3M6IENsYXNzIHRvIGFkZCB0byB0aGUgYnV0dG9uXHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBudWxsO1xyXG5cclxuICAgIC8vLyBDb250ZW50IHRvIGFkZCB0byB0aGUgZGlhbG9nIGJveC4gSWYgbnVsbCwgbm9uZSBpcyBhZGRlZCBvbiBjcmVhdGlvbi5cclxuICAgIHRoaXMuY29udGVudCA9IG51bGw7XHJcblxyXG4gICAgLy8vIElzIHRoaXMgYSBtb2RhbCBkaWFsb2cgYm94PyBJZiB0cnVlLCBjb250cm9scyB1bmRlcm5lYXRoIGFyZSBkaXNhYmxlZC5cclxuICAgIHRoaXMubW9kYWwgPSB0cnVlO1xyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbnM7XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBUaXRsZSBiYXIgbWFuYWdlbWVudFxyXG4gKi9cclxuXHJcbmltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scy5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGl0bGVCYXIoZGlhbG9nLCBwYXJlbnREaXYpIHtcclxuICAgIGxldCBvcHRpb25zID0gZGlhbG9nLm9wdGlvbnM7XHJcblxyXG4gICAgLy8vIE1vdXNlIG1vdmUgZXZlbnQgaGFuZGxlcnMgaW5zdGFsbGVkIGZsYWdcclxuICAgIGxldCBpbnN0YWxsZWRNb3ZlSGFuZGxlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvLy8gVG91Y2ggbW92ZSBldmVudCBoYW5kbGVycyBpbnN0YWxsZWQgZmxhZ1xyXG4gICAgbGV0IGluc3RhbGxlZFRvdWNoSGFuZGxlcnMgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgaW5pdGlhbFgsIGluaXRpYWxZO1xyXG4gICAgbGV0IGluaXRpYWxQb3NpdGlvblgsIGluaXRpYWxQb3NpdGlvblk7XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGgxPiR7b3B0aW9ucy50aXRsZX08L2gxPmA7XHJcbiAgICAgICAgbGV0IGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2RpYWxvZy1jbC10b3AnLCBodG1sKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzc2VzKGRpdiwgb3B0aW9ucy50aXRsZUJhckFkZENsYXNzKTtcclxuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy50aXRsZUJhckJ1dHRvbnMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWRkQ2xvc2UoZGl2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLnRpdGxlQmFyQnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnR5cGUgPT09ICdjbG9zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDbG9zZShkaXYsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGl0ZW0udHlwZSA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDdXN0b20oZGl2LCBpdGVtKTsgLy8gYWRkQ3VzdG9tKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBoMSA9IGRpdi5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG5cclxuICAgICAgICBoMS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25MaXN0ZW5lcik7XHJcbiAgICAgICAgaDEuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoU3RhcnRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDbG9zZShkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoYnV0dG9uLCAnZGlhbG9nLWNsLXRiLWJ1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1jbG9zZVwiPic7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEN1c3RvbShkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoYnV0dG9uLCAnZGlhbG9nLWNsLXRiLWJ1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpdGVtLmNvbnRlbnRzO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtLmNsaWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVUbyh4LCB5KSB7XHJcbiAgICAgICAgbGV0IGR4ID0geCAtIGluaXRpYWxYO1xyXG4gICAgICAgIGxldCBkeSA9IHkgLSBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uWCA9IGluaXRpYWxQb3NpdGlvblggKyBkeDtcclxuICAgICAgICBsZXQgbmV3UG9zaXRpb25ZID0gaW5pdGlhbFBvc2l0aW9uWSArIGR5O1xyXG5cclxuICAgICAgICBkaWFsb2cuZGl2LnN0eWxlLmxlZnQgPSBuZXdQb3NpdGlvblggKyAncHgnO1xyXG4gICAgICAgIGRpYWxvZy5kaXYuc3R5bGUudG9wID0gbmV3UG9zaXRpb25ZICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gTW91c2UgaGFuZGxlcnNcclxuICAgIC8vXHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1vdXNlSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkTW92ZUhhbmRsZXJzID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlRG93bkxpc3RlbmVyKGV2ZW50KSB7XHJcbiAgICAgICAgaW5pdGlhbFggPSBldmVudC5wYWdlWDtcclxuICAgICAgICBpbml0aWFsWSA9IGV2ZW50LnBhZ2VZO1xyXG5cclxuICAgICAgICBsZXQgcmVjdCA9IGRpYWxvZy5kaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaW5pdGlhbFBvc2l0aW9uWCA9IHJlY3QubGVmdDtcclxuICAgICAgICBpbml0aWFsUG9zaXRpb25ZID0gcmVjdC50b3A7XHJcblxyXG4gICAgICAgIGluc3RhbGxNb3VzZUhhbmRsZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGlmKGUuYnV0dG9ucyAhPT0gMSkge1xyXG4gICAgICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb3ZlVG8oZS5wYWdlWCwgZS5wYWdlWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VVcExpc3RlbmVyKGUpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBUb3VjaCBoYW5kbGVyc1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsVG91Y2hIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRUb3VjaEhhbmRsZXJzID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaFN0YXJ0TGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpbml0aWFsWCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgICAgaW5pdGlhbFkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuICAgICAgICBsZXQgcmVjdCA9IGRpYWxvZy5kaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaW5pdGlhbFBvc2l0aW9uWCA9IHJlY3QubGVmdDtcclxuICAgICAgICBpbml0aWFsUG9zaXRpb25ZID0gcmVjdC50b3A7XHJcblxyXG4gICAgICAgIGluc3RhbGxUb3VjaEhhbmRsZXJzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoTW92ZUxpc3RlbmVyKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBtb3ZlVG8oZS50b3VjaGVzWzBdLnBhZ2VYLCBlLnRvdWNoZXNbMF0ucGFnZVkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoRW5kTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYWxsIGluc3RhbGxlZCB0ZW1wb3JhcnkgaGFuZGxlcnNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgaWYoaW5zdGFsbGVkTW92ZUhhbmRsZXJzKSB7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBpbnN0YWxsZWRNb3ZlSGFuZGxlcnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGluc3RhbGxlZFRvdWNoSGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBpbnN0YWxsZWRUb3VjaEhhbmRsZXJzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9fZGlhbG9nLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL19kaWFsb2cuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vX2RpYWxvZy5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIFRoZSBwdWJsaWMtcGF0aCBtb2R1bGUgbXVzdCBiZSBpbXBvcnRlZCBmaXJzdCFcclxuLy9pbXBvcnQgJy4vcHVibGljLXBhdGguanMnO1xyXG5cclxuaW1wb3J0ICcuL3BvbHlmaWxscy9hbGwuanMnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nLmpzJztcclxuaW1wb3J0IE1lc3NhZ2VCb3ggZnJvbSAnLi9NZXNzYWdlQm94LmpzJztcclxuaW1wb3J0ICcuL19kaWFsb2cuc2Nzcyc7XHJcbmltcG9ydCAnaWNvbnMtY2wnO1xyXG5cclxuRGlhbG9nLk1lc3NhZ2VCb3ggPSBNZXNzYWdlQm94O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xyXG5leHBvcnQge0RpYWxvZ307XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9