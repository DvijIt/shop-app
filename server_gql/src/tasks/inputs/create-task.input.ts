import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field()
  task: string;

  @Field({ defaultValue: false })
  completed: boolean;
}
