document.addEventListener('DOMContentLoaded', function() {
    var qrCodeElement = document.getElementById('qrCode');
    var qrCodeUrl = 'http://130.229.162.79:5501/HobbitProperties/webPage/keys-and-addresses.html'

    new QRCode(qrCodeElement, {
        text: qrCodeUrl,
        width: 128,
        height: 128
    });
});
