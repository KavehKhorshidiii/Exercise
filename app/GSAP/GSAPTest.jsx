"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// انیمیشن سکشن اپل-استایل: باکس در جای خودش "pin" میشه
// و تا وقتی کاربر اسکرول می‌کنه، می‌چرخه و بزرگ میشه.
// وقتی انیمیشن تموم شد، pin آزاد میشه و اسکرول عادی ادامه پیدا می‌کنه.
export default function ScrollLinkedGSAP() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    // چون GSAP مستقیم DOM رو دستکاری می‌کنه، باید داخل useEffect
    // (بعد از mount شدن کامپوننت) اجرا بشه، نه در زمان render.
    const ctx = gsap.context(() => {
      gsap.to(boxRef.current, {
        scale: 1.5,
        rotate: 360,
        borderRadius: "50%",
        ease: "none", // ease نداشته باش چون scrub خودش حرکت رو کنترل می‌کنه
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // وقتی بالای سکشن به بالای صفحه رسید
          end: "+=1000", // بعد از ۱۰۰۰ پیکسل اسکرول اضافه، تموم شو
          scrub: 1, // انیمیشن با ۱ ثانیه تاخیر نرم دنبال اسکرول میره
          pin: true, // سکشن رو ثابت نگه دار تا انیمیشن کامل بشه
        },
      });
    }, sectionRef);

    // پاکسازی: وقتی کامپوننت از صفحه خارج شد، ScrollTrigger رو حذف کن
    // وگرنه با هر بار mount شدن دوباره، چندین trigger روی هم جمع میشه
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        ref={boxRef}
        style={{ width: 200, height: 200, background: "#fafafa",}}
      />
    </div>
  );
}

// نصب: npm install gsap
// نکته: برخلاف Framer Motion که فضای اسکرول رو با height زیاد (250vh) خودت می‌سازی،
// اینجا با end: "+=1000" به GSAP میگی خودش چقدر فضای اسکرول اضافه کنه.