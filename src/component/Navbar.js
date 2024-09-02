import React from "react";
import "./Navbar.css";
export default function Navbar() {
  function handleClick() {
    document.body.classList.toggle("darkMode");
  }

  // document.getElementById("language-select").onchange = function () {
  //   const lang = this.value;
  //   setLanguage(lang);
  // };

  // function setLanguage(lang) {
  //   const elements = document.querySelectorAll("[data-lang]");
  //   elements.forEach((el) => {
  //     el.textContent = translations[lang][el.getAttribute("data-lang")];
  //   });
  //   if (lang == "ar") {
  //     document.querySelector(".right").style.direction = "rtl";
  //     localStorage.setItem("lang", "ar");
  //   } else {
  //     document.querySelector(".right").style.direction = "ltr";
  //   }
  // }

  // const translations = {
  //   en: {
  //     signup: "Signup",
  //     userName: "User Name",
  //     phoneNumber: "Phone Number",
  //     email: "Email",
  //     password: "Password",
  //     rePassword: "Re Password",
  //     uploadCertificate: "Upload Certificate",
  //     haveAccount: "Have an account?",
  //     login: "login",
  //     a: "INTER CODE",
  //     b: "The verification code has been sent to your email",
  //     c: "The code consists of 6 digits containing letters and numbers and is valid for 10 minutes.",
  //     verify: "Verify",
  //     welcome: "Welcome to our store",
  //     logout: "Logout",
  //     forget: "Forget Password",
  //     dont: "don't have an account?",
  //     have: "Have an account?",
  //   },
  //   ar: {
  //     signup: "إنشاء حساب",
  //     login: "سجل الدخول",
  //     userName: "اسم المستخدم",
  //     phoneNumber: "رقم الهاتف",
  //     email: "الإيميل",
  //     password: "كلمة السر",
  //     rePassword: "إعادة كلمة السر",
  //     uploadCertificate: "تحميل شهادة",
  //     haveAccount: "هل لديك حساب؟",
  //     login: "سجل الدخول",
  //     a: "ادخل الكود",
  //     b: "تم ارسال رمز التحقق لبريدك الالكتروني",
  //     c: "الكود يحتوي على 6 حروف و صالح لمدة عشر دقائق",
  //     verify: "تحقق",
  //     welcome: "اهلا بك في متجرنا",
  //     logout: "تسجيل حروج",
  //     forget: "نسيت كلمة السر",
  //     dont: "ليس لديك حساب؟",
  //     have: "هل لديك حساب؟",
  //   },
  // };

  return (
    <nav>
      <div className="logo">
        <img src="./images/logo.png" />
      </div>
      <ul className="sections">
        <li className="activebar">Home</li>
        <li>About us</li>
        <li>Products</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
      <ul className="iconss">
        <li>
          <img src="./images/search.png" />
        </li>
        <li>
          <img src="./images/fav.png" className="icon--2" />
        </li>
        <li>
          <img src="./images/shop.png" className="icon--3" />
        </li>
      </ul>
      <select name="" id="language-select">
        <option value="en">English</option>
        <option value="ar">عربي</option>
      </select>
      <div className="darkMode-btn" onClick={handleClick}>
        <img className="moon" src="./images/moon.png" />
        <img className="sun" src="./images/sun.png" />
      </div>
      <button>Logout</button>
    </nav>
  );
}
