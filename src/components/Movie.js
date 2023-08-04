 import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({id, coverImg, title, summary, genres}) {
	return <div className={styles.movie}>
	<img src={coverImg} alt={title} />
  <ul className={styles.no_dot}>
	{genres.map(g => <li key={g}>{g}</li>)}
  </ul>
  <h2>
	<Link to={`/movie/${id}`}>{title}</Link>
	</h2>
  <p>{summary.length > 245 ? `${summary.slice(0, 245)}...` : summary}</p>
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