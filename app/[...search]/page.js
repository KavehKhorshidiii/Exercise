export default async function Page({ params, searchParams }) {

    const a = await (params)
    const b = await (searchParams)

    console.log(a)
    console.log(b)

    return (
        <div>
                {a.search} - {b.color}
        </div>
    )
}
