import { Helmet } from "react-helmet-async";
import PageHeader from "../../../Shared/PageHeader/PageHeader";

const InstructorHome = () => {
    return (
        <div>
            <Helmet>
                <title>Linguistic Horizons | Instructor Home</title>
            </Helmet>
            <PageHeader title="Instructor Home"></PageHeader>
        </div>
    );
};

export default InstructorHome;