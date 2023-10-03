// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-center">
        
          <div className="flex mb-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <div className="ml-4">
              <p className="text-gray-400">Email: contact@example.com</p>
              <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            </div>
          
  
          
            <h2 className="text-2xl font-semibold">Follow Us</h2>
            
              <a href="#" className="text-blue-400 hover:text-blue-600">
                Facebook
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                Twitter
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                Instagram
              </a>
            </div>
          
  
          <div className="flex">
            <p className="text-gray-400">© 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
        
      </footer>
    );
  };
  
  export default Footer;
  