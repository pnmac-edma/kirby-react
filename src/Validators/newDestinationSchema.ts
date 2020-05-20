import * as Yup from 'yup';

export default Yup.object({
  name: Yup.string().required(),
  sensitivity: Yup.string()
    .oneOf(['Sensitive', 'Very Sensitive', 'Not Sensitive', 'Confidential'])
    .required(),
  domain: Yup.string()
    .oneOf(['Retail', 'Capital Market', 'Servicing'])
    .required(),
  description: Yup.string().required(),
  justification: Yup.string().required()
});
