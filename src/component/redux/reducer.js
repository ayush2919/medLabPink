import KidneyPackages from '../../data/KidneyTest';
import LiverPackages from '../../data/LiverTest';
import HeartPackages from '../../data/HeartTest';
import InfertilityPackages from '../../data/InfertilityTest';
import ThyroidPackages from '../../data/ThyroidTest';
import DiabetesPackages from '../../data/DiabetesTest';
import AllergyPackages from '../../data/AllergyTest';

export const initialState = {
    KidneyPackages: KidneyPackages,
    LiverPackages: LiverPackages,
    HeartPackages: HeartPackages,
    InfertilityPackages: InfertilityPackages,
    ThyroidPackages: ThyroidPackages,
    DiabetesPackages: DiabetesPackages,
    AllergyPackages: AllergyPackages
};

export const Reducer = (state = initialState, action) => {
    return state;
};