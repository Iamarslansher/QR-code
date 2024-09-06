var imgDiv = document.getElementById("qrCode");

function generateQRCode() {
  let userText = document.getElementById("textInput").value;
  if (!userText) {
    return alert("Enter Your Name or URL Please");
  }
  var qrCode =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userText;
  imgDiv.src = qrCode;
}
