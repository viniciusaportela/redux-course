import React, { useEffect, useState } from "react";
import { useGetUsersQuery } from "./services/users";
import {
  FaCalendarTimes,
  FaEnvelopeOpen,
  FaLock,
  FaMap,
  FaPhone,
  FaUser,
} from "react-icons/fa";

function App() {
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState("Random Person");
  const [title, setTitle] = useState("name");

  const { data, isLoading, refetch } = useGetUsersQuery();

  const defaultImage = "https://randomuser.me/api/portraits/men/73.jpg";

  useEffect(() => {
    if (data) {
      const randomPerson = data.results[0];
      const {
        phone,
        email,
        picture: { large: image },
        login: { password },
        name: { first: firstName, last: lastName },
        dob: { age },
        location: {
          street: { number: streetNumber, name: streetName },
        },
      } = randomPerson;

      const newPerson = {
        image,
        phone,
        email,
        password,
        age,
        street: `${streetNumber} ${streetName}`,
        name: `${firstName} ${lastName}`,
      };

      setPerson(newPerson);
      setTitle("name");
      setValue(newPerson.name);
    }
  }, [data]);

  const onHoverButton = (event) => {
    if (event.target.classList.contains("icon")) {
      const newValue = event.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  const refetchUser = () => {
    refetch();
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={person ? person.image : defaultImage}
            alt="random_user_photo"
            className="user-img"
          />
          <p className="user-title">My {title}</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              data-label="name"
              onMouseOver={onHoverButton}
              className="icon"
            >
              <FaUser />
            </button>
            <button
              data-label="email"
              onMouseOver={onHoverButton}
              className="icon"
            >
              <FaEnvelopeOpen />
            </button>
            <button
              data-label="age"
              onMouseOver={onHoverButton}
              className="icon"
            >
              <FaCalendarTimes />
            </button>
            <button
              data-label="street"
              onMouseOver={onHoverButton}
              className="icon"
            >
              <FaMap />
            </button>
            <button
              data-label="phone"
              onMouseOver={onHoverButton}
              className="icon"
            >
              <FaPhone />
            </button>
            <button
              data-label="password"
              onMouseOver={onHoverButton}
              className="icon"
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={refetchUser}>
            {isLoading ? "loading ..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
