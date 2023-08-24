import {
  array,
  date,
  enumType,
  maxLength,
  maxValue,
  minLength,
  minValue,
  nullable,
  number,
  object,
  string,
  url,
} from "valibot";

export function getValibotSchema() {
  return object({
    id: number(),
    created: date(),
    title: string([minLength(1), maxLength(100)]),
    brand: string([minLength(1), maxLength(30)]),
    description: string([minLength(1), maxLength(500)]),
    price: number([minValue(1), maxValue(10000)]),
    discount: nullable(number([minValue(1), maxValue(100)])),
    quantity: number([minValue(1), maxValue(10)]),
    tags: array(string([minLength(1), maxLength(30)])),
    images: array(
      object({
        id: number(),
        created: date(),
        title: string([minLength(1), maxLength(100)]),
        type: enumType(["jpg", "png"]),
        url: string([url()]),
      })
    ),
    ratings: array(
      object({
        id: number(),
        stars: number([minValue(0), maxValue(5)]),
        title: string([minLength(1), maxLength(100)]),
        text: string([minLength(1), maxLength(1000)]),
        images: array(
          object({
            id: number(),
            created: date(),
            title: string([minLength(1), maxLength(100)]),
            type: enumType(["jpg", "png"]),
            url: string([url()]),
          })
        ),
      })
    ),
  });
}
