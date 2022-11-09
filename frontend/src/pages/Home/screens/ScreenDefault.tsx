import ScreenPart from '../screens/ScreenPart'

import FirstPage from './FirstPage'

function ScreenDefault(props: any) {

    return (
        <>
            <ScreenPart pageColor={'linear-gradient(165.58deg, #C22B2B 15.63%, #290000 100%);'} className="page 1">
                <FirstPage />
            </ScreenPart>
            <ScreenPart pageColor={'linear-gradient(15.12deg, #C22B2B 10.63%, #290000 100.95%);'} className="page 2">
                2
            </ScreenPart>
            <ScreenPart cellphone pageColor={'linear-gradient(179.91deg, #C22B2B 10.19%, #290000 99.84%);'} className="page 3">
                3
            </ScreenPart>
        </>
    )
}

export default ScreenDefault