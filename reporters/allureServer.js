#!/usr/bin/env node
// Minimal static file server for allure-report/, spawned detached by
// reporters/allureReportLink.ts so it keeps serving after the Playwright
// process that started it exits. Deliberately plain Node (no dependencies,
// no TypeScript) — it has to run as its own standalone process via
// `node <this file>`, and nothing in this project sets up a loader for
// running a spawned .ts file directly. See allureReportLink.ts for why a
// real server, not a `file://` link, is required for Allure at all.

const http = require('http');
const fs = require('fs');
const path = require('path');

const reportDir = path.resolve(process.argv[2]);
const port = Number(process.argv[3]);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
  '.zip': 'application/zip',
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const filePath = path.join(reportDir, urlPath === '/' ? '/index.html' : urlPath);

  // Never serve anything outside reportDir (a malformed/malicious request
  // path shouldn't be able to walk up via `..`).
  if (!filePath.startsWith(reportDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
    });
    res.end(data);
  });
});

server.listen(port);
