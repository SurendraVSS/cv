"use strict";
exports.id = 10;
exports.ids = [10];
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

/***/ 633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListRoutingModule": () => (/* binding */ ProductListRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(573);
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(632);



// import { ArticleResolver } from 'src/shared/seo/article-resolver';

const routes = [
    { path: 'category-list', component: _product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent, data: { title: '', breadcrumb: '' } },
    { path: 'category-list/:lob_name', component: _product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent, data: { title: '', breadcrumb: '' },
        // resolve: { article: ArticleResolver }
    },
    { path: 'category-list/:lob_name/:sub_lob', component: _product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent, data: { title: '', breadcrumb: '' },
        // resolve: { article: ArticleResolver }
    },
    { path: 'category-list/:lob_name/:sub_lob/:ppl_name', component: _product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent, data: { title: '', breadcrumb: '' },
        // resolve: { article: ArticleResolver }
    },
    { path: 'category-list/:explore', component: _product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent, data: { title: '', breadcrumb: '' },
        // resolve: { article: ArticleResolver }
    },
];
let ProductListRoutingModule = class ProductListRoutingModule {
};
ProductListRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProductListRoutingModule);



/***/ }),

/***/ 632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(194);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__);




// import { Observable, pluck, tap } from 'rxjs';
let ProductListComponent = class ProductListComponent {
    //   readonly article$: Observable<any> = this.route.data
    //   .pipe(
    //     pluck('sub_lob'),
    //     tap(article => this.seo(article))
    // );
    constructor(router, route, seoservice, sanitizer, canonicalservice, toastrService, skeletonService, dataservice, localStorage, modelService, cleverService, platformId, apiList, spinnerService) {
        this.router = router;
        this.route = route;
        this.seoservice = seoservice;
        this.sanitizer = sanitizer;
        this.canonicalservice = canonicalservice;
        this.toastrService = toastrService;
        this.skeletonService = skeletonService;
        this.dataservice = dataservice;
        this.localStorage = localStorage;
        this.modelService = modelService;
        this.cleverService = cleverService;
        this.platformId = platformId;
        this.apiList = apiList;
        this.spinnerService = spinnerService;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription();
        this.mavCarousel = {
            items: 4,
            loop: false,
            margin: 10,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            autoWidth: false,
            responsiveRefreshRate: 1000000,
            navText: ["<img class='nav' src='assets/images/crasual-left.svg'   alt='crasual-left' />", "<img class='nav' src='assets/images/crasual-right.svg'   alt='crasual-right'  />"],
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 2,
                },
                740: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true
                },
                1200: {
                    items: 4,
                    nav: true
                }
            },
        };
        this.testimonialSlider = {
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            autoplay: false,
            nav: true,
            responsiveRefreshRate: 1000000,
            navText: ["<img class='nav' src='assets/images/crasual-left.svg'   alt='crasual-left'   />", "<img class='nav' src='assets/images/crasual-right.svg'   alt='crasual-right'   />"],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                }
            },
        };
        this.pagetitle = "Product List";
        this.rowlimit = 0;
        this.productList = [];
        this.showRecord = false;
        this.currentStartRow = 0;
        this.currentEndRow = 18;
        this.loading = false;
        this.isLastPage = false;
        this.flag = 0;
        this.isImgLoaded = false;
        this.breadcrumbList = [];
        this.searchuserData = '';
        this.breadcrumbdata = [];
        this.showBreadCrumb = false;
        this.testimonialVideoData = [];
        this.exploreData = [];
        this.exploreList = [];
        this.MainOfferList = [];
        this.financierData = [];
        this.testimoinalLob = [];
        this.lobDesc = [];
        this.modelList = [];
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
        this.hideViewAllBtn = false;
        this.titleMetaData = [];
    }
    ngOnInit() {
        var _a;
        this.getS3File();
        // this.getMetaDataS3File()
        this.canonicalservice.createCanonicalURL();
        try {
            this.cleverService.onPageView(this.pagetitle, this.previousUrl, "");
        }
        catch (_b) { }
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            (_a = document.getElementById("myDIV")) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", this.myFunction, { passive: true });
        }
        this.sub.add(this.dataservice.getS3File('productList.txt')
            .subscribe({
            next: (response) => { this.modelList = response.data.ModeList; },
            error: () => { },
            complete: () => {
                this.sub.add(this.dataservice.getS3File('plMetaDataList.txt')
                    .subscribe({
                    next: (response) => {
                        this.titleMetaData = response.data.metaDataList;
                        let sub_lob = this.route.snapshot.paramMap.get("sub_lob");
                        this.titleMetaData.forEach((element) => {
                            if (sub_lob == element["display_seo"]) {
                                this.titleData = element.display_metaData;
                            }
                        });
                    },
                    error: () => { },
                    complete: () => {
                        this.rowlimit = 0;
                        this.searchuserData = '';
                        this.searchValue = '';
                        this.sub.add(this.route.queryParams.subscribe((params) => {
                            this.plId = params["pl_name"];
                            this.sub_lob = this.route.snapshot.paramMap.get("sub_lob");
                            this.lobId = this.route.snapshot.paramMap.get("lob_name") == 'trucks' ? 'icv-trucks' : this.route.snapshot.paramMap.get("lob_name");
                            this.pplId = this.route.snapshot.paramMap.get("ppl_name") ? this.route.snapshot.paramMap.get("ppl_name")
                                : this.route.snapshot.paramMap.get("sub_lob") ? this.route.snapshot.paramMap.get("sub_lob") : '';
                            var optyId = this.route.snapshot.paramMap.get("opty_Id");
                            if (optyId) {
                                let data = { opty_id: optyId };
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
                            this.searchValue = params["search"];
                            if (this.lobId || this.pplId || this.plId || this.sub_lob || this.searchValue) {
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
                            if (params["search"]) {
                                this.searchValue = params["search"];
                                this.searchValue = this.searchuserData;
                            }
                            if (params["ppl_name"]) {
                                let modelList = this.modelList;
                                this.lobId = "ppl_list";
                                modelList.forEach(element => {
                                    if (element.name == params["ppl_name"]) {
                                        this.ppl_list = element.ppl_list;
                                        this.el_pl_list = element.el_pl_list;
                                        this.vc_number_s = element.vc_number_s;
                                    }
                                });
                            }
                            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
                                window.scrollTo(0, 0);
                            }
                            this.currentStartRow = 0;
                            this.currentEndRow = 18;
                            this.productList = [];
                        }));
                        this.getExplore();
                    }
                }));
            }
        }));
    }
    myFunction() {
        this.onScroll();
    }
    getS3File() {
        this.sub.add(this.dataservice.getS3File('lobDescription.txt')
            .subscribe({
            next: (response) => { this.lobDesc = response.data.ModeList; },
            error: () => { },
            complete: () => { }
        }));
    }
    // getMetaDataS3File() {
    //   this.sub.add(this.dataservice.getS3File('plMetaDataList.txt')
    //     .subscribe({
    //       next: (response) => {
    //         this.titleMetaData = response.data.metaDataList
    //         let sub_lob = this.route.snapshot.paramMap.get("sub_lob")
    //         this.titleMetaData.forEach((element) => {
    //           if (sub_lob == element["display_seo"]) {
    //             this.titleData = element.display_metaData
    //             console.log(this.titleData)
    //           }
    //         }
    //         )
    //       },
    //       error: () => { },
    //       complete: () => { }
    //     }
    //     ));
    // }
    setheader() {
        if (this.displayname = this.searchValue) {
            this.menuHeadName = this.searchValue;
        }
        else if (this.displayname === 'icv-trucks') {
            this.pageHeader = 'Trucks';
        }
        else if (this.displayname === 'scv-pickups') {
            this.pageHeader = 'SCV Pickups';
        }
        else if (this.displayname === 'buses') {
            this.pageHeader = 'Buses';
        }
        else {
            this.pageHeader = this.searchValue;
        }
    }
    onScroll() {
        if (this.productList.length == this.rowlimit) {
            this.loadData();
        }
    }
    getLobDesc(lobName) {
        let value = this.lobDesc.filter(value => value.ppl_name == lobName);
        return value.length > 0 ? value[0].ppl_desc : '';
    }
    loadData() {
        let data = {};
        this.isLastPage = false;
        this.rowlimit = this.currentEndRow;
        data["start_row"] = this.currentStartRow;
        data["end_row"] = this.currentEndRow;
        data["lob_name"] = this.lobId ? this.lobId : "";
        data["actual_lob_name"] = this.sub_lob ? this.sub_lob : "";
        data["ppl_name"] = this.pplId ? this.pplId : "";
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
        if (this.flag == 0) {
            this.productList = [];
            this.currentStartRow = 0;
            this.currentEndRow = 18;
        }
        this.sub.add(this.dataservice.getProductList(data).subscribe({
            next: (response) => {
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
                            title: (response === null || response === void 0 ? void 0 : response.metadata.ppl_title) ? response === null || response === void 0 ? void 0 : response.metadata.ppl_title : this.metainfo[0].title,
                            desc: (response === null || response === void 0 ? void 0 : response.metadata.ppl_description) ? response === null || response === void 0 ? void 0 : response.metadata.ppl_description : this.metainfo[0].desc
                        });
                        index = 4;
                    }
                    if (index == 4) {
                        this.metainfo.pop();
                    }
                    this.total_records = response.total_records;
                    this.loading = false;
                    this.currentStartRow = this.currentEndRow;
                    this.currentEndRow = this.currentEndRow + 18;
                    this.breadcrumbList.push({
                        label: response.data[0].sub_lob == 'Icv Trucks' ? 'Trucks' : response.data[0].sub_lob == 'buses' ? 'Buses' : response.data[0].sub_lob == 'scv-pickups' ? 'SCV Pickups' : response.data[0].sub_lob,
                        url: 'category-list',
                        params: {
                            lob_name: response.data[0].lob,
                            sub_lob: response.data[0].sub_lob,
                            ppl_name: response.data[0].ppl,
                        },
                    });
                    localStorage.removeItem('localBreadCrumb');
                    this.breadcrumbdata.push(this.breadcrumbList);
                    this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
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
                    this.showRecord = true;
                }
                else {
                    this.showRecord = true;
                    this.productList = [];
                }
            },
            error: () => {
                this.showRecord = true;
                this.productList = [];
                this.breadcrumbList = [];
                this.total_records = null;
            },
            complete: () => {
                this.showRecord = true;
                this.productList = [];
                this.breadcrumbList = [];
                this.total_records = null;
            }
        }));
    }
    googleAnlyaticsViewPage(eventname, pagename) {
        try {
            // this.firebaseanalytics.viewPage(eventname, pagename);
        }
        catch (error) { }
    }
    seo(categoryData) {
        let metaTitle = "Check Price, Features and Buy " + categoryData + " Online in India at Tata Motors | Tata Motors";
        let metaDesc = "Enquire, Book and Buy " + categoryData + " at buytrucknbus.tatamotors.com with Tata Motors authorized dealers";
        this.seoservice.updateTitle(metaTitle);
        this.seoservice.updateMetaTag("description", null, metaDesc);
        this.seoservice.updateMetaTag(null, "og:locale", "en_US");
        this.seoservice.updateMetaTag(null, "og:type", "Website");
        this.seoservice.updateMetaTag(null, "og:title", metaTitle);
        this.seoservice.updateMetaTag(null, "og:description", metaDesc);
        this.seoservice.updateMetaTag(null, "og:site_name", "Tata OSP");
    }
    getExplore() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let modelList = this.modelList;
        modelList.forEach(element => {
            if (element.seo_name == this.lobId) {
                this.ppl_list = element.ppl_list;
                this.el_pl_list = element.el_pl_list;
                this.vc_number_s = element.vc_number_s;
                this.testimoinalLob = element === null || element === void 0 ? void 0 : element.lob_seo;
                return element;
            }
        });
        this.exploreJson = {
            "ppl_list": this.ppl_list,
            "el_pl_list": this.el_pl_list,
            "vc_number_s": this.vc_number_s
        };
        if (this.ppl_list && this.el_pl_list && this.vc_number_s) {
            this.hideViewAllBtn = true;
            this.GetTestmonialVideo(this.testimoinalLob[0]);
        }
        else {
            this.hideViewAllBtn = false;
            if (this.lobId == "heavy-trucks") {
                this.exploreJson = {
                    "lob_explore": ["MCV Trucks", "HCV Cargo"],
                    "type": "heavy_truck"
                };
                this.GetTestmonialVideo("mcv-trucks");
                this.seo((_a = this.exploreJson) === null || _a === void 0 ? void 0 : _a.lob_explore[0]);
            }
            else if (this.lobId == "tippers") {
                this.exploreJson = {
                    "lob_explore": ["HCV Const"],
                };
                this.GetTestmonialVideo("hcv-const");
                this.seo((_b = this.exploreJson) === null || _b === void 0 ? void 0 : _b.lob_explore[0]);
            }
            else if (this.lobId == "light-trucks") {
                this.exploreJson = {
                    "lob_explore": ["LCV", "ICV Trucks"],
                };
                this.GetTestmonialVideo("lcv");
                this.seo((_c = this.exploreJson) === null || _c === void 0 ? void 0 : _c.lob_explore[0]);
            }
            else if (this.lobId == "tractor-trailer") {
                this.exploreJson = {
                    "lob_explore": ["HCV Cargo"],
                    "type": "tractor_trailer"
                };
                this.GetTestmonialVideo("hcv-cargo");
                this.seo((_d = this.exploreJson) === null || _d === void 0 ? void 0 : _d.lob_explore[0]);
            }
            else if (this.lobId == "mini-trucks-&-pickups") {
                this.exploreJson = {
                    "lob_explore": ["SCV Cargo", "Pickups"],
                };
                this.GetTestmonialVideo("scv-cargo");
                this.seo((_e = this.exploreJson) === null || _e === void 0 ? void 0 : _e.lob_explore[0]);
            }
            else if (this.lobId == "pickup") {
                this.exploreJson = {
                    "lob_explore": ["Intra", "Pickup Large"],
                };
                this.GetTestmonialVideo("pickups");
                this.seo((_f = this.exploreJson) === null || _f === void 0 ? void 0 : _f.lob_explore[0]);
            }
            else if (this.lobId == "bus") {
                this.exploreJson = {
                    "lob_explore": ["Buses"],
                };
                this.GetTestmonialVideo("buses");
                this.seo((_g = this.exploreJson) === null || _g === void 0 ? void 0 : _g.lob_explore[0]);
            }
            else if (this.lobId == "vans") {
                this.exploreJson = {
                    "lob_explore": ["ScPass", "SCVPass"],
                };
                this.GetTestmonialVideo("scpass");
                this.seo((_h = this.exploreJson) === null || _h === void 0 ? void 0 : _h.lob_explore[0]);
            }
            else {
                let seoData;
                if (this.lobId && !this.pplId) {
                    let lobname = (this.lobId.replace(/-/g, " ")).toLowerCase();
                    this.exploreJson = {
                        "lob_explore": [lobname],
                    };
                    seoData = {
                        seoD: [(this.lobId.replace(/-/g, " ")).toUpperCase()]
                    };
                    this.seo(seoData === null || seoData === void 0 ? void 0 : seoData.seoD[0]);
                }
                else {
                    if (this.pplId) {
                        let pplname = (this.pplId.replace(/-/g, " ")).toLowerCase();
                        this.exploreJson = {
                            "lob_explore": [pplname],
                        };
                        seoData = {
                            seoD: [(this.pplId.replace(/-/g, " ")).toUpperCase()]
                        };
                        this.seo(this.titleData ? this.titleData : seoData === null || seoData === void 0 ? void 0 : seoData.seoD);
                    }
                    else {
                        this.exploreJson = {
                            "lob_explore": [this.sub_lob],
                        };
                        seoData = {
                            seoD: [(this.sub_lob.replace(/-/g, " ")).toUpperCase()]
                        };
                        this.seo(seoData === null || seoData === void 0 ? void 0 : seoData.seoD[0]);
                    }
                }
                this.GetTestmonialVideo(this.sub_lob);
            }
        }
        this.exploreData = [];
        this.exploreList = [];
        let apiUrl = this.apiList.returnAPI('dashboardLobWise');
        this.spinnerService.show();
        this.sub.add(this.dataservice.post(apiUrl, this.exploreJson).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            this.spinnerService.hide();
            if (response.success) {
                this.spinnerService.hide();
                let OffersResponse = [];
                OffersResponse = response.data;
                let exploreListValue = [];
                exploreListValue = Object.values(OffersResponse);
                let exploreListValueEntries = [];
                exploreListValueEntries = Object.entries(OffersResponse);
                this.exploreData = exploreListValueEntries.sort((a, b) => a > b ? 1 : -1);
                Object.keys(this.exploreData).forEach((key) => {
                    const value = this.exploreData[key];
                    value[1].sort((a, b) => a.model > b.model ? 1 : -1);
                });
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
                    if (this.lobId && this.sub_lob) {
                        localStorage.removeItem('localBreadCrumb');
                        var breadcrumbList1 = {
                            label: this.lobId == 'Icv Trucks' ? 'TRUCKS' : (_a = this.lobId) === null || _a === void 0 ? void 0 : _a.replaceAll('-', ' ').toUpperCase(),
                            url: `/product-list/` + this.lobId.replace(/\s/g, "-").toLowerCase(),
                            pageName: "product-list",
                            params: {
                                lob_name: this.exploreData[0][1][0].lob,
                                sub_lob: this.exploreData[0][1][0].lob,
                                ppl_name: this.exploreData[0][1][0].ppl,
                            },
                        };
                        this.breadcrumbdata.push(breadcrumbList1);
                        var breadcrumbList1 = {
                            label: (_b = this.sub_lob) === null || _b === void 0 ? void 0 : _b.replaceAll('-', ' ').toUpperCase(),
                            url: `/category-list/` + this.lobId.replace(/\s/g, "-").toLowerCase() + `/` + ((_c = this.sub_lob) === null || _c === void 0 ? void 0 : _c.replace(/\s/g, "-").toLowerCase()),
                            pageName: "category-list",
                            params: {
                                lob_name: this.exploreData[0][1][0].lob,
                                sub_lob: this.exploreData[0][1][0].lob,
                                ppl_name: this.exploreData[0][1][0].ppl,
                            },
                        };
                        this.breadcrumbdata.push(breadcrumbList1);
                        this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                    }
                    else {
                        let currentUrl = this.sub_lob != null ? `/category-list/` + this.lobId.replace(/\s/g, "-").toLowerCase() + `/` + this.sub_lob : `/category-list/` + this.lobId.replace(/\s/g, "-").toLowerCase();
                        let label = this.sub_lob == null ? (_d = this.lobId) === null || _d === void 0 ? void 0 : _d.replaceAll('-', ' ') : (_e = this.sub_lob) === null || _e === void 0 ? void 0 : _e.replaceAll('-', ' ');
                        this.breadcrumbList = {
                            label: label.toUpperCase(),
                            url: currentUrl,
                            pageName: "category-list",
                            params: {
                                lob_name: this.exploreData[0][1][0].lob,
                                sub_lob: this.exploreData[0][1][0].lob,
                                ppl_name: this.exploreData[0][1][0].ppl,
                            },
                        };
                        localStorage.removeItem('localBreadCrumb');
                        this.breadcrumbdata.push(this.breadcrumbList);
                        this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                    }
                    this.showBreadCrumb = true;
                }
                else {
                    let currentUrl = this.sub_lob != null ? `/category-list/` + this.lobId.replace(/\s/g, "-").toLowerCase() + `/` + this.sub_lob : `/category-list/` + this.lobId.replace(/\s/g, "-").toLowerCase();
                    let label = this.sub_lob == null ? (_f = this.lobId) === null || _f === void 0 ? void 0 : _f.replaceAll('-', ' ') : (_g = this.sub_lob) === null || _g === void 0 ? void 0 : _g.replaceAll('-', ' ');
                    this.breadcrumbList = {
                        label: label.toUpperCase(),
                        url: currentUrl,
                        pageName: "category-list",
                        params: {
                            lob_name: this.lobId,
                            sub_lob: this.sub_lob,
                            ppl_name: this.pplId,
                        },
                    };
                    localStorage.removeItem('localBreadCrumb');
                    this.breadcrumbdata.push(this.breadcrumbList);
                    this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                    this.showBreadCrumb = true;
                }
            }
            else {
                this.spinnerService.hide();
                if (this.lobId && this.sub_lob) {
                    localStorage.removeItem('localBreadCrumb');
                    var breadcrumbList1 = {
                        label: this.lobId == 'Icv Trucks' ? 'TRUCKS' : (_h = this.lobId) === null || _h === void 0 ? void 0 : _h.replaceAll('-', ' ').toUpperCase(),
                        url: `/product-list/` + ((_j = this.lobId) === null || _j === void 0 ? void 0 : _j.replace(/\s/g, "-").toLowerCase()),
                        pageName: "product-list",
                        params: {
                            lob_name: this.lobId,
                            sub_lob: this.sub_lob,
                            ppl_name: this.pplId,
                        },
                    };
                    this.breadcrumbdata.push(breadcrumbList1);
                    var breadcrumbList1 = {
                        label: (_k = this.sub_lob) === null || _k === void 0 ? void 0 : _k.replaceAll('-', ' ').toUpperCase(),
                        url: `/category-list/` + ((_l = this.lobId) === null || _l === void 0 ? void 0 : _l.replace(/\s/g, "-").toLowerCase()) + `/` + ((_m = this.sub_lob) === null || _m === void 0 ? void 0 : _m.replace(/\s/g, "-").toLowerCase()),
                        pageName: "category-list",
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
                    let currentUrl = this.sub_lob != null ? `/category-list/` + ((_o = this.lobId) === null || _o === void 0 ? void 0 : _o.replace(/\s/g, "-").toLowerCase()) + `/` + this.sub_lob : `/category-list/` + this.lobId.replace(/\s/g, "-").toLowerCase();
                    let label = this.sub_lob == null ? (_p = this.lobId) === null || _p === void 0 ? void 0 : _p.replaceAll('-', ' ').toUpperCase() : (_q = this.sub_lob) === null || _q === void 0 ? void 0 : _q.replaceAll('-', ' ').toUpperCase();
                    this.breadcrumbList = {
                        label: label.toUpperCase(),
                        url: currentUrl,
                        pageName: "category-list",
                        params: {
                            lob_name: this.lobId,
                            sub_lob: this.sub_lob,
                            ppl_name: this.pplId,
                        },
                    };
                    localStorage.removeItem('localBreadCrumb');
                    this.breadcrumbdata.push(this.breadcrumbList);
                    this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                }
                this.showBreadCrumb = true;
            }
        }, () => {
            this.spinnerService.hide();
        }));
    }
    goToViewAll(row) {
        var _a, _b, _c, _d, _e, _f;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            if (this.lobId == 'heavy-trucks' || this.lobId == 'tippers' || this.lobId == 'light-trucks' || this.lobId == 'tractor-trailer') {
                this.viewLobName = "Icv Trucks";
            }
            if (this.lobId == 'MINI-TRUCKs-&-PICKUPs' || this.lobId == 'mini-trucks-&-pickups' || this.lobId == 'pickup') {
                this.viewLobName = "SCV Pickups";
            }
            if (this.lobId == 'bus' || this.lobId == 'vans') {
                this.viewLobName = "Buses";
            }
            this.viewLobName = this.viewLobName == undefined ? this.lobId : this.viewLobName;
            let lobname = this.viewLobName == 'Icv Trucks' ? 'trucks' : (_a = this.viewLobName) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, "-").toLowerCase();
            let modelList = this.modelList;
            modelList.forEach(element => {
                var _a;
                if (lobname == (element.seo_name)) {
                    lobname = (_a = ((element.actual_lob).toString())) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, "-").toLowerCase();
                }
            });
            // try{
            // this.firebaseanalytics.MenuPlPpl("home_menu_PPL_Click", this.viewLobName, row[0].lob, row[0].ppl, this.pagetitle);
            // } catch (error) { }
            let sublobname = ((_b = row[0].lob) === null || _b === void 0 ? void 0 : _b.replace(/\s/g, "-")).toLowerCase();
            let ppl = ((_f = ((_e = (((_d = ((_c = (row[0].ppl)) === null || _c === void 0 ? void 0 : _c.replace(/\//g, "-"))) === null || _d === void 0 ? void 0 : _d.replace(/\s/g, "-")))) === null || _e === void 0 ? void 0 : _e.replace("---", "-"))) === null || _f === void 0 ? void 0 : _f.replace("--", "-")).toLowerCase();
            let currentUrl = `/product-list/` + lobname + `/` + sublobname + `/` + ppl;
            this.router.navigateByUrl(currentUrl)
                .then(() => {
                this.router.navigated = false;
                this.router.navigate([this.router.url]);
            });
        }
    }
    openPage(data, type) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) && data !== undefined) {
            this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
            let currentUrl;
            let lob = data.lob_name ? data.lob_name : (data === null || data === void 0 ? void 0 : data.lob) ? data === null || data === void 0 ? void 0 : data.lob : data.ppl ? data.ppl : data.lob_name;
            let ppl = data.ppl_name ? data.ppl_name : data.ppl ? data.ppl : data.ppl_name;
            let modelname = (data === null || data === void 0 ? void 0 : data.model) ? (((data === null || data === void 0 ? void 0 : data.model.replace(/\//g, "-")).replace(/\+/g, "-")).replace(/\./g, "-")).toLowerCase() : data === null || data === void 0 ? void 0 : data.model;
            let pplname = ppl ? ((ppl.replace(/\//g, "-")).replace(/\s/g, "-")).toLowerCase() : ppl;
            let lobname = lob ? lob == 'icv-trucks' ? 'trucks' : ((lob.replace(/\//g, "-")).replace(/\s/g, "-")).toLowerCase() : lob;
            if (type == 'viewDetail') {
                //   try{
                //   this.firebaseanalytics.MenuPlPpl("product-detail", data.lob_name, data.ppl_name, data.model, this.pagetitle);
                // } catch (error) { }
                currentUrl = `/product-details/` + lobname + `/` + pplname + `/` + (modelname === null || modelname === void 0 ? void 0 : modelname.replace(/\s/g, "-").toLowerCase()) + `/` + (data === null || data === void 0 ? void 0 : data.product_id);
            }
            else {
                currentUrl = `/lead-booking/` + lobname + `/` + pplname + `/` + (modelname === null || modelname === void 0 ? void 0 : modelname.replace(/\s/g, "-").toLowerCase()) + `/` + (data === null || data === void 0 ? void 0 : data.product_id);
            }
            return currentUrl;
        }
    }
    GetTestmonialVideo(lob) {
        var jsn1 = {
            "type_of_testimonial": "",
            "lob": lob,
            "offset": 0,
            "size": 10,
        };
        let apiUrl = this.apiList.returnAPI('getTestimonials');
        this.sub.add(this.dataservice.post(apiUrl, jsn1).subscribe((response) => {
            if (response.success) {
                var videodata = response.data;
                for (var k = 0; k < videodata.length; k++) {
                    try {
                        if (videodata[k].video_url != "") {
                            let urls = videodata[k]['video_url'];
                            this.testSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urls);
                            var vthaumbimage = this.youtube_parser(urls);
                            let img = "https://img.youtube.com/vi/" + vthaumbimage + "/mqdefault.jpg";
                            this.testimonialVideoData.push(this.formDataVideo(videodata[k]['name'], videodata[k]['image_url'], this.testSafeUrl, videodata[k]['designation'], img, videodata[k].model, videodata[k].description, videodata[k].application));
                        }
                        else if (videodata[k].yt_url) {
                            let urls = videodata[k]['yt_url'];
                            var vthaumbimage = this.youtube_parser(urls);
                            let img = "https://img.youtube.com/vi/" + vthaumbimage + "/mqdefault.jpg";
                            let videos = "https://www.youtube.com/embed/" + vthaumbimage + "?autoplay=0&loop=1&autopause=0";
                            this.testSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videos);
                            this.testimonialVideoData.push(this.formDataVideo(videodata[k]['name'], videodata[k]['image_url'], this.testSafeUrl, videodata[k]['designation'], img, videodata[k].model, videodata[k].description, videodata[k].application));
                        }
                        else {
                            this.testimonialVideoData.push(this.formDataVideo(videodata[k]['name'], videodata[k]['image_url'], '', videodata[k]['designation'], '', videodata[k].model, videodata[k].description, videodata[k].application));
                        }
                    }
                    catch (exception) {
                    }
                }
            }
        }));
    }
    formDataVideo(name, image_url, video_url, designation, thaumbimage, model, description, application) {
        const userData = {};
        userData.name = name;
        userData.image_url = image_url;
        userData.video_url = video_url;
        userData.designation = designation;
        userData.thaumbimage = thaumbimage;
        userData.model = model;
        userData.description = description;
        userData.application = application;
        return userData;
    }
    youtube_parser(url) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
            var match = url.match(regExp);
            return (match && match[1].length == 11) ? match[1] : false;
        }
    }
    OpenVideo(obj) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            this.videoInfo = obj;
            this.showTestimonialVdoModal = this.modelService.show(this.showTestimonial, {
                class: 'modal-dialog  modal-lg modal-dialog-centered',
                backdrop: 'static',
            });
            this.video_urls = obj.video_url;
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(obj.video_url);
            // this.firebaseanalytics.videoAndServices("click_testimonialHome_videos", this.pagetitle, obj.model, "");
        }
    }
    closeModal() {
        this.showTestimonialVdoModal.hide();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild)('showTestimonial', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef, static: false })
], ProductListComponent.prototype, "showTestimonial", void 0);
ProductListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-product-list',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__param)(11, (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID))
], ProductListComponent);



/***/ }),

/***/ 631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListModule": () => (/* binding */ ProductListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(193);
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(573);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(619);
/* harmony import */ var _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(613);
/* harmony import */ var _no_product_found_no_product_found_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(625);
/* harmony import */ var ngx_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(620);
/* harmony import */ var _Modals_modals_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(615);
/* harmony import */ var _Static_Pages_services_services_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(621);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(583);
/* harmony import */ var _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(633);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(628);














const routes = [{ path: '', component: _product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent }];
let ProductListModule = class ProductListModule {
};
ProductListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent,
        ],
        imports: [_product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__.ProductListRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselModule, _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__.BannerModule, _no_product_found_no_product_found_module__WEBPACK_IMPORTED_MODULE_2__.NoProductFoundModule, ngx_skeleton__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonModule, _Modals_modals_module__WEBPACK_IMPORTED_MODULE_3__.ModalsModule, _Static_Pages_services_services_module__WEBPACK_IMPORTED_MODULE_4__.ServicesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)
        ],
    })
], ProductListModule);



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