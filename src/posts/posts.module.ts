import { HttpModule, Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  imports: [HttpModule],
  providers: [PostsService]
})
export class PostsModule {}
