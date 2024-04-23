// import "./App.css";
// import MainCard from "./components/MainCard";
// import WeatherDetails from "./components/WeatherDetails";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Parent from "./components/Parent";

// function App() {
//   const AIP_KEY = "86f762a5ae303dfb8dca502a3f0bc6bc";
//   const [data, setData] = useState([]);
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.openweathermap.org/data/2.5/weather?q=vadodara,gujarat,in&APPID=${AIP_KEY}`
//       )
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <MainCard />

//       <Parent />

//       <WeatherDetails
//         celcios={Math.floor(data?.main?.temp - 273.15)}
//         weather={data?.weather?.[0]?.main}
//         wind={data?.wind?.speed}
//         humidity="90"
//       />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import MainCard from "./components/MainCard";
import WeatherDetails from "./components/WeatherDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import Parent from "./components/Parent";

function App() {
  const API_KEY = "86f762a5ae303dfb8dca502a3f0bc6bc";
  const [data, setData] = useState(null);
  const [city, setCity] = useState("rajkot");

  useEffect(() => {
    fetchData(city);
  }, [city]);

  const fetchData = (cityName) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <MainCard />

      {/* <Parent /> */}

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />

      {data && (
        <WeatherDetails
          celcios={Math.floor(data?.main?.temp - 273.15)}
          weather={data?.weather?.[0]?.main}
          wind={data?.wind?.speed}
          humidity={data?.main?.humidity}
        />
      )}
    </div>
  );
}

export default App;
