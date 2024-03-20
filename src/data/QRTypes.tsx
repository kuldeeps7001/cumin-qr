import { FaAppStore, FaAt, FaComments, FaEnvelopeOpenText, FaHandHoldingDollar, FaIdCardClip, FaLink, FaMapLocationDot, FaPhoneVolume, FaRankingStar, FaTengeSign, FaTicket, FaWhatsapp, FaWifi } from "react-icons/fa6";

export const qrTypesMain = [
  {
    label: "Text",
    value: "text",
  },
  {
    label: "Url/Link",
    value: "url",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "VCard",
    value: "vcard",
  },
  {
    label: "Youtube",
    value: "youtube",
  },
  {
    label: "Geo location",
    value: "geo",
  },
];


export const QRTypes = [
    {
        label: "Phone",
        value: "phone",
      },
      {
        label: "SMS",
        value: "sms",
      },
      {
        label: "Wifi",
        value: "wifi",
      },
      {
        label: "MeCard",
        value: "meCard",
      },
      {
        label: "Bookmark",
        value: "bookmark",
      },
      {
        label: "Event",
        value: "event",
      },
      {
        label: "Paypal",
        value: "paypal",
      },
      {
        label: "Facebook",
        value: "facebook",
      },
      {
        label: "Twitter",
        value: "twitter",
      },
      {
        label: "Instagram",
        value: "instagram",
      },
      {
        label: "Linkedin",
        value: "linkedin",
      },
      {
        label: "Whatsapp",
        value: "whatsapp",
      },
      {
        label: "Business",
        value: "business",
      },
]

export const QRCodes = [
  {
    label: "Text",
    value: "text",  
    description: "Contains plain text information such as messages or notes",
    image: <FaTengeSign size={40} color={"#F56565"}/>,
    icon: <FaTengeSign />,
  },
  {
    label: "URL",
    value: "url", 
    description: "Directs users to a specific website link when scanned",
    image: <FaLink size={40} color={"#F56565"}/>,
    icon: <FaLink />,
  },
  {
    label: "vCard",
    value : "vcard",
    description:
      "Stores contact details (name, phone number, email, etc.) in vCard format",
    image: <FaIdCardClip size={40} color={"#F56565"}/>,
    icon: <FaIdCardClip />,
  },
  {
    label: "Location",
    value : "location",  
    description:
    "Provides geographic coordinates (latitude and longitude) for a specific location",
    image: <FaMapLocationDot size={40} color={"#F56565"}/>,
    icon: <FaMapLocationDot />,
  },
  {
    label: "Email",
    value : "email",
    description:
    "Automatically opens the user's email client with pre-filled email address, subject, and body",
    image: <FaEnvelopeOpenText size={40} color={"#F56565"}/>,
    icon: <FaEnvelopeOpenText />,
  },
  {
    label: "Wi-Fi",
    value : "wifi",
    description: "Facilitates easy connection to a Wi-Fi network by scanning",
    image: <FaWifi size={40} color={"#F56565"}/>,
    icon: <FaWifi />,
  },
  {
    label: "Phone",
    value : "phone",
    description:
      "Initiates a phone call when scanned, directing users to dial a specific phone number",
    image: <FaPhoneVolume size={40} color={"#F56565"}/>,
    icon: <FaPhoneVolume />,
  },
  {
    label: "SMS",
    value : "sms",
    description:
      "Opens the user's messaging app with pre-filled SMS message and recipient number",
    image: <FaComments size={40} color={"#F56565"}/>,
    icon: <FaComments />,
  },
  {
    label: "Social Media",
    value : "social",   
    description:
      "Links to social media profiles or pages, encouraging users to follow or engage",
    image: <FaAt size={40} color={"#F56565"}/>,
    icon: <FaAt />,
  },
  {
    label: "Event",
    value : "event",    
    description:
      "Saves event details (date, time, location, etc.) in the user's calendar app",
    image: <FaTicket size={40} color={"#F56565"}/>,
    icon: <FaTicket />,
  },
  {
    label: "App Store",
    value : "appstore",
    description:
      "Directs users to download an app from the respective app store",
    image: <FaAppStore size={40} color={"#F56565"}/>,
    icon: <FaAppStore />,
  },
  // {
  //   label: "Payment",
  //    value : "payment",
  //   description:
  //     "Enables mobile payments by directing users to payment gateways or platforms",
  //   image: <FaHandHoldingDollar size={40} color={"#F56565"}/>,
  //   image: <FaHandHoldingDollar size={40} color={"#F56565"}/>,
  // },
  {
    label: "WhatsApp",
     value : "whatsapp",
    description:
      "Initiates a chat with a specific phone number or contact on WhatsApp",
    image: <FaWhatsapp size={40} color={"#F56565"}/>,
    icon: <FaWhatsapp />,
  },
  // {
  //   label: "Coupon",
  //   value : "coupon",
  //   description:
  //     "Contains discount codes, promotional offers, or coupons for redemption",
  //   image: <FaLink size={40} color={"#F56565"}/>,
  //   image: <FaLink size={40} color={"#F56565"}/>,
  // },
  // {
  //   label: "Dynamic",
  //   value : "dynamic",
  //   description:
  //     "Allows content to be updated dynamically without changing the QR code image",
  //   image: <FaLink size={40} color={"#F56565"}/>,
  //   image: <FaLink size={40} color={"#F56565"}/>,
  // },
  // {
  //   label: "Business Card",
  //   value : "business",
  //   description:
  //     "Shares contact information (name, phone number, email, etc.) in a structured format",
  //   image: <FaLink size={40} color={"#F56565"}/>,
  //   image: <FaLink size={40} color={"#F56565"}/>,
  // },
  // {
  //   label: "PDF",
  //   value : "pdf",  
  //   description: "Links to a PDF document for easy access",
  //   image: <FaLink size={40} color={"#F56565"}/>,
  //   image: <FaLink size={40} color={"#F56565"}/>,
  // },
  {
    label: "Rating",
    value : "rating",
    description:
      "Directs users to review or rating platforms to leave feedback",
    image: <FaRankingStar size={40} color={"#F56565"}/>,
    icon: <FaRankingStar />,
  },
];