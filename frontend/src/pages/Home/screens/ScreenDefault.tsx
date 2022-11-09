import ScreenPart from '../screens/ScreenPart'

import FirstPage from './FirstPage'

function ScreenDefault(props: any) {

    return (
        <>
            <ScreenPart pageColor={'linear-gradient(165.58deg, #C22B2B 15.63%, #290000 100%);'} className="page 1">
                <FirstPage />
            </ScreenPart>
            <ScreenPart pageColor={'linear-gradient(180deg, #C12A2A 0%, #971F1F 51.04%, #C12A2A 100%);'} className="page 2">
                2
            </ScreenPart>
            <ScreenPart cellphone pageColor={'linear-gradient(180deg, #C12A2A 16.15%, #280000 100%);'} className="page 3">
                3
            </ScreenPart>
        </>
    )
}

export default ScreenDefault