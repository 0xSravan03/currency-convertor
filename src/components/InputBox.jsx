export default function InputBox({
    label, 
    amount, 
    onAmountChange, 
    amountDisabled = false, 
    selectedCurrency, 
    onCurrencyChange, 
    currencyDisabled = false
}) {
    return (
        <div className="w-full bg-white p-6 rounded-lg flex items-center justify-evenly flex-wrap">
            <div className="flex flex-col w-1/2 gap-2">
                <label htmlFor="amount">From</label>
                <input type="number" id="amount" placeholder="Amount" defaultValue={amount} min={0} className="outline-none bg-white" 
                disabled={amountDisabled}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>
            <div className="flex flex-col items-end w-1/2 gap-2">
                <label>Currency</label>
                <select defaultValue={selectedCurrency} disabled={currencyDisabled} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} className="outline-none rounded-md py-1 px-1 cursor-pointer">
                    <option value="inr">INR</option>
                    <option value="jpy">JPY</option>
                    <option value="krw">KRW</option>
                    <option value="usd">USD</option>
                    <option value="aed">AED</option>
                    <option value="btc">BTC</option>
                </select>
            </div>
        </div>
    );
}