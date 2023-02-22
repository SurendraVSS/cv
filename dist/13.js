"use strict";
exports.id = 13;
exports.ids = [13];
exports.modules = {

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingRoutingModule": () => (/* binding */ BookingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(573);
/* harmony import */ var _booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(715);




const routes = [
    { path: 'lead-booking', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent, data: { title: '', breadcrumb: '' } },
    { path: 'lead-finance', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent, data: { title: '', breadcrumb: '' } },
    { path: 'lead-booking/:id', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent, data: { title: '', breadcrumb: '' } },
    { path: 'lead-booking/:lob_name/:ppl_name/:model/:id', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent, data: { title: '', breadcrumb: '' } },
    { path: 'lead-booking/:lob_name/:ppl_name/:model/:id/:rowID', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent, data: { title: '', breadcrumb: '' } },
    { path: 'lead-finance', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent, data: { title: '', breadcrumb: '' } },
    { path: 'lead-finance/:id', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent, data: { title: '', breadcrumb: '' } },
    { path: 'lead-finance/:lob_name/:ppl_name/:model/:id', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent, data: { title: '', breadcrumb: '' } },
    { path: 'book-test-drive/:lob_name/:ppl_name/:model/:id', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent, data: { title: '', breadcrumb: '' } },
];
let BookingRoutingModule = class BookingRoutingModule {
};
BookingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], BookingRoutingModule);



/***/ }),

/***/ 715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingComponent": () => (/* binding */ BookingComponent),
/* harmony export */   "PaymentResponse": () => (/* binding */ PaymentResponse)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(573);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(195);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_2__);







let BookingComponent = class BookingComponent {
    constructor(bsModal, 
    // private firebaseanalytics: AnalyticsSharedService,
    localStorage, dataService, ngZone, apiList, winRef, behaviorService, formBuilder, formErrorService, regexService, toastrService, rootService, router, route, cleverService, previousRouteService, spinnerService, platformId) {
        this.bsModal = bsModal;
        this.localStorage = localStorage;
        this.dataService = dataService;
        this.ngZone = ngZone;
        this.apiList = apiList;
        this.winRef = winRef;
        this.behaviorService = behaviorService;
        this.formBuilder = formBuilder;
        this.formErrorService = formErrorService;
        this.regexService = regexService;
        this.toastrService = toastrService;
        this.rootService = rootService;
        this.router = router;
        this.route = route;
        this.cleverService = cleverService;
        this.previousRouteService = previousRouteService;
        this.spinnerService = spinnerService;
        this.platformId = platformId;
        this.exchngvc = true;
        this.disableSubmitButton = false;
        this.showOTPModal = false;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.btnsendotp = false;
        this.isconfirm = false;
        this.isProcess = false;
        this.btnProcess = false;
        this.isassistance = false;
        this.drpDisabled = false;
        this.isfaq = false;
        this.isFinanceSuccess = false;
        this.ProductAmount = 0;
        this.TotalPaybleAmount = 0;
        this.ProductBookingAmount = 0;
        this.stateList = [];
        this.districtList = [];
        this.cityList = [];
        this.talukaList = [];
        this.pincodeList = [];
        this.isQuoteFormValid = false;
        this.isbookingFormValid = false;
        this.isVerifyOtp = false;
        this.divData = [];
        this.divisions = [];
        this.checkOtpValue = false;
        this.MmGeography = [];
        this.isTimer = false;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.timeLeft = 120;
        this.pagetitle = "Registration";
        this.disableFields = false;
        this.showEmi = false;
        this.isBookingPage = true;
        this.Showerror = false;
        this.PanValue = "";
        this.isUserregistered = false;
        this.selectFinance = true;
        this.isResendOtp = false;
        this.breadcrumbList = [];
        this.searchuserData = "";
        this.breadcrumbdata = [];
        this.showBreadCrumb = false;
        this.breadCrumbPageFound = false;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_2__.Subscription();
        this.disableTestDriveButton = false;
        this.hasRequiredError = (controlName) => this.formErrorService.hasRequiredError(controlName, this.bookingForm);
        this.hasPatternError = (controlName) => this.formErrorService.hasPatternError(controlName, this.bookingForm);
        this.hasMinLengthError = (controlName) => this.formErrorService.hasPatternError(controlName, this.bookingForm);
        this.previousUrl = this.previousRouteService.getPreviousUrl();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
        let result = this.rootService.isLoggedIn();
        if (result) {
            this.userLoginData = this.rootService.getUser() ? JSON.parse(this.rootService.getUser()) : null;
        }
        this.isBookingPage = this.router.url.includes("lead-booking") ? true : false;
        this.isBookTestDrivePage = this.router.url.includes("book-test-drive") ? true : false;
        this.googleAnlyaticsViewPage("click_page_booknow", "BookNow");
        this.fianceList = [
            { id: "1-39ERX-457", name: "AXIS BANK LTD" },
            { id: "1-28A6L98", name: "CHOLAMANDALAM DBS FINANCE LTD." },
            { id: "1-4G25N97", name: "CHOLAMANDALAM INVESTMENT AND FINANCE COMPANY LIMITED (CHENNAI)" },
            { id: "1-4GNWJ7P", name: "CHOLAMANDALAM INVESTMENT AND FINANCE COMPANY LIMITED. (VISAKHAPATNAM)" },
            { id: "1-5KQO5J7", name: "HDB FINANCIAL SERVICES LTD" },
            { id: "1-42W8M00", name: "HDB FINANCIAL SERVICES LIMITED" },
            { id: "1-39EXR-23303", name: "HDFC BANK" },
            { id: "1-4B9LIPD", name: "HDFC BANK LTD (SILIGURI)" },
            { id: "1-6HYPVYT", name: "HDFC BANK LTD (BHUJ)" },
            { id: "1-39ERX-1996", name: "HDFC BANK LTD (BACKBAY RECLAMATION)" },
            { id: "1-6HDJYVE", name: "INDUSIND BANK LIMITED" },
            { id: "1-39ERX-2289", name: "KOTAK MAHINDRA BANK LTD" },
            { id: "1-6HDJYVU", name: "MAHINDRA & MAHINDRA FINANCIAL SERVICES LTD (ANUPPUR)" },
            { id: "1-6LSQ7FN", name: "MAHINDRA & MAHINDRA FINANCIAL SERVICES LTD (JASHPUR)" },
            { id: "1-39ERX-14", name: "MAHINDRA & MAHINDRA FINANCIAL SERVICES LTD (APOLLO BUNDER)" },
            { id: "1-6RJIVJB", name: "TATA MOTORS FINANCE LIMITED" },
            { id: "1-39ERX-1572", name: "YES BANK LTD" },
            { id: "SELF", name: "SELF" },
        ];
        this.today = new Date();
        this.today.setDate(this.today.getDate() + 1);
    }
    ngOnInit() {
        try {
            this.cleverService.onPageView(this.pagetitle, this.previousUrl, "");
        }
        catch (_a) { }
        // this.getStates();
        this.sub.add(this.route.params.subscribe((params) => {
            this.lobName = params["lob_name"];
            this.product_id = params["id"];
        }));
        if (this.product_id) {
            this.getProductDetails();
        }
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            if (JSON.parse(this.localStorage.getItem("participant")) != null) {
                this.participantSourceData = JSON.parse(this.localStorage.getItem("participant"));
                this.baseUrl = window.location.href;
            }
            this.sub.add(this.router.events.subscribe((evt) => {
                if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)) {
                    return;
                }
            }));
            this.btnsendotp = true;
        }
        this.newForm();
    }
    getStates(lobName) {
        this.districtList = [];
        this.talukaList = [];
        this.cityList = [];
        this.pincodeList = [];
        let apiUrl;
        let method;
        let lob;
        if (this.isBookingPage || this.isBookTestDrivePage) {
            apiUrl = this.apiList.returnAPI("getLocation");
            lob = {
                lob: lobName,
            };
        }
        else {
            apiUrl = this.apiList.returnAPI("getStateList");
            lob = '';
        }
        this.sub.add(this.dataService.post(apiUrl, lob).subscribe((response) => {
            if (this.isBookingPage || this.isBookTestDrivePage) {
                this.stateList = response["data"];
            }
            else {
                this.stateList = response;
            }
            if (response) {
                this.sub.add(this.route.params.subscribe((params) => {
                    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                        window.scrollTo(0, 0);
                        var id = params["id"];
                        this.rowID = params === null || params === void 0 ? void 0 : params["rowID"];
                        var id = params["id"];
                        this.rowID = params === null || params === void 0 ? void 0 : params["rowID"];
                        if (!this.rowID && JSON.parse(this.localStorage.getItem("retryPaymentData")) != null) {
                            localStorage.removeItem("retryPaymentData");
                        }
                        this.optyData = this.localStorage.getItem("optyData") ? JSON.parse(this.localStorage.getItem("optyData")) : null;
                        this.productId = id;
                        if (this.productId) {
                            // this.product_id = this.productId;
                            this.divisions = [];
                            // this.imageUrl = null;
                            // this.getProductDetails();
                        }
                    }
                }));
            }
        }));
    }
    getResetPincode() {
        const districttype = this.bookingForm.get("district");
        districttype.setValue("");
        const citytype = this.bookingForm.get("city");
        citytype.setValue("");
        const talukatype = this.bookingForm.get("taluka");
        talukatype.setValue("");
        const type = this.bookingForm.get("pincode");
        type.setValue("");
    }
    getDistricts(check, callDivlistVia) {
        this.districtList = [];
        this.talukaList = [];
        this.cityList = [];
        this.pincodeList = [];
        if (check == true) {
            this.bookingForm.patchValue({
                district: "",
                city: "",
                taluka: "",
                pincode: "",
                division_id: "",
            });
        }
        this.bookingForm.patchValue({
            division_id: "",
        });
        let data = this.stateList.filter((result) => result.code === this.bookingForm.value.state);
        let ll = {};
        ll = {
            code: data[0]["code"],
            state: data[0]["name"],
        };
        let state;
        let apiUrl;
        if (this.isBookingPage || this.isBookTestDrivePage) {
            apiUrl = this.apiList.returnAPI("getLocation");
            state = {
                state: ll,
                lob: this.prodlob,
            };
        }
        else {
            apiUrl = this.apiList.returnAPI("getDistrictList");
            state = {
                state: ll,
            };
        }
        this.sub.add(this.dataService.post(apiUrl, state).subscribe((response) => {
            if (this.isBookingPage || this.isBookTestDrivePage) {
                this.districtList = response["data"];
            }
            else {
                this.districtList = response;
            }
        }));
        if (!check) {
            this.onChangeDistrict(callDivlistVia);
        }
    }
    pinresset() {
        this.bookingForm.patchValue({
            pincode: "",
        });
    }
    getCities(check) {
        this.pincodeList = [];
        this.talukaList = [];
        this.cityList = [];
        if (check == true) {
            this.bookingForm.patchValue({
                city: "",
                taluka: "",
                pincode: "",
            });
        }
        let data = this.stateList.filter((result) => result.code === this.bookingForm.value.state);
        let ll = {};
        ll = {
            code: data[0]["code"],
            state: data[0]["name"],
        };
        let district = {
            state: ll,
            district: this.bookingForm.value.district,
        };
        let apiUrl = this.apiList.returnAPI("getCitiesList");
        this.sub.add(this.dataService.post(apiUrl, district).subscribe((response) => {
            this.cityList = response;
        }));
    }
    getTalukas() {
        this.pincodeList = [];
        this.talukaList = [];
        let data = this.stateList.filter((result) => result.code === this.bookingForm.value.state);
        let ll = {};
        ll = {
            code: data[0]["code"],
            state: data[0]["name"],
        };
        let taluka = {
            state: ll,
            district: this.bookingForm.value.district,
            city: this.bookingForm.value.city,
        };
        let apiUrl = this.apiList.returnAPI("getTalukasList");
        this.sub.add(this.dataService.post(apiUrl, taluka).subscribe((response) => {
            this.talukaList = response;
            if (this.talukaList.length == 1) {
                this.bookingForm.patchValue({
                    taluka: this.talukaList[0] ? this.talukaList[0] : "",
                    pincode: "",
                });
                this.getPincodes();
            }
            else {
                this.bookingForm.patchValue({
                    taluka: "",
                    pincode: "",
                });
            }
        }));
    }
    getPincodes() {
        let data = this.stateList.filter((result) => result.code === this.bookingForm.value.state);
        let ll = {};
        ll = {
            code: data[0]["code"],
            state: data[0]["name"],
        };
        let pincode = {
            state: ll,
            district: this.bookingForm.value.district,
            city: this.bookingForm.value.city,
            taluka: this.bookingForm.value.taluka,
        };
        let apiUrl = this.apiList.returnAPI("getPincodeList");
        this.sub.add(this.dataService.post(apiUrl, pincode).subscribe((response) => {
            this.pincodeList = response.pincodes;
            if (this.pincodeList.length == 1) {
                this.bookingForm.patchValue({
                    pincode: this.pincodeList[0] ? this.pincodeList[0] : "",
                });
            }
            else {
                this.bookingForm.patchValue({
                    pincode: "",
                });
            }
        }));
    }
    getProfileLink() {
        this.router.navigate(["account"], {
            queryParams: { page_name: "my-finance-request" },
        });
        this.financeModal.hide();
    }
    onlyNumberKey(event) {
        return this.regexService.NumberKeyEvent(event);
    }
    getProductDetails() {
        let apiUrl = this.apiList.returnAPI("getVehicleDetail");
        this.sub.add(this.dataService.post(apiUrl, { product_id: this.product_id }).subscribe((data) => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (data["success"]) {
                this.productDetailsData = data["data"];
                this.getStates(this.productDetailsData.lob);
                if (((_b = (_a = this.optyData) === null || _a === void 0 ? void 0 : _a.opty) === null || _b === void 0 ? void 0 : _b.ppl_name) == ((_c = this.productDetailsData) === null || _c === void 0 ? void 0 : _c.ppl)) {
                    if (((_e = (_d = this.optyData) === null || _d === void 0 ? void 0 : _d.contact) === null || _e === void 0 ? void 0 : _e.state) == "" || ((_g = (_f = this.optyData) === null || _f === void 0 ? void 0 : _f.contact) === null || _g === void 0 ? void 0 : _g.district) == "") {
                        this.disableFields = false;
                    }
                    else {
                        this.disableFields = true;
                    }
                }
                else {
                    this.disableFields = false;
                }
                this.prodlob = this.productDetailsData.lob;
                this.getUserDetails();
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                    let currentUrl = `/lead-booking/` +
                        this.productDetailsData.lob.replace(/\s/g, "-").toLowerCase() +
                        `/` +
                        this.productDetailsData.ppl.replace(/\s/g, "-").toLowerCase() +
                        `/` +
                        this.productDetailsData.model.replace(/\s/g, "-").toLowerCase() +
                        `/` +
                        this.productDetailsData.id;
                    this.breadcrumbList = {
                        label: " ",
                        url: currentUrl,
                        pageName: "lead-booking",
                        params: {
                            lob_name: this.productDetailsData.lob,
                            ppl_name: this.productDetailsData.ppl,
                            modal_name: this.productDetailsData.model,
                        },
                    };
                    this.breadcrumbdata = this.localStorage.getItem("localBreadCrumb")
                        ? JSON.parse(this.localStorage.getItem("localBreadCrumb"))
                        : [];
                    for (var i = 0; i < this.breadcrumbdata.length; i++) {
                        if (this.breadcrumbdata[i].pageName == "lead-booking") {
                            this.breadCrumbPageFound = true;
                        }
                    }
                    if (!this.breadCrumbPageFound) {
                        this.breadcrumbdata.push(this.breadcrumbList);
                        this.localStorage.setItem("localBreadCrumb", JSON.stringify(this.breadcrumbdata));
                    }
                    this.showBreadCrumb = true;
                }
                if (this.productDetailsData["images"]) {
                    if (this.productDetailsData["images"].image_url) {
                        this.imageUrl = this.productDetailsData["images"].image_url;
                    }
                    else {
                        this.productDetailsData.images
                            .filter((image) => image.is_cover === true)
                            .map((img) => {
                            this.imageUrl = img["image_url"];
                        });
                    }
                }
                this.product_description = this.productDetailsData["product_description"];
                this.ProductAmount = this.productDetailsData["price_range"] ? this.productDetailsData["price_range"] : 0;
                this.ProductBookingAmount = this.productDetailsData["down_payment"] ? this.productDetailsData["down_payment"] : 0;
                this.TotalPaybleAmount = this.productDetailsData["down_payment"] ? this.productDetailsData["down_payment"] : 0;
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                    try {
                        this.cleverService.onProductViewed(this.localStorage.getItem("Category"), this.productDetailsData["lob"], this.productDetailsData["ppl"], this.productDetailsData["id"], this.productDetailsData["model"], this.imageUrl, "Top Navigation");
                    }
                    catch (_h) { }
                }
            }
        }));
    }
    getUserDetails() {
        if (!this.userLoginData) {
            if (this.optyData) {
                this.sendOTP(true, null);
                this.userData = [];
                this.setForm(null);
            }
        }
        let res = this.rootService.isLoggedIn();
        if (res) {
            this.drpDisabled = false;
            let apiUrl = this.apiList.returnAPI("getUserDetail");
            this.sub.add(this.dataService.postBlankRequest(apiUrl).subscribe((response) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                if (response) {
                    this.btnsendotp = true;
                    this.drpDisabled = false;
                    this.rootService.setUser(response["data"]);
                    this.rootService.setUserId(response["data"]);
                    this.btnProcess = true;
                    this.userData = [];
                    this.userData = this.rootService.getUser() ? JSON.parse(this.rootService.getUser()) : null;
                    if (this.userData) {
                        this.UserMobileNo = ((_a = this.userData) === null || _a === void 0 ? void 0 : _a.mobile_number) ? (_b = this.userData) === null || _b === void 0 ? void 0 : _b.mobile_number : "";
                        this.CustomerName = ((_c = this.userData) === null || _c === void 0 ? void 0 : _c.first_name) + " " + ((_d = this.userData) === null || _d === void 0 ? void 0 : _d.last_name);
                        this.UserAddress =
                            ((_e = this.userData) === null || _e === void 0 ? void 0 : _e.address_one) + ", " + ((_f = this.userData) === null || _f === void 0 ? void 0 : _f.state) + ", " + ((_g = this.userData) === null || _g === void 0 ? void 0 : _g.district);
                        this.UserPanNo = ((_h = this.userData) === null || _h === void 0 ? void 0 : _h.pan_no) ? (_j = this.userData) === null || _j === void 0 ? void 0 : _j.pan_no : "";
                    }
                    this.setForm(this.userData);
                }
                else {
                    this.btnsendotp = false;
                    this.drpDisabled = true;
                    this.newForm();
                }
            }));
        }
        else {
            this.btnsendotp = false;
            this.drpDisabled = true;
        }
    }
    onAssistance() {
        this.isassistance = true;
        this.isfaq = true;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            // this.firebaseanalytics.viewPagewithModelsubmodel(
            //   "click_billingdetails_needassistance_button",
            //   this.pagetitle,
            //   this.productDetailsData.model,
            //   this.productDetailsData.pl
            // );
        }
    }
    onFinanceSuccess() {
        this.isassistance = false;
        this.isfaq = false;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            // this.firebaseanalytics.viewPagewithModelsubmodel(
            //   "click_finance_success_button",
            //   this.pagetitle,
            //   this.productDetailsData.model,
            //   this.productDetailsData.pl
            // );
        }
    }
    onDiscard() {
        if (this.isFinanceSuccess) {
            this.closeFinance();
            return;
        }
        this.isassistance = false;
        this.isVerifyOtp = false;
        this.isfaq = false;
        this.isQuoteFormValid = false;
        this.otpInputValue = "";
    }
    newForm() {
        this.bookingForm = this.formBuilder.group({
            first_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.MultilingualAlphabet)]],
            last_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.MultilingualAlphabet)]],
            email_id: ["", (!this.isBookingPage) ? this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.Email)] : ""],
            address1: ["", (!this.isBookingPage && !this.isBookTestDrivePage) ? [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : ""],
            address2: [""],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            district: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            city: ["", !this.isBookingPage ? this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : ""],
            taluka: ["", !this.isBookingPage ? this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : ""],
            pincode: ["", !this.isBookingPage ? this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.Pincode)] : []],
            mobile_number: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.Phone)]],
            AMC: ["No", this.isBookingPage ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required : ""],
            is_tml: ["True"],
            interested_in_exchange: ["No"],
            lease_interest: ["No", this.isBookingPage ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required : ""],
            financier: ["Yes", this.isBookingPage ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required : ""],
            quantity: ["", this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(3)]],
            dateForTestDrive: ["", this.isBookTestDrivePage ? [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : ''],
            panNo: ["", !this.isBookingPage ? this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.Pan)] : ''],
            division_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            finance: [""],
            registration_number: [""],
            chassis_number: [""],
            pi_for_exchange: [""],
            manufacture_year: [""],
            mileage: [""],
            brand: [""],
        });
        if (this.isBookingPage) {
            this.financierData = this.bookingForm.value.financier;
        }
    }
    setForm(userData) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        let retryPaymentData;
        let statecodes;
        let statedata;
        if (JSON.parse(this.localStorage.getItem("retryPaymentData")) != null) {
            retryPaymentData = this.localStorage.getItem("retryPaymentData")
                ? JSON.parse(this.localStorage.getItem("retryPaymentData"))
                : null;
        }
        let OptyDetails = this.optyData ? this.optyData : null;
        let data = OptyDetails ? OptyDetails : this.rowID && this.isBookingPage ? retryPaymentData : userData;
        if (OptyDetails) {
            statedata = this.stateList.filter((result) => { var _a; return result.code === ((_a = data === null || data === void 0 ? void 0 : data.contact) === null || _a === void 0 ? void 0 : _a.state); });
            if (statedata.length > 0) {
                statecodes = statedata[0].code;
            }
        }
        else {
            statedata = this.stateList.filter((result) => result.name === (data === null || data === void 0 ? void 0 : data.state));
            if (statedata.length > 0) {
                statecodes = statedata[0].code;
            }
        }
        if (statedata.length == 0) {
            statecodes = "";
        }
        this.bookingForm = this.formBuilder.group({
            first_name: [
                OptyDetails ? (_a = data === null || data === void 0 ? void 0 : data.contact) === null || _a === void 0 ? void 0 : _a.first_name : userData === null || userData === void 0 ? void 0 : userData.first_name,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.MultilingualAlphabet)],
            ],
            last_name: [
                OptyDetails ? (_b = data === null || data === void 0 ? void 0 : data.contact) === null || _b === void 0 ? void 0 : _b.last_name : userData === null || userData === void 0 ? void 0 : userData.last_name,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.MultilingualAlphabet)],
            ],
            email_id: [
                OptyDetails ? (_c = OptyDetails === null || OptyDetails === void 0 ? void 0 : OptyDetails.contact) === null || _c === void 0 ? void 0 : _c.email_id : userData === null || userData === void 0 ? void 0 : userData.email_id,
                (!this.isBookingPage) ? this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.Email)] : '',
            ],
            address1: [
                OptyDetails ? (_d = OptyDetails === null || OptyDetails === void 0 ? void 0 : OptyDetails.contact) === null || _d === void 0 ? void 0 : _d.address_line_1 : "",
                (!this.isBookingPage && !this.isBookTestDrivePage) ? [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : "",
            ],
            address2: [OptyDetails ? (_e = OptyDetails === null || OptyDetails === void 0 ? void 0 : OptyDetails.contact) === null || _e === void 0 ? void 0 : _e.address_line_2 : userData === null || userData === void 0 ? void 0 : userData.address_two, []],
            mobile_number: [
                OptyDetails ? (_f = OptyDetails === null || OptyDetails === void 0 ? void 0 : OptyDetails.contact) === null || _f === void 0 ? void 0 : _f.mobile_number : userData === null || userData === void 0 ? void 0 : userData.mobile_number,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.Phone)],
            ],
            state: [statecodes, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            district: [statedata.length == 0 ? "" : OptyDetails ? (_h = (_g = OptyDetails === null || OptyDetails === void 0 ? void 0 : OptyDetails.contact) === null || _g === void 0 ? void 0 : _g.district) === null || _h === void 0 ? void 0 : _h.toLowerCase() : data === null || data === void 0 ? void 0 : data.district, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            city: [!this.isBookingPage ? this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : data === null || data === void 0 ? void 0 : data.city, !this.isBookingPage ?
                    this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : ""],
            taluka: [!this.isBookingPage ? this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : data === null || data === void 0 ? void 0 : data.taluka, !this.isBookingPage ?
                    this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : ""],
            pincode: [
                data === null || data === void 0 ? void 0 : data.pincode,
                !this.isBookingPage ? this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.Pincode)] : [],
            ],
            AMC: [data ? ((data === null || data === void 0 ? void 0 : data.amc) ? data === null || data === void 0 ? void 0 : data.amc : "No") : "No", this.isBookingPage ? [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : ""],
            is_tml: ["True", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            interested_in_exchange: [data ? ((data === null || data === void 0 ? void 0 : data.interested_in_exchange) ? data === null || data === void 0 ? void 0 : data.interested_in_exchange : "No") : "No"],
            lease_interest: [
                data ? ((data === null || data === void 0 ? void 0 : data.lease_interest) == null ? "No" : data === null || data === void 0 ? void 0 : data.lease_interest) : "No",
                this.isBookingPage ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required : "",
            ],
            quantity: [
                OptyDetails ? (_j = OptyDetails === null || OptyDetails === void 0 ? void 0 : OptyDetails.opty) === null || _j === void 0 ? void 0 : _j.quantity : data ? data.quantity : "",
                ,
                this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(3)],
            ],
            panNo: [data === null || data === void 0 ? void 0 : data.pan_no, !this.isBookingPage ? this.isBookTestDrivePage ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.Pan)] : ''],
            division_id: [
                OptyDetails ? (_k = OptyDetails === null || OptyDetails === void 0 ? void 0 : OptyDetails.opty) === null || _k === void 0 ? void 0 : _k.division_id : data ? (((_l = data === null || data === void 0 ? void 0 : data.dealer_info) === null || _l === void 0 ? void 0 : _l.division_id) ? (_m = data === null || data === void 0 ? void 0 : data.dealer_info) === null || _m === void 0 ? void 0 : _m.division_id : "") : "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
            ],
            financier: [
                data ? ((data === null || data === void 0 ? void 0 : data.finance) == "SELF" ? "No" : "Yes") : "Yes",
                this.isBookingPage ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required : "",
            ],
            finance: [data ? ((data === null || data === void 0 ? void 0 : data.finance) ? data === null || data === void 0 ? void 0 : data.finance : "") : ""],
            registration_number: [""],
            chassis_number: [""],
            pi_for_exchange: [""],
            manufacture_year: [""],
            mileage: [""],
            brand: [""],
            dateForTestDrive: ['', this.isBookTestDrivePage ? [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : '']
        });
        if (this.isBookingPage) {
            this.financierData = this.bookingForm.value.financier;
        }
        if (statedata.length > 0) {
            this.getDistricts(false, 0);
            if (!this.isBookingPage) {
                this.getCities(false);
            }
        }
        this.bookingForm.patchValue({
            division_id: "",
        });
    }
    async onSubmit() {
        this.disableTestDriveButton = true;
        this.disableSubmitButton = true;
        if (!this.isBookTestDrivePage && (this.bookingForm.value.quantity == 0 || this.bookingForm.value.quantity == '' || this.bookingForm.value.quantity == null)) {
            this.disableTestDriveButton = false;
            this.disableSubmitButton = false;
            const type = this.bookingForm.get("quantity");
            type.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(3)]);
            type.updateValueAndValidity();
            this.formErrorService.displayFormErrors(this.bookingForm);
            return;
        }
        if (!this.isBookingPage && !this.isBookTestDrivePage && (this.bookingForm.value.email_id == '' || this.bookingForm.value.email_id == null)) {
            this.disableSubmitButton = false;
            this.disableTestDriveButton = false;
            const type = this.bookingForm.get("email_id");
            type.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.Email)]);
            type.updateValueAndValidity();
            this.formErrorService.displayFormErrors(this.bookingForm);
            return;
        }
        if (this.bookingForm.status === "INVALID") {
            this.disableTestDriveButton = false;
            this.disableSubmitButton = false;
            this.formErrorService.displayFormErrors(this.bookingForm);
            return;
        }
        let userdata = {
            data: [
                this.bookingForm.value.first_name,
                this.bookingForm.value.last_name,
                this.bookingForm.value.address1,
                this.bookingForm.value.address2,
            ],
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
                    this.translatedAddress1 = response.responseList[2].outString[0];
                    this.translatedAddress2 = response.responseList[3].outString[0];
                    if (this.bookingForm.status === "INVALID") {
                        this.disableSubmitButton = false;
                        this.formErrorService.displayFormErrors(this.bookingForm);
                        return;
                    }
                    if (this.isBookingPage) {
                        this.bookVehicle();
                    }
                    else if (this.isBookTestDrivePage) {
                        this.bookTestDrive();
                    }
                    else {
                        this.bookVehicleFinance();
                    }
                }
            },
            error: (err) => {
                this.disableSubmitButton = false;
                this.translatedFirstName = this.bookingForm.value.first_name;
                this.translatedLastName = this.bookingForm.value.last_name;
                this.translatedAddress1 = this.bookingForm.value.address1;
                this.translatedAddress2 = this.bookingForm.value.address2;
                if (this.bookingForm.status === "INVALID") {
                    this.formErrorService.displayFormErrors(this.bookingForm);
                    return;
                }
                if (this.isBookingPage) {
                    this.bookVehicle();
                }
                else if (this.isBookTestDrivePage) {
                    this.bookTestDrive();
                }
                else {
                    this.bookVehicleFinance();
                }
            },
            complete: () => {
            }
        }));
    }
    bookVehicleFinance() {
        this.disableSubmitButton = true;
        if (this.bookingForm.status === "INVALID") {
            this.disableSubmitButton = false;
            this.formErrorService.displayFormErrors(this.bookingForm);
            return;
        }
        else {
            this.isQuoteFormValid = true;
            this.isbookingFormValid = false;
            this.isProcess = false;
            this.ProductQuantity = this.bookingForm.value.quantity;
            var payamount = this.productDetailsData["down_payment"] * this.bookingForm.value.quantity;
            this.TotalPaybleAmount = payamount ? payamount : this.productDetailsData["down_payment"];
            this.verifyOTP();
        }
    }
    bookVehicle() {
        this.googleAnlyaticsViewPage("click_billingdetails_proceedtopay_button", "BookNow");
        this.exchangevcvalidation();
        if (this.bookingForm.status === "INVALID") {
            this.disableSubmitButton = false;
            this.formErrorService.displayFormErrors(this.bookingForm);
            return;
        }
        else {
            this.isQuoteFormValid = true;
            this.isbookingFormValid = true;
            this.isProcess = true;
            this.ProductQuantity = this.bookingForm.value.quantity;
            var payamount = this.productDetailsData["down_payment"] * this.bookingForm.value.quantity;
            this.TotalPaybleAmount = payamount ? payamount : this.productDetailsData["down_payment"];
            this.verifyOTP();
        }
    }
    getQuantity() {
        this.ProductQuantity = this.bookingForm.value.quantity ? this.bookingForm.value.quantity : 1;
        if (this.ProductQuantity == "0") {
            this.bookingForm.patchValue({
                quantity: "",
            });
        }
        var payamount = this.productDetailsData["down_payment"] * this.bookingForm.value.quantity;
        this.TotalPaybleAmount = payamount ? payamount : this.productDetailsData["down_payment"];
    }
    onPayment() {
        this.isbookingFormValid = true;
        this.isBillingAddress = false;
        this.sendOTP(false, null);
    }
    AddressDetails() {
        this.isbookingFormValid = true;
        this.isBillingAddress = true;
    }
    sendOTP(viaOpty, otpCallType) {
        var _a, _b;
        if (viaOpty && this.optyData) {
            this.bookingForm.patchValue({ mobile_number: (_b = (_a = this.optyData) === null || _a === void 0 ? void 0 : _a.contact) === null || _b === void 0 ? void 0 : _b.mobile_number });
        }
        const type = this.bookingForm.get("mobile_number");
        type.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.Phone)]);
        type.updateValueAndValidity();
        if (type.status === "INVALID") {
            this.toastrService.error("Mobile no. required");
        }
        else {
            this.isassistance = true;
            if (this.bookingForm.value.mobile_number) {
                this.spinnerService.show();
                this.timeLeft = 120;
                let apiUrl = this.apiList.returnAPI("sendOTP");
                this.sub.add(this.dataService
                    .post(apiUrl, { mobile_number: this.bookingForm.value.mobile_number })
                    .subscribe((response) => {
                    if (response.success) {
                        this.spinnerService.hide();
                        this.localStorage.setItem("page", "booking");
                        this.isUserregistered = response.data.user;
                        this.isbookingFormValid = false;
                        this.isQuoteFormValid = true;
                        this.isassistance = true;
                        this.startTimer(120);
                        this.showOTPModal = true;
                        if (otpCallType == "resend") {
                            this.isResendOtp = true;
                        }
                        else {
                            this.otpOpenModal = this.bsModal.show(this.otpRefModal, {
                                class: "modal-dialog-centered modal-md",
                                backdrop: "static",
                            });
                            this.isResendOtp = false;
                        }
                        this.toastrService.success(response.data.msg);
                    }
                    else {
                        this.isUserregistered = response.data.user;
                        this.isQuoteFormValid = false;
                        this.isbookingFormValid = false;
                        this.isassistance = false;
                    }
                }, (error) => {
                    this.spinnerService.hide();
                    this.toastrService.error('Your account is locked due to multiple incorrect OTP. Please try after sometime');
                }));
            }
            else {
                this.isbookingFormValid = false;
                const type = this.bookingForm.get("mobile_number");
                type.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexService.Phone)]);
                type.updateValueAndValidity();
            }
        }
    }
    startTimer(timeLeft) {
        this.timeLeft = timeLeft;
        const source = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(1000, 1000);
        this.sub.add(source.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.destroy)).subscribe((val) => {
            const timer1 = val;
            if (timer1 >= 0 && timer1 < 121) {
                if (this.timeLeft > 0) {
                    this.isTimer = true;
                    this.m = Math.floor(this.timeLeft / 60);
                    this.s = this.timeLeft % 60;
                    this.m = this.m < 10 ? "0" + this.m : this.m;
                    this.s = this.s < 10 ? "0" + this.s : this.s;
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
                this.destroy.next("");
                this.destroy.complete();
            }
        }));
    }
    setDivision() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (this.bookingForm.value.division_id) {
            if (this.optyData && ((_b = (_a = this.optyData) === null || _a === void 0 ? void 0 : _a.opty) === null || _b === void 0 ? void 0 : _b.ppl_name) == ((_c = this.productDetailsData) === null || _c === void 0 ? void 0 : _c.ppl)) {
                this.divData = this.divisions.filter((division) => division.division_id == this.bookingForm.value.division_id);
                this.bookingForm.patchValue({ division_id: (_d = this.divData[0]) === null || _d === void 0 ? void 0 : _d.division_id });
            }
            else if (this.optyData && ((_f = (_e = this.optyData) === null || _e === void 0 ? void 0 : _e.opty) === null || _f === void 0 ? void 0 : _f.ppl_name) !== ((_g = this.productDetailsData) === null || _g === void 0 ? void 0 : _g.ppl)) {
                this.divData = this.divisions.filter((division) => division.division_id == this.bookingForm.value.division_id);
                this.bookingForm.patchValue({ division_id: (_h = this.divData[0]) === null || _h === void 0 ? void 0 : _h.division_id });
            }
            else {
                this.divData = this.divisions.filter((division) => division.division_id == this.bookingForm.value.division_id);
                this.bookingForm.patchValue({ division_id: (_j = this.divData[0]) === null || _j === void 0 ? void 0 : _j.division_id });
            }
            if (this.divData.length == 0) {
                this.disableFields = false;
            }
            // this.firebaseanalytics.viewPagewithModelsubmodel(
            //   "click_billingdetails_selectdealer_dropdown",
            //   this.pagetitle,
            //   this.productDetailsData.model,
            //   this.productDetailsData.pl
            // );
        }
        else {
            this.divData = this.divisions.filter((division) => division.division_id == this.bookingForm.value.division_id);
        }
        if (this.divData.length == 0) {
            this.bookingForm.patchValue({ division_id: '' });
        }
        else {
            this.bookingForm.patchValue({ division_id: (_k = this.divData[0]) === null || _k === void 0 ? void 0 : _k.division_id });
        }
    }
    otpCheck(data) {
        if (data.status == "back") {
            this.showOTPModal = false;
        }
        else if (data.status == "resend") {
            this.sendOTP(false, "resend");
        }
        else if (data.status == "timerStopped") {
            this.isResendOtp = false;
        }
        else {
            if (data.value.length === 6) {
                this.otpInputValue = data.value;
            }
            if (data.value == "") {
                this.otpInputValue = "";
            }
            this.verifyNewOTP();
        }
    }
    verifyNewOTP() {
        if (!this.otpInputValue) {
            return this.toastrService.error("Please enter otp!");
        }
        this.isbookingFormValid = false;
        this.isQuoteFormValid = false;
        let apiUrl = this.apiList.returnAPI("login");
        this.sub.add(this.dataService
            .post(apiUrl, { mobile_number: this.bookingForm.value.mobile_number, otp_number: this.otpInputValue })
            .subscribe({
            next: (response) => {
                if (response.success) {
                    this.btnsendotp = true;
                    this.isUserType = "OLD";
                    this.drpDisabled = false;
                    this.toastrService.success("Login Successful");
                    this.otpOpenModal.hide();
                    this.behaviorService.isLoggedIn.subscribe((res) => {
                        if (res) {
                            this.isUserLoggedIn = this.rootService.isLoggedIn() ? true : false;
                            this.userData = this.rootService.getUserData();
                        }
                    });
                    this.rootService.loginUser(response.data);
                    if (this.isUserLoggedIn) {
                        this.btnProcess = true;
                        this.drpDisabled = false;
                        this.userData = [];
                        this.userData = this.rootService.getUser() ? JSON.parse(this.rootService.getUser()) : null;
                        this.showOTPModal = false;
                        this.setForm(this.userData);
                        this.otpOpenModal.hide();
                    }
                    else {
                        this.btnsendotp = true;
                        this.showOTPModal = false;
                        this.otpOpenModal.hide();
                        this.userData = "OLD_USER";
                        this.newForm();
                        this.drpDisabled = true;
                    }
                    this.cleverService.onUserLogin();
                    this.cleverService.PostonUserLogin();
                }
                else {
                    this.isUserType = "NEW";
                    if (response.data.msg === "OTP verification failed") {
                        this.drpDisabled = true;
                        this.isQuoteFormValid = true;
                        this.isVerifyOtp = false;
                        if (response.data.msg !== "User is not registered.") {
                            this.toastrService.error(response.data.msg);
                        }
                        this.showOTPModal = false;
                        this.otpOpenModal.hide();
                    }
                    else {
                        this.btnsendotp = true;
                        this.btnProcess = true;
                        this.drpDisabled = false;
                        if (response.data.msg !== "User is not registered.") {
                            this.toastrService.error(response.data.msg);
                        }
                        this.showOTPModal = false;
                        this.otpOpenModal.hide();
                    }
                    this.startTimer(0);
                }
            },
            complete: () => {
                this.otpOpenModal.hide();
                this.startTimer(0);
            }
        }));
    }
    closeFinance() {
        this.isFinanceSuccess = false;
        this.router.navigateByUrl("/");
    }
    verifyOTP() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        let userRecord = this.rootService.getUser();
        if (!userRecord) {
            if (!this.otpInputValue) {
                return this.toastrService.error("Please enter otp!");
            }
        }
        let lob = this.productDetailsData["lob"];
        let statedata = this.stateList.filter((result) => result.code === this.bookingForm.value.state);
        let currentDateTime = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(), "yyyy-MM-dd HH:mm:ss", "en-US");
        try {
            this.cleverService.proceedToPayment(this.bookingForm.value.first_name, this.bookingForm.value.last_name, this.bookingForm.value.mobile_number, this.bookingForm.value.email_id, (_a = statedata[0]) === null || _a === void 0 ? void 0 : _a["name"], this.bookingForm.value.city, this.bookingForm.value.district, this.bookingForm.value.taluka, this.bookingForm.value.pincode, this.divData[0].division_name, this.isBookingPage ? "BOOKING" : "FINANCE", this.bookingForm.value.finance.name, this.bookingForm.value.quantity);
        }
        catch (error) { }
        let data = {
            lead_type: this.isBookingPage ? "BOOKING" : "FINANCE",
            otp_number: this.otpInputValue,
            mm_geography: ((_b = this.divData[0]) === null || _b === void 0 ? void 0 : _b.mm_geography) ? (_c = this.divData[0]) === null || _c === void 0 ? void 0 : _c.mm_geography : "",
            division_id: ((_d = this.divData[0]) === null || _d === void 0 ? void 0 : _d.division_id) ? (_e = this.divData[0]) === null || _e === void 0 ? void 0 : _e.division_id : "",
            lob: this.productDetailsData.lob ? this.productDetailsData.lob : "",
            mobile_number: this.bookingForm.value.mobile_number,
            email_id: this.bookingForm.value.email_id,
            first_name: this.translatedFirstName,
            last_name: this.translatedLastName,
            address_one: !this.isBookingPage
                ? this.translatedAddress1
                : this.optyData
                    ? this.translatedAddress1
                    : this.translatedFirstName + ((_f = statedata[0]) === null || _f === void 0 ? void 0 : _f["code"]) + this.bookingForm.value.mobile_number + currentDateTime,
            address_two: this.translatedAddress2,
            state: (_g = statedata[0]) === null || _g === void 0 ? void 0 : _g["name"],
            state_code: (_h = statedata[0]) === null || _h === void 0 ? void 0 : _h["code"],
            district: this.bookingForm.value.district,
            organization_name: lob == "HCV Cargo" || lob == "MCV Trucks" || lob == "HCV Const" || lob == "ICV Trucks"
                ? this.translatedFirstName + this.translatedLastName + this.bookingForm.value.mobile_number
                : "",
            vehicle_application: "NA",
            body_type: "NA",
            usage_category: "",
            vc_description: this.productDetailsData["product_description"]
                ? this.productDetailsData["product_description"]
                : "",
            vc_number: this.productDetailsData["vehicle_number"] ? this.productDetailsData["vehicle_number"] : "",
            ppl: this.productDetailsData["ppl"] ? this.productDetailsData["ppl"] : "",
            vc_id: this.productDetailsData["vehicle_id"] ? this.productDetailsData["vehicle_id"] : "",
            pl: this.productDetailsData["pl"] ? this.productDetailsData["pl"] : "",
            quantity: "" + this.bookingForm.value.quantity,
            amc: this.bookingForm.value.AMC,
            lease_interest: this.bookingForm.value.lease_interest,
            finance_account_id: this.bookingForm.value.finance.id ? this.bookingForm.value.finance.id : "1-39ERX-657",
            finance: this.bookingForm.value.finance.name ? this.bookingForm.value.finance.name : "SELF",
            model: this.productDetailsData["model"] ? this.productDetailsData["model"] : "",
            is_tml: this.bookingForm.value.is_tml,
            interested_in_exchange: this.bookingForm.value.interested_in_exchange,
            brand: this.bookingForm.value.brand,
            registration_number: this.bookingForm.value.registration_number,
            pi_for_exchange: this.bookingForm.value.pi_for_exchange,
            chassis_number: this.bookingForm.value.chassis_number,
            manufacture_year: this.bookingForm.value.manufacture_year,
            mileage: this.bookingForm.value.mileage,
            action_type: !(((_j = this.divData[0]) === null || _j === void 0 ? void 0 : _j.access_key_id) || ((_k = this.divData[0]) === null || _k === void 0 ? void 0 : _k.access_secret_id) || ((_l = this.divData[0]) === null || _l === void 0 ? void 0 : _l.account_id)) ? 'Unbilled' : 'Billed'
        };
        if (!this.isBookingPage) {
            data["pan_no"] = this.PanValue
                ? this.PanValue
                : this.userData
                    ? this.userData.pan_no
                    : this.bookingForm.value.panNo;
            data["taluka"] = this.bookingForm.value.taluka;
            data["city"] = this.bookingForm.value.city;
            data["pincode"] = this.bookingForm.value.pincode ? this.bookingForm.value.pincode : "";
        }
        if (this.rowID && this.isBookingPage) {
            data["row_id"] = this.rowID;
        }
        if (this.optyData &&
            this.isBookingPage &&
            ((_o = (_m = this.optyData) === null || _m === void 0 ? void 0 : _m.opty) === null || _o === void 0 ? void 0 : _o.division_id) == (data === null || data === void 0 ? void 0 : data.division_id) &&
            ((_q = (_p = this.optyData) === null || _p === void 0 ? void 0 : _p.opty) === null || _q === void 0 ? void 0 : _q.ppl_name) == (data === null || data === void 0 ? void 0 : data.ppl)) {
            data["opty_id"] = (_s = (_r = this.optyData) === null || _r === void 0 ? void 0 : _r.opty) === null || _s === void 0 ? void 0 : _s.opty_id;
        }
        if (this.optyData && this.isBookingPage) {
            data["contact_id"] = (_u = (_t = this.optyData) === null || _t === void 0 ? void 0 : _t.contact) === null || _u === void 0 ? void 0 : _u.contact_id;
        }
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            //UTM PARAMS
            if (JSON.parse(this.localStorage.getItem("participant")) != null) {
                data["source"] = this.participantSourceData.source;
                data["medium"] = this.participantSourceData.medium;
                data["campaign"] = this.participantSourceData.campaign;
                data["term"] = this.participantSourceData.utm_term;
                data["content"] = this.participantSourceData.utm_content;
                data["campaign_id"] = this.participantSourceData.utm_campaign_id;
                data["keyword"] = this.participantSourceData.utm_keyword;
            }
        }
        if (!this.userData && !this.isUserregistered) {
            let apiUrl = this.apiList.returnAPI("userRegistration");
            this.sub.add(this.dataService.post(apiUrl, data).subscribe({
                next: (response) => {
                    var _a, _b, _c, _d, _e, _f;
                    if (response.success) {
                        this.rootService.setToken(response["data"]);
                        this.rootService.loginUser(response["data"]);
                        this.rootService.setUser(response["data"]);
                        this.rootService.setUserId(response["data"]);
                        if (this.isBookingPage) {
                            if (!(((_a = this.divData[0]) === null || _a === void 0 ? void 0 : _a.access_key_id) || ((_b = this.divData[0]) === null || _b === void 0 ? void 0 : _b.access_secret_id) || ((_c = this.divData[0]) === null || _c === void 0 ? void 0 : _c.account_id))) {
                                this.toastrService.success(response.data.msg);
                                this.router.navigate(["account"], {
                                    queryParams: { page_name: "my-request" },
                                });
                            }
                            else {
                                let orderDetails = {
                                    razorpay_account_id: response["data"].razorpay_account_id,
                                    razorpay_access_key: response["data"].razorpay_access_key,
                                    order_id: response["data"].payment_order_id,
                                    pay_amount: this.TotalPaybleAmount,
                                    product_name: response["data"].lead_info.pl,
                                    product_description: response["data"].lead_info.vehicle_number,
                                    shopping_order_id: response["data"].lead_row_id,
                                    email: response["data"].email_id,
                                    contact: response["data"].mobile_number,
                                };
                                this.payMessage = "Request In Process";
                                this.isVerifyOtp = true;
                                this.payWithRazor(orderDetails);
                                this.otpInputValue = "";
                                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                                    try {
                                        // this.firebaseanalytics.register(
                                        //   "click_register_booknow",
                                        //   this.productDetailsData["model"],
                                        //   this.pagetitle
                                        // );
                                        this.cleverService.onUserSignUp();
                                        this.cleverService.PostonUserSignUp();
                                        this.cleverService.onPaymentOptionSelected("Online Transfer", this.productDetailsData["id"], this.productDetailsData["model"], this.imageUrl, "Top Navigation", this.baseUrl);
                                        this.cleverService.onTransactionFlowSignUpSuccess(this.bookingForm.value.first_name + " " + this.bookingForm.value.last_name, statedata[0]["name"], this.bookingForm.value.district, this.divData[0].division_name, this.bookingForm.value.finance.name, this.productDetailsData["id"], this.productDetailsData["model"], this.imageUrl, "Top Navigation", this.baseUrl);
                                    }
                                    catch (error) { }
                                }
                            }
                        }
                        else {
                            this.isVerifyOtp = true;
                            this.otpInputValue = "";
                            this.financeModal = this.bsModal.show(this.financeSuccessModal, {
                                class: "modal-dialog-centered modal-lg",
                                backdrop: "static",
                            });
                            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                                try {
                                    // this.firebaseanalytics.register(
                                    //   "click_finance_booknow",
                                    //   this.productDetailsData["model"],
                                    //   this.pagetitle
                                    // );
                                    this.cleverService.onUserSignUp();
                                    this.cleverService.PostonUserSignUp();
                                }
                                catch (error) { }
                            }
                        }
                        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                            localStorage.removeItem("participant");
                        }
                        if (!this.isBookingPage) {
                            this.isFinanceSuccess = true;
                        }
                    }
                    else {
                        if (!(((_d = this.divData[0]) === null || _d === void 0 ? void 0 : _d.access_key_id) || ((_e = this.divData[0]) === null || _e === void 0 ? void 0 : _e.access_secret_id) || ((_f = this.divData[0]) === null || _f === void 0 ? void 0 : _f.account_id))) {
                            this.spinnerService.hide();
                            this.isVerifyOtp = false;
                            this.toastrService.error(response.data.msg);
                        }
                        else {
                            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                                try {
                                    if (this.isBookingPage) {
                                        // this.firebaseanalytics.register(
                                        //   "click_register_fail_booknow",
                                        //   this.productDetailsData["model"],
                                        //   this.pagetitle
                                        // );
                                    }
                                    else {
                                        // this.firebaseanalytics.register(
                                        //   "click_finance_fail_booknow",
                                        //   this.productDetailsData["model"],
                                        //   this.pagetitle
                                        // );
                                    }
                                }
                                catch (error) { }
                            }
                            this.isVerifyOtp = false;
                            this.toastrService.success(response.data.msg);
                            this.startTimer(0);
                        }
                    }
                },
                complete: () => {
                    this.startTimer(0);
                }
            }));
        }
        else {
            this.spinnerService.show();
            let apiUrl = this.apiList.returnAPI("generateLeadView");
            this.sub.add(this.dataService.post(apiUrl, data).subscribe((response) => {
                var _a, _b, _c, _d, _e, _f;
                if (this.isBookingPage) {
                    if (response.success) {
                        this.spinnerService.hide();
                        if (!(((_a = this.divData[0]) === null || _a === void 0 ? void 0 : _a.access_key_id) || ((_b = this.divData[0]) === null || _b === void 0 ? void 0 : _b.access_secret_id) || ((_c = this.divData[0]) === null || _c === void 0 ? void 0 : _c.account_id))) {
                            this.toastrService.success(response.data.msg);
                            this.router.navigate(["account"], {
                                queryParams: { page_name: "my-request" },
                            });
                        }
                        else {
                            this.GoogleProcessPayment("click_billingdetails_proceedtopay_success");
                            let orderDetails = {
                                razorpay_account_id: response["data"].razorpay_account_id,
                                razorpay_access_key: response["data"].razorpay_access_key,
                                order_id: response["data"].payment_order_id,
                                pay_amount: this.TotalPaybleAmount,
                                product_name: response["data"].lead_info.pl,
                                product_description: response["data"].lead_info.vehicle_number,
                                shopping_order_id: response["data"].lead_row_id,
                                email: response["data"].email_id,
                                contact: response["data"].mobile_number,
                            };
                            this.payMessage = "Request In Process";
                            this.isVerifyOtp = true;
                            this.payWithRazor(orderDetails);
                            this.otpInputValue = "";
                            this.toastrService.success(response.data.msg);
                            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                                try {
                                    this.cleverService.onPaymentOptionSelected("Online Transfer", this.productDetailsData["id"], this.productDetailsData["model"], this.imageUrl, "Top Navigation", this.baseUrl);
                                }
                                catch (error) { }
                            }
                            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                                localStorage.removeItem("participant");
                            }
                        }
                    }
                    else {
                        if (!(((_d = this.divData[0]) === null || _d === void 0 ? void 0 : _d.access_key_id) || ((_e = this.divData[0]) === null || _e === void 0 ? void 0 : _e.access_secret_id) || ((_f = this.divData[0]) === null || _f === void 0 ? void 0 : _f.account_id))) {
                            this.spinnerService.hide();
                            this.isVerifyOtp = false;
                            this.isbookingFormValid = false;
                            this.isProcess = false;
                            this.disableSubmitButton = false;
                            this.toastrService.error(response.data.msg);
                        }
                        else {
                            this.spinnerService.hide();
                            this.disableSubmitButton = false;
                            this.GoogleProcessPayment("click_billingdetails_proceedtopay_fail");
                            this.toastrService.error(response.data.msg);
                            this.isVerifyOtp = false;
                            this.isbookingFormValid = false;
                            this.isProcess = false;
                            this.startTimer(0);
                        }
                    }
                }
                else {
                    if (response.success) {
                        this.spinnerService.hide();
                        this.isVerifyOtp = true;
                        this.otpInputValue = "";
                        this.toastrService.success(response.data.msg);
                        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                            localStorage.removeItem("participant");
                        }
                        this.financeModal = this.bsModal.show(this.financeSuccessModal, {
                            class: "modal-dialog-centered modal-md",
                            backdrop: "static",
                        });
                        this.isFinanceSuccess = true;
                    }
                    else {
                        this.spinnerService.hide();
                        this.disableSubmitButton = false;
                        this.toastrService.error(response.data.msg);
                        this.isVerifyOtp = false;
                        this.isbookingFormValid = false;
                        this.isProcess = false;
                        this.startTimer(0);
                    }
                }
            }, (error) => {
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                    this.startTimer(0);
                    this.spinnerService.hide();
                    this.toastrService.error(error.data.msg);
                    window.location.reload();
                }
            }));
        }
    }
    checkValidation(otp) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
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
    payWithRazor(orderDetails) {
        const ResponseData = {};
        const options = {
            key: orderDetails.razorpay_access_key,
            amount: orderDetails.pay_amount,
            currency: "INR",
            name: orderDetails.product_name,
            description: orderDetails.product_description,
            image: "assets/images/tataMLogo.webp",
            order_id: orderDetails.order_id,
            account_id: orderDetails.razorpay_account_id,
            prefill: {
                email: orderDetails.email,
                contact: orderDetails.contact,
            },
            modal: {
                escape: false,
            },
            notes: {
                shopping_order_id: orderDetails.shopping_order_id,
            },
            theme: {
                color: "#0c238a",
            },
        };
        options.handler = (response, error) => {
            this.payMessage =
                "Your payment of ₹" +
                    this.formatMoney(orderDetails.pay_amount) +
                    "/- received against Request ID " +
                    orderDetails.shopping_order_id +
                    ".";
            this.isVerifyOtp = true;
            this.isconfirm = true;
            this.isProcess = false;
            options.response = response;
            ResponseData.razorpay_payment_id = response.razorpay_payment_id;
            ResponseData.razorpay_order_id = response.razorpay_order_id;
            ResponseData.razorpay_signature = response.razorpay_signature;
            let apiUrl = this.apiList.returnAPI("getPaymentDetail");
            this.sub.add(this.dataService.post(apiUrl, ResponseData).subscribe((response) => {
                if (response.success) {
                    this.isProcess = false;
                    this.isconfirm = true;
                    this.googleAnlyaticspayment("click_payment_success", orderDetails.shopping_order_id, this.payMessage, orderDetails.pay_amount);
                    const objthank = {};
                    objthank.headMessage = "Thank You !";
                    objthank.payMessage = this.payMessage;
                    objthank.Image = this.imageUrl;
                    this.localStorage.setItem("Payresponse", JSON.stringify(objthank));
                    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                        try {
                            this.cleverService.onPaymentCompleted("Success", "Online Transfer", this.productDetailsData["id"], this.productDetailsData["model"], this.imageUrl, "Top Navigation", this.baseUrl);
                        }
                        catch (_a) { }
                    }
                    this.ngZone.run(() => this.router.navigate(["/order-status"])).then();
                }
                else {
                    this.googleAnlyaticspayment("click_payment_fail", orderDetails.shopping_order_id, this.payMessage, orderDetails.pay_amount);
                    this.ngZone.run(() => this.router.navigate(["/order-status"])).then();
                }
            }));
            // call your backend api to verify payment signature & capture transaction
        };
        options.modal.ondismiss = (testresponse) => {
            this.payMessage =
                "Your payment against Request ID " +
                    orderDetails.shopping_order_id +
                    " of ₹" +
                    this.formatMoney(orderDetails.pay_amount) +
                    "/- is not received.";
            this.isVerifyOtp = true;
            const objthank = {};
            objthank.headMessage = "Sorry !";
            objthank.payMessage = this.payMessage;
            objthank.Image = this.imageUrl;
            this.localStorage.setItem("Payresponse", JSON.stringify(objthank));
            const ResponseDatas = {};
            ResponseDatas.razorpay_order_id = orderDetails.order_id;
            let apiUrl = this.apiList.returnAPI("getpaymentCancelledDetail");
            this.sub.add(this.dataService.post(apiUrl, ResponseData).subscribe((response) => {
                this.isProcess = false;
                this.isconfirm = true;
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                    try {
                        this.cleverService.onPaymentCompleted("Failure", "Online Transfer", this.productDetailsData["id"], this.productDetailsData["model"], this.imageUrl, "Top Navigation", this.baseUrl);
                    }
                    catch (_a) { }
                }
                if (response.success) {
                    this.googleAnlyaticspayment("click_payment_cancelled", orderDetails.shopping_order_id, this.payMessage, orderDetails.pay_amount);
                    this.ngZone.run(() => this.router.navigate(["/order-status"])).then();
                }
                else {
                    this.googleAnlyaticspayment("click_payment_cancelled_fail", orderDetails.shopping_order_id, this.payMessage, orderDetails.pay_amount);
                    this.ngZone.run(() => this.router.navigate(["/order-status"])).then();
                }
            }));
        };
        const rzp = new this.winRef.nativeWindow.Razorpay(options);
        rzp.open();
        return ResponseData;
    }
    async onChangeDistrict(callFrom) {
        this.divisions = [];
        this.MmGeography = [];
        if (this.bookingForm.get("district").valid && this.bookingForm.get("state").valid) {
            let apiUrl = this.apiList.returnAPI("getDivisionList");
            let data = {
                district: this.bookingForm.get("district").value,
                state: this.bookingForm.get("state").value,
                lob_name: this.prodlob ? this.prodlob : "",
            };
            let response = await this.dataService.getDivisionList(apiUrl, data);
            if (response.success) {
                this.divisions = [];
                response["data"].forEach((res) => {
                    this.divisions.push(res);
                });
                if (callFrom == 0) {
                    this.setDivision();
                }
                if (callFrom == 1) {
                    this.bookingForm.patchValue({
                        city: "",
                        taluka: "",
                        pincode: "",
                        division_id: "",
                    });
                }
                this.bookingForm.patchValue({ division_id: "" });
            }
            else {
                this.divisions = [];
                this.bookingForm.patchValue({ division_id: "" });
                this.disableFields = false;
                this.toastrService.error(response["data"]["msg"]);
            }
        }
        else {
            this.divisions = [];
        }
    }
    formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            try {
                let i;
                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
                const negativeSign = amount < 0 ? "-" : "";
                i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
                let j = i.length > 3 ? i.length % 3 : 0;
                return (negativeSign +
                    (j ? i.substr(0, j) + thousands : "") +
                    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
                    (decimalCount
                        ? decimal +
                            Math.abs(amount - i)
                                .toFixed(decimalCount)
                                .slice(2)
                        : ""));
            }
            catch (e) { }
        }
    }
    onSelectFinance() {
        // this.firebaseanalytics.viewPagewithModelsubmodel(
        //   "click_billingdetails_selectfinance_dropdown",
        //   this.pagetitle,
        //   this.productDetailsData.model,
        //   this.productDetailsData.pl
        // );
    }
    googleDataCapture(type, select) {
        if (type == 'financier') {
            if (select == "yes") {
                this.selectFinance = true;
            }
            else {
                this.selectFinance = false;
            }
        }
        // this.firebaseanalytics.viewPagewithModelsubmodel(
        //   "click_billingdetails_" + type + "_checkbox",
        //   this.pagetitle,
        //   this.productDetailsData.model,
        //   this.productDetailsData.pl
        // );
    }
    notAllowSpace(event) {
        if (event.target.selectionStart === 0 && event.which === 32) {
            event.preventDefault();
        }
    }
    exchangevcvalidation() {
        const manufacture_year = this.bookingForm.get("manufacture_year");
        const brand = this.bookingForm.get("brand");
        const registration_number = this.bookingForm.get("registration_number");
        const chassis_number = this.bookingForm.get("chassis_number");
        const pi_for_exchange = this.bookingForm.get("pi_for_exchange");
        const mileage = this.bookingForm.get("mileage");
        if (this.bookingForm.value.interested_in_exchange == "No") {
            manufacture_year.setValidators(null);
            brand.setValidators(null);
            registration_number.setValidators(null);
            pi_for_exchange.setValidators(null);
            chassis_number.setValidators(null);
            mileage.setValidators(null);
            manufacture_year.updateValueAndValidity();
            this.bookingForm.get("manufacture_year").clearValidators();
            this.bookingForm.get("pi_for_exchange").clearValidators();
            this.bookingForm.get("registration_number").clearValidators();
            this.bookingForm.get("chassis_number").clearValidators();
            this.bookingForm.get("mileage").clearValidators();
            this.bookingForm.get("brand").clearValidators();
            brand.updateValueAndValidity();
            pi_for_exchange.updateValueAndValidity();
            chassis_number.updateValueAndValidity();
            mileage.updateValueAndValidity();
            registration_number.updateValueAndValidity();
        }
        else {
            manufacture_year.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4)]);
            brand.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            registration_number.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            pi_for_exchange.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            chassis_number.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            mileage.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(2)]);
            manufacture_year.updateValueAndValidity();
            brand.updateValueAndValidity();
            pi_for_exchange.updateValueAndValidity();
            chassis_number.updateValueAndValidity();
            mileage.updateValueAndValidity();
            registration_number.updateValueAndValidity();
            if (!(this.bookingForm.value.registration_number.trim().length <= 13) ||
                !(this.bookingForm.value.registration_number.trim().length >= 6)) {
                this.disableSubmitButton = false;
                return this.toastrService.error("Registraion number must be less than 13 and greater than 6");
            }
            if (!(this.bookingForm.value.chassis_number.trim().length <= 25) ||
                !(this.bookingForm.value.chassis_number.trim().length >= 8)) {
                this.disableSubmitButton = false;
                return this.toastrService.error("Chassis number must be less than 25 and greater than 8");
            }
        }
    }
    OnlyCharacter(event) {
        var inp = String.fromCharCode(event.keyCode);
        if (/[a-zA-Z]/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            this.toastrService.error("Special characters,numbers and space not allowed");
            return false;
        }
    }
    alphanumbericOnly(event) {
        var inp = String.fromCharCode(event.keyCode);
        if (/[a-zA-Z0-9-]/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            this.toastrService.error("Special characters and space not allowed");
            return false;
        }
    }
    onlynumber(event) {
        var inp = String.fromCharCode(event.keyCode);
        if (/[0-9-]/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            this.toastrService.error("Special characters,alphabets and space not allowed");
            return false;
        }
    }
    checkmileage(event) {
        var val = event.target.value;
        if (val == 0) {
            this.Showerror = true;
        }
        else if (val <= 25) {
            this.Showerror = false;
        }
        else {
            this.Showerror = true;
        }
    }
    googleAnlyaticsViewPage(eventname, pagename) {
        try {
            // this.firebaseanalytics.viewPage(eventname, pagename);
        }
        catch (error) { }
    }
    GoogleProcessPayment(eventname) {
        try {
            // this.firebaseanalytics.booking(
            //   eventname,
            //   this.cModel,
            //   // this.bookingForm.value.organization_name ? this.bookingForm.value.organization_name.site_name : "",
            //   this.productDetailsData["product_description"] ? this.productDetailsData["product_description"] : "",
            //   this.productDetailsData["vehicle_number"] ? this.productDetailsData["vehicle_number"] : "",
            //   this.productDetailsData["ppl"] ? this.productDetailsData["ppl"] : "",
            //   this.productDetailsData["pl"] ? this.productDetailsData["pl"] : "",
            //   "" + this.bookingForm.value.quantity,
            //   this.bookingForm.value.AMC ? this.bookingForm.value.AMC : "",
            //   this.bookingForm.value.lease_interest ? this.bookingForm.value.lease_interest : "",
            //   // this.bookingForm.value.panNo ? this.bookingForm.value.panNo : "",
            //   // this.bookingForm.value.financier ? this.bookingForm.value.financier : "",
            //   this.bookingForm.value.finance.id ? this.bookingForm.value.finance.id : "1-39ERX-657",
            //   this.bookingForm.value.finance.name ? this.bookingForm.value.finance.name : "SELF",
            //   this.bookingForm.value.is_tml ? this.bookingForm.value.is_tml : "",
            //   this.bookingForm.value.interested_in_exchange ? this.bookingForm.value.interested_in_exchange : "",
            //   "BookNow"
            // );
        }
        catch (error) { }
    }
    googleAnlyaticspayment(eventname, RequestId, Message, amount) {
        try {
            // this.firebaseanalytics.Payment(eventname, RequestId, Message, amount, "BookNow");
        }
        catch (error) { }
    }
    googleAnlyaticsViewPageWithModelandSubmodel(eventname, pagename, model, submodel) {
        try {
            // this.firebaseanalytics.viewPagewithModelsubmodel(eventname, pagename, model, submodel);
        }
        catch (error) { }
    }
    openCallBackModal(val) {
        this.showEmi = val;
    }
    bookTestDrive() {
        var _a;
        this.spinnerService.show();
        let statedata = this.stateList.filter((result) => result.code === this.bookingForm.value.state);
        let data = {
            product_id: Number(this.productId),
            // name: this.translatedFirstName + " " + this.translatedLastName,
            mobile_number: Number(this.bookingForm.value.mobile_number),
            district: this.bookingForm.value.district,
            state: (_a = statedata[0]) === null || _a === void 0 ? void 0 : _a["name"],
            scheduled_on: (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.bookingForm.value.dateForTestDrive, "yyyy-MM-dd HH:mm:ss", "en-US"),
            division_id: this.bookingForm.value.division_id,
            first_name: this.translatedFirstName,
            last_name: this.translatedLastName,
        };
        this.spinnerService.show();
        let apiUrl = this.apiList.returnAPI("bookTestDrive");
        this.sub.add(this.dataService.post(apiUrl, data).subscribe({
            next: (response) => {
                if (response["success"]) {
                    this.disableTestDriveButton = false;
                    this.spinnerService.hide();
                    this.toastrService.success(response["data"].msg);
                    this.loginUser(response);
                    // this.closepopup();
                }
                else {
                    this.disableTestDriveButton = false;
                    this.spinnerService.hide();
                    this.toastrService.error(response["data"].msg);
                    // this.closepopup();
                }
            },
            error: (error) => {
                this.disableTestDriveButton = false;
                this.spinnerService.hide();
            }
        }));
    }
    loginUser(response) {
        if (this.isUserType == 'NEW' && !this.isUserregistered) {
            if (response.success) {
                this.rootService.setToken(response["data"].token);
                this.rootService.setUser(response["data"].user);
                this.rootService.setUserId(response["data"].user);
                // this.rootService.loginUser(response["data"]);
                this.behaviorService.isLoggedIn.next(true);
                //  this.toastrService.success(response.data.msg);
                this.router.navigate(["account"], {
                    queryParams: { page_name: "my-request" },
                });
                // this.financeModal = this.bsModal.show(this.financeSuccessModal, {
                //   class: "modal-dialog-centered modal-lg",
                //   backdrop: "static",
                // });
                //onsuccesss show popup or redirect
            }
            else {
                this.spinnerService.hide();
                // this.toastrService.error(response.data.msg);
            }
        }
        else {
            // this.toastrService.success(response.data.msg);
            this.router.navigate(["account"], {
                queryParams: { page_name: "my-request" },
            });
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], BookingComponent.prototype, "changed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)("regisnumber", { static: false })
], BookingComponent.prototype, "regisnumberInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)("chassisnumber", { static: false })
], BookingComponent.prototype, "chassisnumberInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)("brand", { static: false })
], BookingComponent.prototype, "brandInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)("piexchange", { static: false })
], BookingComponent.prototype, "piexchangeInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)("mileage", { static: false })
], BookingComponent.prototype, "mileageInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)("mfgyear", { static: false })
], BookingComponent.prototype, "mfgyearInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)("otpRefModal", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false })
], BookingComponent.prototype, "otpRefModal", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)("financeSuccessModal", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false })
], BookingComponent.prototype, "financeSuccessModal", void 0);
BookingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: "app-booking",
        templateUrl: "./booking.component.html",
        styleUrls: ["./booking.component.scss"],
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__param)(17, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID))
], BookingComponent);

class PaymentResponse {
}


/***/ }),

/***/ 714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingModule": () => (/* binding */ BookingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(193);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(573);
/* harmony import */ var _booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(715);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(583);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* harmony import */ var _Modals_get_otp_modal_get_otp_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(584);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(590);
/* harmony import */ var _Modals_customer_support_customer_support_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(588);
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(717);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(628);












const appRoutes = [{
        path: '', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent
    }];
let BookingModule = class BookingModule {
};
BookingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_1__.CurrencyFormatPipe],
        imports: [_booking_routing_module__WEBPACK_IMPORTED_MODULE_4__.BookingRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _Modals_get_otp_modal_get_otp_modal_module__WEBPACK_IMPORTED_MODULE_2__.GetOtpModalModule,
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.ModalModule.forRoot(),
            _Modals_customer_support_customer_support_module__WEBPACK_IMPORTED_MODULE_3__.CustomerSupportModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(appRoutes), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.ModalModule.forRoot()
        ],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalService]
    })
], BookingModule);



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

/***/ 716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyFormatPipe": () => (/* binding */ CurrencyFormatPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);



let CurrencyFormatPipe = class CurrencyFormatPipe {
    constructor(platformId) {
        this.platformId = platformId;
    }
    transform(value) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            if (!isNaN(value)) {
                var currencySymbol = '₹';
                var result = value.toString().split('.');
                var lastThree = result[0].substring(result[0].length - 3);
                var otherNumbers = result[0].substring(0, result[0].length - 3);
                if (otherNumbers != '')
                    lastThree = ',' + lastThree;
                var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
                if (result.length > 1) {
                    output += "." + result[1];
                }
                return currencySymbol + output;
            }
        }
    }
};
CurrencyFormatPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'currencyFormat',
        pure: false
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID))
], CurrencyFormatPipe);



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