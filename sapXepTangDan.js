document.addEventListener("DOMContentLoaded", () => {
  const tagMang = document.getElementById("sapXepTangDan-mang");
  const tagKQ = document.getElementById("sapXepTangDan-kq");
  const tagForm = document.getElementById("sapXepTangDan-form");

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
      .sort((a, b) => a - b);

    if (result) {
      tagKQ.innerHTML = `🎉 Mảng đã được sắp xếp theo thứ tự tăng dần <strong>[${result}]</strong>`;
      tagKQ.classList.replace("alert-danger", "alert-info");
      tagKQ.style.display = "block";
    } else {
      tagKQ.innerHTML = `❌ Rất tiếc! Mảng không có số chẵn. Giá trị trả về <strong>${-1}</strong>.`;
      tagKQ.classList.replace("alert-info", "alert-danger");
      tagKQ.style.display = "block";
    }
  };
});
