import { Country } from "myTypes";
import classes from "./CountriesItem.module.css";

type Props = {
  country: Country;
};

const CountriesItem: React.FC<Props> = ({ country }) => {
  //   if (country.capital && country.capital.length && country.capital.length > 1) {
  //     console.log(country.capital.length);
  //   }

  return (
    <li className={classes.item}>
      <div className={classes.flag}>
        <img src={country.flags.png} />
      </div>
      <div className={classes.info}>
        <h2>{country.name.official}</h2>
        <div>
          <span className={classes.property}>Population: </span>
          <span>{country.population.toLocaleString()}</span>
        </div>
        <div>
          <span className={classes.property}>Region: </span>
          <span>{country.region}</span>
        </div>
        <div>
          <span className={classes.property}>Capital: </span>
          {!country.capital && <span>N/A</span>}
          {country.capital && country.capital.length === 1 && (
            <span>{country.capital}</span>
          )}
          {country.capital && country.capital.length === 2 && (
            <span>{`${country.capital[0]}, ${country.capital[1]}`}</span>
          )}
          {country.capital && country.capital.length === 3 && (
            <span>
              {`${country.capital[0]}, ${country.capital[1]}, ${country.capital[2]}`}
            </span>
          )}
        </div>
      </div>
    </li>
  );
};

export default CountriesItem;
