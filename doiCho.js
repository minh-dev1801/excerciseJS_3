document.addEventListener("DOMContentLoaded", () => {
  const tagMang = document.getElementById("doiCho-mang");
  const tagNum1 = document.getElementById("doiCho-firstNumber");
  const tagNum2 = document.getElementById("doiCho-secondNumber");
  const tagKQ = document.getElementById("doiCho-kq");
  const tagForm = document.getElementById("doiCho-form");

  if (!tagMang || !tagKQ || !tagForm || !tagNum1 || !tagNum2) {
    console.error("❌ Lỗi: Không tìm thấy một số phần tử cần thiết trong DOM!");
    return;
  }

  tagForm.onsubmit = function (e) {
    e.preventDefault();
    let mangNumber = tagMang.value;
    let num1 = +tagNum1.value;
    let num2 = +tagNum2.value;

    const arr = mangNumber.split(",").map(Number);

    if (num1 > 0 && num1 < arr.length && num2 > 0 && num2 < arr.length) {
      [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
      tagKQ.innerHTML = `🎉 Mảng đã được đổi chỗ là <strong>${arr}</strong>.`;
      tagKQ.classList.replace("alert-warning", "alert-info");
      tagKQ.style.display = "block";
    } else {
      tagKQ.innerHTML = "⚠️ Lỗi: Vị trí nhập vào không hợp lệ!";
      tagKQ.classList.replace("alert-info", "alert-warning");
      tagKQ.style.display = "block";
    }
  };
});
