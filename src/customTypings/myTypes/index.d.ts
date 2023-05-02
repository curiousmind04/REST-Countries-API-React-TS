declare module "myTypes" {
  type Country = {
    name: { official: string };
    population: number;
    region: string;
    capital: string[];
    flags: { png: string };
  };
}

module.exports = {
  Country,
};
