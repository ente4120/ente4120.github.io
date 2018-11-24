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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar img{\r\n  height: 170px;\r\n  width: 170px;\r\n  right:50%;\r\n}\r\n\r\n\r\nh1{\r\n  color:purple ;\r\n}\r\n\r\n\r\n.navbar{\r\n  position: fixed;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .navbar {\r\n    position: static;\r\n  }\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <img src=\"../assets/cinema_logo.jpg\">\n</nav>\n<div class=\"container\">\n  <app-movie-list></app-movie-list>\n</div>\n"

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
        this.title = 'cinema';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movie-list/movie-list.component.ts");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _customPipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customPipe.pipe */ "./src/app/customPipe.pipe.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_5__["MovieListComponent"],
                _customPipe_pipe__WEBPACK_IMPORTED_MODULE_7__["AlphaNumPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_movies_service__WEBPACK_IMPORTED_MODULE_6__["MoviesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customPipe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/customPipe.pipe.ts ***!
  \************************************/
/*! exports provided: AlphaNumPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaNumPipe", function() { return AlphaNumPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlphaNumPipe = /** @class */ (function () {
    function AlphaNumPipe() {
    }
    AlphaNumPipe.prototype.transform = function (value) {
        return value.replace(/[^a-zA-Z0-9 ]/g, '');
    };
    AlphaNumPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'alphaNum'
        })
    ], AlphaNumPipe);
    return AlphaNumPipe;
}());



/***/ }),

/***/ "./src/app/movie-list/movie-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flip-card {\r\n  background-color: transparent;\r\n  width: 100%;\r\n  height: 350px;\r\n  display:inline-block;\r\n  margin-top:15px;\r\n}\r\n\r\n.flip-card img{\r\n  border-radius: 10%;\r\n}\r\n\r\n.flip-card .flip-card-inner .flip-card-front img{\r\n  width:100%;\r\n  height:100%;\r\n}\r\n\r\n.flip-card-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: -webkit-transform 0.6s;\r\n  transition: transform 0.6s;\r\n  transition: transform 0.6s, -webkit-transform 0.6s;\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  border-radius: 10%;\r\n}\r\n\r\n.flip-card:hover .flip-card-inner {\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  border-radius: 10%;\r\n}\r\n\r\n.flip-card-front, .flip-card-back {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  border-radius: 10%;\r\n}\r\n\r\n.flip-card-front {\r\n  background-color: #bbb;\r\n  color: black;\r\n  z-index: 2;\r\n}\r\n\r\n.flip-card-back {\r\n  padding-top: 10px;\r\n  background-color:black;\r\n  color: white;\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  z-index: 1;\r\n}\r\n\r\n.flip-card-back button{\r\n  margin-left: 10px;\r\n}\r\n\r\n.flip-card-front h6{\r\n  margin-top: -60px;\r\n  padding: 5px;\r\n}\r\n\r\n.flip-card-back h6{\r\n  padding: 5px;\r\n}\r\n\r\ninput.ng-invalid{\r\n  border: 1px solid red;\r\n}\r\n\r\nbutton{\r\n  margin-top:10px;\r\n}\r\n\r\n.jumbotron{\r\n  margin-top:10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/movie-list/movie-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"flip-card col-lg-3\" *ngFor=\"let movie of movies\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\">\n        <img *ngIf=\"movie.Poster!='N/A'\" src=\"{{movie.Poster}}\">\n        <img *ngIf=\"movie.Poster=='N/A'\" src=\"http://moviewebsite.eu/assets/images/imdbnoimage.jpg\">\n      </div>\n      <div class=\"flip-card-back\">\n        <h6>{{movie.Title | alphaNum | titlecase}}</h6>\n        <p>Year - {{movie.Year}}</p>\n        <p>Runtime - {{movie.Runtime}}</p>\n        <p>Genre - {{movie.Genre}}</p>\n        <p>Director - {{movie.Director}}</p>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#editModalLabel\" (click)=\"copyMovie(movie)\">Edit</button>\n        <button type=\"button\" class=\"btn btn-danger btn-sm\" data-toggle=\"modal\" data-target=\"#deleteModalLabel\" (click)=\"copyMovie(movie)\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"this.moviesService.getMovies();\">Load More Movies</button>\n<button type=\"button\" class=\"btn btn-info btn-block\" data-toggle=\"modal\" data-target=\"#newMovieLabel\">Create New Movie</button>\n\n<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <p class=\"lead\">Developed by Idan Ente | Ente4120@Gmail.com</p>\n    </div>\n  </div>\n\n<div class=\"modal fade\" id=\"deleteModalLabel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete \"{{selectedMovie.Title}}\"</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          Are you sure you want to delete this movie ?\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteMovie()\" data-dismiss=\"modal\">Delete</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"editModalLabel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Movie</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n              <form #f=\"ngForm\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-2 col-form-label\">Title</label>\n                    <div class=\"col-sm-10\">\n                      <input class=\"form-control-plaintext\" [(ngModel)]=\"selectedMovie.Title\" name=\"Title\" (change)=\"checkTitle()\" required>\n                      <div class=\"form-control-feedback alert-danger\" *ngIf=\"!checkTitleVal\">\n                          This title is used!\n                       </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                      <label class=\"col-sm-2 col-form-label\">Year</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control-plaintext\" [(ngModel)]=\"selectedMovie.Year\" name=\"Year\" required pattern=\"^(19|20)\\d{2}$\">\n                      </div>\n                   </div>\n                   <div class=\"form-group row\">\n                      <label class=\"col-sm-2 col-form-label\">Runtime</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control-plaintext\" [(ngModel)]=\"selectedMovie.Runtime\" name=\"Runtime\" required>\n                      </div>\n                   </div>\n                   <div class=\"form-group row\">\n                      <label class=\"col-sm-2 col-form-label\">Genre</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control-plaintext\" [(ngModel)]=\"selectedMovie.Genre\" name=\"Genre\" required>\n                      </div>\n                   </div>\n                   <div class=\"form-group row\">\n                      <label class=\"col-sm-2 col-form-label\">Director</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control-plaintext\" [(ngModel)]=\"selectedMovie.Director\" name=\"Director\" required>\n                      </div>\n                   </div>\n                </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"updateMovie()\" data-dismiss=\"modal\" [disabled]=\"!f.valid||!checkTitleVal\">Save</button>\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"newMovieLabel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Movie</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #f=\"ngForm\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-2 col-form-label\">Title</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control-plaintext\" [(ngModel)]=\"newMovie.Title\" name=\"Title\" (change)=\"checkTitle()\" required>\n                        <div class=\"form-control-feedback alert-danger\" *ngIf=\"!checkTitleVal\">\n                            This title is used!\n                         </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 col-form-label\">Year</label>\n                        <div class=\"col-sm-10\">\n                          <input class=\"form-control-plaintext\" [(ngModel)]=\"newMovie.Year\" name=\"Year\" required pattern=\"^(19|20)\\d{2}$\">\n                        </div>\n                     </div>\n                     <div class=\"form-group row\">\n                        <label class=\"col-sm-2 col-form-label\">Runtime</label>\n                        <div class=\"col-sm-10\">\n                          <input class=\"form-control-plaintext\" [(ngModel)]=\"newMovie.Runtime\" name=\"Runtime\" required>\n                        </div>\n                     </div>\n                     <div class=\"form-group row\">\n                        <label class=\"col-sm-2 col-form-label\">Genre</label>\n                        <div class=\"col-sm-10\">\n                          <input class=\"form-control-plaintext\" [(ngModel)]=\"newMovie.Genre\" name=\"Genre\" required>\n                        </div>\n                     </div>\n                     <div class=\"form-group row\">\n                        <label class=\"col-sm-2 col-form-label\">Director</label>\n                        <div class=\"col-sm-10\">\n                          <input class=\"form-control-plaintext\" [(ngModel)]=\"newMovie.Director\" name=\"Director\" required>\n                        </div>\n                     </div>\n                  </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"addNewMovie()\" data-dismiss=\"modal\" [disabled]=\"!f.valid||!checkTitleVal\">Create</button>\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/movie-list/movie-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.ts ***!
  \****************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(moviesService) {
        this.moviesService = moviesService;
        this.movies = [];
        this.selectedMovie = { imdbID: '', Title: '', Year: 2018, Runtime: '', Genre: '', Director: '', Poster: '' };
        this.newMovie = { imdbID: '', Title: '', Year: 2018, Runtime: '', Genre: '', Director: '', Poster: 'N/A' };
        this.checkTitleVal = true;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moviesService.getMovies();
        this.moviesService.getMovies();
        this.moviesSub = this.moviesService.getMoviesUpdateListener()
            .subscribe(function (movies) {
            _this.movies = movies;
        });
    };
    MovieListComponent.prototype.deleteMovie = function () {
        this.moviesService.deleteMovie(this.selectedMovie.imdbID);
    };
    MovieListComponent.prototype.updateMovie = function () {
        if (this.checkTitleVal) {
            console.log(this.selectedMovie.Title);
            this.moviesService.updateMovie(this.selectedMovie);
        }
    };
    MovieListComponent.prototype.copyMovie = function (movie) {
        this.selectedMovie.imdbID = movie.imdbID;
        this.selectedMovie.Title = movie.Title;
        this.selectedMovie.Year = movie.Year;
        this.selectedMovie.Runtime = movie.Runtime;
        this.selectedMovie.Genre = movie.Genre;
        this.selectedMovie.Director = movie.Director;
    };
    MovieListComponent.prototype.checkTitle = function () {
        var _this = this;
        this.checkTitleVal = true;
        this.movies.forEach(function (element) {
            if (element.Title.toUpperCase() === _this.selectedMovie.Title.toUpperCase()) {
                _this.checkTitleVal = false;
                return;
            }
        });
    };
    MovieListComponent.prototype.addNewMovie = function () {
        this.movies.push(this.newMovie);
        this.moviesService.addNewMovie(this.newMovie);
    };
    MovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! .//movie-list.component.html */ "./src/app/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! .//movie-list.component.css */ "./src/app/movie-list/movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/movies.service.ts":
/*!***********************************!*\
  !*** ./src/app/movies.service.ts ***!
  \***********************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
        this.movies = [];
        this.moviesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pageLoaded = 1;
    }
    MoviesService.prototype.getMovies = function () {
        var _this = this;
        this.http
            .get('www.omdbapi.com/?s=super&type=movie&apikey=994bc2b9&page=' + (this.pageLoaded++))
            .subscribe(function (data) {
            var tempMoviesList = [];
            tempMoviesList = data.Search;
            tempMoviesList.forEach(function (element) {
                _this.getMovieDetails(element.imdbID);
            });
            _this.moviesUpdated.next(_this.movies.slice());
        });
    };
    MoviesService.prototype.getMovieDetails = function (id) {
        var _this = this;
        this.http
            .get('www.omdbapi.com/?i=' + id + '&apikey=994bc2b9')
            .subscribe(function (data) {
            _this.movies.push(data);
            _this.moviesUpdated.next(_this.movies.slice());
        });
    };
    MoviesService.prototype.getMoviesUpdateListener = function () {
        return this.moviesUpdated.asObservable();
    };
    MoviesService.prototype.deleteMovie = function (movieId) {
        var updatedMovies = this.movies.filter(function (movie) { return movie.imdbID !== movieId; });
        this.movies = updatedMovies;
        this.moviesUpdated.next(this.movies.slice());
    };
    MoviesService.prototype.updateMovie = function (movie) {
        this.movies.forEach(function (element) {
            if (element.imdbID = movie.imdbID) {
                element.Title = movie.Title;
                element.Year = movie.Year;
                element.Runtime = movie.Runtime;
                element.Genre = movie.Genre;
                element.Director = movie.Director;
            }
        });
    };
    MoviesService.prototype.addNewMovie = function (movie) {
        this.movies.push(movie);
    };
    MoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Idan\cinema\cinema\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map