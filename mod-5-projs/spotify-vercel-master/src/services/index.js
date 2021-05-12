import api from "./api";


export const searchbytrack = async (value) => {


    let res
    try {
        let data = await api.searchTracks(value)

        res = { success: true, data }
    } catch (err) {
        console.log('yahan sa')
        res = { success: false, message: err }
    }
    return res
}