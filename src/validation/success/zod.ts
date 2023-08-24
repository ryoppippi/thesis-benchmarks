import { successData } from "../../data/success";
import { getZodSchema } from "../../schemas/zod";

const runs = parseInt(process.argv[2]) || 1;
const label = `Zod | Success | ${runs} Runs`;
const schema = getZodSchema();

console.time(label);

for (let index = 0; index < runs; index++) {
  schema.safeParse(successData);
}

console.timeEnd(label);
