// import PlaceEntry component
import PlaceEntry from "./Place";
// import Place factory function
import createPlace from "../utils/factory-function";
import { create } from "domain";

    // create object of Place type using my createPlace factory function
    export const place1 = createPlace(
        "A cosy cafe, giving aesthetic academia",
        "Shaman",
        "England",
        "https://images.unsplash.com/photo-1421622548261-c45bfe178854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGNvc3klMjBjYWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://www.google.com/maps/dir//Shaman+London+-+Bermondsey,+Locke,+157+Tower+Bridge+Rd,+London+SE1+3LW/@51.499158,-0.0815526,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x48760399854ee583:0x3b57e04f9d3890b9!2m2!1d-0.0793639!2d51.499158!3e3",
        "The scent is so good and the environment is relaxed but focused. A great place to work, meet friends or just relax.",
        "Serge Esteve",
        "https://unsplash.com/photos/klXhDG8Roj4"
        );

    export const place2 = createPlace(
        "La Vie en Rose",
        "Toulouse",
        "France",
        "https://images.unsplash.com/photo-1576367872882-489d040b9bde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://www.google.com/maps/place/Toulouse,+France/@43.6006819,1.3628026,12z/data=!3m1!4b1!4m5!3m4!1s0x12aebb6fec7552ff:0x406f69c2f411030!8m2!3d43.604652!4d1.444209",
        "This place is special to me! It is the first place I went on holiday with my partner.",
        "DAT VO",
        "https://unsplash.com/photos/F4u8Vm7UdgY" 
    );

    export const place3 = createPlace(
        "The streets of Cardiff",
        "Cardiff",
        "Wales",
        "https://images.unsplash.com/photo-1528105162958-dc027e58ce6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80",
        "https://www.google.com/maps/place/Cardiff/@51.5021573,-3.3451324,11z/data=!3m1!4b1!4m5!3m4!1s0x486e02d434ec53f5:0x143406db6586670e!8m2!3d51.483707!4d-3.1680962",
        "This city has some of the vibrant energy of London but without the congestion!.",
        "Benjamin Ranger",
        "https://unsplash.com/photos/45d0RkXa5jM"
    )

    export const place4 = createPlace(
        "The Champs-Élysées",
        "Paris",
        "France",
        "https://images.unsplash.com/photo-1648726443656-06f5f6be6fbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://www.google.com/maps?q=champs+elysees+maps&uact=5&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIFCAAQhgMyBQgAEIYDMgUIABCGAzIFCAAQhgM6CgguEMcBENEDEEM6DQguELEDEMcBENEDEEM6CwguEIAEEMcBENEDOhEILhCABBCxAxCDARDHARDRAzoLCAAQgAQQsQMQgwE6CwguEIAEELEDEIMBOggIABCABBCxAzoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6BAguEEM6CAguEIAEELEDOgsILhCxAxCDARDUAjoNCC4QxwEQ0QMQ1AIQQzoECAAQQzoOCC4QgAQQsQMQxwEQ0QM6BwguENQCEEM6BwguELEDEEM6BwgAELEDEEM6EAguELEDEMcBENEDENQCEEM6CwguEIAEEMcBEK8BOg4ILhCABBDHARCvARDUAjoKCC4QgAQQ1AIQCjoHCAAQgAQQCjoICAAQgAQQyQM6BQguEIAEOgQIABAKOgcIABCxAxAKOgoIABCxAxCDARAKOgoILhDHARCvARAKOgQILhAKSgQIQRgASgQIRhgAUABY1BhgghpoAXABeACAAYUBiAHuDpIBBDkuMTGYAQCgAQHAAQE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj5pvar9Yf5AhUfQEEAHb-VDckQ_AUoAXoECAEQAw",
        "I persuaded my family to go on a trip to Paris as a child, I have great memories of the trip.",
        "Rasmus Gundorff Sæderup",
        "https://unsplash.com/photos/2paX7r_wTzk"
    )

    export const place5 = createPlace(
        "An adventure of blue skies and port cabins",
        "Porto",
        "Portugal",
        "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://www.google.com/maps/place/Porto,+Portugal/@41.1621429,-8.6219537,12z/data=!3m1!4b1!4m5!3m4!1s0xd2465abc4e153c1:0xa648d95640b114bc!8m2!3d41.1579438!4d-8.6291053",
        "I visited Porto a few years ago to see a friend of mine who was living there. It was a great reunion in a beautiful location.",
        "Nick Karvounis",
        "https://unsplash.com/photos/Prb-sjOUBFs"

    )

function MainContent(): JSX.Element {


    return (
        <>
        <PlaceEntry
        title={place1.title}
        mainImage={place1.mainImage}
        placeName={place1.placeName}
        countryName={place1.countryName}
        location={place1.location}
        description={place1.description}
        photographer={place1.photographer}
        imgSrc={place1.imgSrc}
        />

        <PlaceEntry
        title={place2.title}
        mainImage={place2.mainImage}
        placeName={place2.placeName}
        countryName={place2.countryName}
        location={place2.location}
        description={place2.description}
        photographer={place2.photographer}
        imgSrc={place2.imgSrc}
        />

        <PlaceEntry
                title={place3.title}
                mainImage={place3.mainImage}
                placeName={place3.placeName}
                countryName={place3.countryName}
                location={place3.location}
                description={place3.description}
                photographer={place3.photographer}
                imgSrc={place3.imgSrc}
                />

        <PlaceEntry
                title={place4.title}
                mainImage={place4.mainImage}
                placeName={place4.placeName}
                countryName={place4.countryName}
                location={place4.location}
                description={place4.description}
                photographer={place4.photographer}
                imgSrc={place4.imgSrc}
                />

        
        <PlaceEntry
                title={place5.title}
                mainImage={place5.mainImage}
                placeName={place5.placeName}
                countryName={place5.countryName}
                location={place5.location}
                description={place5.description}
                photographer={place5.photographer}
                imgSrc={place5.imgSrc}  
                />
        </>
        
    )
}

export default MainContent;