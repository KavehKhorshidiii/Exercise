import Link from "next/link"

export default function page() {
  return (
    <div>
      New Page <br />
      <Link href={{pathname:'/newPage/pro1' , query:{}}}>p-1</Link><br />
      <Link href={{pathname:'/newPage/pro1' , query:{}}}>p-2</Link><br />
      <Link href={{pathname:'/newPage/pro1' , query:{}}}>p-3</Link><br />
    </div>
  )
}
