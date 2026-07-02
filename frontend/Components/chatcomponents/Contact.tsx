"use client";

import Link from "next/link";

type Conversation = {
	name: string;
	preview: string;
	time: string;
	unread?: number;
	active?: boolean;
};

const conversations: Conversation[] = [
	{
		name: "Design Review",
		preview: "Ana shared a new frame for the launch screen.",
		time: "2m",
		unread: 2,
		active: true,
	},
	{
		name: "Marketing Team",
		preview: "The campaign copy is ready for feedback.",
		time: "12m",
	},
	{
		name: "Sprint Planning",
		preview: "We moved the integration demo to Thursday.",
		time: "1h",
	},
	{
		name: "Client Call",
		preview: "Waiting on the final list of attendees.",
		time: "Yesterday",
	},
];

export default function Contact() {
	return (
		<aside className="panel">
			<div className="panel-head">
				<div>
					<p className="eyebrow">Workspace</p>
					<h2>Chat</h2>
				</div>
				<Link href="/meeting/demo-room" className="meeting-link">
					Open room
				</Link>
			</div>

			<div className="search-box" role="search">
				<span>⌕</span>
				<input
					type="search"
					placeholder="Search conversations"
					aria-label="Search conversations"
				/>
			</div>

			<div className="conversation-list">
				{conversations.map((conversation) => (
					<button
						key={conversation.name}
						type="button"
						className={`conversation-card ${conversation.active ? "active" : ""}`}
					>
						<div className="avatar">{conversation.name.slice(0, 2)}</div>
						<div className="conversation-copy">
							<div className="conversation-topline">
								<strong>{conversation.name}</strong>
								<span>{conversation.time}</span>
							</div>
							<p>{conversation.preview}</p>
						</div>
						{conversation.unread ? (
							<span className="unread-badge">{conversation.unread}</span>
						) : null}
					</button>
				))}
			</div>
		</aside>
	);
}