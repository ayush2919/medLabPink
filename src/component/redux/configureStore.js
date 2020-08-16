import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Heart } from './LifeCycle/Heart';
import { Liver } from './LifeCycle/Liver';
import { Infertility } from './LifeCycle/Infertility';
import { Thyroid } from './LifeCycle/Thyroid';
import { Diabetes } from './LifeCycle/Diabetes';
import { Kidney } from './LifeCycle/Kidney';
import { Allergy } from './LifeCycle/Allergy';
import { Images } from './LifeCycle/Img';
import { Combos } from './ComboPackages';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            heart: Heart,
            liver:Liver,
            infertility:Infertility,
            thyroid:Thyroid,
            diabetes:Diabetes,
            kidney:Kidney,
            allergy:Allergy,
            images:Images,
            combos:Combos
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}