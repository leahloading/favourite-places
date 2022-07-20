import { Place } from "./Place";

function ImageAttribution(prop: Place): JSX.Element {
  return (
    <p>
      <a href={prop.imgSrc} target="_blank" rel="noreferrer">
        {prop.photographer}
      </a>
    </p>
  );
}

export default ImageAttribution;
