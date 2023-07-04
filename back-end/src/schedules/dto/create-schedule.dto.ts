import { IsNotEmpty } from "class-validator";

export class CreateScheduleDto {
    @IsNotEmpty()
    idFromUserTable: string;

    @IsNotEmpty()
    dateHour: Date;

    @IsNotEmpty()
    requestedService: string;
}
