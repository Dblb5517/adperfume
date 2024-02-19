import './bestSeller.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Number5 from "../../assets/images/chanel n5.png";
import Gucci from "../../assets/images/gucci_shmuchi.png";
import Hay from"../../assets/images/kurkdjian.webp";
import Louis from "../../assets/images/louis.webp";
import Vuitton from "../../assets/images/louisssss.webp";

const responsive = {
desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
},
tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
},
mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
}
};


const BestSeller = () => {

    const bestSeller = [
        {
            name: 'Channel Number 5',
            image:  Number5,
            price: '120$'
        },
        {
            name: 'Gucci Flora',
            image:  Gucci,
            price: '80$'
        },
        {
            name: 'Kurkdjian',
            image:  Hay,
            price: '250$'
        },
        {
            name: 'Louis Vuittion',
            image:  Louis,
            price: '400$'
        },
        {
            name: 'Lav Vuittion',
            image:  Vuitton,
            price: '100$'
        },
    ]

    return (
        <div className='bestSeller'>
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
                {
                    bestSeller.map((item)=>{
                        return(
                            <div className="bestItem">
                                <span>{item.name}</span>
                                <span>{item.price}</span>
                                <img src={item.image} alt="Number5" />
                            </div>
                        )
                    })
                }
            </Carousel>;
        </div>
  )
}

export default BestSeller

// aj verevi ankyun@ grel anun ev gin chmoki chmoki, ergir chi