import { couple, event, venue } from "./invitation";

// 09:34 IST = 04:04Z. The brief gives no end time; 13:00 IST covers breakfast and lunch.
export const CAL_START = "20261120T040400Z";
export const CAL_END = "20261120T073000Z";
export const calTitle = `${couple.names} · Engagement`;
export const calDetails = `Muhurtham at 09:34 AM IST, Karthika Shuddha Ekadashi.\nFollowed by ${event.followedBy.toLowerCase()}.\nDirections: ${venue.directions}`;

export const googleCalendarUrl = `https://calendar.google.com/calendar/render?${new URLSearchParams({
  action: "TEMPLATE",
  text: calTitle,
  dates: `${CAL_START}/${CAL_END}`,
  ctz: "Asia/Kolkata",
  details: calDetails,
  location: venue.full,
}).toString()}`;
