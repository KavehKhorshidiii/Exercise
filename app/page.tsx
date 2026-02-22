import Link from "next/link"

type UserType = {
  id: number
  name: string
}

export default async function Home() {

  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  const users = await res.json()

  return (
    <div>

      <h1>Users List</h1>

      {
        users.map((user: UserType) => (
          <div key={user.id}>
            <Link href={`/${user.id}`}>{user.name}</Link>
          </div>
        ))
      }

    </div>
  )

}