import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
function ExploreMenu({ category, setCategory }) {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Elevate your dining experience with our savory, delectable, and exquisite menu offerings, carefully handcrafted for your indulgence.It's all for us!</p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item, index) => {
                        return (
                            <div className="explore-menu-list-items" key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
                                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr />

        </div>
    )
}

export default ExploreMenu