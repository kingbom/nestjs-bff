
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './posts.dto';
import { PostsMapper } from './posts.mapper';

@Controller('posts')
export class PostsController {

    public constructor(private readonly service: PostsService) { }


    @Get()
    public getRecentPosts(): Observable<PostDto[]> {
        return this.service.getRecentPosts().pipe(
            map(PostsMapper.mapRecentPosts),
        );
    }

    @Get(':id')
    public getPost(@Param('id') id: string): Observable<PostDto> {
        return this.service.getPost(id).pipe(
            map(PostsMapper.mapPost),
        );
    }

}
