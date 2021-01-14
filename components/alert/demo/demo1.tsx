import React from 'react';
import Alert from '../alert';
import '../style';


interface Text{
    text: string
}

const WarningAlert: React.FC<Text> = (props) => (
<Alert kind="warning" >{props.text}</Alert>
);




export default WarningAlert;