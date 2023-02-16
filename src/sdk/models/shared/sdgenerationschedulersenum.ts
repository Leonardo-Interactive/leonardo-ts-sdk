import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum SdGenerationSchedulersEnum {
    Klms = "KLMS",
    EulerAncestralDiscrete = "EULER_ANCESTRAL_DISCRETE",
    EulerDiscrete = "EULER_DISCRETE",
    Ddim = "DDIM",
    DpmSolver = "DPM_SOLVER",
    Pndm = "PNDM",
    Null = "null"
}