export default async function (endpoint: string, { method, body }: { method: 'GET' | 'POST' | 'DELETE' | 'PUT', body?: { [key: string]: string } }) {
    try {
        const response = await fetch(`http://localhost:4000${endpoint}`, {
            method,
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`
            },
            ...body && {
                body: JSON.stringify(body)
            }
        });

        if (!response.ok) throw new Error('Une erreur est survenue');

        return await response.json();

    } catch (err) {
        console.error('Error during API call:', err);

        return null;
    }
}
