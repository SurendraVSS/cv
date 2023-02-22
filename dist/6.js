"use strict";
exports.id = 6;
exports.ids = [6];
exports.modules = {

/***/ 630:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfiniteScrollDirective": () => (/* binding */ InfiniteScrollDirective),
/* harmony export */   "InfiniteScrollModule": () => (/* binding */ InfiniteScrollModule),
/* harmony export */   "NgxInfiniteScrollService": () => (/* binding */ NgxInfiniteScrollService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(195);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(418);





class NgxInfiniteScrollService {
    constructor() { }
}
NgxInfiniteScrollService.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "13.1.2", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgxInfiniteScrollService, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable });
NgxInfiniteScrollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({ minVersion: "12.0.0", version: "13.1.2", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgxInfiniteScrollService, providedIn: 'root' });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "13.1.2", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgxInfiniteScrollService, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
    const hasWindow = window && !!window.document && window.document.documentElement;
    let container = hasWindow && scrollWindow ? window : defaultElement;
    if (selector) {
        const containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString
            ? findElement(selector, defaultElement.nativeElement, fromRoot)
            : selector;
        if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
    }
    return container;
}
function findElement(selector, customRoot, fromRoot) {
    const rootEl = fromRoot ? window.document : customRoot;
    return rootEl.querySelector(selector);
}
function inputPropChanged(prop) {
    return prop && !prop.firstChange;
}
function hasWindowDefined() {
    return typeof window !== 'undefined';
}

const VerticalProps = {
    clientHeight: "clientHeight",
    offsetHeight: "offsetHeight",
    scrollHeight: "scrollHeight",
    pageYOffset: "pageYOffset",
    offsetTop: "offsetTop",
    scrollTop: "scrollTop",
    top: "top"
};
const HorizontalProps = {
    clientHeight: "clientWidth",
    offsetHeight: "offsetWidth",
    scrollHeight: "scrollWidth",
    pageYOffset: "pageXOffset",
    offsetTop: "offsetLeft",
    scrollTop: "scrollLeft",
    top: "left"
};
class AxisResolver {
    constructor(vertical = true) {
        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
    }
    clientHeightKey() {
        return this.propsMap.clientHeight;
    }
    offsetHeightKey() {
        return this.propsMap.offsetHeight;
    }
    scrollHeightKey() {
        return this.propsMap.scrollHeight;
    }
    pageYOffsetKey() {
        return this.propsMap.pageYOffset;
    }
    offsetTopKey() {
        return this.propsMap.offsetTop;
    }
    scrollTopKey() {
        return this.propsMap.scrollTop;
    }
    topKey() {
        return this.propsMap.top;
    }
}

function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
    if (alwaysCallback && shouldFireScrollEvent) {
        return true;
    }
    if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
        return true;
    }
    return false;
}

function createResolver({ windowElement, axis, }) {
    return createResolverWithContainer({ axis, isWindow: isElementWindow(windowElement) }, windowElement);
}
function createResolverWithContainer(resolver, windowElement) {
    const container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
        ? windowElement
        : windowElement.nativeElement;
    return Object.assign(Object.assign({}, resolver), { container });
}
function isElementWindow(windowElement) {
    const isWindow = ['Window', 'global'].some((obj) => Object.prototype.toString.call(windowElement).includes(obj));
    return isWindow;
}
function getDocumentElement(isContainerWindow, windowElement) {
    return isContainerWindow ? windowElement.document.documentElement : null;
}
function calculatePoints(element, resolver) {
    const height = extractHeightForElement(resolver);
    return resolver.isWindow
        ? calculatePointsForWindow(height, element, resolver)
        : calculatePointsForElement(height, element, resolver);
}
function calculatePointsForWindow(height, element, resolver) {
    const { axis, container, isWindow } = resolver;
    const { offsetHeightKey, clientHeightKey } = extractHeightPropKeys(axis);
    // scrolled until now / current y point
    const scrolled = height +
        getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
    // total height / most bottom y point
    const nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
    const totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
        nativeElementHeight;
    return { height, scrolled, totalToScroll, isWindow };
}
function calculatePointsForElement(height, element, resolver) {
    const { axis, container } = resolver;
    // perhaps use container.offsetTop instead of 'scrollTop'
    const scrolled = container[axis.scrollTopKey()];
    const totalToScroll = container[axis.scrollHeightKey()];
    return { height, scrolled, totalToScroll, isWindow: false };
}
function extractHeightPropKeys(axis) {
    return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey(),
    };
}
function extractHeightForElement({ container, isWindow, axis, }) {
    const { offsetHeightKey, clientHeightKey } = extractHeightPropKeys(axis);
    return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
    if (isNaN(elem[offsetHeightKey])) {
        const docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
    }
    else {
        return elem[offsetHeightKey];
    }
}
function getElementOffsetTop(elem, axis, isWindow) {
    const topKey = axis.topKey();
    // elem = elem.nativeElement;
    if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
    }
    return (elem.getBoundingClientRect()[topKey] +
        getElementPageYOffset(elem, axis, isWindow));
}
function getElementPageYOffset(elem, axis, isWindow) {
    const pageYOffset = axis.pageYOffsetKey();
    const scrollTop = axis.scrollTopKey();
    const offsetTop = axis.offsetTopKey();
    if (isNaN(window.pageYOffset)) {
        return getDocumentElement(isWindow, elem)[scrollTop];
    }
    else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
    }
    else {
        return elem[offsetTop];
    }
}

function shouldFireScrollEvent(container, distance = { down: 0, up: 0 }, scrollingDown) {
    let remaining;
    let containerBreakpoint;
    if (container.totalToScroll <= 0) {
        return false;
    }
    const scrolledUntilNow = container.isWindow
        ? container.scrolled
        : container.height + container.scrolled;
    if (scrollingDown) {
        remaining =
            (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        const distanceDown = (distance === null || distance === void 0 ? void 0 : distance.down) ? distance.down : 0;
        containerBreakpoint = distanceDown / 10;
    }
    else {
        const totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
        remaining = container.scrolled / totalHiddenContentHeight;
        const distanceUp = (distance === null || distance === void 0 ? void 0 : distance.up) ? distance.up : 0;
        containerBreakpoint = distanceUp / 10;
    }
    const shouldFireEvent = remaining <= containerBreakpoint;
    return shouldFireEvent;
}
function isScrollingDownwards(lastScrollPosition, container) {
    return lastScrollPosition < container.scrolled;
}
function getScrollStats(lastScrollPosition, container, distance) {
    const scrollDown = isScrollingDownwards(lastScrollPosition, container);
    return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown,
    };
}
function updateScrollPosition(position, scrollState) {
    return (scrollState.lastScrollPosition = position);
}
function updateTotalToScroll(totalToScroll, scrollState) {
    if (scrollState.lastTotalToScroll !== totalToScroll) {
        scrollState.lastTotalToScroll = scrollState.totalToScroll;
        scrollState.totalToScroll = totalToScroll;
    }
}
function isSameTotalToScroll(scrollState) {
    return scrollState.totalToScroll === scrollState.lastTotalToScroll;
}
function updateTriggeredFlag(scroll, scrollState, triggered, isScrollingDown) {
    if (isScrollingDown) {
        scrollState.triggered.down = scroll;
    }
    else {
        scrollState.triggered.up = scroll;
    }
}
function isTriggeredScroll(totalToScroll, scrollState, isScrollingDown) {
    return isScrollingDown
        ? scrollState.triggered.down === totalToScroll
        : scrollState.triggered.up === totalToScroll;
}
function updateScrollState(scrollState, scrolledUntilNow, totalToScroll) {
    updateScrollPosition(scrolledUntilNow, scrollState);
    updateTotalToScroll(totalToScroll, scrollState);
    // const isSameTotal = isSameTotalToScroll(scrollState);
    // if (!isSameTotal) {
    //   updateTriggeredFlag(scrollState, false, isScrollingDown);
    // }
}

class ScrollState {
    constructor({ totalToScroll }) {
        this.lastScrollPosition = 0;
        this.lastTotalToScroll = 0;
        this.totalToScroll = 0;
        this.triggered = {
            down: 0,
            up: 0,
        };
        this.totalToScroll = totalToScroll;
    }
    updateScrollPosition(position) {
        return (this.lastScrollPosition = position);
    }
    updateTotalToScroll(totalToScroll) {
        if (this.lastTotalToScroll !== totalToScroll) {
            this.lastTotalToScroll = this.totalToScroll;
            this.totalToScroll = totalToScroll;
        }
    }
    updateScroll(scrolledUntilNow, totalToScroll) {
        this.updateScrollPosition(scrolledUntilNow);
        this.updateTotalToScroll(totalToScroll);
    }
    updateTriggeredFlag(scroll, isScrollingDown) {
        if (isScrollingDown) {
            this.triggered.down = scroll;
        }
        else {
            this.triggered.up = scroll;
        }
    }
    isTriggeredScroll(totalToScroll, isScrollingDown) {
        return isScrollingDown
            ? this.triggered.down === totalToScroll
            : this.triggered.up === totalToScroll;
    }
}

function createScroller(config) {
    const { scrollContainer, scrollWindow, element, fromRoot } = config;
    const resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot),
    });
    const scrollState = new ScrollState({
        totalToScroll: calculatePoints(element, resolver),
    });
    const options = {
        container: resolver.container,
        throttle: config.throttle,
    };
    const distance = {
        up: config.upDistance,
        down: config.downDistance,
    };
    return attachScrollEvent(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(calculatePoints(element, resolver))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((positionStats) => toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(({ stats }) => scrollState.updateScroll(stats.scrolled, stats.totalToScroll)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(({ fire, scrollDown, stats: { totalToScroll } }) => shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(({ scrollDown, stats: { totalToScroll } }) => {
        scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(toInfiniteScrollAction));
}
function attachScrollEvent(options) {
    let obs = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(options.container, 'scroll');
    // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
    // Let's avoid calling the function unless needed.
    // Replacing with throttleTime seems to solve the problem
    // See https://github.com/orizens/ngx-infinite-scroll/issues/198
    if (options.throttle) {
        obs = obs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.throttleTime)(options.throttle, undefined, {
            leading: true,
            trailing: true,
        }));
    }
    return obs;
}
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
    const { scrollDown, fire } = getScrollStats(lastScrollPosition, stats, distance);
    return {
        scrollDown,
        fire,
        stats,
    };
}
const InfiniteScrollActions = {
    DOWN: '[NGX_ISE] DOWN',
    UP: '[NGX_ISE] UP',
};
function toInfiniteScrollAction(response) {
    const { scrollDown, stats: { scrolled: currentScrollPosition }, } = response;
    return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
            currentScrollPosition,
        },
    };
}

class InfiniteScrollDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
    }
    ngAfterViewInit() {
        if (!this.infiniteScrollDisabled) {
            this.setup();
        }
    }
    ngOnChanges({ infiniteScrollContainer, infiniteScrollDisabled, infiniteScrollDistance, }) {
        const containerChanged = inputPropChanged(infiniteScrollContainer);
        const disabledChanged = inputPropChanged(infiniteScrollDisabled);
        const distanceChanged = inputPropChanged(infiniteScrollDistance);
        const shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
            (disabledChanged && !infiniteScrollDisabled.currentValue) ||
            distanceChanged;
        if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();
            if (shouldSetup) {
                this.setup();
            }
        }
    }
    setup() {
        if (hasWindowDefined()) {
            this.zone.runOutsideAngular(() => {
                this.disposeScroller = createScroller({
                    fromRoot: this.fromRoot,
                    alwaysCallback: this.alwaysCallback,
                    disable: this.infiniteScrollDisabled,
                    downDistance: this.infiniteScrollDistance,
                    element: this.element,
                    horizontal: this.horizontal,
                    scrollContainer: this.infiniteScrollContainer,
                    scrollWindow: this.scrollWindow,
                    throttle: this.infiniteScrollThrottle,
                    upDistance: this.infiniteScrollUpDistance,
                }).subscribe((payload) => this.zone.run(() => this.handleOnScroll(payload)));
            });
        }
    }
    handleOnScroll({ type, payload }) {
        switch (type) {
            case InfiniteScrollActions.DOWN:
                return this.scrolled.emit(payload);
            case InfiniteScrollActions.UP:
                return this.scrolledUp.emit(payload);
            default:
                return;
        }
    }
    ngOnDestroy() {
        this.destroyScroller();
    }
    destroyScroller() {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    }
}
InfiniteScrollDirective.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "13.1.2", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: InfiniteScrollDirective, deps: [{ token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive });
InfiniteScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "12.0.0", version: "13.1.2", type: InfiniteScrollDirective, selector: "[infiniteScroll], [infinite-scroll], [data-infinite-scroll]", inputs: { infiniteScrollDistance: "infiniteScrollDistance", infiniteScrollUpDistance: "infiniteScrollUpDistance", infiniteScrollThrottle: "infiniteScrollThrottle", infiniteScrollDisabled: "infiniteScrollDisabled", infiniteScrollContainer: "infiniteScrollContainer", scrollWindow: "scrollWindow", immediateCheck: "immediateCheck", horizontal: "horizontal", alwaysCallback: "alwaysCallback", fromRoot: "fromRoot" }, outputs: { scrolled: "scrolled", scrolledUp: "scrolledUp" }, usesOnChanges: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "13.1.2", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: InfiniteScrollDirective, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]',
                }]
        }], ctorParameters: function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, propDecorators: { scrolled: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
            }], scrolledUp: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
            }], infiniteScrollDistance: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], infiniteScrollUpDistance: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], infiniteScrollThrottle: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], infiniteScrollDisabled: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], infiniteScrollContainer: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], scrollWindow: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], immediateCheck: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], horizontal: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], alwaysCallback: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], fromRoot: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });

class InfiniteScrollModule {
}
InfiniteScrollModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "13.1.2", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: InfiniteScrollModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
InfiniteScrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "13.1.2", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: InfiniteScrollModule, declarations: [InfiniteScrollDirective], exports: [InfiniteScrollDirective] });
InfiniteScrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "13.1.2", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: InfiniteScrollModule, providers: [], imports: [[]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "13.1.2", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: InfiniteScrollModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
            args: [{
                    declarations: [InfiniteScrollDirective],
                    exports: [InfiniteScrollDirective],
                    imports: [],
                    providers: [],
                }]
        }] });

/*
 * Public API Surface of ngx-infinite-scroll
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-infinite-scroll.mjs.map


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