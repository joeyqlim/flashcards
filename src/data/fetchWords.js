import { apiKey, baseId, sheetName } from "./airtableConfig";

const Airtable = require("airtable");

const base = new Airtable({ apiKey: apiKey }).base(baseId);

export default function fetchWords() {
  return new Promise((resolve, reject) => {
    const words = [];
    base(sheetName)
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
