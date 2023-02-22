"use strict";
exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsComponent": () => (/* binding */ BlogsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(195);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);






let BlogsComponent = class BlogsComponent {
    constructor(apiList, router, route, platformId, dataService, sanitizer, localStorage, spinnerService, seoservice, skeletonService) {
        this.apiList = apiList;
        this.router = router;
        this.route = route;
        this.platformId = platformId;
        this.dataService = dataService;
        this.sanitizer = sanitizer;
        this.localStorage = localStorage;
        this.spinnerService = spinnerService;
        this.seoservice = seoservice;
        this.skeletonService = skeletonService;
        this.metatitle = "Blogs - Tata Motors Online Sales";
        this.metadesc = "Blogs - Tata Motors . Know more about Tata Motors vehicles";
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.blogListData = [];
        this.currentPage = 1;
        this.showingrecords = 0;
        this.showBreadCrumb = false;
        this.breadcrumbdata = [];
        this.loader = false;
    }
    ngOnInit() {
        this.seo();
        this.sub.add(this.route.params.subscribe((params) => {
            this.title = params["title"];
            this.search = this.title;
            this.searchingData = this.title;
        }));
        this.sub.add(this.route.queryParams.subscribe((params) => {
            this.tag = params["tag"];
        }));
        if (this.tag) {
            this.blogList([this.tag], "", 0);
        }
        else {
            this.blogList("", this.title, 0);
        }
        this.gettagList();
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
    blogList(tags, search, page) {
        console.log("length", this.blogListData.length);
        // if (this.spinnerService.show())
        this.loader = true;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.breadcrumbdata = this.localStorage.getItem('localBreadCrumb');
            this.showBreadCrumb = true;
        }
        let data = {};
        data["tag"] = tags ? tags : "";
        data["author_name"] = "";
        data["title"] = "";
        data["from_date"] = "";
        data["to_date"] = "";
        data["offset"] = page ? page * 10 : 0;
        data["limit"] = page ? (page * 10) + 10 : 10; //use in pagination
        data["search_text"] = search ? search : ""; //use in pagination
        data["blog_status"] = "APPROVED";
        let apiUrl = this.apiList.returnAPI('getBlogList');
        this.sub.add(this.dataService.post(apiUrl, data).subscribe((response) => {
            // this.blogListData = response.data;
            var videodata = response.data;
            this.blogListData = [];
            this.totalrecord = response.total_result;
            this.showingrecords = ((data["limit"] - 10) + response.data.length);
            for (var k = 0; k < videodata.length; k++) {
                this.videoType = "YouTubeUrl";
                let urls = videodata[k]["youtube_url"];
                if (urls) {
                    var vthaumbimage = this.youtube_parser(urls);
                    let img = "https://img.youtube.com/vi/" + vthaumbimage + "/mqdefault.jpg";
                    let videos = "https://www.youtube.com/embed/" + vthaumbimage + "?autoplay=0&loop=1&autopause=0";
                    this.testSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videos);
                }
                else {
                    this.testSafeUrl = null;
                }
                this.blogListData.push(this.formDataVideo(videodata[k]["id"], videodata[k]["title"], videodata[k]["tag"], videodata[k]["description"], this.testSafeUrl, videodata[k]["image_path"], videodata[k]["type_of_blog"], videodata[k]["created_date"], videodata[k]["author_name"], videodata[k]["author_image"], videodata[k]["author_description"]));
            }
            console.log('blogListData', this.blogListData);
            this.spinnerService.hide();
            this.loader = false;
        }));
    }
    searchData(data) {
        this.searchingData = data;
        if (data) {
            this.blogList("", data, 0);
            this.router.navigate(['/blogs/' + this.search]);
        }
    }
    searchOnTags(tags) {
        this.router.navigate(["/blogs"], {
            queryParams: {
                tag: tags
            },
        });
        this.blogList([tags], "", 0);
    }
    youtube_parser(url) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
            var match = url.match(regExp);
            return match && match[1].length == 11 ? match[1] : false;
        }
    }
    allBlogData() {
        if (this.search == "") {
            this.router.navigate(['/blogs/' + this.search]);
        }
    }
    formDataVideo(id, title, tag, description, youtube_url, image_path, type_of_blog, created_date, author_name, author_image, author_description) {
        const userData = {};
        userData.id = id;
        userData.title = title;
        userData.tag = tag;
        userData.description = description;
        userData.youtube_url = youtube_url;
        userData.image_path = image_path;
        userData.type_of_blog = type_of_blog;
        userData.created_date = created_date;
        userData.author_name = author_name;
        userData.author_image = author_image;
        userData.author_description = author_description;
        return userData;
    }
    gettagList() {
        let apiUrl = this.apiList.returnAPI('getTagList');
        this.sub.add(this.dataService.post(apiUrl, "").subscribe((response) => {
            if (response["success"]) {
                this.tagList = response.data;
            }
            else {
                this.tagList = [];
            }
        }));
    }
    pageChange(page) {
        this.currentPage = page;
        page = page - 1;
        if (this.title) {
            this.blogList("", this.title, page);
        }
        else {
            this.blogList("", "", page);
        }
    }
};
BlogsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-blogs',
        templateUrl: './blogs.component.html',
        styleUrls: ['./blogs.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(3, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID))
], BlogsComponent);



/***/ }),

/***/ 732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogModule": () => (/* binding */ BlogModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(193);
/* harmony import */ var _blogs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(573);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(619);
/* harmony import */ var _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(613);
/* harmony import */ var ngx_skeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(620);
/* harmony import */ var _Modals_modals_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(615);
/* harmony import */ var _Static_Pages_services_services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(621);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(583);
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(709);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(628);













const routes = [{ path: '', component: _blogs_component__WEBPACK_IMPORTED_MODULE_0__.BlogsComponent }];
let BlogModule = class BlogModule {
};
BlogModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _blogs_component__WEBPACK_IMPORTED_MODULE_0__.BlogsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselModule, _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__.BannerModule, ngx_skeleton__WEBPACK_IMPORTED_MODULE_10__.NgxSkeletonModule, _Modals_modals_module__WEBPACK_IMPORTED_MODULE_2__.ModalsModule, _Static_Pages_services_services_module__WEBPACK_IMPORTED_MODULE_3__.ServicesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__.PaginationModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule
        ]
    })
], BlogModule);



/***/ }),

/***/ 629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbListComponent": () => (/* binding */ BreadcrumbListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);



let BreadcrumbListComponent = class BreadcrumbListComponent {
    constructor(router, platformId, localStorage) {
        this.router = router;
        this.platformId = platformId;
        this.localStorage = localStorage;
        this.breadcrumbs = [];
        this.breadcrumbsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.hidebreadcrumb = false;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            this.breadcrumbs = this.localStorage.getItem('localBreadCrumb') ? JSON.parse(this.localStorage.getItem('localBreadCrumb')) : [];
            if (this.breadcrumbs == undefined || this.breadcrumbs == null) {
                this.hidebreadcrumb = true;
            }
        }
    }
    gotoHome() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            localStorage.removeItem('localBreadCrumb');
            this.router.navigate(['/']);
        }
    }
    GotoRoute(breadcrumb, index) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            this.breadcrumbs.splice(index + 1, this.breadcrumbs.length - index);
            localStorage.removeItem('localBreadCrumb');
            this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbs));
            this.router.navigate([breadcrumb.url]);
        }
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], BreadcrumbListComponent.prototype, "breadcrumbsChange", void 0);
BreadcrumbListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: 'app-breadcrumb-list',
        templateUrl: './breadcrumb-list.component.html',
        styleUrls: ['./breadcrumb-list.component.scss'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID))
], BreadcrumbListComponent);



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



/***/ }),

/***/ 628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _app_breadcrumb_list_breadcrumb_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(629);




let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_app_breadcrumb_list_breadcrumb_list_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ],
        exports: [
            _app_breadcrumb_list_breadcrumb_list_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbListComponent
        ],
    })
], SharedModule);



/***/ })

};
;