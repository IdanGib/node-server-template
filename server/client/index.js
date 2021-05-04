
class ApiSdk {
    baseUrl = '';
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async test() {
        const path = 'test';
        const { baseUrl } = this;
        const res = await fetch(`${baseUrl}/${path}`);
        const json = await res.json();
        return json;
    }

}

window.api = (function() {
    const init = async config => {
        return new Promise((resolve, reject) => {
            const { env } = config;
            const { url } = env;
            const baseUrl = `${url}/api`;
            if(!url) {
                return reject();
            }
            setTimeout(() => {
                window.api = new ApiSdk(baseUrl);
                resolve(window.api);
            }, 0);
        });
    }
    return { init };
})();