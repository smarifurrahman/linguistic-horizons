import { Link } from "react-router-dom";

const ClassCard = ({ singleClass }) => {

    const { classPhoto, className, instructorName, availableSeats, price, _id } = singleClass;
    // todo: check this
    return (
        <div className="card min-w-[200px] bg-base-100 shadow-xl">
            <figure>
                <img className='h-[260px] w-full object-cover' src={classPhoto} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="font-bold text-xl text-center">{className}</h2>

                <h4 className='font-semibold mt-4'>Instructor: {instructorName}</h4>
                <h4 className='font-semibold mt-4'>Available Seats: {availableSeats}</h4>
                <h4 className='font-semibold mt-4'>Price: ${price}</h4>

                <div className="card-actions justify-end">
                    <Link to={`/classes/${_id}`} className="btn btn-ghost btn-xs bg-primary-color">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;