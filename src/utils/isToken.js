export const isTokenExpired = (token) => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return Date.now() > payload.exp * 1000;
    } catch (error) {
        return true; 
    }
}
