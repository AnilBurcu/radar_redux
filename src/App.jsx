import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";

const App = () => {
  const [isMapView, SetIsMapView] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);
  return (
    <div>
      <Header />
      <div className="view-buttons">
        <button
          className={isMapView ? "active" : ""}
          onClick={() => SetIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={isMapView ? "" : "active"}
          onClick={() => SetIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>
      {isMapView ? <MapView /> : <ListView />}
    </div>
  );
};

export default App;
