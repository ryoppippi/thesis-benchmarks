import { z } from 'zod'

 const Member = z.object({
  id: z.string().uuid(),
  age: z.number().int().min(20).max(99),
  name: z.string(),
  time: z.date().optional(),
})


const schema = Member

console.log(schema.safeParse({}))
