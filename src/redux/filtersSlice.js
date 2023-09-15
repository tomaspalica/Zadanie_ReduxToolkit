import { createSlice } from '@reduxjs/toolkit';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { statusFilters } from './constants';
import { act } from 'react-dom/test-utils';
const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;