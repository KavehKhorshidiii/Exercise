"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function FilterButton() {

  const router = useRouter(); // هوک useRouter برای دسترسی به متدهای ناوبری
  const pathname = usePathname(); // هوک usePathname برای دسترسی به مسیر فعلی
  const searchParams = useSearchParams(); // هوک useSearchParams برای دسترسی به پارامترهای جستجو (query parameters)

  console.log('router =>' , router)
  console.log('pathname => ' , pathname)
  console.log(searchParams.toString())


  const handleClick = () => {
    // ساخت query جدید
    const newQuery = new URLSearchParams(searchParams.toString());
    newQuery.set("color", "blue");
    newQuery.set("size", "l");

    // ترکیب pathname و query → URL کامل
    const url = `${pathname}?${newQuery.toString()}`;

    // هدایت بدون رفرش
    router.push(url); 
  };


  return (
        <>
            <p>color = {searchParams.get("color")}</p>
            <p>color = {searchParams.get("size")}</p>

            <button onClick={handleClick}>اعمال فیلتر جدید</button>
        </>
  ) 


}


