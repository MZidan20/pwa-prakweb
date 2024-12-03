if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
        if ('Notification' in window && 'PushManager' in window) {
          Notification.requestPermission().then(permission => {
            if (permission === "granted") {
              console.log('Notification permission granted');
            } else {
              console.log('Notification permission denied');
            }
          });
        }
      })
      .catch(err => {
        console.error('Service Worker registration failed:', err);
      });
  });
}
