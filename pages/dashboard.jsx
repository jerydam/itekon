import Sidebar from "@/components/sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full just">

        <div className="flex w-full justify-between gap-4 px-4 bg-red-800">
          <div className="w-full border-2  h-32 border-b-4">
              <div>
              import { Image } from "images/car.png";
              </div>
          </div>
          <div className="w-full border-2 h-32  border-b-4"></div>
          <div className="w-full border-2 h-32  border-b-4"></div>
          <div className="w-full border-2 h-32  border-b-4"></div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
