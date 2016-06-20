require.config({
    paths: {
        "angular": [
            "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min",
            "vendor/angular/angular.min"
        ],
        "angular-material": [
            "//cdnjs.cloudflare.com/ajax/libs/angular-material/0.11.2/angular-material.min",
            "vendor/angular-material/angular-material.min"
        ],
        "angular-animate": [
            "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-animate.min",
            "vendor/angular-animate/angular-animate.min"
        ],
        "angular-aria": [
            "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-aria.min",
            "vendor/angular-aria/angular-aria.min"
        ]
    },
    shim: {
        "angular": {
            "exports": "angular"
        },
        "angular-animate": ["angular"],
        "angular-aria": ["angular"],
        "angular-material": ["angular", "angular-animate", "angular-aria"]
    },
    map: {
        "*": {
            "css": "vendor/require-css/css"
        }
    },
    deps: ["config"]
});