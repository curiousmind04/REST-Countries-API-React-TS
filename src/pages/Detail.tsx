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
        countries.find((country) => country.name.common === params.id)
      );
    }
  }, [params.id, countries]);

  // console.log(country);

  return (
    <div className={classes.container}>
      <Link to="/">
        <img src="/images/back-arrow.svg" alt="back arrow icon" />
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
