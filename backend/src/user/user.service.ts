import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {

    const oldUser = await this.userRepo.createQueryBuilder()
    .where('adress = :address', {address: createUserDto.address})
    .getOne();

    if (oldUser) {
      oldUser.username = createUserDto.username ? createUserDto.username : oldUser.username;
      const saved = await this.userRepo.save(oldUser);

      return {
        status: HttpStatus.OK,
        data: saved
      };
    }

    const user = new User();
    user.address = createUserDto.address;
    user.username = createUserDto.username;

    const saved = await this.userRepo.save(user);

    return {
      status: HttpStatus.OK,
      data: saved,
    };
  }



  findAll() {
    return `This action returns all user`;
  }

  async findByAddress(address: string){

    const user = await this.userRepo.createQueryBuilder().where('address = :address', {address})
    .getOne();
    
    return {
      status: user ? HttpStatus.OK : HttpStatus.BAD_REQUEST,
      data: user
    };
  }

  async findOne(id: number) {
    const user = await this.userRepo.createQueryBuilder().where('id = :id', {id})
    .getOne();
    
    return {
      status: user ? HttpStatus.OK : HttpStatus.BAD_REQUEST,
      data: user
    };;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
