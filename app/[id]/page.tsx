// "use client";
// import { useSearchParams } from "next/navigation";
// //? => http://localhost:3000/lolo?color=red&size=xl
// export default function SearchDemo() {
//   const searchParams = useSearchParams();
//   const color = searchParams.get("color");
//   const size = searchParams.get("size");
//   return (
//     <div>
//       <p>رنگ: {color}</p> 
//       {/* => red */}
//       <p>سایز: {size}</p> 
//       {/* => xl */}
//     </div>
//   );
// }



"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function FilterButton() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log('router =>' , router)
  console.log('pathname => ' , pathname)
  console.log('searchParams => ' , searchParams)

  const handleClick = () => {
    // ساخت query جدید
    const newQuery = new URLSearchParams(searchParams.toString());
    newQuery.set("color", "blue");
    newQuery.set("size", "l");

    // ترکیب pathname و query → URL کامل
    const url = `${pathname}?${newQuery.toString()}`;

    router.push(url); // هدایت بدون رفرش
  };

  
  return (
        <>
            <p>color = {searchParams.get("color")}</p>
            <p>color = {searchParams.get("size")}</p>

            <button onClick={handleClick}>اعمال فیلتر جدید</button>
        </>
  ) 
}

