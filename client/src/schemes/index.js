import * as Yup from 'yup'

const FILE_SIZE = 160 * 1024

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg']

const postScheme = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Name should be at least 4 characters')
    .required('Name required'),
  email: Yup.string()
    .matches(
      //eslint-disable-next-line
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      'Invalid email'
    )
    .email('Invalid email')
    .required('Email required'),
  phone: Yup.string()
    .matches(
      /^\+?38\s(\(0\d{2}\)[\s-]\d{3}[\s-]\d{2}[\s-]\d{2})$/,
      "Number must match '+380XXXXXXXXX'"
    )
    .required('Phone number required'),
  position: Yup.string()
    .matches(/(Lawyer|Content manager|Security|Designer)/)
    .required('Role required'),
  file: Yup.mixed()
    .required('File is required')
    .test(
      'fileSize',
      'File too large',
      value => value && value.size <= FILE_SIZE
    )
    .test(
      'fileFormat',
      'Unsupported Format',
      value => value && SUPPORTED_FORMATS.includes(value.type)
    )
})

export default postScheme
