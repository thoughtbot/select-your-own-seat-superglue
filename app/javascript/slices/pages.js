import { createSlice } from '@reduxjs/toolkit'
import { saveResponse, beforeVisit } from '../actions'

export const pagesSlice = createSlice({
  name: 'pages',
  reducers: {
    showLoading: (state, action) => {
      const {pageKey} = action.payload;
      const { seatingMap } = state[pageKey].data
      seatingMap.loading = true
    },
    hideLoading: (state, action) => {
      const {pageKey} = action.payload;
      const { seatingMap } = state[pageKey].data
      seatingMap.loading = false
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(beforeVisit, (state, action) => {
  //     const {currentPageKey} = action.payload
  //
  //     const currentPage = draft[currentPageKey]
  //     delete currentPage.error
  //   })
  // }
})

