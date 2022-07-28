import React from "react";
import Card from "./components/Card/Card";
import "./components/Card/Card.css";
import TopInfo from "./components/TopInfo/TopInfo";
import "./components/TopInfo/TopInfo.css";
import { mockData } from "./data/mockData";

function App() {
  const formattedData = mockData.sort((p1, p2) =>
    p1.points < p2.points ? 1 : -1
  );

  return (
    <div className="all">
      <TopInfo />
      <div className="cards">
        {formattedData.map((racer, index) => (
          <Card
            racer={racer}
            key={`${racer.number}-${racer.firstName}`}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import { mockData } from "./data/mockData";

// export const CardIncrement = () => {

//   const inc = (key) => {
//     increaseScore.find((racer) => `${racer.number}-${racer.firstName}` === key)
//       .points++;
//     setIncreasescore(
//       [...increaseScore].sort((p1, p2) => (p1.points < p2.points ? 1 : -1))
//     );
//   };

//   return increaseScore.map((racer, index) => {
//     <Card
//       key={`${racer.number}-${racer.firstName}`}
//       racer={racer}
//       index={index + 1}
//       inc={inc}
//     />;
//   });
// };
