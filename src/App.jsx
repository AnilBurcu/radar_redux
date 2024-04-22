import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal";

const App = () => {
  // harita görünümü aktif mi
  const [isMapView, SetIsMapView] = useState(true);
  const dispatch = useDispatch();
  // detayı gösterecek elemanın id'si
  const [detailId, setDetailId] = useState(null);

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
      {isMapView ? <MapView setDetailId={setDetailId} /> : <ListView />}
      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </div>
  );
};

export default App;
