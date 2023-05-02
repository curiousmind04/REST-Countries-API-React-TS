import { useEffect, useState } from "react";
import { Country } from "myTypes";
import classes from "./Home.module.css";
import CountriesList from "../components/CountriesList";

const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>();

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        console.log("error");
        return;
      }
      const data = await response.json();
      setCountries(data);
    };
    sendRequest();
  }, []);

  //   if (countries) {
  //     console.log(countries[0]);
  //   }

  return (
    <div>
      <input className={classes.search} placeholder="Search for a country..." />
      <select name="regions" id="region-select" className={classes.filter}>
        <option value="">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      {countries && countries.length !== 0 && (
        <CountriesList countriesData={countries} />
      )}
    </div>
  );
};

export default HomePage;
