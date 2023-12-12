const cartel = [
    {
      id: 1,
      title: 'Active Engine',
      value: '60',
      img: 'images/Carin.png',
      imag: 'images/geomap.png'
    },
    {
      id: 2,
      title: 'All Drivers',
      value: '10',
      img: 'images/Car rental.png'
    },
    {
      id: 3,
      title: 'idle Engine',
      value: '1',
      img: 'images/car.png'
    },
    {
        id: 4,
        title: 'All Engine',
        value: '40',
        img: 'images/taxi car.png'
    },
];
const idColorMap = {
  1: 'hover:bg-blue-500',
  2: 'hover:bg-green-500',
  3: 'hover:bg-yellow-500',
  4: 'hover:bg-red-500',
  // Add more mappings as needed
};
const mockCars = [
    {
      id: 1,
      carName: "Toyota",
      carId: "ABC123",
      driverName: "John Doe",
      lastTest: "2023-10-20",
      readyForUse: true,
      carLocation: "Location A",
      alerts: "No alerts",
    },
    {
      id: 2,
      carName: "Toyota",
      carId: "DEF456",
      driverName: "Jane Doe",
      lastTest: "2023-10-18",
      readyForUse: false,
      carLocation: "Location B",
      alerts: "Low fuel",
    },
    {
        id: 3,
        carName: "Toyota",
        carId: "DEF456",
        driverName: "Jane Doe",
        lastTest: "2023-10-18",
        readyForUse: false,
        carLocation: "Location B",
        alerts: "Low fuel",
      },
      {
        id: 4,
        carName: "Toyota",
        carId: "DEF456",
        driverName: "Jane Doe",
        lastTest: "2023-10-18",
        readyForUse: false,
        carLocation: "Location B",
        alerts: "Low fuel",
      },
      {
        id: 5,
        carName: "Toyota",
        carId: "DEF456",
        driverName: "Jane Doe",
        lastTest: "2023-10-18",
        readyForUse: false,
        carLocation: "Location B",
        alerts: "Low fuel",
      },
      {
        id: 6,
        carName: "Toyota",
        carId: "DEF456",
        driverName: "Jane Doe",
        lastTest: "2023-10-18",
        readyForUse: false,
        carLocation: "Location B",
        alerts: "Low fuel",
      },
      {
        id: 7,
        carId: "DEF456",
        carName: "Toyota",
        driverName: "Jane Doe",
        lastTest: "2023-10-18",
        readyForUse: false,
        carLocation: "Location B",
        alerts: "Low fuel",
      },
    ];

    const driver =[
      {
        id: 1,
        name: "jery",
        location: "lagos",
        phoneNumber:"08099999999",
        email: "jery@gmail.com",
        iD: "AD12324j",
        image: 'images/taxi car.png',
        media: "@jonny",
        device: "tecno Spark5"
      },
      {
        id: 2,
        name: "jery",
        location: "lagos",
        phoneNumber:"08099999999",
        email: "jery@gmail.com",
        iD: "AD12324j",
        media: "@jonny",
        image: 'images/taxi car.png',
        device: "tecno Spark5"
      },
      {
        id: 3,
        name: "jery",
        location: "lagos",
        phoneNumber:"08099999999",
        email: "jery@gmail.com",
        iD: "AD12324j",
        media: "@jonny",
        image: 'images/taxi car.png',
        device: "tecno Spark5"
      },
      {
        id: 4,
        name: "jery",
        location: "lagos",
        phoneNumber:"08099999999",
        email: "jery@gmail.com",
        iD: "AD12324j",
        media: "@jonny",
        image: 'images/taxi car.png',
        device: "tecno Spark5"
      },
      {
        id: 5,
        name: "jery",
        location: "lagos",
        phoneNumber:"08099999999",
        email: "jery@gmail.com",
        iD: "AD12324j",
        media: "@jonny",
        image: 'images/taxi car.png',
        device: "tecno Spark5"
      },
      {
        id: 6,
        name: "jery",
        location: "lagos",
        phoneNumber:"08099999999",
        email: "jery@gmail.com",
        iD: "AD12324j",
        media: "@jonny",
        image: 'images/taxi car.png',
        device: "tecno Spark5"
      },
      {
        id: 7,
        name: "jery",
        location: "lagos",
        phoneNumber:"08099999999",
        email: "jery@gmail.com",
        iD: "AD12324j",
        media: "@jonny",
        device: "tecno Spark5",
        image: 'images/taxi car.png',
      },
    ];

export { cartel, mockCars, driver, idColorMap };
