import clock from "clock";
import { gettext } from "i18n";
import { FitFont } from "fitfont"
import { preferences } from "user-settings"


import { week_month_standard } from "../utils/datesUtilities"

const date_info = new FitFont({ id: 'date_info', font: 'Kaushan_Script_20', halign: 'middle' })
const time = new FitFont({ id: 'time', font: 'Kaushan_Script_100', halign: 'middle' })

let { clockDisplay } = preferences

time.style.opacity = 0.8
date_info.style.opacity = 0.7

const renderClock = () => {
    // Clock
    clock.granularity = "minutes";
    
    clock.ontick = (evt) => {
        let hours = evt.date.getHours();
        let minutes = evt.date.getMinutes() < 10 ? "0" + evt.date.getMinutes() : evt.date.getMinutes();
    
        if(clockDisplay ==="12h" && hours > 12 ){
            hours -= 12
        }
        hours = hours < 10 ? '0' + hours : hours
        
        time.text = `${hours}:${minutes}`

        let date = new Date();
        let dayOfWeek = week_month_standard.week_day[date.getDay()];
        let month = week_month_standard.monthsShort[date.getMonth()]
        let days = date.getDate();

        date_info.text = `${gettext(dayOfWeek).toUpperCase()}, ${("0" + days).slice(-2)} ${gettext(month).toUpperCase()}`;

    }
}

export { renderClock }