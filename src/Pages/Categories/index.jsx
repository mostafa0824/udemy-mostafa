import React, { useEffect, useState } from "react";
import CategoriesCart from "./CategoriesCart";
import Notify from "../../Utils/Notify";
import Loading from "../../Components/Loading";

export default function Categories() {
  const [prodocts, setProdocts] = useState();
  
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch(
  //         'https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/?page=1&page_size=10',
  //         {
  //           method: "GET",
  //           headers: {
	// 	'x-rapidapi-key': '6a24580a91mshdc377f9df90d403p170d1fjsnf0f5e7c52d97',
	// 	'x-rapidapi-host': 'udemy-paid-courses-for-free-api.p.rapidapi.com'
  //           },
  //         }
  //       );
  //       const data = await res.json();
  //       setProdocts(data.courses);
  //       Notify("sucsses", 'welcome');
  //     } catch (error) {
  //       Notify("error", "fetching courses.");
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/courses");
        const data = await res.json();
        setProdocts(data);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


if(!prodocts) return <Loading/>
 const items=prodocts?.map((item,index)=>(<CategoriesCart key={index} id={index} name={item?.name} image={item?.image} price={item?.['actual_price_usd']} category={item?.category} description={item?.description} saleEnd={item?.['sale_end']} prodocts={prodocts}/>))
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items}
      </div>
    </div>
  )
}
