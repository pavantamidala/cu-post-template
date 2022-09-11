import {Composition, Still} from 'remotion';
import {MyComposition} from './Composition';
import {Post} from './Post';
import './style.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
			/>
			{/* <Still id="Post" component={Post} height={720} width={1280} /> */}
			<Still id="post" component={Post} height={760} width={600} />
		</>
	);
};
