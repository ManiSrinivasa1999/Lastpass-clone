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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/user.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fuse.js/dist/fuse.js":
/*!*******************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Fuse.js v6.0.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2020 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function isArray(value) {
    return !Array.isArray ? Object.prototype.toString.call(value) === '[object Array]' : Array.isArray(value);
  } // Adapted from:
  // https://github.com/lodash/lodash/blob/f4ca396a796435422bd4fd41fadbd225edddf175/.internal/baseToString.js

  var INFINITY = 1 / 0;
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }
  function isString(value) {
    return typeof value === 'string';
  }
  function isNumber(value) {
    return typeof value === 'number';
  }
  function isObject(value) {
    return _typeof(value) === 'object';
  }
  function isDefined(value) {
    return value !== undefined && value !== null;
  }
  function isBlank(value) {
    return !value.trim().length;
  }

  var EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';
  var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
  var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = function LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key) {
    return "Invalid value for key ".concat(key);
  };
  var PATTERN_LENGTH_TOO_LARGE = function PATTERN_LENGTH_TOO_LARGE(max) {
    return "Pattern length exceeds max of ".concat(max, ".");
  };
  var MISSING_KEY_PROPERTY = function MISSING_KEY_PROPERTY(name) {
    return "Missing ".concat(name, " property in key");
  };
  var INVALID_KEY_WEIGHT_VALUE = function INVALID_KEY_WEIGHT_VALUE(key) {
    return "Property 'weight' in key '".concat(key, "' must be a positive integer");
  };

  var hasOwn = Object.prototype.hasOwnProperty;

  var KeyStore = /*#__PURE__*/function () {
    function KeyStore(keys) {
      var _this = this;

      _classCallCheck(this, KeyStore);

      this._keys = {};
      this._keyNames = [];
      var totalWeight = 0;
      keys.forEach(function (key) {
        var keyName;
        var weight = 1;

        if (isString(key)) {
          keyName = key;
        } else {
          if (!hasOwn.call(key, 'name')) {
            throw new Error(MISSING_KEY_PROPERTY('name'));
          }

          keyName = key.name;

          if (hasOwn.call(key, 'weight')) {
            weight = key.weight;

            if (weight <= 0) {
              throw new Error(INVALID_KEY_WEIGHT_VALUE(keyName));
            }
          }
        }

        _this._keyNames.push(keyName);

        _this._keys[keyName] = {
          weight: weight
        };
        totalWeight += weight;
      }); // Normalize weights so that their sum is equal to 1

      this._keyNames.forEach(function (key) {
        _this._keys[key].weight /= totalWeight;
      });
    }

    _createClass(KeyStore, [{
      key: "get",
      value: function get(key, name) {
        return this._keys[key] && this._keys[key][name];
      }
    }, {
      key: "keys",
      value: function keys() {
        return this._keyNames;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return JSON.stringify(this._keys);
      }
    }]);

    return KeyStore;
  }();

  function get(obj, path) {
    var list = [];
    var arr = false;

    var deepGet = function deepGet(obj, path) {
      if (!path) {
        // If there's no path left, we've arrived at the object we care about.
        list.push(obj);
      } else {
        var dotIndex = path.indexOf('.');
        var key = path;
        var remaining = null;

        if (dotIndex !== -1) {
          key = path.slice(0, dotIndex);
          remaining = path.slice(dotIndex + 1);
        }

        var value = obj[key];

        if (!isDefined(value)) {
          return;
        }

        if (!remaining && (isString(value) || isNumber(value))) {
          list.push(toString(value));
        } else if (isArray(value)) {
          arr = true; // Search each item in the array.

          for (var i = 0, len = value.length; i < len; i += 1) {
            deepGet(value[i], remaining);
          }
        } else if (remaining) {
          // An object. Recurse further.
          deepGet(value, remaining);
        }
      }
    };

    deepGet(obj, path);
    return arr ? list : list[0];
  }

  var MatchOptions = {
    // Whether the matches should be included in the result set. When true, each record in the result
    // set will include the indices of the matched characters.
    // These can consequently be used for highlighting purposes.
    includeMatches: false,
    // When true, the matching function will continue to the end of a search pattern even if
    // a perfect match has already been located in the string.
    findAllMatches: false,
    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1
  };
  var BasicOptions = {
    // When true, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    isCaseSensitive: false,
    // When true, the matching function will continue to the end of a search pattern even if
    includeScore: false,
    // List of properties that will be searched. This also supports nested properties.
    keys: [],
    // Whether to sort the result list, by score
    shouldSort: true,
    // Default sort function: sort by ascending score, ascending index
    sortFn: function sortFn(a, b) {
      return a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1;
    }
  };
  var FuzzyOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,
    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100
  };
  var AdvancedOptions = {
    // When true, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get
  };
  var Config = _objectSpread2({}, BasicOptions, {}, MatchOptions, {}, FuzzyOptions, {}, AdvancedOptions);

  var SPACE = /[^ ]+/g; // Field-length norm: the shorter the field, the higher the weight.
  // Set to 3 decimals to reduce index size.

  function norm() {
    var mantissa = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    var cache = new Map();
    return {
      get: function get(value) {
        var numTokens = value.match(SPACE).length;

        if (cache.has(numTokens)) {
          return cache.get(numTokens);
        }

        var n = parseFloat((1 / Math.sqrt(numTokens)).toFixed(mantissa));
        cache.set(numTokens, n);
        return n;
      },
      clear: function clear() {
        cache.clear();
      }
    };
  }

  var FuseIndex = /*#__PURE__*/function () {
    function FuseIndex() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$getFn = _ref.getFn,
          getFn = _ref$getFn === void 0 ? Config.getFn : _ref$getFn;

      _classCallCheck(this, FuseIndex);

      this.norm = norm(3);
      this.getFn = getFn;
      this.isCreated = false;
      this.setRecords();
    }

    _createClass(FuseIndex, [{
      key: "setCollection",
      value: function setCollection() {
        var docs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this.docs = docs;
      }
    }, {
      key: "setRecords",
      value: function setRecords() {
        var records = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this.records = records;
      }
    }, {
      key: "setKeys",
      value: function setKeys() {
        var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this.keys = keys;
      }
    }, {
      key: "create",
      value: function create() {
        var _this = this;

        if (this.isCreated || !this.docs.length) {
          return;
        }

        this.isCreated = true; // List is Array<String>

        if (isString(this.docs[0])) {
          this.docs.forEach(function (doc, docIndex) {
            _this._addString(doc, docIndex);
          });
        } else {
          // List is Array<Object>
          this.docs.forEach(function (doc, docIndex) {
            _this._addObject(doc, docIndex);
          });
        }

        this.norm.clear();
      } // Adds a doc to the end of the index

    }, {
      key: "add",
      value: function add(doc) {
        var idx = this.size();

        if (isString(doc)) {
          this._addString(doc, idx);
        } else {
          this._addObject(doc, idx);
        }
      } // Removes the doc at the specified index of the index

    }, {
      key: "removeAt",
      value: function removeAt(idx) {
        this.records.splice(idx, 1); // Change ref index of every subsquent doc

        for (var i = idx, len = this.size(); i < len; i += 1) {
          this.records[i].i -= 1;
        }
      }
    }, {
      key: "size",
      value: function size() {
        return this.records.length;
      }
    }, {
      key: "_addString",
      value: function _addString(doc, docIndex) {
        if (!isDefined(doc) || isBlank(doc)) {
          return;
        }

        var record = {
          v: doc,
          i: docIndex,
          n: this.norm.get(doc)
        };
        this.records.push(record);
      }
    }, {
      key: "_addObject",
      value: function _addObject(doc, docIndex) {
        var _this2 = this;

        var record = {
          i: docIndex,
          $: {}
        }; // Iterate over every key (i.e, path), and fetch the value at that key

        this.keys.forEach(function (key, keyIndex) {
          var value = _this2.getFn(doc, key);

          if (!isDefined(value)) {
            return;
          }

          if (isArray(value)) {
            (function () {
              var subRecords = [];
              var stack = [{
                nestedArrIndex: -1,
                value: value
              }];

              while (stack.length) {
                var _stack$pop = stack.pop(),
                    nestedArrIndex = _stack$pop.nestedArrIndex,
                    _value = _stack$pop.value;

                if (!isDefined(_value)) {
                  continue;
                }

                if (isString(_value) && !isBlank(_value)) {
                  var subRecord = {
                    v: _value,
                    i: nestedArrIndex,
                    n: _this2.norm.get(_value)
                  };
                  subRecords.push(subRecord);
                } else if (isArray(_value)) {
                  _value.forEach(function (item, k) {
                    stack.push({
                      nestedArrIndex: k,
                      value: item
                    });
                  });
                }
              }

              record.$[keyIndex] = subRecords;
            })();
          } else if (!isBlank(value)) {
            var subRecord = {
              v: value,
              n: _this2.norm.get(value)
            };
            record.$[keyIndex] = subRecord;
          }
        });
        this.records.push(record);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          keys: this.keys,
          records: this.records
        };
      }
    }]);

    return FuseIndex;
  }();
  function createIndex(keys, docs) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref2$getFn = _ref2.getFn,
        getFn = _ref2$getFn === void 0 ? Config.getFn : _ref2$getFn;

    var myIndex = new FuseIndex({
      getFn: getFn
    });
    myIndex.setKeys(keys);
    myIndex.setCollection(docs);
    myIndex.create();
    return myIndex;
  }
  function parseIndex(data) {
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref3$getFn = _ref3.getFn,
        getFn = _ref3$getFn === void 0 ? Config.getFn : _ref3$getFn;

    var keys = data.keys,
        records = data.records;
    var myIndex = new FuseIndex({
      getFn: getFn
    });
    myIndex.setKeys(keys);
    myIndex.setRecords(records);
    return myIndex;
  }

  function transformMatches(result, data) {
    var matches = result.matches;
    data.matches = [];

    if (!isDefined(matches)) {
      return;
    }

    matches.forEach(function (match) {
      if (!isDefined(match.indices) || !match.indices.length) {
        return;
      }

      var indices = match.indices,
          value = match.value;
      var obj = {
        indices: indices,
        value: value
      };

      if (match.key) {
        obj.key = match.key;
      }

      if (match.idx > -1) {
        obj.refIndex = match.idx;
      }

      data.matches.push(obj);
    });
  }

  function transformScore(result, data) {
    data.score = result.score;
  }

  function computeScore(pattern) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$errors = _ref.errors,
        errors = _ref$errors === void 0 ? 0 : _ref$errors,
        _ref$currentLocation = _ref.currentLocation,
        currentLocation = _ref$currentLocation === void 0 ? 0 : _ref$currentLocation,
        _ref$expectedLocation = _ref.expectedLocation,
        expectedLocation = _ref$expectedLocation === void 0 ? 0 : _ref$expectedLocation,
        _ref$distance = _ref.distance,
        distance = _ref$distance === void 0 ? Config.distance : _ref$distance;

    var accuracy = errors / pattern.length;
    var proximity = Math.abs(expectedLocation - currentLocation);

    if (!distance) {
      // Dodge divide by zero error.
      return proximity ? 1.0 : accuracy;
    }

    return accuracy + proximity / distance;
  }

  function convertMaskToIndices() {
    var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.minMatchCharLength;
    var indices = [];
    var start = -1;
    var end = -1;
    var i = 0;

    for (var len = matchmask.length; i < len; i += 1) {
      var match = matchmask[i];

      if (match && start === -1) {
        start = i;
      } else if (!match && start !== -1) {
        end = i - 1;

        if (end - start + 1 >= minMatchCharLength) {
          indices.push([start, end]);
        }

        start = -1;
      }
    } // (i-1 - start) + 1 => i - start


    if (matchmask[i - 1] && i - start >= minMatchCharLength) {
      indices.push([start, i - 1]);
    }

    return indices;
  }

  // Machine word size
  var MAX_BITS = 32;

  function search(text, pattern, patternAlphabet) {
    var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref$location = _ref.location,
        location = _ref$location === void 0 ? Config.location : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches;

    if (pattern.length > MAX_BITS) {
      throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    }

    var patternLen = pattern.length; // Set starting location at beginning text and initialize the alphabet.

    var textLen = text.length; // Handle the case when location > text.length

    var expectedLocation = Math.max(0, Math.min(location, textLen)); // Highest score beyond which we give up.

    var currentThreshold = threshold; // Is there a nearby exact match? (speedup)

    var bestLocation = expectedLocation; // A mask of the matches, used for building the indices

    var matchMask = [];

    if (includeMatches) {
      for (var i = 0; i < textLen; i += 1) {
        matchMask[i] = 0;
      }
    }

    var index; // Get all exact matches, here for speed up

    while ((index = text.indexOf(pattern, bestLocation)) > -1) {
      var score = computeScore(pattern, {
        currentLocation: index,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(score, currentThreshold);
      bestLocation = index + patternLen;

      if (includeMatches) {
        var _i = 0;

        while (_i < patternLen) {
          matchMask[index + _i] = 1;
          _i += 1;
        }
      }
    } // Reset the best location


    bestLocation = -1;
    var lastBitArr = [];
    var finalScore = 1;
    var binMax = patternLen + textLen;
    var mask = 1 << (patternLen <= MAX_BITS - 1 ? patternLen - 1 : MAX_BITS - 2);

    for (var _i2 = 0; _i2 < patternLen; _i2 += 1) {
      // Scan for the best match; each iteration allows for one more error.
      // Run a binary search to determine how far from the match location we can stray
      // at this error level.
      var binMin = 0;
      var binMid = binMax;

      while (binMin < binMid) {
        var _score2 = computeScore(pattern, {
          errors: _i2,
          currentLocation: expectedLocation + binMid,
          expectedLocation: expectedLocation,
          distance: distance
        });

        if (_score2 <= currentThreshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }

        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      } // Use the result from this iteration as the maximum for the next.


      binMax = binMid;
      var start = Math.max(1, expectedLocation - binMid + 1);
      var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen; // Initialize the bit array

      var bitArr = Array(finish + 2);
      bitArr[finish + 1] = (1 << _i2) - 1;

      for (var j = finish; j >= start; j -= 1) {
        var currentLocation = j - 1;
        var charMatch = patternAlphabet[text.charAt(currentLocation)];

        if (charMatch && includeMatches) {
          matchMask[currentLocation] = 1;
        } // First pass: exact match


        bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch; // Subsequent passes: fuzzy match

        if (_i2 !== 0) {
          bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
        }

        if (bitArr[j] & mask) {
          finalScore = computeScore(pattern, {
            errors: _i2,
            currentLocation: currentLocation,
            expectedLocation: expectedLocation,
            distance: distance
          }); // This match will almost certainly be better than any existing match.
          // But check anyway.

          if (finalScore <= currentThreshold) {
            // Indeed it is
            currentThreshold = finalScore;
            bestLocation = currentLocation; // Already passed `loc`, downhill from here on in.

            if (bestLocation <= expectedLocation) {
              break;
            } // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.


            start = Math.max(1, 2 * expectedLocation - bestLocation);
          }
        }
      } // No hope for a (better) match at greater error levels.


      var _score = computeScore(pattern, {
        errors: _i2 + 1,
        currentLocation: expectedLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score > currentThreshold) {
        break;
      }

      lastBitArr = bitArr;
    }

    var result = {
      isMatch: bestLocation >= 0,
      // Count exact matches (those with a score of 0) to be "almost" exact
      score: Math.max(0.001, finalScore)
    };

    if (includeMatches) {
      result.indices = convertMaskToIndices(matchMask, minMatchCharLength);
    }

    return result;
  }

  function createPatternAlphabet(pattern) {
    var mask = {};
    var len = pattern.length;

    for (var i = 0; i < len; i += 1) {
      mask[pattern.charAt(i)] = 0;
    }

    for (var _i = 0; _i < len; _i += 1) {
      mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
    }

    return mask;
  }

  var BitapSearch = /*#__PURE__*/function () {
    function BitapSearch(pattern) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$location = _ref.location,
          location = _ref$location === void 0 ? Config.location : _ref$location,
          _ref$threshold = _ref.threshold,
          threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
          _ref$distance = _ref.distance,
          distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
          _ref$includeMatches = _ref.includeMatches,
          includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
          _ref$findAllMatches = _ref.findAllMatches,
          findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
          _ref$minMatchCharLeng = _ref.minMatchCharLength,
          minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
          _ref$isCaseSensitive = _ref.isCaseSensitive,
          isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive;

      _classCallCheck(this, BitapSearch);

      this.options = {
        location: location,
        threshold: threshold,
        distance: distance,
        includeMatches: includeMatches,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength,
        isCaseSensitive: isCaseSensitive
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.chunks = [];
      var index = 0;

      while (index < this.pattern.length) {
        var _pattern = this.pattern.substring(index, index + MAX_BITS);

        this.chunks.push({
          pattern: _pattern,
          alphabet: createPatternAlphabet(_pattern)
        });
        index += MAX_BITS;
      }
    }

    _createClass(BitapSearch, [{
      key: "searchIn",
      value: function searchIn(text) {
        var _this$options = this.options,
            isCaseSensitive = _this$options.isCaseSensitive,
            includeMatches = _this$options.includeMatches;

        if (!isCaseSensitive) {
          text = text.toLowerCase();
        } // Exact match


        if (this.pattern === text) {
          var _result = {
            isMatch: true,
            score: 0
          };

          if (includeMatches) {
            _result.indices = [[0, text.length - 1]];
          }

          return _result;
        } // Otherwise, use Bitap algorithm


        var _this$options2 = this.options,
            location = _this$options2.location,
            distance = _this$options2.distance,
            threshold = _this$options2.threshold,
            findAllMatches = _this$options2.findAllMatches,
            minMatchCharLength = _this$options2.minMatchCharLength;
        var allIndices = [];
        var totalScore = 0;
        var hasMatches = false;
        this.chunks.forEach(function (_ref2, i) {
          var pattern = _ref2.pattern,
              alphabet = _ref2.alphabet;

          var _search = search(text, pattern, alphabet, {
            location: location + MAX_BITS * i,
            distance: distance,
            threshold: threshold,
            findAllMatches: findAllMatches,
            minMatchCharLength: minMatchCharLength,
            includeMatches: includeMatches
          }),
              isMatch = _search.isMatch,
              score = _search.score,
              indices = _search.indices;

          if (isMatch) {
            hasMatches = true;
          }

          totalScore += score;

          if (isMatch && indices) {
            allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
          }
        });
        var result = {
          isMatch: hasMatches,
          score: hasMatches ? totalScore / this.chunks.length : 1
        };

        if (hasMatches && includeMatches) {
          result.indices = allIndices;
        }

        return result;
      }
    }]);

    return BitapSearch;
  }();

  var BaseMatch = /*#__PURE__*/function () {
    function BaseMatch(pattern) {
      _classCallCheck(this, BaseMatch);

      this.pattern = pattern;
    }

    _createClass(BaseMatch, [{
      key: "search",
      value: function search()
      /*text*/
      {}
    }], [{
      key: "isMultiMatch",
      value: function isMultiMatch(pattern) {
        return getMatch(pattern, this.multiRegex);
      }
    }, {
      key: "isSingleMatch",
      value: function isSingleMatch(pattern) {
        return getMatch(pattern, this.singleRegex);
      }
    }]);

    return BaseMatch;
  }();

  function getMatch(pattern, exp) {
    var matches = pattern.match(exp);
    return matches ? matches[1] : null;
  }

  var ExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(ExactMatch, _BaseMatch);

    var _super = _createSuper(ExactMatch);

    function ExactMatch(pattern) {
      _classCallCheck(this, ExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(ExactMatch, [{
      key: "search",
      value: function search(text) {
        var location = 0;
        var index;
        var indices = [];
        var patternLen = this.pattern.length; // Get all exact matches

        while ((index = text.indexOf(this.pattern, location)) > -1) {
          location = index + patternLen;
          indices.push([index, location - 1]);
        }

        var isMatch = !!indices.length;
        return {
          isMatch: isMatch,
          score: isMatch ? 1 : 0,
          indices: indices
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^'"(.*)"$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^'(.*)$/;
      }
    }]);

    return ExactMatch;
  }(BaseMatch);

  var InverseExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(InverseExactMatch, _BaseMatch);

    var _super = _createSuper(InverseExactMatch);

    function InverseExactMatch(pattern) {
      _classCallCheck(this, InverseExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(InverseExactMatch, [{
      key: "search",
      value: function search(text) {
        var index = text.indexOf(this.pattern);
        var isMatch = index === -1;
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'inverse-exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^!"(.*)"$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^!(.*)$/;
      }
    }]);

    return InverseExactMatch;
  }(BaseMatch);

  var PrefixExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(PrefixExactMatch, _BaseMatch);

    var _super = _createSuper(PrefixExactMatch);

    function PrefixExactMatch(pattern) {
      _classCallCheck(this, PrefixExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(PrefixExactMatch, [{
      key: "search",
      value: function search(text) {
        var isMatch = text.startsWith(this.pattern);
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, this.pattern.length - 1]
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'prefix-exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^\^"(.*)"$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^\^(.*)$/;
      }
    }]);

    return PrefixExactMatch;
  }(BaseMatch);

  var InversePrefixExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(InversePrefixExactMatch, _BaseMatch);

    var _super = _createSuper(InversePrefixExactMatch);

    function InversePrefixExactMatch(pattern) {
      _classCallCheck(this, InversePrefixExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(InversePrefixExactMatch, [{
      key: "search",
      value: function search(text) {
        var isMatch = !text.startsWith(this.pattern);
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'inverse-prefix-exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^!\^"(.*)"$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^!\^(.*)$/;
      }
    }]);

    return InversePrefixExactMatch;
  }(BaseMatch);

  var SuffixExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(SuffixExactMatch, _BaseMatch);

    var _super = _createSuper(SuffixExactMatch);

    function SuffixExactMatch(pattern) {
      _classCallCheck(this, SuffixExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(SuffixExactMatch, [{
      key: "search",
      value: function search(text) {
        var isMatch = text.endsWith(this.pattern);
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: [text.length - this.pattern.length, text.length - 1]
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'suffix-exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^"(.*)"\$$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^(.*)\$$/;
      }
    }]);

    return SuffixExactMatch;
  }(BaseMatch);

  var InverseSuffixExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(InverseSuffixExactMatch, _BaseMatch);

    var _super = _createSuper(InverseSuffixExactMatch);

    function InverseSuffixExactMatch(pattern) {
      _classCallCheck(this, InverseSuffixExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(InverseSuffixExactMatch, [{
      key: "search",
      value: function search(text) {
        var isMatch = !text.endsWith(this.pattern);
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'inverse-suffix-exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^!"(.*)"\$$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^!(.*)\$$/;
      }
    }]);

    return InverseSuffixExactMatch;
  }(BaseMatch);

  var FuzzyMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(FuzzyMatch, _BaseMatch);

    var _super = _createSuper(FuzzyMatch);

    function FuzzyMatch(pattern) {
      var _this;

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$location = _ref.location,
          location = _ref$location === void 0 ? Config.location : _ref$location,
          _ref$threshold = _ref.threshold,
          threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
          _ref$distance = _ref.distance,
          distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
          _ref$includeMatches = _ref.includeMatches,
          includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
          _ref$findAllMatches = _ref.findAllMatches,
          findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
          _ref$minMatchCharLeng = _ref.minMatchCharLength,
          minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
          _ref$isCaseSensitive = _ref.isCaseSensitive,
          isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive;

      _classCallCheck(this, FuzzyMatch);

      _this = _super.call(this, pattern);
      _this._bitapSearch = new BitapSearch(pattern, {
        location: location,
        threshold: threshold,
        distance: distance,
        includeMatches: includeMatches,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength,
        isCaseSensitive: isCaseSensitive
      });
      return _this;
    }

    _createClass(FuzzyMatch, [{
      key: "search",
      value: function search(text) {
        return this._bitapSearch.searchIn(text);
      }
    }], [{
      key: "type",
      get: function get() {
        return 'fuzzy';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^"(.*)"$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^(.*)$/;
      }
    }]);

    return FuzzyMatch;
  }(BaseMatch);

  var searchers = [ExactMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
  var searchersLen = searchers.length; // Regex to split by spaces, but keep anything in quotes together

  var SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
  var OR_TOKEN = '|'; // Return a 2D array representation of the query, for simpler parsing.
  // Example:
  // "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]

  function parseQuery(pattern) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return pattern.split(OR_TOKEN).map(function (item) {
      var query = item.trim().split(SPACE_RE).filter(function (item) {
        return item && !!item.trim();
      });
      var results = [];

      for (var i = 0, len = query.length; i < len; i += 1) {
        var queryItem = query[i]; // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)

        var found = false;
        var idx = -1;

        while (!found && ++idx < searchersLen) {
          var searcher = searchers[idx];
          var token = searcher.isMultiMatch(queryItem);

          if (token) {
            results.push(new searcher(token, options));
            found = true;
          }
        }

        if (found) {
          continue;
        } // 2. Handle single query matches (i.e, once that are *not* quoted)


        idx = -1;

        while (++idx < searchersLen) {
          var _searcher = searchers[idx];

          var _token = _searcher.isSingleMatch(queryItem);

          if (_token) {
            results.push(new _searcher(_token, options));
            break;
          }
        }
      }

      return results;
    });
  }

  // to a singl match

  var MultiMatchSet = new Set([FuzzyMatch.type, ExactMatch.type]);
  /**
   * Command-like searching
   * ======================
   *
   * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
   * search in a given text.
   *
   * Search syntax:
   *
   * | Token       | Match type                 | Description                            |
   * | ----------- | -------------------------- | -------------------------------------- |
   * | `jscript`   | fuzzy-match                | Items that match `jscript`             |
   * | `'python`   | exact-match                | Items that include `python`            |
   * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
   * | `^java`     | prefix-exact-match         | Items that start with `java`           |
   * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
   * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
   * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
   *
   * A single pipe character acts as an OR operator. For example, the following
   * query matches entries that start with `core` and end with either`go`, `rb`,
   * or`py`.
   *
   * ```
   * ^core go$ | rb$ | py$
   * ```
   */

  var ExtendedSearch = /*#__PURE__*/function () {
    function ExtendedSearch(pattern) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isCaseSensitive = _ref.isCaseSensitive,
          isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive,
          _ref$includeMatches = _ref.includeMatches,
          includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
          _ref$minMatchCharLeng = _ref.minMatchCharLength,
          minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
          _ref$findAllMatches = _ref.findAllMatches,
          findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
          _ref$location = _ref.location,
          location = _ref$location === void 0 ? Config.location : _ref$location,
          _ref$threshold = _ref.threshold,
          threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
          _ref$distance = _ref.distance,
          distance = _ref$distance === void 0 ? Config.distance : _ref$distance;

      _classCallCheck(this, ExtendedSearch);

      this.query = null;
      this.options = {
        isCaseSensitive: isCaseSensitive,
        includeMatches: includeMatches,
        minMatchCharLength: minMatchCharLength,
        findAllMatches: findAllMatches,
        location: location,
        threshold: threshold,
        distance: distance
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.query = parseQuery(this.pattern, this.options);
    }

    _createClass(ExtendedSearch, [{
      key: "searchIn",
      value: function searchIn(text) {
        var query = this.query;

        if (!query) {
          return {
            isMatch: false,
            score: 1
          };
        }

        var _this$options = this.options,
            includeMatches = _this$options.includeMatches,
            isCaseSensitive = _this$options.isCaseSensitive;
        text = isCaseSensitive ? text : text.toLowerCase();
        var numMatches = 0;
        var allIndices = [];
        var totalScore = 0; // ORs

        for (var i = 0, qLen = query.length; i < qLen; i += 1) {
          var searchers = query[i]; // Reset indices

          allIndices.length = 0;
          numMatches = 0; // ANDs

          for (var j = 0, pLen = searchers.length; j < pLen; j += 1) {
            var searcher = searchers[j];

            var _searcher$search = searcher.search(text),
                isMatch = _searcher$search.isMatch,
                indices = _searcher$search.indices,
                score = _searcher$search.score;

            if (isMatch) {
              numMatches += 1;
              totalScore += score;

              if (includeMatches) {
                var type = searcher.constructor.type;

                if (MultiMatchSet.has(type)) {
                  allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
                } else {
                  allIndices.push(indices);
                }
              }
            } else {
              totalScore = 0;
              numMatches = 0;
              allIndices.length = 0;
              break;
            }
          } // OR condition, so if TRUE, return


          if (numMatches) {
            var result = {
              isMatch: true,
              score: totalScore / numMatches
            };

            if (includeMatches) {
              result.indices = allIndices;
            }

            return result;
          }
        } // Nothing was matched


        return {
          isMatch: false,
          score: 1
        };
      }
    }], [{
      key: "condition",
      value: function condition(_, options) {
        return options.useExtendedSearch;
      }
    }]);

    return ExtendedSearch;
  }();

  var registeredSearchers = [];
  function register() {
    registeredSearchers.push.apply(registeredSearchers, arguments);
  }
  function createSearcher(pattern, options) {
    for (var i = 0, len = registeredSearchers.length; i < len; i += 1) {
      var searcherClass = registeredSearchers[i];

      if (searcherClass.condition(pattern, options)) {
        return new searcherClass(pattern, options);
      }
    }

    return new BitapSearch(pattern, options);
  }

  var LogicalOperator = {
    AND: '$and',
    OR: '$or'
  };

  var isExpression = function isExpression(query) {
    return !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
  };

  var isLeaf = function isLeaf(query) {
    return !isArray(query) && isObject(query) && !isExpression(query);
  };

  var convertToExplicit = function convertToExplicit(query) {
    return _defineProperty({}, LogicalOperator.AND, Object.keys(query).map(function (key) {
      return _defineProperty({}, key, query[key]);
    }));
  }; // When `auto` is `true`, the parse function will infer and initialize and add
  // the appropriate `Searcher` instance


  function parse(query, options) {
    var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref3$auto = _ref3.auto,
        auto = _ref3$auto === void 0 ? true : _ref3$auto;

    var next = function next(query) {
      var keys = Object.keys(query);

      if (keys.length > 1 && !isExpression(query)) {
        return next(convertToExplicit(query));
      }

      var key = keys[0];

      if (isLeaf(query)) {
        var pattern = query[key];

        if (!isString(pattern)) {
          throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
        }

        var obj = {
          key: key,
          pattern: pattern
        };

        if (auto) {
          obj.searcher = createSearcher(pattern, options);
        }

        return obj;
      }

      var node = {
        children: [],
        operator: key
      };
      keys.forEach(function (key) {
        var value = query[key];

        if (isArray(value)) {
          value.forEach(function (item) {
            node.children.push(next(item));
          });
        }
      });
      return node;
    };

    if (!isExpression(query)) {
      query = convertToExplicit(query);
    }

    return next(query);
  }

  var Fuse = /*#__PURE__*/function () {
    function Fuse(docs) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var index = arguments.length > 2 ? arguments[2] : undefined;

      _classCallCheck(this, Fuse);

      this.options = _objectSpread2({}, Config, {}, options);

      if (this.options.useExtendedSearch && !true) {
        throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
      }

      this._keyStore = new KeyStore(this.options.keys);
      this.setCollection(docs, index);
    }

    _createClass(Fuse, [{
      key: "setCollection",
      value: function setCollection(docs, index) {
        this._docs = docs;

        if (index && !(index instanceof FuseIndex)) {
          throw new Error(INCORRECT_INDEX_TYPE);
        }

        this._myIndex = index || createIndex(this._keyStore.keys(), this._docs, {
          getFn: this.options.getFn
        });
      }
    }, {
      key: "add",
      value: function add(doc) {
        if (!isDefined(doc)) {
          return;
        }

        this._docs.push(doc);

        this._myIndex.add(doc);
      }
    }, {
      key: "removeAt",
      value: function removeAt(idx) {
        this._docs.splice(idx, 1);

        this._myIndex.removeAt(idx);
      }
    }, {
      key: "getIndex",
      value: function getIndex() {
        return this._myIndex;
      }
    }, {
      key: "search",
      value: function search(query) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$limit = _ref.limit,
            limit = _ref$limit === void 0 ? -1 : _ref$limit;

        var _this$options = this.options,
            includeMatches = _this$options.includeMatches,
            includeScore = _this$options.includeScore,
            shouldSort = _this$options.shouldSort,
            sortFn = _this$options.sortFn;
        var results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
        computeScore$1(results, this._keyStore);

        if (shouldSort) {
          results.sort(sortFn);
        }

        if (isNumber(limit) && limit > -1) {
          results = results.slice(0, limit);
        }

        return format(results, this._docs, {
          includeMatches: includeMatches,
          includeScore: includeScore
        });
      }
    }, {
      key: "_searchStringList",
      value: function _searchStringList(query) {
        var searcher = createSearcher(query, this.options);
        var records = this._myIndex.records;
        var results = []; // Iterate over every string in the index

        records.forEach(function (_ref2) {
          var text = _ref2.v,
              idx = _ref2.i,
              norm = _ref2.n;

          if (!isDefined(text)) {
            return;
          }

          var _searcher$searchIn = searcher.searchIn(text),
              isMatch = _searcher$searchIn.isMatch,
              score = _searcher$searchIn.score,
              indices = _searcher$searchIn.indices;

          if (isMatch) {
            results.push({
              item: text,
              idx: idx,
              matches: [{
                score: score,
                value: text,
                norm: norm,
                indices: indices
              }]
            });
          }
        });
        return results;
      }
    }, {
      key: "_searchLogical",
      value: function _searchLogical(query) {
        var _this = this;

        var expression = parse(query, this.options);
        var _this$_myIndex = this._myIndex,
            keys = _this$_myIndex.keys,
            records = _this$_myIndex.records;
        var resultMap = {};
        var results = [];

        var evaluateExpression = function evaluateExpression(node, item, idx) {
          if (node.children) {
            var operator = node.operator;
            var res = [];

            for (var k = 0; k < node.children.length; k += 1) {
              var child = node.children[k];
              var matches = evaluateExpression(child, item, idx);

              if (matches && matches.length) {
                res.push({
                  idx: idx,
                  item: item,
                  matches: matches
                });

                if (operator === LogicalOperator.OR) {
                  // Short-circuit
                  break;
                }
              } else if (operator === LogicalOperator.AND) {
                res.length = 0; // Short-circuit

                break;
              }
            }

            if (res.length) {
              // Dedupe when adding
              if (!resultMap[idx]) {
                resultMap[idx] = {
                  idx: idx,
                  item: item,
                  matches: []
                };
                results.push(resultMap[idx]);
              }

              res.forEach(function (_ref3) {
                var _resultMap$idx$matche;

                var matches = _ref3.matches;

                (_resultMap$idx$matche = resultMap[idx].matches).push.apply(_resultMap$idx$matche, _toConsumableArray(matches));
              });
            }
          } else {
            var key = node.key,
                searcher = node.searcher;
            var value = item[keys.indexOf(key)];
            return _this._findMatches({
              key: key,
              value: value,
              searcher: searcher
            });
          }
        };

        records.forEach(function (_ref4) {
          var item = _ref4.$,
              idx = _ref4.i;

          if (isDefined(item)) {
            evaluateExpression(expression, item, idx);
          }
        });
        return results;
      }
    }, {
      key: "_searchObjectList",
      value: function _searchObjectList(query) {
        var _this2 = this;

        var searcher = createSearcher(query, this.options);
        var _this$_myIndex2 = this._myIndex,
            keys = _this$_myIndex2.keys,
            records = _this$_myIndex2.records;
        var results = []; // List is Array<Object>

        records.forEach(function (_ref5) {
          var item = _ref5.$,
              idx = _ref5.i;

          if (!isDefined(item)) {
            return;
          }

          var matches = []; // Iterate over every key (i.e, path), and fetch the value at that key

          keys.forEach(function (key, keyIndex) {
            matches.push.apply(matches, _toConsumableArray(_this2._findMatches({
              key: key,
              value: item[keyIndex],
              searcher: searcher
            })));
          });

          if (matches.length) {
            results.push({
              idx: idx,
              item: item,
              matches: matches
            });
          }
        });
        return results;
      }
    }, {
      key: "_findMatches",
      value: function _findMatches(_ref6) {
        var key = _ref6.key,
            value = _ref6.value,
            searcher = _ref6.searcher;

        if (!isDefined(value)) {
          return [];
        }

        var matches = [];

        if (isArray(value)) {
          value.forEach(function (_ref7) {
            var text = _ref7.v,
                idx = _ref7.i,
                norm = _ref7.n;

            if (!isDefined(text)) {
              return;
            }

            var _searcher$searchIn2 = searcher.searchIn(text),
                isMatch = _searcher$searchIn2.isMatch,
                score = _searcher$searchIn2.score,
                indices = _searcher$searchIn2.indices;

            if (isMatch) {
              matches.push({
                score: score,
                key: key,
                value: text,
                idx: idx,
                norm: norm,
                indices: indices
              });
            }
          });
        } else {
          var text = value.v,
              norm = value.n;

          var _searcher$searchIn3 = searcher.searchIn(text),
              isMatch = _searcher$searchIn3.isMatch,
              score = _searcher$searchIn3.score,
              indices = _searcher$searchIn3.indices;

          if (isMatch) {
            matches.push({
              score: score,
              key: key,
              value: text,
              norm: norm,
              indices: indices
            });
          }
        }

        return matches;
      }
    }]);

    return Fuse;
  }(); // Practical scoring function

  function computeScore$1(results, keyStore) {
    results.forEach(function (result) {
      var totalScore = 1;
      result.matches.forEach(function (_ref8) {
        var key = _ref8.key,
            norm = _ref8.norm,
            score = _ref8.score;
        var weight = keyStore.get(key, 'weight');
        totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * norm);
      });
      result.score = totalScore;
    });
  }

  function format(results, docs) {
    var _ref9 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref9$includeMatches = _ref9.includeMatches,
        includeMatches = _ref9$includeMatches === void 0 ? Config.includeMatches : _ref9$includeMatches,
        _ref9$includeScore = _ref9.includeScore,
        includeScore = _ref9$includeScore === void 0 ? Config.includeScore : _ref9$includeScore;

    var transformers = [];
    if (includeMatches) transformers.push(transformMatches);
    if (includeScore) transformers.push(transformScore);
    return results.map(function (result) {
      var idx = result.idx;
      var data = {
        item: docs[idx],
        refIndex: idx
      };

      if (transformers.length) {
        transformers.forEach(function (transformer) {
          transformer(result, data);
        });
      }

      return data;
    });
  }

  Fuse.version = '6.0.0';
  Fuse.createIndex = createIndex;
  Fuse.parseIndex = parseIndex;
  Fuse.config = Config;

  {
    Fuse.parseQuery = parse;
  }

  {
    register(ExtendedSearch);
  }

  return Fuse;

})));


/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const firebaseConfig = {
  apiKey: 'AIzaSyCf2tK8OJqQTOLNfkzfFDOXnnZNYs-hbZQ',
  authDomain: 'lastpass-e39d8.firebaseapp.com',
  databaseURL: 'https://lastpass-e39d8.firebaseio.com',
  projectId: 'lastpass-e39d8',
  storageBucket: 'lastpass-e39d8.appspot.com',
  messagingSenderId: '623457979411',
  appId: '1:623457979411:web:832fde345bafa043dc43e6',
};
/* harmony default export */ __webpack_exports__["default"] = (firebaseConfig);


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _node_modules_fuse_js_dist_fuse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/fuse.js/dist/fuse */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var _node_modules_fuse_js_dist_fuse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fuse_js_dist_fuse__WEBPACK_IMPORTED_MODULE_1__);



(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const profilePicture = document.getElementById('profile-picture');
      const emailId = document.getElementById('email-id');
      const settingsMenu = document.getElementById('settings-menu');
      const logout = document.getElementById('logout');
      const model = {
        user: { },
        password: {
          url: '',
          name: '',
          username: '',
          sitePassword: '',
          notes: '',
        },
        filteredPasswords: [],
        passwords: [],
        passwordID: null,
      };
      const view = {
        addPassword: document.getElementById('add-password'),
        passwordContent: document.getElementById('password-content'),
        closeModal: document.getElementById('close-modal'),
        urlInput: document.getElementById('url-input'),
        urlInputIcon: document.getElementById('url-input-icon'),
        urlInputHelp: document.getElementById('url-input-help'),
        nameInput: document.getElementById('name-input'),
        nameInputIcon: document.getElementById('name-input-icon'),
        nameInputHelp: document.getElementById('name-input-help'),
        userNameInput: document.getElementById('username-input'),
        userNameInputIcon: document.getElementById('username-input-icon'),
        userNameInputHelp: document.getElementById('username-input-help'),
        passwordInput: document.getElementById('password-input'),
        passwordInputIcon: document.getElementById('password-input-icon'),
        passwordInputHelp: document.getElementById('password-input-help'),
        notesInput: document.getElementById('notes-input'),
        notesInputHelp: document.getElementById('notes-input-help'),
        savePassword: document.getElementById('save-password'),
        search: document.getElementById('search'),
        init: () => {
          view.search.oninput = () => {
            controller.handleSearchInput();
          },
          view.urlInput.oninput = () => {
            controller.handleUrlInput(view.urlInput.value);
          },
          view.nameInput.oninput = () => {
            controller.handleNameInput(view.nameInput.value);
          },
          view.userNameInput.oninput = () => {
            controller.handleUserNameInput(view.userNameInput.value);
          },
          view.passwordInput.oninput = () => {
            controller.handlePasswordInput(view.passwordInput.value);
          },
          view.notesInput.oninput = () => {
            controller.handleNotesInput(view.notesInput.value);
          },
          view.addPassword.onclick = () => {
            view.passwordContent.classList.add('is-active');
          },
          view.closeModal.onclick = () => {
            view.passwordContent.classList.remove('is-active');
            controller.resetForm();
          },
          settingsMenu.onclick = () => {
            settingsMenu.classList.toggle('is-active');
          },
          logout.onclick = () => {
            controller.logout();
          },
          view.savePassword.onclick = controller.savePasswords;
          view.render();
        },
        render: () => {
          profilePicture.src = model.user.photoURL;
          emailId.innerHTML = model.user.email;
        },
      };
      const displayView = {
        passwordDisplayList: document.getElementById('password-display-list'),
        init: () => {
          controller.handleSearchInput();
          displayView.render();
        },
        render: () => {
          displayView.passwordDisplayList.innerHTML = ``;
          model.filteredPasswords.forEach((password) => {
            const card = document.createElement('div');
            card.classList.add('card');
            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');
            cardContent.innerHTML = `
              <p class="title">
                ${password.username}
              </p>
              <p class="subtitle">
                ${password.name}
              </p>
              `;
            const launchButton = document.createElement('button');
            launchButton.classList.add('launch-button', 'is-success', 'button');
            launchButton.innerHTML = `
              <span class="icon">
                <i class="fas fa-link"></i>
              </span>
              <span>
                Launch
              </span>
            `;
            cardContent.appendChild(launchButton);
            const footer = document.createElement('footer');
            footer.classList.add('card-footer');
            const buttonTagEdit = document.createElement('p');
            buttonTagEdit.classList.add('card-footer-item');
            const editButton = document.createElement('button');
            editButton.classList.add('button', 'is-info');
            editButton.innerHTML = `
              <span class="icon">
                <i class="fas fa-edit"></i>
              </span>
              <span>
                Edit
              </span>
            `;
            editButton.onclick = () => {
              updateController.editPassword(password.id, password);
            };
            const buttonTagDelete = document.createElement('p');
            buttonTagDelete.classList.add('card-footer-item');
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('button', 'is-danger');
            deleteButton.innerHTML = `
              <span class="icon">
                <i class="fas fa-trash"></i>
              </span>
              <span>
                Delete
              </span>
            `;
            deleteButton.onclick = () => {
              updateController.deletePassword(password.id);
            };
            buttonTagEdit.appendChild(editButton);
            buttonTagDelete.appendChild(deleteButton);
            footer.appendChild(buttonTagEdit);
            footer.appendChild(buttonTagDelete);
            card.appendChild(cardContent);
            card.appendChild(footer);
            displayView.passwordDisplayList.appendChild(card);
            card.onmouseover = () => {
              launchButton.classList.remove('launch-button');
            };
            card.onmouseout = () => {
              launchButton.classList.add('launch-button');
            };
            launchButton.onclick = () => {
              updateController.launchWebsite(password.id, password);
            };
          });
        },
      };
      const controller = {
        handleSearchInput: () => {
          const fuse = new _node_modules_fuse_js_dist_fuse__WEBPACK_IMPORTED_MODULE_1__(model.passwords, {
            keys: ['name', 'username'],
          });
          if (view.search.value) {
            const passwords = [];
            fuse.search(view.search.value).forEach((searchPassword) => {
              passwords.push(searchPassword.item);
            });
            controller.setFilteredPasswords(passwords);
          } else {
            controller.setFilteredPasswords(model.passwords);
          }
        },
        setFilteredPasswords: (passwords) => {
          model.filteredPasswords = passwords;
          displayView.render();
        },
        handleNotesInput: (name) => {
          if (controller.validateNotes(name)) {
            view.notesInput.classList.add('is-success');
            view.notesInput.classList.remove('is-danger');
            view.notesInputHelp.classList.add('is-success');
            view.notesInputHelp.classList.remove('is-danger');
            view.notesInputHelp.innerHTML = `Notes sounds good`;
          } else {
            view.notesInput.classList.remove('is-success');
            view.notesInput.classList.add('is-danger');
            view.notesInputHelp.classList.remove('is-success');
            view.notesInputHelp.classList.add('is-danger');
            view.notesInputHelp.innerHTML = `Fill valid notes`;
          }
        },
        handlePasswordInput: (name) => {
          if (controller.validatePassword(name)) {
            view.passwordInput.classList.add('is-success');
            view.passwordInput.classList.remove('is-danger');
            view.passwordInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            view.passwordInputHelp.classList.add('is-success');
            view.passwordInputHelp.classList.remove('is-danger');
            view.passwordInputHelp.innerHTML = `Password is valid`;
          } else {
            view.passwordInput.classList.remove('is-success');
            view.passwordInput.classList.add('is-danger');
            view.passwordInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
              `;
            view.passwordInputHelp.classList.remove('is-success');
            view.passwordInputHelp.classList.add('is-danger');
            view.passwordInputHelp.innerHTML = `Fill a Valid Password`;
          }
        },
        handleUserNameInput: (name) => {
          if (controller.validateUserName(name)) {
            view.userNameInput.classList.remove('is-danger');
            view.userNameInput.classList.add('is-success');
            view.userNameInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            view.userNameInputHelp.classList.add('is-success');
            view.userNameInputHelp.classList.remove('is-danger');
            view.userNameInputHelp.innerHTML = `Username is valid`;
          } else {
            view.userNameInput.classList.remove('is-success');
            view.userNameInput.classList.add('is-danger');
            view.userNameInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
              `;
            view.userNameInputHelp.classList.remove('is-success');
            view.userNameInputHelp.classList.add('is-danger');
            view.userNameInputHelp.innerHTML = `Fill a Valid Username`;
          }
        },
        handleNameInput: (name) => {
          if (controller.validateName(name)) {
            view.nameInput.classList.remove('is-danger');
            view.nameInput.classList.add('is-success');
            view.nameInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            view.nameInputHelp.classList.add('is-success');
            view.nameInputHelp.classList.remove('is-danger');
            view.nameInputHelp.innerHTML = `Name is valid`;
          } else {
            view.nameInput.classList.remove('is-success');
            view.nameInput.classList.add('is-danger');
            view.nameInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
            `;
            view.nameInputHelp.classList.remove('is-success');
            view.nameInputHelp.classList.add('is-danger');
            view.nameInputHelp.innerHTML = `Fill a valid name`;
          }
        },
        handleUrlInput: (name) => {
          if (controller.validateUrl(name)) {
            view.urlInput.classList.add('is-success');
            view.urlInput.classList.remove('is-danger');
            view.urlInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            view.urlInputHelp.classList.add('is-success');
            view.urlInputHelp.classList.remove('is-danger');
            view.urlInputHelp.innerHTML = `Url is valid`;
          } else {
            view.urlInput.classList.remove('is-success');
            view.urlInput.classList.add('is-danger');
            view.urlInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
              `;
            view.urlInputHelp.classList.remove('is-success');
            view.urlInputHelp.classList.add('is-danger');
            view.urlInputHelp.innerHTML = `Fill a valid Url`;
          }
        },
        validateNotes: (name) => {
          return name.length > 100;
        },
        validatePassword: (name) => {
          return name.length > 5;
        },
        validateUserName: (name) => {
          return name.length > 6;
        },
        validateName: (name) => {
          return name.length > 5;
        },
        validateUrl: (name) => {
          return name.length > 10;
        },
        validateAll: () => {
          return controller.validateUrl(view.urlInput.value) &&
          controller.validateName(view.nameInput.value) &&
          controller.validateUserName(view.userNameInput.value) &&
          controller.validatePassword(view.passwordInput.value) &&
          controller.validateNotes(view.notesInput.value);
        },
        resetForm: () => {
          const passwordForm = document.getElementById('saved-password-form');
          passwordForm.innerHTML =`
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field">
                    <label class="label">URL:</label>
                    <div class="control has-icons-left has-icons-right">
                      <input 
                        class="input" 
                        type="text" 
                        placeholder="" 
                        id="url-input"
                      >
                      <span class="icon is-small is-left">
                        <i class="fas fa-link"></i>
                      </span>
                      <span id="url-input-icon" class="icon is-small is-right">
                      </span>
                    </div>
                  </div>
                  <p id="url-input-help" class="help">
                    Fill the url
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field">
                    <label class="label">Name:</label>
                    <div class="control has-icons-left has-icons-right">
                      <input 
                        class="input" 
                        type="text" 
                        placeholder="" 
                        id="name-input"
                      >
                      <span class="icon is-small is-left">
                        <i class="fas fa-file-signature"></i>
                      </span>
                      <span id="name-input-icon" class="icon is-small is-right">
                      </span>
                    </div>
                  </div>
                  <p id="name-input-help" class="help">
                    Fill the Name
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <label class="label">Username:</label>
                  <div class="control has-icons-left has-icons-right">
                    <input 
                      class="input" 
                      type="text" 
                      placeholder="" 
                      id="username-input"
                    >
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span 
                      id="username-input-icon" 
                      class="icon is-small is-right"
                    >
                    </span>
                  </div>
                  <p id="username-input-help" class="help">
                    Fill the Userame
                  </p>
                </div>
                <div class="field">
                  <label class="label">Site Password</label>
                  <div class="control has-icons-left has-icons-right">
                    <input 
                      class="input" 
                      type="password" 
                      placeholder="" 
                      id="password-input"
                    >
                    <span class="icon is-small is-left">
                      <i class="fas fa-unlock"></i>
                    </span>
                    <span 
                      id="password-input-icon" 
                      class="icon is-small is-right"
                    >
                    </span>
                  </div>
                  <p id="password-input-help" class="help">
                    Fill the Password
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field">
                    <label class="label">Notes:</label>
                    <div class="control">
                      <textarea 
                        class="textarea" 
                        placeholder="" 
                        id="notes-input"
                      ></textarea>
                    </div>
                  </div>
                  <p id="notes-input-help" class="help">
                    Fill the Notes
                  </p>
                </div>
              </div>
            </div>
              `;
          view.addPassword = document.getElementById('add-password');
          view.passwordContent = document.getElementById('password-content');
          view.closeModal = document.getElementById('close-modal');
          view.urlInput = document.getElementById('url-input');
          view.urlInputIcon = document.getElementById('url-input-icon');
          view.urlInputHelp = document.getElementById('url-input-help');
          view.nameInput = document.getElementById('name-input');
          view.nameInputIcon = document.getElementById('name-input-icon');
          view.nameInputHelp = document.getElementById('name-input-help');
          view.userNameInput = document.getElementById('username-input');
          view.userNameInputIcon = document.getElementById(
              'username-input-icon');
          view.userNameInputHelp = document.getElementById(
              'username-input-help');
          view.passwordInput = document.getElementById('password-input');
          view.passwordInputIcon = document.getElementById(
              'password-input-icon');
          view.passwordInputHelp = document.getElementById(
              'password-input-help');
          view.notesInput = document.getElementById('notes-input');
          view.notesInputHelp = document.getElementById('notes-input-help');
          view.savePassword = document.getElementById('save-password');
          view.savePassword.innerText = `Save`;
          view.init();
        },
        updatePassword: () => {
          view.passwordContent.classList.add('is-active');
          view.urlInput.value = model.password.url;
          view.nameInput.value = model.password.name;
          view.userNameInput.value = model.password.username;
          view.passwordInput.value = model.password.sitePassword;
          view.notesInput.value = model.password.notes;
          view.savePassword.innerHTML = `Update`;
          controller.handleUrlInput(view.urlInput.value);
          controller.handleUserNameInput(view.userNameInput.value);
          controller.handleNameInput(view.nameInput.value);
          controller.handlePasswordInput(view.passwordInput.value);
          controller.handleNotesInput(view.notesInput.value);
          view.savePassword.onclick = () => {
            updateController.updatePasswordInDb();
          };
        },
        savePasswords: () => {
          if (!(controller.validateAll())) {
            alert('Fill all areas');
          }
          db.collection('storePassword').add({
            url: view.urlInput.value,
            name: view.nameInput.value,
            username: view.userNameInput.value,
            sitePassword: view.passwordInput.value,
            notes: view.notesInput.value,
          })
              .then(() => {
                controller.resetForm();
                model.productID = null;
              })
              .catch((err) => {
                alert('please try later');
              });
          view.passwordContent.classList.remove('is-active');
        },
        launchRespectiveSite: () => {
          window.open(`${model.password.url}`, '_blank');
        },
        logout: () => {
          firebase.auth().signOut();
        },
        setUser: (user) => {
          model.user = user;
          view.render();
        },
        init: () => {
          view.init();
        },
      };
      const updateController = {
        updatePasswordInDb: () => {
          db.collection('storePassword')
              .doc(model.passwordID)
              .update({
                url: view.urlInput.value,
                name: view.nameInput.value,
                username: view.userNameInput.value,
                sitePassword: view.passwordInput.value,
                notes: view.notesInput.value,
              })
              .then(() => {
                controller.resetForm();
                model.productID = null;
              })
              .catch((err) => {
                alert('please try later');
              });
          view.passwordContent.classList.remove('is-active');
        },
        launchWebsite: (passwordID, password) => {
          model.passwordID = passwordID;
          model.password = password;
          controller.launchRespectiveSite();
        },
        editPassword: (passwordID, password) => {
          model.passwordID = passwordID;
          model.password = password;
          controller.updatePassword();
        },
        deletePassword: (id) => {
          db.collection('storePassword')
              .doc(id)
              .delete()
              .then(() => {
              })
              .catch(() => {
                alert('Failed to delete password');
              });
        },
        setPassword: (passwords) => {
          model.passwords = passwords;
          displayView.init();
        },
        init: () => {
          db.collection('storePassword').onSnapshot(
              (docSnapshot) => {
                const passwords = [];
                docSnapshot.forEach((doc) => {
                  if (doc.exists) {
                    const password = doc.data();
                    password.id = doc.id;
                    passwords.push(password);
                  }
                });
                updateController.setPassword(passwords);
              },
              (err) => {
                alert(err);
              });
          displayView.init();
        },
      };
      firebase.initializeApp(_config__WEBPACK_IMPORTED_MODULE_0__["default"]);
      const db = firebase.firestore();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          controller.init();
          controller.setUser(user);
          updateController.init();
        } else {
          window.location.href = './index.html';
        }
      });
    }
  }
)();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLEtBQTREO0FBQzlELEVBQUUsU0FDa0Q7QUFDcEQsQ0FBQyxxQkFBcUI7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQyxTQUFTOztBQUVuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFCQUFxQjs7QUFFckIsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0Isa0JBQWtCLGtCQUFrQjs7QUFFdEYsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxPQUFPOztBQUVQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEMsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLFNBQVM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7O0FBRXBDLDhCQUE4Qjs7QUFFOUIsb0VBQW9FOztBQUVwRSxxQ0FBcUM7O0FBRXJDLHdDQUF3Qzs7QUFFeEM7O0FBRUE7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0E7O0FBRUEsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSx3R0FBd0c7O0FBRXhHO0FBQ0E7O0FBRUEsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1QseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLHlDQUF5QyxTQUFTO0FBQ2xELGlDQUFpQzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCLDRDQUE0QyxVQUFVO0FBQ3RELG1DQUFtQzs7QUFFbkM7QUFDQSx5QkFBeUI7O0FBRXpCLGtEQUFrRCxVQUFVO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsU0FBUztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0Esc0ZBQXNGO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNDQUFzQyxZQUFZOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUZBQXlGO0FBQ3pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUcsR0FBRzs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxzRkFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3L0REO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsNkVBQWMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1Q5QjtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNvQjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNERBQUk7QUFDL0I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFNBQVM7QUFDVDtBQUNBLDZCQUE2QiwrQ0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EiLCJmaWxlIjoidXNlci1kaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdXNlci5qc1wiKTtcbiIsIi8qKlxuICogRnVzZS5qcyB2Ni4wLjAgLSBMaWdodHdlaWdodCBmdXp6eS1zZWFyY2ggKGh0dHA6Ly9mdXNlanMuaW8pXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIEtpcm8gUmlzayAoaHR0cDovL2tpcm8ubWUpXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLiBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjBcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkZ1c2UgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgICBpZiAoaSAlIDIpIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gICAgfTtcbiAgICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICAgIG8uX19wcm90b19fID0gcDtcbiAgICAgIHJldHVybiBvO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xuICB9XG5cbiAgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gICAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgcmV0dXJuIGNhbGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgICAgcmVzdWx0O1xuXG4gICAgICBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG5cbiAgICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgIGlmICghbykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7XG4gICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9XG5cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiAhQXJyYXkuaXNBcnJheSA/IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgfSAvLyBBZGFwdGVkIGZyb206XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvZjRjYTM5NmE3OTY0MzU0MjJiZDRmZDQxZmFkYmQyMjVlZGRkZjE3NS8uaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzXG5cbiAgdmFyIElORklOSVRZID0gMSAvIDA7XG4gIGZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAgIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB2YWx1ZSArICcnO1xuICAgIHJldHVybiByZXN1bHQgPT0gJzAnICYmIDEgLyB2YWx1ZSA9PSAtSU5GSU5JVFkgPyAnLTAnIDogcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgfVxuICBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9XG4gIGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JztcbiAgfVxuICBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiBpc0JsYW5rKHZhbHVlKSB7XG4gICAgcmV0dXJuICF2YWx1ZS50cmltKCkubGVuZ3RoO1xuICB9XG5cbiAgdmFyIEVYVEVOREVEX1NFQVJDSF9VTkFWQUlMQUJMRSA9ICdFeHRlbmRlZCBzZWFyY2ggaXMgbm90IGF2YWlsYWJsZSc7XG4gIHZhciBJTkNPUlJFQ1RfSU5ERVhfVFlQRSA9IFwiSW5jb3JyZWN0ICdpbmRleCcgdHlwZVwiO1xuICB2YXIgTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZID0gZnVuY3Rpb24gTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZKGtleSkge1xuICAgIHJldHVybiBcIkludmFsaWQgdmFsdWUgZm9yIGtleSBcIi5jb25jYXQoa2V5KTtcbiAgfTtcbiAgdmFyIFBBVFRFUk5fTEVOR1RIX1RPT19MQVJHRSA9IGZ1bmN0aW9uIFBBVFRFUk5fTEVOR1RIX1RPT19MQVJHRShtYXgpIHtcbiAgICByZXR1cm4gXCJQYXR0ZXJuIGxlbmd0aCBleGNlZWRzIG1heCBvZiBcIi5jb25jYXQobWF4LCBcIi5cIik7XG4gIH07XG4gIHZhciBNSVNTSU5HX0tFWV9QUk9QRVJUWSA9IGZ1bmN0aW9uIE1JU1NJTkdfS0VZX1BST1BFUlRZKG5hbWUpIHtcbiAgICByZXR1cm4gXCJNaXNzaW5nIFwiLmNvbmNhdChuYW1lLCBcIiBwcm9wZXJ0eSBpbiBrZXlcIik7XG4gIH07XG4gIHZhciBJTlZBTElEX0tFWV9XRUlHSFRfVkFMVUUgPSBmdW5jdGlvbiBJTlZBTElEX0tFWV9XRUlHSFRfVkFMVUUoa2V5KSB7XG4gICAgcmV0dXJuIFwiUHJvcGVydHkgJ3dlaWdodCcgaW4ga2V5ICdcIi5jb25jYXQoa2V5LCBcIicgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIik7XG4gIH07XG5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgdmFyIEtleVN0b3JlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZXlTdG9yZShrZXlzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5U3RvcmUpO1xuXG4gICAgICB0aGlzLl9rZXlzID0ge307XG4gICAgICB0aGlzLl9rZXlOYW1lcyA9IFtdO1xuICAgICAgdmFyIHRvdGFsV2VpZ2h0ID0gMDtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBrZXlOYW1lO1xuICAgICAgICB2YXIgd2VpZ2h0ID0gMTtcblxuICAgICAgICBpZiAoaXNTdHJpbmcoa2V5KSkge1xuICAgICAgICAgIGtleU5hbWUgPSBrZXk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFoYXNPd24uY2FsbChrZXksICduYW1lJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihNSVNTSU5HX0tFWV9QUk9QRVJUWSgnbmFtZScpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBrZXlOYW1lID0ga2V5Lm5hbWU7XG5cbiAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoa2V5LCAnd2VpZ2h0JykpIHtcbiAgICAgICAgICAgIHdlaWdodCA9IGtleS53ZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmICh3ZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFKGtleU5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5fa2V5TmFtZXMucHVzaChrZXlOYW1lKTtcblxuICAgICAgICBfdGhpcy5fa2V5c1trZXlOYW1lXSA9IHtcbiAgICAgICAgICB3ZWlnaHQ6IHdlaWdodFxuICAgICAgICB9O1xuICAgICAgICB0b3RhbFdlaWdodCArPSB3ZWlnaHQ7XG4gICAgICB9KTsgLy8gTm9ybWFsaXplIHdlaWdodHMgc28gdGhhdCB0aGVpciBzdW0gaXMgZXF1YWwgdG8gMVxuXG4gICAgICB0aGlzLl9rZXlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMuX2tleXNba2V5XS53ZWlnaHQgLz0gdG90YWxXZWlnaHQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoS2V5U3RvcmUsIFt7XG4gICAgICBrZXk6IFwiZ2V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSwgbmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1trZXldICYmIHRoaXMuX2tleXNba2V5XVtuYW1lXTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwia2V5c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlOYW1lcztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidG9KU09OXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fa2V5cyk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEtleVN0b3JlO1xuICB9KCk7XG5cbiAgZnVuY3Rpb24gZ2V0KG9iaiwgcGF0aCkge1xuICAgIHZhciBsaXN0ID0gW107XG4gICAgdmFyIGFyciA9IGZhbHNlO1xuXG4gICAgdmFyIGRlZXBHZXQgPSBmdW5jdGlvbiBkZWVwR2V0KG9iaiwgcGF0aCkge1xuICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGF0aCBsZWZ0LCB3ZSd2ZSBhcnJpdmVkIGF0IHRoZSBvYmplY3Qgd2UgY2FyZSBhYm91dC5cbiAgICAgICAgbGlzdC5wdXNoKG9iaik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZG90SW5kZXggPSBwYXRoLmluZGV4T2YoJy4nKTtcbiAgICAgICAgdmFyIGtleSA9IHBhdGg7XG4gICAgICAgIHZhciByZW1haW5pbmcgPSBudWxsO1xuXG4gICAgICAgIGlmIChkb3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBrZXkgPSBwYXRoLnNsaWNlKDAsIGRvdEluZGV4KTtcbiAgICAgICAgICByZW1haW5pbmcgPSBwYXRoLnNsaWNlKGRvdEluZGV4ICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlbWFpbmluZyAmJiAoaXNTdHJpbmcodmFsdWUpIHx8IGlzTnVtYmVyKHZhbHVlKSkpIHtcbiAgICAgICAgICBsaXN0LnB1c2godG9TdHJpbmcodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGFyciA9IHRydWU7IC8vIFNlYXJjaCBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICBkZWVwR2V0KHZhbHVlW2ldLCByZW1haW5pbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZW1haW5pbmcpIHtcbiAgICAgICAgICAvLyBBbiBvYmplY3QuIFJlY3Vyc2UgZnVydGhlci5cbiAgICAgICAgICBkZWVwR2V0KHZhbHVlLCByZW1haW5pbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlZXBHZXQob2JqLCBwYXRoKTtcbiAgICByZXR1cm4gYXJyID8gbGlzdCA6IGxpc3RbMF07XG4gIH1cblxuICB2YXIgTWF0Y2hPcHRpb25zID0ge1xuICAgIC8vIFdoZXRoZXIgdGhlIG1hdGNoZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSByZXN1bHQgc2V0LiBXaGVuIHRydWUsIGVhY2ggcmVjb3JkIGluIHRoZSByZXN1bHRcbiAgICAvLyBzZXQgd2lsbCBpbmNsdWRlIHRoZSBpbmRpY2VzIG9mIHRoZSBtYXRjaGVkIGNoYXJhY3RlcnMuXG4gICAgLy8gVGhlc2UgY2FuIGNvbnNlcXVlbnRseSBiZSB1c2VkIGZvciBoaWdobGlnaHRpbmcgcHVycG9zZXMuXG4gICAgaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICAgIC8vIFdoZW4gdHJ1ZSwgdGhlIG1hdGNoaW5nIGZ1bmN0aW9uIHdpbGwgY29udGludWUgdG8gdGhlIGVuZCBvZiBhIHNlYXJjaCBwYXR0ZXJuIGV2ZW4gaWZcbiAgICAvLyBhIHBlcmZlY3QgbWF0Y2ggaGFzIGFscmVhZHkgYmVlbiBsb2NhdGVkIGluIHRoZSBzdHJpbmcuXG4gICAgZmluZEFsbE1hdGNoZXM6IGZhbHNlLFxuICAgIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICAgIG1pbk1hdGNoQ2hhckxlbmd0aDogMVxuICB9O1xuICB2YXIgQmFzaWNPcHRpb25zID0ge1xuICAgIC8vIFdoZW4gdHJ1ZSwgdGhlIGFsZ29yaXRobSBjb250aW51ZXMgc2VhcmNoaW5nIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IGV2ZW4gaWYgYSBwZXJmZWN0XG4gICAgLy8gbWF0Y2ggaXMgZm91bmQgYmVmb3JlIHRoZSBlbmQgb2YgdGhlIHNhbWUgaW5wdXQuXG4gICAgaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAvLyBXaGVuIHRydWUsIHRoZSBtYXRjaGluZyBmdW5jdGlvbiB3aWxsIGNvbnRpbnVlIHRvIHRoZSBlbmQgb2YgYSBzZWFyY2ggcGF0dGVybiBldmVuIGlmXG4gICAgaW5jbHVkZVNjb3JlOiBmYWxzZSxcbiAgICAvLyBMaXN0IG9mIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHNlYXJjaGVkLiBUaGlzIGFsc28gc3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMuXG4gICAga2V5czogW10sXG4gICAgLy8gV2hldGhlciB0byBzb3J0IHRoZSByZXN1bHQgbGlzdCwgYnkgc2NvcmVcbiAgICBzaG91bGRTb3J0OiB0cnVlLFxuICAgIC8vIERlZmF1bHQgc29ydCBmdW5jdGlvbjogc29ydCBieSBhc2NlbmRpbmcgc2NvcmUsIGFzY2VuZGluZyBpbmRleFxuICAgIHNvcnRGbjogZnVuY3Rpb24gc29ydEZuKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLnNjb3JlID09PSBiLnNjb3JlID8gYS5pZHggPCBiLmlkeCA/IC0xIDogMSA6IGEuc2NvcmUgPCBiLnNjb3JlID8gLTEgOiAxO1xuICAgIH1cbiAgfTtcbiAgdmFyIEZ1enp5T3B0aW9ucyA9IHtcbiAgICAvLyBBcHByb3hpbWF0ZWx5IHdoZXJlIGluIHRoZSB0ZXh0IGlzIHRoZSBwYXR0ZXJuIGV4cGVjdGVkIHRvIGJlIGZvdW5kP1xuICAgIGxvY2F0aW9uOiAwLFxuICAgIC8vIEF0IHdoYXQgcG9pbnQgZG9lcyB0aGUgbWF0Y2ggYWxnb3JpdGhtIGdpdmUgdXAuIEEgdGhyZXNob2xkIG9mICcwLjAnIHJlcXVpcmVzIGEgcGVyZmVjdCBtYXRjaFxuICAgIC8vIChvZiBib3RoIGxldHRlcnMgYW5kIGxvY2F0aW9uKSwgYSB0aHJlc2hvbGQgb2YgJzEuMCcgd291bGQgbWF0Y2ggYW55dGhpbmcuXG4gICAgdGhyZXNob2xkOiAwLjYsXG4gICAgLy8gRGV0ZXJtaW5lcyBob3cgY2xvc2UgdGhlIG1hdGNoIG11c3QgYmUgdG8gdGhlIGZ1enp5IGxvY2F0aW9uIChzcGVjaWZpZWQgYWJvdmUpLlxuICAgIC8vIEFuIGV4YWN0IGxldHRlciBtYXRjaCB3aGljaCBpcyAnZGlzdGFuY2UnIGNoYXJhY3RlcnMgYXdheSBmcm9tIHRoZSBmdXp6eSBsb2NhdGlvblxuICAgIC8vIHdvdWxkIHNjb3JlIGFzIGEgY29tcGxldGUgbWlzbWF0Y2guIEEgZGlzdGFuY2Ugb2YgJzAnIHJlcXVpcmVzIHRoZSBtYXRjaCBiZSBhdFxuICAgIC8vIHRoZSBleGFjdCBsb2NhdGlvbiBzcGVjaWZpZWQsIGEgdGhyZXNob2xkIG9mICcxMDAwJyB3b3VsZCByZXF1aXJlIGEgcGVyZmVjdCBtYXRjaFxuICAgIC8vIHRvIGJlIHdpdGhpbiA4MDAgY2hhcmFjdGVycyBvZiB0aGUgZnV6enkgbG9jYXRpb24gdG8gYmUgZm91bmQgdXNpbmcgYSAwLjggdGhyZXNob2xkLlxuICAgIGRpc3RhbmNlOiAxMDBcbiAgfTtcbiAgdmFyIEFkdmFuY2VkT3B0aW9ucyA9IHtcbiAgICAvLyBXaGVuIHRydWUsIGl0IGVuYWJsZXMgdGhlIHVzZSBvZiB1bml4LWxpa2Ugc2VhcmNoIGNvbW1hbmRzXG4gICAgdXNlRXh0ZW5kZWRTZWFyY2g6IGZhbHNlLFxuICAgIC8vIFRoZSBnZXQgZnVuY3Rpb24gdG8gdXNlIHdoZW4gZmV0Y2hpbmcgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgICAvLyBUaGUgZGVmYXVsdCB3aWxsIHNlYXJjaCBuZXN0ZWQgcGF0aHMgKmllIGZvby5iYXIuYmF6KlxuICAgIGdldEZuOiBnZXRcbiAgfTtcbiAgdmFyIENvbmZpZyA9IF9vYmplY3RTcHJlYWQyKHt9LCBCYXNpY09wdGlvbnMsIHt9LCBNYXRjaE9wdGlvbnMsIHt9LCBGdXp6eU9wdGlvbnMsIHt9LCBBZHZhbmNlZE9wdGlvbnMpO1xuXG4gIHZhciBTUEFDRSA9IC9bXiBdKy9nOyAvLyBGaWVsZC1sZW5ndGggbm9ybTogdGhlIHNob3J0ZXIgdGhlIGZpZWxkLCB0aGUgaGlnaGVyIHRoZSB3ZWlnaHQuXG4gIC8vIFNldCB0byAzIGRlY2ltYWxzIHRvIHJlZHVjZSBpbmRleCBzaXplLlxuXG4gIGZ1bmN0aW9uIG5vcm0oKSB7XG4gICAgdmFyIG1hbnRpc3NhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAzO1xuICAgIHZhciBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodmFsdWUpIHtcbiAgICAgICAgdmFyIG51bVRva2VucyA9IHZhbHVlLm1hdGNoKFNQQUNFKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNhY2hlLmhhcyhudW1Ub2tlbnMpKSB7XG4gICAgICAgICAgcmV0dXJuIGNhY2hlLmdldChudW1Ub2tlbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KCgxIC8gTWF0aC5zcXJ0KG51bVRva2VucykpLnRvRml4ZWQobWFudGlzc2EpKTtcbiAgICAgICAgY2FjaGUuc2V0KG51bVRva2Vucywgbik7XG4gICAgICAgIHJldHVybiBuO1xuICAgICAgfSxcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIEZ1c2VJbmRleCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRnVzZUluZGV4KCkge1xuICAgICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICAgIF9yZWYkZ2V0Rm4gPSBfcmVmLmdldEZuLFxuICAgICAgICAgIGdldEZuID0gX3JlZiRnZXRGbiA9PT0gdm9pZCAwID8gQ29uZmlnLmdldEZuIDogX3JlZiRnZXRGbjtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZ1c2VJbmRleCk7XG5cbiAgICAgIHRoaXMubm9ybSA9IG5vcm0oMyk7XG4gICAgICB0aGlzLmdldEZuID0gZ2V0Rm47XG4gICAgICB0aGlzLmlzQ3JlYXRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRSZWNvcmRzKCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZ1c2VJbmRleCwgW3tcbiAgICAgIGtleTogXCJzZXRDb2xsZWN0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29sbGVjdGlvbigpIHtcbiAgICAgICAgdmFyIGRvY3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICAgICAgICB0aGlzLmRvY3MgPSBkb2NzO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRSZWNvcmRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmVjb3JkcygpIHtcbiAgICAgICAgdmFyIHJlY29yZHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICAgICAgICB0aGlzLnJlY29yZHMgPSByZWNvcmRzO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRLZXlzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0S2V5cygpIHtcbiAgICAgICAgdmFyIGtleXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICAgICAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjcmVhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDcmVhdGVkIHx8ICF0aGlzLmRvY3MubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0NyZWF0ZWQgPSB0cnVlOyAvLyBMaXN0IGlzIEFycmF5PFN0cmluZz5cblxuICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5kb2NzWzBdKSkge1xuICAgICAgICAgIHRoaXMuZG9jcy5mb3JFYWNoKGZ1bmN0aW9uIChkb2MsIGRvY0luZGV4KSB7XG4gICAgICAgICAgICBfdGhpcy5fYWRkU3RyaW5nKGRvYywgZG9jSW5kZXgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgICAgICAgIHRoaXMuZG9jcy5mb3JFYWNoKGZ1bmN0aW9uIChkb2MsIGRvY0luZGV4KSB7XG4gICAgICAgICAgICBfdGhpcy5fYWRkT2JqZWN0KGRvYywgZG9jSW5kZXgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3JtLmNsZWFyKCk7XG4gICAgICB9IC8vIEFkZHMgYSBkb2MgdG8gdGhlIGVuZCBvZiB0aGUgaW5kZXhcblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhZGRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoZG9jKSB7XG4gICAgICAgIHZhciBpZHggPSB0aGlzLnNpemUoKTtcblxuICAgICAgICBpZiAoaXNTdHJpbmcoZG9jKSkge1xuICAgICAgICAgIHRoaXMuX2FkZFN0cmluZyhkb2MsIGlkeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fYWRkT2JqZWN0KGRvYywgaWR4KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBSZW1vdmVzIHRoZSBkb2MgYXQgdGhlIHNwZWNpZmllZCBpbmRleCBvZiB0aGUgaW5kZXhcblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVBdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUF0KGlkeCkge1xuICAgICAgICB0aGlzLnJlY29yZHMuc3BsaWNlKGlkeCwgMSk7IC8vIENoYW5nZSByZWYgaW5kZXggb2YgZXZlcnkgc3Vic3F1ZW50IGRvY1xuXG4gICAgICAgIGZvciAodmFyIGkgPSBpZHgsIGxlbiA9IHRoaXMuc2l6ZSgpOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICB0aGlzLnJlY29yZHNbaV0uaSAtPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNpemVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FkZFN0cmluZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGRTdHJpbmcoZG9jLCBkb2NJbmRleCkge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZChkb2MpIHx8IGlzQmxhbmsoZG9jKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWNvcmQgPSB7XG4gICAgICAgICAgdjogZG9jLFxuICAgICAgICAgIGk6IGRvY0luZGV4LFxuICAgICAgICAgIG46IHRoaXMubm9ybS5nZXQoZG9jKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlY29yZHMucHVzaChyZWNvcmQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYWRkT2JqZWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FkZE9iamVjdChkb2MsIGRvY0luZGV4KSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB7XG4gICAgICAgICAgaTogZG9jSW5kZXgsXG4gICAgICAgICAgJDoge31cbiAgICAgICAgfTsgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuXG4gICAgICAgIHRoaXMua2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXksIGtleUluZGV4KSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMyLmdldEZuKGRvYywga2V5KTtcblxuICAgICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHN1YlJlY29yZHMgPSBbXTtcbiAgICAgICAgICAgICAgdmFyIHN0YWNrID0gW3tcbiAgICAgICAgICAgICAgICBuZXN0ZWRBcnJJbmRleDogLTEsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgIH1dO1xuXG4gICAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3N0YWNrJHBvcCA9IHN0YWNrLnBvcCgpLFxuICAgICAgICAgICAgICAgICAgICBuZXN0ZWRBcnJJbmRleCA9IF9zdGFjayRwb3AubmVzdGVkQXJySW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIF92YWx1ZSA9IF9zdGFjayRwb3AudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzRGVmaW5lZChfdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcoX3ZhbHVlKSAmJiAhaXNCbGFuayhfdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgc3ViUmVjb3JkID0ge1xuICAgICAgICAgICAgICAgICAgICB2OiBfdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGk6IG5lc3RlZEFyckluZGV4LFxuICAgICAgICAgICAgICAgICAgICBuOiBfdGhpczIubm9ybS5nZXQoX3ZhbHVlKVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHN1YlJlY29yZHMucHVzaChzdWJSZWNvcmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShfdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICBfdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaykge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXN0ZWRBcnJJbmRleDogayxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJlY29yZC4kW2tleUluZGV4XSA9IHN1YlJlY29yZHM7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgc3ViUmVjb3JkID0ge1xuICAgICAgICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgICAgICAgbjogX3RoaXMyLm5vcm0uZ2V0KHZhbHVlKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlY29yZC4kW2tleUluZGV4XSA9IHN1YlJlY29yZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlY29yZHMucHVzaChyZWNvcmQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ0b0pTT05cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5czogdGhpcy5rZXlzLFxuICAgICAgICAgIHJlY29yZHM6IHRoaXMucmVjb3Jkc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGdXNlSW5kZXg7XG4gIH0oKTtcbiAgZnVuY3Rpb24gY3JlYXRlSW5kZXgoa2V5cywgZG9jcykge1xuICAgIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICAgIF9yZWYyJGdldEZuID0gX3JlZjIuZ2V0Rm4sXG4gICAgICAgIGdldEZuID0gX3JlZjIkZ2V0Rm4gPT09IHZvaWQgMCA/IENvbmZpZy5nZXRGbiA6IF9yZWYyJGdldEZuO1xuXG4gICAgdmFyIG15SW5kZXggPSBuZXcgRnVzZUluZGV4KHtcbiAgICAgIGdldEZuOiBnZXRGblxuICAgIH0pO1xuICAgIG15SW5kZXguc2V0S2V5cyhrZXlzKTtcbiAgICBteUluZGV4LnNldENvbGxlY3Rpb24oZG9jcyk7XG4gICAgbXlJbmRleC5jcmVhdGUoKTtcbiAgICByZXR1cm4gbXlJbmRleDtcbiAgfVxuICBmdW5jdGlvbiBwYXJzZUluZGV4KGRhdGEpIHtcbiAgICB2YXIgX3JlZjMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICBfcmVmMyRnZXRGbiA9IF9yZWYzLmdldEZuLFxuICAgICAgICBnZXRGbiA9IF9yZWYzJGdldEZuID09PSB2b2lkIDAgPyBDb25maWcuZ2V0Rm4gOiBfcmVmMyRnZXRGbjtcblxuICAgIHZhciBrZXlzID0gZGF0YS5rZXlzLFxuICAgICAgICByZWNvcmRzID0gZGF0YS5yZWNvcmRzO1xuICAgIHZhciBteUluZGV4ID0gbmV3IEZ1c2VJbmRleCh7XG4gICAgICBnZXRGbjogZ2V0Rm5cbiAgICB9KTtcbiAgICBteUluZGV4LnNldEtleXMoa2V5cyk7XG4gICAgbXlJbmRleC5zZXRSZWNvcmRzKHJlY29yZHMpO1xuICAgIHJldHVybiBteUluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtTWF0Y2hlcyhyZXN1bHQsIGRhdGEpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IHJlc3VsdC5tYXRjaGVzO1xuICAgIGRhdGEubWF0Y2hlcyA9IFtdO1xuXG4gICAgaWYgKCFpc0RlZmluZWQobWF0Y2hlcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtYXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICBpZiAoIWlzRGVmaW5lZChtYXRjaC5pbmRpY2VzKSB8fCAhbWF0Y2guaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5kaWNlcyA9IG1hdGNoLmluZGljZXMsXG4gICAgICAgICAgdmFsdWUgPSBtYXRjaC52YWx1ZTtcbiAgICAgIHZhciBvYmogPSB7XG4gICAgICAgIGluZGljZXM6IGluZGljZXMsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfTtcblxuICAgICAgaWYgKG1hdGNoLmtleSkge1xuICAgICAgICBvYmoua2V5ID0gbWF0Y2gua2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2guaWR4ID4gLTEpIHtcbiAgICAgICAgb2JqLnJlZkluZGV4ID0gbWF0Y2guaWR4O1xuICAgICAgfVxuXG4gICAgICBkYXRhLm1hdGNoZXMucHVzaChvYmopO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtU2NvcmUocmVzdWx0LCBkYXRhKSB7XG4gICAgZGF0YS5zY29yZSA9IHJlc3VsdC5zY29yZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVTY29yZShwYXR0ZXJuKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICBfcmVmJGVycm9ycyA9IF9yZWYuZXJyb3JzLFxuICAgICAgICBlcnJvcnMgPSBfcmVmJGVycm9ycyA9PT0gdm9pZCAwID8gMCA6IF9yZWYkZXJyb3JzLFxuICAgICAgICBfcmVmJGN1cnJlbnRMb2NhdGlvbiA9IF9yZWYuY3VycmVudExvY2F0aW9uLFxuICAgICAgICBjdXJyZW50TG9jYXRpb24gPSBfcmVmJGN1cnJlbnRMb2NhdGlvbiA9PT0gdm9pZCAwID8gMCA6IF9yZWYkY3VycmVudExvY2F0aW9uLFxuICAgICAgICBfcmVmJGV4cGVjdGVkTG9jYXRpb24gPSBfcmVmLmV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24gPSBfcmVmJGV4cGVjdGVkTG9jYXRpb24gPT09IHZvaWQgMCA/IDAgOiBfcmVmJGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIF9yZWYkZGlzdGFuY2UgPSBfcmVmLmRpc3RhbmNlLFxuICAgICAgICBkaXN0YW5jZSA9IF9yZWYkZGlzdGFuY2UgPT09IHZvaWQgMCA/IENvbmZpZy5kaXN0YW5jZSA6IF9yZWYkZGlzdGFuY2U7XG5cbiAgICB2YXIgYWNjdXJhY3kgPSBlcnJvcnMgLyBwYXR0ZXJuLmxlbmd0aDtcbiAgICB2YXIgcHJveGltaXR5ID0gTWF0aC5hYnMoZXhwZWN0ZWRMb2NhdGlvbiAtIGN1cnJlbnRMb2NhdGlvbik7XG5cbiAgICBpZiAoIWRpc3RhbmNlKSB7XG4gICAgICAvLyBEb2RnZSBkaXZpZGUgYnkgemVybyBlcnJvci5cbiAgICAgIHJldHVybiBwcm94aW1pdHkgPyAxLjAgOiBhY2N1cmFjeTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjdXJhY3kgKyBwcm94aW1pdHkgLyBkaXN0YW5jZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRNYXNrVG9JbmRpY2VzKCkge1xuICAgIHZhciBtYXRjaG1hc2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICAgIHZhciBtaW5NYXRjaENoYXJMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGg7XG4gICAgdmFyIGluZGljZXMgPSBbXTtcbiAgICB2YXIgc3RhcnQgPSAtMTtcbiAgICB2YXIgZW5kID0gLTE7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgZm9yICh2YXIgbGVuID0gbWF0Y2htYXNrLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBtYXRjaG1hc2tbaV07XG5cbiAgICAgIGlmIChtYXRjaCAmJiBzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgc3RhcnQgPSBpO1xuICAgICAgfSBlbHNlIGlmICghbWF0Y2ggJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICAgIGVuZCA9IGkgLSAxO1xuXG4gICAgICAgIGlmIChlbmQgLSBzdGFydCArIDEgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgICAgICAgaW5kaWNlcy5wdXNoKFtzdGFydCwgZW5kXSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydCA9IC0xO1xuICAgICAgfVxuICAgIH0gLy8gKGktMSAtIHN0YXJ0KSArIDEgPT4gaSAtIHN0YXJ0XG5cblxuICAgIGlmIChtYXRjaG1hc2tbaSAtIDFdICYmIGkgLSBzdGFydCA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICAgIGluZGljZXMucHVzaChbc3RhcnQsIGkgLSAxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGljZXM7XG4gIH1cblxuICAvLyBNYWNoaW5lIHdvcmQgc2l6ZVxuICB2YXIgTUFYX0JJVFMgPSAzMjtcblxuICBmdW5jdGlvbiBzZWFyY2godGV4dCwgcGF0dGVybiwgcGF0dGVybkFscGhhYmV0KSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9LFxuICAgICAgICBfcmVmJGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgICAgbG9jYXRpb24gPSBfcmVmJGxvY2F0aW9uID09PSB2b2lkIDAgPyBDb25maWcubG9jYXRpb24gOiBfcmVmJGxvY2F0aW9uLFxuICAgICAgICBfcmVmJGRpc3RhbmNlID0gX3JlZi5kaXN0YW5jZSxcbiAgICAgICAgZGlzdGFuY2UgPSBfcmVmJGRpc3RhbmNlID09PSB2b2lkIDAgPyBDb25maWcuZGlzdGFuY2UgOiBfcmVmJGRpc3RhbmNlLFxuICAgICAgICBfcmVmJHRocmVzaG9sZCA9IF9yZWYudGhyZXNob2xkLFxuICAgICAgICB0aHJlc2hvbGQgPSBfcmVmJHRocmVzaG9sZCA9PT0gdm9pZCAwID8gQ29uZmlnLnRocmVzaG9sZCA6IF9yZWYkdGhyZXNob2xkLFxuICAgICAgICBfcmVmJGZpbmRBbGxNYXRjaGVzID0gX3JlZi5maW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgZmluZEFsbE1hdGNoZXMgPSBfcmVmJGZpbmRBbGxNYXRjaGVzID09PSB2b2lkIDAgPyBDb25maWcuZmluZEFsbE1hdGNoZXMgOiBfcmVmJGZpbmRBbGxNYXRjaGVzLFxuICAgICAgICBfcmVmJG1pbk1hdGNoQ2hhckxlbmcgPSBfcmVmLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gX3JlZiRtaW5NYXRjaENoYXJMZW5nID09PSB2b2lkIDAgPyBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoIDogX3JlZiRtaW5NYXRjaENoYXJMZW5nLFxuICAgICAgICBfcmVmJGluY2x1ZGVNYXRjaGVzID0gX3JlZi5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgaW5jbHVkZU1hdGNoZXMgPSBfcmVmJGluY2x1ZGVNYXRjaGVzID09PSB2b2lkIDAgPyBDb25maWcuaW5jbHVkZU1hdGNoZXMgOiBfcmVmJGluY2x1ZGVNYXRjaGVzO1xuXG4gICAgaWYgKHBhdHRlcm4ubGVuZ3RoID4gTUFYX0JJVFMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UoTUFYX0JJVFMpKTtcbiAgICB9XG5cbiAgICB2YXIgcGF0dGVybkxlbiA9IHBhdHRlcm4ubGVuZ3RoOyAvLyBTZXQgc3RhcnRpbmcgbG9jYXRpb24gYXQgYmVnaW5uaW5nIHRleHQgYW5kIGluaXRpYWxpemUgdGhlIGFscGhhYmV0LlxuXG4gICAgdmFyIHRleHRMZW4gPSB0ZXh0Lmxlbmd0aDsgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZW4gbG9jYXRpb24gPiB0ZXh0Lmxlbmd0aFxuXG4gICAgdmFyIGV4cGVjdGVkTG9jYXRpb24gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihsb2NhdGlvbiwgdGV4dExlbikpOyAvLyBIaWdoZXN0IHNjb3JlIGJleW9uZCB3aGljaCB3ZSBnaXZlIHVwLlxuXG4gICAgdmFyIGN1cnJlbnRUaHJlc2hvbGQgPSB0aHJlc2hvbGQ7IC8vIElzIHRoZXJlIGEgbmVhcmJ5IGV4YWN0IG1hdGNoPyAoc3BlZWR1cClcblxuICAgIHZhciBiZXN0TG9jYXRpb24gPSBleHBlY3RlZExvY2F0aW9uOyAvLyBBIG1hc2sgb2YgdGhlIG1hdGNoZXMsIHVzZWQgZm9yIGJ1aWxkaW5nIHRoZSBpbmRpY2VzXG5cbiAgICB2YXIgbWF0Y2hNYXNrID0gW107XG5cbiAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dExlbjsgaSArPSAxKSB7XG4gICAgICAgIG1hdGNoTWFza1tpXSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGluZGV4OyAvLyBHZXQgYWxsIGV4YWN0IG1hdGNoZXMsIGhlcmUgZm9yIHNwZWVkIHVwXG5cbiAgICB3aGlsZSAoKGluZGV4ID0gdGV4dC5pbmRleE9mKHBhdHRlcm4sIGJlc3RMb2NhdGlvbikpID4gLTEpIHtcbiAgICAgIHZhciBzY29yZSA9IGNvbXB1dGVTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogaW5kZXgsXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVxuICAgICAgfSk7XG4gICAgICBjdXJyZW50VGhyZXNob2xkID0gTWF0aC5taW4oc2NvcmUsIGN1cnJlbnRUaHJlc2hvbGQpO1xuICAgICAgYmVzdExvY2F0aW9uID0gaW5kZXggKyBwYXR0ZXJuTGVuO1xuXG4gICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgdmFyIF9pID0gMDtcblxuICAgICAgICB3aGlsZSAoX2kgPCBwYXR0ZXJuTGVuKSB7XG4gICAgICAgICAgbWF0Y2hNYXNrW2luZGV4ICsgX2ldID0gMTtcbiAgICAgICAgICBfaSArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBSZXNldCB0aGUgYmVzdCBsb2NhdGlvblxuXG5cbiAgICBiZXN0TG9jYXRpb24gPSAtMTtcbiAgICB2YXIgbGFzdEJpdEFyciA9IFtdO1xuICAgIHZhciBmaW5hbFNjb3JlID0gMTtcbiAgICB2YXIgYmluTWF4ID0gcGF0dGVybkxlbiArIHRleHRMZW47XG4gICAgdmFyIG1hc2sgPSAxIDw8IChwYXR0ZXJuTGVuIDw9IE1BWF9CSVRTIC0gMSA/IHBhdHRlcm5MZW4gLSAxIDogTUFYX0JJVFMgLSAyKTtcblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHBhdHRlcm5MZW47IF9pMiArPSAxKSB7XG4gICAgICAvLyBTY2FuIGZvciB0aGUgYmVzdCBtYXRjaDsgZWFjaCBpdGVyYXRpb24gYWxsb3dzIGZvciBvbmUgbW9yZSBlcnJvci5cbiAgICAgIC8vIFJ1biBhIGJpbmFyeSBzZWFyY2ggdG8gZGV0ZXJtaW5lIGhvdyBmYXIgZnJvbSB0aGUgbWF0Y2ggbG9jYXRpb24gd2UgY2FuIHN0cmF5XG4gICAgICAvLyBhdCB0aGlzIGVycm9yIGxldmVsLlxuICAgICAgdmFyIGJpbk1pbiA9IDA7XG4gICAgICB2YXIgYmluTWlkID0gYmluTWF4O1xuXG4gICAgICB3aGlsZSAoYmluTWluIDwgYmluTWlkKSB7XG4gICAgICAgIHZhciBfc2NvcmUyID0gY29tcHV0ZVNjb3JlKHBhdHRlcm4sIHtcbiAgICAgICAgICBlcnJvcnM6IF9pMixcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsXG4gICAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF9zY29yZTIgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICAgIGJpbk1pbiA9IGJpbk1pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiaW5NYXggPSBiaW5NaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBiaW5NaWQgPSBNYXRoLmZsb29yKChiaW5NYXggLSBiaW5NaW4pIC8gMiArIGJpbk1pbik7XG4gICAgICB9IC8vIFVzZSB0aGUgcmVzdWx0IGZyb20gdGhpcyBpdGVyYXRpb24gYXMgdGhlIG1heGltdW0gZm9yIHRoZSBuZXh0LlxuXG5cbiAgICAgIGJpbk1heCA9IGJpbk1pZDtcbiAgICAgIHZhciBzdGFydCA9IE1hdGgubWF4KDEsIGV4cGVjdGVkTG9jYXRpb24gLSBiaW5NaWQgKyAxKTtcbiAgICAgIHZhciBmaW5pc2ggPSBmaW5kQWxsTWF0Y2hlcyA/IHRleHRMZW4gOiBNYXRoLm1pbihleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLCB0ZXh0TGVuKSArIHBhdHRlcm5MZW47IC8vIEluaXRpYWxpemUgdGhlIGJpdCBhcnJheVxuXG4gICAgICB2YXIgYml0QXJyID0gQXJyYXkoZmluaXNoICsgMik7XG4gICAgICBiaXRBcnJbZmluaXNoICsgMV0gPSAoMSA8PCBfaTIpIC0gMTtcblxuICAgICAgZm9yICh2YXIgaiA9IGZpbmlzaDsgaiA+PSBzdGFydDsgaiAtPSAxKSB7XG4gICAgICAgIHZhciBjdXJyZW50TG9jYXRpb24gPSBqIC0gMTtcbiAgICAgICAgdmFyIGNoYXJNYXRjaCA9IHBhdHRlcm5BbHBoYWJldFt0ZXh0LmNoYXJBdChjdXJyZW50TG9jYXRpb24pXTtcblxuICAgICAgICBpZiAoY2hhck1hdGNoICYmIGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgbWF0Y2hNYXNrW2N1cnJlbnRMb2NhdGlvbl0gPSAxO1xuICAgICAgICB9IC8vIEZpcnN0IHBhc3M6IGV4YWN0IG1hdGNoXG5cblxuICAgICAgICBiaXRBcnJbal0gPSAoYml0QXJyW2ogKyAxXSA8PCAxIHwgMSkgJiBjaGFyTWF0Y2g7IC8vIFN1YnNlcXVlbnQgcGFzc2VzOiBmdXp6eSBtYXRjaFxuXG4gICAgICAgIGlmIChfaTIgIT09IDApIHtcbiAgICAgICAgICBiaXRBcnJbal0gfD0gKGxhc3RCaXRBcnJbaiArIDFdIHwgbGFzdEJpdEFycltqXSkgPDwgMSB8IDEgfCBsYXN0Qml0QXJyW2ogKyAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiaXRBcnJbal0gJiBtYXNrKSB7XG4gICAgICAgICAgZmluYWxTY29yZSA9IGNvbXB1dGVTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgICAgICBlcnJvcnM6IF9pMixcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbjogY3VycmVudExvY2F0aW9uLFxuICAgICAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVxuICAgICAgICAgIH0pOyAvLyBUaGlzIG1hdGNoIHdpbGwgYWxtb3N0IGNlcnRhaW5seSBiZSBiZXR0ZXIgdGhhbiBhbnkgZXhpc3RpbmcgbWF0Y2guXG4gICAgICAgICAgLy8gQnV0IGNoZWNrIGFueXdheS5cblxuICAgICAgICAgIGlmIChmaW5hbFNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIC8vIEluZGVlZCBpdCBpc1xuICAgICAgICAgICAgY3VycmVudFRocmVzaG9sZCA9IGZpbmFsU2NvcmU7XG4gICAgICAgICAgICBiZXN0TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247IC8vIEFscmVhZHkgcGFzc2VkIGBsb2NgLCBkb3duaGlsbCBmcm9tIGhlcmUgb24gaW4uXG5cbiAgICAgICAgICAgIGlmIChiZXN0TG9jYXRpb24gPD0gZXhwZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gLy8gV2hlbiBwYXNzaW5nIGBiZXN0TG9jYXRpb25gLCBkb24ndCBleGNlZWQgb3VyIGN1cnJlbnQgZGlzdGFuY2UgZnJvbSBgZXhwZWN0ZWRMb2NhdGlvbmAuXG5cblxuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgxLCAyICogZXhwZWN0ZWRMb2NhdGlvbiAtIGJlc3RMb2NhdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIE5vIGhvcGUgZm9yIGEgKGJldHRlcikgbWF0Y2ggYXQgZ3JlYXRlciBlcnJvciBsZXZlbHMuXG5cblxuICAgICAgdmFyIF9zY29yZSA9IGNvbXB1dGVTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgIGVycm9yczogX2kyICsgMSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3Njb3JlID4gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgbGFzdEJpdEFyciA9IGJpdEFycjtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgaXNNYXRjaDogYmVzdExvY2F0aW9uID49IDAsXG4gICAgICAvLyBDb3VudCBleGFjdCBtYXRjaGVzICh0aG9zZSB3aXRoIGEgc2NvcmUgb2YgMCkgdG8gYmUgXCJhbG1vc3RcIiBleGFjdFxuICAgICAgc2NvcmU6IE1hdGgubWF4KDAuMDAxLCBmaW5hbFNjb3JlKVxuICAgIH07XG5cbiAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIHJlc3VsdC5pbmRpY2VzID0gY29udmVydE1hc2tUb0luZGljZXMobWF0Y2hNYXNrLCBtaW5NYXRjaENoYXJMZW5ndGgpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXR0ZXJuQWxwaGFiZXQocGF0dGVybikge1xuICAgIHZhciBtYXNrID0ge307XG4gICAgdmFyIGxlbiA9IHBhdHRlcm4ubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgbWFza1twYXR0ZXJuLmNoYXJBdChpKV0gPSAwO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsZW47IF9pICs9IDEpIHtcbiAgICAgIG1hc2tbcGF0dGVybi5jaGFyQXQoX2kpXSB8PSAxIDw8IGxlbiAtIF9pIC0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxuXG4gIHZhciBCaXRhcFNlYXJjaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQml0YXBTZWFyY2gocGF0dGVybikge1xuICAgICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICAgIF9yZWYkbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uID0gX3JlZiRsb2NhdGlvbiA9PT0gdm9pZCAwID8gQ29uZmlnLmxvY2F0aW9uIDogX3JlZiRsb2NhdGlvbixcbiAgICAgICAgICBfcmVmJHRocmVzaG9sZCA9IF9yZWYudGhyZXNob2xkLFxuICAgICAgICAgIHRocmVzaG9sZCA9IF9yZWYkdGhyZXNob2xkID09PSB2b2lkIDAgPyBDb25maWcudGhyZXNob2xkIDogX3JlZiR0aHJlc2hvbGQsXG4gICAgICAgICAgX3JlZiRkaXN0YW5jZSA9IF9yZWYuZGlzdGFuY2UsXG4gICAgICAgICAgZGlzdGFuY2UgPSBfcmVmJGRpc3RhbmNlID09PSB2b2lkIDAgPyBDb25maWcuZGlzdGFuY2UgOiBfcmVmJGRpc3RhbmNlLFxuICAgICAgICAgIF9yZWYkaW5jbHVkZU1hdGNoZXMgPSBfcmVmLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgICAgIGluY2x1ZGVNYXRjaGVzID0gX3JlZiRpbmNsdWRlTWF0Y2hlcyA9PT0gdm9pZCAwID8gQ29uZmlnLmluY2x1ZGVNYXRjaGVzIDogX3JlZiRpbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgICBfcmVmJGZpbmRBbGxNYXRjaGVzID0gX3JlZi5maW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgICBmaW5kQWxsTWF0Y2hlcyA9IF9yZWYkZmluZEFsbE1hdGNoZXMgPT09IHZvaWQgMCA/IENvbmZpZy5maW5kQWxsTWF0Y2hlcyA6IF9yZWYkZmluZEFsbE1hdGNoZXMsXG4gICAgICAgICAgX3JlZiRtaW5NYXRjaENoYXJMZW5nID0gX3JlZi5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gX3JlZiRtaW5NYXRjaENoYXJMZW5nID09PSB2b2lkIDAgPyBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoIDogX3JlZiRtaW5NYXRjaENoYXJMZW5nLFxuICAgICAgICAgIF9yZWYkaXNDYXNlU2Vuc2l0aXZlID0gX3JlZi5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gX3JlZiRpc0Nhc2VTZW5zaXRpdmUgPT09IHZvaWQgMCA/IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUgOiBfcmVmJGlzQ2FzZVNlbnNpdGl2ZTtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJpdGFwU2VhcmNoKTtcblxuICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgIHRocmVzaG9sZDogdGhyZXNob2xkLFxuICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2UsXG4gICAgICAgIGluY2x1ZGVNYXRjaGVzOiBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgZmluZEFsbE1hdGNoZXM6IGZpbmRBbGxNYXRjaGVzLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgICAgaXNDYXNlU2Vuc2l0aXZlOiBpc0Nhc2VTZW5zaXRpdmVcbiAgICAgIH07XG4gICAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5jaHVua3MgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IHRoaXMucGF0dGVybi5sZW5ndGgpIHtcbiAgICAgICAgdmFyIF9wYXR0ZXJuID0gdGhpcy5wYXR0ZXJuLnN1YnN0cmluZyhpbmRleCwgaW5kZXggKyBNQVhfQklUUyk7XG5cbiAgICAgICAgdGhpcy5jaHVua3MucHVzaCh7XG4gICAgICAgICAgcGF0dGVybjogX3BhdHRlcm4sXG4gICAgICAgICAgYWxwaGFiZXQ6IGNyZWF0ZVBhdHRlcm5BbHBoYWJldChfcGF0dGVybilcbiAgICAgICAgfSk7XG4gICAgICAgIGluZGV4ICs9IE1BWF9CSVRTO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCaXRhcFNlYXJjaCwgW3tcbiAgICAgIGtleTogXCJzZWFyY2hJblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaEluKHRleHQpIHtcbiAgICAgICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBfdGhpcyRvcHRpb25zLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgICAgICAgIGluY2x1ZGVNYXRjaGVzID0gX3RoaXMkb3B0aW9ucy5pbmNsdWRlTWF0Y2hlcztcblxuICAgICAgICBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gLy8gRXhhY3QgbWF0Y2hcblxuXG4gICAgICAgIGlmICh0aGlzLnBhdHRlcm4gPT09IHRleHQpIHtcbiAgICAgICAgICB2YXIgX3Jlc3VsdCA9IHtcbiAgICAgICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgICAgICBzY29yZTogMFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIF9yZXN1bHQuaW5kaWNlcyA9IFtbMCwgdGV4dC5sZW5ndGggLSAxXV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIF9yZXN1bHQ7XG4gICAgICAgIH0gLy8gT3RoZXJ3aXNlLCB1c2UgQml0YXAgYWxnb3JpdGhtXG5cblxuICAgICAgICB2YXIgX3RoaXMkb3B0aW9uczIgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBsb2NhdGlvbiA9IF90aGlzJG9wdGlvbnMyLmxvY2F0aW9uLFxuICAgICAgICAgICAgZGlzdGFuY2UgPSBfdGhpcyRvcHRpb25zMi5kaXN0YW5jZSxcbiAgICAgICAgICAgIHRocmVzaG9sZCA9IF90aGlzJG9wdGlvbnMyLnRocmVzaG9sZCxcbiAgICAgICAgICAgIGZpbmRBbGxNYXRjaGVzID0gX3RoaXMkb3B0aW9uczIuZmluZEFsbE1hdGNoZXMsXG4gICAgICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBfdGhpcyRvcHRpb25zMi5taW5NYXRjaENoYXJMZW5ndGg7XG4gICAgICAgIHZhciBhbGxJbmRpY2VzID0gW107XG4gICAgICAgIHZhciB0b3RhbFNjb3JlID0gMDtcbiAgICAgICAgdmFyIGhhc01hdGNoZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIsIGkpIHtcbiAgICAgICAgICB2YXIgcGF0dGVybiA9IF9yZWYyLnBhdHRlcm4sXG4gICAgICAgICAgICAgIGFscGhhYmV0ID0gX3JlZjIuYWxwaGFiZXQ7XG5cbiAgICAgICAgICB2YXIgX3NlYXJjaCA9IHNlYXJjaCh0ZXh0LCBwYXR0ZXJuLCBhbHBoYWJldCwge1xuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uICsgTUFYX0JJVFMgKiBpLFxuICAgICAgICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlLFxuICAgICAgICAgICAgdGhyZXNob2xkOiB0aHJlc2hvbGQsXG4gICAgICAgICAgICBmaW5kQWxsTWF0Y2hlczogZmluZEFsbE1hdGNoZXMsXG4gICAgICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgICAgICAgIGluY2x1ZGVNYXRjaGVzOiBpbmNsdWRlTWF0Y2hlc1xuICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBpc01hdGNoID0gX3NlYXJjaC5pc01hdGNoLFxuICAgICAgICAgICAgICBzY29yZSA9IF9zZWFyY2guc2NvcmUsXG4gICAgICAgICAgICAgIGluZGljZXMgPSBfc2VhcmNoLmluZGljZXM7XG5cbiAgICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgICAgaGFzTWF0Y2hlcyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG90YWxTY29yZSArPSBzY29yZTtcblxuICAgICAgICAgIGlmIChpc01hdGNoICYmIGluZGljZXMpIHtcbiAgICAgICAgICAgIGFsbEluZGljZXMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFsbEluZGljZXMpLCBfdG9Db25zdW1hYmxlQXJyYXkoaW5kaWNlcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgICAgaXNNYXRjaDogaGFzTWF0Y2hlcyxcbiAgICAgICAgICBzY29yZTogaGFzTWF0Y2hlcyA/IHRvdGFsU2NvcmUgLyB0aGlzLmNodW5rcy5sZW5ndGggOiAxXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGhhc01hdGNoZXMgJiYgaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXN1bHQuaW5kaWNlcyA9IGFsbEluZGljZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCaXRhcFNlYXJjaDtcbiAgfSgpO1xuXG4gIHZhciBCYXNlTWF0Y2ggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJhc2VNYXRjaChwYXR0ZXJuKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFzZU1hdGNoKTtcblxuICAgICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQmFzZU1hdGNoLCBbe1xuICAgICAga2V5OiBcInNlYXJjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCgpXG4gICAgICAvKnRleHQqL1xuICAgICAge31cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpc011bHRpTWF0Y2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc011bHRpTWF0Y2gocGF0dGVybikge1xuICAgICAgICByZXR1cm4gZ2V0TWF0Y2gocGF0dGVybiwgdGhpcy5tdWx0aVJlZ2V4KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNTaW5nbGVNYXRjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzU2luZ2xlTWF0Y2gocGF0dGVybikge1xuICAgICAgICByZXR1cm4gZ2V0TWF0Y2gocGF0dGVybiwgdGhpcy5zaW5nbGVSZWdleCk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJhc2VNYXRjaDtcbiAgfSgpO1xuXG4gIGZ1bmN0aW9uIGdldE1hdGNoKHBhdHRlcm4sIGV4cCkge1xuICAgIHZhciBtYXRjaGVzID0gcGF0dGVybi5tYXRjaChleHApO1xuICAgIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6IG51bGw7XG4gIH1cblxuICB2YXIgRXhhY3RNYXRjaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Jhc2VNYXRjaCkge1xuICAgIF9pbmhlcml0cyhFeGFjdE1hdGNoLCBfQmFzZU1hdGNoKTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRXhhY3RNYXRjaCk7XG5cbiAgICBmdW5jdGlvbiBFeGFjdE1hdGNoKHBhdHRlcm4pIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeGFjdE1hdGNoKTtcblxuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHBhdHRlcm4pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhFeGFjdE1hdGNoLCBbe1xuICAgICAga2V5OiBcInNlYXJjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCh0ZXh0KSB7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IDA7XG4gICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgdmFyIGluZGljZXMgPSBbXTtcbiAgICAgICAgdmFyIHBhdHRlcm5MZW4gPSB0aGlzLnBhdHRlcm4ubGVuZ3RoOyAvLyBHZXQgYWxsIGV4YWN0IG1hdGNoZXNcblxuICAgICAgICB3aGlsZSAoKGluZGV4ID0gdGV4dC5pbmRleE9mKHRoaXMucGF0dGVybiwgbG9jYXRpb24pKSA+IC0xKSB7XG4gICAgICAgICAgbG9jYXRpb24gPSBpbmRleCArIHBhdHRlcm5MZW47XG4gICAgICAgICAgaW5kaWNlcy5wdXNoKFtpbmRleCwgbG9jYXRpb24gLSAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXNNYXRjaCA9ICEhaW5kaWNlcy5sZW5ndGg7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXNNYXRjaDogaXNNYXRjaCxcbiAgICAgICAgICBzY29yZTogaXNNYXRjaCA/IDEgOiAwLFxuICAgICAgICAgIGluZGljZXM6IGluZGljZXNcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJ0eXBlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuICdleGFjdCc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm11bHRpUmVnZXhcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gL14nXCIoLiopXCIkLztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2luZ2xlUmVnZXhcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gL14nKC4qKSQvO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBFeGFjdE1hdGNoO1xuICB9KEJhc2VNYXRjaCk7XG5cbiAgdmFyIEludmVyc2VFeGFjdE1hdGNoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQmFzZU1hdGNoKSB7XG4gICAgX2luaGVyaXRzKEludmVyc2VFeGFjdE1hdGNoLCBfQmFzZU1hdGNoKTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSW52ZXJzZUV4YWN0TWF0Y2gpO1xuXG4gICAgZnVuY3Rpb24gSW52ZXJzZUV4YWN0TWF0Y2gocGF0dGVybikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEludmVyc2VFeGFjdE1hdGNoKTtcblxuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHBhdHRlcm4pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhJbnZlcnNlRXhhY3RNYXRjaCwgW3tcbiAgICAgIGtleTogXCJzZWFyY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2godGV4dCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0ZXh0LmluZGV4T2YodGhpcy5wYXR0ZXJuKTtcbiAgICAgICAgdmFyIGlzTWF0Y2ggPSBpbmRleCA9PT0gLTE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXNNYXRjaDogaXNNYXRjaCxcbiAgICAgICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwidHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiAnaW52ZXJzZS1leGFjdCc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm11bHRpUmVnZXhcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gL14hXCIoLiopXCIkLztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2luZ2xlUmVnZXhcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gL14hKC4qKSQvO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBJbnZlcnNlRXhhY3RNYXRjaDtcbiAgfShCYXNlTWF0Y2gpO1xuXG4gIHZhciBQcmVmaXhFeGFjdE1hdGNoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQmFzZU1hdGNoKSB7XG4gICAgX2luaGVyaXRzKFByZWZpeEV4YWN0TWF0Y2gsIF9CYXNlTWF0Y2gpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQcmVmaXhFeGFjdE1hdGNoKTtcblxuICAgIGZ1bmN0aW9uIFByZWZpeEV4YWN0TWF0Y2gocGF0dGVybikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByZWZpeEV4YWN0TWF0Y2gpO1xuXG4gICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcGF0dGVybik7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFByZWZpeEV4YWN0TWF0Y2gsIFt7XG4gICAgICBrZXk6IFwic2VhcmNoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2VhcmNoKHRleHQpIHtcbiAgICAgICAgdmFyIGlzTWF0Y2ggPSB0ZXh0LnN0YXJ0c1dpdGgodGhpcy5wYXR0ZXJuKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc01hdGNoOiBpc01hdGNoLFxuICAgICAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICAgICAgaW5kaWNlczogWzAsIHRoaXMucGF0dGVybi5sZW5ndGggLSAxXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcInR5cGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gJ3ByZWZpeC1leGFjdCc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm11bHRpUmVnZXhcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gL15cXF5cIiguKilcIiQvO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzaW5nbGVSZWdleFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiAvXlxcXiguKikkLztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUHJlZml4RXhhY3RNYXRjaDtcbiAgfShCYXNlTWF0Y2gpO1xuXG4gIHZhciBJbnZlcnNlUHJlZml4RXhhY3RNYXRjaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Jhc2VNYXRjaCkge1xuICAgIF9pbmhlcml0cyhJbnZlcnNlUHJlZml4RXhhY3RNYXRjaCwgX0Jhc2VNYXRjaCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEludmVyc2VQcmVmaXhFeGFjdE1hdGNoKTtcblxuICAgIGZ1bmN0aW9uIEludmVyc2VQcmVmaXhFeGFjdE1hdGNoKHBhdHRlcm4pIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnZlcnNlUHJlZml4RXhhY3RNYXRjaCk7XG5cbiAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwYXR0ZXJuKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoSW52ZXJzZVByZWZpeEV4YWN0TWF0Y2gsIFt7XG4gICAgICBrZXk6IFwic2VhcmNoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2VhcmNoKHRleHQpIHtcbiAgICAgICAgdmFyIGlzTWF0Y2ggPSAhdGV4dC5zdGFydHNXaXRoKHRoaXMucGF0dGVybik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXNNYXRjaDogaXNNYXRjaCxcbiAgICAgICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwidHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiAnaW52ZXJzZS1wcmVmaXgtZXhhY3QnO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJtdWx0aVJlZ2V4XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIC9eIVxcXlwiKC4qKVwiJC87XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNpbmdsZVJlZ2V4XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIC9eIVxcXiguKikkLztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSW52ZXJzZVByZWZpeEV4YWN0TWF0Y2g7XG4gIH0oQmFzZU1hdGNoKTtcblxuICB2YXIgU3VmZml4RXhhY3RNYXRjaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Jhc2VNYXRjaCkge1xuICAgIF9pbmhlcml0cyhTdWZmaXhFeGFjdE1hdGNoLCBfQmFzZU1hdGNoKTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU3VmZml4RXhhY3RNYXRjaCk7XG5cbiAgICBmdW5jdGlvbiBTdWZmaXhFeGFjdE1hdGNoKHBhdHRlcm4pIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdWZmaXhFeGFjdE1hdGNoKTtcblxuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHBhdHRlcm4pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTdWZmaXhFeGFjdE1hdGNoLCBbe1xuICAgICAga2V5OiBcInNlYXJjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCh0ZXh0KSB7XG4gICAgICAgIHZhciBpc01hdGNoID0gdGV4dC5lbmRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzTWF0Y2g6IGlzTWF0Y2gsXG4gICAgICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgICAgICBpbmRpY2VzOiBbdGV4dC5sZW5ndGggLSB0aGlzLnBhdHRlcm4ubGVuZ3RoLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwidHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiAnc3VmZml4LWV4YWN0JztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibXVsdGlSZWdleFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiAvXlwiKC4qKVwiXFwkJC87XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNpbmdsZVJlZ2V4XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIC9eKC4qKVxcJCQvO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdWZmaXhFeGFjdE1hdGNoO1xuICB9KEJhc2VNYXRjaCk7XG5cbiAgdmFyIEludmVyc2VTdWZmaXhFeGFjdE1hdGNoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQmFzZU1hdGNoKSB7XG4gICAgX2luaGVyaXRzKEludmVyc2VTdWZmaXhFeGFjdE1hdGNoLCBfQmFzZU1hdGNoKTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2gpO1xuXG4gICAgZnVuY3Rpb24gSW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2gocGF0dGVybikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEludmVyc2VTdWZmaXhFeGFjdE1hdGNoKTtcblxuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHBhdHRlcm4pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhJbnZlcnNlU3VmZml4RXhhY3RNYXRjaCwgW3tcbiAgICAgIGtleTogXCJzZWFyY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2godGV4dCkge1xuICAgICAgICB2YXIgaXNNYXRjaCA9ICF0ZXh0LmVuZHNXaXRoKHRoaXMucGF0dGVybik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXNNYXRjaDogaXNNYXRjaCxcbiAgICAgICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwidHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiAnaW52ZXJzZS1zdWZmaXgtZXhhY3QnO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJtdWx0aVJlZ2V4XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIC9eIVwiKC4qKVwiXFwkJC87XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNpbmdsZVJlZ2V4XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIC9eISguKilcXCQkLztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2g7XG4gIH0oQmFzZU1hdGNoKTtcblxuICB2YXIgRnV6enlNYXRjaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Jhc2VNYXRjaCkge1xuICAgIF9pbmhlcml0cyhGdXp6eU1hdGNoLCBfQmFzZU1hdGNoKTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRnV6enlNYXRjaCk7XG5cbiAgICBmdW5jdGlvbiBGdXp6eU1hdGNoKHBhdHRlcm4pIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICAgIF9yZWYkbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uID0gX3JlZiRsb2NhdGlvbiA9PT0gdm9pZCAwID8gQ29uZmlnLmxvY2F0aW9uIDogX3JlZiRsb2NhdGlvbixcbiAgICAgICAgICBfcmVmJHRocmVzaG9sZCA9IF9yZWYudGhyZXNob2xkLFxuICAgICAgICAgIHRocmVzaG9sZCA9IF9yZWYkdGhyZXNob2xkID09PSB2b2lkIDAgPyBDb25maWcudGhyZXNob2xkIDogX3JlZiR0aHJlc2hvbGQsXG4gICAgICAgICAgX3JlZiRkaXN0YW5jZSA9IF9yZWYuZGlzdGFuY2UsXG4gICAgICAgICAgZGlzdGFuY2UgPSBfcmVmJGRpc3RhbmNlID09PSB2b2lkIDAgPyBDb25maWcuZGlzdGFuY2UgOiBfcmVmJGRpc3RhbmNlLFxuICAgICAgICAgIF9yZWYkaW5jbHVkZU1hdGNoZXMgPSBfcmVmLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgICAgIGluY2x1ZGVNYXRjaGVzID0gX3JlZiRpbmNsdWRlTWF0Y2hlcyA9PT0gdm9pZCAwID8gQ29uZmlnLmluY2x1ZGVNYXRjaGVzIDogX3JlZiRpbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgICBfcmVmJGZpbmRBbGxNYXRjaGVzID0gX3JlZi5maW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgICBmaW5kQWxsTWF0Y2hlcyA9IF9yZWYkZmluZEFsbE1hdGNoZXMgPT09IHZvaWQgMCA/IENvbmZpZy5maW5kQWxsTWF0Y2hlcyA6IF9yZWYkZmluZEFsbE1hdGNoZXMsXG4gICAgICAgICAgX3JlZiRtaW5NYXRjaENoYXJMZW5nID0gX3JlZi5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gX3JlZiRtaW5NYXRjaENoYXJMZW5nID09PSB2b2lkIDAgPyBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoIDogX3JlZiRtaW5NYXRjaENoYXJMZW5nLFxuICAgICAgICAgIF9yZWYkaXNDYXNlU2Vuc2l0aXZlID0gX3JlZi5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gX3JlZiRpc0Nhc2VTZW5zaXRpdmUgPT09IHZvaWQgMCA/IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUgOiBfcmVmJGlzQ2FzZVNlbnNpdGl2ZTtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZ1enp5TWF0Y2gpO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHBhdHRlcm4pO1xuICAgICAgX3RoaXMuX2JpdGFwU2VhcmNoID0gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIHtcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICB0aHJlc2hvbGQ6IHRocmVzaG9sZCxcbiAgICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlLFxuICAgICAgICBpbmNsdWRlTWF0Y2hlczogaW5jbHVkZU1hdGNoZXMsXG4gICAgICAgIGZpbmRBbGxNYXRjaGVzOiBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICAgIGlzQ2FzZVNlbnNpdGl2ZTogaXNDYXNlU2Vuc2l0aXZlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRnV6enlNYXRjaCwgW3tcbiAgICAgIGtleTogXCJzZWFyY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2godGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYml0YXBTZWFyY2guc2VhcmNoSW4odGV4dCk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwidHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiAnZnV6enknO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJtdWx0aVJlZ2V4XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIC9eXCIoLiopXCIkLztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2luZ2xlUmVnZXhcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gL14oLiopJC87XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEZ1enp5TWF0Y2g7XG4gIH0oQmFzZU1hdGNoKTtcblxuICB2YXIgc2VhcmNoZXJzID0gW0V4YWN0TWF0Y2gsIFByZWZpeEV4YWN0TWF0Y2gsIEludmVyc2VQcmVmaXhFeGFjdE1hdGNoLCBJbnZlcnNlU3VmZml4RXhhY3RNYXRjaCwgU3VmZml4RXhhY3RNYXRjaCwgSW52ZXJzZUV4YWN0TWF0Y2gsIEZ1enp5TWF0Y2hdO1xuICB2YXIgc2VhcmNoZXJzTGVuID0gc2VhcmNoZXJzLmxlbmd0aDsgLy8gUmVnZXggdG8gc3BsaXQgYnkgc3BhY2VzLCBidXQga2VlcCBhbnl0aGluZyBpbiBxdW90ZXMgdG9nZXRoZXJcblxuICB2YXIgU1BBQ0VfUkUgPSAvICsoPz0oW15cXFwiXSpcXFwiW15cXFwiXSpcXFwiKSpbXlxcXCJdKiQpLztcbiAgdmFyIE9SX1RPS0VOID0gJ3wnOyAvLyBSZXR1cm4gYSAyRCBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcXVlcnksIGZvciBzaW1wbGVyIHBhcnNpbmcuXG4gIC8vIEV4YW1wbGU6XG4gIC8vIFwiXmNvcmUgZ28kIHwgcmIkIHwgcHkkIHh5JFwiID0+IFtbXCJeY29yZVwiLCBcImdvJFwiXSwgW1wicmIkXCJdLCBbXCJweSRcIiwgXCJ4eSRcIl1dXG5cbiAgZnVuY3Rpb24gcGFyc2VRdWVyeShwYXR0ZXJuKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KE9SX1RPS0VOKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBxdWVyeSA9IGl0ZW0udHJpbSgpLnNwbGl0KFNQQUNFX1JFKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgISFpdGVtLnRyaW0oKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIHZhciBxdWVyeUl0ZW0gPSBxdWVyeVtpXTsgLy8gMS4gSGFuZGxlIG11bHRpcGxlIHF1ZXJ5IG1hdGNoIChpLmUsIG9uY2UgdGhhdCBhcmUgcXVvdGVkLCBsaWtlIGBcImhlbGxvIHdvcmxkXCJgKVxuXG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICB2YXIgaWR4ID0gLTE7XG5cbiAgICAgICAgd2hpbGUgKCFmb3VuZCAmJiArK2lkeCA8IHNlYXJjaGVyc0xlbikge1xuICAgICAgICAgIHZhciBzZWFyY2hlciA9IHNlYXJjaGVyc1tpZHhdO1xuICAgICAgICAgIHZhciB0b2tlbiA9IHNlYXJjaGVyLmlzTXVsdGlNYXRjaChxdWVyeUl0ZW0pO1xuXG4gICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2gobmV3IHNlYXJjaGVyKHRva2VuLCBvcHRpb25zKSk7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gMi4gSGFuZGxlIHNpbmdsZSBxdWVyeSBtYXRjaGVzIChpLmUsIG9uY2UgdGhhdCBhcmUgKm5vdCogcXVvdGVkKVxuXG5cbiAgICAgICAgaWR4ID0gLTE7XG5cbiAgICAgICAgd2hpbGUgKCsraWR4IDwgc2VhcmNoZXJzTGVuKSB7XG4gICAgICAgICAgdmFyIF9zZWFyY2hlciA9IHNlYXJjaGVyc1tpZHhdO1xuXG4gICAgICAgICAgdmFyIF90b2tlbiA9IF9zZWFyY2hlci5pc1NpbmdsZU1hdGNoKHF1ZXJ5SXRlbSk7XG5cbiAgICAgICAgICBpZiAoX3Rva2VuKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2gobmV3IF9zZWFyY2hlcihfdG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHRvIGEgc2luZ2wgbWF0Y2hcblxuICB2YXIgTXVsdGlNYXRjaFNldCA9IG5ldyBTZXQoW0Z1enp5TWF0Y2gudHlwZSwgRXhhY3RNYXRjaC50eXBlXSk7XG4gIC8qKlxuICAgKiBDb21tYW5kLWxpa2Ugc2VhcmNoaW5nXG4gICAqID09PT09PT09PT09PT09PT09PT09PT1cbiAgICpcbiAgICogR2l2ZW4gbXVsdGlwbGUgc2VhcmNoIHRlcm1zIGRlbGltaXRlZCBieSBzcGFjZXMuZS5nLiBgXmpzY3JpcHQgLnB5dGhvbiQgcnVieSAhamF2YWAsXG4gICAqIHNlYXJjaCBpbiBhIGdpdmVuIHRleHQuXG4gICAqXG4gICAqIFNlYXJjaCBzeW50YXg6XG4gICAqXG4gICAqIHwgVG9rZW4gICAgICAgfCBNYXRjaCB0eXBlICAgICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAtLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfFxuICAgKiB8IGBqc2NyaXB0YCAgIHwgZnV6enktbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IG1hdGNoIGBqc2NyaXB0YCAgICAgICAgICAgICB8XG4gICAqIHwgYCdweXRob25gICAgfCBleGFjdC1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgaW5jbHVkZSBgcHl0aG9uYCAgICAgICAgICAgIHxcbiAgICogfCBgIXJ1YnlgICAgICB8IGludmVyc2UtZXhhY3QtbWF0Y2ggICAgICAgIHwgSXRlbXMgdGhhdCBkbyBub3QgaW5jbHVkZSBgcnVieWAgICAgICAgfFxuICAgKiB8IGBeamF2YWAgICAgIHwgcHJlZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IHN0YXJ0IHdpdGggYGphdmFgICAgICAgICAgICB8XG4gICAqIHwgYCFeZWFybGFuZ2AgfCBpbnZlcnNlLXByZWZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IHN0YXJ0IHdpdGggYGVhcmxhbmdgIHxcbiAgICogfCBgLmpzJGAgICAgICB8IHN1ZmZpeC1leGFjdC1tYXRjaCAgICAgICAgIHwgSXRlbXMgdGhhdCBlbmQgd2l0aCBgLmpzYCAgICAgICAgICAgICAgfFxuICAgKiB8IGAhLmdvJGAgICAgIHwgaW52ZXJzZS1zdWZmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBlbmQgd2l0aCBgLmdvYCAgICAgICB8XG4gICAqXG4gICAqIEEgc2luZ2xlIHBpcGUgY2hhcmFjdGVyIGFjdHMgYXMgYW4gT1Igb3BlcmF0b3IuIEZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nXG4gICAqIHF1ZXJ5IG1hdGNoZXMgZW50cmllcyB0aGF0IHN0YXJ0IHdpdGggYGNvcmVgIGFuZCBlbmQgd2l0aCBlaXRoZXJgZ29gLCBgcmJgLFxuICAgKiBvcmBweWAuXG4gICAqXG4gICAqIGBgYFxuICAgKiBeY29yZSBnbyQgfCByYiQgfCBweSRcbiAgICogYGBgXG4gICAqL1xuXG4gIHZhciBFeHRlbmRlZFNlYXJjaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXh0ZW5kZWRTZWFyY2gocGF0dGVybikge1xuICAgICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICAgIF9yZWYkaXNDYXNlU2Vuc2l0aXZlID0gX3JlZi5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gX3JlZiRpc0Nhc2VTZW5zaXRpdmUgPT09IHZvaWQgMCA/IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUgOiBfcmVmJGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgICAgICBfcmVmJGluY2x1ZGVNYXRjaGVzID0gX3JlZi5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgICBpbmNsdWRlTWF0Y2hlcyA9IF9yZWYkaW5jbHVkZU1hdGNoZXMgPT09IHZvaWQgMCA/IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyA6IF9yZWYkaW5jbHVkZU1hdGNoZXMsXG4gICAgICAgICAgX3JlZiRtaW5NYXRjaENoYXJMZW5nID0gX3JlZi5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gX3JlZiRtaW5NYXRjaENoYXJMZW5nID09PSB2b2lkIDAgPyBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoIDogX3JlZiRtaW5NYXRjaENoYXJMZW5nLFxuICAgICAgICAgIF9yZWYkZmluZEFsbE1hdGNoZXMgPSBfcmVmLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgICAgIGZpbmRBbGxNYXRjaGVzID0gX3JlZiRmaW5kQWxsTWF0Y2hlcyA9PT0gdm9pZCAwID8gQ29uZmlnLmZpbmRBbGxNYXRjaGVzIDogX3JlZiRmaW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgICBfcmVmJGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgICAgICBsb2NhdGlvbiA9IF9yZWYkbG9jYXRpb24gPT09IHZvaWQgMCA/IENvbmZpZy5sb2NhdGlvbiA6IF9yZWYkbG9jYXRpb24sXG4gICAgICAgICAgX3JlZiR0aHJlc2hvbGQgPSBfcmVmLnRocmVzaG9sZCxcbiAgICAgICAgICB0aHJlc2hvbGQgPSBfcmVmJHRocmVzaG9sZCA9PT0gdm9pZCAwID8gQ29uZmlnLnRocmVzaG9sZCA6IF9yZWYkdGhyZXNob2xkLFxuICAgICAgICAgIF9yZWYkZGlzdGFuY2UgPSBfcmVmLmRpc3RhbmNlLFxuICAgICAgICAgIGRpc3RhbmNlID0gX3JlZiRkaXN0YW5jZSA9PT0gdm9pZCAwID8gQ29uZmlnLmRpc3RhbmNlIDogX3JlZiRkaXN0YW5jZTtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dGVuZGVkU2VhcmNoKTtcblxuICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgIGlzQ2FzZVNlbnNpdGl2ZTogaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgICBpbmNsdWRlTWF0Y2hlczogaW5jbHVkZU1hdGNoZXMsXG4gICAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aDogbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgICBmaW5kQWxsTWF0Y2hlczogZmluZEFsbE1hdGNoZXMsXG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgdGhyZXNob2xkOiB0aHJlc2hvbGQsXG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVxuICAgICAgfTtcbiAgICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcGFyc2VRdWVyeSh0aGlzLnBhdHRlcm4sIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEV4dGVuZGVkU2VhcmNoLCBbe1xuICAgICAga2V5OiBcInNlYXJjaEluXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2VhcmNoSW4odGV4dCkge1xuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuXG4gICAgICAgIGlmICghcXVlcnkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICAgICAgICBzY29yZTogMVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIGluY2x1ZGVNYXRjaGVzID0gX3RoaXMkb3B0aW9ucy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IF90aGlzJG9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlO1xuICAgICAgICB0ZXh0ID0gaXNDYXNlU2Vuc2l0aXZlID8gdGV4dCA6IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIG51bU1hdGNoZXMgPSAwO1xuICAgICAgICB2YXIgYWxsSW5kaWNlcyA9IFtdO1xuICAgICAgICB2YXIgdG90YWxTY29yZSA9IDA7IC8vIE9Sc1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBxTGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgcUxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgdmFyIHNlYXJjaGVycyA9IHF1ZXJ5W2ldOyAvLyBSZXNldCBpbmRpY2VzXG5cbiAgICAgICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgbnVtTWF0Y2hlcyA9IDA7IC8vIEFORHNcblxuICAgICAgICAgIGZvciAodmFyIGogPSAwLCBwTGVuID0gc2VhcmNoZXJzLmxlbmd0aDsgaiA8IHBMZW47IGogKz0gMSkge1xuICAgICAgICAgICAgdmFyIHNlYXJjaGVyID0gc2VhcmNoZXJzW2pdO1xuXG4gICAgICAgICAgICB2YXIgX3NlYXJjaGVyJHNlYXJjaCA9IHNlYXJjaGVyLnNlYXJjaCh0ZXh0KSxcbiAgICAgICAgICAgICAgICBpc01hdGNoID0gX3NlYXJjaGVyJHNlYXJjaC5pc01hdGNoLFxuICAgICAgICAgICAgICAgIGluZGljZXMgPSBfc2VhcmNoZXIkc2VhcmNoLmluZGljZXMsXG4gICAgICAgICAgICAgICAgc2NvcmUgPSBfc2VhcmNoZXIkc2VhcmNoLnNjb3JlO1xuXG4gICAgICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgICAgICBudW1NYXRjaGVzICs9IDE7XG4gICAgICAgICAgICAgIHRvdGFsU2NvcmUgKz0gc2NvcmU7XG5cbiAgICAgICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBzZWFyY2hlci5jb25zdHJ1Y3Rvci50eXBlO1xuXG4gICAgICAgICAgICAgICAgaWYgKE11bHRpTWF0Y2hTZXQuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICBhbGxJbmRpY2VzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhbGxJbmRpY2VzKSwgX3RvQ29uc3VtYWJsZUFycmF5KGluZGljZXMpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYWxsSW5kaWNlcy5wdXNoKGluZGljZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdG90YWxTY29yZSA9IDA7XG4gICAgICAgICAgICAgIG51bU1hdGNoZXMgPSAwO1xuICAgICAgICAgICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gT1IgY29uZGl0aW9uLCBzbyBpZiBUUlVFLCByZXR1cm5cblxuXG4gICAgICAgICAgaWYgKG51bU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgICAgICAgIHNjb3JlOiB0b3RhbFNjb3JlIC8gbnVtTWF0Y2hlc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5pbmRpY2VzID0gYWxsSW5kaWNlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gTm90aGluZyB3YXMgbWF0Y2hlZFxuXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgICAgICBzY29yZTogMVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImNvbmRpdGlvblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbmRpdGlvbihfLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnVzZUV4dGVuZGVkU2VhcmNoO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBFeHRlbmRlZFNlYXJjaDtcbiAgfSgpO1xuXG4gIHZhciByZWdpc3RlcmVkU2VhcmNoZXJzID0gW107XG4gIGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICAgIHJlZ2lzdGVyZWRTZWFyY2hlcnMucHVzaC5hcHBseShyZWdpc3RlcmVkU2VhcmNoZXJzLCBhcmd1bWVudHMpO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVNlYXJjaGVyKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcmVnaXN0ZXJlZFNlYXJjaGVycy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgdmFyIHNlYXJjaGVyQ2xhc3MgPSByZWdpc3RlcmVkU2VhcmNoZXJzW2ldO1xuXG4gICAgICBpZiAoc2VhcmNoZXJDbGFzcy5jb25kaXRpb24ocGF0dGVybiwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBzZWFyY2hlckNsYXNzKHBhdHRlcm4sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwgb3B0aW9ucyk7XG4gIH1cblxuICB2YXIgTG9naWNhbE9wZXJhdG9yID0ge1xuICAgIEFORDogJyRhbmQnLFxuICAgIE9SOiAnJG9yJ1xuICB9O1xuXG4gIHZhciBpc0V4cHJlc3Npb24gPSBmdW5jdGlvbiBpc0V4cHJlc3Npb24ocXVlcnkpIHtcbiAgICByZXR1cm4gISEocXVlcnlbTG9naWNhbE9wZXJhdG9yLkFORF0gfHwgcXVlcnlbTG9naWNhbE9wZXJhdG9yLk9SXSk7XG4gIH07XG5cbiAgdmFyIGlzTGVhZiA9IGZ1bmN0aW9uIGlzTGVhZihxdWVyeSkge1xuICAgIHJldHVybiAhaXNBcnJheShxdWVyeSkgJiYgaXNPYmplY3QocXVlcnkpICYmICFpc0V4cHJlc3Npb24ocXVlcnkpO1xuICB9O1xuXG4gIHZhciBjb252ZXJ0VG9FeHBsaWNpdCA9IGZ1bmN0aW9uIGNvbnZlcnRUb0V4cGxpY2l0KHF1ZXJ5KSB7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgTG9naWNhbE9wZXJhdG9yLkFORCwgT2JqZWN0LmtleXMocXVlcnkpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBrZXksIHF1ZXJ5W2tleV0pO1xuICAgIH0pKTtcbiAgfTsgLy8gV2hlbiBgYXV0b2AgaXMgYHRydWVgLCB0aGUgcGFyc2UgZnVuY3Rpb24gd2lsbCBpbmZlciBhbmQgaW5pdGlhbGl6ZSBhbmQgYWRkXG4gIC8vIHRoZSBhcHByb3ByaWF0ZSBgU2VhcmNoZXJgIGluc3RhbmNlXG5cblxuICBmdW5jdGlvbiBwYXJzZShxdWVyeSwgb3B0aW9ucykge1xuICAgIHZhciBfcmVmMyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICAgIF9yZWYzJGF1dG8gPSBfcmVmMy5hdXRvLFxuICAgICAgICBhdXRvID0gX3JlZjMkYXV0byA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYzJGF1dG87XG5cbiAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uIG5leHQocXVlcnkpIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpO1xuXG4gICAgICBpZiAoa2V5cy5sZW5ndGggPiAxICYmICFpc0V4cHJlc3Npb24ocXVlcnkpKSB7XG4gICAgICAgIHJldHVybiBuZXh0KGNvbnZlcnRUb0V4cGxpY2l0KHF1ZXJ5KSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXkgPSBrZXlzWzBdO1xuXG4gICAgICBpZiAoaXNMZWFmKHF1ZXJ5KSkge1xuICAgICAgICB2YXIgcGF0dGVybiA9IHF1ZXJ5W2tleV07XG5cbiAgICAgICAgaWYgKCFpc1N0cmluZyhwYXR0ZXJuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihMT0dJQ0FMX1NFQVJDSF9JTlZBTElEX1FVRVJZX0ZPUl9LRVkoa2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm5cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgIG9iai5zZWFyY2hlciA9IGNyZWF0ZVNlYXJjaGVyKHBhdHRlcm4sIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgb3BlcmF0b3I6IGtleVxuICAgICAgfTtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHF1ZXJ5W2tleV07XG5cbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKG5leHQoaXRlbSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBpZiAoIWlzRXhwcmVzc2lvbihxdWVyeSkpIHtcbiAgICAgIHF1ZXJ5ID0gY29udmVydFRvRXhwbGljaXQocXVlcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KHF1ZXJ5KTtcbiAgfVxuXG4gIHZhciBGdXNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGdXNlKGRvY3MpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRnVzZSk7XG5cbiAgICAgIHRoaXMub3B0aW9ucyA9IF9vYmplY3RTcHJlYWQyKHt9LCBDb25maWcsIHt9LCBvcHRpb25zKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2VFeHRlbmRlZFNlYXJjaCAmJiAhdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVhURU5ERURfU0VBUkNIX1VOQVZBSUxBQkxFKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fa2V5U3RvcmUgPSBuZXcgS2V5U3RvcmUodGhpcy5vcHRpb25zLmtleXMpO1xuICAgICAgdGhpcy5zZXRDb2xsZWN0aW9uKGRvY3MsIGluZGV4KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRnVzZSwgW3tcbiAgICAgIGtleTogXCJzZXRDb2xsZWN0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29sbGVjdGlvbihkb2NzLCBpbmRleCkge1xuICAgICAgICB0aGlzLl9kb2NzID0gZG9jcztcblxuICAgICAgICBpZiAoaW5kZXggJiYgIShpbmRleCBpbnN0YW5jZW9mIEZ1c2VJbmRleCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5DT1JSRUNUX0lOREVYX1RZUEUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbXlJbmRleCA9IGluZGV4IHx8IGNyZWF0ZUluZGV4KHRoaXMuX2tleVN0b3JlLmtleXMoKSwgdGhpcy5fZG9jcywge1xuICAgICAgICAgIGdldEZuOiB0aGlzLm9wdGlvbnMuZ2V0Rm5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChkb2MpIHtcbiAgICAgICAgaWYgKCFpc0RlZmluZWQoZG9jKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RvY3MucHVzaChkb2MpO1xuXG4gICAgICAgIHRoaXMuX215SW5kZXguYWRkKGRvYyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbW92ZUF0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQXQoaWR4KSB7XG4gICAgICAgIHRoaXMuX2RvY3Muc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgICAgdGhpcy5fbXlJbmRleC5yZW1vdmVBdChpZHgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbmRleFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXlJbmRleDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2VhcmNoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2VhcmNoKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgICAgICAgIF9yZWYkbGltaXQgPSBfcmVmLmxpbWl0LFxuICAgICAgICAgICAgbGltaXQgPSBfcmVmJGxpbWl0ID09PSB2b2lkIDAgPyAtMSA6IF9yZWYkbGltaXQ7XG5cbiAgICAgICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBpbmNsdWRlTWF0Y2hlcyA9IF90aGlzJG9wdGlvbnMuaW5jbHVkZU1hdGNoZXMsXG4gICAgICAgICAgICBpbmNsdWRlU2NvcmUgPSBfdGhpcyRvcHRpb25zLmluY2x1ZGVTY29yZSxcbiAgICAgICAgICAgIHNob3VsZFNvcnQgPSBfdGhpcyRvcHRpb25zLnNob3VsZFNvcnQsXG4gICAgICAgICAgICBzb3J0Rm4gPSBfdGhpcyRvcHRpb25zLnNvcnRGbjtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBpc1N0cmluZyhxdWVyeSkgPyBpc1N0cmluZyh0aGlzLl9kb2NzWzBdKSA/IHRoaXMuX3NlYXJjaFN0cmluZ0xpc3QocXVlcnkpIDogdGhpcy5fc2VhcmNoT2JqZWN0TGlzdChxdWVyeSkgOiB0aGlzLl9zZWFyY2hMb2dpY2FsKHF1ZXJ5KTtcbiAgICAgICAgY29tcHV0ZVNjb3JlJDEocmVzdWx0cywgdGhpcy5fa2V5U3RvcmUpO1xuXG4gICAgICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICAgICAgcmVzdWx0cy5zb3J0KHNvcnRGbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOdW1iZXIobGltaXQpICYmIGxpbWl0ID4gLTEpIHtcbiAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBsaW1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0KHJlc3VsdHMsIHRoaXMuX2RvY3MsIHtcbiAgICAgICAgICBpbmNsdWRlTWF0Y2hlczogaW5jbHVkZU1hdGNoZXMsXG4gICAgICAgICAgaW5jbHVkZVNjb3JlOiBpbmNsdWRlU2NvcmVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZWFyY2hTdHJpbmdMaXN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NlYXJjaFN0cmluZ0xpc3QocXVlcnkpIHtcbiAgICAgICAgdmFyIHNlYXJjaGVyID0gY3JlYXRlU2VhcmNoZXIocXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHZhciByZWNvcmRzID0gdGhpcy5fbXlJbmRleC5yZWNvcmRzO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdOyAvLyBJdGVyYXRlIG92ZXIgZXZlcnkgc3RyaW5nIGluIHRoZSBpbmRleFxuXG4gICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgdGV4dCA9IF9yZWYyLnYsXG4gICAgICAgICAgICAgIGlkeCA9IF9yZWYyLmksXG4gICAgICAgICAgICAgIG5vcm0gPSBfcmVmMi5uO1xuXG4gICAgICAgICAgaWYgKCFpc0RlZmluZWQodGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3NlYXJjaGVyJHNlYXJjaEluID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCksXG4gICAgICAgICAgICAgIGlzTWF0Y2ggPSBfc2VhcmNoZXIkc2VhcmNoSW4uaXNNYXRjaCxcbiAgICAgICAgICAgICAgc2NvcmUgPSBfc2VhcmNoZXIkc2VhcmNoSW4uc2NvcmUsXG4gICAgICAgICAgICAgIGluZGljZXMgPSBfc2VhcmNoZXIkc2VhcmNoSW4uaW5kaWNlcztcblxuICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICBpdGVtOiB0ZXh0LFxuICAgICAgICAgICAgICBpZHg6IGlkeCxcbiAgICAgICAgICAgICAgbWF0Y2hlczogW3tcbiAgICAgICAgICAgICAgICBzY29yZTogc2NvcmUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRleHQsXG4gICAgICAgICAgICAgICAgbm9ybTogbm9ybSxcbiAgICAgICAgICAgICAgICBpbmRpY2VzOiBpbmRpY2VzXG4gICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NlYXJjaExvZ2ljYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VhcmNoTG9naWNhbChxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBleHByZXNzaW9uID0gcGFyc2UocXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHZhciBfdGhpcyRfbXlJbmRleCA9IHRoaXMuX215SW5kZXgsXG4gICAgICAgICAgICBrZXlzID0gX3RoaXMkX215SW5kZXgua2V5cyxcbiAgICAgICAgICAgIHJlY29yZHMgPSBfdGhpcyRfbXlJbmRleC5yZWNvcmRzO1xuICAgICAgICB2YXIgcmVzdWx0TWFwID0ge307XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG5cbiAgICAgICAgdmFyIGV2YWx1YXRlRXhwcmVzc2lvbiA9IGZ1bmN0aW9uIGV2YWx1YXRlRXhwcmVzc2lvbihub2RlLCBpdGVtLCBpZHgpIHtcbiAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgdmFyIG9wZXJhdG9yID0gbm9kZS5vcGVyYXRvcjtcbiAgICAgICAgICAgIHZhciByZXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgayArPSAxKSB7XG4gICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5vZGUuY2hpbGRyZW5ba107XG4gICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gZXZhbHVhdGVFeHByZXNzaW9uKGNoaWxkLCBpdGVtLCBpZHgpO1xuXG4gICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgaWR4OiBpZHgsXG4gICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgbWF0Y2hlczogbWF0Y2hlc1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yID09PSBMb2dpY2FsT3BlcmF0b3IuT1IpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFNob3J0LWNpcmN1aXRcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PT0gTG9naWNhbE9wZXJhdG9yLkFORCkge1xuICAgICAgICAgICAgICAgIHJlcy5sZW5ndGggPSAwOyAvLyBTaG9ydC1jaXJjdWl0XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAvLyBEZWR1cGUgd2hlbiBhZGRpbmdcbiAgICAgICAgICAgICAgaWYgKCFyZXN1bHRNYXBbaWR4XSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdE1hcFtpZHhdID0ge1xuICAgICAgICAgICAgICAgICAgaWR4OiBpZHgsXG4gICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgbWF0Y2hlczogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHRNYXBbaWR4XSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3Jlc3VsdE1hcCRpZHgkbWF0Y2hlO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBfcmVmMy5tYXRjaGVzO1xuXG4gICAgICAgICAgICAgICAgKF9yZXN1bHRNYXAkaWR4JG1hdGNoZSA9IHJlc3VsdE1hcFtpZHhdLm1hdGNoZXMpLnB1c2guYXBwbHkoX3Jlc3VsdE1hcCRpZHgkbWF0Y2hlLCBfdG9Db25zdW1hYmxlQXJyYXkobWF0Y2hlcykpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGtleSA9IG5vZGUua2V5LFxuICAgICAgICAgICAgICAgIHNlYXJjaGVyID0gbm9kZS5zZWFyY2hlcjtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1ba2V5cy5pbmRleE9mKGtleSldO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgIHNlYXJjaGVyOiBzZWFyY2hlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IF9yZWY0LiQsXG4gICAgICAgICAgICAgIGlkeCA9IF9yZWY0Lmk7XG5cbiAgICAgICAgICBpZiAoaXNEZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgICAgICBldmFsdWF0ZUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgaXRlbSwgaWR4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NlYXJjaE9iamVjdExpc3RcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VhcmNoT2JqZWN0TGlzdChxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdmFyIF90aGlzJF9teUluZGV4MiA9IHRoaXMuX215SW5kZXgsXG4gICAgICAgICAgICBrZXlzID0gX3RoaXMkX215SW5kZXgyLmtleXMsXG4gICAgICAgICAgICByZWNvcmRzID0gX3RoaXMkX215SW5kZXgyLnJlY29yZHM7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107IC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuXG4gICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IF9yZWY1LiQsXG4gICAgICAgICAgICAgIGlkeCA9IF9yZWY1Lmk7XG5cbiAgICAgICAgICBpZiAoIWlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBtYXRjaGVzID0gW107IC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcblxuICAgICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5LCBrZXlJbmRleCkge1xuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoLmFwcGx5KG1hdGNoZXMsIF90b0NvbnN1bWFibGVBcnJheShfdGhpczIuX2ZpbmRNYXRjaGVzKHtcbiAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgIHZhbHVlOiBpdGVtW2tleUluZGV4XSxcbiAgICAgICAgICAgICAgc2VhcmNoZXI6IHNlYXJjaGVyXG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICBpZHg6IGlkeCxcbiAgICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgbWF0Y2hlczogbWF0Y2hlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9maW5kTWF0Y2hlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kTWF0Y2hlcyhfcmVmNikge1xuICAgICAgICB2YXIga2V5ID0gX3JlZjYua2V5LFxuICAgICAgICAgICAgdmFsdWUgPSBfcmVmNi52YWx1ZSxcbiAgICAgICAgICAgIHNlYXJjaGVyID0gX3JlZjYuc2VhcmNoZXI7XG5cbiAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcblxuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNykge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBfcmVmNy52LFxuICAgICAgICAgICAgICAgIGlkeCA9IF9yZWY3LmksXG4gICAgICAgICAgICAgICAgbm9ybSA9IF9yZWY3Lm47XG5cbiAgICAgICAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9zZWFyY2hlciRzZWFyY2hJbjIgPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KSxcbiAgICAgICAgICAgICAgICBpc01hdGNoID0gX3NlYXJjaGVyJHNlYXJjaEluMi5pc01hdGNoLFxuICAgICAgICAgICAgICAgIHNjb3JlID0gX3NlYXJjaGVyJHNlYXJjaEluMi5zY29yZSxcbiAgICAgICAgICAgICAgICBpbmRpY2VzID0gX3NlYXJjaGVyJHNlYXJjaEluMi5pbmRpY2VzO1xuXG4gICAgICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHNjb3JlOiBzY29yZSxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICAgICAgICBpZHg6IGlkeCxcbiAgICAgICAgICAgICAgICBub3JtOiBub3JtLFxuICAgICAgICAgICAgICAgIGluZGljZXM6IGluZGljZXNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRleHQgPSB2YWx1ZS52LFxuICAgICAgICAgICAgICBub3JtID0gdmFsdWUubjtcblxuICAgICAgICAgIHZhciBfc2VhcmNoZXIkc2VhcmNoSW4zID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCksXG4gICAgICAgICAgICAgIGlzTWF0Y2ggPSBfc2VhcmNoZXIkc2VhcmNoSW4zLmlzTWF0Y2gsXG4gICAgICAgICAgICAgIHNjb3JlID0gX3NlYXJjaGVyJHNlYXJjaEluMy5zY29yZSxcbiAgICAgICAgICAgICAgaW5kaWNlcyA9IF9zZWFyY2hlciRzZWFyY2hJbjMuaW5kaWNlcztcblxuICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICAgICAgICBzY29yZTogc2NvcmUsXG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICAgICAgbm9ybTogbm9ybSxcbiAgICAgICAgICAgICAgaW5kaWNlczogaW5kaWNlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEZ1c2U7XG4gIH0oKTsgLy8gUHJhY3RpY2FsIHNjb3JpbmcgZnVuY3Rpb25cblxuICBmdW5jdGlvbiBjb21wdXRlU2NvcmUkMShyZXN1bHRzLCBrZXlTdG9yZSkge1xuICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICB2YXIgdG90YWxTY29yZSA9IDE7XG4gICAgICByZXN1bHQubWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmOCkge1xuICAgICAgICB2YXIga2V5ID0gX3JlZjgua2V5LFxuICAgICAgICAgICAgbm9ybSA9IF9yZWY4Lm5vcm0sXG4gICAgICAgICAgICBzY29yZSA9IF9yZWY4LnNjb3JlO1xuICAgICAgICB2YXIgd2VpZ2h0ID0ga2V5U3RvcmUuZ2V0KGtleSwgJ3dlaWdodCcpO1xuICAgICAgICB0b3RhbFNjb3JlICo9IE1hdGgucG93KHNjb3JlID09PSAwICYmIHdlaWdodCA/IE51bWJlci5FUFNJTE9OIDogc2NvcmUsICh3ZWlnaHQgfHwgMSkgKiBub3JtKTtcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0LnNjb3JlID0gdG90YWxTY29yZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdChyZXN1bHRzLCBkb2NzKSB7XG4gICAgdmFyIF9yZWY5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICAgICAgX3JlZjkkaW5jbHVkZU1hdGNoZXMgPSBfcmVmOS5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgaW5jbHVkZU1hdGNoZXMgPSBfcmVmOSRpbmNsdWRlTWF0Y2hlcyA9PT0gdm9pZCAwID8gQ29uZmlnLmluY2x1ZGVNYXRjaGVzIDogX3JlZjkkaW5jbHVkZU1hdGNoZXMsXG4gICAgICAgIF9yZWY5JGluY2x1ZGVTY29yZSA9IF9yZWY5LmluY2x1ZGVTY29yZSxcbiAgICAgICAgaW5jbHVkZVNjb3JlID0gX3JlZjkkaW5jbHVkZVNjb3JlID09PSB2b2lkIDAgPyBDb25maWcuaW5jbHVkZVNjb3JlIDogX3JlZjkkaW5jbHVkZVNjb3JlO1xuXG4gICAgdmFyIHRyYW5zZm9ybWVycyA9IFtdO1xuICAgIGlmIChpbmNsdWRlTWF0Y2hlcykgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtTWF0Y2hlcyk7XG4gICAgaWYgKGluY2x1ZGVTY29yZSkgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtU2NvcmUpO1xuICAgIHJldHVybiByZXN1bHRzLm1hcChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICB2YXIgaWR4ID0gcmVzdWx0LmlkeDtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICBpdGVtOiBkb2NzW2lkeF0sXG4gICAgICAgIHJlZkluZGV4OiBpZHhcbiAgICAgIH07XG5cbiAgICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICAgIHRyYW5zZm9ybWVycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFuc2Zvcm1lcikge1xuICAgICAgICAgIHRyYW5zZm9ybWVyKHJlc3VsdCwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIEZ1c2UudmVyc2lvbiA9ICc2LjAuMCc7XG4gIEZ1c2UuY3JlYXRlSW5kZXggPSBjcmVhdGVJbmRleDtcbiAgRnVzZS5wYXJzZUluZGV4ID0gcGFyc2VJbmRleDtcbiAgRnVzZS5jb25maWcgPSBDb25maWc7XG5cbiAge1xuICAgIEZ1c2UucGFyc2VRdWVyeSA9IHBhcnNlO1xuICB9XG5cbiAge1xuICAgIHJlZ2lzdGVyKEV4dGVuZGVkU2VhcmNoKTtcbiAgfVxuXG4gIHJldHVybiBGdXNlO1xuXG59KSkpO1xuIiwiY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogJ0FJemFTeUNmMnRLOE9KcVFUT0xOZmt6ZkZET1hublpOWXMtaGJaUScsXG4gIGF1dGhEb21haW46ICdsYXN0cGFzcy1lMzlkOC5maXJlYmFzZWFwcC5jb20nLFxuICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vbGFzdHBhc3MtZTM5ZDguZmlyZWJhc2Vpby5jb20nLFxuICBwcm9qZWN0SWQ6ICdsYXN0cGFzcy1lMzlkOCcsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdsYXN0cGFzcy1lMzlkOC5hcHBzcG90LmNvbScsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnNjIzNDU3OTc5NDExJyxcbiAgYXBwSWQ6ICcxOjYyMzQ1Nzk3OTQxMTp3ZWI6ODMyZmRlMzQ1YmFmYTA0M2RjNDNlNicsXG59O1xuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2VDb25maWc7XG4iLCJpbXBvcnQgZmlyZWJhc2VDb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0ICogYXMgRnVzZSBmcm9tICcuLi9ub2RlX21vZHVsZXMvZnVzZS5qcy9kaXN0L2Z1c2UnO1xuXG4oXG4gIGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgY29uc3QgcHJvZmlsZVBpY3R1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS1waWN0dXJlJyk7XG4gICAgICBjb25zdCBlbWFpbElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLWlkJyk7XG4gICAgICBjb25zdCBzZXR0aW5nc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtbWVudScpO1xuICAgICAgY29uc3QgbG9nb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dCcpO1xuICAgICAgY29uc3QgbW9kZWwgPSB7XG4gICAgICAgIHVzZXI6IHsgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICBzaXRlUGFzc3dvcmQ6ICcnLFxuICAgICAgICAgIG5vdGVzOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyZWRQYXNzd29yZHM6IFtdLFxuICAgICAgICBwYXNzd29yZHM6IFtdLFxuICAgICAgICBwYXNzd29yZElEOiBudWxsLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHZpZXcgPSB7XG4gICAgICAgIGFkZFBhc3N3b3JkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXBhc3N3b3JkJyksXG4gICAgICAgIHBhc3N3b3JkQ29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWNvbnRlbnQnKSxcbiAgICAgICAgY2xvc2VNb2RhbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLW1vZGFsJyksXG4gICAgICAgIHVybElucHV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXJsLWlucHV0JyksXG4gICAgICAgIHVybElucHV0SWNvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VybC1pbnB1dC1pY29uJyksXG4gICAgICAgIHVybElucHV0SGVscDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VybC1pbnB1dC1oZWxwJyksXG4gICAgICAgIG5hbWVJbnB1dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtaW5wdXQnKSxcbiAgICAgICAgbmFtZUlucHV0SWNvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtaW5wdXQtaWNvbicpLFxuICAgICAgICBuYW1lSW5wdXRIZWxwOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1pbnB1dC1oZWxwJyksXG4gICAgICAgIHVzZXJOYW1lSW5wdXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZS1pbnB1dCcpLFxuICAgICAgICB1c2VyTmFtZUlucHV0SWNvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lLWlucHV0LWljb24nKSxcbiAgICAgICAgdXNlck5hbWVJbnB1dEhlbHA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZS1pbnB1dC1oZWxwJyksXG4gICAgICAgIHBhc3N3b3JkSW5wdXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1pbnB1dCcpLFxuICAgICAgICBwYXNzd29yZElucHV0SWNvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWlucHV0LWljb24nKSxcbiAgICAgICAgcGFzc3dvcmRJbnB1dEhlbHA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1pbnB1dC1oZWxwJyksXG4gICAgICAgIG5vdGVzSW5wdXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1pbnB1dCcpLFxuICAgICAgICBub3Rlc0lucHV0SGVscDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLWlucHV0LWhlbHAnKSxcbiAgICAgICAgc2F2ZVBhc3N3b3JkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1wYXNzd29yZCcpLFxuICAgICAgICBzZWFyY2g6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKSxcbiAgICAgICAgaW5pdDogKCkgPT4ge1xuICAgICAgICAgIHZpZXcuc2VhcmNoLm9uaW5wdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZVNlYXJjaElucHV0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aWV3LnVybElucHV0Lm9uaW5wdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZVVybElucHV0KHZpZXcudXJsSW5wdXQudmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlldy5uYW1lSW5wdXQub25pbnB1dCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTmFtZUlucHV0KHZpZXcubmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpZXcudXNlck5hbWVJbnB1dC5vbmlucHV0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbGxlci5oYW5kbGVVc2VyTmFtZUlucHV0KHZpZXcudXNlck5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aWV3LnBhc3N3b3JkSW5wdXQub25pbnB1dCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlUGFzc3dvcmRJbnB1dCh2aWV3LnBhc3N3b3JkSW5wdXQudmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlldy5ub3Rlc0lucHV0Lm9uaW5wdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZU5vdGVzSW5wdXQodmlldy5ub3Rlc0lucHV0LnZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpZXcuYWRkUGFzc3dvcmQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHZpZXcucGFzc3dvcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlldy5jbG9zZU1vZGFsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB2aWV3LnBhc3N3b3JkQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIucmVzZXRGb3JtKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXR0aW5nc01lbnUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldHRpbmdzTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvZ291dC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbGxlci5sb2dvdXQoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpZXcuc2F2ZVBhc3N3b3JkLm9uY2xpY2sgPSBjb250cm9sbGVyLnNhdmVQYXNzd29yZHM7XG4gICAgICAgICAgdmlldy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICAgICAgcHJvZmlsZVBpY3R1cmUuc3JjID0gbW9kZWwudXNlci5waG90b1VSTDtcbiAgICAgICAgICBlbWFpbElkLmlubmVySFRNTCA9IG1vZGVsLnVzZXIuZW1haWw7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgY29uc3QgZGlzcGxheVZpZXcgPSB7XG4gICAgICAgIHBhc3N3b3JkRGlzcGxheUxpc3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1kaXNwbGF5LWxpc3QnKSxcbiAgICAgICAgaW5pdDogKCkgPT4ge1xuICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlU2VhcmNoSW5wdXQoKTtcbiAgICAgICAgICBkaXNwbGF5Vmlldy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICAgICAgZGlzcGxheVZpZXcucGFzc3dvcmREaXNwbGF5TGlzdC5pbm5lckhUTUwgPSBgYDtcbiAgICAgICAgICBtb2RlbC5maWx0ZXJlZFBhc3N3b3Jkcy5mb3JFYWNoKChwYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgICAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250ZW50Jyk7XG4gICAgICAgICAgICBjYXJkQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAke3Bhc3N3b3JkLnVzZXJuYW1lfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAke3Bhc3N3b3JkLm5hbWV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGNvbnN0IGxhdW5jaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbGF1bmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xhdW5jaC1idXR0b24nLCAnaXMtc3VjY2VzcycsICdidXR0b24nKTtcbiAgICAgICAgICAgIGxhdW5jaEJ1dHRvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWxpbmtcIj48L2k+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgTGF1bmNoXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChsYXVuY2hCdXR0b24pO1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mb290ZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRhZ0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBidXR0b25UYWdFZGl0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtZm9vdGVyLWl0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2lzLWluZm8nKTtcbiAgICAgICAgICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGVkaXRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgdXBkYXRlQ29udHJvbGxlci5lZGl0UGFzc3dvcmQocGFzc3dvcmQuaWQsIHBhc3N3b3JkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBidXR0b25UYWdEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBidXR0b25UYWdEZWxldGUuY2xhc3NMaXN0LmFkZCgnY2FyZC1mb290ZXItaXRlbScpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2lzLWRhbmdlcicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgdXBkYXRlQ29udHJvbGxlci5kZWxldGVQYXNzd29yZChwYXNzd29yZC5pZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnV0dG9uVGFnRWRpdC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvblRhZ0RlbGV0ZS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGJ1dHRvblRhZ0VkaXQpO1xuICAgICAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGJ1dHRvblRhZ0RlbGV0ZSk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICAgICAgICAgIGRpc3BsYXlWaWV3LnBhc3N3b3JkRGlzcGxheUxpc3QuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgICAgICBjYXJkLm9ubW91c2VvdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICBsYXVuY2hCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbGF1bmNoLWJ1dHRvbicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhcmQub25tb3VzZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgbGF1bmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xhdW5jaC1idXR0b24nKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsYXVuY2hCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgdXBkYXRlQ29udHJvbGxlci5sYXVuY2hXZWJzaXRlKHBhc3N3b3JkLmlkLCBwYXNzd29yZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSB7XG4gICAgICAgIGhhbmRsZVNlYXJjaElucHV0OiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZnVzZSA9IG5ldyBGdXNlKG1vZGVsLnBhc3N3b3Jkcywge1xuICAgICAgICAgICAga2V5czogWyduYW1lJywgJ3VzZXJuYW1lJ10sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHZpZXcuc2VhcmNoLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZHMgPSBbXTtcbiAgICAgICAgICAgIGZ1c2Uuc2VhcmNoKHZpZXcuc2VhcmNoLnZhbHVlKS5mb3JFYWNoKChzZWFyY2hQYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgICBwYXNzd29yZHMucHVzaChzZWFyY2hQYXNzd29yZC5pdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udHJvbGxlci5zZXRGaWx0ZXJlZFBhc3N3b3JkcyhwYXNzd29yZHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLnNldEZpbHRlcmVkUGFzc3dvcmRzKG1vZGVsLnBhc3N3b3Jkcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRGaWx0ZXJlZFBhc3N3b3JkczogKHBhc3N3b3JkcykgPT4ge1xuICAgICAgICAgIG1vZGVsLmZpbHRlcmVkUGFzc3dvcmRzID0gcGFzc3dvcmRzO1xuICAgICAgICAgIGRpc3BsYXlWaWV3LnJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVOb3Rlc0lucHV0OiAobmFtZSkgPT4ge1xuICAgICAgICAgIGlmIChjb250cm9sbGVyLnZhbGlkYXRlTm90ZXMobmFtZSkpIHtcbiAgICAgICAgICAgIHZpZXcubm90ZXNJbnB1dC5jbGFzc0xpc3QuYWRkKCdpcy1zdWNjZXNzJyk7XG4gICAgICAgICAgICB2aWV3Lm5vdGVzSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICB2aWV3Lm5vdGVzSW5wdXRIZWxwLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHZpZXcubm90ZXNJbnB1dEhlbHAuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICB2aWV3Lm5vdGVzSW5wdXRIZWxwLmlubmVySFRNTCA9IGBOb3RlcyBzb3VuZHMgZ29vZGA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXcubm90ZXNJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdWNjZXNzJyk7XG4gICAgICAgICAgICB2aWV3Lm5vdGVzSW5wdXQuY2xhc3NMaXN0LmFkZCgnaXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICB2aWV3Lm5vdGVzSW5wdXRIZWxwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHZpZXcubm90ZXNJbnB1dEhlbHAuY2xhc3NMaXN0LmFkZCgnaXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICB2aWV3Lm5vdGVzSW5wdXRIZWxwLmlubmVySFRNTCA9IGBGaWxsIHZhbGlkIG5vdGVzYDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZVBhc3N3b3JkSW5wdXQ6IChuYW1lKSA9PiB7XG4gICAgICAgICAgaWYgKGNvbnRyb2xsZXIudmFsaWRhdGVQYXNzd29yZChuYW1lKSkge1xuICAgICAgICAgICAgdmlldy5wYXNzd29yZElucHV0LmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHZpZXcucGFzc3dvcmRJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kYW5nZXInKTtcbiAgICAgICAgICAgIHZpZXcucGFzc3dvcmRJbnB1dEljb24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPmA7XG4gICAgICAgICAgICB2aWV3LnBhc3N3b3JkSW5wdXRIZWxwLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHZpZXcucGFzc3dvcmRJbnB1dEhlbHAuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICB2aWV3LnBhc3N3b3JkSW5wdXRIZWxwLmlubmVySFRNTCA9IGBQYXNzd29yZCBpcyB2YWxpZGA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXcucGFzc3dvcmRJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdWNjZXNzJyk7XG4gICAgICAgICAgICB2aWV3LnBhc3N3b3JkSW5wdXQuY2xhc3NMaXN0LmFkZCgnaXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICB2aWV3LnBhc3N3b3JkSW5wdXRJY29uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L2k+XG4gICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB2aWV3LnBhc3N3b3JkSW5wdXRIZWxwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHZpZXcucGFzc3dvcmRJbnB1dEhlbHAuY2xhc3NMaXN0LmFkZCgnaXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICB2aWV3LnBhc3N3b3JkSW5wdXRIZWxwLmlubmVySFRNTCA9IGBGaWxsIGEgVmFsaWQgUGFzc3dvcmRgO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlVXNlck5hbWVJbnB1dDogKG5hbWUpID0+IHtcbiAgICAgICAgICBpZiAoY29udHJvbGxlci52YWxpZGF0ZVVzZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgICAgICB2aWV3LnVzZXJOYW1lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICB2aWV3LnVzZXJOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgICAgICAgICAgdmlldy51c2VyTmFtZUlucHV0SWNvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+YDtcbiAgICAgICAgICAgIHZpZXcudXNlck5hbWVJbnB1dEhlbHAuY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgICAgICAgICAgdmlldy51c2VyTmFtZUlucHV0SGVscC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kYW5nZXInKTtcbiAgICAgICAgICAgIHZpZXcudXNlck5hbWVJbnB1dEhlbHAuaW5uZXJIVE1MID0gYFVzZXJuYW1lIGlzIHZhbGlkYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlldy51c2VyTmFtZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHZpZXcudXNlck5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTtcbiAgICAgICAgICAgIHZpZXcudXNlck5hbWVJbnB1dEljb24uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvaT5cbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIHZpZXcudXNlck5hbWVJbnB1dEhlbHAuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VjY2VzcycpO1xuICAgICAgICAgICAgdmlldy51c2VyTmFtZUlucHV0SGVscC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTtcbiAgICAgICAgICAgIHZpZXcudXNlck5hbWVJbnB1dEhlbHAuaW5uZXJIVE1MID0gYEZpbGwgYSBWYWxpZCBVc2VybmFtZWA7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVOYW1lSW5wdXQ6IChuYW1lKSA9PiB7XG4gICAgICAgICAgaWYgKGNvbnRyb2xsZXIudmFsaWRhdGVOYW1lKG5hbWUpKSB7XG4gICAgICAgICAgICB2aWV3Lm5hbWVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kYW5nZXInKTtcbiAgICAgICAgICAgIHZpZXcubmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHZpZXcubmFtZUlucHV0SWNvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+YDtcbiAgICAgICAgICAgIHZpZXcubmFtZUlucHV0SGVscC5jbGFzc0xpc3QuYWRkKCdpcy1zdWNjZXNzJyk7XG4gICAgICAgICAgICB2aWV3Lm5hbWVJbnB1dEhlbHAuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICB2aWV3Lm5hbWVJbnB1dEhlbHAuaW5uZXJIVE1MID0gYE5hbWUgaXMgdmFsaWRgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3Lm5hbWVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdWNjZXNzJyk7XG4gICAgICAgICAgICB2aWV3Lm5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTtcbiAgICAgICAgICAgIHZpZXcubmFtZUlucHV0SWNvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9pPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIHZpZXcubmFtZUlucHV0SGVscC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdWNjZXNzJyk7XG4gICAgICAgICAgICB2aWV3Lm5hbWVJbnB1dEhlbHAuY2xhc3NMaXN0LmFkZCgnaXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICB2aWV3Lm5hbWVJbnB1dEhlbHAuaW5uZXJIVE1MID0gYEZpbGwgYSB2YWxpZCBuYW1lYDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZVVybElucHV0OiAobmFtZSkgPT4ge1xuICAgICAgICAgIGlmIChjb250cm9sbGVyLnZhbGlkYXRlVXJsKG5hbWUpKSB7XG4gICAgICAgICAgICB2aWV3LnVybElucHV0LmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHZpZXcudXJsSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICB2aWV3LnVybElucHV0SWNvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+YDtcbiAgICAgICAgICAgIHZpZXcudXJsSW5wdXRIZWxwLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHZpZXcudXJsSW5wdXRIZWxwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRhbmdlcicpO1xuICAgICAgICAgICAgdmlldy51cmxJbnB1dEhlbHAuaW5uZXJIVE1MID0gYFVybCBpcyB2YWxpZGA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXcudXJsSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VjY2VzcycpO1xuICAgICAgICAgICAgdmlldy51cmxJbnB1dC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTtcbiAgICAgICAgICAgIHZpZXcudXJsSW5wdXRJY29uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L2k+XG4gICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB2aWV3LnVybElucHV0SGVscC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdWNjZXNzJyk7XG4gICAgICAgICAgICB2aWV3LnVybElucHV0SGVscC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTtcbiAgICAgICAgICAgIHZpZXcudXJsSW5wdXRIZWxwLmlubmVySFRNTCA9IGBGaWxsIGEgdmFsaWQgVXJsYDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRlTm90ZXM6IChuYW1lKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5hbWUubGVuZ3RoID4gMTAwO1xuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0ZVBhc3N3b3JkOiAobmFtZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuYW1lLmxlbmd0aCA+IDU7XG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRlVXNlck5hbWU6IChuYW1lKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5hbWUubGVuZ3RoID4gNjtcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWRhdGVOYW1lOiAobmFtZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuYW1lLmxlbmd0aCA+IDU7XG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRlVXJsOiAobmFtZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuYW1lLmxlbmd0aCA+IDEwO1xuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0ZUFsbDogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLnZhbGlkYXRlVXJsKHZpZXcudXJsSW5wdXQudmFsdWUpICYmXG4gICAgICAgICAgY29udHJvbGxlci52YWxpZGF0ZU5hbWUodmlldy5uYW1lSW5wdXQudmFsdWUpICYmXG4gICAgICAgICAgY29udHJvbGxlci52YWxpZGF0ZVVzZXJOYW1lKHZpZXcudXNlck5hbWVJbnB1dC52YWx1ZSkgJiZcbiAgICAgICAgICBjb250cm9sbGVyLnZhbGlkYXRlUGFzc3dvcmQodmlldy5wYXNzd29yZElucHV0LnZhbHVlKSAmJlxuICAgICAgICAgIGNvbnRyb2xsZXIudmFsaWRhdGVOb3Rlcyh2aWV3Lm5vdGVzSW5wdXQudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICByZXNldEZvcm06ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXNzd29yZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZWQtcGFzc3dvcmQtZm9ybScpO1xuICAgICAgICAgIHBhc3N3b3JkRm9ybS5pbm5lckhUTUwgPWBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWV4cGFuZGVkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5VUkw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25zLWxlZnQgaGFzLWljb25zLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVybC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1saW5rXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInVybC1pbnB1dC1pY29uXCIgY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ1cmwtaW5wdXQtaGVscFwiIGNsYXNzPVwiaGVscFwiPlxuICAgICAgICAgICAgICAgICAgICBGaWxsIHRoZSB1cmxcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWV4cGFuZGVkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0IGhhcy1pY29ucy1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtc2lnbmF0dXJlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIm5hbWUtaW5wdXQtaWNvblwiIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwibmFtZS1pbnB1dC1oZWxwXCIgY2xhc3M9XCJoZWxwXCI+XG4gICAgICAgICAgICAgICAgICAgIEZpbGwgdGhlIE5hbWVcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlVzZXJuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdCBoYXMtaWNvbnMtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCIgXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWUtaW5wdXQtaWNvblwiIFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBpZD1cInVzZXJuYW1lLWlucHV0LWhlbHBcIiBjbGFzcz1cImhlbHBcIj5cbiAgICAgICAgICAgICAgICAgICAgRmlsbCB0aGUgVXNlcmFtZVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5TaXRlIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0IGhhcy1pY29ucy1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiIFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCIgXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11bmxvY2tcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1pbnB1dC1pY29uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwicGFzc3dvcmQtaW5wdXQtaGVscFwiIGNsYXNzPVwiaGVscFwiPlxuICAgICAgICAgICAgICAgICAgICBGaWxsIHRoZSBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaXMtZXhwYW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPk5vdGVzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0YXJlYVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm90ZXMtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJub3Rlcy1pbnB1dC1oZWxwXCIgY2xhc3M9XCJoZWxwXCI+XG4gICAgICAgICAgICAgICAgICAgIEZpbGwgdGhlIE5vdGVzXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGA7XG4gICAgICAgICAgdmlldy5hZGRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcGFzc3dvcmQnKTtcbiAgICAgICAgICB2aWV3LnBhc3N3b3JkQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1jb250ZW50Jyk7XG4gICAgICAgICAgdmlldy5jbG9zZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLW1vZGFsJyk7XG4gICAgICAgICAgdmlldy51cmxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cmwtaW5wdXQnKTtcbiAgICAgICAgICB2aWV3LnVybElucHV0SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cmwtaW5wdXQtaWNvbicpO1xuICAgICAgICAgIHZpZXcudXJsSW5wdXRIZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VybC1pbnB1dC1oZWxwJyk7XG4gICAgICAgICAgdmlldy5uYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1pbnB1dCcpO1xuICAgICAgICAgIHZpZXcubmFtZUlucHV0SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLWlucHV0LWljb24nKTtcbiAgICAgICAgICB2aWV3Lm5hbWVJbnB1dEhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1pbnB1dC1oZWxwJyk7XG4gICAgICAgICAgdmlldy51c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lLWlucHV0Jyk7XG4gICAgICAgICAgdmlldy51c2VyTmFtZUlucHV0SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAndXNlcm5hbWUtaW5wdXQtaWNvbicpO1xuICAgICAgICAgIHZpZXcudXNlck5hbWVJbnB1dEhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgJ3VzZXJuYW1lLWlucHV0LWhlbHAnKTtcbiAgICAgICAgICB2aWV3LnBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtaW5wdXQnKTtcbiAgICAgICAgICB2aWV3LnBhc3N3b3JkSW5wdXRJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICdwYXNzd29yZC1pbnB1dC1pY29uJyk7XG4gICAgICAgICAgdmlldy5wYXNzd29yZElucHV0SGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAncGFzc3dvcmQtaW5wdXQtaGVscCcpO1xuICAgICAgICAgIHZpZXcubm90ZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1pbnB1dCcpO1xuICAgICAgICAgIHZpZXcubm90ZXNJbnB1dEhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtaW5wdXQtaGVscCcpO1xuICAgICAgICAgIHZpZXcuc2F2ZVBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtcGFzc3dvcmQnKTtcbiAgICAgICAgICB2aWV3LnNhdmVQYXNzd29yZC5pbm5lclRleHQgPSBgU2F2ZWA7XG4gICAgICAgICAgdmlldy5pbml0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVBhc3N3b3JkOiAoKSA9PiB7XG4gICAgICAgICAgdmlldy5wYXNzd29yZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgdmlldy51cmxJbnB1dC52YWx1ZSA9IG1vZGVsLnBhc3N3b3JkLnVybDtcbiAgICAgICAgICB2aWV3Lm5hbWVJbnB1dC52YWx1ZSA9IG1vZGVsLnBhc3N3b3JkLm5hbWU7XG4gICAgICAgICAgdmlldy51c2VyTmFtZUlucHV0LnZhbHVlID0gbW9kZWwucGFzc3dvcmQudXNlcm5hbWU7XG4gICAgICAgICAgdmlldy5wYXNzd29yZElucHV0LnZhbHVlID0gbW9kZWwucGFzc3dvcmQuc2l0ZVBhc3N3b3JkO1xuICAgICAgICAgIHZpZXcubm90ZXNJbnB1dC52YWx1ZSA9IG1vZGVsLnBhc3N3b3JkLm5vdGVzO1xuICAgICAgICAgIHZpZXcuc2F2ZVBhc3N3b3JkLmlubmVySFRNTCA9IGBVcGRhdGVgO1xuICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVXJsSW5wdXQodmlldy51cmxJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgY29udHJvbGxlci5oYW5kbGVVc2VyTmFtZUlucHV0KHZpZXcudXNlck5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgY29udHJvbGxlci5oYW5kbGVOYW1lSW5wdXQodmlldy5uYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlUGFzc3dvcmRJbnB1dCh2aWV3LnBhc3N3b3JkSW5wdXQudmFsdWUpO1xuICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTm90ZXNJbnB1dCh2aWV3Lm5vdGVzSW5wdXQudmFsdWUpO1xuICAgICAgICAgIHZpZXcuc2F2ZVBhc3N3b3JkLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVDb250cm9sbGVyLnVwZGF0ZVBhc3N3b3JkSW5EYigpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVQYXNzd29yZHM6ICgpID0+IHtcbiAgICAgICAgICBpZiAoIShjb250cm9sbGVyLnZhbGlkYXRlQWxsKCkpKSB7XG4gICAgICAgICAgICBhbGVydCgnRmlsbCBhbGwgYXJlYXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGIuY29sbGVjdGlvbignc3RvcmVQYXNzd29yZCcpLmFkZCh7XG4gICAgICAgICAgICB1cmw6IHZpZXcudXJsSW5wdXQudmFsdWUsXG4gICAgICAgICAgICBuYW1lOiB2aWV3Lm5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB2aWV3LnVzZXJOYW1lSW5wdXQudmFsdWUsXG4gICAgICAgICAgICBzaXRlUGFzc3dvcmQ6IHZpZXcucGFzc3dvcmRJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIG5vdGVzOiB2aWV3Lm5vdGVzSW5wdXQudmFsdWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIucmVzZXRGb3JtKCk7XG4gICAgICAgICAgICAgICAgbW9kZWwucHJvZHVjdElEID0gbnVsbDtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgncGxlYXNlIHRyeSBsYXRlcicpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB2aWV3LnBhc3N3b3JkQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgbGF1bmNoUmVzcGVjdGl2ZVNpdGU6ICgpID0+IHtcbiAgICAgICAgICB3aW5kb3cub3BlbihgJHttb2RlbC5wYXNzd29yZC51cmx9YCwgJ19ibGFuaycpO1xuICAgICAgICB9LFxuICAgICAgICBsb2dvdXQ6ICgpID0+IHtcbiAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRVc2VyOiAodXNlcikgPT4ge1xuICAgICAgICAgIG1vZGVsLnVzZXIgPSB1c2VyO1xuICAgICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgICB2aWV3LmluaXQoKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBjb25zdCB1cGRhdGVDb250cm9sbGVyID0ge1xuICAgICAgICB1cGRhdGVQYXNzd29yZEluRGI6ICgpID0+IHtcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdzdG9yZVBhc3N3b3JkJylcbiAgICAgICAgICAgICAgLmRvYyhtb2RlbC5wYXNzd29yZElEKVxuICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICB1cmw6IHZpZXcudXJsSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgbmFtZTogdmlldy5uYW1lSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHZpZXcudXNlck5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBzaXRlUGFzc3dvcmQ6IHZpZXcucGFzc3dvcmRJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBub3Rlczogdmlldy5ub3Rlc0lucHV0LnZhbHVlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgICAgICBtb2RlbC5wcm9kdWN0SUQgPSBudWxsO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdwbGVhc2UgdHJ5IGxhdGVyJyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHZpZXcucGFzc3dvcmRDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9LFxuICAgICAgICBsYXVuY2hXZWJzaXRlOiAocGFzc3dvcmRJRCwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgICBtb2RlbC5wYXNzd29yZElEID0gcGFzc3dvcmRJRDtcbiAgICAgICAgICBtb2RlbC5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICAgIGNvbnRyb2xsZXIubGF1bmNoUmVzcGVjdGl2ZVNpdGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdFBhc3N3b3JkOiAocGFzc3dvcmRJRCwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgICBtb2RlbC5wYXNzd29yZElEID0gcGFzc3dvcmRJRDtcbiAgICAgICAgICBtb2RlbC5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICAgIGNvbnRyb2xsZXIudXBkYXRlUGFzc3dvcmQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlUGFzc3dvcmQ6IChpZCkgPT4ge1xuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oJ3N0b3JlUGFzc3dvcmQnKVxuICAgICAgICAgICAgICAuZG9jKGlkKVxuICAgICAgICAgICAgICAuZGVsZXRlKClcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gZGVsZXRlIHBhc3N3b3JkJyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRQYXNzd29yZDogKHBhc3N3b3JkcykgPT4ge1xuICAgICAgICAgIG1vZGVsLnBhc3N3b3JkcyA9IHBhc3N3b3JkcztcbiAgICAgICAgICBkaXNwbGF5Vmlldy5pbml0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdzdG9yZVBhc3N3b3JkJykub25TbmFwc2hvdChcbiAgICAgICAgICAgICAgKGRvY1NuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRzID0gW107XG4gICAgICAgICAgICAgICAgZG9jU25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZG9jLmV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IGRvYy5kYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLmlkID0gZG9jLmlkO1xuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZHMucHVzaChwYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ29udHJvbGxlci5zZXRQYXNzd29yZChwYXNzd29yZHMpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgZGlzcGxheVZpZXcuaW5pdCgpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAgICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbiAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICBjb250cm9sbGVyLmluaXQoKTtcbiAgICAgICAgICBjb250cm9sbGVyLnNldFVzZXIodXNlcik7XG4gICAgICAgICAgdXBkYXRlQ29udHJvbGxlci5pbml0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9pbmRleC5odG1sJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9