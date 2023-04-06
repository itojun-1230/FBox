import { initArray, randomArray } from "./array";
import { degreeToRadian, radianToDegree } from "./math";
import { repeat, repeatStep } from "./repeat";
import { timeMeasure } from "./system";

export const FboxArray = {
    initArray,
    randomArray
}
export const FboxRepeat = {
    repeat,
    repeatStep
}
export const FboxMath = {
    degreeToRadian,
    radianToDegree
}

export const FboxSystem = {
    timeMeasure
}