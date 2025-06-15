import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CustomerModule, PrismaModule],
})
export class AppModule {}
