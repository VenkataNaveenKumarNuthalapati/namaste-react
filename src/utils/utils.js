export let apiUrl =
    // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.5057232&lng=80.049922&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4375084&lng=78.4482441&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.0948008&lng=80.1656205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
        },
        (error) => {
            console.error("Error fetching location:", error);
        }
    );
} else {
    console.error("Geolocation is not supported by this browser.");
}

export const onMindApi =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const restDetailsAPI =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.5057232&lng=80.049922&restaurantId=";

export const BASE_IMAGE_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";
