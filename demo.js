// const bowser = require('bowser')
// const browser_report = require('browser-report')
// const ua_parser_js = require('ua-parser-js')
// const detect_js = require('Detect.js')
// const platform_js = require('platform')


console.log('foobar')
document.body.innerHTML = `
  <h1> environment </h1>
  <pre>${JSON.stringify(uaMatch(), 0, 2)}</pre>
  <hr>
  <pre>${JSON.stringify(detect(), 0, 2)}</pre>
`

function detect () {
  const stats = {
    appCodeName: navigator.appCodeName,
    // Returns the string "Mozilla".
    appName: navigator.appName,
    // Returns the string "Netscape".
    appVersion: navigator.appVersion,
    // Returns the version of the browser.
    platform: navigator.platform,
    // Returns the name of the platform.
    product: navigator.product,
    // Returns the string "Gecko".
    productSub: navigator.productSub,
    // Returns either the string "20030107" => is Chrome or WebKit
    // or the string "20100101" => is Gecko
    userAgent: navigator.userAgent,
    // Returns the complete `User-Agent` header.
    vendor: navigator.vendor,
    // Returns either the empty string, => Gecko
    // the string "Apple Computer, Inc." => WebKit
    // or the string "Google Inc.". => Chrome
    vendorSub: navigator.vendorSub,
    // Returns the empty string.
    oscpu: navigator.oscpu,
    // The oscpu attribute's getter must return either the empty string
    // or a string representing the platform on which the browser is executing,
    // e.g. "Windows NT 10.0; Win64; x64", "Linux x86_64".
    language: navigator.language, // BCP 47 language tag
    languages: navigator.languages, // frozen array of valid BCP 47 language tags
    cookieEnabled: navigator.cookieEnabled, // Returns false if setting a cookie will be ignored, and true otherwise.
    // ------------
    systemLanguage: navigator.systemLanguage,
    /*
    window . navigator . plugins . refresh( [ refresh ] )
Updates the lists of supported plugins and MIME types for this page, and reloads the page if the lists have changed.

window . navigator . plugins . length
Returns the number of plugins, represented by Plugin objects, that the user agent reports.

plugin = window . navigator . plugins . item(index)
window . navigator . plugins[index]
Returns the specified Plugin object.

plugin = window . navigator . plugins . item(name)
window . navigator . plugins[name]
Returns the Plugin object for the plugin with the given name.

window . navigator . mimeTypes . length
Returns the number of MIME types, represented by MimeType objects, supported by the plugins that the user agent reports.

mimeType = window . navigator . mimeTypes . item(index)
window . navigator . mimeTypes[index]
Returns the specified MimeType object.

mimeType = window . navigator . mimeTypes . item(name)
window . navigator . mimeTypes[name]
Returns the MimeType object for the given MIME type.

plugin . name
Returns the plugin's name.

plugin . description
Returns the plugin's description.

plugin . filename
Returns the plugin library's filename, if applicable on the current platform.

plugin . length
Returns the number of MIME types, represented by MimeType objects, supported by the plugin.

mimeType = plugin . item(index)
plugin[index]
Returns the specified MimeType object.

mimeType = plugin . item(name)
plugin[name]
Returns the MimeType object for the given MIME type.

mimeType . type
Returns the MIME type.

mimeType . description
Returns the MIME type's description.

mimeType . suffixes
Returns the MIME type's typical file extensions, in a comma-separated list.

mimeType . enabledPlugin
Returns the Plugin object that implements this MIME type.

window . navigator . javaEnabled()
Returns true if there's a plugin that supports the MIME type "application/x-java-vm".
*/
  }
  // navigator.vendorSub = 
  // navigator.productSub = 20030107
  // navigator.vendor = Google Inc.
  // navigator.maxTouchPoints = 15
  // navigator.hardwareConcurrency = 12
  // navigator.cookieEnabled = true
  // navigator.appCodeName = Mozilla
  // navigator.appName = Netscape
  // navigator.appVersion = 5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36
  // navigator.platform = Linux x86_64
  // navigator.product = Gecko
  // navigator.userAgent = Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36
  // navigator.language = en-US
  // navigator.languages = en-US,en,de
  // navigator.onLine = true
  // navigator.doNotTrack = null
  // navigator.geolocation = [object Geolocation]
  // navigator.mediaCapabilities = [object MediaCapabilities]
  // navigator.connection = [object NetworkInformation]
  // navigator.plugins = [object PluginArray]
  // navigator.mimeTypes = [object MimeTypeArray]
  // navigator.webkitTemporaryStorage = [object DeprecatedStorageQuota]
  // navigator.webkitPersistentStorage = [object DeprecatedStorageQuota]
  // navigator.getBattery = function getBattery() { [native code] }
  // navigator.sendBeacon = function sendBeacon() { [native code] }
  // navigator.getGamepads = function getGamepads() { [native code] }
  // navigator.javaEnabled = function javaEnabled() { [native code] }
  // navigator.vibrate = function vibrate() { [native code] }
  // navigator.userActivation = [object UserActivation]
  // navigator.mediaSession = [object MediaSession]
  // navigator.permissions = [object Permissions]
  // navigator.deviceMemory = 8
  // navigator.clipboard = [object Clipboard]
  // navigator.credentials = [object CredentialsContainer]
  // navigator.keyboard = [object Keyboard]
  // navigator.locks = [object LockManager]
  // navigator.mediaDevices = [object MediaDevices]
  // navigator.serviceWorker = [object ServiceWorkerContainer]
  // navigator.storage = [object StorageManager]
  // navigator.presentation = [object Presentation]
  // navigator.usb = [object USB]
  // navigator.xr = [object XRSystem]
  // navigator.setAppBadge = function () { [native code] }
  // navigator.clearAppBadge = function () { [native code] }
  // navigator.requestMediaKeySystemAccess = function () { [native code] }
  // navigator.getInstalledRelatedApps = function () { [native code] }
  // navigator.getUserMedia = function () { [native code] }
  // navigator.webkitGetUserMedia = function () { [native code] }
  // navigator.registerProtocolHandler = function () { [native code] }
  // navigator.unregisterProtocolHandler = function () { [native code] }
  // navigator.requestMIDIAccess = function () { [native code] }

  var error
  var stack
  try {
    throw new Error('detect')
  } catch (e) {
    stack = e.stack
    error = e
  }
  stats.stack = stack.split('\n')
  return stats
}
////////////////////////////////////////////////////////////////
function outputs () { /*
  IE11 Win7
    appCodeName: Mozilla
    appName: Netscape
    appVersion: 5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; MDDC; .NET4.0C; .NET4.0E; rv:11.0) like Gecko
    userAgent:Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; MDDC; .NET4.0C; .NET4.0E; rv:11.0) like Gecko
    platform: Win32

  IE9 Win7
    appCodeName: Mozilla
    appName: Microsoft Internet Explorer
    appVersion: 5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; MDDC; .NET4.0C; .NET4.0E)
    userAgent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; MDDC; .NET4.0C; .NET4.0E)
    platform: Win32

  IE8 Win7
    appName: Microsoft Internet Explorer
    appVersion: 5.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; MDDC; .NET4.0C; .NET4.0E)
    userAgent: Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; MDDC; .NET4.0C; .NET4.0E)
    platform: Win32

  IE7 WinXP
    appCodeName: Mozilla
    appName: Microsoft Internet Explorer
    appVersion: 4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 2.0.50727)
    userAgent: Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 2.0.50727)
    platform: Win32
*/}

function uaMatch( ua ) {
  // If an UA is not provided, default to the current browser UA.
  if ( ua === undefined ) {
    ua = window.navigator.userAgent;
  }
  ua = ua.toLowerCase();

  var match = /(edge)\/([\w.]+)/.exec( ua ) ||
      /(opr)[\/]([\w.]+)/.exec( ua ) ||
      /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
      /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
      /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
      /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
      /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
      /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
      /(msie) ([\w.]+)/.exec( ua ) ||
      ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
      ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
      [];

  var platform_match = /(ipad)/.exec( ua ) ||
      /(ipod)/.exec( ua ) ||
      /(windows phone)/.exec( ua ) ||
      /(iphone)/.exec( ua ) ||
      /(kindle)/.exec( ua ) ||
      /(silk)/.exec( ua ) ||
      /(android)/.exec( ua ) ||
      /(win)/.exec( ua ) ||
      /(mac)/.exec( ua ) ||
      /(linux)/.exec( ua ) ||
      /(cros)/.exec( ua ) ||
      /(playbook)/.exec( ua ) ||
      /(bb)/.exec( ua ) ||
      /(blackberry)/.exec( ua ) ||
      [];

  var browser = {},
      matched = {
        browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
        version: match[ 2 ] || match[ 4 ] || "0",
        versionNumber: match[ 4 ] || match[ 2 ] || "0",
        platform: platform_match[ 0 ] || ""
      };

  if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.versionNumber, 10);
  }

  if ( matched.platform ) {
    browser[ matched.platform ] = true;
  }

  // These are all considered mobile platforms, meaning they run a mobile browser
  if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
    browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
    browser.mobile = true;
  }

  // These are all considered desktop platforms, meaning they run a desktop browser
  if ( browser.cros || browser.mac || browser.linux || browser.win ) {
    browser.desktop = true;
  }

  // Chrome, Opera 15+ and Safari are webkit based browsers
  if ( browser.chrome || browser.opr || browser.safari ) {
    browser.webkit = true;
  }

  // IE11 has a new token so we will assign it msie to avoid breaking changes
  if ( browser.rv || browser.iemobile) {
    var ie = "msie";

    matched.browser = ie;
    browser[ie] = true;
  }

  // Edge is officially known as Microsoft Edge, so rewrite the key to match
  if ( browser.edge ) {
    delete browser.edge;
    var msedge = "msedge";

    matched.browser = msedge;
    browser[msedge] = true;
  }

  // Blackberry browsers are marked as Safari on BlackBerry
  if ( browser.safari && browser.blackberry ) {
    var blackberry = "blackberry";

    matched.browser = blackberry;
    browser[blackberry] = true;
  }

  // Playbook browsers are marked as Safari on Playbook
  if ( browser.safari && browser.playbook ) {
    var playbook = "playbook";

    matched.browser = playbook;
    browser[playbook] = true;
  }

  // BB10 is a newer OS version of BlackBerry
  if ( browser.bb ) {
    var bb = "blackberry";

    matched.browser = bb;
    browser[bb] = true;
  }

  // Opera 15+ are identified as opr
  if ( browser.opr ) {
    var opera = "opera";

    matched.browser = opera;
    browser[opera] = true;
  }

  // Stock Android browsers are marked as Safari on Android.
  if ( browser.safari && browser.android ) {
    var android = "android";

    matched.browser = android;
    browser[android] = true;
  }

  // Kindle browsers are marked as Safari on Kindle
  if ( browser.safari && browser.kindle ) {
    var kindle = "kindle";

    matched.browser = kindle;
    browser[kindle] = true;
  }

   // Kindle Silk browsers are marked as Safari on Kindle
  if ( browser.safari && browser.silk ) {
    var silk = "silk";

    matched.browser = silk;
    browser[silk] = true;
  }

  // Assign the name and platform variable
  browser.name = matched.browser;
  browser.platform = matched.platform;
  return browser;
}