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
		<div className="flex gap-4 flex-col">
			<div className="flex gap-4 items-center ">
				<Image src={ImgSrc} alt={title} width="40" height="40" />
				<h3 className="font-semibold  text-lg">{title}</h3>
				{toggle && <FaAngleDown onClick={() => setIsOpen(!isOpen)} />}
			</div>
			{isOpen && <div className="ml-4">{children}</div>}
		</div>
	);
};

export default Togglar;
