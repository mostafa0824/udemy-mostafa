import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Notify from "../../Utils/Notify";
import HomeCart from "./HomeCart";

export default function Home() {
  const [items, setItems] = useState();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch(
  //         "https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/?page=1&page_size=10",
  //         {
  //           method: "GET",
  //           headers: {
  //             "x-rapidapi-key": "6a24580a91mshdc377f9df90d403p170d1fjsnf0f5e7c52d97",
  //             "x-rapidapi-host": "udemy-paid-courses-for-free-api.p.rapidapi.com",
  //           },
  //         }
  //       );
  //       const item = await res.json();
  //       setItems(item.courses);
  //     } catch (error) {
  //       console.log(error);
  //       Notify("error", "Failed to load courses");
  //     }
  //   })();
  // }, []);

    useEffect(() => {
      (async () => {
        try {
          const res = await fetch("http://localhost:3000/courses");
          const data = await res.json();
          setItems(data);
          console.log(data)
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);

   const itemsHome=items?.map((item,index)=>(<HomeCart key={index} id={index} name={item?.name} image={item?.image} price={item?.['actual_price_usd']} category={item?.category} description={item?.description} saleEnd={item?.['sale_end']} itemsHome={items}/>))
  
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">🎓 Free Udemy Courses</h2>
{items && (
  <Swiper
    navigation={true}
    modules={[Navigation,Autoplay]}
    autoplay={{ delay: 5000 }}
    loop={items.length > 1}
    spaceBetween={20}
    slidesPerView={1}
    className="mySwiper">
    {items?.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <img src={item?.image} alt={item?.name} className="w-full h-48 object-cover rounded-md"/>
          <h3 className="font-bold mt-2 text-lg">{item?.name}</h3>
          <p>{item?.description ? item.description.split(' ').slice(0, 9).join(' ') : "No description"}...</p>
          <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition cursor-pointer">
            Share Now
          </button>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
)}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
{itemsHome}
</div>
    </div>
  );
}
