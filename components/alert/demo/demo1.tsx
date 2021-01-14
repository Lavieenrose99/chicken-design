import React from 'react';
import Alert from 'chicken-design/lib/alert';
import 'chicken-design/lib/alert/style';

type TextC = {
    text: string
}
 
const WarningAlert: React.FC<TextC> = (props)=>{
 return <Alert kind="warning">{props.text}</Alert>
}

export default WarningAlert;