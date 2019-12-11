const kirbyConfig = () => {
  const envSettigns = {
    prd: {
      url: 'https://kirby.pennymacusa.com/index.html',
      hostname: 'kirby.pennymac.com',
      apiUrl: 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/prod',
      cognitoUrl:
        'https://pennymac.onelogin.com/trust/saml2/http-post/sso/965273',
      consoleUrl:
        'https://pennymac.onelogin.com/trust/saml2/http-post/sso/965275'
    },
    stg: {
      url: 'd14zq0f3jiu0zb.cloudfront.net/index.html',
      hostname: 'd14zq0f3jiu0zb.cloudfront.net',
      apiUrl: 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/stg',
      cognitoUrl:
        'https://pennymac.onelogin.com/trust/saml2/http-post/sso/964944',
      consoleUrl:
        'https://pennymac.onelogin.com/trust/saml2/http-post/sso/965269'
    },
    dev: {
      url: 'd14zq0f3jiu0zb.cloudfront.net/index.html',
      hostname: 'd1n1yc8ym1y64x.cloudfront.net',
      apiUrl: 'https://kirby-api.execute-api.us-west-2.amazonaws.com/dev',
      cognitoUrl:
        'https://pennymac.onelogin.com/trust/saml2/http-post/sso/877995',
      consoleUrl:
        'https://pennymac.onelogin.com/trust/saml2/http-post/sso/877999'
    },
    ltr: {
      hostname: 'e6b8r4dht6',
      apiUrl: 'https://e6b8r4dht6.execute-api.us-west-2.amazonaws.com/dev',
      apiNew: 'j8nhpla4d3',
      cognitoUrl:
        'https://pennymac.onelogin.com/trust/saml2/http-post/sso/877995',
      consoleUrl:
        'https://pennymac.onelogin.com/trust/saml2/http-post/sso/877999'
    },
    offline: {
      url: 'http://localhost:3000',
      hostname: 'localhost',
      apiUrl: 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/dev',
      cognitoUrl:
        'https://pennymac.onelogin.com/trust/saml2/http-post/sso/877995',
      consoleUrl:
        'https://pennymac.onelogin.com/trust/saml2/http-post/sso/877999'
    }
  };
  const hostname = window && window.location && window.location.hostname;
  let env = null;
  switch (hostname) {
    case envSettigns.prd.hostname:
      env = envSettigns.prd;
      break;
    case envSettigns.stg.url:
      env = envSettigns.stg;
      break;
    case envSettigns.dev.hostname:
      env = envSettigns.dev;
      break;
    case envSettigns.ltr.hostname:
      env = envSettigns.ltr;
      break;
    default:
      env = envSettigns.offline;
  }
  return env;
};
export default kirbyConfig;
