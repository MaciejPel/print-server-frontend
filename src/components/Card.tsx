/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react';

interface CardProps {
	media?: {
		id: string;
		fileName: string;
		fileExtension: string;
		mimetype: string;
		likeIds?: string[];
	} | null;
	body?: ReactNode;
	actions?: ReactNode;
}

const Card: React.FC<CardProps> = ({ media, body, actions }) => {
	return (
		<div className="card card-compact static bg-base-100 card-bordered mb-4 group">
			<div className="card-body w-full bg-base-300">
				{body} {actions && <div className="card-actions justify-end gap-0">{actions}</div>}
			</div>
		</div>
	);
};

export default Card;
