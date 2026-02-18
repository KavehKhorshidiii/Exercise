export default async function Home() {

  const api = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = api.json()

  return (
    <div className="bg-black text-3xl flex flex-col justify-center items-center">
      
    </div>
  );

}
