function Logs({ logs }) {
    return(
        <div>
            <h2>Логи:</h2>
            {logs.map(log => (
                <div key={log.id}>
                    <p>Действие: {log.action}</p>
                    <p>Предыдущее значение: {log.prevValue}</p>
                    <p>Значение: {log.value}</p>
                </div>
            ))}
        </div>
    )
}

export default Logs