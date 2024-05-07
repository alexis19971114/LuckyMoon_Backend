import {analyze} from "./analyze.js";
import {connectDB} from "./config/db.js";
import {update} from "./update.js";
// import {io} from "./global/socketIO.js";

const main = async () => {
  // Add timestamp to all subsequent console.logs
  // One little two little three little dependency injections....
  const origLog = console.log;
  console.log = function (obj, ...placeholders) {
    if (typeof obj === "string")
      placeholders.unshift("[" + new Date().toISOString() + "] " + obj);
    else {
      // This handles console.log( object )
      placeholders.unshift(obj);
      placeholders.unshift("[" + new Date().toISOString() + "] %j");
    }

    origLog.apply(this, placeholders);
  };

  connectDB();

  // analyze();
  // update();
};

main();
