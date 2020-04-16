import * as Yup from 'yup';

export default Yup.object({
  name: Yup.string().required(),
  domain: Yup.string().required(),
  description: Yup.string().required(),
  justification: Yup.string().required()
});
