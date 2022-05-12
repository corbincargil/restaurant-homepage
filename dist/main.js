/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/banner.js":
/*!**********************************!*\
  !*** ./src/components/banner.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst banner = () => {\n    const body = document.getElementById('body');\n\n    const banner = document.createElement('div');\n    banner.setAttribute('id','banner');\n\n    const img = document.createElement('img');\n    img.src = 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/03/berry-pies.jpg?quality=82&strip=1&w=640';\n\n    const slogan = document.createElement('h3');\n    slogan.textContent = '\\\"The best pies in South Texas!\\\"';\n\n    banner.appendChild(img);\n    banner.appendChild(slogan);\n    body.appendChild(banner);\n    return body;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (banner); \n\n//# sourceURL=webpack://restaurant-homepage/./src/components/banner.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = () => {\n    const content = document.getElementById('content');\n\n    const footerContainer = document.createElement('div');\n    footerContainer.setAttribute('id','footer');\n\n    const footerTop = document.createElement('div');\n    footerTop.setAttribute('id','footer-top');\n    footerTop.textContent = 'Created by Corbin Cargil';\n    footerContainer.appendChild(footerTop);\n\n    const gitHubLogo = document.createElement('img');\n    gitHubLogo.src = 'https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png';\n    footerTop.appendChild(gitHubLogo);\n\n    const footerBottom = document.createElement('div');\n    footerBottom.setAttribute('id','footer-bottom');\n    footerBottom.textContent = 'As part of ';\n    footerContainer.appendChild(footerBottom);\n\n    \n    \n    content.appendChild(footerContainer);\n    return content;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://restaurant-homepage/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_clear_body_contents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/clear-body-contents */ \"./src/functions/clear-body-contents.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/about */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/location */ \"./src/pages/location.js\");\n\n\n\n\n\n\nconst header = () => {\n    const content = document.getElementById('content');\n    const header = document.createElement('div');\n    header.setAttribute('id','header');\n\n    const logo = document.createElement('h1');\n    logo.setAttribute('id','main-title');\n    logo.textContent = 'The Pie Hole';\n    logo.addEventListener('click', () => {\n        (0,_functions_clear_body_contents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    })\n\n    const navigation = document.createElement('ul');\n    navigation.classList.add('navigation');\n    const menu = document.createElement('li');\n    const about = document.createElement('li');\n    const location = document.createElement('li');\n    menu.textContent = 'Menu';\n    menu.addEventListener('click', () => {\n        (0,_functions_clear_body_contents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    })\n    about.textContent = 'About';\n    about.addEventListener('click', () => {\n        (0,_functions_clear_body_contents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        (0,_pages_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    })\n    location.textContent = 'Location';\n    location.addEventListener('click', () => {\n        (0,_functions_clear_body_contents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        (0,_pages_location__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    })\n    navigation.appendChild(menu);\n    navigation.appendChild(about);\n    navigation.appendChild(location);\n\n    header.appendChild(logo);\n    header.appendChild(navigation);\n    content.appendChild(header);\n    return content;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/components/header.js?");

/***/ }),

/***/ "./src/components/reviews.js":
/*!***********************************!*\
  !*** ./src/components/reviews.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reviews = () => {\n    const body = document.getElementById('body');\n\n    const reviewContainer = document.createElement('div');\n    reviewContainer.setAttribute('id','review-container');\n\n    for (let i = 0; i < 3; i++) {\n        const newReview = document.createElement('div');\n        newReview.classList.add('review');\n        newReview.setAttribute('id',`review-${i}`);\n        reviewContainer.appendChild(newReview);\n    }\n    body.appendChild(reviewContainer);\n\n    const reviewOne = document.getElementById('review-0');\n    const reviewTwo = document.getElementById('review-1');\n    const reviewThree = document.getElementById('review-2');\n\n    const reviewOnePic = document.createElement('img');\n    reviewOnePic.src = 'https://cdn-icons.flaticon.com/png/128/3404/premium/3404199.png?token=exp=1652291464~hmac=af62ff749f397fc2376a005a77ceb6a0';\n    reviewOne.appendChild(reviewOnePic);\n    const reviewTwoPic = document.createElement('img');\n    reviewTwoPic.src = 'https://cdn-icons.flaticon.com/png/128/3404/premium/3404417.png?token=exp=1652292884~hmac=604c4c9ff519c129f528506f1a825261';\n    reviewTwo.appendChild(reviewTwoPic);\n    const reviewThreePic = document.createElement('img');\n    reviewThreePic.src = 'https://cdn-icons.flaticon.com/png/128/3404/premium/3404161.png?token=exp=1652292916~hmac=8a0d40ee88b589ab03f21554c505f872';\n    reviewThree.appendChild(reviewThreePic);\n\n\n    const reviewOneRating = document.createElement('h3');\n    reviewOneRating.textContent = '4/5';\n    reviewOne.appendChild(reviewOneRating);\n    const reviewTwoRating = document.createElement('h3');\n    reviewTwoRating.textContent = '5/5';\n    reviewTwo.appendChild(reviewTwoRating);\n    const reviewThreeRating = document.createElement('h3');\n    reviewThreeRating.textContent = '5/5';\n    reviewThree.appendChild(reviewThreeRating);\n    \n    const reviewOneText = document.createElement('p');\n    reviewOneText.textContent = 'Hands down my favorite dessert place in town.';\n    reviewOne.appendChild(reviewOneText);\n    const reviewTwoText = document.createElement('p');\n    reviewTwoText.textContent = 'The apple pie was the best pie I\\'ve ever had! Such a long line though.';\n    reviewTwo.appendChild(reviewTwoText);\n    const reviewThreeText = document.createElement('p');\n    reviewThreeText.textContent = 'The staff was so kind and the pie was delicious. Well worth the trip!';\n    reviewThree.appendChild(reviewThreeText);\n\n    return body;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reviews);\n\n//# sourceURL=webpack://restaurant-homepage/./src/components/reviews.js?");

/***/ }),

/***/ "./src/functions/clear-body-contents.js":
/*!**********************************************!*\
  !*** ./src/functions/clear-body-contents.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.js\");\n\n//clears the contents of the main body of the page\n//plan is to clear all the 'next sibling's of the header, then add the footer\nconst clearBody = () => {\n    const content = document.getElementById('content');\n    const header = document.getElementById('header');\n    const body = document.getElementById('body');\n    if (body){body.remove();}\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearBody);\n\n//# sourceURL=webpack://restaurant-homepage/./src/functions/clear-body-contents.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _functions_clear_body_contents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/clear-body-contents */ \"./src/functions/clear-body-contents.js\");\n\n\n\n\n\n\n//create header\n(0,_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//body initally contains home (home page will contain banner and reviews)\n(0,_pages_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//create footer\n(0,_components_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayAbout = () => {\n    const body = document.createElement('div');\n    const header = document.getElementById('header');\n    body.setAttribute('id','body');\n    header.after(body);\n\n    const banner = document.createElement('img');\n    banner.classList.add('banner');\n    banner.src = 'https://img.freepik.com/free-vector/big-family-meeting_74855-5220.jpg?size=626&ext=jpg&ga=GA1.2.648966740.1652227311';\n    body.appendChild(banner);\n\n    const info = document.createElement('p');\n    info.classList.add('info');\n    info.textContent = 'The Pie Hole started as a dream... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';\n    body.appendChild(info);\n\n    const hours = document.createElement('img');\n    hours.classList.add('hours');\n    hours.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9gRvRvauFAQDlmNzzWeIX1wi7Up9WqH0xVmx__Ag8llsX_PHjYBPLTqQm5ZtB3DVs6Q&usqp=CAU';\n    body.appendChild(hours);\n\n    return body;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAbout);\n\n//# sourceURL=webpack://restaurant-homepage/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/banner */ \"./src/components/banner.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/reviews */ \"./src/components/reviews.js\");\n\n\n\n\nconst home = () => {\n    const content = document.getElementById('content');\n    const body = document.createElement('div');\n    const header = document.getElementById('header');\n    body.setAttribute('id','body');\n    header.after(body);\n\n    (0,_components_banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_components_reviews__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return body;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-homepage/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/location.js":
/*!*******************************!*\
  !*** ./src/pages/location.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayLocation = () => {\n    const body = document.createElement('div');\n    const header = document.getElementById('header');\n    body.setAttribute('id','body');\n    header.after(body);\n\n    const heading = document.createElement('h2');\n    heading.textContent = 'Our home is in San Antonio, TX';\n    body.appendChild(heading);\n\n    const address = document.createElement('p');\n    address.textContent = '123 Sunset Blvd, San Antonio, TX, 78015';\n    body.appendChild(address);\n\n    const mapPic = document.createElement('img');\n    mapPic.src = 'https://gisgeography.com/wp-content/uploads/2020/06/San-Antonio-Map-Texas-1265x1262.jpg';\n    body.appendChild(mapPic);\n\n    const hours = document.createElement('img');\n    hours.classList.add('hours');\n    hours.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9gRvRvauFAQDlmNzzWeIX1wi7Up9WqH0xVmx__Ag8llsX_PHjYBPLTqQm5ZtB3DVs6Q&usqp=CAU';\n    body.appendChild(hours);\n\n    return body\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLocation);\n\n//# sourceURL=webpack://restaurant-homepage/./src/pages/location.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//menu page\nconst displayMenu = () => {\n    const body = document.createElement('div');\n    const header = document.getElementById('header');\n    body.setAttribute('id','body');\n    header.after(body);\n\n    const heading = document.createElement('h2');\n    heading.textContent = 'Choose from the following options: ';\n    body.appendChild(heading);\n\n    const pies = document.createElement('div')\n    pies.classList.add('pies');\n    for (let i = 0; i < 4; i++) {\n        const newPie = document.createElement('div');\n        newPie.classList.add('pie');\n        newPie.setAttribute('id',`pie-${i}`);\n        pies.appendChild(newPie);\n    }\n    body.appendChild(pies);\n\n    const apple = document.createElement('h3');\n    apple.textContent = 'APPLE';\n    const applePic = document.createElement('img');\n    applePic.src = 'https://kristineskitchenblog.com/wp-content/uploads/2021/04/apple-pie-1200-square-592-2.jpg';\n    const pieZero = document.getElementById('pie-1');\n    pieZero.appendChild(apple);\n    pieZero.appendChild(applePic);\n\n    const lemon = document.createElement('h3');\n    lemon.textContent = 'LEMON';\n    const lemonPic =document.createElement('img');\n    lemonPic.src = 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18125855/051116001-01-lemon-meringue-pie-recipe-main.jpg';\n    const pieOne = document.getElementById('pie-0');\n    pieOne.appendChild(lemon);\n    pieOne.appendChild(lemonPic);\n\n    const choco = document.createElement('h3');\n    choco.textContent = 'CHOCOLATE DELIGHT';\n    const chocoPic = document.createElement('img');\n    chocoPic.src = 'https://www.giftofhospitality.com/wp-content/uploads/2021/02/chocolate-delight-8-500x375.jpg';\n    const pieTwo = document.getElementById('pie-2');\n    pieTwo.appendChild(choco);\n    pieTwo.appendChild(chocoPic);\n\n    const cherry = document.createElement('h3');\n    cherry.textContent = 'CHERRY';\n    const cherryPic = document.createElement('img');\n    cherryPic.src = 'https://www.shugarysweets.com/wp-content/uploads/2020/09/cherry-pie-9-720x720.jpg';\n    const piethree = document.getElementById('pie-3');\n    piethree.append(cherry);\n    piethree.append(cherryPic);\n\n\n\n    \n\n\n    \n    return body;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/pages/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;