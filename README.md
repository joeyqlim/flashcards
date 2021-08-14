# just flashcards

This started off as a full-stack flashcards app for learning German nouns from the [Nico's Weg](https://learngerman.dw.com/en/overview) by Deutsche Welle. I outgrew that word list more quickly than I could update the app, and I'm now learning new words through reading books instead.

As I'm also learning Spanish, I redesigned the app to work generically with any language, and made the process of uploading word lists as simple as possible by using Airtable as a database.

| en     | translation |
| ------ | ----------- |
| Mother | die Mutter  |
| cliff  | acantilado  |

## Installation and use

1. Clone this repo
2. `npm install`
3. Fill in Airtable API key, base ID and sheet name in `src/data/airtableConfig.js`
4. Alternatively, replace the contents of `src/data/words.json`
5. `npm start`

## Technologies used

- Front end: React, SASS deployed on Netlify
- ~~Server: Flask deployed on Heroku~~
- Database: ~~Firebase Realtime Database~~ Airtable

## Features

- Mobile responsive
- Dark mode toggle
- Click to show/hide answers
- Randomized flashcards
- Works with any Airtable sheet or JSON file

## In progress

- Feature: mark cards as done/archived
