import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-black text-3xl flex flex-col justify-center items-center">
      Kaveh Khorshidi
      <Link href={{pathname:'/newPage',query:{name:"gogo"}}}>newPage</Link>
    </div>
  );
}
