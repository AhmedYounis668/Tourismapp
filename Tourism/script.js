// وظيفة البحث عن الكروت بناءً على النص المدخل
function searchCard() {
    const searchInput = document.querySelector('.search-input').value.toLowerCase(); // الحصول على النص المدخل وتحويله إلى حروف صغيرة
    const cards = document.querySelectorAll('.card'); // تحديد جميع الكروت
    
    cards.forEach(card => {
        const cardTitle = card.querySelector('h3').innerText.toLowerCase(); // الحصول على عنوان الكارت وتحويله إلى حروف صغيرة
        if (cardTitle.includes(searchInput)) {  // إذا كان العنوان يحتوي على النص المدخل
            card.style.display = 'block';  // عرض الكارت
        } else {
            card.style.display = 'none';  // إخفاء الكارت
        }
    });
}

// تفعيل البحث عند الكتابة في مربع البحث
document.querySelector('.search-input').addEventListener('input', searchCard);

// تفعيل البحث عند الضغط على زر البحث
document.querySelector('.search-button').addEventListener('click', searchCard);
