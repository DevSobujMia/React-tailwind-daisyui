import { createContext, useState } from "react";
import "../../App.css";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

export const MoneyContext = createContext('2000');
export const AssetContext = createContext('gold');

const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = 'diamond';

  return (
    <div className="grandpa my-10">
      <h2>Grandpa</h2>
      <p>Net Money: {money}</p>

      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex justify-between">
            <Father asset={asset}></Father>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
