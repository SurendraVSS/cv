"use strict";(self.webpackChunktata_cv_online=self.webpackChunktata_cv_online||[]).push([[367],{1349:(_,b,n)=>{n.d(b,{_:()=>g});var u=n(9808),t=n(3075),m=n(4893);let g=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=m.oAB({type:l}),l.\u0275inj=m.cJS({imports:[[u.ez,t.u5,t.UX]]}),l})()},4367:(_,b,n)=>{n.r(b),n.d(b,{TestimonialsListModule:()=>F});var u=n(9808),t=n(4893),m=n(727),g=n(2340),l=n(2313),r=n(6900),p=n(7066),T=n(3730),P=n(1415),O=n(6227),C=n(5141),y=n(4624),x=n(4083);const U=["showTestimonial"];function S(o,h){1&o&&t._UZ(0,"app-breadcrumb-list")}function w(o,h){if(1&o&&(t.TgZ(0,"div",17)(1,"a",18)(2,"div",19)(3,"div",20),t._UZ(4,"iframe",21),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"h4"),t._uU(8),t.qZA()()()()),2&o){const e=h.$implicit;t.xp6(4),t.Q6J("src",e.video_url,t.uOi),t.xp6(2),t.Oqu(e.description?e.description:"-"),t.xp6(2),t.Oqu(e.name?e.name:"-")}}function Z(o,h){if(1&o&&(t.TgZ(0,"div",17)(1,"a",22)(2,"div",23)(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"h4"),t._uU(6),t.qZA()()()()),2&o){const e=h.$implicit;t.xp6(4),t.Oqu(e.description?e.description:"-"),t.xp6(2),t.Oqu(e.name?e.name:"-")}}function D(o,h){if(1&o){const e=t.EpF();t.TgZ(0,"app-pagination",24),t.NdJ("onPageChange",function(c){return t.CHM(e),t.oxw().pageChange(c)}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("activePage",e.currentPage)("totalRecords",e.totalrecord)("recordsPerPage",10)}}let L=(()=>{class o{constructor(e,a,c,v,s,i,d,f){this.platformId=e,this.sanitizer=a,this.apiList=c,this.dataService=v,this.skeletonService=s,this.localStorage=i,this.seoservice=d,this.router=f,this.metatitle="Testimonial - Tata Motors Online Sales",this.metadesc="Testimonial - Tata Motors . Know more about Tata Motors vehicles",this.sub=new m.w0,this.pageTitle="Home",this.testimonialVideoData=[],this.testimonialReadData=[],this.heavyTruck=[],this.tractorTrailer=[],this.hcvConst=[],this.lcvTruck=[],this.scvCargo=[],this.buses=[],this.scvPass=[],this.popularProducts=[],this.currentPage=1,this.showBreadCrumb=!1,this.breadcrumbdata=[]}ngOnInit(){this.seo(),this.GetTestmonialVideo(0)}seo(){this.seoservice.updateTitle(this.metatitle),this.seoservice.updateMetaTag("description",null,this.metadesc),this.seoservice.updateMetaTag(null,"og:locale","en_US"),this.seoservice.updateMetaTag(null,"og:type","Website"),this.seoservice.updateMetaTag(null,"og:title",this.metatitle),this.seoservice.updateMetaTag(null,"og:description",this.metadesc),this.seoservice.updateMetaTag(null,"og:url",g.N.baseUrl+this.router.url),this.seoservice.updateMetaTag(null,"og:site_name","Tata OSP")}GetTestmonialVideo(e){(0,u.NF)(this.platformId)&&(this.breadcrumbdata=this.localStorage.getItem("localBreadCrumb"),this.showBreadCrumb=!0);var a={type_of_testimonial:"",offset:10*e,size:10*e+10};let c=this.apiList.returnAPI("getTestimonials");this.sub.add(this.dataService.post(c,a).subscribe(v=>{if(v.success){this.testimonialReadData=v.data,this.totalrecord=v.range_info.total_count,this.testimonialVideoData=[];for(var s=v.data,i=0;i<s.length;i++)try{if(""!=s[i].video_url){if(this.videoType="VideoUrl",s[i].video_url){let f=s[i].video_url;this.testSafeUrl=this.sanitizer.bypassSecurityTrustResourceUrl(f);var d=this.youtube_parser(f);this.testimonialVideoData.push(this.formDataVideo(s[i].name,this.testSafeUrl,s[i].designation,"https://img.youtube.com/vi/"+d+"/mqdefault.jpg",s[i].model,s[i].description))}}else{this.videoType="YouTubeUrl";let Y="https://img.youtube.com/vi/"+(d=this.youtube_parser(s[i].yt_url))+"/mqdefault.jpg";this.testSafeUrl=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+d+"?autoplay=0&loop=1&autopause=0"),this.testimonialVideoData.push(this.formDataVideo(s[i].name,this.testSafeUrl,s[i].designation,Y,s[i].model,s[i].description))}}catch(f){}}}))}youtube_parser(e){if((0,u.NF)(this.platformId)){var c=e.match(/^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i);return!(!c||11!=c[1].length)&&c[1]}}formDataVideo(e,a,c,v,s,i){const d={};return d.name=e,d.video_url=a,d.designation=c,d.thaumbimage=v,d.model=s,d.description=i,d}pageChange(e){this.currentPage=e,this.GetTestmonialVideo(e-=1)}changeTestimonial(){this.currentPage=0,this.GetTestmonialVideo(this.currentPage)}ngOnDestroy(){this.sub.unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Lbi),t.Y36(l.H7),t.Y36(r.a),t.Y36(p.D),t.Y36(T.i),t.Y36(P.p),t.Y36(O.v),t.Y36(C.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-testimonials-list"]],viewQuery:function(e,a){if(1&e&&t.Gf(U,5,t.Rgc),2&e){let c;t.iGM(c=t.CRH())&&(a.showTestimonial=c.first)}},decls:26,vars:4,consts:[[1,"product-explore"],[1,"container"],[1,"row"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12"],[4,"ngIf"],[1,"testimonial-section","pt-5","pb-5"],[1,"content-heading","mb-3"],["id","compareTab","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","watchT-tab","data-bs-toggle","tab","data-bs-target","#watchT","type","button","role","tab","aria-controls","watchT","aria-selected","true",1,"nav-link","active",3,"click"],["id","readT-tab","data-bs-toggle","tab","data-bs-target","#readT","type","button","role","tab","aria-controls","readT","aria-selected","false",1,"nav-link",3,"click"],["id","compareTabContent",1,"tab-content","pt-4"],["id","watchT","role","tabpanel","aria-labelledby","watchT-tab",1,"tab-pane","fade","show","active"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-4","row-cols-lg-4","row-cols-xl-4","g-5"],["class","col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4",4,"ngFor","ngForOf"],["id","readT","role","tabpanel","aria-labelledby","readT-tab",1,"tab-pane","fade","readT"],[3,"activePage","totalRecords","recordsPerPage","onPageChange",4,"ngIf"],[1,"col-12","col-sm-6","col-md-4","col-lg-4","col-xl-4"],[1,"card","border-0"],[1,"card-body","p-0"],[1,"img-box"],["allowfullscreen","","autoplay","",1,"embed-responsive-item",3,"src"],["href","#",1,"card","border-0"],[1,"card-body"],[3,"activePage","totalRecords","recordsPerPage","onPageChange"]],template:function(e,a){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,S,1,0,"app-breadcrumb-list",4),t.qZA()()()(),t.TgZ(5,"section",5)(6,"div",1)(7,"div",6)(8,"h2"),t._uU(9,"Testimonial"),t.qZA()(),t.TgZ(10,"ul",7)(11,"li",8)(12,"button",9),t.NdJ("click",function(){return a.changeTestimonial()}),t._uU(13," Watch Testimonials "),t.qZA()(),t.TgZ(14,"li",8)(15,"button",10),t.NdJ("click",function(){return a.changeTestimonial()}),t._uU(16," Read Testimonials "),t.qZA()()(),t.TgZ(17,"div",11)(18,"div",12)(19,"div",13),t.YNc(20,w,9,3,"div",14),t.qZA()(),t.TgZ(21,"div",15)(22,"div",13),t.YNc(23,Z,7,2,"div",14),t.qZA()(),t.TgZ(24,"div"),t.YNc(25,D,1,3,"app-pagination",16),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("ngIf",a.showBreadCrumb),t.xp6(16),t.Q6J("ngForOf",a.testimonialVideoData),t.xp6(3),t.Q6J("ngForOf",a.testimonialReadData),t.xp6(2),t.Q6J("ngIf",a.totalrecord>10))},directives:[u.O5,y.Q,u.sg,x.Q],styles:[".testimonial-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0a0a5f;font-family:UniNeue-heavy;font-size:36px;letter-spacing:0;line-height:49px;text-transform:uppercase}.testimonial-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul.nav-tabs[_ngcontent-%COMP%]{border-width:2px}.testimonial-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul.nav-tabs[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   button.nav-link[_ngcontent-%COMP%]{border-top:unset;border-right:unset;border-left:unset;background-color:unset;font-size:16px;font-family:UniNeue-bold;color:#222;border:unset}.testimonial-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul.nav-tabs[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   button.nav-link.active[_ngcontent-%COMP%]{border-bottom-width:2px;border-bottom-style:solid;border-color:#0a0a5f;color:#0a0a5f}.testimonial-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{color:#222;font-family:UniNeue-book;font-size:14px;letter-spacing:0;line-height:18px;text-decoration:none}.testimonial-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.testimonial-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.testimonial-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#222;font-family:UniNeue-heavy;font-size:18px;letter-spacing:0;line-height:24px}.testimonial-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .tab-pane.readT[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:10px;background-color:#fff;box-shadow:0 0 20px #d3d3d380;min-height:212px}.testimonial-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .tab-pane.readT[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0a0a5f;font-family:UniNeue-heavy;font-size:18px;letter-spacing:0;line-height:24px}"]}),o})();var A=n(7200),E=n(1349),M=n(3075),I=n(8395);const R=[{path:"",component:L}];let F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,M.u5,I.m,M.UX,C.Bz.forChild(R),A.u,E._]]}),o})()},6227:(_,b,n)=>{n.d(b,{v:()=>m});var u=n(4893),t=n(2313);let m=(()=>{class g{constructor(r,p){this.title=r,this.meta=p}updateTitle(r){this.title.setTitle(r),this.meta.updateTag({property:"title",content:r})}updateMetaTag(r,p,T){this.meta.updateTag(null===r?{property:p,content:T}:{name:r,content:T})}}return g.\u0275fac=function(r){return new(r||g)(u.LFG(t.Dx),u.LFG(t.h_))},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},3730:(_,b,n)=>{n.d(b,{i:()=>t});var u=n(4893);let t=(()=>{class m{constructor(){}generateFake(l){const r=[];for(let p=0;p<l;p++)r.push(p);return r}}return m.\u0275fac=function(l){return new(l||m)},m.\u0275prov=u.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);