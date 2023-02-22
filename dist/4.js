"use strict";
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterModalComponent": () => (/* binding */ FilterModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__);



let FilterModalComponent = class FilterModalComponent {
    constructor(fb, apiList, dataService) {
        this.fb = fb;
        this.apiList = apiList;
        this.dataService = dataService;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription();
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.submitFilterForm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.pagetitle = "Filter MOdal";
    }
    ngOnInit() {
        this.budgetValues(0);
        this.buildFilterForm();
        if (this.applicationData) {
            this.getSegmentDrop(this.applicationData);
        }
    }
    clearFilterForm() {
        this.budgetValueData = 0;
        this.buildFilterForm();
    }
    buildFilterForm() {
        this.filterForm = this.fb.group({
            usage: [this.applicationData],
            segment: [''],
            main_vehicle_cat: [''],
            model: [''],
            budget: ['']
        });
    }
    budgetValues(budData) {
        if (budData) {
            this.budgetValueData = budData;
            this.max = budData;
        }
        else {
            this.budgetValueData = 0;
            this.max = 0;
        }
    }
    onInputBudget(event) {
        this.budgetValueData = event.target.value;
        // this.firebaseanalytics.filterEvent("click_vehiclelist_budget", "", "", this.budgetValueData, "", "", "", "", "", "", "", "", "", "", "", "", this.pagetitle,);
    }
    onChange(value, type) {
        if (type == 'usage') {
            this.selectUsage = value;
            this.getSegmentDrop(value);
        }
        if (type == 'segment') {
            this.selectSegment = value;
            this.getDropDownForCategory(value);
        }
        if (type == 'category') {
            this.selectCategory = value;
            this.getDropDownForModel(value);
        }
    }
    getSegmentDrop(value) {
        let data = {};
        data["vehicle_application"] = value;
        //for future use
        //     this.route.params.subscribe((params: Params) => {
        //       this.lobName = this.route.snapshot.paramMap.get('lob_name') ;
        //     });
        //     if (this.lobName == 'heavy-trucks' || this.lobName == 'tippers' || this.lobName == 'light-trucks' || this.lobName == 'tractor-trailer' || this.lobName == 'trucks' ||
        //     this.lobName == 'heavy-truck' || this.lobName == 'tractor-trailer' || this.lobName == 'tipper' || this.lobName == 'light-truck' || this.lobName == '6-wheeler-truck' || this.lobName == 'delivery-truck') {
        //     this.mainLobCategory = "Icv Trucks"
        //   }
        //   if (this.lobName == 'mini-trucks-&-pickups' || this.lobName == 'scv-pickups' || this.lobName == 'mini-truck') {
        //     this.mainLobCategory = "SCV Pickups"
        //   }
        //   if (this.lobName == 'bus' || this.lobName == 'vans' || this.lobName == 'buses' || this.lobName == 'passenger-van' || this.lobName == 'school-van' ||
        //     this.lobName == 'ambulance' || this.lobName == 'school-bus' || this.lobName == 'staff-bus' || this.lobName == 'bus-chassis' || this.lobName == 'intercity-bus') {
        //       this.mainLobCategory = "Buses"
        //   }
        // if(this.mainLobCategory == 'Icv Trucks' || this.mainLobCategory == 'SCV Pickups' || this.mainLobCategory == 'Buses'  ){
        //   data["sub_lob_name"] = this.mainLobCategory;
        // }
        let apiUrl = this.apiList.returnAPI('getLob');
        this.sub.add(this.dataService.post(apiUrl, data).subscribe((response) => {
            this.filterListSeg = response.data;
        }));
    }
    getDropDownForCategory(value) {
        let data = {};
        data["lob_name"] = value;
        data["action_type"] = "dropdown";
        let apiUrl = this.apiList.returnAPI('getPpl');
        this.sub.add(this.dataService.post(apiUrl, data).subscribe((response) => {
            this.filterListCat = response.data;
        }));
    }
    getDropDownForModel(value) {
        let data = {};
        data["offset"] = 0;
        data["limit"] = 50;
        data["lob"] = this.selectSegment;
        data["ppl"] = value;
        let apiUrl = this.apiList.returnAPI('getModel');
        this.sub.add(this.dataService.post(apiUrl, data).subscribe((response) => {
            this.filterListModel = response.data.models;
            this.budgetValues(response.data.price_range);
        }));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], FilterModalComponent.prototype, "closeModal", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], FilterModalComponent.prototype, "submitFilterForm", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], FilterModalComponent.prototype, "filterList", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], FilterModalComponent.prototype, "applicationData", void 0);
FilterModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-filter-modal',
        templateUrl: './filter-modal.component.html',
        styleUrls: ['./filter-modal.component.scss']
    })
], FilterModalComponent);



/***/ }),

/***/ 615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalsModule": () => (/* binding */ ModalsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(193);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(583);
/* harmony import */ var _filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _video_testimonial_modal_video_testimonial_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(617);
/* harmony import */ var _shared_pipes_sanitizeurl_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(618);





// import { OfferModalComponent } from "./offer-modal/offer-modal.component";


let ModalsModule = class ModalsModule {
};
ModalsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_0__.FilterModalComponent,
            // OfferModalComponent,
            _video_testimonial_modal_video_testimonial_modal_component__WEBPACK_IMPORTED_MODULE_1__.VideoTestimonialModalComponent, _shared_pipes_sanitizeurl_pipe__WEBPACK_IMPORTED_MODULE_2__.SanitizeurlPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule],
        exports: [_filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_0__.FilterModalComponent,
            // OfferModalComponent,
            _video_testimonial_modal_video_testimonial_modal_component__WEBPACK_IMPORTED_MODULE_1__.VideoTestimonialModalComponent, _shared_pipes_sanitizeurl_pipe__WEBPACK_IMPORTED_MODULE_2__.SanitizeurlPipe],
    })
], ModalsModule);



/***/ }),

/***/ 617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoTestimonialModalComponent": () => (/* binding */ VideoTestimonialModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);



let VideoTestimonialModalComponent = class VideoTestimonialModalComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.closePopUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.video_urls = this.videoInfo.video_url;
    }
    closeModal() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            this.closePopUp.emit();
        }
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], VideoTestimonialModalComponent.prototype, "closePopUp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], VideoTestimonialModalComponent.prototype, "videoInfo", void 0);
VideoTestimonialModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: 'app-video-testimonial-modal',
        templateUrl: './video-testimonial-modal.component.html',
        styleUrls: ['./video-testimonial-modal.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID))
], VideoTestimonialModalComponent);



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

/***/ 727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialsListComponent": () => (/* binding */ TestimonialsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);





let TestimonialsListComponent = class TestimonialsListComponent {
    constructor(platformId, sanitizer, apiList, dataService, skeletonService, localStorage, seoservice, router) {
        this.platformId = platformId;
        this.sanitizer = sanitizer;
        this.apiList = apiList;
        this.dataService = dataService;
        this.skeletonService = skeletonService;
        this.localStorage = localStorage;
        this.seoservice = seoservice;
        this.router = router;
        this.metatitle = "Testimonial - Tata Motors Online Sales";
        this.metadesc = "Testimonial - Tata Motors . Know more about Tata Motors vehicles";
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.pageTitle = "Home";
        this.testimonialVideoData = [];
        this.testimonialReadData = [];
        this.heavyTruck = [];
        this.tractorTrailer = [];
        this.hcvConst = [];
        this.lcvTruck = [];
        this.scvCargo = [];
        this.buses = [];
        this.scvPass = [];
        this.popularProducts = [];
        this.currentPage = 1;
        this.showBreadCrumb = false;
        this.breadcrumbdata = [];
    }
    ngOnInit() {
        this.seo();
        this.GetTestmonialVideo(0);
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
    GetTestmonialVideo(page) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.breadcrumbdata = this.localStorage.getItem('localBreadCrumb');
            this.showBreadCrumb = true;
        }
        var jsn1 = {
            type_of_testimonial: "",
            offset: page * 10,
            size: (page * 10) + 10,
        };
        let apiUrl = this.apiList.returnAPI("getTestimonials");
        this.sub.add(this.dataService.post(apiUrl, jsn1).subscribe((response) => {
            if (response.success) {
                this.testimonialReadData = response.data;
                this.totalrecord = response.range_info.total_count;
                this.testimonialVideoData = [];
                var videodata = response.data;
                for (var k = 0; k < videodata.length; k++) {
                    try {
                        if (videodata[k].video_url != "") {
                            this.videoType = "VideoUrl";
                            if (videodata[k]["video_url"]) {
                                let urls = videodata[k]["video_url"];
                                this.testSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urls);
                                var vthaumbimage = this.youtube_parser(urls);
                                let img = "https://img.youtube.com/vi/" + vthaumbimage + "/mqdefault.jpg";
                                this.testimonialVideoData.push(this.formDataVideo(videodata[k]["name"], this.testSafeUrl, videodata[k]["designation"], img, videodata[k].model, videodata[k].description));
                            }
                        }
                        else {
                            this.videoType = "YouTubeUrl";
                            let urls = videodata[k]["yt_url"];
                            var vthaumbimage = this.youtube_parser(urls);
                            let img = "https://img.youtube.com/vi/" + vthaumbimage + "/mqdefault.jpg";
                            let videos = "https://www.youtube.com/embed/" + vthaumbimage + "?autoplay=0&loop=1&autopause=0";
                            this.testSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videos);
                            this.testimonialVideoData.push(this.formDataVideo(videodata[k]["name"], this.testSafeUrl, videodata[k]["designation"], img, videodata[k].model, videodata[k].description));
                        }
                    }
                    catch (exception) { }
                }
            }
        }));
    }
    youtube_parser(url) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
            var match = url.match(regExp);
            return match && match[1].length == 11 ? match[1] : false;
        }
    }
    formDataVideo(name, video_url, designation, thaumbimage, model, description) {
        const userData = {};
        userData.name = name;
        userData.video_url = video_url;
        userData.designation = designation;
        userData.thaumbimage = thaumbimage;
        userData.model = model;
        userData.description = description;
        return userData;
    }
    pageChange(page) {
        this.currentPage = page;
        page = page - 1;
        this.GetTestmonialVideo(page);
    }
    changeTestimonial() {
        this.currentPage = 0;
        this.GetTestmonialVideo(this.currentPage);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild)("showTestimonial", { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef, static: false })
], TestimonialsListComponent.prototype, "showTestimonial", void 0);
TestimonialsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-testimonials-list",
        templateUrl: "./testimonials-list.component.html",
        styleUrls: ["./testimonials-list.component.scss"],
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID))
], TestimonialsListComponent);



/***/ }),

/***/ 726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialsListModule": () => (/* binding */ TestimonialsListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(193);
/* harmony import */ var _testimonials_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(727);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(194);
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(709);
/* harmony import */ var _Modals_modals_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(628);









const routes = [{ path: '', component: _testimonials_list_component__WEBPACK_IMPORTED_MODULE_0__.TestimonialsListComponent }];
let TestimonialsListModule = class TestimonialsListModule {
};
TestimonialsListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _testimonials_list_component__WEBPACK_IMPORTED_MODULE_0__.TestimonialsListComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_1__.PaginationModule, _Modals_modals_module__WEBPACK_IMPORTED_MODULE_2__.ModalsModule,
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA],
    })
], TestimonialsListModule);



/***/ }),

/***/ 618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SanitizeurlPipe": () => (/* binding */ SanitizeurlPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);



let SanitizeurlPipe = class SanitizeurlPipe {
    constructor(domSanitizer, platformId) {
        this.domSanitizer = domSanitizer;
        this.platformId = platformId;
    }
    transform(value, args) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
        }
    }
};
SanitizeurlPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'sanitizeurl'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID))
], SanitizeurlPipe);



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