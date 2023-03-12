let countsValue = document.getElementById("counts-value")
let countsBtn = document.getElementById("counts-btn")
let countsSave = document.getElementById("counts-save")
let countsAlert = document.getElementById("counts-alert")
let savedCounts = document.getElementById("saved-counts")

let count = 0

countsBtn.addEventListener("click", function(){
    count += 1
    countsValue.textContent = count
    return count
})

countsSave.addEventListener("click", function(){
    savedCounts.textContent += count + " - "
    count = 0
    countsValue.textContent = 0
    return count
})

// if (count = 33) {
//     countsAlert.textContent = "You have made 33 counts"
// } else if (count = 100) {
//     countsAlert.textContent = "You have made 100 counts"
// } else {
//     countsAlert.textContent = ""
// }