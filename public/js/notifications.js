chrome.alarms.onAlarm.addListener(data => {
  if (data.name === 'movie-alarm') {
    chrome.storage.local.get('nextMovie', (movie) => {
      chrome.notifications.create({
      type: "basic",
      title: "MOVIE TIME",
      message: `Time has come to relax with ${movie['nextMovie'].title}`,
      iconUrl: "img/logo.png"
    });
  });
  }
});
