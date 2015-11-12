import swivel from 'swivel';

if (('serviceWorker' in navigator)) {
  navigator.serviceWorker
    .register('/bundle.js')
    .then(navigator.serviceWorker.ready)
    .then(function (thing) {
      console.log('registered', thing);
      swivel.on('data', function handler (context, ...data) {
        console.log('allo!');
      });
    });
}
