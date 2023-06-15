
const MyClassRow = ({ aClass, handleUpdate }) => {

    const { classPhoto, className, availableSeats, price, enrolledStudents, status, feedback } = aClass;

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
            <td>{availableSeats}</td>
            <td>${price}</td>
            <td>{enrolledStudents}</td>
            <td>{status}</td>
            <td>{feedback}</td>
            <th>
                <div className="flex flex-col gap-2 w-fit">
                    <button onClick={() => handleUpdate(aClass)} className="btn btn-ghost btn-xs bg-primary-color">Update</button>
                </div>
            </th>
        </tr>
    );
};

export default MyClassRow;