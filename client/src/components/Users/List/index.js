import React, { useEffect } from 'react'
import UserCard from '../Card'
import styles from './Users.module.sass'
import { getUsers } from '../../../api'
import { getUsersList, loadMore } from '../../../store/slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'

const Users = () => {
  const dispatch = useDispatch()
  const { users, currentPage, totalPages } = useSelector(state => state.users)

  useEffect(() => {
    getUsers(currentPage).then(data => {
      dispatch(getUsersList(data))
    })

    return () => {}
  }, [dispatch, currentPage])

  const showMoreUsers = () => dispatch(loadMore())
  const mapUsers = user => <UserCard key={user.id} data={user} />
  return (
    <section className={styles.container} id='users'>
      <h2>Working with GET request</h2>
      <div className={styles.list}>{users && users.map(mapUsers)}</div>
      <button
        hidden={currentPage === totalPages}
        onClick={showMoreUsers}
      >
        Show more
      </button>
    </section>
  )
}

export default Users
