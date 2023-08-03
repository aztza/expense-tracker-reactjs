export default function IncomeExpense(props){

    return (
        <div className="IncomeExpense-Container">
            <div className="Income">
                <div>INCOME</div>
                <span>${props.income}</span>
            </div>
            <div className="Expense">
                <div>EXPENSE</div>
                <span>${props.outcome}</span>
            </div>
        </div>
    )
}