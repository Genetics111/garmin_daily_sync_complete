export interface ISportType {
    sportTypeId: number;
    sportTypeKey: SportTypeKey;
}
declare enum SportTypeKey {
    running = "running"
}
export interface IRunningWorkout {
    workoutId: string | undefined;
    description: string | undefined;
    sportType: ISportType;
    workoutName: string;
    workoutSegments: IWorkoutSegment[];
}
export interface IWorkoutSegment {
    segmentOrder: number;
    sportType: ISportType;
    workoutSteps: IWorkoutStep[];
}
export interface IWorkoutStep {
    type: WorkoutStepType;
    stepId: unknown;
    stepOrder: number;
    childStepId: unknown;
    description: string | null;
    stepType: IStepType;
    endCondition: IEndCondition;
    preferredEndConditionUnit: IPreferredEndConditionUnit;
    endConditionValue: number | null;
    endConditionCompare: null;
    endConditionZone: null;
    targetType: ITargetType;
    targetValueOne: null;
    targetValueTwo: null;
    zoneNumber: null;
}
declare enum WorkoutStepType {
    executableStepDTO = "ExecutableStepDTO"
}
export interface IStepType {
    stepTypeId: number;
    stepTypeKey: StepTypeKey;
}
declare enum StepTypeKey {
    interval = "interval"
}
export interface IEndCondition {
    conditionTypeKey: ConditionTypeKey;
    conditionTypeId: number;
}
declare enum ConditionTypeKey {
    distance = "distance"
}
export interface IPreferredEndConditionUnit {
    unitKey: UnitKey;
}
declare enum UnitKey {
    kilometer = "kilometer"
}
export interface ITargetType {
    workoutTargetTypeId: number;
    workoutTargetTypeKey: WorkoutTargetTypeKey;
}
declare enum WorkoutTargetTypeKey {
    noTarget = "no.target"
}
export default function (): IRunningWorkout;
export {};
