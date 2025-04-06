import { useScreenType } from "./use-screen-type";

export function useIsMobileScreen() {
  const screenType = useScreenType();

  return screenType === "mobile" || screenType === "tablet";
}
