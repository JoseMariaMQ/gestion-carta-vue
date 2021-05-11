import {ref} from "vue";

export const useFetchStoreDish = async (data, media) => {
    const dishStore = ref([])
    try {
        const dish = await fetch(`http://127.0.0.1:8000/api/section/${data.section_id}/dishes`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        dishStore.value = await dish.json()
        if (media) {
            await fetch(`http://127.0.0.1:8000/api/section/${data.section_id}/dishes/${dishStore.value.data.id}/dish-picture`, {
                method: 'POST',
                body: media,
                headers: {
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
        }
    } catch (e) {
        console.log(e)
    }
}