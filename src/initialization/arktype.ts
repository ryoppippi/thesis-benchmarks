import { getArkTypeSchema } from "../schemas/arktype";

const runs = parseInt(process.argv[2]) || 1;
const label = `ArkType | Init. | ${runs} Runs`;

console.time(label);

for (let index = 0; index < runs; index++) {
  getArkTypeSchema();
}

console.timeEnd(label);
