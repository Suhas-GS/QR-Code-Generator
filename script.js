const qrText = document.getElementById('qr-text');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if (qrText.value.length>0) {
        generateQRCode();
    } else {
        // alert("Enter the text or URL to generate your QR code");
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
});

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if (img!==null) {
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtrr);
    } 
});

function generateQRCode() {
    qrContainer.innerHTML="";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: 160,
        height: 160,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}