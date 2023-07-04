import { Sequelize } from "sequelize";
import { Model, Table, Column } from "sequelize-typescript";

@Table({paranoid: true})
export class User extends Model {

    @Column({primaryKey: true, defaultValue: Sequelize.literal('uuid_generate_v4()')})
    id: string;

    @Column
    fullName: string;

    @Column
    cpf: string;

    @Column
    password: string;

    @Column({defaultValue: false})
    admin: boolean;
}
