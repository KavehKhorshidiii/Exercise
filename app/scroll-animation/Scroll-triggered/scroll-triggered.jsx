"use client";

import { motion } from "framer-motion";

// انیمیشن یک‌بار پلی میشه، وقتی المان وارد viewport بشه.
// once: true یعنی فقط بار اول اجرا میشه، دفعات بعد اسکرول اثری نداره.
export default function ScrollTriggered() {
  return (
    <div style={{ padding: "4rem 2rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }} // 40% از المان دیده بشه کافیه
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          background: "#f5f5f7",
          borderRadius: 16,
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h2 className=" text-black">hi kaveh</h2>
        <p className=" text-black">welcome </p>
      </motion.div>
    </div>
  );
}

// نکته: اگه بخوای چند تا آیتم رو یکی‌یکی با تاخیر (stagger) نشون بدی،
// می‌تونی از motion.div های متعدد با transition.delay متفاوت استفاده کنی
// یا از variants + staggerChildren روی والد.