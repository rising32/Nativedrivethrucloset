const ANDROID_PACKAGE_NAME = 'com.nativedrivethrucloset';

const CONST = {
  ANDROID_PACKAGE_NAME,
  DATE: {
    MOMENT_FORMAT_STRING: 'YYYY-MM-DD',
  },
  PLATFORM: {
    IOS: 'ios',
    ANDROID: 'android',
    TABLET: 'tablet',
  },
  SPINNER_TIMEOUT: 15 * 1000,
  ENVIRONMENT: {
    DEV: 'development',
    STAGING: 'staging',
    PRODUCTION: 'production',
  },
  TIMING: {
    SEARCH_RENDER: 'search_render',
    HOMEPAGE_INITIAL_RENDER: 'homepage_initial_render',
    REPORT_INITIAL_RENDER: 'report_initial_render',
    HOMEPAGE_REPORTS_LOADED: 'homepage_reports_loaded',
    SWITCH_REPORT: 'switch_report',
    SIDEBAR_LOADED: 'sidebar_loaded',
    COLD: 'cold',
    REPORT_ACTION_ITEM_LAYOUT_DEBOUNCE_TIME: 1500,
    TOOLTIP_SENSE: 1000,
    SPINNER_TIMEOUT: 15 * 1000,
    TRIE_INITIALIZATION: 'trie_initialization',
  },
  NETWORK: {
    METHOD: {
      POST: 'post',
    },
    MAX_REQUEST_RETRIES: 10,
    PROCESS_REQUEST_DELAY_MS: 1000,
    MAX_PENDING_TIME_MS: 10 * 1000,
  },
  APP_STATE: {
    ACTIVE: 'active',
    BACKGROUND: 'background',
    INACTIVE: 'inactive',
  },
  PASSWORD_COMPLEXITY_REGEX_STRING: '^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$',
  PASSWORD_PAGE: {
    ERROR: {
      ALREADY_VALIDATED: 'Account already validated',
      VALIDATE_CODE_FAILED: 'Validate code failed',
    },
  },
  LOGIN_TYPE: {
    PHONE: 'phone',
    EMAIL: 'email',
  },
  KEYBOARD_TYPE: {
    PHONE_PAD: 'phone-pad',
    NUMBER_PAD: 'number-pad',
    DECIMAL_PAD: 'decimal-pad',
    VISIBLE_PASSWORD: 'visible-password',
    EMAIL_ADDRESS: 'email-address',
  },
  BASIC_DIMENSION: {
    WIDTH: 360,
    HEIGHT: 740,
  },
  REGEX: {
    SPECIAL_CHARS_WITHOUT_NEWLINE: /((?!\n)[()-\s\t])/g,
    US_PHONE: /^\+1\d{10}$/,
    US_PHONE_WITH_OPTIONAL_COUNTRY_CODE: /^(\+1)?\d{10}$/,
    DIGITS_AND_PLUS: /^\+?[0-9]*$/,
    PHONE_E164_PLUS: /^\+?[1-9]\d{1,14}$/,
    PHONE_WITH_SPECIAL_CHARS:
      /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\\./0-9]{0,12}$/,
    ALPHABETIC_CHARS: /[a-zA-Z]+/,
    POSITIVE_INTEGER: /^\d+$/,
    NON_ALPHA_NUMERIC: /[^A-Za-z0-9+]/g,
    PO_BOX:
      /\b[P|p]?(OST|ost)?\.?\s*[O|o|0]?(ffice|FFICE)?\.?\s*[B|b][O|o|0]?[X|x]?\.?\s+[#]?(\d+)\b/,
    ANY_VALUE: /^.+$/,
    ZIP_CODE: /[0-9]{5}(?:[- ][0-9]{4})?/,
    INDUSTRY_CODE: /^[0-9]{6}$/,
    SSN_LAST_FOUR: /^(?!0000)[0-9]{4}$/,
    SSN_FULL_NINE: /^(?!0000)[0-9]{9}$/,
    NUMBER: /^[0-9]+$/,
    CARD_NUMBER: /^[0-9]{15,16}$/,
    CARD_SECURITY_CODE: /^[0-9]{3,4}$/,
    CARD_EXPIRATION_DATE: /^(0[1-9]|1[0-2])([^0-9])?([0-9]{4}|([0-9]{2}))$/,
    PAYPAL_ME_USERNAME: /^[a-zA-Z0-9]+$/,
    TAX_ID: /^\d{9}$/,
    NON_NUMERIC: /\D/g,
    EMOJI_NAME: /:[\w+-]+:/g,
    EMOJI_SUGGESTIONS: /:[a-zA-Z]{1,20}(\s[a-zA-Z]{0,20})?$/,
  },
};

export default CONST;
