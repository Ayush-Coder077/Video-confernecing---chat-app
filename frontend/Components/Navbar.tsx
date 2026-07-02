"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
	{ href: "/", label: "Home" },
	{ href: "/Chat", label: "Chat" },
	{ href: "/Schedule", label: "Schedule" },
	{ href: "/Analytics", label: "Analytics" },
	{ href: "/login", label: "Login" },
];

function isActivePath(pathname: string, href: string) {
	if (href === "/") {
		return pathname === "/";
	}

	return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
				<Link href="/" className="flex items-center gap-3">
					<span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-400 text-lg font-bold text-white shadow-lg shadow-sky-500/20">
						V
					</span>
					<span className="flex flex-col leading-tight">
						<span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
							VideoMeet
						</span>
						<span className="text-base font-semibold text-slate-900">
							Conference + Chat
						</span>
					</span>
				</Link>

				<nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/90 p-1 shadow-sm shadow-slate-200/60 md:flex">
					{navigationLinks.map((link) => {
						const active = isActivePath(pathname, link.href);

						return (
							<Link
								key={link.href}
								href={link.href}
								className={`rounded-full px-4 py-2 text-sm font-medium transition ${
									active
										? "bg-slate-900 text-white shadow-md shadow-slate-300/40"
										: "text-slate-600 hover:bg-white hover:text-slate-900"
								}`}
							>
								{link.label}
							</Link>
						);
					})}
				</nav>

				<div className="flex items-center gap-3">
					<Link
						href="/meeting/demo-room"
						className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900 sm:inline-flex"
					>
						Join meeting
					</Link>
					<Link
						href="/meeting/demo-room"
						className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-300/50 transition hover:-translate-y-0.5 hover:bg-slate-800"
					>
						Start meeting
					</Link>
				</div>
			</div>
		</header>
	);
}
