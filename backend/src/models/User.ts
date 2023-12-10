import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class User {
  @Field(_type => ID) //indica para o graphQL que esse campo é único
  id: string;

  @Field()
  name: string;
}