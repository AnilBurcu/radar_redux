import moment from "moment";
import "moment/locale/tr";
// unix formatındaki veriyi normal tarihe çeviren fonk
const formatDate = (unix_time) => {
  // new Date methodu milisaniye işlemi yapar ancak unix time 1970 ten itibaren geçen süreyi saniye cinsinden verir bu yüzden new Date'i kullanabilmek için saniye 1000 ile çarpıp milisaniyeye çevirdik

  const date = Date(unix_time * 1000);

  // zamanı kullanıcı dostu bir formata çevir
  return moment(date).calendar();
};

export default formatDate;
