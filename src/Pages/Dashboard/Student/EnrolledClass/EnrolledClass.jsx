import { useState } from "react";
import useSelectedClasses from "../../../../hooks/useSelectedClass";
import EnrolledRow from "./EnrolledRow";


const EnrolledClass = () => {
    const [classes, setClasses] = useState([]);

    const [userInfo] = useSelectedClasses();

    if (userInfo.selectedClasses) {
        const ids = userInfo.selectedClasses;
        ids.map(async id => {
            // const res = await fetch(`http://localhost:5000/classes/${id}`);
            // const data = await res.json();
            // setClasses([...classes, data]);

            fetch(`http://localhost:5000/classes/${id}`)
                .then(res => res.json())
                .then(data => {
                    setClasses([...classes, data]);
                })
        })
    }

    console.log(classes)

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>Enrolled Classes</h2>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Information</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(aClass => <EnrolledRow
                                key={aClass._id}
                                aClass={aClass}
                            ></EnrolledRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default EnrolledClass;