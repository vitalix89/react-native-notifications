import { Commands } from "./commands/Commands";
import { NotificationChannel } from "./interfaces/NotificationChannel";

export class NotificationsAndroid {
  constructor(private readonly commands: Commands) {
    /*
    return new Proxy(this, {
      get(target, name) {
        if (Platform.OS === 'android') {
          return (target as any)[name];
        } else {
          return () => {};
        }
      }
    });
    */
  }

  /**
   * Refresh FCM token
   */
  public registerRemoteNotifications() {
    this.commands.refreshToken();
  }

  /**
   * setNotificationChannel
   */
  public setNotificationChannel(notificationChannel: NotificationChannel) {
    return this.commands.setNotificationChannel(notificationChannel);
  }
}
