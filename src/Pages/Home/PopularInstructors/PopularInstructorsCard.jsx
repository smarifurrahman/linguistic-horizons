
const PopularInstructorsCard = ({ instructor }) => {

    const { totalEnrolledStudents, totalCoursesTaken, instructorName, instructorPhoto } = instructor;

    return (
        <div className="card min-w-[200px] bg-base-100 shadow-xl">
            <figure>
                <img className='h-[260px] w-full object-cover' src={instructorPhoto} alt="class photo" />
            </figure>

            <div className="card-body text-center">
                <h2 className="font-bold text-xl text-center">{instructorName}</h2>
                <h4 className='font-semibold mt-4'>Total Enrolled Students: {totalEnrolledStudents}</h4>
                <h4 className='font-semibold mt-4'>Total Courses Taken: {totalCoursesTaken}</h4>
            </div>
        </div>
    );
};

export default PopularInstructorsCard;