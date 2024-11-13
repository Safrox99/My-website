function addToCart() {
    // تشغيل الصوت
    const sound = document.getElementById('scarySound');
    sound.play();

    // إظهار الصورة المخيفة
    const overlay = document.getElementById('scaryImage');
    overlay.style.display = 'flex';

    // إخفاء الصورة بعد 3 ثوانٍ
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 3000);
}