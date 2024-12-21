import React from 'react';
import blogstyles from '../styles/Blog.module.css';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyImage from '../components/LazyImage'; 
export default function Blog(){
    return <>
    <div className={blogstyles.blogsection}>
        <p>OUR BLOG</p>
        <h2>Latest news</h2>
        <div className={blogstyles.blogs}>
            <div className={blogstyles.blogsColumn}>
                <div className={`${blogstyles.imageWrapper} ${blogstyles.long}`}>
                <LazyImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 1" effect="blur" className={blogstyles.long} height="400px"  width="100%"/>
                    {/* <LazyLoadImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 1" className={blogstyles.long} effect="blur" height="auto"  width="100%" /> */}
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
                <div className={blogstyles.imageWrapper}>
                    <LazyImage src="/assets/blog2-450x580.jpg.png" alt="Blog post content on topic 2" effect="blur" className={blogstyles.short} height="250px"  width="100%"/>
                    {/* <LazyLoadImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 2" className={blogstyles.short} effect="blur" height="auto"  width="100%" /> */}
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
            </div>

            <div className={blogstyles.blogsColumn}>
                <div className={blogstyles.imageWrapper}>
                    <LazyImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 3" effect="blur" className={blogstyles.short} height="250px"  width="100%"/>
                    {/* <LazyLoadImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 3" className={blogstyles.short} effect="blur" height="auto"  width="100%" /> */}
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
                <div className={blogstyles.imageWrapper}>
                    <LazyImage src="/assets/blog2-450x580.jpg.png" alt="Blog post content on topic 2" effect="blur" className={blogstyles.long} height="400px"  width="100%"/>
                    {/* <LazyLoadImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 4" className={blogstyles.long} effect="blur" height="auto"  width="100%" /> */}
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
            </div>


            <div className={blogstyles.blogsColumn}>
                <div className={blogstyles.imageWrapper}>
                <LazyImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 5" effect="blur" className={blogstyles.long} height="400px"  width="100%"/>
                {/* <LazyLoadImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 5" className={blogstyles.long} effect="blur" height="auto"  width="100%" /> */}
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
                <div className={blogstyles.imageWrapper}>
                    <LazyImage src="/assets/blog2-450x580.jpg.png" alt="Blog post content on topic 6" effect="blur" className={blogstyles.short} height="250px"  width="100%"/>
                    {/* <LazyLoadImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 6" className={blogstyles.short} effect="blur" height="auto"  width="100%" /> */}
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
            </div>

            <div className={blogstyles.blogsColumn}>
                <div className={blogstyles.imageWrapper}>
                    <LazyImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 5" effect="blur" className={blogstyles.short} height="250px"  width="100%"/>
                    {/* <LazyLoadImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 7" className={blogstyles.short} effect="blur" height="auto"  width="100%" /> */}
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
                <div className={blogstyles.imageWrapper}>
                    <LazyImage src="/assets/blog2-450x580.jpg.png" alt="Blog post content on topic 2" effect="blur" className={blogstyles.long} height="400px"  width="100%"/>
                    {/* <LazyLoadImage src="/assets/blog1-450x580.jpg.png" alt="Blog post content on topic 8" className={blogstyles.long} effect="blur" height="auto"  width="100%" /> */}
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>Hac hendrerit mus nons semper <br/> suspendisse</div>
                </div>
            </div>
        </div>
    </div>

    </>
}