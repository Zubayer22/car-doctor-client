import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;

    const {user} = useContext(AuthContext);

    const handleBookCheckout = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const amount = form.amount.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const booking={
            customerName: name,
            email,
            date,
            img,
            phone,
            price: amount,
            service: title,
            service_id: _id,
            message
        }

        console.log(booking);

        fetch('https://car-doctor-server-three-omega.vercel.app/bookings',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Service book was successfully')
            }
        })
    }

    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Book service: {title}</h2>

            <div className="card-body bg-[#F3F3F3] p-40">
                <form onSubmit={handleBookCheckout}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div className="form-control">
                            <input type="text" placeholder="Your Name" name='name' defaultValue={user?.name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" name='email' defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="tel" placeholder="Your Phone" name='phone' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="date" name='date' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='amount' readOnly defaultValue={'Due = $'+ price} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <textarea name="message" id="" placeholder='Your Message' className="input input-bordered w-full mt-6 h-60"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        
                        <input className="btn btn-primary" type="submit" value="Send Message" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Checkout;