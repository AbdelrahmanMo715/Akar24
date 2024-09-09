import villa from "../../assets/invest-vila.png"
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineChair } from "react-icons/md";
import { RiRulerLine } from "react-icons/ri";
import { FaShower } from "react-icons/fa6";
import { t } from "i18next";
function InvestRealEstate() {
    const realEstates = [
        {
          image: villa,
          price: "2,350.00",
          BedroomNum : "3",
          rooms : "4",
          bathroom : "2",
          space : "460 م2",
          address: "شارع العليا, الملك فهد, الرياض, 12271",
        },
        {
            image: villa,
            price: "2,350.00",
            BedroomNum : "3",
            rooms : "4",
            bathroom : "2",
            space : "460 م2",
           
            address: "شارع العليا, الملك فهد, الرياض, 12271",
          },
          {
            image: villa,
            price: "2,350.00",
            BedroomNum : "3",
            rooms : "4",
            bathroom : "2",
            space : "460 م2",
            
            address: "شارع العليا, الملك فهد, الرياض, 12271",
          },
          {
            image: villa,
            price: "2,350.00",
            BedroomNum : "3",
            rooms : "4",
            bathroom : "2",
            space : "460 م2",
           
            address: "شارع العليا, الملك فهد, الرياض, 12271",
          },
          {
            image: villa,
            price: "2,350.00",
            BedroomNum : "3",
            rooms : "4",
            bathroom : "2",
            space : "460 م2",
            
            address: "شارع العليا, الملك فهد, الرياض, 12271",
          },
          {
            image: villa,
            price: "2,350.00",
            BedroomNum : "3",
            rooms : "4",
            bathroom : "2",
            space : "460 م2",
           
            address: "شارع العليا, الملك فهد, الرياض, 12271",
          },
          {
            image: villa,
            price: "2,350.00",
            BedroomNum : "3",
            rooms : "4",
            bathroom : "2",
            space : "460 م2",
           
            address: "شارع العليا, الملك فهد, الرياض, 12271",
          },
          {
            image: villa,
            price: "2,350.00",
            BedroomNum : "3",
            rooms : "4",
            bathroom : "2",
            space : "460 م2",
            
            address: "شارع العليا, الملك فهد, الرياض, 12271",
          },
      ];
  return (
    <div className="grid specialGrid gap-4 mt-10">
    {realEstates.map((realEstate, index) => (
   <div key={index} className="rounded-lg shadow-md dark:shadow-[#66B0FF1A]">
   <img src={realEstate.image} alt="Villa" className="w-full rounded-lg" />
   <div className="p-4">
       <p className="text-2xl font-bold text-[#010B38] dark:text-dark-blue">{realEstate.price} <span className=" text-lg text-[#010B3899] dark:text-[#1A88FF99]">ريال</span></p>
       <div className="flex justify-between mt-2 text-[#010B38CC] dark:text-[#C7D1FECC]">
           <div key={index} className="flex items-center gap-3 font-normal">
           <span className="text-2xl"><IoBedOutline/></span>
           <span className="">{realEstate.BedroomNum}</span>

           <span className="text-2xl"><MdOutlineChair/></span>
           <span className="">{realEstate.rooms}</span>

           <span className="text-2xl"><FaShower/></span>
           <span className="">{realEstate.bathroom}</span>

           <span className="text-2xl"><RiRulerLine/></span>
           <span className="">{realEstate.space}</span>
           
           </div>

       </div>
       <p className=" text-[#010B38CC] dark:text-[#C7D1FECC] mt-2">{realEstate.address}</p>
   </div>
   </div>
))}
</div>
  )
}

export default InvestRealEstate
