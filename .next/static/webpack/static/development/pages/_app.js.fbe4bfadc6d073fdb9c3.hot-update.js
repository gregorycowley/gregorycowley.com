webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./public/css/content.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??__nextjs_postcss!./public/css/content.css ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "    /* multi-column */\n    \n    .multi-column {\n        max-width: 900px;\n        margin: 0 auto;\n    }\n    /* Card Item */\n    \n    .card-item {\n        margin: 0 0 1em 0;\n        padding: 2rem;\n        color: #fff;\n        display: flex;\n        flex-direction: row;\n        /* flex-wrap: wrap; */\n        /* width: 100%; */\n        /* justify-content: space-between; */\n    }\n    \n    .card-item h3,\n    .card-item h4,\n    .card-item p {\n        width: 100%;\n        flex-grow: 0;\n        flex-shrink: 1;\n        margin-right: 0;\n        flex-basis: 20%;\n    }\n    \n    .card-image-content {\n        width: 50%;\n        flex-grow: 1;\n        flex-shrink: 1;\n        flex-basis: 20%;\n        height: 100%;\n        margin-right: 10px;\n    }\n    \n    .card-text-content {\n        width: 100%;\n        flex-grow: 1;\n        flex-shrink: 1;\n        flex-basis: 50%;\n        height: 100%;\n    }\n    /* Image Showcase */\n    \n    .image-showcase-item {\n        max-height: 400px;\n        height: 100%;\n    }\n    \n    .image-showcase {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n    }\n    \n    .image-showcase h5 {\n        display: none;\n    }\n    \n    ul.image-showcase-row {\n        list-style: none;\n        /* border: thin solid blue; */\n        max-height: 400px;\n        width: 100%;\n        height: 100%;\n        display: flex;\n    }\n    \n    .image-showcase-item {\n        display: flex;\n        flex-direction: row;\n        margin-bottom: 0.1rem;\n        width: 100%;\n    }\n    \n    .image-showcase-item img {\n        width: 40%;\n        flex: 0 1 100%;\n        margin: 0.5rem;\n        -o-object-fit: contain;\n           object-fit: contain;\n    }\n    /* Image Index */\n    \n    ul.image-index {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        list-style: none;\n    }\n    \n    ul.image-index>li {\n        /* margin: 0 0 1.5rem 0; */\n    }\n    \n    .image-index-item {\n        display: flex;\n        flex-direction: row;\n        margin: 0 0 1.5rem 0;\n        width: 100%;\n    }\n    \n    .image-index-item img {\n        width: 100%;\n        /* flex: 0 1 100%; */\n        /* margin: 0.5rem; */\n    }\n    \n    @media (min-width: 550px) {\n        .image-index-item {\n            margin: 0 .5rem .5rem 0;\n            width: 200px;\n            /* flex: 0 0 100%; */\n        }\n    }\n    /* Modal */\n    \n    .modal.fullscreen {\n        width: 100%;\n        display: flex;\n        height: 100%;\n        background-color: rgba(100, 100, 100, .5);\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 100;\n        /* box-sizing: border-box; */\n    }\n    \n    .modal-content {\n        width: 96%;\n        background-color: #fff;\n        height: 96%;\n        margin: auto;\n        border-radius: 25px;\n    }\n    /* Image Carousel */\n    \n    .image-carousel {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        max-width: 900px;\n        max-height: 550px;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .carousel-item {\n        visibility: visible;\n        display: flex;\n        width: 100%;\n        height: 100%;\n        align-items: center;\n        justify-content: flex-end;\n        position: relative;\n        background-color: #fff;\n        flex-shrink: 0;\n        position: absolute;\n        z-index: 0;\n        -webkit-transition: 0.6s all linear;\n        transition: 0.6s all linear;\n    }\n    \n    .carousel-item__info {\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        display: -webkit-flex;\n        order: 1;\n        left: 0;\n        margin: auto;\n        padding: 0 40px;\n        width: 40%;\n    }\n    \n    .carousel-item__image {\n        width: 60%;\n        height: 100%;\n        order: 2;\n        align-self: flex-end;\n        flex-basis: 60%;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        position: relative;\n        -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n        -webkit-transition: 0.6s all ease-in-out;\n        transition: 0.6s all ease-in-out;\n    }\n    \n    .carousel-item__subtitle {\n        font-family: 'Open Sans', sans-serif;\n        letter-spacing: 3px;\n        font-size: 10px;\n        text-transform: uppercase;\n        margin: 0;\n        color: #7E7E7E;\n        font-weight: 700;\n        -webkit-transform: translateY(25%);\n                transform: translateY(25%);\n        opacity: 0;\n        visibility: hidden;\n        -webkit-transition: 0.4s all ease-in-out;\n        transition: 0.4s all ease-in-out;\n    }\n    \n    .carousel-item__title {\n        margin: 15px 0 0 0;\n        font-size: 44px;\n        line-height: 45px;\n        letter-spacing: 3px;\n        font-weight: 700;\n        color: #2C2C2C;\n        -webkit-transform: translateY(25%);\n                transform: translateY(25%);\n        opacity: 0;\n        visibility: hidden;\n        -webkit-transition: 0.6s all ease-in-out;\n        transition: 0.6s all ease-in-out;\n    }\n    \n    .carousel-item__description {\n        -webkit-transform: translateY(25%);\n                transform: translateY(25%);\n        opacity: 0;\n        visibility: hidden;\n        -webkit-transition: 0.6s all ease-in-out;\n        transition: 0.6s all ease-in-out;\n        margin-top: 35px;\n        font-family: 'Open Sans', sans-serif;\n        font-size: 13px;\n        color: #7e7e7e;\n        line-height: 22px;\n        margin-bottom: 35px;\n    }\n    \n    .carousel-item__btn {\n        width: 35%;\n        color: #2C2C2C;\n        letter-spacing: 3px;\n        font-size: 11px;\n        text-transform: uppercase;\n        margin: 0;\n        width: 35%;\n        font-weight: 700;\n        text-decoration: none;\n        -webkit-transform: translateY(25%);\n                transform: translateY(25%);\n        opacity: 0;\n        visibility: hidden;\n        -webkit-transition: 0.6s all ease-in-out;\n        transition: 0.6s all ease-in-out;\n    }\n    \n    .carousel__nav {\n        position: absolute;\n        right: 0;\n        z-index: 2;\n        background-color: #fff;\n        bottom: 0;\n    }\n    \n    .carousel__icon {\n        display: inline-block;\n        vertical-align: middle;\n        width: 16px;\n        fill: #5d5d5d;\n    }\n    \n    .carousel__arrow {\n        cursor: pointer;\n        display: inline-block;\n        padding: 11px 15px;\n        position: relative;\n    }\n    \n    .carousel__arrow:nth-child(1):after {\n        content: '';\n        right: -3px;\n        position: absolute;\n        width: 1px;\n        background-color: #b0b0b0;\n        height: 14px;\n        top: 50%;\n        margin-top: -7px;\n    }\n    \n    .active {\n        z-index: 1;\n        display: flex;\n        visibility: visible;\n    }\n    \n    .active .carousel-item__subtitle,\n    .active .carousel-item__title,\n    .active .carousel-item__description,\n    .active .carousel-item__btn {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n        opacity: 1;\n        -webkit-transition: 0.6s all ease-in-out;\n        transition: 0.6s all ease-in-out;\n        visibility: visible;\n    }\n    \n    .active .carousel-item__image {\n        -webkit-transition: 0.6s all ease-in-out;\n        transition: 0.6s all ease-in-out;\n        -webkit-transform: translateX(0);\n                transform: translateX(0);\n    }\n    /* ----- Image Lightbox ----- */\n    \n    .lightbox-container {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        /* background-color: rgba(200, 255, 255, .8); */\n        /* opacity: .6; */\n    }\n    \n    .lightbox-obscure-layer {\n        position: absolute;\n        width: 100vw;\n        height: 100vw;\n        background-color: gray;\n        opacity: .5;\n        z-index: -10;\n    }\n    \n    .lightbox-image-container {\n        margin: 0 auto;\n        width: 100vw;\n        height: 100vh;\n        background-color: rgba(240, 0, 0, .1);\n        display: flex;\n        flex-direction: row;\n    }\n    \n    .prev-control {\n        position: absolute;\n        left: 0;\n        top: 50%;\n        width: 100px;\n        height: 100px;\n        background-color: green;\n    }\n    \n    .next-control {\n        position: absolute;\n        right: 0;\n        top: 50%;\n        width: 100px;\n        height: 100px;\n        background-color: lightgreen;\n    }\n    \n    .close-control {\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: 100px;\n        height: 100px;\n        background-color: greenyellow;\n    }\n    \n    .lightbox-image-contents {\n        width: 500px;\n        height: 100vw;\n        margin: 0 auto;\n        background-color: pink;\n        overflow: hidden;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n    }\n    \n    .current-image {\n        width: 40px;\n        height: 60px;\n        background-color: gray;\n        overflow: hidden;\n    }\n    \n    .prev-image {\n        /* position: absolute;\n    left: -100vw; */\n        width: 40px;\n        height: 60px;\n        background-color: lightslategray;\n    }\n    \n    .next-image {\n        /* position: absolute;\n    right: 100vw; */\n        width: 40px;\n        height: 60px;\n        background-color: lightgray;\n    }\n    /* Summary Page */\n    \n    header nav {\n        display: none;\n    }\n    \n    header .logo-block {\n        margin-bottom: 4rem;\n    }\n    \n    header h1 {\n        font-size: 3rem;\n    }\n    \n    .container.summary {\n        display: flex;\n        flex-direction: column;\n    }\n    \n    .summary-header {\n        display: flex;\n        flex-direction: column;\n    }\n    \n    .summary-resume {\n        width: 100%;\n        text-align: center;\n        margin-bottom: 5rem;\n    }\n    \n    .summary-about {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n    }\n    \n    .summary-about h2 {\n        font-size: 3rem;\n        flex-wrap: wrap;\n    }\n    \n    .summary-about p {\n        margin-right: 0;\n    }\n    \n    .summary-about ul {\n        flex: 0 1 30%;\n        list-style: none;\n        margin-left: 10px;\n    }\n    \n    .summary-about ul>li:before {\n        content: \"> \";\n         margin-left: -12px;\n        font-weight: bold;\n        font-style: italic;\n    }\n    \n    @media (min-width: 768px) {\n        .summary-about {\n            display: flex;\n            flex-direction: column;\n            flex-wrap: wrap;\n            position: relative;\n        }\n        .summary-about h2 {\n            font-size: 3rem;\n            flex-wrap: wrap;\n            flex: 1 0 100%;\n        }\n        .summary-about p {\n            flex: 1 1 50%;\n            margin-right: 20px;\n        }\n         .summary-about ul {\n/*             position: absolute; */\n            flex: 1 1 100%;\n            right: 0;\n            top: 0;\n        }\n    }\n    \n    .summary-clients {\n        background-color: #5d5d5d;\n        color: white;\n        display: flex;\n        flex-direction: column;\n        padding: 10px;\n    }\n    \n    .summary-clients ul {\n        list-style: none;\n        flex: 0 1 30%;\n    }\n\n    .summary-clients ul>li {\n        white-space: nowrap;\n    }\n    \n    .summary-clients ul>li:before {\n        content: \">  \";\n        margin-left: -10px;\n        font-weight: bold;\n        font-style: italic;\n    }\n    \n    @media (min-width: 768px) {\n        .summary-clients {\n            border: thick solid #555;\n            background-color: #5d5d5d;\n            flex-direction: column;\n            padding: 40px;\n            display: grid;\n            grid-template-columns: 20% 80%;\n        }\n        .summary-clients ul {\n            list-style: none;\n            display: grid;\n            grid-template-columns: 50% 50%;\n        }\n        .summary-clients ul>li:before {}\n    }\n    \n    .summary-skills {}\n    \n    .summary-skills h3 {\n        background-color: #575151;\n        font-size: 2rem;\n        padding: 30px;\n        color: white;\n        text-align: center;\n    }\n    \n    .summary-skills h4 {\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n    }\n    \n    .summary-skills>ul {\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n        list-style: none;\n\n    }\n    \n    .summary-skills>ul>li h6 {\n        font-size: 2rem;\n    }\n    \n    .summary-skills ul>ul {\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n    }\n    .summary-skills ul>li>ul {\n        list-style-position: outside;\n    }\n\n    .summary-skills ul>li>ul>li {\n        margin: 0 0 .5rem 0rem;\n        padding: 0 0 0 0;\n    }\n    \n    .summary-skills ul>ul>li:before {}\n    \n    @media (min-width: 768px) {\n        .summary-skills h3 {\n            grid-column-start: span 3;\n        }\n        .summary-skills>ul {\n            display: grid;\n            grid-template-columns: 33% 34% 33%;\n        }\n    }\n    \n    .summary-contact {\n        background-color: #ccc;\n        margin: 50px 0 100px 0;\n        padding: 1rem;\n    }\n    \n    .summary-contact h4 {\n        width: 25%;\n        font-size: 2rem;\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n    }\n    \n    .summary-contact ul {\n        list-style: none;\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n    }\n    \n    .summary-contact ul>li {}\n    \n    .summary-contact ul>li:before {\n        content: \"\";\n        font-weight: bold;\n        font-style: italic;\n    }\n    \n    .summary-contact p {\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n    }\n    \n    @media (min-width: 768px) {\n        .summary-contact {\n            display: flex;\n            flex-direction: row;\n        }\n        .summary-contact h4 {\n\n            flex: 0 1 23%;\n        }\n        .summary-contact ul {\n            flex: 1 1 20%;\n            display: flex;\n            flex-direction: row;\n        }\n        .summary-contact ul>li {\n            flex: 1 1 50%;\n        }\n        .summary-contact ul>li:before {}\n        .summary-contact p {}\n    }", "",{"version":3,"sources":["content.css"],"names":[],"mappings":"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","file":"content.css","sourcesContent":["    /* multi-column */\n    \n    .multi-column {\n        max-width: 900px;\n        margin: 0 auto;\n    }\n    /* Card Item */\n    \n    .card-item {\n        margin: 0 0 1em 0;\n        padding: 2rem;\n        color: #fff;\n        display: flex;\n        flex-direction: row;\n        /* flex-wrap: wrap; */\n        /* width: 100%; */\n        /* justify-content: space-between; */\n    }\n    \n    .card-item h3,\n    .card-item h4,\n    .card-item p {\n        width: 100%;\n        flex-grow: 0;\n        flex-shrink: 1;\n        margin-right: 0;\n        flex-basis: 20%;\n    }\n    \n    .card-image-content {\n        width: 50%;\n        flex-grow: 1;\n        flex-shrink: 1;\n        flex-basis: 20%;\n        height: 100%;\n        margin-right: 10px;\n    }\n    \n    .card-text-content {\n        width: 100%;\n        flex-grow: 1;\n        flex-shrink: 1;\n        flex-basis: 50%;\n        height: 100%;\n    }\n    /* Image Showcase */\n    \n    .image-showcase-item {\n        max-height: 400px;\n        height: 100%;\n    }\n    \n    .image-showcase {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n    }\n    \n    .image-showcase h5 {\n        display: none;\n    }\n    \n    ul.image-showcase-row {\n        list-style: none;\n        /* border: thin solid blue; */\n        max-height: 400px;\n        width: 100%;\n        height: 100%;\n        display: flex;\n    }\n    \n    .image-showcase-item {\n        display: flex;\n        flex-direction: row;\n        margin-bottom: 0.1rem;\n        width: 100%;\n    }\n    \n    .image-showcase-item img {\n        width: 40%;\n        flex: 0 1 100%;\n        margin: 0.5rem;\n        object-fit: contain;\n    }\n    /* Image Index */\n    \n    ul.image-index {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        list-style: none;\n    }\n    \n    ul.image-index>li {\n        /* margin: 0 0 1.5rem 0; */\n    }\n    \n    .image-index-item {\n        display: flex;\n        flex-direction: row;\n        margin: 0 0 1.5rem 0;\n        width: 100%;\n    }\n    \n    .image-index-item img {\n        width: 100%;\n        /* flex: 0 1 100%; */\n        /* margin: 0.5rem; */\n    }\n    \n    @media (min-width: 550px) {\n        .image-index-item {\n            margin: 0 .5rem .5rem 0;\n            width: 200px;\n            /* flex: 0 0 100%; */\n        }\n    }\n    /* Modal */\n    \n    .modal.fullscreen {\n        width: 100%;\n        display: flex;\n        height: 100%;\n        background-color: rgba(100, 100, 100, .5);\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 100;\n        /* box-sizing: border-box; */\n    }\n    \n    .modal-content {\n        width: 96%;\n        background-color: #fff;\n        height: 96%;\n        margin: auto;\n        border-radius: 25px;\n    }\n    /* Image Carousel */\n    \n    .image-carousel {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        max-width: 900px;\n        max-height: 550px;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .carousel-item {\n        visibility: visible;\n        display: flex;\n        width: 100%;\n        height: 100%;\n        align-items: center;\n        justify-content: flex-end;\n        position: relative;\n        background-color: #fff;\n        flex-shrink: 0;\n        position: absolute;\n        z-index: 0;\n        transition: 0.6s all linear;\n    }\n    \n    .carousel-item__info {\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        display: -webkit-flex;\n        order: 1;\n        left: 0;\n        margin: auto;\n        padding: 0 40px;\n        width: 40%;\n    }\n    \n    .carousel-item__image {\n        width: 60%;\n        height: 100%;\n        order: 2;\n        align-self: flex-end;\n        flex-basis: 60%;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        position: relative;\n        transform: translateX(100%);\n        transition: 0.6s all ease-in-out;\n    }\n    \n    .carousel-item__subtitle {\n        font-family: 'Open Sans', sans-serif;\n        letter-spacing: 3px;\n        font-size: 10px;\n        text-transform: uppercase;\n        margin: 0;\n        color: #7E7E7E;\n        font-weight: 700;\n        transform: translateY(25%);\n        opacity: 0;\n        visibility: hidden;\n        transition: 0.4s all ease-in-out;\n    }\n    \n    .carousel-item__title {\n        margin: 15px 0 0 0;\n        font-size: 44px;\n        line-height: 45px;\n        letter-spacing: 3px;\n        font-weight: 700;\n        color: #2C2C2C;\n        transform: translateY(25%);\n        opacity: 0;\n        visibility: hidden;\n        transition: 0.6s all ease-in-out;\n    }\n    \n    .carousel-item__description {\n        transform: translateY(25%);\n        opacity: 0;\n        visibility: hidden;\n        transition: 0.6s all ease-in-out;\n        margin-top: 35px;\n        font-family: 'Open Sans', sans-serif;\n        font-size: 13px;\n        color: #7e7e7e;\n        line-height: 22px;\n        margin-bottom: 35px;\n    }\n    \n    .carousel-item__btn {\n        width: 35%;\n        color: #2C2C2C;\n        letter-spacing: 3px;\n        font-size: 11px;\n        text-transform: uppercase;\n        margin: 0;\n        width: 35%;\n        font-weight: 700;\n        text-decoration: none;\n        transform: translateY(25%);\n        opacity: 0;\n        visibility: hidden;\n        transition: 0.6s all ease-in-out;\n    }\n    \n    .carousel__nav {\n        position: absolute;\n        right: 0;\n        z-index: 2;\n        background-color: #fff;\n        bottom: 0;\n    }\n    \n    .carousel__icon {\n        display: inline-block;\n        vertical-align: middle;\n        width: 16px;\n        fill: #5d5d5d;\n    }\n    \n    .carousel__arrow {\n        cursor: pointer;\n        display: inline-block;\n        padding: 11px 15px;\n        position: relative;\n    }\n    \n    .carousel__arrow:nth-child(1):after {\n        content: '';\n        right: -3px;\n        position: absolute;\n        width: 1px;\n        background-color: #b0b0b0;\n        height: 14px;\n        top: 50%;\n        margin-top: -7px;\n    }\n    \n    .active {\n        z-index: 1;\n        display: flex;\n        visibility: visible;\n    }\n    \n    .active .carousel-item__subtitle,\n    .active .carousel-item__title,\n    .active .carousel-item__description,\n    .active .carousel-item__btn {\n        transform: translateY(0);\n        opacity: 1;\n        transition: 0.6s all ease-in-out;\n        visibility: visible;\n    }\n    \n    .active .carousel-item__image {\n        transition: 0.6s all ease-in-out;\n        transform: translateX(0);\n    }\n    /* ----- Image Lightbox ----- */\n    \n    .lightbox-container {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        /* background-color: rgba(200, 255, 255, .8); */\n        /* opacity: .6; */\n    }\n    \n    .lightbox-obscure-layer {\n        position: absolute;\n        width: 100vw;\n        height: 100vw;\n        background-color: gray;\n        opacity: .5;\n        z-index: -10;\n    }\n    \n    .lightbox-image-container {\n        margin: 0 auto;\n        width: 100vw;\n        height: 100vh;\n        background-color: rgba(240, 0, 0, .1);\n        display: flex;\n        flex-direction: row;\n    }\n    \n    .prev-control {\n        position: absolute;\n        left: 0;\n        top: 50%;\n        width: 100px;\n        height: 100px;\n        background-color: green;\n    }\n    \n    .next-control {\n        position: absolute;\n        right: 0;\n        top: 50%;\n        width: 100px;\n        height: 100px;\n        background-color: lightgreen;\n    }\n    \n    .close-control {\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: 100px;\n        height: 100px;\n        background-color: greenyellow;\n    }\n    \n    .lightbox-image-contents {\n        width: 500px;\n        height: 100vw;\n        margin: 0 auto;\n        background-color: pink;\n        overflow: hidden;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n    }\n    \n    .current-image {\n        width: 40px;\n        height: 60px;\n        background-color: gray;\n        overflow: hidden;\n    }\n    \n    .prev-image {\n        /* position: absolute;\n    left: -100vw; */\n        width: 40px;\n        height: 60px;\n        background-color: lightslategray;\n    }\n    \n    .next-image {\n        /* position: absolute;\n    right: 100vw; */\n        width: 40px;\n        height: 60px;\n        background-color: lightgray;\n    }\n    /* Summary Page */\n    \n    header nav {\n        display: none;\n    }\n    \n    header .logo-block {\n        margin-bottom: 4rem;\n    }\n    \n    header h1 {\n        font-size: 3rem;\n    }\n    \n    .container.summary {\n        display: flex;\n        flex-direction: column;\n    }\n    \n    .summary-header {\n        display: flex;\n        flex-direction: column;\n    }\n    \n    .summary-resume {\n        width: 100%;\n        text-align: center;\n        margin-bottom: 5rem;\n    }\n    \n    .summary-about {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n    }\n    \n    .summary-about h2 {\n        font-size: 3rem;\n        flex-wrap: wrap;\n    }\n    \n    .summary-about p {\n        margin-right: 0;\n    }\n    \n    .summary-about ul {\n        flex: 0 1 30%;\n        list-style: none;\n        margin-left: 10px;\n    }\n    \n    .summary-about ul>li:before {\n        content: \"> \";\n         margin-left: -12px;\n        font-weight: bold;\n        font-style: italic;\n    }\n    \n    @media (min-width: 768px) {\n        .summary-about {\n            display: flex;\n            flex-direction: column;\n            flex-wrap: wrap;\n            position: relative;\n        }\n        .summary-about h2 {\n            font-size: 3rem;\n            flex-wrap: wrap;\n            flex: 1 0 100%;\n        }\n        .summary-about p {\n            flex: 1 1 50%;\n            margin-right: 20px;\n        }\n         .summary-about ul {\n/*             position: absolute; */\n            flex: 1 1 100%;\n            right: 0;\n            top: 0;\n        }\n    }\n    \n    .summary-clients {\n        background-color: #5d5d5d;\n        color: white;\n        display: flex;\n        flex-direction: column;\n        padding: 10px;\n    }\n    \n    .summary-clients ul {\n        list-style: none;\n        flex: 0 1 30%;\n    }\n\n    .summary-clients ul>li {\n        white-space: nowrap;\n    }\n    \n    .summary-clients ul>li:before {\n        content: \">  \";\n        margin-left: -10px;\n        font-weight: bold;\n        font-style: italic;\n    }\n    \n    @media (min-width: 768px) {\n        .summary-clients {\n            border: thick solid #555;\n            background-color: #5d5d5d;\n            flex-direction: column;\n            padding: 40px;\n            display: grid;\n            grid-template-columns: 20% 80%;\n        }\n        .summary-clients ul {\n            list-style: none;\n            display: grid;\n            grid-template-columns: 50% 50%;\n        }\n        .summary-clients ul>li:before {}\n    }\n    \n    .summary-skills {}\n    \n    .summary-skills h3 {\n        background-color: #575151;\n        font-size: 2rem;\n        padding: 30px;\n        color: white;\n        text-align: center;\n    }\n    \n    .summary-skills h4 {\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n    }\n    \n    .summary-skills>ul {\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n        list-style: none;\n\n    }\n    \n    .summary-skills>ul>li h6 {\n        font-size: 2rem;\n    }\n    \n    .summary-skills ul>ul {\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n    }\n    .summary-skills ul>li>ul {\n        list-style-position: outside;\n    }\n\n    .summary-skills ul>li>ul>li {\n        margin: 0 0 .5rem 0rem;\n        padding: 0 0 0 0;\n    }\n    \n    .summary-skills ul>ul>li:before {}\n    \n    @media (min-width: 768px) {\n        .summary-skills h3 {\n            grid-column-start: span 3;\n        }\n        .summary-skills>ul {\n            display: grid;\n            grid-template-columns: 33% 34% 33%;\n        }\n    }\n    \n    .summary-contact {\n        background-color: #ccc;\n        margin: 50px 0 100px 0;\n        padding: 1rem;\n    }\n    \n    .summary-contact h4 {\n        width: 25%;\n        font-size: 2rem;\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n    }\n    \n    .summary-contact ul {\n        list-style: none;\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n    }\n    \n    .summary-contact ul>li {}\n    \n    .summary-contact ul>li:before {\n        content: \"\";\n        font-weight: bold;\n        font-style: italic;\n    }\n    \n    .summary-contact p {\n        margin: 1px 1px 1px 1px;\n        padding: 1px 1px 1px 1px;\n    }\n    \n    @media (min-width: 768px) {\n        .summary-contact {\n            display: flex;\n            flex-direction: row;\n        }\n        .summary-contact h4 {\n\n            flex: 0 1 23%;\n        }\n        .summary-contact ul {\n            flex: 1 1 20%;\n            display: flex;\n            flex-direction: row;\n        }\n        .summary-contact ul>li {\n            flex: 1 1 50%;\n        }\n        .summary-contact ul>li:before {}\n        .summary-contact p {}\n    }"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.fbe4bfadc6d073fdb9c3.hot-update.js.map