import "/styles/global.css";

import Nav from "/components/nav.jsx"; // Import your nav component
import Footer from "/components/footer.jsx";
import Link from 'next/link';

const Home = () => (
  <div>
    <Nav />
  
    <div
      style={{
        height: '500px',
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
      }}
    >
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>
          Itekton
          <br className='max-md:hidden' />
          
        </h1>
        <p className='text-lg'>
        A smart platform for enterprise fleet solution.
        </p>
        <Link href="/login" className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
  Get Started
        </Link>

      </div>
    </div>
      <Footer/>
  </div>
);

export default Home;
