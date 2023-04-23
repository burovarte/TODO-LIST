import React from "react";

interface HeaderProps {
	countOfTodos: number;
}

export const Header: React.FC<HeaderProps> = ({ countOfTodos }) => {
	return <h1>Количество дел: {countOfTodos}</h1>;
};
