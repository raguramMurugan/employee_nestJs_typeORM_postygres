import { Field, ObjectType } from "@nestjs/graphql";
import { Project } from "src/project/entity/project.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";


@ObjectType()
@Entity()
export class Employee {
    @Field() //@Field is used to indicate which are included into Schema
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Field()
    @Column()
    firstname : string;

    @Field()
    @Column()
    lastname : string;

    @Column({nullable : true})
    @Field({nullable : true})
    city : string;

    @Field()
    @Column()
    designation : string;

    @ManyToOne(() =>Project, project =>project.employees)
    @Field(() => Project)
    project : Project

    @Column()
    @Field()
    projectId : string






}