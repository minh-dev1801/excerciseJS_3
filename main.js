import "./tsd.js";
import "./demSoDuong.js";
import "./timSoMin.js";
import "./timSoDuongMin.js";
import "./timSoChanLast.js";
import "./doiCho.js";
import "./sapXepTangDan.js";
import "./timSoNguyenTo.js";
import "./demSoNguyen.js";
import "./soSanhDuongAm.js";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Tab  ~~~~~~~~~~~~~~~~~~~~~~~~~~
window.showSection = (sectionId, btnId) => {
  const buttons = [
    "btn-tongSoDuong",
    "btn-demSoDuong",
    "btn-timSoMin",
    "btn-timSoDuongMin",
    "btn-timSoChanLast",
    "btn-doiCho",
    "btn-timSoNguyenTo",
    "btn-sapXepTangDan",
    "btn-demSoNguyen",
    "btn-ssDuongAm",
  ];

  const arrTag = document.querySelectorAll("section");
  arrTag.forEach((tag) => (tag.style.display = "none"));

  buttons.forEach((btn) => {
    document
      .getElementById(btn)
      .classList.remove("btn-primary", "active", "btn-outline-primary");
    document.getElementById(btn).classList.add("btn-outline-primary");
  });

  document.getElementById(sectionId).style.display = "block";
  document.getElementById(btnId).classList.add("btn-primary", "active");
  document.getElementById(btnId).classList.remove("btn-outline-primary");
};
