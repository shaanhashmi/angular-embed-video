import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideoService } from './embed-video.service';



@NgModule({
  imports: [HttpClientModule],
	providers: [EmbedVideoService]
})
export class EmbedVideoModule { }
