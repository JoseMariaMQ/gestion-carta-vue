import {ref} from "vue";

export const useFetchLogin = (credentials) => {
    const userLogin = ref([])
    credentials.remember_token = true

    const getUserLogin = async (credentials) => {
        try {
            const res = await fetch("http://127.0.0.1:8000/api/auth/login", {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            userLogin.value = await res.json()

            if (userLogin.value.data !== "Unauthorized") {
                const {token_type, access_token, expires_at} = userLogin.value.auth
                localStorage.setItem('jwtToken', `${token_type} ${access_token}`)
                localStorage.setItem('tokenExpires', expires_at)
                // console.log(userLogin.value)
                return true;
            } else {
                console.log("Unauthorized")
            }

        } catch (e) {
            console.log(e)
        }
    }
    return getUserLogin(credentials)
}