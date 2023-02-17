import { useEffect, useState } from "react";
import Pet from "./Pet";

const ANIMALS = ["birds", "cat", "dog", "rabbit", "reptile"];

const SearchParam = () => {
  const [location, updateLocation] = useState("");
  const [animal, updateAnimals] = useState("");
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("");
  const breeds = [];

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();
    setPets(json.pets)
  }
  

  return (

   
    <div className="search-params">
      <form>        
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => updateLocation(e.target.value)}
        />
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              updateAnimals(e.target.value);
            }}
            onBlur={(e) => updateAnimals(e.target.value)}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            disabled={!breeds.length}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>submit</button>
      </form>
      {pets.map((pet) => (
            <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id}></Pet>
        ))} 
    </div>
  );
};
export default SearchParam;
