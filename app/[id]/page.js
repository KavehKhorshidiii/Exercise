import React from "react"

export default  function Page({params,searchParams}) {

    const a =  React.use(params)
    const b =  React.use(searchParams)
    
    console.log(a)

    return (
        <div>
            <p>product</p>
            <p>
                {a.id}
                <br />
                {b.model}
            </p>
        </div>
    )
}
