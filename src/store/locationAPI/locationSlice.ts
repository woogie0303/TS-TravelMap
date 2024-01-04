import { CurrentLocation } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

type FinanceItem = {
  hi: string;
};

type FinanceState = {
  loading: boolean;
  financeItems: Array<FinanceItem>;
  error: string | undefined;
  location: CurrentLocation | undefined;
};

const initialState: FinanceState = {
  loading: false,
  error: undefined,
  financeItems: [{ hi: "234" }, { hi: "123" }],
  location: undefined,
};

export const financeSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<CurrentLocation>) {
      state.location = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFinanceItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFinanceItems.fulfilled, (state, action) => {
      state.financeItems = action.payload;
    });
    builder.addCase(fetchFinanceItems.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const fetchFinanceItems = createAsyncThunk(
  "location/fetchLocation",
  async (location: CurrentLocation | undefined) => {
    const res = await axios
      .get(
        `http://apis.data.go.kr/B551011/KorService1/locationBasedList1?serviceKey=${
          import.meta.env.VITE_TOUR_API_KEY
        }&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&mapX=${location?.longitude}&mapY=${location?.latitude}&radius=1000&listYN=Y&_type=json`,
      )
      .then((res) => res.data.response.body.items.item);

    console.log(res);

    const hi: FinanceItem[] = [{ hi: "klsd" }];

    return hi;
  },
);

export const { setLocation } = financeSlice.actions;

export const financeSelector = (state: RootState) => state.financeReducer;

export default financeSlice.reducer;
