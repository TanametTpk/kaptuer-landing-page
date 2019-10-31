import React, {useState , useRef} from 'react'
import { Overlay , OverlayTrigger , Popover  } from 'react-bootstrap'

const Timer = () => (
    <Popover id="popover-contained">
        <Popover.Title as="h3">Popover bottom</Popover.Title>
        <Popover.Content>
            <strong>Holy guacamole!</strong> Check this info.
        </Popover.Content>
    </Popover>
)

const CountdownOverlay = (props) => {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    console.log(props.children);
    

    return (
        <OverlayTrigger
            trigger="hover"
            show={true}
            placement="top"
            overlay={Timer}
        >
            {props.children}
        </OverlayTrigger>
    )
}

export default CountdownOverlay
