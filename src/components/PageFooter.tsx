import ImageAttribution from "./ImageAttribution";
import { place1 } from "./MainContent";
import { place2 } from "./MainContent";
import { place3 } from "./MainContent";
import { place4 } from "./MainContent";
import { place5 } from "./MainContent";

function PageFooter(): JSX.Element {
    return (
        <footer>
            <h1>Images</h1>
            <ImageAttribution
            title={place1.title}
            mainImage={place1.mainImage}
            placeName={place1.placeName}
            countryName={place1.countryName}
            location={place1.location}
            description={place1.description}
            photographer={place1.photographer}
            imgSrc={place1.imgSrc}
            />

            <ImageAttribution
            title={place2.title}
            mainImage={place2.mainImage}
            placeName={place2.placeName}
            countryName={place2.countryName}
            location={place2.location}
            description={place2.description}
            photographer={place2.photographer}
            imgSrc={place2.imgSrc}
            />

            <ImageAttribution
            title={place3.title}
            mainImage={place3.mainImage}
            placeName={place3.placeName}
            countryName={place3.countryName}
            location={place3.location}
            description={place3.description}
            photographer={place3.photographer}
            imgSrc={place3.imgSrc}/>

            <ImageAttribution
            title={place4.title}
            mainImage={place4.mainImage}
            placeName={place4.placeName}
            countryName={place4.countryName}
            location={place4.location}
            description={place4.description}
            photographer={place4.photographer}
            imgSrc={place4.imgSrc}
            />

            <ImageAttribution
            title={place5.title}
            mainImage={place5.mainImage}
            placeName={place5.placeName}
            countryName={place5.countryName}
            location={place5.location}
            description={place5.description}
            photographer={place5.photographer}
            imgSrc={place5.imgSrc}
            />

            
        </footer>
        
    )
}

export default PageFooter;