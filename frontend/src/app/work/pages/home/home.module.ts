import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MainHomeComponent } from "./components/main";

@NgModule({
    declarations: [
        MainHomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        MainHomeComponent
    ]
})
export class AppHomeModule { }