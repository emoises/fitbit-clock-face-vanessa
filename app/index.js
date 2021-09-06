import document from "document";
import { me as device } from "device";
import { battery } from "power";
import { FitFont } from "fitfont";
import { display } from "display";
import { primaryGoal} from 'user-activity';
import * as simpleSettings from "./simple/device-settings";
import { renderActivities } from './simple/simple_activities';
import { renderClock } from './simple/simple_renderClock';
import { renderHeartSensor } from './simple/simple_heartSensor';
import init_render from './simple/simple_orientation';
import { batteryUpdate } from './simple/simple_battery';
import { activities } from './utils/datesUtilities';

import { me as appbit } from "appbit";

const text_bpm = new FitFont({ id: 'text_bpm', font: 'Secular_One_14', halign: 'middle' });

const statsCyle = document.getElementById("statsCyle");
const items = statsCyle.getElementsByClassName("cycle-item");

let background_control_black = document.getElementById("background_control_black");
let background_control_white = document.getElementById("background_control_white");

text_bpm.text = "BPM"

let root = document.getElementById("root");
let background_img = document.getElementById("background_img");
let watch_arcs = document.getElementsByTagName("arc");

// let touchable = document.getElementById('touchable');

// touchable.addEventListener('click', () => {
//     console.log('Hello Touch');
// });

let { width , height } = device.screen;

// Primary Goal icon and arc
background_img.href = width !== height ? "assets/ionic_bike.png" : "assets/versa_bike.png";
background_img.width = width;
background_img.height = height;

background_control_black.width = width;
background_control_black.height = height;
background_control_white.width = width;
background_control_white.height = height;

watch_arcs.forEach((arc) => {
    arc.height = width * 25 / 100
    arc.y = width !== height ? height * 65 / 100 : height * 70 / 100
});


let initialPrimaryGoal = 'steps'

function setCycleDisplay(){
    if(primaryGoal === initialPrimaryGoal){ return}
    let idx = activities.indexOf(primaryGoal);
    initialPrimaryGoal = primaryGoal
    items[idx].style.display = 'none';


}


setInterval(() => {
    setCycleDisplay();
    renderActivities(statsCyle, items);
}, 10000);

renderClock();
renderHeartSensor();
init_render();

//Battery 
battery.addEventListener('change', batteryUpdate);

function onDisplayChange(){
simpleSettings.initialize(settingsCallback);

    if (display.aodAvailable && appbit.permissions.granted('access_aod')) {

        display.addEventListener("change", (evt) => {
            let animation_in = document.getElementById("animation_in");
            // let animation_out = document.getElementById("animation_out")

                if (!display.aodActive && display.on) {
                    animation_in.animate("load");
                    hrm.start();

                } else {
                    time.style.display = "inline"
                    hrm.stop()
                };
        });
    };
};


function settingsCallback(data) {
    if (!data) {
        return;
    };

    if (data.color_theme) {
        root.style.fill = data.color_theme;
    };
    
    if (data.black_slider) {
        background_control_black.style.opacity = data.black_slider
    };

    if (data.white_slider) {
        background_control_white.style.opacity = data.white_slider;
    };

}

onDisplayChange();