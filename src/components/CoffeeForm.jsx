import { coffeeOptions } from "../utils"
import { useState } from 'react'
import Modal from "./Modal"
import Authentication from "./Authentication"

export default function CoffeeForm(props) {
    const { isAuthenticated } = props
    const [ showModal, setShowModal ] = useState(false)
    const [ selectedCoffee, setSelectedCoffee ] = useState(null)
    const [ showCoffeeTypes, setShowCoffeeTypes ] = useState(false)
    const [ coffeeCost, setCoffeeCost ] = useState(0)
    const [ hourSince, setHourSince ] = useState(0)
    const [ minuteSince, setMinuteSince ] = useState(0)

    function handleSubmitForm() {
        if (!isAuthenticated) {
            setShowModal(true)
            return
        }
        console.log(selectedCoffee, hourSince, minuteSince)
    }

    return (
        <>
            {showModal && (
                <Modal handleCloseModal={() => {setShowModal(false)}}>
                    <Authentication/>
                </Modal>
            )}
            <div className="section-header">
                <i className="fa-solid fa-pencil"></i>
                <h2> Start Tracking Today </h2>
            </div>
            <h4>Select coffee type</h4>
            <div className="coffee-grid">
                {/* Display the first 5 options of the array, the rest will be in an additional menu */}
                {coffeeOptions.slice(0, 5).map((option, optionIndex) => {
                    return (
                        // If the button is selected, change its style to highlight it
                        <button className={"button-card " + (option.name === selectedCoffee ? 'coffee-button-selected' : ' ')} key={optionIndex} onClick={() => {
                            // On click, set the flag to select the current coffee
                            setSelectedCoffee(option.name)
                            // Also disable the additional menu
                            setShowCoffeeTypes(false)
                        }}>
                            <h4>{option.name}</h4>
                            <p>{option.caffeine}mg</p>
                        </button>
                    )
                })}
                {/* Add the button for the additional menu */}
                <button className={"button-card " + (showCoffeeTypes ? 'coffee-button-selected' : ' ')} onClick={() => {
                    // Set the flag to display the menu
                    setShowCoffeeTypes(true)
                    // Reset the choice of coffee to the placeholder value
                    setSelectedCoffee(null)
                }}>
                    <h4>Other</h4>
                    <p>N/A</p>
                </button>
            </div>
            {/* If the flag is set, display the menu */}
            {showCoffeeTypes && (
                // When even happens (something is selected), set the selected coffee
                <select onChange={(event) => {
                    setSelectedCoffee(event.target.value)
                }} id="coffee-list" name="coffee-list">
                {/* What the button displayif no option chosen */}
                <option value={null}>Select Type</option>
                {/* Display the rest of the array (from 5 to end) */}
                {coffeeOptions.slice(5).map((option, optionIndex) => {
                    return (
                        <option value={option.name} key={optionIndex}>{option.name} ({option.caffeine}mg)</option>
                    )
                })}
            </select>)}
            <h4>Add the cost (€)</h4>
            <input value={coffeeCost} className="w-full" type="number" placeholder="3.5" onChange={(event) => {
                setCoffeeCost(event.target.value)
            }}/>
            <h4>Time since consumption</h4>
            <div className="time-entry">
                <div>
                    <h6>Hours</h6>
                    <select id="hours-select" value={hourSince} onChange={(event) => {
                     setHourSince(event.target.value) }}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((hour, hourIndex) => {
                            return (
                                <option key={hourIndex} value={hour}>{hour}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <h6>Minutes</h6>
                    <select id="mins-select" value={minuteSince} onChange={(event) => {
                     setMinuteSince(event.target.value) }}>
                        {[0, 10, 15, 20, 30, 45].map((minute, minuteIndex) => {
                            return (
                                <option key={minuteIndex} value={minute}>{minute}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <button onClick={handleSubmitForm}>
                <p>Add the entry</p>
            </button>

        </>
    )

}