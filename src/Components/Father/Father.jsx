import PropTypes from 'prop-types';
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = ({asset}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

Father.propTypes = {
    asset: PropTypes.string
};

export default Father;