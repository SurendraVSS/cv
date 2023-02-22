"use strict";
exports.id = 16;
exports.ids = [16];
exports.modules = {

/***/ 719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareComponent": () => (/* binding */ CompareComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__);





let CompareComponent = class CompareComponent {
    constructor(platformId, localStorage, apiList, dataService, toasterService, seoservice, router, cleverService, canonicalservice, spinnerService) {
        this.platformId = platformId;
        this.localStorage = localStorage;
        this.apiList = apiList;
        this.dataService = dataService;
        this.toasterService = toasterService;
        this.seoservice = seoservice;
        this.router = router;
        this.cleverService = cleverService;
        this.canonicalservice = canonicalservice;
        this.spinnerService = spinnerService;
        this.lobId = "Icv Trucks";
        this.pagetitle = "Compare";
        this.selectedAccountThree = "";
        this.selectedTruckBusThree = "";
        this.selectedTruckBusOne = "";
        this.selectedAccountOne = "";
        this.selectedTruckBusTwo = "";
        this.selectedAccountTwo = "";
        this.isTruckImage = true;
        this.plpplList = [];
        this.groupedArray = [];
        this.card1 = false;
        this.card2 = false;
        this.card3 = false;
        this.showDetail1 = false;
        this.showDetail2 = false;
        this.showDetail3 = false;
        this.truckLobId = 'Icv Trucks';
        this.busLobId = 'Buses';
        this.metatitle = "Tata Motors Truck & Buses Features Comparison - Tata Motors";
        this.metadesc = "Compare features, specifications and choose best truck or buses by Tata Motors. Know more about Tata Motors 4 wheelers On-Road price. ";
        this.disablecard1 = false;
        this.disablecard2 = true;
        this.disablecard3 = true;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    }
    ngOnInit() {
        this.canonicalservice.createCanonicalURL();
        this.seo();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            try {
                this.cleverService.onPageView(this.pagetitle, this.previousUrl, "");
            }
            catch (_a) { }
            this.productDetailsData = JSON.parse(this.localStorage.getItem("productDetailsData"));
            if (this.productDetailsData) {
                if (this.productDetailsData.sub_lob === 'SCV Pickups') {
                    this.lobId = "Icv Trucks";
                }
                else {
                    this.lobId = this.productDetailsData.sub_lob;
                }
                this.getFindByDropDownsData(this.lobId);
                this.productDetailsDataOne = this.productDetailsData;
                if (this.productDetailsDataOne) {
                    this.showDetail1 = true;
                    this.disablecard2 = false;
                }
            }
            else {
                this.getFindByDropDownsData(this.lobId);
            }
        }
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
    ngOnDestroy() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            localStorage.removeItem('productDetailsData');
        }
        this.sub.unsubscribe();
    }
    onWindowScroll() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            var windowScrollPosition = window.scrollY + 0;
            if (windowScrollPosition > 200) {
                $('.fixed-section').removeClass('d-none');
            }
            else {
                $('.fixed-section').addClass('d-none');
            }
        }
    }
    changeCard(card) {
        if (card == "card1") {
            this.card1 = this.card1 == false ? true : false;
            this.selectedAccountOne = "";
            this.modelDataOne = [];
        }
        if (card == "card2") {
            this.card2 = this.card2 == false ? true : false;
            this.selectedAccountTwo = "";
            this.modelDataTwo = [];
        }
        if (card == "card3") {
            this.card3 = this.card3 == false ? true : false;
            this.selectedAccountThree = "";
            this.modelDataThree = [];
        }
    }
    googleAnlyaticsViewPage(eventname, pagename) {
        // try {
        //   this.firebaseanalytics.viewPage(eventname, pagename);
        // } catch (error) }
    }
    googleAnlyaticsCompare(model1, model2, model3) {
        try {
            // this.firebaseanalytics.compare("click_compare_" + this.btnName + "_comparenow_button ", model1 ? model1 : "",
            //   model2 ? model2 : "", model3 ? model3 : "", this.pagetitle);
        }
        catch (error) { }
    }
    googleAnlyaticsCompareFail(model1, model2, model3) {
        try {
            // this.firebaseanalytics.compare("click_compare_" + this.btnName + "_comparenow_fail", model1 ? model1 : "",
            //   model2 ? model2 : "", model3 ? model3 : "", this.pagetitle);
        }
        catch (error) { }
    }
    getFindByDropDownsData(lobid) {
        this.resetcard();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.resetItem("One");
            this.resetItem("Two");
            this.resetItem("Three");
            this.performanceOne = null;
            this.performanceTwo = null;
            this.performanceThree = null;
            this.lobId = lobid;
            if (lobid === this.truckLobId) {
                this.btnName = "truck";
                this.isTruckImage = true;
            }
            if (lobid === this.busLobId) {
                this.btnName = "buses";
                this.isTruckImage = false;
            }
            this.productDetailsDataThree = null;
            this.modelDataThree = [];
            this.selectedAccountThree = "";
            this.selectedTruckBusThree = "";
            this.productDetailsDataOne = null;
            this.modelDataOne = [];
            this.selectedAccountOne = "";
            this.selectedTruckBusOne = "";
            this.productDetailsDataTwo = "";
            this.modelDataTwo = [];
            this.selectedAccountTwo = "";
            this.selectedTruckBusTwo = "";
            let apiUrl = this.apiList.returnAPI('compreDropdown');
            this.sub.add(this.dataService.post(apiUrl, { lob_name: this.lobId }).subscribe({
                next: (response) => {
                    if (response.success) {
                        this.plpplList = response.data;
                        let unique = [...new Set(this.plpplList.map(item => item.ppl))];
                        this.groupedArray = unique.map(i => ({
                            name: i,
                            values: this.plpplList.filter(d => d.ppl === i)
                        }));
                    }
                    else {
                        this.plpplList = [];
                    }
                }, error: (error) => {
                }
            }));
        }
    }
    getItemOne(event) {
        let data = {};
        let value;
        this.modelDataOne = [];
        this.productDetailsDataOne = null;
        this.selectedTruckBusOne = "";
        this.plpplList.forEach(function (item) {
            if (item.pl == event.target.value) {
                value = item;
            }
        });
        data["start_row"] = 0;
        data["end_row"] = 18;
        data["lob_name"] = this.lobId ? this.lobId : "";
        data["ppl_name"] = value.ppl ? value.ppl : "";
        data["pl_name"] = value.pl ? value.pl : "";
        let apiUrl = this.apiList.returnAPI('getVehicleInfo');
        this.sub.add(this.dataService.post(apiUrl, data).subscribe((response) => {
            if (response["success"]) {
                this.modelDataOne = response["data"];
            }
        }));
    }
    getTruckBusOne() {
        this.card1 = false;
        this.showDetail1 = true;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.productDetailsDataOne = null;
            this.removeOneIcon = false;
            this.removeTwoIcon = false;
            this.removeThreeIcon = true;
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
                window.scrollTo(0, 0);
            }
            let apiUrl = this.apiList.returnAPI('getVehicleDetail');
            this.sub.add(this.dataService.post(apiUrl, { product_id: this.selectedTruckBusOne }).subscribe((data) => {
                if (data["success"]) {
                    this.productDetailsDataOne = data["data"];
                    if (this.productDetailsDataOne["images"]) {
                        if (this.productDetailsDataOne["images"].image_url) {
                            this.productDetailsDataOne["imageUrl"] = this.productDetailsDataOne["images"].image_url;
                            this.productDetailsDataOne.loaded = false;
                        }
                        else {
                            this.productDetailsDataOne.images.filter((image) => image.is_cover === true).map((img) => {
                                this.productDetailsDataOne["imageUrl"] = img["image_url"];
                                this.productDetailsDataOne.loaded = false;
                            });
                        }
                    }
                    this.disablecard2 = false;
                }
            }));
        }
    }
    getItemTwo(event) {
        let data = {};
        let value;
        this.modelDataTwo = [];
        this.productDetailsDataTwo = null;
        this.selectedTruckBusTwo = "";
        this.plpplList.forEach(function (item) {
            if (item.pl == event.target.value) {
                value = item;
            }
        });
        data["start_row"] = 0;
        data["end_row"] = 18;
        data["lob_name"] = this.lobId ? this.lobId : "";
        data["ppl_name"] = value.ppl ? value.ppl : "";
        data["pl_name"] = value.pl ? value.pl : "";
        let apiUrl = this.apiList.returnAPI('getVehicleInfo');
        this.sub.add(this.dataService.post(apiUrl, data).subscribe((response) => {
            if (response["success"]) {
                this.modelDataTwo = response["data"];
            }
        }));
    }
    getTruckBusTwo() {
        this.card2 = false;
        this.showDetail2 = true;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.productDetailsDataTwo = null;
            this.removeOneIcon = false;
            this.removeTwoIcon = false;
            this.removeThreeIcon = true;
            window.scrollTo(0, 0);
            let apiUrl = this.apiList.returnAPI('getVehicleDetail');
            this.sub.add(this.dataService.post(apiUrl, { product_id: this.selectedTruckBusTwo }).subscribe((data) => {
                if (data["success"]) {
                    this.productDetailsDataTwo = data["data"];
                    if (this.productDetailsDataTwo["images"]) {
                        if (this.productDetailsDataTwo["images"].image_url) {
                            this.productDetailsDataTwo["imageUrl"] = this.productDetailsDataTwo["images"].image_url;
                            this.productDetailsDataTwo.loaded = false;
                        }
                        else {
                            this.productDetailsDataTwo.images
                                .filter((image) => image.is_cover === true)
                                .map((img) => {
                                this.productDetailsDataTwo["imageUrl"] = img["image_url"];
                                this.productDetailsDataTwo.loaded = false;
                            });
                        }
                    }
                    this.disablecard3 = false;
                }
            }));
        }
    }
    getItemThree(event) {
        let data = {};
        let value;
        this.modelDataThree = [];
        this.productDetailsDataThree = null;
        this.selectedTruckBusThree = "";
        this.plpplList.forEach(function (item) {
            if (item.pl == event.target.value) {
                value = item;
            }
        });
        data["start_row"] = 0;
        data["end_row"] = 18;
        data["lob_name"] = this.lobId ? this.lobId : "";
        data["ppl_name"] = value.ppl ? value.ppl : "";
        data["pl_name"] = value.pl ? value.pl : "";
        let apiUrl = this.apiList.returnAPI('getVehicleInfo');
        this.sub.add(this.dataService.post(apiUrl, data).subscribe((response) => {
            if (response["success"]) {
                this.modelDataThree = response["data"];
            }
        }));
    }
    getTruckBusThree() {
        this.card3 = false;
        this.showDetail3 = true;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.productDetailsDataThree = null;
            this.removeOneIcon = false;
            this.removeTwoIcon = true;
            this.removeThreeIcon = true;
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
                window.scrollTo(0, 0);
            }
            let apiUrl = this.apiList.returnAPI('getVehicleDetail');
            this.sub.add(this.dataService.post(apiUrl, { product_id: this.selectedTruckBusThree })
                .subscribe((data) => {
                if (data["success"]) {
                    this.productDetailsDataThree = data["data"];
                    if (this.productDetailsDataThree["images"]) {
                        if (this.productDetailsDataThree["images"].image_url) {
                            this.productDetailsDataThree["imageUrl"] = this.productDetailsDataThree["images"].image_url;
                            this.productDetailsDataThree.loaded = false;
                        }
                        else {
                            this.productDetailsDataThree.images
                                .filter((image) => image.is_cover === true)
                                .map((img) => {
                                this.productDetailsDataThree["imageUrl"] = img["image_url"];
                                this.productDetailsDataThree.loaded = false;
                            });
                        }
                    }
                }
            }));
        }
    }
    compare() {
        this.googleAnlyaticsViewPage("click_compare_comparenow_button ", this.pagetitle);
        let model1 = this.productDetailsDataOne ? this.productDetailsDataOne.model : " ";
        let model2 = this.productDetailsDataTwo ? this.productDetailsDataTwo.model : " ";
        let model3 = this.productDetailsDataThree ? this.productDetailsDataThree.model : " ";
        if ((!this.productDetailsDataOne && !this.productDetailsDataTwo) ||
            (!this.productDetailsDataTwo && !this.productDetailsDataThree) ||
            (!this.productDetailsDataThree && !this.productDetailsDataOne) ||
            (!this.productDetailsDataThree && !this.productDetailsDataOne && !this.productDetailsDataTwo)) {
            this.toasterService.error("Choose at least two vehicles for comparison");
            return;
        }
        let vcOne = null;
        let vcTwo = null;
        let vcThree = null;
        this.performanceOne = null;
        this.performanceTwo = null;
        this.performanceThree = null;
        if (this.productDetailsDataOne) {
            vcOne = this.productDetailsDataOne["vehicle_number"];
        }
        if (this.productDetailsDataTwo) {
            vcTwo = this.productDetailsDataTwo["vehicle_number"];
        }
        if (this.productDetailsDataThree) {
            vcThree = this.productDetailsDataThree["vehicle_number"];
        }
        if (vcOne && vcTwo && !vcThree) {
            this.spinnerService.show();
            let data = {};
            data = { vc_s: [vcOne, vcTwo] };
            let apiUrl = this.apiList.returnAPI('compareList');
            this.sub.add(this.dataService.post(apiUrl, data).subscribe({ next: (data) => {
                    if (data["success"]) {
                        this.spinnerService.hide();
                        this.googleAnlyaticsCompare(model1, model2, model3);
                        this.performanceOne = data["data"][0];
                        this.performanceTwo = data["data"][1];
                    }
                    else {
                        this.googleAnlyaticsCompareFail(model1, model2, model3);
                    }
                },
                complete: () => {
                    this.spinnerService.hide();
                } }));
        }
        if (vcTwo && vcThree && !vcOne) {
            this.spinnerService.show();
            let data = {};
            data = { vc_s: [vcTwo, vcThree] };
            let apiUrl = this.apiList.returnAPI('compareList');
            this.sub.add(this.dataService.post(apiUrl, data).subscribe({ next: (data) => {
                    if (data["success"]) {
                        this.spinnerService.hide();
                        this.googleAnlyaticsCompare(model1, model2, model3);
                        this.performanceTwo = data["data"][0];
                        this.performanceThree = data["data"][0];
                    }
                    else {
                        this.googleAnlyaticsCompareFail(model1, model2, model3);
                    }
                },
                error: (error) => {
                    this.spinnerService.hide();
                } }));
        }
        if (vcOne && vcThree && !vcTwo) {
            this.spinnerService.show();
            let data = {};
            data = { vc_s: [vcOne, vcThree] };
            let apiUrl = this.apiList.returnAPI('compareList');
            this.sub.add(this.dataService.post(apiUrl, data).subscribe({ next: (data) => {
                    if (data["success"]) {
                        this.spinnerService.hide();
                        this.googleAnlyaticsCompare(model1, model2, model3);
                        this.performanceOne = data["data"][0];
                        this.performanceThree = data["data"][1];
                    }
                    else {
                        this.googleAnlyaticsCompareFail(model1, model2, model3);
                    }
                },
                error: (error) => {
                    this.spinnerService.hide();
                } }));
        }
        if (vcOne && vcTwo && vcThree) {
            this.spinnerService.hide();
            let data = {};
            data = { vc_s: [vcOne, vcTwo, vcThree] };
            let apiUrl = this.apiList.returnAPI('compareList');
            this.sub.add(this.dataService.post(apiUrl, data).subscribe({ next: (data) => {
                    if (data["success"]) {
                        this.spinnerService.hide();
                        this.googleAnlyaticsCompare(model1, model2, model3);
                        this.performanceOne = data["data"][0];
                        this.performanceTwo = data["data"][1];
                        this.performanceThree = data["data"][2];
                    }
                    else {
                        this.googleAnlyaticsCompareFail(model1, model2, model3);
                    }
                },
                complete: () => {
                    this.spinnerService.hide();
                } }));
        }
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            setTimeout(() => {
            }, 250);
        }
    }
    resetItem(num) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            if (num === "One") {
                this.selectedAccountOne = "";
                this.selectedTruckBusOne = "";
                if (this.showDetail2 && !this.showDetail3) {
                    this.productDetailsDataOne = this.productDetailsDataTwo ? this.productDetailsDataTwo : null;
                    this.card2 = false;
                    this.showDetail2 = false;
                    this.showDetail1 = true;
                    this.card1 = false;
                    this.disablecard2 = false;
                    this.disablecard3 = true;
                    this.card3 = false;
                    this.selectedAccountTwo = "";
                    this.selectedTruckBusTwo = "";
                    this.productDetailsDataTwo = null;
                }
                else if (this.showDetail2 && this.showDetail3) {
                    this.productDetailsDataOne = this.productDetailsDataTwo ? this.productDetailsDataTwo : null;
                    this.productDetailsDataTwo = this.productDetailsDataThree ? this.productDetailsDataThree : null;
                    this.productDetailsDataThree = null;
                    this.card3 = false;
                    this.showDetail3 = false;
                }
                else if (this.showDetail1) {
                    this.card1 = false;
                    this.showDetail1 = false;
                    this.disablecard2 = true;
                    this.card2 = false;
                    this.productDetailsDataOne = null;
                    localStorage.removeItem('productDetailsData');
                }
            }
            if (num === "Two") {
                this.selectedAccountTwo = "";
                this.selectedTruckBusTwo = "";
                this.productDetailsDataTwo = "";
                if (this.showDetail3) {
                    this.productDetailsDataTwo = this.productDetailsDataThree
                        ? this.productDetailsDataThree
                        : null;
                    this.card3 = false;
                    this.showDetail3 = false;
                    this.showDetail2 = true;
                    this.card2 = false;
                    this.disablecard3 = false;
                    this.selectedAccountThree = "";
                    this.selectedTruckBusThree = "";
                }
                else {
                    this.card2 = false;
                    this.showDetail2 = false;
                    this.disablecard3 = true;
                    this.card3 = false;
                }
                this.productDetailsDataThree = null;
            }
            if (num === "Three") {
                this.showDetail3 = false;
                this.selectedAccountThree = "";
                this.selectedTruckBusThree = "";
                this.productDetailsDataThree = "";
            }
        }
    }
    resetcard() {
        this.card1 = false;
        this.card2 = false;
        this.card3 = false;
        this.showDetail1 = false;
        this.showDetail2 = false;
        this.showDetail3 = false;
        this.disablecard1 = false;
        this.disablecard2 = true;
        this.disablecard3 = true;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener)("window:scroll", [])
], CompareComponent.prototype, "onWindowScroll", null);
CompareComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-compare',
        templateUrl: './compare.component.html',
        styleUrls: ['./compare.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID))
], CompareComponent);



/***/ }),

/***/ 718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareModule": () => (/* binding */ CompareModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _compare_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(719);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(573);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(583);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(619);







const appRoutes = [{
        path: '', component: _compare_component__WEBPACK_IMPORTED_MODULE_0__.CompareComponent
    }];
let CompareModule = class CompareModule {
};
CompareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_compare_component__WEBPACK_IMPORTED_MODULE_0__.CompareComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(appRoutes)
        ]
    })
], CompareModule);



/***/ })

};
;