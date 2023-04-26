import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity';
import { Repository } from 'typeorm/repository/Repository';
import { EmployeeCreateDto } from './entity/dto/create-employee.input';
import { ProjectService } from 'src/project/project.service';
import { Project } from 'src/project/entity/project.entity';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private employeeRepo : Repository <Employee>,
    private projectService : ProjectService) {}
    
    async getListOfAllEmployee() : Promise<Employee[]> {
     return await this.employeeRepo.find(); 
    }

    async addEmployeeDetails(employee : EmployeeCreateDto) : Promise<Employee> {
        let emp = this.employeeRepo.create(employee);
        return this.employeeRepo.save(emp);
    }

    async getEmployeeWithProjectById(id : string) : Promise<Project> {
        return this.projectService.getProjectById(id);
    }

    async getEmployeeById(id :string) {
        return this.employeeRepo.findOne({where : {id}});
    }
}
