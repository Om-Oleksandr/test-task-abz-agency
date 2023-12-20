import React, { useState } from 'react'
import { Field } from 'formik'
import cx from 'classnames'
const CustomField = props => {
  const { name, id, checked, value, className } = props
  const [fileName, setFileName] = useState(value)
  const handleFileUpload = (event, form) => {
    const file = event.target.files[0]
    form.setFieldValue('file', file, true)
    form.setTouched({ ...form.touched, file: true }, false)
    if (file) {
      setFileName(file.name)
    }
  }
  const formatPhoneNumber = phoneNumber => {
    const number = phoneNumber.trim().replace(/[^+0-9]/g, '')
    const isPlus = number.includes('+')
    if (number.length < 4) return number
    if (number.length < 6 || (number.length <= 6 && isPlus))
      return number.replace(/(\+?\d{2})(\d{3})/, '$1 ($2)')
    if (number.length < 9 || (number.length <= 9 && isPlus))
      return number.replace(/(\+?\d{2})(\d{3})(\d{1,3})/, '$1 ($2) $3')
    if (number.length < 12 || (number.length <= 12 && isPlus))
      return number.replace(
        /(\+?\d{2})(\d{3})(\d{1,3})(\d{1,2})/,
        '$1 ($2) $3-$4'
      )
    return number.replace(
      /(\+?\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,
      '$1 ($2) $3-$4-$5'
    )
  }

  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        return (
          <>
            {name === 'position' ? (
              <>
                <label htmlFor={id}>
                  <input
                    {...field}
                    type='radio'
                    id={id}
                    value={value}
                    checked={checked}
                  />
                  <span></span>
                  <p>{value}</p>
                  {meta.error}
                </label>
              </>
            ) : (
              <>
                {name === 'file' ? (
                  <>
                    <div
                      className={cx(className[0], {
                        [className[1]]: meta.error && meta.touched
                      })}
                    >
                      <input
                        {...field}
                        value=''
                        type='file'
                        id={id}
                        onChange={event =>
                          handleFileUpload(event, form)
                        }
                      />
                      <label htmlFor={id}>Upload</label>
                      <label htmlFor={id} className='fileName'>
                        {fileName || 'Upload your file'}
                      </label>
                      <span>
                        {meta.error && meta.touched ? meta.error : null}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={cx({
                        [className]: meta.error && meta.touched
                      })}
                    >
                      {name === 'phone' ? (
                        <>
                          <input
                            type='text'
                            id={id}
                            required='required'
                            onChange={e => {
                              const number = formatPhoneNumber(e.target.value)
                              form.handleChange(e)
                              form.setFieldValue('phone', number)
                            }}
                            onBlur={form.handleBlur}
                            value={form.values.phone}
                          />
                        </>
                      ) : (
                        <input
                          {...field}
                          type='text'
                          id={id}
                          required='required'
                        />
                      )}

                      <label htmlFor={id}>{name}</label>
                      <span>
                        {meta.error && meta.touched
                          ? meta.error
                          : name === 'phone' && '+38 (XXX) XXX - XX - XX'}
                      </span>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )
      }}
    </Field>
  )
}
export default CustomField
