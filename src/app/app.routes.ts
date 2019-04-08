

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'post', component:PostComponent },
    { path: 'item', component: ItemComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' },

   
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
