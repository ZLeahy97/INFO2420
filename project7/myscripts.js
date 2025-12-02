function preloadImages() {
    var images = [
        'Images/Logo1.png',
        'Images/Logo2.png',
        'Images/Bee1.jpg',
        'Images/bee2.jpg',
        'Images/bee3.jpg',
        'Images/bee4.jpg'
    ];

    for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];
    }
}

function rolloverLogo(newSrc) {
    var logoImg = document.getElementById('logo');
    if (logoImg) {
        logoImg.src = newSrc;
    }
}

function swapMain(newSrc, newCaption) {
    var mainImg = document.getElementById('mainimg');
    var caption = document.getElementById('caption');

    if (mainImg) {
        mainImg.src = newSrc;
        mainImg.alt = newCaption;
    }

    if (caption) {
        caption.textContent = newCaption;
    }
}

function printPage() {
    window.print();
}

