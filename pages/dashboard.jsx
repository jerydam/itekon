import Sidebar from "@/components/sidebar";
import MapComponent from "@/components/map";


const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">

        <div className="flex w-full justify-between gap-4 p-5 ">

        <div className="w-full border-2 h-32 border-b-4">
          
  <div className="flex px-4">
    <img src="./images/Carin.png" alt="Car" />
    <div className="text-center py-5">
    <p>Active Engine</p>
    <p className="text-xl font-bold ">60</p>
    </div>
  </div>
</div>

          <div className="w-full border-2 h-32  border-b-4">
          <div className="flex px-4">
    <img src="./images/Car rental.png" alt="Car" />
    <div className="text-center py-5">
    <p>Active Engine</p>
    <p className="text-xl font-bold ">60</p>
    </div>
  </div>
          </div>
          <div className="w-full border-2 h-32  border-b-4">
          <div className="flex px-4">
    <img src="./images/car.png" alt="Car" />
    <div className="text-center py-5">
    <p>Active Engine</p>
    <p className="text-xl font-bold ">60</p>
    </div>
  </div>
          </div>
          <div className="w-full border-2 h-32  border-b-4">
          <div className="flex px-4">
    <img src="./images/taxi car.png" alt="Car" />
    <div className="text-center py-5">
    <p>Active Engine</p>
    <p className="text-xl font-bold ">60</p>
    </div>
  </div>
          </div>
        </div>


        <div className="w-full flex  justify-between gap-4 px-5">
        <div className="w-full border-2 h-60 rounded">
        <MapComponent />
        </div>

          <div className="w-full border-2 h-60 rounded"></div>
        </div>
        <div className="w-full flex  justify-between gap-4 px-5 border-2">
          <div className="w-full border-2 h-60 rounded"></div>
          <div className="w-full border-2 h-60 rounded"></div>
        </div>
        <div className="w-full flex  justify-between gap-4 px-5 border-2">
          <div className="w-full border-2 h-60 rounded"></div>
          <div className="w-full border-2 h-60 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
