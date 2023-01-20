import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class UsersResponseDto {
  @Field(() => String, {
    description: '로그인 아이디',
    nullable: false,
  })
  loginId!: string;

  @Field(() => String, {
    description: '로그인 비밀번호',
    nullable: false,
  })
  password!: string;

  @Field(() => String, {
    description: '유저 이름',
    nullable: false,
  })
  name!: string;

  @Field(() => String, {
    description: '유저 닉네임(플랫폼 내 활동명)',
    nullable: false,
  })
  nickName!: string;

  @Field(() => String, {
    description: '유저 핸드폰 번호',
    nullable: false,
  })
  phone!: string;

  @Field(() => String, {
    description: '유저 거주지 주소',
    nullable: false,
  })
  address!: string;
}
