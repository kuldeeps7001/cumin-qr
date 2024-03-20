import { HeroQrType, useHeroQr } from "@/store/heroQr";
import QRText from "./QRText";
import QRvCard from "./QRvCard";
import QRUrl from "./QRUrl";
import QREmail from "./QREmail";
import QREvent from "./QREvent";
import QRPayments from "./QRPayments";
import QRAppStore from "./QRAppStore";
import QRSocial from "./QRSocial";
import QRWifi from "./QRWifi";
import QRLocation from "./QRLocation";
import QRPhone from "./QRPhone";
import QRSms from "./QRSms";
import QRWhatsApp from "./QRWhatsApp";
import QRRating from "./QRRating";

export function TypeCompnent({type} : {type : string | undefined}) {
  const {value, setQr} = useHeroQr() as HeroQrType;
  return (
    <>
        {type === "text" && <QRText value={value} setValue={setQr}/>}
        {type === "url" && <QRUrl value={value} setValue={setQr} />}
        {type === "email" && <QREmail value={value} setValue={setQr} />}
        {type === "vcard" && <QRvCard value={value} setValue={setQr} />}
        {type === "location" && <QRLocation value={value} setValue={setQr} />}
        {type === "wifi" && <QRWifi value={value} setValue={setQr} />}
        {type === "phone" && <QRPhone value={value} setValue={setQr} />}
        {type === "sms" && <QRSms value={value} setValue={setQr} />}
        {type === "social" && <QRSocial value={value} setValue={setQr} />}
        {type === "event" && <QREvent value={value} setValue={setQr} />}
        {type === "appstore" && <QRAppStore value={value} setValue={setQr} />}
        {type === "payement" && <QRPayments value={value} setValue={setQr} />}
        {type === "whatsapp" && <QRWhatsApp value={value} setValue={setQr} />}
        {type === "rating" && <QRRating value={value} setValue={setQr} />}
    </>
  );
}