import React from "react";
import Slider from "react-slick";
import { Carrossel, Card } from './styles'
import CapaDiv from "../Capa";

const SimpleSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    
    return (
      <Carrossel>
        <Slider {...settings}>
          <CapaDiv />
          <Card>
            <CapaDiv />
          </Card>
        </Slider>
      </Carrossel>
    );
  }
export default SimpleSlider ;