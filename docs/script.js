// ฟังก์ชันเปลี่ยนหน้าไปข้างหน้า
function nextPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => (page.style.display = 'none'));
    document.getElementById(`page${pageNumber}`).style.display = 'block';

    if (pageNumber === 3) {
        generateRandomGifts(); // สุ่มการ์ดใหม่เมื่อเปิดหน้าการ์ด
    }
}

// ฟังก์ชันเปลี่ยนหน้ากลับ
function previousPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => (page.style.display = 'none'));
    document.getElementById(`page${pageNumber}`).style.display = 'block';
}

// รายการของขวัญ
const giftList = [
    { text: "🎂 ได้กัด 3 ที" },
    { text: "🎉 ได้กัด 1 ที" },
    { text: "✨ ขนมหรือของกินอะไรก็ได้ กับกัด 1 ที" },
    { text: "🎁 ได้กัด 7 ที" },
    { text: "🎁 เป็นเบ๊ 1 วัน" },
    { text: "🎁 กัดได้ตามใจชอบไม่มีบ่น" }
];

// ฟังก์ชันสุ่มตำแหน่งข้อความของขวัญ
function shuffleGifts() {
    // สุ่มลำดับข้อความใน `giftList` โดยสร้างสำเนาใหม่
    return [...giftList].sort(() => Math.random() - 0.5);
}

// ฟังก์ชันสุ่มการ์ด
function generateRandomGifts() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; // ล้างการ์ดก่อนสร้างใหม่

    // สุ่มตำแหน่งของของขวัญ
    const shuffledGifts = shuffleGifts();

    // เติมการ์ดที่สุ่มแล้วลงใน DOM
    shuffledGifts.forEach((gift, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.onclick = () => revealGift(card, gift);
        card.innerHTML = '<div class="card-text">?</div>';
        cardContainer.appendChild(card);
    });
}

// ฟังก์ชันสำหรับแสดงของขวัญ
function revealGift(card, gift) {
    card.innerHTML = `<strong>${gift.text}</strong>`;
    card.style.pointerEvents = 'none'; // ปิดการคลิกการ์ดซ้ำ
    card.style.background = '#D3D3D3'; // เปลี่ยนสีการ์ดหลังเปิด

}

// ฟังก์ชันสำหรับสไลด์โชว์
let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function previousSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

// เรียกใช้แสดงภาพแรกเมื่อโหลดหน้า
showSlide(currentSlideIndex);
