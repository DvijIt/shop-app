import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  task: string;

  @Field({ nullable: true })
  completed: boolean;
}