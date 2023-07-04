import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    fullName: string;  

    @IsNotEmpty()
    cpf: string;  

    @IsNotEmpty() 
    password: string;

    admin: boolean;
}
