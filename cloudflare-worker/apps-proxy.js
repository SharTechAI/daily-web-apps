export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (!url.pathname.startsWith('/apps')) {
      return fetch(request);
    }

    // /apps        → /daily-web-apps/
    // /apps/       → /daily-web-apps/
    // /apps/foo    → /daily-web-apps/foo
    const subPath = url.pathname.slice('/apps'.length) || '/';
    const targetURL = `https://shartechai.github.io/daily-web-apps${subPath}${url.search}`;

    const proxied = new Request(targetURL, {
      method: request.method,
      headers: (() => {
        const h = new Headers(request.headers);
        h.set('Host', 'shartechai.github.io');
        return h;
      })(),
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
      redirect: 'follow',
    });

    const response = await fetch(proxied);

    // Rewrite any absolute redirects that point back to GitHub Pages
    if ([301, 302, 307, 308].includes(response.status)) {
      const location = response.headers.get('Location') || '';
      if (location.includes('shartechai.github.io/daily-web-apps')) {
        const rewritten = location.replace(
          'https://shartechai.github.io/daily-web-apps',
          `${url.origin}/apps`
        );
        return new Response(response.body, {
          status: response.status,
          headers: { ...Object.fromEntries(response.headers), Location: rewritten },
        });
      }
    }

    return response;
  },
};
