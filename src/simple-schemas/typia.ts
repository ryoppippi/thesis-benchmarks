import typia, {type tags} from "typia";

export interface Member {
  id: string & tags.Format<"uuid">;
  name: string;
  time?: Date;
  age: number &
    tags.Type<"uint32"> &
    tags.Minimum<20> &
    tags.ExclusiveMaximum<100>;
}

console.log(typia.validate<Member>({}))
