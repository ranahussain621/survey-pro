import { helper } from '@heyform-inc/utils'

export const HOMEPAGE_URL = window.heyform?.homepageURL || import.meta.env.VITE_HOMEPAGE_URL
export const COOKIE_DOMAIN = window.heyform?.cookieDomain || import.meta.env.VITE_COOKIE_DOMAIN
export const STRIPE_PUBLISHABLE_KEY =
  window.heyform?.stripePublishableKey || import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
export const GEETEST_CAPTCHA_ID =
  window.heyform?.geetestCaptchaId || import.meta.env.VITE_GEETEST_CAPTCHA_ID
export const GOOGLE_RECAPTCHA_KEY =
  window.heyform?.googleRecaptchaKey || import.meta.env.VITE_GOOGLE_RECAPTCHA_KEY
export const DISABLE_LOGIN_WITH_GOOGLE = helper.isTrue(
  window.heyform?.disableLoginWithGoogle || import.meta.env.VITE_DISABLE_LOGIN_WITH_GOOGLE
)
export const DISABLE_LOGIN_WITH_APPLE = helper.isTrue(
  window.heyform?.disableLoginWithApple || import.meta.env.VITE_DISABLE_LOGIN_WITH_APPLE
)
export const VERIFY_USER_EMAIL = helper.isTrue(
  window.heyform?.verifyUserEmail || import.meta.env.VITE_VERIFY_USER_EMAIL
)
export const APP_DISABLE_REGISTRATION = helper.isTrue(
  window.heyform?.appDisableRegistration || import.meta.env.VITE_APP_DISABLE_REGISTRATION
)
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const PRICE_KEY_FOR_MONTH = import.meta.env.VITE_PRICE_KEY_FOR_MONTH;
export const PRICE_KEY_FOR_YEAR = import.meta.env.VITE_PRICE_KEY_FOR_YEAR;


