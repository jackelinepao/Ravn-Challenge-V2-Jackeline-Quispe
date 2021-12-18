import { useQuery } from "@apollo/client";

import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import { PEOPLE_QUERY } from "../../graphql/queries/people";
import FailedLoad from "../FailedLoad";
import Loading from "../Loading";
import useStyles from "./styles"


export default function SideBar() {
  const classes = useStyles()
  const { loading, data, error, fetchMore } = useQuery(PEOPLE_QUERY/* , {
    variables: {
      first: 5,
    },
  } */);
  //El texto comentado es para que aparescan los primeros elementos, no pude mostrar los demás elementos
  return (
    <div className={classes.sideBar}>
      {error ? <FailedLoad /> : loading ?
        <Loading /> :
        data.allPeople.people.map((person, index) => (
          <NavLink to={`/person/${person.id}`} key={index} className={classes.itemList} activeClassName="active-link">
            <div >
              <h2>{person.name}</h2>
              <p>
                {person.species ? person.species.name : "Human"} from {person.homeworld.name}
              </p>
            </div>
            <div className={classes.contIcon}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </NavLink>
        ))
      }
    </div>
  )
}