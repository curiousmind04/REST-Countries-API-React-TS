import { Country } from "myTypes";
import classes from "./CountriesList.module.css";
import CountriesItem from "./CountriesItem";

// interface Country {
//   name: { official: string };
// }

type Props = {
  countriesData: Country[];
};

const CountriesList: React.FC<Props> = ({ countriesData }) => {
  console.log(countriesData[0]);
  return (
    <>
      {countriesData && (
        <ul className={classes.list}>
          {countriesData.map((country: Country) => (
            <CountriesItem country={country} key={country.name.official} />
          ))}
        </ul>
      )}
    </>
  );
};

export default CountriesList;
