import typia from "typia";
import { errorData } from "../../data/error" with { type: 'macro' };
import type { TypiaSchema } from "../../schemas/typia";

const runs = parseInt(process.argv[2]) || 1;
const label = `Typia | Success | ${runs} Runs`;

console.time(label);

for (let index = 0; index < runs; index++) {
  typia.validate<TypiaSchema>(errorData);
}

console.timeEnd(label);
