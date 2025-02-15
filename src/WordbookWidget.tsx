import React from "react";

export interface WordbookWidgetProps {
    theme?: "light" | "dark";
}

export const WordbookWidget: React.FC<WordbookWidgetProps> = ({ theme = "light" }) => {
    return (
        <div style={{ background: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000" }}>
            <h3>Wordbook Widget</h3>
            <p>Add words to your vocabulary easily!</p>
        </div>
    );
};
