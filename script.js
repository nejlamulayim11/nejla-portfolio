document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Bilgi mesajı
      alert("✅ Mesajınız gönderildi! En kısa sürede sizinle iletişime geçeceğim.");

      // Formu temizle
      form.reset();
    });
  } else {
    console.warn("İletişim formu bulunamadı (ID: contact-form).");
  }
});
