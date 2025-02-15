import React, { useRef, useState } from "react";
import { LevelLayout, LevelNumber, LevelSlider } from "./styles";

interface LevelComponentProps {
    levelFromServer: number;
    addToUpdate?: (level: number) => void;
    isClicked?: React.MutableRefObject<boolean>;
    updateLevels?: () => Promise<void>;
}

export const LevelComponent: React.FC<LevelComponentProps> = ({
                                                                  levelFromServer,
                                                                  addToUpdate,
                                                                  updateLevels,
                                                                  isClicked,
                                                              }) => {
    const [level, setLevel] = useState<number>(levelFromServer);
    const wordLayout = useRef<HTMLDivElement | null>(null);

    const getColorByLevel = (level: number): string => {
        const colors: Record<number, string> = {
            1: "#D83E3E",
            2: "#E0963F",
            3: "#2894C3",
            4: "#2AAB27",
        };
        return colors[level] || "#000";
    };

    const changeLevel = async (
        event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
        const x = "clientX" in event ? event.clientX : event.touches[0].clientX;
        const percent = (x - event.currentTarget.offsetLeft) / event.currentTarget.offsetWidth;
        const newLevel = percent < 0.25 ? 1 : percent < 0.5 ? 2 : percent < 0.75 ? 3 : 4;
        if (newLevel !== level) {
            setLevel(newLevel);
            addToUpdate?.(newLevel);
        }
    };

    return (
        <LevelLayout
            ref={wordLayout}
            onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => isClicked?.current && changeLevel(event)}
            onTouchMove={(event: React.TouchEvent<HTMLDivElement>) => isClicked?.current && changeLevel(event)}
            onClick={async (event: React.MouseEvent<HTMLDivElement>) => {
                await changeLevel(event);
                updateLevels?.();
            }}
        >
        {[1, 2, 3, 4].map((lvl) => (
                <React.Fragment key={lvl}>
                    {level === lvl && <LevelNumber color={getColorByLevel(lvl)}>{lvl}</LevelNumber>}
                    {lvl !== 4 && <LevelSlider />}
                </React.Fragment>
            ))}
        </LevelLayout>
    );
};
