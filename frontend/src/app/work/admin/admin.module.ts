import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MainAdminComponent } from "./components/main";

@NgModule({
    declarations: [
        MainAdminComponent
    ],
    imports: [
        CommonModule,
        FormsModule,

    ],
    exports: [
        MainAdminComponent
    ]
})
export class AppAdminModule { }