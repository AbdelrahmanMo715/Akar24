import { t } from "i18next";
import villaAucation from "../../assets/villaAucation.png";
import { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineChair } from "react-icons/md";
import { RiRulerLine } from "react-icons/ri";
import { FaShower } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
function AuctionList() {
    const [selectedStatus, setSelectedStatus] = useState(t("auction.filter.All"));

    const realEstates = [
      {
        image: villaAucation,
        price: "2,350.00",
        BedroomNum : "3",
        rooms : "4",
        bathroom : "2",
        space : "460 م2",
        address: "شارع العليا, الملك فهد, الرياض, 12271",
        status : t('auction.filter.Ongoing')
      },
      {
        image: villaAucation,
        price: "2,350.00",
        BedroomNum : "3",
        rooms : "4",
        bathroom : "2",
        space : "460 م2",
        address: "شارع العليا, الملك فهد, الرياض, 12271",
        status : t('auction.filter.Expired')
      },
      {
        image: villaAucation,
        price: "2,350.00",
        BedroomNum : "3",
        rooms : "4",
        bathroom : "2",
        space : "460 م2",
        address: "شارع العليا, الملك فهد, الرياض, 12271",
        status : t('auction.filter.Ongoing')
      },
      {
        image: villaAucation,
        price: "2,350.00",
        BedroomNum : "3",
        rooms : "4",
        bathroom : "2",
        space : "460 م2",
        address: "شارع العليا, الملك فهد, الرياض, 12271",
        status : t('auction.filter.Upcoming')
      },
      {
        image: villaAucation,
        price: "2,350.00",
        BedroomNum : "3",
        rooms : "4",
        bathroom : "2",
        space : "460 م2",
        address: "شارع العليا, الملك فهد, الرياض, 12271",
        status : t('auction.filter.Ongoing')
      },
      {
        image: villaAucation,
        price: "2,350.00",
        BedroomNum : "3",
        rooms : "4",
        bathroom : "2",
        space : "460 م2",
        address: "شارع العليا, الملك فهد, الرياض, 12271",
        status : t('auction.filter.Ongoing')
      },
      {
        image: villaAucation,
        price: "2,350.00",
        BedroomNum : "3",
        rooms : "4",
        bathroom : "2",
        space : "460 م2",
        address: "شارع العليا, الملك فهد, الرياض, 12271",
        status : t('auction.filter.Upcoming')
      },
      {
        image: villaAucation,
        price: "2,350.00",
        BedroomNum : "3",
        rooms : "4",
        bathroom : "2",
        space : "460 م2",
        address: "شارع العليا, الملك فهد, الرياض, 12271",
        status : t('auction.filter.Expired')
      },
    ]
    const statuses = [t('auction.filter.All'), t('auction.filter.Expired'), t('auction.filter.Upcoming'), t('auction.filter.Ongoing')];
    const filteredRealEstates =
    selectedStatus === "الكل" || selectedStatus === "All" 
      ? realEstates
      : realEstates.filter((realEstate) => realEstate.status === selectedStatus);
  return (
    <>
    { /* filter list  */}
    <div className="flex justify-between bg-light-sm-bg dark:bg-dark-sm-bg w-full md:w-[644px] mx-auto p-4 gap-4 mt-12">
    {statuses.map((status, index) => (
      <button
        key={index}
        className={`px-3 md:px-6 py-2 md:text-xl font-bold rounded-lg ${
          selectedStatus === status
            ? "bg-white dark:bg-[#0D0D0D] text-light-blue dark:text-dark-blue"
            : "text-light-gray-color dark:text-dark-gray-color"
        }`}
        onClick={() => setSelectedStatus(status)}
      >
        {status}
      </button>
    ))}
  </div>

  {/* real state to filtered (auction List)  */}
  <div className="specialGrid grid  gap-4  mt-10">
        {filteredRealEstates.map((realEstate, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-md dark:shadow-[#66B0FF1A]"
          >
            <img
              src={realEstate.image}
              alt="Villa"
              className="w-full rounded-lg"
            />
            
            <div className="absolute left-[-11px] top-[55%]">
                <div className="block rounded-lg  px-3 py-2 text-sm font-bold bg-light-blue dark:bg-dark-blue text-white dark:text-[#0D0D0D]">
                  {realEstate.status} <BsStars className="inline"/> 
                </div>
                <div className="absolute bottom-[-5px] left-[2px] h-0 w-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent  border-t-blue-500"></div>
              </div>
            <div className="absolute top-3 right-3 ">
            <div className="flex gap-3">
            <span className="text-sm font-medium text-light-lg-title dark:text-dark-lg-title p-2 rounded-lg bg-white dark:bg-[#0D0D0D]">شراء</span>
            <span className="text-sm font-medium text-light-lg-title dark:text-dark-lg-title p-2 rounded-lg bg-white dark:bg-[#0D0D0D]">قبل 8 ساعات</span>
            </div>
          </div>
            <div className="p-4">
              <p className="text-2xl font-bold text-[#010B38] dark:text-dark-blue">
                {realEstate.price}{" "}
                <span className=" text-lg text-[#010B3899] dark:text-[#1A88FF99]">
                  ريال
                </span>
              </p>
              <div className="flex justify-between mt-2 text-[#010B38CC] dark:text-[#C7D1FECC]">
                <div className="flex items-center gap-3 font-normal">
                  <span className="text-2xl">
                    <IoBedOutline />
                  </span>
                  <span>{realEstate.BedroomNum}</span>

                  <span className="text-2xl">
                    <MdOutlineChair />
                  </span>
                  <span>{realEstate.rooms}</span>

                  <span className="text-2xl">
                    <FaShower />
                  </span>
                  <span>{realEstate.bathroom}</span>

                  <span className="text-2xl">
                    <RiRulerLine />
                  </span>
                  <span>{realEstate.space}</span>
                </div>
              </div>
              <p className=" text-[#010B38CC] dark:text-[#C7D1FECC] mt-2">
                {realEstate.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    
    </>
  )
}

export default AuctionList

