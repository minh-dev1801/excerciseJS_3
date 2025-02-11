document.addEventListener("DOMContentLoaded", () => {
  const tagMang = document.getElementById("ssDuongAm-mang");
  const tagKQ = document.getElementById("ssDuongAm-kq");
  const tagForm = document.getElementById("ssDuongAm-form");

  if (!tagMang || !tagKQ || !tagForm) {
    console.error("❌ Lỗi: Không tìm thấy một số phần tử cần thiết trong DOM!");
    return;
  }

  tagForm.onsubmit = function (e) {
    e.preventDefault();
    let mangNumber = tagMang.value.split(",").map(Number);

    const positiveNums = mangNumber.filter((num) => num > 0).length;
    const negativeNums = mangNumber.filter((num) => num < 0).length;

    if (positiveNums > negativeNums) {
      tagKQ.innerHTML = `🎉 <strong>Số dương > số âm</strong>`;
      tagKQ.classList.replace("alert-danger", "alert-info");
      tagKQ.style.display = "block";
    } else if (positiveNums < negativeNums) {
      tagKQ.innerHTML = `🎉 <strong>Số dương < số âm</strong>`;
      tagKQ.classList.replace("alert-danger", "alert-info");
      tagKQ.style.display = "block";
    } else if (positiveNums == negativeNums) {
      tagKQ.innerHTML = `🎉 <strong>Số dương = số âm</strong>`;
      tagKQ.classList.replace("alert-danger", "alert-info");
      tagKQ.style.display = "block";
    } else {
      tagKQ.innerHTML = `❌ Rất tiếc! Gặp lỗi <strong>${result}</strong>.`;
      tagKQ.classList.replace("alert-info", "alert-danger");
      tagKQ.style.display = "block";
    }
  };
});
