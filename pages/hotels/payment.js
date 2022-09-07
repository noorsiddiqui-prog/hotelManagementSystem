
import CustomerForm from "../../components/cus_hotel/CustomerForm"
import HeaderItem from "../../components/cus_hotel/HeaderItem"
import Footer from "../../components/cus_hotel/Footer"
import FareDetails from "../../components/cus_hotel/FareDetails"


export default function payments() {
    return (
        <>
            <HeaderItem className="bg-black" />

            <div class="  flex ccolumns-1 h-24   bg-white">
                <div ><h1 className=" text-3xl font-bold pl-96 ml-36 pt-5">Customer(s) Personal Information</h1></div>

            </div>
            <div class="gap-8 columns-1 md:columns-2 xl:columns-2 ml-56">
                <div className="columns-2xl p-10 pt-36 text-white bg-gray-900 items-center">
                    <CustomerForm />
                </div>

                <div className='ml-46'>
                    <FareDetails />
                </div>

            </div>
            <Footer />


        </>
    )
}