import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';
import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section className="flex">
                
                    { asset && <Special asset={asset}></Special> }
                    { name === 'Alien' && <Friend></Friend> }
                    
                
            </section>
        </div>
    );
};

Cousin.propTypes = {
    name: PropTypes.string,
    asset: PropTypes.string
};

export default Cousin;