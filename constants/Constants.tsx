import xdate from 'xdate';


export const FINVU_CALL_RETRY_COUNT = 2;

export const maxBreakpoints = {
  xl: 1366,
};

export const ResetContextValue = {
  allDatasetsReceived: false,
  appUpdate: null,
  currentUser: '',
  data: null,
  Email: '',
  enabledFeatures: null,
  family: [],
  goals: null,
  financialPlanProcessID: null,
  financialPlanMessage: null,
  financialProjection: [],
  FirstName: '',
  hasFamily: false,
  hasFamilyInvestments: false,
  hideDiscovery: false,
  holdingMStarIDs: null,
  investorsAdmin: [],
  isAdmin: false,
  isAdminMode: false,
  isChartLoading: true,
  isGoalsLoading: false,
  LastName: '',
  noOfUsersAdmin: undefined,
  notificationData: [],
  ordersAdmin: [],
  receivedNotifications: [],
  savedPortfolios: null,
  transactionCategories: [],
  userInContext: '',
  usersListAdmin: [],
  userStatus: 'unauthenticated',
  world: null,
  newUserModal: {
    show: undefined,
    route: undefined,
  },
  dispatch: (props: any) => {
    // Function initialization
  },
  webSocket: null,
  startWSS: false,
  isWebSocketOpened: false,
  currentDiscoveredAccountCounter: 0,
  totalFips: 0,
  allDiscovered: false,
  finvu: {
    phnNumber: '',
    userId: '',
    otpRef: '',
    sid: '',
    consentHandleId: '',
    isLoading: false,
    resetMode: false,
    incorrectOtp: false,
    errorPage: false,
    PAN: '',
    token: '',
    consentPayload: {},
    accountLinkingRefNumber: ' ',
    discoveryMode: false,
    linkedAccounts: [],
    linkCheckIds: [],
    cachedAccounts: null,
    totalDiscoveredAccounts: 0,
    fipList: [],
    mfcList: [],
    currentDiscoveringFip: '',
    fipDetails: {},
    pendingAccounts: [],
    midTimeouts: {},
    errors: {},
  },
};

export const isHomeRoute = () => ['/', '/product', '/about', '/contactus', '/privacy', '/terms', '/learnportfoliocheckup'].includes(window.location.pathname);

export const popularSearches = ['SBI', 'HDFC', 'ICICI', 'Quant', 'Motilal Oswal'];


export const DOBManipulation = (val: string, value: string, onChange: any) => {
  if (val.length > value.length) {
    if (val.replace('-', '').length === 6 || val.length === 4) onChange(`${val}-`);
    else if ((val.length === 5 && !val.includes('-')) || (val.length === 8 && val.slice(-2) !== '-')) onChange(`${val.slice(0, -1)}-${val.slice(-1)}`);
    else onChange(val);
  } else if (val[val.length - 1] === '-') onChange(val.slice(0, -1));
  else onChange(val);
};

export const formatString = (value: string) => {
  if (value?.trim() === '') return '';
  if (['NRO', 'NRE'].includes(value)) return value;
  if (!value) return '';
  const result = value.split(' ').map((item) => (item[0] ? item[0].toUpperCase() : '') + item.slice(1).toLowerCase());

  return result.join(' ');
};

export const navigateOnAuth = (userStatus: any, screen: any = '/', params: any = undefined) => {
  let nextScreenParams = {};

  if (params) nextScreenParams = { nextScreenParams: JSON.stringify(params) };

  if (userStatus === 'authenticated') return { pathname: screen, params };
  else if (userStatus === 'unauthenticated') return { pathname: '/login', params: { nextScreen: screen, ...nextScreenParams } };

  if (userStatus === '') {
    const statusInterval = setInterval(() => {
      if (!userStatus) return;

      if (userStatus === 'authenticated') return { pathname: screen, params };
      else if (userStatus === 'unauthenticated') return { pathname: '/login', params: { nextScreen: screen, ...nextScreenParams } };
      clearInterval(statusInterval);
    }, 500);
  }

  return { pathname: '/', params: {} };
};

export const navigateLinkProps = (userStatus: string, screen = 'Portfolio', params: any = undefined) => {
  let nextScreenParams = {};

  if (params) nextScreenParams = { nextScreenParams: JSON.stringify(params) };

  if (userStatus === 'authenticated') return { screen, params };

  if (userStatus === 'unauthenticated') return { screen: 'Login', params: { nextScreen: screen, ...nextScreenParams } };

  if (userStatus === '') {
    const statusInterval = setInterval(() => {
      if (!userStatus) return;

      if (userStatus === 'authenticated') return { screen, params };

      if (userStatus === 'unauthenticated') return { screen: 'Login', params: { nextScreen: screen, ...nextScreenParams } };

      clearInterval(statusInterval);
    }, 500);
  }
};

export const getDestScreen = (userStatus: any, screen: any = 'Portfolio') => {
  if (userStatus === 'authenticated') return screen;

  if (userStatus === 'unauthenticated') return 'Login';
};

export const getColor = (referenceValue: number | undefined = undefined, isDarkBackground = true) => {
  if ((!referenceValue || referenceValue == 0) && isDarkBackground) return 'white';

  if (!referenceValue) return 'black';

  if (referenceValue === 0) return 'white';

  return referenceValue > 0 ? '$green' : '$red';
};

export const convertDate = (value: any) => {
  const date = new xdate(value).toString('yyyy-MM-d');

  return date;
};

export const partition = (array: any[], isValid: any) => array.reduce(([p, f]: any, elem: any) => (isValid(elem) ? [[...p, elem], f] : [p, [...f, elem]]), [[], []]);

export const splitArr = (arr: any[], size: number) => {
  if (arr === null || arr === undefined) return [];

  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
};
