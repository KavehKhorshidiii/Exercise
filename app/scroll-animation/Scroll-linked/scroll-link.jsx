"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// انیمیشن مستقیم به مقدار اسکرول وصله - جلو و عقب رفتن اسکرول
// باعث جلو و عقب رفتن انیمیشن هم میشه. دقیقاً سبک اپل.
export default function ScrollLinked() {
  const ref = useRef(null);

  // scrollYProgress عددیه بین 0 و 1 که پیشرفت اسکرول رو نشون میده
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // از وقتی بالای سکشن به پایین صفحه میرسه
  });

  // مقدار 0 تا 1 رو به مقادیر واقعی map می‌کنیم
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.2, 0.7]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    // این div باید ارتفاع زیادی داشته باشه تا فضای کافی برای اسکرول وجود داشته باشه
    <div ref={ref} style={{ height: "250vh", position: "relative" }}>
      <motion.div
        style={{
          scale,
          rotate,
          opacity,
          position: "sticky",
          top: "35vh",
          width: 220,
          height: 220,
          margin: "0 auto",
          background: "#0071e3",
          borderRadius: 24,
        }}
      />
    </div>
  );
}

// نکته: به جای یه باکس ساده می‌تونی همینجا <img> یا <video> بذاری
// و به جای rotate/scale از x, y, clipPath, filter هم استفاده کنی
// برای افکت‌های پیچیده‌تر مثل چرخش سه‌بعدی آیفون.