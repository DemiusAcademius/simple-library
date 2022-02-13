import { Injectable } from '@angular/core'

// import { NzNotificationRef, NzNotificationService } from 'ng-zorro-antd/notification'
import { first } from 'rxjs/operators'

export type MessageSeverity = 'error' | 'info' | 'success' | 'warning'

@Injectable({ providedIn: 'root' })
export class NotificationService {
    //private static NOTIFICATION_PROVIDER: NzNotificationService

    // constructor(private notificationProvider: NzNotificationService) { }

    init(): void {
        // NotificationService.NOTIFICATION_PROVIDER = this.notificationProvider
    }

    // static notificationRef: NzNotificationRef | null = null

    static success(text: string) {
        NotificationService.notificate('success', text)
    }

    static error(text: string) {
        NotificationService.notificate('error', text)
    }

    static info(text: string) {
        NotificationService.notificate('info', text)
    }

    static warning(text: string) {
        NotificationService.notificate('warning', text)
    }

    static notificate(severity: MessageSeverity, text: string) {
        var title = 'Informație'

        if (severity === 'error') {
            title = 'Atenție'
        }

        /*
        if (NotificationService.notificationRef) {
            NotificationService.NOTIFICATION_PROVIDER.remove(NotificationService.notificationRef.messageId)
            NotificationService.notificationRef = null
        }

        const ref = NotificationService.NOTIFICATION_PROVIDER.create(severity, title, text, {
            nzDuration: 5000,
            nzStyle: {
                width: '500px'
            }
        })

        ref
            .onClose
            .pipe(first())
            .subscribe(() => {
                NotificationService.notificationRef = null
            })

        NotificationService.notificationRef = ref
        */
    }
}
