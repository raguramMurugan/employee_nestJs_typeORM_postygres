import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class EmployeeCreateDto {

    @Field()
    firstname : string;
    @Field()
    lastname : string;
    @Field({nullable : true})
    city : string;
    @Field()
    designation : string;
    @Field()
    projectId : string;
}