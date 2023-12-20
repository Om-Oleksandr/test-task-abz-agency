import React from 'react'
import { Field } from 'formik'
import CustomField from './customField'
const RadioGroup = props => {
  const { classNames, positions } = props
  return (
    <Field>
      {({ field, from, meta }) => {
        return (
          <div className={classNames}>
            <p>Select your position</p>
            {positions !== null && positions !== undefined &&
              positions.map(position => (
                <CustomField
                  key={position.id}
                  name='position'
                  id={position.id}
                  value={position.name}
                  checked={field.value.position === position.name}
                />
              ))}
          </div>
        )
      }}
    </Field>
  )
}

export default RadioGroup
