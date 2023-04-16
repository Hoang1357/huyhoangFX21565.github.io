"use strict";
// tương tác của phần thông tin cá nhân
const info = document.querySelector(".personal-info");
const btn = document.querySelector(".btn-email");

document.querySelector(".btn").addEventListener("click", function checkEmail() {
  const email = document.querySelector(".form-control");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email.value)) {
    alert("Hay nhap dia chi email hop le.\nExample@gmail.com");
  } else {
    info.classList.remove("hidden");
    btn.classList.add("hidden");
  }
});

// tương tác của chức năng nghề nghiệp

// Tuy đã hoàn thành bài làm nhưng em vẫn thấy bài chưa được tối ưu
// Phần bên dưới là phần em đã làm thử với vòng lặp for
// Nhưng bị kẹt ở đoạn đổi textcontent, rất mong nhận được lời khuyên

// const button = document.querySelectorAll(".button");
// const hide = document.querySelectorAll(".hide");

// for (let i = 0; i < button.length; i++)
//   button[i].addEventListener("click", function () {
//     const abc = function (button) {
//       document.querySelector(".button[i]").textContent = button;
//     };

//     if (hide[i].classList.contains("hidden")) {
//       hide[i].classList.remove("hidden");
//       abc("▲ View Less");
//     } else {
//       hide[i].classList.add("hidden");
//       abc("▼ More View");
//     }
//   });

// kinh nghiem
const button1 = document.querySelector(".button");
const hide1 = document.querySelector(".hide");
const changeText1 = function (button1) {
  document.querySelector(".button1").textContent = button1;
};

const openInfo = function () {
  hide1.classList.remove("hidden");
  changeText1("▲ View Less");
};
const closeInfo = function () {
  hide1.classList.add("hidden");
  changeText1("▼ More View");
};

document.querySelector(".button").addEventListener("click", function () {
  if (hide1.classList.contains("hidden")) {
    openInfo();
  } else {
    closeInfo();
  }
});

const button2 = document.querySelector(".button2");
const hide2 = document.querySelector(".hide2");
const changeText2 = function (button2) {
  document.querySelector(".button2").textContent = button2;
};

// học vân
const openInfo2 = function () {
  hide2.classList.remove("hidden");
  changeText2("▲ View Less");
};
const closeInfo2 = function () {
  hide2.classList.add("hidden");
  changeText2("▼ More View");
};

document.querySelector(".button2").addEventListener("click", function () {
  if (hide2.classList.contains("hidden")) {
    openInfo2();
  } else {
    closeInfo2();
  }
});

// hoạt động
const button3 = document.querySelector(".button3");
const hide3 = document.querySelector(".hide3");
const changeText3 = function (button3) {
  document.querySelector(".button3").textContent = button3;
};

const openInfo3 = function () {
  hide3.classList.remove("hidden");
  changeText3("▲ View Less");
};
const closeInfo3 = function () {
  hide3.classList.add("hidden");
  changeText3("▼ More View");
};

document.querySelector(".button3").addEventListener("click", function () {
  if (hide3.classList.contains("hidden")) {
    openInfo3();
  } else {
    closeInfo3();
  }
});

// sở thích
const button4 = document.querySelector(".button4");
const hide4 = document.querySelector(".hide4");
const changeText4 = function (button4) {
  document.querySelector(".button4").textContent = button4;
};

const openInfo4 = function () {
  hide4.classList.remove("hidden");
  changeText4("▲ View Less");
};
const closeInfo4 = function () {
  hide4.classList.add("hidden");
  changeText4("▼ More View");
};

document.querySelector(".button4").addEventListener("click", function () {
  if (hide4.classList.contains("hidden")) {
    openInfo4();
  } else {
    closeInfo4();
  }
});

// ngôn ngữ
const button5 = document.querySelector(".button5");
const hide5 = document.querySelector(".hide5");
const changeText5 = function (button5) {
  document.querySelector(".button5").textContent = button5;
};

const openInfo5 = function () {
  hide5.classList.remove("hidden");
  changeText5("▲ View Less");
};
const closeInfo5 = function () {
  hide5.classList.add("hidden");
  changeText5("▼ More View");
};

document.querySelector(".button5").addEventListener("click", function () {
  if (hide5.classList.contains("hidden")) {
    openInfo5();
  } else {
    closeInfo5();
  }
});

// kĩ năng
const button6 = document.querySelector(".button6");
const hide6 = document.querySelector(".hide6");
const changeText6 = function (button6) {
  document.querySelector(".button6").textContent = button6;
};

const openInfo6 = function () {
  hide6.classList.remove("hidden");
  changeText6("▲ View Less");
};
const closeInfo6 = function () {
  hide6.classList.add("hidden");
  changeText6("▼ More View");
};

document.querySelector(".button6").addEventListener("click", function () {
  if (hide6.classList.contains("hidden")) {
    openInfo6();
  } else {
    closeInfo6();
  }
});
