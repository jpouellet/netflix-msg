(() => {
  // WebExtensions / Chrome compat
  var browser = browser || chrome;

  var changeTitle = (msg) => {
    var bar = document.querySelector('.player-status-main-title');
    if (bar)
      bar.textContent = msg;
    else
      setTimeout(() => { changeTitle(msg); }, 2000);
  };

  browser.storage.local.get('netflix_msg', (result) => {
    var msg = result.netflix_msg;
    if (msg !== '')
      changeTitle(msg);
  });
})();
