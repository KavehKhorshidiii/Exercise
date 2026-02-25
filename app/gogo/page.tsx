import React from "react"


type PageProps = {
  searchParams: Promise<{
    category?: string
    page?: string
  }>
}


export default async function UserPage({ searchParams } : PageProps) {

    const myParams = await searchParams
    //const {category , page} = React.use(searchParams)


    return (
        <div>
            <p>shop</p>
            <p>{myParams.category}</p>
            <p>{myParams.page}</p>
        </div>
    )

}


