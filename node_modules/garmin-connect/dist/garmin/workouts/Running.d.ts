import { IRunningWorkout } from './templates/RunningTemplate';
export default class Running {
    private data;
    constructor();
    get name(): string;
    set name(name: string);
    get distance(): number;
    set distance(meters: number);
    get workoutId(): string | undefined;
    set workoutId(workoutId: string | undefined);
    get description(): string | undefined;
    set description(description: string | undefined);
    isValid(): boolean;
    toJson(): IRunningWorkout;
    toString(): string;
}
