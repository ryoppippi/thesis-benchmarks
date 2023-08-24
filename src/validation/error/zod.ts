import { errorData } from "../../data/error";
import { getZodSchema } from "../../schemas/zod";

const runs = parseInt(process.argv[2]) || 1;
const label = `Zod | Error | ${runs} Runs`;
const schema = getZodSchema();

console.time(label);

for (let index = 0; index < runs; index++) {
  schema.safeParse(errorData);
}

console.timeEnd(label);
