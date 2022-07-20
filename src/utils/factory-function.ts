// import my pre-defined place interface 

import { Place } from "../components/Place";

// return object of Place type

function createPlace(
    title: string, 
    placeName: string, 
    countryName: string, 
    mainImage: string, 
    location: string,
    description: string,
    photographer: string,
    imgSrc: string
    ):Place {
    
        return {
            title,
            placeName,
            countryName,
            mainImage,
            location,
            description,
            photographer,
            imgSrc
    }
}

export default createPlace;