import { useDebugValue, useEffect, useState } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import axios from "axios";
import Slider from "react-slick";

function App() {
  const [users, setUsers] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const settings = {
    rtl: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/users");
      //console.log(data.users)
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-linear-to-r from-purple-900 via-orange-600 to-black pb-24">
        <Banner />
        <div>
          {isMobile ? (
            <div className="flex flex-wrap justify-center gap-4 px-4  ">
              {users.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="slider-container w-full  -mt-80 ">
              <Slider {...settings}>
                {users.map((item) => (
                  <div key={item.id}>
                    <Card item={item} />
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
