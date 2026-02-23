// التأكد من تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('action-btn');

    btn.addEventListener('click', () => {
        alert('تم تشغيل النظام الرقمي بنجاح!');
    });
});