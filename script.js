const makeCalendar = (month) => {
    let numDays = 1;

    switch(month){
        case "february":
            numDays = 28;
            break;
        case "april":
        case "june":
        case "september":
        case "november":
            numDays = 30;
            break;
        default:
            numDays = 31;
    }

    let monthDiv = document.getElementById("month");
    monthDiv.innerHTML = month;

    for (i = 1; i <= numDays; i++){
        // Create day as a-tag; create text node; append text node to a-tag
        let day = document.createElement("a");
        let node = document.createTextNode(i);
        day.href = '/';
        day.appendChild(node);

        // Append a-tag as a child to calendar div in HTML
        let calendar = document.getElementById("calendar");
        calendar.appendChild(day);
    }
}

const selectThis = elem => {
    const navItems = document.getElementsByClassName("navitem");
    for(let i = 0; i < navItems.length; i++){
        navItems[i].classList.remove("selected");
    }
    elem.classList.add("selected");
}