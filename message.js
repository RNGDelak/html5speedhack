//paste this into dev console after pasting the speedhack.js
//adjust the speed and booleans for your purposes

window.postMessage({
  command: "setSpeedConfig",
  config: {
    speed: 10,
    cbSetIntervalChecked: true,
    cbSetTimeoutChecked: true,
    cbPerformanceNowChecked: true,
    cbDateNowChecked: true,
    cbRequestAnimationFrameChecked: true
  }
});
