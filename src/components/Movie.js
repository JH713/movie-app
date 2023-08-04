 import PropTypes from "prop-types";
import {Link, useNavigate} from "react-router-dom";
import styles from "./Movie.module.css"


function Movie({id, coverImg, title, summary, genres, year}) {
	const navigate = useNavigate();
	const onClick = () => {
		navigate(`/movie/${id}`);
	};
	return <div className={styles.movie} onClick={onClick}>
	<img src={coverImg} alt={title} />
  <h2>
	<Link to={`/movie/${id}`} className={styles.no_underline}>{title}</Link>
	</h2>
	<div>{year}</div>
  <p className={styles.summary}>{summary.length > 245 ? `${summary.slice(0, 245)}...` : summary}</p>
  <ul className={styles.genres}>
	{genres.map(g => <li className={styles.genre} key={g}>{g}</li>)}
  </ul>
</div>;
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;