import * as path from 'path';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZakazModule } from './zakaz/zakaz.module';
import { ShopModule } from './shop/shop.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WithRoles } from 'src/auth/guards/with-roles.guard';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '..', 'static', 'uploads'),
      serveRoot: '/static/uploads',
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    PrismaModule,
    ZakazModule,
    ShopModule,
    ProductModule,
    SchedulerModule,
    FileModule,
    AuthModule,
    UserModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: WithRoles,
    },
  ],
})
export class AppModule {}
