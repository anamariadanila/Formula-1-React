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
