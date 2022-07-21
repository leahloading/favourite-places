// import { Place } from "./Place";  (probably not necessary now I've used destructuring syntax, so i commented to avoid typescript warning)

function ImageAttribution({
  photographer,
  imgSrc,
}: {
  photographer: string;
  imgSrc: string;
}): JSX.Element {
  return (
    <p>
      <a href={imgSrc} target="_blank" rel="noreferrer">
        {photographer}
      </a>
    </p>
  );
}

export default ImageAttribution;
