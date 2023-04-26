import { Injectable,  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Project } from './entity/project.entity';
import { Repository } from 'typeorm'
import { CreateProjectDTO } from './dto/createProject-input';

@Injectable()
export class ProjectService {

constructor(@InjectRepository(Project) private projectRepo : Repository<Project> ) {}


getAllProject() : Promise<Project[]> {
    return this.projectRepo.find({
        relations : ["employees"]
    });
}

getProjectById(id :string) : Promise<Project>{
return this.projectRepo.findOne({
    where : {id},
    relations : ['employees']

})}


addProjectDetails(project : CreateProjectDTO) : Promise<Project> {
    let proj= this.projectRepo.create(project);
    return this.projectRepo.save(proj);
}

updateProjectDetails(id : string,project : CreateProjectDTO){

    let proj : Project = this.projectRepo.create(project);
    proj.id = id;

    return this.projectRepo.save(proj);
}
}
