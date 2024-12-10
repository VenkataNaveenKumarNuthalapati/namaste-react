import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { restDetailsAPI } from "./utils";

// Async thunk to fetch restaurant details
export const fetchRestaurantDetails = createAsyncThunk(
    "restaurant/fetchDetails",
    async (resId, { rejectWithValue }) => {
        try {
            const response = await fetch(`${restDetailsAPI}${resId}`);
            const json = await response.json();

            const regular =
                json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
            const dynamicLists = regular.cards.filter((eachList) => {
                return (
                    eachList?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                );
            });

            const restaurantInfo = json?.data?.cards[2]?.card?.card?.info || {};

            return {
                restaurantData: restaurantInfo,
                dataLists: dynamicLists,
            };
        } catch (error) {
            return rejectWithValue("Failed to fetch restaurant details");
        }
    }
);

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        restaurantData: null,
        dataLists: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurantDetails.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRestaurantDetails.fulfilled, (state, action) => {
                state.restaurantData = action.payload.restaurantData;
                state.dataLists = action.payload.dataLists;
                state.isLoading = false;
            })
            .addCase(fetchRestaurantDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default restaurantSlice.reducer;
