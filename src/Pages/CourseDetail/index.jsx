import { useParams, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading';

export default function CourseDetail() {
  const { id } = useParams();
  const location = useLocation();
  const course = location.state; 
  console.log(course)
  if(!course) return <Loading/>
  if (!course) return <div>Course not found</div>;
  console.log(course)
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  {/* Course Title */}
  <h1 className="text-3xl font-bold text-gray-800 mb-4">{course?.name}</h1>
  
  {/* Course Image */}
  <div className="relative mb-6">
    <img
      src={course?.image} 
      alt={course?.name} 
      className="w-full h-80 object-cover rounded-lg shadow-sm"
    />
    {course?.['sale_end'] && (
      <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
        Sale Ends: {new Date(course?.['sale_end']).toLocaleDateString()}
      </div>
    )}
  </div>

  {/* Course Description */}
  <div className="mb-6">
    <p className="text-gray-600 leading-relaxed">
      {course?.description || 'No description available.'}
    </p>
  </div>

  {/* Course Meta Information */}
  <div className="flex flex-wrap gap-4 mb-6">
    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
      {course?.category}
    </div>
    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
      {course?.['actual_price_usd'] ? `$${course?.['actual_price_usd']}` : 'Free'}
    </div>
  </div>

  {/* Price and Enroll Button */}
  <div className="flex justify-between items-center border-t pt-6">
    <div>
      <span className="text-2xl font-bold text-purple-600">
        ${course?.['actual_price_usd']}
      </span>
      {course?.['original_price_usd'] && (
        <span className="ml-2 text-gray-400 line-through">
          ${course?.['original_price_usd']}
        </span>
      )}
    </div>
    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 transform hover:scale-105">
      Enroll Now
    </button>
  </div>
</div>
  );
}
