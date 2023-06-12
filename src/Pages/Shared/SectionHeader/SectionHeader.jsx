
const SectionHeader = ({ heading, subHeading }) => {
    return (
        <div className='text-center mb-8'>
            <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3 font-playfair'>{heading}</h2>
            <p className='text-gray font-medium'>{subHeading}</p>
        </div>
    );
};

export default SectionHeader;