async function Api() {
  const res = await fetch('https://fakestoreapi.com/products')
  
  if (!res.ok) {
    console.log("Error")
  }

  return res.json()
}

type ProductsType = {
  category:string,
  description:string,
  id:number,
  image:string,
  price:number,
  rating:{ rate:number, count:number },
  title:string
}

export default async function Home() {

  const ApiFunc:ProductsType[] = await Api()

  return (
    <div className="bg-black flex flex-col justify-center items-center">
      {
        ApiFunc.map((item:ProductsType) => <p key={item.id}>{item.title}</p>)
      }
    </div>
  );
}
