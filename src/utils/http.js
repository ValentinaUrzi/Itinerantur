const BASE_URL = "https://rest.gadventures.com"

const GET = async (query) => {
    const res = await fetch(`${BASE_URL}/${query}`, {
        headers: {
            "X-Application-Key": import.meta.env.VITE_API_KEY,
        }
    });
    const data = await res.json();

    return data
}

export default GET