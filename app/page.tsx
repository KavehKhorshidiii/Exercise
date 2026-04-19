import Image from "next/image"

export default function Home() {
  return (
    <>
      <p>Home</p>
      <Image width={100} height={100} alt="img" src='/myImg.png'></Image>
    </>
  )
}

