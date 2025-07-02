export default function Notification({ message, isRead }) {
    let classString = '';

    if (isRead === false) {
        classString = 'not-read';
    }

    return <div className={classString}>{message}</div>;
}
