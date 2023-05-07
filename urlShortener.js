const express = require('express');
const app = express();

const crypto = require('crypto');
const base62 = require('base62/lib/ascii');

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'url_shortener'
});

// Generate a unique short URL token using SHA-1 hash and base62 encoding
function generateShortUrl(url) {
  const hash = crypto.createHash('sha1').update(url).digest('hex');
  const decimal = parseInt(hash, 16);
  const shortUrl = base62.encode(decimal);
  return shortUrl;
}

// Route to create a new short URL
app.post('/api/shorten', (req, res) => {
  const url = req.body.url;
  const shortUrl = generateShortUrl(url);

  // Insert the long URL and short URL into the database
  connection.query('INSERT INTO urls SET ?', { long_url: url, short_url: shortUrl }, (error, results) => {
    if (error) throw error;
    res.json({ shortUrl: shortUrl });
  });
});

// Route to redirect short URLs to their original long URLs
app.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl;

  // Lookup the original long URL from the database
  connection.query('SELECT long_url FROM urls WHERE short_url = ?', [shortUrl], (error, results) => {
    if (error) throw error;
    if (results.length === 0) {
      res.status(404).json({ error: 'Short URL not found' });
    } else {
      res.redirect(results[0].long_url);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

/*
In this example, we're using the express framework to handle incoming HTTP requests. 

We're also using the crypto module to generate a SHA-1 hash of the original URL, 

and the base62 library to encode the hash into a shorter, base62 string.

When a user submits a long URL to be shortened, we generate a unique short URL token using generateShortUrl() function,

and insert the original URL and short URL into a MySQL database using the mysql module. When a user clicks on a short URL,

we lookup the original long URL from the database and redirect the user using the res.redirect() method.

Note that this is just a simple example, and a real-world URL shortener would need to implement additional security measures

like rate limiting, CAPTCHA, and user authentication to prevent abuse.
/*