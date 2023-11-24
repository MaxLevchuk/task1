import React, { useState } from 'react';

function ListComponent() {
  const initialCities = [
'Vinnytsia Oblast',
'Volyn Oblast',
'Dnipropetrovsk Oblast',
'Donetsk Oblast',
'Zhytomyr Oblast',
'Zakarpattia Oblast',
'Zaporizhzhia Oblast',
'Ivano-Frankivsk Oblast',
'Kyiv Oblast',
'Kirovohrad Oblast',
'Luhansk Oblast',
'Lviv Oblast',
'Mykolaiv Oblast',
'Odessa Oblast',
'Poltava Oblast',
'Rivne Oblast',
'Sumy Oblast',
'Ternopil Oblast',
'Kharkiv Oblast',
'Kherson Oblast',
'Khmelnytskyi Oblast',
'Cherkasy Oblast',
'Chernivtsi Oblast',
'Chernihiv Oblast'
  ];

  const [cities, setCities] = useState(initialCities);

  const addCity = () => {
    const newCity = prompt('Add new city');
    if (newCity) {
      setCities([...cities, newCity]);
    }
  };

  return (
    <div>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
      <button onClick={addCity}>Add city</button>
    </div>
  );
}

export default ListComponent;
