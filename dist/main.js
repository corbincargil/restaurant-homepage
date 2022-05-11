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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst banner = () => {\n    const content = document.getElementById('content');\n\n    const banner = document.createElement('div');\n    banner.classList.add('banner');\n\n    const img = document.createElement('img');\n    img.src = 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/03/berry-pies.jpg?quality=82&strip=1&w=640';\n\n    const slogan = document.createElement('h3');\n    slogan.textContent = '\\\"The best pies in South Texas!\\\"';\n\n    banner.appendChild(img);\n    banner.appendChild(slogan);\n    content.appendChild(banner);\n    return content;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (banner); \n\n//# sourceURL=webpack://restaurant-homepage/./src/components/banner.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\n    const content = document.getElementById('content');\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    const logo = document.createElement('h1');\n    logo.setAttribute('id','main-title');\n    logo.textContent = 'The Pie Hole';\n\n    const navigation = document.createElement('ul');\n    navigation.classList.add('navigation');\n    const menu = document.createElement('li');\n    const about = document.createElement('li');\n    const location = document.createElement('li');\n    menu.textContent = 'Menu';\n    about.textContent = 'About';\n    location.textContent = 'Location';\n    navigation.appendChild(menu);\n    navigation.appendChild(about);\n    navigation.appendChild(location);\n\n    header.appendChild(logo);\n    header.appendChild(navigation);\n    content.appendChild(header);\n    return content;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/components/header.js?");

/***/ }),

/***/ "./src/components/reviews.js":
/*!***********************************!*\
  !*** ./src/components/reviews.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reviews = () => {\n    const content = document.getElementById('content');\n\n    const reviewContainer = document.createElement('div');\n    reviewContainer.setAttribute('id','review-container');\n\n    for (let i = 0; i < 3; i++) {\n        const newReview = document.createElement('div');\n        newReview.classList.add('review');\n        newReview.setAttribute('id',`review-${i}`);\n        reviewContainer.appendChild(newReview);\n    }\n    content.appendChild(reviewContainer);\n\n    const reviewOne = document.getElementById('review-0');\n    const reviewTwo = document.getElementById('review-1');\n    const reviewThree = document.getElementById('review-2');\n\n    const reviewOnePic = document.createElement('img');\n    reviewOnePic.src = 'https://cdn-icons.flaticon.com/png/128/3404/premium/3404199.png?token=exp=1652291464~hmac=af62ff749f397fc2376a005a77ceb6a0';\n    reviewOne.appendChild(reviewOnePic);\n    const reviewTwoPic = document.createElement('img');\n    reviewTwoPic.src = 'https://cdn-icons.flaticon.com/png/128/3404/premium/3404417.png?token=exp=1652292884~hmac=604c4c9ff519c129f528506f1a825261';\n    reviewTwo.appendChild(reviewTwoPic);\n    const reviewThreePic = document.createElement('img');\n    reviewThreePic.src = 'https://cdn-icons.flaticon.com/png/128/3404/premium/3404161.png?token=exp=1652292916~hmac=8a0d40ee88b589ab03f21554c505f872';\n    reviewThree.appendChild(reviewThreePic);\n\n\n    const reviewOneRating = document.createElement('h3');\n    reviewOneRating.textContent = '4/5';\n    reviewOne.appendChild(reviewOneRating);\n    const reviewTwoRating = document.createElement('h3');\n    reviewTwoRating.textContent = '5/5';\n    reviewTwo.appendChild(reviewTwoRating);\n    const reviewThreeRating = document.createElement('h3');\n    reviewThreeRating.textContent = '5/5';\n    reviewThree.appendChild(reviewThreeRating);\n    \n    const reviewOneText = document.createElement('p');\n    reviewOneText.textContent = 'Hands down my favorite dessert place in town.';\n    reviewOne.appendChild(reviewOneText);\n    const reviewTwoText = document.createElement('p');\n    reviewTwoText.textContent = 'The apple pie was the best pie I\\'ve ever had! Such a long line though.';\n    reviewTwo.appendChild(reviewTwoText);\n    const reviewThreeText = document.createElement('p');\n    reviewThreeText.textContent = 'The staff was so kind and the pie was delicious. Well worth the trip!';\n    reviewThree.appendChild(reviewThreeText);\n\n    return content;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reviews);\n\n//# sourceURL=webpack://restaurant-homepage/./src/components/reviews.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n\n\n\n\n//create header\n(0,_components_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//body initally contains home (home page will contain banner and reviews)\n(0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//create footer\n\n//# sourceURL=webpack://restaurant-homepage/./src/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/banner */ \"./src/components/banner.js\");\n/* harmony import */ var _components_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/reviews */ \"./src/components/reviews.js\");\n\n\n\nconst home = () => {\n    const body = document.createElement('div');\n    body.classList.add('body');\n    (0,_components_banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_components_reviews__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    // const content = document.getElementById('content');\n    // content.appendChild(body);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-homepage/./src/pages/home.js?");

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