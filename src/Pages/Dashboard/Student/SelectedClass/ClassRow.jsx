import { Link } from "react-router-dom";

const ClassRow = ({ aClass, handleDelete }) => {

    const { _id, classPhoto, className, price, availableSeats } = aClass;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-6">
                    <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                            {classPhoto && <img src={classPhoto} alt="toy photo" />}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="font-bold">{className}</div>
                    </div>
                </div>
            </td>
            <td>{price}</td>
            <td>{availableSeats}</td>
            <th>
                <div className="flex flex-col gap-2 w-fit">
                    <Link to={`/pay/${_id}`} className="btn btn-ghost btn-xs bg-primary-color">Pay</Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs bg-secondary-color">Delete</button>
                </div>
            </th>
        </tr>
    );
};

export default ClassRow;