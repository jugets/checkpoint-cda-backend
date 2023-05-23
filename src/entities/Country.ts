import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
@ObjectType()
export class Country {
    @PrimaryColumn()
    @Field(() => ID)
    code: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    emoji: string;
}

@InputType()
export class CountryInput {
    @Field()
    code: string;

    @Field()
    name: string;

    @Field()
    emoji: string
}