import { City, State } from "country-state-city";
import React, { useMemo, useState } from "react";

const FormSelectBox = ({
  warning,
  className,
  arrayKey,
    state ,
    city,
    selectedState ,
    selectedCity
}) => {

  const allStates = State.getStatesOfCountry("IN");
  const allCities = City.getCitiesOfState("IN", selectedState);

  const handleChange = (e) => {
    const value = e.target.value;

    if (arrayKey === "states") {
      state(value);
      city("");
    } else if (arrayKey === "cities") {
      city(value);
    }
  };

  const renderOptions = useMemo(() => {
    if (arrayKey === "states") {
      return allStates.map((state) => (
        <option key={state.isoCode} value={state.isoCode}>
          {state.name}
        </option>
      ));
    } else if (arrayKey === "cities") {
      return allCities.map((city) => (
        <option key={city.isoCode} value={city.isoCode}>
          {city.name}
        </option>
      ));
    }
  }, [ allStates , state, city, selectedState]);

  return (
    <div className="--allinput">
      <select
        className={className}
        onChange={handleChange}
        value={arrayKey === "states" ? selectedState : selectedCity}
      >
        <option value="">{arrayKey}</option>
        {renderOptions}
      </select>
      <span>{warning}</span>
    </div>
  );
};

export default FormSelectBox;
