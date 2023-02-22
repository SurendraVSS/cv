"use strict";
exports.id = 9;
exports.ids = [9];
exports.modules = {

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

/***/ 626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoProductFoundComponent": () => (/* binding */ NoProductFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194);


let NoProductFoundComponent = class NoProductFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NoProductFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-no-product-found',
        templateUrl: './no-product-found.component.html',
    })
], NoProductFoundComponent);



/***/ }),

/***/ 625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoProductFoundModule": () => (/* binding */ NoProductFoundModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _no_product_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(573);





let NoProductFoundModule = class NoProductFoundModule {
};
NoProductFoundModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _no_product_found_component__WEBPACK_IMPORTED_MODULE_0__.NoProductFoundComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule
        ],
        exports: [
            _no_product_found_component__WEBPACK_IMPORTED_MODULE_0__.NoProductFoundComponent
        ]
    })
], NoProductFoundModule);



/***/ }),

/***/ 624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultPageComponent": () => (/* binding */ SearchResultPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(194);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__);




let SearchResultPageComponent = class SearchResultPageComponent {
    constructor(route, seoservice, canonicalservice, cleverService, previousRouteService, storageService, toastrService, rootService, skeletonService, dataservice, localStorage, platformId, apiList, router, spinnerService) {
        this.route = route;
        this.seoservice = seoservice;
        this.canonicalservice = canonicalservice;
        this.cleverService = cleverService;
        this.previousRouteService = previousRouteService;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.rootService = rootService;
        this.skeletonService = skeletonService;
        this.dataservice = dataservice;
        this.localStorage = localStorage;
        this.platformId = platformId;
        this.apiList = apiList;
        this.router = router;
        this.spinnerService = spinnerService;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription();
        this.maxPrice = 0;
        this.pagetitle = "Product List";
        this.productList = [];
        this.rowlimit = 0;
        this.isLastPage = false;
        this.selectedFilter = null;
        this.selectedFilterModel = null;
        this.currentStartRow = 0;
        this.currentEndRow = 18;
        this.isImgLoaded = false;
        this.showRecord = false;
        this.loading = false;
        this.flag = 0;
        this.filterList = 0;
        this.pageTitle = "Home";
        this.selectedFilterSegment = null;
        this.selectedFilterCategory = null;
        this.breadcrumbList = [];
        this.searchuserData = '';
        this.breadcrumbdata = [];
        this.showBreadCrumb = false;
        this.breadcrumbCurrentpageCheck = false;
        this.metainfo = [
            {
                title: 'Check Prices, Features and Buy Tata Trucks and Buses Online in India | Tata Motors',
                desc: 'Know about price and features of Tata Ace, Intra, Yodha Pickup, Winger, Magic, Signa, Prima, Ultra, and entire Truck, Tipper, Bus range. Enquire, book and buy online with Tata Motors authorized dealers.'
            },
            {
                title: 'Check Prices, Features and Buy Tata Trucks Online in India | Tata Motors',
                desc: 'Buy Tata Trucks Online from Tata Motors. Check out price, features, and specifications of all Signa, Prima, Ultra and Cowl Chassis of truck, trailer and tipper models and buy the right one for your business. Register enquiry. Avail finance loan. Select dealer and directly book online.'
            },
            {
                title: 'Check Prices, Features and Buy Tata Buses and Vans Online in India | Tata Motors',
                desc: 'Buy Tata Buses and Vans Online from Tata Motors. Check out price, features, and specifications of all bus, Magic and Winger models and buy the right one for your business. Register enquiry. Avail finance loan. Select dealer and directly book online.'
            },
            {
                title: 'Check Prices, Features and Buy Tata SCV and Pickups Online in India | Tata Motors',
                desc: 'Buy Tata Mini Truck (SCV) and Pickups Online from Tata Motors. Check out price, features, and specifications of Ace, Intra and Yodha variants and buy the right one for your business. Register enquiry. Avail finance loan. Select dealer and directly book online.'
            }
        ];
        this.previousUrl = this.previousRouteService.getPreviousUrl();
        this.googleAnlyaticsViewPage("click_vehiclelist", this.pagetitle);
        let result = this.rootService.isLoggedIn();
        if (result) {
            this.userLoginData = this.storageService.getUser() ? JSON.parse(this.storageService.getUser()) : null;
        }
        if (result) {
            this.isLoggedIn = result ? true : false;
        }
    }
    ngOnInit() {
        var _a;
        this.canonicalservice.createCanonicalURL();
        try {
            this.cleverService.onPageView(this.pagetitle, this.previousUrl, "");
        }
        catch (_b) { }
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            (_a = document.getElementById("myDIV")) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", this.myFunction, { passive: true });
        }
        this.rowlimit = 0;
        this.searchuserData = '';
        this.searchValue = '';
        this.sub.add(this.route.queryParams.subscribe((params) => {
            this.plId = params["pl_name"];
            this.sub_lob = this.route.snapshot.paramMap.get("sub_lob");
            this.lobId = this.route.snapshot.paramMap.get("lob_name") == 'trucks' ? 'icv-trucks' : this.route.snapshot.paramMap.get("lob_name");
            var pplId = this.route.snapshot.paramMap.get("ppl_name");
            var optyId = this.route.snapshot.paramMap.get("opty_Id");
            this.actual_lob = this.route.snapshot.paramMap.get("actual_lob");
            if (optyId) {
                let data = {
                    // "opty_id": "1-JFXPFE"
                    // "opty_id": "1-DS7XJSD",
                    // "opty_id": "1-DS7W8W1"
                    // DS82PTB
                    opty_id: optyId
                };
                this.sub.add(this.dataservice.getOptyDetails(data).subscribe((response) => {
                    if (response) {
                        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
                            localStorage.removeItem('optyData');
                            if (this.userLoginData) {
                                if (this.userLoginData.mobile_number == response.contact.mobile_number) {
                                    this.localStorage.setItem('optyData', JSON.stringify(response));
                                }
                                else {
                                    return this.toastrService.error("Please Logout and login with another Number");
                                }
                            }
                            else {
                                this.localStorage.setItem('optyData', JSON.stringify(response));
                            }
                        }
                    }
                    else {
                    }
                }));
            }
            if (this.lobId == 'icv-trucks') {
                this.lobId = 'Icv Trucks';
            }
            if (this.lobId == 'scv-pickups') {
                this.lobId = 'SCV Pickups';
            }
            if (this.lobId == 'buses') {
                this.lobId = 'Buses';
            }
            if (pplId) {
                this.pplId = pplId;
            }
            this.searchValue = params["search"];
            if (this.searchValue) {
                this.selectedFilter = null;
                this.selectedFilterBody = null;
                this.selectedFilterModel = null;
                this.selectedFilterFuel = null;
                this.selectedFilterPayload = null;
                this.selectedFilterAirConditioning = null;
                this.selectedFilterLoadBody = null;
                this.selectedFilterCabin = null;
                this.selectedFilterEmission = null;
                this.selectedFilterWheels = null;
                this.selectedFilterGvw = null;
                this.selectedFilterBudget = null;
                this.selectedFilterKerbWeight = null;
                this.selectedResetFilter = null;
                this.selectedResetBody = null;
                this.selectedResetModel = null;
                this.selectedFilterSegment = null;
                this.selectedFilterCategory = null;
            }
            if (params["search"] != undefined) {
                this.searchuserData = params["search"];
                this.searchValue = this.searchuserData;
            }
            if (params["vehicle_application"]) {
                this.selectedFilter = params["vehicle_application"];
                this.selectedResetFilter = params["vehicle_application"];
            }
            if (params["body_type"]) {
                this.selectedFilterBody = params["body_type"];
                this.selectedResetBody = params["body_type"];
            }
            if (params["model"]) {
                this.selectedFilterModel = params["model"];
                this.selectedResetModel = params["model"];
            }
            if (params["segment"]) {
                this.selectedFilterSegment = params["segment"];
            }
            if (params["main_vehicle_cat"]) {
                this.selectedFilterCategory = params["main_vehicle_cat"];
            }
            if (params["budget"]) {
                this.selectedFilterBudget = params["budget"];
            }
            if (params["search"]) {
                this.searchValue = params["search"];
                this.searchValue = this.searchuserData;
            }
            if (params["actual_lob"]) {
                if (params["actual_lob"] == 'buses') {
                    this.selectedLob = "Buses";
                }
                if (params["actual_lob"] == 'icv-trucks') {
                    this.selectedLob = "Icv Trucks";
                }
                if (params["actual_lob"] == 'scv-pickups') {
                    this.selectedLob = "SCV Pickups";
                }
            }
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
                window.scrollTo(0, 0);
            }
            this.currentStartRow = 0;
            this.currentEndRow = 18;
            this.productList = [];
        }));
        this.loadData();
        this.getFindByDropDownsData(true, true);
    }
    myFunction() {
        this.onScroll();
    }
    onScroll() {
        if (this.productList.length == this.rowlimit) {
            if (this.total_records != this.rowlimit) {
                this.loadData();
            }
        }
    }
    loadData() {
        let data = {};
        this.isLastPage = false;
        this.rowlimit = this.currentEndRow;
        data["start_row"] = this.currentStartRow;
        data["end_row"] = this.currentEndRow;
        data["lob_name"] = this.lobId ? this.lobId : this.selectedLob ? this.selectedLob : "";
        data["actual_lob_name"] = this.sub_lob ? this.sub_lob : this.selectedFilterSegment ? this.selectedFilterSegment : "";
        data["ppl_name"] = this.pplId ? this.pplId : this.selectedFilterCategory ? this.selectedFilterCategory : "";
        data["pl_name"] = this.plId ? this.plId : "";
        data["search"] = this.searchValue ? this.searchValue : "";
        if (this.selectedFilter) {
            data["vehicle_application"] = this.selectedFilter;
        }
        if (this.selectedFilterModel) {
            data["model"] = this.selectedFilterModel;
        }
        if (this.selectedFilterBody) {
            data["body_type"] = this.selectedFilterBody;
        }
        if (this.selectedFilterFuel) {
            data["fuel_type"] = this.selectedFilterFuel;
        }
        if (this.selectedFilterPayload) {
            data["payload"] = this.selectedFilterPayload;
        }
        if (this.selectedFilterAirConditioning) {
            data["air_conditioning"] = this.selectedFilterAirConditioning;
        }
        if (this.selectedFilterLoadBody) {
            data["load_body_length"] = this.selectedFilterLoadBody;
        }
        if (this.selectedFilterKerbWeight) {
            data["kerb_weight"] = this.selectedFilterKerbWeight;
        }
        if (this.selectedFilterCabin) {
            data["cabin_type"] = this.selectedFilterCabin;
        }
        if (this.selectedFilterEmission) {
            data["emission_norms"] = this.selectedFilterEmission;
        }
        if (this.selectedFilterWheels) {
            data["wheels"] = this.selectedFilterWheels;
        }
        if (this.selectedFilterGvw) {
            data["gvw"] = this.selectedFilterGvw;
        }
        if (this.selectedFilterBudget) {
            data["price"] = this.selectedFilterBudget;
        }
        this.FilterStrings(data);
        if (this.flag == 0) {
            this.productList = [];
            this.currentStartRow = 0;
            this.currentEndRow = 18;
        }
        this.spinnerService.show();
        this.sub.add(this.dataservice.getProductList(data).subscribe({
            next: (response) => {
                var _a, _b, _c, _d, _e, _f, _g;
                this.spinnerService.hide();
                if (response.success) {
                    let index = 0;
                    if (data["lob_name"] == 'Icv Trucks' && data["ppl_name"] == "" && data["pl_name"] == "") {
                        index = 1;
                    }
                    else if (data["lob_name"] == 'Buses' && data["ppl_name"] == "" && data["pl_name"] == "") {
                        index = 2;
                    }
                    else if (data["lob_name"] == 'SCV Pickups' && data["ppl_name"] == "" && data["pl_name"] == "") {
                        index = 3;
                    }
                    else {
                        this.metainfo.push({
                            title: ((_a = response === null || response === void 0 ? void 0 : response.metadata) === null || _a === void 0 ? void 0 : _a.ppl_title) ? (_b = response === null || response === void 0 ? void 0 : response.metadata) === null || _b === void 0 ? void 0 : _b.ppl_title : this.metainfo[0].title,
                            desc: ((_c = response === null || response === void 0 ? void 0 : response.metadata) === null || _c === void 0 ? void 0 : _c.ppl_description) ? (_d = response === null || response === void 0 ? void 0 : response.metadata) === null || _d === void 0 ? void 0 : _d.ppl_description : this.metainfo[0].desc
                        });
                        index = 4;
                    }
                    this.seo(this.metainfo[index]);
                    if (index == 4) {
                        this.metainfo.pop();
                    }
                    this.total_records = response.total_records;
                    this.loading = false;
                    this.currentStartRow = this.currentEndRow;
                    this.currentEndRow = this.currentEndRow + 18;
                    if (this.lobId && this.sub_lob && this.pplId) {
                        var BreadCrumbCondition = this.localStorage.getItem('BreadPageCurrent');
                        if (BreadCrumbCondition == "BreadHeaderTop") {
                            localStorage.removeItem("localBreadCrumb");
                            this.breadcrumbdata = this.localStorage.getItem('localBreadCrumb') ? JSON.parse(this.localStorage.getItem('localBreadCrumb')) : [];
                            var breadcrumbList1 = {
                                label: data["lob_name"] == "" ? "All" : response.data[0].sub_lob == 'Icv Trucks' ? 'Trucks' : response.data[0].sub_lob,
                                url: data["lob_name"] == "" ? `/product-list/` : `/product-list/` + response.data[0].sub_lob.replace(/\s/g, "-").toLowerCase(),
                                pageName: "product-list",
                                params: {
                                    lob_name: response.data[0].lob,
                                    sub_lob: response.data[0].sub_lob,
                                    ppl_name: response.data[0].ppl,
                                },
                            };
                            this.breadcrumbdata.push(breadcrumbList1);
                            this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                            var breadcrumbList1 = {
                                label: response.data[0].lob,
                                url: `/category-list/` + response.data[0].sub_lob.replace(/\s/g, "-").toLowerCase() + `/` + response.data[0].lob.replace(/\s/g, "-").toLowerCase(),
                                pageName: "category-list",
                                params: {
                                    lob_name: response.data[0].lob,
                                    sub_lob: response.data[0].sub_lob,
                                    ppl_name: response.data[0].ppl,
                                },
                            };
                            this.breadcrumbdata.push(breadcrumbList1);
                            this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                            var breadcrumbList1 = {
                                label: response.data[0].ppl,
                                url: `/product-list/` + response.data[0].sub_lob.replace(/\s/g, "-").toLowerCase() + `/` + response.data[0].lob.replace(/\s/g, "-").toLowerCase() + `/` + ((response.data[0].ppl.replace(/\s/g, "-").toLowerCase()).replace("---", "-")).replace("--", "-"),
                                pageName: "product-list",
                                params: {
                                    lob_name: response.data[0].lob,
                                    sub_lob: response.data[0].sub_lob,
                                    ppl_name: response.data[0].ppl,
                                },
                            };
                            this.breadcrumbdata.push(breadcrumbList1);
                            this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                        }
                        else {
                            this.breadcrumbdata = this.localStorage.getItem('localBreadCrumb') ? JSON.parse(this.localStorage.getItem('localBreadCrumb')) : [];
                            for (var i = 0; i < this.breadcrumbdata.length; i++) {
                                if (this.breadcrumbdata[i].label == 'HEAVY TRUCKS' || this.breadcrumbdata[i].label == 'TIPPERS' || this.breadcrumbdata[i].label == 'LIGHT TRUCKS' || this.breadcrumbdata[i].label == 'TRACTOR TRAILER'
                                    || this.breadcrumbdata[i].label == 'MINI TRUCKS & PICKUPS' || this.breadcrumbdata[i].label == 'BUS' || this.breadcrumbdata[i].label == 'VANS' ||
                                    this.breadcrumbdata[i].label == 'MINI TRUCK' || this.breadcrumbdata[i].label == 'PICKUP' || this.breadcrumbdata[i].label == 'HEAVY TRUCK' || this.breadcrumbdata[i].label == 'TRACTOR TRAILER' || this.breadcrumbdata[i].label == 'TIPPER' ||
                                    this.breadcrumbdata[i].label == 'LIGHT TRUCK' || this.breadcrumbdata[i].label == '6 WHEELER TRUCK' || this.breadcrumbdata[i].label == 'DELIVERY TRUCK' || this.breadcrumbdata[i].label == 'PASSENGER VAN' || this.breadcrumbdata[i].label == 'SCHOOL VAN' ||
                                    this.breadcrumbdata[i].label == 'AMBULANCE' || this.breadcrumbdata[i].label == 'SCHOOL BUS' || this.breadcrumbdata[i].label == 'STAFF BUS' || this.breadcrumbdata[i].label == 'BUS CHASSIS' || this.breadcrumbdata[i].label == 'INTERCITY BUS') {
                                    this.breadcrumbCurrentpageCheck = true;
                                }
                            }
                            if (this.breadcrumbCurrentpageCheck) {
                                var checkPPLName = false;
                                for (var i = 0; i < this.breadcrumbdata.length; i++) {
                                    if (this.breadcrumbdata[i].label == response.data[0].ppl) {
                                        checkPPLName = true;
                                    }
                                }
                                if (!checkPPLName) {
                                    var breadcrumbList1 = {
                                        label: response.data[0].ppl,
                                        url: `/product-list/` + response.data[0].sub_lob.replace(/\s/g, "-").toLowerCase() + `/` + ((response.data[0].lob.replace(/\s/g, "-").toLowerCase() + `/` + response.data[0].ppl.replace(/\s/g, "-").toLowerCase()).replace("---", "-")).replace("--", "-"),
                                        pageName: "product-list",
                                        params: {
                                            lob_name: response.data[0].lob,
                                            sub_lob: response.data[0].sub_lob,
                                            ppl_name: response.data[0].ppl,
                                        },
                                    };
                                    this.breadcrumbdata.push(breadcrumbList1);
                                    this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                                }
                            }
                            else {
                                localStorage.removeItem("localBreadCrumb");
                                this.breadcrumbdata = this.localStorage.getItem('localBreadCrumb') ? JSON.parse(this.localStorage.getItem('localBreadCrumb')) : [];
                                var breadcrumbList1 = {
                                    label: data["lob_name"] == "" ? "All" : response.data[0].sub_lob == 'Icv Trucks' ? 'Trucks' : response.data[0].sub_lob,
                                    url: data["lob_name"] == "" ? `/product-list/` : `/product-list/` + response.data[0].sub_lob.replace(/\s/g, "-").toLowerCase(),
                                    pageName: "product-list",
                                    params: {
                                        lob_name: response.data[0].lob,
                                        sub_lob: response.data[0].sub_lob,
                                        ppl_name: response.data[0].ppl,
                                    },
                                };
                                this.breadcrumbdata.push(breadcrumbList1);
                                this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                                var breadcrumbList1 = {
                                    label: response.data[0].lob,
                                    url: `/category-list/` + response.data[0].sub_lob.replace(/\s/g, "-").toLowerCase() + `/` + response.data[0].lob.replace(/\s/g, "-").toLowerCase(),
                                    pageName: "category-list",
                                    params: {
                                        lob_name: response.data[0].lob,
                                        sub_lob: response.data[0].sub_lob,
                                        ppl_name: response.data[0].ppl,
                                    },
                                };
                                this.breadcrumbdata.push(breadcrumbList1);
                                this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                                var breadcrumbList1 = {
                                    label: response.data[0].ppl,
                                    url: `/product-list/` + response.data[0].sub_lob.replace(/\s/g, "-").toLowerCase() + `/` + response.data[0].lob.replace(/\s/g, "-").toLowerCase() + `/` + ((response.data[0].ppl.replace(/\s/g, "-").toLowerCase()).replace("---", "-")).replace("--", "-"),
                                    pageName: "product-list",
                                    params: {
                                        lob_name: response.data[0].lob,
                                        sub_lob: response.data[0].sub_lob,
                                        ppl_name: response.data[0].ppl,
                                    },
                                };
                                this.breadcrumbdata.push(breadcrumbList1);
                                this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                            }
                        }
                    }
                    else {
                        localStorage.removeItem('localBreadCrumb');
                        var breadcrumbList1 = {
                            label: data["lob_name"] == "" ? "All" : response.data[0].sub_lob == 'Icv Trucks' ? 'Trucks' : response.data[0].sub_lob,
                            url: data["lob_name"] == "" ? `/product-list/` : `/product-list/` + response.data[0].sub_lob.replace(/\s/g, "-").toLowerCase(),
                            pageName: "product-list",
                            params: {
                                lob_name: response.data[0].lob,
                                sub_lob: response.data[0].sub_lob,
                                ppl_name: response.data[0].ppl,
                            },
                        };
                        this.breadcrumbdata.push(breadcrumbList1);
                        const unique = [...new Map(this.breadcrumbdata.map((m) => [m.label, m])).values()];
                        this.localStorage.setItem('localBreadCrumb', JSON.stringify(unique));
                    }
                    this.showBreadCrumb = true;
                    localStorage.removeItem("BreadPageCurrent");
                    if (this.flag == 1) {
                        for (let j = 0; j < response.data.length; j++) {
                            this.productList.push(response.data[j]);
                            this.productList.forEach((element) => {
                                if (element["images"]) {
                                    if (element["images"].image_url) {
                                        element["imageUrl"] = element["images"].image_url;
                                        this.isImgLoaded = false;
                                    }
                                    else {
                                        element.images.filter((image) => image.is_cover === true).map((img) => {
                                            element["imageUrl"] = img["image_url"];
                                            this.isImgLoaded = false;
                                        });
                                    }
                                }
                            });
                        }
                        if (response.total_records <= this.productList.length) {
                            this.isLastPage = true;
                        }
                    }
                    if (this.flag == 0) {
                        this.flag = 1;
                        this.productList = [];
                        for (let j = 0; j < response.data.length; j++) {
                            this.productList.push(response.data[j]);
                            this.productList.forEach((element) => {
                                if (element["images"]) {
                                    if (element["images"].image_url) {
                                        element["imageUrl"] = element["images"].image_url;
                                        this.isImgLoaded = false;
                                    }
                                    else {
                                        element.images.filter((image) => image.is_cover === true).map((img) => {
                                            element["imageUrl"] = img["image_url"];
                                            this.isImgLoaded = false;
                                        });
                                    }
                                }
                            });
                            if (response.total_records <= this.productList.length) {
                                this.isLastPage = true;
                            }
                        }
                    }
                    if (response.data.length == 0) {
                        this.showRecord = true;
                    }
                    else {
                        this.showRecord = false;
                    }
                }
                else {
                    this.showRecord = true;
                    this.productList = [];
                    this.total_records = 0;
                    this.spinnerService.hide();
                    if (this.lobId && this.sub_lob && this.pplId) {
                        var BreadCrumbCondition = this.localStorage.getItem('BreadPageCurrent');
                        if (BreadCrumbCondition == "BreadHeaderTop") {
                            localStorage.removeItem("localBreadCrumb");
                            this.breadcrumbdata = this.localStorage.getItem('localBreadCrumb') ? JSON.parse(this.localStorage.getItem('localBreadCrumb')) : [];
                            var breadcrumbList1 = {
                                label: this.lobId == 'Icv Trucks' ? 'TRUCKS' : this.lobId.replace('-', ' ').toUpperCase(),
                                url: `/product-list/` + this.lobId.replace(/\s/g, "-").toLowerCase(),
                                pageName: "product-list",
                                params: {
                                    lob_name: this.lobId,
                                    sub_lob: this.sub_lob,
                                    ppl_name: this.pplId,
                                },
                            };
                            this.breadcrumbdata.push(breadcrumbList1);
                            this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                            var breadcrumbList1 = {
                                label: this.sub_lob.replace('-', ' ').toUpperCase(),
                                url: `/category-list/` + this.lobId.replace(/\s/g, "-").toLowerCase() + `/` + this.sub_lob.replace(/\s/g, "-").toLowerCase(),
                                pageName: "category-list",
                                params: {
                                    lob_name: this.lobId,
                                    sub_lob: this.sub_lob,
                                    ppl_name: this.pplId,
                                },
                            };
                            this.breadcrumbdata.push(breadcrumbList1);
                            this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                            var breadcrumbList1 = {
                                label: this.pplId.replace('-', ' ').toUpperCase(),
                                url: `/product-list/` + this.lobId.replace(/\s/g, "-").toLowerCase() + `/` + this.sub_lob.replace(/\s/g, "-").toLowerCase() + `/` + ((this.pplId.replace(/\s/g, "-").toLowerCase()).replace("---", "-")).replace("--", "-"),
                                pageName: "product-list",
                                params: {
                                    lob_name: this.lobId,
                                    sub_lob: this.sub_lob,
                                    ppl_name: this.pplId,
                                },
                            };
                            this.breadcrumbdata.push(breadcrumbList1);
                            this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                        }
                        else {
                            this.breadcrumbdata = this.localStorage.getItem('localBreadCrumb') ? JSON.parse(this.localStorage.getItem('localBreadCrumb')) : [];
                            for (var i = 0; i < this.breadcrumbdata.length; i++) {
                                if (this.breadcrumbdata[i].label == 'HEAVY TRUCKS' || this.breadcrumbdata[i].label == 'TIPPERS' || this.breadcrumbdata[i].label == 'LIGHT TRUCKS' || this.breadcrumbdata[i].label == 'TRACTOR TRAILER'
                                    || this.breadcrumbdata[i].label == 'MINI TRUCKS & PICKUPS' || this.breadcrumbdata[i].label == 'BUS' || this.breadcrumbdata[i].label == 'VANS' ||
                                    this.breadcrumbdata[i].label == 'MINI TRUCK' || this.breadcrumbdata[i].label == 'PICKUP' || this.breadcrumbdata[i].label == 'HEAVY TRUCK' || this.breadcrumbdata[i].label == 'TRACTOR TRAILER' || this.breadcrumbdata[i].label == 'TIPPER' ||
                                    this.breadcrumbdata[i].label == 'LIGHT TRUCK' || this.breadcrumbdata[i].label == '6 WHEELER TRUCK' || this.breadcrumbdata[i].label == 'DELIVERY TRUCK' || this.breadcrumbdata[i].label == 'PASSENGER VAN' || this.breadcrumbdata[i].label == 'SCHOOL VAN' ||
                                    this.breadcrumbdata[i].label == 'AMBULANCE' || this.breadcrumbdata[i].label == 'SCHOOL BUS' || this.breadcrumbdata[i].label == 'STAFF BUS' || this.breadcrumbdata[i].label == 'BUS CHASSIS' || this.breadcrumbdata[i].label == 'INTERCITY BUS') {
                                    this.breadcrumbCurrentpageCheck = true;
                                }
                            }
                            if (this.breadcrumbCurrentpageCheck) {
                                var checkPPLName = false;
                                for (var i = 0; i < this.breadcrumbdata.length; i++) {
                                    if (this.breadcrumbdata[i].label == ((_e = response === null || response === void 0 ? void 0 : response.data[0]) === null || _e === void 0 ? void 0 : _e.ppl)) {
                                        checkPPLName = true;
                                    }
                                }
                                if (!checkPPLName) {
                                    var breadcrumbList1 = {
                                        label: this.pplId.replace('-', ' ').toUpperCase(),
                                        url: `/product-list/` + this.lobId.replace(/\s/g, "-").toLowerCase() + `/` + this.sub_lob.replace(/\s/g, "-").toLowerCase() + `/` + ((this.pplId.replace(/\s/g, "-").toLowerCase()).replace("---", "-")).replace("--", "-"),
                                        pageName: "product-list",
                                        params: {
                                            lob_name: this.lobId == 'Icv Trucks' ? 'TRUCKS' : this.lobId,
                                            sub_lob: this.sub_lob,
                                            ppl_name: this.pplId,
                                        },
                                    };
                                    this.breadcrumbdata.push(breadcrumbList1);
                                    this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                                }
                            }
                            else {
                                localStorage.removeItem("localBreadCrumb");
                                this.breadcrumbdata = this.localStorage.getItem('localBreadCrumb') ? JSON.parse(this.localStorage.getItem('localBreadCrumb')) : [];
                                var breadcrumbList1 = {
                                    label: this.lobId == 'Icv Trucks' ? 'TRUCKS' : this.lobId.replace('-', ' ').toUpperCase(),
                                    url: `/product-list/` + this.lobId.replace(/\s/g, "-").toLowerCase(),
                                    pageName: "product-list",
                                    params: {
                                        lob_name: this.lobId == 'Icv Trucks' ? 'Trucks' : this.lobId,
                                        sub_lob: this.sub_lob,
                                        ppl_name: this.pplId,
                                    },
                                };
                                this.breadcrumbdata.push(breadcrumbList1);
                                this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                                var breadcrumbList1 = {
                                    label: this.sub_lob.replace('-', ' ').toUpperCase(),
                                    url: `/category-list/` + this.lobId.replace(/\s/g, "-").toLowerCase() + `/` + this.sub_lob.replace(/\s/g, "-").toLowerCase(),
                                    pageName: "category-list",
                                    params: {
                                        lob_name: this.lobId,
                                        sub_lob: this.sub_lob,
                                        ppl_name: this.pplId,
                                    },
                                };
                                this.breadcrumbdata.push(breadcrumbList1);
                                this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                                var breadcrumbList1 = {
                                    label: this.pplId.replace('-', ' ').toUpperCase(),
                                    url: `/product-list/` + this.lobId.replace(/\s/g, "-").toLowerCase() + `/` + this.sub_lob.replace(/\s/g, "-").toLowerCase() + `/` + ((this.pplId.replace(/\s/g, "-").toLowerCase()).replace("---", "-")).replace("--", "-"),
                                    pageName: "product-list",
                                    params: {
                                        lob_name: this.lobId,
                                        sub_lob: this.sub_lob,
                                        ppl_name: this.pplId,
                                    },
                                };
                                this.breadcrumbdata.push(breadcrumbList1);
                                this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                            }
                        }
                    }
                    else {
                        localStorage.removeItem('localBreadCrumb');
                        var breadcrumbList1 = {
                            label: this.lobId == 'Icv Trucks' ? 'TRUCKS' : (_f = this.lobId) === null || _f === void 0 ? void 0 : _f.replace('-', ' ').toUpperCase(),
                            url: `/product-list/` + ((_g = this.lobId) === null || _g === void 0 ? void 0 : _g.replace(/\s/g, "-").toLowerCase()),
                            pageName: "product-list",
                            params: {
                                lob_name: this.lobId == 'Icv Trucks' ? 'Trucks' : this.lobId,
                                sub_lob: this.sub_lob,
                                ppl_name: this.pplId,
                            },
                        };
                        this.breadcrumbdata.push(breadcrumbList1);
                        this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                    }
                    this.showBreadCrumb = true;
                    localStorage.removeItem("BreadPageCurrent");
                    this.seo(this.metainfo[0]);
                }
            },
            error: (error) => {
                this.spinnerService.hide();
                this.showRecord = true;
                this.productList = [];
                this.total_records = null;
            }
        }));
    }
    setPage() {
        this.currentStartRow = 0;
        this.currentEndRow = 18;
        this.flag = 0;
    }
    googleAnlyaticsViewPage(eventname, pagename) {
        try {
            // this.firebaseanalytics.viewPage(eventname, pagename);
        }
        catch (error) { }
    }
    seo(metainfo) {
        this.seoservice.updateTitle(metainfo.title);
        this.seoservice.updateMetaTag("description", null, metainfo.desc);
        this.seoservice.updateMetaTag(null, "og:locale", "en_US");
        this.seoservice.updateMetaTag(null, "og:type", "Website");
        this.seoservice.updateMetaTag(null, "og:title", metainfo.title);
        this.seoservice.updateMetaTag(null, "og:description", metainfo.desc);
        // this.seoservice.updateMetaTag(null, "og:url", environment.baseUrl + this.router.url);
        this.seoservice.updateMetaTag(null, "og:site_name", "Tata OSP");
    }
    async getFindByDropDownsData(setMaxPrice, setBudget) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            let data = {};
            data["lob_name"] = this.lobId ? this.lobId : "";
            data["actual_lob_name"] = this.sub_lob ? this.sub_lob : this.selectedFilterSegment ? this.selectedFilterSegment : "";
            data["ppl_name"] = this.pplId ? this.pplId : this.selectedFilterCategory ? this.selectedFilterCategory : "";
            data["pl_name"] = this.plId ? this.plId : "";
            data["search"] = this.searchValue ? this.searchValue : "";
            if (this.selectedFilter) {
                data["vehicle_application"] = this.selectedFilter;
            }
            if (this.selectedFilterModel) {
                data["model"] = this.selectedFilterModel;
            }
            if (this.selectedFilterBody) {
                data["body_type"] = this.selectedFilterBody;
            }
            if (this.selectedFilterFuel) {
                data["fuel_type"] = this.selectedFilterFuel;
            }
            if (this.selectedFilterPayload) {
                data["payload"] = this.selectedFilterPayload;
            }
            if (this.selectedFilterAirConditioning) {
                data["air_conditioning"] = this.selectedFilterAirConditioning;
            }
            if (this.selectedFilterLoadBody) {
                data["load_body_length"] = this.selectedFilterLoadBody;
            }
            if (this.selectedFilterKerbWeight) {
                data["kerb_weight"] = this.selectedFilterKerbWeight;
            }
            if (this.selectedFilterCabin) {
                data["cabin_type"] = this.selectedFilterCabin;
            }
            if (this.selectedFilterEmission) {
                data["emission_norms"] = this.selectedFilterEmission;
            }
            if (this.selectedFilterWheels) {
                data["wheels"] = this.selectedFilterWheels;
            }
            if (this.selectedFilterGvw) {
                data["gvw"] = this.selectedFilterGvw;
            }
            if (this.selectedFilterBudget) {
                data["price"] = this.selectedFilterBudget;
            }
            let apiUrl = this.apiList.returnAPI('dropdowns');
            await this.sub.add(this.dataservice.post(apiUrl, data).subscribe({ next: (response) => {
                    if (response.success) {
                        this.filterList = response.data;
                        if (setMaxPrice) {
                            this.localStorage.setItem('maxPrice', JSON.stringify(this.filterList.price_range));
                            this.maxPrice = this.filterList.price_range;
                        }
                        else {
                            this.maxPrice = JSON.parse(this.localStorage.getItem('maxPrice'));
                        }
                        if (setBudget) {
                            this.budgetValueData = this.filterList.price_range;
                        }
                        this.budgetValues(this.filterList.price_range);
                    }
                    else {
                        this.filterList = {};
                    }
                }, error: (err) => {
                } }));
        }
    }
    budgetValues(budData) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            if (budData) {
                if (!this.maxPrice) {
                    this.localStorage.setItem('maxPrice', JSON.stringify(this.filterList.price_range));
                    this.maxPrice = this.filterList.price_range;
                }
            }
            else {
                this.budgetValueData = 0;
                this.max = 0;
            }
        }
    }
    onChangeFiler(event, type) {
        if (type == "usage") {
            this.selectedFilter = event.target.value;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_application_dropdown", "", "", "", "", "", "", "", "", "", "", this.selectedFilter, "", "", "", "", this.pagetitle);
        }
        if (type == "model") {
            this.selectedFilterModel = event.target.value;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_model_dropdown", "", this.selectedFilterModel, "", "", "", "", "", "", "", "", "", "", "", "", "", this.pagetitle);
        }
        if (type == "gvw") {
            this.selectedFilterGvw = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_tonnage", "", "", "", "", "", "", "", "", "", "", "", "", this.selectedFilterGvw, "", "", this.pagetitle);
        }
        if (type == "fuel") {
            this.selectedFilterFuel = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_fueltype", "", "", "", "", "", "", "", "", this.selectedFilterFuel, "", "", "", "", "", "", this.pagetitle);
        }
        if (type == "air") {
            this.selectedFilterAirConditioning = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_airconditioning", "", "", "", "", "", "", "", "", "", this.selectedFilterAirConditioning, "", "", "", "", "", this.pagetitle);
        }
        if (type == "body") {
            this.selectedFilterLoadBody = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_loadbodylength", "", "", "", this.selectedFilterLoadBody, "", "", "", "", "", "", "", "", "", "", "", this.pagetitle,);
        }
        if (type == "cabinType") {
            this.selectedFilterCabin = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_cabintype", "", "", "", "", "", "", "", this.selectedFilterCabin, "", "", "", "", "", "", "", this.pagetitle,);
        }
        if (type == "loadBody") {
            this.selectedFilterLoadBody = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_loadbodylength", "", "", "", this.selectedFilterLoadBody, "", "", "", "", "", "", "", "", "", "", "", this.pagetitle,);
        }
        if (type == "budget") {
            this.selectedFilterBudget = event.target.value;
            ;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_budget", "", "", this.selectedFilterBudget, "", "", "", "", "", "", "", "", "", "", "", "", this.pagetitle);
        }
        if (type == "segment") {
            this.selectedFilterSegment = event.target.value;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_segment", "", "", "", "", "", "", "", "", "", "", "", "", "", this.selectedFilterSegment, "", this.pagetitle);
        }
        if (type == "category") {
            this.selectedFilterCategory = event.target.value;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_category", "", "", "", "", "", "", "", "", "", "", "", "", "", "", this.selectedFilterCategory, this.pagetitle);
        }
        if (type == "wheels") {
            this.selectedFilterWheels = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_category", "", "", "", "", "", this.selectedFilterWheels, "", "", "", "", "", "", "", "", "", this.pagetitle);
        }
        this.setPage();
        this.loadData();
        this.getFindByDropDownsData(false);
    }
    onInputBudget(event) {
        this.budgetValueData = event.target.value;
        // this.firebaseanalytics.filterEvent("click_vehiclelist_budget", "", "", this.budgetValueData, "", "", "", "", "", "", "", "", "", "", "", "", this.pagetitle,);
    }
    selectFilterReset(row) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            this.selectedFilterFuel = null;
            this.selectedFilterCabin = null;
            this.selectedFilterEmission = null;
            this.selectedFilterWheels = null;
            this.selectedFilterGvw = null;
            this.selectedFilterBudget = null;
            this.selectedFilterKerbWeight = null;
            this.selectedFilterSegment = null;
            this.selectedFilterCategory = null;
            this.selectedFilter = null;
            this.selectedFilterModel = null;
            this.selectedFilterBody = null;
            this.selectedFilterPayload = null;
            this.selectedFilterAirConditioning = null;
            this.selectedFilterLoadBody = null;
            if (row == 'mobile') {
                $('#filtersModal').modal('hide');
            }
        }
        this.setPage();
        this.loadData();
        this.getFindByDropDownsData(true, true);
    }
    FilterStrings(ListInput) {
        this.Filterarray = [];
        for (let item in ListInput) {
            if (this.selectedFilterSegment || this.selectedFilterCategory || this.selectedFilter || this.selectedFilterModel || this.selectedFilterBody ||
                this.selectedFilterFuel || this.selectedFilterAirConditioning || this.selectedFilterLoadBody || this.selectedFilterKerbWeight || this.selectedFilterCabin ||
                this.selectedFilterEmission || this.selectedFilterWheels || this.selectedFilterGvw || this.selectedFilterBudget) {
                if (ListInput[item]) {
                    var Json = { "Key": item, "Value": ListInput[item] };
                    this.Filterarray.push(Json);
                }
            }
            this.Filterarray = this.Filterarray.filter(book => book.Key !== 'end_row');
            this.Filterarray = this.Filterarray.filter(book => book.Key !== 'search');
            this.Filterarray = this.Filterarray.filter(book => book.Key !== 'start_row');
            this.Filterarray = this.Filterarray.filter(book => book.Key !== 'lob_name');
            if (!this.selectedFilterSegment) {
                this.Filterarray = this.Filterarray.filter(book => book.Key !== 'actual_lob_name');
            }
            if (!this.selectedFilterCategory) {
                this.Filterarray = this.Filterarray.filter(book => book.Key !== 'ppl_name');
            }
        }
    }
    onRemoveFilter(filterString) {
        if (filterString.Key == "vehicle_application") {
            this.selectedFilter = null;
        }
        else if (filterString.Key == "model") {
            this.selectedFilterModel = null;
        }
        else if (filterString.Key == "body_type") {
            this.selectedFilterBody = null;
        }
        else if (filterString.Key == "fuel_type") {
            this.selectedFilterFuel = null;
        }
        else if (filterString.Key == "payload") {
            this.selectedFilterPayload = null;
        }
        else if (filterString.Key == "air_conditioning") {
            this.selectedFilterAirConditioning = null;
        }
        else if (filterString.Key == "load_body_length") {
            this.selectedFilterLoadBody = null;
        }
        else if (filterString.Key == "kerb_weight") {
            this.selectedFilterKerbWeight = null;
        }
        else if (filterString.Key == "cabin_type") {
            this.selectedFilterCabin = null;
        }
        else if (filterString.Key == "emission_norms") {
            this.selectedFilterEmission = null;
        }
        else if (filterString.Key == "wheels") {
            this.selectedFilterWheels = null;
        }
        else if (filterString.Key == "gvw") {
            this.selectedFilterGvw = null;
        }
        else if (filterString.Key == "price") {
            this.selectedFilterBudget = null;
        }
        else if (filterString.Key == "actual_lob_name") {
            this.selectedFilterSegment = null;
        }
        else if (filterString.Key == "ppl_name") {
            this.selectedFilterCategory = null;
        }
        this.setPage();
        this.loadData();
        this.getFindByDropDownsData(false, filterString.Key == "price" ? true : false);
    }
    onSelectFilterInput(event, type) {
        if (type == "gvw") {
            this.selectedFilterGvw = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_tonnage", "", "", "", "", "", "", "", "", "", "", "", "", this.selectedFilterGvw, "", "", this.pagetitle);
        }
        if (type == "fuel") {
            this.selectedFilterFuel = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_fueltype", "", "", "", "", "", "", "", "", this.selectedFilterFuel, "", "", "", "", "", "", this.pagetitle);
        }
        if (type == "air") {
            this.selectedFilterAirConditioning = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_airconditioning", "", "", "", "", "", "", "", "", "", this.selectedFilterAirConditioning, "", "", "", "", "", this.pagetitle);
        }
        if (type == "body") {
            this.selectedFilterLoadBody = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_loadbodylength", "", "", "", this.selectedFilterLoadBody, "", "", "", "", "", "", "", "", "", "", "", this.pagetitle,);
        }
        if (type == "cabinType") {
            this.selectedFilterCabin = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_cabintype", "", "", "", "", "", "", "", this.selectedFilterCabin, "", "", "", "", "", "", "", this.pagetitle,);
        }
        if (type == "loadBody") {
            this.selectedFilterLoadBody = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_loadbodylength", "", "", "", this.selectedFilterLoadBody, "", "", "", "", "", "", "", "", "", "", "", this.pagetitle,);
        }
        if (type == "budget") {
            this.selectedFilterBudget = event.target.value;
            ;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_budget", "", "", this.selectedFilterBudget, "", "", "", "", "", "", "", "", "", "", "", "", this.pagetitle);
        }
        if (type == "segment") {
            this.selectedFilterSegment = event.target.value;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_segment", "", "", "", "", "", "", "", "", "", "", "", "", "", this.selectedFilterSegment, "", this.pagetitle);
        }
        if (type == "category") {
            this.selectedFilterCategory = event.target.value;
            ;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_category", "", "", "", "", "", "", "", "", "", "", "", "", "", "", this.selectedFilterCategory, this.pagetitle);
        }
        if (type == "wheels") {
            this.selectedFilterWheels = event;
            // this.firebaseanalytics.filterEvent("click_vehiclelist_category", "", "", "", "", "", this.selectedFilterWheels, "", "", "", "", "", "", "", "", "", this.pagetitle);
        }
    }
    searchMobile() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            $('#filtersModal').modal('hide');
        }
        this.setPage();
        this.loadData();
    }
    openPage(data, type) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            var currentUrl;
            this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
            let modelname = (((data.model.replace(/\//g, "-")).replace(/\+/g, "-")).replace(/\./g, "-")).toLowerCase();
            let pplname = ((data.ppl.replace(/\//g, "-")).replace(/\s/g, "-")).toLowerCase();
            let lobname = data.lob.replace(/\s/g, "-").toLowerCase() == 'icv-trucks' ? 'trucks' : data.lob.replace(/\s/g, "-").toLowerCase();
            if (type == 'viewDetail') {
                //   try{
                //   this.firebaseanalytics.MenuPlPpl("product-detail", data.lob_name, data.ppl_name, data.model, this.pageTitle);
                // } catch (error) { }
                currentUrl = `/product-details/` + lobname + `/` + pplname + `/` + modelname.replace(/\s/g, "-").toLowerCase() + `/` + data.id;
            }
            else {
                currentUrl = `/lead-booking/` + lobname + `/` + pplname + `/` + modelname.replace(/\s/g, "-").toLowerCase() + `/` + data.id;
            }
            return currentUrl;
        }
    }
    ngOnDestroy() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            localStorage.removeItem("maxPrice");
        }
        this.sub.unsubscribe();
    }
};
SearchResultPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-search-result-page',
        templateUrl: './search-result-page.component.html',
        styleUrls: ['./search-result-page.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__param)(11, (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID))
], SearchResultPageComponent);



/***/ }),

/***/ 623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultPageModule": () => (/* binding */ SearchResultPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(193);
/* harmony import */ var _search_result_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(624);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(573);
/* harmony import */ var ngx_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(620);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(583);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(630);
/* harmony import */ var _no_product_found_no_product_found_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(625);
/* harmony import */ var _search_result_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(627);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(628);











const appRoutes = [{ path: '', component: _search_result_page_component__WEBPACK_IMPORTED_MODULE_0__.SearchResultPageComponent }];
let SearchResultPageModule = class SearchResultPageModule {
};
SearchResultPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _search_result_page_component__WEBPACK_IMPORTED_MODULE_0__.SearchResultPageComponent
        ],
        imports: [_search_result_routing_module__WEBPACK_IMPORTED_MODULE_2__.SearchResultPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_skeleton__WEBPACK_IMPORTED_MODULE_7__.NgxSkeletonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__.InfiniteScrollModule, _no_product_found_no_product_found_module__WEBPACK_IMPORTED_MODULE_1__.NoProductFoundModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(appRoutes)]
    })
], SearchResultPageModule);



/***/ }),

/***/ 627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultPageRoutingModule": () => (/* binding */ SearchResultPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(573);
/* harmony import */ var _search_result_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(624);




const routes = [
    { path: 'product-list', component: _search_result_page_component__WEBPACK_IMPORTED_MODULE_0__.SearchResultPageComponent, data: { title: '', breadcrumb: '' } },
    { path: 'product-list/:lob_name', component: _search_result_page_component__WEBPACK_IMPORTED_MODULE_0__.SearchResultPageComponent, data: { title: '', breadcrumb: '' } },
    { path: 'product-list/:lob_name/:sub_lob/:ppl_name', component: _search_result_page_component__WEBPACK_IMPORTED_MODULE_0__.SearchResultPageComponent, data: { title: '', breadcrumb: '' } },
    { path: 'product-list/:lob_name/:sub_lob/:ppl_name/:opty_Id', component: _search_result_page_component__WEBPACK_IMPORTED_MODULE_0__.SearchResultPageComponent, data: { title: '', breadcrumb: '' } },
];
let SearchResultPageRoutingModule = class SearchResultPageRoutingModule {
};
SearchResultPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SearchResultPageRoutingModule);



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