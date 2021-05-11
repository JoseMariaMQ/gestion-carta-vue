import {ref} from "vue";
import {useFetchGetSection} from "./useFetchGetSection";

export const useFetchStoreDish = async (data, media, section_id) => {
    const dishStore = ref([])
    try {
        const dish = await fetch(`http://127.0.0.1:8000/api/section/${section_id}/dishes`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        dishStore.value = await dish.json()
        if (media) {
            await fetch(`http://127.0.0.1:8000/api/section/${section_id}/dishes/${dishStore.value.data.id}/dish-picture`, {
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