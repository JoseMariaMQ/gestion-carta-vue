import {ref, onMounted} from 'vue'

export const useFetchMenu = (url) => {
    const menu = ref([])

    onMounted(async () => {
        try {
            const res = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            menu.value = await res.json()
        } catch (e) {
            console.log(e)
        }
    })

    return menu
}