import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/js/views/App';
import express from 'express';
import fs from 'fs';

const index = fs.readFileSync(__dirname + '/../public/index.html', 'utf8');

const app = express();

app.get('**', (req, res) => {
  const html = renderToString(<App />);
  const finalHtml = index.replace('<!-- APP -->', html);
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(finalHtml);
});

export const ssrapp = functions.https.onRequest(app);
