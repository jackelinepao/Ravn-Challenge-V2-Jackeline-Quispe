import { gql } from "@apollo/client"

export const PEOPLE_QUERY = gql`
  query AllPerson($first: Int, $last: Int, $after: String){
    allPeople(first: $first, last: $last, after: $after) {
      people {
        id
        name
        species{
          id
          name
          language
          classification
        }
        homeworld{
          id
          name
        }
      }
    }
} `

export const PEOPLE_ID = gql`
  query Person($personId: ID) {
    person(id: $personId) {
      name
      birthYear
      eyeColor
      hairColor
      skinColor
      vehicleConnection {
        edges {
          node {
            id
            name
          }
        }
      }
    }
}`