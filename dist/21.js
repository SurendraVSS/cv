"use strict";
exports.id = 21;
exports.ids = [21];
exports.modules = {

/***/ 735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailsComponent": () => (/* binding */ BlogDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(195);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);






let BlogDetailsComponent = class BlogDetailsComponent {
    constructor(route, apiList, localStorage, seoservice, skeletonService, dataService, sanitizer, router, platformId) {
        this.route = route;
        this.apiList = apiList;
        this.localStorage = localStorage;
        this.seoservice = seoservice;
        this.skeletonService = skeletonService;
        this.dataService = dataService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.platformId = platformId;
        this.metatitle = "Blogs - Tata Motors Online Sales";
        this.metadesc = "Blogs - Tata Motors . Know more about Tata Motors vehicles";
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.blogListDetailData = [];
        this.breadcrumbdata = [];
        this.showBreadCrumb = false;
    }
    ngOnInit() {
        this.seo();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.breadcrumbdata = this.localStorage.getItem('localBreadCrumb');
            this.showBreadCrumb = true;
        }
        this.sub.add(this.route.params.subscribe((params) => {
            this.id = params["id"];
        }));
        this.blogList(this.id);
        // this.blogList();
        this.gettagList();
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
    blogList(id, tags, limit, title) {
        this.blogListData = [];
        let data = {};
        data["id"] = id ? id : "";
        data["tag"] = tags ? tags : "";
        data["author_name"] = "";
        data["title"] = title ? title : "";
        data["from_date"] = "";
        data["to_date"] = "";
        data["offset"] = 0;
        data["blog_status"] = "APPROVED";
        if (limit) {
            data["limit"] = limit;
        }
        let apiUrl = this.apiList.returnAPI('getBlogList');
        this.sub.add(this.dataService.post(apiUrl, data).subscribe((response) => {
            var videodata = response.data;
            for (var k = 0; k < videodata.length; k++) {
                let urls = videodata[k]["youtube_url"];
                if (urls) {
                    var vthaumbimage = this.youtube_parser(urls);
                    let img = "https://img.youtube.com/vi/" + vthaumbimage + "/mqdefault.jpg";
                    let videos = "https://www.youtube.com/embed/" + vthaumbimage + "?autoplay=0&loop=1&autopause=0";
                    this.testSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videos);
                }
                else {
                    this.testSafeUrl = null;
                }
                this.blogListData.push(this.formDataVideo(videodata[k]["id"], videodata[k]["title"], videodata[k]["tag"], videodata[k]["description"], this.testSafeUrl, videodata[k]["image_path"], videodata[k]["type_of_blog"], videodata[k]["created_date"], videodata[k]["author_name"], videodata[k]["author_image"], videodata[k]["author_description"]));
            }
            if (tags) {
                this.blogtagListData = this.blogListData;
                // this.blogList("","",5);
            }
            else if (id) {
                this.blogListDetailData = this.blogListData;
                this.tags = this.blogListData[0].tag;
                // this.blogList("", this.blogListData[0].tag,5);
            }
            else {
                this.recentArticles = this.blogListData;
            }
            document.body.scrollTop = 0;
        }));
    }
    youtube_parser(url) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
            var match = url.match(regExp);
            return match && match[1].length == 11 ? match[1] : false;
        }
    }
    formDataVideo(id, title, tag, description, youtube_url, image_path, type_of_blog, created_date, author_name, author_image, author_description) {
        const userData = {};
        userData.id = id;
        userData.title = title;
        userData.tag = tag;
        userData.description = description;
        userData.youtube_url = youtube_url;
        userData.image_path = image_path;
        userData.type_of_blog = type_of_blog;
        userData.created_date = created_date;
        userData.author_name = author_name;
        userData.author_image = author_image;
        userData.author_description = author_description;
        return userData;
    }
    searchData(data) {
        this.router.navigate(['/blogs/' + data]);
    }
    searchOnTags(tags) {
        // this.blogList("", [tags]);
        this.router.navigate(["/blogs"], {
            queryParams: {
                tag: tags
                // segment: event ? event.segment : '',
                // main_vehicle_cat: event ? event.main_vehicle_cat : '',
                // model: event ? event.model : '',
                // budget: event ? event.budget : '',
                // actual_lob: this.selectValue ? this.selectValue.replace(/\s/g, "-").toLowerCase() : ''
            },
        });
    }
    gettagList() {
        let apiUrl = this.apiList.returnAPI('getTagList');
        this.sub.add(this.dataService.post(apiUrl, "").subscribe((response) => {
            if (response["success"]) {
                this.tagList = response.data;
            }
            else {
                this.tagList = [];
            }
        }));
    }
};
BlogDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-blog-details',
        templateUrl: './blog-details.component.html',
        styleUrls: ['./blog-details.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(8, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID))
], BlogDetailsComponent);



/***/ }),

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailModule": () => (/* binding */ BlogDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(193);
/* harmony import */ var _blog_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(735);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(573);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(619);
/* harmony import */ var _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(613);
/* harmony import */ var ngx_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(620);
/* harmony import */ var _Modals_modals_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(615);
/* harmony import */ var _Static_Pages_services_services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(621);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(583);











// import { SharedModule } from 'src/shared/shared.module';
const routes = [{ path: '', component: _blog_details_component__WEBPACK_IMPORTED_MODULE_0__.BlogDetailsComponent }];
let BlogDetailModule = class BlogDetailModule {
};
BlogDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _blog_details_component__WEBPACK_IMPORTED_MODULE_0__.BlogDetailsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselModule, _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__.BannerModule, ngx_skeleton__WEBPACK_IMPORTED_MODULE_8__.NgxSkeletonModule, _Modals_modals_module__WEBPACK_IMPORTED_MODULE_2__.ModalsModule, _Static_Pages_services_services_module__WEBPACK_IMPORTED_MODULE_3__.ServicesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            // SharedModule
        ]
    })
], BlogDetailModule);



/***/ })

};
;