declare module "myTypes" {
  type Country = {
    name: { common: string };
    population: number;
    region: string;
    capital: string[];
    flags: { png: string };
  };
}

module.exports = {
  Country,
};
