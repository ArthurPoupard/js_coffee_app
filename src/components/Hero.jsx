export default function Hero() {

    return (
        <>
            <h1> Coffee tracking for coffee <abbr title="It means addict">fiends</abbr></h1>
            <div className="benefits-list">
                <h3 className="font-bolder">
                     Try <span className="text-gradient">Caffiend</span> and start...
                </h3>
                <p>✅ Tracking every coffee</p>
                <p>✅ Measuring your blood caffeine levels</p>
                <p>✅ Costing and quanitifying your addiction</p>
            </div>
            <div className="card info-card">
                <div>
                    <i className="fa-solid fa-circle-info"></i>
                    <h3>Did you know...</h3>
                </div>
                {/* &apos; to get a ' */}
                <h5>That caffeine&apos;s half-life is about 5 hours?</h5>
                    <p>This means that after 5 hours, half the caffeine you consumed is still in your system</p>
            </div>
        </>
    )

}