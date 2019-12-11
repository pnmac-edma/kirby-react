const kirbyConfig = () => {
  const baseApiUrl = 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/';
  // prettier-ignore
  const baseCogConUrl ='https://pennymac.onelogin.com/trust/saml2/http-post/sso/';

  const envSettings = {
    prd: {
      hostname: 'kirby.pennymac.com',
      apiUrl: `${baseApiUrl}prod`,
      cognitoUrl: `${baseCogConUrl}965273`,
      consoleUrl: `${baseCogConUrl}965275`
    },
    stg: {
      hostname: 'd14zq0f3jiu0zb.cloudfront.net',
      apiUrl: `${baseApiUrl}stg`,
      cognitoUrl: `${baseCogConUrl}964944`,
      consoleUrl: `${baseCogConUrl}965269`
    },
    dev: {
      hostname: 'd1n1yc8ym1y64x.cloudfront.net',
      apiUrl: 'https://kirby-api.execute-api.us-west-2.amazonaws.com/dev',
      cognitoUrl: `${baseCogConUrl}877995`,
      consoleUrl: `${baseCogConUrl}877999`
    },
    // Litter Box is currently gettting redirected to localhost so not sure about this one
    // ltr: {
    //   hostname: 'e6b8r4dht6',
    //   apiUrl: `${baseApiUrl}dev`,
    //   cognitoUrl: `${baseCogConUrl}877995`,
    //   consoleUrl: `${baseCogConUrl}877999`
    // },
    offline: {
      hostname: 'localhost',
      apiUrl: `${baseApiUrl}dev`,
      cognitoUrl: `${baseCogConUrl}877995`,
      consoleUrl: `${baseCogConUrl}877999`
    }
  };
  const hostname = window && window.location && window.location.hostname;
  let env = null;
  switch (hostname) {
    case envSettings.prd.hostname:
      env = envSettings.prd;
      break;
    case envSettings.stg.url:
      env = envSettings.stg;
      break;
    case envSettings.dev.hostname:
      env = envSettings.dev;
      //   break;
      // case envSettings.ltr.hostname:
      //   env = envSettings.ltr;
      break;
    default:
      env = envSettings.offline;
  }
  return env;
};

export default kirbyConfig;
