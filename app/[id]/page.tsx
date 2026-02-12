'use client'


import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams(); // دسترسی به پارامتر داینامیک [id]
  
  return (
      <h1>product with ID = {params.id}</h1>
  )
}
