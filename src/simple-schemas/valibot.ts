import * as v from 'valibot'

export const Member = v.object({
  id: v.pipe(v.string(), v.uuid()),
  age: v.pipe(
    v.number(),
    v.integer(),
    v.minValue(20),
    v.maxValue(99) // exclusiveの代わりに-1しておく
  ),
  name: v.string(),
  time: v.optional(v.date()),
})

const schema = Member;

console.log(v.parse(schema, {}))
