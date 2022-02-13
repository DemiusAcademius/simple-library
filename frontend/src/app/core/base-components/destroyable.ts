import { Directive, OnDestroy, OnInit } from "@angular/core"
import { MonoTypeOperatorFunction, Subject } from "rxjs"
import { takeUntil } from "rxjs/operators"

@Directive()
export abstract class Destroyable implements OnInit, OnDestroy {
    private destroyed$ = new Subject();

    ngOnDestroy(): void {
        this.destroyed$.next(undefined)
        this.destroyed$.complete()
    }

    public abstract ngOnInit(): void

    public takeUntilDestroyed<T>(): MonoTypeOperatorFunction<T> {
        return takeUntil(this.destroyed$)
    }
}
