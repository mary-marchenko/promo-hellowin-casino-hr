"use strict";

// (function () {
//
//     const apiURL = 'https://fav-prom.com/api_your_promo'
//
//     const getActiveWeek = (promoStartDate, weekDuration) => {
//         const currentDate = new Date();
//         let weekDates = [];
//
//         const Day = 24 * 60 * 60 * 1000;
//         const Week = weekDuration * Day;
//
//         const formatDate = (date) =>
//             `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}`;
//
//         const calculateWeekPeriod = (weekIndex) => {
//             const baseStart = promoStartDate.getTime();
//             const start = new Date(baseStart + weekIndex * Week);
//             let end = new Date(start.getTime() + (weekDuration * Day - 1));
//             return { start, end };
//         };
//
//         let activeWeekIndex = null;
//
//         // Перевірка поточного тижня
//         for (let i = 0; i < 10; i++) { // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
//             const { start, end } = calculateWeekPeriod(i);
//             if (currentDate >= start && currentDate <= end) {
//                 activeWeekIndex = i + 1;
//                 break;
//             }
//         }
//
//         return activeWeekIndex;
//     };
//
//     const promoStartDate = new Date("2025-05-05T00:00:00");
//     const weekDuration = 10;
//
//     let isVerifiedUser = false;
//
//     let periodAmount = 2 // кількість періодів в акції, треба для кешування інфи з табли
//
//     let tableData = []
//     let activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;
//     // let activeWeek = 2
//
//     if (activeWeek > 2) activeWeek = 2
//
//
//     const mainPage = document.querySelector(".fav-page"),
//         unauthMsgs = document.querySelectorAll('.unauth-msg'),
//         participateBtns = document.querySelectorAll('.part-btn'),
//         redirectBtns = document.querySelectorAll('.btn-join'),
//         loader = document.querySelector(".spinner-overlay")
//
//     const ukLeng = document.querySelector('#ukLeng');
//     const enLeng = document.querySelector('#enLeng');
//
//     const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
//     const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
//         el.setAttribute('data-translate', `${dataAttr}`)
//         el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
//         el.removeAttribute('data-translate');
//     });
//
//     let loaderBtn = false
//
//     let locale = "en"
//     // let locale = sessionStorage.getItem("locale") || "uk"
//
//     if (ukLeng) locale = 'uk';
//     if (enLeng) locale = 'en';
//
//     let debug = true
//
//     if (debug) hideLoader()
//
//     let i18nData = {};
//     const translateState = true;
//     let userId = null;
//     // let userId = Number(sessionStorage.getItem("userId")) ?? null
//
//     const request = function (link, extraOptions) {
//         return fetch(apiURL + link, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             ...(extraOptions || {})
//         })
//             .then(res => {
//                 if (!res.ok) throw new Error('API error');
//                 return res.json();
//             })
//             .catch(err => {
//                 console.error('API request failed:', err);
//
//                 reportError(err);
//
//                 document.querySelector('.fav-page').style.display = 'none';
//                 if (window.location.href.startsWith("https://www.favbet.hr/")) {
//                     window.location.href = '/promocije/promocija/stub/';
//                 } else {
//                     window.location.href = '/promos/promo/stub/';
//                 }
//
//                 return Promise.reject(err);
//             });
//
//     }
//
//     function hideLoader(){
//         loader.classList.add("hide")
//         document.body.style.overflow = "auto"
//         mainPage.classList.remove("loading")
//     }
//
//     async function init() {
//         let attempts = 0;
//         const maxAttempts = 20;
//         const attemptInterval = 50;
//
//         function tryDetectUserId() {
//             if (window.store) {
//                 const state = window.store.getState();
//                 userId = state.auth.isAuthorized && state.auth.id || '';
//             } else if (window.g_user_id) {
//                 userId = window.g_user_id;
//             }
//         }
//
//         function quickCheckAndRender() {
//             checkUserAuth()
//                 .then(loadUsers)
//                 .then(() =>{
//                     setTimeout(hideLoader, 300);
//                     document.querySelectorAll(".table__tabs-item").forEach((tab, i) =>{
//                         tab.classList.remove('active');
//                         if(i === activeWeek - 1) tab.classList.add('active');
//                     })
//                     // renderUsers(activeWeek, tableData);
//                     participateBtns.forEach(btn => btn.addEventListener('click', participate));
//                 })
//             }
//
//         const waitForUserId = new Promise((resolve) => {
//             const interval = setInterval(() => {
//                 tryDetectUserId();
//                 if (userId || attempts >= maxAttempts) {
//                     quickCheckAndRender();
//                     clearInterval(interval);
//                     resolve();
//                 }
//                 attempts++;
//             }, attemptInterval);
//         });
//
//         await waitForUserId;
//     }
//
//     function loadTranslations() {
//         return request(`/new-translates/${locale}`)
//             .then(json => {
//                 i18nData = json;
//                 translate();
//                 const mutationObserver = new MutationObserver(function (mutations) {
//                     mutationObserver.disconnect();
//                     translate();
//                     mutationObserver.observe(targetNode, { childList: true, subtree: true });
//                 });
//                 mutationObserver.observe(document.getElementById("hardcoreTennis"), {
//                     childList: true,
//                     subtree: true
//                 });
//
//             });
//     }
//
//
//     function checkUserAuth() {
//         console.log(userId)
//         if (userId) {
//             for (const unauthMes of unauthMsgs) {
//                 unauthMes.classList.add('hide');
//             }
//             return request(`/favuser/${userId}?nocache=1`)
//                 .then(res => {
//                     if (res.userid) {
//                         participateBtns.forEach(item => item.classList.add('hide'));
//                         redirectBtns.forEach(item => item.classList.remove('hide'));
//                         isVerifiedUser = true;
//                         console.log(isVerifiedUser)
//                     } else {
//                         participateBtns.forEach(item => item.classList.remove('hide'));
//                         redirectBtns.forEach(item => item.classList.add('hide'));
//                         isVerifiedUser = false;
//                     }
//
//                 })
//         } else {
//             for (let redirectBtn of redirectBtns) {
//                 redirectBtn.classList.add('hide');
//             }
//             for (let participateBtn of participateBtns) {
//                 participateBtn.classList.add('hide');
//             }
//             for (const unauthMes of unauthMsgs) {
//                 unauthMes.classList.remove('hide');
//             }
//
//             return Promise.resolve(false);
//         }
//     }
//
//     function reportError(err) {
//         const reportData = {
//             origin: window.location.href,
//             userid: userId,
//             errorText: err?.error || err?.text || err?.message || 'Unknown error',
//             type: err?.name || 'UnknownError',
//             stack: err?.stack || ''
//         };
//
//         fetch('https://fav-prom.com/api-cms/reports/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(reportData)
//         }).catch(console.warn);
//     }
//
//     function translate() {
//         const elems = document.querySelectorAll('[data-translate]')
//         if (elems && elems.length) {
//             if(translateState){
//                 elems.forEach(elem => {
//                     const key = elem.getAttribute('data-translate');
//                     elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
//                     if (i18nData[key]) {
//                         elem.removeAttribute('data-translate');
//                     }
//                 })
//             }else{
//                 console.log("translation works!")
//             }
//         }
//         if (locale === 'en') {
//             mainPage.classList.add('en');
//         }
//         refreshLocalizedClass(mainPage);
//     }
//
//     function refreshLocalizedClass(element) {
//         if (!element) {
//             return;
//         }
//         for (const lang of ['uk', 'en']) {
//             element.classList.remove(baseCssClass + lang);
//         }
//         element.classList.add(baseCssClass + locale);
//     }
//
//     function renderUsers(weekNum, userData = []) {
//         weekNum = Number(weekNum);
//         userData = userData.find(week => {
//             return week.week === weekNum
//         }).users;
//
//         console.log(userData);
//
//         const currentUser = userData.find(user => user.userid === userId);
//
//         console.log(userId)
//         console.log(currentUser)
//         console.log(isVerifiedUser)
//
//         if(userId && !currentUser && isVerifiedUser){
//             userData = [...userData, {userid: userId, points: 0}]
//         }
//         console.log(userData);
//
//         populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser);
//     }
//
//     function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser) {
//
//         console.log(users);
//         resultsTable.innerHTML = '';
//         resultsTableOther.innerHTML = '';
//         if (!users?.length) return;
//
//         const isTopCurrentUser = currentUser && users.slice(0, 10).some(user => user.userid === currentUserId);
//
//         const topUsersLength = !userId || isTopCurrentUser  ? 13 : 10;
//
//         const topUsers = users.slice(0, topUsersLength);
//
//         // console.log(users);
//         topUsers.forEach(user => {
//             displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
//         });
//         // console.log(isTopCurrentUser)
//         console.log(isVerifiedUser)
//         if(isVerifiedUser && !currentUser) {
//             console.log('user verified');
//             displayUser(currentUser, true, resultsTableOther, users, false, week);
//         }
//         if (!isTopCurrentUser && currentUser) {
//             isVerifiedUser = false;
//             displayUser(currentUser, true, resultsTableOther, users, false, week);
//         }
//
//
//     }
//
//     function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
//
//         const renderRow = (userData, options = {}) => {
//             const { highlight = false, neighbor = false } = options;
//             const userRow = document.createElement('div');
//             userRow.classList.add('table__row');
//
//             const userPlace = users.indexOf(userData) + 1;
//             const prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
//
//             if (userPlace <= 3) {
//                 userRow.classList.add(`place${userPlace}`);
//             }
//
//             if (highlight || isCurrentUser && !neighbor) {
//                 userRow.classList.add('you');
//             } else if (neighbor) {
//                 userRow.classList.add('_neighbor');
//             }
//
//             userRow.innerHTML = `
//             <div class="table__row-item">
//                 ${userPlace < 10 ? '0' + userPlace : userPlace}
//                 ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
//             </div>
//             <div class="table__row-item">
//                 ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
//             </div>
//             <div class="table__row-item">
//                 ${Number(userData.points).toFixed(2)}
//             </div>
//             <div class="table__row-item">
//                 ${prizeKey ? translateKey(prizeKey) : ' - '}
//             </div>
//         `;
//
//             table.append(userRow);
//         };
//         if (isCurrentUser && !isTopCurrentUser) {
//             const index = users.indexOf(user);
//             if (users[index - 1]) {
//                 renderRow(users[index - 1], { neighbor: true });
//             }
//             renderRow(user, { highlight: true });
//             if (users[index + 1]) {
//                 renderRow(users[index + 1], { neighbor: true });
//             }
//         } else {
//             renderRow(user);
//         }
//     }
//
//
//     function translateKey(key, defaultValue) {
//         if (!key) {
//             return;
//         }
//         let needKey = debug ? key : `*----NEED TO BE TRANSLATED----* key: ${key}`
//
//         defaultValue =  needKey || key;
//         return i18nData[key] || defaultValue;
//     }
//
//     function maskUserId(userId) {
//         return "**" + userId.toString().slice(2);
//     }
//
//     function getPrizeTranslationKey(place, week) {
//         if (place <= 3) return `prize_${week}-${place}`;
//         if (place <= 10) return `prize_${week}-4-10`;
//         if (place <= 25) return `prize_${week}-11-25`;
//         if (place <= 50) return `prize_${week}-26-50`;
//         if (place <= 75) return `prize_${week}-51-75`;
//         if (place <= 100) return `prize_${week}-76-100`;
//         if (place <= 125) return `prize_${week}-101-125`;
//         if (place <= 150) return `prize_${week}-126-150`;
//         if (place <= 175) return `prize_${week}-151-175`;
//         if (place <= 200) return `prize_${week}-176-200`;
//     }
//
//     function participate() {
//         if (!userId) {
//             return;
//         }
//         const params = { userid: userId };
//         fetch(apiURL + '/user/', {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             method: 'POST',
//             body: JSON.stringify(params)
//         }).then(res => res.json())
//             .then(res => {
//                 console.log(res);
//                 loaderBtn = true
//                 toggleClasses(participateBtns, "loader")
//                 toggleTranslates(participateBtns, "loader")
//                 setTimeout(() =>{
//                     toggleTranslates(participateBtns, "loader_ready")
//                     toggleClasses(participateBtns, "done")
//                     toggleClasses(participateBtns, "loader")
//                 }, 500)
//                 setTimeout(()=>{
//                     checkUserAuth()
//                     loadUsers("?nocache=1").then(res => {
//                         renderUsers(activeWeek, tableData)
//                     })
//                 }, 1000)
//
//             })
//             .catch(err => {
//                 console.error('API request failed:', err);
//
//                 reportError(err);
//
//                 document.querySelector('.fav-page').style.display = 'none';
//                 if (window.location.href.startsWith("https://www.favbet.hr/")) {
//                     window.location.href = '/promocije/promocija/stub/';
//                 } else {
//                     window.location.href = '/promos/promo/stub/';
//                 }
//
//                 return Promise.reject(err);
//             });
//     }
//     function loadUsers(parametr) {
//         const requests = [];
//         tableData.length = 0
//
//         for (let i = 1; i <= periodAmount; i++) {
//             const week = i; // або будь-яка логіка для формування номера тижня
//             const req = request(`/users/${week}${parametr ? parametr : ""}`).then(data => {
//                 console.log(data);
//                 tableData.push({ week, users: data });
//             });
//
//             requests.push(req);
//         }
//
//         return Promise.all(requests)
//         .catch(error => {
//             console.error('Error loading users:', error);
//         });
//     }
//
//     // loadTranslations()
//     //     .then(init) // запуск ініту сторінки
//
// })();

showItemsOnScroll(".gide__block");
showItemsOnScroll(".tournament__decor");
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
document.querySelector('.button-earnPointsInfo').addEventListener('click', function () {
  openPopupByAttr('earnPointsInfo');
});
document.querySelector('.button-table').addEventListener('click', function () {
  openPopupByAttr('tableInfo');
});
document.querySelector('.gide__button').addEventListener('click', function () {
  openPopupByAttr('gideInfo');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic2hvd0l0ZW1zT25TY3JvbGwiLCJpdGVtQ2xhc3MiLCJCbG9ja3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJzZXRUaW1lb3V0IiwidGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsIml0ZW0iLCJvYnNlcnZlIiwib3BlblBvcHVwQnlBdHRyIiwicG9wdXBBdHRyIiwiYWxsUG9wdXBzIiwicCIsInJlbW92ZSIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwidGFyZ2V0UG9wdXAiLCJjbG9zZUFsbFBvcHVwcyIsInBvcHVwV3JhcCIsImFjdGl2ZVBvcHVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJvcGVuUG9wdXBFbCIsImlzSW5zaWRlIiwiY29udGFpbnMiLCJjbG9zZUJ0biJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0gsQ0FBQyxDQUFDckIsTUFBTSxDQUFDLEdBQUcsS0FBSztFQUNyRSxJQUFJc0IsV0FBVyxJQUFJLENBQUNDLFFBQVEsRUFBRTtJQUMxQk4sY0FBYyxFQUFFO0VBQ3BCO0FBQ0osQ0FBQyxDQUFDO0FBRUY1QixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDSyxPQUFPLENBQUMsVUFBQThCLFFBQVEsRUFBSTtFQUMzREEsUUFBUSxDQUFDTCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVILGNBQWMsQ0FBQztBQUN0RCxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChmdW5jdGlvbiAoKSB7XG4vL1xuLy8gICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfeW91cl9wcm9tbydcbi8vXG4vLyAgICAgY29uc3QgZ2V0QWN0aXZlV2VlayA9IChwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbi8vICAgICAgICAgbGV0IHdlZWtEYXRlcyA9IFtdO1xuLy9cbi8vICAgICAgICAgY29uc3QgRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbi8vICAgICAgICAgY29uc3QgV2VlayA9IHdlZWtEdXJhdGlvbiAqIERheTtcbi8vXG4vLyAgICAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT5cbi8vICAgICAgICAgICAgIGAke2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfS4keyhkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuLy9cbi8vICAgICAgICAgY29uc3QgY2FsY3VsYXRlV2Vla1BlcmlvZCA9ICh3ZWVrSW5kZXgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IGJhc2VTdGFydCA9IHByb21vU3RhcnREYXRlLmdldFRpbWUoKTtcbi8vICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYmFzZVN0YXJ0ICsgd2Vla0luZGV4ICogV2Vlayk7XG4vLyAgICAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgKHdlZWtEdXJhdGlvbiAqIERheSAtIDEpKTtcbi8vICAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcbi8vICAgICAgICAgfTtcbi8vXG4vLyAgICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuLy9cbi8vICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC/0L7RgtC+0YfQvdC+0LPQviDRgtC40LbQvdGPXG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyDQntCx0LzQtdC20YPRlNC80L4gMTAg0YLQuNC20L3Rj9C80LggKNGP0LrRidC+INC/0L7RgtGA0ZbQsdC90L4g0LHRltC70YzRiNC1LCDQv9GA0L7RgdGC0L4g0LfQvNGW0L3RltGC0Ywg0LvRltGH0LjQu9GM0L3QuNC6KVxuLy8gICAgICAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBjYWxjdWxhdGVXZWVrUGVyaW9kKGkpO1xuLy8gICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuLy8gICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IGkgKyAxO1xuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuLy8gICAgIH07XG4vL1xuLy8gICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA1LTA1VDAwOjAwOjAwXCIpO1xuLy8gICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDEwO1xuLy9cbi8vICAgICBsZXQgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbi8vXG4vLyAgICAgbGV0IHBlcmlvZEFtb3VudCA9IDIgLy8g0LrRltC70YzQutGW0YHRgtGMINC/0LXRgNGW0L7QtNGW0LIg0LIg0LDQutGG0ZbRlywg0YLRgNC10LHQsCDQtNC70Y8g0LrQtdGI0YPQstCw0L3QvdGPINGW0L3RhNC4INC3INGC0LDQsdC70Lhcbi8vXG4vLyAgICAgbGV0IHRhYmxlRGF0YSA9IFtdXG4vLyAgICAgbGV0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pIHx8IDE7XG4vLyAgICAgLy8gbGV0IGFjdGl2ZVdlZWsgPSAyXG4vL1xuLy8gICAgIGlmIChhY3RpdmVXZWVrID4gMikgYWN0aXZlV2VlayA9IDJcbi8vXG4vL1xuLy8gICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbi8vICAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4vLyAgICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuLy8gICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbi8vICAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIilcbi8vXG4vLyAgICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuLy8gICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcbi8vXG4vLyAgICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbi8vICAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4vLyAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuLy8gICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4vLyAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG4vL1xuLy8gICAgIGxldCBsb2NhbGUgPSBcImVuXCJcbi8vICAgICAvLyBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcInVrXCJcbi8vXG4vLyAgICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbi8vICAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuLy9cbi8vICAgICBsZXQgZGVidWcgPSB0cnVlXG4vL1xuLy8gICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG4vL1xuLy8gICAgIGxldCBpMThuRGF0YSA9IHt9O1xuLy8gICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbi8vICAgICBsZXQgdXNlcklkID0gbnVsbDtcbi8vICAgICAvLyBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcbi8vXG4vLyAgICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbi8vICAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbi8vICAgICAgICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbi8vICAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcbi8vXG4vLyAgICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcbi8vXG4vLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbi8vICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4vLyAgICAgICAgICAgICB9KTtcbi8vXG4vLyAgICAgfVxuLy9cbi8vICAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4vLyAgICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuLy8gICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbi8vICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbi8vICAgICB9XG4vL1xuLy8gICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4vLyAgICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4vLyAgICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4vLyAgICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuLy9cbi8vICAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuLy8gICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4vLyAgICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbi8vICAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuLy8gICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4vLyAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbi8vICAgICAgICAgICAgICAgICAudGhlbihsb2FkVXNlcnMpXG4vLyAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT57XG4vLyAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmZvckVhY2goKHRhYiwgaSkgPT57XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSBhY3RpdmVXZWVrIC0gMSkgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpO1xuLy8gICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpKTtcbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbi8vICAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbi8vICAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4vLyAgICAgICAgIH0pO1xuLy9cbi8vICAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbi8vICAgICB9XG4vL1xuLy8gICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4vLyAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbi8vICAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuLy8gICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbi8vICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuLy8gICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbi8vICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXJkY29yZVRlbm5pc1wiKSwge1xuLy8gICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4vLyAgICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbi8vICAgICAgICAgICAgICAgICB9KTtcbi8vXG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICB9XG4vL1xuLy9cbi8vICAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4vLyAgICAgICAgIGlmICh1c2VySWQpIHtcbi8vICAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbi8vICAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuLy8gICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSB0cnVlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXNWZXJpZmllZFVzZXIpXG4vLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgcmVkaXJlY3RCdG4gb2YgcmVkaXJlY3RCdG5zKSB7XG4vLyAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4vLyAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuLy8gICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4vLyAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vL1xuLy8gICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuLy8gICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuLy8gICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbi8vICAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuLy8gICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuLy8gICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuLy8gICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbi8vICAgICAgICAgfTtcbi8vXG4vLyAgICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuLy8gICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4vLyAgICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4vLyAgICAgfVxuLy9cbi8vICAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4vLyAgICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4vLyAgICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbi8vICAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbi8vICAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuLy8gICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbi8vICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4vLyAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuLy8gICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuLy8gICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuLy8gICAgICAgICB1c2VyRGF0YSA9IHVzZXJEYXRhLmZpbmQod2VlayA9PiB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd2Vlay53ZWVrID09PSB3ZWVrTnVtXG4vLyAgICAgICAgIH0pLnVzZXJzO1xuLy9cbi8vICAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuLy9cbi8vICAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG4vL1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcbi8vXG4vLyAgICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuLy8gICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG4vL1xuLy8gICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKSB7XG4vL1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4vLyAgICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbi8vICAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4vLyAgICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuLy9cbi8vICAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuLy9cbi8vICAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcbi8vXG4vLyAgICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuLy9cbi8vICAgICAgICAgLy8gY29uc29sZS5sb2codXNlcnMpO1xuLy8gICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuLy8gICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuLy8gICAgICAgICB9KTtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coaXNUb3BDdXJyZW50VXNlcilcbi8vICAgICAgICAgY29uc29sZS5sb2coaXNWZXJpZmllZFVzZXIpXG4vLyAgICAgICAgIGlmKGlzVmVyaWZpZWRVc2VyICYmICFjdXJyZW50VXNlcikge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgdmVyaWZpZWQnKTtcbi8vICAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbi8vICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4vLyAgICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4vLyAgICAgICAgIH1cbi8vXG4vL1xuLy8gICAgIH1cbi8vXG4vLyAgICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG4vL1xuLy8gICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbi8vICAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuLy9cbi8vICAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbi8vICAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuLy9cbi8vICAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuLy8gICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbi8vICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4vLyAgICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbi8vICAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbi8vICAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuLy8gICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuLy8gICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4vLyAgICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuLy8gICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbi8vICAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbi8vICAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIGA7XG4vL1xuLy8gICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuLy8gICAgICAgICB9O1xuLy8gICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuLy8gICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuLy8gICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbi8vICAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbi8vICAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4vLyAgICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vL1xuLy9cbi8vICAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbi8vICAgICAgICAgaWYgKCFrZXkpIHtcbi8vICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG4vL1xuLy8gICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4vLyAgICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4vLyAgICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbi8vICAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4vLyAgICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuLy8gICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4vLyAgICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbi8vICAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuLy8gICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbi8vICAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuLy8gICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4vLyAgICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbi8vICAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4vLyAgICAgICAgIGlmICghdXNlcklkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuLy8gICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuLy8gICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuLy8gICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuLy8gICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuLy8gICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbi8vICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbi8vICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbi8vICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuLy8gICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbi8vICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuLy8gICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbi8vICAgICAgICAgICAgICAgICB9LCA1MDApXG4vLyAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuLy8gICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbi8vICAgICAgICAgICAgICAgICAgICAgbG9hZFVzZXJzKFwiP25vY2FjaGU9MVwiKS50aGVuKHJlcyA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgfSwgMTAwMClcbi8vXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG4vL1xuLy8gICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG4vL1xuLy8gICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbi8vICAgICAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy8gICAgIGZ1bmN0aW9uIGxvYWRVc2VycyhwYXJhbWV0cikge1xuLy8gICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuLy8gICAgICAgICB0YWJsZURhdGEubGVuZ3RoID0gMFxuLy9cbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGVyaW9kQW1vdW50OyBpKyspIHtcbi8vICAgICAgICAgICAgIGNvbnN0IHdlZWsgPSBpOyAvLyDQsNCx0L4g0LHRg9C00Ywt0Y/QutCwINC70L7Qs9GW0LrQsCDQtNC70Y8g0YTQvtGA0LzRg9Cy0LDQvdC90Y8g0L3QvtC80LXRgNCwINGC0LjQttC90Y9cbi8vICAgICAgICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9JHtwYXJhbWV0ciA/IHBhcmFtZXRyIDogXCJcIn1gKS50aGVuKGRhdGEgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgICAgICAgICAgICAgIHRhYmxlRGF0YS5wdXNoKHsgd2VlaywgdXNlcnM6IGRhdGEgfSk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vXG4vLyAgICAgICAgICAgICByZXF1ZXN0cy5wdXNoKHJlcSk7XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbi8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdXNlcnM6JywgZXJyb3IpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vL1xuLy8gICAgIC8vIGxvYWRUcmFuc2xhdGlvbnMoKVxuLy8gICAgIC8vICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG4vL1xuLy8gfSkoKTtcblxuc2hvd0l0ZW1zT25TY3JvbGwoXCIuZ2lkZV9fYmxvY2tcIilcbnNob3dJdGVtc09uU2Nyb2xsKFwiLnRvdXJuYW1lbnRfX2RlY29yXCIpXG5cblxuZnVuY3Rpb24gc2hvd0l0ZW1zT25TY3JvbGwoaXRlbUNsYXNzKSB7XG4gICAgY29uc3QgQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpdGVtQ2xhc3MpO1xuICAgIGlmICghQmxvY2tzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gMC4zKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmdpZGVfX2Jsb2NrLWpva2VyXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuZ2lkZV9fYmxvY2stbWFnaWNpYW5cIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi50b3VybmFtZW50X193aXRjaEdpcmxcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi50b3VybmFtZW50X19naG9zdEdpcmxcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCB7XG4gICAgICAgIHRocmVzaG9sZDogMC4zXG4gICAgfSk7XG5cbiAgICBCbG9ja3MuZm9yRWFjaChpdGVtID0+IG9ic2VydmVyLm9ic2VydmUoaXRlbSkpO1xufVxuXG5mdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyKSB7XG4gICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICBjb25zdCB0YXJnZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgIHRhcmdldFBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd3JhcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlQWxsUG9wdXBzKCkge1xuICAgIGNvbnN0IHBvcHVwV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJyk7XG4gICAgY29uc3QgYWN0aXZlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAuYWN0aXZlJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKS5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgcG9wdXBXcmFwLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHknKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWVhcm5Qb2ludHNJbmZvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3BlblBvcHVwQnlBdHRyKCdlYXJuUG9pbnRzSW5mbycpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdGFibGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuUG9wdXBCeUF0dHIoJ3RhYmxlSW5mbycpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWRlX19idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuUG9wdXBCeUF0dHIoJ2dpZGVJbmZvJyk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdyYXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3Qgb3BlblBvcHVwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAuYWN0aXZlJyk7XG4gICAgY29uc3QgaXNJbnNpZGUgPSBvcGVuUG9wdXBFbCA/IG9wZW5Qb3B1cEVsLmNvbnRhaW5zKGUudGFyZ2V0KSA6IGZhbHNlO1xuICAgIGlmIChvcGVuUG9wdXBFbCAmJiAhaXNJbnNpZGUpIHtcbiAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19jbG9zZScpLmZvckVhY2goY2xvc2VCdG4gPT4ge1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VBbGxQb3B1cHMpO1xufSk7XG5cbiJdfQ==
