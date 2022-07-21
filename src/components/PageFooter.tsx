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
        photographer={place1.photographer}
        imgSrc={place1.imgSrc}
      />

      <ImageAttribution
        photographer={place2.photographer}
        imgSrc={place2.imgSrc}
      />

      <ImageAttribution
        photographer={place3.photographer}
        imgSrc={place3.imgSrc}
      />

      <ImageAttribution
        photographer={place4.photographer}
        imgSrc={place4.imgSrc}
      />

      <ImageAttribution
        photographer={place5.photographer}
        imgSrc={place5.imgSrc}
      />
    </footer>
  );
}

export default PageFooter;
