(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categories_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/category-detail/category-detail.component */ "./src/app/categories/category-detail/category-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', redirectTo: '/categories', pathMatch: 'full' },
    { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"] },
    { path: 'detail/:id', component: _categories_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_4__["CategoryDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-dark fixed-top bg-dark\" style=\"color: #ffffff;font-style: italic;\">Best Food App</nav>\n<router-outlet></router-outlet>\n<!-- <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\"></div>\n    </div>\n  </div>\n <app-favourites></app-favourites>\n  <app-categories></app-categories> -->\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourites/favourites.component */ "./src/app/favourites/favourites.component.ts");
/* harmony import */ var _favourites_favourites_card_favourites_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favourites/favourites-card/favourites-card.component */ "./src/app/favourites/favourites-card/favourites-card.component.ts");
/* harmony import */ var _categories_categories_card_categories_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categories/categories-card/categories-card.component */ "./src/app/categories/categories-card/categories-card.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _categories_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categories/category-detail/category-detail.component */ "./src/app/categories/category-detail/category-detail.component.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_5__["FilterComponent"],
                _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_6__["FavouritesComponent"],
                _favourites_favourites_card_favourites_card_component__WEBPACK_IMPORTED_MODULE_7__["FavouritesCardComponent"],
                _categories_categories_card_categories_card_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesCardComponent"],
                _categories_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_10__["CategoryDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/categories-card/categories-card.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/categories/categories-card/categories-card.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/categories-card/categories-card.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/categories/categories-card/categories-card.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!(search.length || filter.length); else searchedList\">\n  <div class=\"row\">\n    <div *ngFor=\"let card of list[0] category\">\n      <div class=\"col-sm-4\">\n        <div class=\"card category\" style=\"width: 15rem;\" (click)=\"OnDishClick($event)\">\n          <img class=\"card-img\" src=\"{{ card.image }}\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"> {{ card.name }} <br>Rs.{{card.price }}</h5>\n            <a href=\"#\" class=\"btn btn-primary\">Add to Bag</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #searchedList>\n  <div *ngIf=\"!filter.length; else filteredList\">\n    <div class=\"row\">\n      <div *ngFor=\"let card of search\">\n        <div class=\"col-sm-4\">\n          <div class=\"card category\" style=\"width: 15rem;\" (click)=\"OnDishClick($event)\">\n            <img class=\"card-img\" src=\"{{ card.image }}\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\"> {{ card.name }} <br>Rs.{{card.price }}</h5>\n              <a href=\"#\" class=\"btn btn-primary\">Add to Bag</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n<ng-template #filteredList>\n  <div class=\"row\">\n    <div *ngFor=\"let card of filter\">\n      <div class=\"col-sm-4\">\n        <div class=\"card category\" style=\"width: 15rem;\" (click)=\"OnDishClick($event)\">\n          <img class=\"card-img\" src=\"{{ card.image }}\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"> {{ card.name }} <br>Rs.{{card.price }}</h5>\n            <a href=\"#\" class=\"btn btn-primary\">Add to Bag</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/categories/categories-card/categories-card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/categories/categories-card/categories-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesCardComponent", function() { return CategoriesCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recipe.service */ "./src/app/recipe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesCardComponent = /** @class */ (function () {
    function CategoriesCardComponent(route, router, recipe) {
        this.route = route;
        this.router = router;
        this.recipe = recipe;
        this.list = [];
    }
    CategoriesCardComponent.prototype.ngOnInit = function () {
        this.list = this.recipe.getRecipeList();
    };
    CategoriesCardComponent.prototype.OnDishClick = function (e) {
        console.log(e);
        var selectedCardName = e.currentTarget.lastElementChild.innerText.split('\n')[0];
        this.router.navigate(['detail/' + selectedCardName]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoriesCardComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoriesCardComponent.prototype, "filter", void 0);
    CategoriesCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories-card',
            template: __webpack_require__(/*! ./categories-card.component.html */ "./src/app/categories/categories-card/categories-card.component.html"),
            styles: [__webpack_require__(/*! ./categories-card.component.css */ "./src/app/categories/categories-card/categories-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]])
    ], CategoriesCardComponent);
    return CategoriesCardComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-favourites></app-favourites>\n<app-search></app-search>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/category-detail/category-detail.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/categories/category-detail/category-detail.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/category-detail/category-detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/categories/category-detail/category-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron detail\">\n  <img src=\"{{this.filteredList[0].image}}\" class=\"images\" alt=\"dish img\">\n    <h1 class=\"display-4\"> {{ this.filteredList[0].name}}</h1>\n    <p class=\"lead\">{{ this.filteredList[0].details}}</p>\n    <hr class=\"my-4\">\n    <p>Dish Price:{{ this.filteredList[0].price}}</p>\n    <p class=\"lead\">Dish Rating: {{ this.filteredList[0].rating}} Review: {{ this.filteredList[0].reviews}}    </p>\n  </div>\n"

/***/ }),

/***/ "./src/app/categories/category-detail/category-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/categories/category-detail/category-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recipe.service */ "./src/app/recipe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryDetailComponent = /** @class */ (function () {
    function CategoryDetailComponent(recipe, route) {
        this.recipe = recipe;
        this.route = route;
        this.list = [];
        this.filteredList = {};
    }
    CategoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = this.recipe.getRecipeList();
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        // console.log(this.id);
        // console.log(this.list);
        this.filteredList = this.list[0].filter(function (recipe) {
            return _this.id.includes(recipe.name);
            // console.log(recipe.category);
        });
        console.log(this.filteredList);
    };
    CategoryDetailComponent.prototype.ngOnDestroy = function () {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    };
    CategoryDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-detail',
            template: __webpack_require__(/*! ./category-detail.component.html */ "./src/app/categories/category-detail/category-detail.component.html"),
            styles: [__webpack_require__(/*! ./category-detail.component.css */ "./src/app/categories/category-detail/category-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CategoryDetailComponent);
    return CategoryDetailComponent;
}());



/***/ }),

/***/ "./src/app/favourites/favourites-card/favourites-card.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/favourites/favourites-card/favourites-card.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/favourites/favourites-card/favourites-card.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/favourites/favourites-card/favourites-card.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div *ngFor=\"let card of list\">\n        <div class=\"col-sm-6\">\n      <div class=\"card category\" style=\"width: 15rem;\" (click)=\"OnDishClick($event)\">\n        <img class=\"card-img\" src=\"{{ card.image }}\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ card.name }} <br>Rs.{{card.price }}</h5>\n          <a href=\"#\" class=\"btn btn-primary\">Reorder</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/favourites/favourites-card/favourites-card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/favourites/favourites-card/favourites-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: FavouritesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesCardComponent", function() { return FavouritesCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavouritesCardComponent = /** @class */ (function () {
    function FavouritesCardComponent(route, router) {
        this.route = route;
        this.router = router;
        this.list = [];
    }
    FavouritesCardComponent.prototype.ngOnInit = function () {
        var self = this;
        fetch('http://temp.dash.zeta.in/food.php')
            .then(function (response) {
            return response.json();
        })
            .then(function (myJson) {
            var cardsList = myJson;
            self.list.push(cardsList.recipes);
            self.list = self.list[0].filter(function (element, i) {
                // console.log(element.isFavourite === true);
                return element.isFavourite === true;
            });
            // console.log(result);
        })
            .catch(function (e) { return console.log(e); });
        // console.log(this.list);
        // console.log(this.img);
    };
    FavouritesCardComponent.prototype.OnDishClick = function (e) {
        console.log(e);
        var selectedCardName = e.currentTarget.lastElementChild.innerText.split('\n')[0];
        this.router.navigate(['detail/' + selectedCardName]);
    };
    FavouritesCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourites-card',
            template: __webpack_require__(/*! ./favourites-card.component.html */ "./src/app/favourites/favourites-card/favourites-card.component.html"),
            styles: [__webpack_require__(/*! ./favourites-card.component.css */ "./src/app/favourites/favourites-card/favourites-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FavouritesCardComponent);
    return FavouritesCardComponent;
}());



/***/ }),

/***/ "./src/app/favourites/favourites.component.css":
/*!*****************************************************!*\
  !*** ./src/app/favourites/favourites.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/favourites/favourites.component.html":
/*!******************************************************!*\
  !*** ./src/app/favourites/favourites.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <br>\n  <div class=\"block\">\n  <p class=\"favourites-header\">FAVOURITES<br>\n  <p class=\"tag\">Enjoy what you have been ordering..!</p>\n</div>\n<app-favourites-card></app-favourites-card>\n"

/***/ }),

/***/ "./src/app/favourites/favourites.component.ts":
/*!****************************************************!*\
  !*** ./src/app/favourites/favourites.component.ts ***!
  \****************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavouritesComponent = /** @class */ (function () {
    function FavouritesComponent() {
    }
    FavouritesComponent.prototype.ngOnInit = function () {
    };
    FavouritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourites',
            template: __webpack_require__(/*! ./favourites.component.html */ "./src/app/favourites/favourites.component.html"),
            styles: [__webpack_require__(/*! ./favourites.component.css */ "./src/app/favourites/favourites.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FavouritesComponent);
    return FavouritesComponent;
}());



/***/ }),

/***/ "./src/app/filter/filter.component.css":
/*!*********************************************!*\
  !*** ./src/app/filter/filter.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/filter/filter.component.html":
/*!**********************************************!*\
  !*** ./src/app/filter/filter.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\">\n    <div class=\"d-flex flex-row flex-nowrap\">\n        <div class=\"row\">\n\n    <div *ngFor=\"let card of categoryList[0]\">\n      <div class=\"col-sm favourites\">\n        <!-- <div class=\"card\" style=\"width: 15rem;\">\n          <img class=\"card-img\" src=\"{{ card.image }}\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ card.name }}</h5>\n          </div>\n        </div> -->\n        <!-- <div class=\"container\" (click)=\"OnCategoryClick($event)\">\n          <img class=\"images\" src=\"{{ card.image }}\" alt=\"Card image cap\">\n            <p class=\"title\" id=\"title\">{{ card.name }}</p>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n<div *ngIf=\"filteredList.length\">\n  <app-categories-card [filter]=\"filteredList\"></app-categories-card>\n</div> -->\n -->\n"

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.categoryList = [];
        this.recipeList = [];
        this.filteredList = [];
    }
    FilterComponent.prototype.ngOnInit = function () {
        var self = this;
        fetch('http://temp.dash.zeta.in/food.php')
            .then(function (response) {
            return response.json();
        })
            .then(function (myJson) {
            var cardsList = myJson;
            self.categoryList.push(cardsList.categories);
            self.recipeList.push(cardsList.recipes);
        })
            .catch(function (e) { return console.log(e); });
    };
    FilterComponent.prototype.OnCategoryClick = function (e) {
        // console.log(this.recipeList, this.categoryList );
        var category = e.currentTarget.lastElementChild.innerHTML;
        this.filteredList = this.recipeList[0].filter(function (recipe) {
            return recipe.category === category;
            // console.log(recipe.category);
        });
        console.log(this.filteredList);
    };
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/filter/filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/recipe.service.ts":
/*!***********************************!*\
  !*** ./src/app/recipe.service.ts ***!
  \***********************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipeService = /** @class */ (function () {
    function RecipeService() {
        this.categoryList = [];
        this.recipeList = [];
        // this.getList();
    }
    RecipeService.prototype.getList = function () {
        var self = this;
        fetch('http://temp.dash.zeta.in/food.php')
            .then(function (response) {
            return response.json();
        })
            .then(function (myJson) {
            var cardsList = myJson;
            self.categoryList.push(cardsList.categories);
            self.recipeList.push(cardsList.recipes);
        })
            .catch(function (e) { return console.log(e); });
        // return this.categoryList;
    };
    RecipeService.prototype.getCategoryList = function () {
        this.getList();
        return this.categoryList;
    };
    RecipeService.prototype.getRecipeList = function () {
        this.getList();
        return this.recipeList;
    };
    RecipeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<form class=\"form-inline md-form form-sm mt-0\" (ngSubmit)=\"OnSearchItem(f)\" #f=\"ngForm\">\n  <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n  <input class=\"form-control form-control-sm ml-3 w-75\" id=\"search\" name=\"search\" ngModel type=\"text\" placeholder=\"Search for a particular dish or ingredient\"\n    aria-label=\"Search\">\n</form>\n<br>\n<p class=\"categories-header\">SELECT CATEGORIES</p>\n<div class=\"row\">\n  <div *ngFor=\"let card of categoryList[0]\">\n    <div class=\"col-sm favourites\">\n      <!-- <div class=\"card\" style=\"width: 15rem;\">\n          <img class=\"card-img\" src=\"{{ card.image }}\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ card.name }}</h5>\n          </div>\n        </div> -->\n      <div class=\"container\" (click)=\"OnCategoryClick($event)\">\n        <img class=\"images\" src=\"{{ card.image }}\" alt=\"Card image cap\">\n        <p class=\"title\" id=\"title\">{{ card.name }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <div *ngIf=\"filteredList.length\"> -->\n<app-categories-card [filter]=\"filteredList\" [search]=\"newList\"></app-categories-card>\n<!-- </div> -->\n\n<!-- <app-categories-card [search]=\"newList\"></app-categories-card> -->\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(recipe) {
        this.recipe = recipe;
        this.categoryList = [];
        this.recipeList = [];
        this.filteredList = [];
        this.newList = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        //   const self = this;
        //   fetch('http://temp.dash.zeta.in/food.php')
        // .then(function(response) {
        //   return response.json();
        // })
        // .then(function(myJson) {
        //   const cardsList = myJson;
        //   self.categoryList.push(cardsList.categories);
        //   self.recipeList.push(cardsList.recipes);
        // })
        // .catch(e => console.log(e));
        this.categoryList = this.recipe.getCategoryList();
        this.recipeList = this.recipe.getRecipeList();
    };
    SearchComponent.prototype.OnSearchItem = function (form) {
        var val = form.value;
        this.newList = this.recipeList[0].filter(function (element) {
            // tslint:disable-next-line:max-line-length
            return element.name.toUpperCase().includes(val.search.toUpperCase()) || element.details.toUpperCase().includes(val.search.toUpperCase());
        });
        form.reset();
        // console.log(this.newList);
    };
    SearchComponent.prototype.OnCategoryClick = function (e) {
        // console.log(this.recipeList, this.categoryList );
        var category = e.currentTarget.lastElementChild.innerHTML;
        this.filteredList = this.recipeList[0].filter(function (recipe) {
            return recipe.category === category;
            // console.log(recipe.category);
        });
        console.log(this.filteredList);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SearchComponent.prototype, "slForm", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rajja\food-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map