import {useFetchGetSection} from "./useFetchGetSection";

export const useFetchDeleteDessert = async (section_id, id) => {
    try {
        await fetch(`http://127.0.0.1:8000/api/section/${section_id}/desserts/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        return await useFetchGetSection(section_id)
    } catch (e) {
        console.log(e)
    }
}