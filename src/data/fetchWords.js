var Airtable = require("airtable");
// CHANGE YOUR API KEY and BASE KEY
var base = new Airtable({ apiKey: "keyG6DUpgjDhGvQBw" }).base(
  "appXko7rygfIr6miQ"
); // read-only API key for demo

export default function fetchWords() {
  return new Promise((resolve, reject) => {
    const words = [];
    // SELECT YOUR SHEET
    base("de")
      .select()
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            words.push(record.fields);
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(words);
          }
        }
      );
  });
}
