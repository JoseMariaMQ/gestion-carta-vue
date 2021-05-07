import {ref, onMounted} from 'vue'

export const useFetchHeader = (url) => {
    const contacts = ref([])

    onMounted(async () => {
        try {
            const res = await fetch("http://127.0.0.1:8000/api/contact", {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            contacts.value = await res.json()
        } catch (e) {
            console.log(e)
        }
    })

    return {contacts}
}