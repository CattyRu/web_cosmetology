const el = document;

// set date on date_display
const date = new Date();
const btnDateDisplay = el.getElementById('date_display');
btnDateDisplay.textContent = date.toLocaleDateString();


