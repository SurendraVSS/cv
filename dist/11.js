"use strict";
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntraV30Component": () => (/* binding */ IntraV30Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__);





let IntraV30Component = class IntraV30Component {
    constructor(router, route, seoservice, canonicalservice, platformId) {
        this.router = router;
        this.route = route;
        this.seoservice = seoservice;
        this.canonicalservice = canonicalservice;
        this.platformId = platformId;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.showback = false;
        this.metatitle = "Check Prices, Features and Buy Tata Trucks and Buses Online in India | Tata Motors";
        this.metadesc = "Know about price and features of Tata Ace, Intra, Yodha Pickup, Winger, Magic, Signa, Prima, Ultra, and entire Truck, Tipper, Bus range. Enquire, book and buy online with Tata Motors authorized dealers.";
    }
    ngOnInit() {
        this.lob = "";
        this.ppl = "";
        this.model = "";
        this.sub.add(this.route.params.subscribe((params) => {
            this.productId = params["id"];
            this.lob = params["lob_name"] == 'trucks' ? 'icv-trucks' : params["lob_name"];
            this.ppl = params["ppl_name"];
            this.model = params["model"];
        }));
        if (this.productId == "" || this.productId == undefined) {
            this.showback = false;
        }
        else {
            this.showback = true;
        }
        this.metatitle = this.model;
        this.canonicalservice.createCanonicalURL();
        this.seo();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.sliderclick();
            this.changeTab();
        }
    }
    sliderclick() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            $('#hsItem1 .feature-pointer').click(function () {
                if ($('#slider1').length > 0) {
                    if ($('#slider1.slick-initialized').length > 0) {
                    }
                    else {
                        $('#slider1').slick({
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                    }
                }
            });
            $('#hsItem2 .feature-pointer').click(function () {
                if ($('#slider2').length > 0) {
                    if ($('#slider2.slick-initialized').length > 0) {
                    }
                    else {
                        $('#slider2').slick({
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                    }
                }
            });
            //######***Pointer Button Click ***######
            $('.feature-pointer').click(function () {
                $(this).addClass('active'), $(this).siblings().removeClass('active');
                var a = $(this).attr('data-target');
                $('.hs-truck-feature').removeClass('active'), $('.' + a).addClass('active');
            });
            $('.hs-truck-thumbnail').click(function () {
                $(this).addClass('active'), $(this).siblings().removeClass('active');
                var a = $(this).attr('data-target');
                $('.hs-truck-item').removeClass('active'), $(a).addClass('active');
                $('.feature-pointer:first-child').addClass('active'), $('.feature-pointer:first-child').siblings().removeClass('active');
                $('.hs-truck-feature:first-child').addClass('active'), $('.hs-truck-feature:first-child').siblings().removeClass('active');
            });
        }
    }
    changeTab() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            $('.prduct-select li a').click(function () {
                $('.feature-pointer:first-child').siblings().removeClass('active'), $('.feature-pointer:first-child').addClass('active');
                $('.hs-truck-feature:first-child').siblings().removeClass('active'), $('.hs-truck-feature:first-child').addClass('active');
                $('.prduct-select li a').removeClass('active'), $(this).addClass('active');
                var a = $(this).attr('data-target');
                $(a).siblings().hide(), $(a).show();
            });
            $('#product_1 #P1hsItem1 .feature-pointer').click(function () {
                if ($('#product_1 #P1hsItem1 #slider1').length > 0) {
                    if ($('#product_1 #P1hsItem1 #slider1.slick-initialized').length > 0) {
                    }
                    else {
                        $('#product_1 #P1hsItem1 #slider1').slick({
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                    }
                }
            });
            $('#product_1 #P1hsItem2 .feature-pointer').click(function () {
                if ($('#product_1 #P1hsItem2 #slider2').length > 0) {
                    if ($('#product_1 #P1hsItem2 #slider2.slick-initialized').length > 0) {
                    }
                    else {
                        $('#product_1 #P1hsItem2 #slider2').slick({
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                    }
                }
            });
            $('#product_2 #P2hsItem1 .feature-pointer').click(function () {
                if ($('#product_2 #P2hsItem1 #slider1').length > 0) {
                    if ($('#product_2 #slider1.slick-initialized').length > 0) {
                    }
                    else {
                        $('#product_2 #P2hsItem1 #slider1').slick({
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                    }
                }
            });
            $('#product_2 #P2hsItem2 .feature-pointer').click(function () {
                if ($('#product_2 #P2hsItem2 #slider2').length > 0) {
                    if ($('#product_2 #P2hsItem2 #slider2.slick-initialized').length > 0) {
                    }
                    else {
                        $('#product_2 #P2hsItem2 #slider2').slick({
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                    }
                }
            });
        }
    }
    clickback() {
        this.router.navigateByUrl('/product-details/' + this.lob + `/` + this.ppl + `/` + this.model + `/` + this.productId);
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
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
IntraV30Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-intra-v30',
        templateUrl: './intra-v30.component.html',
        styleUrls: ['./intra-v30.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(4, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID))
], IntraV30Component);



/***/ }),

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntraV30Module": () => (/* binding */ IntraV30Module)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(619);
/* harmony import */ var _intra_v30_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);





let IntraV30Module = class IntraV30Module {
};
IntraV30Module = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_intra_v30_component__WEBPACK_IMPORTED_MODULE_0__.IntraV30Component],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselModule
        ],
        exports: [_intra_v30_component__WEBPACK_IMPORTED_MODULE_0__.IntraV30Component]
    })
], IntraV30Module);



/***/ }),

/***/ 647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltraTComponent": () => (/* binding */ UltraTComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__);





let UltraTComponent = class UltraTComponent {
    constructor(router, route, seoservice, canonicalservice, platformId) {
        this.router = router;
        this.route = route;
        this.seoservice = seoservice;
        this.canonicalservice = canonicalservice;
        this.platformId = platformId;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.showback = false;
        this.metatitle = "Check Prices, Features and Buy Tata Trucks and Buses Online in India | Tata Motors";
        this.metadesc = "Know about price and features of Tata Ace, Intra, Yodha Pickup, Winger, Magic, Signa, Prima, Ultra, and entire Truck, Tipper, Bus range. Enquire, book and buy online with Tata Motors authorized dealers.";
        this.MyArrayType = [];
        this.tippersCarousel = {
            loop: true,
            margin: 10,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            navSpeed: 700,
            autoplay: true,
            nav: true,
            responsiveRefreshRate: 1000000,
            navText: ["<img class='nav' src='assets/images/nav-left.webp' alt='nav-left' />", "<img class='nav' src='assets/images/nav-right.webp' alt='nav-right' />"],
            // navText: [
            //   '<i class="ti-angle-left"></i>',
            //   '<i class="ti-angle-right"></i>',
            // ],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1300: {
                    items: 1
                }
            },
        };
    }
    ngOnInit() {
        this.canonicalservice.createCanonicalURL();
        this.lob = "";
        this.ppl = "";
        this.model = "";
        this.MyArrayType = [
            { id: 1, text: "assets/tata-hotspot/images/ultra-1918t/3 Mode Fuel Economy Switch.webp" },
            { id: 2, text: "assets/tata-hotspot/images/ultra-1918t/Cockpit type dual tone interiors.webp" },
            { id: 3, text: "assets/tata-hotspot/images/ultra-1918t/Elegant Dashboard.webp" },
            { id: 4, text: "assets/tata-hotspot/images/ultra-1918t/Gear Shift Advisor.webp" },
        ];
        this.sub.add(this.route.params.subscribe((params) => {
            this.productId = params["id"];
            this.lob = params["lob_name"] == 'trucks' ? 'icv-trucks' : params["lob_name"];
            this.ppl = params["ppl_name"];
            this.model = params["model"];
            this.seo();
        }));
        if (this.productId == "" || this.productId == undefined) {
            this.showback = false;
        }
        else {
            this.showback = true;
        }
        this.metatitle = this.model;
        this.seo();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.sliderclick();
            this.changeTab();
        }
    }
    sliderclick() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            $('#hsItem1.feature-pointer').click(function () {
                if ($('#slider1').length > 0) {
                    if ($('#slider1.slick-initialized').length > 0) {
                    }
                    else {
                        $('#slider1').slick({
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                    }
                }
            });
            $('#hsItem2.feature-pointer').click(function () {
                if ($('#slider2').length > 0) {
                    if ($('#slider2.slick-initialized').length > 0) {
                    }
                    else {
                        $('#slider2').slick({
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                    }
                }
            });
            //######***Pointer Button Click ***######
            $('.feature-pointer').click(function () {
                $(this).addClass('active'), $(this).siblings().removeClass('active');
                var a = $(this).attr('data-target');
                $('.hs-truck-feature').removeClass('active'), $('.' + a).addClass('active');
            });
            $('.hs-truck-thumbnail').click(function () {
                $(this).addClass('active'), $(this).siblings().removeClass('active');
                var a = $(this).attr('data-target');
                $('.hs-truck-item').removeClass('active'), $(a).addClass('active');
                $('.feature-pointer:first-child').addClass('active'), $('.feature-pointer:first-child').siblings().removeClass('active');
                $('.hs-truck-feature:first-child').addClass('active'), $('.hs-truck-feature:first-child').siblings().removeClass('active');
            });
        }
    }
    changeTab() {
        $('.prduct-select li a').click(function () {
            $('.feature-pointer:first-child').siblings().removeClass('active'), $('.feature-pointer:first-child').addClass('active');
            $('.hs-truck-feature:first-child').siblings().removeClass('active'), $('.hs-truck-feature:first-child').addClass('active');
            $('.prduct-select li a').removeClass('active'), $(this).addClass('active');
            var a = $(this).attr('data-target');
            $(a).siblings().hide(), $(a).show();
        });
        $('#product_1 #P1hsItem1.feature-pointer').click(function () {
            if ($('#product_1 #P1hsItem1 #slider1').length > 0) {
                if ($('#product_1 #P1hsItem1 #slider1.slick-initialized').length > 0) {
                }
                else {
                    $('#product_1 #P1hsItem1 #slider1').slick({
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
            }
        });
        $('#product_1 #P1hsItem2.feature-pointer').click(function () {
            if ($('#product_1 #P1hsItem2 #slider2').length > 0) {
                if ($('#product_1 #P1hsItem2 #slider2.slick-initialized').length > 0) {
                }
                else {
                    $('#product_1 #P1hsItem2 #slider2').slick({
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
            }
        });
        $('#product_2 #P2hsItem1.feature-pointer').click(function () {
            if ($('#product_2 #P2hsItem1 #slider1').length > 0) {
                if ($('#product_2 #slider1.slick-initialized').length > 0) {
                }
                else {
                    $('#product_2 #P2hsItem1 #slider1').slick({
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
            }
        });
        $('#product_2 #P2hsItem2 .feature-pointer').click(function () {
            if ($('#product_2 #P2hsItem2 #slider2').length > 0) {
                if ($('#product_2 #P2hsItem2 #slider2.slick-initialized').length > 0) {
                }
                else {
                    $('#product_2 #P2hsItem2 #slider2').slick({
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
            }
        });
    }
    clickback() {
        this.router.navigateByUrl('/product-details/' + this.lob + `/` + this.ppl + `/` + this.model + `/` + this.productId);
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
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
UltraTComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ultra-t',
        templateUrl: './ultra-t.component.html',
        styleUrls: ['./ultra-t.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(4, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID))
], UltraTComponent);



/***/ }),

/***/ 646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltraTModule": () => (/* binding */ UltraTModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(619);
/* harmony import */ var _ultra_t_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(647);





let UltraTModule = class UltraTModule {
};
UltraTModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_ultra_t_component__WEBPACK_IMPORTED_MODULE_0__.UltraTComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselModule
        ],
        exports: [_ultra_t_component__WEBPACK_IMPORTED_MODULE_0__.UltraTComponent]
    })
], UltraTModule);



/***/ }),

/***/ 649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltraComponent": () => (/* binding */ UltraComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__);





let UltraComponent = class UltraComponent {
    constructor(router, route, seoservice, canonicalservice, platformId) {
        this.router = router;
        this.route = route;
        this.seoservice = seoservice;
        this.canonicalservice = canonicalservice;
        this.platformId = platformId;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.showback = false;
        this.metatitle = "Check Prices, Features and Buy Tata Trucks and Buses Online in India | Tata Motors";
        this.metadesc = "Know about price and features of Tata Ace, Intra, Yodha Pickup, Winger, Magic, Signa, Prima, Ultra, and entire Truck, Tipper, Bus range. Enquire, book and buy online with Tata Motors authorized dealers.";
        this.tippersCarousel = {
            loop: true,
            margin: 10,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            navSpeed: 700,
            autoplay: true,
            nav: true,
            responsiveRefreshRate: 1000000,
            navText: [
                '<i class="ti-angle-left"></i>',
                '<i class="ti-angle-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1300: {
                    items: 1
                }
            },
        };
    }
    ngOnInit() {
        this.lob = "";
        this.ppl = "";
        this.model = "";
        this.sub.add(this.route.params.subscribe((params) => {
            this.productId = params["id"];
            this.lob = params["lob_name"] == 'trucks' ? 'icv-trucks' : params["lob_name"];
            this.ppl = params["ppl_name"];
            this.model = params["model"];
        }));
        if (this.productId == "" || this.productId == undefined) {
            this.showback = false;
        }
        else {
            this.showback = true;
        }
        this.metatitle = this.model;
        this.canonicalservice.createCanonicalURL();
        this.seo();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.sliderclick();
            this.changeTab();
        }
    }
    sliderclick() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            $('#hsItem1.feature-pointer').click(function () {
                if ($('#slider1').length > 0) {
                    if ($('#slider1.slick-initialized').length > 0) {
                    }
                    else {
                        $('#slider1').slick({
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                    }
                }
            });
            $('#hsItem2.feature-pointer').click(function () {
                if ($('#slider2').length > 0) {
                    if ($('#slider2.slick-initialized').length > 0) {
                    }
                    else {
                        $('#slider2').slick({
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                    }
                }
            });
            $('.feature-pointer').click(function () {
                $(this).addClass('active'), $(this).siblings().removeClass('active');
                var a = $(this).attr('data-target');
                $('.hs-truck-feature').removeClass('active'), $('.' + a).addClass('active');
            });
            $('.hs-truck-thumbnail').click(function () {
                $(this).addClass('active'), $(this).siblings().removeClass('active');
                var a = $(this).attr('data-target');
                $('.hs-truck-item').removeClass('active'), $(a).addClass('active');
                $('.feature-pointer:first-child').addClass('active'), $('.feature-pointer:first-child').siblings().removeClass('active');
                $('.hs-truck-feature:first-child').addClass('active'), $('.hs-truck-feature:first-child').siblings().removeClass('active');
            });
        }
    }
    changeTab() {
        $('.prduct-select li a').click(function () {
            $('.feature-pointer:first-child').siblings().removeClass('active'), $('.feature-pointer:first-child').addClass('active');
            $('.hs-truck-feature:first-child').siblings().removeClass('active'), $('.hs-truck-feature:first-child').addClass('active');
            $('.prduct-select li a').removeClass('active'), $(this).addClass('active');
            var a = $(this).attr('data-target');
            $(a).siblings().hide(), $(a).show();
        });
        $('#product_1 #P1hsItem1.feature-pointer').click(function () {
            if ($('#product_1 #P1hsItem1 #slider1').length > 0) {
                if ($('#product_1 #P1hsItem1 #slider1.slick-initialized').length > 0) {
                }
                else {
                    $('#product_1 #P1hsItem1 #slider1').slick({
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
            }
        });
        $('#product_1 #P1hsItem2.feature-pointer').click(function () {
            if ($('#product_1 #P1hsItem2 #slider2').length > 0) {
                if ($('#product_1 #P1hsItem2 #slider2.slick-initialized').length > 0) {
                }
                else {
                    $('#product_1 #P1hsItem2 #slider2').slick({
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
            }
        });
        $('#product_2 #P2hsItem1.feature-pointer').click(function () {
            if ($('#product_2 #P2hsItem1 #slider1').length > 0) {
                if ($('#product_2 #slider1.slick-initialized').length > 0) {
                }
                else {
                    $('#product_2 #P2hsItem1 #slider1').slick({
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
            }
        });
        $('#product_2 #P2hsItem2.feature-pointer').click(function () {
            if ($('#product_2 #P2hsItem2 #slider2').length > 0) {
                if ($('#product_2 #P2hsItem2 #slider2.slick-initialized').length > 0) {
                }
                else {
                    $('#product_2 #P2hsItem2 #slider2').slick({
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
            }
        });
    }
    clickback() {
        this.router.navigateByUrl('/product-details/' + this.lob + `/` + this.ppl + `/` + this.model + `/` + this.productId);
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
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
UltraComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ultra',
        templateUrl: './ultra.component.html',
        styleUrls: ['./ultra.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(4, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID))
], UltraComponent);



/***/ }),

/***/ 648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltraModule": () => (/* binding */ UltraModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(619);
/* harmony import */ var _ultra_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(649);





let UltraModule = class UltraModule {
};
UltraModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_ultra_component__WEBPACK_IMPORTED_MODULE_0__.UltraComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselModule
        ],
        exports: [_ultra_component__WEBPACK_IMPORTED_MODULE_0__.UltraComponent]
    })
], UltraModule);



/***/ }),

/***/ 637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookTestDriveComponent": () => (/* binding */ BookTestDriveComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__);





let BookTestDriveComponent = class BookTestDriveComponent {
    constructor(dataService, apiList, formBuilder, formErrorService, regexService, toastrService, rootService, route, spinnerService, behaviorService, platformId) {
        this.dataService = dataService;
        this.apiList = apiList;
        this.formBuilder = formBuilder;
        this.formErrorService = formErrorService;
        this.regexService = regexService;
        this.toastrService = toastrService;
        this.rootService = rootService;
        this.route = route;
        this.spinnerService = spinnerService;
        this.behaviorService = behaviorService;
        this.platformId = platformId;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription();
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.stateList = [];
        this.pincodeList = [];
        this.isbookTestDriveFormValid = false;
        this.divisions = [];
        this.termsCheck = false;
        this.termsError = false;
        this.districtList = [];
        this.cityList = [];
        this.talukaList = [];
        this.hasRequiredError = (controlName) => this.formErrorService.hasRequiredError(controlName, this.bookTestDriveForm);
        this.hasPatternError = (controlName) => this.formErrorService.hasPatternError(controlName, this.bookTestDriveForm);
        this.hasMinLengthError = (controlName) => this.formErrorService.hasPatternError(controlName, this.bookTestDriveForm);
        this.today = new Date();
        this.today.setDate(this.today.getDate() + 1);
    }
    ngOnInit() {
        this.newForm();
        this.getStates();
    }
    getLoggedUserData() {
        this.sub.add(this.behaviorService.isLoggedIn.subscribe((res) => {
            this.isUserLoggedIn = this.rootService.isLoggedIn() ? true : false;
            this.userData = this.rootService.getUserData();
        }));
        if (this.isUserLoggedIn) {
            this.setForm(this.userData);
        }
        else {
            this.newForm();
        }
    }
    newForm() {
        this.bookTestDriveForm = this.formBuilder.group({
            first_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(this.regexService.MultilingualAlphabet)]],
            last_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(this.regexService.MultilingualAlphabet)]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            pincode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(this.regexService.Pincode)]],
            mobile_number: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(this.regexService.Phone)]],
            dateForTestDrive: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    setForm(userData) {
        var _a, _b;
        let statedata;
        let statecodes;
        statedata = this.stateList.filter((result) => result.name === (userData === null || userData === void 0 ? void 0 : userData.state));
        if ((statedata === null || statedata === void 0 ? void 0 : statedata.length) > 0) {
            statecodes = (_a = statedata[0]) === null || _a === void 0 ? void 0 : _a.code;
        }
        this.bookTestDriveForm.controls['last_name'].setValue(userData === null || userData === void 0 ? void 0 : userData.last_name);
        this.bookTestDriveForm.controls['mobile_number'].setValue(userData === null || userData === void 0 ? void 0 : userData.mobile_number);
        this.bookTestDriveForm.controls['pincode'].setValue(userData === null || userData === void 0 ? void 0 : userData.pincode);
        this.bookTestDriveForm.controls['first_name'].setValue(userData === null || userData === void 0 ? void 0 : userData.first_name);
        this.bookTestDriveForm.controls['state'].setValue((_b = statedata[0]) === null || _b === void 0 ? void 0 : _b.code);
        this.bookTestDriveForm.controls['dateForTestDrive'].setValue("");
        // this.bookTestDriveForm = this.formBuilder.group({
        //   last_name: [userData?.last_name, [Validators.required, Validators.pattern(this.regexService.Name)]],
        //   mobile_number: [userData?.mobile_number, [Validators.required, Validators.pattern(this.regexService.Phone)]],
        //   pincode: [userData?.pincode, [Validators.required, Validators.pattern(this.regexService.Pincode)]],
        //   first_name: [userData?.first_name,[Validators.required]],
        //   state: [statedata[0]?.code, [Validators.required]],
        //   dateForTestDrive: ["", [Validators.required]],
        // });
    }
    getStates() {
        try {
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                this.districtList = [];
                this.talukaList = [];
                this.cityList = [];
                this.pincodeList = [];
                let apiUrl = this.apiList.returnAPI("getStateList");
                this.sub.add(this.dataService.postBlankRequest(apiUrl).subscribe((response) => {
                    if (response) {
                        this.stateList = response;
                        if (this.stateList.length > 0) {
                            this.getLoggedUserData();
                        }
                        this.route.params.subscribe((params) => {
                            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                                var id = params["id"];
                                this.productId = id;
                            }
                        });
                    }
                }));
            }
        }
        catch (error) {
        }
    }
    termsChange(event) {
        if (event.target.checked) {
            this.termsCheck = event.target.checked;
            this.termsError = false;
        }
        if (!event.target.checked) {
            this.termsCheck = event.target.checked;
            this.termsError = true;
        }
    }
    async onSubmit() {
        var _a, _b;
        if (this.bookTestDriveForm.status === "INVALID") {
            this.formErrorService.displayFormErrors(this.bookTestDriveForm);
            return;
        }
        else {
            if (!this.termsCheck) {
                this.termsError = true;
                return;
            }
            else {
                this.termsError = false;
                this.isbookTestDriveFormValid = true;
            }
        }
        if (this.bookTestDriveForm.value.dateForTestDrive) {
            this.toDate = new Date(this.bookTestDriveForm.value.dateForTestDrive);
            this.toDate1 = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.toDate, "yyyy-MM-dd HH:mm:ss", "en-US");
        }
        let userdata = {
            data: [(_b = (_a = this.bookTestDriveForm) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.first_name, this.bookTestDriveForm.value.last_name],
            isBulk: false,
            ignoreTaggedEntities: true,
            domain: 1,
            convertNumber: true,
        };
        let apiUrl = this.apiList.returnAPI("translateText");
        await this.sub.add(this.dataService.post(apiUrl, userdata).subscribe({
            next: (response) => {
                if (response.responseList[0].apiStatus == 2) {
                    this.translatedFirstName = response.responseList[0].outString[0];
                    this.translatedLastName = response.responseList[1].outString[0];
                    if (this.bookTestDriveForm.status === "INVALID") {
                        this.formErrorService.displayFormErrors(this.bookTestDriveForm);
                        return;
                    }
                    this.bookTestDriveApiCall();
                }
            },
            error: (err) => {
                this.translatedFirstName = this.bookTestDriveForm.value.first_name;
                this.translatedLastName = this.bookTestDriveForm.value.last_name;
                if (this.bookTestDriveForm.status === "INVALID") {
                    this.formErrorService.displayFormErrors(this.bookTestDriveForm);
                    return;
                }
                this.bookTestDriveApiCall();
            }
        }));
    }
    bookTestDriveApiCall() {
        let data = {
            product_id: Number(this.productId),
            name: this.translatedFirstName + " " + this.translatedLastName,
            mobile_number: Number(this.bookTestDriveForm.value.mobile_number),
            pincode: Number(this.bookTestDriveForm.value.pincode),
            state: this.bookTestDriveForm.value.state,
            scheduled_on: this.toDate1,
        };
        this.spinnerService.show();
        let apiUrl = this.apiList.returnAPI("bookTestDrive");
        this.sub.add(this.dataService.post(apiUrl, data).subscribe({
            next: (response) => {
                if (response["success"]) {
                    this.spinnerService.hide();
                    this.toastrService.success(response["data"].msg);
                    this.closepopup();
                }
                else {
                    this.spinnerService.hide();
                    this.toastrService.error(response["data"].msg);
                    this.closepopup();
                }
            },
            error: (error) => {
                this.spinnerService.hide();
            }
        }));
    }
    closepopup() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            this.closePopup.emit();
            this.getLoggedUserData();
        }
    }
    notAllowSpace(event) {
        if (event.target.selectionStart === 0 && event.which === 32) {
            event.preventDefault();
        }
    }
    Reset() {
        this.bookTestDriveForm.patchValue({
            first_name: "",
            last_name: "",
            mobile_number: "",
            pincode: "",
            state: "",
            dateForTestDrive: "",
        });
        this.toDate = "";
        this.toDate1 = "";
        this.termsCheck = false;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], BookTestDriveComponent.prototype, "userDetails", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], BookTestDriveComponent.prototype, "closePopup", void 0);
BookTestDriveComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: "app-book-test-drive",
        templateUrl: "./book-test-drive.component.html",
        styleUrls: ["./book-test-drive.component.scss"],
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(10, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID))
], BookTestDriveComponent);



/***/ }),

/***/ 636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookTestDriveModule": () => (/* binding */ BookTestDriveModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _book_test_drive_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(637);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(583);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(590);






let BookTestDriveModule = class BookTestDriveModule {
};
BookTestDriveModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_book_test_drive_component__WEBPACK_IMPORTED_MODULE_0__.BookTestDriveComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.ModalModule.forRoot()
        ],
        exports: [_book_test_drive_component__WEBPACK_IMPORTED_MODULE_0__.BookTestDriveComponent]
    })
], BookTestDriveModule);



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

/***/ 639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmiCalculatorComponent": () => (/* binding */ EmiCalculatorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);


let EmiCalculatorComponent = class EmiCalculatorComponent {
    constructor() {
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.remi = {
            value: 15
        };
        this.temi = {
            value: 5
        };
        this.memi = {
            value: 60
        };
        this.query = {
            amount: 0,
            interest: 0,
            tenureYr: 2,
            tenureMo: 0
        };
        this.loanAmount = 0;
        this.loanAmountOptions = {
            floor: 100000,
            ceil: 8000000,
        };
        this.intrestRate = 10;
        this.intrestRateOptions = {
            floor: 5,
            ceil: 20,
        };
        this.loanTenureYear = 2;
        this.loanTenureYearOptions = {
            floor: 1,
            ceil: 18,
        };
        this.loanTenureMonths = 24;
        this.loanTenureMonthOptions = {
            floor: 1,
            ceil: 216,
        };
        this.emi = 0;
        this.result = {
            emi: "",
            interest: "",
            total: ""
        };
        this.yrToggel = true;
        this.principleAmount = this.principleAmount;
        this.loan = this.principleAmount;
    }
    ngOnInit() {
        this.formatedProductPrice = this.productPrice ? this.convertToIndianFormat(this.productPrice) : this.loanAmountOptions.floor;
        this.calculateEmi();
    }
    calculateEmi() {
        var _a, _b;
        let loanAmount = this.loan > 0 ? this.loan : Number(this.productPrice) && this.productPrice >= this.loanAmountOptions.floor && this.productPrice <= this.loanAmountOptions.ceil ? Number(this.productPrice) : this.loanAmountOptions.floor;
        let numberOfMonths = (this.yrToggel) ? (Number(this.temi.value) * 12) : Number(this.memi.value);
        let rateOfInterest = Number(this.remi.value);
        let monthlyInterestRatio = (rateOfInterest / 100) / 12;
        this.formatedProductPrice = this.convertToIndianFormat(loanAmount);
        this.query.interest = Number(rateOfInterest);
        if (this.yrToggel) {
            this.query.tenureYr = Number(this.temi.value);
        }
        else {
            this.query.tenureMo = Number(this.memi.value);
        }
        let top = Math.pow((1 + monthlyInterestRatio), numberOfMonths);
        let bottom = top - 1;
        let sp = top / bottom;
        let emi = ((loanAmount * monthlyInterestRatio) * sp);
        let full = numberOfMonths * emi;
        let interest = full - loanAmount;
        this.result.emi = this.convertToIndianFormat(emi.toFixed(0));
        this.result.total = this.convertToIndianFormat(full.toFixed(0));
        this.result.interest = this.convertToIndianFormat(interest.toFixed(0));
        this.pieChartData = {
            labels: ['Principal amount', 'Interest amount'],
            datasets: [
                {
                    data: [(_a = this.formatedProductPrice) === null || _a === void 0 ? void 0 : _a.replaceAll(',', ''), (_b = this.result.interest) === null || _b === void 0 ? void 0 : _b.replaceAll(',', '')],
                    backgroundColor: [
                        "#0a0a5f",
                        "#0452FF",
                    ],
                    hoverBackgroundColor: [
                        "#0a0a5f",
                        "#0452FF",
                    ]
                },
            ]
        };
    }
    getYears(n) {
        let newNum = (n + "").split(".");
        return newNum[0] ? Number(newNum[0]) : 0;
    }
    getMonths(n) {
        let newNum = (n + "").split(".");
        return newNum[1] ? Number(newNum[1]) : 0;
    }
    convertToIndianFormat(amount) {
        let x = amount.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], EmiCalculatorComponent.prototype, "productPrice", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], EmiCalculatorComponent.prototype, "closePopup", void 0);
EmiCalculatorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: 'app-emi-calculator',
        templateUrl: './emi-calculator.component.html',
        styleUrls: ['./emi-calculator.component.scss']
    })
], EmiCalculatorComponent);



/***/ }),

/***/ 638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmiCalculatorModule": () => (/* binding */ EmiCalculatorModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(583);
/* harmony import */ var _emi_calculator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(639);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(640);






let EmiCalculatorModule = class EmiCalculatorModule {
};
EmiCalculatorModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_emi_calculator_component__WEBPACK_IMPORTED_MODULE_0__.EmiCalculatorComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            primeng_chart__WEBPACK_IMPORTED_MODULE_5__.ChartModule
        ],
        exports: [_emi_calculator_component__WEBPACK_IMPORTED_MODULE_0__.EmiCalculatorComponent]
    })
], EmiCalculatorModule);



/***/ }),

/***/ 635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(573);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(195);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__);








let ProductDetailsComponent = class ProductDetailsComponent {
    // loading:any
    constructor(previousRouteService, localStorage, router, apiList, dataService, skeletonService, modalService, route, sanitizer, seoservice, canonicalservice, platformId, formBuilder, formErrorService, regexService, toastrService, rootService, spinnerService, cleverService, behaviorService) {
        this.previousRouteService = previousRouteService;
        this.localStorage = localStorage;
        this.router = router;
        this.apiList = apiList;
        this.dataService = dataService;
        this.skeletonService = skeletonService;
        this.modalService = modalService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.seoservice = seoservice;
        this.canonicalservice = canonicalservice;
        this.platformId = platformId;
        this.formBuilder = formBuilder;
        this.formErrorService = formErrorService;
        this.regexService = regexService;
        this.toastrService = toastrService;
        this.rootService = rootService;
        this.spinnerService = spinnerService;
        this.cleverService = cleverService;
        this.behaviorService = behaviorService;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.closeBookingOtpModal = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.productSlider = {
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
            navText: [
                "<img class='nav' src='assets/images/nav-left.webp' alt='nav-left' />",
                "<img class='nav' src='assets/images/nav-right.webp' alt='nav-right'  />",
            ],
            responsive: {
                0: {
                    items: 2,
                },
                400: {
                    items: 3,
                },
                768: {
                    items: 3,
                },
                991: {
                    items: 4,
                },
                1300: {
                    items: 6,
                },
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
            navText: [
                "<img class='nav' src='assets/images/crasual-left.svg'  alt='crasual-left'  />",
                "<img class='nav' src='assets/images/crasual-right.svg'  alt='crasual-right'   />",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                991: {
                    items: 4,
                },
                1300: {
                    items: 4,
                },
            },
        };
        this.varientSlider = {
            loop: false,
            margin: 24,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            autoplay: false,
            nav: true,
            responsiveRefreshRate: 1000000,
            navText: [
                "<img class='nav' src='assets/images/crasual-left.svg'  alt='crasual-left'   />",
                "<img class='nav' src='assets/images/crasual-right.svg'   alt='crasual-right'  />",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                991: {
                    items: 4,
                },
                1300: {
                    items: 4,
                },
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
            navText: [
                "<img class='nav' src='assets/images/crasual-left.svg'  alt='crasual-left'  />",
                "<img class='nav' src='assets/images/crasual-right.svg'  alt='crasual-right'   />",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
            },
        };
        this.reviewSlider = {
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            autoplay: false,
            nav: true,
            responsiveRefreshRate: 1000000,
            navText: [
                "<img class='nav' src='assets/images/crasual-left.svg'  alt='crasual-left'   />",
                "<img class='nav' src='assets/images/crasual-right.svg'   alt='crasual-right'  />",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
            },
        };
        this.showTestimonialList = true;
        this.pagetitle = 'Product Detail';
        this.showExplore = false;
        this.currentPage = 1;
        this.FeedbackData = [];
        this.sendFeedbackData = [];
        this.isshowfeedback = false;
        this.productDetailsData = [];
        this.tab = 'all';
        this.variantsList = [];
        this.showvariantsList = true;
        this.getProductQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.hideElement = false;
        this.videoThumbArray = [];
        this.normalvideoarray = [];
        this.productImages = [];
        this.showImage = true;
        this.showVideo = false;
        this.metatitle = 'Check Prices, Features and Buy Tata Trucks and Buses Online in India | Tata Motors';
        this.metadesc = 'Know about price and features of Tata Ace, Intra, Yodha Pickup, Winger, Magic, Signa, Prima, Ultra, and entire Truck, Tipper, Bus range. Enquire, book and buy online with Tata Motors authorized dealers.';
        this.showDiv = false;
        this.step = 0;
        this.testimonialVideoData = [];
        this.specificationList = [];
        this.keyValueFeature = [];
        this.hideExploreData = [
            {
                lob: 'SCV Cargo'
            },
            {
                lob: 'Pickups'
            },
        ];
        this.isShowFinance = false;
        this.isOfferPopup = false;
        this.OffersList = [];
        this.MainOfferList = [];
        this.isBookTestDrive = false;
        this.breadcrumbList = [];
        this.searchuserData = '';
        this.breadcrumbdata = [];
        this.breadcrumbCurrentpageCheck = false;
        this.btnsendotp = false;
        this.btnProcess = false;
        this.checkOtpValue = false;
        this.isVerifyOtp = false;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.timeLeft = 120;
        this.isTimer = false;
        this.isassistance = false;
        this.isFeedbackFormValid = false;
        this.isQuoteFormValid = false;
        this.drpDisabled = false;
        this.drpDisablednew = true;
        this.showOTPModal = false;
        this.isResendOtp = false;
        this.showTestimonialVideo = false;
        this.showFeedbackDetail = false;
        this.Hidediv = true;
        this.showBreadCrumb = false;
        this.showAddReview = false;
        this.showReviewBtn = true;
        this.ImageName = "";
        this.hasRequiredError = (controlName) => this.formErrorService.hasRequiredError(controlName, this.userFeedbackForm);
        this.hasPatternError = (controlName) => this.formErrorService.hasPatternError(controlName, this.userFeedbackForm);
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
        this.sub.add(this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                if (event.url === '/product-details/:id') {
                    this.hideElement = true;
                }
                else {
                    this.hideElement = false;
                }
            }
        }));
        this.googleAnlyaticsViewPage('click_vehiclelist_viewdetailsbutton', this.pagetitle);
        this.previousUrl = this.previousRouteService.getPreviousUrl();
        this.sub.add(this.behaviorService.isLoggedIn.subscribe((res) => {
            var _a;
            this.isUserLoggedIn = this.rootService.isLoggedIn() ? true : false;
            this.userData = this.rootService.getUserData();
            this.userId = (_a = this.userData) === null || _a === void 0 ? void 0 : _a.id;
            this.setForm(this.userData);
            if (!this.isUserLoggedIn) {
                this.drpDisabled = true;
            }
        }));
    }
    ngOnInit() {
        this.canonicalservice.createCanonicalURL();
        this.showAddReview = false;
        this.getSpecificationValueList();
        try {
            this.cleverService.onPageView(this.pagetitle, this.previousUrl, '');
        }
        catch (_a) { }
        this.sub.add(this.route.params.subscribe((params) => {
            var id = params['id'];
            this.productId = id;
            this.lobId = this.route.snapshot.paramMap.get('lob_name');
            this.pplId = this.route.snapshot.paramMap.get('ppl_name');
            this.modelId = this.route.snapshot.paramMap.get('model');
            //breadcrumb
            if (this.productId) {
                this.product_id = this.productId;
                this.imageUrl = null;
                this.getDetails(this.productId);
                this.rootService.isLoggedIn();
            }
        }));
    }
    getDetails(id) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
        this.avgrating = 0;
        let apiUrl = this.apiList.returnAPI('getVehicleDetail');
        this.sub.add(this.dataService.post(apiUrl, { product_id: id }).subscribe((data) => {
            if (data['success']) {
                this.productDetailsData = data['data'];
                this.metatitle = this.productDetailsData.vc_title
                    ? this.productDetailsData.vc_title
                    : 'Tata Motors Online Sales';
                this.metadesc = this.productDetailsData.vc_description
                    ? this.productDetailsData.vc_description
                    : ' ';
                this.getModel = this.productDetailsData.model;
                this.getvideo_url = this.productDetailsData.video_url_s;
                this.avgrating = this.productDetailsData['rating'];
                if (this.productDetailsData['images']) {
                    if (this.productDetailsData['images'].image_url) {
                        this.productDetailsData['imageUrl'] =
                            this.productDetailsData['images'].image_url;
                        this.productmetaImage = this.productDetailsData['images'].image_url;
                        this.productDetailsData.loaded = false;
                    }
                    else {
                        this.productDetailsData.images
                            .filter((image) => image.is_cover === true)
                            .map((img) => {
                            this.productDetailsData['imageUrl'] = img['image_url'];
                            this.mainImage = this.productDetailsData['imageUrl'];
                            this.productmetaImage = img['image_url'];
                            this.productDetailsData.loaded = false;
                        });
                    }
                }
                this.seo();
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
                    try {
                        var checkvideo = this.productDetailsData.video_url_s[0];
                        if (checkvideo == null ||
                            checkvideo == undefined ||
                            Number.isNaN(checkvideo) ||
                            checkvideo == '' ||
                            checkvideo == 'NA' ||
                            checkvideo == 'N.A') {
                            this.showVideo = false;
                        }
                        else {
                            var vthaumbimage = this.youtube_parser(checkvideo);
                        }
                    }
                    catch (exception) { }
                }
                this.getVariants(this.productDetailsData.pl);
                this.GetTestmonialVideo(this.productDetailsData.ppl, this.productDetailsData.lob);
                this.getFeedbackDetails(this.productDetailsData.vehicle_number, 0);
                this.showExplorebtn();
                this.hidebutton();
                if (this.productDetailsData['images'].length > 0) {
                    for (let i = 0; i < this.productDetailsData['images'].length; i++) {
                        if (this.productDetailsData['images'][i].image_url &&
                            this.productDetailsData['images'][i].image_url.length > 0) {
                            this.productImages.push(this.productDetailsData['images'][i].image_url);
                        }
                    }
                }
                if (this.productDetailsData.images.length >= 1) {
                    this.videotype = 'NormalVideo';
                    for (var i = 0; i < this.productDetailsData.images.length; i++) {
                        let url = this.productDetailsData.images[i].video_url;
                        if (url !== '' && url) {
                            this.bottomvideourl =
                                this.sanitizer.bypassSecurityTrustResourceUrl(url);
                            if (this.normalvideoarray.length == 0) {
                                this.displayvideourl =
                                    this.sanitizer.bypassSecurityTrustResourceUrl(this.productDetailsData.images[i].video_url);
                            }
                            this.normalvideoarray.push(this.bottomvideourl);
                            let img = 'assets/images/button_play_blue.webp';
                            this.videoThumbArray.push(this.formDataVideo(img, this.videotype, this.bottomvideourl));
                        }
                    }
                }
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
                    if (this.productDetailsData.video_url_s) {
                        try {
                            for (let i = 0; i < this.productDetailsData.video_url_s.length; i++) {
                                this.videotype = 'YoutubeVideo';
                                var vthaumbimage = this.youtube_parser(this.productDetailsData.video_url_s[i]);
                                let bottomvideo = 'https://www.youtube.com/embed/' + vthaumbimage + '';
                                this.bottomvideourl =
                                    this.sanitizer.bypassSecurityTrustResourceUrl(bottomvideo);
                                let urllink = 'https://www.youtube.com/embed/' +
                                    this.youtube_parser(this.productDetailsData.video_url_s[0]) +
                                    '';
                                if (this.normalvideoarray.length == 0) {
                                    this.displayvideourl =
                                        this.sanitizer.bypassSecurityTrustResourceUrl(urllink);
                                }
                            }
                            if (this.productDetailsData.video_url_s) {
                                try {
                                    for (let i = 0; i < this.productDetailsData.video_url_s.length; i++) {
                                        this.videotype = 'YoutubeVideo';
                                        var vthaumbimage = this.youtube_parser(this.productDetailsData.video_url_s[i]);
                                        let bottomvideo = 'https://www.youtube.com/embed/' + vthaumbimage + '';
                                        let img = 'https://img.youtube.com/vi/' +
                                            vthaumbimage +
                                            '/mqdefault.jpg';
                                        this.bottomvideourl =
                                            this.sanitizer.bypassSecurityTrustResourceUrl(bottomvideo);
                                        let urllink = 'https://www.youtube.com/embed/' +
                                            this.youtube_parser(this.productDetailsData.video_url_s[0]) +
                                            '';
                                        if (this.normalvideoarray.length == 0) {
                                            this.displayvideourl =
                                                this.sanitizer.bypassSecurityTrustResourceUrl(urllink);
                                        }
                                        this.videoThumbArray.push(this.formDataVideo(img, this.videotype, this.bottomvideourl));
                                    }
                                }
                                catch (exception) { }
                            }
                            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
                                try {
                                    // this.firebaseanalytics.viewPagewithModelsubmodel(
                                    //   'click_vehiclelist_modeldetail',
                                    //   this.pagetitle,
                                    //   this.productDetailsData.model,
                                    //   this.productDetailsData.pl
                                    // );
                                }
                                catch (error) { }
                            }
                        }
                        catch (exception) { }
                    }
                    var vthaumbimage = this.youtube_parser(this.productDetailsData.video_url_s[0]);
                    let bottomvideo = 'https://www.youtube.com/embed/' + vthaumbimage + '';
                    this.urlSafe =
                        this.sanitizer.bypassSecurityTrustResourceUrl(bottomvideo);
                }
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
                    try {
                        // this.firebaseanalytics.viewPagewithModelsubmodel(
                        //   'click_vehiclelist_modeldetail',
                        //   this.pagetitle,
                        //   this.productDetailsData.model,
                        //   this.productDetailsData.pl
                        // );
                        this.cleverService.onProductViewDetails(this.productDetailsData['id'], this.productDetailsData['model'], this.productmetaImage, 'Top Navigation');
                    }
                    catch (error) { }
                }
                this.enableFinanceButton(data['data']);
            }
        }));
    }
    enableFinanceButton(data) {
        const dataFin = this.hideExploreData.find((obj) => (obj === null || obj === void 0 ? void 0 : obj.lob) == (data === null || data === void 0 ? void 0 : data['lob']));
        if ((dataFin === null || dataFin === void 0 ? void 0 : dataFin.lob) == data['lob']) {
            this.isShowFinance = true;
        }
        else {
            this.isShowFinance = false;
        }
    }
    getKeyValueFeatureData(lob, pl) {
        this.keyValueFeature.filter((value) => {
            if (value.pl_name == pl)
                this.keyValueFeature = value;
        });
        if (this.keyValueFeature.length > 0) {
            this.specificationList.filter((value) => {
                if (value.lob_name == lob)
                    this.keyValueFeature = value;
            });
        }
    }
    getSpecificationValueList() {
        this.sub.add(this.dataService.getS3File('Specification-Image-List.txt')
            .subscribe({
            next: (response) => { this.specificationList = response.data.SpecificationList; },
            error: () => { },
            complete: () => {
                this.sub.add(this.dataService.getS3File('keyValueFeature.txt')
                    .subscribe({
                    next: (response) => { var _a; this.keyValueFeature = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.KeyValueFeatureList; },
                    error: () => { },
                    complete: () => {
                        this.getKeyValueFeatureData(this.productDetailsData.lob, this.productDetailsData.pl);
                    }
                }));
            }
        }));
    }
    getUrl(lob) {
        var _a, _b;
        if (lob && lob !== 'undefined') {
            let imageData = this.specificationList.filter((value) => {
                if (value.lob_name == lob) {
                    return value;
                }
            });
            if (imageData.length > 0) {
                this.specificationImg = (_a = imageData[0]) === null || _a === void 0 ? void 0 : _a.img;
                return 'url(' + ((_b = imageData[0]) === null || _b === void 0 ? void 0 : _b.img) + ')';
            }
            else {
                this.specificationImg = 'assets/images/specification-backimages/spacification-bg.webp';
                return 'url(assets/images/specification-backimages/spacification-bg.webp)';
            }
        }
    }
    showExplorebtn() {
        if (this.getModel == 'Intra V30' ||
            this.getModel == 'Tata Ultra 3021.S' ||
            this.getModel == 'TATA ULTRA 1918.T BS6') {
            this.showExplore = true;
        }
        else {
            this.showExplore = false;
        }
    }
    hidebutton() {
        if (this.getvideo_url == '' ||
            this.getvideo_url == null ||
            this.getvideo_url == undefined ||
            Number.isNaN(this.getvideo_url) ||
            this.getvideo_url == 'NA' ||
            this.getvideo_url == 'N.A') {
            this.Hidediv = false;
        }
        else {
            this.Hidediv = true;
        }
    }
    // getOffers(vehicleData: any, callType: any) {
    //   let data: any;
    //   data = {
    //     top: '10',
    //     groupBy: 'financier',
    //   };
    //   if (callType == 0) {
    //     data.pl = vehicleData.pl
    //   }
    //   let apiUrl = this.apiList.returnAPI('getgenericOffers');
    //   this.sub.add(this.dataService.get(apiUrl, data).subscribe(
    //     (response) => {
    //       if (response) {
    //         this.OffersList = [];
    //         let OffersResponse: any = [];
    //         OffersResponse = response;
    //         // let OffersListKey  : any = Object.keys(OffersResponse);
    //         let OffersListValue: any = [];
    //         OffersListValue = Object.values(OffersResponse);
    //         let OffersListValueEntries: any = [];
    //         OffersListValueEntries = Object.entries(OffersResponse);
    //         let finalofferList: any = [];
    //         for (let i = 0; i < OffersListValueEntries.length; i++) {
    //           for (let k = 0; k < OffersListValueEntries[i][1].length; k++) {
    //             finalofferList = [];
    //             finalofferList = OffersListValueEntries[i][1][k];
    //             finalofferList.financierName = OffersListValueEntries[i][0];
    //             this.OffersList.push(finalofferList);
    //           }
    //         }
    //         this.MainOfferList = this.OffersList;
    //         if (this.MainOfferList.length == 0 && vehicleData?.sub_lob == 'SCV Pickups') {
    //           // this.getOffers(null, 1)
    //         }
    //       } else {
    //         if (this.MainOfferList.length == 0 && vehicleData?.sub_lob == 'SCV Pickups') {
    //           // this.getOffers(null, 1)
    //         }
    //       }
    //     },
    //     () => { }
    //   ));
    // }
    // exploreOffers(item: any) {
    //   let apiUrl = this.apiList.returnAPI('getVehicleInfo');
    //   let reqdata;
    //   if(item.vehiclePl !== 'All'){
    //     reqdata = {pl_name: item.vehiclePl}
    //   }else if( item.lob !== 'All' ){
    //     reqdata = {lob_name: item.lob }
    //   }else{
    //     reqdata = {lob_name: 'SCV Pickups'}
    //   }
    //   this.sub.add(this.dataService
    //     .post(apiUrl, reqdata)
    //     .subscribe((data) => {
    //       if (data['success']) {
    //         let productData: any = data['data'][0];
    //         if(item.vehiclePl !== 'All'){
    //         this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //           return false;
    //         };
    //         let lob = productData.lob;
    //         let pplname = productData.ppl
    //           .replace(/\//g, '-')
    //           .replace(/\+/g, '-')
    //           .replace(/\./g, '-')
    //           .toLowerCase();
    //         let modelname = productData.pl
    //           .replace(/\//g, '-')
    //           .replace(/\s/g, '-')
    //           .toLowerCase();
    //         let productid = productData.id;
    //         let currentUrl =
    //           `/lead-booking/` +
    //           lob.replace(/\s/g, '-').toLowerCase() +
    //           `/` +
    //           pplname.replace(/\s/g, '-').toLowerCase() +
    //           `/` +
    //           modelname.replace(/\s/g, '-').toLowerCase() +
    //           `/` +
    //           productid;
    //         // return currentUrl;
    //         this.router.navigateByUrl(currentUrl).then(() => {
    //           this.router.navigated = false;
    //           this.router.navigate([this.router.url]);
    //         });
    //        } else{
    //           let currentUrl = `/product-list/` + reqdata.lob_name.replace(/\s/g, "-").toLowerCase();
    //         // return currentUrl;
    //         this.router.navigateByUrl(currentUrl)
    //           .then(() => {
    //             this.router.navigated = false;
    //             this.router.navigate([this.router.url]);
    //           });
    //         }
    //       } else {
    //       }
    //     }));
    // }
    selectThumbVideo(item, flag) {
        if (flag == 0) {
            this.displayvideourl = item;
        }
        else {
            this.displayvideourl = item.video_url;
        }
    }
    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    formDataVideo(thaumbimage, type, video_url) {
        const userData = {};
        userData.thaumbimage = thaumbimage;
        userData.videoType = type;
        userData.video_url = video_url;
        return userData;
    }
    getVariants(pl_name) {
        let apiUrl = this.apiList.returnAPI('getVehicleInfo');
        this.sub.add(this.dataService.post(apiUrl, { pl_name: pl_name }).subscribe((data) => {
            if (data['success']) {
                let variantsData = data['data'];
                variantsData.forEach((value, index) => {
                    if (value.id == this.productId)
                        variantsData.splice(index, 1);
                });
                this.showvariantsList = variantsData.length > 0 ? true : false;
                this.variantsList = variantsData;
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
                    let currentUrl = `/product-details/` + this.productDetailsData.lob.replace(/\s/g, '-').toLowerCase() +
                        `/` + this.productDetailsData.ppl.replace(/\s/g, '-').toLowerCase() +
                        `/` + this.productDetailsData.model.replace(/\s/g, '-').toLowerCase() +
                        `/` + this.productDetailsData.id;
                    this.breadcrumbList = {
                        label: this.productDetailsData.model,
                        url: currentUrl,
                        pageName: 'product-details',
                        params: {
                            lob_name: this.productDetailsData.lob,
                            ppl_name: this.productDetailsData.ppl,
                            modal_name: this.productDetailsData.model,
                        },
                    };
                    this.breadcrumbdata = this.localStorage.getItem('localBreadCrumb')
                        ? JSON.parse(this.localStorage.getItem('localBreadCrumb'))
                        : [];
                    for (var i = 0; i < this.breadcrumbdata.length; i++) {
                        if (this.breadcrumbdata[i].pageName == 'product-details') {
                            this.breadcrumbCurrentpageCheck = true;
                        }
                    }
                    if (!this.breadcrumbCurrentpageCheck) {
                        this.breadcrumbdata.push(this.breadcrumbList);
                        this.localStorage.setItem('localBreadCrumb', JSON.stringify(this.breadcrumbdata));
                    }
                    this.showBreadCrumb = true;
                }
            }
            else {
                this.variantsList = [];
                this.breadcrumbList = [];
                this.showvariantsList = false;
            }
        }));
    }
    notAllowSpace(event) {
        if (event.target.selectionStart === 0 && event.which === 32) {
            event.preventDefault();
        }
    }
    getFeedbackDetails(VCno, offset) {
        this.showFeedbackDetail = true;
        /// issue in data.range
        this.FeedbackData = [];
        this.totalreview = 0;
        let apiUrl = this.apiList.returnAPI('getFeedbackData');
        this.sub.add(this.dataService
            .post(apiUrl, { vc: VCno, offset: offset })
            .subscribe((response) => {
            if (response['success']) {
                this.FeedbackData = response['data'];
                for (var i = 0; i < this.FeedbackData.length; i++) {
                    if (this.userId == this.FeedbackData[i].user) {
                        this.showAddReview = false;
                        this.showReviewBtn = false;
                    }
                }
                this.totalreview = response.range_info.total_count;
                this.totalrecord = response.range_info.total_count;
            }
            else {
                this.addreview();
                this.FeedbackData = [];
            }
        }));
    }
    selectThumbVideos(index) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            var vthaumbimage = this.youtube_parser(this.productDetailsData.video_url_s[index]);
            let bottomvideo = 'https://www.youtube.com/embed/' + vthaumbimage + '';
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(bottomvideo);
        }
    }
    youtube_parser(url) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
            var match = url === null || url === void 0 ? void 0 : url.match(regExp);
            return match && match[1].length == 11 ? match[1] : false;
        }
    }
    openPopup() {
        this.openBookTestDriveModal = this.modalService.show(this.BookTestDriveModal, {
            class: 'modal-dialog-centered modal-lg',
            backdrop: 'static',
        });
    }
    seo() {
        this.seoservice.updateTitle(this.metatitle);
        this.seoservice.updateMetaTag('description', null, this.metadesc);
        this.seoservice.updateMetaTag(null, 'og:locale', 'en_US');
        this.seoservice.updateMetaTag(null, 'og:type', 'Website');
        this.seoservice.updateMetaTag(null, 'og:title', this.metatitle);
        this.seoservice.updateMetaTag(null, 'og:description', this.metadesc);
        this.seoservice.updateMetaTag(null, 'og:url', _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + this.router.url);
        this.seoservice.updateMetaTag(null, 'og:site_name', 'Tata OSP');
        this.seoservice.updateMetaTag(null, 'og:image', this.productmetaImage ? this.productmetaImage : ' ');
        this.seoservice.updateMetaTag(null, 'og:image:width', '1200');
        this.seoservice.updateMetaTag(null, 'og:image:height', '628');
    }
    googleAnlyaticsViewPage(eventname, pagename) {
        try {
            // this.firebaseanalytics.viewPage(eventname, pagename);
        }
        catch (error) { }
    }
    googleAnlyaticsViewPageWithModelandSubmodel(eventname, pagename, model, submodel) {
        try {
            // this.firebaseanalytics.viewPagewithModelsubmodel(eventname, pagename, model, submodel);
        }
        catch (error) { }
    }
    onSubmit() {
        if (this.userFeedbackForm.status === 'INVALID') {
            this.formErrorService.displayFormErrors(this.userFeedbackForm);
            return;
        }
        else {
            this.isQuoteFormValid = true;
            this.isFeedbackFormValid = true;
            this.verifyOTP();
        }
    }
    newForm() {
        this.userFeedbackForm = this.formBuilder.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Name)],],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Name)],],
            email_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Email)],],
            mobile_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Phone)],],
            feedback: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],],
            file: ['',],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Name)],],
            rating: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    setForm(userData) {
        this.userFeedbackForm = this.formBuilder.group({
            first_name: [
                userData === null || userData === void 0 ? void 0 : userData.first_name,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Name)],
            ],
            last_name: [
                userData === null || userData === void 0 ? void 0 : userData.last_name,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Name)],
            ],
            email_id: [
                userData === null || userData === void 0 ? void 0 : userData.email_id,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Email)],
            ],
            mobile_number: [
                userData === null || userData === void 0 ? void 0 : userData.mobile_number,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Phone)],
            ],
            category: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Name)],
            ],
            feedback: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            ],
            rating: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            file: ['']
        });
    }
    sendOTP(otpCallType) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            const type = this.userFeedbackForm.get('mobile_number');
            type.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Phone),
            ]);
            type.updateValueAndValidity();
            if (type.status === 'INVALID') {
                this.toastrService.error('Mobile no. required');
                return;
            }
            else {
                if (this.userFeedbackForm.value.mobile_number) {
                    this.timeLeft = 120;
                    let apiUrl = this.apiList.returnAPI('sendOTP');
                    this.sub.add(this.dataService
                        .post(apiUrl, {
                        mobile_number: this.userFeedbackForm.value.mobile_number,
                    })
                        .subscribe({
                        next: (response) => {
                            if (response.data.user) {
                                this.showOTPModal = true;
                                this.isFeedbackFormValid = false;
                                this.isQuoteFormValid = true;
                                this.startTimer(120);
                                this.toastrService.success(response.data.msg);
                                this.localStorage.setItem('page', 'review');
                                if (otpCallType == "resend") {
                                    this.isResendOtp = true;
                                }
                                else {
                                    this.otpOpenModal = this.modalService.show(this.otpReviewRefModal, {
                                        class: "modal-dialog-centered modal-md",
                                        backdrop: "static",
                                    });
                                    this.isResendOtp = false;
                                }
                            }
                            else {
                                this.isQuoteFormValid = false;
                                this.isFeedbackFormValid = false;
                                this.toastrService.error('This mobile number is not registered.');
                            }
                        }, error: (error) => {
                            this.spinnerService.hide();
                            this.toastrService.error('Your account is locked due to multiple incorrect OTP. Please try after sometime');
                        },
                    }));
                }
                else {
                    if (this.userFeedbackForm.value.mobile_number) {
                        $('.quote-popup').removeClass('is-hidden');
                        $('.quote-popup--login-popup').removeClass('is-hidden');
                        this.timeLeft = 120;
                        let apiUrl = this.apiList.returnAPI('sendOTP');
                        this.sub.add(this.dataService
                            .post(apiUrl, {
                            mobile_number: this.userFeedbackForm.value.mobile_number,
                        })
                            .subscribe({
                            next: (response) => {
                                if (response.success) {
                                    this.isFeedbackFormValid = false;
                                    this.isQuoteFormValid = true;
                                    this.startTimer(120);
                                    this.toastrService.success(response.data.msg);
                                }
                                else {
                                    this.isQuoteFormValid = false;
                                    this.isFeedbackFormValid = false;
                                }
                            },
                            error: (error) => {
                                this.spinnerService.hide();
                                this.toastrService.error('Your account is locked due to multiple incorrect OTP. Please try after sometime');
                            },
                        }));
                    }
                    else {
                        this.isFeedbackFormValid = false;
                        const type = this.userFeedbackForm.get('mobile_number');
                        type.setValidators([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.regexService.Phone),
                        ]);
                        type.updateValueAndValidity();
                    }
                }
            }
        }
    }
    onDiscard() {
        this.isassistance = false;
        this.isVerifyOtp = false;
        this.isFeedbackFormValid = false;
        this.isQuoteFormValid = false;
        this.otpInputValue = '';
        this.userFeedbackForm.patchValue({
            category: '',
            feedback: '',
            rating: '',
        });
        const res = this.rootService.isLoggedIn();
        if (res) {
            this.drpDisabled = false;
            this.btnProcess = true;
            this.userData = [];
            this.userData = this.rootService.getUser()
                ? JSON.parse(this.rootService.getUser())
                : null;
            this.setForm(this.userData);
        }
        else {
            this.btnProcess = false;
            this.drpDisabled = true;
            this.newForm();
        }
    }
    startTimer(timeLeft) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            this.timeLeft = timeLeft;
            const source = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(1000, 1000);
            this.sub.add(source.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy)).subscribe((val) => {
                const timer1 = val;
                if (timer1 >= 0 && timer1 < 121) {
                    if (this.timeLeft > 0) {
                        this.isTimer = true;
                        this.m = Math.floor(this.timeLeft / 60);
                        this.s = this.timeLeft % 60;
                        this.m = this.m < 10 ? '0' + this.m : this.m;
                        this.s = this.s < 10 ? '0' + this.s : this.s;
                        this.timeLeft--;
                    }
                    else {
                        this.timeLeft = 0;
                        this.m = 0;
                        this.s = 0;
                        this.isTimer = false;
                    }
                }
                else {
                    this.destroy.next('');
                    this.destroy.complete();
                }
            }));
        }
    }
    verifyNewOTP(data) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            this.isFeedbackFormValid = false;
            this.isQuoteFormValid = false;
            let apiUrl = this.apiList.returnAPI('login');
            this.sub.add(this.dataService
                .post(apiUrl, {
                mobile_number: this.userFeedbackForm.value.mobile_number,
                otp_number: data,
            })
                .subscribe({
                next: (response) => {
                    this.drpDisabled = false;
                    if (response.success) {
                        this.otpOpenModal.hide();
                        this.btnsendotp = true;
                        this.isUserType = 'OLD';
                        this.drpDisabled = false;
                        this.toastrService.success('Login Successful');
                        this.rootService.setToken(response['data'].token.token);
                        this.rootService.loginUser(response['data']);
                        this.rootService.setUser(response['data']);
                        this.rootService.setUserId(response['data']);
                        const res = this.rootService.isLoggedIn();
                        for (var i = 0; i < this.FeedbackData.length; i++) {
                            if (response['data'].id == this.FeedbackData[i].user) {
                                this.showAddReview = false;
                                this.showReviewBtn = false;
                            }
                        }
                        if (res) {
                            this.btnProcess = true;
                            this.drpDisabled = false;
                            this.userData = [];
                            this.userData = this.rootService.getUser()
                                ? JSON.parse(this.rootService.getUser())
                                : null;
                            this.setForm(this.userData);
                        }
                        else {
                            this.btnsendotp = true;
                            this.userData = 'OLD_USER';
                            this.newForm();
                            this.drpDisabled = true;
                        }
                    }
                    else {
                        this.isUserType = 'NEW';
                        this.btnsendotp = true;
                        this.btnProcess = true;
                        this.drpDisabled = false;
                        if (response.data.msg ===
                            'This mobile number is not registered. Please submit your interest using your mobile number to register.') {
                            this.btnsendotp = false;
                            this.userData = [];
                        }
                        else {
                            this.isVerifyOtp = false;
                            this.isQuoteFormValid = true;
                        }
                        this.toastrService.error(response.data.msg);
                        this.startTimer(0);
                        this.startTimer(0);
                    }
                },
                error: (error) => {
                    this.spinnerService.hide();
                    this.toastrService.error('Your account is locked due to multiple incorrect OTP. Please try after sometime');
                },
                complete: () => {
                    this.startTimer(0);
                }
            }));
        }
    }
    addreview() {
        this.showAddReview = true;
        this.showReviewBtn = false;
    }
    verifyOTP() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            if (!this.userData) {
                let formData = new FormData();
                formData.append("vc", this.productDetailsData.vehicle_number);
                formData.append("model", this.productDetailsData.model);
                formData.append("mobile_number", this.userFeedbackForm.value.mobile_number);
                formData.append("email_id", this.userFeedbackForm.value.email_id);
                formData.append("first_name", this.userFeedbackForm.value.first_name);
                formData.append("last_name", this.userFeedbackForm.value.last_name);
                formData.append("feedback", this.userFeedbackForm.value.feedback);
                formData.append("category", this.userFeedbackForm.value.category);
                formData.append("rating", this.userFeedbackForm.value.rating);
                formData.append("feedback_image", this.imgage ? this.imgage : '');
                this.spinnerService.show();
                let apiUrl = this.apiList.returnAPI('registerAddFeedback');
                this.sub.add(this.dataService.post(apiUrl, formData).subscribe({
                    next: (response) => {
                        if (response.success) {
                            this.spinnerService.hide();
                            this.isFeedbackFormValid = false;
                            this.isVerifyOtp = true;
                            this.otpInputValue = '';
                            this.imageSrc = '';
                            this.drpDisabled = false;
                            this.userFeedbackForm.patchValue({
                                category: '',
                                feedback: '',
                                rating: '',
                            });
                            this.toastrService.success(response.success);
                            this.showAddReview = false;
                            this.showReviewBtn = true;
                        }
                        else {
                            this.isVerifyOtp = false;
                            this.startTimer(0);
                        }
                    },
                    error: (error) => {
                        this.spinnerService.hide();
                        this.drpDisabled = false;
                        this.startTimer(0);
                    }
                }));
            }
            else {
                let formData = new FormData();
                formData.append("mobile_number", this.userFeedbackForm.value.mobile_number);
                formData.append("email_id", this.userFeedbackForm.value.email_id);
                formData.append("first_name", this.userFeedbackForm.value.first_name);
                formData.append("last_name", this.userFeedbackForm.value.last_name);
                formData.append("feedback", this.userFeedbackForm.value.feedback);
                formData.append("category", this.userFeedbackForm.value.category);
                formData.append("rating", this.userFeedbackForm.value.rating);
                formData.append("feedback_image", this.imgage ? this.imgage : '');
                formData.append("vc", this.productDetailsData.vehicle_number);
                formData.append("model", this.productDetailsData.model);
                this.spinnerService.show();
                let flag;
                let apiUrl = this.apiList.returnAPI('loginAddFeedBack');
                this.sub.add(this.dataService.post(apiUrl, formData).subscribe({
                    next: (response) => {
                        if (response.success) {
                            this.sendFeedbackData = response['data'];
                            for (var i = 0; i < this.FeedbackData.length; i++) {
                                if (this.userId == this.FeedbackData[i].user) {
                                    flag = true;
                                }
                            }
                            if (!flag) {
                                this.showAddReview = false;
                                this.showReviewBtn = true;
                            }
                            if (this.FeedbackData.length == 0) {
                                this.showAddReview = true;
                                this.imageSrc = "";
                            }
                            this.imageSrc = '';
                            this.userFeedbackForm.reset();
                            this.isVerifyOtp = true;
                            this.spinnerService.hide();
                            this.isFeedbackFormValid = false;
                            this.otpInputValue = '';
                            this.drpDisabled = false;
                            this.setForm(this.userData);
                            this.toastrService.success('Thank you for sharing your valuable feedback.');
                        }
                        else {
                            this.spinnerService.hide();
                            this.isVerifyOtp = false;
                            this.startTimer(0);
                        }
                    },
                    error: (error) => {
                        this.spinnerService.hide();
                        this.startTimer(0);
                    }
                }));
            }
        }
    }
    OTPChecker(data) {
        if (data.status == 'back') {
            this.showOTPModal = false;
        }
        else if (data.status == 'resend') {
            this.sendOTP("resend");
        }
        else if (data.status == 'timerStopped') {
            this.isResendOtp = false;
        }
        else {
            this.verifyNewOTP(data.value);
        }
    }
    OTPverificationdiscard() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            $('.quote-popup--login-popup').addClass('is-hidden');
        }
    }
    GetTestmonialVideo(ppl, lob) {
        this.showTestimonialVideo = true;
        var jsn1 = {
            type_of_testimonial: '',
            offset: 0,
            size: 10,
            ppl: ppl ? ppl.replace(/\s/g, '-').toLowerCase() : '',
            lob: lob ? lob.replace(/\s/g, '-').toLowerCase() : '',
        };
        let apiUrl = this.apiList.returnAPI('getTestimonials');
        this.sub.add(this.dataService.post(apiUrl, jsn1).subscribe((response) => {
            if (response.success) {
                const videodata = response.data;
                this.showTestimonialList = videodata.length > 0 ? true : false;
                for (var k = 0; k < videodata.length; k++) {
                    try {
                        if (videodata[k].video_url != '') {
                            let urls = videodata[k]['video_url'];
                            this.testSafeUrl =
                                this.sanitizer.bypassSecurityTrustResourceUrl(urls);
                            var vthaumbimage = this.youtube_parser(urls);
                            let img = 'https://img.youtube.com/vi/' +
                                vthaumbimage +
                                '/mqdefault.jpg';
                            this.testimonialVideoData.push(this.formatDATAVideo(videodata[k]['name'], videodata[k]['image_url'], this.testSafeUrl, videodata[k]['designation'], img, videodata[k].model, videodata[k].description, videodata[k].application));
                        }
                        else if (videodata[k].yt_url) {
                            let img;
                            let urls = videodata[k]['yt_url'];
                            var vthaumbimage = this.youtube_parser(urls);
                            img = 'https://img.youtube.com/vi/' + vthaumbimage + '/mqdefault.jpg';
                            let videos = 'https://www.youtube.com/embed/' + vthaumbimage + '?autoplay=0&loop=1&autopause=0';
                            this.testSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videos);
                            this.testimonialVideoData.push(this.formatDATAVideo(videodata[k]['name'], videodata[k]['image_url'], this.testSafeUrl, videodata[k]['designation'], img, videodata[k].model, videodata[k].description, videodata[k].application));
                        }
                        else {
                            this.testimonialVideoData.push(this.formatDATAVideo(videodata[k]['name'], videodata[k]['image_url'], '', videodata[k]['designation'], '', videodata[k].model, videodata[k].description, videodata[k].application));
                        }
                    }
                    catch (exception) { }
                }
            }
            else {
                this.showTestimonialList = false;
            }
        }));
    }
    OpenVideo(obj) {
        this.videoInfo = obj;
        this.showTestimonialVdoModal = this.modalService.show(this.showTestimonial, {
            class: 'modal-dialog  modal-lg modal-dialog-centered',
            backdrop: 'static',
        });
        this.video_urls = obj.video_url;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(obj.video_url);
        // this.firebaseanalytics.videoAndServices(
        //   'click_home_videos',
        //   this.pagetitle,
        //   obj.model,
        //   ''
        // );
    }
    closeModal(event) {
        this.showTestimonialVdoModal.hide();
    }
    formatDATAVideo(name, image_url, video_url, designation, thaumbimage, model, description, application) {
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
    checkValidation(otp) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            if (otp) {
                if (!/^[1-9][0-9]{5}$/.test(otp)) {
                    return (this.checkOtpValue = true);
                }
                return (this.checkOtpValue = false);
            }
            else {
                return (this.checkOtpValue = false);
            }
        }
    }
    redirectCompare(productDetailsData) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            // this.firebaseanalytics.viewPagewithModelsubmodel(
            //   'click_vehicledetails_comparebutton',
            //   this.pagetitle,
            //   productDetailsData.model,
            //   productDetailsData.pl
            // );
            this.localStorage.setItem('productDetailsData', JSON.stringify(productDetailsData));
            let currentUrl = `/` + 'compare';
            this.router.navigateByUrl(currentUrl);
        }
    }
    ClickBookNow(productDetailsData, callType) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            // let event = callType == 'Book Now' ? "click_vehiclelist_booknowbutton" : "click_vehiclelist_fnibutton";
            // this.firebaseanalytics.viewPagewithModelsubmodel(event, this.pagetitle,
            //   productDetailsData.model, productDetailsData.pl);
            try {
                this.cleverService.onBookNowButtonClick(productDetailsData["id"], productDetailsData["model"], this.productmetaImage, "Top Navigation");
            }
            catch (_a) { }
        }
    }
    onProductDetailsPageButtonClick(ButtonName, data) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            try {
                this.cleverService.onProductDetailsPageButtonClick(ButtonName, data['id'], data['model'], this.productmetaImage, 'Top Navigation');
            }
            catch (ex) { }
        }
    }
    gotoPage(page, productid, lob, ppl, model) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            if (model && ppl && lob) {
                this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                let modelname = model === null || model === void 0 ? void 0 : model.replace(/\//g, '-').replace(/\+/g, '-').replace(/\./g, '-').toLowerCase();
                let pplname = ppl === null || ppl === void 0 ? void 0 : ppl.replace(/\//g, '-').replace(/\s/g, '-').replace('---', '-').replace('--', '-').toLowerCase();
                let lobname = lob == 'Icv Trucks'
                    ? 'trucks'
                    : lob === null || lob === void 0 ? void 0 : lob.replace(/\s/g, '-').toLowerCase();
                let pagename;
                if (page == 'Book Now') {
                    pagename = 'lead-booking';
                }
                else if (page == 'Book Test Drive') {
                    pagename = 'book-test-drive';
                }
                else if (page == 'EXPLORE FINANCING') {
                    pagename = 'lead-finance';
                }
                // let pagename = page == 'Book Now' ? 'lead-booking' : 'Book Test Drive' ? 'book-test-drive' : 'EXPLORE FINANCING' ?  'lead-finance' : "";
                let currentUrl = `/` +
                    pagename +
                    `/` +
                    lobname +
                    `/` +
                    pplname +
                    `/` +
                    modelname.replace(/\s/g, '-').toLowerCase() +
                    `/` +
                    productid;
                return currentUrl;
            }
        }
    }
    openPage(data, type) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            var currentUrl;
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
            };
            let modelname = (((data === null || data === void 0 ? void 0 : data.model.replace(/\//g, "-")).replace(/\+/g, "-")).replace(/\./g, "-")).toLowerCase();
            let pplname = ((data === null || data === void 0 ? void 0 : data.ppl.replace(/\//g, "-")).replace(/\s/g, "-")).toLowerCase();
            let lobname = (data === null || data === void 0 ? void 0 : data.lob.replace(/\s/g, "-").toLowerCase()) == 'icv-trucks' ? 'trucks' : data.lob.replace(/\s/g, "-").toLowerCase();
            if (type == 'viewDetail') {
                //   try{
                //   this.firebaseanalytics.MenuPlPpl(
                //     'product-detail',
                //     data.lob,
                //     data.ppl,
                //     data.model,
                //     this.pagetitle
                //   );
                // } catch (error) { }
                currentUrl =
                    `/product-details/` +
                        lobname +
                        `/` +
                        pplname +
                        `/` +
                        modelname.replace(/\s/g, '-').toLowerCase() +
                        `/` +
                        data.id;
            }
            else {
                currentUrl =
                    `/lead-booking/` +
                        lobname +
                        `/` +
                        pplname +
                        `/` +
                        modelname.replace(/\s/g, '-').toLowerCase() +
                        `/` +
                        data.id;
            }
            return currentUrl;
        }
    }
    onFileChange(event) {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            if (file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/jpg" && file.type !== "image/webp") {
                this.imageSrc = '';
                this.imgage = "";
                this.userFeedbackForm.controls['file'].setValue('');
                this.toastrService.error('Selected file format should be "png","Jpg", "jpeg" or "webp"');
                return;
            }
            else {
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.imageSrc = reader.result;
                };
            }
        }
        this.imageFile(event);
    }
    imageFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event) => {
                this.ImageName = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
            this.imgage = event.target.files[0];
        }
        this.imageSrc = "";
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)()
], ProductDetailsComponent.prototype, "show", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], ProductDetailsComponent.prototype, "closeBookingOtpModal", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)()
], ProductDetailsComponent.prototype, "loading", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild)('videoPlayer', { static: false })
], ProductDetailsComponent.prototype, "videoPlayer", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild)('canvas', { static: false })
], ProductDetailsComponent.prototype, "canvas", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], ProductDetailsComponent.prototype, "getProductQuote", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild)('showTestimonial', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef, static: false })
], ProductDetailsComponent.prototype, "showTestimonial", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild)('otpReviewRefModal', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef, static: false })
], ProductDetailsComponent.prototype, "otpReviewRefModal", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild)('BookTestDriveModal', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef, static: false })
], ProductDetailsComponent.prototype, "BookTestDriveModal", void 0);
ProductDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-product-details',
        templateUrl: './product-details.component.html',
        styleUrls: ['./product-details.component.scss'],
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__param)(11, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID))
], ProductDetailsComponent);



/***/ }),

/***/ 634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsModule": () => (/* binding */ ProductDetailsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(193);
/* harmony import */ var _product_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(635);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(619);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(573);
/* harmony import */ var _Modals_book_test_drive_book_test_drive_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(636);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(583);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(587);
/* harmony import */ var _emi_calculator_emi_calculator_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(638);
/* harmony import */ var _Modals_get_otp_modal_get_otp_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(584);
/* harmony import */ var _Modals_modals_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(615);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(590);
/* harmony import */ var ngx_skeleton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(620);
/* harmony import */ var _Static_Pages_services_services_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(621);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(650);
/* harmony import */ var _Hotspot_intra_v30_intra_v30_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(644);
/* harmony import */ var _Hotspot_ultra_t_ultra_t_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(646);
/* harmony import */ var _Hotspot_ultra_ultra_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(648);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(628);







// import { NgxStarRatingModule } from "ngx-star-rating";













const routes = [{ path: '', component: _product_details_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsComponent }];
let ProductDetailsModule = class ProductDetailsModule {
};
ProductDetailsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [
            _product_details_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule, _Modals_book_test_drive_book_test_drive_module__WEBPACK_IMPORTED_MODULE_1__.BookTestDriveModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbRatingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_16__.NgOtpInputModule, _Hotspot_intra_v30_intra_v30_module__WEBPACK_IMPORTED_MODULE_6__.IntraV30Module, _Hotspot_ultra_t_ultra_t_module__WEBPACK_IMPORTED_MODULE_7__.UltraTModule, _Hotspot_ultra_ultra_module__WEBPACK_IMPORTED_MODULE_8__.UltraModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
            _emi_calculator_emi_calculator_module__WEBPACK_IMPORTED_MODULE_2__.EmiCalculatorModule,
            _Modals_get_otp_modal_get_otp_modal_module__WEBPACK_IMPORTED_MODULE_3__.GetOtpModalModule, _Modals_modals_module__WEBPACK_IMPORTED_MODULE_4__.ModalsModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__.ModalModule.forRoot(), ngx_skeleton__WEBPACK_IMPORTED_MODULE_18__.NgxSkeletonModule, _Static_Pages_services_services_module__WEBPACK_IMPORTED_MODULE_5__.ServicesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(routes)
        ],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__.BsModalService],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_11__.CUSTOM_ELEMENTS_SCHEMA],
    })
], ProductDetailsModule);



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