"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface TogglarProps {
	ImgSrc: string;
	title: string;
	children?: React.ReactNode;
	toggle: boolean;
}

const Togglar = ({ ImgSrc, title, children, toggle }: TogglarProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex gap-4">
			<Image src={ImgSrc} alt={title} width="50" height="50" />
			<h3 className="font-semibold  text-lg">{title}</h3>
			{toggle && <FaAngleDown onClick={() => setIsOpen(!isOpen)} />}
			{isOpen && <div className="ml-4">{children}</div>}
		</div>
	);
};

export default Togglar;
