document.addEventListener("DOMContentLoaded", () => {
  const tagMang = document.getElementById("timSoMin-mang");
  const tagKQ = document.getElementById("timSoMin-kq");
  const tagForm = document.getElementById("timSoMin-form");

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
      .reduce((min, num) => Math.min(min, num), Infinity);

    if (result) {
      tagKQ.innerHTML = `🎉 Số nhỏ nhất trong mảng là số <strong>${result}</strong>.`;
      tagKQ.classList.replace("alert-danger", "alert-info");
      tagKQ.style.display = "block";
    } else {
      tagKQ.innerHTML = `❌ Rất tiếc! Gặp lỗi <strong>${result}</strong>.`;
      tagKQ.classList.replace("alert-info", "alert-danger");
      tagKQ.style.display = "block";
    }
  };
});
