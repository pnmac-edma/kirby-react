import * as Yup from 'yup';

const url =
  'https://tx9n6nw9ye.execute-api.us-west-2.amazonaws.com/dev/local/assets/databases/check/?name=hh';

export default Yup.object({
  name: Yup.string()
    // @ts-ignore
    .test('this databaseName is already taken', function() {
      return fetch(url)
        .then(resp => resp.json())
        .then(function(data) {
          console.log('insidelvalidation', data);
          return data;
        });
    })
    .required(),
  sensitivity: Yup.string()
    .oneOf(['Sensitive', 'Very Sensitive', 'Not Sensitive', 'Confidential'])
    .required(),
  domain: Yup.string()
    .oneOf(['data', 'sales', 'marketing', 'retail', 'operation'])
    .required(),
  description: Yup.string().required(),
  justification: Yup.string().required()
});
