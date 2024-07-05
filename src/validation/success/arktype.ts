import { successData } from "../../data/success" with { type: 'macro' };
import { getArkTypeSchema } from "../../schemas/arktype";

const runs = parseInt(process.argv[2]) || 1;
const label = `ArkType | Success | ${runs} Runs`;
const schema = getArkTypeSchema();

console.time(label);

for (let index = 0; index < runs; index++) {
  schema(successData);
}

console.timeEnd(label);
