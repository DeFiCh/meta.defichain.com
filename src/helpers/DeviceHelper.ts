import { UAParser } from "ua-parser-js";

interface GetDeviceTypeResult {
  isMobile?: boolean;
  isTablet?: boolean;
}

export default function getDeviceType(): GetDeviceTypeResult {
  const navigator = getNavigatorInstance();
  if (!navigator) {
    return {};
  }

  const parser = new UAParser(navigator.userAgent);
  const deviceFromUserAgent = parser.getDevice();
  return {
    isMobile: deviceFromUserAgent.type === "mobile",
    isTablet: deviceFromUserAgent.type === "tablet",
  };
}

const getNavigatorInstance = () => {
  if (typeof window !== "undefined") {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }
  return false;
};
