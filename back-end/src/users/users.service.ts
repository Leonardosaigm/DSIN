import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';


@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userModel.findOne({where: {cpf: loginUserDto.cpf}})
    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND)
    } 
    if (user.password !== loginUserDto.password) {
      throw new HttpException('Senha incorreta', HttpStatus.UNAUTHORIZED)
    }
    return user
  }


  create(createUserDto: CreateUserDto) {
    return this.userModel.create({...createUserDto});
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: string) {
    return this.userModel.findOne({where: {id}});
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.update({...updateUserDto}, {where: {id}});
  }

  remove(id: string) {
    return this.userModel.destroy({where: {id}});
  }
}
