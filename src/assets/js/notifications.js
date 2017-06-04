let notificationId, imdbId, link;

function playNotificationSound() {
  let notify = new Audio('../assets/audio/notification.ogg');
  notify.play();
}

chrome.alarms.onAlarm.addListener(data => {
  console.log(data);
  if (data.name.includes('movie-alarm')) {
    const movieDetails = data.name.split('@#');
    link = movieDetails[2];
    const alarmObject = {
      type: "basic",
      title: "MOVIE TIME",
      message: `Time has come to relax with ${movieDetails[1]}`,
      iconUrl: "assets/img/logo.png"
    };
    if (link && link.trim() !== 'undefined' && link.trim() !== '') {
      console.log(link);
      alarmObject['buttons'] = [{
        title: "Watch",
        iconUrl: "assets/img/theater.png"
      }];
    }
    chrome.notifications.create(alarmObject, (id) => {
        notificationId = id;
        playNotificationSound();
      });
  }
});

chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
  if (notifId === notificationId) {
    if (btnIdx === 0) {
      // open the streaming url
      chrome.tabs.create({url: link});
    }
    // there is a plan to handle snoozing
  }
});
