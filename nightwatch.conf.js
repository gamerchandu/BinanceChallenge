const chromedriver = require('chromedriver');
const allure = require('nightwatch-allure-adapter');

module.exports = {
    'src_folders': ['./tests/specs/'],
    'reporter': allure [{
        'outputDir': './allure-results/',
        'disableWebdriverStepsReporting': false,
        'disableWebdriverScreenshotsReporting': false,}
    ],
    'output_folder': './allure-results',
    'page_objects_path': './tests/support/pages',
    'globals_path': './tests/support/helpers/allGlobals.js',
    'webdriver': {
        'start_process': true,
        'port': 9515,
        'server_path': chromedriver.path,
        'cli_args': [
            '--verbose'
        ]
    },
    'test_settings': {
        'default': {
            'launch_url': 'https://www.binance.com/',
            'desiredCapabilities': {
                'browserName': 'chrome',
                'javascriptEnabled': true,
                'acceptSslCerts': true,
                'chromeOptions': {
                    'args': ['--no-sandbox', '--start-maximized']
                }
                ,
            }
        },
        'screenshots': {
            'enabled': true,
            'on_failure': true,
            'on_error': true,
            'path': './screenshots'
        }
    }
};