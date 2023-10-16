import {useState} from "react";
import { InputBox } from "./components/index";
import useCurrency from "./hooks/useCurrency";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyData = useCurrency(from); // using custom hook for fetching currency price


  function convert() {
    setConvertedAmount(amount * currencyData[to]);
  }

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <main className="w-screen h-screen bg-slate-400 flex items-center justify-center px-2">
      <div className="w-full relative max-w-[500px] flex flex-col justify-center gap-4 p-6 bg-slate-500 rounded-lg">
        <button id="swap" onClick={swap} className="absolute left-[45%] top-[34%] bg-blue-500 p-2 rounded-md text-white">
          <img src="https://cdn-icons-png.flaticon.com/128/7166/7166841.png" alt="swap" width={28} />
        </button>      
        <InputBox />
        <InputBox />
        <button className="p-4 rounded-lg bg-blue-600 text-white">Convert</button>
      </div>
    </main>
  );
}
