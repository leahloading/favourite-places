interface Place {
    title: string
    placeName: string
    countryName: string
    mainImage: string
    location: string
    description: string
    
}



function PlaceEntry(props: Place): JSX.Element {
    return (
        <section>
            <img src={props.mainImage} width="320" height="auto"/>
            <h2>{props.title}</h2>
            <h3>{props.placeName}, {props.countryName} <a href={props.location}>(map link)</a></h3>
            <p>{props.description}</p>


        </section>

    )
}

export default PlaceEntry;
export type {Place};