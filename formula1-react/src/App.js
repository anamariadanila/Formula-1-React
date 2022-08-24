import React from "react";
import Card from "./components/Card/Card";
import "./components/Card/Card.css";
import TopInfo from "./components/TopInfo/TopInfo";
import "./components/TopInfo/TopInfo.css";
import { mockData } from "./data/mockData";

function App() {
  const [data, setData] = React.useState([]);
  const [update, setUpdate] = React.useState(-1);

  React.useEffect(() => {
    setData(mockData.sort((p1, p2) => (p1.points < p2.points ? 1 : -1)));
  }, []);

  React.useEffect(() => {
    //interchange the position of the two players
    if (update !== -1) {
      const newData = [...data];
      const temp = newData[update];
      newData[update] = newData[update - 1];
      newData[update - 1] = temp;
      setData(newData);
      console.log(newData);
      setUpdate(-1);
    }
  }, [update]);

  const handleUpdate = (index, points) => {
    console.log(points, data[index - 1].points);
    if (points > data[index - 1].points) {
      console.log(true);
      setUpdate(index);
    }
  };

  return (
    <div className="all">
      <TopInfo />
      <div className="cards">
        {data.map((racer, index) => (
          <Card
            handleUpdate={handleUpdate}
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
