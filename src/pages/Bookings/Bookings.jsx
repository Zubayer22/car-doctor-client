import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `https://car-doctor-server-three-omega.vercel.app/bookings?email=${user?.email}`;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data =>{
                if(!data.error){
                    setBookings(data);
                }
                else{
                    navigate('/')
                }
            })
    }, [url, navigate])

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete this booking');
        if (proceed) {
            fetch(`https://car-doctor-server-three-omega.vercel.app/bookings/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted booking successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    const handleBookingConfirm =  id => {
        fetch(`https://car-doctor-server-three-omega.vercel.app/bookings/${id}`,{
            method: 'PATCH',
            headers: { 
                'content-Type' : 'application/json'
            },
            body:JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                //update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }

    return (
        <div>
            <h3 className='text-3xl font-bold'>Your booking {bookings.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;