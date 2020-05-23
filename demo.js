var bowser
var ua_parser_js
var detect_js
var platform_js
var rowser
var detector
var engine
// var browser_detection

// https://en.wikipedia.org/wiki/JavaScript_engine

var fails = []
const engines = {}
try {
  engine = require("detect-engine")
  engines.detect_engine = engine
} catch (e) {
  fails.push('fail: engine')
}
// try {
//   browser_detection = require('browser-version-detection')
// } catch (e) {
//   fails.push('fail: browser-version-detection')
// }
try {
  detector = require('detector')
} catch (e) {
  fails.push('fail: detector')
}
try {
  rowser = require('rowser')
} catch (e) {
  fails.push('fail: rowser')
}
try {
  bowser = require('bowser')
} catch (e) {
  fails.push('fail: bowser')
}
try {
  require('browser-report')
} catch (e) {
  fails.push('fail: browser-report')
}
try {
  ua_parser_js = require('ua-parser-js')
} catch (e) {
  fails.push('fail: ua_parser_js')
}
try {
  detect_js = require('detect.js')
} catch (e) {
  fails.push('fail: detect_js')
}
try {
  platform_js = require('platform')
} catch (e) {
  fails.push('fail: platform_js')
}

var output_bowser = bowser.parse(window.navigator.userAgent)

var ua = detect_js.parse(navigator.userAgent)

var info1 = platform_js.parse(navigator.userAgent)

function is_node_chakra () {
  return process && (process.jsEngine === 'chakracore' || process.jsEngine === 'chakra')
}
function detect_engine () {
  if (window.devicePixelRatio)  //If WebKit browser
  {
     if (escape(navigator.javaEnabled.toString()) == 'function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D')
     {
        alert('Chrome');
     }
     else if (escape(navigator.javaEnabled.toString()) != 'function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D')
     {
        alert('Safari');
     }
  }
  var s = '';
  for (x in {
      3: 3,
      1: 1
    }) {
    s += x
  }
  if (s === '31') {
    alert('JSC');
  } else {
    alert('V8');
  }
  var v8string = 'function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D';

  if ('WebkitAppearance' in document.documentElement.style) { //If (probably) WebKit browser
      if (escape(navigator.javaEnabled.toString()) === v8string) {
          console.log('V8 detected');
      } else {
          console.log('JSC detected');
      }
  } else {
      console.log("Not a WebKit browser");
  }
}

var rowser_info = rowser.detect()
rowser_info.isWebkit = rowser.isWebkit
rowser_info.iswebkit = rowser.iswebkit
rowser_info.isWeBkIt = rowser.isWeBkIt
rowser_info.isWEBKIT = rowser.isWEBKIT
rowser_info.isSafari = rowser.isSafari
rowser_info.issafari = rowser.issafari
rowser_info.isSaFArI = rowser.isSaFArI
rowser_info.isSAFARI = rowser.isSAFARI

var uap = new ua_parser_js()
var xxx1 = ua_parser_js()
var xxx2 = {
  ua: uap.getUA(),
  browser: uap.getBrowser(),
  engine: uap.getEngine(),
  os: uap.getOS(),
  device: uap.getDevice(),
  cpu: uap.getCPU()
}
var xxx3 = uap.getResult()
    // // let's test a custom user-agent string as an example
    // var uastring = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2";
    // parser.setUA(uastring);

    // var result = parser.getResult();
    // // this will also produce the same result (without instantiation):
    // // var result = UAParser(uastring);

    // console.log(result.browser);        // {name: "Chromium", version: "15.0.874.106"}
    // console.log(result.device);         // {model: undefined, type: undefined, vendor: undefined}
    // console.log(result.os);             // {name: "Ubuntu", version: "11.10"}
    // console.log(result.os.version);     // "11.10"
    // console.log(result.engine.name);    // "WebKit"
    // console.log(result.cpu.architecture);   // "amd64"

    // // do some other tests
    // var uastring2 = "Mozilla/5.0 (compatible; Konqueror/4.1; OpenBSD) KHTML/4.1.4 (like Gecko)";
    // console.log(parser.setUA(uastring2).getBrowser().name); // "Konqueror"
    // console.log(parser.getOS());                            // {name: "OpenBSD", version: undefined}
    // console.log(parser.getEngine());                        // {name: "KHTML", version: "4.1.4"}

    // var uastring3 = 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.11 (KHTML, like Gecko) Version/7.1.0.7 Safari/534.11';
    // console.log(parser.setUA(uastring3).getDevice().model); // "PlayBook"
    // console.log(parser.getOS())                             // {name: "RIM Tablet OS", version: "1.0.0"}
    // console.log(parser.getBrowser().name);                  // "Safari"
function getstack () {
  var error
  var stack
  try {
    throw new Error('detect')
  } catch (e) {
    stack = e.stack
    stack = stack.split('\n')
    error = e
  }
  return {
    error: error.message,
    stack: stack
  }
}
document.body.innerHTML = [
  "<h2> fails </h2>",
  "<pre>" + JSON.stringify(fails, 0, 2) + "</pre>",
  "<hr>",
  "<h1> error stack </h1>",
  "<pre>" + JSON.stringify(getstack(), 0, 2) + "</pre>",
  "<hr>",
  "<h2> custom </h2>",
  "<pre>" + JSON.stringify(uaMatch(), 0, 2) + "</pre>",
  "<hr>",
  "<h2> raw </h2>",
  "<pre>" + JSON.stringify(detect(), 0, 2) + "</pre>",
  "<hr>",
  "<h2> bowser </h2>",
  "<pre>" + JSON.stringify(output_bowser, 0, 2) + "</pre>",
  "<hr>",
  "<h2> browser-report </h2>",
  "<pre>" + JSON.stringify(browserReportSync(), 0, 2) + "</pre>",
  "<hr>",
  "<h2> ua-parser 1 </h2>",
  "<pre>" + JSON.stringify(xxx1, 0, 2) + "</pre>",
  "<hr>",
  "<h2> ua-parser 2 </h2>",
  "<pre>" + JSON.stringify(xxx2, 0, 2) + "</pre>",
  "<hr>",
  "<h2> ua-parser 3 </h2>",
  "<pre>" + JSON.stringify(xxx3, 0, 2) + "</pre>",
  "<hr>",
  "<h2> detect js </h2>",
  "<pre>" + JSON.stringify(ua, 0, 2) + "</pre>",
  "<hr>",
  "<h2> rowser </h2>",
  "<pre>" + JSON.stringify(rowser_info, 0, 2) + "</pre>",
  "<hr>",
  "<h2> detector </h2>",
  "<pre>" + JSON.stringify(detector, 0, 2) + "</pre>",
  "<hr>",
  "<h2> platform_js </h2>",
  "<pre>" + JSON.stringify(platform_js, 0, 2) + "</pre>",
  "<hr>",
  // "<h2> browser_detection </h2>",
  // "<pre>" + JSON.stringify(browser_detection, 0, 2) + "</pre>",
  // "<hr>",
  "<h2> platform_js </h2>",
  "<pre>" + JSON.stringify(info1, 0, 2) + "</pre>"
].join('\n')
function detect () {
  var stats = {
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
    systemLanguage: navigator.systemLanguage
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