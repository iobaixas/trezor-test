
function attachScript(_script) {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL(_script);
  s.onload = function() {
    this.remove();
  };

  (document.head || document.documentElement).appendChild(s);
}

attachScript('connect.js');
attachScript('binding.js');
