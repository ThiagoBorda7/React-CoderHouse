import { useNavigate } from "react-router-dom";
import "./MainContent.css";

export const MainContent = () => {

    const navigate = useNavigate();

    return (
        <div className='container_content'>
            <div className='container_cards'>
                <div className='cards'>
                    <div className='card_uno cover' onClick={() => navigate('/item/1')}>
                        <h2 className='title_main'>Botin Tanzania<br />Cognac</h2>
                        <div className="card_back image_one">
                        </div>
                    </div>
                </div>

                <div className='cards'>
                    <div className='card_dos cover' onClick={() => navigate('/item/2')}>
                        <h2 className='title_main'>Botin Nairobi<br />Negro</h2>
                        <div className="card_back image_two">
                        </div>
                    </div>
                </div>

                <div className='cards'>
                    <div className='card_tres cover' onClick={() => navigate('/item/5')}>
                        <h2 className='title_main'>Botin Hanzell<br />Arena</h2>
                        <div className="card_back image_three">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}