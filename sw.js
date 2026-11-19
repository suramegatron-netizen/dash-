/* Command Centre: показ уведомлений. Кэша нет, страница грузится как обычно. */
self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('push',function(e){var d={};try{d=e.data?e.data.json():{};}catch(x){try{d={body:e.data.text()};}catch(y){}}
  e.waitUntil(self.registration.showNotification(d.title||'Command Centre',{body:d.body||'Открой план дня',tag:d.tag||undefined,icon:'icon.png',badge:'icon.png',data:{url:'./'}}));});
self.addEventListener('notificationclick',function(e){e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(L){for(var i=0;i<L.length;i++){if('focus' in L[i])return L[i].focus();}return self.clients.openWindow('./');}));});
