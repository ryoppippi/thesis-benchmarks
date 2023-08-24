import { successData } from "../../data/success";
import { getValibotSchema } from "../../schemas/valibot";

const runs = parseInt(process.argv[2]) || 1;
const label = `Valibot | Success | ${runs} Runs`;
const schema = getValibotSchema();

console.time(label);

for (let index = 0; index < runs; index++) {
  schema._parse(successData);
}

console.timeEnd(label);
