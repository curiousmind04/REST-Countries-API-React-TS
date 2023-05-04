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
      <input
        className={classes.search}
        placeholder="Search for a country..."
        ref={inputRef}
        onChange={searchHandler}
      />
      {showOptions && (
        <div className={classes.backdrop} onClick={openFilterHandler}></div>
      )}
      <div className={classes.filter}>
        <div
          className={showOptions ? classes.open : classes.closed}
          onClick={openFilterHandler}
        >
          <span>{option ? option : "Filter by region"}</span>
          <img src="/images/arrow.svg" alt="arrow icon" />
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
