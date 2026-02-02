import HomeData from '@/data/data.json'
import Card from '@/app/modules/Card/card'

export default function TheHomeCards() {

  return(
    
      
        HomeData.homes.map(item => { return <Card details={item} key={item.id}/>})
      
    
  )

}
