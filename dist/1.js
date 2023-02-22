"use strict";
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(194);
/* harmony import */ var rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(293);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__);






let HomeComponent = class HomeComponent {
    // hideHeavyTruck : boolean = true;
    // hideHcvConst: boolean = true;
    // hideLcvTruck: boolean = true;
    // hideTractorTrailer: boolean = true;
    // hideScvCargo: boolean = true;
    // hideBuses: boolean = true;
    // hideScvPass: boolean = true;
    constructor(platformId, router, sanitizer, apiList, dataService, skeletonService, modelService, seoservice, cleverService, previousRouteService, canonicalservice, localStorage) {
        this.platformId = platformId;
        this.router = router;
        this.sanitizer = sanitizer;
        this.apiList = apiList;
        this.dataService = dataService;
        this.skeletonService = skeletonService;
        this.modelService = modelService;
        this.seoservice = seoservice;
        this.cleverService = cleverService;
        this.previousRouteService = previousRouteService;
        this.canonicalservice = canonicalservice;
        this.localStorage = localStorage;
        // @ViewChild('offerModal', { read: TemplateRef, static: false }) offerModalForm: TemplateRef<any>;
        this.pageTitle = "Home";
        this.testimonialVideoData = [];
        this.heavyTruck = [];
        this.tractorTrailer = [];
        this.hcvConst = [];
        this.lcvTruck = [];
        this.scvCargo = [];
        this.buses = [];
        this.scvPass = [];
        this.popularProducts = [];
        this.showPopularProduct = false;
        this.showTestimonialVideo = false;
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
            navText: ["<img class='nav' src='assets/images/crasual-left.svg' alt='crasual-left'/>", "<img class='nav' src='assets/images/crasual-right.svg' alt='crasual-right'/>"],
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
        this.heavyTruckCarousel = {
            loop: false,
            margin: 30,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            autoplay: true,
            nav: false,
            responsiveRefreshRate: 1000000,
            navText: ["<img class='nav' src='assets/images/crasual-left.svg' alt='crasual-left' />", "<img class='nav' src='assets/images/crasual-right.svg' alt='crasual-right'/>"],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },
        };
        this.tippersCarousel = {
            loop: false,
            margin: 30,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            autoplay: true,
            nav: false,
            responsiveRefreshRate: 1000000,
            navText: ["<img class='nav' src='assets/images/crasual-left.svg' alt='crasual-left' />", "<img class='nav' src='assets/images/crasual-right.svg' alt='crasual-right' />"],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },
        };
        this.financeSlider = {
            loop: false,
            margin: 24,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            navSpeed: 700,
            autoplay: false,
            nav: true,
            responsiveRefreshRate: 1000000,
            navText: ["<img class='nav' src='assets/images/crasual-left.svg' alt='crasual-left' />", "<img class='nav' src='assets/images/crasual-right.svg' alt='crasual-right' />"],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                768: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1300: {
                    items: 4
                }
            },
        };
        this.PopularSlider = {
            loop: true,
            margin: 24,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            navSpeed: 700,
            autoplay: false,
            nav: true,
            responsiveRefreshRate: 1000000,
            navText: ["<img class='nav' src='assets/images/crasual-left.svg' alt='crasual-left'/>", "<img class='nav' src='assets/images/crasual-right.svg' alt='crasual-right'/>"],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                768: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1300: {
                    items: 4
                }
            },
        };
        this.metatitle = "Check Prices, Features and Buy Tata Trucks and Buses Online in India | Tata Motors";
        this.metadesc = "Know about price and features of Tata Ace, Intra, Yodha Pickup, Winger, Magic, Signa, Prima, Ultra, and entire Truck, Tipper, Bus range. Enquire, book and buy online with Tata Motors authorized dealers.";
        this.pagetitle = "Home";
        this.breadcrumbdata = [];
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.OffersList = [];
        this.MainOfferList = [];
        this.previousUrl = this.previousRouteService.getPreviousUrl();
    }
    ngOnInit() {
        this.canonicalservice.createCanonicalURL();
        this.seo();
        this.getPopularProdDetails();
        this.dashBoardLob();
        this.GetTestmonialVideo();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            try {
                this.cleverService.onPageView(this.pagetitle, this.previousUrl, "");
            }
            catch (_a) { }
        }
    }
    // @HostListener('window:scroll', ['$event'])
    //   onscroll() {
    //     if(!this.showPopularProduct && !this.showTestimonialVideo && !this.showDashboardLob){
    //     // this.getPopularProdDetails();
    //     this.dashBoardLob();
    //     this.GetTestmonialVideo();
    //     }
    //   }
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
    dashBoardLob() {
        this.showDashboardLob = true;
        let apiUrl = this.apiList.returnAPI('dashboardLobWise');
        this.sub.add((0,rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([
            this.dataService.post(apiUrl, { lob_name_list: ["MCV Trucks", "HCV Cargo"], type: "heavy_truck", offset: 0, size: 10, is_top: true }),
            this.dataService.post(apiUrl, { lob_name_list: ["HCV Const"], offset: 0, size: 10, is_top: true }),
            this.dataService.post(apiUrl, { lob_name_list: ["HCV Cargo"], type: "tractor_trailer", offset: 0, size: 10, is_top: true }),
            this.dataService.post(apiUrl, { lob_name_list: ["LCV", "ICV Trucks"], offset: 0, size: 10, is_top: true }),
            this.dataService.post(apiUrl, { lob_name_list: ["SCV Cargo", "Pickups"], offset: 0, size: 10, is_top: true }),
            this.dataService.post(apiUrl, { lob_name_list: ["Buses"], offset: 0, size: 10, is_top: true }),
            this.dataService.post(apiUrl, { lob_name_list: ["ScPass", "SCVPass"], offset: 0, size: 10, is_top: true }),
        ]).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37;
            if ((_a = response[0]) === null || _a === void 0 ? void 0 : _a.success) {
                for (var i = 0; i < ((_c = (_b = response[0]) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.model_list.length); i++) {
                    if (((_f = (_e = (_d = response[0]) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.model_list[i]) === null || _f === void 0 ? void 0 : _f.is_top) && ((_g = this.heavyTruck) === null || _g === void 0 ? void 0 : _g.length) < 4) {
                        this.heavyTruck.push((_j = (_h = response[0]) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.model_list[i]);
                    }
                }
            }
            // else{
            //   this.hideHeavyTruck = false;
            // }
            if ((_k = response[1]) === null || _k === void 0 ? void 0 : _k.success) {
                for (var j = 0; j < ((_m = (_l = response[1]) === null || _l === void 0 ? void 0 : _l.data) === null || _m === void 0 ? void 0 : _m.model_list.length); j++) {
                    if (((_q = (_p = (_o = response[1]) === null || _o === void 0 ? void 0 : _o.data) === null || _p === void 0 ? void 0 : _p.model_list[j]) === null || _q === void 0 ? void 0 : _q.is_top) && ((_r = this.hcvConst) === null || _r === void 0 ? void 0 : _r.length) < 4) {
                        this.hcvConst.push((_t = (_s = response[1]) === null || _s === void 0 ? void 0 : _s.data) === null || _t === void 0 ? void 0 : _t.model_list[j]);
                    }
                }
            }
            // else{
            //   this.hideHcvConst = false;
            // }
            if ((_u = response[2]) === null || _u === void 0 ? void 0 : _u.success) {
                for (var k = 0; k < ((_w = (_v = response[2]) === null || _v === void 0 ? void 0 : _v.data) === null || _w === void 0 ? void 0 : _w.model_list.length); k++) {
                    if (((_z = (_y = (_x = response[2]) === null || _x === void 0 ? void 0 : _x.data) === null || _y === void 0 ? void 0 : _y.model_list[k]) === null || _z === void 0 ? void 0 : _z.is_top) && ((_0 = this.tractorTrailer) === null || _0 === void 0 ? void 0 : _0.length) < 4) {
                        this.tractorTrailer.push((_2 = (_1 = response[2]) === null || _1 === void 0 ? void 0 : _1.data) === null || _2 === void 0 ? void 0 : _2.model_list[k]);
                    }
                }
            }
            // else{
            //   this.hideTractorTrailer = false;
            // }
            if ((_3 = response[3]) === null || _3 === void 0 ? void 0 : _3.success) {
                for (var l = 0; l < ((_5 = (_4 = response[3]) === null || _4 === void 0 ? void 0 : _4.data) === null || _5 === void 0 ? void 0 : _5.model_list.length); l++) {
                    if (((_8 = (_7 = (_6 = response[3]) === null || _6 === void 0 ? void 0 : _6.data) === null || _7 === void 0 ? void 0 : _7.model_list[l]) === null || _8 === void 0 ? void 0 : _8.is_top) && ((_9 = this.lcvTruck) === null || _9 === void 0 ? void 0 : _9.length) < 4) {
                        this.lcvTruck.push((_11 = (_10 = response[3]) === null || _10 === void 0 ? void 0 : _10.data) === null || _11 === void 0 ? void 0 : _11.model_list[l]);
                    }
                }
            }
            // else{
            //   this.hideLcvTruck = false;
            // }
            if ((_12 = response[4]) === null || _12 === void 0 ? void 0 : _12.success) {
                for (var m = 0; m < ((_14 = (_13 = response[4]) === null || _13 === void 0 ? void 0 : _13.data) === null || _14 === void 0 ? void 0 : _14.model_list.length); m++) {
                    if (((_17 = (_16 = (_15 = response[4]) === null || _15 === void 0 ? void 0 : _15.data) === null || _16 === void 0 ? void 0 : _16.model_list[m]) === null || _17 === void 0 ? void 0 : _17.is_top) && ((_18 = this.scvCargo) === null || _18 === void 0 ? void 0 : _18.length) < 4) {
                        this.scvCargo.push((_20 = (_19 = response[4]) === null || _19 === void 0 ? void 0 : _19.data) === null || _20 === void 0 ? void 0 : _20.model_list[m]);
                    }
                }
            }
            // else{
            //   this.hideScvCargo = false;
            // }
            if ((_21 = response[5]) === null || _21 === void 0 ? void 0 : _21.success) {
                for (var n = 0; n < ((_23 = (_22 = response[5]) === null || _22 === void 0 ? void 0 : _22.data) === null || _23 === void 0 ? void 0 : _23.model_list.length); n++) {
                    if (((_26 = (_25 = (_24 = response[5]) === null || _24 === void 0 ? void 0 : _24.data) === null || _25 === void 0 ? void 0 : _25.model_list[n]) === null || _26 === void 0 ? void 0 : _26.is_top) && this.buses.length < 4) {
                        this.buses.push((_28 = (_27 = response[5]) === null || _27 === void 0 ? void 0 : _27.data) === null || _28 === void 0 ? void 0 : _28.model_list[n]);
                    }
                }
            }
            // else{
            //   this.hideBuses= false;
            // }
            if ((_29 = response[6]) === null || _29 === void 0 ? void 0 : _29.success) {
                for (var p = 0; p < ((_31 = (_30 = response[6]) === null || _30 === void 0 ? void 0 : _30.data) === null || _31 === void 0 ? void 0 : _31.model_list.length); p++) {
                    if (((_34 = (_33 = (_32 = response[6]) === null || _32 === void 0 ? void 0 : _32.data) === null || _33 === void 0 ? void 0 : _33.model_list[p]) === null || _34 === void 0 ? void 0 : _34.is_top) && ((_35 = this.scvPass) === null || _35 === void 0 ? void 0 : _35.length) < 4) {
                        this.scvPass.push((_37 = (_36 = response[6]) === null || _36 === void 0 ? void 0 : _36.data) === null || _37 === void 0 ? void 0 : _37.model_list[p]);
                    }
                }
            }
            // else{
            //   this.hideScvPass= false;
            // }
        }));
    }
    openPage(data, type) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            var currentUrl;
            this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
            let modelname = (((data.model.replace(/\//g, "-")).replace(/\+/g, "-")).replace(/\./g, "-")).toLowerCase();
            let pplname = ((data.ppl_name.replace(/\//g, "-")).replace(/\s/g, "-")).toLowerCase();
            let lobname = data.lob_name.replace(/\s/g, "-").toLowerCase() == 'icv-trucks' ? 'trucks' : data.lob_name.replace(/\s/g, "-").toLowerCase();
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
    openPagePopular(data, type) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            var currentUrl;
            this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
            let modelname = (((data.model.replace(/\//g, "-")).replace(/\+/g, "-")).replace(/\./g, "-")).toLowerCase();
            let pplname = ((data.ppl.replace(/\//g, "-")).replace(/\s/g, "-")).toLowerCase();
            let lobname = data.lob.replace(/\s/g, "-").toLowerCase() == 'icv-trucks' ? 'trucks' : data.lob.replace(/\s/g, "-").toLowerCase();
            if (type == 'viewDetail') {
                //   try{
                //   this.firebaseanalytics.MenuPlPpl("product-detail", data.lob, data.ppl, data.model, this.pageTitle);
                // } catch (error) { }
                currentUrl = `/product-details/` + lobname + `/` + pplname + `/` + modelname.replace(/\s/g, "-").toLowerCase() + `/` + data.id;
            }
            else {
                currentUrl = `/lead-booking/` + lobname + `/` + pplname + `/` + modelname.replace(/\s/g, "-").toLowerCase() + `/` + data.id;
            }
            return currentUrl;
        }
    }
    onExplore(type) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            let currentUrl = `/category-list/` + type;
            return currentUrl;
        }
    }
    getPopularProdDetails() {
        this.showPopularProduct = true;
        let apiUrl = this.apiList.returnAPI('getPopularProd');
        this.sub.add(this.dataService.get(apiUrl, '').subscribe({ next: (response) => {
                if (response.success) {
                    this.popularProducts = response.data;
                }
                else {
                    this.popularProducts = [];
                }
            }, complete: () => {
            } }));
    }
    getOffers() {
        let apiUrl = this.apiList.returnAPI('getgenericOffers');
        let data = {
            top: '10',
            groupBy: 'financier'
        };
        this.sub.add(this.dataService.get(apiUrl, data).subscribe({ next: (response) => {
                if (response) {
                    this.OffersList = [];
                    let OffersResponse = [];
                    OffersResponse = response;
                    let OffersListValueEntries = [];
                    OffersListValueEntries = Object.entries(OffersResponse);
                    let finalofferList = [];
                    for (let i = 0; i < OffersListValueEntries.length; i++) {
                        for (let k = 0; k < (OffersListValueEntries[i][1]).length; k++) {
                            finalofferList = [];
                            finalofferList = OffersListValueEntries[i][1][k];
                            finalofferList.financierName = OffersListValueEntries[i][0];
                            this.OffersList.push(finalofferList);
                        }
                    }
                    this.MainOfferList = this.OffersList;
                }
            }, complete: () => {
            } }));
    }
    exploreOffers(item) {
        let apiUrl = this.apiList.returnAPI('getVehicleInfo');
        let reqdata;
        if (item.vehiclePl !== 'All') {
            reqdata = { pl_name: item.vehiclePl };
        }
        else if (item.lob !== 'All') {
            reqdata = { lob_name: item.lob };
        }
        else {
            reqdata = { lob_name: 'SCV Pickups' };
        }
        this.sub.add(this.dataService.post(apiUrl, reqdata).subscribe({ next: (data) => {
                if (data["success"]) {
                    let productData = data["data"][0];
                    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
                    if (item.vehiclePl !== 'All') {
                        let lobname = productData.lob == 'icv-trucks' || 'Icv Trucks' ? 'trucks' : 0;
                        let pplname = (((productData.ppl.replace(/\//g, "-")).replace(/\+/g, "-")).replace(/\./g, "-")).toLowerCase();
                        let modelname = ((productData.pl.replace(/\//g, "-")).replace(/\s/g, "-")).toLowerCase();
                        let productid = productData.id;
                        let currentUrl = `/product-details/` + lobname.replace(/\s/g, "-").toLowerCase() + `/` + pplname.replace(/\s/g, "-").toLowerCase() + `/` + modelname.replace(/\s/g, "-").toLowerCase() + `/` + productid;
                        this.router.navigateByUrl(currentUrl)
                            .then(() => {
                            this.router.navigated = false;
                            this.router.navigate([this.router.url]);
                        });
                    }
                    else {
                        let currentUrl = `/product-list/` + reqdata.lob_name.replace(/\s/g, "-").toLowerCase();
                        this.router.navigateByUrl(currentUrl)
                            .then(() => {
                            this.router.navigated = false;
                            this.router.navigate([this.router.url]);
                        });
                    }
                }
                else {
                }
            }, complete: () => {
            } }));
    }
    // openOfferModal(selectedOffer: any) {
    //   if (isPlatformBrowser(this.platformId)) {
    //     this.offerModalData = selectedOffer
    //     this.offerExploreModel = this.modelService.show(this.offerModalForm, {
    //       class: 'modal-dialog-centered modal-lg', backdrop: 'static',
    //     });
    //   }
    // }
    GetTestmonialVideo() {
        this.showTestimonialVideo = true;
        var jsn1 = {
            "type_of_testimonial": "",
            "offset": 0,
            "size": 10,
        };
        let apiUrl = this.apiList.returnAPI('getTestimonials');
        this.sub.add(this.dataService.post(apiUrl, jsn1).subscribe((response) => {
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
                            let img;
                            var vthaumbimage = this.youtube_parser(urls);
                            img = 'https://img.youtube.com/vi/' + vthaumbimage + '/mqdefault.jpg';
                            let videos = 'https://www.youtube.com/embed/' + vthaumbimage + '?autoplay=0&loop=1&autopause=0';
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
    youtube_parser(url) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
            var match = url.match(regExp);
            return (match && match[1].length == 11) ? match[1] : false;
        }
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
    OpenVideo(obj) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.videoInfo = obj;
            this.showTestimonialVdoModal = this.modelService.show(this.showTestimonial, {
                class: 'modal-dialog  modal-lg modal-dialog-centered',
                backdrop: 'static',
            });
            this.video_urls = obj.video_url;
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(obj.video_url);
            // this.firebaseanalytics.videoAndServices("click_testimonialHome_videos", this.pageTitle, obj.model, "");
        }
    }
    closeModal(event) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.showTestimonialVdoModal.hide();
        }
    }
    goTestimonialPage() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            var breadcrumbList1 = {
                label: 'Testimonial',
                url: `/testimonial-list/`
            };
            this.breadcrumbdata.push(breadcrumbList1);
            this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
            this.router.navigateByUrl("/testimonial-list");
        }
    }
    trackByFn(index) {
        return index;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild)('showTestimonial', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.TemplateRef, static: false })
], HomeComponent.prototype, "showTestimonial", void 0);
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID))
], HomeComponent);



/***/ }),

/***/ 611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(193);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(612);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(573);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(619);
/* harmony import */ var _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(613);
/* harmony import */ var ngx_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(620);
/* harmony import */ var _Modals_modals_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(615);
/* harmony import */ var _Static_Pages_services_services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(621);










const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }];
let HomeModule = class HomeModule {
};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselModule, _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__.BannerModule, ngx_skeleton__WEBPACK_IMPORTED_MODULE_8__.NgxSkeletonModule, _Modals_modals_module__WEBPACK_IMPORTED_MODULE_2__.ModalsModule, _Static_Pages_services_services_module__WEBPACK_IMPORTED_MODULE_3__.ServicesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)
        ]
    })
], HomeModule);



/***/ })

};
;