import './searchitem.css'
import { Link } from 'react-router-dom'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className='siTitle'>Tower Street Apartments</h1>
            <span className='siDistance'>500m from center</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
            <span className='siFeatures'>Entire Studio * 1 bathroom * 21m 1 full bed</span>
            <span className='siCancelOp'>Free cancellation</span>
            <span className='siCencelOpSubtitle'>You can cancel later, so lock in this greet price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excelent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className='siPrice'>Rp0,-</span>
                <span className='sitaxOp'>Includes taxes and fees</span>
                <Link to={'/hotels/1'}>
                <button className='siCheckButton'>See availability</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem