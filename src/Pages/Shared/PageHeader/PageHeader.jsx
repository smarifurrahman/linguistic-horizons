
const PageHeader = ({ title }) => {
    return (
        <div className='text-center py-14'>
            <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>{title}</h2>
        </div>
    );
};

export default PageHeader;