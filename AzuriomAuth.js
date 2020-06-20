function auth(email, password) {
    const domain = 'https://yourwebsite';

    return axios.post(`${domain}/api/auth`, {
        email: email,
        password: password,
    }, {
        headers: {
            'User-Agent': 'AzAuth',
        },
    }).then(response => response.data);
}
