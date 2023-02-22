"use strict";
exports.id = 3;
exports.ids = [3];
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

/***/ 622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);



let ServicesComponent = class ServicesComponent {
    constructor() {
        this.ServicesSlider = {
            loop: true,
            margin: 10,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            autoplay: true,
            nav: true,
            responsiveRefreshRate: 1000000,
            // navText: ["<img class='nav' src='../../assets/images/crasual-left.svg' />", "<img class='nav' src='../../assets/images/crasual-right.svg' />"],
            responsive: {
                0: {
                    items: 3
                },
                400: {
                    items: 3
                },
                768: {
                    items: 5
                },
                991: {
                    items: 5
                },
                1300: {
                    items: 6
                }
            },
        };
        this.serviceData = [
            { name: "Tata Motors Finance", link: "https://www.tmf.co.in/", imgUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.s3bucket.url + "images/bottom_other_brands/finance.webp" },
            { name: "Customer Care-Commercial Vehicles", link: "https://www.customercare-cv.tatamotors.com/", imgUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.s3bucket.url + "images/bottom_other_brands/Customer Care.webp" },
            { name: "Tata Genuine Parts", link: "https://edukaan.home.tatamotors/", imgUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.s3bucket.url + "images/bottom_other_brands/edukan.webp" },
            { name: "Commercial Vehicles Spares", link: "https://www.customercare-cv.tatamotors.com/tata-genuine-parts/tgp-overview.aspx", imgUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.s3bucket.url + "images/bottom_other_brands/TGP.webp" },
            { name: "Tata Kavach", link: "https://www.customercare-cv.tatamotors.com/services/tata-kavach.aspx", imgUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.s3bucket.url + "images/bottom_other_brands/logo3.webp" },
            { name: "Tata SURAKSHA (AMC)", link: "https://www.customercare-cv.tatamotors.com/services/suraksha-amc.aspx", imgUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.s3bucket.url + "images/bottom_other_brands/Suraksha.webp" },
        ];
    }
    ngOnInit() {
    }
};
ServicesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-services',
        templateUrl: './services.component.html',
        styleUrls: ['./services.component.scss']
    })
], ServicesComponent);



/***/ }),

/***/ 621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesModule": () => (/* binding */ ServicesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(622);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(619);





let ServicesModule = class ServicesModule {
};
ServicesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _services_component__WEBPACK_IMPORTED_MODULE_0__.ServicesComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselModule
        ],
        exports: [_services_component__WEBPACK_IMPORTED_MODULE_0__.ServicesComponent]
    })
], ServicesModule);



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



/***/ })

};
;