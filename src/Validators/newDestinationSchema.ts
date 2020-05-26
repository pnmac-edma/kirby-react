import * as Yup from 'yup';

export default Yup.object({
  name: Yup.string().required(),
  sensitivity: Yup.string()
    .oneOf(['Sensitive', 'Very Sensitive', 'Not Sensitive', 'Confidential'])
    .required(),
  domain: Yup.string()
    .oneOf(['data', 'sales', 'marketing', 'retail', 'operation'])
    .required(),
  description: Yup.string().required(),
  justification: Yup.string().required()
});
