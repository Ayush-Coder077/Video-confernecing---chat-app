"use client";

import Contact from "../../Components/chatcomponents/Contact";

const messages = [
	{
		sender: "Ana",
		time: "09:42",
		text: "I pushed the updated screens. The mobile version now stacks much cleaner.",
		me: false,
	},
	{
		sender: "You",
		time: "09:44",
		text: "Looks good. We should keep the header compact and make the composer sticky.",
		me: true,
	},
	{
		sender: "Ana",
		time: "09:45",
		text: "Agreed. I also tightened the spacing on the message cards for smaller devices.",
		me: false,
	},
	{
		sender: "You",
		time: "09:47",
		text: "Perfect. I’ll add the responsive nav and test the layout on phone sizes next.",
		me: true,
	},
];

const participants = ["Ana Kim", "Jordan Lee", "Lina Park", "Tom Smith"];

export default function ChatPage() {
	return (
		<main className="page">
			<section className="chat-shell">
				<Contact />

				<section className="conversation-panel">
					<header className="conversation-header">
						<div>
							<p className="eyebrow">Team thread</p>
							<h1>Design Review</h1>
							<p className="status">4 people online • synced to the meeting room</p>
						</div>

						<div className="header-actions">
							<button type="button">Call</button>
							<button type="button">Files</button>
							<button type="button">More</button>
						</div>
					</header>

					<div className="message-scroll">
						<div className="message-stack">
							{messages.map((message) => (
								<article
									key={`${message.sender}-${message.time}`}
									className={`message ${message.me ? "me" : "them"}`}
								>
									<div className="message-meta">
										<strong>{message.sender}</strong>
										<span>{message.time}</span>
									</div>
									<p>{message.text}</p>
								</article>
							))}
						</div>
					</div>

					<form className="composer">
						<div className="composer-toolbar">
							<button type="button">+</button>
							<button type="button">GIF</button>
							<button type="button">@</button>
						</div>

						<label className="composer-input">
							<span className="sr-only">Message</span>
							<textarea placeholder="Write a message..." rows={2} />
						</label>

						<button type="submit" className="send-button">
							Send
						</button>
					</form>
				</section>

				<aside className="details-panel">
					<section className="info-card stats-card">
						<p className="eyebrow">Conversation</p>
						<h3>Live status</h3>
						<div className="stats-grid">
							<div>
								<strong>16</strong>
								<span>Messages today</span>
							</div>
							<div>
								<strong>4</strong>
								<span>Participants</span>
							</div>
							<div>
								<strong>2m</strong>
								<span>Avg reply time</span>
							</div>
						</div>
					</section>

					<section className="info-card">
						<p className="eyebrow">Participants</p>
						<h3>People in the room</h3>
						<ul className="participants-list">
							{participants.map((participant) => (
								<li key={participant}>
									<span className="dot" />
									{participant}
								</li>
							))}
						</ul>
					</section>

					<section className="info-card accent-card">
						<p className="eyebrow">Quick actions</p>
						<h3>Move the conversation forward</h3>
						<p>
							Jump into the video room, open shared files, or share the chat
							thread with your team.
						</p>
						<div className="quick-actions">
							<a href="/meeting/demo-room">Join meeting</a>
							<button type="button">Share thread</button>
						</div>
					</section>
				</aside>
			</section>
		</main>
	);
}
