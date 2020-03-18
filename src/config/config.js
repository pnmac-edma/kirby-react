const kirbyConfig = () => {
  const baseCogConUrl =
    'https://pennymac.onelogin.com/trust/saml2/http-post/sso/';

  const envSettings = {
    prd: {
      // apiUrl: https://kirby-api.pnmac.com/(apiRoute)
      // authUrl: https://kirby-api-sec.pnmac.com/authenticate
      domain: 'kirby.pennymac.com',
      apiUrl: 'https://kirby-api.pnmac.com',
      apiBasePath: '/',
      authUrl: 'https://kirby-api-sec.pnmac.com',
      authPath: '/authenticate',
      cognitoUrl: `${baseCogConUrl}965273`,
      consoleUrl: `${baseCogConUrl}965275`
    },
    stg: {
      // apiUrl: https://kirby-api.pnmac.com/(apiRoute)
      // authUrl: https://kirby-api-stg-sec.pnmac.com/authenticate
      // NOTE: I can't remember if sec came after stg or before
      domain: 'd14zq0f3jiu0zb.cloudfront.net',
      apiUrl: 'https://kirby-api-stg.pnmac.com',
      apiBasePath: '/',
      authUrl: 'https://kirby-api-stg-sec.pnmac.com',
      authPath: '/authenticate',
      cognitoUrl: `${baseCogConUrl}964944`,
      consoleUrl: `${baseCogConUrl}965269`
    },
    dev: {
      // apiUrl: https://kirby-api.pnmac.com/dev/(apiRoute)
      // authUrl: https://kirby-api-dev-sec.pnmac.com/authenticate
      // NOTE: unsure of the url path for dev
      domain: 'd1n1yc8ym1y64x.cloudfront.net',
      apiBasePath: '/dev',
      apiUrl: 'https://kirby-api-dev.pnmac.com',
      authPath: '/dev/authenticate',
      authUrl: 'https://kirby-api-dev-sec.pnmac.com',
      cognitoUrl: `${baseCogConUrl}877995`,
      consoleUrl: `${baseCogConUrl}877999`
    },
    ltr: {
      // apiUrl: https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com
      // authUrl: apparently no auth url needed
      // NOTE: unsure of j8nhpla4d3 or e6b8r4dht6 as url number
      domain: 'kirby-website-litter.s3-website-us-west-2.amazonaws.com',
      apiPath: '/dev',
      apiUrl: 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com',
      authPath: '/dev/authenticate',
      authUrl: 'https://e6b8r4dht6.execute-api.us-west-2.amazonaws.com',
      cognitoUrl: `${baseCogConUrl}877995`,
      consoleUrl: `${baseCogConUrl}877999`
    },
    offline: {
      // apiUrl: https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com
      // authUrl: apparently no auth url needed
      // NOTE: unsure of j8nhpla4d3 or e6b8r4dht6 as url number
      hostname: 'localhost',
      apiPath: '/dev',
      apiUrl: 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com',
      authPath: '/dev/authenticate',
      authUrl: 'https://e6b8r4dht6.execute-api.us-west-2.amazonaws.com',
      cognitoUrl: `${baseCogConUrl}877995`,
      consoleUrl: `${baseCogConUrl}877999`
    }
  };

  const hostname = window && window.location && window.location.hostname;
  let env = null;

  switch (hostname) {
    case envSettings.prd.domain:
      env = envSettings.prd;
      break;
    case envSettings.stg.url:
      env = envSettings.stg;
      break;
    case envSettings.dev.domain:
      env = envSettings.dev;
      break;
    case envSettings.ltr.domain:
      env = envSettings.ltr;
      break;
    default:
      env = envSettings.offline;
  }

  return env;
};

export default kirbyConfig();
