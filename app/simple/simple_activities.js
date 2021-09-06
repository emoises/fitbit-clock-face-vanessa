import document from "document";
import { goals, today, primaryGoal } from 'user-activity';
import { goalSettings, activities } from '../utils/datesUtilities';
import {  locale } from "user-settings";
import { me as appbit } from "appbit";

let arc_goal = document.getElementById('arc_goal');
let goalIcon = document.getElementById('img_goal');

//cicle items
const steps_text = document.getElementById("steps_text");
const dist_text = document.getElementById("dist_text");
const cals_text = document.getElementById("cals_text");
const elev_text = document.getElementById("elev_text");
const azm_text = document.getElementById("azm_text");
const text_primary_goal = document.getElementById("text_primary_goal");



let cycleValue, cycleGoal, idx_cycle, arc_goal_secondary;


const renderActivities = (statsCyle, items) => {
    let filteredActivities = activities.filter( activity => {
        return activity !== primaryGoal 
    })
    let idx = activities.indexOf(primaryGoal);

    
    console.log(filteredActivities);

    arc_goal_secondary = document.getElementById('arc_goal_secondary');

  idx_cycle = statsCyle.value;

  if (appbit.permissions.granted('access_activity')) {
    goalIcon.href = goalSettings[primaryGoal].path;

    cycleValue =
      filteredActivities[idx_cycle] === 'activeZoneMinutes'
        ? today.local[filteredActivities[idx_cycle]].total
        : today.local[filteredActivities[idx_cycle]];

    cycleGoal =
      filteredActivities[idx_cycle] === 'activeZoneMinutes'
        ? goals[filteredActivities[idx_cycle]].total
        : goals[filteredActivities[idx_cycle]];

    if (primaryGoal !== 'activeZoneMinutes') {
      text_primary_goal.text = today.local[primaryGoal]
        ? today.local[primaryGoal].toLocaleString(locale)
        : '-';

      arc_goal.sweepAngle =
        goals[primaryGoal] >= today.local[primaryGoal]
          ? (today.local[primaryGoal] / goals[primaryGoal]) * 280
          : 280;
    } else {
      text_primary_goal.text = today.local[primaryGoal].total
        ? today.local[primaryGoal].total.toLocaleString(locale)
        : '-';

      arc_goal.sweepAngle =
        goals[primaryGoal].total >= today.local[primaryGoal].total
          ? (today.local[primaryGoal].total / goals[primaryGoal].total) * 280
          : 280;
    }

    steps_text.text = today.local.steps.toLocaleString(locale);
    dist_text.text = today.local.distance.toLocaleString(locale);
    cals_text.text = today.local.calories.toLocaleString(locale);
    elev_text.text = today.local.elevationGain.toLocaleString(locale);
    azm_text.text = today.local.activeZoneMinutes.total.toLocaleString(locale);
    arc_goal_secondary.sweepAngle =
      cycleValue < cycleGoal ? (cycleValue / cycleGoal) * 280 : 280;
  }
  // console.log('_______________________________________________________________');
  // console.log('statsCyle');
  // console.log(items[0].value);
  // console.log('_______________________________________________________________');
  let teste = items[0].text.value;
  console.log(`Index: ${filteredActivities[statsCyle.value]}`);
  console.log(`Value: ${cycleValue}`);
  console.log(`Goal: ${cycleGoal}`);
};

export { renderActivities }