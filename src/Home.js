import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "./Slider";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/* <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        /> */}

        <Slider />

        <div className="home_row">
          <Product
            id={12345}
            title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
            price={109099.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg"
            rating={5}
          />
          <Product
            id={19245}
            title="Vivo X50 Pro (Alpha Grey, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={49990.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61hvpixQp3L._SL1200_.jpg"
            rating={4}
          />
          <Product
            id={19245}
            title="Dell Alienware M15 R2 15.6-inch FHD Laptop (9th Gen Core i9/16GB/1TB SSD/8GB NVIDIA 2080 Graphics)"
            price={322499.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61FjdoHidqL._SL1000_.jpg"
            am
            rating={5}
          />
          <Product
            id={19245}
            title="Bose SoundSport Free, True Wireless Earbuds, (Sweatproof Bluetooth Headphones for Workouts
               and Sports), Midnight Blue/Citron"
            price={18990.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61Bx0jEMbnL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_imageRow">
          <img
            className="home_bigImage"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/May/RiseIndia/UpdatedGW/V206289537_IN_HETV_RiseIndia_LATVFurniture_StorePage_PC_Header_1500x300.jpg"
            alt=""
          />
        </div>
        <div className="home_row">
          <Product
            id={39345}
            title="Fitbit Inspire Health and Fitness Tracker (Black)"
            price={12999}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={5}
          />
          <Product
            id={89345}
            title="Amazon Echo (3rd generation). Smart speaker with Alexa, Charcoal Fabric"
            price={7499}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />
          <Product
            id={89345}
            title="Tissot Men's T-Complication Squelette Analog Display Swiss Watch"
            price={11000}
            image="https://images-na.ssl-images-amazon.com/images/I/91eRelLD0BL._UL1500_.jpg"
            rating={5}
          />
          <Product
            id={76345}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 12868) - Silver (4th Generation)"
            price={80499}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
            rating={5}
          />
          <Product
            id={89345}
            title="Sony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip Screen)-Black"
            price={18019}
            image="https://images-na.ssl-images-amazon.com/images/I/716sQB1HdPL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_imageRow">
          <img
            className="home_images"
            src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/store/kamja/LP/Wireless/2col/latest_en_V1.jpg"
            alt=""
          />

          <img
            className="home_images"
            src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/store/kamja/LP/Wireless/2col/smart_en.jpg"
            alt=""
          />
        </div>
        <div className="home_row">
          <Product
            id={456789}
            title="Samsung LC49RG905511XEN 49' Curved LED Gaming Monitor - Full HD, VA Panel with VGA, 
            HDMI, Display, Audio in, Heaphone Ports - LC27F591FDWXXL (Silver)"
            price={10990}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={5}
          />
          <Product
            id={456789}
            title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black) (2018 model)"
            price={154999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
