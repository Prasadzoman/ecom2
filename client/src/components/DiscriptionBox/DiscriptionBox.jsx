import React from 'react'
import "./discriptionbox.css"
const DiscriptionBox = () => {
  return (
    <div className='discriptionbox'>
      <div className="discriptionbox-navigator">
        <div className="discriptionbox-nav-box">Description</div>
        <div className="discriptionbox-nav-box fade">Reviews (120)</div>
      </div>
      <div className='discriptionbox-discription'>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, cum aut? Ex doloribus voluptate architecto reiciendis nemo veritatis natus voluptatum quaerat rerum autem voluptatibus, alias velit corporis unde ipsa error eos dolores quia, sed consectetur.
        </p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur minima ipsum, tempora nisi exercitationem repudiandae blanditiis illum, nesciunt dolor aperiam saepe iure enim quos veritatis expedita ut necessitatibus corrupti fuga numquam deleniti animi!
        </p>
      </div>
    </div>
  )
}

export default DiscriptionBox
