document.addEventListener("DOMContentLoaded", () => {
  const tagMang = document.getElementById("demSoNguyen-mang");
  const tagKQ = document.getElementById("demSoNguyen-kq");
  const tagForm = document.getElementById("demSoNguyen-form");

  if (!tagMang || !tagKQ || !tagForm) {
    console.error("❌ Lỗi: Không tìm thấy một số phần tử cần thiết trong DOM!");
    return;
  }

  tagForm.onsubmit = function (e) {
    e.preventDefault();
    let mangNumber = tagMang.value;

    const result = mangNumber
      .split(",")
      .map(Number)
      .filter(Number.isInteger).length;

    if (result) {
      tagKQ.innerHTML = `🎉 Đếm được <strong>${result}</strong> số nguyên trong mảng.`;
      tagKQ.classList.replace("alert-danger", "alert-info");
      tagKQ.style.display = "block";
    } else {
      tagKQ.innerHTML = `❌ Rất tiếc! Gặp lỗi <strong>${result}</strong>.`;
      tagKQ.classList.replace("alert-info", "alert-danger");
      tagKQ.style.display = "block";
    }
  };
});
