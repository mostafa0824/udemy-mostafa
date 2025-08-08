import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useFormFilds from "../../Hooks/useFormState";

export default function Checkout() {
  const navigate = useNavigate();
  const [filds, handleChange, resetFilds] = useFormFilds({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const location = useLocation();
  const course = location.state;

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  const cartItems =
    course?.map((item, index) => ({
      id: item.id || index + 1,
      name: item.name,
      price: item?.["actual_price_usd"],
      quantity: item.quantity || 1,
      image: item.image,
      description: item.description,
      category: item.category,
      saleEnd: item?.["sale_end"],
    })) || [];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = shippingMethod === "express" ? 15.0 : 5.0;
  const tax = subtotal * 0.1;
  const total = subtotal + shippingCost + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your order has been placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            1
          </div>
          <div className="h-1 w-16 bg-blue-600 mx-2"></div>
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            2
          </div>
          <div className="h-1 w-16 bg-gray-300 mx-2"></div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold">
            3
          </div>
          <h1 className="ml-8 text-3xl font-bold text-gray-800">Checkout</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Left Column - Shipping and Payment Info */}
          <div className="lg:w-2/3">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={filds.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={filds.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={filds.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={filds.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={filds.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123 Main St"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={filds.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="New York"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Country
                  </label>
                  <select
                    name="country"
                    value={filds.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    ZIP / Postal Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={filds.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="10001"
                    required
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  id="billingSame"
                  checked={billingSameAsShipping}
                  onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="billingSame"
                  className="ml-2 text-gray-700 text-sm"
                >
                  Use same address for billing
                </label>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Shipping Method
              </h2>
              <div className="space-y-3">
                <div
                  className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                    shippingMethod === "standard"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => setShippingMethod("standard")}
                >
                  <input
                    type="radio"
                    name="shippingMethod"
                    checked={shippingMethod === "standard"}
                    onChange={() => {}}
                    className="w-5 h-5 text-blue-600"
                  />
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Standard Shipping
                    </span>
                    <p className="text-sm text-gray-600">
                      5-7 business days • $5.00
                    </p>
                  </div>
                  <div className="ml-auto font-medium">$5.00</div>
                </div>

                <div
                  className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                    shippingMethod === "express"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => setShippingMethod("express")}
                >
                  <input
                    type="radio"
                    name="shippingMethod"
                    checked={shippingMethod === "express"}
                    onChange={() => {}}
                    className="w-5 h-5 text-blue-600"
                  />
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Express Shipping
                    </span>
                    <p className="text-sm text-gray-600">
                      2-3 business days • $15.00
                    </p>
                  </div>
                  <div className="ml-auto font-medium">$15.00</div>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Payment Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={filds.cardName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={filds.cardNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={filds.expiryDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={filds.cvv}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Order Summary
              </h2>

              <div className="border-b border-gray-200 pb-4 mb-4">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      navigate(
                        `/courseDetail/${item.id}/${item.name.replaceAll('/',' ','-')}`,
                        { state: course[index] }
                      )
                    }
                    className="flex items-center mb-3 cursor-pointer"
                  >
                    <div className="relative group">
                      <img
                        className="bg-gray-200 border-2 rounded-xl w-16 h-16 hover:opacity-75"
                        src={item.image}
                        alt={item.name}
                      />
                      <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-1 rounded whitespace-nowrap left-full ml-2 top-1 transform -translate-y-1/2">
                        Go to details
                      </span>
                    </div>
                    <div className="ml-3 flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    ${shippingCost.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-bold text-lg text-gray-800">Total</span>
                  <span className="font-bold text-lg text-gray-800">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 cursor-pointer mb-4"
              >
                Place Order
              </button>

              <button
                onClick={resetFilds}
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 cursor-pointer"
              >
                Reset
              </button>

              <p className="mt-4 text-sm text-gray-600 text-center">
                By placing your order, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
