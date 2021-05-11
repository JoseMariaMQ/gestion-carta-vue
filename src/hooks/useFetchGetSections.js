export const useFetchGetSections = async () => {
    try {
        const sections = await fetch("http://127.0.0.1:8000/api/section", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        return sections.json()
    } catch (e) {
        console.log(e)
    }
}