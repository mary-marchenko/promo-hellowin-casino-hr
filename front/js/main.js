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

showItemsOnScroll(".gide__block")
showItemsOnScroll(".tournament__decor")


function showItemsOnScroll(itemClass) {
    const Blocks = document.querySelectorAll(itemClass);
    if (!Blocks.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                setTimeout(() => {
                    entry.target.querySelector(".gide__block-joker")?.classList.add("showItem")
                    entry.target.querySelector(".gide__block-magician")?.classList.add("showItem")
                    observer.unobserve(entry.target);
                }, 200);
                setTimeout(() => {
                    entry.target.querySelector(".tournament__witchGirl")?.classList.add("showItem")
                    entry.target.querySelector(".tournament__ghostGirl")?.classList.add("showItem")
                    observer.unobserve(entry.target);
                }, 600);
            }
        });
    }, {
        threshold: 0.3
    });

    Blocks.forEach(item => observer.observe(item));
}

function openPopupByAttr(popupAttr) {
    const allPopups = document.querySelectorAll('.popup');
    allPopups.forEach(p => p.classList.remove('active'));
    document.body.style.overflow = 'hidden';

    const targetPopup = document.querySelector(`.popup[data-popup="${popupAttr}"]`);
    if (targetPopup) {
        targetPopup.classList.add('active');
        document.querySelector('.popup-wrap').classList.remove('opacity');
    }
}

function closeAllPopups() {
    const popupWrap = document.querySelector('.popup-wrap');
    const activePopup = document.querySelector('.popup.active');

    document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
    popupWrap.classList.add('opacity');
    document.body.style.overflow = 'auto';
}

document.querySelector('.button-earnPointsInfo').addEventListener('click', () => {
    openPopupByAttr('earnPointsInfo');
});

document.querySelector('.button-table').addEventListener('click', () => {
    openPopupByAttr('tableInfo');
});

document.querySelector('.gide__button').addEventListener('click', () => {
    openPopupByAttr('gideInfo');
});

document.querySelector('.popup-wrap').addEventListener('click', (e) => {
    const openPopupEl = document.querySelector('.popup.active');
    const isInside = openPopupEl ? openPopupEl.contains(e.target) : false;
    if (openPopupEl && !isInside) {
        closeAllPopups();
    }
});

document.querySelectorAll('.popup__close').forEach(closeBtn => {
    closeBtn.addEventListener('click', closeAllPopups);
});

