import { Helmet } from "react-helmet-async";
import PageHeader from "../../../Shared/PageHeader/PageHeader";

const AdminHome = () => {
    return (
        <div>
            <Helmet>
                <title>Linguistic Horizons | Admin Home</title>
            </Helmet>
            <PageHeader title="Admin Home"></PageHeader>
        </div>
    );
};

export default AdminHome;