export default function History(props){
    const items= []
    for(let i = 0; i < props.list.length; i++){
        let name = props.list[i].name
        let price = props.list[i].price
        items.push(<div key={i} className={price < 10 ? "transaction transactionMinus" :"transaction transactionPlus"}>
                        <span>{name}</span>
                        <span>{price < 10 ? price : "+" + price}</span>
                   </div>)
    }
    return (
        <div className="HistoryContainer">
            <span><b>History</b></span>
            <hr/>
            {items}
        </div>
    )
}