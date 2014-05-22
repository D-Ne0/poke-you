function poke_you() {
  var POKE_BACK = 'Poke Back';
  var poke_el = document.evaluate('//*[text()="' + POKE_BACK + '"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE).snapshotItem(0);
  if(poke_el) {
    poke_el.click();
    console.log('Poke You!');
  }
}

function poke_off(id) {
  window.clearInterval(id);
}

var poke_you_id = window.setInterval(poke_you, 2000);

/* poke_off(poke_you_id); # to stop poking */
