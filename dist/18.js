"use strict";
exports.id = 18;
exports.ids = [18];
exports.modules = {

/***/ 723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitemapComponent": () => (/* binding */ SitemapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__);





let SitemapComponent = class SitemapComponent {
    constructor(apiList, dataService, platformId) {
        this.apiList = apiList;
        this.dataService = dataService;
        this.platformId = platformId;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        // showEnquiryModal: boolean = false;
        this.trucks = [];
        this.productUrls = [];
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        }
        let data = {
            // "action_type":"images" // for image url
            "action_type": ""
        };
        let apiUrl = this.apiList.returnAPI("sitemap");
        this.sub.add(this.dataService.post(apiUrl, data).subscribe((response) => {
            if (response) {
                // this.productdetails_data = response.data.images_list;
                this.productdetails_data = response.data.product_details;
                this.productlist_data = JSON.parse(JSON.stringify(response.data.product_list));
                const mapped = Object.keys(this.productlist_data).map((key) => ({
                    type: key,
                    value: this.productlist_data[key],
                }));
                this.filterProductList = mapped.filter((element) => {
                    return element;
                });
                var exampleArray = [];
                this.filterProductList.forEach(function (value) {
                    if (value.value.lob_wise_prod_list[0].sub_lob == "Icv Trucks") {
                        exampleArray.push(value);
                    }
                });
                this.trucks = exampleArray;
                var exampleArray1 = [];
                this.filterProductList.forEach(function (value) {
                    if (value.value.lob_wise_prod_list[0].sub_lob == "Buses") {
                        exampleArray1.push(value);
                    }
                });
                this.buses = exampleArray1;
                var exampleArray2 = [];
                this.filterProductList.forEach(function (value) {
                    if (value.value.lob_wise_prod_list[0].sub_lob == "SCV Pickups") {
                        exampleArray2.push(value);
                    }
                });
                this.scvpickups = exampleArray2;
                var truckListUrl = [];
                var BusListUrl = [];
                var scvpickupListUrl = [];
                var productListUrl = [];
                var exampleTruckArray = [];
                var exampleBusArray = [];
                var exampleScvArray = [];
                this.trucks.forEach(function (value) {
                    value.value.lob_wise_prod_list.forEach(function (list) {
                        exampleTruckArray.push(list);
                        truckListUrl = [];
                        for (var i = 0; i < exampleTruckArray.length; i++) {
                            var tempUrl = exampleTruckArray[i].url;
                            let paramString = tempUrl.split('/');
                            const actualkey = value.type;
                            let currentUrl = paramString[0] + '/' + "trucks" + `/` + actualkey + `/` + paramString[2];
                            truckListUrl.push(currentUrl);
                        }
                    });
                });
                this.buses.forEach(function (value) {
                    value.value.lob_wise_prod_list.forEach(function (list) {
                        exampleBusArray.push(list);
                        BusListUrl = [];
                        for (var i = 0; i < exampleBusArray.length; i++) {
                            var tempUrl = exampleBusArray[i].url;
                            let paramString = tempUrl.split('/');
                            const actualkey = value.type;
                            let currentUrl = paramString[0] + '/' + "buses" + `/` + actualkey + `/` + paramString[2];
                            BusListUrl.push(currentUrl);
                        }
                    });
                });
                this.scvpickups.forEach(function (value) {
                    value.value.lob_wise_prod_list.forEach(function (list) {
                        exampleScvArray.push(list);
                        scvpickupListUrl = [];
                        for (var i = 0; i < exampleScvArray.length; i++) {
                            var tempUrl = exampleScvArray[i].url;
                            let paramString = tempUrl.split('/');
                            const actualkey = value.type;
                            let currentUrl = paramString[0] + '/' + "scv-pickups" + `/` + ((actualkey.toString()).replace(/\s/g, "-")).toLowerCase() + `/` + paramString[2];
                            scvpickupListUrl.push(currentUrl);
                        }
                    });
                });
                truckListUrl.forEach(function (value) {
                    productListUrl.push(value);
                });
                BusListUrl.forEach(function (value) {
                    productListUrl.push(value);
                });
                scvpickupListUrl.forEach(function (value) {
                    productListUrl.push(value);
                });
                this.productUrls = productListUrl;
            }
        }, (error) => { }));
    }
    // SectionClick(sectioname: any) {
    //   if (sectioname == "ENQUIRY") {
    //     this.showEnquiryModal = true;
    //   } else {
    //   }
    // }
    // closePopup(close: any) {
    //   if (isPlatformBrowser(this.platformId)) {
    //     this.showEnquiryModal = false;
    //   }
    // }
    gotoProduct(lob_name, sub_lob, ppl) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            let lobname = lob_name == 'Icv Trucks' ? 'trucks' : lob_name.replace(/\s/g, "-").toLowerCase();
            let sublobname = (sub_lob.replace(/\s/g, "-")).toLowerCase();
            let display_ppl = (ppl.replace(/\s/g, "-")).toLowerCase();
            // let currentUrl = `/product-list/` + lobname;
            // let currentUrl = `/category-list/` + lobname + `/` + sublobname ;
            let currentUrl = `/product-list/` + lobname + `/` + sublobname + `/` + ((display_ppl).replace("---", "-")).replace("--", "-");
            return currentUrl;
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
SitemapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-sitemap",
        templateUrl: "./sitemap.component.html",
        styleUrls: ["./sitemap.component.scss"],
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(2, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID))
], SitemapComponent);



/***/ }),

/***/ 722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitemapModule": () => (/* binding */ SitemapModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(573);
/* harmony import */ var _sitemap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(723);





// import { EnquiryModalModule } from "../Modals/enquiry-modal/enquiry-modal.module";
const routes = [{ path: "", component: _sitemap_component__WEBPACK_IMPORTED_MODULE_0__.SitemapComponent }];
let SitemapModule = class SitemapModule {
};
SitemapModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_sitemap_component__WEBPACK_IMPORTED_MODULE_0__.SitemapComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            //  EnquiryModalModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
    })
], SitemapModule);



/***/ })

};
;