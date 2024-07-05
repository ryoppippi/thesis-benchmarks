import { type } from "arktype";

const Member = type({
  id: ['string', 'uuid'],
  age: ['20 <= number < 99', 'integer'],
  name: 'string',
  "time?": 'Date',
});

const schema = Member;

console.log(schema({}))
