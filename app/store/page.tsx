import Card from '../modules/Card/card'
import dataHomes from '@/data/data.json'

export default function Page() {
  return (
    <div className=' py-10 grid grid-cols-2 bg-gray-800 justify-items-center gap-y-7'>
      {
        dataHomes.homes.map(item => <Card details={item} key={item.id}/>)
      }
    </div>
  )
}
