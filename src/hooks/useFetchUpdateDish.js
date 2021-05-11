import {ref} from "vue";
import {useFetchGetSection} from "./useFetchGetSection";

export const useFetchUpdateDish = async (data, media, id, section_id) => {
    const dishUpdated = ref([])
    try {
        const dish = await fetch(`http://127.0.0.1:8000/api/section/${section_id}/dishes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        dishUpdated.value = await dish.json()
        if (media) {
            await fetch(`http://127.0.0.1:8000/api/section/${section_id}/dishes/${dishUpdated.value.data.id}/dish-picture`, {
                method: 'POST',
                body: media,
                headers: {
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
        }
        return await useFetchGetSection(section_id)
    } catch (e) {
        console.log(e)
    }
}