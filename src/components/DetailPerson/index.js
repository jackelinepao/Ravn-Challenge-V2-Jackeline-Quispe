import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { PEOPLE_ID } from "../../graphql/queries/people";
import FailedLoad from "../FailedLoad";
import Loading from "../Loading";
import useStyles from "./styles";

export default function DetailPerson() {
  const classes = useStyles()
  const { id } = useParams();
  const { data, loading, error } = useQuery(PEOPLE_ID, {
    variables: {
      personId: id,
    },
  });

  return (
    <div className={classes.boxDetail}>
      <div className={classes.contBoxDetail}>
        {error ?
          <FailedLoad /> :
          loading ?
            <Loading /> :
            <div className={classes.wraper}>
              <div className={classes.box}>
                <h3 className={classes.title}>General Information</h3>
                <ul>
                  <li className={classes.listItem}>
                    <h3 className={classes.textTitle}>Eye Color</h3>
                    {data.person.eyeColor &&
                      <h3 className={classes.textDetail}>{data.person.eyeColor}</h3>
                    }
                  </li>
                  <li className={classes.listItem}>
                    <h3 className={classes.textTitle}>Hair Color</h3>
                    {data.person.hairColor &&
                      <h3 className={classes.textDetail}>{data.person.hairColor}</h3>
                    }
                  </li>
                  <li className={classes.listItem}>
                    <h3 className={classes.textTitle}>Skin Color</h3>
                    {data.person.skinColor &&
                      <h3 className={classes.textDetail}>{data.person.skinColor}</h3>
                    }
                  </li>
                  <li className={classes.listItem}>
                    <h3 className={classes.textTitle}>Birth Year</h3>
                    {data.person.birthYear &&
                      <h3 className={classes.textDetail}>{data.person.birthYear}</h3>
                    }
                  </li>
                </ul>
              </div>
              {data.person.vehicleConnection.edges.length > 0 ?
                <div className={classes.box}>
                  <h3 className={classes.title}>Vehicles</h3>
                  <ul>
                    {
                      data.person.vehicleConnection.edges.map((vehicle, index) => (
                        <li className={classes.listItem} key={index}>
                          <h3 className={classes.textTitle}>{vehicle.node.name}</h3>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                : null}
            </div>
        }
      </div>
    </div>
  )
}
