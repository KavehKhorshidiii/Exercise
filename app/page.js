import ScrollLinked from '@/app/scroll-animation/Scroll-linked/scroll-link'
import ScrollTriggered from '@/app/scroll-animation/Scroll-triggered/scroll-triggered'
import ScrollLinkedGSAP from '@/app/GSAP/GSAPTest'

export default function page() {
   return (
      <div>
         <ScrollLinked></ScrollLinked>
         <ScrollTriggered></ScrollTriggered>
         <ScrollLinkedGSAP></ScrollLinkedGSAP>
      </div>
   )
}
