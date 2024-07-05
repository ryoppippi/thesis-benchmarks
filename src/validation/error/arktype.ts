import { errorData } from "../../data/error" with { type: 'macro' };
import { getArkTypeSchema } from "../../schemas/arktype";

const runs = parseInt(process.argv[2]) || 1;
const label = `ArkType | Error | ${runs} Runs`;
const schema = getArkTypeSchema();

console.time(label);

for (let index = 0; index < runs; index++) {
  schema(errorData);
}

console.timeEnd(label);
