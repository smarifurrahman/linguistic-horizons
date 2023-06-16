
const PopularInstructorsCard = ({ instructor }) => {

    const { photo, name, email } = instructor;

    return (
        <div className="card min-w-[200px] bg-base-100 shadow-xl">
            <figure>
                <img className='h-[260px] w-full object-cover' src={photo} alt="Shoes" />
            </figure>
            
            <div className="card-body">
                <h2 className="font-bold text-xl text-center">{name}</h2>
                <h4 className='font-semibold mt-4'>{email}</h4>
                <h4 className='font-semibold mt-4'>Enrolled Students: </h4>
            </div>
        </div>
    );
};

export default PopularInstructorsCard;