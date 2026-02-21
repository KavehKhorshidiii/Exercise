export async function generateStaticParams() {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    const users = await res.json()

    return users.map((user: { id: number }) => ({id: user.id.toString(),}))

}


export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    const user = await res.json()

    return (
        <div>
            <h1>{id}</h1>   
            <h1>{user.name}</h1>
        </div>
    )

}


