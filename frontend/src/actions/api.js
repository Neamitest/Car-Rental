

const baseURL = "http://127.0.0.1:8000/api";

export async function getCategories() {
    let result,
        error = null;
    try {
        const response = await fetch(`${baseURL}/vehicles/categories`);
        result = (await response.json())?.data;
    } catch (error) {
        error = error;
    }
    return {
        result,
        error,
    };
}
export async function getFuelTypes() {
    let result,
        error = null;
    try {
        const response = await fetch(`${baseURL}/vehicles/fuelTypes`);
        result = (await response.json())?.data;
    } catch (error) {
        error = error;
    }
    return {
        result,
        error,
    };
}
export async function getCurrentUser(token) {
    let result,
        error = null;
    try {
        const response = await fetch("http://127.0.0.1:8000/api/user", {
            // mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();

        if (data?.message == "Unauthenticated.") {
            error = "Unauthenticated";
        } else {
            result = data;
        }
    } catch (error) {
        error = error;
    }
    return {
        result,
        error,
    };
}
