import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { GraphQLModule} from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [EmployeeModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type : "postgres",
      username : "postgres",
      password : "root",
      database : "dev_db",
      port : 5432,
      host : "localhost",
      entities : ["dist/**/*.entity{.ts,.js}"],
      synchronize :true
      
    }),
    ProjectModule
  ],
})
export class AppModule {}
