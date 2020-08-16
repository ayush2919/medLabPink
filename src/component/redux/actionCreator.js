import * as ActionTypes from './ActionTypes';
import { baseUrl } from './baseUrl';


export const fetchLifeCycle = () => (dispatch) => {
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
     var heart= pack.selectPackage.filter(fetchPackage=>fetchPackage.name==="Heart")[0]
     var liver=pack.selectPackage.filter(fetchPackage=>fetchPackage.name==="Liver")[0]
     var allergy=pack.selectPackage.filter(fetchPackage=>fetchPackage.name==="Allergy")[0]
     var kidney=pack.selectPackage.filter(fetchPackage=>fetchPackage.name==="Kidney")[0]
     var diabetes=pack.selectPackage.filter(fetchPackage=>fetchPackage.name==="Diabetes")[0]
     var infertility=pack.selectPackage.filter(fetchPackage=>fetchPackage.name==="Infertility")[0]
     var thyroid=pack.selectPackage.filter(fetchPackage=>fetchPackage.name==="Thyroid")[0]
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

export const fetchImages = () => (dispatch) => {    
  return fetch(baseUrl + 'imagePath')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
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
  .then(image => dispatch(addImages(image[0].imagePath)))
  // .then(images => dispatch(console.log(images.filter(image => image=="imagePath")[0])))
  .catch(error => dispatch(imagesFailed(error.message)));
};

export const addImages=(Images)=>({
  type:ActionTypes.ADD_IMG,
  payload:Images
})
export const imagesFailed=(errmess)=>({
  type:ActionTypes.IMG_FAILED,
  payload:errmess
})


export const fetchCombos = () => (dispatch) => {    
  return fetch(baseUrl + 'combos')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
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
  // .then(comboPackages => dispatch(addcombos(comboPackages)))
  .then(combos => dispatch(console.log(combos)))
  .catch(error => dispatch(combosFailed(error.message)));
};

export const addcombos=(combos)=>({
  type:ActionTypes.ADD_IMG,
  payload:combos
})
export const combosFailed=(errmess)=>({
  type:ActionTypes.IMG_FAILED,
  payload:errmess
})