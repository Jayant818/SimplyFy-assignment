import React from "react";

interface SideBarSectionProps {
	title?: string;
	children: React.ReactNode;
}

const SideBarSection = ({ title, children }: SideBarSectionProps) => {
	return (
		<div>
			{title && <h3 className="font-semibold  text-lg">{title}</h3>}
			{children}
		</div>
	);
};

export default SideBarSection;
