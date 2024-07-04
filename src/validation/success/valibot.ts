import { successData } from "../../data/success";
import { getValibotSchema } from "../../schemas/valibot";
import * as v from "valibot";

const runs = parseInt(process.argv[2]) || 1;
const label = `Valibot | Success | ${runs} Runs`;
const schema = getValibotSchema();

console.time(label);

for (let index = 0; index < runs; index++) {
  v.parse(schema, successData);
}

console.timeEnd(label);
