import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class CreateProjectDTO {

    @Field()
    project_name : string;

    @Field()
    client_location : string;

    @Field()
    project_type : string;

    @Field(() => Int)
    project_duration : number;

}