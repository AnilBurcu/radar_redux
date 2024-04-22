import axios from "axios";
import React, { useEffect, useState } from "react";
import { detailOptions } from "../constants";

const Modal = ({ detailId, close }) => {
  // sadece bu dosyada kullanacağımız için store'da tutmaya gerek duymadık

  const [detail, setDetail] = useState(null);

  // id her değiştiğinde uçuş detaylarını al
  useEffect(() => {
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOptions
      )
      .then((res) => setDetail(res.data));
  }, [detailId]);

  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <div className="close-wrapper">
          <button>X</button>
        </div>
        {!detail ? (
          <div>Loader</div>
        ) : (
          <>
            <h2>{detail.aircraft.model.text}</h2>
            <h2>{detail.aircraft.model.code}</h2>
            <p>
              <span>Kuyruk Kodu</span>
              <span>{detail.aircraft.registration}</span>
            </p>

            <img src={detail.aircraft.images.large[1].src} />

            <p>
              <span>Şirket: </span>
              <span>{detail.airline.short}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
