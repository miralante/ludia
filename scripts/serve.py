"""Loopback preview with reliable JavaScript MIME types, including on Windows."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class Handler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map,
                      '.js': 'text/javascript', '.css': 'text/css',
                      '.json': 'application/json', '.svg': 'image/svg+xml',
                      '.woff2': 'font/woff2'}


if __name__ == '__main__':
    root = Path(__file__).resolve().parent.parent
    # The same port as the shared Node server (scripts/serve.js), so the
    # optional QA scripts below find the site wherever it was served from.
    server = ThreadingHTTPServer(('127.0.0.1', 8080), partial(Handler, directory=str(root)))
    print('Ludia: http://127.0.0.1:8080/', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
