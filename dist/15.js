"use strict";
exports.id = 15;
exports.ids = [15];
exports.modules = {

/***/ 713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycUploadComponent": () => (/* binding */ KycUploadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(421);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__);






let KycUploadComponent = class KycUploadComponent {
    constructor(fb, apiList, dataService, platformId, modelService, router, toastr) {
        this.fb = fb;
        this.apiList = apiList;
        this.dataService = dataService;
        this.platformId = platformId;
        this.modelService = modelService;
        this.router = router;
        this.toastr = toastr;
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription();
        this.addressList = [
            { name: "Passport", value: "passport" },
            { name: "Aadhar Card", value: "adhar_card" },
            { name: "Ration Card", value: "ration_card" },
            { name: "Driving License", value: "driving_license" },
            { name: "Utility Bill", value: "utility_bill" },
        ];
        this.idList = [
            { name: "Pan Card", value: "id_pancard" },
            { name: "Voter ID Card", value: "id_voter_card" },
        ];
        this.showAddPrev = false;
        this.showIdPrev = false;
        this.errormsg = "";
        this.kycdetailList = [];
    }
    ngOnInit() {
        this.buildKycDocUploadForm();
        this.BindKYCdetail();
    }
    buildKycDocUploadForm() {
        this.kycDocUploadForm = this.fb.group({
            addressProofName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            addressProofFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            idProofName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            idProofFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
    }
    BindKYCdetail() {
        this.kycdetailList = [];
        let request = { start_row: 0, end_row: 10 };
        let apiUrl = this.apiList.returnAPI('listKYC');
        this.sub.add(this.dataService.post(apiUrl, request).subscribe((data) => {
            if (data["success"]) {
                this.kycdetailList = data.data;
                var address_proofdata = this.kycdetailList.filter((details) => details.document_type === 'Address Proof');
                var Id_proofdata = this.kycdetailList.filter((details) => details.document_type === 'ID Proof');
                if (address_proofdata.length === 0 && Id_proofdata.length === 0) {
                    this.errormsg = "Please Upload Address Proof and Id Proof";
                }
                else if (address_proofdata.length === 0) {
                    this.errormsg = "Please Upload Address Proof";
                }
                else if (Id_proofdata.length === 0) {
                    this.errormsg = "Please Upload Id Proof";
                }
                else {
                    this.errormsg = "";
                }
            }
            else {
                this.kycdetailList = [];
                this.errormsg = "Please Upload Address Proof and Id Proof";
            }
        }));
    }
    deleteItem() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            let apiUrl = this.apiList.returnAPI('deleteKYC');
            this.deleteConfimModal.hide();
            this.sub.add(this.dataService.post(apiUrl, { user_document_id: `${this.deleteDoc.id}` }).subscribe((res) => {
                if (res.success) {
                    this.toastr.success(res.data.msg);
                    this.BindKYCdetail();
                }
                else {
                    this.toastr.error(res.data.msg);
                }
            }));
        }
    }
    getaddressFileDetails(event, docType) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            if (event.target.files && event.target.files[0]) {
                var Extension = event.target.files[0].name
                    .substring(event.target.files[0].name.lastIndexOf(".") + 1)
                    .toLowerCase();
                if (Extension == "JPEG" || Extension == "jpeg" || Extension == "jpg" || Extension == "png" ||
                    Extension == "JPG" || Extension == "PNG") {
                    const file = event.target.files[0];
                    if (file.size < 5000000) {
                        var reader = new FileReader();
                        reader.readAsDataURL(event.target.files[0]); // read file as data url
                        reader.onload = (event) => {
                            document.getElementById(docType == "address" ? "displayUploadAdDoc" : docType == 'Id' ? "displayUploadIDDoc" : "").setAttribute('src', event.target.result.toString());
                            docType == "address" ? this.kycDocUploadForm.controls['addressProofFile'].setValue(event.target.result)
                                : docType == 'Id' ? this.kycDocUploadForm.controls['idProofFile'].setValue(event.target.result)
                                    : '';
                        };
                        docType == "address" ? this.showAddPrev = true : docType == "Id" ? this.showIdPrev = true : false;
                    }
                    else {
                        this.toastr.error("File size should not be more than 5 MB.");
                        this.myInputVariable.nativeElement.value = '';
                    }
                }
                else {
                    this.toastr.error("Only JPEG,PNG and JPG files are allowed.");
                    this.myInputVariable.nativeElement.value = '';
                }
            }
        }
    }
    openCOnfirmationModal(document) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.deleteDoc = document;
            this.deleteConfimModal = this.modelService.show(this.confirmationMOdal, {
                class: 'modal-dialog-centered modal-md', backdrop: 'static',
            });
        }
    }
    uploadAddressFile() {
        this.myInputVariable.nativeElement.value = '';
        this.showAddPrev = false;
        this.kycDocUploadForm.controls['addressProofFile'].setValue('');
        this.myInputVariable.nativeElement.click();
    }
    uploadIdFile() {
        this.myInputVariableID.nativeElement.value = '';
        this.showIdPrev = false;
        this.kycDocUploadForm.controls['idProofFile'].setValue('');
        this.myInputVariableID.nativeElement.click();
    }
    submitKycDetails() {
        if (this.kycDocUploadForm.controls['addressProofName'].value === '' && this.kycDocUploadForm.controls['idProofName'].value === '') {
            this.toastr.error("Select atleast one proof type from Address or ID proof Description and Document file.");
            return;
        }
        else {
            if (this.kycDocUploadForm.controls['addressProofName'].value != '' && this.kycDocUploadForm.controls['addressProofFile'].value == '') {
                this.toastr.error("Select Address Upload File");
                return;
            }
            else if (this.kycDocUploadForm.controls['addressProofName'].value == '' && this.kycDocUploadForm.controls['addressProofFile'].value != '') {
                this.toastr.error("Select Address Document Type");
                return;
            }
            if (this.kycDocUploadForm.controls['idProofName'].value != '' && this.kycDocUploadForm.controls['idProofFile'].value == '') {
                this.toastr.error("Select ID Proof Upload File");
                return;
            }
            else if (this.kycDocUploadForm.controls['idProofName'].value == '' && this.kycDocUploadForm.controls['idProofFile'].value != '') {
                this.toastr.error("Select ID Document Type");
                return;
            }
            let req = this.getReturnRequest();
            let apiUrl = this.apiList.returnAPI('uploadKYC');
            this.sub.add(this.dataService.post(apiUrl, req).subscribe({
                next: (res) => {
                    if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
                        return;
                    }
                    if (res.success) {
                        this.toastr.success("Your KYC Detail has submitted successfully", "Thank you!");
                        this.buildKycDocUploadForm();
                        this.BindKYCdetail();
                        this.showAddPrev = false;
                        this.showIdPrev = false;
                    }
                    else {
                        this.toastr.error(res.data.msg);
                        return;
                    }
                },
                error: (err) => {
                    this.toastr.error(err.error.data.msg);
                    return;
                }
            }));
        }
    }
    getReturnRequest() {
        let req = {
            "address_proofs": this.kycDocUploadForm.controls['addressProofFile'].value ? [
                {
                    "data": this.kycDocUploadForm.controls['addressProofFile'].value,
                    "document_type": "Address Proof",
                    "document_description": this.kycDocUploadForm.controls['addressProofName'].value
                }
            ] : [],
            "id_proofs": this.kycDocUploadForm.controls['idProofFile'].value ? [
                {
                    "data": this.kycDocUploadForm.controls['idProofFile'].value,
                    "document_type": "ID Proof",
                    "document_description": this.kycDocUploadForm.controls['idProofName'].value
                }
            ] : []
        };
        return req;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild)('inputFile', { static: false })
], KycUploadComponent.prototype, "myInputVariable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild)('inputFileID', { static: false })
], KycUploadComponent.prototype, "myInputVariableID", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild)('deleteConfirmationModel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.TemplateRef, static: false })
], KycUploadComponent.prototype, "confirmationMOdal", void 0);
KycUploadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-kyc-upload',
        templateUrl: './kyc-upload.component.html',
        styleUrls: ['./kyc-upload.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(3, (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID))
], KycUploadComponent);



/***/ }),

/***/ 712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycUploadModule": () => (/* binding */ KycUploadModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _kyc_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(573);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(590);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(583);







const routes = [{ path: '', component: _kyc_upload_component__WEBPACK_IMPORTED_MODULE_0__.KycUploadComponent }];
let KycUploadModule = class KycUploadModule {
};
KycUploadModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _kyc_upload_component__WEBPACK_IMPORTED_MODULE_0__.KycUploadComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalModule.forRoot()
        ],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.BsModalService]
    })
], KycUploadModule);



/***/ })

};
;