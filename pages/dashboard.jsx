import Sidebar from "@/components/sidebar";

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
  <iframe
    title="Location Map"
    width="100%"
    height="100%"
    frameBorder="0"
    style={{ border: 0 }}
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.8646256490914!2d-122.08462808469962!3d37.42291067985082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2f256f59a5%3A0xe557622f2030a948!2sGoogle%20Plex!5e0!3m2!1sen!2sus!4v1632328547239!5m2!1sen!2sus"
    allowFullScreen=""
  ></iframe>
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
