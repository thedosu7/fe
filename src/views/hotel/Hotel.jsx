import "./hotel.css";
import { useState } from "react";
import Navbar from "../items/navbar/Navbar";
import Head from "../head/Head";
import Foot from "../foot/Foot";
import Contact from "../items/contact/Contact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faLocationArrow,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const [slNum, setslNum] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/344274058.jpg?k=15f121960e0e769add933afa2522d3a73d929908574d7be553e94c0e330df059&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/184243173.jpg?k=7e32b96666f47ac80b7af638660bb1c6558ffe67a39e68d405a4e3fb52f5f92c&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/344273929.jpg?k=4eade47b86e111835cb560e73999ed3472c2cfc81da1c25379306c434736e292&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/344273666.jpg?k=c248a933f13cee3c4e0977fb65f48074093b533fcd2d9227a85bab4562c4e3e3&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/344273674.jpg?k=23f355333f43c330cd2cda1b19f28c9ca15645462135dd301b82655fa6af7bf3&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/344273894.jpg?k=2fe5ddfd82b019ae0da29ac2520edc24c060c79a5a99b579eb4e0e041c5d9193&o=&hp=1",
    },
  ];

  const openSlide = (item) => {
    setslNum(item);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newslNum;

    if (direction === "left") {
      newslNum = slNum === 0 ? 5 : slNum - 1;
    } else {
      newslNum = slNum === 5 ? 0 : slNum + 1;
    }

    setslNum(newslNum)
  };

  return (
    <div>
      <Navbar />
      <Head type="record" />
      <div className="container">
        {open && (
          <div className="slide">
            <FontAwesomeIcon
              icon={faXmark}
              className="closeIcon"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              className="arrowIcon"
              onClick={() => handleMove("left")}
            />
            <div className="slwrap">
              <img src={photos[slNum].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="arrowIcon"
              onClick={() => handleMove("right")}
            />
          </div>
        )}
        <div className="htWrap">
          <button className="book">Reserve or Book Now!</button>
          <h1 className="htTitle">Tower Street Apartments</h1>
          <div className="htAddress">
            <FontAwesomeIcon icon={faLocationArrow} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="htDist">
            Excellent location – 500m from center
          </span>
          <span className="htPrice">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="htImg">
            {photos.map((photo, item) => (
              <div className="htImgWrap" key={item}>
                <img
                  onClick={() => openSlide(item)}
                  src={photo.src}
                  alt=""
                  className="htImg"
                />
              </div>
            ))}
          </div>
          <div className="details">
            <div className="htDetails">
              <h1 className="htTitle">Stay in the heart of City</h1>
              <p className="htDesc">
                Set in Da Nang, 600 meters from My Khe Beach, Golden Rose Hotel offers accommodation with a restaurant, free private parking and a shared lounge. This 3-star hotel offers a concierge service and a tour desk. The property offers a 24-hour front desk, airport shuttle, room service and free WiFi.
                Rooms at Golden Rose Hotel are fitted with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety deposit box, a kettle and a private bathroom with a shower, bathrobes and slippers. Some rooms overlook the garden. All rooms are equipped with bed linen and towels.
                Golden Rose Hotel is located 1.9 km from Song Han Bridge and 2.6 km from Love Lock Bridge. The nearest airport is Da Nang International Airport, 7 km from the hotel.
              </p>
            </div>
            <div className="htPriceDetails">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Contact />
        <Foot />
      </div>
    </div>
  );
};

export default Hotel;