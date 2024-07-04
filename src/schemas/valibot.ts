import * as v from "valibot";

export function getValibotSchema() {
  return v.object({
    id: v.number(),
    created: v.date(),
    title: v.pipe(v.string(), v.minLength(1), v.maxLength(100)),
    brand: v.pipe(v.string(), v.minLength(1), v.maxLength(30)),
    description: v.pipe(v.string(), v.minLength(1), v.maxLength(500)),
    price: v.pipe(v.number(), v.minValue(1), v.maxValue(10000)),
    discount: v.nullable(v.pipe(v.number(), v.minValue(1), v.maxValue(100))),
    quantity: v.pipe(v.number(), v.minValue(1), v.maxValue(10)),
    tags: v.array(v.pipe(v.string(), v.minLength(1), v.maxLength(30))),
    images: v.array(
      v.object({
        id: v.number(),
        created: v.date(),
        title: v.pipe(v.string(), v.minLength(1), v.maxLength(100)),
        type: v.union([v.literal("jpg"), v.literal("png")]),
        url: v.pipe(v.string(), v.url()),
      })
    ),
    ratings: v.array(
      v.object({
        id: v.number(),
        stars: v.pipe(v.number(), v.minValue(0), v.maxValue(5)),
        title: v.pipe(v.string(), v.minLength(1), v.maxLength(100)),
        text: v.pipe(v.string(), v.minLength(1), v.maxLength(1000)),
        images: v.array(
          v.object({
            id: v.number(),
            created: v.date(),
            title: v.pipe(v.string(), v.minLength(1), v.maxLength(100)),
            type: v.union([v.literal("jpg"), v.literal("png")]),
            url: v.pipe(v.string(), v.url()),
          })
        ),
      })
    ),
  });
}
