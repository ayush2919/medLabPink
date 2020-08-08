import { baseUrl } from './baseUrl';
import { packages } from './lifeCycle';

export const fetchDishes = () => (dispatch) => {
    return fetch(baseUrl + 'lifeCycle')
    .then(response => {
        if (response.ok) {
        // console.log("success")
          return response;
        } else {
            // console.log("error")   
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    // .then(lifeCyclePackages => dispatch(console.log(lifeCyclePackages)))
    .then(lifeCyclePackages => dispatch(Heart(lifeCyclePackages)))
    .catch(error => dispatch(lifeCycleFailed(error.message)));
}

export const Heart=(dispatch) =>(lifeCyclePackages)=>{
  return {
    type:"ayush",
    payload:lifeCyclePackages
  }
}
export const lifeCycleFailed = (errmess) => ({
    type: "failed",
    payload: errmess
});