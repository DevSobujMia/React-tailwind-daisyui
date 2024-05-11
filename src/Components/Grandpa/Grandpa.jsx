import "../../App.css";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

const Grandpa = () => {
    return (
        <div className="grandpa my-10">
            <h2>Grandpa</h2>

            <section className="flex justify-between">
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;