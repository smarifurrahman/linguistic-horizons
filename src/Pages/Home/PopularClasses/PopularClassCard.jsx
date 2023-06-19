
const PopularClassCard = ({ singleClass }) => {

    const { classPhoto, className, instructorName, availableSeats, enrolledStudents } = singleClass;

    return (
        <div className="card min-w-[200px] bg-base-100 shadow-xl">
            <figure>
                <img className='h-[260px] w-full object-cover' src={classPhoto} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
                <h2 className="font-bold text-xl text-center">{className}</h2>

                <h4 className='font-semibold mt-4'>Instructor: {instructorName}</h4>
                <h4 className='font-semibold mt-4'>Enrolled Students: {enrolledStudents ? enrolledStudents.length : 0}</h4>
                <h4 className='font-semibold mt-4'>Available Seats: {availableSeats}</h4>
            </div>
        </div>
    );
};

export default PopularClassCard;