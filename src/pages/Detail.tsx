import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Country } from "myTypes";
import classes from "./Detail.module.css";
import CountryDetail from "../components/CountryDetail";

type Props = {
  countries: Country[] | undefined;
};

const DetailPage: React.FC<Props> = ({ countries }) => {
  const params = useParams<{ id: string }>();
  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    if (countries) {
      setCountry(
        countries.find(
          (country) => country.name.common.replace(/\s+/g, "") === params.id
        )
      );
    }
  }, [params.id, countries]);

  // console.log(country);

  return (
    <div className={classes.container}>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
          />
        </svg>
        <span>Back</span>
      </Link>
      {country && countries && (
        <CountryDetail country={country} countries={countries} />
      )}
      {!country && <div className={classes.error}>Country Not Found</div>}
    </div>
  );
};

export default DetailPage;
