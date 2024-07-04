import type {tags} from "typia";

export type TypiaSchema = {
  id: number;
  created: Date;
  title: string & tags.MinLength<1> & tags.MaxLength<100>;
  brand: string & tags.MinLength<1> & tags.MaxLength<30>;
  description: string & tags.MinLength<1> & tags.MaxLength<500>;
  price: null | number & tags.Minimum<1> & tags.Maximum<10000>;
  discount: null | number & tags.Minimum<1> & tags.Maximum<100>;
  quantity: number & tags.Minimum<1> & tags.Maximum<10>;
  tags: string[] & tags.MinItems<1> & tags.MaxItems<30>;
  images: {
    id: number;
    created: Date;
    title: string & tags.MinLength<1> & tags.MaxLength<100>;
    type: "jpg" | "png";
    url: string & tags.Format<"url">;
  }[];
  ratings: {
    id: number;
    stars: number & tags.Minimum<1> & tags.Maximum<5>;
    title: string & tags.MinLength<1> & tags.MaxLength<100>;
    text: string & tags.MinLength<1> & tags.MaxLength<1000>;
    images: {
      id: number;
      created: Date;
      title: string & tags.MinLength<1> & tags.MaxLength<100>;
      type: "jpg" | "png";
      url: string & tags.Format<"url">;
    }[];
  }[];
};
