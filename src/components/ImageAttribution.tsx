import { Place } from "./Place";

function ImageAttribution({photographer, imgSrc}: {photographer: string, imgSrc: string}): JSX.Element {
  return (
    <p>
      <a href={imgSrc} target="_blank" rel="noreferrer">
        {photographer}
      </a>
    </p>
  );
}

export default ImageAttribution;
