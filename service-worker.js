self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('dino-run-v1').then(cache => {
      return cache.addAll([
        './trex-game.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        './',
        // Character Sprites
        'Character Sprites/T-Rex.png',
        'Character Sprites/Mario.png',
        'Character Sprites/Luigi.png',
        'Character Sprites/Sonic.png',
        'Character Sprites/Link.png',
        'Character Sprites/Pikachu.png',
        'Character Sprites/Kirby.png',
        'Character Sprites/Yoshi.png',
        'Character Sprites/Bowser.png',
        'Character Sprites/Peach.png',
        'Character Sprites/Donkeykong.png',
        'Character Sprites/Samus.png',
        'Character Sprites/Megaman.png',
        'Character Sprites/Pacman.png',
        'Character Sprites/Masterchief.png',
        'Character Sprites/IronMan.png',
        'Character Sprites/CapAmerica.png',
        'Character Sprites/Thor.png',
        // Object Sprites
        'Object Sprites/Boo.png',
        'Object Sprites/BulletBill.png',
        'Object Sprites/Elite1.png',
        'Object Sprites/Elite2.png',
        'Object Sprites/Elite3.png',
        'Object Sprites/Goomba.png',
        'Object Sprites/Koopa.png',
        // PowerUps
        'PowerUps/star.png',
        'PowerUps/clock.png',
        'PowerUps/heart.png',
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
