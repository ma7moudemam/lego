import { Link } from "react-router-dom";

import bag from '../../assets/imgs/40527 (1).png'
import bagTwo from '../../assets/imgs/10297.png'
export default function Promo() {

    return (
        <div className="col-12 col-md-4">
            <div className='bg-white p-3'>

                <p>Enter a Promo Code</p>
                <p className='f-12'>Got a VIP Discount Code? You'll enter that later when you're checking out!</p>

                <div className='border d-flex justify-content-between  input-holder    '>
                    <input className='input-code ' type={"text"} placeholder="Enter code" />
                    <button className='input-button rounded-right border-primary p-2'>
                        Apply
                    </button>
                </div>
            </div>

            <div className="w-100">
                <div className=' px-3 text-center my-3'>
                    <div className='py-3 bg-blue'>

                        <p className='f-12 m-0'>Congratulations - you get FREE delivery!</p>
                    </div>
                </div>

            </div>



            <div className='bg-white p-3'>

                <p className="border-bottom">Order Summary</p>
                <p className='f-12 '>Enter a ZIP code to estimate tax and delivery
                </p>

                <div className='border d-flex justify-content-between input-holder   '>
                    <input className='input-code ' type={"text"} placeholder="Expample" />
                    <button className='input-button rounded-right border-primary p-2'>
                        Apply
                    </button>
                </div>

                <div className="py-3">
                    <div className="d-flex justify-content-between">
                        <p>Order value (3) items</p>
                        <p>$399.98
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Shipping cost</p>
                        <p>$399.98
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Order Total
                        </p>
                        <p>$399.98
                        </p>
                    </div>


                    <button type="button" class="btn btn-warning w-100">Checkout Securely</button>
                </div>



                <div className="py-3">
                    <p className="border-bottom">Express Checkout</p>
                    <p className='f-12 '>All order details will be taken directly from your payment provider, please ensure you select the correct addresses before submitting your order. From the payment provider, you will be directed to the order confirmation page. If you have a discount code, please choose ‘Checkout Securely'.
                    </p>

                    <button type="button" class="btn btn-primary w-100">pay with <span className="pay">
                        payPal </span> </button>
                </div>

            </div>

            <div className="py-3">
                <p className="py-2">Help with your order:
                </p>
                <div className="d-flex">
                    <Link className="f-12">Shipping / Handling</Link>
                    <Link className="f-12 mx-3">Returns</Link>

                </div>
                <div>
                    <p className="my-3">Payment methods
                    </p>

                    <div className="d-flex">
                        <img src={bag} className="pay-img mx-2"></img>
                        <img src={bag} className="pay-img mx-2"></img>
                        <img src={bag} className="pay-img mx-2"></img>

                    </div>
                </div>

            </div>


        </div>

    )
}