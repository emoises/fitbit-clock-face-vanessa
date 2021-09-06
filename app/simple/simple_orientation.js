import { OrientationSensor } from "orientation";

const init_render = () => {
    if (OrientationSensor) {
      const orientation = new OrientationSensor({ frequency: 60 });
      orientation.addEventListener("reading", () => {
        console.log(
          `Orientation Reading: \
          timestamp=${orientation.timestamp}, \
          [${orientation.quaternion[0]}, \
          ${orientation.quaternion[1]}, \
          ${orientation.quaternion[2]}, \
          ${orientation.quaternion[3]}]`
        );
      });
      orientation.start();
    }
}

export  default init_render ;