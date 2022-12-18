import { MdPhoneIphone, MdPhonelinkSetup } from "react-icons/md";
import { BsSmartwatch, BsLaptop, BsDisplay, BsWrench, BsSim, BsNewspaper } from "react-icons/bs";
import { AiOutlineDesktop, AiOutlineTablet, AiOutlineHome } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";
import { GiCharging } from "react-icons/gi";
import { SlGameController } from "react-icons/sl";
import { IoIosFlash } from "react-icons/io";


export const menu = [
    {
        id: 1,
        icon: <MdPhoneIphone />,
        name: "Điện thoại",
        to: "/SmartPhone",
        submenu: true,
        sublinks: [
            {
                head: "HÃNG SẢN XUẤT",
                to: "/",
                sublink: [
                    {
                        id: 20,
                        name: "OPPO",
                        to: "/",
                    },
                    {
                        id: 21,
                        name: "Vivo",
                        to: "/",
                    },
                    {
                        id: 22,
                        name: "XOR",
                        to: "/",
                    },
                    {
                        id: 23,
                        name: "Philips",
                        to: "/",
                    },
                    {
                        id: 24,
                        name: "TECNO",
                        to: "/",
                    },
                ]
            },
            {
                head: "",
                to: "/",
                sublink: [
                    {
                        id: 25,
                        name: "Samsung",
                        to: "/",
                    },
                    {
                        id: 26,
                        name: "Nokia",
                        to: "/",
                    },
                    {
                        id: 27,
                        name: "Nubia",
                        to: "/",
                    },
                    {
                        id: 28,
                        name: "Masstel",
                        to: "/",
                    },
                    {
                        id: 29,
                        name: "Itel",
                        to: "/",
                    },
                    {
                        id: "ZTE",
                        name: "ZTE",
                        to: "/",
                    },
                ]
            },
            {
                head: "",
                to: "/",
                sublink: [
                    {
                        id: 30,
                        name: "Xiaomi",
                        to: "/",
                    },
                    {
                        id: 31,
                        name: "Realme",
                        to: "/",
                    },
                    {
                        id: 32,
                        name: "Energizer",
                        to: "/",
                    },
                    {
                        id: 33,
                        name: "TCL",
                        to: "/",
                    },
                    {
                        id: 34,
                        name: "BPhone",
                        to: "/",
                    },
                ]
            },
            {
                head: "Mức giá",
                to: "/",
                sublink: [
                    {
                        id: 35,
                        name: "Trên 100 triệu",
                        to: "/",
                    },
                    {
                        id: 36,
                        name: "Dưới 1 triệu",
                        to: "/",
                    },
                    {
                        id: 37,
                        name: "Từ 2 đến 3 triệu",
                        to: "/",
                    },
                    {
                        id: 38,
                        name: "Từ 3 đến 4 triệu",
                        to: "/",
                    },
                    {
                        id: 39,
                        name: "Từ 6 đến 8 triệu",
                        to: "/",
                    },
                    {
                        id: 40,
                        name: "Từ 15 đến 20 triệu",
                        to: "/",
                    },
                ]
            },
            {
                head: "quan tâm nhất",
                to: "/",
                sublink: [
                    {
                        id: "Hôm nay",
                        name: "Hôm nay",
                        to: "/",
                    },
                    {
                        id: "Tuần này",
                        name: "Tuần này",
                        to: "/",
                    },
                    {
                        id: "Tháng này",
                        name: "Tháng này",
                        to: "/",
                    },
                    {
                        id: "Năm này",
                        name: "Năm này",
                        to: "/",
                    },
                ]
            },
        ]
    },
    {
        id: 2,
        icon: <BsSmartwatch />,
        name: "Đồng hồ",
        to: "/",
        submenu: true,
        sublinks: [
            {
                head: "ĐỒNG HỒ",
                to: "/",
                sublink: [
                    {
                        id: "Apple",
                        name: "Apple",
                        to: "/",
                    },
                    {
                        id: "Tic Watch",
                        name: "Tic Watch",
                        to: "/",
                    },
                    {
                        id: "Masstel",
                        name: "Masstel",
                        to: "/",
                    },
                    {
                        id: "Top Đồng hồ thông minh",
                        name: "Top Đồng hồ thông minh",
                        to: "/",
                    },
                ]
            },
            {
                sublink: [
                    {
                        id: "Samsung",
                        name: "Samsung",
                        to: "/",
                    },
                    {
                        id: "Amazfit",
                        name: "Amazfit",
                        to: "/",
                    },
                    {
                        id: "OPPO",
                        name: "OPPO",
                        to: "/",
                    },
                    {
                        id: "Top vòng đeo tay",
                        name: "Top vòng đeo tay",
                        to: "/",
                    },
                ]
            },
            {
                sublink: [
                    {
                        id: "Xiaomi",
                        name: "Xiaomi",
                        to: "/",
                    },
                    {
                        id: "Đồng hồ trẻ em",
                        name: "Đồng hồ trẻ em",
                        to: "/",
                    },
                    {
                        id: "realme",
                        name: "realme",
                        to: "/",
                    },
                    {
                        id: "Fitbit",
                        name: "Fitbit",
                        to: "/",
                    },
                ]
            },
            {
                sublink: [
                    {
                        id: "Garmin",
                        name: "Garmin",
                        to: "/",
                    },
                    {
                        id: "Huawei",
                        name: "Huawei",
                        to: "/",
                    },
                    {
                        id: "SoundPEATS",
                        name: "SoundPEATS",
                        to: "/",
                    },
                ]
            },
        ]
    },
    {
        id: 3,
        icon: <BsLaptop />,
        name: "Laptop",
        to: "/",
        submenu: true,
        sublinks: [
            {
                head: "HÃNG SẢN XUẤT",
                to: "/",
                sublink: [
                    {
                        id: "Apple",
                        name: "Apple",
                        to: "/",
                    },
                    {
                        id: "Dell",
                        name: "Dell",
                        to: "/",
                    },
                    {
                        id: "Huawei",
                        name: "Huawei",
                        to: "/",
                    },
                    {
                        id: "MSI",
                        name: "MSI",
                        to: "/",
                    },
                ]
            },
            {
                sublink: [
                    {
                        id: "Acer",
                        name: "Acer",
                        to: "/",
                    },
                    {
                        id: "GIGABYTE",
                        name: "GIGABYTE",
                        to: "/",
                    },
                    {
                        id: "Lenovo",
                        name: "Lenovo",
                        to: "/",
                    },
                    {
                        id: "Surface",
                        name: "Surface",
                        to: "/",
                    },
                ]
            },
            {
                sublink: [
                    {
                        id: "ASUS",
                        name: "ASUS",
                        to: "/",
                    },
                    {
                        id: "HP",
                        name: "HP",
                        to: "/",
                    },
                    {
                        id: "LG",
                        name: "LG",
                        to: "/",
                    },
                    {
                        id: "Xiaomi",
                        name: "Xiaomi",
                        to: "/",
                    },
                ]
            },
            {
                head: "Mức giá",
                to: "/",
                sublink: [
                    {
                        id: "Trên 20 triệu",
                        name: "Trên 20 triệu",
                        to: "/",
                    },
                    {
                        id: "Từ 12 đến 15 Triệu",
                        name: "Từ 12 đến 15 Triệu",
                        to: "/",
                    },
                    {
                        id: "Từ 15 đến 20 Triệu",
                        name: "Từ 15 đến 20 Triệu",
                        to: "/",
                    },
                ]
            },
        ]

    },
    {
        id: 4,
        icon: <AiOutlineDesktop />,
        name: "Màn hình",
        to: "/",

    },
    {
        id: 5,
        icon: <BsDisplay />,
        name: "Smart tv",
        to: "/",

    },
    {
        id: 6,
        icon: <AiOutlineTablet />,
        name: "Tablet",
        to: "/",

    },
    {
        id: 7,
        icon: <FiHeadphones />,
        name: "âm thanh",
        to: "/",

    },
    {
        id: 8,
        icon: <AiOutlineHome />,
        name: "Smart home",
        to: "/",

    },
    {
        id: 9,
        icon: <GiCharging />,
        name: "Phụ kiện",
        to: "/",

    },
    {
        id: 10,
        icon: <SlGameController />,
        name: "Đồ chơi công nghệ",
        to: "/",

    },
    {
        id: 11,
        icon: <MdPhonelinkSetup />,
        name: "Máy trôi",
        to: "/",

    },
    {
        id: 12,
        icon: <BsWrench />,
        name: "Sửa chữa",
        to: "/",

    },
    {
        id: 13,
        icon: <BsSim />,
        name: "Sim thẻ",
        to: "/",

    },
    {
        id: 14,
        icon: <BsNewspaper />,
        name: "Tin tức",
        to: "/",

    },
    {
        id: 15,
        icon: <IoIosFlash />,
        name: "Ưu đãi",
        to: "/",

    },
]

