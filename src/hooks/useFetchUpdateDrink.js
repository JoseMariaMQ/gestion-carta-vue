import {ref} from "vue";
import {useFetchGetSection} from "./useFetchGetSection";

export const useFetchUpdateDrink = async (data, media, id, section_id) => {
    const drinkUpdated = ref([])
    try {
        const drink = await fetch(`http://127.0.0.1:8000/api/section/${section_id}/drinks/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        drinkUpdated.value = await drink.json()
        if (media) {
            await fetch(`http://127.0.0.1:8000/api/section/${section_id}/drinks/${drinkUpdated.value.data.id}/drink-picture`, {
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