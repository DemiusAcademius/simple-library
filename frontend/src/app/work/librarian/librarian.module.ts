import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MainLibrarianComponent } from "./components/main";

@NgModule({
    declarations: [
        MainLibrarianComponent
    ],
    imports: [
        CommonModule,
        FormsModule,

    ],
    exports: [
        MainLibrarianComponent
    ]
})
export class AppLibrarianModule { }