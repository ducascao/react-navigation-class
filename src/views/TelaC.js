import React from 'react'
import TextoCentral from '../components/TexteCentral'

export default props => {
    const r = props.route
    const numero = props.route 
        && r.params 
        && r.params.numero ? r.params.numero : 0
    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C - {numero}
        </TextoCentral>
    )
}