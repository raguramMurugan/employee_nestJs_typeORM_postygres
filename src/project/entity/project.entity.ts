import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Field, ObjectType, Int } from '@nestjs/graphql'
import { Employee } from 'src/employee/entity/employee.entity';


@ObjectType()
@Entity()
export class Project {
    
    @Column()
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    @Field()
    project_name : string;

    @Column()
    @Field()
    client_location : string;

    @Column()
    @Field()
    project_type : string;

    @Column()
    @Field(() => Int)
    project_duration : number;

    @OneToMany(() => Employee, employee => employee.project)
    @Field(()=> [Employee], {nullable : true})
    employees : Employee[]



    
}