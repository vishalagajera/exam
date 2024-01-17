import { City, Country, State } from 'country-state-city'
import React, { useMemo, useState } from 'react'

const FormSelectBox = ({warning, className, arrayKey, country, selectedCountry, state, selectedState  , city , selectedCity}) => {

    const allStates = State.getStatesOfCountry(selectedCountry);
    const allCountry = Country.getAllCountries();
    const allCities = City.getCitiesOfState(selectedCountry, selectedState)
    const handleChange = (e) => {
        if (arrayKey === "country") {
            country(e.target.value)
        }
        else if (arrayKey === "states") {
            state(e.target.value)
        }
        else if (arrayKey === "cities") {
            city(e.target.value)
        }
    }
    const renderOptions = useMemo(() => {

        if (arrayKey === "country") {
            return allCountry.map((e) => {
                return <option value={e.isoCode}>{e.name}</option>
            })
        }
        else if (arrayKey == "states") {
            return allStates.map((e) => {
                return <option value={e.isoCode}>{e.name}</option>
            })
        }
        else if (arrayKey === "cities") {
            return allCities.map((e) => {
                return <option value={e.isoCode}>{e.name}</option>
            })
        }
    }, [selectedCountry, selectedState])
    return (
        <div className='--allinput'>
        <select className={className} onChange={handleChange}>
            <option value="">{arrayKey}</option>
            {renderOptions}
        </select>
        <span>{warning}</span>
        </div>

    )
}

export default FormSelectBox