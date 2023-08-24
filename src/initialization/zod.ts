import { getZodSchema } from "../schemas/zod";

const runs = parseInt(process.argv[2]) || 1;
const label = `Zod | Init. | ${runs} Runs`;

console.time(label);

for (let index = 0; index < runs; index++) {
  getZodSchema();
}

console.timeEnd(label);
