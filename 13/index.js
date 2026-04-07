const inputEl = document.getElementById("input-box")
const btnEl = document.getElementById("btn")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

const METER_TO_FEET = 3.28084
const LITER_TO_GALLON = 0.264172
const KG_TO_POUND = 2.20462

function format(n) {
    return Number(n).toFixed(2)
}

function updateConversions() {
    const raw = parseFloat(inputEl.value)
    if (!isFinite(raw)) {
        lengthEl.textContent = "Please enter a valid number."
        volumeEl.textContent = "Please enter a valid number."
        massEl.textContent = "Please enter a valid number."
        return
    }

    const metersToFeet = format(raw * METER_TO_FEET)
    const feetToMeters = format(raw / METER_TO_FEET)

    const litersToGallons = format(raw * LITER_TO_GALLON)
    const gallonsToLiters = format(raw / LITER_TO_GALLON)

    const kilosToPounds = format(raw * KG_TO_POUND)
    const poundsToKilos = format(raw / KG_TO_POUND)

    lengthEl.textContent = `${raw} meters = ${metersToFeet} feet | ${raw} feet = ${feetToMeters} meters`
    volumeEl.textContent = `${raw} liters = ${litersToGallons} gallons | ${raw} gallons = ${gallonsToLiters} liters`
    massEl.textContent = `${raw} kilos = ${kilosToPounds} pounds | ${raw} pounds = ${poundsToKilos} kilos`
}

btnEl.addEventListener("click", updateConversions)

// support pressing Enter in the input
inputEl.addEventListener("keydown", function(e) {
    if (e.key === 'Enter') updateConversions()
})

// initialise on load
updateConversions()

