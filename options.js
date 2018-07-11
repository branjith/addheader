function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    hd1: document.querySelector("#hd1").value,
      hd2: document.querySelector("#hd2").value,
      hd3: document.querySelector("#hd3").value,
      hd4: document.querySelector("#hd4").value,
      hd5: document.querySelector("#hd5").value,
      vl1: document.querySelector("#vl1").value,
      vl2: document.querySelector("#vl2").value,
      vl3: document.querySelector("#vl3").value,
      vl4: document.querySelector("#vl4").value,
      vl5: document.querySelector("#vl5").value,
      urlPattern: document.querySelector("#urlPattern").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
      console.log(result);
    document.querySelector("#urlPattern").value = result.urlPattern || "<all_urls>";
      document.querySelector("#hd1").value = result.hd1 || "";
      document.querySelector("#hd2").value = result.hd2 || "";
      document.querySelector("#hd3").value = result.hd3 || "";
      document.querySelector("#hd4").value = result.hd4 || "";
      document.querySelector("#hd5").value = result.hd5 || "";
      
      document.querySelector("#vl1").value = result.vl1 || "";
      document.querySelector("#vl2").value = result.vl2 || "";
      document.querySelector("#vl3").value = result.vl3 || "";
      document.querySelector("#vl4").value = result.vl4 || "";
      document.querySelector("#vl5").value = result.vl5 || "";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get();
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);