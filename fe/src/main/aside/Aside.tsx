import style from "./Aside.module.scss";
import Group from "./component/Group";

export default function Aside() {
    return (
        <div className={style.aside}>
            <ol className={style.groups}>
                <Group />
                <Group />
                <Group />
            </ol>
        </div>
    );
}
