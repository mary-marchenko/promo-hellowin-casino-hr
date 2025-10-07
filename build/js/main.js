"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var _Number;
  var apiURL = 'https://fav-prom.com/api_hellowin_hr';
  var getActiveWeek = function getActiveWeek(promoStartDate, weekDuration) {
    var currentDate = new Date();
    var weekDates = [];
    var Day = 24 * 60 * 60 * 1000;
    var Week = weekDuration * Day;
    var formatDate = function formatDate(date) {
      return "".concat(date.getDate().toString().padStart(2, "0"), ".").concat((date.getMonth() + 1).toString().padStart(2, "0"));
    };
    var calculateWeekPeriod = function calculateWeekPeriod(weekIndex) {
      var baseStart = promoStartDate.getTime();
      var start = new Date(baseStart + weekIndex * Week);
      var end = new Date(start.getTime() + (weekDuration * Day - 1));
      return {
        start: start,
        end: end
      };
    };
    var activeWeekIndex = null;

    // Перевірка поточного тижня
    for (var i = 0; i < 10; i++) {
      // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
      var _calculateWeekPeriod = calculateWeekPeriod(i),
        start = _calculateWeekPeriod.start,
        end = _calculateWeekPeriod.end;
      if (currentDate >= start && currentDate <= end) {
        activeWeekIndex = i + 1;
        break;
      }
    }
    console.log(activeWeekIndex);
    return activeWeekIndex;
  };
  var promoStartDate = new Date("2025-10-13T00:00:00");
  var weekDuration = 7;
  var isVerifiedUser = false;
  var periodAmount = 3; // кількість періодів в акції, треба для кешування інфи з табли

  var tableData = [];
  var activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;
  if (activeWeek > 3) activeWeek = 3;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.play-btn'),
    loader = document.querySelector(".spinner-overlay"),
    resultsTable = document.querySelector('#table'),
    resultsTableOther = document.querySelector('#tableOther'),
    tableTabs = document.querySelectorAll('.table__tabs-week');
  var hrLeng = document.querySelector('#hrLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var loaderBtn = false;

  // let locale = "en"
  var locale = sessionStorage.getItem("locale") || "hr";
  if (hrLeng) locale = 'hr';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;

  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth().then(loadUsers).then(function () {
                setTimeout(hideLoader, 300);
                document.querySelectorAll(".table__tabs-week").forEach(function (tab, i) {
                  tab.classList.remove('active');
                  if (i === activeWeek - 1) tab.classList.add('active');
                });
                renderUsers(activeWeek, tableData);
                participateBtns.forEach(function (btn) {
                  return btn.addEventListener('click', participate);
                });
                tableTabs.forEach(function (tab) {
                  if (Number(tab.getAttribute("data-week")) > activeWeek) {
                    tab.style.pointerEvents = "none";
                  } else {
                    tab.style.pointerEvents = "initial";
                  }
                });
                document.addEventListener("click", function (e) {
                  console.log("click");
                  console.log(activeWeek);
                  if (e.target.closest(".table__tabs-week")) {
                    if (e.target.closest(".table__tabs-week").classList.contains("active")) return;
                    if (Number(e.target.closest(".table__tabs-week").getAttribute("data-week")) > activeWeek) {
                      return;
                    }
                    e.target.closest(".table__tabs-week").style.pointerEvents = "initial";
                    tableTabs.forEach(function (tab) {
                      tab.classList.remove("active");
                    });
                    var tabWeek = e.target.closest(".table__tabs-week").getAttribute("data-week");
                    e.target.closest(".table__tabs-week").classList.add("active");
                    renderUsers(tabWeek, tableData);
                    console.log("clicked tab:", tabWeek);
                  }
                });
                showItemsOnScroll(".gide__block");
                showItemsOnScroll(".tournament__decor");
                document.querySelector('.button-earnPointsInfo').addEventListener('click', function () {
                  openPopupByAttr('earnPointsInfo');
                });
                document.querySelector('.button-table').addEventListener('click', function () {
                  openPopupByAttr('tableInfo');
                });
                document.querySelector('.gide__button').addEventListener('click', function () {
                  openPopupByAttr('gideInfo');
                });
                document.querySelector('.tournament__button').addEventListener('click', function () {
                  openPopupByAttr('rules');
                });
                document.querySelector('.popup-wrap').addEventListener('click', function (e) {
                  var openPopupEl = document.querySelector('.popup.active');
                  var isInside = openPopupEl ? openPopupEl.contains(e.target) : false;
                  if (openPopupEl && !isInside) {
                    closeAllPopups();
                  }
                });
                document.querySelectorAll('.popup__close').forEach(function (closeBtn) {
                  closeBtn.addEventListener('click', closeAllPopups);
                });
              });
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        mutationObserver.disconnect();
        translate();
        mutationObserver.observe(targetNode, {
          childList: true,
          subtree: true
        });
      });
      mutationObserver.observe(document.getElementById("hellowin"), {
        childList: true,
        subtree: true
      });
    });
  }
  function checkUserAuth() {
    console.log(userId);
    if (userId) {
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          isVerifiedUser = true;
          console.log(isVerifiedUser);
        } else {
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          isVerifiedUser = false;
        }
      });
    } else {
      var _iterator2 = _createForOfIteratorHelper(redirectBtns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var redirectBtn = _step2.value;
          redirectBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(participateBtns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var participateBtn = _step3.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(unauthMsgs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _unauthMes = _step4.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return Promise.resolve(false);
    }
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    if (locale === 'en') {
      mainPage.classList.add('en');
    }
    refreshLocalizedClass();
  }
  function refreshLocalizedClass(element, baseCssClass) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['hr', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  function renderUsers(weekNum, userData) {
    weekNum = Number(weekNum);
    userData = userData.find(function (week) {
      return week.week === weekNum;
    }).users;
    console.log(userData);
    var currentUser = userData.find(function (user) {
      return user.userid === userId;
    });
    console.log(userId);
    console.log(currentUser);
    console.log(isVerifiedUser);
    if (userId && !currentUser && isVerifiedUser) {
      userData = [].concat(_toConsumableArray(userData), [{
        userid: userId,
        points: 0
      }]);
      currentUser = userData.find(function (user) {
        return user.userid === userId;
      });
    }
    console.log(userData);
    populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser);
  }
  function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser) {
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var topUsers = users.slice(0, 20);
    var isTopCurrentUser = currentUser && users.slice(0, 8).some(function (user) {
      return user.userid === currentUserId;
    });

    // --- 1. Рендеримо топ-20 у resultsTable ---
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });

    // --- 2. Визначаємо клас withoutYou для resultsTable ---
    if (!currentUser || isTopCurrentUser) {
      resultsTable.classList.add('withoutYou');
      return; // якщо юзер не в таблиці, resultsTableOther не рендеримо
    } else {
      resultsTable.classList.remove('withoutYou');
    }

    // --- 3. Юзер не у топ-8 (поточний користувач місце ≥ 9) ---
    if (currentUser && !isTopCurrentUser) {
      // рендеримо currentUser і сусідів у resultsTableOther
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(Number(userData.points).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(translateKey('wager1'), "\n            </div>\n        ");
      table.append(userRow);
    };
    // if (isCurrentUser && !isTopCurrentUser) {
    //     const index = users.indexOf(user);
    //     if (index !== 10 && users[index - 1]) {
    //         renderRow(users[index - 1], { neighbor: true });
    //     }
    //     renderRow(user, { highlight: true });
    //     if (users[index + 1]) {
    //         renderRow(users[index + 1], { neighbor: true });
    //     }
    // } else {
    //     renderRow(user);
    // }

    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function getPrizeTranslationKey(place, week) {
    if (place <= 3) return "prize".concat(place);
    if (place <= 10) return "prize4";
    if (place <= 19) return "prize5";
    if (place === 20) return "prize6";
    if (place <= 29) return "prize7";
    if (place === 30) return "prize8";
    if (place <= 39) return "prize9";
    if (place === 40) return "prize10";
    if (place <= 49) return "prize11";
    if (place === 50) return "prize12";
    if (place <= 69) return "prize13";
    if (place === 70) return "prize14";
    if (place <= 89) return "prize15";
    if (place === 90) return "prize16";
    if (place <= 100) return "prize17";
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
        loadUsers("?nocache=1").then(function (res) {
          renderUsers(activeWeek, tableData);
        });
      }, 1000);
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  }
  function loadUsers(parametr) {
    var requests = [];
    tableData.length = 0;
    var _loop = function _loop() {
      var week = i; // або будь-яка логіка для формування номера тижня
      var req = request("/users/".concat(week).concat(parametr ? parametr : "")).then(function (data) {
        console.log(data);
        tableData.push({
          week: week,
          users: data
        });
      });
      requests.push(req);
    };
    for (var i = 1; i <= periodAmount; i++) {
      _loop();
    }
    return Promise.all(requests)["catch"](function (error) {
      console.error('Error loading users:', error);
    });
  }
  function showItemsOnScroll(itemClass) {
    var Blocks = document.querySelectorAll(itemClass);
    if (!Blocks.length) return;
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setTimeout(function () {
            var _entry$target$querySe, _entry$target$querySe2;
            (_entry$target$querySe = entry.target.querySelector(".gide__block-joker")) === null || _entry$target$querySe === void 0 ? void 0 : _entry$target$querySe.classList.add("showItem");
            (_entry$target$querySe2 = entry.target.querySelector(".gide__block-magician")) === null || _entry$target$querySe2 === void 0 ? void 0 : _entry$target$querySe2.classList.add("showItem");
            observer.unobserve(entry.target);
          }, 200);
          setTimeout(function () {
            var _entry$target$querySe3, _entry$target$querySe4;
            (_entry$target$querySe3 = entry.target.querySelector(".tournament__witchGirl")) === null || _entry$target$querySe3 === void 0 ? void 0 : _entry$target$querySe3.classList.add("showItem");
            (_entry$target$querySe4 = entry.target.querySelector(".tournament__ghostGirl")) === null || _entry$target$querySe4 === void 0 ? void 0 : _entry$target$querySe4.classList.add("showItem");
            observer.unobserve(entry.target);
          }, 600);
        }
      });
    }, {
      threshold: 0.3
    });
    Blocks.forEach(function (item) {
      return observer.observe(item);
    });
  }
  function openPopupByAttr(popupAttr) {
    var allPopups = document.querySelectorAll('.popup');
    allPopups.forEach(function (p) {
      return p.classList.remove('active');
    });
    document.body.style.overflow = 'hidden';
    var targetPopup = document.querySelector(".popup[data-popup=\"".concat(popupAttr, "\"]"));
    if (targetPopup) {
      targetPopup.classList.add('active');
      document.querySelector('.popup-wrap').classList.remove('opacity');
    }
  }
  function closeAllPopups() {
    var popupWrap = document.querySelector('.popup-wrap');
    var activePopup = document.querySelector('.popup.active');
    document.querySelectorAll('.popup').forEach(function (p) {
      return p.classList.remove('active');
    });
    popupWrap.classList.add('opacity');
    document.body.style.overflow = 'auto';
  }
  loadTranslations().then(init); // запуск ініту сторінки

  // TEST

  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
    });
  });
  document.querySelector('.dark-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  var betBtn = document.querySelector(".btn-bet-online");
  betBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "999");
    }
    window.location.reload();
  });
  authBtn.addEventListener("click", function () {
    unauthMsgs.forEach(function (item) {
      return item.classList.add('hide');
    });
    redirectBtns.forEach(function (item) {
      return item.classList.add('hide');
    });
    participateBtns.forEach(function (item) {
      return item.classList.remove('hide');
    });
  });
  document.querySelector('.btn-phase2').addEventListener('click', function () {
    var activeWeek = 2;
    renderUsers(activeWeek, tableData);
    document.querySelectorAll(".table__tabs-week").forEach(function (tab, i) {
      tab.classList.remove('active');
      if (i === activeWeek - 1) tab.classList.add('active');
    });
    tableTabs.forEach(function (tab) {
      if (Number(tab.getAttribute("data-week")) > activeWeek) {
        tab.style.pointerEvents = "none";
      } else {
        tab.style.pointerEvents = "initial";
      }
    });
    document.addEventListener("click", function (e) {
      if (e.target.closest(".table__tabs-week")) {
        if (Number(e.target.closest(".table__tabs-week").getAttribute("data-week")) > activeWeek) {
          return;
        }
        e.target.closest(".table__tabs-week").style.pointerEvents = "initial";
        tableTabs.forEach(function (tab) {
          tab.classList.remove("active");
        });
        var tabWeek = e.target.closest(".table__tabs-week").getAttribute("data-week");
        e.target.closest(".table__tabs-week").classList.add("active");
        renderUsers(tabWeek);
      }
    });
  });
  document.querySelector('.btn-phase3').addEventListener('click', function () {
    var activeWeek = 3;
    renderUsers(activeWeek, tableData);
    document.querySelectorAll(".table__tabs-week").forEach(function (tab, i) {
      tab.classList.remove('active');
      if (i === activeWeek - 1) tab.classList.add('active');
    });
    tableTabs.forEach(function (tab) {
      if (Number(tab.getAttribute("data-week")) > activeWeek) {
        tab.style.pointerEvents = "none";
      } else {
        tab.style.pointerEvents = "initial";
      }
    });
    document.addEventListener("click", function (e) {
      if (e.target.closest(".table__tabs-week")) {
        if (Number(e.target.closest(".table__tabs-week").getAttribute("data-week")) > activeWeek) {
          return;
        }
        e.target.closest(".table__tabs-week").style.pointerEvents = "initial";
        tableTabs.forEach(function (tab) {
          tab.classList.remove("active");
        });
        var tabWeek = e.target.closest(".table__tabs-week").getAttribute("data-week");
        e.target.closest(".table__tabs-week").classList.add("active");
        renderUsers(tabWeek);
      }
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiY29uc29sZSIsImxvZyIsImlzVmVyaWZpZWRVc2VyIiwicGVyaW9kQW1vdW50IiwidGFibGVEYXRhIiwiYWN0aXZlV2VlayIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInRhYmxlVGFicyIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwiUHJvbWlzZSIsInJlamVjdCIsImFkZCIsImJvZHkiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsImxvYWRVc2VycyIsInNldFRpbWVvdXQiLCJ0YWIiLCJyZW5kZXJVc2VycyIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNpcGF0ZSIsImdldEF0dHJpYnV0ZSIsInBvaW50ZXJFdmVudHMiLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImNvbnRhaW5zIiwidGFiV2VlayIsInNob3dJdGVtc09uU2Nyb2xsIiwib3BlblBvcHVwQnlBdHRyIiwib3BlblBvcHVwRWwiLCJpc0luc2lkZSIsImNsb3NlQWxsUG9wdXBzIiwiY2xvc2VCdG4iLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwidGFyZ2V0Tm9kZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJnZXRFbGVtZW50QnlJZCIsInVuYXV0aE1lcyIsInVzZXJpZCIsIml0ZW0iLCJyZWRpcmVjdEJ0biIsInBhcnRpY2lwYXRlQnRuIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJ3ZWVrTnVtIiwidXNlckRhdGEiLCJmaW5kIiwid2VlayIsInVzZXJzIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwicG9pbnRzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInRvcFVzZXJzIiwic2xpY2UiLCJpc1RvcEN1cnJlbnRVc2VyIiwic29tZSIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsInBhcmFtcyIsInBhcmFtZXRyIiwicmVxdWVzdHMiLCJyZXEiLCJkYXRhIiwicHVzaCIsImFsbCIsIml0ZW1DbGFzcyIsIkJsb2NrcyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwicG9wdXBBdHRyIiwiYWxsUG9wdXBzIiwicCIsInRhcmdldFBvcHVwIiwicG9wdXBXcmFwIiwiYWN0aXZlUG9wdXAiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJiZXRCdG4iXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFB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QUFPLENBQUM7TUFDeEI7SUFDSixDQUFDLENBQUM7RUFFTixDQUFDLENBQUM7QUFDTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2hlbGxvd2luX2hyJ1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlV2VlayA9IChwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHdlZWtEYXRlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IERheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IFdlZWsgPSB3ZWVrRHVyYXRpb24gKiBEYXk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PlxuICAgICAgICAgICAgYCR7ZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9LiR7KGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlV2Vla1BlcmlvZCA9ICh3ZWVrSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTdGFydCA9IHByb21vU3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYmFzZVN0YXJ0ICsgd2Vla0luZGV4ICogV2Vlayk7XG4gICAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgKHdlZWtEdXJhdGlvbiAqIERheSAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L/QvtGC0L7Rh9C90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vINCe0LHQvNC10LbRg9GU0LzQviAxMCDRgtC40LbQvdGP0LzQuCAo0Y/QutGJ0L4g0L/QvtGC0YDRltCx0L3QviDQsdGW0LvRjNGI0LUsINC/0YDQvtGB0YLQviDQt9C80ZbQvdGW0YLRjCDQu9GW0YfQuNC70YzQvdC40LopXG4gICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IGNhbGN1bGF0ZVdlZWtQZXJpb2QoaSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVXZWVrSW5kZXgpXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTEwLTEzVDAwOjAwOjAwXCIpO1xuICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDc7XG5cbiAgICBsZXQgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcblxuICAgIGxldCBwZXJpb2RBbW91bnQgPSAzIC8vINC60ZbQu9GM0LrRltGB0YLRjCDQv9C10YDRltC+0LTRltCyINCyINCw0LrRhtGW0ZcsINGC0YDQtdCx0LAg0LTQu9GPINC60LXRiNGD0LLQsNC90L3RjyDRltC90YTQuCDQtyDRgtCw0LHQu9C4XG5cbiAgICBsZXQgdGFibGVEYXRhID0gW11cbiAgICBsZXQgYWN0aXZlV2VlayA9IGdldEFjdGl2ZVdlZWsocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgfHwgMTtcblxuICAgIGlmIChhY3RpdmVXZWVrID4gMykgYWN0aXZlV2VlayA9IDNcblxuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5LWJ0bicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKSxcbiAgICAgICAgdGFibGVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190YWJzLXdlZWsnKVxuXG4gICAgY29uc3QgaHJMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hyTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIC8vIGxldCBsb2NhbGUgPSBcImVuXCJcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCJcblxuICAgIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuXG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAudGhlbihsb2FkVXNlcnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmZvckVhY2goKHRhYiwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSBhY3RpdmVXZWVrIC0gMSkgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpKTtcblxuICAgICAgICAgICAgICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihOdW1iZXIodGFiLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBhY3RpdmVXZWVrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVdlZWspXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihOdW1iZXIoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBhY3RpdmVXZWVrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFiV2VlayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaywgdGFibGVEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCB0YWI6XCIsIHRhYldlZWspO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHNob3dJdGVtc09uU2Nyb2xsKFwiLmdpZGVfX2Jsb2NrXCIpXG4gICAgICAgICAgICAgICAgICAgIHNob3dJdGVtc09uU2Nyb2xsKFwiLnRvdXJuYW1lbnRfX2RlY29yXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1lYXJuUG9pbnRzSW5mbycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKCdlYXJuUG9pbnRzSW5mbycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXRhYmxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIoJ3RhYmxlSW5mbycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2lkZV9fYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIoJ2dpZGVJbmZvJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3VybmFtZW50X19idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cigncnVsZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdyYXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVuUG9wdXBFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5zaWRlID0gb3BlblBvcHVwRWwgPyBvcGVuUG9wdXBFbC5jb250YWlucyhlLnRhcmdldCkgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuUG9wdXBFbCAmJiAhaXNJbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2Nsb3NlJykuZm9yRWFjaChjbG9zZUJ0biA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWxsUG9wdXBzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxsb3dpblwiKSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXNWZXJpZmllZFVzZXIpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlZGlyZWN0QnRuIG9mIHJlZGlyZWN0QnRucykge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWtOdW0sIHVzZXJEYXRhKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIHVzZXJEYXRhID0gdXNlckRhdGEuZmluZCh3ZWVrID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrLndlZWsgPT09IHdlZWtOdW1cbiAgICAgICAgfSkudXNlcnM7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIGxldCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgICAgICBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcblxuICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWssIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlcikge1xuXG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgMjApO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgOCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICAvLyAtLS0gMS4g0KDQtdC90LTQtdGA0LjQvNC+INGC0L7Qvy0yMCDRgyByZXN1bHRzVGFibGUgLS0tXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0tLSAyLiDQktC40LfQvdCw0YfQsNGU0LzQviDQutC70LDRgSB3aXRob3V0WW91INC00LvRjyByZXN1bHRzVGFibGUgLS0tXG4gICAgICAgIGlmICghY3VycmVudFVzZXIgfHwgaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgcmVzdWx0c1RhYmxlLmNsYXNzTGlzdC5hZGQoJ3dpdGhvdXRZb3UnKTtcbiAgICAgICAgICAgIHJldHVybjsgLy8g0Y/QutGJ0L4g0Y7Qt9C10YAg0L3QtSDQsiDRgtCw0LHQu9C40YbRliwgcmVzdWx0c1RhYmxlT3RoZXIg0L3QtSDRgNC10L3QtNC10YDQuNC80L5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdHNUYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCd3aXRob3V0WW91Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0gMy4g0K7Qt9C10YAg0L3QtSDRgyDRgtC+0L8tOCAo0L/QvtGC0L7Rh9C90LjQuSDQutC+0YDQuNGB0YLRg9Cy0LDRhyDQvNGW0YHRhtC1IOKJpSA5KSAtLS1cbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICAvLyDRgNC10L3QtNC10YDQuNC80L4gY3VycmVudFVzZXIg0ZYg0YHRg9GB0ZbQtNGW0LIg0YMgcmVzdWx0c1RhYmxlT3RoZXJcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dHJhbnNsYXRlS2V5KCd3YWdlcjEnKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgIC8vICAgICBpZiAoaW5kZXggIT09IDEwICYmIHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgLy8gICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgLy8gICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgIC8vICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplNGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxOSkgcmV0dXJuIGBwcml6ZTVgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDIwKSByZXR1cm4gYHByaXplNmA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyOSkgcmV0dXJuIGBwcml6ZTdgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDMwKSByZXR1cm4gYHByaXplOGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzOSkgcmV0dXJuIGBwcml6ZTlgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDQwKSByZXR1cm4gYHByaXplMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNDkpIHJldHVybiBgcHJpemUxMWA7XG4gICAgICAgIGlmIChwbGFjZSA9PT0gNTApIHJldHVybiBgcHJpemUxMmA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA2OSkgcmV0dXJuIGBwcml6ZTEzYDtcbiAgICAgICAgaWYgKHBsYWNlID09PSA3MCkgcmV0dXJuIGBwcml6ZTE0YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDg5KSByZXR1cm4gYHByaXplMTVgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDkwKSByZXR1cm4gYHByaXplMTZgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplMTdgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgICAgICBsb2FkVXNlcnMoXCI/bm9jYWNoZT0xXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRVc2VycyhwYXJhbWV0cikge1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICB0YWJsZURhdGEubGVuZ3RoID0gMFxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBlcmlvZEFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gaTsgLy8g0LDQsdC+INCx0YPQtNGMLdGP0LrQsCDQu9C+0LPRltC60LAg0LTQu9GPINGE0L7RgNC80YPQstCw0L3QvdGPINC90L7QvNC10YDQsCDRgtC40LbQvdGPXG4gICAgICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfSR7cGFyYW1ldHIgPyBwYXJhbWV0ciA6IFwiXCJ9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0YWJsZURhdGEucHVzaCh7IHdlZWssIHVzZXJzOiBkYXRhIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2gocmVxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdXNlcnM6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SXRlbXNPblNjcm9sbChpdGVtQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpdGVtQ2xhc3MpO1xuICAgICAgICBpZiAoIUJsb2Nrcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIGVudHJ5LmludGVyc2VjdGlvblJhdGlvID49IDAuMykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmdpZGVfX2Jsb2NrLWpva2VyXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmdpZGVfX2Jsb2NrLW1hZ2ljaWFuXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRvdXJuYW1lbnRfX3dpdGNoR2lybFwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi50b3VybmFtZW50X19naG9zdEdpcmxcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRocmVzaG9sZDogMC4zXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEJsb2Nrcy5mb3JFYWNoKGl0ZW0gPT4gb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0cikge1xuICAgICAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICAgICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxQb3B1cHMoKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLmFjdGl2ZScpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgcG9wdXBXcmFwLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCkgLy8g0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG5cbiAgICAvLyBURVNUXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICBjb25zdCBiZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iZXQtb25saW5lXCIpXG5cbiAgICBiZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI5OTlcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICB1bmF1dGhNc2dzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGhhc2UyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFjdGl2ZVdlZWsgPSAyXG4gICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5mb3JFYWNoKCh0YWIsIGkpID0+e1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYoaSA9PT0gYWN0aXZlV2VlayAtIDEpIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgaWYoTnVtYmVyKHRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpID4gYWN0aXZlV2Vlayl7XG4gICAgICAgICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikpe1xuICAgICAgICAgICAgICAgIGlmKE51bWJlcihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKSA+IGFjdGl2ZVdlZWspIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxldCB0YWJXZWVrID0gZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICByZW5kZXJVc2Vycyh0YWJXZWVrKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBoYXNlMycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhY3RpdmVXZWVrID0gM1xuICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLXdlZWtcIikuZm9yRWFjaCgodGFiLCBpKSA9PntcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmKGkgPT09IGFjdGl2ZVdlZWsgLSAxKSB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgIGlmKE51bWJlcih0YWIuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKSA+IGFjdGl2ZVdlZWspe1xuICAgICAgICAgICAgICAgIHRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0YWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpKXtcbiAgICAgICAgICAgICAgICBpZihOdW1iZXIoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBhY3RpdmVXZWVrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsZXQgdGFiV2VlayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIik7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH0pO1xufSkoKTtcblxuXG4iXX0=
