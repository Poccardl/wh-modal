import React, { useState } from 'react'
import './modal.css'
import close from './times-solid.svg'

function WhModal(props) {

    const [isModal, setIsModal] = useState("vh_modal")

    const closeModal = () => {
        setIsModal("hide_modal")
    }

    return (
        <>
        <div className={isModal} style={props.modalStyle}>
            {props.content ? <p>{props.content}</p> : <p>Add cotent option</p>}
            <span className="close_btn">
                <img onClick={closeModal} src={close} alt="" />
            </span>
        </div>
        </>
    )
}

export default WhModal