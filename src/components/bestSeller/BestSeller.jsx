import "./bestSeller.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../../data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const BestSeller = () => {
  return (
    <div className="bestSeller">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.slice(0, 12).map((item) => {
          return (
            <a target="_blank" href={item.link} rel="noreferrer">
              <div className="bestItem">
                <span>{item.name}</span>
                <img src={item.img} alt="Number5" />
              </div>
            </a>
          );
        })}
      </Carousel>
      ;
    </div>
  );
};

export default BestSeller;

// aj verevi ankyun@ grel anun ev gin chmoki chmoki, ergir chi
