import {ref} from "vue";
import {useFetchGetSection} from "./useFetchGetSection";

export const useFetchStoreDrink = async (data, media, section_id) => {
    const drinkStore = ref([])
    try {
        const drink = await fetch(`http://127.0.0.1:8000/api/section/${section_id}/drinks`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        drinkStore.value = await drink.json()
        if (media) {
            await fetch(`http://127.0.0.1:8000/api/section/${section_id}/drinks/${drinkStore.value.data.id}/drink-picture`, {
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