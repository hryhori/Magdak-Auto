import s from '../../../styles/main.module.scss';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

function Carousel ({images, texts}){
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const PAGE_WIDTH = useRef();

    const handleLeftClick = () =>{
        setOffset((prevOffset)=>{
            const newOffset = prevOffset + PAGE_WIDTH.current.clientWidth;
             return Math.min(newOffset, 0)})
    }
    const handleRightClick = () =>{
        setOffset((prevOffset)=>{
            const newOffset = prevOffset - PAGE_WIDTH.current.clientWidth;
            const maxOffset = -(PAGE_WIDTH.current.clientWidth * (pages.length - 1));
             return Math.max(newOffset, maxOffset);
        })
    }

    useEffect(() =>{
        setPages(
            images.map((img, index)=>{return (
                <div key={index} className={s.carousel__window_image}>
                    <h3 className={s.carousel__window_text}>{texts[index]}</h3>
                  <img
                    src={img}
                    alt={index}
                    style={{
                        maxWidth: `${PAGE_WIDTH.current.clientWidth - 20}px`,
                        height: "100%",
                        objectFit: "contain",
                    }}
                  />
                </div>
            )})
        )
    },[texts])

    return (
        <div className={s.carousel}>
            <ArrowLeft size={25} color={'#99EFD0'} onClick={handleLeftClick} className={s.carousel__arrow}/>
            <div className={s.carousel__window}>
                <div className={s.carousel__window_images} ref={PAGE_WIDTH} style={
                    {transform: `translateX(${offset}px)`}}>
                    {pages}
                </div>
            </div>
            <ArrowRight size={25} color={'#99EFD0'} onClick={handleRightClick} className={s.carousel__arrow}/>
        </div>
    )
}

export default Carousel;