document.addEventListener("DOMContentLoaded", () => {
  const tagMang = document.getElementById("tsd-mang");
  const tagKQ = document.getElementById("tsd-kq");
  const tagForm = document.getElementById("tsd-form");

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
      .filter((num) => num > 0)
      .reduce((acc, curr) => acc + curr, 0);

    if (result) {
      tagKQ.innerHTML = `🎉 Tổng số dương là: <strong>${result}</strong>.`;
      tagKQ.classList.replace("alert-danger", "alert-info");
      tagKQ.style.display = "block";
    } else {
      tagKQ.innerHTML = `❌ Rất tiếc! Gặp lỗi <strong>${result}</strong>.`;
      tagKQ.classList.replace("alert-info", "alert-danger");
      tagKQ.style.display = "block";
    }
  };
});
