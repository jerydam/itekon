import Link from 'next/link';
import "/styles/global.css";
const Sidebar = () => {
  return (
    <div className="text-gray-800 w-1/5 h-screen p-4">
      <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="hover:text-blue-500">Home </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-500">About </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-500">Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
