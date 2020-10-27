const URL = 'https://v1.jinrishici.com/all.json';

const getPoetryByPromise = function() {
    return fetch(URL)
        .then(response => response.json())
        .then(poetry => [poetry.origin, poetry.author, poetry.content])
        .catch(console.log);
}

const getPoetryByAsync =  async function() {
    const response = await fetch(URL);
    const poetry = await response.json();
    const { origin, author, content } = poetry;
    return [origin, author, content];
}

export const getPoetry = getPoetryByAsync;