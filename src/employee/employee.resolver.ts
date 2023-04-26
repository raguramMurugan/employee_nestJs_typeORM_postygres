import { Resolver, Query, Mutation, Args, ResolveField } from '@nestjs/graphql';
import { Employee } from './entity/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDto } from './entity/dto/create-employee.input';
import { Parent} from '@nestjs/graphql'
import { Project } from 'src/project/entity/project.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
    constructor(private employeeService : EmployeeService) {}

@Query(() => [Employee], {name : 'getAllEmployee'})
getListOfAllEmployee() {
    return this.employeeService.getListOfAllEmployee()
}

@Mutation(() => Employee, {name : 'addEmployeeDetails'})
addEmployeeDetails (@Args('employee') employee : EmployeeCreateDto)  {
return this.employeeService.addEmployeeDetails(employee);
}

@ResolveField(() => Project)
project(@Parent() employee : Employee) {
return this.employeeService.getEmployeeWithProjectById(employee.projectId);
}

@Query(() => Employee, {name : 'GetEmployeeById'})
getEmployeeById (@Args('id') id :string) : Promise<Employee> {
    return this.employeeService.getEmployeeById(id);
}
}
