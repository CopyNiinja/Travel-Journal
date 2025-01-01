/* eslint-disable react/prop-types */
import { FaMapMarkerAlt } from "react-icons/fa";
export default function SingleLog(props) {
  console.log(props);
  return (
    <section className="single-log-box">
      <img
        src={props?.img?.src}
        alt={props?.img?.alt}
        className="single-log-box-left"
      />
      <div className="single-log-box-right">
        {/*  */}
        <div className="first-part" style={{ display: "flex" }}>
          <div
            className="pos"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1px",
            }}
          >
            <FaMapMarkerAlt className="map-pos" />
            <span className="country">{props.country}</span>
            <span>
              <a className="map" href={props.googleMapsLink}>
                View on Google Maps
              </a>
            </span>
          </div>
          {/*  */}
          <div className="title">
            <h3>{props.title}</h3>
          </div>
        </div>
        <div>
          <div className="dates">
            <h4>{props.dates}</h4>
          </div>
          <div className="text">
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
