import { DateTime } from "../modules/luxon.min.js";

function todayDate() {
  const dt = DateTime.now();
  const dateformat = `${dt.day} - ${dt.month} - ${dt.year} (${dt.zoneName})`;
  document.getElementById("current-date").innerHTML = dateformat;
}

export { todayDate };
