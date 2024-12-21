import React from 'react';
import ingredientstyles from '../styles/Ingredients.module.css';

export default function Ingredients(){
    return <>
    <div className={ingredientstyles.ingredientswrapper}>
        <div className={ingredientstyles.row}  style={{paddingTop:'100px', paddingBottom:'50px'}}>
            <div className={ingredientstyles.column}>
                <p className={ingredientstyles.subTitle}>Ingredients</p>
                <h3 className={ingredientstyles.title}>Better Ingredients</h3>
                <p className={ingredientstyles.description}>
                Only the best when you choose products offered on our platform.
                High-quality ingredients for high-quality products!
                </p>
            </div>
            <div className={ingredientstyles.column}>
                <div
                className={ingredientstyles.imageWrapper}
                style={{ backgroundImage: "url(/assets/h2-b1.jpg.webp)" }}
                >
                <div className={ingredientstyles.overlay}>
                    <h4 className={ingredientstyles.imageTitle}>Vitamin C</h4>
                    <p className={ingredientstyles.imageDesc}>
                    Vitamin C as ascorbic acid
                    </p>
                    <button className={ingredientstyles.viewMore}>See More</button>
                </div>
                </div>
            </div>
            <div className={ingredientstyles.column}>
                <div
                className={ingredientstyles.imageWrapper}
                style={{ backgroundImage: "url(/assets/bn2-2.jpg.webp)" }}
                >
                <div className={ingredientstyles.overlay}>
                    <h4 className={ingredientstyles.imageTitle}>Vitamin B3</h4>
                    <p className={ingredientstyles.imageDesc}>
                    Niacin for healthy gut and skin
                    </p>
                    <button className={ingredientstyles.viewMore}>See More</button>
                </div>
                </div>
            </div>
        </div>

        <div className={ingredientstyles.row} style={{paddingBottom:'100px'}}>

            <div className={ingredientstyles.column}>
                <div className={ingredientstyles.imageWrapper} style={{ backgroundImage: "url(/assets/bn2-3.jpg.webp)" }}>
                    <div className={ingredientstyles.overlay}>
                        <h4 className={ingredientstyles.imageTitle}>Magnesium</h4>
                        <p className={ingredientstyles.imageDesc}>
                        Boost energy and support <br/>muscle function
                        </p>
                        <button className={ingredientstyles.viewMore}>See More</button>
                    </div>
                </div>
            </div>

            <div className={ingredientstyles.column}>
                <div className={ingredientstyles.imageWrapper} style={{ backgroundImage: "url(/assets/bn2-4.jpg.webp)" }}>
                    <div className={ingredientstyles.overlay}>
                        <h4 className={ingredientstyles.imageTitle}>Hyaluronic Acid</h4>
                        <p className={ingredientstyles.imageDesc}>
                        For smooth, <br/> supple and soft skin!
                        </p>
                        <button className={ingredientstyles.viewMore}>See More</button>
                    </div>
                </div>
            </div>

            <div className={ingredientstyles.column}>
                <div className={ingredientstyles.imageWrapper} style={{ backgroundImage: "url(/assets/bn2-5.jpg.webp)" }}>
                    <div className={ingredientstyles.overlay}>
                        <h4 className={ingredientstyles.imageTitle}>Lactobacillus</h4>
                        <p className={ingredientstyles.imageDesc}>
                        Invigorate your gut <br/> microbiome
                        </p>
                        <button className={ingredientstyles.viewMore}>See More</button>
                    </div>
                </div>
            </div>

            
            
            <div className={`${ingredientstyles.column} ${ingredientstyles.mobhideCol}`} style={{flex: '1'}}>
                <div
                className={ingredientstyles.imageWrapper2}
                style={{ backgroundImage: "url(/assets/shape005.png)" }}
                >
                </div>
            </div>
        </div>

    </div>
    </>
}