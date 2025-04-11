import { DEFAULT_IMG_URL, DEFAULT_TITLE,  IMG_URL } from '../../constants/api';
import styles from './MovieCard.module.css';


const MovieCard = ({ data: { poster_path, title } }) => {
	return (
		<>
			<img
				className={styles.avatarImg}
				src={poster_path ? IMG_URL + poster_path : DEFAULT_IMG_URL}
				alt={'avatar ' + title || DEFAULT_TITLE}
				loading='lazy'
			/>
			<div className={styles.cardContent}>
				<hr className={styles.hr} />
				<p className={styles.cardTitle}>{title || DEFAULT_TITLE}</p>
			</div>
		</>
	);
};

export default MovieCard;
