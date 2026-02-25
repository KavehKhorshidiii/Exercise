import React from "react"


type PageProps = {
  searchParams: Promise<{
    category?: string
    page?: string
  }>
}


export default function UserPage({ searchParams } : PageProps) {

    //const myParams = React.use(searchParams)
    const {category , page} = React.use(searchParams)


    return (
        <div>
            <p>shop</p>
            <p>{category}</p>
            <p>{page}</p>
        </div>
    )

}


