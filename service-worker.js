/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/font-roboto/RobotoTTF/Roboto-Black.ttf","e27fd21d322769a208a5ea299b4a8283"],["bower_components/font-roboto/RobotoTTF/Roboto-BlackItalic.ttf","43101903749e3bafe416d4060e458752"],["bower_components/font-roboto/RobotoTTF/Roboto-Bold.ttf","26467ade6c4c4a1349298e62fc43129a"],["bower_components/font-roboto/RobotoTTF/Roboto-BoldItalic.ttf","b580aa46825bd3390e6adc097f4263c5"],["bower_components/font-roboto/RobotoTTF/Roboto-Italic.ttf","aae0f83fa1ea57d12afdb8fd78a1a85a"],["bower_components/font-roboto/RobotoTTF/Roboto-Light.ttf","2d9b56a3faff49eac6991ad6161e7603"],["bower_components/font-roboto/RobotoTTF/Roboto-LightItalic.ttf","faebec7e91b9407b089d3e1a770ebc75"],["bower_components/font-roboto/RobotoTTF/Roboto-Medium.ttf","64d0e62836c6ec3dfd7eb64c4639463e"],["bower_components/font-roboto/RobotoTTF/Roboto-MediumItalic.ttf","280f6eef7ce7c5aa18b61542959358bd"],["bower_components/font-roboto/RobotoTTF/Roboto-Regular.ttf","4e371ee22a647a627a5f012b885af21b"],["bower_components/font-roboto/RobotoTTF/Roboto-Thin.ttf","59abc13a3f517345b10d8ec7b217827b"],["bower_components/font-roboto/RobotoTTF/Roboto-ThinItalic.ttf","41f7c834cd6f5bab91cc44d5bf42dcca"],["bower_components/webcomponentsjs/webcomponents-hi-ce.js","62107544433af6498e5ead9ee89d1e4a"],["bower_components/webcomponentsjs/webcomponents-hi-sd-ce.js","9497087123e3953acd98957dd2517e5c"],["bower_components/webcomponentsjs/webcomponents-hi.js","33dcf7dc94d026f1271f1aff60518b27"],["bower_components/webcomponentsjs/webcomponents-lite.js","b309709f85b81fc73443935a6e1f67ba"],["bower_components/webcomponentsjs/webcomponents-loader.js","dfec8bfd9ac2a6f44551f90e0f875422"],["bower_components/webcomponentsjs/webcomponents-sd-ce.js","5c07db704628161673bd9a317f1777c8"],["images/favicon.ico","f9eb0e379e2f2b4a3252f195f6e9ff55"],["images/manifest/icon-144x144.png","49ae47b77f96aee0770aa523538c1e56"],["images/manifest/icon-192x192.png","d502c9de7d063c58938290dc2e0dfca1"],["images/manifest/icon-48x48.png","be17608695381a3456a66a6cec864af3"],["images/manifest/icon-72x72.png","b8a005fd9a752bb2855a42ee27b14ffb"],["images/manifest/icon-96x96.png","0e75f5857c5d5449634bb488cee219a1"],["images/upgrade.jpg","f2283369e20b73912915cd3928cbcaf7"],["index.html","5c11dc999214071a10527113e7298a22"],["src/d-continuous.html","a8b7ed3964941ad8dbfc144ad5b2ef93"],["src/d-discrete.html","6e83533c908ab2284a5168b95bbc1659"],["src/d-katex/fonts/KaTeX_AMS-Regular.woff2","f4c3270b2710ca9e0d537bea35ca5f06"],["src/d-katex/fonts/KaTeX_Caligraphic-Bold.woff2","a2e0522575c10759bcf3332c5db0260f"],["src/d-katex/fonts/KaTeX_Caligraphic-Regular.woff2","479a68ec912f41b8a28b1b1f3000b889"],["src/d-katex/fonts/KaTeX_Fraktur-Bold.woff2","8e5f883e14f473f6be1dfa8c51bf277b"],["src/d-katex/fonts/KaTeX_Fraktur-Regular.woff2","ae2b6f4374a0e6ad9f7cfd75b3b68fd3"],["src/d-katex/fonts/KaTeX_Main-Bold.woff2","83f8b326ade537b52c54593f448e980e"],["src/d-katex/fonts/KaTeX_Main-Italic.woff2","07510ed019e317ee10bb5a26012e1069"],["src/d-katex/fonts/KaTeX_Main-Regular.woff2","bd65225294e9ad1114ded0a8bde4d38b"],["src/d-katex/fonts/KaTeX_Math-BoldItalic.woff2","89e95efab5d5350eff3947b0b9b8c707"],["src/d-katex/fonts/KaTeX_Math-Italic.woff2","afeebb76a0201bf468f5e0b1a9622c09"],["src/d-katex/fonts/KaTeX_Math-Regular.woff2","e8af513329ea8400750ad955a1a74b49"],["src/d-katex/fonts/KaTeX_SansSerif-Bold.woff2","94911c5bbe819285194b62d1fe9e5987"],["src/d-katex/fonts/KaTeX_SansSerif-Italic.woff2","6a5b5cc9add33a257a0052d863bd2285"],["src/d-katex/fonts/KaTeX_SansSerif-Regular.woff2","7d5fa3e2a370f59774cd189cf6ca2e59"],["src/d-katex/fonts/KaTeX_Script-Regular.woff2","c472b57029cc804912e0380dcbf72491"],["src/d-katex/fonts/KaTeX_Size1-Regular.woff2","feed6c70fde629d6eb61e1ed2bb93537"],["src/d-katex/fonts/KaTeX_Size2-Regular.woff2","8a86a0afd5a0b172bdc93be1e3d53866"],["src/d-katex/fonts/KaTeX_Size3-Regular.woff2","2c1ea03043d76fc65767eb60aa6e0015"],["src/d-katex/fonts/KaTeX_Size4-Regular.woff2","680d35e3c073a84a91283a283e47fb0c"],["src/d-katex/fonts/KaTeX_Typewriter-Regular.woff2","8a6d8ed89749165e1f09044215edb958"],["src/distribution-app.html","04ec09432e78b47ed3c73949c5c5cca9"],["src/distributions/d-binomial-distribution.html","0cfde382a029ab4a85dc56ecdfb1ed62"],["src/distributions/d-chisquare-distribution.html","fc2a3d2ba2076a98e9dcc2c1d020cef7"],["src/distributions/d-geometric-distribution.html","40db6cb31b21d2c5b0e367734baa9549"],["src/distributions/d-normal-distribution.html","c5745078cd27f6c66e94e11b9297ed5c"],["src/distributions/d-poisson-distribution.html","d71da4ebafe0f9de32857ecf03eadd42"],["src/distributions/d-t-distribution.html","3f85e471ddec597c590782eeb55d8c9d"],["src/sample-distributions/d-mean-sd.html","0ee6147671666a11fd8423fcb189c215"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







