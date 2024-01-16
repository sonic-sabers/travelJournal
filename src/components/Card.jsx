import PropTypes from "prop-types";
import locationSvg from "../assets/location.svg"
export default function Card({ place }) {
    return (
        <div className="card">
            <img src={place.imageUrl} alt="Mount Fuji" />
            <div className="card__info">
                <div className="location-flex">
                    <img src={locationSvg} alt="location" className="location-svg" />
                    <h2 className="card__location">{place.location}</h2>
                    <a href={place.googleMapsUrl} className="card__google-maps">
                        View on Google Maps
                    </a>
                </div>
                <h1 className="card__title">{place.title}</h1>
                <span className="card__date">
                    {place.startDate} - {place.endDate}
                </span>
                <div className="card__description">
                    {place.description}
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    place: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        googleMapsUrl: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
};
