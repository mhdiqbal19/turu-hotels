import './featured.css'

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin 1</h1>
                <h2>123 Properti</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin 2</h1>
                <h2>123 Properti</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin3</h1>
                <h2>123 Properti</h2>
            </div>
        </div>
    </div>
  )
}
