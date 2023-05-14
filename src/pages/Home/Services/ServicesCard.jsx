import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <div>
                    <p>Price: {price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Book now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;