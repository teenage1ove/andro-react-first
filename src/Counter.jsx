import "./counter.css"

function Counter(props) {
    const classnames = props.isDanger ? "counter colorDanger" : "counter"

    return(
        <p className={classnames}>{props.value}</p>
    )
}

export default Counter