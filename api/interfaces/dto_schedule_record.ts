import { RunResult } from './dto_run_result';

export interface DtoScheduleRecord {

    id: number;

    scheduleId: string;

    duration: number;

    result: { origin: RunResult[], compare: RunResult[] };

    success: boolean;

    isScheduleRun: boolean;

    createDate: Date;
}