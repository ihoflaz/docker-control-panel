const textarea = document.getElementById("evSSL_textarea");
const radioSSL = document.getElementById("SSL");
const radioEVSSL = document.getElementById("evSSL");
const radioNoSSL = document.getElementById("noSSL");
radioSSL.addEventListener('change', function (e) {
  if (this.checked) {
    textarea.style.display = "none";
  }
});
radioEVSSL.addEventListener('change', function (e) {
  if (this.checked) {
    textarea.style.display = "block";
  }
});
radioNoSSL.addEventListener('change', function (e) {
  if (this.checked) {
    textarea.style.display = "none";
  }
});