import PropTypes from 'prop-types'

import items from './components/Items'

const Movie = ({title, url, thumbnailUrl, rating}) => {

    return (
        <div style={{display: "block"}}>
            <img src={url} alt={title} style={{width: "100px"}}/>
            <p>{title}</p>
            <a href={thumbnailUrl}>Link</a>
            <p>{rating} / 5.0</p>
        </div>
    )
}

Movie.prototype = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string,
    rating: PropTypes.number
}

const RenderItems = () => items.map(item => <Movie key={item.id} {...item}/>)

function App() {

    return (
        <div>
            <RenderItems/>
        </div>
    );
}

export default App;
