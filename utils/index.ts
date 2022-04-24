export const isElectron = () =>
  typeof navigator !== "undefined" &&
  navigator.userAgent.toLowerCase().indexOf(" electron/") > -1;
