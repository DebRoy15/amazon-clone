import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Slider.css";

function Slider() {
  return (
    //     <Carousel className="home_image" showArrows={true}>
    //       <div>
    //         <img src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_HO_PVD5388._CB406163142_.jpg" />
    //       </div>
    //       <div>
    //         <img src="https://images-fe.ssl-images-amazon.com/images/G/65/marketing/prime/gateway/durian_primehero_acquisition_gw_dt_tallhero_1500x600_1x_rev._CB406517482_.jpg" />
    //       </div>
    //       <div>
    //         <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" />
    //       </div>
    //     </Carousel>
    <Carousel>
      <Carousel.Item>
        <div className="home_image">
          <img src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_HO_PVD5388._CB406163142_.jpg" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="home_image">
          <img src="https://images-fe.ssl-images-amazon.com/images/G/65/marketing/prime/gateway/durian_primehero_acquisition_gw_dt_tallhero_1500x600_1x_rev._CB406517482_.jpg" />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="home_image">
          <img src="https://images-fe.ssl-images-amazon.com/images/G/35/AU-hq/2020/img/Books/XCM_Manual_ORIGIN_1239916_1272742_AU_au_books_gw_2x_v3_3298555_1500x600_1X_en_AU._CB406245466_.jpg" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
