import React from 'react'
import DashboardHeader from '../../components/Parlour/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Parlour/Layout/DashboardSideBar'
import AllCoupons from "../../components/Parlour/AllCoupons";

const ShopAllCoupouns = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={9} />
            </div>
            <div className="w-full justify-center flex">
                <AllCoupons />
            </div>
          </div>
    </div>
  )
}

export default ShopAllCoupouns