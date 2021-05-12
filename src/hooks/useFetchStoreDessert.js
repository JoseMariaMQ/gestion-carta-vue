import {ref} from "vue";
import {useFetchGetSection} from "./useFetchGetSection";

export const useFetchStoreDessert = async (data, media, section_id) => {
    const dessertStore = ref([])
    try {
        const dessert = await fetch(`http://127.0.0.1:8000/api/section/${section_id}/desserts`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        dessertStore.value = await dessert.json()
        if (media) {
            await fetch(`http://127.0.0.1:8000/api/section/${section_id}/desserts/${dessertStore.value.data.id}/dessert-picture`, {
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