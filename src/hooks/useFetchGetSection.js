export const useFetchGetSection = async (id) => {
    try {
        const section = await fetch(`http://127.0.0.1:8000/api/section/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        return section.json()
    } catch (e) {
        console.log(e)
    }
}