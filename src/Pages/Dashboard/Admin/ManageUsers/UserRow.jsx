
const UserRow = ({ user, handleMakeAdmin, handleMakeInstructor }) => {

    const { name, email, photo, role } = user;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-6">
                    <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                            {photo && <img src={photo} alt="user photo" />}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{role}</td>
            <th>
                <div className="flex flex-col gap-2 w-fit">
                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs bg-primary-color">Make Admin</button>
                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-xs bg-secondary-color">Make Instructor</button>
                </div>
            </th>
        </tr>
    );
};

export default UserRow;