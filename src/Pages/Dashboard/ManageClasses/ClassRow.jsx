
const ClassRow = ({ aClass, handleApprove, handleDeny, handleFeedback }) => {

    const { classPhoto, className, instructorName, instructorEmail, availableSeats, price, status } = aClass;

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
            <td>$ {price}</td>
            <td>{status}</td>
            <th>
                <div className="flex flex-col gap-2 w-fit">
                    <button disabled={status === 'Approved' || status === 'Denied' ? true : false} onClick={() => handleApprove(aClass)} className="btn btn-ghost btn-xs bg-primary-color">Approve</button>
                    <button disabled={status === 'Approved' || status === 'Denied' ? true : false} onClick={() => handleDeny(aClass)} className="btn btn-ghost btn-xs bg-pink-color">Deny</button>
                    <button onClick={() => handleFeedback(aClass)} className="btn btn-ghost btn-xs bg-secondary-color">Feedback</button>
                </div>
            </th>
        </tr>
    );
};

export default ClassRow;