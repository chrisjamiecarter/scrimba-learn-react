import markerImage from "../assets/marker.png";

function Entry(props: {
  entry: {
    image: { src: string; alt: string };
    googleMapsUrl: string;
    country: string;
    title: string;
    dates: string;
    text: string;
  };
}): JSX.Element {
  return (
    <article className="journal-entry">
      <div className="journal-image-container">
        <img
          className="journal-image"
          src={props.entry.image.src}
          alt={props.entry.image.alt}
        />
      </div>
      <div className="info-container">
        <img className="marker-icon" src={markerImage} alt="map marker icon" />
        <span className="country">{props.entry.country}</span>
        <a href={props.entry.googleMapsUrl} target="_blank">
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.entry.title}</h2>
        <p className="entry-dates">{props.entry.dates}</p>
        <p className="entry-text">{props.entry.text}</p>
      </div>
    </article>
  );
}

export default Entry;
