import { GoHome, GoPeople } from "react-icons/go";
import { BsTextLeft, BsCup } from "react-icons/bs";
import { IoChatboxEllipsesOutline, IoDocumentOutline } from "react-icons/io5";
import { MdOutlineAnalytics, MdOutlineDateRange } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { CiWallet } from "react-icons/ci";


export let sidebarDataArr = [
    {
        text: "Dashboard",
        icon : <GoHome />,
        link : "/",
        order: "75",
        cancel: "65",
        deliver: "357",
        revenue: "$128",
    },

    {
        text: "Order List",
        icon : <BsTextLeft />,
        link : "/order-list",
        order: "79",
        cancel: "60",
        deliver: "380",
        revenue: "$144",
    },

    {
        text: "Order Details",
        icon : <IoDocumentOutline />,
        link : "/order-details",
        order: "56",
        cancel: "35",
        deliver: "400",
        revenue: "$160",
    },

    {
        text: "Customer",
        icon : <GoPeople />,
        link : "/customer",
        order: "80",
        cancel: "23",
        deliver: "250",
        revenue: "$179",
    },

    {
        text: "Analytics",
        icon : <MdOutlineAnalytics />,
        link : "/analytics",
        order: "60",
        cancel: "25",
        deliver: "230",
        revenue: "$142",
    },

    {
        text: "Reviews",
        icon : <LuPencil />,
        link : "/reviews",
        order: "71",
        cancel: "47",
        deliver: "300",
        revenue: "$150",
    },

    {
        text: "Foods",
        icon : <BsCup />,
        link : "/foods",
        order: "65",
        cancel: "40",
        deliver: "120",
        revenue: "$220",
    },

    {
       text: "Food Details",
        icon : <HiOutlinePencilAlt />,
        link : "/food-details",
        order: "80",
        cancel: "59",
        deliver: "264",
        revenue: "$260",
    },

    {
         text: "Customer Details",
        icon : <VscAccount />,
        link : "/customer-details",
        order: "98",
        cancel: "36",
        deliver: "450",
        revenue: "$350",
    },

    {
        text: "Calender",
        icon : <MdOutlineDateRange />,
        link : "/calender",
        order: "68",
        cancel: "31",
        deliver: "310",
        revenue: "$149",
    },
    
    {
        text: "Chat",
        icon : <IoChatboxEllipsesOutline />,
        link : "/chat",
        order: "54",
        cancel: "24",
        deliver: "369",
        revenue: "$159",
    },

    {
        text: "Wallet",
        icon : <CiWallet />,
        link : "/wallet",
        order: "78",
        cancel: "43",
        deliver: "400",
        revenue: "$300",
    },
]