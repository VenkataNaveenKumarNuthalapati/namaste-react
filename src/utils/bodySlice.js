import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../utils/utils";

// Async thunk to fetch restaurant data
export const fetchRestaurants = createAsyncThunk(
    "body/fetchRestaurants",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            return {
                titleOnMind:
                    data?.data?.cards[0]?.card?.card?.header?.title ||
                    "Not Delivering yourLocation Unserviceable - We don’t have any services here till now. Try changing location.",
                titleChainRest:
                    data?.data?.cards[1]?.card?.card?.header?.title ||
                    undefined,
                onMindList:
                    data?.data?.cards[0]?.card?.card?.imageGridCards?.info ||
                    [],
                allRestCards:
                    data?.data?.cards[1]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants || [],
            };
        } catch (error) {
            return rejectWithValue("Failed to fetch restaurant data");
        }
    }
);

const bodySlice = createSlice({
    name: "body",
    initialState: {
        restCards: [], // Filtered list
        allRestCards: null, // Original list
        userInput: "",
        isTopRatedActive: false,
        titleOnMind: "",
        titleChainRest: "",
        onMindList: [],
        isLoading: true,
        error: null,
    },
    reducers: {
        // Updates the user input
        setUserInput(state, action) {
            state.userInput = action.payload;
        },
        // Toggles top-rated filter
        toggleTopRated(state) {
            state.isTopRatedActive = !state.isTopRatedActive;
            state.userInput = ""; // Reset search input
            state.restCards = state.isTopRatedActive
                ? state.allRestCards.filter(
                      ({ info: { avgRating } }) => avgRating >= 4.3
                  )
                : state.allRestCards;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                const {
                    titleOnMind,
                    titleChainRest,
                    onMindList,
                    allRestCards,
                } = action.payload;
                state.titleOnMind = titleOnMind;
                state.titleChainRest = titleChainRest;
                state.onMindList = onMindList;
                state.allRestCards = allRestCards;
                state.restCards = allRestCards;
                state.isLoading = false;
            })
            .addCase(fetchRestaurants.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { setUserInput, toggleTopRated } = bodySlice.actions;
export default bodySlice.reducer;
