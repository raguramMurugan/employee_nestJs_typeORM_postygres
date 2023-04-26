import { Field, Int, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateProjectDto {

    @Field()
    id :string;

    @Field()
    project_name : string;

    @Field()
    client_location : string;

    @Field()
    project_type : string;

    @Field(() => Int)
    project_duration : number;

}