import { Helmet } from "react-helmet-async";
import PageHeader from "../../../Shared/PageHeader/PageHeader";

const StudentHome = () => {
    return (
        <div>
            <Helmet>
                <title>Linguistic Horizons | Students Home</title>
            </Helmet>
            <PageHeader title="Students Home"></PageHeader>
        </div>
    );
};

export default StudentHome;