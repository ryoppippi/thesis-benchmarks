import { errorData } from "../../data/error";
import { getValibotSchema } from "../../schemas/valibot";

const runs = parseInt(process.argv[2]) || 1;
const label = `Valibot | Error | ${runs} Runs`;
const schema = getValibotSchema();

console.time(label);

for (let index = 0; index < runs; index++) {
  schema._parse(errorData);
}

console.timeEnd(label);
