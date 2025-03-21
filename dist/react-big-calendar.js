(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (global = global || self, factory(global.ReactBigCalendar = {}, global.React, global.ReactDOM));
}(this, function (exports, React, reactDom) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  var reactDom__default = 'default' in reactDom ? reactDom['default'] : reactDom;

  function NoopWrapper(props) {
    return props.children;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
  60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
  exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
  exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
  exports.isSuspense=function(a){return t(a)===p};
  });

  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs_development = createCommonjsModule(function (module, exports) {



  {
    (function() {

  Object.defineProperty(exports, '__esModule', { value: true });

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;

  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' ||
    // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
  }

  /**
   * Forked from fbjs/warning:
   * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
   *
   * Only change is we use console.warn instead of console.error,
   * and do nothing when 'console' is not supported.
   * This really simplifies the code.
   * ---
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var lowPriorityWarning = function () {};

  {
    var printWarning = function (format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.warn(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    lowPriorityWarning = function (condition, format) {
      if (format === undefined) {
        throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
      }
      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  }

  var lowPriorityWarning$1 = lowPriorityWarning;

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;
      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;
            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;
                default:
                  return $$typeof;
              }
          }
        case REACT_LAZY_TYPE:
        case REACT_MEMO_TYPE:
        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  }

  // AsyncMode is deprecated along with isAsyncMode
  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;

  var hasWarnedAboutDeprecatedIsAsyncMode = false;

  // AsyncMode should be deprecated
  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true;
        lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }
    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  exports.typeOf = typeOf;
  exports.AsyncMode = AsyncMode;
  exports.ConcurrentMode = ConcurrentMode;
  exports.ContextConsumer = ContextConsumer;
  exports.ContextProvider = ContextProvider;
  exports.Element = Element;
  exports.ForwardRef = ForwardRef;
  exports.Fragment = Fragment;
  exports.Lazy = Lazy;
  exports.Memo = Memo;
  exports.Portal = Portal;
  exports.Profiler = Profiler;
  exports.StrictMode = StrictMode;
  exports.Suspense = Suspense;
  exports.isValidElementType = isValidElementType;
  exports.isAsyncMode = isAsyncMode;
  exports.isConcurrentMode = isConcurrentMode;
  exports.isContextConsumer = isContextConsumer;
  exports.isContextProvider = isContextProvider;
  exports.isElement = isElement;
  exports.isForwardRef = isForwardRef;
  exports.isFragment = isFragment;
  exports.isLazy = isLazy;
  exports.isMemo = isMemo;
  exports.isPortal = isPortal;
  exports.isProfiler = isProfiler;
  exports.isStrictMode = isStrictMode;
  exports.isSuspense = isSuspense;
    })();
  }
  });

  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function() {
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;

  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
  var printWarning$1 = function() {};

  {
    printWarning$1 = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning$1(
              'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
              'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            );
          } else {
            printWarning$1('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
  });

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var invariant = function(condition, format, a, b, c, d, e, f) {
    {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.'
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format.replace(/%s/g, function() { return args[argIndex++]; })
        );
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };

  var invariant_1 = invariant;

  var noop = function noop() {};

  function readOnlyPropType(handler, name) {
    return function (props, propName) {
      if (props[propName] !== undefined) {
        if (!props[handler]) {
          return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
        }
      }
    };
  }

  function uncontrolledPropTypes(controlledValues, displayName) {
    var propTypes = {};
    Object.keys(controlledValues).forEach(function (prop) {
      // add default propTypes for folks that use runtime checks
      propTypes[defaultKey(prop)] = noop;

      {
        var handler = controlledValues[prop];
        !(typeof handler === 'string' && handler.trim().length) ? invariant_1(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : void 0;
        propTypes[prop] = readOnlyPropType(handler, displayName);
      }
    });
    return propTypes;
  }
  function isProp(props, prop) {
    return props[prop] !== undefined;
  }
  function defaultKey(key) {
    return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
  }
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  function canAcceptRef(component) {
    return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
  }

  function uncontrollable(Component, controlledValues, methods) {
    if (methods === void 0) {
      methods = [];
    }

    var displayName = Component.displayName || Component.name || 'Component';
    var canAcceptRef$1 = canAcceptRef(Component);
    var controlledProps = Object.keys(controlledValues);
    var PROPS_TO_OMIT = controlledProps.map(defaultKey);
    !(canAcceptRef$1 || !methods.length) ? invariant_1(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : void 0;

    var UncontrolledComponent =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(UncontrolledComponent, _React$Component);

      function UncontrolledComponent() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.handlers = Object.create(null);
        controlledProps.forEach(function (propName) {
          var handlerName = controlledValues[propName];

          var handleChange = function handleChange(value) {
            if (_this.props[handlerName]) {
              var _this$props;

              _this._notifying = true;

              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }

              (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

              _this._notifying = false;
            }

            _this._values[propName] = value;
            if (!_this.unmounted) _this.forceUpdate();
          };

          _this.handlers[handlerName] = handleChange;
        });
        if (methods.length) _this.attachRef = function (ref) {
          _this.inner = ref;
        };
        return _this;
      }

      var _proto = UncontrolledComponent.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
        //let the forceUpdate trigger the update
        return !this._notifying;
      };

      _proto.componentWillMount = function componentWillMount() {
        var _this2 = this;

        var props = this.props;
        this._values = Object.create(null);
        controlledProps.forEach(function (key) {
          _this2._values[key] = props[defaultKey(key)];
        });
      };

      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this3 = this;

        var props = this.props;
        controlledProps.forEach(function (key) {
          /**
           * If a prop switches from controlled to Uncontrolled
           * reset its value to the defaultValue
           */
          if (!isProp(nextProps, key) && isProp(props, key)) {
            _this3._values[key] = nextProps[defaultKey(key)];
          }
        });
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.unmounted = true;
      };

      _proto.render = function render() {
        var _this4 = this;

        var _this$props2 = this.props,
            innerRef = _this$props2.innerRef,
            props = _objectWithoutPropertiesLoose$1(_this$props2, ["innerRef"]);

        PROPS_TO_OMIT.forEach(function (prop) {
          delete props[prop];
        });
        var newProps = {};
        controlledProps.forEach(function (propName) {
          var propValue = _this4.props[propName];
          newProps[propName] = propValue !== undefined ? propValue : _this4._values[propName];
        });
        return React__default.createElement(Component, _extends$1({}, props, newProps, this.handlers, {
          ref: innerRef || this.attachRef
        }));
      };

      return UncontrolledComponent;
    }(React__default.Component);

    UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
    UncontrolledComponent.propTypes = _extends$1({
      innerRef: function innerRef() {}
    }, uncontrolledPropTypes(controlledValues, displayName));
    methods.forEach(function (method) {
      UncontrolledComponent.prototype[method] = function $proxiedMethod() {
        var _this$inner;

        return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
      };
    });
    var WrappedComponent = UncontrolledComponent;

    if (React__default.forwardRef) {
      WrappedComponent = React__default.forwardRef(function (props, ref) {
        return React__default.createElement(UncontrolledComponent, _extends$1({}, props, {
          innerRef: ref
        }));
      });
      WrappedComponent.propTypes = UncontrolledComponent.propTypes;
    }

    WrappedComponent.ControlledComponent = Component;
    /**
     * useful when wrapping a Component and you want to control
     * everything
     */

    WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
      if (additions === void 0) {
        additions = {};
      }

      return uncontrollable(newComponent, _extends$1({}, controlledValues, additions), nextMethods);
    };

    return WrappedComponent;
  }

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg) && arg.length) {
  				var inner = classNames.apply(null, arg);
  				if (inner) {
  					classes.push(inner);
  				}
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  let navigate = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE'
  };
  let views = {
    MONTH: 'month',
    WEEK: 'week',
    WORK_WEEK: 'work_week',
    DAY: 'day',
    AGENDA: 'agenda'
  };

  let viewNames = Object.keys(views).map(k => views[k]);
  let accessor = propTypes.oneOfType([propTypes.string, propTypes.func]);
  let dateFormat = propTypes.any;
  let dateRangeFormat = propTypes.func;
  /**
   * accepts either an array of builtin view names:
   *
   * ```
   * views={['month', 'day', 'agenda']}
   * ```
   *
   * or an object hash of the view name and the component (or boolean for builtin)
   *
   * ```
   * views={{
   *   month: true,
   *   week: false,
   *   workweek: WorkWeekViewComponent,
   * }}
   * ```
   */

  let views$1 = propTypes.oneOfType([propTypes.arrayOf(propTypes.oneOf(viewNames)), propTypes.objectOf(function (prop, key) {
    let isBuiltinView = viewNames.indexOf(key) !== -1 && typeof prop[key] === 'boolean';

    if (isBuiltinView) {
      return null;
    } else {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return propTypes.elementType(prop, key, ...args);
    }
  })]);

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var warning = function() {};

  {
    var printWarning$2 = function printWarning(format, args) {
      var len = arguments.length;
      args = new Array(len > 1 ? len - 1 : 0);
      for (var key = 1; key < len; key++) {
        args[key - 1] = arguments[key];
      }
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
            '`warning(condition, format, ...args)` requires a warning ' +
            'message argument'
        );
      }
      if (!condition) {
        printWarning$2.apply(null, [format].concat(args));
      }
    };
  }

  var warning_1 = warning;

  function notify(handler, args) {
    handler && handler.apply(null, [].concat(args));
  }

  const localePropType = propTypes.oneOfType([propTypes.string, propTypes.func]);

  function _format(localizer, formatter, value, format, culture) {
    let result = typeof format === 'function' ? format(value, culture, localizer) : formatter.call(localizer, value, format, culture);
    !(result == null || typeof result === 'string') ? invariant_1(false, '`localizer format(..)` must return a string, null, or undefined') : void 0;
    return result;
  }

  class DateLocalizer {
    constructor(spec) {
      var _this = this;

      !(typeof spec.format === 'function') ? invariant_1(false, 'date localizer `format(..)` must be a function') : void 0;
      !(typeof spec.firstOfWeek === 'function') ? invariant_1(false, 'date localizer `firstOfWeek(..)` must be a function') : void 0;
      this.propType = spec.propType || localePropType;
      this.startOfWeek = spec.firstOfWeek;
      this.formats = spec.formats;

      this.format = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _format(_this, spec.format, ...args);
      };
    }

  }
  function mergeWithDefaults(localizer, culture, formatOverrides, messages) {
    const formats = _extends({}, localizer.formats, formatOverrides);

    return _extends({}, localizer, {
      messages,
      startOfWeek: () => localizer.startOfWeek(culture),
      format: (value, _format2) => localizer.format(value, formats[_format2] || _format2, culture)
    });
  }

  let defaultMessages = {
    date: 'Date',
    time: 'Time',
    event: 'Event',
    allDay: 'All Day',
    week: 'Week',
    work_week: 'Work Week',
    day: 'Day',
    month: 'Month',
    previous: 'Back',
    next: 'Next',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    today: 'Today',
    agenda: 'Agenda',
    noEventsInRange: 'There are no events in this range.',
    showMore: total => "+" + total + " more"
  };
  function messages(msgs) {
    return _extends({}, defaultMessages, msgs);
  }

  var MILI    = 'milliseconds'
    , SECONDS = 'seconds'
    , MINUTES = 'minutes'
    , HOURS   = 'hours'
    , DAY     = 'day'
    , WEEK    = 'week'
    , MONTH   = 'month'
    , YEAR    = 'year'
    , DECADE  = 'decade'
    , CENTURY = 'century';

  function add(d, num, unit) {
    d = new Date(d);

    switch (unit){
      case MILI:
        return milliseconds(d, milliseconds(d) + num)
      case SECONDS:
        return seconds(d, seconds(d) + num)
      case MINUTES:
        return minutes(d, minutes(d) + num)
      case HOURS:
        return hours(d, hours(d) + num)
      case YEAR:
        return year(d, year(d) + num)
      case DAY:
        return date(d, date(d) + num)
      case WEEK:
        return date(d, date(d) + (7 * num))
      case MONTH:
        return monthMath(d, num)
      case DECADE:
        return year(d, year(d) + (num * 10))
      case CENTURY:
        return year(d, year(d) + (num * 100))
    }

    throw new TypeError('Invalid units: "' + unit + '"')
  }

  function subtract(d, num, unit) {
    return add(d, -num, unit)
  }

  function startOf(d, unit, firstOfWeek) {
    d = new Date(d);

    switch (unit) {
      case CENTURY:
      case DECADE:
      case YEAR:
          d = month(d, 0);
      case MONTH:
          d = date(d, 1);
      case WEEK:
      case DAY:
          d = hours(d, 0);
      case HOURS:
          d = minutes(d, 0);
      case MINUTES:
          d = seconds(d, 0);
      case SECONDS:
          d = milliseconds(d, 0);
    }

    if (unit === DECADE)
      d = subtract(d, year(d) % 10, 'year');

    if (unit === CENTURY)
      d = subtract(d, year(d) % 100, 'year');

    if (unit === WEEK)
      d = weekday(d, 0, firstOfWeek);

    return d
  }

  function endOf(d, unit, firstOfWeek){
    d = new Date(d);
    d = startOf(d, unit, firstOfWeek);
    d = add(d, 1, unit);
    d = subtract(d, 1, MILI);
    return d
  }

  var eq =  createComparer(function(a, b){ return a === b });
  var gt =  createComparer(function(a, b){ return a > b });
  var gte = createComparer(function(a, b){ return a >= b });
  var lt =  createComparer(function(a, b){ return a < b });
  var lte = createComparer(function(a, b){ return a <= b });

  function min(){
    return new Date(Math.min.apply(Math, arguments))
  }

  function max(){
    return new Date(Math.max.apply(Math, arguments))
  }

  function inRange(day, min, max, unit){
    unit = unit || 'day';

    return (!min || gte(day, min, unit))
        && (!max || lte(day, max, unit))
  }

  var milliseconds = createAccessor('Milliseconds');
  var seconds =      createAccessor('Seconds');
  var minutes =      createAccessor('Minutes');
  var hours =        createAccessor('Hours');
  var day =          createAccessor('Day');
  var date =         createAccessor('Date');
  var month =        createAccessor('Month');
  var year =         createAccessor('FullYear');

  function weekday(d, val, firstDay) {
      var w = (day(d) + 7 - (firstDay || 0) ) % 7;

      return val === undefined
        ? w
        : add(d, val - w, DAY);
  }

  function monthMath(d, val){
    var current = month(d)
      , newMonth  = (current + val);

      d = month(d, newMonth);

      while (newMonth < 0 ) newMonth = 12 + newMonth;

      //month rollover
      if ( month(d) !== ( newMonth % 12))
        d = date(d, 0); //move to last of month

      return d
  }

  function createAccessor(method){
    var hourLength = (function(method) {  
      switch(method) {
        case 'Milliseconds':
          return 3600000;
        case 'Seconds':
          return 3600;
        case 'Minutes':
          return 60;
        case 'Hours':
          return 1;
        default:
          return null;
      }
    })(method);
    
    return function(d, val){
      if (val === undefined)
        return d['get' + method]()

      var dateOut = new Date(d);
      dateOut['set' + method](val);
      
      if(hourLength && dateOut['get'+method]() != val && (method === 'Hours' || val >=hourLength && (dateOut.getHours()-d.getHours()<Math.floor(val/hourLength))) ){
        //Skip DST hour, if it occurs
        dateOut['set'+method](val+hourLength);
      }
      
      return dateOut
    }
  }

  function createComparer(operator) {
    return function (a, b, unit) {
      return operator(+startOf(a, unit), +startOf(b, unit))
    };
  }

  /* eslint no-fallthrough: off */
  const MILLI = {
    seconds: 1000,
    minutes: 1000 * 60,
    hours: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24
  };
  function firstVisibleDay(date, localizer) {
    let firstOfMonth = startOf(date, 'month');
    return startOf(firstOfMonth, 'week', localizer.startOfWeek());
  }
  function lastVisibleDay(date, localizer) {
    let endOfMonth = endOf(date, 'month');
    return endOf(endOfMonth, 'week', localizer.startOfWeek());
  }
  function visibleDays(date, localizer) {
    let current = firstVisibleDay(date, localizer),
        last = lastVisibleDay(date, localizer),
        days = [];

    while (lte(current, last, 'day')) {
      days.push(current);
      current = add(current, 1, 'day');
    }

    return days;
  }
  function ceil(date, unit) {
    let floor = startOf(date, unit);
    return eq(floor, date) ? floor : add(floor, 1, unit);
  }
  function range(start, end, unit) {
    if (unit === void 0) {
      unit = 'day';
    }

    let current = start,
        days = [];

    while (lte(current, end, unit)) {
      days.push(current);
      current = add(current, 1, unit);
    }

    return days;
  }
  function merge(date, time) {
    if (time == null && date == null) return null;
    if (time == null) time = new Date();
    if (date == null) date = new Date();
    date = startOf(date, 'day');
    date = hours(date, hours(time));
    date = minutes(date, minutes(time));
    date = seconds(date, seconds(time));
    return milliseconds(date, milliseconds(time));
  }
  function isJustDate(date) {
    return hours(date) === 0 && minutes(date) === 0 && seconds(date) === 0 && milliseconds(date) === 0;
  }
  function diff(dateA, dateB, unit) {
    if (!unit || unit === 'milliseconds') return Math.abs(+dateA - +dateB); // the .round() handles an edge case
    // with DST where the total won't be exact
    // since one day in the range may be shorter/longer by an hour

    return Math.round(Math.abs(+startOf(dateA, unit) / MILLI[unit] - +startOf(dateB, unit) / MILLI[unit]));
  }

  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq$1(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol$1 = root.Symbol;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty$1.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike(object) && isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq$1(object[index], value);
    }
    return false;
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag);
  }

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308;

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = (value < 0 ? -1 : 1);
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger(value) {
    var result = toFinite(value),
        remainder = result % 1;

    return result === result ? (remainder ? result - remainder : result) : 0;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil = Math.ceil,
      nativeMax = Math.max;

  /**
   * Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining
   * elements.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to process.
   * @param {number} [size=1] The length of each chunk
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the new array of chunks.
   * @example
   *
   * _.chunk(['a', 'b', 'c', 'd'], 2);
   * // => [['a', 'b'], ['c', 'd']]
   *
   * _.chunk(['a', 'b', 'c', 'd'], 3);
   * // => [['a', 'b', 'c'], ['d']]
   */
  function chunk(array, size, guard) {
    if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
      size = 1;
    } else {
      size = nativeMax(toInteger(size), 0);
    }
    var length = array == null ? 0 : array.length;
    if (!length || size < 1) {
      return [];
    }
    var index = 0,
        resIndex = 0,
        result = Array(nativeCeil(length / size));

    while (index < length) {
      result[resIndex++] = baseSlice(array, index, (index += size));
    }
    return result;
  }

  var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault;
  });

  unwrapExports(interopRequireDefault);

  var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
  });

  var inDOM = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  exports.default = _default;
  module.exports = exports["default"];
  });

  unwrapExports(inDOM);

  var contains = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _inDOM = interopRequireDefault(inDOM);

  var _default = function () {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    return _inDOM.default ? function (context, node) {
      if (context.contains) {
        return context.contains(node);
      } else if (context.compareDocumentPosition) {
        return context === node || !!(context.compareDocumentPosition(node) & 16);
      } else {
        return fallback(context, node);
      }
    } : fallback;
  }();

  exports.default = _default;

  function fallback(context, node) {
    if (node) do {
      if (node === context) return true;
    } while (node = node.parentNode);
    return false;
  }

  module.exports = exports["default"];
  });

  var contains$1 = unwrapExports(contains);

  var isWindow = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = getWindow;

  function getWindow(node) {
    return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
  }

  module.exports = exports["default"];
  });

  unwrapExports(isWindow);

  var ownerDocument_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = ownerDocument;

  function ownerDocument(node) {
    return node && node.ownerDocument || document;
  }

  module.exports = exports["default"];
  });

  unwrapExports(ownerDocument_1);

  var offset_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = offset;

  var _contains = interopRequireDefault(contains);

  var _isWindow = interopRequireDefault(isWindow);

  var _ownerDocument = interopRequireDefault(ownerDocument_1);

  function offset(node) {
    var doc = (0, _ownerDocument.default)(node),
        win = (0, _isWindow.default)(doc),
        docElem = doc && doc.documentElement,
        box = {
      top: 0,
      left: 0,
      height: 0,
      width: 0
    };
    if (!doc) return; // Make sure it's not a disconnected DOM node

    if (!(0, _contains.default)(docElem, node)) return box;
    if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect(); // IE8 getBoundingClientRect doesn't support width & height

    box = {
      top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
      left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
      width: (box.width == null ? node.offsetWidth : box.width) || 0,
      height: (box.height == null ? node.offsetHeight : box.height) || 0
    };
    return box;
  }

  module.exports = exports["default"];
  });

  var getOffset = unwrapExports(offset_1);

  var camelize_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = camelize;
  var rHyphen = /-(.)/g;

  function camelize(string) {
    return string.replace(rHyphen, function (_, chr) {
      return chr.toUpperCase();
    });
  }

  module.exports = exports["default"];
  });

  unwrapExports(camelize_1);

  var camelizeStyle = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = camelizeStyleName;

  var _camelize = interopRequireDefault(camelize_1);

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
   */
  var msPattern = /^-ms-/;

  function camelizeStyleName(string) {
    return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
  }

  module.exports = exports["default"];
  });

  unwrapExports(camelizeStyle);

  var hyphenate_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = hyphenate;
  var rUpper = /([A-Z])/g;

  function hyphenate(string) {
    return string.replace(rUpper, '-$1').toLowerCase();
  }

  module.exports = exports["default"];
  });

  unwrapExports(hyphenate_1);

  var hyphenateStyle = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = hyphenateStyleName;

  var _hyphenate = interopRequireDefault(hyphenate_1);

  /**
   * Copyright 2013-2014, Facebook, Inc.
   * All rights reserved.
   * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
   */
  var msPattern = /^ms-/;

  function hyphenateStyleName(string) {
    return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
  }

  module.exports = exports["default"];
  });

  unwrapExports(hyphenateStyle);

  var getComputedStyle$1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = _getComputedStyle;

  var _camelizeStyle = interopRequireDefault(camelizeStyle);

  var rposition = /^(top|right|bottom|left)$/;
  var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

  function _getComputedStyle(node) {
    if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
    var doc = node.ownerDocument;
    return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
      //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
      getPropertyValue: function getPropertyValue(prop) {
        var style = node.style;
        prop = (0, _camelizeStyle.default)(prop);
        if (prop == 'float') prop = 'styleFloat';
        var current = node.currentStyle[prop] || null;
        if (current == null && style && style[prop]) current = style[prop];

        if (rnumnonpx.test(current) && !rposition.test(prop)) {
          // Remember the original values
          var left = style.left;
          var runStyle = node.runtimeStyle;
          var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out

          if (rsLeft) runStyle.left = node.currentStyle.left;
          style.left = prop === 'fontSize' ? '1em' : current;
          current = style.pixelLeft + 'px'; // Revert the changed values

          style.left = left;
          if (rsLeft) runStyle.left = rsLeft;
        }

        return current;
      }
    };
  }

  module.exports = exports["default"];
  });

  unwrapExports(getComputedStyle$1);

  var removeStyle_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = removeStyle;

  function removeStyle(node, key) {
    return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
  }

  module.exports = exports["default"];
  });

  unwrapExports(removeStyle_1);

  var properties = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

  var _inDOM = interopRequireDefault(inDOM);

  var transform = 'transform';
  exports.transform = transform;
  var prefix, transitionEnd, animationEnd;
  exports.animationEnd = animationEnd;
  exports.transitionEnd = transitionEnd;
  var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
  exports.transitionDelay = transitionDelay;
  exports.transitionTiming = transitionTiming;
  exports.transitionDuration = transitionDuration;
  exports.transitionProperty = transitionProperty;
  var animationName, animationDuration, animationTiming, animationDelay;
  exports.animationDelay = animationDelay;
  exports.animationTiming = animationTiming;
  exports.animationDuration = animationDuration;
  exports.animationName = animationName;

  if (_inDOM.default) {
    var _getTransitionPropert = getTransitionProperties();

    prefix = _getTransitionPropert.prefix;
    exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
    exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
    exports.transform = transform = prefix + "-" + transform;
    exports.transitionProperty = transitionProperty = prefix + "-transition-property";
    exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
    exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
    exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
    exports.animationName = animationName = prefix + "-animation-name";
    exports.animationDuration = animationDuration = prefix + "-animation-duration";
    exports.animationTiming = animationTiming = prefix + "-animation-delay";
    exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
  }

  var _default = {
    transform: transform,
    end: transitionEnd,
    property: transitionProperty,
    timing: transitionTiming,
    delay: transitionDelay,
    duration: transitionDuration
  };
  exports.default = _default;

  function getTransitionProperties() {
    var style = document.createElement('div').style;
    var vendorMap = {
      O: function O(e) {
        return "o" + e.toLowerCase();
      },
      Moz: function Moz(e) {
        return e.toLowerCase();
      },
      Webkit: function Webkit(e) {
        return "webkit" + e;
      },
      ms: function ms(e) {
        return "MS" + e;
      }
    };
    var vendors = Object.keys(vendorMap);
    var transitionEnd, animationEnd;
    var prefix = '';

    for (var i = 0; i < vendors.length; i++) {
      var vendor = vendors[i];

      if (vendor + "TransitionProperty" in style) {
        prefix = "-" + vendor.toLowerCase();
        transitionEnd = vendorMap[vendor]('TransitionEnd');
        animationEnd = vendorMap[vendor]('AnimationEnd');
        break;
      }
    }

    if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
    if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
    style = null;
    return {
      animationEnd: animationEnd,
      transitionEnd: transitionEnd,
      prefix: prefix
    };
  }
  });

  unwrapExports(properties);
  var properties_1 = properties.animationEnd;
  var properties_2 = properties.animationDelay;
  var properties_3 = properties.animationTiming;
  var properties_4 = properties.animationDuration;
  var properties_5 = properties.animationName;
  var properties_6 = properties.transitionEnd;
  var properties_7 = properties.transitionDuration;
  var properties_8 = properties.transitionDelay;
  var properties_9 = properties.transitionTiming;
  var properties_10 = properties.transitionProperty;
  var properties_11 = properties.transform;

  var isTransform_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = isTransform;
  var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

  function isTransform(property) {
    return !!(property && supportedTransforms.test(property));
  }

  module.exports = exports["default"];
  });

  unwrapExports(isTransform_1);

  var style_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = style;

  var _camelizeStyle = interopRequireDefault(camelizeStyle);

  var _hyphenateStyle = interopRequireDefault(hyphenateStyle);

  var _getComputedStyle2 = interopRequireDefault(getComputedStyle$1);

  var _removeStyle = interopRequireDefault(removeStyle_1);



  var _isTransform = interopRequireDefault(isTransform_1);

  function style(node, property, value) {
    var css = '';
    var transforms = '';
    var props = property;

    if (typeof property === 'string') {
      if (value === undefined) {
        return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
      } else {
        (props = {})[property] = value;
      }
    }

    Object.keys(props).forEach(function (key) {
      var value = props[key];

      if (!value && value !== 0) {
        (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
      } else if ((0, _isTransform.default)(key)) {
        transforms += key + "(" + value + ") ";
      } else {
        css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
      }
    });

    if (transforms) {
      css += properties.transform + ": " + transforms + ";";
    }

    node.style.cssText += ';' + css;
  }

  module.exports = exports["default"];
  });

  unwrapExports(style_1);

  var offsetParent_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = offsetParent;

  var _ownerDocument = interopRequireDefault(ownerDocument_1);

  var _style = interopRequireDefault(style_1);

  function nodeName(node) {
    return node.nodeName && node.nodeName.toLowerCase();
  }

  function offsetParent(node) {
    var doc = (0, _ownerDocument.default)(node),
        offsetParent = node && node.offsetParent;

    while (offsetParent && nodeName(node) !== 'html' && (0, _style.default)(offsetParent, 'position') === 'static') {
      offsetParent = offsetParent.offsetParent;
    }

    return offsetParent || doc.documentElement;
  }

  module.exports = exports["default"];
  });

  unwrapExports(offsetParent_1);

  var scrollTop_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = scrollTop;

  var _isWindow = interopRequireDefault(isWindow);

  function scrollTop(node, val) {
    var win = (0, _isWindow.default)(node);
    if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;
    if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
  }

  module.exports = exports["default"];
  });

  var getScrollTop = unwrapExports(scrollTop_1);

  var scrollLeft = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = scrollTop;

  var _isWindow = interopRequireDefault(isWindow);

  function scrollTop(node, val) {
    var win = (0, _isWindow.default)(node);
    if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;
    if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
  }

  module.exports = exports["default"];
  });

  var getScrollLeft = unwrapExports(scrollLeft);

  var position_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = position;

  var _extends2 = interopRequireDefault(_extends_1);

  var _offset = interopRequireDefault(offset_1);

  var _offsetParent = interopRequireDefault(offsetParent_1);

  var _scrollTop = interopRequireDefault(scrollTop_1);

  var _scrollLeft = interopRequireDefault(scrollLeft);

  var _style = interopRequireDefault(style_1);

  function nodeName(node) {
    return node.nodeName && node.nodeName.toLowerCase();
  }

  function position(node, offsetParent) {
    var parentOffset = {
      top: 0,
      left: 0
    },
        offset; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
    // because it is its only offset parent

    if ((0, _style.default)(node, 'position') === 'fixed') {
      offset = node.getBoundingClientRect();
    } else {
      offsetParent = offsetParent || (0, _offsetParent.default)(node);
      offset = (0, _offset.default)(node);
      if (nodeName(offsetParent) !== 'html') parentOffset = (0, _offset.default)(offsetParent);
      parentOffset.top += parseInt((0, _style.default)(offsetParent, 'borderTopWidth'), 10) - (0, _scrollTop.default)(offsetParent) || 0;
      parentOffset.left += parseInt((0, _style.default)(offsetParent, 'borderLeftWidth'), 10) - (0, _scrollLeft.default)(offsetParent) || 0;
    } // Subtract parent offsets and node margins


    return (0, _extends2.default)({}, offset, {
      top: offset.top - parentOffset.top - (parseInt((0, _style.default)(node, 'marginTop'), 10) || 0),
      left: offset.left - parentOffset.left - (parseInt((0, _style.default)(node, 'marginLeft'), 10) || 0)
    });
  }

  module.exports = exports["default"];
  });

  var getPosition = unwrapExports(position_1);

  var requestAnimationFrame$1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _inDOM = interopRequireDefault(inDOM);

  var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
  var cancel = 'clearTimeout';
  var raf = fallback;
  var compatRaf;

  var getKey = function getKey(vendor, k) {
    return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
  };

  if (_inDOM.default) {
    vendors.some(function (vendor) {
      var rafKey = getKey(vendor, 'request');

      if (rafKey in window) {
        cancel = getKey(vendor, 'cancel');
        return raf = function raf(cb) {
          return window[rafKey](cb);
        };
      }
    });
  }
  /* https://github.com/component/raf */


  var prev = new Date().getTime();

  function fallback(fn) {
    var curr = new Date().getTime(),
        ms = Math.max(0, 16 - (curr - prev)),
        req = setTimeout(fn, ms);
    prev = curr;
    return req;
  }

  compatRaf = function compatRaf(cb) {
    return raf(cb);
  };

  compatRaf.cancel = function (id) {
    window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
  };

  var _default = compatRaf;
  exports.default = _default;
  module.exports = exports["default"];
  });

  var raf = unwrapExports(requestAnimationFrame$1);

  var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/EventCell.js";

  class EventCell extends React__default.Component {
    render() {
      let _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          event = _this$props.event,
          selected = _this$props.selected,
          isAllDay = _this$props.isAllDay,
          onSelect = _this$props.onSelect,
          _onDoubleClick = _this$props.onDoubleClick,
          localizer = _this$props.localizer,
          continuesPrior = _this$props.continuesPrior,
          continuesAfter = _this$props.continuesAfter,
          accessors = _this$props.accessors,
          getters = _this$props.getters,
          children = _this$props.children,
          _this$props$component = _this$props.components,
          Event = _this$props$component.event,
          EventWrapper = _this$props$component.eventWrapper,
          slotStart = _this$props.slotStart,
          slotEnd = _this$props.slotEnd,
          props = _objectWithoutPropertiesLoose(_this$props, ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"]);

      let title = accessors.title(event);
      let tooltip = accessors.tooltip(event);
      let end = accessors.end(event);
      let start = accessors.start(event);
      let allDay = accessors.allDay(event);
      let showAsAllDay = isAllDay || allDay || diff(start, ceil(end, 'day'), 'day') > 1;
      let userProps = getters.eventProp(event, start, end, selected);
      const content = React__default.createElement("div", {
        className: "rbc-event-content",
        title: tooltip || undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, Event ? React__default.createElement(Event, {
        event: event,
        continuesPrior: continuesPrior,
        continuesAfter: continuesAfter,
        title: title,
        isAllDay: allDay,
        localizer: localizer,
        slotStart: slotStart,
        slotEnd: slotEnd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }) : title);
      return React__default.createElement(EventWrapper, _extends({}, this.props, {
        type: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), React__default.createElement("div", _extends({}, props, {
        tabIndex: 0,
        style: _extends({}, userProps.style, style),
        className: classnames('rbc-event', className, userProps.className, {
          'rbc-selected': selected,
          'rbc-event-allday': showAsAllDay,
          'rbc-event-continues-prior': continuesPrior,
          'rbc-event-continues-after': continuesAfter
        }),
        onClick: e => onSelect && onSelect(event, e),
        onDoubleClick: e => _onDoubleClick && _onDoubleClick(event, e),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), typeof children === 'function' ? children(content) : content));
    }

  }

  EventCell.propTypes = {
    event: propTypes.object.isRequired,
    slotStart: propTypes.instanceOf(Date),
    slotEnd: propTypes.instanceOf(Date),
    selected: propTypes.bool,
    isAllDay: propTypes.bool,
    continuesPrior: propTypes.bool,
    continuesAfter: propTypes.bool,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object,
    onSelect: propTypes.func,
    onDoubleClick: propTypes.func
  };

  function isSelected(event, selected) {
    if (!event || selected == null) return false;
    return [].concat(selected).indexOf(event) !== -1;
  }
  function slotWidth(rowBox, slots) {
    let rowWidth = rowBox.right - rowBox.left;
    let cellWidth = rowWidth / slots;
    return cellWidth;
  }
  function getSlotAtX(rowBox, x, rtl, slots) {
    const cellWidth = slotWidth(rowBox, slots);
    return rtl ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth) : Math.floor((x - rowBox.left) / cellWidth);
  }
  function pointInBox(box, _ref) {
    let x = _ref.x,
        y = _ref.y;
    return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right;
  }
  function dateCellSelection(start, rowBox, box, slots, rtl) {
    let startIdx = -1;
    let endIdx = -1;
    let lastSlotIdx = slots - 1;
    let cellWidth = slotWidth(rowBox, slots); // cell under the mouse

    let currentSlot = getSlotAtX(rowBox, box.x, rtl, slots); // Identify row as either the initial row
    // or the row under the current mouse point

    let isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
    let isStartRow = rowBox.top < start.y && rowBox.bottom > start.y; // this row's position relative to the start point

    let isAboveStart = start.y > rowBox.bottom;
    let isBelowStart = rowBox.top > start.y;
    let isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom; // this row is between the current and start rows, so entirely selected

    if (isBetween) {
      startIdx = 0;
      endIdx = lastSlotIdx;
    }

    if (isCurrentRow) {
      if (isBelowStart) {
        startIdx = 0;
        endIdx = currentSlot;
      } else if (isAboveStart) {
        startIdx = currentSlot;
        endIdx = lastSlotIdx;
      }
    }

    if (isStartRow) {
      // select the cell under the initial point
      startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start.x - rowBox.left) / cellWidth) : Math.floor((start.x - rowBox.left) / cellWidth);

      if (isCurrentRow) {
        if (currentSlot < startIdx) startIdx = currentSlot;else endIdx = currentSlot; //select current range
      } else if (start.y < box.y) {
        // the current row is below start row
        // select cells to the right of the start cell
        endIdx = lastSlotIdx;
      } else {
        // select cells to the left of the start cell
        startIdx = 0;
      }
    }

    return {
      startIdx,
      endIdx
    };
  }

  var _jsxFileName$1 = "/Users/guilherme/work/react-big-calendar/src/Popup.js";

  class Popup extends React__default.Component {
    componentDidMount() {
      let _this$props = this.props,
          _this$props$popupOffs = _this$props.popupOffset,
          popupOffset = _this$props$popupOffs === void 0 ? 5 : _this$props$popupOffs,
          popperRef = _this$props.popperRef,
          _getOffset = getOffset(popperRef.current),
          top = _getOffset.top,
          left = _getOffset.left,
          width = _getOffset.width,
          height = _getOffset.height,
          viewBottom = window.innerHeight + getScrollTop(window),
          viewRight = window.innerWidth + getScrollLeft(window),
          bottom = top + height,
          right = left + width;

      if (bottom > viewBottom || right > viewRight) {
        let topOffset, leftOffset;
        if (bottom > viewBottom) topOffset = bottom - viewBottom + (popupOffset.y || +popupOffset || 0);
        if (right > viewRight) leftOffset = right - viewRight + (popupOffset.x || +popupOffset || 0);
        this.setState({
          topOffset,
          leftOffset
        }); //eslint-disable-line
      }
    }

    render() {
      let _this$props2 = this.props,
          events = _this$props2.events,
          selected = _this$props2.selected,
          getters = _this$props2.getters,
          accessors = _this$props2.accessors,
          components = _this$props2.components,
          onSelect = _this$props2.onSelect,
          onDoubleClick = _this$props2.onDoubleClick,
          slotStart = _this$props2.slotStart,
          slotEnd = _this$props2.slotEnd,
          localizer = _this$props2.localizer,
          popperRef = _this$props2.popperRef;
      let _this$props$position = this.props.position,
          left = _this$props$position.left,
          width = _this$props$position.width,
          top = _this$props$position.top,
          topOffset = (this.state || {}).topOffset || 0,
          leftOffset = (this.state || {}).leftOffset || 0;
      let style = {
        top: Math.max(0, top - topOffset),
        left: left - leftOffset,
        minWidth: width + width / 2
      };
      return React__default.createElement("div", {
        style: style,
        className: "rbc-overlay",
        ref: popperRef,
        __source: {
          fileName: _jsxFileName$1,
          lineNumber: 58
        },
        __self: this
      }, React__default.createElement("div", {
        className: "rbc-overlay-header",
        __source: {
          fileName: _jsxFileName$1,
          lineNumber: 59
        },
        __self: this
      }, localizer.format(slotStart, 'dayHeaderFormat')), events.map((event, idx) => React__default.createElement(EventCell, {
        key: idx,
        type: "popup",
        event: event,
        getters: getters,
        onSelect: onSelect,
        accessors: accessors,
        components: components,
        onDoubleClick: onDoubleClick,
        continuesPrior: lt(accessors.end(event), slotStart, 'day'),
        continuesAfter: gte(accessors.start(event), slotEnd, 'day'),
        slotStart: slotStart,
        slotEnd: slotEnd,
        selected: isSelected(event, selected),
        __source: {
          fileName: _jsxFileName$1,
          lineNumber: 63
        },
        __self: this
      })));
    }

  }

  Popup.propTypes = {
    position: propTypes.object,
    popupOffset: propTypes.oneOfType([propTypes.number, propTypes.shape({
      x: propTypes.number,
      y: propTypes.number
    })]),
    events: propTypes.array,
    selected: propTypes.object,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
    onSelect: propTypes.func,
    onDoubleClick: propTypes.func,
    slotStart: propTypes.instanceOf(Date),
    slotEnd: propTypes.number,
    popperRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
      current: propTypes.Element
    })])
    /**
     * The Overlay component, of react-overlays, creates a ref that is passed to the Popup, and
     * requires proper ref forwarding to be used without error
     */

  };
  var Popup$1 = React__default.forwardRef((props, ref) => React__default.createElement(Popup, _extends({
    popperRef: ref
  }, props, {
    __source: {
      fileName: _jsxFileName$1,
      lineNumber: 115
    },
    __self: undefined
  })));

  var createChainableTypeChecker_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createChainableTypeChecker;
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  // Mostly taken from ReactPropTypes.

  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
      var componentNameSafe = componentName || '<<anonymous>>';
      var propFullNameSafe = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
        }

        return null;
      }

      for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        args[_key - 6] = arguments[_key];
      }

      return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }
  module.exports = exports['default'];
  });

  unwrapExports(createChainableTypeChecker_1);

  var elementType_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _react2 = _interopRequireDefault(React__default);





  var _createChainableTypeChecker2 = _interopRequireDefault(createChainableTypeChecker_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function elementType(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];

    if (_react2.default.isValidElement(propValue)) {
      return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`,expected an element type (a string ') + ', component class, or function component).');
    }

    if (!(0, reactIs.isValidElementType)(propValue)) {
      return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + ', component class, or function component).');
    }

    return null;
  }

  exports.default = (0, _createChainableTypeChecker2.default)(elementType);
  module.exports = exports['default'];
  });

  unwrapExports(elementType_1);

  var componentOrElement = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



  var _react2 = _interopRequireDefault(React__default);



  var _createChainableTypeChecker2 = _interopRequireDefault(createChainableTypeChecker_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

    if (_react2.default.isValidElement(propValue)) {
      return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
    }

    if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
      return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
    }

    return null;
  }

  exports.default = (0, _createChainableTypeChecker2.default)(validate);
  module.exports = exports['default'];
  });

  unwrapExports(componentOrElement);

  var getContainer_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = getContainer;

  var _reactDom = _interopRequireDefault(reactDom__default);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getContainer(container, defaultContainer) {
    if (container == null) return defaultContainer;
    container = typeof container === 'function' ? container() : container;
    return _reactDom.default.findDOMNode(container) || null;
  }

  module.exports = exports.default;
  });

  unwrapExports(getContainer_1);

  var WaitForContainer_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var _propTypes = _interopRequireDefault(propTypes);

  var _componentOrElement = _interopRequireDefault(componentOrElement);

  var _inDOM = _interopRequireDefault(inDOM);

  var _ownerDocument = _interopRequireDefault(ownerDocument_1);

  var _react = _interopRequireDefault(React__default);

  var _reactDom = _interopRequireDefault(reactDom__default);

  var _getContainer = _interopRequireDefault(getContainer_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var propTypes$1 = {
    /**
     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
     * appended to it.
     */
    container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),
    onContainerResolved: _propTypes.default.func
  };

  var WaitForContainer =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(WaitForContainer, _React$Component);

    function WaitForContainer() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      if (!_inDOM.default) return _assertThisInitialized(_this);
      var container = _this.props.container;
      if (typeof container === 'function') container = container();

      if (container && !_reactDom.default.findDOMNode(container)) {
        // The container is a React component that has not yet been rendered.
        // Don't set the container node yet.
        return _assertThisInitialized(_this);
      }

      _this.setContainer(container);

      return _this;
    }

    var _proto = WaitForContainer.prototype;

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.container !== this.props.container) {
        this.setContainer(nextProps.container);
      }
    };

    _proto.componentDidMount = function componentDidMount() {
      if (!this._container) {
        this.setContainer(this.props.container);
        this.forceUpdate(this.props.onContainerResolved);
      } else if (this.props.onContainerResolved) {
        this.props.onContainerResolved();
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._container = null;
    };

    _proto.setContainer = function setContainer(container) {
      this._container = (0, _getContainer.default)(container, (0, _ownerDocument.default)().body);
    };

    _proto.render = function render() {
      return this._container ? this.props.children(this._container) : null;
    };

    return WaitForContainer;
  }(_react.default.Component);

  WaitForContainer.propTypes = propTypes$1;
  var _default = WaitForContainer;
  exports.default = _default;
  module.exports = exports.default;
  });

  unwrapExports(WaitForContainer_1);

  var Portal_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var _propTypes = _interopRequireDefault(propTypes);

  var _componentOrElement = _interopRequireDefault(componentOrElement);

  var _react = _interopRequireDefault(React__default);

  var _reactDom = _interopRequireDefault(reactDom__default);

  var _WaitForContainer = _interopRequireDefault(WaitForContainer_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  /**
   * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
   * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
   * The children of `<Portal/>` component will be appended to the `container` specified.
   */
  var Portal =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Portal, _React$Component);

    function Portal() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Portal.prototype;

    _proto.render = function render() {
      var _this = this;

      return this.props.children ? _react.default.createElement(_WaitForContainer.default, {
        container: this.props.container,
        onContainerResolved: this.props.onRendered
      }, function (container) {
        return _reactDom.default.createPortal(_this.props.children, container);
      }) : null;
    };

    return Portal;
  }(_react.default.Component);

  Portal.displayName = 'Portal';
  Portal.propTypes = {
    /**
     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
     * appended to it.
     */
    container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),
    onRendered: _propTypes.default.func
  };
  var _default = Portal;
  exports.default = _default;
  module.exports = exports.default;
  });

  unwrapExports(Portal_1);

  var on_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _inDOM = interopRequireDefault(inDOM);

  var on = function on() {};

  if (_inDOM.default) {
    on = function () {
      if (document.addEventListener) return function (node, eventName, handler, capture) {
        return node.addEventListener(eventName, handler, capture || false);
      };else if (document.attachEvent) return function (node, eventName, handler) {
        return node.attachEvent('on' + eventName, function (e) {
          e = e || window.event;
          e.target = e.target || e.srcElement;
          e.currentTarget = node;
          handler.call(node, e);
        });
      };
    }();
  }

  var _default = on;
  exports.default = _default;
  module.exports = exports["default"];
  });

  unwrapExports(on_1);

  var off_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _inDOM = interopRequireDefault(inDOM);

  var off = function off() {};

  if (_inDOM.default) {
    off = function () {
      if (document.addEventListener) return function (node, eventName, handler, capture) {
        return node.removeEventListener(eventName, handler, capture || false);
      };else if (document.attachEvent) return function (node, eventName, handler) {
        return node.detachEvent('on' + eventName, handler);
      };
    }();
  }

  var _default = off;
  exports.default = _default;
  module.exports = exports["default"];
  });

  unwrapExports(off_1);

  var listen_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _inDOM = interopRequireDefault(inDOM);

  var _on = interopRequireDefault(on_1);

  var _off = interopRequireDefault(off_1);

  var listen = function listen() {};

  if (_inDOM.default) {
    listen = function listen(node, eventName, handler, capture) {
      (0, _on.default)(node, eventName, handler, capture);
      return function () {
        (0, _off.default)(node, eventName, handler, capture);
      };
    };
  }

  var _default = listen;
  exports.default = _default;
  module.exports = exports["default"];
  });

  unwrapExports(listen_1);

  var ownerDocument = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = _default;

  var _reactDom = _interopRequireDefault(reactDom__default);

  var _ownerDocument = _interopRequireDefault(ownerDocument_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(componentOrElement) {
    return (0, _ownerDocument.default)(_reactDom.default.findDOMNode(componentOrElement));
  }

  module.exports = exports.default;
  });

  unwrapExports(ownerDocument);

  var RootCloseWrapper_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var _contains = _interopRequireDefault(contains);

  var _listen = _interopRequireDefault(listen_1);

  var _propTypes = _interopRequireDefault(propTypes);

  var _react = _interopRequireDefault(React__default);

  var _reactDom = _interopRequireDefault(reactDom__default);

  var _ownerDocument = _interopRequireDefault(ownerDocument);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var escapeKeyCode = 27;

  var noop = function noop() {};

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  /**
   * The `<RootCloseWrapper/>` component registers your callback on the document
   * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
   * style behavior where your callback is triggered when the user tries to
   * interact with the rest of the document or hits the `esc` key.
   */


  var RootCloseWrapper =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(RootCloseWrapper, _React$Component);

    function RootCloseWrapper(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      _this.addEventListeners = function () {
        var event = _this.props.event;
        var doc = (0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this))); // Use capture for this listener so it fires before React's listener, to
        // avoid false positives in the contains() check below if the target DOM
        // element is removed in the React mouse callback.

        _this.removeMouseCaptureListener = (0, _listen.default)(doc, event, _this.handleMouseCapture, true);
        _this.removeMouseListener = (0, _listen.default)(doc, event, _this.handleMouse);
        _this.removeKeyupListener = (0, _listen.default)(doc, 'keyup', _this.handleKeyUp);

        if ('ontouchstart' in doc.documentElement) {
          _this.mobileSafariHackListeners = [].slice.call(document.body.children).map(function (el) {
            return (0, _listen.default)(el, 'mousemove', noop);
          });
        }
      };

      _this.removeEventListeners = function () {
        if (_this.removeMouseCaptureListener) _this.removeMouseCaptureListener();
        if (_this.removeMouseListener) _this.removeMouseListener();
        if (_this.removeKeyupListener) _this.removeKeyupListener();
        if (_this.mobileSafariHackListeners) _this.mobileSafariHackListeners.forEach(function (remove) {
          return remove();
        });
      };

      _this.handleMouseCapture = function (e) {
        _this.preventMouseRootClose = isModifiedEvent(e) || !isLeftClickEvent(e) || (0, _contains.default)(_reactDom.default.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))), e.target);
      };

      _this.handleMouse = function (e) {
        if (!_this.preventMouseRootClose && _this.props.onRootClose) {
          _this.props.onRootClose(e);
        }
      };

      _this.handleKeyUp = function (e) {
        if (e.keyCode === escapeKeyCode && _this.props.onRootClose) {
          _this.props.onRootClose(e);
        }
      };

      _this.preventMouseRootClose = false;
      return _this;
    }

    var _proto = RootCloseWrapper.prototype;

    _proto.componentDidMount = function componentDidMount() {
      if (!this.props.disabled) {
        this.addEventListeners();
      }
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (!this.props.disabled && prevProps.disabled) {
        this.addEventListeners();
      } else if (this.props.disabled && !prevProps.disabled) {
        this.removeEventListeners();
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (!this.props.disabled) {
        this.removeEventListeners();
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return RootCloseWrapper;
  }(_react.default.Component);

  RootCloseWrapper.displayName = 'RootCloseWrapper';
  RootCloseWrapper.propTypes = {
    /**
     * Callback fired after click or mousedown. Also triggers when user hits `esc`.
     */
    onRootClose: _propTypes.default.func,

    /**
     * Children to render.
     */
    children: _propTypes.default.element,

    /**
     * Disable the the RootCloseWrapper, preventing it from triggering `onRootClose`.
     */
    disabled: _propTypes.default.bool,

    /**
     * Choose which document mouse event to bind to.
     */
    event: _propTypes.default.oneOf(['click', 'mousedown'])
  };
  RootCloseWrapper.defaultProps = {
    event: 'click'
  };
  var _default = RootCloseWrapper;
  exports.default = _default;
  module.exports = exports.default;
  });

  unwrapExports(RootCloseWrapper_1);

  function _objectWithoutPropertiesLoose$2(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose$2;

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var inheritsLoose = _inheritsLoose$1;

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

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

  var defineProperty = _defineProperty;

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.15.0
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  var timeoutDuration = 0;
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      timeoutDuration = 1;
      break;
    }
  }

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction$1(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty$1 = function (obj, key, value) {
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
  };

  var _extends$2 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends$2({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends$2({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction$1(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);

    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;

    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends$2({}, attributes, data.attributes);
    data.styles = _extends$2({}, styles, data.styles);
    data.arrowStyles = _extends$2({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

      // flips variation if reference element overflows boundaries
      var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      // flips variation if popper content overflows boundaries
      var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

      var flippedVariation = flippedVariationByRef || flippedVariationByContent;

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends$2({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty$1({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty$1({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends$2({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty$1({}, side, reference[side]),
        end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends$2({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport',
      /**
       * @prop {Boolean} flipVariations=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the reference element overlaps its boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariations: false,
      /**
       * @prop {Boolean} flipVariationsByContent=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the popper element overlaps its reference boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariationsByContent: false
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {Element|referenceObject} reference - The reference element used to position the popper
     * @param {Element} popper - The HTML / XML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends$2({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends$2({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends$2({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends$2({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction$1(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  var key = '__global_unique_id__';

  var gud = function() {
    return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  var emptyFunction_1 = emptyFunction;

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var warning$1 = emptyFunction_1;

  {
    var printWarning$3 = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning$1 = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning$3.apply(undefined, [format].concat(args));
      }
    };
  }

  var warning_1$1 = warning$1;

  var implementation = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _gud2 = _interopRequireDefault(gud);



  var _warning2 = _interopRequireDefault(warning_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var MAX_SIGNED_31_BIT_INT = 1073741823;

  // Inlined Object.is polyfill.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  function objectIs(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function createEventEmitter(value) {
    var handlers = [];
    return {
      on: function on(handler) {
        handlers.push(handler);
      },
      off: function off(handler) {
        handlers = handlers.filter(function (h) {
          return h !== handler;
        });
      },
      get: function get() {
        return value;
      },
      set: function set(newValue, changedBits) {
        value = newValue;
        handlers.forEach(function (handler) {
          return handler(value, changedBits);
        });
      }
    };
  }

  function onlyChild(children) {
    return Array.isArray(children) ? children[0] : children;
  }

  function createReactContext(defaultValue, calculateChangedBits) {
    var _Provider$childContex, _Consumer$contextType;

    var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

    var Provider = function (_Component) {
      _inherits(Provider, _Component);

      function Provider() {
        var _temp, _this, _ret;

        _classCallCheck(this, Provider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
      }

      Provider.prototype.getChildContext = function getChildContext() {
        var _ref;

        return _ref = {}, _ref[contextProp] = this.emitter, _ref;
      };

      Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
          var oldValue = this.props.value;
          var newValue = nextProps.value;
          var changedBits = void 0;

          if (objectIs(oldValue, newValue)) {
            changedBits = 0; // No change
          } else {
            changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
            {
              (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
            }

            changedBits |= 0;

            if (changedBits !== 0) {
              this.emitter.set(nextProps.value, changedBits);
            }
          }
        }
      };

      Provider.prototype.render = function render() {
        return this.props.children;
      };

      return Provider;
    }(React__default.Component);

    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

    var Consumer = function (_Component2) {
      _inherits(Consumer, _Component2);

      function Consumer() {
        var _temp2, _this2, _ret2;

        _classCallCheck(this, Consumer);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
          value: _this2.getValue()
        }, _this2.onUpdate = function (newValue, changedBits) {
          var observedBits = _this2.observedBits | 0;
          if ((observedBits & changedBits) !== 0) {
            _this2.setState({ value: _this2.getValue() });
          }
        }, _temp2), _possibleConstructorReturn(_this2, _ret2);
      }

      Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var observedBits = nextProps.observedBits;

        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
        : observedBits;
      };

      Consumer.prototype.componentDidMount = function componentDidMount() {
        if (this.context[contextProp]) {
          this.context[contextProp].on(this.onUpdate);
        }
        var observedBits = this.props.observedBits;

        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
        : observedBits;
      };

      Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.context[contextProp]) {
          this.context[contextProp].off(this.onUpdate);
        }
      };

      Consumer.prototype.getValue = function getValue() {
        if (this.context[contextProp]) {
          return this.context[contextProp].get();
        } else {
          return defaultValue;
        }
      };

      Consumer.prototype.render = function render() {
        return onlyChild(this.props.children)(this.state.value);
      };

      return Consumer;
    }(React__default.Component);

    Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


    return {
      Provider: Provider,
      Consumer: Consumer
    };
  }

  exports.default = createReactContext;
  module.exports = exports['default'];
  });

  unwrapExports(implementation);

  var lib = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _react2 = _interopRequireDefault(React__default);



  var _implementation2 = _interopRequireDefault(implementation);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _react2.default.createContext || _implementation2.default;
  module.exports = exports['default'];
  });

  var createContext = unwrapExports(lib);

  var ManagerContext = createContext({
    setReferenceNode: undefined,
    referenceNode: undefined
  });

  var Manager =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose(Manager, _React$Component);

    function Manager() {
      var _this;

      _this = _React$Component.call(this) || this;

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setReferenceNode", function (referenceNode) {
        if (!referenceNode || _this.state.context.referenceNode === referenceNode) {
          return;
        }

        _this.setState(function (_ref) {
          var context = _ref.context;
          return {
            context: _extends_1({}, context, {
              referenceNode: referenceNode
            })
          };
        });
      });

      _this.state = {
        context: {
          setReferenceNode: _this.setReferenceNode,
          referenceNode: undefined
        }
      };
      return _this;
    }

    var _proto = Manager.prototype;

    _proto.render = function render() {
      return React.createElement(ManagerContext.Provider, {
        value: this.state.context
      }, this.props.children);
    };

    return Manager;
  }(React.Component);

  /**
   * Takes an argument and if it's an array, returns the first item in the array,
   * otherwise returns the argument. Used for Preact compatibility.
   */
  var unwrapArray = function unwrapArray(arg) {
    return Array.isArray(arg) ? arg[0] : arg;
  };
  /**
   * Takes a maybe-undefined function and arbitrary args and invokes the function
   * only if it is defined.
   */

  var safeInvoke = function safeInvoke(fn) {
    if (typeof fn === "function") {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return fn.apply(void 0, args);
    }
  };

  var initialStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    pointerEvents: 'none'
  };
  var initialArrowStyle = {};
  var InnerPopper =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose(InnerPopper, _React$Component);

    function InnerPopper() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
        data: undefined,
        placement: undefined
      });

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "popperInstance", void 0);

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "popperNode", null);

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "arrowNode", null);

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setPopperNode", function (popperNode) {
        if (!popperNode || _this.popperNode === popperNode) return;
        safeInvoke(_this.props.innerRef, popperNode);
        _this.popperNode = popperNode;

        _this.updatePopperInstance();
      });

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setArrowNode", function (arrowNode) {
        _this.arrowNode = arrowNode;
      });

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "updateStateModifier", {
        enabled: true,
        order: 900,
        fn: function fn(data) {
          var placement = data.placement;

          _this.setState({
            data: data,
            placement: placement
          });

          return data;
        }
      });

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getOptions", function () {
        return {
          placement: _this.props.placement,
          eventsEnabled: _this.props.eventsEnabled,
          positionFixed: _this.props.positionFixed,
          modifiers: _extends_1({}, _this.props.modifiers, {
            arrow: _extends_1({}, _this.props.modifiers && _this.props.modifiers.arrow, {
              enabled: !!_this.arrowNode,
              element: _this.arrowNode
            }),
            applyStyle: {
              enabled: false
            },
            updateStateModifier: _this.updateStateModifier
          })
        };
      });

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getPopperStyle", function () {
        return !_this.popperNode || !_this.state.data ? initialStyle : _extends_1({
          position: _this.state.data.offsets.popper.position
        }, _this.state.data.styles);
      });

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getPopperPlacement", function () {
        return !_this.state.data ? undefined : _this.state.placement;
      });

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getArrowStyle", function () {
        return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
      });

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getOutOfBoundariesState", function () {
        return _this.state.data ? _this.state.data.hide : undefined;
      });

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "destroyPopperInstance", function () {
        if (!_this.popperInstance) return;

        _this.popperInstance.destroy();

        _this.popperInstance = null;
      });

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "updatePopperInstance", function () {
        _this.destroyPopperInstance();

        var _assertThisInitialize = assertThisInitialized(assertThisInitialized(_this)),
            popperNode = _assertThisInitialize.popperNode;

        var referenceElement = _this.props.referenceElement;
        if (!referenceElement || !popperNode) return;
        _this.popperInstance = new Popper(referenceElement, popperNode, _this.getOptions());
      });

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "scheduleUpdate", function () {
        if (_this.popperInstance) {
          _this.popperInstance.scheduleUpdate();
        }
      });

      return _this;
    }

    var _proto = InnerPopper.prototype;

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      // If the Popper.js options have changed, update the instance (destroy + create)
      if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
        this.updatePopperInstance();
      } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
        this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
      } // A placement difference in state means popper determined a new placement
      // apart from the props value. By the time the popper element is rendered with
      // the new position Popper has already measured it, if the place change triggers
      // a size change it will result in a misaligned popper. So we schedule an update to be sure.


      if (prevState.placement !== this.state.placement) {
        this.scheduleUpdate();
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      safeInvoke(this.props.innerRef, null);
      this.destroyPopperInstance();
    };

    _proto.render = function render() {
      return unwrapArray(this.props.children)({
        ref: this.setPopperNode,
        style: this.getPopperStyle(),
        placement: this.getPopperPlacement(),
        outOfBoundaries: this.getOutOfBoundariesState(),
        scheduleUpdate: this.scheduleUpdate,
        arrowProps: {
          ref: this.setArrowNode,
          style: this.getArrowStyle()
        }
      });
    };

    return InnerPopper;
  }(React.Component);

  defineProperty(InnerPopper, "defaultProps", {
    placement: 'bottom',
    eventsEnabled: true,
    referenceElement: undefined,
    positionFixed: false
  });

  var placements$1 = Popper.placements;
  function Popper$1(_ref) {
    var referenceElement = _ref.referenceElement,
        props = objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

    return React.createElement(ManagerContext.Consumer, null, function (_ref2) {
      var referenceNode = _ref2.referenceNode;
      return React.createElement(InnerPopper, _extends_1({
        referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
      }, props));
    });
  }

  var InnerReference =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose(InnerReference, _React$Component);

    function InnerReference() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "refHandler", function (node) {
        safeInvoke(_this.props.innerRef, node);
        safeInvoke(_this.props.setReferenceNode, node);
      });

      return _this;
    }

    var _proto = InnerReference.prototype;

    _proto.render = function render() {
      warning_1(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
      return unwrapArray(this.props.children)({
        ref: this.refHandler
      });
    };

    return InnerReference;
  }(React.Component);

  function Reference(props) {
    return React.createElement(ManagerContext.Consumer, null, function (_ref) {
      var setReferenceNode = _ref.setReferenceNode;
      return React.createElement(InnerReference, _extends_1({
        setReferenceNode: setReferenceNode
      }, props));
    });
  }

  // Public components
   // Public types

  var esm = /*#__PURE__*/Object.freeze({
    Popper: Popper$1,
    placements: placements$1,
    Manager: Manager,
    Reference: Reference
  });

  var forwardRef_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = forwardRef;

  var _react = _interopRequireDefault(React__default);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function forwardRef(renderFn, _ref) {
    var displayName = _ref.displayName,
        propTypes = _ref.propTypes,
        defaultProps = _ref.defaultProps,
        _ref$allowFallback = _ref.allowFallback,
        allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback;

    var render = function render(props, ref) {
      return renderFn(props, ref);
    };

    Object.assign(render, {
      displayName: displayName
    });
    if (_react.default.forwardRef || !allowFallback) return Object.assign(_react.default.forwardRef(render), {
      propTypes: propTypes,
      defaultProps: defaultProps
    });
    return Object.assign(function (props) {
      return render(props, null);
    }, {
      displayName: displayName,
      propTypes: propTypes,
      defaultProps: defaultProps
    });
  }
  });

  unwrapExports(forwardRef_1);

  var Overlay_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var _propTypes = _interopRequireDefault(propTypes);

  var _elementType = _interopRequireDefault(elementType_1);

  var _componentOrElement = _interopRequireDefault(componentOrElement);

  var _react = _interopRequireDefault(React__default);

  var _reactDom = _interopRequireDefault(reactDom__default);

  var _Portal = _interopRequireDefault(Portal_1);

  var _RootCloseWrapper = _interopRequireDefault(RootCloseWrapper_1);



  var _forwardRef = _interopRequireDefault(forwardRef_1);

  var _WaitForContainer = _interopRequireDefault(WaitForContainer_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  /**
   * Built on top of `<Position/>` and `<Portal/>`, the overlay component is
   * great for custom tooltip overlays.
   */
  var Overlay =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Overlay, _React$Component);

    function Overlay(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      _this.handleHidden = function () {
        _this.setState({
          exited: true
        });

        if (_this.props.onExited) {
          var _this$props;

          (_this$props = _this.props).onExited.apply(_this$props, arguments);
        }
      };

      _this.state = {
        exited: !props.show
      };
      _this.onHiddenListener = _this.handleHidden.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this._lastTarget = null;
      return _this;
    }

    Overlay.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      if (nextProps.show) {
        return {
          exited: false
        };
      } else if (!nextProps.transition) {
        // Otherwise let handleHidden take care of marking exited.
        return {
          exited: true
        };
      }

      return null;
    };

    var _proto = Overlay.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.setState({
        target: this.getTarget()
      });
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this.props === prevProps) return;
      var target = this.getTarget();

      if (target !== this.state.target) {
        this.setState({
          target: target
        });
      }
    };

    _proto.getTarget = function getTarget() {
      var target = this.props.target;
      target = typeof target === 'function' ? target() : target;
      return target && _reactDom.default.findDOMNode(target) || null;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _0 = _this$props2.target,
          container = _this$props2.container,
          containerPadding = _this$props2.containerPadding,
          placement = _this$props2.placement,
          rootClose = _this$props2.rootClose,
          children = _this$props2.children,
          flip = _this$props2.flip,
          _this$props2$popperCo = _this$props2.popperConfig,
          popperConfig = _this$props2$popperCo === void 0 ? {} : _this$props2$popperCo,
          Transition = _this$props2.transition,
          props = _objectWithoutPropertiesLoose(_this$props2, ["target", "container", "containerPadding", "placement", "rootClose", "children", "flip", "popperConfig", "transition"]);

      var target = this.state.target; // Don't un-render the overlay while it's transitioning out.

      var mountOverlay = props.show || Transition && !this.state.exited;

      if (!mountOverlay) {
        // Don't bother showing anything if we don't have to.
        return null;
      }

      var child = children;
      var _popperConfig$modifie = popperConfig.modifiers,
          modifiers = _popperConfig$modifie === void 0 ? {} : _popperConfig$modifie;

      var popperProps = _extends({}, popperConfig, {
        placement: placement,
        referenceElement: target,
        enableEvents: props.show,
        modifiers: _extends({}, modifiers, {
          preventOverflow: _extends({
            padding: containerPadding || 5
          }, modifiers.preventOverflow),
          flip: _extends({
            enabled: !!flip
          }, modifiers.preventOverflow)
        })
      });

      child = _react.default.createElement(esm.Popper, popperProps, function (_ref) {
        var arrowProps = _ref.arrowProps,
            style = _ref.style,
            ref = _ref.ref,
            popper = _objectWithoutPropertiesLoose(_ref, ["arrowProps", "style", "ref"]);

        _this2.popper = popper;

        var innerChild = _this2.props.children(_extends({}, popper, {
          // popper doesn't set the initial placement
          placement: popper.placement || placement,
          show: props.show,
          arrowProps: arrowProps,
          props: {
            ref: ref,
            style: style
          }
        }));

        if (Transition) {
          var onExit = props.onExit,
              onExiting = props.onExiting,
              onEnter = props.onEnter,
              onEntering = props.onEntering,
              onEntered = props.onEntered;
          innerChild = _react.default.createElement(Transition, {
            in: props.show,
            appear: true,
            onExit: onExit,
            onExiting: onExiting,
            onExited: _this2.onHiddenListener,
            onEnter: onEnter,
            onEntering: onEntering,
            onEntered: onEntered
          }, innerChild);
        }

        return innerChild;
      });

      if (rootClose) {
        child = _react.default.createElement(_RootCloseWrapper.default, {
          onRootClose: props.onHide,
          event: props.rootCloseEvent,
          disabled: props.rootCloseDisabled
        }, child);
      }

      return _react.default.createElement(_Portal.default, {
        container: container
      }, child);
    };

    return Overlay;
  }(_react.default.Component);

  Overlay.propTypes = _extends({}, _Portal.default.propTypes, {
    /**
     * Set the visibility of the Overlay
     */
    show: _propTypes.default.bool,

    /** Specify where the overlay element is positioned in relation to the target element */
    placement: _propTypes.default.oneOf(esm.placements),

    /**
     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
     * appended to it.
     */
    container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),

    /**
     * Enables the Popper.js `flip` modifier, allowing the Overlay to
     * automatically adjust it's placement in case of overlap with the viewport or toggle.
     * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
     */
    flip: _propTypes.default.bool,

    /**
     * A render prop that returns an element to overlay and position. See
     * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
     *
     * @type {Function ({
     *   show: boolean,
     *   placement: Placement,
     *   outOfBoundaries: ?boolean,
     *   scheduleUpdate: () => void,
     *   props: {
     *     ref: (?HTMLElement) => void,
     *     style: { [string]: string | number },
     *     aria-labelledby: ?string
     *   },
     *   arrowProps: {
     *     ref: (?HTMLElement) => void,
     *     style: { [string]: string | number },
     *   },
     * }) => React.Element}
     */
    children: _propTypes.default.func.isRequired,

    /**
     * A set of popper options and props passed directly to react-popper's Popper component.
     */
    popperConfig: _propTypes.default.object,

    /**
     * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
     */
    rootClose: _propTypes.default.bool,

    /**
     * Specify event for toggling overlay
     */
    rootCloseEvent: _RootCloseWrapper.default.propTypes.event,

    /**
     * Specify disabled for disable RootCloseWrapper
     */
    rootCloseDisabled: _RootCloseWrapper.default.propTypes.disabled,

    /**
     * A Callback fired by the Overlay when it wishes to be hidden.
     *
     * __required__ when `rootClose` is `true`.
     *
     * @type func
     */
    onHide: function onHide(props) {
      var propType = _propTypes.default.func;

      if (props.rootClose) {
        propType = propType.isRequired;
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return propType.apply(void 0, [props].concat(args));
    },

    /**
     * A `react-transition-group@2.0.0` `<Transition/>` component
     * used to animate the overlay as it changes visibility.
     */
    transition: _elementType.default,

    /**
     * Callback fired before the Overlay transitions in
     */
    onEnter: _propTypes.default.func,

    /**
     * Callback fired as the Overlay begins to transition in
     */
    onEntering: _propTypes.default.func,

    /**
     * Callback fired after the Overlay finishes transitioning in
     */
    onEntered: _propTypes.default.func,

    /**
     * Callback fired right before the Overlay transitions out
     */
    onExit: _propTypes.default.func,

    /**
     * Callback fired as the Overlay begins to transition out
     */
    onExiting: _propTypes.default.func,

    /**
     * Callback fired after the Overlay finishes transitioning out
     */
    onExited: _propTypes.default.func
  });

  var _default = (0, _forwardRef.default)(function (props, ref) {
    return (// eslint-disable-next-line react/prop-types
      _react.default.createElement(_WaitForContainer.default, {
        container: props.container
      }, function (container) {
        return _react.default.createElement(Overlay, _extends({}, props, {
          ref: ref,
          container: container
        }));
      })
    );
  }, {
    displayName: 'withContainer(Overlay)'
  });

  exports.default = _default;
  module.exports = exports.default;
  });

  var Overlay = unwrapExports(Overlay_1);

  var height_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = height;

  var _offset = interopRequireDefault(offset_1);

  var _isWindow = interopRequireDefault(isWindow);

  function height(node, client) {
    var win = (0, _isWindow.default)(node);
    return win ? win.innerHeight : client ? node.clientHeight : (0, _offset.default)(node).height;
  }

  module.exports = exports["default"];
  });

  var getHeight = unwrapExports(height_1);

  var querySelectorAll = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = qsa;
  // Zepto.js
  // (c) 2010-2015 Thomas Fuchs
  // Zepto.js may be freely distributed under the MIT license.
  var simpleSelectorRE = /^[\w-]*$/;
  var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

  function qsa(element, selector) {
    var maybeID = selector[0] === '#',
        maybeClass = selector[0] === '.',
        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
        isSimple = simpleSelectorRE.test(nameOnly),
        found;

    if (isSimple) {
      if (maybeID) {
        element = element.getElementById ? element : document;
        return (found = element.getElementById(nameOnly)) ? [found] : [];
      }

      if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));
      return toArray(element.getElementsByTagName(selector));
    }

    return toArray(element.querySelectorAll(selector));
  }

  module.exports = exports["default"];
  });

  var qsa = unwrapExports(querySelectorAll);

  var matches_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = matches;

  var _inDOM = interopRequireDefault(inDOM);

  var _querySelectorAll = interopRequireDefault(querySelectorAll);

  var matchesCache;

  function matches(node, selector) {
    if (!matchesCache && _inDOM.default) {
      var body = document.body;
      var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
      matchesCache = nativeMatch ? function (node, selector) {
        return nativeMatch.call(node, selector);
      } : ie8MatchesSelector;
    }

    return matchesCache ? matchesCache(node, selector) : null;
  }

  function ie8MatchesSelector(node, selector) {
    var matches = (0, _querySelectorAll.default)(node.document || node.ownerDocument, selector),
        i = 0;

    while (matches[i] && matches[i] !== node) {
      i++;
    }

    return !!matches[i];
  }

  module.exports = exports["default"];
  });

  unwrapExports(matches_1);

  var closest_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = closest;

  var _matches = interopRequireDefault(matches_1);

  var isDoc = function isDoc(obj) {
    return obj != null && obj.nodeType === obj.DOCUMENT_NODE;
  };

  function closest(node, selector, context) {
    while (node && (isDoc(node) || !(0, _matches.default)(node, selector))) {
      node = node !== context && !isDoc(node) ? node.parentNode : undefined;
    }

    return node;
  }

  module.exports = exports["default"];
  });

  var closest = unwrapExports(closest_1);

  var filter = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = filterEvents;

  var _contains = interopRequireDefault(contains);

  var _querySelectorAll = interopRequireDefault(querySelectorAll);

  function filterEvents(selector, handler) {
    return function filterHandler(e) {
      var top = e.currentTarget,
          target = e.target,
          matches = (0, _querySelectorAll.default)(top, selector);
      if (matches.some(function (match) {
        return (0, _contains.default)(match, target);
      })) handler.call(this, e);
    };
  }

  module.exports = exports["default"];
  });

  unwrapExports(filter);

  var events = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _on = interopRequireDefault(on_1);

  exports.on = _on.default;

  var _off = interopRequireDefault(off_1);

  exports.off = _off.default;

  var _filter = interopRequireDefault(filter);

  exports.filter = _filter.default;

  var _listen = interopRequireDefault(listen_1);

  exports.listen = _listen.default;
  var _default = {
    on: _on.default,
    off: _off.default,
    filter: _filter.default,
    listen: _listen.default
  };
  exports.default = _default;
  });

  var events$1 = unwrapExports(events);
  var events_1 = events.on;
  var events_2 = events.off;
  var events_3 = events.filter;
  var events_4 = events.listen;

  function addEventListener(type, handler, target) {
    if (target === void 0) {
      target = document;
    }

    events$1.on(target, type, handler, {
      passive: false
    });
    return {
      remove() {
        events$1.off(target, type, handler);
      }

    };
  }

  function isOverContainer(container, x, y) {
    return !container || contains$1(container, document.elementFromPoint(x, y));
  }

  function getEventNodeFromPoint(node, _ref) {
    let clientX = _ref.clientX,
        clientY = _ref.clientY;
    let target = document.elementFromPoint(clientX, clientY);
    return closest(target, '.rbc-event', node);
  }
  function isEvent(node, bounds) {
    return !!getEventNodeFromPoint(node, bounds);
  }

  function getEventCoordinates(e) {
    let target = e;

    if (e.touches && e.touches.length) {
      target = e.touches[0];
    }

    return {
      clientX: target.clientX,
      clientY: target.clientY,
      pageX: target.pageX,
      pageY: target.pageY
    };
  }

  const clickTolerance = 5;
  const clickInterval = 250;

  class Selection {
    constructor(node, _temp) {
      let _ref2 = _temp === void 0 ? {} : _temp,
          _ref2$global = _ref2.global,
          global = _ref2$global === void 0 ? false : _ref2$global,
          _ref2$longPressThresh = _ref2.longPressThreshold,
          longPressThreshold = _ref2$longPressThresh === void 0 ? 250 : _ref2$longPressThresh;

      this.isDetached = false;
      this.container = node;
      this.globalMouse = !node || global;
      this.longPressThreshold = longPressThreshold;
      this._listeners = Object.create(null);
      this._handleInitialEvent = this._handleInitialEvent.bind(this);
      this._handleMoveEvent = this._handleMoveEvent.bind(this);
      this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
      this._keyListener = this._keyListener.bind(this);
      this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
      this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this); // Fixes an iOS 10 bug where scrolling could not be prevented on the window.
      // https://github.com/metafizzy/flickity/issues/457#issuecomment-254501356

      this._onTouchMoveWindowListener = addEventListener('touchmove', () => {}, window);
      this._onKeyDownListener = addEventListener('keydown', this._keyListener);
      this._onKeyUpListener = addEventListener('keyup', this._keyListener);
      this._onDropFromOutsideListener = addEventListener('drop', this._dropFromOutsideListener);
      this._onDragOverfromOutisde = addEventListener('dragover', this._dragOverFromOutsideListener);

      this._addInitialEventListener();
    }

    on(type, handler) {
      let handlers = this._listeners[type] || (this._listeners[type] = []);
      handlers.push(handler);
      return {
        remove() {
          let idx = handlers.indexOf(handler);
          if (idx !== -1) handlers.splice(idx, 1);
        }

      };
    }

    emit(type) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      let result;
      let handlers = this._listeners[type] || [];
      handlers.forEach(fn => {
        if (result === undefined) result = fn(...args);
      });
      return result;
    }

    teardown() {
      this.isDetached = true;
      this.listeners = Object.create(null);
      this._onTouchMoveWindowListener && this._onTouchMoveWindowListener.remove();
      this._onInitialEventListener && this._onInitialEventListener.remove();
      this._onEndListener && this._onEndListener.remove();
      this._onEscListener && this._onEscListener.remove();
      this._onMoveListener && this._onMoveListener.remove();
      this._onKeyUpListener && this._onKeyUpListener.remove();
      this._onKeyDownListener && this._onKeyDownListener.remove();
      this._onDropFromOutsideListener && this._onDragOverfromOutisde.remove();
    }

    isSelected(node) {
      let box = this._selectRect;
      if (!box || !this.selecting) return false;
      return objectsCollide(box, getBoundsForNode(node));
    }

    filter(items) {
      let box = this._selectRect; //not selecting

      if (!box || !this.selecting) return [];
      return items.filter(this.isSelected, this);
    } // Adds a listener that will call the handler only after the user has pressed on the screen
    // without moving their finger for 250ms.


    _addLongPressListener(handler, initialEvent) {
      let timer = null;
      let touchMoveListener = null;
      let touchEndListener = null;

      const handleTouchStart = initialEvent => {
        timer = setTimeout(() => {
          cleanup();
          handler(initialEvent);
        }, this.longPressThreshold);
        touchMoveListener = addEventListener('touchmove', () => cleanup());
        touchEndListener = addEventListener('touchend', () => cleanup());
      };

      const touchStartListener = addEventListener('touchstart', handleTouchStart);

      const cleanup = () => {
        if (timer) {
          clearTimeout(timer);
        }

        if (touchMoveListener) {
          touchMoveListener.remove();
        }

        if (touchEndListener) {
          touchEndListener.remove();
        }

        timer = null;
        touchMoveListener = null;
        touchEndListener = null;
      };

      if (initialEvent) {
        handleTouchStart(initialEvent);
      }

      return {
        remove() {
          cleanup();
          touchStartListener.remove();
        }

      };
    } // Listen for mousedown and touchstart events. When one is received, disable the other and setup
    // future event handling based on the type of event.


    _addInitialEventListener() {
      const mouseDownListener = addEventListener('mousedown', e => {
        this._onInitialEventListener.remove();

        this._handleInitialEvent(e);

        this._onInitialEventListener = addEventListener('mousedown', this._handleInitialEvent);
      });
      const touchStartListener = addEventListener('touchstart', e => {
        this._onInitialEventListener.remove();

        this._onInitialEventListener = this._addLongPressListener(this._handleInitialEvent, e);
      });
      this._onInitialEventListener = {
        remove() {
          mouseDownListener.remove();
          touchStartListener.remove();
        }

      };
    }

    _dropFromOutsideListener(e) {
      const _getEventCoordinates = getEventCoordinates(e),
            pageX = _getEventCoordinates.pageX,
            pageY = _getEventCoordinates.pageY,
            clientX = _getEventCoordinates.clientX,
            clientY = _getEventCoordinates.clientY;

      this.emit('dropFromOutside', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
      e.preventDefault();
    }

    _dragOverFromOutsideListener(e) {
      const _getEventCoordinates2 = getEventCoordinates(e),
            pageX = _getEventCoordinates2.pageX,
            pageY = _getEventCoordinates2.pageY,
            clientX = _getEventCoordinates2.clientX,
            clientY = _getEventCoordinates2.clientY;

      this.emit('dragOverFromOutside', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
      e.preventDefault();
    }

    _handleInitialEvent(e) {
      if (this.isDetached) {
        return;
      }

      const _getEventCoordinates3 = getEventCoordinates(e),
            clientX = _getEventCoordinates3.clientX,
            clientY = _getEventCoordinates3.clientY,
            pageX = _getEventCoordinates3.pageX,
            pageY = _getEventCoordinates3.pageY;

      let node = this.container(),
          collides,
          offsetData; // Right clicks

      if (e.which === 3 || e.button === 2 || !isOverContainer(node, clientX, clientY)) return;

      if (!this.globalMouse && node && !contains$1(node, e.target)) {
        let _normalizeDistance = normalizeDistance(0),
            top = _normalizeDistance.top,
            left = _normalizeDistance.left,
            bottom = _normalizeDistance.bottom,
            right = _normalizeDistance.right;

        offsetData = getBoundsForNode(node);
        collides = objectsCollide({
          top: offsetData.top - top,
          left: offsetData.left - left,
          bottom: offsetData.bottom + bottom,
          right: offsetData.right + right
        }, {
          top: pageY,
          left: pageX
        });
        if (!collides) return;
      }

      let result = this.emit('beforeSelect', this._initialEventData = {
        isTouch: /^touch/.test(e.type),
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
      if (result === false) return;

      switch (e.type) {
        case 'mousedown':
          this._onEndListener = addEventListener('mouseup', this._handleTerminatingEvent);
          this._onEscListener = addEventListener('keydown', this._handleTerminatingEvent);
          this._onMoveListener = addEventListener('mousemove', this._handleMoveEvent);
          break;

        case 'touchstart':
          this._handleMoveEvent(e);

          this._onEndListener = addEventListener('touchend', this._handleTerminatingEvent);
          this._onMoveListener = addEventListener('touchmove', this._handleMoveEvent);
          break;

        default:
          break;
      }
    }

    _handleTerminatingEvent(e) {
      const _getEventCoordinates4 = getEventCoordinates(e),
            pageX = _getEventCoordinates4.pageX,
            pageY = _getEventCoordinates4.pageY;

      this.selecting = false;
      this._onEndListener && this._onEndListener.remove();
      this._onMoveListener && this._onMoveListener.remove();
      if (!this._initialEventData) return;
      let inRoot = !this.container || contains$1(this.container(), e.target);
      let bounds = this._selectRect;
      let click = this.isClick(pageX, pageY);
      this._initialEventData = null;

      if (e.key === 'Escape') {
        return this.emit('reset');
      }

      if (!inRoot) {
        return this.emit('reset');
      }

      if (click && inRoot) {
        return this._handleClickEvent(e);
      } // User drag-clicked in the Selectable area


      if (!click) return this.emit('select', bounds);
    }

    _handleClickEvent(e) {
      const _getEventCoordinates5 = getEventCoordinates(e),
            pageX = _getEventCoordinates5.pageX,
            pageY = _getEventCoordinates5.pageY,
            clientX = _getEventCoordinates5.clientX,
            clientY = _getEventCoordinates5.clientY;

      const now = new Date().getTime();

      if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval) {
        // Double click event
        this._lastClickData = null;
        return this.emit('doubleClick', {
          x: pageX,
          y: pageY,
          clientX: clientX,
          clientY: clientY
        });
      } // Click event


      this._lastClickData = {
        timestamp: now
      };
      return this.emit('click', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
    }

    _handleMoveEvent(e) {
      if (this._initialEventData === null || this.isDetached) {
        return;
      }

      let _this$_initialEventDa = this._initialEventData,
          x = _this$_initialEventDa.x,
          y = _this$_initialEventDa.y;

      const _getEventCoordinates6 = getEventCoordinates(e),
            pageX = _getEventCoordinates6.pageX,
            pageY = _getEventCoordinates6.pageY;

      let w = Math.abs(x - pageX);
      let h = Math.abs(y - pageY);
      let left = Math.min(pageX, x),
          top = Math.min(pageY, y),
          old = this.selecting; // Prevent emitting selectStart event until mouse is moved.
      // in Chrome on Windows, mouseMove event may be fired just after mouseDown event.

      if (this.isClick(pageX, pageY) && !old && !(w || h)) {
        return;
      }

      this.selecting = true;
      this._selectRect = {
        top,
        left,
        x: pageX,
        y: pageY,
        right: left + w,
        bottom: top + h
      };

      if (!old) {
        this.emit('selectStart', this._initialEventData);
      }

      if (!this.isClick(pageX, pageY)) this.emit('selecting', this._selectRect);
      e.preventDefault();
    }

    _keyListener(e) {
      this.ctrl = e.metaKey || e.ctrlKey;
    }

    isClick(pageX, pageY) {
      let _this$_initialEventDa2 = this._initialEventData,
          x = _this$_initialEventDa2.x,
          y = _this$_initialEventDa2.y,
          isTouch = _this$_initialEventDa2.isTouch;
      return !isTouch && Math.abs(pageX - x) <= clickTolerance && Math.abs(pageY - y) <= clickTolerance;
    }

  }
  /**
   * Resolve the disance prop from either an Int or an Object
   * @return {Object}
   */


  function normalizeDistance(distance) {
    if (distance === void 0) {
      distance = 0;
    }

    if (typeof distance !== 'object') distance = {
      top: distance,
      left: distance,
      right: distance,
      bottom: distance
    };
    return distance;
  }
  /**
   * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
   * properties, determine if they collide.
   * @param  {Object|HTMLElement} a
   * @param  {Object|HTMLElement} b
   * @return {bool}
   */


  function objectsCollide(nodeA, nodeB, tolerance) {
    if (tolerance === void 0) {
      tolerance = 0;
    }

    let _getBoundsForNode = getBoundsForNode(nodeA),
        aTop = _getBoundsForNode.top,
        aLeft = _getBoundsForNode.left,
        _getBoundsForNode$rig = _getBoundsForNode.right,
        aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig,
        _getBoundsForNode$bot = _getBoundsForNode.bottom,
        aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;

    let _getBoundsForNode2 = getBoundsForNode(nodeB),
        bTop = _getBoundsForNode2.top,
        bLeft = _getBoundsForNode2.left,
        _getBoundsForNode2$ri = _getBoundsForNode2.right,
        bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri,
        _getBoundsForNode2$bo = _getBoundsForNode2.bottom,
        bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;

    return !( // 'a' bottom doesn't touch 'b' top
    aBottom - tolerance < bTop || // 'a' top doesn't touch 'b' bottom
    aTop + tolerance > bBottom || // 'a' right doesn't touch 'b' left
    aRight - tolerance < bLeft || // 'a' left doesn't touch 'b' right
    aLeft + tolerance > bRight);
  }
  /**
   * Given a node, get everything needed to calculate its boundaries
   * @param  {HTMLElement} node
   * @return {Object}
   */

  function getBoundsForNode(node) {
    if (!node.getBoundingClientRect) return node;
    let rect = node.getBoundingClientRect(),
        left = rect.left + pageOffset('left'),
        top = rect.top + pageOffset('top');
    return {
      top,
      left,
      right: (node.offsetWidth || 0) + left,
      bottom: (node.offsetHeight || 0) + top
    };
  }

  function pageOffset(dir) {
    if (dir === 'left') return window.pageXOffset || document.body.scrollLeft || 0;
    if (dir === 'top') return window.pageYOffset || document.body.scrollTop || 0;
  }

  var _jsxFileName$2 = "/Users/guilherme/work/react-big-calendar/src/BackgroundCells.js";

  class BackgroundCells extends React__default.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        selecting: false
      };
    }

    componentDidMount() {
      this.props.selectable && this._selectable();
    }

    componentWillUnmount() {
      this._teardownSelectable();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.selectable && !this.props.selectable) this._selectable();
      if (!nextProps.selectable && this.props.selectable) this._teardownSelectable();
    }

    render() {
      let _this$props = this.props,
          range = _this$props.range,
          getNow = _this$props.getNow,
          getters = _this$props.getters,
          currentDate = _this$props.date,
          Wrapper = _this$props.components.dateCellWrapper;
      let _this$state = this.state,
          selecting = _this$state.selecting,
          startIdx = _this$state.startIdx,
          endIdx = _this$state.endIdx;
      let current = getNow();
      return React__default.createElement("div", {
        className: "rbc-row-bg",
        __source: {
          fileName: _jsxFileName$2,
          lineNumber: 47
        },
        __self: this
      }, range.map((date, index) => {
        let selected = selecting && index >= startIdx && index <= endIdx;

        const _getters$dayProp = getters.dayProp(date),
              className = _getters$dayProp.className,
              style = _getters$dayProp.style;

        return React__default.createElement(Wrapper, {
          key: index,
          value: date,
          range: range,
          __source: {
            fileName: _jsxFileName$2,
            lineNumber: 53
          },
          __self: this
        }, React__default.createElement("div", {
          style: style,
          className: classnames('rbc-day-bg', className, selected && 'rbc-selected-cell', eq(date, current, 'day') && 'rbc-today', currentDate && month(currentDate) !== month(date) && 'rbc-off-range-bg'),
          __source: {
            fileName: _jsxFileName$2,
            lineNumber: 54
          },
          __self: this
        }));
      }));
    }

    _selectable() {
      let node = reactDom.findDOMNode(this);
      let selector = this._selector = new Selection(this.props.container, {
        longPressThreshold: this.props.longPressThreshold
      });

      let selectorClicksHandler = (point, actionType) => {
        if (!isEvent(reactDom.findDOMNode(this), point)) {
          let rowBox = getBoundsForNode(node);
          let _this$props2 = this.props,
              range = _this$props2.range,
              rtl = _this$props2.rtl;

          if (pointInBox(rowBox, point)) {
            let currentCell = getSlotAtX(rowBox, point.x, rtl, range.length);

            this._selectSlot({
              startIdx: currentCell,
              endIdx: currentCell,
              action: actionType,
              box: point
            });
          }
        }

        this._initial = {};
        this.setState({
          selecting: false
        });
      };

      selector.on('selecting', box => {
        let _this$props3 = this.props,
            range = _this$props3.range,
            rtl = _this$props3.rtl;
        let startIdx = -1;
        let endIdx = -1;

        if (!this.state.selecting) {
          notify(this.props.onSelectStart, [box]);
          this._initial = {
            x: box.x,
            y: box.y
          };
        }

        if (selector.isSelected(node)) {
          let nodeBox = getBoundsForNode(node);

          var _dateCellSelection = dateCellSelection(this._initial, nodeBox, box, range.length, rtl);

          startIdx = _dateCellSelection.startIdx;
          endIdx = _dateCellSelection.endIdx;
        }

        this.setState({
          selecting: true,
          startIdx,
          endIdx
        });
      });
      selector.on('beforeSelect', box => {
        if (this.props.selectable !== 'ignoreEvents') return;
        return !isEvent(reactDom.findDOMNode(this), box);
      });
      selector.on('click', point => selectorClicksHandler(point, 'click'));
      selector.on('doubleClick', point => selectorClicksHandler(point, 'doubleClick'));
      selector.on('select', bounds => {
        this._selectSlot(_extends({}, this.state, {
          action: 'select',
          bounds
        }));

        this._initial = {};
        this.setState({
          selecting: false
        });
        notify(this.props.onSelectEnd, [this.state]);
      });
    }

    _teardownSelectable() {
      if (!this._selector) return;

      this._selector.teardown();

      this._selector = null;
    }

    _selectSlot(_ref) {
      let endIdx = _ref.endIdx,
          startIdx = _ref.startIdx,
          action = _ref.action,
          bounds = _ref.bounds,
          box = _ref.box;
      if (endIdx !== -1 && startIdx !== -1) this.props.onSelectSlot && this.props.onSelectSlot({
        start: startIdx,
        end: endIdx,
        action,
        bounds,
        box
      });
    }

  }

  BackgroundCells.propTypes = {
    date: propTypes.instanceOf(Date),
    getNow: propTypes.func.isRequired,
    getters: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    container: propTypes.func,
    dayPropGetter: propTypes.func,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    longPressThreshold: propTypes.number,
    onSelectSlot: propTypes.func.isRequired,
    onSelectEnd: propTypes.func,
    onSelectStart: propTypes.func,
    range: propTypes.arrayOf(propTypes.instanceOf(Date)),
    rtl: propTypes.bool,
    type: propTypes.string
  };

  var _jsxFileName$3 = "/Users/guilherme/work/react-big-calendar/src/EventRowMixin.js";
  /* eslint-disable react/prop-types */

  var EventRowMixin = {
    propTypes: {
      slotMetrics: propTypes.object.isRequired,
      selected: propTypes.object,
      isAllDay: propTypes.bool,
      accessors: propTypes.object.isRequired,
      localizer: propTypes.object.isRequired,
      components: propTypes.object.isRequired,
      getters: propTypes.object.isRequired,
      onSelect: propTypes.func,
      onDoubleClick: propTypes.func
    },
    defaultProps: {
      segments: [],
      selected: {}
    },

    renderEvent(props, event) {
      let selected = props.selected,
          _ = props.isAllDay,
          accessors = props.accessors,
          getters = props.getters,
          onSelect = props.onSelect,
          onDoubleClick = props.onDoubleClick,
          localizer = props.localizer,
          slotMetrics = props.slotMetrics,
          components = props.components;
      let continuesPrior = slotMetrics.continuesPrior(event);
      let continuesAfter = slotMetrics.continuesAfter(event);
      return React__default.createElement(EventCell, {
        event: event,
        getters: getters,
        localizer: localizer,
        accessors: accessors,
        components: components,
        onSelect: onSelect,
        onDoubleClick: onDoubleClick,
        continuesPrior: continuesPrior,
        continuesAfter: continuesAfter,
        slotStart: slotMetrics.first,
        slotEnd: slotMetrics.last,
        selected: isSelected(event, selected),
        __source: {
          fileName: _jsxFileName$3,
          lineNumber: 45
        },
        __self: this
      });
    },

    renderSpan(slots, len, key, content) {
      if (content === void 0) {
        content = ' ';
      }

      let per = Math.abs(len) / slots * 100 + '%';
      return React__default.createElement("div", {
        key: key,
        className: "rbc-row-segment" // IE10/11 need max-width. flex-basis doesn't respect box-sizing
        ,
        style: {
          WebkitFlexBasis: per,
          flexBasis: per,
          maxWidth: per
        },
        __source: {
          fileName: _jsxFileName$3,
          lineNumber: 66
        },
        __self: this
      }, content);
    }

  };

  var _jsxFileName$4 = "/Users/guilherme/work/react-big-calendar/src/EventRow.js";

  class EventRow extends React__default.Component {
    render() {
      let _this$props = this.props,
          segments = _this$props.segments,
          slots = _this$props.slotMetrics.slots,
          className = _this$props.className;
      let lastEnd = 1;
      return React__default.createElement("div", {
        className: classnames(className, 'rbc-row'),
        __source: {
          fileName: _jsxFileName$4,
          lineNumber: 17
        },
        __self: this
      }, segments.reduce((row, _ref, li) => {
        let event = _ref.event,
            left = _ref.left,
            right = _ref.right,
            span = _ref.span;
        let key = '_lvl_' + li;
        let gap = left - lastEnd;
        let content = EventRowMixin.renderEvent(this.props, event);
        if (gap) row.push(EventRowMixin.renderSpan(slots, gap, key + "_gap"));
        row.push(EventRowMixin.renderSpan(slots, span, key, content));
        lastEnd = right + 1;
        return row;
      }, []));
    }

  }

  EventRow.propTypes = _extends({
    segments: propTypes.array
  }, EventRowMixin.propTypes);
  EventRow.defaultProps = _extends({}, EventRowMixin.defaultProps);

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq$1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /** Used for built-in method references. */
  var funcProto = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /* Built-in method references that are verified to be native. */
  var Map$1 = getNative(root, 'Map');

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
  }

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map$1 || ListCache),
      'string': new Hash
    };
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED$2);
    return this;
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!arraySome(other, function(othValue, othIndex) {
              if (!cacheHas(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  /** Built-in value references. */
  var Uint8Array = root.Uint8Array;

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$1 = 1,
      COMPARE_UNORDERED_FLAG$1 = 2;

  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag$1 = '[object Symbol]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]';

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;

      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq$1(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');

      case mapTag:
        var convert = mapToArray;

      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
        convert || (convert = setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG$1;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag$1:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty$5.call(value, 'callee') &&
      !propertyIsEnumerable$1.call(value, 'callee');
  };

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      errorTag$1 = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag$1 = '[object Map]',
      numberTag$1 = '[object Number]',
      objectTag = '[object Object]',
      regexpTag$1 = '[object RegExp]',
      setTag$1 = '[object Set]',
      stringTag$1 = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
  typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
  typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag$1] =
  typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
  typedArrayTags[weakMapTag] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /** Detect free variable `exports`. */
  var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports$1 && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$6.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

    return value === proto;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = overArg(Object.keys, Object);

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$2 = 1;

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
        objProps = getAllKeys(object),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
        return false;
      }
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView');

  /* Built-in method references that are verified to be native. */
  var Promise = getNative(root, 'Promise');

  /* Built-in method references that are verified to be native. */
  var Set = getNative(root, 'Set');

  /* Built-in method references that are verified to be native. */
  var WeakMap = getNative(root, 'WeakMap');

  /** `Object#toString` result references. */
  var mapTag$2 = '[object Map]',
      objectTag$1 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$2 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';

  var dataViewTag$2 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map$1),
      promiseCtorString = toSource(Promise),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
      (Map$1 && getTag(new Map$1) != mapTag$2) ||
      (Promise && getTag(Promise.resolve()) != promiseTag) ||
      (Set && getTag(new Set) != setTag$2) ||
      (WeakMap && getTag(new WeakMap) != weakMapTag$1)) {
    getTag = function(value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag$1 ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag$2;
          case mapCtorString: return mapTag$2;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag$2;
          case weakMapCtorString: return weakMapTag$1;
        }
      }
      return result;
    };
  }

  var getTag$1 = getTag;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$3 = 1;

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      objectTag$2 = '[object Object]';

  /** Used for built-in method references. */
  var objectProto$b = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = objIsArr ? arrayTag$1 : getTag$1(object),
        othTag = othIsArr ? arrayTag$1 : getTag$1(other);

    objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
    othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

    var objIsObj = objTag == objectTag$2,
        othIsObj = othTag == objectTag$2,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack);
      return (objIsArr || isTypedArray(object))
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
      var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new Stack);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$4 = 1,
      COMPARE_UNORDERED_FLAG$2 = 2;

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2])
            ? data[1] !== object[data[0]]
            : !(data[0] in object)
          ) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack;
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === undefined
              ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
              : result
            )) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = keys(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];

      result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
  }

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue &&
        (srcValue !== undefined || (key in Object(object)));
    };
  }

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
  }

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }

  /** Used as references for various `Number` constants. */
  var INFINITY$2 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
  }

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = castPath(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);

    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) &&
      (isArray(object) || isArguments(object));
  }

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$5 = 1,
      COMPARE_UNORDERED_FLAG$3 = 2;

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn(object, path)
        : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
    };
  }

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == 'object') {
      return isArray(value)
        ? baseMatchesProperty(value[0], value[1])
        : baseMatches(value);
    }
    return property(value);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$1 = Math.max;

  /**
   * This method is like `_.find` except that it returns the index of the first
   * element `predicate` returns truthy for instead of the element itself.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.findIndex(users, function(o) { return o.user == 'barney'; });
   * // => 0
   *
   * // The `_.matches` iteratee shorthand.
   * _.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findIndex(users, ['active', false]);
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * _.findIndex(users, 'active');
   * // => 2
   */
  function findIndex$1(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) {
      index = nativeMax$1(length + index, 0);
    }
    return baseFindIndex(array, baseIteratee(predicate, 3), index);
  }

  function endOfRange(dateRange, unit) {
    if (unit === void 0) {
      unit = 'day';
    }

    return {
      first: dateRange[0],
      last: add(dateRange[dateRange.length - 1], 1, unit)
    };
  }
  function eventSegments(event, range, accessors) {
    let _endOfRange = endOfRange(range),
        first = _endOfRange.first,
        last = _endOfRange.last;

    let slots = diff(first, last, 'day');
    let start = max(startOf(accessors.start(event), 'day'), first);
    let end = min(ceil(accessors.end(event), 'day'), last);
    let padding = findIndex$1(range, x => eq(x, start, 'day'));
    let span = diff(start, end, 'day');
    span = Math.min(span, slots);
    span = Math.max(span, 1);
    return {
      event,
      span,
      left: padding + 1,
      right: Math.max(padding + span, 1)
    };
  }
  function eventLevels(rowSegments, limit) {
    if (limit === void 0) {
      limit = Infinity;
    }

    let i,
        j,
        seg,
        levels = [],
        extra = [];

    for (i = 0; i < rowSegments.length; i++) {
      seg = rowSegments[i];

      for (j = 0; j < levels.length; j++) if (!segsOverlap(seg, levels[j])) break;

      if (j >= limit) {
        extra.push(seg);
      } else {
        (levels[j] || (levels[j] = [])).push(seg);
      }
    }

    for (i = 0; i < levels.length; i++) {
      levels[i].sort((a, b) => a.left - b.left); //eslint-disable-line
    }

    return {
      levels,
      extra
    };
  }
  function inRange$1(e, start, end, accessors) {
    let eStart = startOf(accessors.start(e), 'day');
    let eEnd = accessors.end(e);
    let startsBeforeEnd = lte(eStart, end, 'day'); // when the event is zero duration we need to handle a bit differently

    let endsAfterStart = !eq(eStart, eEnd, 'minutes') ? gt(eEnd, start, 'minutes') : gte(eEnd, start, 'minutes');
    return startsBeforeEnd && endsAfterStart;
  }
  function segsOverlap(seg, otherSegs) {
    return otherSegs.some(otherSeg => otherSeg.left <= seg.right && otherSeg.right >= seg.left);
  }
  function sortEvents(evtA, evtB, accessors) {
    let startSort = +startOf(accessors.start(evtA), 'day') - +startOf(accessors.start(evtB), 'day');
    let durA = diff(accessors.start(evtA), ceil(accessors.end(evtA), 'day'), 'day');
    let durB = diff(accessors.start(evtB), ceil(accessors.end(evtB), 'day'), 'day');
    return startSort || // sort by start Day first
    Math.max(durB, 1) - Math.max(durA, 1) || // events spanning multiple days go first
    !!accessors.allDay(evtB) - !!accessors.allDay(evtA) || // then allDay single day events
    +accessors.start(evtA) - +accessors.start(evtB); // then sort by start time
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil$1 = Math.ceil,
      nativeMax$2 = Math.max;

  /**
   * The base implementation of `_.range` and `_.rangeRight` which doesn't
   * coerce arguments.
   *
   * @private
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @param {number} step The value to increment or decrement by.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the range of numbers.
   */
  function baseRange(start, end, step, fromRight) {
    var index = -1,
        length = nativeMax$2(nativeCeil$1((end - start) / (step || 1)), 0),
        result = Array(length);

    while (length--) {
      result[fromRight ? length : ++index] = start;
      start += step;
    }
    return result;
  }

  /**
   * Creates a `_.range` or `_.rangeRight` function.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new range function.
   */
  function createRange(fromRight) {
    return function(start, end, step) {
      if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
        end = step = undefined;
      }
      // Ensure the sign of `-0` is preserved.
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
      return baseRange(start, end, step, fromRight);
    };
  }

  /**
   * Creates an array of numbers (positive and/or negative) progressing from
   * `start` up to, but not including, `end`. A step of `-1` is used if a negative
   * `start` is specified without an `end` or `step`. If `end` is not specified,
   * it's set to `start` with `start` then set to `0`.
   *
   * **Note:** JavaScript follows the IEEE-754 standard for resolving
   * floating-point values which can produce unexpected results.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @param {number} [step=1] The value to increment or decrement by.
   * @returns {Array} Returns the range of numbers.
   * @see _.inRange, _.rangeRight
   * @example
   *
   * _.range(4);
   * // => [0, 1, 2, 3]
   *
   * _.range(-4);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 5);
   * // => [1, 2, 3, 4]
   *
   * _.range(0, 20, 5);
   * // => [0, 5, 10, 15]
   *
   * _.range(0, -4, -1);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 4, 0);
   * // => [1, 1, 1]
   *
   * _.range(0);
   * // => []
   */
  var range$1 = createRange();

  var _jsxFileName$5 = "/Users/guilherme/work/react-big-calendar/src/EventEndingRow.js";

  let isSegmentInSlot = (seg, slot) => seg.left <= slot && seg.right >= slot;

  let eventsInSlot = (segments, slot) => segments.filter(seg => isSegmentInSlot(seg, slot)).length;

  class EventEndingRow extends React__default.Component {
    render() {
      let _this$props = this.props,
          segments = _this$props.segments,
          slots = _this$props.slotMetrics.slots;
      let rowSegments = eventLevels(segments).levels[0];
      let current = 1,
          lastEnd = 1,
          row = [];

      while (current <= slots) {
        let key = '_lvl_' + current;

        let _ref = rowSegments.filter(seg => isSegmentInSlot(seg, current))[0] || {},
            event = _ref.event,
            left = _ref.left,
            right = _ref.right,
            span = _ref.span; //eslint-disable-line


        if (!event) {
          current++;
          continue;
        }

        let gap = Math.max(0, left - lastEnd);

        if (this.canRenderSlotEvent(left, span)) {
          let content = EventRowMixin.renderEvent(this.props, event);

          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'));
          }

          row.push(EventRowMixin.renderSpan(slots, span, key, content));
          lastEnd = current = right + 1;
        } else {
          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'));
          }

          row.push(EventRowMixin.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
          lastEnd = current = current + 1;
        }
      }

      return React__default.createElement("div", {
        className: "rbc-row",
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 63
        },
        __self: this
      }, row);
    }

    canRenderSlotEvent(slot, span) {
      let segments = this.props.segments;
      return range$1(slot, slot + span).every(s => {
        let count = eventsInSlot(segments, s);
        return count === 1;
      });
    }

    renderShowMore(segments, slot) {
      let localizer = this.props.localizer;
      let count = eventsInSlot(segments, slot);
      return count ? React__default.createElement("a", {
        key: 'sm_' + slot,
        href: "#",
        className: 'rbc-show-more',
        onClick: e => this.showMore(slot, e),
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 81
        },
        __self: this
      }, localizer.messages.showMore(count)) : false;
    }

    showMore(slot, e) {
      e.preventDefault();
      this.props.onShowMore(slot, e.target);
    }

  }

  EventEndingRow.propTypes = _extends({
    segments: propTypes.array,
    slots: propTypes.number,
    onShowMore: propTypes.func
  }, EventRowMixin.propTypes);
  EventEndingRow.defaultProps = _extends({}, EventRowMixin.defaultProps);

  var simpleIsEqual = function simpleIsEqual(a, b) {
    return a === b;
  };

  function index (resultFn, isEqual) {
    if (isEqual === void 0) {
      isEqual = simpleIsEqual;
    }

    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;

    var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
      return isEqual(newArg, lastArgs[index], index);
    };

    var result = function result() {
      for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        newArgs[_key] = arguments[_key];
      }

      if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
        return lastResult;
      }

      lastResult = resultFn.apply(this, newArgs);
      calledOnce = true;
      lastThis = this;
      lastArgs = newArgs;
      return lastResult;
    };

    return result;
  }

  let isSegmentInSlot$1 = (seg, slot) => seg.left <= slot && seg.right >= slot;

  const isEqual = (a, b) => a.range === b.range && a.events === b.events;

  function getSlotMetrics() {
    return index(options => {
      const range = options.range,
            events = options.events,
            maxRows = options.maxRows,
            minRows = options.minRows,
            accessors = options.accessors;

      let _endOfRange = endOfRange(range),
          first = _endOfRange.first,
          last = _endOfRange.last;

      let segments = events.map(evt => eventSegments(evt, range, accessors));

      let _eventLevels = eventLevels(segments, Math.max(maxRows - 1, 1)),
          levels = _eventLevels.levels,
          extra = _eventLevels.extra;

      while (levels.length < minRows) levels.push([]);

      return {
        first,
        last,
        levels,
        extra,
        range,
        slots: range.length,

        clone(args) {
          const metrics = getSlotMetrics();
          return metrics(_extends({}, options, args));
        },

        getDateForSlot(slotNumber) {
          return range[slotNumber];
        },

        getSlotForDate(date) {
          return range.find(r => eq(r, date, 'day'));
        },

        getEventsForSlot(slot) {
          return segments.filter(seg => isSegmentInSlot$1(seg, slot)).map(seg => seg.event);
        },

        continuesPrior(event) {
          return lt(accessors.start(event), first, 'day');
        },

        continuesAfter(event) {
          const eventEnd = accessors.end(event);
          const singleDayDuration = eq(accessors.start(event), eventEnd, 'minutes');
          return singleDayDuration ? gte(eventEnd, last, 'minutes') : gt(eventEnd, last, 'minutes');
        }

      };
    }, isEqual);
  }

  var _jsxFileName$6 = "/Users/guilherme/work/react-big-calendar/src/DateContentRow.js";

  class DateContentRow extends React__default.Component {
    constructor() {
      super(...arguments);

      this.handleSelectSlot = slot => {
        const _this$props = this.props,
              range = _this$props.range,
              onSelectSlot = _this$props.onSelectSlot;
        onSelectSlot(range.slice(slot.start, slot.end + 1), slot);
      };

      this.handleShowMore = (slot, target) => {
        const _this$props2 = this.props,
              range = _this$props2.range,
              onShowMore = _this$props2.onShowMore;
        let metrics = this.slotMetrics(this.props);
        let row = qsa(reactDom.findDOMNode(this), '.rbc-row-bg')[0];
        let cell;
        if (row) cell = row.children[slot - 1];
        let events = metrics.getEventsForSlot(slot);
        onShowMore(events, range[slot - 1], cell, slot, target);
      };

      this.createHeadingRef = r => {
        this.headingRow = r;
      };

      this.createEventRef = r => {
        this.eventRow = r;
      };

      this.getContainer = () => {
        const container = this.props.container;
        return container ? container() : reactDom.findDOMNode(this);
      };

      this.renderHeadingCell = (date, index) => {
        let _this$props3 = this.props,
            renderHeader = _this$props3.renderHeader,
            getNow = _this$props3.getNow;
        return renderHeader({
          date,
          key: "header_" + index,
          className: classnames('rbc-date-cell', eq(date, getNow(), 'day') && 'rbc-now')
        });
      };

      this.renderDummy = () => {
        let _this$props4 = this.props,
            className = _this$props4.className,
            range = _this$props4.range,
            renderHeader = _this$props4.renderHeader;
        return React__default.createElement("div", {
          className: className,
          __source: {
            fileName: _jsxFileName$6,
            lineNumber: 77
          },
          __self: this
        }, React__default.createElement("div", {
          className: "rbc-row-content",
          __source: {
            fileName: _jsxFileName$6,
            lineNumber: 78
          },
          __self: this
        }, renderHeader && React__default.createElement("div", {
          className: "rbc-row",
          ref: this.createHeadingRef,
          __source: {
            fileName: _jsxFileName$6,
            lineNumber: 80
          },
          __self: this
        }, range.map(this.renderHeadingCell)), React__default.createElement("div", {
          className: "rbc-row",
          ref: this.createEventRef,
          __source: {
            fileName: _jsxFileName$6,
            lineNumber: 84
          },
          __self: this
        }, React__default.createElement("div", {
          className: "rbc-row-segment",
          __source: {
            fileName: _jsxFileName$6,
            lineNumber: 85
          },
          __self: this
        }, React__default.createElement("div", {
          className: "rbc-event",
          __source: {
            fileName: _jsxFileName$6,
            lineNumber: 86
          },
          __self: this
        }, React__default.createElement("div", {
          className: "rbc-event-content",
          __source: {
            fileName: _jsxFileName$6,
            lineNumber: 87
          },
          __self: this
        }, "\xA0"))))));
      };

      this.slotMetrics = getSlotMetrics();
    }

    getRowLimit() {
      let eventHeight = getHeight(this.eventRow);
      let headingHeight = this.headingRow ? getHeight(this.headingRow) : 0;
      let eventSpace = getHeight(reactDom.findDOMNode(this)) - headingHeight; // return Math.max(Math.floor(eventSpace / eventHeight), 1)

      return Math.floor(eventHeight * 200);
    }

    render() {
      const _this$props5 = this.props,
            date = _this$props5.date,
            rtl = _this$props5.rtl,
            range = _this$props5.range,
            className = _this$props5.className,
            selected = _this$props5.selected,
            selectable = _this$props5.selectable,
            renderForMeasure = _this$props5.renderForMeasure,
            accessors = _this$props5.accessors,
            getters = _this$props5.getters,
            components = _this$props5.components,
            getNow = _this$props5.getNow,
            renderHeader = _this$props5.renderHeader,
            onSelect = _this$props5.onSelect,
            localizer = _this$props5.localizer,
            onSelectStart = _this$props5.onSelectStart,
            onSelectEnd = _this$props5.onSelectEnd,
            onDoubleClick = _this$props5.onDoubleClick,
            resourceId = _this$props5.resourceId,
            longPressThreshold = _this$props5.longPressThreshold,
            isAllDay = _this$props5.isAllDay;
      if (renderForMeasure) return this.renderDummy();
      let metrics = this.slotMetrics(this.props);
      let levels = metrics.levels,
          extra = metrics.extra;
      let WeekWrapper = components.weekWrapper;
      const eventRowProps = {
        selected,
        accessors,
        getters,
        localizer,
        components,
        onSelect,
        onDoubleClick,
        resourceId,
        slotMetrics: metrics
      };
      return React__default.createElement("div", {
        className: className,
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 142
        },
        __self: this
      }, React__default.createElement(BackgroundCells, {
        date: date,
        getNow: getNow,
        rtl: rtl,
        range: range,
        selectable: selectable,
        container: this.getContainer,
        getters: getters,
        onSelectStart: onSelectStart,
        onSelectEnd: onSelectEnd,
        onSelectSlot: this.handleSelectSlot,
        components: components,
        longPressThreshold: longPressThreshold,
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 143
        },
        __self: this
      }), React__default.createElement("div", {
        className: "rbc-row-content",
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 158
        },
        __self: this
      }, renderHeader && React__default.createElement("div", {
        className: "rbc-row ",
        ref: this.createHeadingRef,
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 160
        },
        __self: this
      }, range.map(this.renderHeadingCell)), React__default.createElement(WeekWrapper, _extends({
        isAllDay: isAllDay
      }, eventRowProps, {
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 164
        },
        __self: this
      }), levels.map((segs, idx) => React__default.createElement(EventRow, _extends({
        key: idx,
        segments: segs
      }, eventRowProps, {
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 166
        },
        __self: this
      }))), !!extra.length && React__default.createElement(EventEndingRow, _extends({
        segments: extra,
        onShowMore: this.handleShowMore
      }, eventRowProps, {
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 169
        },
        __self: this
      })))));
    }

  }

  DateContentRow.propTypes = {
    date: propTypes.instanceOf(Date),
    events: propTypes.array.isRequired,
    range: propTypes.array.isRequired,
    rtl: propTypes.bool,
    resourceId: propTypes.any,
    renderForMeasure: propTypes.bool,
    renderHeader: propTypes.func,
    container: propTypes.func,
    selected: propTypes.object,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    longPressThreshold: propTypes.number,
    onShowMore: propTypes.func,
    onSelectSlot: propTypes.func,
    onSelect: propTypes.func,
    onSelectEnd: propTypes.func,
    onSelectStart: propTypes.func,
    onDoubleClick: propTypes.func,
    dayPropGetter: propTypes.func,
    getNow: propTypes.func.isRequired,
    isAllDay: propTypes.bool,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
    minRows: propTypes.number.isRequired,
    maxRows: propTypes.number.isRequired
  };
  DateContentRow.defaultProps = {
    minRows: 0,
    maxRows: Infinity
  };

  var _jsxFileName$7 = "/Users/guilherme/work/react-big-calendar/src/Header.js";

  const Header = (_ref) => {
    let label = _ref.label;
    return React__default.createElement("span", {
      __source: {
        fileName: _jsxFileName$7,
        lineNumber: 5
      },
      __self: undefined
    }, label);
  };

  Header.propTypes = {
    label: propTypes.node
  };

  var _jsxFileName$8 = "/Users/guilherme/work/react-big-calendar/src/DateHeader.js";

  const DateHeader = (_ref) => {
    let label = _ref.label,
        drilldownView = _ref.drilldownView,
        onDrillDown = _ref.onDrillDown;

    if (!drilldownView) {
      return React__default.createElement("span", {
        __source: {
          fileName: _jsxFileName$8,
          lineNumber: 6
        },
        __self: undefined
      }, label);
    }

    return React__default.createElement("a", {
      href: "#",
      onClick: onDrillDown,
      __source: {
        fileName: _jsxFileName$8,
        lineNumber: 10
      },
      __self: undefined
    }, label);
  };

  DateHeader.propTypes = {
    label: propTypes.node,
    date: propTypes.instanceOf(Date),
    drilldownView: propTypes.string,
    onDrillDown: propTypes.func,
    isOffRange: propTypes.bool
  };

  var _jsxFileName$9 = "/Users/guilherme/work/react-big-calendar/src/Month.js";

  let eventsForWeek = (evts, start, end, accessors) => evts.filter(e => inRange$1(e, start, end, accessors));

  class MonthView extends React__default.Component {
    constructor() {
      var _this;

      super(...arguments);
      _this = this;

      this.getContainer = () => {
        return reactDom.findDOMNode(this);
      };

      this.renderWeek = (week, weekIdx) => {
        let _this$props = this.props,
            events = _this$props.events,
            components = _this$props.components,
            selectable = _this$props.selectable,
            getNow = _this$props.getNow,
            selected = _this$props.selected,
            date = _this$props.date,
            localizer = _this$props.localizer,
            longPressThreshold = _this$props.longPressThreshold,
            accessors = _this$props.accessors,
            getters = _this$props.getters;
        const _this$state = this.state,
              needLimitMeasure = _this$state.needLimitMeasure,
              rowLimit = _this$state.rowLimit;
        events = eventsForWeek(events, week[0], week[week.length - 1], accessors);
        events.sort((a, b) => sortEvents(a, b, accessors));
        return React__default.createElement(DateContentRow, {
          key: weekIdx,
          ref: weekIdx === 0 ? this.slotRowRef : undefined,
          container: this.getContainer,
          className: "rbc-month-row",
          getNow: getNow,
          date: date,
          range: week,
          events: events,
          maxRows: rowLimit,
          selected: selected,
          selectable: selectable,
          components: components,
          accessors: accessors,
          getters: getters,
          localizer: localizer,
          renderHeader: this.readerDateHeading,
          renderForMeasure: needLimitMeasure,
          onShowMore: this.handleShowMore,
          onSelect: this.handleSelectEvent,
          onDoubleClick: this.handleDoubleClickEvent,
          onSelectSlot: this.handleSelectSlot,
          longPressThreshold: longPressThreshold,
          rtl: this.props.rtl,
          __source: {
            fileName: _jsxFileName$9,
            lineNumber: 114
          },
          __self: this
        });
      };

      this.readerDateHeading = (_ref) => {
        let date = _ref.date,
            className = _ref.className,
            props = _objectWithoutPropertiesLoose(_ref, ["date", "className"]);

        let _this$props2 = this.props,
            currentDate = _this$props2.date,
            getDrilldownView = _this$props2.getDrilldownView,
            localizer = _this$props2.localizer;
        let isOffRange = month(date) !== month(currentDate);
        let isCurrent = eq(date, currentDate, 'day');
        let drilldownView = getDrilldownView(date);
        let label = localizer.format(date, 'dateFormat');
        let DateHeaderComponent = this.props.components.dateHeader || DateHeader;
        return React__default.createElement("div", _extends({}, props, {
          className: classnames(className, isOffRange && 'rbc-off-range', isCurrent && 'rbc-current'),
          __source: {
            fileName: _jsxFileName$9,
            lineNumber: 152
          },
          __self: this
        }), React__default.createElement(DateHeaderComponent, {
          label: label,
          date: date,
          drilldownView: drilldownView,
          isOffRange: isOffRange,
          onDrillDown: e => this.handleHeadingClick(date, drilldownView, e),
          __source: {
            fileName: _jsxFileName$9,
            lineNumber: 160
          },
          __self: this
        }));
      };

      this.handleSelectSlot = (range, slotInfo) => {
        this._pendingSelection = this._pendingSelection.concat(range);
        clearTimeout(this._selectTimer);
        this._selectTimer = setTimeout(() => this.selectDates(slotInfo));
      };

      this.handleHeadingClick = (date, view, e) => {
        e.preventDefault();
        this.clearSelection();
        notify(this.props.onDrillDown, [date, view]);
      };

      this.handleSelectEvent = function () {
        _this.clearSelection();

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        notify(_this.props.onSelectEvent, args);
      };

      this.handleDoubleClickEvent = function () {
        _this.clearSelection();

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        notify(_this.props.onDoubleClickEvent, args);
      };

      this.handleShowMore = (events, date, cell, slot, target) => {
        const _this$props3 = this.props,
              popup = _this$props3.popup,
              onDrillDown = _this$props3.onDrillDown,
              onShowMore = _this$props3.onShowMore,
              getDrilldownView = _this$props3.getDrilldownView; //cancel any pending selections so only the event click goes through.

        this.clearSelection();

        if (popup) {
          let position = getPosition(cell, reactDom.findDOMNode(this));
          this.setState({
            overlay: {
              date,
              events,
              position,
              target
            }
          });
        } else {
          notify(onDrillDown, [date, getDrilldownView(date) || views.DAY]);
        }

        notify(onShowMore, [events, date, slot]);
      };

      this._bgRows = [];
      this._pendingSelection = [];
      this.slotRowRef = React__default.createRef();
      this.state = {
        rowLimit: 5,
        needLimitMeasure: true
      };
    }

    componentWillReceiveProps(_ref2) {
      let date = _ref2.date;
      this.setState({
        needLimitMeasure: !eq(date, this.props.date, 'month')
      });
    }

    componentDidMount() {
      let running;
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
      window.addEventListener('resize', this._resizeListener = () => {
        if (!running) {
          raf(() => {
            running = false;
            this.setState({
              needLimitMeasure: true
            }); //eslint-disable-line
          });
        }
      }, false);
    }

    componentDidUpdate() {
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this._resizeListener, false);
    }

    render() {
      let _this$props4 = this.props,
          date = _this$props4.date,
          localizer = _this$props4.localizer,
          className = _this$props4.className,
          month = visibleDays(date, localizer),
          weeks = chunk(month, 7);
      this._weekCount = weeks.length;
      return React__default.createElement("div", {
        className: classnames('rbc-month-view', className),
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 83
        },
        __self: this
      }, React__default.createElement("div", {
        className: "rbc-row rbc-month-header",
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 84
        },
        __self: this
      }, this.renderHeaders(weeks[0])), weeks.map(this.renderWeek), this.props.popup && this.renderOverlay());
    }

    renderHeaders(row) {
      let _this$props5 = this.props,
          localizer = _this$props5.localizer,
          components = _this$props5.components;
      let first = row[0];
      let last = row[row.length - 1];
      let HeaderComponent = components.header || Header;
      return range(first, last, 'day').map((day, idx) => React__default.createElement("div", {
        key: 'header_' + idx,
        className: "rbc-header",
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 178
        },
        __self: this
      }, React__default.createElement(HeaderComponent, {
        date: day,
        localizer: localizer,
        label: localizer.format(day, 'weekdayFormat'),
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 179
        },
        __self: this
      })));
    }

    renderOverlay() {
      let overlay = this.state && this.state.overlay || {};
      let _this$props6 = this.props,
          accessors = _this$props6.accessors,
          localizer = _this$props6.localizer,
          components = _this$props6.components,
          getters = _this$props6.getters,
          selected = _this$props6.selected;
      return React__default.createElement(Overlay, {
        rootClose: true,
        placement: "bottom",
        container: this,
        show: !!overlay.position,
        onHide: () => this.setState({
          overlay: null
        }),
        target: () => overlay.target,
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 193
        },
        __self: this
      }, (_ref3) => {
        let props = _ref3.props;
        return React__default.createElement(Popup$1, _extends({}, props, {
          accessors: accessors,
          getters: getters,
          selected: selected,
          components: components,
          localizer: localizer,
          position: overlay.position,
          events: overlay.events,
          slotStart: overlay.date,
          slotEnd: overlay.end,
          onSelect: this.handleSelectEvent,
          onDoubleClick: this.handleDoubleClickEvent,
          __source: {
            fileName: _jsxFileName$9,
            lineNumber: 202
          },
          __self: this
        }));
      });
    }

    measureRowLimit() {
      this.setState({
        needLimitMeasure: false,
        rowLimit: this.slotRowRef.current.getRowLimit()
      });
    }

    selectDates(slotInfo) {
      let slots = this._pendingSelection.slice();

      this._pendingSelection = [];
      slots.sort((a, b) => +a - +b);
      notify(this.props.onSelectSlot, {
        slots,
        start: slots[0],
        end: slots[slots.length - 1],
        action: slotInfo.action,
        bounds: slotInfo.bounds,
        box: slotInfo.box
      });
    }

    clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }

  }

  MonthView.propTypes = {
    events: propTypes.array.isRequired,
    date: propTypes.instanceOf(Date),
    min: propTypes.instanceOf(Date),
    max: propTypes.instanceOf(Date),
    step: propTypes.number,
    getNow: propTypes.func.isRequired,
    scrollToTime: propTypes.instanceOf(Date),
    rtl: propTypes.bool,
    width: propTypes.number,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
    selected: propTypes.object,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    longPressThreshold: propTypes.number,
    onNavigate: propTypes.func,
    onSelectSlot: propTypes.func,
    onSelectEvent: propTypes.func,
    onDoubleClickEvent: propTypes.func,
    onShowMore: propTypes.func,
    onDrillDown: propTypes.func,
    getDrilldownView: propTypes.func.isRequired,
    popup: propTypes.bool,
    popupOffset: propTypes.oneOfType([propTypes.number, propTypes.shape({
      x: propTypes.number,
      y: propTypes.number
    })])
  };

  MonthView.range = (date, _ref4) => {
    let localizer = _ref4.localizer;
    let start = firstVisibleDay(date, localizer);
    let end = lastVisibleDay(date, localizer);
    return {
      start,
      end
    };
  };

  MonthView.navigate = (date, action) => {
    switch (action) {
      case navigate.PREVIOUS:
        return add(date, -1, 'month');

      case navigate.NEXT:
        return add(date, 1, 'month');

      default:
        return date;
    }
  };

  MonthView.title = (date, _ref5) => {
    let localizer = _ref5.localizer;
    return localizer.format(date, 'monthHeaderFormat');
  };

  const getDstOffset = (start, end) => start.getTimezoneOffset() - end.getTimezoneOffset();

  const getKey = (min, max, step, slots) => "" + +startOf(min, 'minutes') + ("" + +startOf(max, 'minutes')) + (step + "-" + slots);

  function getSlotMetrics$1(_ref) {
    let start = _ref.min,
        end = _ref.max,
        step = _ref.step,
        timeslots = _ref.timeslots;
    const key = getKey(start, end, step, timeslots); // if the start is on a DST-changing day but *after* the moment of DST
    // transition we need to add those extra minutes to our minutesFromMidnight

    const daystart = startOf(start, 'day');
    const daystartdstoffset = getDstOffset(daystart, start);
    const totalMin = 1 + diff(start, end, 'minutes') + getDstOffset(start, end);
    const minutesFromMidnight = diff(daystart, start, 'minutes') + daystartdstoffset;
    const numGroups = Math.ceil(totalMin / (step * timeslots));
    const numSlots = numGroups * timeslots;
    const groups = new Array(numGroups);
    const slots = new Array(numSlots); // Each slot date is created from "zero", instead of adding `step` to
    // the previous one, in order to avoid DST oddities

    for (let grp = 0; grp < numGroups; grp++) {
      groups[grp] = new Array(timeslots);

      for (let slot = 0; slot < timeslots; slot++) {
        const slotIdx = grp * timeslots + slot;
        const minFromStart = slotIdx * step; // A date with total minutes calculated from the start of the day

        slots[slotIdx] = groups[grp][slot] = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, minutesFromMidnight + minFromStart, 0, 0);
      }
    } // Necessary to be able to select up until the last timeslot in a day


    const lastSlotMinFromStart = slots.length * step;
    slots.push(new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, minutesFromMidnight + lastSlotMinFromStart, 0, 0));

    function positionFromDate(date) {
      const diff$1 = diff(start, date, 'minutes') + getDstOffset(start, date);
      return Math.min(diff$1, totalMin);
    }

    return {
      groups,

      update(args) {
        if (getKey(args) !== key) return getSlotMetrics$1(args);
        return this;
      },

      dateIsInGroup(date, groupIndex) {
        const nextGroup = groups[groupIndex + 1];
        return inRange(date, groups[groupIndex][0], nextGroup ? nextGroup[0] : end, 'minutes');
      },

      nextSlot(slot) {
        let next = slots[Math.min(slots.indexOf(slot) + 1, slots.length - 1)]; // in the case of the last slot we won't a long enough range so manually get it

        if (next === slot) next = add(slot, step, 'minutes');
        return next;
      },

      closestSlotToPosition(percent) {
        const slot = Math.min(slots.length - 1, Math.max(0, Math.floor(percent * numSlots)));
        return slots[slot];
      },

      closestSlotFromPoint(point, boundaryRect) {
        let range = Math.abs(boundaryRect.top - boundaryRect.bottom);
        return this.closestSlotToPosition((point.y - boundaryRect.top) / range);
      },

      closestSlotFromDate(date, offset) {
        if (offset === void 0) {
          offset = 0;
        }

        if (lt(date, start, 'minutes')) return slots[0];
        const diffMins = diff(start, date, 'minutes');
        return slots[(diffMins - diffMins % step) / step + offset];
      },

      startsBeforeDay(date) {
        return lt(date, start, 'day');
      },

      startsAfterDay(date) {
        return gt(date, end, 'day');
      },

      startsBefore(date) {
        return lt(merge(start, date), start, 'minutes');
      },

      startsAfter(date) {
        return gt(merge(end, date), end, 'minutes');
      },

      getRange(rangeStart, rangeEnd, ignoreMin, ignoreMax) {
        if (!ignoreMin) rangeStart = min(end, max(start, rangeStart));
        if (!ignoreMax) rangeEnd = min(end, max(start, rangeEnd));
        const rangeStartMin = positionFromDate(rangeStart);
        const rangeEndMin = positionFromDate(rangeEnd);
        const top = rangeEndMin - rangeStartMin < step ? (rangeStartMin - step) / (step * numSlots) * 100 : rangeStartMin / (step * numSlots) * 100;
        return {
          top,
          height: rangeEndMin / (step * numSlots) * 100 - top,
          start: positionFromDate(rangeStart),
          startDate: rangeStart,
          end: positionFromDate(rangeEnd),
          endDate: rangeEnd
        };
      }

    };
  }

  /** Built-in value references. */
  var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;

    predicate || (predicate = isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = createBaseFor();

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach = createBaseEach(baseForOwn);

  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function baseMap(collection, iteratee) {
    var index = -1,
        result = isArrayLike(collection) ? Array(collection.length) : [];

    baseEach(collection, function(value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * Compares values to sort them in ascending order.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {number} Returns the sort order indicator for `value`.
   */
  function compareAscending(value, other) {
    if (value !== other) {
      var valIsDefined = value !== undefined,
          valIsNull = value === null,
          valIsReflexive = value === value,
          valIsSymbol = isSymbol(value);

      var othIsDefined = other !== undefined,
          othIsNull = other === null,
          othIsReflexive = other === other,
          othIsSymbol = isSymbol(other);

      if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
          (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
          (valIsNull && othIsDefined && othIsReflexive) ||
          (!valIsDefined && othIsReflexive) ||
          !valIsReflexive) {
        return 1;
      }
      if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
          (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
          (othIsNull && valIsDefined && valIsReflexive) ||
          (!othIsDefined && valIsReflexive) ||
          !othIsReflexive) {
        return -1;
      }
    }
    return 0;
  }

  /**
   * Used by `_.orderBy` to compare multiple properties of a value to another
   * and stable sort them.
   *
   * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
   * specify an order of "desc" for descending or "asc" for ascending sort order
   * of corresponding values.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {boolean[]|string[]} orders The order to sort by for each property.
   * @returns {number} Returns the sort order indicator for `object`.
   */
  function compareMultiple(object, other, orders) {
    var index = -1,
        objCriteria = object.criteria,
        othCriteria = other.criteria,
        length = objCriteria.length,
        ordersLength = orders.length;

    while (++index < length) {
      var result = compareAscending(objCriteria[index], othCriteria[index]);
      if (result) {
        if (index >= ordersLength) {
          return result;
        }
        var order = orders[index];
        return result * (order == 'desc' ? -1 : 1);
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
  }

  /**
   * The base implementation of `_.orderBy` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
   * @param {string[]} orders The sort orders of `iteratees`.
   * @returns {Array} Returns the new sorted array.
   */
  function baseOrderBy(collection, iteratees, orders) {
    var index = -1;
    iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

    var result = baseMap(collection, function(value, key, collection) {
      var criteria = arrayMap(iteratees, function(iteratee) {
        return iteratee(value);
      });
      return { 'criteria': criteria, 'index': ++index, 'value': value };
    });

    return baseSortBy(result, function(object, other) {
      return compareMultiple(object, other, orders);
    });
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$3 = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax$3(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax$3(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function() {
      return value;
    };
  }

  var defineProperty$2 = (function() {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !defineProperty$2 ? identity : function(func, string) {
    return defineProperty$2(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = shortOut(baseSetToString);

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
  }

  /**
   * Creates an array of elements, sorted in ascending order by the results of
   * running each element in a collection thru each iteratee. This method
   * performs a stable sort, that is, it preserves the original sort order of
   * equal elements. The iteratees are invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {...(Function|Function[])} [iteratees=[_.identity]]
   *  The iteratees to sort by.
   * @returns {Array} Returns the new sorted array.
   * @example
   *
   * var users = [
   *   { 'user': 'fred',   'age': 48 },
   *   { 'user': 'barney', 'age': 36 },
   *   { 'user': 'fred',   'age': 40 },
   *   { 'user': 'barney', 'age': 34 }
   * ];
   *
   * _.sortBy(users, [function(o) { return o.user; }]);
   * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
   *
   * _.sortBy(users, ['user', 'age']);
   * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
   */
  var sortBy = baseRest(function(collection, iteratees) {
    if (collection == null) {
      return [];
    }
    var length = iteratees.length;
    if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
      iteratees = [];
    } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
      iteratees = [iteratees[0]];
    }
    return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
  });

  class Event {
    constructor(data, _ref) {
      let accessors = _ref.accessors,
          slotMetrics = _ref.slotMetrics;

      const _slotMetrics$getRange = slotMetrics.getRange(accessors.start(data), accessors.end(data)),
            start = _slotMetrics$getRange.start,
            startDate = _slotMetrics$getRange.startDate,
            end = _slotMetrics$getRange.end,
            endDate = _slotMetrics$getRange.endDate,
            top = _slotMetrics$getRange.top,
            height = _slotMetrics$getRange.height;

      this.start = start;
      this.end = end;
      this.startMs = +startDate;
      this.endMs = +endDate;
      this.top = top;
      this.height = height;
      this.data = data;
    }
    /**
     * The event's width without any overlap.
     */


    get _width() {
      // The container event's width is determined by the maximum number of
      // events in any of its rows.
      if (this.rows) {
        const columns = this.rows.reduce((max, row) => Math.max(max, row.leaves.length + 1), // add itself
        0) + 1; // add the container

        return 100 / columns;
      }

      const availableWidth = 100 - this.container._width; // The row event's width is the space left by the container, divided
      // among itself and its leaves.

      if (this.leaves) {
        return availableWidth / (this.leaves.length + 1);
      } // The leaf event's width is determined by its row's width


      return this.row._width;
    }
    /**
     * The event's calculated width, possibly with extra width added for
     * overlapping effect.
     */


    get width() {
      const noOverlap = this._width;
      const overlap = Math.min(100, this._width * 1.7); // Containers can always grow.

      if (this.rows) {
        return overlap;
      } // Rows can grow if they have leaves.


      if (this.leaves) {
        return this.leaves.length > 0 ? overlap : noOverlap;
      } // Leaves can grow unless they're the last item in a row.


      const leaves = this.row.leaves;
      const index = leaves.indexOf(this);
      return index === leaves.length - 1 ? noOverlap : overlap;
    }

    get xOffset() {
      // Containers have no offset.
      if (this.rows) return 0; // Rows always start where their container ends.

      if (this.leaves) return this.container._width; // Leaves are spread out evenly on the space left by its row.

      const _this$row = this.row,
            leaves = _this$row.leaves,
            xOffset = _this$row.xOffset,
            _width = _this$row._width;
      const index = leaves.indexOf(this) + 1;
      return xOffset + index * _width;
    }

  }
  /**
   * Return true if event a and b is considered to be on the same row.
   */


  function onSameRow(a, b, minimumStartDifference) {
    return (// Occupies the same start slot.
      Math.abs(b.start - a.start) < minimumStartDifference || // A's start slot overlaps with b's end slot.
      b.start > a.start && b.start < a.end
    );
  }

  function sortByRender(events) {
    const sortedByTime = sortBy(events, ['startMs', e => -e.endMs]);
    const sorted = [];

    while (sortedByTime.length > 0) {
      const event = sortedByTime.shift();
      sorted.push(event);

      for (let i = 0; i < sortedByTime.length; i++) {
        const test = sortedByTime[i]; // Still inside this event, look for next.

        if (event.endMs > test.startMs) continue; // We've found the first event of the next event group.
        // If that event is not right next to our current event, we have to
        // move it here.

        if (i > 0) {
          const event = sortedByTime.splice(i, 1)[0];
          sorted.push(event);
        } // We've already found the next event group, so stop looking.


        break;
      }
    }

    return sorted;
  }

  function getStyledEvents(_ref2) {
    let events = _ref2.events,
        minimumStartDifference = _ref2.minimumStartDifference,
        slotMetrics = _ref2.slotMetrics,
        accessors = _ref2.accessors;
    // Create proxy events and order them so that we don't have
    // to fiddle with z-indexes.
    const proxies = events.map(event => new Event(event, {
      slotMetrics,
      accessors
    }));
    const eventsInRenderOrder = sortByRender(proxies); // Group overlapping events, while keeping order.
    // Every event is always one of: container, row or leaf.
    // Containers can contain rows, and rows can contain leaves.

    const containerEvents = [];

    for (let i = 0; i < eventsInRenderOrder.length; i++) {
      const event = eventsInRenderOrder[i]; // Check if this event can go into a container event.

      const container = containerEvents.find(c => c.end > event.start || Math.abs(event.start - c.start) < minimumStartDifference); // Couldn't find a container — that means this event is a container.

      if (!container) {
        event.rows = [];
        containerEvents.push(event);
        continue;
      } // Found a container for the event.


      event.container = container; // Check if the event can be placed in an existing row.
      // Start looking from behind.

      let row = null;

      for (let j = container.rows.length - 1; !row && j >= 0; j--) {
        if (onSameRow(container.rows[j], event, minimumStartDifference)) {
          row = container.rows[j];
        }
      }

      if (row) {
        // Found a row, so add it.
        row.leaves.push(event);
        event.row = row;
      } else {
        // Couldn't find a row – that means this event is a row.
        event.leaves = [];
        container.rows.push(event);
      }
    } // Return the original events, along with their styles.


    return eventsInRenderOrder.map(event => ({
      event: event.data,
      style: {
        top: event.top,
        height: event.height,
        width: event.width,
        xOffset: event.xOffset
      }
    }));
  }

  var _jsxFileName$a = "/Users/guilherme/work/react-big-calendar/src/TimeSlotGroup.js";
  class TimeSlotGroup extends React.Component {
    render() {
      const _this$props = this.props,
            renderSlot = _this$props.renderSlot,
            resource = _this$props.resource,
            group = _this$props.group,
            getters = _this$props.getters,
            _this$props$component = _this$props.components,
            _this$props$component2 = _this$props$component === void 0 ? {} : _this$props$component,
            _this$props$component3 = _this$props$component2.timeSlotWrapper,
            Wrapper = _this$props$component3 === void 0 ? NoopWrapper : _this$props$component3;

      return React__default.createElement("div", {
        className: "rbc-timeslot-group",
        __source: {
          fileName: _jsxFileName$a,
          lineNumber: 18
        },
        __self: this
      }, group.map((value, idx) => {
        const slotProps = getters ? getters.slotProp(value, resource) : {};
        return React__default.createElement(Wrapper, {
          key: idx,
          value: value,
          resource: resource,
          __source: {
            fileName: _jsxFileName$a,
            lineNumber: 22
          },
          __self: this
        }, React__default.createElement("div", _extends({}, slotProps, {
          className: classnames('rbc-time-slot', slotProps.className),
          __source: {
            fileName: _jsxFileName$a,
            lineNumber: 23
          },
          __self: this
        }), renderSlot && renderSlot(value, idx)));
      }));
    }

  }
  TimeSlotGroup.propTypes = {
    renderSlot: propTypes.func,
    group: propTypes.array.isRequired,
    resource: propTypes.any,
    components: propTypes.object,
    getters: propTypes.object
  };

  var _jsxFileName$b = "/Users/guilherme/work/react-big-calendar/src/TimeGridEvent.js";
  /* eslint-disable react/prop-types */

  function TimeGridEvent(props) {
    const style = props.style,
          className = props.className,
          event = props.event,
          accessors = props.accessors,
          rtl = props.rtl,
          selected = props.selected,
          label = props.label,
          continuesEarlier = props.continuesEarlier,
          continuesLater = props.continuesLater,
          getters = props.getters,
          onClick = props.onClick,
          onDoubleClick = props.onDoubleClick,
          _props$components = props.components,
          Event = _props$components.event,
          EventWrapper = _props$components.eventWrapper;
    let title = accessors.title(event);
    let tooltip = accessors.tooltip(event);
    let end = accessors.end(event);
    let start = accessors.start(event);
    let userProps = getters.eventProp(event, start, end, selected);
    let height = style.height,
        top = style.top,
        width = style.width,
        xOffset = style.xOffset;
    const inner = [React__default.createElement("div", {
      key: "1",
      className: "rbc-event-label",
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 30
      },
      __self: this
    }, label), React__default.createElement("div", {
      key: "2",
      className: "rbc-event-content",
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 33
      },
      __self: this
    }, Event ? React__default.createElement(Event, {
      event: event,
      title: title,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 34
      },
      __self: this
    }) : title)];
    return React__default.createElement(EventWrapper, _extends({
      type: "time"
    }, props, {
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 39
      },
      __self: this
    }), React__default.createElement("div", {
      onClick: onClick,
      onDoubleClick: onDoubleClick,
      style: _extends({}, userProps.style, {
        top: top + "%",
        height: height + "%",
        [rtl ? 'right' : 'left']: Math.max(0, xOffset) + "%",
        width: width + "%"
      }),
      title: tooltip ? (typeof label === 'string' ? label + ': ' : '') + tooltip : undefined,
      className: classnames('rbc-event', className, userProps.className, {
        'rbc-selected': selected,
        'rbc-event-continues-earlier': continuesEarlier,
        'rbc-event-continues-later': continuesLater
      }),
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 40
      },
      __self: this
    }, inner));
  }

  var _jsxFileName$c = "/Users/guilherme/work/react-big-calendar/src/DayColumn.js";

  class DayColumn extends React__default.Component {
    constructor() {
      var _this;

      super(...arguments);
      _this = this;
      this.state = {
        selecting: false,
        timeIndicatorPosition: null
      };
      this.intervalTriggered = false;

      this.renderEvents = () => {
        let _this$props = this.props,
            events = _this$props.events,
            rtl = _this$props.rtl,
            selected = _this$props.selected,
            accessors = _this$props.accessors,
            localizer = _this$props.localizer,
            getters = _this$props.getters,
            components = _this$props.components,
            step = _this$props.step,
            timeslots = _this$props.timeslots;
        const slotMetrics = this.slotMetrics;
        const messages = localizer.messages;
        let styledEvents = getStyledEvents({
          events,
          accessors,
          slotMetrics,
          minimumStartDifference: Math.ceil(step * timeslots / 2)
        });
        return styledEvents.map((_ref, idx) => {
          let event = _ref.event,
              style = _ref.style;
          let end = accessors.end(event);
          let start = accessors.start(event);
          let format = 'eventTimeRangeFormat';
          let label;
          const startsBeforeDay = slotMetrics.startsBeforeDay(start);
          const startsAfterDay = slotMetrics.startsAfterDay(end);
          if (startsBeforeDay) format = 'eventTimeRangeEndFormat';else if (startsAfterDay) format = 'eventTimeRangeStartFormat';
          if (startsBeforeDay && startsAfterDay) label = messages.allDay;else label = localizer.format({
            start,
            end
          }, format);
          let continuesEarlier = startsBeforeDay || slotMetrics.startsBefore(start);
          let continuesLater = startsAfterDay || slotMetrics.startsAfter(end);
          return React__default.createElement(TimeGridEvent, {
            style: style,
            event: event,
            label: label,
            key: 'evt_' + idx,
            getters: getters,
            rtl: rtl,
            components: components,
            continuesEarlier: continuesEarlier,
            continuesLater: continuesLater,
            accessors: accessors,
            selected: isSelected(event, selected),
            onClick: e => this._select(event, e),
            onDoubleClick: e => this._doubleClick(event, e),
            __source: {
              fileName: _jsxFileName$c,
              lineNumber: 217
            },
            __self: this
          });
        });
      };

      this._selectable = () => {
        let node = reactDom.findDOMNode(this);
        let selector = this._selector = new Selection(() => reactDom.findDOMNode(this), {
          longPressThreshold: this.props.longPressThreshold
        });

        let maybeSelect = box => {
          let onSelecting = this.props.onSelecting;
          let current = this.state || {};
          let state = selectionState(box);
          let start = state.startDate,
              end = state.endDate;

          if (onSelecting) {
            if (eq(current.startDate, start, 'minutes') && eq(current.endDate, end, 'minutes') || onSelecting({
              start,
              end
            }) === false) return;
          }

          if (this.state.start !== state.start || this.state.end !== state.end || this.state.selecting !== state.selecting) {
            this.setState(state);
          }
        };

        let selectionState = point => {
          let currentSlot = this.slotMetrics.closestSlotFromPoint(point, getBoundsForNode(node));
          if (!this.state.selecting) this._initialSlot = currentSlot;
          let initialSlot = this._initialSlot;
          if (initialSlot === currentSlot) currentSlot = this.slotMetrics.nextSlot(initialSlot);
          const selectRange = this.slotMetrics.getRange(min(initialSlot, currentSlot), max(initialSlot, currentSlot));
          return _extends({}, selectRange, {
            selecting: true,
            top: selectRange.top + "%",
            height: selectRange.height + "%"
          });
        };

        let selectorClicksHandler = (box, actionType) => {
          if (!isEvent(reactDom.findDOMNode(this), box)) {
            const _selectionState = selectionState(box),
                  startDate = _selectionState.startDate,
                  endDate = _selectionState.endDate;

            this._selectSlot({
              startDate,
              endDate,
              action: actionType,
              box
            });
          }

          this.setState({
            selecting: false
          });
        };

        selector.on('selecting', maybeSelect);
        selector.on('selectStart', maybeSelect);
        selector.on('beforeSelect', box => {
          if (this.props.selectable !== 'ignoreEvents') return;
          return !isEvent(reactDom.findDOMNode(this), box);
        });
        selector.on('click', box => selectorClicksHandler(box, 'click'));
        selector.on('doubleClick', box => selectorClicksHandler(box, 'doubleClick'));
        selector.on('select', bounds => {
          if (this.state.selecting) {
            this._selectSlot(_extends({}, this.state, {
              action: 'select',
              bounds
            }));

            this.setState({
              selecting: false
            });
          }
        });
        selector.on('reset', () => {
          if (this.state.selecting) {
            this.setState({
              selecting: false
            });
          }
        });
      };

      this._teardownSelectable = () => {
        if (!this._selector) return;

        this._selector.teardown();

        this._selector = null;
      };

      this._selectSlot = (_ref2) => {
        let startDate = _ref2.startDate,
            endDate = _ref2.endDate,
            action = _ref2.action,
            bounds = _ref2.bounds,
            box = _ref2.box;
        let current = startDate,
            slots = [];

        while (lte(current, endDate)) {
          slots.push(current);
          current = add(current, this.props.step, 'minutes');
        }

        notify(this.props.onSelectSlot, {
          slots,
          start: startDate,
          end: endDate,
          resourceId: this.props.resource,
          action,
          bounds,
          box
        });
      };

      this._select = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        notify(_this.props.onSelectEvent, args);
      };

      this._doubleClick = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        notify(_this.props.onDoubleClickEvent, args);
      };

      this.slotMetrics = getSlotMetrics$1(this.props);
    }

    componentDidMount() {
      this.props.selectable && this._selectable();

      if (this.props.isNow) {
        this.setTimeIndicatorPositionUpdateInterval();
      }
    }

    componentWillUnmount() {
      this._teardownSelectable();

      this.clearTimeIndicatorInterval();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.selectable && !this.props.selectable) this._selectable();
      if (!nextProps.selectable && this.props.selectable) this._teardownSelectable();
      this.slotMetrics = this.slotMetrics.update(nextProps);
    }

    componentDidUpdate(prevProps, prevState) {
      const getNowChanged = !eq(prevProps.getNow(), this.props.getNow(), 'minutes');

      if (prevProps.isNow !== this.props.isNow || getNowChanged) {
        this.clearTimeIndicatorInterval();

        if (this.props.isNow) {
          const tail = !getNowChanged && eq(prevProps.date, this.props.date, 'minutes') && prevState.timeIndicatorPosition === this.state.timeIndicatorPosition;
          this.setTimeIndicatorPositionUpdateInterval(tail);
        }
      } else if (this.props.isNow && (!eq(prevProps.min, this.props.min, 'minutes') || !eq(prevProps.max, this.props.max, 'minutes'))) {
        this.positionTimeIndicator();
      }
    }

    /**
     * @param tail {Boolean} - whether `positionTimeIndicator` call should be
     *   deferred or called upon setting interval (`true` - if deferred);
     */
    setTimeIndicatorPositionUpdateInterval(tail) {
      if (tail === void 0) {
        tail = false;
      }

      if (!this.intervalTriggered && !tail) {
        this.positionTimeIndicator();
      }

      this._timeIndicatorTimeout = window.setTimeout(() => {
        this.intervalTriggered = true;
        this.positionTimeIndicator();
        this.setTimeIndicatorPositionUpdateInterval();
      }, 60000);
    }

    clearTimeIndicatorInterval() {
      this.intervalTriggered = false;
      window.clearTimeout(this._timeIndicatorTimeout);
    }

    positionTimeIndicator() {
      const _this$props2 = this.props,
            min = _this$props2.min,
            max = _this$props2.max,
            getNow = _this$props2.getNow;
      const current = getNow();

      if (current >= min && current <= max) {
        const _this$slotMetrics$get = this.slotMetrics.getRange(current, current),
              top = _this$slotMetrics$get.top;

        this.setState({
          timeIndicatorPosition: top
        });
      } else {
        this.clearTimeIndicatorInterval();
      }
    }

    render() {
      const _this$props3 = this.props,
            max = _this$props3.max,
            rtl = _this$props3.rtl,
            isNow = _this$props3.isNow,
            resource = _this$props3.resource,
            accessors = _this$props3.accessors,
            localizer = _this$props3.localizer,
            _this$props3$getters = _this$props3.getters,
            dayProp = _this$props3$getters.dayProp,
            getters = _objectWithoutPropertiesLoose(_this$props3$getters, ["dayProp"]),
            _this$props3$componen = _this$props3.components,
            EventContainer = _this$props3$componen.eventContainerWrapper,
            components = _objectWithoutPropertiesLoose(_this$props3$componen, ["eventContainerWrapper"]);

      let slotMetrics = this.slotMetrics;
      let _this$state = this.state,
          selecting = _this$state.selecting,
          top = _this$state.top,
          height = _this$state.height,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;
      let selectDates = {
        start: startDate,
        end: endDate
      };

      const _dayProp = dayProp(max),
            className = _dayProp.className,
            style = _dayProp.style;

      return React__default.createElement("div", {
        style: style,
        className: classnames(className, 'rbc-day-slot', 'rbc-time-column', isNow && 'rbc-now', isNow && 'rbc-today', // WHY
        selecting && 'rbc-slot-selecting'),
        __source: {
          fileName: _jsxFileName$c,
          lineNumber: 127
        },
        __self: this
      }, slotMetrics.groups.map((grp, idx) => React__default.createElement(TimeSlotGroup, {
        key: idx,
        group: grp,
        resource: resource,
        getters: getters,
        components: components,
        __source: {
          fileName: _jsxFileName$c,
          lineNumber: 139
        },
        __self: this
      })), React__default.createElement(EventContainer, {
        localizer: localizer,
        resource: resource,
        accessors: accessors,
        getters: getters,
        components: components,
        slotMetrics: slotMetrics,
        __source: {
          fileName: _jsxFileName$c,
          lineNumber: 147
        },
        __self: this
      }, React__default.createElement("div", {
        className: classnames('rbc-events-container', rtl && 'rtl'),
        __source: {
          fileName: _jsxFileName$c,
          lineNumber: 155
        },
        __self: this
      }, this.renderEvents())), selecting && React__default.createElement("div", {
        className: "rbc-slot-selection",
        style: {
          top,
          height
        },
        __source: {
          fileName: _jsxFileName$c,
          lineNumber: 161
        },
        __self: this
      }, React__default.createElement("span", {
        __source: {
          fileName: _jsxFileName$c,
          lineNumber: 162
        },
        __self: this
      }, localizer.format(selectDates, 'selectRangeFormat'))), isNow && React__default.createElement("div", {
        className: "rbc-current-time-indicator",
        style: {
          top: this.state.timeIndicatorPosition + "%"
        },
        __source: {
          fileName: _jsxFileName$c,
          lineNumber: 166
        },
        __self: this
      }));
    }

  }

  DayColumn.propTypes = {
    events: propTypes.array.isRequired,
    step: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date).isRequired,
    min: propTypes.instanceOf(Date).isRequired,
    max: propTypes.instanceOf(Date).isRequired,
    getNow: propTypes.func.isRequired,
    isNow: propTypes.bool,
    rtl: propTypes.bool,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
    showMultiDayTimes: propTypes.bool,
    culture: propTypes.string,
    timeslots: propTypes.number,
    selected: propTypes.object,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    eventOffset: propTypes.number,
    longPressThreshold: propTypes.number,
    onSelecting: propTypes.func,
    onSelectSlot: propTypes.func.isRequired,
    onSelectEvent: propTypes.func.isRequired,
    onDoubleClickEvent: propTypes.func.isRequired,
    className: propTypes.string,
    dragThroughEvents: propTypes.bool,
    resource: propTypes.any
  };
  DayColumn.defaultProps = {
    dragThroughEvents: true,
    timeslots: 2
  };

  var _jsxFileName$d = "/Users/guilherme/work/react-big-calendar/src/TimeGutter.js";
  class TimeGutter extends React.Component {
    constructor() {
      super(...arguments);

      this.renderSlot = (value, idx) => {
        if (idx !== 0) return null;
        const _this$props = this.props,
              localizer = _this$props.localizer,
              getNow = _this$props.getNow;
        const isNow = this.slotMetrics.dateIsInGroup(getNow(), idx);
        return React__default.createElement("span", {
          className: classnames('rbc-label', isNow && 'rbc-now'),
          __source: {
            fileName: _jsxFileName$d,
            lineNumber: 32
          },
          __self: this
        }, localizer.format(value, 'timeGutterFormat'));
      };

      const _this$props2 = this.props,
            min = _this$props2.min,
            max = _this$props2.max,
            timeslots = _this$props2.timeslots,
            step = _this$props2.step;
      this.slotMetrics = getSlotMetrics$1({
        min,
        max,
        timeslots,
        step
      });
    }

    componentWillReceiveProps(nextProps) {
      const min = nextProps.min,
            max = nextProps.max,
            timeslots = nextProps.timeslots,
            step = nextProps.step;
      this.slotMetrics = this.slotMetrics.update({
        min,
        max,
        timeslots,
        step
      });
    }

    render() {
      const _this$props3 = this.props,
            resource = _this$props3.resource,
            components = _this$props3.components;
      return React__default.createElement("div", {
        className: "rbc-time-gutter rbc-time-column",
        __source: {
          fileName: _jsxFileName$d,
          lineNumber: 42
        },
        __self: this
      }, this.slotMetrics.groups.map((grp, idx) => {
        return React__default.createElement(TimeSlotGroup, {
          key: idx,
          group: grp,
          resource: resource,
          components: components,
          renderSlot: this.renderSlot,
          __source: {
            fileName: _jsxFileName$d,
            lineNumber: 45
          },
          __self: this
        });
      }));
    }

  }
  TimeGutter.propTypes = {
    min: propTypes.instanceOf(Date).isRequired,
    max: propTypes.instanceOf(Date).isRequired,
    timeslots: propTypes.number.isRequired,
    step: propTypes.number.isRequired,
    getNow: propTypes.func.isRequired,
    components: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
    resource: propTypes.string
  };

  var width_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = width;

  var _offset = interopRequireDefault(offset_1);

  var _isWindow = interopRequireDefault(isWindow);

  function width(node, client) {
    var win = (0, _isWindow.default)(node);
    return win ? win.innerWidth : client ? node.clientWidth : (0, _offset.default)(node).width;
  }

  module.exports = exports["default"];
  });

  var getWidth = unwrapExports(width_1);

  var scrollbarSize_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = scrollbarSize;

  var _inDOM = interopRequireDefault(inDOM);

  var size;

  function scrollbarSize(recalc) {
    if (!size && size !== 0 || recalc) {
      if (_inDOM.default) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.position = 'absolute';
        scrollDiv.style.top = '-9999px';
        scrollDiv.style.width = '50px';
        scrollDiv.style.height = '50px';
        scrollDiv.style.overflow = 'scroll';
        document.body.appendChild(scrollDiv);
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }
    }

    return size;
  }

  module.exports = exports["default"];
  });

  var scrollbarSize = unwrapExports(scrollbarSize_1);

  var _jsxFileName$e = "/Users/guilherme/work/react-big-calendar/src/ResourceHeader.js";

  const ResourceHeader = (_ref) => {
    let label = _ref.label;
    return React__default.createElement(React__default.Fragment, {
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 5
      },
      __self: undefined
    }, label);
  };

  ResourceHeader.propTypes = {
    label: propTypes.node,
    index: propTypes.number,
    resource: propTypes.object
  };

  var _jsxFileName$f = "/Users/guilherme/work/react-big-calendar/src/TimeGridHeader.js";

  class TimeGridHeader extends React__default.Component {
    constructor() {
      super(...arguments);

      this.handleHeaderClick = (date, view, e) => {
        e.preventDefault();
        notify(this.props.onDrillDown, [date, view]);
      };

      this.renderRow = resource => {
        let _this$props = this.props,
            events = _this$props.events,
            rtl = _this$props.rtl,
            selectable = _this$props.selectable,
            getNow = _this$props.getNow,
            range = _this$props.range,
            getters = _this$props.getters,
            localizer = _this$props.localizer,
            accessors = _this$props.accessors,
            components = _this$props.components;
        const resourceId = accessors.resourceId(resource);
        let eventsToDisplay = resource ? events.filter(event => accessors.resource(event) === resourceId) : events;
        return React__default.createElement(DateContentRow, {
          isAllDay: true,
          rtl: rtl,
          getNow: getNow,
          minRows: 2,
          range: range,
          events: eventsToDisplay,
          resourceId: resourceId,
          className: "rbc-allday-cell",
          selectable: selectable,
          selected: this.props.selected,
          components: components,
          accessors: accessors,
          getters: getters,
          localizer: localizer,
          onSelect: this.props.onSelectEvent,
          onDoubleClick: this.props.onDoubleClickEvent,
          onSelectSlot: this.props.onSelectSlot,
          longPressThreshold: this.props.longPressThreshold,
          __source: {
            fileName: _jsxFileName$f,
            lineNumber: 82
          },
          __self: this
        });
      };
    }

    renderHeaderCells(range) {
      let _this$props2 = this.props,
          localizer = _this$props2.localizer,
          getDrilldownView = _this$props2.getDrilldownView,
          getNow = _this$props2.getNow,
          dayProp = _this$props2.getters.dayProp,
          _this$props2$componen = _this$props2.components.header,
          HeaderComponent = _this$props2$componen === void 0 ? Header : _this$props2$componen;
      const today = getNow();
      return range.map((date, i) => {
        let drilldownView = getDrilldownView(date);
        let label = localizer.format(date, 'dayFormat');

        const _dayProp = dayProp(date),
              className = _dayProp.className,
              style = _dayProp.style;

        let header = React__default.createElement(HeaderComponent, {
          date: date,
          label: label,
          localizer: localizer,
          __source: {
            fileName: _jsxFileName$f,
            lineNumber: 36
          },
          __self: this
        });
        return React__default.createElement("div", {
          key: i,
          style: style,
          className: classnames('rbc-header', className, eq(date, today, 'day') && 'rbc-today'),
          __source: {
            fileName: _jsxFileName$f,
            lineNumber: 40
          },
          __self: this
        }, drilldownView ? React__default.createElement("a", {
          href: "#",
          onClick: e => this.handleHeaderClick(date, drilldownView, e),
          __source: {
            fileName: _jsxFileName$f,
            lineNumber: 50
          },
          __self: this
        }, header) : React__default.createElement("span", {
          __source: {
            fileName: _jsxFileName$f,
            lineNumber: 57
          },
          __self: this
        }, header));
      });
    }

    render() {
      let _this$props3 = this.props,
          width = _this$props3.width,
          rtl = _this$props3.rtl,
          resources = _this$props3.resources,
          range = _this$props3.range,
          events = _this$props3.events,
          getNow = _this$props3.getNow,
          accessors = _this$props3.accessors,
          selectable = _this$props3.selectable,
          components = _this$props3.components,
          getters = _this$props3.getters,
          scrollRef = _this$props3.scrollRef,
          localizer = _this$props3.localizer,
          isOverflowing = _this$props3.isOverflowing,
          _this$props3$componen = _this$props3.components,
          TimeGutterHeader = _this$props3$componen.timeGutterHeader,
          _this$props3$componen2 = _this$props3$componen.resourceHeader,
          ResourceHeaderComponent = _this$props3$componen2 === void 0 ? ResourceHeader : _this$props3$componen2;
      let style = {};

      if (isOverflowing) {
        style[rtl ? 'marginLeft' : 'marginRight'] = scrollbarSize() + "px";
      }

      const groupedEvents = resources.groupEvents(events);
      return React__default.createElement("div", {
        style: style,
        ref: scrollRef,
        className: classnames('rbc-time-header', isOverflowing && 'rbc-overflowing'),
        __source: {
          fileName: _jsxFileName$f,
          lineNumber: 134
        },
        __self: this
      }, React__default.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width,
          minWidth: width,
          maxWidth: width
        },
        __source: {
          fileName: _jsxFileName$f,
          lineNumber: 139
        },
        __self: this
      }, TimeGutterHeader && React__default.createElement(TimeGutterHeader, {
        __source: {
          fileName: _jsxFileName$f,
          lineNumber: 143
        },
        __self: this
      })), resources.map((_ref, idx) => {
        let id = _ref[0],
            resource = _ref[1];
        return React__default.createElement("div", {
          className: "rbc-time-header-content",
          key: id || idx,
          __source: {
            fileName: _jsxFileName$f,
            lineNumber: 147
          },
          __self: this
        }, resource && React__default.createElement("div", {
          className: "rbc-row rbc-row-resource",
          key: "resource_" + idx,
          __source: {
            fileName: _jsxFileName$f,
            lineNumber: 149
          },
          __self: this
        }, React__default.createElement("div", {
          className: "rbc-header",
          __source: {
            fileName: _jsxFileName$f,
            lineNumber: 150
          },
          __self: this
        }, React__default.createElement(ResourceHeaderComponent, {
          index: idx,
          label: accessors.resourceTitle(resource),
          resource: resource,
          __source: {
            fileName: _jsxFileName$f,
            lineNumber: 151
          },
          __self: this
        }))), React__default.createElement("div", {
          className: "rbc-row rbc-time-header-cell" + (range.length <= 1 ? ' rbc-time-header-cell-single-day' : ''),
          __source: {
            fileName: _jsxFileName$f,
            lineNumber: 159
          },
          __self: this
        }, this.renderHeaderCells(range)), React__default.createElement(DateContentRow, {
          isAllDay: true,
          rtl: rtl,
          getNow: getNow,
          minRows: 2,
          range: range,
          events: groupedEvents.get(id) || [],
          resourceId: resource && id,
          className: "rbc-allday-cell",
          selectable: selectable,
          selected: this.props.selected,
          components: components,
          accessors: accessors,
          getters: getters,
          localizer: localizer,
          onSelect: this.props.onSelectEvent,
          onDoubleClick: this.props.onDoubleClickEvent,
          onSelectSlot: this.props.onSelectSlot,
          longPressThreshold: this.props.longPressThreshold,
          __source: {
            fileName: _jsxFileName$f,
            lineNumber: 166
          },
          __self: this
        }));
      }));
    }

  }

  TimeGridHeader.propTypes = {
    range: propTypes.array.isRequired,
    events: propTypes.array.isRequired,
    resources: propTypes.object,
    getNow: propTypes.func.isRequired,
    isOverflowing: propTypes.bool,
    rtl: propTypes.bool,
    width: propTypes.number,
    localizer: propTypes.object.isRequired,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    selected: propTypes.object,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    longPressThreshold: propTypes.number,
    onSelectSlot: propTypes.func,
    onSelectEvent: propTypes.func,
    onDoubleClickEvent: propTypes.func,
    onDrillDown: propTypes.func,
    getDrilldownView: propTypes.func.isRequired,
    scrollRef: propTypes.any
  };

  const NONE = {};
  function Resources(resources, accessors) {
    return {
      map(fn) {
        if (!resources) return [fn([NONE, null], 0)];
        return resources.map((resource, idx) => fn([accessors.resourceId(resource), resource], idx));
      },

      groupEvents(events) {
        const eventsByResource = new Map();

        if (!resources) {
          // Return all events if resources are not provided
          eventsByResource.set(NONE, events);
          return eventsByResource;
        }

        events.forEach(event => {
          const id = accessors.resource(event) || NONE;
          let resourceEvents = eventsByResource.get(id) || [];
          resourceEvents.push(event);
          eventsByResource.set(id, resourceEvents);
        });
        return eventsByResource;
      }

    };
  }

  var _jsxFileName$g = "/Users/guilherme/work/react-big-calendar/src/TimeGrid.js";
  class TimeGrid extends React.Component {
    constructor(props) {
      var _this;

      super(props);
      _this = this;

      this.handleScroll = e => {
        if (this.scrollRef.current) {
          this.scrollRef.current.scrollLeft = e.target.scrollLeft;
        }
      };

      this.handleResize = () => {
        raf.cancel(this.rafHandle);
        this.rafHandle = raf(this.checkOverflow);
      };

      this.gutterRef = ref => {
        this.gutter = ref && reactDom.findDOMNode(ref);
      };

      this.handleSelectAlldayEvent = function () {
        //cancel any pending selections so only the event click goes through.
        _this.clearSelection();

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        notify(_this.props.onSelectEvent, args);
      };

      this.handleSelectAllDaySlot = (slots, slotInfo) => {
        const onSelectSlot = this.props.onSelectSlot;
        notify(onSelectSlot, {
          slots,
          start: slots[0],
          end: slots[slots.length - 1],
          action: slotInfo.action
        });
      };

      this.checkOverflow = () => {
        if (this._updatingOverflow) return;
        const content = this.contentRef.current;
        let isOverflowing = content.scrollHeight > content.clientHeight;

        if (this.state.isOverflowing !== isOverflowing) {
          this._updatingOverflow = true;
          this.setState({
            isOverflowing
          }, () => {
            this._updatingOverflow = false;
          });
        }
      };

      this.memoizedResources = index((resources, accessors) => Resources(resources, accessors));
      this.state = {
        gutterWidth: undefined,
        isOverflowing: null
      };
      this.scrollRef = React__default.createRef();
      this.contentRef = React__default.createRef();
    }

    componentWillMount() {
      this.calculateScroll();
    }

    componentDidMount() {
      this.checkOverflow();

      if (this.props.width == null) {
        this.measureGutter();
      }

      this.applyScroll();
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      raf.cancel(this.rafHandle);

      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }
    }

    componentDidUpdate() {
      if (this.props.width == null) {
        this.measureGutter();
      }

      this.applyScroll(); //this.checkOverflow()
    }

    componentWillReceiveProps(nextProps) {
      const _this$props = this.props,
            range = _this$props.range,
            scrollToTime = _this$props.scrollToTime; // When paginating, reset scroll

      if (!eq(nextProps.range[0], range[0], 'minute') || !eq(nextProps.scrollToTime, scrollToTime, 'minute')) {
        this.calculateScroll(nextProps);
      }
    }

    renderEvents(range, events, now) {
      let _this$props2 = this.props,
          min = _this$props2.min,
          max = _this$props2.max,
          components = _this$props2.components,
          accessors = _this$props2.accessors,
          localizer = _this$props2.localizer;
      const resources = this.memoizedResources(this.props.resources, accessors);
      const groupedEvents = resources.groupEvents(events);
      return resources.map((_ref, i) => {
        let id = _ref[0],
            resource = _ref[1];
        return range.map((date, jj) => {
          let daysEvents = (groupedEvents.get(id) || []).filter(event => inRange(date, accessors.start(event), accessors.end(event), 'day'));
          return React__default.createElement(DayColumn, _extends({}, this.props, {
            localizer: localizer,
            min: merge(date, min),
            max: merge(date, max),
            resource: resource && id,
            components: components,
            isNow: eq(date, now, 'day'),
            key: i + '-' + jj,
            date: date,
            events: daysEvents,
            __source: {
              fileName: _jsxFileName$g,
              lineNumber: 123
            },
            __self: this
          }));
        });
      });
    }

    render() {
      let _this$props3 = this.props,
          events = _this$props3.events,
          range = _this$props3.range,
          width = _this$props3.width,
          rtl = _this$props3.rtl,
          selected = _this$props3.selected,
          getNow = _this$props3.getNow,
          resources = _this$props3.resources,
          components = _this$props3.components,
          accessors = _this$props3.accessors,
          getters = _this$props3.getters,
          localizer = _this$props3.localizer,
          min = _this$props3.min,
          max = _this$props3.max,
          showMultiDayTimes = _this$props3.showMultiDayTimes,
          longPressThreshold = _this$props3.longPressThreshold;
      width = width || this.state.gutterWidth;
      let start = range[0],
          end = range[range.length - 1];
      this.slots = range.length;
      let allDayEvents = [],
          rangeEvents = [];
      events.forEach(event => {
        if (inRange$1(event, start, end, accessors)) {
          let eStart = accessors.start(event),
              eEnd = accessors.end(event);

          if (accessors.allDay(event) || isJustDate(eStart) && isJustDate(eEnd) || !showMultiDayTimes && !eq(eStart, eEnd, 'day')) {
            allDayEvents.push(event);
          } else {
            rangeEvents.push(event);
          }
        }
      });
      allDayEvents.sort((a, b) => sortEvents(a, b, accessors));
      return React__default.createElement("div", {
        className: classnames('rbc-time-view', resources && 'rbc-time-view-resources'),
        __source: {
          fileName: _jsxFileName$g,
          lineNumber: 189
        },
        __self: this
      }, React__default.createElement(TimeGridHeader, {
        range: range,
        events: allDayEvents,
        width: width,
        rtl: rtl,
        getNow: getNow,
        localizer: localizer,
        selected: selected,
        resources: this.memoizedResources(resources, accessors),
        selectable: this.props.selectable,
        accessors: accessors,
        getters: getters,
        components: components,
        scrollRef: this.scrollRef,
        isOverflowing: this.state.isOverflowing,
        longPressThreshold: longPressThreshold,
        onSelectSlot: this.handleSelectAllDaySlot,
        onSelectEvent: this.handleSelectAlldayEvent,
        onDoubleClickEvent: this.props.onDoubleClickEvent,
        onDrillDown: this.props.onDrillDown,
        getDrilldownView: this.props.getDrilldownView,
        __source: {
          fileName: _jsxFileName$g,
          lineNumber: 192
        },
        __self: this
      }), React__default.createElement("div", {
        ref: this.contentRef,
        className: "rbc-time-content",
        onScroll: this.handleScroll,
        __source: {
          fileName: _jsxFileName$g,
          lineNumber: 214
        },
        __self: this
      }, React__default.createElement(TimeGutter, {
        date: start,
        ref: this.gutterRef,
        localizer: localizer,
        min: merge(start, min),
        max: merge(start, max),
        step: this.props.step,
        getNow: this.props.getNow,
        timeslots: this.props.timeslots,
        components: components,
        className: "rbc-time-gutter",
        __source: {
          fileName: _jsxFileName$g,
          lineNumber: 219
        },
        __self: this
      }), this.renderEvents(range, rangeEvents, getNow())));
    }

    clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }

    measureGutter() {
      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }

      this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(() => {
        const width = getWidth(this.gutter);

        if (width && this.state.gutterWidth !== width) {
          this.setState({
            gutterWidth: width
          });
        }
      });
    }

    applyScroll() {
      if (this._scrollRatio) {
        const content = this.contentRef.current;
        content.scrollTop = content.scrollHeight * this._scrollRatio; // Only do this once

        this._scrollRatio = null;
      }
    }

    calculateScroll(props) {
      if (props === void 0) {
        props = this.props;
      }

      const _props = props,
            min = _props.min,
            max = _props.max,
            scrollToTime = _props.scrollToTime;
      const diffMillis = scrollToTime - startOf(scrollToTime, 'day');
      const totalMillis = diff(max, min);
      this._scrollRatio = diffMillis / totalMillis;
    }

  }
  TimeGrid.propTypes = {
    events: propTypes.array.isRequired,
    resources: propTypes.array,
    step: propTypes.number,
    timeslots: propTypes.number,
    range: propTypes.arrayOf(propTypes.instanceOf(Date)),
    min: propTypes.instanceOf(Date),
    max: propTypes.instanceOf(Date),
    getNow: propTypes.func.isRequired,
    scrollToTime: propTypes.instanceOf(Date),
    showMultiDayTimes: propTypes.bool,
    rtl: propTypes.bool,
    width: propTypes.number,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
    selected: propTypes.object,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    longPressThreshold: propTypes.number,
    onNavigate: propTypes.func,
    onSelectSlot: propTypes.func,
    onSelectEnd: propTypes.func,
    onSelectStart: propTypes.func,
    onSelectEvent: propTypes.func,
    onDoubleClickEvent: propTypes.func,
    onDrillDown: propTypes.func,
    getDrilldownView: propTypes.func.isRequired
  };
  TimeGrid.defaultProps = {
    step: 30,
    timeslots: 2,
    min: startOf(new Date(), 'day'),
    max: endOf(new Date(), 'day'),
    scrollToTime: startOf(new Date(), 'day')
  };

  var _jsxFileName$h = "/Users/guilherme/work/react-big-calendar/src/Day.js";

  class Day extends React__default.Component {
    render() {
      let _this$props = this.props,
          date = _this$props.date,
          props = _objectWithoutPropertiesLoose(_this$props, ["date"]);

      let range = Day.range(date);
      return React__default.createElement(TimeGrid, _extends({}, props, {
        range: range,
        eventOffset: 10,
        __source: {
          fileName: _jsxFileName$h,
          lineNumber: 13
        },
        __self: this
      }));
    }

  }

  Day.propTypes = {
    date: propTypes.instanceOf(Date).isRequired
  };

  Day.range = date => {
    return [startOf(date, 'day')];
  };

  Day.navigate = (date, action) => {
    switch (action) {
      case navigate.PREVIOUS:
        return add(date, -1, 'day');

      case navigate.NEXT:
        return add(date, 1, 'day');

      default:
        return date;
    }
  };

  Day.title = (date, _ref) => {
    let localizer = _ref.localizer;
    return localizer.format(date, 'dayHeaderFormat');
  };

  var _jsxFileName$i = "/Users/guilherme/work/react-big-calendar/src/Week.js";

  class Week extends React__default.Component {
    render() {
      let _this$props = this.props,
          date = _this$props.date,
          props = _objectWithoutPropertiesLoose(_this$props, ["date"]);

      let range = Week.range(date, this.props);
      return React__default.createElement(TimeGrid, _extends({}, props, {
        range: range,
        eventOffset: 15,
        __source: {
          fileName: _jsxFileName$i,
          lineNumber: 12
        },
        __self: this
      }));
    }

  }

  Week.propTypes = {
    date: propTypes.instanceOf(Date).isRequired
  };
  Week.defaultProps = TimeGrid.defaultProps;

  Week.navigate = (date, action) => {
    switch (action) {
      case navigate.PREVIOUS:
        return add(date, -1, 'week');

      case navigate.NEXT:
        return add(date, 1, 'week');

      default:
        return date;
    }
  };

  Week.range = (date, _ref) => {
    let localizer = _ref.localizer;
    let firstOfWeek = localizer.startOfWeek();
    let start = startOf(date, 'week', firstOfWeek);
    let end = endOf(date, 'week', firstOfWeek);
    return range(start, end);
  };

  Week.title = (date, _ref2) => {
    let localizer = _ref2.localizer;

    let _Week$range = Week.range(date, {
      localizer
    }),
        start = _Week$range[0],
        rest = _Week$range.slice(1);

    return localizer.format({
      start,
      end: rest.pop()
    }, 'dayRangeHeaderFormat');
  };

  var _jsxFileName$j = "/Users/guilherme/work/react-big-calendar/src/WorkWeek.js";

  function workWeekRange(date, options) {
    return Week.range(date, options).filter(d => [6, 0].indexOf(d.getDay()) === -1);
  }

  class WorkWeek extends React__default.Component {
    render() {
      let _this$props = this.props,
          date = _this$props.date,
          props = _objectWithoutPropertiesLoose(_this$props, ["date"]);

      let range = workWeekRange(date, this.props);
      return React__default.createElement(TimeGrid, _extends({}, props, {
        range: range,
        eventOffset: 15,
        __source: {
          fileName: _jsxFileName$j,
          lineNumber: 18
        },
        __self: this
      }));
    }

  }

  WorkWeek.propTypes = {
    date: propTypes.instanceOf(Date).isRequired
  };
  WorkWeek.defaultProps = TimeGrid.defaultProps;
  WorkWeek.range = workWeekRange;
  WorkWeek.navigate = Week.navigate;

  WorkWeek.title = (date, _ref) => {
    let localizer = _ref.localizer;

    let _workWeekRange = workWeekRange(date, {
      localizer
    }),
        start = _workWeekRange[0],
        rest = _workWeekRange.slice(1);

    return localizer.format({
      start,
      end: rest.pop()
    }, 'dayRangeHeaderFormat');
  };

  var hasClass_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = hasClass;

  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }

  module.exports = exports["default"];
  });

  unwrapExports(hasClass_1);

  var addClass_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = addClass;

  var _hasClass = interopRequireDefault(hasClass_1);

  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
  }

  module.exports = exports["default"];
  });

  unwrapExports(addClass_1);

  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }

  var removeClass = function removeClass(element, className) {
    if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  };

  var _class = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _addClass = interopRequireDefault(addClass_1);

  exports.addClass = _addClass.default;

  var _removeClass = interopRequireDefault(removeClass);

  exports.removeClass = _removeClass.default;

  var _hasClass = interopRequireDefault(hasClass_1);

  exports.hasClass = _hasClass.default;
  var _default = {
    addClass: _addClass.default,
    removeClass: _removeClass.default,
    hasClass: _hasClass.default
  };
  exports.default = _default;
  });

  var classes = unwrapExports(_class);
  var _class_1 = _class.addClass;
  var _class_2 = _class.removeClass;
  var _class_3 = _class.hasClass;

  var _jsxFileName$k = "/Users/guilherme/work/react-big-calendar/src/Agenda.js";

  class Agenda extends React__default.Component {
    constructor(props) {
      super(props);

      this.renderDay = (day, events, dayKey) => {
        let _this$props = this.props,
            selected = _this$props.selected,
            getters = _this$props.getters,
            accessors = _this$props.accessors,
            localizer = _this$props.localizer,
            _this$props$component = _this$props.components,
            Event = _this$props$component.event,
            AgendaDate = _this$props$component.date;
        events = events.filter(e => inRange$1(e, startOf(day, 'day'), endOf(day, 'day'), accessors));
        return events.map((event, idx) => {
          let title = accessors.title(event);
          let end = accessors.end(event);
          let start = accessors.start(event);
          const userProps = getters.eventProp(event, start, end, isSelected(event, selected));
          let dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat');
          let first = idx === 0 ? React__default.createElement("td", {
            rowSpan: events.length,
            className: "rbc-agenda-date-cell",
            __source: {
              fileName: _jsxFileName$k,
              lineNumber: 101
            },
            __self: this
          }, AgendaDate ? React__default.createElement(AgendaDate, {
            day: day,
            label: dateLabel,
            __source: {
              fileName: _jsxFileName$k,
              lineNumber: 103
            },
            __self: this
          }) : dateLabel) : false;
          return React__default.createElement("tr", {
            key: dayKey + '_' + idx,
            className: userProps.className,
            style: userProps.style,
            __source: {
              fileName: _jsxFileName$k,
              lineNumber: 113
            },
            __self: this
          }, first, React__default.createElement("td", {
            className: "rbc-agenda-time-cell",
            __source: {
              fileName: _jsxFileName$k,
              lineNumber: 119
            },
            __self: this
          }, this.timeRangeLabel(day, event)), React__default.createElement("td", {
            className: "rbc-agenda-event-cell",
            __source: {
              fileName: _jsxFileName$k,
              lineNumber: 122
            },
            __self: this
          }, Event ? React__default.createElement(Event, {
            event: event,
            title: title,
            __source: {
              fileName: _jsxFileName$k,
              lineNumber: 123
            },
            __self: this
          }) : title));
        }, []);
      };

      this.timeRangeLabel = (day, event) => {
        let _this$props2 = this.props,
            accessors = _this$props2.accessors,
            localizer = _this$props2.localizer,
            components = _this$props2.components;
        let labelClass = '',
            TimeComponent = components.time,
            label = localizer.messages.allDay;
        let end = accessors.end(event);
        let start = accessors.start(event);

        if (!accessors.allDay(event)) {
          if (eq(start, end)) {
            label = localizer.format(start, 'agendaTimeFormat');
          } else if (eq(start, end, 'day')) {
            label = localizer.format({
              start,
              end
            }, 'agendaTimeRangeFormat');
          } else if (eq(day, start, 'day')) {
            label = localizer.format(start, 'agendaTimeFormat');
          } else if (eq(day, end, 'day')) {
            label = localizer.format(end, 'agendaTimeFormat');
          }
        }

        if (gt(day, start, 'day')) labelClass = 'rbc-continues-prior';
        if (lt(day, end, 'day')) labelClass += ' rbc-continues-after';
        return React__default.createElement("span", {
          className: labelClass.trim(),
          __source: {
            fileName: _jsxFileName$k,
            lineNumber: 156
          },
          __self: this
        }, TimeComponent ? React__default.createElement(TimeComponent, {
          event: event,
          day: day,
          label: label,
          __source: {
            fileName: _jsxFileName$k,
            lineNumber: 158
          },
          __self: this
        }) : label);
      };

      this._adjustHeader = () => {
        if (!this.tbodyRef.current) return;
        let header = this.headerRef.current;
        let firstRow = this.tbodyRef.current.firstChild;
        if (!firstRow) return;
        let isOverflowing = this.contentRef.current.scrollHeight > this.contentRef.current.clientHeight;
        let widths = this._widths || [];
        this._widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])];

        if (widths[0] !== this._widths[0] || widths[1] !== this._widths[1]) {
          this.dateColRef.current.style.width = this._widths[0] + 'px';
          this.timeColRef.current.style.width = this._widths[1] + 'px';
        }

        if (isOverflowing) {
          classes.addClass(header, 'rbc-header-overflowing');
          header.style.marginRight = scrollbarSize() + 'px';
        } else {
          classes.removeClass(header, 'rbc-header-overflowing');
        }
      };

      this.headerRef = React__default.createRef();
      this.dateColRef = React__default.createRef();
      this.timeColRef = React__default.createRef();
      this.contentRef = React__default.createRef();
      this.tbodyRef = React__default.createRef();
    }

    componentDidMount() {
      this._adjustHeader();
    }

    componentDidUpdate() {
      this._adjustHeader();
    }

    render() {
      let _this$props3 = this.props,
          length = _this$props3.length,
          date = _this$props3.date,
          events = _this$props3.events,
          accessors = _this$props3.accessors,
          localizer = _this$props3.localizer;
      let messages = localizer.messages;
      let end = add(date, length, 'day');
      let range$1 = range(date, end, 'day');
      events = events.filter(event => inRange$1(event, date, end, accessors));
      events.sort((a, b) => +accessors.start(a) - +accessors.start(b));
      return React__default.createElement("div", {
        className: "rbc-agenda-view",
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 42
        },
        __self: this
      }, events.length !== 0 ? React__default.createElement(React__default.Fragment, {
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 44
        },
        __self: this
      }, React__default.createElement("table", {
        ref: this.headerRef,
        className: "rbc-agenda-table",
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 45
        },
        __self: this
      }, React__default.createElement("thead", {
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 46
        },
        __self: this
      }, React__default.createElement("tr", {
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 47
        },
        __self: this
      }, React__default.createElement("th", {
        className: "rbc-header",
        ref: this.dateColRef,
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 48
        },
        __self: this
      }, messages.date), React__default.createElement("th", {
        className: "rbc-header",
        ref: this.timeColRef,
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 51
        },
        __self: this
      }, messages.time), React__default.createElement("th", {
        className: "rbc-header",
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 54
        },
        __self: this
      }, messages.event)))), React__default.createElement("div", {
        className: "rbc-agenda-content",
        ref: this.contentRef,
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 58
        },
        __self: this
      }, React__default.createElement("table", {
        className: "rbc-agenda-table",
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 59
        },
        __self: this
      }, React__default.createElement("tbody", {
        ref: this.tbodyRef,
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 60
        },
        __self: this
      }, range$1.map((day, idx) => this.renderDay(day, events, idx)))))) : React__default.createElement("span", {
        className: "rbc-agenda-empty",
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 67
        },
        __self: this
      }, messages.noEventsInRange));
    }

  }

  Agenda.propTypes = {
    events: propTypes.array,
    date: propTypes.instanceOf(Date),
    length: propTypes.number.isRequired,
    selected: propTypes.object,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired
  };
  Agenda.defaultProps = {
    length: 30
  };

  Agenda.range = (start, _ref) => {
    let _ref$length = _ref.length,
        length = _ref$length === void 0 ? Agenda.defaultProps.length : _ref$length;
    let end = add(start, length, 'day');
    return {
      start,
      end
    };
  };

  Agenda.navigate = (date, action, _ref2) => {
    let _ref2$length = _ref2.length,
        length = _ref2$length === void 0 ? Agenda.defaultProps.length : _ref2$length;

    switch (action) {
      case navigate.PREVIOUS:
        return add(date, -length, 'day');

      case navigate.NEXT:
        return add(date, length, 'day');

      default:
        return date;
    }
  };

  Agenda.title = (start, _ref3) => {
    let _ref3$length = _ref3.length,
        length = _ref3$length === void 0 ? Agenda.defaultProps.length : _ref3$length,
        localizer = _ref3.localizer;
    let end = add(start, length, 'day');
    return localizer.format({
      start,
      end
    }, 'agendaHeaderFormat');
  };

  const VIEWS = {
    [views.MONTH]: MonthView,
    [views.WEEK]: Week,
    [views.WORK_WEEK]: WorkWeek,
    [views.DAY]: Day,
    [views.AGENDA]: Agenda
  };

  function moveDate(View, _ref) {
    let action = _ref.action,
        date = _ref.date,
        today = _ref.today,
        props = _objectWithoutPropertiesLoose(_ref, ["action", "date", "today"]);

    View = typeof View === 'string' ? VIEWS[View] : View;

    switch (action) {
      case navigate.TODAY:
        date = today || new Date();
        break;

      case navigate.DATE:
        break;

      default:
        !(View && typeof View.navigate === 'function') ? invariant_1(false, 'Calendar View components must implement a static `.navigate(date, action)` method.s') : void 0;
        date = View.navigate(date, action, props);
    }

    return date;
  }

  var _jsxFileName$l = "/Users/guilherme/work/react-big-calendar/src/Toolbar.js";

  class Toolbar extends React__default.Component {
    constructor() {
      super(...arguments);

      this.navigate = action => {
        this.props.onNavigate(action);
      };

      this.view = view => {
        this.props.onView(view);
      };
    }

    render() {
      let _this$props = this.props,
          messages = _this$props.localizer.messages,
          label = _this$props.label;
      return React__default.createElement("div", {
        className: "rbc-toolbar",
        __source: {
          fileName: _jsxFileName$l,
          lineNumber: 14
        },
        __self: this
      }, React__default.createElement("span", {
        className: "rbc-btn-group",
        __source: {
          fileName: _jsxFileName$l,
          lineNumber: 15
        },
        __self: this
      }, React__default.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.TODAY),
        __source: {
          fileName: _jsxFileName$l,
          lineNumber: 16
        },
        __self: this
      }, messages.today), React__default.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.PREVIOUS),
        __source: {
          fileName: _jsxFileName$l,
          lineNumber: 22
        },
        __self: this
      }, messages.previous), React__default.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.NEXT),
        __source: {
          fileName: _jsxFileName$l,
          lineNumber: 28
        },
        __self: this
      }, messages.next)), React__default.createElement("span", {
        className: "rbc-toolbar-label",
        __source: {
          fileName: _jsxFileName$l,
          lineNumber: 36
        },
        __self: this
      }, label), React__default.createElement("span", {
        className: "rbc-btn-group",
        __source: {
          fileName: _jsxFileName$l,
          lineNumber: 38
        },
        __self: this
      }, this.viewNamesGroup(messages)));
    }

    viewNamesGroup(messages) {
      let viewNames = this.props.views;
      const view = this.props.view;

      if (viewNames.length > 1) {
        return viewNames.map(name => React__default.createElement("button", {
          type: "button",
          key: name,
          className: classnames({
            'rbc-active': view === name
          }),
          onClick: this.view.bind(null, name),
          __source: {
            fileName: _jsxFileName$l,
            lineNumber: 57
          },
          __self: this
        }, messages[name]));
      }
    }

  }

  Toolbar.propTypes = {
    view: propTypes.string.isRequired,
    views: propTypes.arrayOf(propTypes.string).isRequired,
    label: propTypes.node.isRequired,
    localizer: propTypes.object,
    onNavigate: propTypes.func.isRequired,
    onView: propTypes.func.isRequired
  };

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty$2) {
      defineProperty$2(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$c.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$a.call(object, key) && eq$1(objValue, value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$d = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$b = objectProto$d.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$b.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn$1(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn$1(source), object);
  }

  /** Detect free variable `exports`. */
  var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

  /** Built-in value references. */
  var Buffer$1 = moduleExports$2 ? root.Buffer : undefined,
      allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }

  /** Built-in value references. */
  var getPrototype = overArg(Object.getPrototypeOf, Object);

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols$1 ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }
    return result;
  };

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
  }

  /** Used for built-in method references. */
  var objectProto$e = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$c = objectProto$e.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty$c.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  /** `Object#toString` result references. */
  var boolTag$2 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      mapTag$3 = '[object Map]',
      numberTag$2 = '[object Number]',
      regexpTag$2 = '[object RegExp]',
      setTag$3 = '[object Set]',
      stringTag$2 = '[object String]',
      symbolTag$2 = '[object Symbol]';

  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$2:
        return cloneArrayBuffer(object);

      case boolTag$2:
      case dateTag$2:
        return new Ctor(+object);

      case dataViewTag$3:
        return cloneDataView(object, isDeep);

      case float32Tag$1: case float64Tag$1:
      case int8Tag$1: case int16Tag$1: case int32Tag$1:
      case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
        return cloneTypedArray(object, isDeep);

      case mapTag$3:
        return new Ctor;

      case numberTag$2:
      case stringTag$2:
        return new Ctor(object);

      case regexpTag$2:
        return cloneRegExp(object);

      case setTag$3:
        return new Ctor;

      case symbolTag$2:
        return cloneSymbol(object);
    }
  }

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate(getPrototype(object))
      : {};
  }

  /** `Object#toString` result references. */
  var mapTag$4 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike(value) && getTag$1(value) == mapTag$4;
  }

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil && nodeUtil.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

  /** `Object#toString` result references. */
  var setTag$4 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike(value) && getTag$1(value) == setTag$4;
  }

  /* Node.js helper references. */
  var nodeIsSet = nodeUtil && nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** `Object#toString` result references. */
  var argsTag$3 = '[object Arguments]',
      arrayTag$2 = '[object Array]',
      boolTag$3 = '[object Boolean]',
      dateTag$3 = '[object Date]',
      errorTag$2 = '[object Error]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      mapTag$5 = '[object Map]',
      numberTag$3 = '[object Number]',
      objectTag$3 = '[object Object]',
      regexpTag$3 = '[object RegExp]',
      setTag$5 = '[object Set]',
      stringTag$3 = '[object String]',
      symbolTag$3 = '[object Symbol]',
      weakMapTag$2 = '[object WeakMap]';

  var arrayBufferTag$3 = '[object ArrayBuffer]',
      dataViewTag$4 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
  cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] =
  cloneableTags[boolTag$3] = cloneableTags[dateTag$3] =
  cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
  cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
  cloneableTags[int32Tag$2] = cloneableTags[mapTag$5] =
  cloneableTags[numberTag$3] = cloneableTags[objectTag$3] =
  cloneableTags[regexpTag$3] = cloneableTags[setTag$5] =
  cloneableTags[stringTag$3] = cloneableTags[symbolTag$3] =
  cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
  cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
  cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
  cloneableTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag$1(value),
          isFunc = tag == funcTag$2 || tag == genTag$1;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag$3 || tag == argsTag$3 || (isFunc && !object)) {
        result = (isFlat || isFunc) ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });

      return result;
    }

    if (isMap(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });

      return result;
    }

    var keysFunc = isFull
      ? (isFlat ? getAllKeysIn : getAllKeys)
      : (isFlat ? keysIn : keys);

    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  /**
   * Gets the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of `array`.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   */
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
  }

  /**
   * Gets the parent value at `path` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} path The path to get the parent value of.
   * @returns {*} Returns the parent value.
   */
  function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
  }

  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The property path to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */
  function baseUnset(object, path) {
    path = castPath(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
  }

  /** `Object#toString` result references. */
  var objectTag$4 = '[object Object]';

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype,
      objectProto$f = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$d = objectProto$f.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString$2.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag$4) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$d.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString$2.call(Ctor) == objectCtorString;
  }

  /**
   * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
   * objects.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {string} key The key of the property to inspect.
   * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
   */
  function customOmitClone(value) {
    return isPlainObject(value) ? undefined : value;
  }

  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }

  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + '');
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_FLAT_FLAG$1 = 2,
      CLONE_SYMBOLS_FLAG$1 = 4;

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable property paths of `object` that are not omitted.
   *
   * **Note:** This method is considerably slower than `_.pick`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to omit.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = flatRest(function(object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = arrayMap(paths, function(path) {
      path = castPath(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) {
      result = baseClone(result, CLONE_DEEP_FLAG$1 | CLONE_FLAT_FLAG$1 | CLONE_SYMBOLS_FLAG$1, customOmitClone);
    }
    var length = paths.length;
    while (length--) {
      baseUnset(result, paths[length]);
    }
    return result;
  });

  /** Used for built-in method references. */
  var objectProto$g = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$e = objectProto$g.hasOwnProperty;

  /**
   * Assigns own and inherited enumerable string keyed properties of source
   * objects to the destination object for all destination properties that
   * resolve to `undefined`. Source objects are applied from left to right.
   * Once a property is set, additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaultsDeep
   * @example
   *
   * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var defaults = baseRest(function(object, sources) {
    object = Object(object);

    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      length = 1;
    }

    while (++index < length) {
      var source = sources[index];
      var props = keysIn$1(source);
      var propsIndex = -1;
      var propsLength = props.length;

      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];

        if (value === undefined ||
            (eq$1(value, objectProto$g[key]) && !hasOwnProperty$e.call(object, key))) {
          object[key] = source[key];
        }
      }
    }

    return object;
  });

  /**
   * An alternative to `_.reduce`; this method transforms `object` to a new
   * `accumulator` object which is the result of running each of its own
   * enumerable string keyed properties thru `iteratee`, with each invocation
   * potentially mutating the `accumulator` object. If `accumulator` is not
   * provided, a new object with the same `[[Prototype]]` will be used. The
   * iteratee is invoked with four arguments: (accumulator, value, key, object).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 1.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The custom accumulator value.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * _.transform([2, 3, 4], function(result, n) {
   *   result.push(n *= n);
   *   return n % 2 == 0;
   * }, []);
   * // => [4, 9]
   *
   * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] }
   */
  function transform(object, iteratee, accumulator) {
    var isArr = isArray(object),
        isArrLike = isArr || isBuffer(object) || isTypedArray(object);

    iteratee = baseIteratee(iteratee, 4);
    if (accumulator == null) {
      var Ctor = object && object.constructor;
      if (isArrLike) {
        accumulator = isArr ? new Ctor : [];
      }
      else if (isObject(object)) {
        accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
      }
      else {
        accumulator = {};
      }
    }
    (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
      return iteratee(accumulator, value, index, object);
    });
    return accumulator;
  }

  /**
   * Creates an object with the same keys as `object` and values generated
   * by running each own enumerable string keyed property of `object` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @see _.mapKeys
   * @example
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * _.mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   *
   * // The `_.property` iteratee shorthand.
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  function mapValues(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);

    baseForOwn(object, function(value, key, object) {
      baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
  }

  /**
   * Retrieve via an accessor-like property
   *
   *    accessor(obj, 'name')   // => retrieves obj['name']
   *    accessor(data, func)    // => retrieves func(data)
   *    ... otherwise null
   */
  function accessor$1(data, field) {
    var value = null;
    if (typeof field === 'function') value = field(data);else if (typeof field === 'string' && typeof data === 'object' && data != null && field in data) value = data[field];
    return value;
  }
  const wrapAccessor = acc => data => accessor$1(data, acc);

  var _jsxFileName$m = "/Users/guilherme/work/react-big-calendar/src/Calendar.js";

  function viewNames$1(_views) {
    return !Array.isArray(_views) ? Object.keys(_views) : _views;
  }

  function isValidView(view, _ref) {
    let _views = _ref.views;
    let names = viewNames$1(_views);
    return names.indexOf(view) !== -1;
  }
  /**
   * react-big-calendar is a full featured Calendar component for managing events and dates. It uses
   * modern `flexbox` for layout, making it super responsive and performant. Leaving most of the layout heavy lifting
   * to the browser. __note:__ The default styles use `height: 100%` which means your container must set an explicit
   * height (feel free to adjust the styles to suit your specific needs).
   *
   * Big Calendar is unopiniated about editing and moving events, preferring to let you implement it in a way that makes
   * the most sense to your app. It also tries not to be prescriptive about your event data structures, just tell it
   * how to find the start and end datetimes and you can pass it whatever you want.
   *
   * One thing to note is that, `react-big-calendar` treats event start/end dates as an _exclusive_ range.
   * which means that the event spans up to, but not including, the end date. In the case
   * of displaying events on whole days, end dates are rounded _up_ to the next day. So an
   * event ending on `Apr 8th 12:00:00 am` will not appear on the 8th, whereas one ending
   * on `Apr 8th 12:01:00 am` will. If you want _inclusive_ ranges consider providing a
   * function `endAccessor` that returns the end date + 1 day for those events that end at midnight.
   */


  class Calendar extends React__default.Component {
    constructor() {
      var _this;

      super(...arguments);
      _this = this;

      this.getViews = () => {
        const views = this.props.views;

        if (Array.isArray(views)) {
          return transform(views, (obj, name) => obj[name] = VIEWS[name], {});
        }

        if (typeof views === 'object') {
          return mapValues(views, (value, key) => {
            if (value === true) {
              return VIEWS[key];
            }

            return value;
          });
        }

        return VIEWS;
      };

      this.getView = () => {
        const views = this.getViews();
        return views[this.props.view];
      };

      this.getDrilldownView = date => {
        const _this$props = this.props,
              view = _this$props.view,
              drilldownView = _this$props.drilldownView,
              getDrilldownView = _this$props.getDrilldownView;
        if (!getDrilldownView) return drilldownView;
        return getDrilldownView(date, view, Object.keys(this.getViews()));
      };

      this.handleRangeChange = (date, viewComponent, view) => {
        let _this$props2 = this.props,
            onRangeChange = _this$props2.onRangeChange,
            localizer = _this$props2.localizer;

        if (onRangeChange) {
          if (viewComponent.range) {
            onRangeChange(viewComponent.range(date, {
              localizer
            }), view);
          } else {
            warning_1(true, 'onRangeChange prop not supported for this view');
          }
        }
      };

      this.handleNavigate = (action, newDate) => {
        let _this$props3 = this.props,
            view = _this$props3.view,
            date = _this$props3.date,
            getNow = _this$props3.getNow,
            onNavigate = _this$props3.onNavigate,
            props = _objectWithoutPropertiesLoose(_this$props3, ["view", "date", "getNow", "onNavigate"]);

        let ViewComponent = this.getView();
        let today = getNow();
        date = moveDate(ViewComponent, _extends({}, props, {
          action,
          date: newDate || date || today,
          today
        }));
        onNavigate(date, view, action);
        this.handleRangeChange(date, ViewComponent);
      };

      this.handleViewChange = view => {
        if (view !== this.props.view && isValidView(view, this.props)) {
          this.props.onView(view);
        }

        let views = this.getViews();
        this.handleRangeChange(this.props.date || this.props.getNow(), views[view], view);
      };

      this.handleSelectEvent = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        notify(_this.props.onSelectEvent, args);
      };

      this.handleDoubleClickEvent = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        notify(_this.props.onDoubleClickEvent, args);
      };

      this.handleSelectSlot = slotInfo => {
        notify(this.props.onSelectSlot, slotInfo);
      };

      this.handleDrillDown = (date, view) => {
        const onDrillDown = this.props.onDrillDown;

        if (onDrillDown) {
          onDrillDown(date, view, this.drilldownView);
          return;
        }

        if (view) this.handleViewChange(view);
        this.handleNavigate(navigate.DATE, date);
      };

      this.state = {
        context: this.getContext(this.props)
      };
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        context: this.getContext(nextProps)
      });
    }

    getContext(_ref2) {
      let startAccessor = _ref2.startAccessor,
          endAccessor = _ref2.endAccessor,
          allDayAccessor = _ref2.allDayAccessor,
          tooltipAccessor = _ref2.tooltipAccessor,
          titleAccessor = _ref2.titleAccessor,
          resourceAccessor = _ref2.resourceAccessor,
          resourceIdAccessor = _ref2.resourceIdAccessor,
          resourceTitleAccessor = _ref2.resourceTitleAccessor,
          eventPropGetter = _ref2.eventPropGetter,
          slotPropGetter = _ref2.slotPropGetter,
          dayPropGetter = _ref2.dayPropGetter,
          view = _ref2.view,
          views = _ref2.views,
          localizer = _ref2.localizer,
          culture = _ref2.culture,
          _ref2$messages = _ref2.messages,
          messages$1 = _ref2$messages === void 0 ? {} : _ref2$messages,
          _ref2$components = _ref2.components,
          components = _ref2$components === void 0 ? {} : _ref2$components,
          _ref2$formats = _ref2.formats,
          formats = _ref2$formats === void 0 ? {} : _ref2$formats;
      let names = viewNames$1(views);
      const msgs = messages(messages$1);
      return {
        viewNames: names,
        localizer: mergeWithDefaults(localizer, culture, formats, msgs),
        getters: {
          eventProp: function eventProp() {
            return eventPropGetter && eventPropGetter(...arguments) || {};
          },
          slotProp: function slotProp() {
            return slotPropGetter && slotPropGetter(...arguments) || {};
          },
          dayProp: function dayProp() {
            return dayPropGetter && dayPropGetter(...arguments) || {};
          }
        },
        components: defaults(components[view] || {}, omit(components, names), {
          eventWrapper: NoopWrapper,
          eventContainerWrapper: NoopWrapper,
          dateCellWrapper: NoopWrapper,
          weekWrapper: NoopWrapper,
          timeSlotWrapper: NoopWrapper
        }),
        accessors: {
          start: wrapAccessor(startAccessor),
          end: wrapAccessor(endAccessor),
          allDay: wrapAccessor(allDayAccessor),
          tooltip: wrapAccessor(tooltipAccessor),
          title: wrapAccessor(titleAccessor),
          resource: wrapAccessor(resourceAccessor),
          resourceId: wrapAccessor(resourceIdAccessor),
          resourceTitle: wrapAccessor(resourceTitleAccessor)
        }
      };
    }

    render() {
      let _this$props4 = this.props,
          view = _this$props4.view,
          toolbar = _this$props4.toolbar,
          events = _this$props4.events,
          style = _this$props4.style,
          className = _this$props4.className,
          elementProps = _this$props4.elementProps,
          current = _this$props4.date,
          getNow = _this$props4.getNow,
          length = _this$props4.length,
          showMultiDayTimes = _this$props4.showMultiDayTimes,
          onShowMore = _this$props4.onShowMore,
          _0 = _this$props4.components,
          _1 = _this$props4.formats,
          _2 = _this$props4.messages,
          _3 = _this$props4.culture,
          props = _objectWithoutPropertiesLoose(_this$props4, ["view", "toolbar", "events", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "components", "formats", "messages", "culture"]);

      current = current || getNow();
      let View = this.getView();
      const _this$state$context = this.state.context,
            accessors = _this$state$context.accessors,
            components = _this$state$context.components,
            getters = _this$state$context.getters,
            localizer = _this$state$context.localizer,
            viewNames = _this$state$context.viewNames;
      let CalToolbar = components.toolbar || Toolbar;
      const label = View.title(current, {
        localizer,
        length
      });
      return React__default.createElement("div", _extends({}, elementProps, {
        className: classnames(className, 'rbc-calendar', props.rtl && 'rbc-rtl'),
        style: style,
        __source: {
          fileName: _jsxFileName$m,
          lineNumber: 879
        },
        __self: this
      }), toolbar && React__default.createElement(CalToolbar, {
        date: current,
        view: view,
        views: viewNames,
        label: label,
        onView: this.handleViewChange,
        onNavigate: this.handleNavigate,
        localizer: localizer,
        __source: {
          fileName: _jsxFileName$m,
          lineNumber: 885
        },
        __self: this
      }), React__default.createElement(View, _extends({}, props, {
        events: events,
        date: current,
        getNow: getNow,
        length: length,
        localizer: localizer,
        getters: getters,
        components: components,
        accessors: accessors,
        showMultiDayTimes: showMultiDayTimes,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onDoubleClickEvent: this.handleDoubleClickEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore: onShowMore,
        __source: {
          fileName: _jsxFileName$m,
          lineNumber: 895
        },
        __self: this
      })));
    }
    /**
     *
     * @param date
     * @param viewComponent
     * @param {'month'|'week'|'work_week'|'day'|'agenda'} [view] - optional
     * parameter. It appears when range change on view changing. It could be handy
     * when you need to have both: range and view type at once, i.e. for manage rbc
     * state via url
     */


  }

  Calendar.defaultProps = {
    elementProps: {},
    popup: false,
    toolbar: true,
    view: views.MONTH,
    views: [views.MONTH, views.WEEK, views.DAY, views.AGENDA],
    step: 30,
    length: 30,
    drilldownView: views.DAY,
    titleAccessor: 'title',
    tooltipAccessor: 'title',
    allDayAccessor: 'allDay',
    startAccessor: 'start',
    endAccessor: 'end',
    resourceAccessor: 'resourceId',
    resourceIdAccessor: 'id',
    resourceTitleAccessor: 'title',
    longPressThreshold: 250,
    getNow: () => new Date()
  };
  Calendar.propTypes = {
    localizer: propTypes.object.isRequired,

    /**
     * Props passed to main calendar `<div>`.
     *
     */
    elementProps: propTypes.object,

    /**
     * The current date value of the calendar. Determines the visible view range.
     * If `date` is omitted then the result of `getNow` is used; otherwise the
     * current date is used.
     *
     * @controllable onNavigate
     */
    date: propTypes.instanceOf(Date),

    /**
     * The current view of the calendar.
     *
     * @default 'month'
     * @controllable onView
     */
    view: propTypes.string,

    /**
     * The initial view set for the Calendar.
     * @type Calendar.Views ('month'|'week'|'work_week'|'day'|'agenda')
     * @default 'month'
     */
    defaultView: propTypes.string,

    /**
     * An array of event objects to display on the calendar. Events objects
     * can be any shape, as long as the Calendar knows how to retrieve the
     * following details of the event:
     *
     *  - start time
     *  - end time
     *  - title
     *  - whether its an "all day" event or not
     *  - any resource the event may be related to
     *
     * Each of these properties can be customized or generated dynamically by
     * setting the various "accessor" props. Without any configuration the default
     * event should look like:
     *
     * ```js
     * Event {
     *   title: string,
     *   start: Date,
     *   end: Date,
     *   allDay?: boolean
     *   resource?: any,
     * }
     * ```
     */
    events: propTypes.arrayOf(propTypes.object),

    /**
     * Accessor for the event title, used to display event information. Should
     * resolve to a `renderable` value.
     *
     * ```js
     * string | (event: Object) => string
     * ```
     *
     * @type {(func|string)}
     */
    titleAccessor: accessor,

    /**
     * Accessor for the event tooltip. Should
     * resolve to a `renderable` value. Removes the tooltip if null.
     *
     * ```js
     * string | (event: Object) => string
     * ```
     *
     * @type {(func|string)}
     */
    tooltipAccessor: accessor,

    /**
     * Determines whether the event should be considered an "all day" event and ignore time.
     * Must resolve to a `boolean` value.
     *
     * ```js
     * string | (event: Object) => boolean
     * ```
     *
     * @type {(func|string)}
     */
    allDayAccessor: accessor,

    /**
     * The start date/time of the event. Must resolve to a JavaScript `Date` object.
     *
     * ```js
     * string | (event: Object) => Date
     * ```
     *
     * @type {(func|string)}
     */
    startAccessor: accessor,

    /**
     * The end date/time of the event. Must resolve to a JavaScript `Date` object.
     *
     * ```js
     * string | (event: Object) => Date
     * ```
     *
     * @type {(func|string)}
     */
    endAccessor: accessor,

    /**
     * Returns the id of the `resource` that the event is a member of. This
     * id should match at least one resource in the `resources` array.
     *
     * ```js
     * string | (event: Object) => Date
     * ```
     *
     * @type {(func|string)}
     */
    resourceAccessor: accessor,

    /**
     * An array of resource objects that map events to a specific resource.
     * Resource objects, like events, can be any shape or have any properties,
     * but should be uniquly identifiable via the `resourceIdAccessor`, as
     * well as a "title" or name as provided by the `resourceTitleAccessor` prop.
     */
    resources: propTypes.arrayOf(propTypes.object),

    /**
     * Provides a unique identifier for each resource in the `resources` array
     *
     * ```js
     * string | (resource: Object) => any
     * ```
     *
     * @type {(func|string)}
     */
    resourceIdAccessor: accessor,

    /**
     * Provides a human readable name for the resource object, used in headers.
     *
     * ```js
     * string | (resource: Object) => any
     * ```
     *
     * @type {(func|string)}
     */
    resourceTitleAccessor: accessor,

    /**
     * Determines the current date/time which is highlighted in the views.
     *
     * The value affects which day is shaded and which time is shown as
     * the current time. It also affects the date used by the Today button in
     * the toolbar.
     *
     * Providing a value here can be useful when you are implementing time zones
     * using the `startAccessor` and `endAccessor` properties.
     *
     * @type {func}
     * @default () => new Date()
     */
    getNow: propTypes.func,

    /**
     * Callback fired when the `date` value changes.
     *
     * @controllable date
     */
    onNavigate: propTypes.func,

    /**
     * Callback fired when the `view` value changes.
     *
     * @controllable view
     */
    onView: propTypes.func,

    /**
     * Callback fired when date header, or the truncated events links are clicked
     *
     */
    onDrillDown: propTypes.func,

    /**
     *
     * ```js
     * (dates: Date[] | { start: Date; end: Date }, view?: 'month'|'week'|'work_week'|'day'|'agenda') => void
     * ```
     *
     * Callback fired when the visible date range changes. Returns an Array of dates
     * or an object with start and end dates for BUILTIN views. Optionally new `view`
     * will be returned when callback called after view change.
     *
     * Custom views may return something different.
     */
    onRangeChange: propTypes.func,

    /**
     * A callback fired when a date selection is made. Only fires when `selectable` is `true`.
     *
     * ```js
     * (
     *   slotInfo: {
     *     start: Date,
     *     end: Date,
     *     slots: Array<Date>,
     *     action: "select" | "click" | "doubleClick",
     *     bounds: ?{ // For "select" action
     *       x: number,
     *       y: number,
     *       top: number,
     *       right: number,
     *       left: number,
     *       bottom: number,
     *     },
     *     box: ?{ // For "click" or "doubleClick" actions
     *       clientX: number,
     *       clientY: number,
     *       x: number,
     *       y: number,
     *     },
     *   }
     * ) => any
     * ```
     */
    onSelectSlot: propTypes.func,

    /**
     * Callback fired when a calendar event is selected.
     *
     * ```js
     * (event: Object, e: SyntheticEvent) => any
     * ```
     *
     * @controllable selected
     */
    onSelectEvent: propTypes.func,

    /**
     * Callback fired when a calendar event is clicked twice.
     *
     * ```js
     * (event: Object, e: SyntheticEvent) => void
     * ```
     */
    onDoubleClickEvent: propTypes.func,

    /**
     * Callback fired when dragging a selection in the Time views.
     *
     * Returning `false` from the handler will prevent a selection.
     *
     * ```js
     * (range: { start: Date, end: Date }) => ?boolean
     * ```
     */
    onSelecting: propTypes.func,

    /**
     * Callback fired when a +{count} more is clicked
     *
     * ```js
     * (events: Object, date: Date) => any
     * ```
     */
    onShowMore: propTypes.func,

    /**
     * The selected event, if any.
     */
    selected: propTypes.object,

    /**
     * An array of built-in view names to allow the calendar to display.
     * accepts either an array of builtin view names,
     *
     * ```jsx
     * views={['month', 'day', 'agenda']}
     * ```
     * or an object hash of the view name and the component (or boolean for builtin).
     *
     * ```jsx
     * views={{
     *   month: true,
     *   week: false,
     *   myweek: WorkWeekViewComponent,
     * }}
     * ```
     *
     * Custom views can be any React component, that implements the following
     * interface:
     *
     * ```js
     * interface View {
     *   static title(date: Date, { formats: DateFormat[], culture: string?, ...props }): string
     *   static navigate(date: Date, action: 'PREV' | 'NEXT' | 'DATE'): Date
     * }
     * ```
     *
     * @type Views ('month'|'week'|'work_week'|'day'|'agenda')
     * @View
     ['month', 'week', 'day', 'agenda']
     */
    views: views$1,

    /**
     * The string name of the destination view for drill-down actions, such
     * as clicking a date header, or the truncated events links. If
     * `getDrilldownView` is also specified it will be used instead.
     *
     * Set to `null` to disable drill-down actions.
     *
     * ```js
     * <Calendar
     *   drilldownView="agenda"
     * />
     * ```
     */
    drilldownView: propTypes.string,

    /**
     * Functionally equivalent to `drilldownView`, but accepts a function
     * that can return a view name. It's useful for customizing the drill-down
     * actions depending on the target date and triggering view.
     *
     * Return `null` to disable drill-down actions.
     *
     * ```js
     * <Calendar
     *   getDrilldownView={(targetDate, currentViewName, configuredViewNames) =>
     *     if (currentViewName === 'month' && configuredViewNames.includes('week'))
     *       return 'week'
     *
     *     return null;
     *   }}
     * />
     * ```
     */
    getDrilldownView: propTypes.func,

    /**
     * Determines the end date from date prop in the agenda view
     * date prop + length (in number of days) = end date
     */
    length: propTypes.number,

    /**
     * Determines whether the toolbar is displayed
     */
    toolbar: propTypes.bool,

    /**
     * Show truncated events in an overlay when you click the "+_x_ more" link.
     */
    popup: propTypes.bool,

    /**
     * Distance in pixels, from the edges of the viewport, the "show more" overlay should be positioned.
     *
     * ```jsx
     * <Calendar popupOffset={30}/>
     * <Calendar popupOffset={{x: 30, y: 20}}/>
     * ```
     */
    popupOffset: propTypes.oneOfType([propTypes.number, propTypes.shape({
      x: propTypes.number,
      y: propTypes.number
    })]),

    /**
     * Allows mouse selection of ranges of dates/times.
     *
     * The 'ignoreEvents' option prevents selection code from running when a
     * drag begins over an event. Useful when you want custom event click or drag
     * logic
     */
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),

    /**
     * Specifies the number of miliseconds the user must press and hold on the screen for a touch
     * to be considered a "long press." Long presses are used for time slot selection on touch
     * devices.
     *
     * @type {number}
     * @default 250
     */
    longPressThreshold: propTypes.number,

    /**
     * Determines the selectable time increments in week and day views
     */
    step: propTypes.number,

    /**
     * The number of slots per "section" in the time grid views. Adjust with `step`
     * to change the default of 1 hour long groups, with 30 minute slots.
     */
    timeslots: propTypes.number,

    /**
     *Switch the calendar to a `right-to-left` read direction.
     */
    rtl: propTypes.bool,

    /**
     * Optionally provide a function that returns an object of className or style props
     * to be applied to the the event node.
     *
     * ```js
     * (
     * 	event: Object,
     * 	start: Date,
     * 	end: Date,
     * 	isSelected: boolean
     * ) => { className?: string, style?: Object }
     * ```
     */
    eventPropGetter: propTypes.func,

    /**
     * Optionally provide a function that returns an object of className or style props
     * to be applied to the the time-slot node. Caution! Styles that change layout or
     * position may break the calendar in unexpected ways.
     *
     * ```js
     * (date: Date, resourceId: (number|string)) => { className?: string, style?: Object }
     * ```
     */
    slotPropGetter: propTypes.func,

    /**
     * Optionally provide a function that returns an object of className or style props
     * to be applied to the the day background. Caution! Styles that change layout or
     * position may break the calendar in unexpected ways.
     *
     * ```js
     * (date: Date) => { className?: string, style?: Object }
     * ```
     */
    dayPropGetter: propTypes.func,

    /**
     * Support to show multi-day events with specific start and end times in the
     * main time grid (rather than in the all day header).
     *
     * **Note: This may cause calendars with several events to look very busy in
     * the week and day views.**
     */
    showMultiDayTimes: propTypes.bool,

    /**
     * Constrains the minimum _time_ of the Day and Week views.
     */
    min: propTypes.instanceOf(Date),

    /**
     * Constrains the maximum _time_ of the Day and Week views.
     */
    max: propTypes.instanceOf(Date),

    /**
     * Determines how far down the scroll pane is initially scrolled down.
     */
    scrollToTime: propTypes.instanceOf(Date),

    /**
     * Specify a specific culture code for the Calendar.
     *
     * **Note: it's generally better to handle this globally via your i18n library.**
     */
    culture: propTypes.string,

    /**
     * Localizer specific formats, tell the Calendar how to format and display dates.
     *
     * `format` types are dependent on the configured localizer; both Moment and Globalize
     * accept strings of tokens according to their own specification, such as: `'DD mm yyyy'`.
     *
     * ```jsx
     * let formats = {
     *   dateFormat: 'dd',
     *
     *   dayFormat: (date, , localizer) =>
     *     localizer.format(date, 'DDD', culture),
     *
     *   dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
     *     localizer.format(start, { date: 'short' }, culture) + ' – ' +
     *     localizer.format(end, { date: 'short' }, culture)
     * }
     *
     * <Calendar formats={formats} />
     * ```
     *
     * All localizers accept a function of
     * the form `(date: Date, culture: ?string, localizer: Localizer) -> string`
     */
    formats: propTypes.shape({
      /**
       * Format for the day of the month heading in the Month view.
       * e.g. "01", "02", "03", etc
       */
      dateFormat,

      /**
       * A day of the week format for Week and Day headings,
       * e.g. "Wed 01/04"
       *
       */
      dayFormat: dateFormat,

      /**
       * Week day name format for the Month week day headings,
       * e.g: "Sun", "Mon", "Tue", etc
       *
       */
      weekdayFormat: dateFormat,

      /**
       * The timestamp cell formats in Week and Time views, e.g. "4:00 AM"
       */
      timeGutterFormat: dateFormat,

      /**
       * Toolbar header format for the Month view, e.g "2015 April"
       *
       */
      monthHeaderFormat: dateFormat,

      /**
       * Toolbar header format for the Week views, e.g. "Mar 29 - Apr 04"
       */
      dayRangeHeaderFormat: dateRangeFormat,

      /**
       * Toolbar header format for the Day view, e.g. "Wednesday Apr 01"
       */
      dayHeaderFormat: dateFormat,

      /**
       * Toolbar header format for the Agenda view, e.g. "4/1/2015 – 5/1/2015"
       */
      agendaHeaderFormat: dateRangeFormat,

      /**
       * A time range format for selecting time slots, e.g "8:00am – 2:00pm"
       */
      selectRangeFormat: dateRangeFormat,
      agendaDateFormat: dateFormat,
      agendaTimeFormat: dateFormat,
      agendaTimeRangeFormat: dateRangeFormat,

      /**
       * Time range displayed on events.
       */
      eventTimeRangeFormat: dateRangeFormat,

      /**
       * An optional event time range for events that continue onto another day
       */
      eventTimeRangeStartFormat: dateFormat,

      /**
       * An optional event time range for events that continue from another day
       */
      eventTimeRangeEndFormat: dateFormat
    }),

    /**
     * Customize how different sections of the calendar render by providing custom Components.
     * In particular the `Event` component can be specified for the entire calendar, or you can
     * provide an individual component for each view type.
     *
     * ```jsx
     * let components = {
     *   event: MyEvent, // used by each view (Month, Day, Week)
     *   eventWrapper: MyEventWrapper,
     *   eventContainerWrapper: MyEventContainerWrapper,
     *   dateCellWrapper: MyDateCellWrapper,
     *   timeSlotWrapper: MyTimeSlotWrapper,
     *   timeGutterHeader: MyTimeGutterWrapper,
     *   toolbar: MyToolbar,
     *   agenda: {
     *   	 event: MyAgendaEvent // with the agenda view use a different component to render events
     *     time: MyAgendaTime,
     *     date: MyAgendaDate,
     *   },
     *   day: {
     *     header: MyDayHeader,
     *     event: MyDayEvent,
     *   },
     *   week: {
     *     header: MyWeekHeader,
     *     event: MyWeekEvent,
     *   },
     *   month: {
     *     header: MyMonthHeader,
     *     dateHeader: MyMonthDateHeader,
     *     event: MyMonthEvent,
     *   }
     * }
     * <Calendar components={components} />
     * ```
     */
    components: propTypes.shape({
      event: propTypes.elementType,
      eventWrapper: propTypes.elementType,
      eventContainerWrapper: propTypes.elementType,
      dateCellWrapper: propTypes.elementType,
      timeSlotWrapper: propTypes.elementType,
      timeGutterHeader: propTypes.elementType,
      resourceHeader: propTypes.elementType,
      toolbar: propTypes.elementType,
      agenda: propTypes.shape({
        date: propTypes.elementType,
        time: propTypes.elementType,
        event: propTypes.elementType
      }),
      day: propTypes.shape({
        header: propTypes.elementType,
        event: propTypes.elementType
      }),
      week: propTypes.shape({
        header: propTypes.elementType,
        event: propTypes.elementType
      }),
      month: propTypes.shape({
        header: propTypes.elementType,
        dateHeader: propTypes.elementType,
        event: propTypes.elementType
      })
    }),

    /**
     * String messages used throughout the component, override to provide localizations
     */
    messages: propTypes.shape({
      allDay: propTypes.node,
      previous: propTypes.node,
      next: propTypes.node,
      today: propTypes.node,
      month: propTypes.node,
      week: propTypes.node,
      day: propTypes.node,
      agenda: propTypes.node,
      date: propTypes.node,
      time: propTypes.node,
      event: propTypes.node,
      noEventsInRange: propTypes.node,
      showMore: propTypes.func
    })
  };
  var Calendar$1 = uncontrollable(Calendar, {
    view: 'onView',
    date: 'onNavigate',
    selected: 'onSelectEvent'
  });

  let dateRangeFormat$1 = (_ref, culture, local) => {
    let start = _ref.start,
        end = _ref.end;
    return local.format(start, 'L', culture) + ' – ' + local.format(end, 'L', culture);
  };

  let timeRangeFormat = (_ref2, culture, local) => {
    let start = _ref2.start,
        end = _ref2.end;
    return local.format(start, 'LT', culture) + ' – ' + local.format(end, 'LT', culture);
  };

  let timeRangeStartFormat = (_ref3, culture, local) => {
    let start = _ref3.start;
    return local.format(start, 'LT', culture) + ' – ';
  };

  let timeRangeEndFormat = (_ref4, culture, local) => {
    let end = _ref4.end;
    return ' – ' + local.format(end, 'LT', culture);
  };

  let weekRangeFormat = (_ref5, culture, local) => {
    let start = _ref5.start,
        end = _ref5.end;
    return local.format(start, 'MMMM DD', culture) + ' – ' + local.format(end, eq(start, end, 'month') ? 'DD' : 'MMMM DD', culture);
  };

  let formats = {
    dateFormat: 'DD',
    dayFormat: 'DD ddd',
    weekdayFormat: 'ddd',
    selectRangeFormat: timeRangeFormat,
    eventTimeRangeFormat: timeRangeFormat,
    eventTimeRangeStartFormat: timeRangeStartFormat,
    eventTimeRangeEndFormat: timeRangeEndFormat,
    timeGutterFormat: 'LT',
    monthHeaderFormat: 'MMMM YYYY',
    dayHeaderFormat: 'dddd MMM DD',
    dayRangeHeaderFormat: weekRangeFormat,
    agendaHeaderFormat: dateRangeFormat$1,
    agendaDateFormat: 'ddd MMM DD',
    agendaTimeFormat: 'LT',
    agendaTimeRangeFormat: timeRangeFormat
  };
  function moment (moment) {
    let locale = (m, c) => c ? m.locale(c) : m;

    return new DateLocalizer({
      formats,

      firstOfWeek(culture) {
        let data = culture ? moment.localeData(culture) : moment.localeData();
        return data ? data.firstDayOfWeek() : 0;
      },

      format(value, format, culture) {
        return locale(moment(value), culture).format(format);
      }

    });
  }

  let dateRangeFormat$2 = (_ref, culture, local) => {
    let start = _ref.start,
        end = _ref.end;
    return local.format(start, 'd', culture) + ' – ' + local.format(end, 'd', culture);
  };

  let timeRangeFormat$1 = (_ref2, culture, local) => {
    let start = _ref2.start,
        end = _ref2.end;
    return local.format(start, 't', culture) + ' – ' + local.format(end, 't', culture);
  };

  let timeRangeStartFormat$1 = (_ref3, culture, local) => {
    let start = _ref3.start;
    return local.format(start, 't', culture) + ' – ';
  };

  let timeRangeEndFormat$1 = (_ref4, culture, local) => {
    let end = _ref4.end;
    return ' – ' + local.format(end, 't', culture);
  };

  let weekRangeFormat$1 = (_ref5, culture, local) => {
    let start = _ref5.start,
        end = _ref5.end;
    return local.format(start, 'MMM dd', culture) + ' – ' + local.format(end, eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
  };

  let formats$1 = {
    dateFormat: 'dd',
    dayFormat: 'ddd dd/MM',
    weekdayFormat: 'ddd',
    selectRangeFormat: timeRangeFormat$1,
    eventTimeRangeFormat: timeRangeFormat$1,
    eventTimeRangeStartFormat: timeRangeStartFormat$1,
    eventTimeRangeEndFormat: timeRangeEndFormat$1,
    timeGutterFormat: 't',
    monthHeaderFormat: 'Y',
    dayHeaderFormat: 'dddd MMM dd',
    dayRangeHeaderFormat: weekRangeFormat$1,
    agendaHeaderFormat: dateRangeFormat$2,
    agendaDateFormat: 'ddd MMM dd',
    agendaTimeFormat: 't',
    agendaTimeRangeFormat: timeRangeFormat$1
  };
  function oldGlobalize (globalize) {
    function getCulture(culture) {
      return culture ? globalize.findClosestCulture(culture) : globalize.culture();
    }

    function firstOfWeek(culture) {
      culture = getCulture(culture);
      return culture && culture.calendar.firstDay || 0;
    }

    return new DateLocalizer({
      firstOfWeek,
      formats: formats$1,

      format(value, format, culture) {
        return globalize.format(value, format, culture);
      }

    });
  }

  let dateRangeFormat$3 = (_ref, culture, local) => {
    let start = _ref.start,
        end = _ref.end;
    return local.format(start, {
      date: 'short'
    }, culture) + ' – ' + local.format(end, {
      date: 'short'
    }, culture);
  };

  let timeRangeFormat$2 = (_ref2, culture, local) => {
    let start = _ref2.start,
        end = _ref2.end;
    return local.format(start, {
      time: 'short'
    }, culture) + ' – ' + local.format(end, {
      time: 'short'
    }, culture);
  };

  let timeRangeStartFormat$2 = (_ref3, culture, local) => {
    let start = _ref3.start;
    return local.format(start, {
      time: 'short'
    }, culture) + ' – ';
  };

  let timeRangeEndFormat$2 = (_ref4, culture, local) => {
    let end = _ref4.end;
    return ' – ' + local.format(end, {
      time: 'short'
    }, culture);
  };

  let weekRangeFormat$2 = (_ref5, culture, local) => {
    let start = _ref5.start,
        end = _ref5.end;
    return local.format(start, 'MMM dd', culture) + ' – ' + local.format(end, eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
  };

  let formats$2 = {
    dateFormat: 'dd',
    dayFormat: 'eee dd/MM',
    weekdayFormat: 'eee',
    selectRangeFormat: timeRangeFormat$2,
    eventTimeRangeFormat: timeRangeFormat$2,
    eventTimeRangeStartFormat: timeRangeStartFormat$2,
    eventTimeRangeEndFormat: timeRangeEndFormat$2,
    timeGutterFormat: {
      time: 'short'
    },
    monthHeaderFormat: 'MMMM yyyy',
    dayHeaderFormat: 'eeee MMM dd',
    dayRangeHeaderFormat: weekRangeFormat$2,
    agendaHeaderFormat: dateRangeFormat$3,
    agendaDateFormat: 'eee MMM dd',
    agendaTimeFormat: {
      time: 'short'
    },
    agendaTimeRangeFormat: timeRangeFormat$2
  };
  function globalize (globalize) {
    let locale = culture => culture ? globalize(culture) : globalize; // return the first day of the week from the locale data. Defaults to 'world'
    // territory if no territory is derivable from CLDR.
    // Failing to use CLDR supplemental (not loaded?), revert to the original
    // method of getting first day of week.


    function firstOfWeek(culture) {
      try {
        const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        const cldr = locale(culture).cldr;
        const territory = cldr.attributes.territory;
        const weekData = cldr.get('supplemental').weekData;
        const firstDay = weekData.firstDay[territory || '001'];
        return days.indexOf(firstDay);
      } catch (e) {
        warning_1(true, "Failed to accurately determine first day of the week.\n            Is supplemental data loaded into CLDR?"); // maybe cldr supplemental is not loaded? revert to original method

        const date = new Date(); //cldr-data doesn't seem to be zero based

        let localeDay = Math.max(parseInt(locale(culture).formatDate(date, {
          raw: 'e'
        }), 10) - 1, 0);
        return Math.abs(date.getDay() - localeDay);
      }
    }

    if (!globalize.load) return oldGlobalize(globalize);
    return new DateLocalizer({
      firstOfWeek,
      formats: formats$2,

      format(value, format, culture) {
        format = typeof format === 'string' ? {
          raw: format
        } : format;
        return locale(culture).formatDate(value, format);
      }

    });
  }

  const components = {
    eventWrapper: NoopWrapper,
    timeSlotWrapper: NoopWrapper,
    dateCellWrapper: NoopWrapper
  };

  exports.Calendar = Calendar$1;
  exports.DateLocalizer = DateLocalizer;
  exports.Navigate = navigate;
  exports.Views = views;
  exports.components = components;
  exports.globalizeLocalizer = globalize;
  exports.momentLocalizer = moment;
  exports.move = moveDate;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
