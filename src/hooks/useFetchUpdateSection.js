import {useFetchGetSection} from "./useFetchGetSection";
import {ref} from "vue";

export const useFetchUpdateSection = (data, media) => {

    const updateSection = async (data, media) => {
        const sectionUpdated = ref([])
        try {
            const section = await fetch(`http://127.0.0.1:8000/api/section/${data.id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            sectionUpdated.value = await section.json()
            if (media) {
                await fetch(`http://127.0.0.1:8000/api/section/${sectionUpdated.value.data.id}/section-picture`, {
                    method: 'POST',
                    body: media,
                    headers: {
                        "Authorization": localStorage.getItem('jwtToken')
                    }
                })
            }
            return await useFetchGetSection(sectionUpdated.value.data.id)
        } catch (e) {
            console.log(e)
        }
    }
    return updateSection(data, media)

}