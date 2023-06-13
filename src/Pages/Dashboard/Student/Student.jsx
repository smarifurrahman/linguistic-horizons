import EnrolledClass from "./EnrolledClass/EnrolledClass";
import EnrolledRow from "./EnrolledClass/EnrolledRow";
import SelectedClass from "./SelectedClass/SelectedClass";

const Student = () => {
    return (
        <div>
            <SelectedClass></SelectedClass>
            <EnrolledClass></EnrolledClass>
        </div>
    );
};

export default Student;