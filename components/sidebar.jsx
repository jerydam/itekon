import Link from 'next/link';
import "/styles/global.css";

const Sidebar = () => {
  return (
    <div className="text-gray-800 w-1/5 border-2 h-screen p-4">
      <div>
      <img
        className="my-5"
        src="/images/logo.png"
        alt="Logo"
        width="100"
        height="100"
      />
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard" className="hover:text-blue-500">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/track-vehicles" className="hover:text-blue-500">
            Track Vehicles
          </Link>
        </li>
        <li>
          <Link href="/vehicle" className="hover:text-blue-500">
            Vehicle
          </Link>
        </li>
        <li>
          <Link href="/driver" className="hover:text-blue-500">
            Driver
          </Link>
        </li>
        <li>
          <Link href="/reports" className="hover:text-blue-500">
            Reports
          </Link>
        </li>
        <li>
          <Link href="/settings" className="hover:text-blue-500">
            Settings
          </Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
