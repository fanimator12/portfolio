import { ParallaxLayer } from "@react-spring/parallax";
import Carousel from "react-material-ui-carousel";
import { getSelectedPhotos } from "../data/photos";
function PhotoCarousel() {

    const photos = getSelectedPhotos();

    return (
        <ParallaxLayer
            offset={7}
            speed={1}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Carousel animation="slide" indicators={false} duration={1600} height="40em" sx={{ width: "70em" }}>
                {
                    photos.map((item, i) =>
                        <>
                            <Item key={i} item={item} />
                        </>)
                }
            </Carousel>
        </ParallaxLayer>
    );
}

function Item(props: any) {
    return (
        <img src={props.item.img}
            alt={props.item.title} style={{ objectFit: "cover", height: "100%", width: "100%" }} />
    );
}

export default PhotoCarousel;