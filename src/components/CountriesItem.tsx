import { Country } from "myTypes";
import { Link } from "react-router-dom";
import classes from "./CountriesItem.module.css";

type Props = {
  country: Country;
};

const CountriesItem: React.FC<Props> = ({ country }) => {
  return (
    <li className={classes.item}>
      <div className={classes.flag}>
        <img src={country.flags.png} alt="flag image" />
      </div>
      <div className={classes.info}>
        <Link to={country.name.common}>
          <h2>{country.name.common}</h2>
        </Link>
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
          {country.capital ? (
            <div>
              {country.capital.map((cap) => (
                <p key={cap}>
                  {country.capital.indexOf(cap) === country.capital.length - 1
                    ? `${cap}`
                    : `${cap},`}
                </p>
              ))}
            </div>
          ) : (
            <p>N/A</p>
          )}
        </div>
      </div>
    </li>
  );
};

export default CountriesItem;
