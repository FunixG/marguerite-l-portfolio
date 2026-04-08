import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProjectDto} from "../../dtos/projects/project-dto";
import ProjectsService from "../../services/projects/projects-service";
import ProjectsMediasService from "../../services/projects/projects-medias-service";
import {PageOption} from "../../lib/dtos/page-dto";
import {QueryBuilder, QueryParam} from "../../lib/query-builder";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false
})
export class HomeComponent implements OnInit {

  leftList: ProjectDto[] = []
  rightList: ProjectDto[] = []

  private readonly minCards: number = 2;
  private readonly fillerPalette = [
    '#e5af5a',
    '#2f4b3a',
    '#2c4dec'
  ];
  leftPlaceholders: { color: string }[] = [];
  rightPlaceholders: { color: string }[] = [];

  private page: number = 0
  hasMore: boolean = false

  constructor(private readonly projectService: ProjectsService,
              protected readonly mediasService: ProjectsMediasService,
              private readonly router: Router,
              private readonly cdRef: ChangeDetectorRef) {
  }

  openProject(project: ProjectDto): void {
    this.router.navigate(['/', project.path])
  }

  ngOnInit(): void {
    this.refreshPlaceholders()
    this.loadProjects()
  }

  nextPage(): void {
    if (!this.hasMore) {
      return
    }

    this.page++
    this.loadProjects()
  }

  private loadProjects(): void {
    const pageOption = new PageOption()
    pageOption.page = this.page
    pageOption.elemsPerPage = 5
    pageOption.sort = 'createdAt:desc'

    const query = new QueryBuilder()
    const publicQuery = new QueryParam()
    publicQuery.key = 'isVisible'
    publicQuery.type = QueryBuilder.isTrue
    publicQuery.value = 'true'
    query.addParam(publicQuery)

    this.projectService.find(pageOption, query).subscribe({
      next: (page) => {
        const projects: ProjectDto[] = page.content
        let isLeft: boolean = this.leftList.length <= this.rightList.length

        projects.forEach(project => {
          if (isLeft) {
            this.leftList.push(project)
          } else {
            this.rightList.push(project)
          }

          isLeft = !isLeft
        })

        this.hasMore = page.totalPages - 1 > this.page;
        this.cdRef.detectChanges()
        this.refreshPlaceholders()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  private refreshPlaceholders(): void {
    this.leftPlaceholders = [];
    this.rightPlaceholders = [];

    let leftMissing = Math.max(0, this.minCards - this.leftList.length);
    let rightMissing = Math.max(0, this.minCards - this.rightList.length);
    const totalMissing = leftMissing + rightMissing;

    let isLeft: boolean = false

    for (let i = 0; i < totalMissing; i++) {
      if (isLeft) {
        if (leftMissing > 0) {
          this.leftPlaceholders.push({ color: this.fillerPalette[i % this.fillerPalette.length] })
          leftMissing--
        }
      } else {
        if (rightMissing > 0) {
          this.rightPlaceholders.push({ color: this.fillerPalette[i % this.fillerPalette.length] })
          rightMissing--
        }
      }

      isLeft = !isLeft
    }
  }

}
