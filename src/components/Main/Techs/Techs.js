

import "./Techs.css"
import "../../Reuse/reuse.css"

export default function Techs() {
    return (
        <>
            <section className="techs">
                <div className="techs__container">
                    <h2 className="title-reuse">Технологии</h2>
                    <h2 className="techs__title">7 технологий</h2>
                    <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <div className="techs__block">
                        <p className="techs__blocks-text">HTML</p>
                        <p className="techs__blocks-text">CSS</p>
                        <p className="techs__blocks-text">JS</p>
                        <p className="techs__blocks-text">React</p>
                        <p className="techs__blocks-text">Git</p>
                        <p className="techs__blocks-text">Express.js</p>
                        <p className="techs__blocks-text">mongoDB</p>
                    </div>
                </div>

            </section>
        </>
    )
}