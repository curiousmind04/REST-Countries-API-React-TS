import { useState, useRef } from "react";
import { Country } from "myTypes";

import classes from "./Home.module.css";
import CountriesList from "../components/CountriesList";

type Props = {
  countries: Country[] | undefined;
};

const HomePage: React.FC<Props> = ({ countries }) => {
  const [filteredCountries, setFilteredCountries] = useState<Country[]>();
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [option, setOption] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const openFilterHandler = () => {
    setShowOptions((prevState) => !prevState);
  };

  const optionHandler = (chosenOption: string) => {
    if (option !== chosenOption) {
      setOption(chosenOption);
      setShowOptions(false);
      setFilteredCountries(
        countries?.filter((country) => country.region === chosenOption)
      );
      if (inputRef.current && inputRef.current?.value !== "") {
        inputRef.current.value = "";
      }
    } else {
      setOption(null);
      setShowOptions(false);
      setFilteredCountries(undefined);
      if (inputRef.current && inputRef.current?.value !== "") {
        inputRef.current.value = "";
      }
    }
  };

  const searchHandler = () => {
    const currentInput = inputRef.current?.value.toLowerCase();

    if (currentInput === "" && !option) {
      setFilteredCountries(undefined);
    }

    if (currentInput === "" && option) {
      setFilteredCountries(
        countries?.filter((country) => country.region === option)
      );
    }

    if (currentInput !== "" && option && countries) {
      setFilteredCountries(
        countries.filter(
          (country) =>
            country.name.common.toLowerCase().slice(0, currentInput?.length) ===
              currentInput && country.region === option
        )
      );
    }

    if (currentInput !== "" && !option && countries) {
      setFilteredCountries(
        countries.filter(
          (country) =>
            country.name.common.toLowerCase().slice(0, currentInput?.length) ===
            currentInput
        )
      );
    }
  };

  return (
    <div>
      <div className={classes.contain}>
        <input
          className={classes.search}
          placeholder="Search for a country..."
          ref={inputRef}
          onChange={searchHandler}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
      </div>

      {showOptions && (
        <div className={classes.backdrop} onClick={openFilterHandler}></div>
      )}
      <div className={classes.filter}>
        <div
          className={showOptions ? classes.open : classes.closed}
          onClick={openFilterHandler}
        >
          <span>{option ? option : "Filter by region"}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </div>
        {showOptions && (
          <div className={classes.options}>
            <div
              className={option === "Africa" ? classes.chosen : ""}
              onClick={optionHandler.bind(null, "Africa")}
            >
              Africa
            </div>
            <div
              className={option === "Americas" ? classes.chosen : ""}
              onClick={optionHandler.bind(null, "Americas")}
            >
              Americas
            </div>
            <div
              className={option === "Antarctic" ? classes.chosen : ""}
              onClick={optionHandler.bind(null, "Antarctic")}
            >
              Antarctic
            </div>
            <div
              className={option === "Asia" ? classes.chosen : ""}
              onClick={optionHandler.bind(null, "Asia")}
            >
              Asia
            </div>
            <div
              className={option === "Europe" ? classes.chosen : ""}
              onClick={optionHandler.bind(null, "Europe")}
            >
              Europe
            </div>
            <div
              className={option === "Oceania" ? classes.chosen : ""}
              onClick={optionHandler.bind(null, "Oceania")}
            >
              Oceania
            </div>
          </div>
        )}
      </div>

      {!filteredCountries && countries && countries.length !== 0 && (
        <CountriesList countriesData={countries} />
      )}
      {filteredCountries && filteredCountries.length !== 0 && (
        <CountriesList countriesData={filteredCountries} />
      )}
      {!filteredCountries && !countries && (
        <div className={classes.error}>No Countries Found</div>
      )}
    </div>
  );
};

export default HomePage;
