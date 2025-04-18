import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Cast.module.css';
import { fetchMovieCredits } from '../../api/movies';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import CastCard from '../CastCard/CastCard';
import NoFoundMessage from '../NoFoundMessage/NoFoundMessage';

const Cast = () => {
	const { movieId } = useParams();
	const [cast, setCast] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const handleMovieCredits = async () => {
			if (!movieId) return;

			setIsLoading(true);
			setIsError(false);

			try {
				const { cast } = await fetchMovieCredits(movieId);
				setCast(cast);
			} catch {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};
		handleMovieCredits();
	}, [movieId]);
	return (
		<ul className={styles.cardList}>
			{cast &&
				!isLoading &&
				cast.map(({ id, ...rest }) => {
					return (
						<li className={styles.cardItem} key={id}>
							<CastCard data={rest} />
						</li>
					);
				})}
			{cast && cast.length === 0 && (
				<NoFoundMessage
					text={'Unfortunately, there are no cast for this movie'}
				/>
			)}

			{isLoading && <Loader />}

			{isError && <ErrorMessage />}
		</ul>
	);
};

export default Cast;
