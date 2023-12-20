import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    totalPages: null,
    positions: null,
    token: null,
    currentPage: 1
  },
  reducers: {
    getUsersList (state, { payload }) {
      state.users = [...state.users, ...payload.users]
      state.totalPages = payload.total_pages
    },
    loadMore (state, { payload }) {
      state.currentPage = state.currentPage + 1
    },
    updateList (state, { payload }) {
      state.users = []
      if (state.currentPage !== 1) {
        state.currentPage = 1
      }
    },
    getPositionsList (state, { payload }) {
      state.positions = payload.positions
    },
    getAccessToken (state, { payload }) {
      state.token = payload.token
    }
  }
})

const { actions, reducer } = usersSlice

export const {
  getUsersList,
  loadMore,
  updateList,
  registerError,
  getPositionsList,
  getAccessToken
} = actions

export default reducer
