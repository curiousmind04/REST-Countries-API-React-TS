declare module "myTypes" {
  type Country = {
    name: {
      common: string;
      nativeName: { [prop: string]: { common: string } };
    };
    population: number;
    region: string;
    capital: string[];
    flags: { png: string };
    borders?: string[];
    cca3: string;
    subregion?: string;
    tld: string[];
    currencies: { [prop: string]: { name: string } };
    languages: { [prop: string]: string };
  };
}

module.exports = {
  Country,
};
