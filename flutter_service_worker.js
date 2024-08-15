'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "859c8cf71ca4213a16a09e9d8469de23",
"version.json": "130f45010b7d587c1fa92b97ca83fd6c",
"index.html": "a978196015d3a8c5789479d0a86ff643",
"/": "a978196015d3a8c5789479d0a86ff643",
"main.dart.js": "cf72b2ffbe5acc465ff4970461cc42c6",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d38ee77a9c9bbb246519eb2a951a4dd2",
"intento/Plantilla.png": "19991a3f400eecdd7f5eb6615db015e4",
".git/config": "55a0f1af30f1372553998042b86a8ec8",
".git/objects/95/dc5a696a6372c2546015e5c5dd1428567852b4": "8dd853380479d89831ac8c9c07b98e9b",
".git/objects/68/64d767e05a95c8cf38636d3911ae682a4fca46": "057340892ea09888ec1ca0ed690e2403",
".git/objects/9b/7b085c857949bc54838c4b2bf67164f03a8659": "60a54fa4067efe6a1574491c0c1fde61",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3d/c37948cf044f888b5979df9e2640c2b1f146e9": "6d01ed7a24ec73e825a1bd03f7b0f1af",
".git/objects/67/6b20e23b0775438c2ebf2ba40744df14714f7a": "d3aa61d501686e779c76efb7087fd3f0",
".git/objects/9c/a669410b0ba372937fb38bf0f6b95906692402": "eb1f713955de5a83f5213926ee327894",
".git/objects/b3/3cc51ac5aefb98ad189cc66458ea8ac1ca3174": "7dc98227e689864d8471e8c3c0e3a61a",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a2/2d2df94afed18514f29c91b135eb406177bb4b": "be9fedfd2ebe71635565ff5c48d7c59f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/e40b4d80030e7f9e2fbca5becbc3f5d36efdb7": "de187672626a7d52dd034a316e5f5b0c",
".git/objects/f3/70a39ae6709840a41ed54a3b85a24d845d1df6": "a5b9e55f74c2b422c6f36562ca58e841",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/116ee28655fb8bcad277bf0258f4e846513b51": "73208ffe5550a2356ed1c1a3c4f6a174",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/e3/33291db8b2b6b64abbad4b99a0b75e36d3c70f": "43249b29cdfc57c669966f6cbff794d9",
".git/objects/cf/ed7c2abff6e70ccbe2dc52ab0350dbf9031ab9": "b605073069a8bcb0ac68403f06e39591",
".git/objects/ca/12fb47b877e07158977dcf7495e6627dbc237b": "2d0a2a605e1dc61ee6d38ceec3f6e123",
".git/objects/fb/133fa9ca67ff183efea1a9d4eb3fc8ee08772d": "ef3fb3447751fdcb22dd184c83bca007",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/5aab6082c0ed197ae3c9271a7589befd20b37f": "c8b2c172fc8ab7c7237a3c2114c9a39d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/89/3f2b75e7d5f341e2a30ffb3b0edcc20bd7faf6": "a3b493e3ba38846b72621730b3d52927",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/8a8e4dab5712d64855684a16c46404ce7c2152": "e25e4324fcc8dc1165d168b53c68646c",
".git/objects/28/e33352a928b3cd82cfd1bd8b3bebc3874c6044": "8e088c27f3f2c6cfc2ce311fb9c4ae30",
".git/objects/7b/ea289d26341d64efbc6a9b6ddaa37517aeea21": "899006ae07fef513e1572125ef77430f",
".git/objects/8f/d3977bb7cbca9ac2c2567008cd386439e1eae4": "dcf6cf19c1a9ee5ec1e304f408b92793",
".git/objects/8a/4d2a0dc8e7f4dd198233684b9fdeb2c227a4ae": "5961f73e46d8e2e2814e001c4a4af511",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/40e361019ffb72c1eb44ec67a9e54c3cef2652": "81b1b97be88a06950724f743e91291cc",
".git/objects/19/10554eb0946e96c30912142845aa3b267741f1": "ac98756048dbc8be367fd29ad4336eb9",
".git/objects/86/668cc690ac498cd1e9141cb65523a5a229eead": "00c803e82d6bddc6d1c28de31caabc0e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/9a/b447e7a39725805beb33de87e0b41b0aace9b3": "c4976bd23582f342579a0768ab158027",
".git/objects/36/1085449da2922384bb805714103a5935fa75d8": "ba0869e71bc5cebb629834c36423eac6",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/65/5d3cb14f24bcd30e5205bdad3c510cb79f6afe": "d28947f68d9775d74625929cb388a61f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/11a863164ccf0a576fc9a9ac1bf26ee5280d71": "425198e54c3e56fb874a1a0e39c6d3a3",
".git/objects/6d/ed75bbb01fc41bbb151675c4a9a19247f01564": "968a5512e1894cc76d98292f470da4af",
".git/objects/0a/f9f923f9e93c231203bae346f898654616d1a9": "0373979ab1a0cbb5d582814302215b2b",
".git/objects/90/e053e4f9ee174ae53af77df753cdad4d6492d9": "d60da415e610196aeb1208c9e8644726",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/5307e6f0d3c5cc2920dcb7306d7df2309899f3": "e64548651e2aef57785bfd59f60c47b0",
".git/objects/b8/6ee5f2bde06c0fa1f99bf77e6df9a24c9dc573": "ce99eeffd93b1f8deca91c2443862dae",
".git/objects/b8/aeb53aedd1e2869560deec48efd1bdccd95b5a": "03ce45ac8bccc128461e6d1436fd5ae6",
".git/objects/a9/75aa620e12a5cd323d4ca285279b8af42ba866": "bce497b2d72e6d4d6fee784c72b932a4",
".git/objects/d2/886ca78e815e9741ca91919092724c68dd4a10": "746931b66e5e12ba43a334922a939f2e",
".git/objects/af/0ea49ff89a0ac66f0445c55fdf4a8ffb5d12f5": "c70814eebf0dafca6642bf8c30389845",
".git/objects/af/db99e4c06161843e3719c177765ca9e8c9c1d4": "77d48eb4b34cf3420762d3a74378db77",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/577f4f9a50edda1d58ceea2fae9c2a0a113d8c": "8a893c115c7f3cc8b8dc101a00adb23f",
".git/objects/a1/c08fba892b709ab92571150b8b2952e595b38e": "da550230eac33d25040c635b6876756e",
".git/objects/c4/73491d10e4e7b3f128b3f98723a72a7e3ca92e": "460d21991b2158e51dcf5d7f0a2de23e",
".git/objects/cd/b82122ed61da6367fbba0f45eb0b313c957302": "1931c11629bc0120756982301ea780c4",
".git/objects/f0/b5d33c2f0842fb895439dbbcfd57c407692a57": "afd507ad10fa8fca253c22b14b53c05b",
".git/objects/e8/aa4e58be2a93b9f0b2e696962751d498951cd4": "8da7d58eb4a94354b66838eccb4a6832",
".git/objects/f8/5a306e9ae9d5892a46207d574bf866e66cb83b": "5e7e22df5e202dbcf4abe8067779fc78",
".git/objects/2d/d212962c169d0b98e84dc691448fbb9981ea87": "257ef6f312e734148b0e0725ef5e01b0",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/d02307f32df6d9245da6d1cbee5a4bf238bf2e": "684448e7be2364073c076131c4cb6261",
".git/objects/8c/c3076f0daa191b0c58413e3400979ed221c682": "bec7e2a6612f717f0511cd2f7fe01e4f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/6d47f6860009964531f8e4ef53ad7149b210e8": "d024589f51564e909f657edc223f05b6",
".git/objects/40/e7faac7f62e870e40f40048501edd81d6bb922": "35438a66b63b1303bdf5b53972cecb9e",
".git/objects/13/b535979ed04385d1ceaa0bce511e1828325702": "75d493ceb687ea423eb5463648361393",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "db9d78b70e388226584cac9ce4b155c6",
".git/logs/refs/heads/main": "de0e52f5ca6dcdc11240e2bf882e7953",
".git/logs/refs/remotes/origin/main": "6a3797a3dda0a34bd6ebf72db790c5f2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f1496ca7befcc93d120834bd4a067450",
".git/refs/remotes/origin/main": "f1496ca7befcc93d120834bd4a067450",
".git/index": "89b5bd4fe2916c18204a118ed6669e69",
".git/COMMIT_EDITMSG": "8f0b1200c2a8eec632bd0743e2ce934e",
"assets/AssetManifest.json": "8370fb31137c19ad5437f49e0985b384",
"assets/NOTICES": "ca282969397ed61019c1d84444e93a81",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/AssetManifest.bin.json": "9fd056d54d4ca2b091329bc96dede395",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ed2bbe60a6df8bb4a1ee75cf361d351c",
"assets/Assets/Images/Logo.png": "7a7f0568b9cd789a899bb3ebca131fc8",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
