"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/nav";
import { useRouter } from "next/navigation";

const AssignDriver = ({ params }) => {
  const router = useRouter();
  const id = params.id;
  const userToken = localStorage.getItem("authToken");
  const userId = localStorage.getItem("fleet_id");
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://itekton.onrender.com/vehicles/drivers/",
          {
            method: "GET",
            headers: {
              Authorization: `Token ${userToken}`,
            },
          }
        );
        const data = await response.json();
        setDrivers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId, userToken]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token === null) {
      router.push("/login");
    }
  }, [router]);

  const handleAssignDriver = async (driverId) => {
    try {
      const userToken = localStorage.getItem("authToken");
      const vehicle_id = id;

      const response = await fetch(
        `https://itekton.onrender.com/vehicles/assign/${vehicle_id}/${driverId}/`,
        {
          method: "POST",
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        toast.success("Vehicle and driver added successfully");
      } else {
        console.error(
          "Error assigning driver to vehicle:",
          await response.text()
        );
        toast.error("Error assigning driver to vehicle");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };s
  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="flex flex-col mt-6">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <p className="m-5">Vehicles {'>'} Assign Driver</p>
                 {/* <p className='m-5'>You can assign Drivers to {individualDriver.name},  {individualDriver.lincenseid} {id} here.</p> */}
                 <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th> Name </th>
            <th> License ID </th>
            <th> Phone Number </th>
            <th> Assign Driver </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {drivers
            .filter((individualDriver) => !individualDriver.vehicle_id)
            .map((individualDriver) => (
              <tr key={individualDriver.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {individualDriver.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {individualDriver.lincenseid}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {individualDriver.phoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="border-b-4 border-2 border-[#2D6C56] rounded text-center p-3"
                    onClick={() => handleAssignDriver(individualDriver.id)}
                  >
                    Assign Driver
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignDriver;
