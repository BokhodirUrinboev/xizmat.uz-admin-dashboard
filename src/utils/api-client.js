import * as auth from './auth-provider'

function client(
    endpoint,
    { data, token, headers: customHeaders, method, ...customConfig } = {}
) {
    const config = {
        method: method,
        body: data ? JSON.stringify(data) : undefined,
        headers: {
            'Content-Type': data ? 'application/json' : undefined,
            ...customHeaders,
        },
        ...customConfig,
    }

    return window
        .fetch(endpoint, config)
        .then(async (response) => {
                if (response.status === 401) {
                    await auth.logout()
                    window.location.assign('/')
                } else if (response.status === 403) {
                    await auth.logout()
                    window.location.assign('/')
                }
                const data = await response.json()
                if (response.ok) {
                    return data
                } else {
                    return Promise.reject(data)
            }

        })
}

export { client }
