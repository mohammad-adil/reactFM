import React, { useState } from 'react'
import { ANIMALS } from '@frontendmasters/pet'
import useDropdown from "./useDropdown"


const searchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animals", "dog", ANIMALS)
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds)
    return (
        <div className="">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location" onChange={
                        e => setLocation(e.target.value)
                    } />
                    <button>Submit</button>
                </label>
                <AnimalDropdown />
                <BreedDropdown />

            </form>
        </div >

    );

};

export default searchParams;