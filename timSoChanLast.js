document.addEventListener("DOMContentLoaded", () => {
  const tagMang = document.getElementById("timSoChanLast-mang");
  const tagKQ = document.getElementById("timSoChanLast-kq");
  const tagForm = document.getElementById("timSoChanLast-form");

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
      .filter((num) => num % 2 === 0)
      .at(-1);

    if (result) {
      tagKQ.innerHTML = `🎉 Số chẵn cuối cùng trong mảng là số <strong>${result}</strong>.`;
      tagKQ.classList.replace("alert-danger", "alert-info");
      tagKQ.style.display = "block";
    } else {
      tagKQ.innerHTML = `❌ Rất tiếc! Mảng không có số chẵn. Giá trị trả về <strong>${-1}</strong>.`;
      tagKQ.classList.replace("alert-info", "alert-danger");
      tagKQ.style.display = "block";
    }
  };
});
