chrome.alarms.onAlarm.addListener(data => {
  if (data.name.includes('movie-alarm')) {
    const movieDetails = data.name.split('@#');
    chrome.notifications.create({
      type: "basic",
      title: "MOVIE TIME",
      message: `Time has come to relax with ${movieDetails[1]}`,
      iconUrl: "img/logo.png"
    });
  }
});
