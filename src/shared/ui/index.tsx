import { LevelComponent } from "../../features/level-selector";

export const LevelWidget = () => {
    return (
        <div>
            <h3>Select Level</h3>
            <LevelComponent levelFromServer={2} />
        </div>
    );
};
