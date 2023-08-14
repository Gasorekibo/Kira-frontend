import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { useHospitals } from "./hooks";

const Home = () => {
  const { data, filteredData } = useHospitals();

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const noFilteredHospitals = () => {
    if (data && data.length > 0) {
      const shuffledData = shuffleArray(data); // Shuffle the data array
      const hospitalsToDisplay = shuffledData.slice(0, 6);

      return hospitalsToDisplay.map((hospital) => (
        <div key={hospital._id} className="col-span-1 p-0 sm:p-4 md:p-2">
          <Card data={hospital} />
        </div>
      ));
    } else {
      return <span>No Hospital available</span>;
    }
  };

  const filteredHospitals = () => {
    return filteredData.map((hospital) => (
      <div key={hospital._id} className="col-span-1 p-0 sm:p-4 md:p-2">
        <Card data={hospital} />
      </div>
    ));
  };

  const renderHospitals = filteredData.length
    ? filteredHospitals()
    : noFilteredHospitals();

  return (
    <>
      <Navbar />
      <Header />
      <div className=" xl:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center">
          {renderHospitals}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
