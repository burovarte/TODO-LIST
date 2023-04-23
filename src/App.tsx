import React, { useState } from "react";

import { Header } from "./components/Header/Header";

const listOfTodos = [
	{ id: 1, name: "помыть посуду", status: false },
	{ id: 2, name: "сходить в магазин", status: true },
];

export const App = () => {
	const [todos, seTodos] = useState(listOfTodos);
	return <Header countOfTodos={listOfTodos.length} />;
};
