function isPrime(number) {
  console.log(number);

  if (number < 2) return false;
  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }
  
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const tagMang = document.getElementById("timSoNguyenTo-mang");
  const tagKQ = document.getElementById("timSoNguyenTo-kq");
  const tagForm = document.getElementById("timSoNguyenTo-form");

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
      .find((num) => isPrime(num));

    if (result) {
      tagKQ.innerHTML = `🎉 Số nguyên tố đầu tiên trong mảng là số <strong>${result}</strong>.`;
      tagKQ.classList.replace("alert-danger", "alert-info");
      tagKQ.style.display = "block";
    } else {
      tagKQ.innerHTML = `❌ Rất tiếc! Mảng không có số nguyên tố. Giá trị trả về <strong>${-1}</strong>.`;
      tagKQ.classList.replace("alert-info", "alert-danger");
      tagKQ.style.display = "block";
    }
  };
});
