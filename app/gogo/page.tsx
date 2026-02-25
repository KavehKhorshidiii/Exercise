"use client"



import { useSearchParams } from "next/navigation"

export default function FilterInfo() {
  const searchParams = useSearchParams()

  const category = searchParams.get("category")

  return <p>Category: {category}</p>
}

