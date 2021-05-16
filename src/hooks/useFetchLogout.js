export const useFetchLogout = async () => {
    try {
        const logout = await fetch(`http://127.0.0.1:8000/api/auth/logout`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('jwtToken')
            }
        })
        return logout.json()
    } catch (e) {
        console.log(e)
    }
}