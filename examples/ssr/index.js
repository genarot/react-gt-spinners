const React = require('react');
const ReactDOM = require('react-dom/server');
const { Ripple } = require('react-gt-spinners');
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
    const el = React.createElement(Ripple);

    const html = ReactDOM.renderToString(el);
    res.send(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
        ${html}
    </body>
    </html>
    `);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
