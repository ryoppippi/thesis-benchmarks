import { getValibotSchema } from "../schemas/valibot";

const runs = parseInt(process.argv[2]) || 1;
const label = `Valibot | Init. | ${runs} Runs`;

console.time(label);

for (let index = 0; index < runs; index++) {
  getValibotSchema();
}

console.timeEnd(label);
