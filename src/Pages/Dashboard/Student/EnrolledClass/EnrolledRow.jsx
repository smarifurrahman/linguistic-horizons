
const EnrolledRow = ({ aClass, index }) => {

    const { className, price, availableSeats } = aClass;


    return (
        <tr>
            <td>{index + 1}</td>
            <td>{className}</td>
            <td>{price}</td>
            <td>{availableSeats}</td>
        </tr>
    );
};

export default EnrolledRow;