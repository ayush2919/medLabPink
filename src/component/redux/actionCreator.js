import * as ActionTypes from './ActionTypes';
import { baseUrl } from './baseUrl';


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
    //  .then(lifeCyclePackages =>dispatch(addLifeCycle(lifeCyclePackages)))
    .then(lifeCyclePackages => lifeCyclePackages.map( pack =>{
     var heart= pack.selectPackage.filter(fetchPackage=>fetchPackage.name=="Heart")[0]
     var liver=pack.selectPackage.filter(fetchPackage=>fetchPackage.name=="Liver")[0]
     var allergy=pack.selectPackage.filter(fetchPackage=>fetchPackage.name=="Allergy")[0]
     var kidney=pack.selectPackage.filter(fetchPackage=>fetchPackage.name=="Kidney")[0]
     var diabetes=pack.selectPackage.filter(fetchPackage=>fetchPackage.name=="Diabetes")[0]
     var infertility=pack.selectPackage.filter(fetchPackage=>fetchPackage.name=="Infertility")[0]
     var thyroid=pack.selectPackage.filter(fetchPackage=>fetchPackage.name=="Thyroid")[0]
     dispatch(addLifeCycle(heart.packages,liver.packages,allergy.packages,kidney.packages,
      diabetes.packages,infertility.packages,thyroid.packages))
    }))
    .catch(error => dispatch(lifeCycleFailed(error.message)));
}

export const addLifeCycle =(heart ,liver,allergy,kidney,diabetes,infertility,thyroid)=>({
  type:ActionTypes.ADD_PACKAGES,
  payload:
    {
      heartPackages       : heart,
      liverPackages       : liver,
      allergyPackages     : allergy,
      kidneyPackages      :  kidney,
      diabetesPackages    : diabetes,
      infertilityPackages : infertility,
      thyroidPackages     : thyroid
    }
  })
export const lifeCycleFailed = (errmess) => ({
    type: ActionTypes.PACKAGES_FAILED,
    payload: errmess
});

