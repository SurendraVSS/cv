"use strict";
exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(573);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(708);




const routes = [
    { path: 'account', component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, data: { title: '', breadcrumb: '' } },
    { path: 'account/:page_name', component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, data: { title: '', breadcrumb: '' } },
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProfileRoutingModule);



/***/ }),

/***/ 708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__);





let ProfileComponent = class ProfileComponent {
    constructor(seoservice, toastrService, route, skeletonService, platformId, router, apiList, dataservice, localStorage, storageService, behaviorService, modalService) {
        this.seoservice = seoservice;
        this.toastrService = toastrService;
        this.route = route;
        this.skeletonService = skeletonService;
        this.platformId = platformId;
        this.router = router;
        this.apiList = apiList;
        this.dataservice = dataservice;
        this.localStorage = localStorage;
        this.storageService = storageService;
        this.behaviorService = behaviorService;
        this.modalService = modalService;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.isProfile = true;
        this.leadsList = [];
        this.leadmsg = false;
        this.dataLoaded = false;
        this.openUrl = false;
        this.metatitle = "Check Prices, Features and Buy Tata Trucks and Buses Online in India | Tata Motors";
        this.metadesc = "Know about price and features of Tata Ace, Intra, Yodha Pickup, Winger, Magic, Signa, Prima, Ultra, and entire Truck, Tipper, Bus range. Enquire, book and buy online with Tata Motors authorized dealers.";
        this.pageTitle = "Profile";
        this.showCustomerSupportModal = false;
        this.currentPage = 1;
        this.noofrecordsperpage = 10;
        this.leadType = "BOOKING";
        this.sub.add(this.route.queryParams.subscribe((params) => {
            this.isProfile = params["page_name"] == 'my-request' ? true : false;
            let tabValue = this.isProfile ? 0 : 1;
            this.selectedIndex = tabValue;
            if (params["page_name"] == 'my-request') {
                this.leadType = "BOOKING";
            }
            else {
                this.leadType = "FINANCE";
            }
        }));
        this.sub.add(this.behaviorService.isLoggedIn.subscribe((res) => {
            this.userData = this.storageService.getUserData();
        }));
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.googleAnlyaticsViewPage("click_myrequestpage_view", this.pagetitle);
        }
    }
    ngOnInit() {
        this.getlead(0);
        this.seo();
        this.noofrecordsperpage = 10;
    }
    googleAnlyaticsViewPage(eventname, pagename) {
        try {
            // this.firebaseanalytics.viewPage(eventname, pagename);
        }
        catch (error) { }
    }
    seo() {
        this.seoservice.updateTitle(this.metatitle);
        this.seoservice.updateMetaTag("description", null, this.metadesc);
        this.seoservice.updateMetaTag(null, "og:locale", "en_US");
        this.seoservice.updateMetaTag(null, "og:type", "Website");
        this.seoservice.updateMetaTag(null, "og:title", this.metatitle);
        this.seoservice.updateMetaTag(null, "og:description", this.metadesc);
        this.seoservice.updateMetaTag(null, "og:url", _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + this.router.url);
        this.seoservice.updateMetaTag(null, "og:site_name", "Tata OSP");
    }
    async getlead(page) {
        this.totalrecord = 0;
        this.leadsList = [];
        let request = { "offset": page, "lead_type": this.leadType };
        let apiUrl = this.apiList.returnAPI('getLead');
        await this.sub.add(this.dataservice.post(apiUrl, request).subscribe({ next: (data) => {
                var _a, _b, _c, _d;
                if (data['success']) {
                    this.showRecords = (((this.currentPage * 10) - 10) + ((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.leads) === null || _b === void 0 ? void 0 : _b.length));
                    this.totalrecord = data.range_info.total_count;
                    this.orderStatus = "Payment Confirmation";
                    this.leadsList = (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.leads;
                    if (((_d = this.leadsList) === null || _d === void 0 ? void 0 : _d.length) == 0) {
                        this.leadmsg = true;
                    }
                    else {
                        this.leadmsg = false;
                    }
                    this.leadsList.forEach((res) => {
                        if (res.vehicle_info) {
                            if (res.vehicle_info['image']) {
                                if (res.vehicle_info['image'].image_url) {
                                    res.vehicle_info['imageUrl'] = res.vehicle_info['image'].image_url;
                                }
                                else {
                                    res.vehicle_info.image.filter((imgs) => imgs.is_cover === true).map((img) => {
                                        res.vehicle_info['imageUrl'] = img['image_url'];
                                    });
                                }
                            }
                        }
                    });
                    this.dataLoaded = true;
                }
                else {
                    this.leadsList = [];
                    this.dataLoaded = true;
                    this.leadmsg = true;
                }
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
                    window.scroll(0, 0);
                }
            }, error: (err) => {
            } }));
    }
    changeTab(value) {
        if (value == 'BOOKING') {
            this.selectedIndex = 0;
        }
        else {
            this.selectedIndex = 1;
        }
        this.currentPage = 1;
        this.isProfile = value.index == 0 ? true : false;
        this.leadType = value;
        this.getlead(0);
    }
    makePayment(lead) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            let modelname = (((lead.vehicle_info.model.replace(/\//g, "-")).replace(/\+/g, "-")).replace(/\./g, "-")).toLowerCase();
            let pplname = ((((lead.vehicle_info.ppl.replace(/\//g, "-")).replace(/\s/g, "-")).replace("---", "-")).replace("--", "-")).toLowerCase();
            this.localStorage.setItem('retryPaymentData', JSON.stringify(lead));
            let currentUrl = `/` + 'lead-booking' + `/` + lead.vehicle_info.lob.replace(/\s/g, "-").toLowerCase() + `/` + pplname + `/` + modelname.replace(/\s/g, "-").toLowerCase() + `/` + lead.vehicle_info.product_id + `/` + (lead === null || lead === void 0 ? void 0 : lead.row_id);
            this.router.navigateByUrl(currentUrl)
                .then(() => {
                this.router.navigated = false;
                this.router.navigate([this.router.url]);
            });
        }
    }
    openPagePopular(data, type) {
        var _a, _b, _c;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId) && data) {
            var currentUrl;
            this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
            let modelname = (data === null || data === void 0 ? void 0 : data.vehicle_info) ? ((((_a = data === null || data === void 0 ? void 0 : data.vehicle_info) === null || _a === void 0 ? void 0 : _a.model.replace(/\//g, "-")).replace(/\+/g, "-")).replace(/\./g, "-")).toLowerCase() : data === null || data === void 0 ? void 0 : data.vehicle_info;
            let pplname = ((data.ppl.replace(/\//g, "-")).replace(/\s/g, "-")).toLowerCase();
            let lobname = data.lob.replace(/\s/g, "-").toLowerCase() == 'icv-trucks' ? 'trucks' : data.lob.replace(/\s/g, "-").toLowerCase();
            if (type == 'viewDetail') {
                //   try{
                //   this.firebaseanalytics.MenuPlPpl("product-detail", data.lob, data.ppl, data.model, this.pageTitle);
                // } catch (error) { }
                currentUrl = `/product-details/` + lobname + `/` + pplname + `/` + modelname.replace(/\s/g, "-").toLowerCase() + `/` + ((_b = data === null || data === void 0 ? void 0 : data.vehicle_info) === null || _b === void 0 ? void 0 : _b.product_id);
            }
            else {
                currentUrl = `/lead-booking/` + lobname + `/` + pplname + `/` + modelname.replace(/\s/g, "-").toLowerCase() + `/` + ((_c = data === null || data === void 0 ? void 0 : data.vehicle_info) === null || _c === void 0 ? void 0 : _c.product_id);
            }
            return currentUrl;
        }
    }
    getemail(data) {
        if (data == "" || data == undefined || data == "NaN" || data == " ") {
            this.dsm_email = ' ';
        }
        else {
            var email = data.replace(/;/g, " \n ");
            this.dsm_email = email;
            return email;
        }
    }
    pageChange(page) {
        this.currentPage = page;
        page = page - 1;
        this.getlead(page);
    }
    async generateChallengeToken(leadData, userData) {
        if (leadData === null || leadData === void 0 ? void 0 : leadData.opty_id) {
            let data = {
                "appName": "com.tatamotors.cv_online_portal",
                "crmOpportunityID": leadData === null || leadData === void 0 ? void 0 : leadData.opty_id
            };
            let apiUrl = this.apiList.returnAPI('fniToken');
            await this.sub.add(this.dataservice.post(apiUrl, data).subscribe({ next: (data) => {
                    if (data === null || data === void 0 ? void 0 : data.challengeToken) {
                        this.onTrackButtonClick(leadData.opty_id, userData.mobile_number, data === null || data === void 0 ? void 0 : data.challengeToken);
                    }
                    else {
                        this.toastrService.error(data === null || data === void 0 ? void 0 : data.message);
                    }
                    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
                        window.scroll(0, 0);
                    }
                }, error: (err) => {
                } }));
        }
        else {
            this.otpOpenModal = this.modalService.show(this.trackRefModal, {
                class: "modal-dialog-centered modal-md",
                backdrop: "static",
            });
        }
    }
    closeModel() {
        this.otpOpenModal.hide();
    }
    onTrackButtonClick(optyID, mobileNumber, challengeToken) {
        this.openUrl = true;
        const link = document.createElement('a');
        link.target = '_blank';
        //sandbox QA
        let string = `https://fni-dev.home.tatamotors/FNI/application-overview?login_id=${mobileNumber}&opty_id=${optyID}&token=${challengeToken}`;
        // prod
        // let string = `https://fni.home.tatamotors/application-overview?login_id=${mobileNumber}&opty_id=${optyID}&token=${challengeToken}`;
        // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(string);
        link.href = string;
        link.setAttribute('visibility', 'hidden');
        link.click();
    }
    customerSupport() {
        // this.closeMOdal("1");
        this.showCustomerSupportModal = true;
        this.openBookTestDriveModal = this.modalService.show(this.BookTestDriveModal, {
            class: "modal-dialog-centered modal-lg",
            backdrop: "static",
        });
    }
    closeCustomerPopup(close) {
        this.showCustomerSupportModal = false;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild)('iframe')
], ProfileComponent.prototype, "iframe", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild)("trackRefModal", { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef, static: false })
], ProfileComponent.prototype, "trackRefModal", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild)("BookTestDriveModal", { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef, static: false })
], ProfileComponent.prototype, "BookTestDriveModal", void 0);
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(4, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID))
], ProfileComponent);



/***/ }),

/***/ 707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(193);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(573);
/* harmony import */ var ngx_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(620);
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(709);
/* harmony import */ var _Modals_customer_support_customer_support_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(588);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(711);









const routes = [{ path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent }];
let ProfileModule = class ProfileModule {
};
ProfileModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
        ],
        imports: [_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__.ProfileRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_skeleton__WEBPACK_IMPORTED_MODULE_7__.NgxSkeletonModule, _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_1__.PaginationModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _Modals_customer_support_customer_support_module__WEBPACK_IMPORTED_MODULE_2__.CustomerSupportModule
        ]
    })
], ProfileModule);



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

/***/ 620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxSkeletonComponent": () => (/* binding */ NgxSkeletonComponent),
/* harmony export */   "NgxSkeletonModule": () => (/* binding */ NgxSkeletonModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);



const ngxSkeletonDefaults = {
    animate: true,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    borderRadius: 0,
    height: '100%',
    margin: 0,
    variant: 'rect',
    width: '100%',
};

class NgxSkeletonComponent {
    constructor() {
        this.animate = ngxSkeletonDefaults.animate;
        this.backgroundColor = ngxSkeletonDefaults.backgroundColor;
        this.borderRadius = ngxSkeletonDefaults.borderRadius;
        this.margin = ngxSkeletonDefaults.margin;
        this.variant = ngxSkeletonDefaults.variant;
        this._height = ngxSkeletonDefaults.height;
        this._width = ngxSkeletonDefaults.width;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = isNaN(+height) ? height : `${height}px`;
    }
    get width() {
        return this._width;
    }
    set width(width) {
        this._width = isNaN(+width) ? width : `${width}px`;
    }
    getBorderRadius() {
        return this.variant === 'circle' &&
            this.borderRadius === ngxSkeletonDefaults.borderRadius
            ? '50%'
            : this.borderRadius;
    }
}
NgxSkeletonComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "13.0.3", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgxSkeletonComponent, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
NgxSkeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "13.0.3", type: NgxSkeletonComponent, selector: "ngx-skeleton", inputs: { animate: "animate", backgroundColor: "backgroundColor", borderRadius: "borderRadius", height: "height", margin: "margin", variant: "variant", width: "width" }, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<div\n  [class.ngx-skeleton-animate]=\"animate\"\n  [style.background-color]=\"backgroundColor\"\n  [style.border-radius]=\"getBorderRadius()\"\n  [style.height]=\"height\"\n  [style.margin]=\"margin\"\n  [style.width]=\"width\"\n></div>\n", styles: ["@keyframes ngx-skeleton-animation{0%{opacity:1}50%{opacity:.4}to{opacity:1}}.ngx-skeleton-animate{animation:ngx-skeleton-animation 1.5s ease-in-out infinite}\n"], changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "13.0.3", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgxSkeletonComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
            args: [{ selector: 'ngx-skeleton', changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush, template: "<div\n  [class.ngx-skeleton-animate]=\"animate\"\n  [style.background-color]=\"backgroundColor\"\n  [style.border-radius]=\"getBorderRadius()\"\n  [style.height]=\"height\"\n  [style.margin]=\"margin\"\n  [style.width]=\"width\"\n></div>\n", styles: ["@keyframes ngx-skeleton-animation{0%{opacity:1}50%{opacity:.4}to{opacity:1}}.ngx-skeleton-animate{animation:ngx-skeleton-animation 1.5s ease-in-out infinite}\n"] }]
        }], propDecorators: { animate: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], backgroundColor: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], borderRadius: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], height: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], margin: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], variant: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], width: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });

class NgxSkeletonModule {
}
NgxSkeletonModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "13.0.3", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgxSkeletonModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
NgxSkeletonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "13.0.3", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgxSkeletonModule, declarations: [NgxSkeletonComponent], exports: [NgxSkeletonComponent] });
NgxSkeletonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "13.0.3", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgxSkeletonModule });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "13.0.3", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgxSkeletonModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
            args: [{
                    declarations: [NgxSkeletonComponent],
                    exports: [NgxSkeletonComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-skeleton.mjs.map


/***/ })

};
;