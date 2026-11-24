import './style.css';
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/my-btn.tsx
const MyBtn = ({ type }) => {
	const [count, setCount] = useState(0);
	return /* @__PURE__ */ jsxs("button", {
		className: "my-btn",
		onClick: () => setCount(count + 1),
		children: [
			"我的按钮",
			/* @__PURE__ */ jsx("br", {}),
			" 类型: ",
			type,
			/* @__PURE__ */ jsx("br", {}),
			" 计数: ",
			count
		]
	});
};
export { MyBtn };
