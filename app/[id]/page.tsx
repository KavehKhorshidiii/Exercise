"use client";
import { useSearchParams } from "next/navigation";




export default function Demo() {
  
  const searchParams = useSearchParams();

  return <p>{searchParams.get("color")}</p>;

}