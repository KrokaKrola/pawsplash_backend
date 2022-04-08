import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { BullModule } from '@nestjs/bull';
import { UsersProcessor } from './users.processor';
import { MailerModule } from '../mailer/mailer.module';
import { UsersRegistrationService } from './services/users-registration.service';
import { UsersLoginService } from './services/users-login.service';
import { UsersService } from './services/users.service';
import { AuthModule } from '../auth/auth.module';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { AppConfigModule } from 'src/config/app/configuration.module';

@Module({
  imports: [
    MailerModule,
    AuthModule,
    BullModule.registerQueue({
      name: 'registrationEmailsQueue',
    }),
    AppConfigModule,
  ],
  providers: [
    UsersProcessor,
    UsersRegistrationService,
    UsersLoginService,
    UsersService,
    PrismaService,
  ],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
