import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // ou 'database' se usar o nome do container Docker
      port: 3306,
      username: 'unicesumar',
      password: 'unicesumar',
      database: 'blog',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Apenas para desenvolvimento, desativar em produção
    }),
    AuthModule,
  ],
})
export class AppModule {}
