import React from "react";
import Slider from "react-slick";
import { Carrossel, Card } from './styles'

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
          <Card>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex porro cupiditate distinctio cumque temporibus, optio aut dignissimos recusandae aspernatur eligendi facilis itaque quod perferendis dolor ipsum harum fugiat officia!</div>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex porro cupiditate distinctio cumque temporibus, optio aut dignissimos recusandae aspernatur eligendi facilis itaque quod perferendis dolor ipsum harum fugiat officia!</div>
          </Card>
          <Card>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempore, minima a fugit blanditiis illo vero. Maiores assumenda consequuntur deleniti molestiae, sequi pariatur necessitatibus veniam! Deserunt vitae enim commodi aspernatur.</h3>
          </Card>
          <Card>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure nisi maiores? Minima ab aspernatur omnis molestiae voluptates, blanditiis temporibus esse laborum accusantium nobis, repellat nam, perspiciatis quia harum culpa.</h3>
          </Card>
          <Card>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis ad unde recusandae inventore iure et excepturi placeat accusamus, omnis, maxime, magni voluptatem odio deleniti ea id facilis qui natus.</h3>
          </Card>
          <Card>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ex quasi reprehenderit quas id iure cupiditate exercitationem dolorem saepe architecto magni, amet corrupti omnis expedita aut cumque debitis animi alias?</h3>
          </Card>
          <Card>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur atque, id accusamus inventore saepe illum doloremque doloribus praesentium quae, sint vel numquam expedita quis. Nobis illo quis neque maxime.</h3>
          </Card>
        </Slider>
      </Carrossel>
    );
  }
export default SimpleSlider ;