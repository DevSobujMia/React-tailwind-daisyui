import Cousin from "../Cousin/Cousin";
import PropTypes from 'prop-types';

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Rafsan'} asset={asset}></Cousin>
                <Cousin name={'konok'}></Cousin>
            </section>
        </div>
    );
};

Uncle.propTypes = {
    asset: PropTypes.string
}

export default Uncle;