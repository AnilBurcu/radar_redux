import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants";

export const getFlights = createAsyncThunk("flights/getFlights", async () => {
    // api isteği
    const res = await axios.request(options)
    console.log(res.data.aircraft)
    // gelen veriyi formatla
    // dizi içerisindeki dizileri nesneye çevirmem gerekiyor

    const formatted = res.data.aircraft.map((item) => ({
        id: item[0],
        code: item[1],
        lat: item[2],
        lng: item[3]
    }))


    // aksiyonun payload'ı olarak formatlaan veriyi ekle
    return formatted
})