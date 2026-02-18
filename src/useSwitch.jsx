import { useState } from "react";

export default function useSwitch() {
    const [isOn, setIsOn] = useState(false)

    const toggle = () => {
        if (!isOn) {
            setIsOn(true)
        } else {
            setIsOn(false)
        }
    }
    return [isOn, toggle]


}