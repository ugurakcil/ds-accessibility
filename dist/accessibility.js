(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dsAccessibility", [], factory);
	else if(typeof exports === 'object')
		exports["dsAccessibility"] = factory();
	else
		root["dsAccessibility"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DS_LOCALE": () => (/* binding */ DS_LOCALE),
/* harmony export */   "DS_LOCAL_STORAGE_OPTIONS_KEY": () => (/* binding */ DS_LOCAL_STORAGE_OPTIONS_KEY),
/* harmony export */   "DS_TEMPLATE": () => (/* binding */ DS_TEMPLATE),
/* harmony export */   "DS_UNITS": () => (/* binding */ DS_UNITS)
/* harmony export */ });
const DS_LOCALE =  {
    "en": {
        "zoom-out": "Zoom Out",
        "zoom-in": "Zoom In",
        "invert": "Invert",
        "bigger-cursor": "Bigger Cursor",
        "brightness": "Brightness",
        "contrast": "Contrast",
        "grayscale": "Grayscale",
        "reset": "Undo Changes"
    },
    "tr": {
        "zoom-out": "Uzaklaş",
        "zoom-in": "Yaklaş",
        "invert": "Ters Çevir",
        "bigger-cursor": "Büyük İmleç",
        "brightness": "Parlaklık",
        "contrast": "Zıtlık",
        "grayscale": "Gri Ton",
        "reset": "Geri Al"
    },
};

const DS_TEMPLATE = `<div class="ds-accessibility-cursor-workaround"></div>
<div class="ds-accessibility ds-accessibility-collapsed">
    <div class="ds-accessibility-container">

        <div class="ds-accessibility-expand-button">
            <div class="ds-accessibility-icon ds-accessibility-icon--expand"></div>
        </div>

        <div class="ds-accessibility-menu">
            <div class="ds-accessibility-close-button">
                <div class="ds-accessibility-icon ds-accessibility-icon--close"></div>
            </div>

            <div class="ds-accessibility-menu-button ds-accessibility-zoom-out-button">
                <div class="ds-accessibility-icon ds-accessibility-icon--zoom-out"></div>
                <span data-lang="zoom-out">Zoom Out</span>
            </div>

            <div class="ds-accessibility-menu-button ds-accessibility-zoom-in-button">
                <div class="ds-accessibility-icon ds-accessibility-icon--zoom-in"></div>
                <span data-lang="zoom-in">Zoom In</span>
            </div>

            <div class="ds-accessibility-menu-button ds-accessibility-invert-button">
                <div class="ds-accessibility-icon ds-accessibility-icon--invert"></div>
                <span data-lang="invert">Invert</span>
            </div>

            <div class="ds-accessibility-menu-button ds-accessibility-cursor-button">
                <div class="ds-accessibility-icon ds-accessibility-icon--cursor"></div>
                <span data-lang="bigger-cursor">Bigger Cursor</span>
            </div>

            <div class="ds-accessibility-menu-button ds-accessibility-brightness-button">
                <div class="ds-accessibility-icon ds-accessibility-icon--brightness"></div>
                <span data-lang="brightness">Brightness</span>
            </div>

            <div class="ds-accessibility-menu-button ds-accessibility-contrast-button">
                <div class="ds-accessibility-icon ds-accessibility-icon--contrast"></div>
                <span data-lang="contrast">Contrast</span>
            </div>

            <div class="ds-accessibility-menu-button ds-accessibility-monochrome-button">
                <div class="ds-accessibility-icon ds-accessibility-icon--monochrome"></div>
                <span data-lang="grayscale">Monochrome</span>
            </div>

            <div class="ds-accessibility-menu-button ds-accessibility-reset-button">
                <div class="ds-accessibility-icon ds-accessibility-icon--revert"></div>
                <span data-lang="reset">Revert</span>
            </div>
        </div>
    </div>
</div>`;

const DS_LOCAL_STORAGE_OPTIONS_KEY = 'ds-accessibility-config';

const DS_UNITS = ['px', 'cm', 'em', 'ex', 'in', 'mm', 'pc', 'pt', 'vh', 'vw', 'vmin'];


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyTextZoom": () => (/* binding */ applyTextZoom),
/* harmony export */   "fadeIn": () => (/* binding */ fadeIn),
/* harmony export */   "fadeOut": () => (/* binding */ fadeOut),
/* harmony export */   "getFontSize": () => (/* binding */ getFontSize),
/* harmony export */   "getIconClass": () => (/* binding */ getIconClass),
/* harmony export */   "getLanguages": () => (/* binding */ getLanguages),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "getUserOptions": () => (/* binding */ getUserOptions),
/* harmony export */   "isGoogleChrome": () => (/* binding */ isGoogleChrome),
/* harmony export */   "isMobileBrowser": () => (/* binding */ isMobileBrowser),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "setUserOptions": () => (/* binding */ setUserOptions),
/* harmony export */   "translateTheme": () => (/* binding */ translateTheme)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");


function getFontSize(el){
    return window.getComputedStyle(el).fontSize
}

function fadeOut(el){
    el.style.opacity = 1;
  
    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
};

function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);

        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

function getUnit(fontSize) {
    fontSize = fontSize || '';
    return _constants_js__WEBPACK_IMPORTED_MODULE_0__.DS_UNITS.filter(unit => fontSize.match(new RegExp(unit + '$', 'gi')))
        .pop()
}

function isGoogleChrome() {
    let isChromium = window.chrome;
    let winNav = window.navigator;
    let vendorName = winNav.vendor;
    let isOpera = winNav.userAgent.indexOf("OPR") > -1;
    let isIEedge = winNav.userAgent.indexOf("Edge") > -1;

    return (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false);
}

function isMobileBrowser() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let product = userAgent.substr(0, 4);
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(product);
}
    
function getUserOptions() {
    let data;

    try {
        data = localStorage.getItem(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DS_LOCAL_STORAGE_OPTIONS_KEY);
        data = JSON.parse(data);
    } catch (e) {
    }

    if (data && typeof data === "object") {
        return data;
    } else {
        return {};
    }
}

function setUserOptions(options) {
    localStorage.setItem(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DS_LOCAL_STORAGE_OPTIONS_KEY, JSON.stringify(options));
}

function applyTextZoom(selector, zoom) {
    selector = selector.split(',').map(function(row) { 
        return row + ':not(.ds-accessibility *)' 
    }).join(',')
    
    document.querySelectorAll(selector) // 
        .forEach(function (thisEl) {
            let element = thisEl;

            let originalFontSize = element.getAttribute('data-ds-accessibility-text-original');
            
            if (!originalFontSize) {
                originalFontSize = getFontSize(element);
                element.setAttribute('data-ds-accessibility-text-original', originalFontSize);
            }

            let units = getUnit(originalFontSize) || '';
            let fontSize = parseFloat(originalFontSize) * zoom;

            element.style.fontSize = fontSize + units;
        });
}

function translateTheme(lang) {
    let menu = document.getElementsByClassName("ds-accessibility-menu");

    Object.keys(lang)
        .forEach((key, index) => {
            if(document.querySelector('[data-lang="' + key + '"]'))
                document.querySelector('[data-lang="' + key + '"]').innerHTML = lang[key];
        });
}
    
function getLanguages(langs, map) {
    let res = {};

    langs.forEach((key) => {
        let value = (map && map[key]) || (_constants_js__WEBPACK_IMPORTED_MODULE_0__.DS_LOCALE[key]);
        if (isPlainObject(value)) {
            res[key] = value;
        }
        else {
            console.error(key + 'language does not set!')
        }
    });

    return res;
}

function getIconClass(size) {
    let prefix = 'ds-accessibility-size-';
    return prefix + size;
}

function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dsAccessibility)
/* harmony export */ });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");




class dsAccessibility {
    
    constructor(args) {
        // Prevent run in Node env
        if (typeof window === 'undefined') {
            return
        }

        this.generator(args)
    }
    
    generator(customOptions) {
        let element = document.getElementsByTagName('body')[0];

        if(customOptions.wrapper)
            element = customOptions.wrapper;
    
        customOptions = customOptions || {};
    
        let defaultOptions = {
            isMenuOpened: false,
            highlightedLinks: false,
            isMobileEnabled: true,
            grayscale: 0,
            brightness: 100,
            contrast: 100,
            maxZoomLevel: 3,
            minZoomLevel: 0.5,
            zoomStep: 0.2,
            zoom: 1,
            cursor: false,
            textSelector: '.ds-accessibility-text',
            invert: false,
            localization: ['tr'],
            iconSize: 'm'
        };
    
        let userOptions = _helpers_js__WEBPACK_IMPORTED_MODULE_2__.getUserOptions();
        let initialOptions = Object.assign({}, defaultOptions, customOptions);
        let options = Object.assign({}, initialOptions, userOptions, customOptions);
    
        if (!options.isMobileEnabled && _helpers_js__WEBPACK_IMPORTED_MODULE_2__.isMobileBrowser()) {
            console.log('disabling accessibility plugin due to mobile browser');
            return;
        }
    
        element.innerHTML += _constants_js__WEBPACK_IMPORTED_MODULE_1__.DS_TEMPLATE;
    
        let html = document.getElementsByTagName('html')[0];
        let body = document.getElementsByTagName('body')[0];
        let container = document.getElementsByClassName("ds-accessibility")[0];
        let menu = document.getElementsByClassName("ds-accessibility-menu")[0];
        let expandButton = document.getElementsByClassName("ds-accessibility-expand-button")[0];
        let closeButton = document.getElementsByClassName("ds-accessibility-close-button")[0];
        let invertButton = document.getElementsByClassName("ds-accessibility-invert-button")[0];
        let cursorButton = document.getElementsByClassName("ds-accessibility-cursor-button")[0];
        let zoomInButton = document.getElementsByClassName("ds-accessibility-zoom-in-button")[0];
        let zoomOutButton = document.getElementsByClassName("ds-accessibility-zoom-out-button")[0];
        let brightnessButton = document.getElementsByClassName("ds-accessibility-brightness-button")[0];
        let monochromeButton = document.getElementsByClassName("ds-accessibility-monochrome-button")[0];
        let contrastButton = document.getElementsByClassName("ds-accessibility-contrast-button")[0];
        let resetButton = document.getElementsByClassName("ds-accessibility-reset-button")[0];
        let cursorWorkaround = document.getElementsByClassName("ds-accessibility-cursor-workaround")[0];
    
        container.classList.add(_helpers_js__WEBPACK_IMPORTED_MODULE_2__.getIconClass(options.iconSize));
    
        let languages = _helpers_js__WEBPACK_IMPORTED_MODULE_2__.getLanguages(options.localization, options.localizationMap);
        _helpers_js__WEBPACK_IMPORTED_MODULE_2__.translateTheme(languages[Object.keys(languages)[0]]);
    
        html.classList.add("ds-accessibility-zoom");
    
        brightnessButton.addEventListener('click', (event) => {
            options.brightness += 50;
    
            if (options.brightness > 150) {
                options.brightness = 50;
            }
    
            apply();
        });
    
        contrastButton.addEventListener('click', (event) => {
            options.contrast += 50;
    
            if (options.contrast > 150) {
                options.contrast = 50;
            }
    
            apply();
        });
    
        monochromeButton.addEventListener('click', (event) => {
            options.grayscale += 100;
            if (options.grayscale > 100) {
                options.grayscale = 0;
            }
            apply();
        });
    
        resetButton.addEventListener('click', (event) => {
            options = Object.assign({}, initialOptions);
            options.isMenuOpened = false;
    
            apply();
        });
    
        zoomInButton.addEventListener('click', (event) => {
            options.zoom = Math.min(options.maxZoomLevel, options.zoom + options.zoomStep);
            apply();
        });
    
        zoomOutButton.addEventListener('click', (event) => {
            options.zoom = Math.max(options.minZoomLevel, options.zoom - options.zoomStep);
            apply();
        });
    
        invertButton.addEventListener('click', (event) => {
            options.invert = !options.invert;
            apply();
        });
    
        cursorButton.addEventListener('click', (event) => {
            options.cursor = !options.cursor;
            apply();
        });
    
        expandButton.addEventListener('click', (event) => {
            options.isMenuOpened = true;
            apply();
        });
    
        closeButton.addEventListener('click', (event) => {
            options.isMenuOpened = false;
            apply();
        });
    
        document.addEventListener('click', (event) => {
            console.log(event.target)
    
            if (event.target.closest('.ds-accessibility') && !event.target.closest('.ds-accessibility').length) {
                if (options.isMenuOpened) {
                    options.isMenuOpened = false;
                    apply();
                }
            }
        });
    
        expandButton.style.display = "none";
        menu.style.display = "none";
    
        if (customOptions.isMenuOpened) {
            options.isMenuOpened = true;
            menu.style.display = "";
            expandButton.style.display = "none";
        }
        else {
            options.isMenuOpened = false;
        }
    
        cursorWorkaround.style.display = "none";
    
        let googleChrome = _helpers_js__WEBPACK_IMPORTED_MODULE_2__.isGoogleChrome();
        if (!googleChrome) {
    
            document.addEventListener('mousemove', (e) => {
    
                if (!options.cursor) {
                    return;
                }
    
                cursorWorkaround.style['left'] = e.pageX / options.zoom;
                cursorWorkaround.style['top'] = e.pageY / options.zoom;
            });
        }
    
    
        _helpers_js__WEBPACK_IMPORTED_MODULE_2__.applyTextZoom(options.textSelector, 1);
    
        apply();
    
        function apply() {
            if (options.isMenuOpened) {
                _helpers_js__WEBPACK_IMPORTED_MODULE_2__.fadeOut(expandButton);
                _helpers_js__WEBPACK_IMPORTED_MODULE_2__.fadeIn(menu);
    
                container.classList.remove("ds-accessibility-collapsed");
                container.classList.add("ds-accessibility-expanded");
            }
            else {
                _helpers_js__WEBPACK_IMPORTED_MODULE_2__.fadeIn(expandButton);
                _helpers_js__WEBPACK_IMPORTED_MODULE_2__.fadeOut(menu);
    
                container.classList.remove("ds-accessibility-expanded");
                container.classList.add("ds-accessibility-collapsed");
            }
    
    
            let filters = [];
            if (options.invert) {
                filters.push('invert(1)');
            }
    
            filters.push('contrast(' + options.contrast + '%)');
            filters.push('brightness(' + options.brightness + '%)');
            filters.push('grayscale(' + options.grayscale + '%)');
            let filterValue = filters.join(' ');
            html.style['filter'] = filterValue;
    
            _helpers_js__WEBPACK_IMPORTED_MODULE_2__.applyTextZoom(options.textSelector, options.zoom);
    
            if (options.cursor) {
                html.classList.add("ds-accessibility-cursor");
    
                if (!googleChrome) {
                    cursorWorkaround.style.display = "";
                }
            }
            else {
                html.classList.remove("ds-accessibility-cursor");
                if (!googleChrome) {
    
                    cursorWorkaround.style.display = "none";
                }
            }
    
            _helpers_js__WEBPACK_IMPORTED_MODULE_2__.setUserOptions(options);
        }
    }
}


/*
export default class dsAccessibility {
    
    constructor(args) {
        alert('test')
        // Prevent run in Node env
        if (typeof window === 'undefined') {
            return
        }

        helpers.generator(args)
    }
}
*/
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=accessibility.js.map