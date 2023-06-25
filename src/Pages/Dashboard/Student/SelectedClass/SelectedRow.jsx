import { Link } from "react-router-dom";

const SelectedRow = ({ aClass, handleDelete }) => {
    const { classPhoto, className, instructorName, instructorEmail, availableSeats, price, status, _id } = aClass;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-6">
                    <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                            {classPhoto && <img src={classPhoto} alt="class photo" />}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="font-bold">{className}</div>
                    </div>
                </div>
            </td>
            <td>{instructorName}</td>
            <td>{instructorEmail}</td>
            <td>{availableSeats}</td>
            <td>${price}</td>
            <td>{status}</td>
            <th>
                <div className="flex flex-col gap-2 w-fit">
                    <button onClick={() => handleDelete(aClass)} className="btn btn-ghost btn-xs bg-primary-color">Delete</button>
                    {/* <button onClick={() => handlePay(aClass)} className="btn btn-ghost btn-xs bg-pink-color">Pay</button> */}
                    <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-ghost btn-xs bg-pink-color w-full">Pay</button></Link>
                </div>
            </th>
        </tr>
    );
};

export default SelectedRow;