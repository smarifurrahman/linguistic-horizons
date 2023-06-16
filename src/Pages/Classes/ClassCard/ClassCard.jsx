
const ClassCard = ({ singleClass, handleSelectClass }) => {

    const { classPhoto, className, instructorName, availableSeats, price } = singleClass;
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
                    <button onClick={() => handleSelectClass(singleClass)} className="btn btn-ghost btn-xs bg-primary-color">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;