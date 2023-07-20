'use client'

import { useState } from "react"
import { HamburguerBar } from "../icons"
import ModalMenu from "./ModalMenu"


export default function HamburguerMenu() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }


    return (
        <>
            <div 
            onClick={handleClick}
            className={`
            flex justify-center items-center
            h-16 w-[82px]
            text-gray-700
            dark:text-gray-200
            cursor-pointer
            `}>
                {HamburguerBar}
            </div>
            {isOpen ? <ModalMenu /> : ''}
        </>
    )
}