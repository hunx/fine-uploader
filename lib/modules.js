// Fine Uploader's modules
//
// shamelessly inspired by:
// https://github.com/angular/angular.js/blob/master/angularFiles.js

var //dependencies
    _  = require('underscore');

var fineUploaderModules = {
    // Pre-defined forumlae
    "fuTraditional": [
        "@fuSrcCore",
        "@fuSrcUi",
        "@fuSrcTraditional",
        "@fuSrcModules",
        "@fuUiModules"
    ],
    "fuS3": [
        "@fuSrcCore",
        "@fuSrcUi",
        "@fuSrcS3",
        "@fuSrcS3Ui",
        "@fuSrcModules",
        "@fuUiModules",
        "@cryptoJs"
    ],
    "fuTraditionalJquery": [
        "@fuTraditional",
        "@fuSrcJquery",
        "@fuSrcJqueryDnd"
    ],
    "fuS3Jquery": [
        "@fuS3",
        "@fuSrcS3Jquery",
        "@fuSrcJqueryDnd"
    ],
    "fuAll": [
        "@fuTraditionalJquery",
        "@fuSrcS3",
        "@fuSrcS3Ui",
        "@fuSrcS3Jquery",
        "@cryptoJs"
    ],

    // Groups
    "fuSrcModules": [
        "@fuPasteModule",
        "@fuDndModule",
        "@fuDeleteFileModule",
        "@fuImagePreviewModule",
        "@fuImageValidationModule",
        "@fuSessionModule"
    ],

    "fuUiModules": [
        "@fuUiEvents",
        "@fuEditFilenameModule"
    ],

    // Source
    "fuSrcCore": [
        "client/js/util.js",
        "client/js/error/error.js",
        "client/js/version.js",
        "client/js/features.js",
        "client/js/promise.js",
        "client/js/button.js",
        "client/js/upload-data.js",
        "client/js/uploader.basic.api.js",
        "client/js/uploader.basic.js",
        "client/js/ajax.requester.js",
        "client/js/handler.base.js",
        "client/js/handler.form.api.js",
        "client/js/handler.xhr.api.js",
        "client/js/window.receive.message.js"
    ],
    "fuSrcUi": [
        "client/js/uploader.api.js",
        "client/js/uploader.js",
        "client/js/templating.js"
    ],
    "fuSrcTraditional": [
        "client/js/traditional/handler.form.js",
        "client/js/traditional/handler.xhr.js"
    ],
    "fuSrcJquery": [
        "client/js/jquery-plugin.js",
    ],
    "fuSrcS3": [
        "client/js/s3/util.js",
        "client/js/s3/uploader.basic.js",
        "client/js/s3/request-signer.js",
        "client/js/s3/uploadsuccess.ajax.requester.js",
        "client/js/s3/multipart.initiate.ajax.requester.js",
        "client/js/s3/multipart.complete.ajax.requester.js",
        "client/js/s3/multipart.abort.ajax.requester.js",
        "client/js/s3/handler.form.js",
        "client/js/s3/handler.xhr.js",
    ],
    "fuSrcS3Ui": [
        "client/js/s3/uploader.js",
    ],
    "fuSrcS3Jquery": [
        "@fuSrcJquery",
        "client/js/s3/jquery-plugin.js"
    ],
    "cryptoJs": [
        "client/js/third-party/crypto-js/core.js",
        "client/js/third-party/crypto-js/enc-base64.js",
        "client/js/third-party/crypto-js/hmac.js",
        "client/js/third-party/crypto-js/sha1.js"
    ],
    "fuImagePreviewModule": [
        "client/js/third-party/megapix-image.js",
        "client/js/image.js",
        "client/js/exif.js",
        "client/js/identify.js"
    ],
    "fuImageValidationModule": [
        "client/js/identify.js",
        "client/js/validation.image.js"
    ],
    "fuPasteModule": [
        "client/js/paste.js"
    ],
    "fuDndModule" : [
        "client/js/dnd.js"
    ],
    "fuSrcJqueryDnd": [
        "client/js/jquery-dnd.js"
    ],
    "fuDeleteFileModule": [
        "client/js/deletefile.ajax.requester.js"
    ],
    "fuUiEvents": [
        "client/js/ui.handler.events.js",
        "client/js/ui.handler.click.filebuttons.js"
    ],
    "fuEditFilenameModule": [
        "client/js/ui.handler.click.filename.js",
        "client/js/ui.handler.focusin.filenameinput.js",
        "client/js/ui.handler.focus.filenameinput.js",
        "client/js/ui.handler.edit.filename.js"
    ],
    "fuSessionModule": [
        "client/js/session.js",
        "client/js/session.ajax.requester.js"
    ],
    "fuIframeXssResponse": [
        "client/js/iframe.xss.response.js"
    ],
    "fuExtra": [
        "@fuImages",
        "@fuCss",
        "@fuDocs",
        "@fuTemplates"
    ],
    "fuTemplates": [
        "client/html/templates/default.html",
        "client/html/templates/simple-thumbnails.html"
    ],
    "fuImages": [
        "client/loading.gif",
        "client/processing.gif",
        "client/edit.gif",
    ],
    "fuPlaceholders": [
        "client/placeholders/not_available-generic.png",
        "client/placeholders/waiting-generic.png"
    ],
    "fuCss": [
        "client/fineuploader.css",
    ],
    "fuDocs": [
        "README.md",
        "LICENSE"
    ],
    "versioned": [
        "package.json",
        "fineuploader.jquery.json",
        "client/js/version.js",
        "bower.json",
        "README.md"
    ],
    "fuUnit": [
        "test/static/local/helpme.js",
        "test/unit/*.js",
        "test/unit/s3/*.js"
    ],
    "fuFunctional": [
        "test/functional/**/*.coffee"
    ],
    "karmaModules": [
        "test/_vendor/assert/assert.js",
        "test/_vendor/jquery/jquery.js",
        "test/_vendor/jquery.simulate/jquery.simulate.js",
        "test/_vendor/json2/json2.js",
        "test/_vendor/purl/purl.js",
        "test/static/third-party/sinon/sinon.js",
        "test/static/third-party/sinon/event.js",
        "test/static/third-party/sinon/fake_xml_http_request.js",
        "test/static/local/formdata.js"
    ],
    "testHelperModules": [
        "test/static/local/karma-runner.js",
        "test/static/local/blob-maker.js"
    ],
    "fuSrcBuild": [
        "_build/all!(@(*.min.js|*.gif|*.css))"
    ]
};

if (exports) {
    var mergeModules = function() {
        var files = [];

        Array.prototype.slice.call(arguments, 0).forEach(function(filegroup) {
            fineUploaderModules[filegroup].forEach(function(file) {
                // replace @ref
                var match = file.match(/^\@(.*)/);
                if (match) {
                    console.log("Adding module to build: @" + match[1]);
                    files = files.concat(mergeModules(match[1]));
                    //files = files.concat(fineUploaderModules[match[1]]);
                } else {
                    console.log("    Adding file to build: " + file);
                    files.push(file);
                }
            });
        });

        return _.unique(files);
    };

    exports.modules = fineUploaderModules;
    exports.mergeModules = mergeModules;

}
