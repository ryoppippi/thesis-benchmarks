import typia from "typia";
import { successData } from "../../data/success" with { type: 'macro' };
import type { TypiaSchema } from "../../schemas/typia";

const runs = parseInt(process.argv[2]) || 1;
const label = `Typia | Success | ${runs} Runs`;

console.time(label);

for (let index = 0; index < runs; index++) {
  typia.validate<TypiaSchema>(successData);
}

console.timeEnd(label);
