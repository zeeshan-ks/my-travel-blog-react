import pinLogo from "./../images/pin.png"
export default function Card(props) {
    console.log(props)
    return(
        <section className="Card">
            <img className="Card-image" src={props.location.imageUrl} alt="card " />
            <div className="Card-details" >
                <span className="Card-details-location">
                    <img className="Card-details-pin" src={pinLogo} alt="pin "/>
                    <p className="Card-country">{props.location.location}</p>
                    <a className="Card-map-link" href={props.location.googleMapsUrl}>View on Google Maps</a> 
                </span>

                <h1 className="Card-location-name">{props.location.title}</h1>
                <span className="Card-time">{props.location.startDate} - {props.location.endDate}</span>
                <p className="Card-description">{props.location.description}</p>
            </div>
        </section>
    )
}