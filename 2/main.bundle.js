webpackJsonp([0,3],{

/***/ 357:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 357;


/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(466);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/NewbieTech/Documents/MuzMatch/ngx-facebook-example/src/main.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(fb) {
        this.fb = fb;
        console.log('Initializing Facebook');
        fb.init({
            appId: '440670959472188',
            version: 'v2.9'
        });
    }
    /**
     * Login with minimal permissions. This allows you to see their public profile only.
     */
    AppComponent.prototype.login = function () {
        this.fb.login()
            .then(function (res) {
            console.log('Logged in', res);
        })
            .catch(this.handleError);
    };
    /**
     * Login with additional permissions/options
     */
    AppComponent.prototype.loginWithOptions = function () {
        var loginOptions = {
            enable_profile_selector: true,
            return_scopes: true,
            scope: 'public_profile,user_friends,email,pages_show_list'
        };
        this.fb.login(loginOptions)
            .then(function (res) {
            console.log('Logged in', res);
        })
            .catch(this.handleError);
    };
    AppComponent.prototype.getLoginStatus = function () {
        this.fb.getLoginStatus()
            .then(console.log.bind(console))
            .catch(console.error.bind(console));
    };
    /**
     * Get the user's profile
     */
    AppComponent.prototype.getProfile = function () {
        this.fb.api('/me')
            .then(function (res) {
            console.log('Got the users profile', res);
        })
            .catch(this.handleError);
    };
    AppComponent.prototype.getPics = function () {
        var _this = this;
        this.fb.login()
            .then(function (res) {
            console.log('Logged in', res);
        }).then(function () {
            _this.fb.api('/me?fields=albums.limit(5){name,count,cover_photo{picture}}').then(function (response) {
                console.log(response);
            }).catch(_this.handleError);
        })
            .catch(this.handleError);
        /*
            this.fb.api('/me?fields=albums.limit(5){name,count,cover_photo{picture}}')
              .then((res: any) => {
                console.log('Got the users pic', res);
              })
              .catch(this.handleError); */
    };
    AppComponent.prototype.getPics2 = function () {
        this.fb.api('/me?fields=albums.limit(5){name,count,cover_photo{picture}}').then(function (response) {
            console.log(response);
        }).catch(this.handleError);
        /*
            this.fb.api('/me?fields=albums.limit(5){name,count,cover_photo{picture}}')
              .then((res: any) => {
                console.log('Got the users pic', res);
              })
              .catch(this.handleError); */
    };
    /**
     * Get the users friends
     */
    AppComponent.prototype.getFriends = function () {
        this.fb.api('/me/friends')
            .then(function (res) {
            console.log('Got the users friends', res);
        })
            .catch(this.handleError);
    };
    /**
     * Show the share dialog
     */
    AppComponent.prototype.share = function () {
        var options = {
            method: 'share',
            href: 'https://github.com/zyramedia/ng2-facebook-sdk'
        };
        this.fb.ui(options)
            .then(function (res) {
            console.log('Got the users profile', res);
        })
            .catch(this.handleError);
    };
    AppComponent.prototype.playVideo = function () {
        this.video.play();
    };
    AppComponent.prototype.onVideoEvent = function (ev) {
        console.log('Video event fired: ' + ev);
    };
    AppComponent.prototype.pauseVideo = function () {
        this.video.pause();
    };
    /**
     * This is a convenience method for the sake of this example project.
     * Do not use this in production, it's better to handle errors separately.
     * @param error
     */
    AppComponent.prototype.handleError = function (error) {
        console.error('Error processing action', error);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["a" /* FBVideoComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["a" /* FBVideoComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["a" /* FBVideoComponent */]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "video", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(623),
            styles: [
                '.container { max-width: 700px; background: #f7f7f7; margin: 50px auto; padding: 30px; border-radius: 15px; }',
                'h2 { margin-bottom: 20px; }',
                'h4 { margin-top: 40px; margin-bottom: 10px; }'
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/NewbieTech/Documents/MuzMatch/ngx-facebook-example/src/app.component.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["c" /* FacebookModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/NewbieTech/Documents/MuzMatch/ngx-facebook-example/src/app.module.js.map

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/NewbieTech/Documents/MuzMatch/ngx-facebook-example/src/environment.js.map

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/NewbieTech/Documents/MuzMatch/ngx-facebook-example/src/polyfills.js.map

/***/ },

/***/ 623:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <h1>\r\n    ngx-facebook Example\r\n  </h1>\r\n\r\n  <p>\r\n    This is a basic example on how to use the ngx-facebook package. Please check your console for responses. There will be no visual feedback here.\r\n  </p>\r\n\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n  <h2>Facebook Service</h2>\r\n\r\n  <button (click)=\"login()\" class=\"btn btn-lg btn-primary btn-block\">\r\n    Login\r\n  </button>\r\n\r\n  <button (click)=\"loginWithOptions()\" class=\"btn btn-lg btn-primary btn-block\">\r\n    Login with Options\r\n  </button>\r\n\r\n  <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"getLoginStatus()\">\r\n    Get login status\r\n  </button>\r\n  <button (click)=\"getPics()\" class=\"btn btn-lg btn-primary btn-block\">\r\n    Get Cover Pics\r\n  </button>\r\n\r\n  <button (click)=\"getPics2()\" class=\"btn btn-lg btn-primary btn-block\">\r\n    Get Cover Pics 2 Without Login\r\n  </button>\r\n  <button (click)=\"getProfile()\" class=\"btn btn-lg btn-primary btn-block\">\r\n    Get profile\r\n  </button>\r\n\r\n  <button (click)=\"getFriends()\" class=\"btn btn-lg btn-primary btn-block\">\r\n    Get friends\r\n  </button>\r\n\r\n  <button (click)=\"share()\" class=\"btn btn-lg btn-primary btn-block\">\r\n    Share dialog\r\n  </button>\r\n\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <h2>Components</h2>\r\n\r\n  <h4>fb-like</h4>\r\n  <fb-like href=\"https://zyramedia.com\"></fb-like>\r\n\r\n  <h4>fb-follow</h4>\r\n  <fb-follow href=\"https://www.facebook.com/zuck\"></fb-follow>\r\n\r\n  <h4>fb-page</h4>\r\n  <fb-page href=\"https://facebook.com/zyramedia\"></fb-page>\r\n\r\n  <h4>fb-quote</h4>\r\n  <fb-quote href=\"https://github.com/zyra/ngx-facebook\"></fb-quote>\r\n  <p>Highlight any text on this page and see what happens.</p>\r\n\r\n  <h4>fb-save</h4>\r\n  <fb-save uri=\"https://github.com/zyra/ngx-facebook/\"></fb-save>\r\n\r\n  <h4>fb-send</h4>\r\n  <fb-send href=\"https://github.com/zyra/ngx-facebook/\"></fb-send>\r\n\r\n  <h4>fb-share</h4>\r\n  <fb-share href=\"https://github.com/zyra/ngx-facebook/\"></fb-share>\r\n\r\n  <h4>fb-video</h4>\r\n  <fb-video href=\"https://www.facebook.com/SpaceX/videos/10157486010400131/\"\r\n            (startPlaying)=\"onVideoEvent('startedPlaying')\"\r\n            (paused)=\"onVideoEvent('paused')\"\r\n            (finishedPlaying)=\"onVideoEvent('finishedPlaying')\"\r\n            (startedBuffering)=\"onVideoEvent('startedBuffering')\"\r\n            (finishedBuffering)=\"onVideoEvent('finishedBuffering')\"\r\n            (error)=\"onVideoEvent('error')\"\r\n  ></fb-video>\r\n  <br>\r\n  <button class=\"btn btn-primary\" (click)=\"playVideo()\">Play</button>\r\n  <button class=\"btn btn-primary\" (click)=\"pauseVideo()\">Pause</button>\r\n\r\n  <h4>fb-comments</h4>\r\n  <fb-comments numposts=\"3\"></fb-comments>\r\n\r\n  <h4>fb-comment-embed</h4>\r\n  <fb-comment-embed href=\"https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185\" width=\"500\"></fb-comment-embed>\r\n\r\n  <h4>fb-post</h4>\r\n  <fb-post href=\"https://www.facebook.com/20531316728/posts/10154009990506729/\"></fb-post>\r\n\r\n\r\n</div>\r\n"

/***/ },

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(358);


/***/ }

},[637]);
//# sourceMappingURL=main.bundle.map