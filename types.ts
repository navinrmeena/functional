import { LinkProps } from 'expo-router/build/link/Link';
import { TextStyle, ViewProps } from 'react-native';
import {
  TextProps,
  ColorTokens,
  DialogProps,
  YStackProps,
  StackProps,
  XStackProps,
  DialogContentProps,
  SheetProps,
  InputProps,
  ScrollViewProps,
  ButtonProps,
  ImageProps,
  PopoverProps,
  PopoverContentProps,
  PopoverArrowProps,
  DialogOverlayProps,
} from 'tamagui';

export type DesignerContext = {
  dispatch: React.Dispatch<{
    type: string;
    payload: any;
  }>;
  savedPortfolio: null | {
    initialAmount: string;
    sipAmount: string;
    recordNo?: string;
    funds: any[];
    portfolioName?: string;
    analysed?: boolean;
  };
  editMode: boolean;
  addableFunds: null | any[];
  allFunds: null | any[];
  allFundsValid: boolean;
  showAddFundModal: boolean;
  validatedValues: any;
  showModal: { show: boolean; invest: boolean };
  tradeableFunds: null | any[];
  filterProps: any;
  filteredFunds: null | any[];
  amcList: any[];
};

export type BankData = {
  fipId: string;
  fipName: string;
  fiTypes: string[];
  aliases: string[];
  imgUrl: string;
  subtitle?: string;
  shortName: string;
};

export type CustomTextProps = TextProps & {
  isLight?: boolean;
  isDark?: boolean;
  notchChange?: 1 | 2 | 3 | 'h1' | 'h2' | -2 | -1 | -3 | -4 | undefined;
  orange?: boolean;
  linkProps?: LinkProps;
  hover?: boolean | 'black' | 'orange' | 'green' | undefined;
  hoverColor?: ColorTokens;
  error?: boolean;
  success?: boolean;
};

export type TopSectionProps = YStackProps & {
  heading: string;
  highlightedHeading?: string;
  subtitle?: string;
  DescComponent?: () => JSX.Element;
  buttonText: string;
  route: string;
  imgSrc?: string;
  imgProps?: Omit<ImageProps, 'source'>;
  download?: boolean;
  subheading?: string;
};

export type ComponentTitleProps = YStackProps & {
  title: string;
  subtitle?: string;
};

export type ExpandCardProps = YStackProps & { title: string; subtitle?: string; noFlex?: boolean };

export type TableTextProps = { name: string; value: string; color: ColorTokens };

export type SlicedPieChartProps = StackProps & {
  data: any;
  title?: string;
  legendEnabled?: boolean;
  labelsEnabled?: boolean;
  pieProps?: any;
  legendProps?: any;
  chartProps?: any;
  showOnlyPercentage?: boolean;
  disableLegends?: boolean;
  canExpand?: boolean;
  textProps?: CustomTextProps;
};

export type SlicedPieLabelsProps = XStackProps & {
  chartData: any;
  legendEnabled?: boolean;
  disableLegends?: boolean;
  chartProps?: any;
  ChartColorArray: string[];
  showOnlyPercentage?: boolean;
  textProps?: CustomTextProps;
  sum: any;
  native?: boolean;
};

export type BarSectionProps = YStackProps & {
  title?: string;
  subtitle?: string;
  infoText?: string;
  data: any;
  infoData?: any;
  topDetails?: any;
  isBackgroundDark?: boolean;
  colorArray?: string[];
  canExpand?: boolean;
  popup?: boolean
};

export type ModalProps = DialogProps & {
  showModal: boolean | undefined;
  setShowModal: any;
  sheetProps?: SheetProps;
  title?: string;
  description?: string;
  contentProps?: DialogContentProps;
  dark?: boolean;
  noAdapt?: boolean;
  close?: boolean;
  hidePopupClose?: boolean;
  overlayProps?: DialogOverlayProps;
};

export type CustomInputProps = InputProps & { number?: boolean; phnNumber?: boolean; control?: any; rules?: any; name?: string; isUpper?: boolean; dark?: boolean; inputRef?: any; numberFormat?: boolean };

export type InputWithElementProps = CustomInputProps & { LeftElement?: () => JSX.Element; RightElement?: () => JSX.Element; stackProps?: XStackProps };

export type PageWrapperProps = YStackProps & {
  seoTitle?: string;
  seoDescription?: string;
  url?: string;
  scrollProps?: any;
  noFooter?: boolean;
  stackProps?: StackProps;
  popup?: boolean | undefined;
  showImport?: boolean;
  showNotification?: boolean;
  noRefresh?: boolean;
  refreshFunc?: (setRefreshing: React.Dispatch<React.SetStateAction<boolean>>) => any;
};

export type HomeWrapperProps = StackProps & { seoTitle?: string; seoDescription?: string; url?: string };

export type FieldInputProps = InputProps & {
  title?: string;
  error?: any;
  errorText?: string;
  noError?: boolean;
  notRequired?: boolean;
  number?: boolean;
  control?: any;
  rules?: any;
  name: string;
  isUpper?: boolean;
  dark?: boolean;
  loadingData?: boolean;
  textProps?: TextProps;
  stackProps?: YStackProps;
};

export type InputWithSearchProps = FieldInputProps & {
  isLoading?: boolean;
  onPress?: any;
  icon?: string;
};

export type CustomButtonProps = ButtonProps & { to?: any; isLoading?: boolean; isLoadingText?: string; isDisabled?: boolean; linkProps?: LinkProps };

export type FundProps = {
  MStarID: string;
  ISIN: string;
  Name: string;
  BroadCategoryGroup: string;
  FundLevelCategory: string;
  ThreeYrReturn: string;
  FiveYrReturn: string;
  NAV: string;
  AUM: string;
  Rating: string;
  SIP: string;
  Amount: string;
  IndianRiskLevel: string;
  CurrentValue: string;
  min_initial_investment: number;
  min_additional_investment: number;
  additional_investment_multiples: number;
  initial_investment_multiples: number;
  max_initial_investment: number;
  max_additional_investment: number;
  sip_allowed: any;
  purchase_allowed: any;
  sip_frequency_specific_data: any;
};

export type ProgressLgProps = { completedSteps: string[]; name: string; items: { name: string; route: string; disabled?: boolean }[]; params?: any; navigation?: any };
export type CustomSelectProps = {
  buttonStyle?: ViewProps;
  headerText?: string;
  buttonTextStyle?: TextStyle;
  control?: any;
  small?: boolean;
  name?: string;
  items: string[];
  dark?: boolean;
  search?: boolean;
  stackRef?: any;
  value?: string;
  setValue?: any;
  stackWidth?: number | string;
  selectedTextProps?: CustomTextProps;
  iconProps?: any;
  CustomText?: (props: CustomTextProps & { prefix?: string }) => JSX.Element;
};
export type CustomPopoverProps = Omit<PopoverProps, 'open' | 'onOpenChange'> & {
  open?: boolean;
  onOpenChange?: any;
  contentProps?: PopoverContentProps;
  noArrow?: boolean;
  noAdapt?: boolean;
  arrowProps?: PopoverArrowProps;
  sheetProps?: SheetProps;
  Trigger?: JSX.Element;
};
export type BottomSheetsProp = {
  children:any,
  open: boolean | undefined;
  onOpenChange: any;
  snapPoints?: string[];
  scroll?: boolean | undefined;
  scrollRef?: any;
  wholeBg?: string;
  scrollProps?: any;
  indicatorProps?: any;
  backgroundProps?: any;
  preventClose?: boolean;
};