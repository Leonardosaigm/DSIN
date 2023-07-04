import { Sequelize } from "sequelize";
import { Model, Table, Column, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/entities/user.entity";

@Table({paranoid: true})
export class Schedules extends Model {

    @Column({primaryKey: true, defaultValue: Sequelize.literal('uuid_generate_v4()')})
    id: string;

    @ForeignKey(() => User)
    @Column
    idFromUserTable: string;

    @Column
    dateHour: Date;

    @Column
    requestedService: string;
    
    @Column({defaultValue: 'false'})
    isServiceConfirmed: boolean;
}
