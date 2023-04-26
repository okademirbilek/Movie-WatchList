
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import  movieData from "../editorsChoice"

import "./slick.css"
import "./slick-theme.css"

function SlickSlider(props) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1185,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              initialSlide: 0,
              dots:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots:false
              
            }
          }
        ]
      };


  return (
    <div>
        <Slider {...settings}>
            {movieData.map(movie => (<SliderItem justAlert={props.justAlert}  key={movie.id} movie={movie}/>) )}
        </Slider>
    </div>
  )
}

export default SlickSlider