import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MainHomeComponent } from "./components/main";

@NgModule({
    declarations: [
        MainHomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,

    ],
    exports: [
        MainHomeComponent
    ]
})
export class AppHomeModule { }