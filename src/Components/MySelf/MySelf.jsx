import PropTypes from 'prop-types';
import Special from "../Special/Special";

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

MySelf.propTypes = {
    asset: PropTypes.string
};

export default MySelf;