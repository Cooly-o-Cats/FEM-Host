import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import { useState } from "react";
import data from "./data/data"

function App() {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const [dashboardData, setDashboardData] = useState(data.week);
  const [dashboardTime, setDashboardTime] = useState("week");

  function handleChildClick(text) {
    if (text === "Daily") {
      setDashboardData(data.day);
      setDashboardTime("day");
      const currentTimes = document.querySelectorAll('.timeTab__current');
      currentTimes.forEach( async (time) => {
        time.classList.add("animation-FadeIn")
        await sleep(1000)
        time.classList.remove("animation-FadeIn")
      });
    }
    else if (text === "Weekly") {
      setDashboardData(data.week);
      setDashboardTime("week");
      const currentTimes = document.querySelectorAll('.timeTab__current');
      currentTimes.forEach( async (time) => {
        time.classList.add("animation-FadeIn")
        await sleep(1000)
        time.classList.remove("animation-FadeIn")
      })
    }
    else if (text === "Monthly") {
      setDashboardData(data.month);
      setDashboardTime("month");
      const currentTimes = document.querySelectorAll('.timeTab__current');
      currentTimes.forEach( async (time) => {
        time.classList.add("animation-FadeIn")
        await sleep(1000)
        time.classList.remove("animation-FadeIn")
      })
    }
  }

  const dashboardItems = dashboardData.map((data) => {
    return (
      <Item
        key={data.title}
        name={data.title}
        currentTime={data.timeframes.current}
        pastTime={data.timeframes.previous}
        color={data.color}
        img={data.image}
        selectedTime={dashboardTime}
      />
    );
  });

  return (
    <div className="body">
      <main className="content">
        <Header onChildClick={handleChildClick} selectedTime={dashboardTime} />
        <div className="dashboard-items">{dashboardItems}</div>
      </main>
    </div>
  );
}

export default App;
