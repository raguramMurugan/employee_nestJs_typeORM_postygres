import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Project } from './entity/project.entity';
import { ProjectService } from './project.service';
import { Param } from '@nestjs/common'
import { CreateProjectDTO } from './dto/createProject-input';
import { UpdateProjectDto } from './dto/updateProject-input';

@Resolver()
export class ProjectResolver {
    constructor(private projectService : ProjectService) {}

@Query(() => [Project],{name : "GetAllProjects"})
getListOfAllProject() {
    return this.projectService.getAllProject();
}

@Query(() => Project, {name : "GetProjectById"})
getProjectById(@Args('id') id :string) {
    return this.projectService.getProjectById(id);
}

@Mutation(() =>Project, {name : "AddProjectDetails"})
addProjectdetails (@Args('project') project : CreateProjectDTO) {
    return this.projectService.addProjectDetails(project);
}

@Mutation(() =>Project, {name: "UpdateProjectDetails"})
updateProjectDetails (@Args('project') project : UpdateProjectDto) {
return this.projectService.updateProjectDetails(project.id, project);
}
}
