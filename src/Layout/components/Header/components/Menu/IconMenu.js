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
        href: '/Products',
        submenu: true,
        sublinks: [
            {
                head: "HÃNG SẢN XUẤT",
                href: "/",
                sublink: [
                    {
                        id: 20,
                        name: "OPPO",
                        href: "/",
                    },
                    {
                        id: 21,
                        name: "Vivo",
                        href: "/",
                    },
                    {
                        id: 22,
                        name: "XOR",
                        href: "/",
                    },
                    {
                        id: 23,
                        name: "Philips",
                        href: "/",
                    },
                    {
                        id: 24,
                        name: "TECNO",
                        href: "/",
                    },
                ]
            },
            {
                head: "",
                href: "/",
                sublink: [
                    {
                        id: 25,
                        name: "Samsung",
                        href: "/",
                    },
                    {
                        id: 26,
                        name: "Nokia",
                        href: "/",
                    },
                    {
                        id: 27,
                        name: "Nubia",
                        href: "/",
                    },
                    {
                        id: 28,
                        name: "Masstel",
                        href: "/",
                    },
                    {
                        id: 29,
                        name: "Itel",
                        href: "/",
                    },
                    {
                        id: "ZTE",
                        name: "ZTE",
                        href: "/",
                    },
                ]
            },
            {
                head: "",
                href: "/",
                sublink: [
                    {
                        id: 30,
                        name: "Xiaomi",
                        href: "/",
                    },
                    {
                        id: 31,
                        name: "Realme",
                        href: "/",
                    },
                    {
                        id: 32,
                        name: "Energizer",
                        href: "/",
                    },
                    {
                        id: 33,
                        name: "TCL",
                        href: "/",
                    },
                    {
                        id: 34,
                        name: "BPhone",
                        href: "/",
                    },
                ]
            },
            {
                head: "Mức giá",
                href: "/",
                sublink: [
                    {
                        id: 35,
                        name: "Trên 100 triệu",
                        href: "/",
                    },
                    {
                        id: 36,
                        name: "Dưới 1 triệu",
                        href: "/",
                    },
                    {
                        id: 37,
                        name: "Từ 2 đến 3 triệu",
                        href: "/",
                    },
                    {
                        id: 38,
                        name: "Từ 3 đến 4 triệu",
                        href: "/",
                    },
                    {
                        id: 39,
                        name: "Từ 6 đến 8 triệu",
                        href: "/",
                    },
                    {
                        id: 40,
                        name: "Từ 15 đến 20 triệu",
                        href: "/",
                    },
                ]
            },
            {
                head: "quan tâm nhất",
                href: "/",
                sublink: [
                    {
                        id: "Hôm nay",
                        name: "Hôm nay",
                        href: "/",
                    },
                    {
                        id: "Tuần này",
                        name: "Tuần này",
                        href: "/",
                    },
                    {
                        id: "Tháng này",
                        name: "Tháng này",
                        href: "/",
                    },
                    {
                        id: "Năm này",
                        name: "Năm này",
                        href: "/",
                    },
                ]
            },
        ]
    },
    {
        id: 2,
        icon: <BsSmartwatch />,
        name: "Đồng hồ",
        href: "/",
        submenu: true,
        sublinks: [
            {
                head: "ĐỒNG HỒ",
                href: "/",
                sublink: [
                    {
                        id: "Apple",
                        name: "Apple",
                        href: "/",
                    },
                    {
                        id: "Tic Watch",
                        name: "Tic Watch",
                        href: "/",
                    },
                    {
                        id: "Masstel",
                        name: "Masstel",
                        href: "/",
                    },
                    {
                        id: "Top Đồng hồ thông minh",
                        name: "Top Đồng hồ thông minh",
                        href: "/",
                    },
                ]
            },
            {
                sublink: [
                    {
                        id: "Samsung",
                        name: "Samsung",
                        href: "/",
                    },
                    {
                        id: "Amazfit",
                        name: "Amazfit",
                        href: "/",
                    },
                    {
                        id: "OPPO",
                        name: "OPPO",
                        href: "/",
                    },
                    {
                        id: "Top vòng đeo tay",
                        name: "Top vòng đeo tay",
                        href: "/",
                    },
                ]
            },
            {
                sublink: [
                    {
                        id: "Xiaomi",
                        name: "Xiaomi",
                        href: "/",
                    },
                    {
                        id: "Đồng hồ trẻ em",
                        name: "Đồng hồ trẻ em",
                        href: "/",
                    },
                    {
                        id: "realme",
                        name: "realme",
                        href: "/",
                    },
                    {
                        id: "Fitbit",
                        name: "Fitbit",
                        href: "/",
                    },
                ]
            },
            {
                sublink: [
                    {
                        id: "Garmin",
                        name: "Garmin",
                        href: "/",
                    },
                    {
                        id: "Huawei",
                        name: "Huawei",
                        href: "/",
                    },
                    {
                        id: "SoundPEATS",
                        name: "SoundPEATS",
                        href: "/",
                    },
                ]
            },
        ]
    },
    {
        id: 3,
        icon: <BsLaptop />,
        name: "Laptop",
        href: "/",
        submenu: true,
        sublinks: [
            {
                head: "HÃNG SẢN XUẤT",
                href: "/",
                sublink: [
                    {
                        id: "Apple",
                        name: "Apple",
                        href: "/",
                    },
                    {
                        id: "Dell",
                        name: "Dell",
                        href: "/",
                    },
                    {
                        id: "Huawei",
                        name: "Huawei",
                        href: "/",
                    },
                    {
                        id: "MSI",
                        name: "MSI",
                        href: "/",
                    },
                ]
            },
            {
                sublink: [
                    {
                        id: "Acer",
                        name: "Acer",
                        href: "/",
                    },
                    {
                        id: "GIGABYTE",
                        name: "GIGABYTE",
                        href: "/",
                    },
                    {
                        id: "Lenovo",
                        name: "Lenovo",
                        href: "/",
                    },
                    {
                        id: "Surface",
                        name: "Surface",
                        href: "/",
                    },
                ]
            },
            {
                sublink: [
                    {
                        id: "ASUS",
                        name: "ASUS",
                        href: "/",
                    },
                    {
                        id: "HP",
                        name: "HP",
                        href: "/",
                    },
                    {
                        id: "LG",
                        name: "LG",
                        href: "/",
                    },
                    {
                        id: "Xiaomi",
                        name: "Xiaomi",
                        href: "/",
                    },
                ]
            },
            {
                head: "Mức giá",
                href: "/",
                sublink: [
                    {
                        id: "Trên 20 triệu",
                        name: "Trên 20 triệu",
                        href: "/",
                    },
                    {
                        id: "Từ 12 đến 15 Triệu",
                        name: "Từ 12 đến 15 Triệu",
                        href: "/",
                    },
                    {
                        id: "Từ 15 đến 20 Triệu",
                        name: "Từ 15 đến 20 Triệu",
                        href: "/",
                    },
                ]
            },
        ]

    },
    {
        id: 4,
        icon: <AiOutlineDesktop />,
        name: "Màn hình",
        href: "/",

    },
    {
        id: 5,
        icon: <BsDisplay />,
        name: "Smart tv",
        href: "/",

    },
    {
        id: 6,
        icon: <AiOutlineTablet />,
        name: "Tablet",
        href: "/",

    },
    {
        id: 7,
        icon: <FiHeadphones />,
        name: "âm thanh",
        href: "/",

    },
    {
        id: 8,
        icon: <AiOutlineHome />,
        name: "Smart home",
        href: "/",

    },
    {
        id: 9,
        icon: <GiCharging />,
        name: "Phụ kiện",
        href: "/",

    },
    {
        id: 10,
        icon: <SlGameController />,
        name: "Đồ chơi công nghệ",
        href: "/",

    },
    {
        id: 11,
        icon: <MdPhonelinkSetup />,
        name: "Máy trôi",
        href: "/",

    },
    {
        id: 12,
        icon: <BsWrench />,
        name: "Sửa chữa",
        href: "/",

    },
    {
        id: 13,
        icon: <BsSim />,
        name: "Sim thẻ",
        href: "/",

    },
    {
        id: 14,
        icon: <BsNewspaper />,
        name: "Tin tức",
        href: "/",

    },
    {
        id: 15,
        icon: <IoIosFlash />,
        name: "Ưu đãi",
        href: "/",

    },
]

