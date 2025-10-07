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
                showGamesByDate(activeWeek);
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
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (!currentUser || isTopCurrentUser) {
      resultsTable.classList.add('withoutYou');
      return; // якщо юзер не в таблиці, resultsTableOther не рендеримо
    } else {
      resultsTable.classList.remove('withoutYou');
    }

    // Юзер не у топ-8 (місце ≥ 9)
    if (currentUser && !isTopCurrentUser) {
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
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(Number(userData.points).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
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
  function showGamesByDate(activeWeekIndex) {
    var allGamesLists = document.querySelectorAll('.games__list');
    allGamesLists.forEach(function (list) {
      return list.classList.remove('active');
    });
    var targetList = document.querySelector(".games__list.week".concat(activeWeekIndex));
    if (targetList) {
      targetList.classList.add('active');
    }
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
  var btnGames2 = document.querySelector(".btn-games2");
  btnGames2.addEventListener("click", function () {
    var activeWeekIndex = 2;
    showGamesByDate(2);
  });
  var btnGames3 = document.querySelector(".btn-games3");
  btnGames3.addEventListener("click", function () {
    var activeWeekIndex = 3;
    showGamesByDate(3);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiY29uc29sZSIsImxvZyIsImlzVmVyaWZpZWRVc2VyIiwicGVyaW9kQW1vdW50IiwidGFibGVEYXRhIiwiYWN0aXZlV2VlayIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInRhYmxlVGFicyIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwiUHJvbWlzZSIsInJlamVjdCIsImFkZCIsImJvZHkiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsImxvYWRVc2VycyIsInNldFRpbWVvdXQiLCJ0YWIiLCJyZW5kZXJVc2VycyIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNpcGF0ZSIsImdldEF0dHJpYnV0ZSIsInBvaW50ZXJFdmVudHMiLCJzaG93R2FtZXNCeURhdGUiLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImNvbnRhaW5zIiwidGFiV2VlayIsInNob3dJdGVtc09uU2Nyb2xsIiwib3BlblBvcHVwQnlBdHRyIiwib3BlblBvcHVwRWwiLCJpc0luc2lkZSIsImNsb3NlQWxsUG9wdXBzIiwiY2xvc2VCdG4iLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwidGFyZ2V0Tm9kZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJnZXRFbGVtZW50QnlJZCIsInVuYXV0aE1lcyIsInVzZXJpZCIsIml0ZW0iLCJyZWRpcmVjdEJ0biIsInBhcnRpY2lwYXRlQnRuIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJ3ZWVrTnVtIiwidXNlckRhdGEiLCJmaW5kIiwid2VlayIsInVzZXJzIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwicG9pbnRzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInRvcFVzZXJzIiwic2xpY2UiLCJpc1RvcEN1cnJlbnRVc2VyIiwic29tZSIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsInBhcmFtcyIsInBhcmFtZXRyIiwicmVxdWVzdHMiLCJyZXEiLCJkYXRhIiwicHVzaCIsImFsbCIsIml0ZW1DbGFzcyIsIkJsb2NrcyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwicG9wdXBBdHRyIiwiYWxsUG9wdXBzIiwicCIsInRhcmdldFBvcHVwIiwicG9wdXBXcmFwIiwiYWN0aXZlUG9wdXAiLCJhbGxHYW1lc0xpc3RzIiwibGlzdCIsInRhcmdldExpc3QiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIs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TixHQUFHLENBQUNsQixLQUFLLENBQUN3QixhQUFhLEdBQUcsU0FBUztNQUN2QztJQUVKLENBQUMsQ0FBQztJQUNGdkUsUUFBUSxDQUFDb0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUFLLENBQUMsRUFBRztNQUNuQyxJQUFHQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQUM7UUFDckMsSUFBRzFDLE1BQU0sQ0FBQ3dDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0wsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUd4RSxVQUFVLEVBQUU7VUFDckY7UUFDSjtRQUNBMkUsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDNUIsS0FBSyxDQUFDd0IsYUFBYSxHQUFHLFNBQVM7UUFDckU5RCxTQUFTLENBQUNNLE9BQU8sQ0FBQyxVQUFBa0QsR0FBRyxFQUFHO1VBQ3BCQSxHQUFHLENBQUNoRCxTQUFTLENBQUN5QyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2xDLENBQUMsQ0FBQztRQUNGLElBQUltQixPQUFPLEdBQUdKLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0wsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUM3RUcsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDMUQsU0FBUyxDQUFDc0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUM3RFcsV0FBVyxDQUFDVyxPQUFPLENBQUM7TUFDeEI7SUFDSixDQUFDLENBQUM7RUFFTixDQUFDLENBQUM7QUFDTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2hlbGxvd2luX2hyJ1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlV2VlayA9IChwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHdlZWtEYXRlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IERheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IFdlZWsgPSB3ZWVrRHVyYXRpb24gKiBEYXk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PlxuICAgICAgICAgICAgYCR7ZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9LiR7KGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlV2Vla1BlcmlvZCA9ICh3ZWVrSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTdGFydCA9IHByb21vU3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYmFzZVN0YXJ0ICsgd2Vla0luZGV4ICogV2Vlayk7XG4gICAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgKHdlZWtEdXJhdGlvbiAqIERheSAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L/QvtGC0L7Rh9C90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vINCe0LHQvNC10LbRg9GU0LzQviAxMCDRgtC40LbQvdGP0LzQuCAo0Y/QutGJ0L4g0L/QvtGC0YDRltCx0L3QviDQsdGW0LvRjNGI0LUsINC/0YDQvtGB0YLQviDQt9C80ZbQvdGW0YLRjCDQu9GW0YfQuNC70YzQvdC40LopXG4gICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IGNhbGN1bGF0ZVdlZWtQZXJpb2QoaSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVXZWVrSW5kZXgpXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTEwLTEzVDAwOjAwOjAwXCIpO1xuICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDc7XG5cbiAgICBsZXQgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcblxuICAgIGxldCBwZXJpb2RBbW91bnQgPSAzIC8vINC60ZbQu9GM0LrRltGB0YLRjCDQv9C10YDRltC+0LTRltCyINCyINCw0LrRhtGW0ZcsINGC0YDQtdCx0LAg0LTQu9GPINC60LXRiNGD0LLQsNC90L3RjyDRltC90YTQuCDQtyDRgtCw0LHQu9C4XG5cbiAgICBsZXQgdGFibGVEYXRhID0gW11cbiAgICBsZXQgYWN0aXZlV2VlayA9IGdldEFjdGl2ZVdlZWsocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgfHwgMTtcblxuICAgIGlmIChhY3RpdmVXZWVrID4gMykgYWN0aXZlV2VlayA9IDNcblxuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5LWJ0bicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKSxcbiAgICAgICAgdGFibGVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190YWJzLXdlZWsnKVxuXG4gICAgY29uc3QgaHJMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hyTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIC8vIGxldCBsb2NhbGUgPSBcImVuXCJcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCJcblxuICAgIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuXG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAudGhlbihsb2FkVXNlcnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmZvckVhY2goKHRhYiwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSBhY3RpdmVXZWVrIC0gMSkgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpKTtcblxuICAgICAgICAgICAgICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihOdW1iZXIodGFiLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBhY3RpdmVXZWVrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBzaG93R2FtZXNCeURhdGUoYWN0aXZlV2Vlayk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVXZWVrKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpID4gYWN0aXZlV2Vlaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhYldlZWsgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHRhYldlZWssIHRhYmxlRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgdGFiOlwiLCB0YWJXZWVrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBzaG93SXRlbXNPblNjcm9sbChcIi5naWRlX19ibG9ja1wiKVxuICAgICAgICAgICAgICAgICAgICBzaG93SXRlbXNPblNjcm9sbChcIi50b3VybmFtZW50X19kZWNvclwiKVxuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZWFyblBvaW50c0luZm8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cignZWFyblBvaW50c0luZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi10YWJsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKCd0YWJsZUluZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpZGVfX2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKCdnaWRlSW5mbycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG91cm5hbWVudF9fYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIoJ3J1bGVzJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlblBvcHVwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAuYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0luc2lkZSA9IG9wZW5Qb3B1cEVsID8gb3BlblBvcHVwRWwuY29udGFpbnMoZS50YXJnZXQpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlblBvcHVwRWwgJiYgIWlzSW5zaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19jbG9zZScpLmZvckVhY2goY2xvc2VCdG4gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUFsbFBvcHVwcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVsbG93aW5cIiksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKVxuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCByZWRpcmVjdEJ0biBvZiByZWRpcmVjdEJ0bnMpIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ2hyJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICB1c2VyRGF0YSA9IHVzZXJEYXRhLmZpbmQod2VlayA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2Vlay53ZWVrID09PSB3ZWVrTnVtXG4gICAgICAgIH0pLnVzZXJzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcblxuICAgICAgICBsZXQgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKVxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcilcbiAgICAgICAgY29uc29sZS5sb2coaXNWZXJpZmllZFVzZXIpXG5cbiAgICAgICAgaWYodXNlcklkICYmICFjdXJyZW50VXNlciAmJiBpc1ZlcmlmaWVkVXNlcil7XG4gICAgICAgICAgICB1c2VyRGF0YSA9IFsuLi51c2VyRGF0YSwge3VzZXJpZDogdXNlcklkLCBwb2ludHM6IDB9XVxuICAgICAgICAgICAgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZClcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5cbiAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJEYXRhLCB1c2VySWQsIHdlZWtOdW0sIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIpIHtcblxuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIDIwKTtcbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDgpLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFjdXJyZW50VXNlciB8fCBpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICByZXN1bHRzVGFibGUuY2xhc3NMaXN0LmFkZCgnd2l0aG91dFlvdScpO1xuICAgICAgICAgICAgcmV0dXJuOyAvLyDRj9C60YnQviDRjtC30LXRgCDQvdC1INCyINGC0LDQsdC70LjRhtGWLCByZXN1bHRzVGFibGVPdGhlciDQvdC1INGA0LXQvdC00LXRgNC40LzQvlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0c1RhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ3dpdGhvdXRZb3UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCu0LfQtdGAINC90LUg0YMg0YLQvtC/LTggKNC80ZbRgdGG0LUg4omlIDkpXG4gICAgICAgIGlmIChjdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgIC8vICAgICBpZiAoaW5kZXggIT09IDEwICYmIHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgLy8gICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgLy8gICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgIC8vICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplNGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxOSkgcmV0dXJuIGBwcml6ZTVgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDIwKSByZXR1cm4gYHByaXplNmA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyOSkgcmV0dXJuIGBwcml6ZTdgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDMwKSByZXR1cm4gYHByaXplOGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzOSkgcmV0dXJuIGBwcml6ZTlgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDQwKSByZXR1cm4gYHByaXplMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNDkpIHJldHVybiBgcHJpemUxMWA7XG4gICAgICAgIGlmIChwbGFjZSA9PT0gNTApIHJldHVybiBgcHJpemUxMmA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA2OSkgcmV0dXJuIGBwcml6ZTEzYDtcbiAgICAgICAgaWYgKHBsYWNlID09PSA3MCkgcmV0dXJuIGBwcml6ZTE0YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDg5KSByZXR1cm4gYHByaXplMTVgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDkwKSByZXR1cm4gYHByaXplMTZgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplMTdgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgICAgICBsb2FkVXNlcnMoXCI/bm9jYWNoZT0xXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRVc2VycyhwYXJhbWV0cikge1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICB0YWJsZURhdGEubGVuZ3RoID0gMFxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBlcmlvZEFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gaTsgLy8g0LDQsdC+INCx0YPQtNGMLdGP0LrQsCDQu9C+0LPRltC60LAg0LTQu9GPINGE0L7RgNC80YPQstCw0L3QvdGPINC90L7QvNC10YDQsCDRgtC40LbQvdGPXG4gICAgICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfSR7cGFyYW1ldHIgPyBwYXJhbWV0ciA6IFwiXCJ9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0YWJsZURhdGEucHVzaCh7IHdlZWssIHVzZXJzOiBkYXRhIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2gocmVxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdXNlcnM6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SXRlbXNPblNjcm9sbChpdGVtQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpdGVtQ2xhc3MpO1xuICAgICAgICBpZiAoIUJsb2Nrcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIGVudHJ5LmludGVyc2VjdGlvblJhdGlvID49IDAuMykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmdpZGVfX2Jsb2NrLWpva2VyXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmdpZGVfX2Jsb2NrLW1hZ2ljaWFuXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRvdXJuYW1lbnRfX3dpdGNoR2lybFwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi50b3VybmFtZW50X19naG9zdEdpcmxcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRocmVzaG9sZDogMC4zXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEJsb2Nrcy5mb3JFYWNoKGl0ZW0gPT4gb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0cikge1xuICAgICAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICAgICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxQb3B1cHMoKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLmFjdGl2ZScpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgcG9wdXBXcmFwLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93R2FtZXNCeURhdGUoYWN0aXZlV2Vla0luZGV4KSB7XG4gICAgICAgIGNvbnN0IGFsbEdhbWVzTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2xpc3QnKTtcbiAgICAgICAgYWxsR2FtZXNMaXN0cy5mb3JFYWNoKGxpc3QgPT4gbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lc19fbGlzdC53ZWVrJHthY3RpdmVXZWVrSW5kZXh9YCk7XG4gICAgICAgIGlmICh0YXJnZXRMaXN0KSB7XG4gICAgICAgICAgICB0YXJnZXRMaXN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpIC8vINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuXG4gICAgLy8gVEVTVFxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG4gICAgY29uc3QgYmV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmV0LW9ubGluZVwiKVxuXG4gICAgYmV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiOTk5XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgdW5hdXRoTXNncy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidG5HYW1lczIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1nYW1lczJcIilcbiAgICBidG5HYW1lczIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gMlxuICAgICAgICBzaG93R2FtZXNCeURhdGUoMik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidG5HYW1lczMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1nYW1lczNcIilcbiAgICBidG5HYW1lczMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gM1xuICAgICAgICBzaG93R2FtZXNCeURhdGUoMyk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBoYXNlMicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhY3RpdmVXZWVrID0gMlxuICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLXdlZWtcIikuZm9yRWFjaCgodGFiLCBpKSA9PntcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmKGkgPT09IGFjdGl2ZVdlZWsgLSAxKSB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgIGlmKE51bWJlcih0YWIuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKSA+IGFjdGl2ZVdlZWspe1xuICAgICAgICAgICAgICAgIHRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0YWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpKXtcbiAgICAgICAgICAgICAgICBpZihOdW1iZXIoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBhY3RpdmVXZWVrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsZXQgdGFiV2VlayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIik7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1waGFzZTMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWN0aXZlV2VlayA9IDNcbiAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmZvckVhY2goKHRhYiwgaSkgPT57XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpID09PSBhY3RpdmVXZWVrIC0gMSkgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICBpZihOdW1iZXIodGFiLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBhY3RpdmVXZWVrKXtcbiAgICAgICAgICAgICAgICB0YWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PntcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKSl7XG4gICAgICAgICAgICAgICAgaWYoTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpID4gYWN0aXZlV2Vlaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbGV0IHRhYldlZWsgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHRhYldlZWspXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9KTtcbn0pKCk7XG5cblxuIl19
