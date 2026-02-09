export default async function Home() {



  return (
    <div className="bg-black flex flex-col justify-center items-center">
      {
        ApiFunc.map((item:ProductsType) => <p key={item.id}>{item.title}</p>)
      }
    </div>
  );
}
