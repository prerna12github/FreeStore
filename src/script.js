export async function setLocalStorageAccessToken(accessToken) {
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
}
