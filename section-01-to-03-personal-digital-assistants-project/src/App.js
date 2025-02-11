import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body">
					<p className="title">Personal Digital Assistants</p>
				</div>
			</section>

			<div className="container">
				<section className="section">
					<div className="columns">
						<div className="column is-4">
							<ProfileCard
								title="Alexa"
								handle="@alexa99"
								image={AlexaImage}
								description="Alexa is a virtual assistant that controls smart devices, but it can also play music, answer questions, read the news, and more."
							/>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="Cortana"
								handle="@cortana32"
								image={CortanaImage}
								description="Cortana is a virtual assistant that can help you with tasks, answer questions, set reminders, and more."
							/>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="Siri"
								handle="@siri01"
								image={SiriImage}
								description="Siri is a virtual assistant that can send messages, set reminders, answer questions, and more."
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
