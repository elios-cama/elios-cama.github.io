'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "62757f0534b5d3f2085da72887e8cf2e",
"assets/AssetManifest.json": "6370f4894c6708df19574cb62c6494ef",
"assets/assets/files/AC20.pdf": "a21280f413055e53fce283623f570545",
"assets/assets/files/resume.pdf": "860406ab22877a858ead5d0cbb5b1585",
"assets/assets/images/3D/belfort/belfort_1.png": "ba521ba8fc9b8f200201607503b5bbd7",
"assets/assets/images/3D/belfort/belfort_2.png": "d823d06200909f81b20218c2c9b1b1b7",
"assets/assets/images/3D/halle/halle_1.png": "56a59e52d1f0e9aa5c3fbe824bff0bad",
"assets/assets/images/3D/halle/halle_2.png": "6a6a9f7c340f8e4585b784e2695de3f5",
"assets/assets/images/3D/halle/halle_3.png": "9b1455cbd4f6e1705c596daa35619b4e",
"assets/assets/images/3D/halle/halle_4.png": "013249671c39969930314c2511035af7",
"assets/assets/images/3D/halle/halle_5.png": "3ce2db7a35962f02a261cbcf81757b22",
"assets/assets/images/3D/halle/halle_6.png": "e203c26857ef6a47a2d2d4be8a1db9f0",
"assets/assets/images/3D/salon/salon_1.png": "73855e6f3f892b75c31717a4179f9dad",
"assets/assets/images/3D/salon/salon_2.png": "43e883d9ea13cbac99a5fa96d00614d5",
"assets/assets/images/3D/salon/salon_3.png": "7e6c9e6cc520ee4d51cb68b2d3c42326",
"assets/assets/images/3D/salon/salon_4.png": "7382880a7cb6ab473f2538da1d97838c",
"assets/assets/images/coffee.png": "825e9affb9f67954e01770d6c6e76c88",
"assets/assets/images/elios.png": "677e5e3cc5b93c328d41f34e330c8096",
"assets/assets/images/map.png": "afdf3f25c60d33095762670c8e337de2",
"assets/assets/images/mobile/budgetZero/budget_zero_1.png": "e0ec1d8ff68719e9487bae6c0b599063",
"assets/assets/images/mobile/budgetZero/budget_zero_2.png": "f3262b5429fedbd2769077c21883e8cd",
"assets/assets/images/mobile/budgetZero/budget_zero_3.png": "2b62338ebd6d3dc765191632dd55381e",
"assets/assets/images/mobile/budget_zero_logo.png": "f562a333a0cd4c8bd9a2c79e1de31702",
"assets/assets/images/mobile/budget_zero_pres.png": "1bac30625e69d3b944103d8433bd3c82",
"assets/assets/images/mobile/daymode/daymode_1.PNG": "349704b160329e08ebc2974c8352d3cb",
"assets/assets/images/mobile/daymode/daymode_2.PNG": "cd5f904244fec9f9a254510d4746494c",
"assets/assets/images/mobile/daymode/daymode_3.PNG": "404341adf0ba1cbe669f76d846fcd301",
"assets/assets/images/mobile/daymode/daymode_4.PNG": "5c6c18f10e52b894cc564729143af0ea",
"assets/assets/images/mobile/daymode_logo.png": "9b5c54e7f54dddb8f9eb5cf6dad7ed82",
"assets/assets/images/mobile/daymode_pres.png": "d543a241e98004d0b120025d746ba560",
"assets/assets/images/mobile/dreamnote/dreamnote_1.jpeg": "08ef6a6d42adf4be1ba50dad2ba228a8",
"assets/assets/images/mobile/dreamnote/dreamnote_2.jpeg": "cc8ed0eef3eb3ebeebf65ad28decda12",
"assets/assets/images/mobile/dreamnote/dreamnote_3.jpeg": "8c6a8117f5ddfd86cbe3dfaffeb4bc11",
"assets/assets/images/mobile/dreamnote/dreamnote_4.jpeg": "44b1340e8ab802c230603154d54c2e0f",
"assets/assets/images/mobile/dreamnote_logo.png": "acf1e7d5db922550e0b942bc20113004",
"assets/assets/images/mobile/dreamnote_pres.png": "fe8c693348c68743b62ca16470eae277",
"assets/assets/images/olive.png": "5c381a1fd2173bfd84d23ced050610b2",
"assets/assets/images/web/musicGrid/music_grid_1.png": "9507c639d8eb1d65f3ea1f599a62a068",
"assets/assets/images/web/musicGrid/music_grid_2.png": "f510781741d96c4fc300832cfa4b6314",
"assets/assets/images/web/musicGrid/music_grid_3.png": "832868936e32cd524161b6b62c9d2e5c",
"assets/assets/images/web/musicGrid/music_grid_4.png": "7107100f4913a699cdbeb4e6d04380e1",
"assets/assets/images/web/musicGrid/music_grid_5.png": "c0f89c34da846f42171fbcf7e692a0a8",
"assets/assets/svg/3D.svg": "0eb0b88ab746b2e6aa5cdb3afc3cd73f",
"assets/assets/svg/coffee.svg": "e1deacb37142ca5b06a253f01e695399",
"assets/assets/svg/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/svg/gmail.svg": "d7fe2b35a167af27b6e9af03289380ec",
"assets/assets/svg/linkedin.svg": "64de5845c71d1e54fb6d3610ed949221",
"assets/assets/svg/mobile.svg": "986f7a98e470eca9329681c66346d738",
"assets/assets/svg/olive.svg": "96665b58e3d2f33cd912235f7d628c42",
"assets/assets/svg/others.svg": "7f0a914c78d3f7fea572eb6df4e837c9",
"assets/assets/svg/profile.svg": "5c851777dc4f05b89d131459198970fd",
"assets/assets/svg/stackoverflow.svg": "c9038d0ba9f3f6d53364c0950acae704",
"assets/assets/svg/techno/blender.svg": "85fee1db0cfb4438919d226da5060359",
"assets/assets/svg/techno/css.svg": "8f7247295a43d53a6cb70a10f463b4de",
"assets/assets/svg/techno/deezer.svg": "5eaa20dbc43753c512098ab3d37f18a1",
"assets/assets/svg/techno/django.svg": "9f61fbbc1251582140ffa1ab403a9886",
"assets/assets/svg/techno/firebase.svg": "cef7c97ac5ad507248af8075e5f58c50",
"assets/assets/svg/techno/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/svg/techno/git.svg": "395d8c6917b47ac4dcde3600673f6519",
"assets/assets/svg/techno/gitlab.svg": "c2c228ff14df49ae562d6dc4d52a13cf",
"assets/assets/svg/techno/html.svg": "6f3d69949ef38223d94a5a78a0ecd6ca",
"assets/assets/svg/techno/illustrator.svg": "19ca562805edf9d4fb0075d181a4424c",
"assets/assets/svg/techno/jetbrains.svg": "86e31ddc115a747069f5b072124dab6a",
"assets/assets/svg/techno/kotlin.svg": "a7735a82bb1788b6356ba6f03f8ebfc3",
"assets/assets/svg/techno/linux.svg": "541e7254a2495acf6687332a99968c34",
"assets/assets/svg/techno/penpot.svg": "0e47c82c2dd0e013b0f6148d053b28f1",
"assets/assets/svg/techno/python.svg": "85368627053aa7df8e1340c0f29acdb8",
"assets/assets/svg/techno/tensorflow.svg": "8d074c5beccaac704d01216c73c195e5",
"assets/assets/svg/techno/unity.svg": "fa382f6fff3aefd5e742df878f2de5cd",
"assets/assets/svg/web.svg": "c06cc20656d76f3a47976d9a3cdf7c40",
"assets/FontManifest.json": "840cb7928f3e885a40392e9e4746ee50",
"assets/fonts/ArchivoBlack-Regular.ttf": "0ae1329aa90805a3901ff8929e244a38",
"assets/fonts/MaterialIcons-Regular.otf": "358dfc824c2a6eefb64ff5b1d349c019",
"assets/NOTICES": "8cbc01c00a668cd5bdb2a9ba16e60869",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b4d1388ecfc828f7fdd6a5e52b3a839b",
"/": "b4d1388ecfc828f7fdd6a5e52b3a839b",
"main.dart.js": "30daf2871737084484c7e03fbb22e1cd",
"manifest.json": "93d9fc4bc0f5b74a4c565719a7ad7012",
"version.json": "0f03637ac67458009917b94f94ed587c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
