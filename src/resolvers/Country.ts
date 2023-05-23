import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { Country, CountryInput } from "../entities/Country";
import datasource from "../utils";

@Resolver()
export class CountryResolver {

    @Mutation(() => Country)
    async createCountry(
        @Arg("data", () => CountryInput) data: CountryInput
    ): Promise<Country> {
        return await datasource.getRepository(Country).save(data);
    }

    @Query(() => [Country])
    async countries(): Promise<Country[]> {
    return await datasource
      .getRepository(Country)
      .find();
    }

    @Query(() => Country)
    async product(@Arg("Code", () => String) code: string): Promise<Country> {
      let country = await datasource
        .getRepository(Country)
        .findOne({ where: { code }}); 
      return country;
    }
}