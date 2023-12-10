import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DemoCarousel from './slider';

const ImageGrid = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [data, setData] = useState([]);
    const getImageData = () => {
        fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=16')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setData(json.photos)
            });
    }

    useEffect(() => {
        getImageData()
    }, []);
    const handleClose = () => {
        setIsOpen(false)
    };
    const selectedItemHandleClick = (id) => {
        setSelectedItem(id)
    }
    return (
        <>
            <div className="image-grid">
                {
                    data.map((item, index) => <div key={item.id}>
                        <img className="image-thumbnail" src={item.url} onClick={() => {
                            setIsOpen(true);
                            selectedItemHandleClick(index);
                        }}></img>
                    </div>)
                }
                <Dialog
                    onClose={handleClose}
                    open={isOpen}
                    sx={{
                        height: '700px',
                    }}>
                    <DemoCarousel id={selectedItem} gridItems={data}></DemoCarousel>
                </Dialog>


            </div>
        </>
    );
}

export default ImageGrid;

