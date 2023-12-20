import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import cx from 'classnames'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CustomField from './customField'
import RadioGroup from './RadioGroup'
import styles from './Form.module.sass'
import postScheme from '../../schemes'
import { getPositions, getToken, getUsers, postUser } from '../../api'
import { getUsersList, getPositionsList, updateList, getAccessToken } from '../../store/slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import CONSTANTS from '../../constants'
const initialValues = {
  name: '',
  email: '',
  phone: '',
  position: 'Lawyer',
  file: ''
}
const PostForm = () => {
  const dispatch = useDispatch()
  const { currentPage, positions, token } = useSelector(state => state.users)
  // const [positions, setPositions] = useState()
  const [isSent, setIsSent] = useState(false)
  const handleSubmit = (values, formikBag) => {
    const formData = new FormData()
    const [position] = positions.filter(
      position => position.name === values.position && position.id
    )
    const cleanNumber = values.phone.replace(/\D/g, '')
    const validNumber = '+' + cleanNumber
    formData.append('position_id', position.id)
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('phone', validNumber)
    formData.append('photo', values.file)
    postUser(formData, token).then(data => {
      if (data.success) {
        setIsSent(true)
        dispatch(updateList())
        getUsers(currentPage).then(data => {
          dispatch(getUsersList(data))
        })
        formikBag.resetForm()
      } else {
        toast(data.message)
        const submitBtn = document.getElementById('submit')
        submitBtn.classList.add(styles.disabled)
        setTimeout(() => {
          submitBtn.classList.remove(styles.disabled)
        }, 2000)
      }
    })
  }
  useEffect(() => {
    getPositions().then(data => dispatch(getPositionsList(data)))
    getToken().then(data => dispatch(getAccessToken(data)))
  }, [dispatch])
  return (
    <section className={styles.postReq} id='registration'>
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        role='error'
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        draggable
        limit={1}
        style={{ top: '2rem' }}
        progressStyle={{ background: 'red' }}
      />
      <h2>Working with POST request</h2>
      {isSent ? (
        <div>
          <img src={`${CONSTANTS.PUBLIC_URL}/success-image.svg`} alt='success' />
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={postScheme}
          validateOnMount={true}
        >
          {formikProps => {
            return (
              <Form className={styles.form}>
                <CustomField id='name' name='name' className={styles.error} />
                <CustomField id='email' name='email' className={styles.error} />
                <CustomField id='phone' name='phone' className={styles.error} />
                <RadioGroup classNames={styles.radio} positions={positions} />
                <CustomField
                  id='file'
                  name='file'
                  className={[styles.photo, styles.error]}
                />
                <input
                  type='submit'
                  value='Sign up'
                  id='submit'
                  className={cx({ [styles.disabled]: !formikProps.isValid })}
                />
              </Form>
            )
          }}
        </Formik>
      )}
    </section>
  )
}

export default PostForm
