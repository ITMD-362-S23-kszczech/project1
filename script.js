function showDefault() {
  document.getElementById("pitch").className="shown";
  document.getElementById("form").className="hidden";
  document.getElementById("thx").className="hidden";
}

function showRegister() {
  document.getElementById("pitch").className="hidden";
  document.getElementById("form").className="shown";
  document.getElementById("thx").className="hidden";
}

function showThanks() {
  document.getElementById("pitch").className="hidden";
  document.getElementById("form").className="hidden";
  document.getElementById("thx").className="shown";
}

function showAll() {
  document.getElementById("pitch").className="shown";
  document.getElementById("form").className="shown";
  document.getElementById("thx").className="shown";
}

function setInitialVisibility() {
  //Getting the hash value from the URL
  var hash = window.location.hash.substring(1);
  if(hash === "submit") {
    showThanks();
  } else if(hash === "debug") {
    showAll();
  } else {
    showDefault();
  }
  //Otherwise, do the default (show everything)
}