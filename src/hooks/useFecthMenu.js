import {ref, onMounted} from 'vue'

export const useFetchMenu = (url) => {
    const menu = ref([])

    onMounted(async () => {
        try {
            const res = await fetch("http://127.0.0.1:8000/api/menu", {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            menu.value = await res.json()
        } catch (e) {
            console.log(e)
        }
    })

    return {menu}
}