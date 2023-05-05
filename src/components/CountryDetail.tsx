import { Country } from "myTypes";
import { Link } from "react-router-dom";
import classes from "./CountryDetail.module.css";

type Props = {
  country: Country;
  countries: Country[];
};

const CountryDetail: React.FC<Props> = ({ country, countries }) => {
  //   console.log(country);

  const borderCountries: Country[] = [];

  country.borders?.forEach((border) => {
    const borderCountry = countries.find((country) => country.cca3 === border);
    if (borderCountry) {
      borderCountries.push(borderCountry);
    }
  });

  //   console.log(borderCountries);

  const currenciesData: string[] = [];

  if (country.currencies) {
    for (let i = 0; i < Object.keys(country.currencies).length; i++) {
      currenciesData.push(Object.values(country.currencies)[i].name);
    }
  }

  //   console.log(currenciesData);

  const languagesData: string[] = [];

  if (country.languages) {
    for (let i = 0; i < Object.keys(country.languages).length; i++) {
      languagesData.push(Object.values(country.languages)[i]);
    }
  }

  //   console.log(languagesData);

  return (
    <div className={classes.container}>
      <div className={classes.flag}>
        <img src={country.flags.png} />
      </div>
      <div className={classes.right}>
        <h2>{country.name.common}</h2>
        <div className={classes.middle}>
          <ul className={classes.geography}>
            <li>
              <h3>Native Name: </h3>
              {country.name.nativeName ? (
                <p>{Object.values(country.name.nativeName)[0].common}</p>
              ) : (
                <p>N/A</p>
              )}
            </li>
            <li>
              <h3>Population: </h3>
              <p>{country.population.toLocaleString()}</p>
            </li>
            <li>
              <h3>Region: </h3>
              <p>{country.region}</p>
            </li>
            <li>
              <h3>Sub Region: </h3>
              {country.subregion ? <p>{country.subregion}</p> : <p>N/A</p>}
            </li>
            <li>
              <h3>Capital: </h3>
              {country.capital ? (
                <div>
                  {country.capital.map((cap) => (
                    <p key={cap}>
                      {country.capital.indexOf(cap) ===
                      country.capital.length - 1
                        ? `${cap}`
                        : `${cap},`}
                    </p>
                  ))}
                </div>
              ) : (
                <p>N/A</p>
              )}
            </li>
          </ul>

          <ul className={classes.info}>
            <li>
              <h3>Top Level Domain: </h3>
              {country.tld ? (
                <div>
                  {country.tld.map((item) => (
                    <p key={item}>
                      {country.tld.indexOf(item) === country.tld.length - 1
                        ? `${item}`
                        : `${item},`}
                    </p>
                  ))}
                </div>
              ) : (
                <p>N/A</p>
              )}
            </li>
            <li>
              <h3>Currencies: </h3>
              {country.currencies ? (
                <div>
                  {currenciesData.map((currency) => (
                    <p className={classes.capitalize} key={currency}>
                      {currenciesData.indexOf(currency) ===
                      currenciesData.length - 1
                        ? `${currency}`
                        : `${currency},`}
                    </p>
                  ))}
                </div>
              ) : (
                <p>N/A</p>
              )}
            </li>
            <li>
              <h3>Languages: </h3>
              {country.languages ? (
                <div>
                  {languagesData.map((language) => (
                    <p key={language}>
                      {languagesData.indexOf(language) ===
                      languagesData.length - 1
                        ? `${language}`
                        : `${language},`}
                    </p>
                  ))}
                </div>
              ) : (
                <p>N/A</p>
              )}
            </li>
          </ul>
        </div>

        <div className={classes.borders}>
          <span>Border Countries: </span>
          {country.borders === undefined && <span>N/A</span>}
          {country.borders && (
            <div className={classes.countries}>
              {borderCountries.map((borderCountry) => (
                <Link
                  to={`/${borderCountry.name.common.replace(/\s+/g, "")}`}
                  key={borderCountry.name.common}
                >
                  {borderCountry.name.common}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
