let notificationId, imdbId;
chrome.alarms.onAlarm.addListener(data => {
  console.log(data);
  if (data.name.includes('movie-alarm')) {
    const movieDetails = data.name.split('@#');
    imdbId = movieDetails[2];
    chrome.notifications.create({
      type: "basic",
      title: "MOVIE TIME",
      message: `Time has come to relax with ${movieDetails[1]}`,
      iconUrl: "img/logo.png",
      buttons: [{
        title: "Watch",
        iconUrl: "img/theater.png"
      }]
      }, (id) => {
        notificationId = id;
      });
  }
});

chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
  if (notifId === notificationId) {
    if (btnIdx === 0) {
      // open the streaming url
      chrome.tabs.create({url: "http://gomovies.to"});
    }
    // there is a plan to handle snoozing
  }
});
