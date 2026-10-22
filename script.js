const factoryWhatsApp = "201025958451"; // حط رقم واتساب المصنع هنا

// فتح واتساب من أزرار طلب المنتجات
document.querySelectorAll(".order-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const orderType = document.getElementById("orderType");

    if (orderType) {
      orderType.value = product;
    }

    document.getElementById("orderForm")?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});

// إرسال تفاصيل الطلب إلى واتساب
const orderForm = document.getElementById("orderForm");

if (orderForm) {
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = document.getElementById("orderType").value;
    const quantity = document.getElementById("quantity").value;
    const details = document.getElementById("details").value.trim();

    if (!name || !phone || !product || !quantity) {
      alert("من فضلك املا البيانات المطلوبة.");
      return;
    }

    if (factoryWhatsApp.includes("X")) {
      alert("لازم تضيف رقم واتساب المصنع في ملف script.js الأول.");
      return;
    }

    const message =
      `طلب جديد من موقع مصنع آل سعود\n\n` +
      `اسم العميل: ${name}\n` +
      `رقم الموبايل: ${phone}\n` +
      `نوع الجلابية: ${product}\n` +
      `الكمية: ${quantity}\n` +
      `تفاصيل إضافية: ${details || "لا يوجد"}\n\n` +
      `المصدر: موقع مصنع آل سعود`;

    const whatsappURL =
      `https://wa.me/${factoryWhatsApp}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });
}

// زر الرجوع لأعلى الصفحة
const topButton = document.getElementById("topBtn");

if (topButton) {
  window.addEventListener("scroll", () => {
    topButton.style.display = window.scrollY > 300 ? "block" : "none";
  });

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// قائمة الموبايل
const menuButton = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuButton && navbar) {
  menuButton.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}