import document from 'document';
import { battery } from 'power';

const battery_text = document.getElementById('battery_text');
const battery_control = document.getElementById('battery_control');

const batteryUpdate = () => {
  battery_control.width = (battery.chargeLevel * 20) / 100;
  battery_text.text = `${battery.chargeLevel}%`;
};

export { batteryUpdate }