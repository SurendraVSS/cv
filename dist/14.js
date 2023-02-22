"use strict";
exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__);





let FaqComponent = class FaqComponent {
    constructor(apiList, dataService, seoservice, router, canonicalservice, platformId, cleverService, previousRouteService) {
        this.apiList = apiList;
        this.dataService = dataService;
        this.seoservice = seoservice;
        this.router = router;
        this.canonicalservice = canonicalservice;
        this.platformId = platformId;
        this.cleverService = cleverService;
        this.previousRouteService = previousRouteService;
        this.metatitle = "FAQ - Frequently Asked Questions - Tata Motors Online Sales";
        this.metadesc = "Frequently Asked Questions - Tata Motors . Know more about Tata Motors vehicles";
        this.pagetitle = "Help";
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.currentPage = 1;
        this.offset = 0;
        this.showingrecords = 0;
        this.previousUrl = this.previousRouteService.getPreviousUrl();
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            try {
                this.cleverService.onPageView(this.pagetitle, this.previousUrl, "");
            }
            catch (_a) { }
        }
        this.canonicalservice.createCanonicalURL();
        this.seo();
        this.getFaqList(0, this.offset);
    }
    seo() {
        this.seoservice.updateTitle(this.metatitle);
        this.seoservice.updateMetaTag("description", null, this.metadesc);
        this.seoservice.updateMetaTag(null, "og:locale", "en_US");
        this.seoservice.updateMetaTag(null, "og:type", "Website");
        this.seoservice.updateMetaTag(null, "og:title", this.metatitle);
        this.seoservice.updateMetaTag(null, "og:description", this.metadesc);
        this.seoservice.updateMetaTag(null, "og:url", _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + this.router.url);
        this.seoservice.updateMetaTag(null, "og:site_name", "Tata OSP");
    }
    getFaqList(page, offset) {
        var jsn1 = {
            offset: offset,
            limit: (page * 10) + 10,
        };
        // let requestbody = {offset: 1, limit: 10}
        let apiUrl = this.apiList.returnAPI('faqList');
        this.sub.add(this.dataService.post(apiUrl, jsn1).subscribe((response) => {
            if (response.success) {
                this.totalrecord = response.range_info.total_count;
                this.showingrecords = ((jsn1.limit - 10) * offset) + response.data.length;
                this.faqList = response.data;
            }
            else {
                this.faqList = [];
            }
        }));
    }
    pageChange(page) {
        this.currentPage = page;
        page = page - 1;
        this.offset = this.offset + 1;
        this.getFaqList(page, (page + 1) - 1);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
FaqComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-faq',
        templateUrl: './faq.component.html',
        styleUrls: ['./faq.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(5, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID))
], FaqComponent);



/***/ }),

/***/ 724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqModule": () => (/* binding */ FaqModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(193);
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(725);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(573);
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(709);






const appRoutes = [{
        path: '', component: _faq_component__WEBPACK_IMPORTED_MODULE_0__.FaqComponent
    }];
let FaqModule = class FaqModule {
};
FaqModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _faq_component__WEBPACK_IMPORTED_MODULE_0__.FaqComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_1__.PaginationModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(appRoutes)
        ]
    })
], FaqModule);



/***/ }),

/***/ 709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationModule": () => (/* binding */ PaginationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(710);




let PaginationModule = class PaginationModule {
};
PaginationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_0__.PaginationComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [
            _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_0__.PaginationComponent,
        ],
    })
], PaginationModule);



/***/ }),

/***/ 710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);


let PaginationComponent = class PaginationComponent {
    constructor(router) {
        this.router = router;
        this.siblings = 1;
        this.current = 1;
        this.total = 1;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.pageChange1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.pages = [];
        this.isPrev = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.totalRecords = 0;
        this.recordsPerPage = 0;
        this.showrecords = 0;
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.currentpages = [];
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        if (mediaQuery.matches) {
            this.paginationNumber = 7;
        }
        else {
            this.paginationNumber = 10;
        }
    }
    ngOnInit() {
        this.pageCount = this.getPageCount();
        this.pages = this.getArrayOfPage(this.pageCount);
        this.currentpages = [];
        var count = Math.ceil(this.totalRecords / this.recordsPerPage);
        if (count >= 0) {
            count = 5;
        }
        for (let index = 1; index <= Math.ceil(this.totalRecords / this.recordsPerPage); index++) {
            this.currentpages.push(index);
        }
        this.currentpages = this.getPageList(this.currentpages.length, this.activePage, this.paginationNumber);
    }
    trackByFn(index) {
        return index;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    Noofpagechange() {
        this.onRefresh();
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setPage1(value) {
        this.pageChange1.emit(value);
    }
    onRefresh() {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        let currentUrl = this.router.url;
        this.router.navigateByUrl(currentUrl)
            .then(() => {
            this.router.navigated = false;
            this.router.navigate([this.router.url]);
        });
    }
    getPageCount() {
        let totalPage = 0;
        if (this.totalRecords > 0 && this.recordsPerPage > 0) {
            const pageCount = this.totalRecords / this.recordsPerPage;
            const roundedPageCount = Math.floor(pageCount);
            totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
        }
        return totalPage;
    }
    getArrayOfPage(pageCount) {
        let pageArray = [];
        if (pageCount > 0) {
            for (var i = 1; i <= pageCount; i++) {
                pageArray.push(i);
            }
        }
        return pageArray;
    }
    onClickPage(pageNumber) {
        this.pageCount = this.getPageCount();
        this.pages = this.getArrayOfPage(this.pageCount);
        this.currentpages = [];
        for (let index = 1; index <= Math.ceil(this.totalRecords / this.recordsPerPage); index++) {
            this.currentpages.push(index);
        }
        this.currentpages = this.getPageList(this.currentpages.length, this.activePage, this.paginationNumber);
        if (pageNumber < 1)
            return;
        if (pageNumber > this.pages.length)
            return;
        this.activePage = pageNumber;
        this.onPageChange.emit(pageNumber);
    }
    getPageList(totalPages, page, maxLength) {
        if (maxLength < 5)
            throw "maxLength must be at least 5";
        function range(start, end) {
            return Array.from(Array(end - start + 1), (_, i) => i + start);
        }
        var sideWidth = maxLength < 9 ? 1 : 2;
        var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
        if (totalPages <= maxLength) {
            return range(1, totalPages);
        }
        if (page <= maxLength - sideWidth - 1 - rightWidth) {
            return range(1, maxLength - sideWidth - 1)
                .concat(0, range(totalPages - sideWidth + 1, totalPages));
        }
        if (page >= totalPages - sideWidth - 1 - rightWidth) {
            return range(1, sideWidth)
                .concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }
        return range(1, sideWidth)
            .concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], PaginationComponent.prototype, "siblings", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], PaginationComponent.prototype, "current", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], PaginationComponent.prototype, "total", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], PaginationComponent.prototype, "pageChange", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], PaginationComponent.prototype, "pageChange1", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], PaginationComponent.prototype, "totalRecords", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], PaginationComponent.prototype, "recordsPerPage", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], PaginationComponent.prototype, "showrecords", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], PaginationComponent.prototype, "onPageChange", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], PaginationComponent.prototype, "activePage", void 0);
PaginationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: 'app-pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.scss']
    })
], PaginationComponent);



/***/ })

};
;