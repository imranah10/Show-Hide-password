let SHOW = () => {
  let x = document.querySelector("#btn");
  let txt = document.getElementById("txt");
  var b = x.value;
  if (b == "SHOW") {
    x.value = "HIDE";
    x.style.background = "red";
    x.style.color = "white";
    txt.style.border = "5px solid red";
    var sTxt = (txt.type = "text");
  } else {
    x.value = "SHOW";
    x.style.background = "green";
    x.style.color = "white";
    txt.style.border = "5px solid green";
    var sTxt = (txt.type = "password");
  }
};
