import { MenuItem } from "../Components/atoms/MenuItem";
import { Platform } from "react-native";
// import { ProfileMenu } from './ProfileMenu';
// import { SearchIcon } from '../components/molecules/SearchIcon/SearchIcon';
import { Stack, XStack } from "tamagui";
import { useSegments } from "expo-router";
import AnchoredImage from "./AnchoredImage";
import { maxBreakpoints } from "../constants/Constants";
import areEqual from "../utils/MemoFunction";

import { useWindowDimensions } from "react-native";

import React, { useContext } from "react";

function isSubScreen(
  items: {
    screen: string;
    title: string;
    popupItems?: { screen: string; title: string }[];
  }[],
  name: string
) {
  const screenStrings: any = [];
  items.map((item) =>
    item.popupItems
      ? item.popupItems.map((subScreen) => screenStrings.push(subScreen.screen))
      : screenStrings.push(item.screen)
  );
  return screenStrings.includes(`/${name}`);
}

function Header() {
  const segments = useSegments();
  const firstSegment = segments[0];
  const pathname = segments.join("/");
  const first =
    (typeof firstSegment === "string" && firstSegment.includes("missing")) ||
    (pathname.includes("admin") && !pathname.includes("(admin)"))
      ? "(app)"
      : firstSegment;

  const { width } = useWindowDimensions();

  const onboardingScreen =
    Platform.OS === "web" && pathname === `./`;
  const assetScreen = Platform.OS === "web" && pathname === `${first}/asset`;
  const planScreens = [
    `${first}/plan`,
    `${first}/plan/assets`,
    `${first}/plan/goals`,
    `${first}/plan/goals/add`,
    `${first}/plan/goals/add/car`,
    `${first}/plan/goals/add/home`,
    `${first}/plan/goals/add/custom`,
    `${first}/plan/goals/add/education`,
    `${first}/plan/goals/add/retirement`,
    `${first}/plan/goals/add/vacation`,
  ];

  const dashboardArray = [{ screen: `/${first}/asset`, title: `Assets` }];
  const investmentsArray = [
    { screen: `/${first}/investment`, title: "All Investments" },
    { screen: `/${first}/investment/holdings`, title: "Holdings" },
    { screen: `/${first}/investment/transactions`, title: "Transactions" },
    { screen: `/${first}/investment/insights`, title: "Insights" },
    { screen: `/${first}/invest/create`, title: "Invest more" },
  ];

  return (
    <Stack $xl={{ alignSelf: "center" }}>
      <XStack
        justifyContent="space-between"
        px="$3.5"
        pt="$3.5"
        width="100%"
        $xl={{ width: maxBreakpoints.xl }}
        alignItems="center"
      >
        <AnchoredImage
          source={require("../assets/images/icon.png")}
          $sm={{ maxWidth: 110, maxHeight: 48 }}
          $md={{ maxWidth: 140, maxHeight: 61 }}
          portfolioScreen={true}
          linkProps={{ href: "./" }}
          href={`/`}
        />
        <XStack
          alignItems="center"
          justifyContent="space-evenly"
          $md={{ flex: 1 }}
          maxWidth={"40%"}
        >
          <MenuItem
            title="Home"
            screen={`/`}
            isSelected={isSubScreen(dashboardArray, pathname)}
            routeName={pathname}
            popoverContentProps={{ maxWidth: "$13" }}
          />
          <MenuItem
            title="Admin"
            screen={`/Admin`}
            isSelected={isSubScreen(dashboardArray, pathname)}
            routeName={pathname}
            popoverContentProps={{ maxWidth: "$13" }}
          />
          <MenuItem
            title="Company"
            screen={`/${first}/banks`}
            isSelected={isSubScreen(dashboardArray, pathname)}
            routeName={pathname}
            popoverContentProps={{ maxWidth: "$13" }}
          />
          <MenuItem
            title="Features"
            screen={`/${first}/banks`}
            isSelected={isSubScreen(dashboardArray, pathname)}
            routeName={pathname}
            popoverContentProps={{ maxWidth: "$13" }}
          />
          {/* <MenuItem title="Services" screen="" popupItems={investmentsArray} isSelected={isSubScreen(investmentsArray, pathname)} routeName={pathname} popoverContentProps={{ maxWidth: '$13' }} />
            <MenuItem title="Company" screen="" popupItems={investmentsArray} isSelected={isSubScreen(investmentsArray, pathname)} routeName={pathname} popoverContentProps={{ maxWidth: '$13' }} /> */}
          {/* <MenuItem title="Financial Plan" screen={`/${first}/plan`} isSelected={planScreens.includes(pathname)} routeName={pathname} /> */}
        </XStack>
        {/* <GradientButton
          style={{ alignSelf: width < 768 ? "center" : "flex-start" }}
        >
          {"For Company"}
        </GradientButton> */}
      </XStack>
    </Stack>
  );
}
export default React.memo(Header, areEqual);
