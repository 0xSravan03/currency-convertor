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
    setConvertedAmount((amount * currencyData[to]).toFixed(2));
  }

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center px-2">
      <div className="w-full relative max-w-[550px] flex flex-col justify-center gap-4 p-8 bg-cyan-300 rounded-lg">
        <button id="swap" onClick={swap} className="absolute left-[45%] top-[34%] bg-blue-500 p-2 rounded-md text-white">
          <img src="https://cdn-icons-png.flaticon.com/128/7166/7166841.png" alt="swap" width={28} />
        </button>      
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          selectedCurrency={from}
        />
        <InputBox
          label="To"
          amount={convertedAmount}
          onCurrencyChange={setTo}
          selectedCurrency={to}
          amountDisabled={true}
        />
        <button className="p-4 rounded-lg bg-blue-600 text-white" onClick={convert}>Convert</button>
      </div>
    </main>
  );
}
