import { type, arrayOf } from "arktype";

const Schema = type({
  id: "number",
  created: "Date",
  title: "1<=string<=100",
  brand: "1<=string<=30",
  description: "1<=string<=500",
  price: "1<=number<=10000",
  discount: "1<=number<=100|null",
  quantity: "1<=number<=10",
  tags: "(1<=string<=30)[]",
  images: arrayOf({
    id: "number",
    created: "Date",
    title: "1<=string<=100",
    type: "'jpg'|'png'",
    url: /https?:\/\/.+/,
  }),
  ratings: arrayOf({
    id: "number",
    stars: "1<=number<=5",
    title: "1<=string<=100",
    text: "1<=string<=1000",
    images: arrayOf({
      id: "number",
      created: "Date",
      title: "1<=string<=100",
      type: "'jpg'|'png'",
      url: /https?:\/\/.+/,
    }),
  }),
});

Schema({});
