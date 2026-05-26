import React, { useState } from "react";
import { assets } from "../assets/assets";

const AddAddress = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const [addresses, setAddresses] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // add new address below previous ones
    setAddresses((prev) => [...prev, formData]);

    // reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phone: "",
    });
  };

  return (
    <div className="mt-12 flex flex-col gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
      
      {/* Form + Image */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Address Details
          </h2>

          <form
            onSubmit={submitHandler}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="col-span-2 p-2 border rounded-md"
              required
            />

            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formData.street}
              onChange={handleChange}
              className="col-span-2 p-2 border rounded-md"
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="p-2 border rounded-md"
              required
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="p-2 border rounded-md"
              required
            />

            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              className="p-2 border rounded-md"
              required
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="p-2 border rounded-md"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="col-span-2 p-2 border rounded-md"
              required
            />

            <button
              type="submit"
              className="col-span-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md"
            >
              Save Address
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={assets.add_address_iamge}
            alt="Address Illustration"
            className="w-full max-w-xs rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Saved Addresses Section */}
      {addresses.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">
            Saved Addresses
          </h3>

          <div className="space-y-4">
            {addresses.map((addr, index) => (
              <div
                key={index}
                className="border p-4 rounded-md bg-gray-50"
              >
                <p className="font-semibold">
                  {addr.firstName} {addr.lastName}
                </p>
                <p>{addr.street}</p>
                <p>
                  {addr.city}, {addr.state} - {addr.zipCode}
                </p>
                <p>{addr.country}</p>
                <p>{addr.email}</p>
                <p>{addr.phone}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAddress;
