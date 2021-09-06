import document from 'document'
import { FitFont } from "fitfont"
import { HeartRateSensor } from 'heart-rate';

let heart_rate = document.getElementById("heart_rate")
const heart_beat = new FitFont({ id: 'heart_beat', font: 'Secular_One_18', halign: 'middle' })
let hrm

const renderHeartSensor = () => {
    if (HeartRateSensor) {
        // console.log("This device has a HeartRateSensor!");
        hrm = new HeartRateSensor();
        hrm.addEventListener("reading", () => {
            // console.log(`Current heart rate: ${hrm.heartRate}`);
            heart_beat.text = hrm.heartRate;
            heart_rate.sweepAngle = hrm.heartRate - 50 < 0 ? 5 : (hrm.heartRate - 50) / 170 * 280
        });
        hrm.start();
    } else {
        console.log("This device does NOT have a HeartRateSensor!");
    }
    return hrm
}

export { renderHeartSensor }