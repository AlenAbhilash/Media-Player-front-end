import { commonApi } from "./commonApi";
import { SERVER_URL } from "./server_url";

//Upload Video
export const uploadVideosApi = async (video) => {
    return await commonApi("POST", `${SERVER_URL}/allVideos`, video)
}
//get all uploadVideos
export const getAlluploadVideosApi = async () => {
    return await commonApi("GET", `${SERVER_URL}/allVideos`, '')
}
//get A Video
export const getAuploadVideosApi = async (id) => {
    return await commonApi("GET", `${SERVER_URL}/allVideos/${id}`, "")
}
//Delete Video 
export const DeleteVideosApi = async (id) => {
    return await commonApi("DELETE", `${SERVER_URL}/allVideos/${id}`, {})
}
// Video History
export const addVideoHistoryApi = async (video) => {
    return await commonApi("POST", `${SERVER_URL}/history`, video)
}
// get History
export const getHistoryVideosApi = async () => {
    return await commonApi("GET", `${SERVER_URL}/history`, "")
}
//Delete History
export const DeleteHistoryApi = async (id) => {
    return await commonApi("DELETE", `${SERVER_URL}/history/${id}`, {})
}
//Add Category
export const addCategoryApi = async (category) => {
    return await commonApi("POST", `${SERVER_URL}/category`, category)
}
//get category
export const getCategoryApi = async () => {
    return await commonApi("GET", `${SERVER_URL}/category`, "");
}
//Delete category
export const DelteCategoryApi = async (id) => {
    return await commonApi("DELETE", `${SERVER_URL}/category/${id}`, {});

}

//update category
export const UpdateCategoryApi = async (id, CategoryDetails) => {
    return await commonApi("PUT", `${SERVER_URL}/category/${id}`, CategoryDetails);
}