import React from 'react'
export default  function Search({params , searchParams}) {

    const BoxParams = React.use(params)
    const BoxSearchParams = React.use(searchParams)
    

    return (
        <>
            <h1>{BoxParams.search[0]}</h1>
        </>
    )
}


