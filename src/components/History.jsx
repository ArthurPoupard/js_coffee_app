import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getCaffeineAmount, timeSinceConsumption } from "../utils";

export default function History() {

    return (
        <>
            <div className="section-header">
                <i className="fa-solid fa-timeline"/>
                <h2>History</h2>
            </div>
            <p><i>Hover for more information</i></p>
            <div className="coffee-history">
                {Object.keys(coffeeConsumptionHistory).sort((a, b) => b - a).map((utcTime, utcIndex) => {
                    
                    // Get various info to display on hover
                    const coffee = coffeeConsumptionHistory[utcTime]
                    const timeSinceConsumed = timeSinceConsumption(utcTime)
                    const originalAmount = getCaffeineAmount(coffee.name)
                    const remainingAmount = calculateCurrentCaffeineLevel({ [utcTime]: coffee })
                    
                    // Construct the string that will be displayed
                    const summary = `${coffee.name} | ${coffee.cost}€ | ${timeSinceConsumed} | ${remainingAmount}/${originalAmount}mg`

                    return (
                        // Title displays on hover
                        <div title={summary} key={utcIndex}>
                            <i className="fa-solid fa-mug-hot"/>
                        </div>
                    )
                })}
            </div>
        </>
    )

}