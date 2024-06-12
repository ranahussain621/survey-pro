import { Query, Resolver } from '@nestjs/graphql'

import { helper } from '@heyform-inc/utils'

import { Auth, User } from '@decorator'
import { UserDetailType } from '@graphql'
import { UserModel } from '@model'
import { SocialLoginService } from '@service'

@Resolver()
@Auth()
export class UserDetailResolver {
  constructor(private readonly socialLoginService: SocialLoginService) {}

  @Query(returns => UserDetailType)
  async userDetail(@User() user: UserModel): Promise<UserDetailType> {
    const result = await this.socialLoginService.findByUserId(user.id)

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      lang: user.lang,
      isEmailVerified: user.isEmailVerified,
      isSocialAccount: helper.isValid(result),
      isDeletionScheduled: user.isDeletionScheduled,
      deletionScheduledAt: user.deletionScheduledAt
    }
  }
}
