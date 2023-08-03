export default function AddTransaction(props){
    return (
        <div className="addTransactionContainer">
                <span><b>Add new transaction</b></span>
                <hr/>
                <div className="textHolder">
                    <label>Text</label><br/>
                    <input type="text" 
                        placeholder="Enter Text" 
                        onChange={(event)=>props.textHandler(event.target.value)}
                        value={props.text}
                    />
                </div>
                <div className="priceHolder">
                    <label>Amount</label><br/>
                    <span>("-" for expense),("+"for income)</span>
                    <input type="number"
                        placeholder="Enter amount..."
                        onChange={(event)=>props.priceHandler(event.target.value)}
                        value={props.price}
                    />
                </div>
                <div className="btnContainer">
                    <button className="addBtn" onClick={props.addList}>Add transaction</button>
                    <button className="clearBtn" onClick={props.clear}>Clear all</button>
                </div>
        </div>
    )
}