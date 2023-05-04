import { Country } from "myTypes";
import classes from "./CountriesList.module.css";
import CountriesItem from "./CountriesItem";

type Props = {
  countriesData: Country[];
};

const CountriesList: React.FC<Props> = ({ countriesData }) => {
  //   console.log(countriesData);

  return (
    <>
      {countriesData && (
        <ul className={classes.list}>
          {countriesData.map((country: Country) => (
            <CountriesItem country={country} key={country.name.common} />
          ))}
        </ul>
      )}
    </>
  );
};

export default CountriesList;
