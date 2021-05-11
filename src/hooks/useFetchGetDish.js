export const useFetchGetDish = async (section_id, id) => {
    try {
        const dish = await fetch(`http://127.0.0.1:8000/api/section/${section_id}/dishes/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        return dish.json()
    } catch (e) {
        console.log(e)
    }
}