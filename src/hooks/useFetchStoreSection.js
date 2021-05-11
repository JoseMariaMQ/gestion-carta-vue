import {useFetchGetSection} from "./useFetchGetSection";
import {ref} from "vue";
import {useFetchGetSections} from "./useFetchGetSections";

export const useFetchStoreSection = async (data, media) => {
    const sectionStore = ref([])
    try {
        const section = await fetch("http://127.0.0.1:8000/api/section", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        sectionStore.value = await section.json()
        if (media) {
            await fetch(`http://127.0.0.1:8000/api/section/${sectionStore.value.data.id}/section-picture`, {
                method: 'POST',
                body: media,
                headers: {
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
        }
        // return await useFetchGetSection(sectionStore.value.data.id)
        return await useFetchGetSections()
    } catch (e) {
        console.log(e)
    }
}