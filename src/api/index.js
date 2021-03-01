export function saveToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
}

export function fetchToken() {
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
}

export function deleteToken() {
    localStorage.removeItem('token');
}


export const fetchPosts = async (token = '') => {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const data = await response.json();
    return data;
}


export const userProfile = async (token = '') => {

    const response = await fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/me', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    const data = await response.json();
    return data;
}



export const sendMessages = ({
    messageContent,
    postId
}) => {

    return fetch(`https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts/${postId}/messages`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${fetchToken()}`
        },
        body: JSON.stringify({
            message: {
                content: messageContent,
            }
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch((error) => console.error(error));

}
