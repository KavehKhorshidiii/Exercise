import TheFeatures from "./template/homePage_template/Features/Features";
import TheGallery from "./template/homePage_template/gallery/Gallery";
import TheStory from "./template/homePage_template/story/Story";
import TheHomeCards from "./template/homePage_template/homeCard/HomeCards";



export default function Home() {
  return (
    <div className="bg-sky-400">
      
      <TheFeatures />
      <TheStory />
      <TheGallery />
      <TheHomeCards />
      
    </div>
  );
}
