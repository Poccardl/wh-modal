import React, { useState, useEffect } from 'react'
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export function WhModal(props) {

    const [isModal, setIsModal] = useState("false")

    useEffect(() => {
        if (props.isModal) {
            setIsModal(props.isModal)
        }
    }, [props.isModal])

    const closeModal = () => {
        setIsModal("false")
    }

    return (
        <>
        <div className={`vh_modal ${isModal}`} style={props.modalStyle}>
            {props.content ? <p>{props.content}</p> : <p>Add content text</p>}
            <span className="close_btn">
                <FontAwesomeIcon onClick={closeModal} icon={faTimes}/>
            </span>
        </div>
        </>
    )
}