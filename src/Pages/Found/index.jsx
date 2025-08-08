import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import Home from "../Home";

export default function Found() {
  const location=useLocation()
  const prodoct=location.state
  const [data, setData] = useState([]);
  const [loadingEl,setLoadingEl]=useState(true)
  const navigate=useNavigate()

  //  useEffect(() => {
  //   setLoadingEl(true)
  //   if (!prodoct) {
  //     setData([]);
  //     return;
  //   }

  //   (async () => {
  //     try {
  //       const rec = await fetch(
  //          `https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/search?page=1&page_size=10&query=${prodoct}`,
  //         {
  //           method: "GET",
  //           headers: {
	// 	'x-rapidapi-key': '6a24580a91mshdc377f9df90d403p170d1fjsnf0f5e7c52d97',
	// 	'x-rapidapi-host': 'udemy-paid-courses-for-free-api.p.rapidapi.com'
  //   }
  //     });
  //       const dataEl = await rec.json();
  //       setData(dataEl.courses);
  //          if(dataEl){
  //           setLoadingEl(false)
  //          }
  //     } catch (error) {
  //       console.log("Failed to fetch data", error);
  //       setData([]);
  //     }
  //   })();
  // }, [prodoct]);
if(loadingEl) return <Loading/> 

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
  {data.map((course, index) => (
    <div
      key={index}
      id={index}
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition w-72 bg-white"
     onClick={() => navigate(`/courseDetail/${index}/${course.name.replaceAll('/',' ','-')}`,{state:course})}
     >
      <img
        src={course.image}
        alt={course.name || "Course image"}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col justify-between h-48">
        <div>
          <h3 className="text-lg font-semibold mb-1 line-clamp-2">{course.name}</h3>
          <p className="text-sm text-gray-600 mb-2">Udemy Instructor</p>
        </div>

        <div className="flex justify-between items-center mb-3">
          <span className="text-purple-600 font-bold">
            {course["actual_price_usd"]}
          </span>
          <span className="text-yellow-500 font-bold">🔥 Hot</span>
        </div>

        <button
          onClick={() => console.log(`Added ${course.name} to cart`)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>
  );
}
