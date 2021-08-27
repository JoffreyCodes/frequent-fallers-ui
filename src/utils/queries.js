import { gql } from '@apollo/client';

const PRIOR_SUBMISSIONS = gql`
  query priorSubmissions($date: String){
    priorSubmissions(date: $date){
      date stuffyName didFall
    }
  }  
`;

const STUFFY_LIST = gql`
  query{
    stuffies{
      stuffyName primaryColor secondaryColor
    }  
  }
`;

const LOG_STUFFY_FALL = gql`
  mutation(
    $date: date,
    $stuffyName: stuffyName,
    $didFall: didFall
  ) {
    logStuffyFall(
      date: $date,
      stuffyName: $stuffyName,
      didFall: $didFall
    ){
      date  stuffyName  didFall
    }
  }
`;

export { LOG_STUFFY_FALL, PRIOR_SUBMISSIONS, STUFFY_LIST }