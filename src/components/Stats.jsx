import { calculateCoffeeStats, calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getTopThreeCoffees, statusLevels } from "../utils"

// Local scope component
function StatCard(props){
    // Here, large and title are passed when calling the component
    // Children is everything inside the <StatCard> tags
    const { large, title, children } = props
    return (
        <div className={"card stat-card " + (large ? "col-span-2 " : "")}>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default function Stats() {
    // Object with example data
    const stats = calculateCoffeeStats(coffeeConsumptionHistory)

    const caffeineLevel = calculateCurrentCaffeineLevel(coffeeConsumptionHistory)
    const warningLevel = caffeineLevel < statusLevels['low'].maxLevel ? 'low' :
                         caffeineLevel < statusLevels['moderate'].maxLevel ? 'moderate' : 'high'


    return (
        <>
            <div className="section-header">
                <i className="fa-solid fa-chart-simple"/>
                <h2>Stats</h2>
            </div>
            <div className="stats-grid">
                <StatCard title="Active caffeine level" large>
                    <div className="status">
                        <p><span className="stat-text">{caffeineLevel} mg</span></p>
                        <h5 style={{color: statusLevels[warningLevel].color, 
                            background: statusLevels[warningLevel].background}}>{warningLevel}</h5>
                    </div>
                    <p>{statusLevels[warningLevel].description}</p>
                </StatCard>
                <StatCard title="Daily caffeine">
                    <div className="status">
                        <p><span className="stat-text">{stats.daily_caffeine} mg</span></p>
                    </div>
                </StatCard>
                <StatCard title="Average coffees/day">
                    <div className="status">
                        <p><span className="stat-text">{stats.average_coffees}</span></p>
                    </div>
                </StatCard>
                <StatCard title="Daily cost (€)">
                    <div className="status">
                        <p><span className="stat-text">{stats.daily_cost} €</span></p>
                    </div>
                </StatCard>
                <StatCard title="Total cost (€)">
                    <div className="status">
                        <p><span className="stat-text">{stats.total_cost} €</span></p>
                    </div>
                </StatCard>
                <table className="stat-table">
                    {/* Head of the table */}
                    <thead>
                        {/* Row */}
                        <tr>
                            {/* Columns */}
                            <th>Coffee Name</th>
                            <th>N° of Purchase</th>
                            <th>Percentage of total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getTopThreeCoffees(coffeeConsumptionHistory).map((coffee, coffeeIndex) => {
                            return (
                                <tr key={coffeeIndex}>
                                    <td>{coffee.coffeeName}</td>
                                    <td>{coffee.count}</td>
                                    <td>{coffee.percentage}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )

}