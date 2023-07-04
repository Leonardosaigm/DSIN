import { IsNotEmpty } from "class-validator";

export class LoginUserDto {
    @IsNotEmpty()
    cpf: string;  

    @IsNotEmpty() 
    password: string;

}
