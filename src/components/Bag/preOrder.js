import bag from '../../assets/imgs/40527 (1).png'
import "./Bag.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bagThree from '../../assets/imgs/11.png'
import bagFour from '../../assets/imgs/12.jpeg'

export default function PreOrder() {
    const [count, setCount] = useState(0);

   return <div className="border my-3 py-3 col-12 col-md-4">
        <div className="d-flex">
            <p className="bg-warning p-1 px-3">pre-order</p>
            <p className="bg-warning p-1 px-3 mx-2">new</p>

        </div>

        <div className="d-flex">
        <p className="f-b">Death Star™ Trash Compactor Diorama</p>

            <figure className="w-25 mx-2">
                <img src={bagThree} className="w-100 "></img>
            </figure>
        </div>
        <p className='m-0 f-b'>$89.99
        </p>
        <p className='f-12 text-info'>Pre-order this item today, it will ship from April 26, 2022


        </p>
        <div className='d-flex justify-content-start align-items-center mb-3'>
        <div className=' border rounded'>
            <span className='counter p-1 px-3'  onClick={() => {
                setCount(count - 1) 
            }}>-</span>
            <span className='counter p-1 px-3'>{count}</span>
            <span className='counter border-0 p-1 px-3' onClick={() => {
                setCount(count + 1)}
            }>+</span>


        </div>
            <span className='f-12 mx-3'>Limit 2</span>
        </div>
       

        <div className='d-flex justify-content-start align-items-center'>

            <button type="button" class="btn btn-warning w-75">add to bag</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill pointer mx-2" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </div>


        <div className='d-flex py-3 bg-blue my-3 px-2'>
            <figure className="w-50">
                <img src={bagFour} className="w-100 "></img>
            </figure>
            <div>
            <p className='f-14 m-0 mx-2'>A colorful Easter Chicks gift to display with LEGO® purchases over $65, available 3/25-4/16 while supplies last.*!</p>
            <Link className='f-12 px-2'>Learn more</Link>
            </div>
      
        </div>




    </div>

}