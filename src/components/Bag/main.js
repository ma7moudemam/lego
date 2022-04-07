
import bag from '../../assets/imgs/40527 (1).png'
import bagTwo from '../../assets/imgs/10297.png'

import "./Bag.css";
import { useState } from 'react';

export default function Main() {

    const [count, setCount] = useState(0);

 return   <div className="col-12 col-md-8 border bg-white p-3">
 <p className="border-bottom text-success py-2"> Available now
 </p>



 <div className="d-flex align-items-center border bg-blue my-4 px-3 py-3">
     <figure className="w-img">
         <img src={bag} className="w-100 rounded-circle"></img>

     </figure>
     <p className='mx-2'>You've qualified for a Easter Chicks (40527)</p>

 </div>


 <div className="d-flex justify-content-between align-items-center border px-3 py-3 my-4">
     <figure className="w-img">
         <img src={bagTwo} className="w-100 "></img>


     </figure>

     <div>
         <p>Boutique Hotel</p>
         <p>$199.99</p>

     </div>


     <div className='border rounded'>
         <span className='counter p-1 px-3' onClick={() => {
             setCount(count - 1)
         }}>-</span>
         <span className='counter p-1 px-3'>{count}</span>
         <span className='counter border-0 p-1 px-3' onClick={() => {
             setCount(count + 1)
         }}>+</span>

     </div>

     <div>
         <button type="button" class="btn btn-primary">delete</button>
     </div>


 </div>

</div>

}