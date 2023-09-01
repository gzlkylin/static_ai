const BACKEND_HOST = "http://test.cdn.qq.com"
async function handleEvent(event) {
    const ourl = new URL(event.request.url);
    const url = BACKEND_HOST + ourl.pathname.substr(10);

    let req = new Request(url, {
	method: event.request.method,
	body: event.request.body,
    });

    var resp = await fetch(req);
    event.respondWith(resp);
}


addEventListener('fetch', (event) => {
  handleEvent(event);
});


