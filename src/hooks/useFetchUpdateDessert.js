import {ref} from "vue";
import {useFetchGetSection} from "./useFetchGetSection";

export const useFetchUpdateDessert = async (data, media, id, section_id) => {
    const dessertUpdated = ref([])
    try {
        const dessert = await fetch(`http://127.0.0.1:8000/api/section/${section_id}/desserts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        dessertUpdated.value = await dessert.json()
        if (media) {
            await fetch(`http://127.0.0.1:8000/api/section/${section_id}/desserts/${dessertUpdated.value.data.id}/dessert-picture`, {
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