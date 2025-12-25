import Link from "next/link";
import { allProduct } from "./productData/productData";

export default  function Home() {

  return (
    <div className="  flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        
       <h1>shop</h1>

       <br />

        {allProduct.map((item)=><Link key={item.id} href={item.name}>{item.name}</Link>)}

      </main>
    </div>
  );
}
