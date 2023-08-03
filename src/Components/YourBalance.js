export default function YourBalance(props){
    const total = props.value.reduce((a,b) => a+b,0)
    return (
        <div className="first-component-container">
            <div>YOUR BALANCE</div>
            <span>${total}</span>
        </div>
    )
}