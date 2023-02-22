"use strict";
exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(421);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__);






let BannerComponent = class BannerComponent {
    constructor(formBuilder, router, route, apiList, cleverService, platformId, dataService, modelService, _eref) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.apiList = apiList;
        this.cleverService = cleverService;
        this.platformId = platformId;
        this.dataService = dataService;
        this.modelService = modelService;
        this._eref = _eref;
        this.productList = [];
        this.vehicleApplication = [];
        this.filterVehicleList = [];
        this.isShowDropDown = false;
        this.vehicleApplicationSort = [];
        this.selectDisable = false;
        this.customOptionsForBanner = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            autoplay: true,
            nav: true,
            responsiveRefreshRate: 1000000,
            navText: ["<img class='nav' src='assets/images/crasual-left.svg' alt='crasual-left' />", "<img class='nav' src='assets/images/crasual-right.svg' alt='crasual-left' />"],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
        };
        //public ngAfterViewInit(): void {window.dispatchEvent(new Event('resize'));}
        this.centerBanners = [];
        //   {"id":250,"title":"new banner","path_url":"https://bookonline-st.tatamotors.com/cv/cv_online/BannerFiles/5844.webp",
        //   "banner_link":"","from_date":"2023-01-29T06:30:00Z","end_date":"2024-12-31T06:30:00Z","priority":"1","is_active":true,"page":"HOME"},
        //   {"id":243,"title":"Buses","path_url":"https://bookonline-st.tatamotors.com/cv/cv_online/BannerFiles/8668.webp",
        //   "banner_link":"","from_date":"2022-11-22T06:30:00Z","end_date":"2023-12-31T06:30:00Z","priority":"2","is_active":true,"page":"HOME"},
        //   {"id":240,"title":"MandHCV Const","path_url":"https://bookonline-st.tatamotors.com/cv/cv_online/BannerFiles/9450.webp",
        //   "banner_link":"","from_date":"2022-11-22T06:30:00Z","end_date":"2023-12-31T06:30:00Z","priority":"3","is_active":true,"page":"HOME"}
        // ]
        this.type = "application";
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        let pageURL = this.router.url.includes('category-list') ? 'EXPLORE' : 'HOME';
        let apiUrl = this.apiList.returnAPI('bannerList');
        let reqBody;
        if (pageURL == 'HOME') {
            reqBody = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
                .set("page", pageURL)
                .set("offset", 0)
                .set("size", 6);
            this.sub.add(this.dataService.get(apiUrl, reqBody).subscribe({
                next: (response) => {
                    var _a;
                    if (response.success) {
                        (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.forEach((res) => {
                            this.centerBanners.push(res);
                        });
                    }
                },
                error: (err) => { },
            }));
        }
    }
    ngOnInit() {
        this.buildFilterInputForm();
        this.sub.add(this.route.queryParams.subscribe((params) => {
            this.lobName = this.route.snapshot.paramMap.get("lob_name");
            this.bannerLOB = this.route.snapshot.paramMap.get("sub_lob");
        }));
        this.sub.add(this.dataService.getS3File('productList.txt')
            .subscribe({
            next: (response) => {
                this.productList = response.data.ModeList;
            },
            error: () => { },
            complete: () => {
                if (this.lobName) {
                    this.selectDisable = true;
                    if (this.lobName == 'heavy-trucks' || this.lobName == 'tippers' || this.lobName == 'light-trucks' || this.lobName == 'tractor-trailer' || this.lobName == 'trucks' ||
                        this.lobName == 'heavy-truck' || this.lobName == 'tractor-trailer' || this.lobName == 'tipper' || this.lobName == 'light-truck' || this.lobName == '6-wheeler-truck' || this.lobName == 'delivery-truck') {
                        this.selectValue = "Icv Trucks";
                        this.bannerLOB = this.lobName == 'trucks' ? this.route.snapshot.paramMap.get("sub_lob") : this.lobName;
                        this.getBanners();
                        this.getVehicleApplicationList("Icv Trucks");
                    }
                    if (this.lobName == 'mini-trucks-&-pickups' || this.lobName == 'scv-pickups' || this.lobName == 'mini-truck' || this.lobName == 'pickup') {
                        this.selectValue = "SCV Pickups";
                        this.bannerLOB = this.lobName == 'scv-pickups' ? this.route.snapshot.paramMap.get("sub_lob") : this.lobName;
                        this.getBanners();
                        this.getVehicleApplicationList("SCV Pickups");
                    }
                    if (this.lobName == 'bus' || this.lobName == 'vans' || this.lobName == 'buses' || this.lobName == 'passenger-van' || this.lobName == 'school-van' ||
                        this.lobName == 'ambulance' || this.lobName == 'school-bus' || this.lobName == 'staff-bus' || this.lobName == 'bus-chassis' || this.lobName == 'intercity-bus') {
                        this.selectValue = "Buses";
                        this.bannerLOB = this.lobName == 'buses' ? this.route.snapshot.paramMap.get("sub_lob") : this.lobName;
                        this.getBanners();
                        this.getVehicleApplicationList("Buses");
                    }
                }
                else {
                    this.selectDisable = false;
                    this.selectValue = "ALL";
                    this.getBanners();
                    this.getVehicleApplicationList("ALL");
                }
            }
        }));
    }
    buildFilterInputForm() {
        this.filterInputForm = this.formBuilder.group({
            filterInput: ['']
        });
    }
    GetTest(data) {
        let url;
        var dataUrl = data.banner_link;
        if (dataUrl) {
            url = (dataUrl === null || dataUrl === void 0 ? void 0 : dataUrl.replace('https://', '')) && (dataUrl === null || dataUrl === void 0 ? void 0 : dataUrl.replace(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl, ''));
            this.router.navigateByUrl(url);
        }
    }
    getBanners() {
        var _a;
        if (this.bannerLOB !== 'undefined') {
            let pageURL = this.router.url.includes('category-list') ? 'EXPLORE' : 'HOME';
            let filteredLob = this.productList.filter((value) => this.bannerLOB == value.seo_name);
            let mainfilteredLob = filteredLob == undefined || filteredLob.length == 0 ? null : ((((_a = filteredLob[0]) === null || _a === void 0 ? void 0 : _a.lob_name).toString()).replace(/\s/g, "-")).toLowerCase();
            let loblist = filteredLob == undefined || filteredLob.length == 0 ? this.bannerLOB : mainfilteredLob;
            let exploreJson;
            if (this.bannerLOB == "heavy-trucks") {
                exploreJson = {
                    "lob_explore": ["mcv-trucks", "hcv-cargo"],
                    "type": "heavy_truck"
                };
                loblist = exploreJson.lob_explore;
            }
            else if (this.bannerLOB == "tippers") {
                exploreJson = {
                    "lob_explore": ["hcv-const"],
                };
                loblist = exploreJson.lob_explore;
            }
            else if (this.bannerLOB == "light-trucks") {
                exploreJson = {
                    "lob_explore": ["lcv", "icv-trucks"],
                };
                loblist = exploreJson.lob_explore;
            }
            else if (this.bannerLOB == "tractor-trailer") {
                exploreJson = {
                    "lob_explore": ["hcv-cargo"],
                    "type": "tractor_trailer"
                };
                loblist = exploreJson.lob_explore;
            }
            else if (this.bannerLOB == "pickup") {
                exploreJson = {
                    "lob_explore": ["scv-cargo", "pickups"],
                };
                loblist = exploreJson.lob_explore;
            }
            else if (this.bannerLOB == "mini-trucks-&-pickups") {
                exploreJson = {
                    "lob_explore": ["scv-cargo", "pickups"],
                };
                loblist = exploreJson.lob_explore;
            }
            else if (this.bannerLOB == "bus") {
                exploreJson = {
                    "lob_explore": ["buses"],
                };
                loblist = exploreJson.lob_explore;
            }
            else if (this.bannerLOB == "vans") {
                exploreJson = {
                    "lob_explore": ["scpass", "scvpass"],
                };
                loblist = exploreJson.lob_explore;
            }
            else { }
            let apiUrl = this.apiList.returnAPI('bannerList');
            let reqBody;
            this.showStaticBanner = this.productList;
            const bannerDummyData = this.showStaticBanner.find(obj => obj.seo_name == this.router.url.substring(15));
            if (bannerDummyData) {
                for (let i = 0; i < bannerDummyData.banners.length; i++) {
                    const banner = bannerDummyData.banners[i];
                    this.centerBanners.push(banner);
                }
                ;
            }
            else {
                if (this.centerBanners.length == 0) {
                    // if (pageURL == 'HOME') {
                    //   reqBody = new HttpParams()
                    //     .set("page", pageURL)
                    //     .set("offset", 0)
                    //     .set("size", 3)
                    //   this.sub.add(this.dataService.get(apiUrl, reqBody).subscribe({
                    //     next: (response:any) => {
                    //          if (response.success) {
                    //           response?.data?.forEach((res) => {
                    //               this.centerBanners.push(res);
                    //           });
                    //         }},
                    //     error: (err: any) => { },
                    // }));
                    // } else {
                    reqBody = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
                        .set("offset", 0)
                        .set("size", 3)
                        .set("lob", loblist)
                        .set("page", pageURL);
                    this.sub.add(this.dataService.get(apiUrl, loblist ? reqBody : {}).subscribe({
                        next: (response) => {
                            var _a;
                            if (response.success) {
                                (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.forEach((res) => {
                                    this.centerBanners.push(res);
                                });
                            }
                        },
                        error: (err) => { },
                    }));
                    // }
                }
            }
        }
    }
    getPath(path) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.s3bucket.url + path;
    }
    async getVehicleApplicationList(val) {
        let apiUrl = this.apiList.returnAPI('get_vehicle_applications');
        let req = { "sub_lob": val };
        this.vehicleApplication = [];
        this.vehicleApplicationSort = [];
        this.filterVehicleList = [];
        await this.sub.add(this.dataService.post(apiUrl, req).subscribe((response) => {
            if (response.success) {
                this.vehicleApplication = (response.data).sort();
                for (let i = 0; i < this.vehicleApplication.length; i++) {
                    const application = this.vehicleApplication[i];
                    this.vehicleApplicationSort.push(application);
                }
                ;
            }
            else {
                this.vehicleApplication = [];
                this.vehicleApplicationSort = [];
                this.filterVehicleList = [];
            }
        }, () => {
            this.vehicleApplication = [];
            this.vehicleApplicationSort = [];
            this.filterVehicleList = [];
        }));
    }
    getFilterVehicleApplication(items, searchText) {
        this.filterVehicleList = [];
        if (!items) {
            this.filterVehicleList = [];
        }
        if (!searchText || searchText === ' ') {
            this.filterVehicleList = [];
        }
        else {
            items = items.filter(it => {
                return it.toLocaleLowerCase().includes(searchText);
            });
            this.filterVehicleList = (items).sort();
        }
        this.isShowDropDown = true;
        try {
            this.cleverService.onFindBySearch(this.type, searchText);
        }
        catch (error) { }
        $('.vehicle_serach').on("click", function (e) {
            if ($(e.target).closest(".text-search").length === 0) {
                $(".auto-complete-wrapper").addClass('d-none');
            }
            else {
                $(".auto-complete-wrapper").removeClass('d-none');
            }
        });
    }
    getFilterApplicationOnClick() {
        if (this.lobName) {
            this.selectDisable = true;
            if (this.lobName == 'heavy-trucks' || this.lobName == 'tippers' || this.lobName == 'light-trucks' || this.lobName == 'tractor-trailer' || this.lobName == 'trucks' ||
                this.lobName == 'heavy-truck' || this.lobName == 'tractor-trailer' || this.lobName == 'tipper' || this.lobName == 'light-truck' || this.lobName == '6-wheeler-truck' || this.lobName == 'delivery-truck') {
                this.getVehicleApplicationList("Icv Trucks");
                this.selectValue = "Icv Trucks";
                this.bannerLOB = this.lobName == 'trucks' ? this.route.snapshot.paramMap.get("sub_lob") : this.lobName;
            }
            if (this.lobName == 'mini-trucks-&-pickups' || this.lobName == 'scv-pickups' || this.lobName == 'mini-truck' || this.lobName == 'pickup') {
                this.getVehicleApplicationList("SCV Pickups");
                this.selectValue = "SCV Pickups";
                this.bannerLOB = this.lobName == 'scv-pickups' ? this.route.snapshot.paramMap.get("sub_lob") : this.lobName;
            }
            if (this.lobName == 'bus' || this.lobName == 'vans' || this.lobName == 'buses' || this.lobName == 'passenger-van' || this.lobName == 'school-van' ||
                this.lobName == 'ambulance' || this.lobName == 'school-bus' || this.lobName == 'staff-bus' || this.lobName == 'bus-chassis' || this.lobName == 'intercity-bus') {
                this.getVehicleApplicationList("Buses");
                this.selectValue = "Buses";
                this.bannerLOB = this.lobName == 'buses' ? this.route.snapshot.paramMap.get("sub_lob") : this.lobName;
            }
        }
        else {
            this.selectDisable = false;
            this.getVehicleApplicationList("ALL");
            this.selectValue = "ALL";
        }
        this.filterVehicleList = [];
        this.filterVehicleList = (this.vehicleApplicationSort).sort();
        this.isShowDropDown = true;
        $(document).on("click", function (e) {
            if ($(e.target).closest(".text-search").length === 0) {
                $(".auto-complete-wrapper").addClass('d-none');
            }
            else {
                $(".auto-complete-wrapper").removeClass('d-none');
            }
        });
    }
    search(data) {
        this.filterInputForm.controls['filterInput'].setValue(data);
        this.isShowDropDown = false;
        try {
            this.cleverService.onFindBySearch(this.type, data);
        }
        catch (error) { }
        $(document).on("click", function (e) {
            $(".auto-complete-wrapper").addClass('d-none');
        });
    }
    getProductList(event) {
        let vehicl_info_param = this.filterInputForm.controls['filterInput'].value;
        this.searchFilterModel ? this.searchFilterModel.hide() : null;
        this.router.navigate(["/product-list"], {
            queryParams: {
                vehicle_application: vehicl_info_param ? vehicl_info_param : event ? event.usage : '',
                segment: event ? event.segment : '',
                main_vehicle_cat: event ? event.main_vehicle_cat : '',
                model: event ? event.model : '',
                budget: event ? event.budget : '',
                actual_lob: this.selectValue ? this.selectValue.replace(/\s/g, "-").toLowerCase() : ''
            },
        });
    }
    getBannerText(desc) {
        return desc;
    }
    goToProductList(product) {
        var _a;
        let product_name = (_a = product.name) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, "-").toLowerCase();
        this.router.navigateByUrl('/category-list/' + product_name);
    }
    openFilterModel() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            this.applicationFilter = this.filterInputForm.value.filterInput;
            this.searchFilterModel = this.modelService.show(this.searchFilterForm, {
                class: 'modal-dialog-centered modal-md', backdrop: 'static',
            });
        }
    }
    onClick(event) {
        if (!this._eref.nativeElement.contains(event.target)) { }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild)('searchResult', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.TemplateRef, static: false })
], BannerComponent.prototype, "searchFilterForm", void 0);
BannerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-banner',
        templateUrl: './banner.component.html',
        styleUrls: ['./banner.component.scss'],
        // encapsulation: ViewEncapsulation.None,
        host: {
            '(document:click)': 'onClick($event)',
        },
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(5, (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID))
], BannerComponent);



/***/ }),

/***/ 613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerModule": () => (/* binding */ BannerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(193);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(590);
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(619);
/* harmony import */ var ngx_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(620);
/* harmony import */ var _Modals_modals_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(583);









let BannerModule = class BannerModule {
};
BannerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselModule, ngx_skeleton__WEBPACK_IMPORTED_MODULE_6__.NgxSkeletonModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot(), _Modals_modals_module__WEBPACK_IMPORTED_MODULE_1__.ModalsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule
        ],
        exports: [_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalService]
    })
], BannerModule);



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