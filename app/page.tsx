

export default async function Home() {

  type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  const api = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await api.json()


  return (
    <div className="bg-black  flex flex-col justify-center items-center">
      
      {
        users.map((item: UserType) => (
          <p key={item.id}>{item.name}</p>
        ))
      }
    </div>
  );

}
